(ns bh-ui.molecule.composite
  ; TODO: we can refactor all function into grid-container?

  "provides a 'container' to hold and organize other atoms and molecules
components have 'ports' which define their inputs and outputs:

    you SUBSCRIBE with a :port/sink, ie, data come IN   (rf/subscribe ...)

    you PUBLISH to a :port/source, ie, data goes OUT    (rf/dispatch ...)

    you do BOTH with :port/source-sink (both)           should we even have this, or should we spell out both directions?

the question about :port/source-sink arises because building the layout (the call for the UI itself) doesn't actually
need to make a distinction (in fact the code is a bit cleaner if we don't) and we have the callee sort it out (since it
needs to implement the correct usage anyway). The flow-diagram, on the other hand, is easier if we DO make the
distinction, so we can quickly build all the Nodes and Handles used for the diagram...
"
  (:require [bh-ui.atom.diagram.diagram.composite-dag-support :as dag-support]
            [bh-ui.atom.diagram.flow-diagram :as diagram]
            [bh-ui.atom.re-com.modal :as modal]
            [bh-ui.molecule.composite.dsl-support.dsl-nodes :as dsl]
            [bh-ui.molecule.composite.dsl-support.edit-modal :as edit-dialog]
            [bh-ui.molecule.composite.util.digraph :as dig]
            [bh-ui.molecule.composite.util.signals :as sig]
            [bh-ui.molecule.composite.util.ui :as ui]
            [bh-ui.utils :as ui-utils]
            [bh-ui.utils.helpers :as h]
            [bh-ui.utils.locals :as locals]
            [day8.re-frame.tracing :refer-macros [fn-traced]]
            [loom.graph :as lg]
            [re-com.core :as rc]
            [re-frame.core :as rf]
            [reagent.core :as r]
            [taoensso.timbre :as log]
            [woolybear.ad.containers :as containers]
            [woolybear.ad.layout :as layout]
            ["reactflow" :refer (MarkerType)]))


(log/info "bh-ui.molecule.composite")


(defonce last-new-edge (atom nil))
(defonce last-config (atom nil))
(def next-id (atom 0))


(defn fn-default
  "this is a 'default' implementation of a `:source/fn`. We need this so that when a user adds
  a `:source/fn` node to the flow-diagram we have all the internal elements in place to actually
  'compile' the DSL into a working UI (see `molecule/grid-container`)

  This follows the standard format for implementing a :source/fn, it has just one input parameter,
  `data` and produces a single output, like all functions (or in this case actually a re-frame
  subscription, specifically at [Layer 3](https://day8.github.io/re-frame/subscriptions/#the-four-layers)
  since it build upon those additional input signals at Layer 2, such as our `:data` input.

  Remember, we've taken the tack (draw from Re-com) of using keyword identified parameters, so this
  work if you use Re-com-like format:

  `[component :data {}]`

  or a complete hash-map:

  `[component {:data {}}]`

  - data  : keyword that identifies the input subscription.

  > Note: In the 'real world,' a function might need multiple inputs. These would each be defined when creating
  > the function implementation. In our case, we are implementing a bare minimum function: one in, one out.

  - sub-name : keyword that defines the global name for this subscription. This is used by components
  'downstream' so that they can treat this `:source/fn` as an input to themselves.


  Returns: in this special case, we just return in input value unchanged

  > Note: We also discovered that when users can update the DSL using the flow-diagram we *could* find
  > ourselves in the situation where we've got a `:source/fn` looking for `:data` but with nothing wired into
  > that handle yet (users don't always do thing in a specific order that we've coded for) so we need to
  > provide ***TWO** `reg-sub` implementations, one for when we know the name of the input, and one for when
  > we *don't*. This problem only gets worse when a `:source/fn` needs many parameters, since any combination of them
  > could be 'missing'."

  [{:keys [data sub-name]}]

  ;(log/info "fn-default" data "____" sub-name)

  (if data
    (rf/reg-sub
      (first sub-name)
      :<- data
      (fn [d _]
        (log/info sub-name "fn-default (:data pass through)")
        d))

    (rf/reg-sub
      (first sub-name)
      (fn [_ _]
        (log/info sub-name "fn-default (no :data case)")
        "")))

  (rf/reg-event-fx
    (first sub-name)
    (fn-traced [_ updates]
      (log/info sub-name "fn-default (does nothing)" updates)
      {})))



; register the fn-default as an available :source/fn so the 'compiler' can find it
; when building the UI

; NOTE: it is vital that any :source/fn include AT LEAST 1 :port/source or :port/source-sink
; so that the flow-diagram knows how many input and output handles to draw for the User to
; use for interconnection between components in the DSL
(rf/dispatch-sync
  [:register-meta
   {:fn/fn-default {:function fn-default
                    :ports    {:data :port/source-sink}}}])


(def source-code '[composite
                   :data component/ui-definition
                   :component-id :container.component
                   :container-id :container])


(def default-tool-types {:ui/component  {:label ":ui/component" :type :ui/component :color "green" :text-color :white :border-color "green"}
                         :ui/container  {:label ":ui/container" :type :ui/container :color "transparent" :text-color :gray :border-color "gray"}
                         :source/remote {:label ":source/remote" :type :source/remote :color "orange" :text-color :black :border-color "orange"}
                         :source/local  {:label ":source/local" :type :source/local :color "#ffc966" :text-color :black :border-color "#ffc966"}
                         :source/fn     {:label ":source/fn" :type :source/fn :color "pink" :text-color :black :border-color "pink"}})


(def minimap-styles {:nodeStrokeColor  (partial dag-support/custom-minimap-node-color
                                         dag-support/default-color-pallet diagram/color-white)
                     :node-color       (partial dag-support/custom-minimap-node-color
                                         dag-support/default-color-pallet diagram/color-black)
                     :nodeBorderRadius 5})


(defn config
  "used during initial setup of a new DSL for construction/editing purposes

  - full-config : (hash-map)

  Returns: hash-map for use in the app-db as part of the component's data flow configuration

  > Note: this function does NOT see ot be used, but removing it causes problems"

  [full-config]

  (log/info "config (debug)" full-config)
  {:blackboard {:defs {:source full-config
                       :dag    {:open-details ""}}}
   :container  ""})


(defn- add-flow-node
  "this function add a newly dropped node into the DSL data structure in the appropriate
  locations, namely :mol/components and :mol/flow-nodes, as well as the internal javascript
  data structures used by react-flow (that nasty stateful thing)

  - full-configuration : (r/atom of hash-map) the Mol-DSL before adding the node
  - inputs : (hash-map) this is data provided by the 'dropped' node (see also `dsl-nodes/node-types`)

  > - node-data    : (hash-map) details about the node dragged from the tool panel (see also `dsl-nodes/node-types`)
  > - node-kind-fn : (fn)
  > - orig-data    : (js collection) the nodes currently draw on the flow-diagram
  > - flowInstance : (js object) reference to the specific flow-diagram, in case there are multiple diagrams active
  > - set-nodes-fn : (js callback) function to manipulate the collection of nodes inside the react-flow (stateful JS)
  > - wrapper      : (js object) reference to the parent or wrapping UI object, so we can compute the correct relative position of the new node

  - node-id : (string) unique id of this node within the current Mol-DSL
  - event : (mouse event) the JS event triggering the call, denotes the user's action to add a node to the flow-diagram

  Returns: nil.

  > Note: this function is all about (horrible, nasty, stateful) sid-effect, specifically updating the stateful
  > `full-configuration`, the `orig-data`, and the js nodes themselves (via `set-nodes-fn`)"

  [full-configuration
   {:keys [node-data node-kind-fn orig-data
           flowInstance set-nodes-fn wrapper] :as inputs}
   node-id event]

  ;(log/info "add-flow-node (a)" (:mol/flow-nodes @full-configuration))

  (let [node-type       (.getData (.-dataTransfer event) "editable-flow")
        x               (.-clientX event)
        y               (.-clientY event)
        reactFlowBounds (.getBoundingClientRect @wrapper)]

    (when (not= node-type "undefined")
      (let [position ((.-project @flowInstance) (clj->js {:x (- x (.-left reactFlowBounds))
                                                          :y (- y (.-top reactFlowBounds))}))

            ; this uses a multimethod defined in bh-ui.molecule.composite.dsl-support.dsl-nodes
            new-node ((get node-data node-type)
                      node-id
                      node-type
                      (node-kind-fn node-type)
                      position)]

        ;(log/info "add-flow-node (b)" new-node "//" (-> @full-configuration :mol/flow-nodes))

        ; TODO: update diagram nodes - should use handle-change-path
        (swap! orig-data update :nodes conj new-node)
        (set-nodes-fn (fn [nds] (.concat nds (clj->js new-node))))
        (swap! full-configuration update :mol/flow-nodes conj new-node)))))


(defmulti create-dsl-node
  "multi-method to construct the correct data for each type of node that can be dropped
  onto a DSL editing flow-diagram, categorizes by `node-type`, i.e.: `:ui/component`,
  :source/local`, etc.

  - node-id (string, ignored) identified the newly dropped node with a 'unique' id
  - node-type : (keyword) identifies the category of node"

  (fn [node-id node-type] node-type))


; create-dsl-node :ui/component
(defmethod create-dsl-node :ui/component [node-id node-type]
  {:atm/role  node-type
   :atm/kind  :stunt/text-block
   :atm/label node-id})


; create-dsl-node :source/local
(defmethod create-dsl-node :source/local [node-id node-type]
  {:atm/role         node-type
   :atm/kind         :source/local
   :atm/default-data [{:id 0 :x 0 :y 0}
                      {:id 1 :x 10 :y 10}
                      {:id 2 :x 20 :y 20}]})


; create-dsl-node :source/fn
(defmethod create-dsl-node :source/fn [node-id node-type]
  ;(log/info "create-dsl-node :source/fn" node-id node-type)
  {:atm/role node-type
   :atm/kind :fn/fn-default})


; create-dsl-node :default
(defmethod create-dsl-node :default [node-id node-type]
  ;(log/info "create-dsl-node :default" node-id node-type)
  {:atm/role node-type :atm/kind node-type})


(defn- add-dsl-node
  "added appropriate information about a new node the user dropped onto the flow-diagram into the
  correct parts of the Mol-DSL (passed as `configuration`)

  - configuration : (r/atom of hash-map) the Mol-DSL, plus additional okaying data
  - component-id : (string/keyword) unique id of this component
  - container-id : (string/keyword) unique id of the parent container, the one that holds *this* component
  - node-id : (string) unique id of this node within the current Mol-DSL
  - event : (mouse event) the JS event triggering the call, denotes the user's action to add a node to the flow-diagram

  > Note: `configuration` carries more data than just the 5 Mol-DSL keys (`:mol/*`). These are
  > used internally as part of the 'compilation' and visual dsl editing. All we are only concerned with updating
  > the required keys.

  Returns nil. Again, this function is only about making the appropriate stateful side-effects. This function
  manipulates the `:layout` attribute of the container/component in the app-db, `:mol/components`, and `:mol/grid-layout`
  (only if the new node is a :ui/component`)
  "

  [configuration component-id container-id
   node-id event]
  ;(log/info "add-dsl-node" (type configuration))

  (let [node-type        (h/string->keyword (.getData (.-dataTransfer event) "editable-flow"))
        layout           {:i node-id :x 0 :y 0 :w 10 :h 5 :static true}
        ; we should only add :ui/components to :mol/grid-layout
        add-ui-component (fn [m node-type]
                           ; TODO: we also need to update on :ui/containers, but also, what if this new node is *inside* an existing
                           ;   :ui/container?
                           (if (= :ui/component node-type)
                             (update-in m [:mol/grid-layout] conj layout)
                             m))]

    ; 1) add ui component to the :containers/container/component/blackboard/layout

    (locals/apply-local
      [container-id component-id]
      [:layout]
      #(conj (or % []) layout))

    ; 2) add to the DSL
    (swap! configuration
      #(some-> %
         (assoc-in [:mol/components node-id] (create-dsl-node node-id node-type))
         (add-ui-component node-type)))))


(defn- on-drop
  "we need a custom (on-drop) as part of the DAG panel because we need to manipulate
  the Mol-DSL configuration itself, as well as the flow-layout (nodes & edges) that
  are shown in react-flow.

  In th case of the Mol-DSL UI, we need to tack on the :mol/components and such, so that
  will come in as the first param. the flow-diagram component itself will partial
  in the hash-map of additional information, and the JS callback will pop on the drop EVENT.

  - full-configuration : (r/atom of hash-map) the Mol-DSL before adding the node

  - container-id : (string/keyword) unique id of the parent container, the one that holds *this* component
  - inputs : (hash-map) this is data provided by the 'dropped' node (see also `dsl-nodes/node-types`)

  > - component-id : (string/keyword) unique id of this component
  >
  > the rest are not used in this function, but are passed along to the 'working' functions; `add-flow-node` and `add-dsl-node`

  - node-id : (string) unique id of this node within the current Mol-DSL
  - event : (mouse event) the JS event triggering the call, denotes the user's action to add a node to the flow-diagram

  Returns nil. Purpose is the side-effects performed by `add-flow-node` and `add-dsl-node`
  "

  [full-configuration component-id container-id
   {:keys [component-id node-data node-kind-fn orig-data
           flowInstance set-nodes-fn wrapper] :as inputs} event]

  (.preventDefault event)

  (log/info "on-drop" (type full-configuration) "//" (keys @full-configuration))

  (let [node-type (.getData (.-dataTransfer event) "editable-flow")
        node-id   (str node-type "-" (swap! next-id inc))]

    ; a new flow-node to the data that was sent to the diagram and the data
    ; stored inside the diagram
    (add-flow-node full-configuration inputs node-id event)

    ; now, add a new dsl-node to the full-configuration (that was passed in from the outside world)
    (add-dsl-node full-configuration component-id container-id
      node-id event)))


(defn- add-flow-edge
  "Turn a mouse event, used when the user links 2 nodes on a flow-diagram together, into the
  necessary dat structure updates.

  - full-configuration : (r/atom of hash-map) the Mol-DSL before adding the node
  - inputs : (hash-map) this is data provided by the 'dropped' node (see also `dsl-nodes/node-types`)

  > - orig-data    : (js collection) the nodes currently draw on the flow-diagram
  > - set-edges-fn : (js callback) function to manipulate the collection of edges inside the react-flow (stateful JS)

  - event : (mouse event) the JS event triggering the call, denotes the user's action to link 2 nodes in the flow-diagram

  Returns nil. Again, this is all about the side-effects, specifically those to the orig-data (atom)
  full-configuration (r/atom) and the internal react-flow data structure via set-edges-fn.
  "

  [full-configuration
   {:keys [orig-data flowInstance set-edges-fn wrapper] :as inputs}
   event]

  (let [event-map     (js->clj event :keywordize-keys true)
        source-id     (:source event-map)
        source-handle (:sourceHandle event-map)
        target-id     (:target event-map)
        target-handle (:targetHandle event-map)
        color         :black
        edge-id       (str source-id "->" target-id)
        new-edge      {:id           edge-id
                       :source       source-id
                       :sourceHandle source-handle
                       :target       target-id
                       :targetHandle target-handle
                       :style        {:stroke color :strokeWidth 1}
                       :markerEnd    {:type  (.-ArrowClosed MarkerType)
                                      :width 10, :height 10, :color color}}]

    ; TODO: need to convert to handle-change-path
    (swap! orig-data assoc :edges (conj (:edges @orig-data) new-edge))
    (swap! full-configuration update :mol/flow-edges conj new-edge)
    (set-edges-fn (fn [e] (.concat e (clj->js new-edge))))))


(defn- prep-handle
  "turns the id of a react-flow 'Handle' into the keywords used by the meta-daa registry of
  component implementations. Since the flow-diagram needs to support separate inputs and outputs, and
  the meta-data has the notion of bidirections ':ports', we need this translation.

  For example, the :data input for :fn/fn-default must become both input ('data-in') and output
  ('data-out'). Since those strings get passed around inside the react-flow JS stuff, we need to
  turn them back when we want to manipulate the DSL.

  This function find the suffix, strips it, and turns the resulting string into a keyword.

  > Note: the caller understands if the 'unadorned' keyword mean input or output.

  Returns: (keyword) the stripped down identifier of the component link port."

  [handle]
  (-> handle
    (clojure.string/split "-")
    first
    keyword))


(defn- add-dsl-edge
  "updated the edge data in the `:mol/links` key in the `configuration` (r/atom).

  We pull out the source and target node and handle information, format the data structure, and
  put it into the DSL.

  - configuration : (r/atom of hash-map) the DSL
  - event : (mouse event) the event of the user's intent to connect 2 nodes on the react-flow diagram


  Returns nil. As usual for this namespace, this is all about the side-effects
  "

  [configuration event]

  (let [event-map     (js->clj event :keywordize-keys true)
        source-id     (:source event-map)
        source-handle (:sourceHandle event-map)
        target-id     (:target event-map)
        target-handle (:targetHandle event-map)]

    ;(log/info "add-dsl-edge"
    ;  ;configuration
    ;  "//" event
    ;  "//" event-map
    ;  "//" (-> configuration :mol/links keys)
    ;  "_____" source-handle "//" (prep-handle source-handle)
    ;  "_____" target-handle "//" (prep-handle target-handle))

    (swap! configuration update-in [:mol/links source-id]
      #(merge-with merge %
         {(prep-handle source-handle) {target-id (prep-handle target-handle)}}))))


(defn on-connect
  "we need the full-configuration to add the new edge into the original dat passed into
  the diagram from the 'outside world'

  also, having access to the `full-configuration` will allow us to look up the `:kind` (or `:kind-js`)
  of the source node which we can use to determine the color of the connection line.

  - full-configuration : (r/atom of hash-map) the Mol-DSL before adding the node
  - inputs : (hash-map) this is data provided by the 'dropped' node (see also `dsl-nodes/node-types`)
  - component-id : (string/keyword) unique id of this component
  - container-id : (string/keyword) unique id of the parent container, the one that holds *this* component
  - event : (mouse event) the JS event triggering the call, denotes the user's action to add a node to the flow-diagram

  Returns nil. As expected in this namespace, this function is all about side-effects on the stateful DSL
  attributes via `add-dsl-edge` and `add-flow-edge`
  "

  [full-configuration component-id container-id inputs event]

  ;(log/info "on-connect" (js->clj event :keywordize-keys true))

  ; now, add a new dsl-node to the full-configuration (that was passed in from the outside world)
  (add-dsl-edge full-configuration event)

  ; add a new flow-edge to the data that was sent to the diagram and the data
  ; stored inside the diagram
  (add-flow-edge full-configuration inputs event))


(defn definition-panel
  "show the text definition of the composed UI in [Mol-DSL](docs/mol-dsl.md)
  "

  [& {:keys [configuration]}]

  (let [components (:mol/components @configuration)
        links      (:mol/links @configuration)
        layout     (:mol/grid-layout @configuration)
        nodes      (:mol/flow-nodes @configuration)
        edges      (:mol/flow-edges @configuration)]

    ;(log/info "definition-panel" components)
    ;(log/info "definition-panel" links)
    ;(log/info "definition-panel" layout)

    (fn [& {:keys [configuration]}]
      [rc/v-box :src (rc/at)
       :width "70%"
       ;:height "100%"
       :gap "10px"
       :children [[:h3 "Components"]
                  [containers/v-scroll-pane {:height "10em"}
                   [layout/text-block (str components)]]

                  [:h3 "Links"]
                  [containers/v-scroll-pane {:height "10em"}
                   [layout/text-block (str links)]]

                  [:h3 "Layout"]
                  [containers/v-scroll-pane {:height "10em"}
                   [layout/text-block (str layout)]]

                  [:h3 "Node for the Editor"]
                  [containers/v-scroll-pane {:height "10em"}
                   [layout/text-block (str nodes)]]

                  [:h3 "Edges for the Editor"]
                  [containers/v-scroll-pane {:height "10em"}
                   [layout/text-block (str edges)]]]])))


(defn- make-drag-tools
  "turns the descriptions of the needed 'tools' (the UI elements a user can drag from the
  toolbar onto the DSL flow-diagram

  - tools : (hash-map)

  Returns vector of [Hiccup](https://reagent-project.github.io) components, one for each
  specification in `tools`"

  [tools]

  (->> tools
    (map diagram/make-draggable-node)
    (into [])))


(defn dag-panel
  "show the Mol-DSL (a directed acyclic graph, or DAG), built from the configuration in [Mol-DSL](docs/mol-dsl.md)
  passed into the component, in a panel (alongside the actual UI)

  - configuration : (r/atom of hash-map) the Mol-DSL before adding the node
  - component-id : (string/keyword) unique id of this component
  - container-id : (string/keyword) unique id of the parent container, the one that holds *this* component
  - node-dblclick-fn : (function) callback to do the Mol-DSL specifics of editing a node on the flow-diagram that the User double-clicks on, indication that they want to edit the properties

  Returns Hiccup (using [Re-com](https://github.com/Day8/re-com)) for he DSL editor panel of the overall molecule UI
  "

  [& {:keys [configuration component-id container-id ui node-dblclick-fn]}]


  (reset! last-config configuration)

  (let [show?     (r/atom false)
        form-data (r/atom {})]
    (fn []

      ;(log/info "dag-panel" diagram/component)

      [rc/h-box :src (rc/at)
       :gap "10px"
       :children [[rc/v-box :src (rc/at)
                   :gap "5px"
                   :padding "5px"
                   :height "100%"
                   :style {:border "1px solid gray" :border-radius "4px"}
                   :children (make-drag-tools default-tool-types)]
                  [diagram/component
                   :component-id component-id
                   :data configuration
                   :config {:node-types     (dsl/node-types node-dblclick-fn form-data show?)
                            :node-data      dsl/bootstrap-node-data
                            :node-kind-fn   dsl/default-node-kind
                            :minimap-styles dsl/minimap-styles
                            :on-drop        (partial on-drop configuration component-id container-id)
                            :on-connect     (partial on-connect configuration component-id container-id)
                            :style          {:width "1200px" :height "700px"}}
                   :tool-types dag-support/default-tool-types
                   :minimap-styles minimap-styles]
                  (when @show?
                    (do
                      (log/info "if @show?" show?)
                      (r/as-element [modal/modal
                                     [edit-dialog/edit-modal configuration
                                      form-data show?]
                                     show?])))]])))





;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; region ; rich comments



; merge in the new links with what is already there
(comment
  (do
    (def configuration {:mol/links {"source-1" {:data {"target-1" :data}}}})
    (def source-id "source-2")
    (def source-handle :data)
    (def target-id "target-2")
    (def target-handle "data-in"))

  (merge-with merge
    (get-in configuration [:mol/links source-id])
    {(prep-handle source-handle) {target-id (prep-handle target-handle)}})


  (update-in configuration [:mol/links source-id]
    #(merge-with merge %
       {(prep-handle source-handle) {target-id (prep-handle target-handle)}}))

  (keys @last-config)
  (type @last-config)
  (:edges @last-config)
  (:flow-nodes @last-config)
  (:mol/links @last-config)


  (keys @last-new-edge)
  (:flow-edges @last-new-edge)
  (:mol/links @last-new-edge)

  ())



;; basics of Loom (https://github.com/aysylu/loom)
(comment
  (do
    (def g (lg/graph [1 2] [2 3] {3 [4] 5 [6 7]} 7 8 9))
    (def dg (lg/digraph g))
    (def wg (lg/weighted-graph {:a {:b 10 :c 20} :c {:d 30} :e {:b 5 :d 5}}))
    (def wdg (lg/weighted-digraph [:a :b 10] [:a :c 20] [:c :d 30] [:d :b 10]))
    (def fg (lg/fly-graph :successors range :weight (constantly 77))))


  (lg/nodes g)
  (lg/edges g)
  (lg/has-node? g 5)
  (lg/weighted-graph g)

  (lg/nodes fg)

  ())


;; how do we use Loom for our composite?
(comment
  (def composite-def {})

  ; a Loom digraph only needs EDGES (:links)
  (def edges (->> composite-def
               :mol/links
               (mapcat (fn [[entity links]]
                         (map (fn [[target port]]
                                [entity target])
                           links)))
               (into [])))


  ; with THIS set of edges, sources and sinks all look like successors
  (def g (apply lg/digraph edges))

  ())




;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;
;
; THIS IS THE ONE!!!
;
;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;
;; piece together the data needed to build all the UI components and supporting functions
(comment
  (do
    (def config bh-ui.molecule.composite.simple-multi-chart/ui-definition)
    (def container-id "dummy")
    (def links (:mol/links config))
    (def layout (:mol/layout config))
    (def components (:mol/components config))
    (def graph (apply lg/digraph (ui/compute-edges config)))
    (def nodes (lg/nodes graph))
    (def edges (lg/edges graph))
    (def registry @(rf/subscribe [:meta-data-registry]))

    (def configuration (assoc @bh-ui.molecule.composite.coverage-plan/ui-definition
                         :graph graph
                         :denorm (dig/denorm-components graph (:mol/links config) (lg/nodes graph))
                         :nodes (lg/nodes graph)
                         :edges (lg/edges graph))))

  ;; 1. build the functions... (how? where?)
  ;; region
  ;;
  ;; actually, since the functions "subscribe" to some inputs and then produce something
  ;; that "others" subscribe to, they need to be "cascaded subscriptions" themselves,
  ;; so we will actually build the subscriptions alongside step 2, using the data we assemble here
  ;; (input signals, and the "subscription name(s)")
  ;;
  ;; NOTE: these functions need to produce ONE subscription for each :port/source
  ;;
  ;; for example,
  ;;
  ;;         {:fn/compute {:name some-computation
  ;;                       :ports {:input :port/sink
  ;;                               :computed-output :port/source}}}
  ;;
  ;; builds the equivalent of:
  ;;
  ;;         (re/frame/reg-sub-db
  ;;           :container/blackboard.computed-output
  ;;           :<- [:container/blackboard.input]
  ;;           (fn [input [_ _]]
  ;;              (some-computation* input))
  ;;
  ;;;
  ;; something like,
  ;;
  ;;         {:fn/compute {:name some-computation
  ;;                       :ports {:input-1 :port/sink
  ;;                               :input-2 :port/sink
  ;;                               :computed-output :port/source}}}
  ;;
  ;; would build the equivalent of:
  ;;
  ;;         (re/frame/reg-sub-db
  ;;           :container/blackboard.computed-output
  ;;           :<- [:container/blackboard.input-1]
  ;;           :<- [:container/blackboard.input-2]
  ;;           (fn [input-1 input-2 [_ _]]
  ;;              (some-computation* input-1 input-2))
  ;;
  ;; endregion


  ;; we could mix-in the "local name" for each link by mapping over the
  ;; successors and predecessors

  ;; actually, now it looks like :links already has all the names we need, we just need to
  ;; make the distinction between :inputs and :outputs for the flow-diagram (the UI Layout doesn't
  ;; need this data) But, I think we can use this function to split the flow-diagram data from the
  ;; UI-layout data (and putting BOTH into the expanded data configuration structure)


  ;; let's just use the terms :inputs and :outputs and drop the preds/succs

  ;; outputs
  ;; region
  (def source :fn/coverage)

  (->> links
    source
    (map (fn [[source-port target-meta]]
           (apply merge
             (map (fn [[target target-port]]
                    {target [source-port target-port]})
               target-meta))))
    (apply merge))


  {:fn/range {:outputs (dig/get-outputs links :fn/range)}}
  (dig/get-outputs links :fn/coverage)

  ; map over all the components (:ui/globe & :ui/current-time should have not outputs!)
  (->> nodes
    (map (fn [node]
           {node (dig/get-outputs links node)})))


  ;; endregion


  ;; inputs
  ;; region
  (def node :ui/globe)


  ; find components with :ui/globe as a target (ie. predecessors of :ui/globe
  (def preds (lg/predecessors* graph source))

  ; then map over then and pull out their source-port and the target meta-data for
  ; :ui/globe

  (->> node
    (lg/predecessors* graph)
    (map (fn [p]
           (apply merge
             (map (fn [[source-port targets]]
                    (let [target-port (get targets node)]
                      {p [source-port target-port]}))
               (get links p)))))
    (into {}))

  (:topic/coverage-data links)

  (dig/get-inputs links graph :ui/globe)
  (dig/get-inputs links graph :fn/range)


  (->> nodes
    (map (fn [node]
           {node (dig/get-inputs links graph node)})))

  ;; endregion


  ;; now put is all together
  ;; region

  (->> nodes
    (map (fn [node]
           {node
            {:inputs  (dig/get-inputs links graph node)
             :outputs (dig/get-outputs links node)}}))
    (into {}))

  (dig/denorm-components graph links nodes)

  ;; endregion

  ; GOT IT!
  ;
  ; we can now work from any node to its inputs and outputs,
  ; which means we can build the signal vectors for the ui elements
  ;
  ; AND a react-flow diagram of the event-mode for the UI!
  ;


  ; QUESTION: should we mix-in the notion of :local and :remote right here, so we can
  ; build the correct subscription/event signals?
  ;
  ; OR we can leave that logic to the function that actually builds the signal vectors (see
  ;    Step 2)
  ;        THIS requires looking at the component's meta-data
  ;
  ; OR we could leave it to the component itself to build the correct vector(s)
  ;
  ; what about the flow-diagram?
  ;


  ; 2. build the subscription and event signal vectors (just call them)
  ;; region
  (defn dummy [& {:keys [data range]}]
    {:data data :range range})

  (def target :topic/coverage-data)
  (def thing {:data [:topic/coverage-data], :range [:topic/time-range]})

  (flatten (seq thing))

  (apply conj [:dummy] (flatten (seq thing)))


  (->> components
    (filter (fn [[node meta-data]]
              (= :ui/component (:type meta-data))))
    (map (fn [[node meta-data]]
           (sig/component->ui {:node          node
                               :type          (:type meta-data)
                               :configuration configuration
                               :registry      @(rf/subscribe [:meta-data-registry])
                               :container-id  :dummy}))))

  ;; endregion


  ; the correct order of operations is:
  ;
  ; 1. remote subscriptions (including the remote call)
  ;
  ; [SIDE EFFECT]
  (sig/process-components configuration :source/remote @(rf/subscribe [:meta-data-registry]) :coverage-plan)

  ; 1a. build the subscription for the "container" which provide the basis for the
  ;     subscriptions for the "locals"
  ;
  ; [SIDE EFFECT]
  (ui-utils/create-container-sub container-id)


  ; 2. add blackboard data to the app-db and build local subscriptions/events against the blackboard
  ;
  ; [SIDE EFFECT]
  (sig/process-components configuration :source/local @(rf/subscribe [:meta-data-registry]) :coverage-plan)

  ; 3. local functions (to build subscriptions against the blackboard or remotes)
  ;
  ; [SIDE EFFECT]
  (sig/process-components configuration :source/fn @(rf/subscribe [:meta-data-registry]) :coverage-plan)

  ; 4. build UI components (with subscriptions against the blackboard or remotes)
  ;
  ;      actually, this can happen at any time, since evaluation is deferred to Reagent upon re-render
  ;
  ; this just builds the vectors and maps them to the component-id in the configuration in pre for Step 5
  ;
  (def component-lookup (into {}
                          (sig/process-components
                            configuration :ui/component
                            @(rf/subscribe [:meta-data-registry]) :coverage-plan)))

  ; 5. run layout over the UI components using component-lookup
  ;



  ())


; get the different handle names, so we can put multiple handles on a single node
; and then also connect the different edges to the correct one
(comment
  (def configuration @bh-ui.molecule.composite.coverage-plan/ui-definition)
  (def node-id :ui/globe)
  (def target-id :topic/selected-coverages)

  (or (get-in configuration [:mol/links node-id target-id])
    (get-in configuration [:mol/links target-id node-id]))

  ())


; new logic for building the flow-nodes, so we can have custom node rendering
(comment
  (do
    (def node-id :fn/range)
    (def graph (apply lg/digraph (ui/compute-edges @bh-ui.molecule.composite.coverage-plan/ui-definition)))
    (def configuration
      (assoc @bh-ui.molecule.composite.coverage-plan/ui-definition
        :graph graph
        :denorm (dig/denorm-components graph (:mol/links configuration) (lg/nodes graph))
        :nodes (lg/nodes graph)
        :edges (lg/edges graph))))

  (:denorm configuration)

  (get-in configuration [:denorm :fn/coverage :inputs])

  (def components (:mol/components configuration))


  (map (fn [[node meta-data]]
         ^{:key node} [:p (str node)])
    (filter (fn [[node {:keys [type]}]]
              (= :ui/component type))
      components))

  (keys components)


  ())


(comment
  (do
    (def data @bh-ui.molecule.composite.coverage-plan/ui-definition)
    (def graph (apply lg/digraph (ui/compute-edges @bh-ui.molecule.composite.coverage-plan/ui-definition)))
    (def nodes (lg/nodes graph))
    (def links (:mol/links data))
    (def components (:mol/components data))
    (def configuration (assoc @bh-ui.molecule.composite.coverage-plan/ui-definition
                         :mol/components (dig/expand-components data @(rf/subscribe [:meta-data-registry]))
                         :graph graph
                         :nodes (lg/nodes graph)
                         :edges (lg/edges graph)))

    (def node-meta (->> links :ui/satellites)))


  (->> data
    :mol/components
    (map (fn [[id meta-data]]
           {id (assoc meta-data
                 :ports
                 (condp = (:type meta-data)
                   :ui/component (->> components id :atm/kind @(rf/subscribe [:meta-data-registry]) :ports)
                   :source/remote {:port/pub-sub :data}
                   :source/local {:port/pub-sub :data}
                   :source/fn (:ports meta-data)))}))
    (assoc data :mol/components))

  (dig/expand-components data @(rf/subscribe [:meta-data-registry]))

  (map #(assoc % :ports "x") (:mol/components data))


  (def target-meta (map (fn [[target _]] (target @(rf/subscribe [:meta-data-registry]))) node-meta))

  (dig/denorm-components graph links nodes)


  ())


; token substitution
(comment
  (do
    (def config @bh-ui.molecule.composite.coverage-plan/ui-definition)
    (def container-id "dummy")
    (def links (:mol/links config))
    (def layout (:mol/layout config))
    (def components (:mol/components config))
    (def graph (apply lg/digraph (ui/compute-edges config)))
    (def nodes (lg/nodes graph))
    (def edges (lg/edges graph))
    (def registry @(rf/subscribe [:meta-data-registry]))

    (def configuration (assoc @bh-ui.molecule.composite.coverage-plan/ui-definition
                         :graph graph
                         :denorm (dig/denorm-components graph (:mol/links config) (lg/nodes graph))
                         :nodes (lg/nodes graph)
                         :edges (lg/edges graph)
                         :ui-lookup (into {}
                                      (sig/process-components
                                        configuration :ui/component
                                        @(rf/subscribe [:meta-data-registry]) :coverage-plan))))
    (def component-lookup (into {}
                            (sig/process-components
                              configuration :ui/component
                              @(rf/subscribe [:meta-data-registry]) :coverage-plan)))
    (def node :h-box))

  (:ui-lookup configuration)

  ;(parse-token component-lookup node)

  ;(into (parse-token lookup node) [:children [:a :b :c]])


  ())


; subscription scratchpad
(comment
  (ui-utils/subscribe-local :coverage-plan-demo.component
    [:blackboard :topic/current-time])

  (ui-utils/dispatch-local :coverage-plan-demo.component
    [:blackboard :topic/current-time] (js/Date.))


  (rf/reg-sub
    :coverage-plan-demo.component.blackboard.topic.time-range
    :<- [:coverage-plan-demo.component.blackboard.topic.current-time]
    (fn [t _]
      [0 t]))


  (rf/reg-sub
    :coverage-plan-demo.component.blackboard.topic.layers
    :<- [:coverage-plan-demo.component.blackboard.topic.selected-targets]
    :<- [:coverage-plan-demo.component.blackboard.topic.selected-satellites]
    :<- [:bhui.subs/source :topic/coverage-data]
    (fn [t s c _]
      [{:layer-1 {} :layer-2 {}}]))


  (ui-utils/dispatch-local :coverage-plan-demo.component
    [:blackboard :topic/current-time] 75)


  (rf/subscribe [:coverage-plan-demo.component.blackboard.topic.current-time])
  (rf/subscribe [:coverage-plan-demo.component.blackboard.topic.selected-targets])
  (rf/subscribe [:coverage-plan-demo.component.blackboard.topic.selected-satellites])
  (rf/subscribe [:bhui.subs/source :source/targets])
  (rf/subscribe [:bhui.subs/source :source/satellites])
  (rf/subscribe [:bhui.subs/source :source/coverages])

  (rf/subscribe [:coverage-plan-demo.component.blackboard.topic.layers])
  (rf/subscribe [:coverage-plan-demo.component.blackboard.topic.time-range])

  ())



; have to actually CALL the fn/subcription we built!
(comment
  (do
    (def config @bh-ui.molecule.composite.coverage-plan/ui-definition)
    (def container-id :coverage-plan-demo.component)
    (def links (:mol/links config))
    (def layout (:mol/layout config))
    (def components (:mol/components config))
    (def graph (apply lg/digraph (dig/compute-edges config)))
    (def nodes (lg/nodes graph))
    (def edges (lg/edges graph))
    (def registry @(rf/subscribe [:meta-data-registry]))

    (def configuration (assoc @bh-ui.molecule.composite.coverage-plan/ui-definition
                         :graph graph
                         :denorm (dig/denorm-components graph (:mol/links config) (lg/nodes graph))
                         :nodes (lg/nodes graph)
                         :edges (lg/edges graph)
                         :ui-lookup (into {}
                                      (sig/process-components
                                        configuration :ui/component
                                        @(rf/subscribe [:meta-data-registry]) :coverage-plan))))
    (def component-lookup (into {}
                            (sig/process-components
                              configuration :ui/component
                              @(rf/subscribe [:meta-data-registry]) :coverage-plan)))
    (def node :fn/range)

    (def actual-fn (->> configuration :mol/components node :atm/kind))
    (def denorm (->> configuration :denorm node)))

  ())


(comment
  (def components [[[:div "1"] [empty] [:div "2"]]
                   [[empty] [:div "3"] [:div "4"]]])
  (layout/layout components)

  ())

; make sure the event handler preserves the ordering of the components in the DSL
(comment
  (def id "dummy")
  (def c {:containers {id (config id)}})

  ((partial apply conj) [] [[:a :b] [:c :d]])

  ; using DSL (in progress, see component-layout
  (def components [[[:div "1"]]
                   [[:div "2"]]])
  (def components [[[:div "1"] [empty] [:div "2"]]
                   [[:div "3"] [:div "4"]]])

  (update-in c [:containers id :mol/components] (partial apply conj) components)

  ())


(comment



  ())


;; endregion

