(ns bh-ui.atom.diagram.editable-digraph
  (:require [taoensso.timbre :as log]
            [clojure.set :as set]
            [bh-ui.molecule.composite.dsl-support.dsl-nodes :as dn]
            [bh-ui.atom.diagram.diagram.composite-dag-support :as s]
            ["reactflow$default" :as ReactFlow]
            ["reactflow" :refer (ReactFlowProvider MiniMap Controls
                                  Handle MarkerType
                                  Background
                                  applyNodeChanges
                                  applyEdgeChanges
                                  useNodesState
                                  useEdgesState
                                  useCallBack Handle Position)]
            ["react" :refer (useMemo)]
            [reagent.core :as r]))


(log/info "bh-ui.atom.diagram.editable-digraph")


(declare node)


(def sample-data
  {:nodes [{:id       ":ui/targets"
            :type     ":ui/component"
            :data     {:label   ":ui/targets"
                       :inputs  []
                       :outputs []}
            :position {:x 0 :y 100}}
           {:id       ":topic/target-data"
            :type     ":source/remote"
            :data     {:label   ":topic/target-data"
                       :inputs  []
                       :outputs []}
            :position {:x 100 :y 0}}
           {:id       ":topic/selected-targets"
            :type     ":source/local"
            :data     {:label   ":topic/selected-targets"
                       :inputs  []
                       :outputs []}
            :position {:x 0 :y 200}}]

   :edges [
           {:id        "target-data->targets"
            :source    ":topic/target-data" :target ":ui/targets"
            :style     {:strokeWidth 2 :stroke :orange}
            :markerEnd {:type (.-Arrow MarkerType)}}        ;:type (.-ArrowClosed MarkerType)}}
           {:id        "targets->selected-targets"
            :source    ":ui/targets" :target ":topic/selected-targets"
            :style     {:strokeWidth 2 :stroke :blue}
            :markerEnd {:type (.-ArrowClosed MarkerType)}}]})
(def sample-data-3
  {:nodes [{:id "1 " :type "input" :data {:label "input"} :position {:x 0 :y 0}}
           {:id "2 " :data {:label "node 2 "} :position {:x 0 :y 0}}
           {:id "2a " :data {:label "node 2a "} :position {:x 0 :y 0}}
           {:id "2b " :data {:label "node 2b "} :position {:x 0 :y 0}}
           {:id "2c " :data {:label "node 2c "} :position {:x 0 :y 0}}
           {:id "2d " :data {:label "node 2d "} :position {:x 0 :y 0}}
           {:id "3 " :data {:label "node 3 "} :position {:x 0 :y 0}}
           {:id "4 " :data {:label "node 4 "} :position {:x 0 :y 0}}
           {:id "5 " :data {:label "node 5 "} :position {:x 0 :y 0}}
           {:id "6 " :type "output" :data {:label "output"} :position {:x 0 :y 0}}
           {:id "7 " :type "output" :data {:label "output"} :position {:x 0 :y 0}}]

   :edges [{:id "e12" :source "1 " :target "2 " :type "smoothstep" :animated true}
           {:id "e13" :source "1 " :target "3 " :type "smoothstep" :animated true}
           {:id "e22a" :source "2 " :target "2a " :type "smoothstep" :animated true}
           {:id "e22b" :source "2 " :target "2b " :type "smoothstep" :animated true}
           {:id "e22c" :source "2 " :target "2c " :type "smoothstep" :animated true}
           {:id "e2c2d" :source "2c " :target "2d " :type "smoothstep" :animated true}
           {:id "e45" :source "4 " :target "5 " :type "smoothstep" :animated true}
           {:id "e56" :source "5 " :target "6 " :type "smoothstep" :animated true}
           {:id "e57" :source "5 " :target "7 " :type "smoothstep" :animated true}]})


(def source-code '[])


(def handle-style {:width "8px" :height "8px" :borderRadius "50%"})
(def default-node-style {
                         :minHeight    "30px"
                         :width        "100%"
                         :height       "100%"
                         :borderRadius "5px" :margin :auto
                         :background   :white :color :black})

(def node-style {:ui/component  {:background :green :color :white}
                 :source/remote {:background :orange :color :black}
                 :source/local  {:background :blue :color :white}
                 :source/fn     {:background :pink :color :black}})


(defn- source-panel [])


;; region ; adding handles to nodes in the digraph

(defn- input-handles
  "
  NOTE: the inputs (values in the hash-map) are STRINGS!
  "
  [label inputs position]
  [:<>
   (doall
     (->> inputs
       (map-indexed (fn [idx [target ports]]
                      (let [[source-port target-port] ports]
                        ;(log/info "input-handle" label target-port)
                        [:> Handle {:id    target-port :type "target" :position position
                                    :style (merge handle-style {:left (+ 20 (* 10 idx))})}])))
       (into [:<>])))])


(defn- output-handles
  "
  NOTE: the inputs (values in the hash-map) are STRINGS!
  "
  [label outputs position]
  [:<>
   (doall
     (->> outputs
       (map-indexed (fn [idx [target ports]]
                      (let [[source-port target-port] ports]
                        ;(log/info "output-handle" label source-port)
                        [:> Handle {:id    source-port :type "source" :position position
                                    :style (merge handle-style {:right (+ 20 (* 10 idx))})}])))
       (into [:<>])))])


(defn- apply-handles [label inputs outputs input-position output-position]
  (let [i        (->> inputs
                   (map (fn [[k [s d]]] [k s d])
                     (into #{})))
        o        (->> outputs
                   (map (fn [[k [s d]]] [k s d])
                     (into #{})))
        in-out   (set/intersection i o)
        in-only  (set/difference (set/difference i o) in-out)
        out-only (set/difference (set/difference o i) in-out)]

    (input-handles label in-out input-position)
    (input-handles label in-only input-position)
    (output-handles label out-only output-position)))

;; endregion


(def color-black "#000000")
(def color-white "#ffffff")

(defonce next-id (atom 0))


(defn- on-drag-start [node-type event]
  ;(print node-type)
  (.setData (.-dataTransfer event) "editable-flow" node-type)
  (set! (.-effectAllowed (.-dataTransfer event)) "move"))


(defn- on-drag-over [event]
  (.preventDefault event)
  (set! (.-dropEffect (.-dataTransfer event)) "move"))


(defn- on-drop [reactFlowInstance data set-nodes-fn wrapper event]
  ;(log/info "on-drop" (js->clj @reactFlowInstance) @data)

  (.preventDefault event)

  (let [node-type       (.getData (.-dataTransfer event) "editable-flow")
        x               (.-clientX event)
        y               (.-clientY event)
        reactFlowBounds (.getBoundingClientRect @wrapper)]
    ;(println "on-drop" node-type)

    (when (not= node-type "undefined")
      (let [new-id   (str "node-" (swap! next-id inc))
            position ((.-project @reactFlowInstance) (clj->js {:x (- x (.-left reactFlowBounds))
                                                               :y (- y (.-top reactFlowBounds))}))
            new-node {:id       new-id
                      :type     node-type
                      :data     {:label   new-id
                                 :inputs  []
                                 :outputs []}
                      :position position}]

        ;add the new nodes to the original nodes data (an atom)...
        (swap! data assoc :nodes (conj (:nodes @data) new-node))
        ; and this updates the data internal to the React diagram component...
        (set-nodes-fn (fn [nds] (.concat nds (clj->js new-node))))))))

;(println "on-drop" @data)))



(defn make-draggable-node [label node-type color]
  ;(println "make-draggable-node" node-type)

  ^{:key label}
  [:div.draggable.draggable-node
   {:style       {:background      (-> dn/node-style color :background)
                  :color           (-> dn/node-style color :color)}

    :onDragStart #(on-drag-start node-type %)
    :draggable   true} label])


(defn on-connect [flowInstance data set-edges-fn wrapper event]
  ;(log/info "on-connect" (js->clj event :keywordize-keys true))

  (let [event-map (js->clj event :keywordize-keys true)
        source-id (:source event-map)
        target-id (:target event-map)
        new-edge  {:id     (str source-id "->" target-id)
                   :source source-id
                   :target target-id}]
    ;(log/info "connecting" new-edge)

    ;add the new nodes to the original nodes data (an atom)...
    (swap! data assoc :edges (conj (:edges @data) new-edge))

    ; and this updates the data internal to the React diagram component..
    (set-edges-fn (fn [e] (.concat e (clj->js new-edge))))))



(defn- diagram* [{:keys [data
                         nodes edges
                         node-types edge-type
                         on-change-nodes on-change-edges
                         onDrop onConnect
                         wrapper flowInstance]}]
  (log/info "diagram(star)")

  [:> ReactFlow {:nodes            nodes
                 :edges            edges
                 :onNodesChange    on-change-nodes
                 :onEdgesChange    on-change-edges
                 :nodeTypes        s/default-node-types
                 ; :edge-types       (or edge-type {})
                 :fitView          true
                 :defaultViewport  {:x 0 :y 0 :zoom 1.5}
                 :zoomOnScroll     false
                 :preventScrolling false
                 :onInit           (fn [r] (reset! flowInstance r))
                 :onDrop           onDrop
                 :onDragOver       (or on-drag-over #())
                 :onConnect        onConnect}
   [:> Controls]
   [:> MiniMap]
   [:> Background]])


(defn- diagram [{:keys [data node-types flowInstance]}]
  (let [nodes     (:nodes @data)
        edges     (:edges @data)
        [node-state set-nodes on-change-nodes] (useNodesState (clj->js nodes))
        [edge-state set-edges on-change-edges] (useEdgesState (clj->js edges))
        nodeTypes (clj->js node-types)
        wrapper   (clojure.core/atom nil)]

    (log/info "diagram")
    ;@data "//" (:nodes @data) "//" (js->clj node-state))

    [:> ReactFlowProvider
     [:div#wrapper {:style {:width "800px" :height "800px"}
                    :ref   (fn [el] (reset! wrapper el))}
      [diagram* {:data            data
                 :nodes           node-state
                 :edges           edge-state
                 :node-types      node-types
                 :on-change-nodes on-change-nodes
                 :on-change-edges on-change-edges
                 :onDrop          (partial on-drop flowInstance data set-nodes wrapper)
                 :onConnect       (partial on-connect flowInstance data set-edges wrapper)
                 :wrapper         wrapper
                 :flowInstance    flowInstance}]]]))


(defn component [& {:keys [data node-types edge-type component component-id]}]
  (let [flowInstance (clojure.core/atom nil)]               ; this is why we have 3 functions to make this one component...
    (fn []
      [:f> diagram {:data         data
                    :node-types   node-types
                    ;:edge-types   edge-type
                    :component    component
                    :component-id component-id
                    :flowInstance flowInstance}])))