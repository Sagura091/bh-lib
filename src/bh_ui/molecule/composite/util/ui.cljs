(ns bh-ui.molecule.composite.util.ui
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


(def handle-style {:width "8px" :height "8px" :borderRadius "50%"})
(def default-node-style {:padding      "3px" :max-width "180px"
                         :borderRadius "5px" :margin :auto
                         :background   :white :color :black})
(def node-style {:ui/component  {:background :green :color :white}
                 :source/remote {:background :orange :color :black}
                 :source/local  {:background :salmon :color :black}
                 :source/fn     {:background :pink :color :black}})


(defn- open-details [open-details? node]
  (reset! open-details? (js->clj node)))
;(log/info "open-details" @open-details?))


(defn- get-handle-in [config id port]
  ;(log/info "get-handle-in" id port)
  (let [kind (get-in config [:mol/components id :atm/kind])]
    (get-in (bh-ui.atom.component-registry/lookup-component kind)
      [:handles :inputs port])))


(defn- get-handle-out [config id port]
  ;(log/info "get-handle-out" id port)
  (let [kind (get-in config [:mol/components id :atm/kind])]
    (get-in (bh-ui.atom.component-registry/lookup-component kind)
      [:handles :outputs port])))


(defn create-flow-node
  "convert the nodes, currently organized by Loom (https://github.com/aysylu/loom), into
  the format needed by react-flow (https://reactflow.dev)
  "
  [configuration node-id]

  (reset! last-params {:config configuration :id node-id})

  (let [node-role (get-in configuration [:mol/components node-id :atm/role])
        node-kind (get-in configuration [:mol/components node-id :atm/kind])
        children (merge []
                   (get-in configuration [:mol/components node-id :atm/child])
                   (get-in configuration [:mol/components node-id :atm/children]))
        ret {:id       (str node-id)
             :type     (str node-role)
             :data     {:label    (str node-id)
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
             :position {:x 0 :y 0}}]

    (log/info "create-flow-node" node-id "///" node-role "///" node-kind "///" ret)

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

    ;(log/info "create-flow-edge" idx "/" source-id "/" source-port "/" source-handle
    ;  "///" target-id "/" target-port "/" target-handle)

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

  (let [flow {:nodes   (map #(create-flow-node configuration %) (:nodes configuration))
              :edges   (map-indexed (fn [idx node]
                                      (create-flow-edge configuration idx node))
                         (:edges configuration))
              :rankdir "TB"
              :align   "UL"}]

    ;(log/info "make-flow (b)" (first (:nodes flow)))

    (dagre/build-layout flow)))


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
              :mol/links       {"data/one" {:data {"table-one" :data}}
                                "data/two" {:data {"table-two" :data}}}
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
    (def graph (apply loom.graph/digraph (compute-edges configuration)))
    (def partial-config (assoc configuration
                          :denorm (bh-ui.molecule.composite.util.digraph/denorm-components
                                    graph (:mol/links configuration) (loom.graph/nodes graph))
                          :nodes (-> configuration :mol/components keys set)
                          :edges (into [] (loom.graph/edges graph))))

    ; at this point we have :graph which does NOT include the :ui/container called "v-scroll"
    ; because it isn't involved in any links. we need to fix this, and we should do that by
    ; adding ANOTHER key (so we don't break anything that is currently working)
    (def containership-graph (->> partial-config
                               :nodes
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

    (def full-config (assoc partial-config
                       :graph graph
                       :containership-graph containership-graph
                       :parent-graph parent-graph
                       :container container-id)))
  ; endregion


  ; region ; make flow-nodes

  (do
    (def node-id "v-scroll-1")
    (def node-role (get-in full-config [:mol/components node-id :atm/role]))
    (def node-kind (get-in full-config [:mol/components node-id :atm/kind]))
    (def children (get-in full-config [:containership-graph node-id]))
    (def parent (get-in full-config [:parent-graph node-id])))


  (def the-node {:id       (str node-id)
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
                             (when parent {:parentNode parent}))
                 :position {:x 0 :y 0}})

  ; endregion

  ; region ; what about positioning the node?

  ; we can use an atom to hold state for each container (with a default one for the overall
  ;   diagram) so we can space each node away from previously processed nodes

  (do
    (def x-offset 25)
    (def y-offset 25)
    (def width 75)
    (def width-offset 100)
    (def height 25)
    (def height-offset 50)

    (def layout (atom {:diagram {:children {}
                                 :parent   nil
                                 :size     {:width 0 :height 0}
                                 :next     {:x x-offset :y y-offset}}}))
    (def parent-id "v-scroll-1")
    (def child-id "table-one")

    (defn sub-layout [layout parent-id]
      (if-let [ret (get @layout parent-id)]
        ret
        (let [setup {:children {} :next {:x x-offset :y y-offset}}]
          (swap! layout assoc parent-id setup)
          setup)))

    (defn set-position [layout parent child]
      (sub-layout layout parent)
      (swap! layout
        #(-> %
           (assoc-in [parent :children child :parent] parent)
           ;(update-in [parent :children child :size] (fn [{width :width height :height}]
           ;                                              {:width (+ width width-offset)
           ;                                               :height (+ height height-offset)}))
           (assoc-in [parent :children child :position] (get-in @layout [parent :next]))
           (update-in [parent :next] (fn [{x :x y :y}]
                                       (let [[new-x new-y] (if (< x 300)
                                                             [(+ x width-offset) y]
                                                             [x-offset
                                                              (if (< y 300)
                                                                (+ y height-offset)
                                                                y-offset)])]
                                         {:x new-x :y new-y})))))))


  (+ nil 10)
  (sub-layout layout :diagram)
  (sub-layout layout "v-scroll-1")
  (sub-layout layout "v-scroll-2")


  (set-position layout :diagram "v-scroll-1")
  (set-position layout "v-scroll-1" "table-one")
  (set-position layout "v-scroll-1" "table-two")
  (set-position layout "v-scroll-1" "table-three")
  (set-position layout "v-scroll-1" "table-four")
  (set-position layout "v-scroll-1" "table-ten")

  (set-position layout :diagram "v-scroll-2")
  (set-position layout "v-scroll-2" "table-five")
  (set-position layout "v-scroll-2" "table-six")

  ; endregion



  (make-flow full-config)


  ())


; endregion
