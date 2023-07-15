(ns bh-ui.molecule.grid-container
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


(defn- config
  "set up the local config keys, specifically we want the :mol/layout key, so we can
  track updates to the layout should the user drag/resize any of the internal
  components.

  the component-panel will subscribe to this 'local' using (locals/subscribe-local ...) and
  dispatch updates (via on-layout-update) using (locals/dispatch-local ...)
  "
  [full-config]
  {:blackboard {:defs {:source full-config
                       :dag    {:open-details ""}}}
   :container  ""
   :layout     (:mol/grid-layout full-config)})


(defn- wrap-component [[id {:keys [component label]}]]

  ;(log/info "wrap-component" id "//" label "//" component)

  [:div.widget-parent {:key id}
   [:div.grid-toolbar.title-wrapper.move-cursor
    {:style {:height "1.5em"}}
    (or label "")]
   [:div.widget.widget-content
    {:on-mouse-down #(.stopPropagation %)}
    component]])


(defn- on-width-update
  "
  ---

  - width : (number) new width of the container
  - margin : (vector) margin [left? right?]
  - cols : (number) number of columns
  - padding : (vector) padding [left? right?]
  "
  [width margin cols padding]

  ;(log/info "on-width-update" width "//" margin "//" cols "//" padding)

  ())


(defn- on-layout-change [component-id new-layout all-layouts]
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


(defn- toggle-editable [orig-value]
  (map #(assoc % :static (-> % :static not)) orig-value))


(def last-params (atom nil))
(def last-component-lookup (atom nil))

(defn- component-panel [& {:keys [configuration component-id resizable] :as params}]

  (reset! last-params params)
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
                             configuration :ui/component
                             @(re-frame/subscribe [:meta-data-registry]) component-id))

        ; build UI components (with subscription/event signals against the blackboard or remotes)
        visual-layout    (->> configuration
                           :mol/grid-layout
                           (map (fn [{:keys [i]}] i)))
        composed-ui      (map wrap-component (select-keys component-lookup visual-layout))
        open?            (r/atom false)]

    (reset! last-component-lookup {:lookup component-lookup
                                   :viz visual-layout
                                   :keys (select-keys component-lookup visual-layout)
                                   :wrappers composed-ui})

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
                                                     :atm/style {:style {:height "500px", :width "700px"}}
                                                     :atm/children ["line" "bar"]}
                                         "data"     {:atm/role :source/local :atm/kind :source/local}
                                         "line"     {:atm/role :ui/component :atm/kind :rechart/line}
                                         "bar"      {:atm/role :ui/component :atm/kind :rechart/bar}}}))

  (into {}
    (sig/process-components-stateful
      configuration :ui/component
      @(re-frame/subscribe [:meta-data-registry]) "test-mol-dsl"))


  ())


(def last-data (atom nil))

(defn component [& {:keys [data component-id container-id resizable tools] :as params}]

  (reset! last-data @data)

  ;(log/info "component" data "//" component-id "//" container-id)
  ;(log/info "component (params)" params)

  (let [id             (r/atom nil)
        configuration  @data
        graph          (apply lg/digraph (ui/compute-edges configuration))
        comp-or-dag?   (r/atom :component)
        partial-config (assoc configuration
                         :denorm (dig/denorm-components graph (:mol/links configuration) (lg/nodes graph))
                         :nodes (-> configuration :mol/components keys set)
                         :edges (into [] (lg/edges graph)))
        full-config    (assoc partial-config
                         :graph graph
                         :container container-id)]

    (fn []
      (when (nil? @id)
        (reset! id component-id)
        (ui-utils/init-container-locals @id (config partial-config))
        (ui-utils/dispatch-local @id [:container] container-id)
        (ui/prep-environment partial-config @id @(re-frame/subscribe [:meta-data-registry])))

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
                             :configuration full-config
                             :component-id @id
                             :container-id container-id]
                       :component [component-panel
                                   :configuration full-config
                                   :component-id @id
                                   :container-id container-id
                                   :resizable resizable]
                       :definition [composite/definition-panel
                                    :configuration configuration]
                       :default [rc/alert-box :src (rc/at)
                                 :alert-type :warning
                                 :body "There is a problem with this component."])]]]))))


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

