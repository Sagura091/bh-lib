(ns bh-ui.molecule.composite.util.ui
  "This namespace provide a number of function to support molecule/grid-container and related
  namespaces, mostly related to the nodes and edges of both the visual (UI) representation
  (`:mol/components` and `:mol/grid-layout`) and editing representation via [react-flow](https://reactflow.dev/)
  (`:mol/flow-nodes` and `:mol/flow-edges`)"

  (:require [cljs.core.match :refer-macros [match]])
  (:require [bh-ui.atom.diagram.diagram.dagre-support :as dagre]
            [bh-ui.molecule.composite.util.signals :as sig]
            [bh-ui.utils.locals :as ul]
            [reagent.core :as r]
            [day8.re-frame.tracing :refer-macros [fn-traced]]
            [taoensso.timbre :as log]
            ["reactflow$default" :as ReactFlow]
            ["reactflow" :refer (ReactFlowProvider MiniMap Controls
                                  Handle MarkerType
                                  NodeToolbar NodeResizer
                                  Background MarkerType
                                  applyNodeChanges
                                  applyEdgeChanges
                                  useNodesState
                                  useEdgesState
                                  useCallBack Handle Position)]))


(log/info "bh-ui.molecule.composite.util.ui")


; some atoms to help with debugging (this namespace supports all sorts of stateful stuff)
(defonce last-params (atom nil))
(defonce last-flow-edge (atom nil))
(defonce last-flow (atom nil))
(defonce last-nodes (atom nil))


(def x-offset 25)
(def y-offset 50)
(def x-gap 25)
(def y-gap 25)
(def width 75)
(def width-offset 100)
(def height 25)
(def height-offset 50)


(def handle-style {:width "8px" :height "8px" :borderRadius "50%"})
(def default-node-style {:padding      "3px" :max-width "180px"
                         :borderRadius "5px" :margin :auto
                         :background   :white :color :black})
(def node-style {:ui/component  {:background :green :color :white}
                 :source/remote {:background :orange :color :black}
                 :source/local  {:background :salmon :color :black}
                 :source/fn     {:background :pink :color :black}})


(defn sub-layout
  "returns the diagram's layout, making sure the `parent` node has data. If the node is new and doesn't yet have any
  internal layout, we create one with  keys for `:children`, the nodes `:size` (which will vary to accommodate all its
  children when they are added), and the position offset for the `:next` child

  - layout : (hash-map) hold the visual properties of each node on the diagram
  - parent : (string) ID of the relevant node, specifically a `:ui/container` node as they are the only ones that can have children

  Returns the entire diagram's layout, possibly with new entries for the `parent` node."

  [layout parent]
  (if (nil? (get-in layout [parent :children]))
    (update layout parent
      #(assoc % :children {}
                :size {:width 0 :height 0}
                :next {:x x-offset :y y-offset}))
    layout))


(defn set-position
  "need to worry about the order of nodes, so that react-flow sets up the parent/child stuff
  correctly. 5 cases, in order:

         parent    children
   0) [   nil        true   ]     <- :diagram (not needed in :mol/dsl-layout) [root]
   1) [ :diagram     nil    ]     <- stand-alone components                   [rhizome?]
   2) [ :diagram     true   ]     <- outermost containers                     [trunk]
   3) [ true         true   ]     <- 'contained' containers                   [branches]
   4) [ true         nil    ]     <- children, at any level                   [leaves]"

  [layout parent child]
  (let [current-layout (sub-layout layout parent)
        position       (get-in current-layout [parent :next])]

    (-> current-layout
      (assoc-in [parent :children child :parent] parent)
      (assoc-in [parent :children child :position] position)
      (assoc-in [child :parent] parent)
      (assoc-in [child :position] position)
      (update-in [parent :next] (fn [{x :x y :y}]
                                  (let [[new-x new-y] (if (< x 300)
                                                        [(+ x width-offset x-gap) y]
                                                        [x-offset
                                                         (if (< y 300)
                                                           (+ y height-offset y-gap)
                                                           y-offset)])]
                                    {:x new-x :y new-y}))))))


(defn compute-size
  "compute the size (width/height) of a node

  - node : (hash-map)

  Returns hash-map of the computed width and height

  > Note: width and height are both -1 when no `node` is provided"

  [node]
  (if node
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
      {:width  (+ x-gap (- max-x min-x) (* x-offset 2) x-gap)
       :height (+ y-gap (- max-y min-y) (* y-offset 2) y-gap)})

    {:width -1 :height -1}))


(defn- open-details
  "open-details is only used by the flow-diagram examples as a placeholder for a function that actually
  does something appropriate"

  [open-details? node]
  (reset! open-details? (js->clj node)))
;(log/info "open-details" @open-details?))


(defn- get-handle-in
  "get the input handle for the node given by `id`

  - config : (hash-map) the DSL
  - id : (string) id of the node in question
  - port : (keyword) id of the port in question

  Returns the id, a string since we are talking about data needed for the JS react-flow diagram, of the respective port"

  [config id port]
  ;(log/info "get-handle-in" id port)
  (let [kind (get-in config [:mol/components id :atm/kind])]
    (get-in (bh-ui.atom.component-registry/lookup-component kind)
      [:handles :inputs port])))


(defn- get-handle-out
  "get the output handle for the node given by `id`

  - config : (hash-map) the DSL
  - id : (string) id of the node in question
  - port : (keyword) id of the port in question

  Returns the id, a string since we are talking about data needed for the JS react-flow diagram, of the respective port"

  [config id port]
  ;(log/info "get-handle-out" id port)
  (let [kind (get-in config [:mol/components id :atm/kind])]
    (get-in (bh-ui.atom.component-registry/lookup-component kind)
      [:handles :outputs port])))


(defn create-flow-node
  "build the node data structure we need to draw the node in the flow-diagram

  - configuration : (hash-map) the 'augmented' DSL, because it includes `:flow-nodes` which is more JS-like than the `:mol/*` attributes
  - node-id : (string) id of the node we want to build the data structure of

  Returns hash-map of the data describing the node and it's properties in a format compatible with the flow-diagram
  "

  [configuration node-id]

  (reset! last-params {:config configuration :id node-id})

  (let [node-role  (get-in configuration [:mol/components node-id :atm/role])
        node-kind  (get-in configuration [:mol/components node-id :atm/kind])
        position   (get-in configuration [:flow-nodes node-id :position])
        parentNode (get-in configuration [:flow-nodes node-id :parent])
        size       (get-in configuration [:flow-nodes node-id :size])
        children   (merge []
                     (get-in configuration [:mol/components node-id :atm/child])
                     (get-in configuration [:mol/components node-id :atm/children]))
        ret        (merge {:id       (str node-id)
                           :type     (str node-role)
                           :data     (merge {:label    (str node-id)
                                             :kind     node-kind
                                             :kind-js  (str node-kind)
                                             :children children
                                             :inputs   (-> configuration
                                                         (get-in [:mol/components node-id :atm/kind])
                                                         bh-ui.atom.component-registry/lookup-component
                                                         :handles
                                                         :inputs
                                                         (#(into {} %)))
                                             :outputs  (-> configuration
                                                         (get-in [:mol/components node-id :atm/kind])
                                                         bh-ui.atom.component-registry/lookup-component
                                                         :handles
                                                         :outputs
                                                         (#(into {} %)))}
                                       (when size {:size size}))
                           :position (or position {:x 0 :y 0})}
                     (when (and parentNode (not= :diagram parentNode))
                       {:parentNode parentNode}))]

    ;(log/info "create-flow-node" node-id "///" node-role
    ;  "///" node-kind
    ;  "@@@@@@@@@@" size
    ;  "///" ret
    ;  "+++++++++++" (get-in configuration [:flow-nodes node-id]))

    ret))


(defn create-flow-edge
  "build the edge data structure we need to draw the edge in the flow-diagram

  - configuration : (hash-map) the 'augmented' DSL, because it includes `:denorm` which is more JS-like than the `:mol/links`
  - idx : (integer) number to assist in generating a unique id for the edge within the flow-diagram
  - edge : (vector) pair of:

  > - source-id : (string) id of the source node the edge starts at
  > - edge-id : (string) if of the node the edge ends at

  Returns hash-map of the data describing the edge and it's properties in a format compatible with the flow-diagram"

  [configuration idx [source-id target-id :as edge]]

  (reset! last-flow-edge {:config configuration :source-id source-id :target-id target-id :edge edge})

  (let [[source-port target-port] (get-in configuration [:denorm source-id :outputs target-id])
        {source-handle :label} (get-handle-out configuration source-id source-port)
        {target-handle :label} (get-handle-in configuration target-id target-port)]

    ;(log/info "create-flow-edge" idx "/" source-id "/" source-port "/" source-handle
    ;  "///" target-id "/" target-port "/" target-handle)

    {:id           (str "edge-" idx)
     :source       (str source-id)
     :sourceHandle (str source-handle)
     :target       (str target-id)
     :targetHandle (str target-handle)
     :label        (str source-handle)
     :style        {:strokeWidth 1 :stroke :black}
     :markerEnd    {:type  (.-ArrowClosed MarkerType)
                    :width 10, :height 10, :color :black}
     :animated     false}))


(defn compute-edges
  "pull out just the relevant edge information from the configuration, so it can be passed into Loom and
  the interconnected digraph can be built

  - configuration : (hash-map) the DSL

  Returns vector of `[source-id target-id]` pairs, one for each link in the DSL
  "

  [configuration]
  (->> configuration
    :mol/links
    (mapcat (fn [[entity links]]
              (mapcat (fn [[source-port targets]]
                        (map (fn [[target target-port]]
                               [entity target])
                          targets))
                links)))
    (into [])))


(defn make-flow
  "take the DSL and augment it with what react-flow needs to draw it onto the display

  - configuration : (r/atom hash-map) the DSL

  Returns 2 things:

  1. a stateful update to the DSL (`configuration`) by adding or updating `:mol/flow-nodes` and `:mol/flow-edges`
  2. hash-map with `:nodes` and `:edges` as well as some configuration parameters for the flow-diagram

  "
  [configuration]

  ;(log/info "make-flow (a)" (keys configuration))

  (reset! last-nodes @configuration)

  (let [flow-nodes (:mol/flow-nodes @configuration)
        flow-edges (:mol/flow-edges @configuration)
        nodes      (if (empty? flow-nodes)
                     (into []
                       (map #(create-flow-node @configuration %)
                         (->> @configuration
                           :flow-nodes
                           (sort-by (fn [[_ v]] (:case v)))
                           (map first)
                           (drop 1)
                           vec)))
                     flow-nodes)
        edges      (if (empty? flow-edges)
                     (into []
                       (map-indexed (fn [idx node]
                                      (create-flow-edge @configuration idx node))
                         (:edges @configuration)))
                     flow-edges)
        flow       {:nodes   nodes
                    :edges   edges
                    :rankdir "TB"
                    :align   "UL"}]

    ;(log/info "make-flow (b)" (:nodes flow))

    (swap! configuration
      #(-> %
         (assoc :mol/flow-nodes nodes)
         (assoc :mol/flow-edges edges)))

    (reset! last-flow flow)

    flow))


(defn prep-environment
  "prepares the 'environment' (i.e., the various app-db entries, re-frame subscriptions and event handlers), necessary
  to support the UI build from the DSL

  - configuration : (hash-map) the DSL
  - component-id : (string or keyword) id of the UI component being built (used for locating things in re-frame)
  - registry : (atom of hash-map) lookup table of all the UI components compiled into the app (esp. :ui/component and :source/fn)

  Returns nil. Everything here is a side-effect on re-frame"

  [configuration component-id registry]
  ;(log/info "prep-environment" component-id)

  ; 1. remote subscriptions (including the remote call)
  ;
  ; [SIDE EFFECT]
  (sig/process-components configuration :source/remote registry component-id)

  ; 2. build the subscription for the "container" which provide the basis for the
  ;     subscriptions for the "locals"
  ;
  ; [SIDE EFFECT]
  (ul/create-container-sub component-id)
  (ul/create-container-local-sub component-id [:blackboard] {})

  ; 3. add blackboard data to the app-db and build local subscriptions/events against the blackboard
  ;
  ; [SIDE EFFECT]
  (sig/process-components configuration :source/local registry component-id)

  ; 4. local functions (to build subscriptions against the blackboard or remotes)
  ;
  ; [SIDE EFFECT]
  (sig/process-components configuration :source/fn registry component-id))





; TODO: 4) need a way to setup parent/child relationship using d&d



;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
; region ; Rich Comment

; fix create-flow-edge
(comment

  (do
    (def configuration (:config @last-params))
    (def node-id (:id @last-params))
    (def node-details (:details @last-params)))



  (do
    (def configuration (:config @last-flow-edge))
    (def source-id (:source-id @last-flow-edge))
    (def target-id (:target-id @last-flow-edge))
    (def edge (:edge @last-flow-edge)))


  (-> configuration
    :denorm
    (get source-id)
    :outputs
    (get target-id)
    first)

  (get-in configuration [:denorm source-id :outputs target-id])


  (->> configuration
    :mol/links
    (mapcat (fn [[entity links]]
              (mapcat (fn [[source-port targets]]
                        (map (fn [[target target-port]]
                               [entity target])
                          targets))
                links)))
    (into []))



  ())



; build handles (for edge connections) from :ports
(comment
  (do
    (def configuration (:config @last-params))
    (def config configuration)
    (def node-id (:id @last-params))
    (def id node-id)
    (def port :data)
    (def node-details (:details @last-params)))

  (get-in configuration [:denorm node-id])

  (def inputs (->> configuration
                (get-in [:denorm node-id :atm/kind])
                bh-ui.atom.component-registry/lookup-component
                :handles
                :inputs
                (#(into {} %))))

  (def outputs (-> configuration
                 (get-in [:mol/components node-id :atm/kind])
                 bh-ui.atom.component-registry/lookup-component
                 :handles
                 :outputs
                 (#(into {} %))))

  (-> configuration
    (get-in [:mol/components node-id :atm/kind]))

  (bh-ui.atom.component-registry/lookup-component :source/local)

  (-> configuration
    (get-in [:mol/components node-id :atm/kind])
    bh-ui.atom.component-registry/lookup-component
    :handles
    :outputs)



  (->>
    (get-in configuration [:denorm node-id :outputs])
    (map (fn [[k [source-port _]]]
           {k source-port}))
    (into {}))



  (get-in config [:mol/components
                  id
                  :atm/kind])

  (def kind (get-in config [:mol/components id :atm/kind]))
  (def comp (get-in (bh-ui.atom.component-registry/lookup-component kind)
              [:handles :outputs port]))


  ())



; gather child/children of :ui/container nodes
(comment
  (do
    (def configuration (:config @last-params))
    (def config configuration)
    (def node-id (:id @last-params))
    (def id node-id)
    (def port :data)
    (def node-details (:details @last-params)))

  (merge []
    (get-in configuration [:mol/components node-id :atm/child])
    (get-in configuration [:mol/components node-id :atm/children]))


  ())


; make layout support reduce, rather than need an atom
(comment

  (do
    (def parent :diagram)
    (def child "data/one")
    (def layout {:diagram {:children {}
                           :parent   nil
                           :size     {:width 0 :height 0}
                           :next     {:x x-offset :y y-offset}}}))

  (-> {:diagram {:children {}
                 :parent   nil
                 :size     {:width 0 :height 0}
                 :next     {:x x-offset :y y-offset}}}
    (set-position :diagram "data/one")
    (set-position :diagram "data/two")

    (set-position :diagram "carousel")
    (set-position "carousel" "v-scroll-1")
    (set-position "v-scroll-1" "table-one")
    (set-position "v-scroll-1" "table-two")

    (set-position "carousel" "v-scroll-2")
    (set-position "v-scroll-2" "table-three")
    (set-position "v-scroll-2" "table-four"))


  (reduce (fn [layout node]
            (let [parent (get (:parent-graph full-config) node)]
              (set-position layout (or parent :diagram) node)))
    {:diagram {:children {}
               :parent   nil
               :size     {:width 0 :height 0}
               :next     {:x x-offset :y y-offset}}}
    (:nodes full-config))




  (def configuration (atom @last-nodes))
  (->> @configuration
    :flow-nodes
    (sort-by (fn [[_ v]] (:case v)))
    (map first)
    (drop 1)
    vec)


  (keys @configuration)


  ())

; endregion
