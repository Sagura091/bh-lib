(ns bh-ui.molecule.grid-container
  (:require [cljs.core.match :refer-macros [match]])
  (:require [bh-ui.atom.layout.responsive-grid :as grid]
            [bh-ui.molecule.composite :as composite]
            [bh-ui.molecule.composite.util.digraph :as dig]
            [bh-ui.molecule.composite.util.signals :as sig]
            [bh-ui.molecule.composite.util.ui :as ui]
            [bh-ui.utils :as ui-utils]
            [bh-ui.utils.locals :as locals]
            [bh-ui.atom.re-com.configure-toggle :as ct]
            [loom.graph :as lg]
            [loom.alg :as lalg]
            [re-com.core :as rc]
            [re-frame.core :as re-frame]
            [reagent.core :as r]
            [taoensso.timbre :as log]))


(log/info "bh-ui.molecule.grid-container")


(defonce last-config (atom nil))
(defonce last-data (atom nil))
(defonce last-params (atom nil))
(defonce last-full-config (atom nil))
(defonce last-component-lookup (atom nil))


(defn- config
  "set up the local config keys, specifically we want the :mol/layout key, so we can
  track updates to the layout should the user drag/resize any of the internal
  components.

  the component-panel will subscribe to this 'local' using (locals/subscribe-local ...) and
  dispatch updates (via on-layout-update) using (locals/dispatch-local ...)
  "
  [full-config]
  {:blackboard {}                                           ;:defs {:source full-config
   ;       :dag    {:open-details ""}}
   :container  ""
   :layout     (:mol/grid-layout full-config)})


(defn- wrap-component
  "Takes details about what we want to display on the screen, and wrap it in a bit
  of Hiccup so it 'works'.

  Specifically we give the overall element:

  - widget-parent, keyed by 'id' so it can be found, possibly for testing(?),
  - grid-toolbar, which both displays a 'label' (if there is one) and provides a mouse target (via move-cursor)
  - widget-content, which both hold the actual 'component' and keeps any mouse events from escaping to the outside
         -> this means your component will get the mouse events.
  "

  [[id {:keys [component label]}]]

  ;(log/info "wrap-component" id "//" label "//" component)

  [:div.widget-parent {:key id}
   [:div.grid-toolbar.title-wrapper.move-cursor
    {:style {:height "1.5em"}}
    (or label "")]
   [:div.widget.widget-content
    {:on-mouse-down #(.stopPropagation %)}
    component]])


(defn- on-width-update
  "Called when the conatinig element gets wider. (Currently does nothing. Not sure what it
  *should* do...)
  ---

  - width : (number) new width of the container
  - margin : (vector) margin [left? right?]
  - cols : (number) number of columns
  - padding : (vector) padding [left? right?]
  "
  [width margin cols padding]

  ;(log/info "on-width-update" width "//" margin "//" cols "//" padding)

  ())


(defn- on-layout-change
  "Called after the user moves parts of the UI component around (did I mention that the user
  can rearrange the elements of the content?)

  - component-id : the components 'name' within the system, so we can update the re-frame/app-db
  - new-layout : the new arrangement of elements (a vector of hash-maps, one for each visible element)
  - all-layouts : (I think this is now OBE in the JS library... we don't use it anyway)
  "

  [component-id new-layout all-layouts]
  (let [new-layout*  (js->clj new-layout :keywordize-keys true)
        all-layouts* (js->clj all-layouts :keywordize-keys true)
        fst          (first new-layout*)]

    ;(log/info "on-layout-change" new-layout*
    ;  "//" all-layouts*
    ;  "//" (keys all-layouts*))

    (when (and
            (not (empty? new-layout*))
            (<= 1 (count new-layout*))
            (not= (:i fst) "null"))
      (let [cooked (map #(zipmap '(:i :x :y :w :h :static) %)
                     (map (juxt :i :x :y :w :h :static) new-layout*))]
        ;(log/info "on-layout-change (cooked)" cooked)
        (locals/dispatch-local component-id [:layout] cooked)))))


(defn- toggle-editable
  "Toggle the :static property on each element in the layout, so the user can rearrange things.

  - layout : the layout as it is currently"

  [layout]

  (map #(assoc % :static (-> % :static not)) layout))


; some atoms to assist in debugging at the repl...
;(def last-params (atom nil))
;(def last-component-lookup (atom nil))
;(def last-data (atom nil))


(defn- compute-containership [configuration]
  (->> configuration
    :mol/components
    keys
    set
    (mapcat (fn [node-id]
              (let [children (concat (get-in configuration [:mol/components node-id :atm/child])
                               (get-in configuration [:mol/components node-id :atm/children]))]
                {node-id (vec children)})))
    (filter (fn [[_ children]] (not-empty children)))
    (into {})))


(defn- compute-parents [configuration]
  (->> configuration
    (mapcat (fn [[parent children]]
              (map (fn [child]
                     {child parent}) children)))
    (into {})))


;(defn- compute-flow-nodes [parent-graph nodes]
;  (reduce (fn [layout node]
;            (let [parent (get parent-graph node)]
;              (ui/set-position layout (or parent :diagram) node)))
;    {:diagram {:children {}
;               :parent   nil
;               :size     {:width 0 :height 0}
;               :next     {:x ui/x-offset :y ui/y-offset}}}
;    nodes))
;
;
(defn- compute-flow-layout [parent-graph nodes]
  (reduce (fn [layout node]
            (let [parent (get parent-graph node)]
              (ui/set-position layout (or parent :diagram) node)))
    {:diagram {:children {}
               :parent   nil
               :size     {:width 0 :height 0}
               :next     {:x ui/x-offset :y ui/y-offset}}}
    nodes))


(defn- compute-node-sizes [flow-layout]
  (->> flow-layout
    (map (fn [[id {children :children :as v}]]
           (if children
             {id (assoc v :size (ui/compute-size (get-in flow-layout [id :children])))}
             {id v})))
    (into {})))


(defn- compute-node-cases [nodes]
  (->> nodes
    (map (fn [[k v :as m]]
           {k ((juxt :parent :children) v)}))
    (into {})
    (map (fn [[k [p c]]]
           {k [(cond
                 (= :diagram p) :diagram
                 (nil? p) nil
                 :else true)
               (cond
                 (= :diagram c) :diagram
                 (nil? c) nil
                 :else true)]}))
    (into {})
    (map (fn [[k v]]
           {k (match v
                [nil true] {:case 0}
                [:diagram nil] {:case 1}
                [:diagram true] {:case 2}
                [true true] {:case 3}
                :else {:case 4})}))))


(defn- add-cases-to-nodes [layout nodes]
  (reduce (fn [config node]
            (let [[[id {case :case}]] (seq node)]
              (update config id assoc :case case)))
    layout
    nodes))


(defn- component-panel
  "Takes a 'configuration' in Mol-DSL and compiles it into a visual representation encoded in
  Hiccup for just the _content_ part of the widget (there are some additional hiccup elements that
  get wrapped around to standardize the visual style and functionality).

  - configuration : *r/atom* around a (hash-map) the description of the complete UI, encoded in [Mol-DSL](docs/mol-dsl.md)
  - component-id : (keyword/string) unique identifier of this UI 'widget' within the current run=time
        used to isolate this widget's data from any other widgets within the re-frame/app-db
  - resizable : (boolean) is this widget resizable (the user can change its size, or not?
  "

  [& {:keys [configuration component-id resizable] :as params}]

  ;(reset! last-params params)
  ;(log/info "component-panel (params)" params)

  ;(log/info "component-panel" component-id
  ;  "//" (keys configuration)
  ;  "// dummy-layout" dummy-layout
  ;  "// :components" (:components configuration)
  ;  "// process-components" (into {}
  ;                            (sig/process-components
  ;                              configuration :ui/component
  ;                              @(re-frame/subscribe [:meta-data-registry]) component-id)))

  (let [layout           (locals/subscribe-local component-id [:layout])
        component-lookup (into {}
                           (sig/process-components-stateful
                             @configuration #{:ui/component :ui/container}
                             @(re-frame/subscribe [:meta-data-registry]) component-id))

        ; build UI components (with subscription/event signals against the blackboard or remotes)
        visual-layout    (->> @configuration
                           :mol/grid-layout
                           (map (fn [{:keys [i]}] i)))
        composed-ui      (map wrap-component (select-keys component-lookup visual-layout))
        open?            (r/atom false)]

    (reset! last-component-lookup {:component-id component-id
                                   :config       @configuration
                                   :lookup       component-lookup
                                   :viz          visual-layout
                                   :keys         (select-keys component-lookup visual-layout)
                                   :wrappers     composed-ui})

    (fn []
      ;(log/info "component-panel INNER" component-id
      ;  "//" @layout)
      ;  "//" composed-ui)

      ; 5. return the composed component layout!
      [rc/v-box :src (rc/at)
       :gap "2px"
       :children [(when resizable [ct/configure-toggle open? #(locals/apply-local component-id
                                                                [:layout] toggle-editable)])
                  [:div.grid-container.h-w-100pc
                   [grid/grid
                    :id component-id
                    :class "layout"
                    :children composed-ui
                    :layout @layout
                    :cols 20
                    :width 1200
                    :rowHeight 25
                    :layoutFn #(on-layout-change component-id %1 %2)
                    :widthFn #(on-width-update %1 %2 %3 %4)]]]])))


(defn component
  "This is built on [react-grid-layout](https://github.com/react-grid-layout/react-grid-layout).

  This function takes a hash-map containing the following properties:

  - :data : (hash-map) the Mol_DSL description of the component (widget) to display
  - :component-id : (keyword/string) the unique identifier for this ui component/widget, used to isolate
                      this component's data from all others
  - :container-id : (keyword/string) the unique name for the parent, or containing, UI component, helps
                      to isolate this component's data from all others
  - resizable : (boolean) can the user resize or rearrange the elements of this component
  - tools : (boolean) should the overall widget provide editing tools for the Mol-DSL itself.

  "

  [& {:keys [data component-id container-id resizable tools] :as params}]

  (reset! last-config data)

  ;(log/info "component" data "//" component-id "//" container-id)
  ;(log/info "component (params)" params)

  (let [id                  (r/atom nil)
        graph               (apply lg/digraph (ui/compute-edges @data))
        comp-or-dag?        (r/atom :component)
        nodes               (-> @data :mol/components keys set)
        edges               (into [] (lg/edges graph))

        ; new stuff to support the :mol/flow-components and :mol/flow-edges parts of the Mol-DSL
        ; (see bh-ui.molecule.composite.util.ui)
        containership-graph (compute-containership @data)
        parent-graph        (compute-parents containership-graph)
        ;flow-nodes          (compute-flow-nodes parent-graph nodes)
        prep-config         (swap! data assoc
                              :denorm (bh-ui.molecule.composite.util.digraph/denorm-components
                                        graph (:mol/links @data) (loom.graph/nodes graph))
                              :nodes nodes
                              :edges edges
                              :graph graph
                              :containership-graph containership-graph
                              :parent-graph parent-graph
                              :container container-id)
        flow-layout         (compute-flow-layout parent-graph nodes)
        sized-nodes         (compute-node-sizes flow-layout)
        node-cases          (compute-node-cases sized-nodes)
        case-nodes          (add-cases-to-nodes sized-nodes node-cases)
        case-config         (swap! data assoc               ; wrap in a r/atom so the dag-panel can make updates
                              :flow-nodes case-nodes)]

    (ui/make-flow data)                                     ; update the r/atom with the nodes and edges for the flow-diagram

    (reset! last-full-config data)

    (fn []
      (when (nil? @id)
        (reset! id component-id)
        (ui-utils/init-container-locals @id (config @data))
        ;(log/info "component (b)" @id "//" container-id)
        (ui-utils/dispatch-local @id [:container] container-id)
        (ui/prep-environment @data @id @(re-frame/subscribe [:meta-data-registry])))

      (let [buttons [{:id :component :tooltip "Widget view" :label [:i {:class "zmdi zmdi-view-compact"}]}
                     {:id :dag :tooltip "Event model view" :label [:i {:class "zmdi zmdi-share"}]}
                     {:id :definition :tooltip "Text view" :label [:i {:class "zmdi zmdi-format-subject"}]}]]

        [:div.box.widget-content-container
         [rc/v-box :src (rc/at)
          ;:justify :start
          :width "100%"
          :height "100%"
          :gap "5px"
          :children [(when tools [rc/h-box :src (rc/at)
                                  :justify :end
                                  :children [[rc/horizontal-bar-tabs
                                              :model comp-or-dag?
                                              :tabs buttons
                                              :on-change #(reset! comp-or-dag? %)]]])
                     (condp = @comp-or-dag?
                       :dag [composite/dag-panel
                             :configuration data
                             :component-id @id
                             :container-id container-id]
                       :component [component-panel
                                   :configuration data
                                   :component-id @id
                                   :container-id container-id
                                   :resizable resizable]
                       :definition [composite/definition-panel
                                    :configuration data]
                       :default [rc/alert-box :src (rc/at)
                                 :alert-type :warning
                                 :body "There is a problem with this component."])]]]))))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
; region ; rich comments

; need an r/atom around the config data so the use can edit things using the flow-diagram
(comment
  (:config @last-component-lookup)
  (keys (:config @last-component-lookup))
  (->> @last-component-lookup :config :mol/flow-nodes)
  (:viz @last-component-lookup)
  (:lookup @last-component-lookup)

  (let [component-id     (:component-id @last-component-lookup)
        configuration    (r/atom (:config @last-component-lookup))

        layout           (locals/subscribe-local component-id [:layout])
        component-lookup (into {}
                           (sig/process-components-stateful
                             @configuration #{:ui/component :ui/container}
                             @(re-frame/subscribe [:meta-data-registry]) component-id))

        ; build UI components (with subscription/event signals against the blackboard or remotes)
        visual-layout    (->> @configuration
                           :mol/grid-layout
                           (map (fn [{:keys [i]}] i)))
        composed-ui      (map wrap-component (select-keys component-lookup
                                               visual-layout))]

    {:component-id  component-id
     :layout        layout
     ;:component-lookup component-lookup
     :visual-layout visual-layout
     :composed-ui   composed-ui})


  (type last-full-config)
  (type @last-full-config)

  (->> @@last-full-config
    keys)

  (->> @@last-full-config
    :mol/flow-nodes)
  (->> @@last-full-config
    :mol/flow-nodes
    (map :id))

  (->> @@last-full-config
    :mol/components
    keys)

  (->> @@last-full-config
    :mol/flow-edges)
  (->> @@last-full-config
    :mol/flow-edges
    (map (juxt :id :source :target)))
  (->> @@last-full-config
    :mol/links)


  ())


(comment
  (do
    (def container-id "repl")
    (def data last-config)
    (def id (r/atom nil))
    (def configuration @data)
    (def graph (apply lg/digraph (ui/compute-edges configuration)))
    (def comp-or-dag? (r/atom :component))
    (def nodes (-> configuration :mol/components keys set))
    (def edges (into [] (lg/edges graph)))

    (def containership-graph (compute-containership configuration))
    (def parent-graph (compute-parents containership-graph))
    ;(def flow-nodes (compute-flow-nodes parent-graph nodes))

    (def prep-config (assoc configuration
                       :denorm (bh-ui.molecule.composite.util.digraph/denorm-components
                                 graph (:mol/links configuration) (loom.graph/nodes graph))
                       :nodes nodes
                       :edges edges
                       :graph graph
                       :containership-graph containership-graph
                       :parent-graph parent-graph
                       :container container-id))

    (def flow-layout (compute-flow-layout parent-graph nodes))
    ;(def sized-nodes (compute-node-sizes flow-layout flow-nodes))
    (def node-cases (compute-node-cases sized-nodes))
    (def case-nodes (add-cases-to-nodes sized-nodes node-cases))

    (def full-config (assoc prep-config
                       :flow-nodes case-nodes)))


  ; compute-node-sized
  (map (fn [[id {children :children :as v}]]
         (if children
           {id (assoc v :size (ui/compute-size (get-in flow-layout [id :children])))}
           {id v}))
    flow-nodes)
  (->> flow-nodes
    (map (fn [[id {children :children :as v}]]
           (if children
             {id (assoc v :size (ui/compute-size (get-in flow-layout [id :children])))}
             {id v})))
    (into {}))


  ;(:size (ui/compute-size
  ;         (get-in flow-layout [id :children])))

  (map (fn [x] {:x x :fx (first x) :v (second x)})
    [{:key "val"}
     {:key "val-2"}])

  (into {} [["key" {:value 1}]])

  ())


; make sure the new DSL produces nodes and edges
(comment
  (do
    (def id (r/atom nil))
    (def configuration @last-data)
    (def graph (apply lg/digraph (ui/compute-edges configuration)))
    (def comp-or-dag? (r/atom :component))
    (def partial-config (assoc configuration
                          :denorm (dig/denorm-components graph (:mol/links configuration) (lg/nodes graph))
                          :nodes (get-in configuration [:mol/components keys set])
                          :edges (into [] (lg/edges graph))))
    (def full-config (assoc partial-config :graph graph)))

  (get-in configuration [:mol/components keys set])
  (-> configuration :mol/components keys set)


  ())


; we should only call wrap-components on the atoms in the :mol/grid-layout
(comment
  @last-params

  (do
    (def component-id (:component-id @last-params))
    (def container-id (:container-id @last-params))
    (def id (r/atom component-id))
    (def configuration (:configuration @last-params))
    (def layout (bh-ui.utils.locals/subscribe-local component-id [:layout]))
    (def component-lookup (into {}
                            (sig/process-components
                              configuration :ui/component
                              @(re-frame/subscribe [:meta-data-registry]) component-id)))
    (def composed-ui (map wrap-component component-lookup))

    (def graph (apply lg/digraph (ui/compute-edges configuration)))
    (def comp-or-dag? (r/atom :component))
    (def partial-config (assoc configuration
                          :denorm (dig/denorm-components graph (:mol/links configuration) (lg/nodes graph))
                          :nodes (-> configuration :mol/components keys set)
                          :edges (into [] (lg/edges graph))))
    (def full-config (assoc partial-config
                       :graph graph
                       :container container-id))


    (def visual-layout
      (->> configuration
        :mol/grid-layout
        (map (fn [{:keys [i]}] i)))))

  (select-keys component-lookup visual-layout)




  ())


; work out the toggle for editing
(comment
  (def component-id :widget-grid-demo.grid-widget)


  (locals/subscribe-local component-id [:layout])
  (locals/apply-local component-id [:layout] toggle-editable)


  (def orig-value @(re-frame/subscribe [:widget-grid-demo.grid-widget.layout]))
  (toggle-editable orig-value)


  ())


; built the edit controls (buttons)
(comment
  (def component-id :widget-grid-demo.grid-widget)
  (def layout (r/atom [{:id 1 :static true}]))
  (def make-editable-style {:md-icon-name "zmdi-wrench"
                            :tooltip      "configure this chart"})
  (def save-editable-style {:md-icon-name "zmdi-lock-outline"
                            :tooltip      "Save the configuration"})

  (reduce conj [rc/md-icon-button] (flatten (seq {:class "button"})))

  (reduce conj [rc/md-icon-button]
    (flatten
      (seq
        (merge {:class    "button"
                :on-click #(locals/apply-local component-id [:layout] toggle-editable)}
          (if (-> @layout first :static) make-editable-style save-editable-style)))))

  ())

; figure out how to use Loom to organize the atoms, so we can build and wire together the nodes
(comment
  ; either do 2 passes on the data:
  ;   1) build all the "children" atoms,
  ;   2) attach the children to the "parent" atoms

  ;  OR
  ;   organize the atoms into their own tree, where children at the leaves and
  ;   the parents are the roots or branches

  ; stuartsierra.component uses a topology sort to find a good ordering, but assumes STATEFUL
  ; component initialization; the current process does NOT

  ; the atoms are "nodes", any :mol/children vectors are edges

  (-> (lg/digraph)
    (lg/add-nodes "line" "bar" "v-scroll")
    (lg/add-edges ["v-scroll" "line"] ["v-scroll" "bar"])
    (lalg/topsort)                                          ; roots to leaves
    reverse)                                                ; leaves to roots


  ; what if we have 2 "roots"
  (-> (lg/digraph)
    (lg/add-nodes "line" "bar" "v-scroll-1" "v-scroll-2" "table-1" "table-2")
    (lg/add-edges
      ["v-scroll-1" "line"] ["v-scroll-1" "bar"]
      ["v-scroll-2" "table-1"] ["v-scroll-2" "table-2"])
    (lalg/topsort)
    reverse)

  ; what if we have a "parent" inside a "parent"
  (-> (lg/digraph)
    (lg/add-nodes "line" "bar" "v-scroll-1" "v-scroll-2")
    (lg/add-edges
      ["v-scroll-1" "line"] ["v-scroll-1" "bar"]
      ["v-scroll-2" "v-scroll-1"])
    (lalg/topsort)
    reverse)

  ; what if we have no edges?
  (-> (lg/digraph)
    (lg/add-nodes "line" "bar" "area" "globe" "table-1" "table-2")
    (lalg/topsort)
    reverse)


  ; 2) build the graph from "real" MolDSL
  (do
    (def atms {"v-scroll" {:atm/children ["line" "bar"]}
               "bar"      {}
               "line"     {}})
    (def nodes (keys atms))
    (def edges (mapcat (fn [[name {:keys [atm/children]}]]
                         (when children
                           (map (fn [c]
                                  [name c])
                             children)))
                 atms)))

  (-> (lg/digraph)
    (#(apply lg/add-nodes % nodes))
    (#(apply lg/add-edges % edges))
    (lalg/topsort)
    reverse)


  ; okay, so we could just process these atoms in this new ordering and the independent
  ; atoms will be initialized before the dependent atoms, but the question remains:
  ;
  ; where do the parents find the initialized children?
  ;
  ; we currently map (sig/component->ui ...) over all the :ui/component(s), and map is
  ; NOT stateful, i.e., later elements don't have access to the results of earlier elements


  ; two options:
  ;   1) make the initialization function (sig/component->ui) stateful
  ;
  ;   2) back to doing 2 passes; first for the children, then for the parents



  ())


; 1) make the initialization function (sig/component->ui) stateful
(comment
  (do
    (def configuration {:mol/components {"v-scroll" {:atm/role     :ui/component :atm/kind :bhui/v-scroll-pane
                                                     :atm/children ["line" "bar"]}
                                         "data"     {:atm/role :source/local :atm/kind :source/local}
                                         "line"     {:atm/role :ui/component :atm/kind :rechart/line}
                                         "bar"      {:atm/role :ui/component :atm/kind :rechart/bar}}})
    (def node-type :ui/component)
    (def registry @(re-frame/subscribe [:meta-data-registry]))
    (def container-id "test-mol-dsl")
    (def atm-set (atom {})))

  (->> configuration
    :mol/components
    (filter (fn [[_ meta-data]]
              (= node-type (:atm/role meta-data)))))


  ; from sig/process-components
  (->> configuration
    :mol/components
    (filter (fn [[_ meta-data]]
              (= node-type (:atm/role meta-data))))
    (map (fn [[node meta-data]]
           (bh-ui.molecule.composite.util.signals/component->ui
             {:node          node
              :type          (:atm/role meta-data)
              :meta-data     meta-data
              :configuration configuration
              :registry      registry
              :component-id  (ui-utils/path->keyword container-id node)
              :container-id  container-id}))))



  ; this puts each "ui atom" into a "registry atom" (stateful) so we can pass the
  ; registry into the component->ui call
  (let []
    (->> configuration
      :mol/components
      (filter (fn [[_ meta-data]]
                (= node-type (:atm/role meta-data))))
      (map (fn [[node meta-data]]
             (let [atm (bh-ui.molecule.composite.util.signals/component->ui
                         {:node          node
                          :atm-set       atm-set
                          :type          (:atm/role meta-data)
                          :meta-data     meta-data
                          :configuration configuration
                          :registry      registry
                          :component-id  (ui-utils/path->keyword container-id node)
                          :container-id  container-id})]
               (swap! atm-set conj atm)
               atm)))))


  ; now, to get the "ui atoms" into the topology order to feed into the map
  (do
    (def node-type :ui/component)
    (def configuration {:mol/components {"v-scroll" {:atm/role     :ui/component :atm/kind :bhui/v-scroll-pane
                                                     :atm/children ["line" "bar"]}
                                         "data"     {:atm/role :source/local :atm/kind :source/local}
                                         "line"     {:atm/role :ui/component :atm/kind :rechart/line}
                                         "bar"      {:atm/role :ui/component :atm/kind :rechart/bar}}})
    (def cfg (->> configuration
               :mol/components
               (filter (fn [[_ meta-data]]
                         (= node-type (:atm/role meta-data))))
               (into {})))
    (def nodes (keys cfg))
    (def edges (mapcat (fn [[name {:keys [atm/children]}]]
                         (when children
                           (map (fn [c]
                                  [name c])
                             children)))
                 cfg))
    (def g (-> (lg/digraph)
             (#(apply lg/add-nodes % (keys cfg)))
             (#(apply lg/add-edges % edges))
             (lalg/topsort)
             reverse))

    (def sorted-config (map (fn [id]
                              (-> configuration
                                :mol/components
                                (get id)
                                ((fn [x] [id x]))))
                         g)))


  (map (fn [[node meta-data]] {:n node :md meta-data}) sorted-config)

  ; and now we can feed this into component->ui
  (map (fn [[node meta-data]]
         (let [atm (bh-ui.molecule.composite.util.signals/component->ui
                     {:node          node
                      :atm-set       atm-set
                      :type          (:atm/role meta-data)
                      :meta-data     meta-data
                      :configuration configuration
                      :registry      registry
                      :component-id  (ui-utils/path->keyword container-id node)
                      :container-id  container-id})]
           (swap! atm-set conj atm)))
    sorted-config)



  ; chasing the wrong assumption: error on {"data" :source/local}
  (do
    (def node "v-scroll")
    (def node-type :ui/component)
    (def ui-type (get-in configuration [:mol/components node :atm/kind]))
    (def bh-ui (if (keyword? ui-type)
                 (->> registry ui-type :component)
                 ui-type))
    (def children? (->> registry ui-type :children))
    (def children (-> configuration :mol/components (get node) :atm/children)))

  {node
   ; TODO: can this be converted to (apply concat...)? (see https://clojuredesign.club/episode/080-apply-as-needed/)
   (if (= children? :enumerated)
     ; TODO: the children are inserted into the hiccup separate form the params
     (into [(or bh-ui :dummy) {:style {:height "500px" :width "100%"}}]
       (map (fn [c] [rc/box
                     :height "300px"
                     :width "300px"
                     :child c]) children))

     ; TODO: the children are part of the params
     [(or bh-ui :dummy)])}


  ; we need to filter to only :ui/components prior to building the graph of aui-atoms
  (let [id "v-scroll"]
    (as-> configuration a
      (:mol/components a)
      (filter (fn [[_ meta-data]]
                (= node-type (:atm/role meta-data))) a)
      (into {} a)
      (get a id)
      ((fn [x] [id x]) a)))


  (do
    (def configuration {:mol/components {"v-scroll" {:atm/role     :ui/component :atm/kind :bhui/v-scroll-pane
                                                     :atm/children ["line" "bar"]}
                                         "data"     {:atm/role :source/local :atm/kind :source/local}
                                         "line"     {:atm/role :ui/component :atm/kind :rechart/line}
                                         "bar"      {:atm/role :ui/component :atm/kind :rechart/bar}}})
    (def node-type :ui/component)
    (def nodes (->> configuration
                 :mol/components
                 (filter (fn [[_ meta-data]]
                           (= node-type (:atm/role meta-data))))
                 keys)))



  ())


; play with process-components-stateful
(comment
  (do
    (def configuration {:mol/components {"v-scroll" {:atm/role     :ui/component :atm/kind :bhui/v-scroll-pane
                                                     :atm/style    {:style {:height "500px", :width "700px"}}
                                                     :atm/children ["line" "bar"]}
                                         "bar-box"  {:atm/role :ui/component :atm/kind :rc/box :atm/child "bar"}
                                         "line-box" {:atm/role :ui/component :atm/kind :rc/box :atm/child "line"}
                                         "data"     {:atm/role :source/local :atm/kind :source/local}
                                         "line"     {:atm/role :ui/component :atm/kind :rechart/line}
                                         "bar"      {:atm/role :ui/component :atm/kind :rechart/bar}}}))

  (into {}
    (sig/process-components-stateful
      configuration :ui/component
      @(re-frame/subscribe [:meta-data-registry]) "test-mol-dsl"))


  ())


; play with process-components-stateful (now with :ui/container)
(comment
  (do
    (def configuration {:mol/components {"v-scroll" {:atm/role     :ui/container :atm/kind :bhui/v-scroll-pane
                                                     :atm/style    {:style {:height "500px", :width "700px"}}
                                                     :atm/children ["line" "bar"]}
                                         "bar-box"  {:atm/role :ui/container :atm/kind :rc/box :atm/child "bar"}
                                         "line-box" {:atm/role :ui/container :atm/kind :rc/box :atm/child "line"}
                                         "data"     {:atm/role :source/local :atm/kind :source/local}
                                         "line"     {:atm/role :ui/component :atm/kind :rechart/line}
                                         "bar"      {:atm/role :ui/component :atm/kind :rechart/bar}}}))

  (merge
    (into {}
      (sig/process-components
        configuration :ui/component
        @(re-frame/subscribe [:meta-data-registry]) "test-mol-dsl"))

    (into {}
      (sig/process-components-stateful
        configuration :ui/container
        @(re-frame/subscribe [:meta-data-registry]) "test-mol-dsl")))


  ())


; need to make :atm/kind be a string (called kind-js) for passing to react-flow
(comment
  (do
    (def configuration @@last-config))


  (update configuration :mol/components
    (fn [x]
      (into {}
        (map (fn [[k v]]
               {k (assoc v :atm/kind-js (str (:atm/kind v)))})
          x))))






  ())


; turn the "DSL" into the flow-diagram nodes/edges(?)
(comment

  ; region ; build the full-config
  (do
    (def container-id "dummy-container")
    ; note: we've deliberately added 2 layers of container-ship for testing
    (def def {:mol/components  {"table-one"   {:atm/role           :ui/component :atm/kind :react-table/table
                                               :atm/default-config demo.catalog.atom.example.experimental.react-table/data-config}
                                "table-two"   {:atm/role           :ui/component :atm/kind :react-table/table
                                               :atm/default-config demo.catalog.atom.example.experimental.react-table/data-config}
                                "table-three" {:atm/role           :ui/component :atm/kind :react-table/table
                                               :atm/default-config demo.catalog.atom.example.experimental.react-table/data-config}
                                "table-four"  {:atm/role           :ui/component :atm/kind :react-table/table
                                               :atm/default-config demo.catalog.atom.example.experimental.react-table/data-config}
                                "v-scroll-1"  {:atm/role  :ui/container :atm/kind :rc/v-scroll
                                               :atm/label "Multiple Views" :atm/children ["table-one" "table-two"]}
                                "v-scroll-2"  {:atm/role  :ui/container :atm/kind :rc/v-scroll
                                               :atm/label "Multiple Views" :atm/children ["table-three" "table-four"]}
                                "carousel"    {:atm/role  :ui/container :atm/kind :rc/carousel
                                               :atm/label "Carousel" :atm/children ["v-scroll-1" "v-scroll-2"]}
                                "data/one"    {:atm/role         :source/local :atm/kind :source/local
                                               :atm/default-data demo.catalog.molecule.example.composite.v-scroll-pane-children/data-one}
                                "data/two"    {:atm/role         :source/local :atm/kind :source/local
                                               :atm/default-data demo.catalog.molecule.example.composite.v-scroll-pane-children/data-two}}
              :mol/links       {"data/one" {:data {"table-one" :data
                                                   "table-two" :data}}
                                "data/two" {:data {"table-three" :data
                                                   "table-four"  :data}}}
              :mol/grid-layout [{:i "carousel" :x 0 :y 0 :w 10 :h 11 :static true}]
              :mol/dsl-layout  {:nodes [{}]
                                :edges [{}]}})
    (def data (atom def))
    (def configuration (update @data :mol/components        ; need to make :atm/kind be a string (called kind-js) for passing to react-flow
                         (fn [x]
                           (into {}
                             (map (fn [[k v]]
                                    {k (assoc v :atm/kind-js (str (:atm/kind v)))})
                               x)))))
    (def graph (apply loom.graph/digraph (ui/compute-edges configuration)))
    (def nodes (-> configuration :mol/components keys set))
    (def edges (into [] (loom.graph/edges graph)))

    ; at this point we have :graph which does NOT include the :ui/containers "carousel", "v-scroll-1"
    ; and "v-scroll-2" because they aren't involved in any links. we need to fix this, and we should do that by
    ; adding ANOTHER key (so we don't break anything that is currently working)
    (def containership-graph (->> configuration
                               :mol/components
                               keys
                               set
                               (mapcat (fn [node-id]
                                         (let [children (concat (get-in configuration [:mol/components node-id :atm/child])
                                                          (get-in configuration [:mol/components node-id :atm/children]))]
                                           {node-id (vec children)})))
                               (filter (fn [[_ children]] (not-empty children)))
                               (into {})))

    ; now we should go the other way, children should identify their parents
    (def parent-graph (->> containership-graph
                        (mapcat (fn [[parent children]]
                                  (map (fn [child]
                                         {child parent}) children)))
                        (into {})))


    (def flow-nodes (reduce (fn [layout node]
                              (let [parent (get parent-graph node)]
                                (ui/set-position layout (or parent :diagram) node)))
                      {:diagram {:children {}
                                 :parent   nil
                                 :case     0
                                 :size     {:width 0 :height 0}
                                 :next     {:x ui/x-offset :y ui/y-offset}}}
                      nodes))

    (def prep-config (assoc configuration
                       :denorm (bh-ui.molecule.composite.util.digraph/denorm-components
                                 graph (:mol/links configuration) (loom.graph/nodes graph))
                       :nodes nodes
                       :edges edges
                       :graph graph
                       :containership-graph containership-graph
                       :parent-graph parent-graph
                       :container container-id))

    (def flow-layout (reduce (fn [layout node]
                               (let [parent (get parent-graph node)]
                                 (ui/set-position layout (or parent :diagram) node)))
                       {:diagram {:children {}
                                  :parent   nil
                                  :size     {:width 0 :height 0}
                                  :next     {:x ui/x-offset :y ui/y-offset}}}
                       nodes))

    (def sized-nodes (map (fn [node]
                            (let [[[id _]] (seq node)]
                              (if-let [container (get-in flow-layout [id :children])]
                                (assoc node :size (ui/compute-size container))
                                node)))
                       flow-nodes))

    (def node-cases (->> flow-nodes
                      (map (fn [[k v :as m]]
                             {k ((juxt :parent :children) v)}))
                      (into {})
                      (map (fn [[k [p c]]]
                             {k [(cond
                                   (= :diagram p) :diagram
                                   (nil? p) nil
                                   :else true)
                                 (cond
                                   (= :diagram c) :diagram
                                   (nil? c) nil
                                   :else true)]}))
                      (into {})
                      (map (fn [[k v]]
                             {k (match v
                                  [nil true] {:case 0}
                                  [:diagram nil] {:case 1}
                                  [:diagram true] {:case 2}
                                  [true true] {:case 3}
                                  :else {:case 4})}))))

    (def case-nodes (reduce (fn [config node]
                              (let [[[id {case :case}]] (seq node)]
                                (update config id assoc :case case)))
                      sized-nodes
                      node-case))

    (def full-config (assoc prep-config
                       :flow-nodes case-nodes))

    (:flow-nodes full-config))

  ; endregion


  ; region ; what about positioning the node?

  ; we can use an atom to hold state for each container (with a default one for the overall
  ;   diagram) so we can space each node away from previously processed nodes

  (do
    (def layout {:diagram {:children {}
                           :parent   nil
                           :size     {:width 0 :height 0}
                           :next     {:x ui/x-offset :y ui/y-offset}}})
    (def parent :diagram)
    (def child "carousel")
    (ui/sub-layout layout parent)

    (-> layout
      (assoc-in [parent :children child :parent] parent)
      (assoc-in [parent :children child :position] (get-in @layout [parent :next]))
      (assoc-in [child :parent] parent)
      (assoc-in [child :position] (get-in @layout [parent :next]))
      (update-in [parent :next] (fn [{x :x y :y}]
                                  (let [[new-x new-y] (if (< x 300)
                                                        [(+ x ui/width-offset ui/x-gap) y]
                                                        [ui/x-offset
                                                         (if (< y 300)
                                                           (+ y ui/height-offset ui/y-gap)
                                                           ui/y-offset)])]
                                    {:x new-x :y new-y})))))


  (do
    (def parent "carousel")
    (def child "v-scroll-1")
    (ui/sub-layout layout parent)

    (-> layout
      (assoc-in [parent :children child :parent] parent)
      (assoc-in [parent :children child :position] (get-in @layout [parent :next]))
      (assoc-in [child :parent] parent)
      (assoc-in [child :position] (get-in @layout [parent :next]))
      (update-in [parent :next] (fn [{x :x y :y}]
                                  (let [[new-x new-y] (if (< x 300)
                                                        [(+ x ui/width-offset ui/x-gap) y]
                                                        [ui/x-offset
                                                         (if (< y 300)
                                                           (+ y ui/height-offset ui/y-gap)
                                                           ui/y-offset)])]
                                    {:x new-x :y new-y})))))



  (-> layout
    (ui/set-position :diagram "carousel")
    (ui/set-position "carousel" "v-scroll-1")
    (ui/set-position "v-scroll-1" "table-one")
    (ui/set-position :diagram "data/one"))



  (-> {:diagram {:children {}
                 :parent   nil
                 :size     {:width 0 :height 0}
                 :next     {:x ui/x-offset :y ui/y-offset}}}
    (ui/set-position :diagram "data/one")
    (ui/set-position :diagram "data/two")

    (ui/set-position :diagram "carousel")
    (ui/set-position "carousel" "v-scroll-1")
    (ui/set-position "v-scroll-1" "table-one")
    (ui/set-position "v-scroll-1" "table-two")

    (ui/set-position "carousel" "v-scroll-2")
    (ui/set-position "v-scroll-2" "table-three")
    (ui/set-position "v-scroll-2" "table-four"))


  (let [v (get-in full-config [:parent-graph (second (:nodes full-config))])]
    {:v v})

  (map (fn [node]
         (let [parent (get-in full-config [:parent-graph node])]
           (ui/set-position layout (or parent :diagram) node)))
    (:nodes full-config))

  (def flow-layout (reduce (fn [layout node]
                             (let [parent (get-in full-config [:parent-graph node])]
                               (ui/set-position layout (or parent :diagram) node)))
                     {:diagram {:children {}
                                :parent   nil
                                :size     {:width 0 :height 0}
                                :next     {:x ui/x-offset :y ui/y-offset}}}
                     (:nodes full-config)))

  ; endregion


  ; region ; figure out how large the "parent" should be to fit all the children
  (do
    (def flow-layout (reduce (fn [layout node]
                               (let [parent (get-in full-config [:parent-graph node])]
                                 (ui/set-position layout (or parent :diagram) node)))
                       {:diagram {:children {}
                                  :parent   nil
                                  :size     {:width 0 :height 0}
                                  :next     {:x ui/x-offset :y ui/y-offset}}}
                       (:nodes full-config)))

    (def parent "v-scroll-1")
    (def children (get-in flow-layout [parent :children]))
    (def min-x (->> children
                 (map (fn [[_ {{:keys [x]} :position}]] x))
                 (apply min)))
    (def max-x (->> children
                 (map (fn [[_ {{:keys [x]} :position}]] x))
                 (apply max)))
    (def min-y (->> children
                 (map (fn [[_ {{:keys [y]} :position}]] y))
                 (apply min)))
    (def max-y (->> children
                 (map (fn [[_ {{:keys [y]} :position}]] y))
                 (apply max)))
    (def width (+ ui/x-gap (- max-x min-x) (* ui/x-offset 2) ui/x-gap))
    (def height (+ ui/y-gap (- max-y min-y) (* ui/y-offset 2) ui/y-gap)))

  {:size {:w width :h height}}


  (defn compute-size [node]
    (let [min-x (->> node
                  (map (fn [[_ {{:keys [x]} :position}]] x))
                  (apply min))
          max-x (->> node
                  (map (fn [[_ {{:keys [x]} :position}]] x))
                  (apply max))
          min-y (->> node
                  (map (fn [[_ {{:keys [y]} :position}]] y))
                  (apply min))
          max-y (->> node
                  (map (fn [[_ {{:keys [y]} :position}]] y))
                  (apply max))]
      {:width  (+ ui/x-gap (- max-x min-x) (* ui/x-offset 2) ui/x-gap)
       :height (+ ui/y-gap (- max-y min-y) (* ui/y-offset 2) ui/y-gap)}))


  ; compute sizes of the containers:

  (def sized-nodes (map (fn [[id _ :as node]]
                          (if-let [container (get-in flow-layout [id :children])]
                            (assoc node :size (compute-size container))
                            node))
                     flow-nodes))




  ; endregion


  ; region ; assign 'cases' to the nodes, so we build them in the correct order

  (filter (fn [[k _]] (not= :diagram k))
    (:flow-nodes full-config))

  (->> full-config
    :flow-nodes
    (sort-by (fn [[_ v]] (:case v)))
    (map (fn [[k v]] [k (:case v)])))



  (def node-case (->> full-config
                   :flow-nodes
                   (map (fn [[k v :as m]]
                          {k ((juxt :parent :children) v)}))
                   (into {})
                   (map (fn [[k [p c]]]
                          {k [(cond
                                (= :diagram p) :diagram
                                (nil? p) nil
                                :else true)
                              (cond
                                (= :diagram c) :diagram
                                (nil? c) nil
                                :else true)]}))
                   (into {})
                   (map (fn [[k v]]
                          {k (match v
                               [nil true] {:case 0}
                               [:diagram nil] {:case 1}
                               [:diagram true] {:case 2}
                               [true true] {:case 3}
                               :else {:case 4})}))))


  (map (fn [node]
         (let [[[id v]] (seq node)]
           {:node node :id id :v v}))
    node-case)

  (reduce (fn [config node]
            (let [[[id {case :case}]] (seq node)]
              (update-in config [:flow-nodes id]
                assoc :case case)))
    full-config
    node-case)

  ; this maps over our example:
  ;     :diagram      [nil true]        (0)

  ;     "data/one     [:diagram nil]    (1)
  ;     "data/two"    [:diagram nil]    (1)

  ;     "carousel"    [:diagram true]   (2)

  ;     "v-scroll-2"  [true true]       (3)
  ;     "v-scroll-1"  [true true]       (3)

  ;     "table-one    [true nil]        (4)
  ;     "table-four"  [true nil]        (4)
  ;     "table-two"   [true nil]        (4)
  ;     "table-three" [true nil]        (4)



  ;(filter #(not= :diagram %))


  ; endregion


  ; region ; put it all together?

  ; region ; this is what we want:
  (def dsl-layout-gold
    {:nodes [{:id       "carousel", :type ":ui/container"
              :position {:x 25, :y 125},
              :data     {:label    "carousel" :kind ":rc/carousel"
                         :size     {:width 575 :height 200}
                         :children {"v-scroll-1" {:position {:x 25, :y 25}}
                                    "v-scroll-2" {:position {:x 125, :y 25}}}}}
             {:id   "data/one", :type ":source/local" :position {:x 25, :y 25},
              :data {:label "data/one" :kind ":source/local"}}
             {:id   "data/two", :type ":source/local" :position {:x 150, :y 25},
              :data {:label "data/two" :kind ":source/local"}}

             {:id         "v-scroll-1", :type ":ui/container"
              :position   {:x 25, :y 50},
              :parentNode "carousel"
              :data       {:label    "v-scroll-1" :kind ":rc/v-scroll"
                           :size     {:width 250 :height 125}
                           :children {"table-one" {:position {:x 25, :y 25}}
                                      "table-two" {:position {:x 125, :y 25}}}}}
             {:id         "v-scroll-2", :type ":ui/container"
              :position   {:x 300, :y 50},
              :parentNode "carousel"
              :data       {:label    "v-scroll-2" :kind ":rc/v-scroll"
                           :size     {:width 250 :height 125}
                           :children {"table-three" {:position {:x 25, :y 25}}
                                      "table-four"  {:position {:x 125, :y 25}}}}}

             {:id         "table-one", :type ":ui/component" :position {:x 25, :y 50},
              :parentNode "v-scroll-1" :data {:label "table-one" :kind ":react-table/table"}}
             {:id         "table-two", :type ":ui/component" :position {:x 125, :y 50},
              :parentNode "v-scroll-1" :data {:label "table-two" :kind ":react-table/table"}}
             {:id         "table-three", :type ":ui/component" :position {:x 25, :y 50},
              :parentNode "v-scroll-2" :data {:label "table-three" :kind ":react-table/table"}}
             {:id         "table-four", :type ":ui/component" :position {:x 125, :y 50},
              :parentNode "v-scroll-2" :data {:label "table-three" :kind ":react-table/table"}}]

     :edges [{:id     "data/one->table-one",
              :source "data/one", :sourceHandle "data"
              :target "table-one" :targetHandle "data-in"
              :style  {:strokeWidth 1 :stroke :blue} :arrowHeadType "arrowclosed"}
             {:id     "data/one->table-three",
              :source "data/one", :sourceHandle "data"
              :target "table-three" :targetHandle "data-in"
              :style  {:strokeWidth 1 :stroke :blue} :arrowHeadType "arrowclosed"}
             {:id     "data/two->table-two",
              :source "data/two", :sourceHandle "data"
              :target "table-two" :targetHandle "data-in"
              :style  {:strokeWidth 1 :stroke :blue} :arrowHeadType "arrowclosed"}
             {:id     "data/two->table-four",
              :source "data/two", :sourceHandle "data"
              :target "table-four" :targetHandle "data-in"
              :style  {:strokeWidth 1 :stroke :blue} :arrowHeadType "arrowclosed"}]})
  ; endregion


  ; need to worry about the order so that react-flow sets up the parent/child stuff
  ; correctly. 5 cases, in order:
  ;
  ;       parent    children
  ; 0) [   nil        true   ]     <- :diagram (not needed in :mol/dsl-layout) [root]
  ; 1) [ :diagram     nil    ]     <- stand-alone components                   [rhizome?]
  ; 2) [ :diagram     true   ]     <- outermost containers                     [trunk]
  ; 3) [ true         true   ]     <- "contained" containers                   [branches]
  ; 4) [ true         nil    ]     <- children, at any level                   [leaves]
  ;
  ; Note: level 3 and 4 should NOT be included in any Dagre calls for a generated layout
  ;
  ;
  ;
  ; this maps over our example:
  ;     "data/one     [:diagram nil]    (1)
  ;     "v-scroll-1"  [true true]       (3)
  ;     "carousel"    [:diagram true]   (2)
  ;     :diagram      [nil true]        (0)
  ;     "table-one    [true nil]        (4)
  ;     "table-four"  [true nil]        (4)
  ;     "table-two"   [true nil]        (4)
  ;     "table-three" [true nil]        (4)
  ;     "v-scroll-2"  [true true]       (3)
  ;     "data/two"    [:diagram nil]    (1)



  (map (fn [[k v]] {:p (:parent v)}) @layout)
  (map (fn [[k v]] {:c (:children v)}) @layout)

  (map (fn [[k v]]
         {k [(:parent v) (:children v)]}) @layout)


  (do
    (def stand-alone [(filter (fn [[k v]] (:parent v)) @layout)]))


  ; just carousel:
  (def carousel-def {:id       "carousel", :type ":ui/container"
                     :position {:x 25, :y 125},
                     :data     {:label    "carousel" :kind ":rc/carousel"
                                :size     {:width 575 :height 200}
                                :children {"v-scroll-1" {:position {:x 25, :y 25}}
                                           "v-scroll-2" {:position {:x 125, :y 25}}}}})

  ; from (create-flow-node)
  (do
    (def mol (atom full-config))
    (def dsl-config @mol)
    (def node-id "carousel")
    (def node-role (get-in dsl-config [:mol/components node-id :atm/role]))
    (def node-kind (get-in dsl-config [:mol/components node-id :atm/kind]))
    (def children (concat []
                    (get-in dsl-config [:mol/components node-id :atm/child])
                    (get-in dsl-config [:mol/components node-id :atm/children]))))


  (:containership-graph @mol)



  {:id       (str node-id)
   :type     (str node-role)
   :data     {:label    (str node-id)
              :kind     node-kind
              :kind-js  (str node-kind)
              :children children
              :inputs   (-> dsl-config
                          (get-in [:mol/components node-id :atm/kind])
                          bh-ui.atom.component-registry/lookup-component
                          :handles
                          :inputs
                          (#(into {} %)))
              :outputs  (-> dsl-config
                          (get-in [:mol/components node-id :atm/kind])
                          bh-ui.atom.component-registry/lookup-component
                          :handles
                          :outputs
                          (#(into {} %)))}
   :position {:x 0 :y 0}}

  ; endregion



  ())

; endregion
