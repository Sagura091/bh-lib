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


(defn- sub-layout [layout parent-id]
  (log/info "sub-layout" parent-id)
  (when (nil? (get-in @layout [parent-id :children]))
    (swap! layout update parent-id
      #(assoc % :children {} :next {:x x-offset :y y-offset}))))


(defn- set-position [layout parent child]
  (sub-layout layout parent)
  (swap! layout
    #(-> %
       (assoc-in [parent :children child :parent] parent)
       (assoc-in [parent :children child :position] (get-in @layout [parent :next]))
       (assoc-in [child :parent] parent)
       (assoc-in [child :position] (get-in @layout [parent :next]))
       (update-in [parent :next] (fn [{x :x y :y}]
                                   (let [[new-x new-y] (if (< x 300)
                                                         [(+ x width-offset x-gap) y]
                                                         [x-offset
                                                          (if (< y 300)
                                                            (+ y height-offset y-gap)
                                                            y-offset)])]
                                     {:x new-x :y new-y}))))))


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
        children  (merge []
                    (get-in configuration [:mol/components node-id :atm/child])
                    (get-in configuration [:mol/components node-id :atm/children]))
        ret       {:id       (str node-id)
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
    (def graph (apply loom.graph/digraph (compute-edges configuration)))

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

    (def full-config (assoc configuration
                       :denorm (bh-ui.molecule.composite.util.digraph/denorm-components
                                 graph (:mol/links configuration) (loom.graph/nodes graph))
                       :nodes (-> configuration :mol/components keys set)
                       :edges (into [] (loom.graph/edges graph))
                       :graph graph
                       :containership-graph containership-graph
                       :parent-graph parent-graph
                       :container container-id)))
  ; endregion


  ; region ; make flow-nodes (original)

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
    (def layout (atom {:diagram {:children {}
                                 :parent   nil
                                 :size     {:width 0 :height 0}
                                 :next     {:x x-offset :y y-offset}}}))
    (def parent :diagram)
    (def child "carousel")
    (sub-layout layout parent)

    (swap! layout
      #(-> %
         (assoc-in [parent :children child :parent] parent)
         (assoc-in [parent :children child :position] (get-in @layout [parent :next]))
         (assoc-in [child :parent] parent)
         (assoc-in [child :position] (get-in @layout [parent :next]))
         (update-in [parent :next] (fn [{x :x y :y}]
                                     (let [[new-x new-y] (if (< x 300)
                                                           [(+ x width-offset x-gap) y]
                                                           [x-offset
                                                            (if (< y 300)
                                                              (+ y height-offset y-gap)
                                                              y-offset)])]
                                       {:x new-x :y new-y}))))))


  (do
    (def parent "carousel")
    (def child "v-scroll-1")
    (sub-layout layout parent)

    (swap! layout
      #(-> %
         (assoc-in [parent :children child :parent] parent)
         (assoc-in [parent :children child :position] (get-in @layout [parent :next]))
         (assoc-in [child :parent] parent)
         (assoc-in [child :position] (get-in @layout [parent :next]))
         (update-in [parent :next] (fn [{x :x y :y}]
                                     (let [[new-x new-y] (if (< x 300)
                                                           [(+ x width-offset x-gap) y]
                                                           [x-offset
                                                            (if (< y 300)
                                                              (+ y height-offset y-gap)
                                                              y-offset)])]
                                       {:x new-x :y new-y}))))))



  (set-position layout :diagram "carousel")
  (set-position layout "carousel" "v-scroll-1")
  (set-position layout "v-scroll-1" "table-one")
  (set-position layout :diagram "data/one")



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


  (let [v (get-in full-config [:parent-graph (second (:nodes full-config))])]
    {:v v})

  (map (fn [node]
         (let [parent (get-in full-config [:parent-graph node])]
           (set-position layout (or parent :diagram) node)))
    (:nodes full-config))

  (def flow-layout (reduce (fn [layout node]
                             (let [parent (get-in full-config [:parent-graph node])]
                               (set-position layout (or parent :diagram) node)))
                     {:diagram {:children {}
                                :parent   nil
                                :size     {:width 0 :height 0}
                                :next     {:x x-offset :y y-offset}}}
                     (:nodes full-config)))

  ; endregion


  ; region ; figure out how large the "parent" should be to fit all the children
  (do
    (def parent "v-scroll-1")
    (def children (get-in @layout [parent :children]))
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
    (def width (+ x-gap (- max-x min-x) (* x-offset 2) x-gap))
    (def height (+ y-gap (- max-y min-y) (* y-offset 2) y-gap)))

  {:size {:w width :h height}}

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

  (make-flow full-config)


  ())


; make layout support reduce, rather than need an atom
(comment

  (do
    (def parent :diagram)
    (def child "data/one")
    (def layout {:diagram {:children {}
                           :parent   nil
                           :size     {:width 0 :height 0}
                           :next     {:x x-offset :y y-offset}}})

    (defn sub-layout-2 [layout parent]
      (if (nil? (get-in layout [parent :children]))
        (update layout parent
          #(assoc % :children {}
                    :size {:width 0 :height 0}
                    :next {:x x-offset :y y-offset}))
        layout))

    (defn set-position-2 [layout parent child]
      (let [current-layout (sub-layout-2 layout parent)
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
                                        {:x new-x :y new-y})))))))

  (-> {:diagram {:children {}
                 :parent   nil
                 :size     {:width 0 :height 0}
                 :next     {:x x-offset :y y-offset}}}
    (set-position-2 :diagram "data/one")
    (set-position-2 :diagram "data/two")

    (set-position-2 :diagram "carousel")
    (set-position-2 "carousel" "v-scroll-1")
    (set-position-2 "v-scroll-1" "table-one")
    (set-position-2 "v-scroll-1" "table-two")

    (set-position-2 "carousel" "v-scroll-2")
    (set-position-2 "v-scroll-2" "table-three")
    (set-position-2 "v-scroll-2" "table-four"))


  (reduce (fn [layout node]
            (let [parent (get (:parent-graph full-config) node)]
              (set-position-2 layout (or parent :diagram) node)))
    {:diagram {:children {}
               :parent   nil
               :size     {:width 0 :height 0}
               :next     {:x x-offset :y y-offset}}}
    (:nodes full-config))






  ())

; endregion
