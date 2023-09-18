(ns bh-ui.molecule.composite.util.signals
  "does most of the _heavy lifting_ for the compilation of the Molecule-DSL.

  Leverages [Loom](https://github.com/aysylu/loom)"
  (:require [bh-ui.utils :as ui-utils]
            [bh-ui.events :as events]
            [bh-ui.subs :as subs]
            [bh-ui.utils.locals :as ul]
            [day8.re-frame.tracing :refer-macros [fn-traced]]
            [woolybear.ad.containers :as containers]
            [woolybear.ad.layout :as layout]
            [re-com.core :as rc]
            [re-frame.core :as re-frame]
            [loom.graph :as lg]
            [loom.alg :as lalg]
            [taoensso.timbre :as log]))


(defn- error-ui
  "This UI element is used in those cases where a widget definition tries to use a component implementation
  that is NOT found in the registry. Since Reagent really does not like nil's as the UI component function, we
  need to provide something useful to the user and, ultimately, the developer."

  [& {:as m}]

  [rc/alert-box :src (rc/at)
   :alert-type :warning
   :body [rc/v-box :src (rc/at)
          :gap "2px"
          :children [[:h3 "Problem with the widget!"]
                     [:p "This widget tried to use a UI component that was not in the 'registry'."]
                     [rc/gap :size "5px"]
                     [:p "This is the data passed into the component. It may help point to the offending code."]
                     [rc/line :size "2px"]
                     [containers/v-scroll-pane
                      {:height "4rem" :width "100px"}
                      [layout/text-block (str m)]]
                     [rc/line :size "2px"]
                     [:p "Please contact Tech Support."]]]])


(defn- make-params
  "This function 'wires-in' the input and output _ports_. For the given node, we use the meta-data
  associated with the component in the `registry` to identify the inpus and outputs.

   We take advantage of Clojure's hash-map destructuring to simplify supplying the
   input and output 'data' to the component.

   `:inputs` are re-frame subscriptions, so we pass the correct keyword in a vector
   so the component can pass it directly to `(re-frame/subscribe)` _Eventually_, one of the
   `:source/remote`, `:source/local`, or `:source/fn`s will register the handler function for
   this identifier.

   `:outputs` as re-frame event-handler, called with `(re-frame/dispatch)`, so we pass the
   vector containing the correct identifier(s). Again, one of the _sources_ will provide the handler
   function fo this vector. The component then `conj`s in any additional parameters.

> Note: The entire Mol-DSL approach heavily leverages [re-frame](https://github.com/day8/re-frame),
specifically because re-frame decouples the identity of a subscription of event-handler (a keyword)
from the implementation of the subscription or handler function, which is managed by re-frame.
  "

  [configuration node direction container-id]

  (let [ret (->> configuration
              :denorm
              ((fn [n] (get n node)))
              direction
              (map (fn [[target ports]]
                     (let [[source-port target-port] ports
                           target-type (get-in configuration [:mol/components target :atm/role])
                           remote      (get-in configuration [:mol/components target :atm/kind])]
                       ;(log/info "make-params (a)" target "//" target-type "//" remote)
                       (if (= direction :outputs)
                         {source-port (condp = target-type
                                        :source/local [(ui-utils/path->keyword container-id :blackboard target)]
                                        :source/fn [(ui-utils/path->keyword container-id :blackboard target)]
                                        [::subs/source remote])}
                         {target-port (condp = target-type
                                        :source/local [(ui-utils/path->keyword container-id :blackboard target)]
                                        :source/fn [(ui-utils/path->keyword container-id :blackboard target)]
                                        [::subs/source remote])}))))
              (into {}))]
    ;(log/info "make-params (b)" node "//" container-id "//" ret)
    ret))


(defmulti component->ui
  "We use a multimethod to compile the specific Mol-DSL definition of a component into the correct
implementation (a function, a set of re-frame subscriptions, and/or a set of re-frame event handlers, as needed)

current ui component types (you can always write your own):


- `:ui/component` - a visual component, will be show on the displayed UI
- `:source/remote` - the name of a data source vended by the 'server', this allows for connection to the overall state of the system
- `:source/local` - a local source of information, typically used as a local cache within the 'widget'
- `:source/fn` - a function that takes in some data items and produces some filtered or enriched data based upon the input(s)

> Note: It is the :mol/links between the various components that actually make the information flow at run-time

- type - (keyword/string) the 'type' of component

Since we can't put docstrings on the defmethods themselves, we'll document the basic set of functions here...

#### (defmethod component->ui :ui/component ...)

A :ui/component defines a visible UI element, i.e, something that should be show to the user at some point. We
say _'at some point'_ because you can next :ui/components inside certain other :ui/components. These components are
typically implemented in Reagent with Hiccup notation, using the stylized input parameters of `:data`, `:config`, and `:style`

They tend to be the most complex in terms of implementation.

The function takes a hash-map with the following keys defined:

  | keyword        | type           | description                                                           |
  |:---------------|:--------------:|:----------------------------------------------------------------------|
  | :node          | keyword/string | id of the node being processed                                        |
  | :atm-set       | atom           | atom holding all the nodes processed to far                           |
  | :registry      | hash-map       | deref'd subscription to the registry of all component implementations |
  | :configuration | hash-map       | Mol-DSL definition of all components/links/etc. in the widget         |
  | :component-id  | keyword/string | unique identifier of this widget                                      |
  | :container-id  | keyword/string | unique identifier of the container of this widget                     |


#### (defmethod component->ui :source/local ...)

Local sources are typically used as cache or, especially in the Catalog, a source of example data. The function performs
the following:

1. adds the node's id as a key to the `:blackboard` associated with the :container-id, using the :atm/default-data property of the meta-data
2. creates and registers the subscription against the new key in the :container-id's `:blackboard` key
  a. if this node is the output target of a :source/fn ut should subscribe to _that_ node instead of using and data from :atm/default-data
3. creates and registers the event-handler for the new key inside the :container-id's `:blackboard`
4. format and return the subscription/dispatch vector

The function takes a hash-map with the following keys defined:

  | keyword        | type           | description                                       |
  |:---------------|:--------------:|:--------------------------------------------------|
  | :node          | keyword/string | id of the node being processed                    |
  | :meta-data     | hash-map       | associated meta-data of the node being processes  |
  | :component-id  | keyword/string | unique identifier of this widget                  |
  | :container-id  | keyword/string | unique identifier of the container of this widget |


#### (defmethod component->ui :source/remote ...)

A remote data source needs to tap inot the existing websocket-based communications infrastructure between the client
software (written in CLJS) and the backend/gateway (typically written in Clojure). The implementation does:

1. subscribe to the remote source, using re-frame via the `::events/subscribe-to` key
2. format and return the subscription vector

> Note: we still need to work out a mechanism for updating remote data

The function takes a hash-map with the following keys defined:

  | keyword        | type           | description                                       |
  |:---------------|:--------------:|:--------------------------------------------------|
  | :meta-data     | hash-map       | associated meta-data of the node being processes  |


#### (defmethod component->ui :source/fn ...)

Compiling a `:source/fn` requires looking up the `:atm/kind` property of the node in the meta-data-registry, which returns the
implementation function. We then arrange the `:input` and `:output` _port_ data and then call the function, which performs the
required subscription and event-handler registrations.

The function takes a hash-map with the following keys defined:

  | keyword        | type           | description                                       |
  |:---------------|:--------------:|:--------------------------------------------------|
  | :node          | keyword/string | id of the node being processed                    |
  | :component-id  | keyword/string | unique identifier of this widget                  |
  | :container-id  | keyword/string | unique identifier of the container of this widget |
  "

  (fn [{:keys [type]}] type))


(def last-params "atom to help debugging at the repl" (atom nil))
(def last-hiccup "atom to help debugging at the repl" (atom nil))
(def last-locals "atom to help debugging at the repl" (atom nil))
(def last-cfg "atom to help debugging at the repl" (atom nil))
(def last-atm-set (atom nil))


; :ui/component
(defmethod component->ui :ui/component [{:keys [node atm-set registry configuration component-id container-id] :as params}]

  (reset! last-params params)
  (reset! last-atm-set @atm-set)

  (let [ui-type    (get-in configuration [:mol/components node :atm/kind])
        bh-ui      (if (keyword? ui-type)
                     (->> registry ui-type :component)
                     ui-type)
        styl       (get-in configuration [:mol/components node :atm/style])
        children?  (->> registry ui-type :children)
        children   (-> configuration :mol/components (get node) :atm/children)
        child?     (->> registry ui-type :child)
        child      (-> configuration :mol/components (get node) :atm/child)
        def-config (-> configuration :mol/components (get node) :atm/default-config)
        label      (-> configuration :mol/components (get node) :atm/label)

        ;_         (log/info "component->ui :ui/component" node "//" ui-type "//" bh-ui "//"
        ;            children? "//" children "//"
        ;            child? "//" child "//"
        ;            @atm-set)

        ret        {node

                    {:component (condp = [child? children?]

                                  [:enumerated nil]
                                  (do
                                    ;(log/info "enumerated child" node "//" child)
                                    (into [(or bh-ui error-ui)
                                           (merge (or styl {:style {:height "100%" :width "100%"}})
                                             (or def-config {}))]
                                      (:component ((fn [c] (get @atm-set c)) child))))

                                  [:keyword nil]
                                  (do
                                    ;(log/info "keyword child" node "//" child)
                                    [(or bh-ui error-ui)
                                     :style (or styl {:height "100%" :width "100%"})
                                     :config def-config
                                     :child (:component ((fn [c] (get @atm-set c)) child))])

                                  [nil :enumerated]
                                  (do
                                    ;(log/info "enumerated children" node "//" children)
                                    (into [(or bh-ui error-ui)
                                           (merge (or styl {:style {:height "100%" :width "100%"}})
                                             (or def-config {}))]
                                      (map (fn [c] (:component (get @atm-set c))) children)))

                                  [nil :keyword]
                                  (do
                                    ;(log/info "keyword children" node "//" children)
                                    [(or bh-ui error-ui)
                                     :style (or styl {:height "100%" :width "100%"})
                                     :config def-config
                                     :children (into [] (map (fn [c] (:component (get @atm-set c))) children))])

                                  [nil nil]
                                  (do
                                    ;(log/info "NO Children!" node)
                                    (reduce into [(or bh-ui error-ui)
                                                  :component-id component-id :container-id container-id
                                                  :style (or styl {:height "100%" :width "100%"})
                                                  :config def-config]
                                      (seq
                                        (merge
                                          (make-params configuration node :inputs container-id)
                                          (make-params configuration node :outputs container-id))))))
                     :label     label}}]

    (reset! last-hiccup ret)
    ret))


; :source/local
(defmethod component->ui :source/local [{:keys [node meta-data configuration container-id] :as params}]
  ;(log/info "component->ui :source/local (a)" node meta-data)

  (reset! last-locals params)

  (let [denorm     (:denorm configuration)
        components (:mol/components configuration)]

    ; 1. add the key to the blackboard, uses the :atm/default-data property of the meta-data
    ;
    ;  only IF one exists, otherwise we assume it will be serviced by a :source/fn somewhere
    ;
    (when (:atm/default-data meta-data)
      (ul/dispatch-local container-id [:blackboard node] (:atm/default-data meta-data)))

    ; 2. create the subscription against the new :blackboard key
    (ul/create-container-local-sub container-id
      [:blackboard node]
      (:atm/default-data meta-data)
      (let [inputs (:inputs (get denorm node))              ; if this :source/local falls after a :source/fn, depend upon IT!
            comps  (get components (first (keys inputs)))]
        (when (= :source/fn (:atm/role comps))
            (first (keys inputs)))))

    ; 3. create the event against the new :blackboard key
    (ul/create-container-local-event container-id [:blackboard node])

    ; 4. return the signal vector for the new subscription
    [(ui-utils/path->keyword container-id [:blackboard node])]))


;source/remote
(defmethod component->ui :source/remote [{:keys [meta-data]}]
  ; get the meta-data for the node and use the "actual name" as the thing to subscribe to
  (let [remote (:atm/kind meta-data)]

    ;(log/info "component->ui :source/remote" node "//" remote)

    ; 1. subscribe to the server (if needed)
    (re-frame/dispatch-sync [::events/subscribe-to #{remote}])

    ; 2. return the signal vector to the new data-source key
    ; TODO: need a mechanism for updating a :source/remote
    [::subs/source remote]))


; :source/fn
(defmethod component->ui :source/fn [{:keys [node configuration container-id] :as inputs}]
  ;(log/info "component->ui :source/fn (a)" node)

  (let [fn-name   (get-in configuration [:mol/components node :atm/kind])
        actual-fn (if (keyword fn-name)
                    (-> @(re-frame/subscribe [:meta-data-registry]) fn-name :function)
                    fn-name)
        params    (merge
                    {:container-id container-id
                     :sub-name     [(ui-utils/path->keyword container-id :blackboard node)]}
                    (make-params configuration node :inputs container-id))]

    ;(log/info "component->ui :source/fn (b)" node "//" fn-name "//" params "//" actual-fn)

    (actual-fn params)))


(defn process-components
  "'Compiles' the Mol-DSL definitions of the components into their functional representation, using the
  multimethod `component->ui`

  Typically called once for each category (`:ui/component`, `:source/local`, etc.)

> Note: `:ui/components` use `process-components-stateful` instead, since there may be `:child` or
`:children` dependencies.

- configuration : (hash-map) the Mol_DSL for the entire widget
- node-type : (keyword) which kind of nodes are we processing? (defined by `:atm/kind`)
- registry : the registry of all available UI components, data sources, transformation functions,
etc. available for use
- container-id : (keyword/string) unique identifier for the widget that contains all the components, used
to isolate this widget from all other

  "
  [configuration node-type registry container-id]
  (doall
    (->> configuration
      :mol/components
      (filter (fn [[_ meta-data]]
                (= node-type (:atm/role meta-data))))
      (map (fn [[node meta-data]]
             ;(log/info "process-components (nodes)" node "//" meta-data "//" (:atm/role meta-data))
             (component->ui {:node          node
                             :type          (:atm/role meta-data)
                             :meta-data     meta-data
                             :configuration configuration
                             :registry      registry
                             :component-id  (ui-utils/path->keyword container-id node)
                             :container-id  container-id}))))))


(defn process-components-stateful
  "Similar to `process-components`, but the function first arranges the `:mol/component`s in reverse
  dependency order, i.e., the one with no dependencies first, and with the most dependencies last. This was
  we can compile the components in order, knowing that any dependencies will have already been implemented.

> Note: `:ui/components` use `process-components-stateful`, since there may be `:child` or
`:children` dependencies.

- configuration : (hash-map) the Mol_DSL for the entire widget
- node-type : (keyword) which kind of nodes are we processing? (defined by `:atm/kind`)
- registry : the registry of all available UI components, data sources, transformation functions,
etc. available for use
- container-id : (keyword/string) unique identifier for the widget that contains all the components, used
to isolate this widget from all other

> Note 2: this function uses [Loom](https://github.com/aysylu/loom) to organize the dependencies
  "
  [configuration node-type registry container-id]

  (reset! last-cfg {:cfg configuration :nt node-type :r registry :id container-id})

  (let [atm-set       (atom {})
        cfg           (->> configuration
                        :mol/components
                        (filter (fn [[_ meta-data]]
                                  (= node-type (:atm/role meta-data))))
                        (into {}))
        edges         (reduce conj
                        (mapcat (fn [[name {:keys [atm/children]}]]
                                  (when children
                                    (map (fn [c] [name c]) children)))
                          cfg)
                        (mapcat (fn [[name {:keys [atm/child]}]]
                                  (when child
                                    [[name child]]))
                          cfg))
        g             (-> (lg/digraph)
                        (#(apply lg/add-nodes % (keys cfg)))
                        (#(apply lg/add-edges % edges))
                        (lalg/topsort)
                        reverse)
        sorted-config (map (fn [id]
                             (-> configuration
                               :mol/components
                               (get id)
                               ((fn [x] [id x]))))
                        g)]

    ;(log/info "process-components-stateful (a)" cfg "//" edges)

    (log/info "process-components-stateful (b)" g "//" sorted-config)

    (doall
      (map (fn [[node meta-data]]
             (let [atm
                   (bh-ui.molecule.composite.util.signals/component->ui
                     {:node          node
                      :atm-set       atm-set
                      :type          (:atm/role meta-data)
                      :meta-data     meta-data
                      :configuration configuration
                      :registry      registry
                      :component-id  (ui-utils/path->keyword container-id node)
                      :container-id  container-id})]
               ; (log/info "process-components-stateful (c)" atm "//" @atm-set)
               (swap! atm-set merge atm)
               atm))
        sorted-config))))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
; region ; rich comments

; need to include both :children and :child wrappers in the dependency graph
(comment
  @last-cfg

  (do
    (def configuration (:cfg @last-cfg))
    (def node-type (:nt @last-cfg))
    (def registry (:r @last-cfg))
    (def container-id (:id @last-cfg))

    (def cfg (->> configuration
               :mol/components
               (filter (fn [[_ meta-data]]
                         (= node-type (:atm/role meta-data))))
               (into {}))))

  (reduce conj
    (mapcat (fn [[name {:keys [atm/children]}]]
              (when children
                (map (fn [c] [name c]) children)))
      cfg)
    (mapcat (fn [[name {:keys [atm/child]}]]
              (when child
                [[name child]]))
      cfg))

  (def edges (reduce conj
               (mapcat (fn [[name {:keys [atm/children]}]]
                         (when children
                           (map (fn [c] [name c]) children)))
                 cfg)
               (mapcat (fn [[name {:keys [atm/child]}]]
                         (when child
                           [[name child]]))
                 cfg)))


  (def g (-> (lg/digraph)
           (#(apply lg/add-nodes % (keys cfg)))
           (#(apply lg/add-edges % edges))
           (lalg/topsort)
           reverse))

  ())


; what if :source/local is fed from another component, say a :source/fn?
;       1) how do we communicate this situation?
(comment
  (do
    (def configuration (:configuration @last-locals))
    (def node (:node @last-locals))
    (def denorm (:denorm configuration))
    (def components (:mol/components configuration))
    (def inputs (:inputs (get denorm node)))
    (def comps (get components (first (keys inputs)))))

  (let [inputs (:inputs (get denorm node))
        comps  (get components (first (keys inputs)))]
    (when (= :source/fn (:atm/role comps))
      (:atm/kind comps)))




  ())


(comment
  (merge {} {:one "one"})
  (merge {:one "one"} {:two "two"})


  {"v-scroll" ["#object[woolybear$ad$containers$v_scroll_pane]"
               {:style {:height "500px", :width "700px"}}
               ["#object[bh_ui$atom$chart$bar_chart$component]"
                :component-id :v-scroll-with-children.molecule.bar-chart
                :container-id :v-scroll-with-children.molecule
                :data [:v-scroll-with-children.molecule.blackboard.data]]
               ["#object[bh_ui$atom$chart$line_chart$component]"
                :component-id :v-scroll-with-children.molecule.line-chart
                :container-id :v-scroll-with-children.molecule
                :data [:v-scroll-with-children.molecule.blackboard.data]]]}
  ())


(comment
  (do
    (def configuration (:configuration @last-params))
    (def node "v-scroll")                                   ;(:node @last-params))
    (def atm-set (:atm-set @last-params))
    (def registry (:registry @last-params))

    (def ui-type (get-in configuration [:mol/components node :atm/kind]))
    (def bh-ui (if (keyword? ui-type)
                 (->> registry ui-type :component
                   ui-type)))
    (def styl (get-in configuration [:mol/components node :atm/style]))
    (def children? (->> registry ui-type :children))
    (def children (-> configuration :mol/components (get node) :atm/children))
    (def child? (->> registry ui-type :child))
    (def child (-> configuration :mol/components (get node) :atm/child)))


  [(or bh-ui error-ui) (or styl {:style {:height "100%" :width "100%"}})
   :child ((fn [c] (get @atm-set c)) child)]



  (:component ((fn [c] (get @atm-set c)) child))

  (into [] (map (fn [c] (:component (get @atm-set c))) children))


  ())

; endregion
