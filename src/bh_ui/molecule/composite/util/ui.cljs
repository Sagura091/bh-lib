(ns bh-ui.molecule.composite.util.ui
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
                                  Background
                                  applyNodeChanges
                                  applyEdgeChanges
                                  useNodesState
                                  useEdgesState
                                  useCallBack Handle Position)]))


(log/info "bh-ui.molecule.composite.util.ui")


(def last-params (atom nil))
(def last-flow-edge (atom nil))
(def last-flow (atom nil))


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


(defn sub-layout [layout parent]
  (if (nil? (get-in layout [parent :children]))
    (update layout parent
      #(assoc % :children {}
                :size {:width 0 :height 0}
                :next {:x x-offset :y y-offset}))
    layout))


(defn set-position
  "need to worry about the order so that react-flow sets up the parent/child stuff
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


(defn compute-size [node]
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


(defn- open-details [open-details? node]
  (reset! open-details? (js->clj node)))
;(log/info "open-details" @open-details?))


(defn- get-handle-in [config id port]
  ;(log/info "get-handle-in" id port)
  (let [kind (get-in config [:mol/components id :atm/kind])]
    (get-in (bh-ui.atom.component-registry/lookup-component kind)
      [:handles :inputs port])))


(defn- get-handle-out [config id port]
  (log/info "get-handle-out" id port)
  (let [kind (get-in config [:mol/components id :atm/kind])]
    (get-in (bh-ui.atom.component-registry/lookup-component kind)
      [:handles :outputs port])))


(defn create-flow-node
  "convert the nodes, currently organized by Loom (https://github.com/aysylu/loom), into
  the format needed by react-flow (https://reactflow.dev)
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

    (log/info "create-flow-node" node-id "///" node-role
      "///" node-kind
      "@@@@@@@@@@" size
      "///" ret
      "+++++++++++" (get-in configuration [:flow-nodes node-id]))

    ret))


(defn create-flow-edge
  "convert the edges, currently organized by Loom (https://github.com/aysylu/loom), into
  the format needed by react-flow (https://reactflow.dev)
  "
  [configuration idx [source-id target-id :as edge]]

  (reset! last-flow-edge {:config configuration :source-id source-id :target-id target-id :edge edge})

  (let [[source-port target-port] (get-in configuration [:denorm source-id :outputs target-id])
        {source-handle :label} (get-handle-out configuration source-id source-port)
        {target-handle :label} (get-handle-in configuration target-id target-port)]

    (log/info "create-flow-edge" idx "/" source-id "/" source-port "/" source-handle
      "///" target-id "/" target-port "/" target-handle)

    {:id            (str "edge-" idx)
     :source        (str source-id)
     :sourceHandle  (str source-handle)
     :target        (str target-id)
     :targetHandle  (str target-handle)
     :label         (str source-handle)
     :style         {:strokeWidth 1 :stroke :black}
     :arrowHeadType "arrowclosed"
     :animated      false}))


(defn compute-edges
  "pull out just the relevant information from the configuration, so it can be passed into Loom and
  the interconnected digraph can be built
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
  "take the Loom graph and turn it into what react-flow needs to draw it onto the display
  "
  [configuration]

  (log/info "make-flow (a)" (keys configuration))

  (let [flow-nodes (:mol/flow-nodes configuration)
        flow-edges (:mol/flow-edges configuration)
        flow       {:nodes   (if (empty? flow-nodes)
                               (map #(create-flow-node configuration %) (:nodes configuration))
                               flow-nodes)
                    :edges   (if (empty? flow-edges)
                               (map-indexed (fn [idx node]
                                              (create-flow-edge configuration idx node))
                                 (:edges configuration))
                               flow-edges)
                    :rankdir "TB"
                    :align   "UL"}]

    (log/info "make-flow (b)" (:nodes flow))

    (reset! last-flow flow)

    flow))

;(dagre/build-layout flow)))


(defn prep-environment [configuration component-id registry]
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







; TODO: 1) need to build a tree/digraph of the nodes for the flow-diagram, including parent/child stuff
; TODO: 2) Drag new nodes
; TODO: 3) update attributes of nodes (:atm/kind, etc.)
; TODO: 4) need a way to setup parent/child relationship using d&d
; TODO: 5) connect nodes (working??? mostly working???)



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






  ())

; endregion
