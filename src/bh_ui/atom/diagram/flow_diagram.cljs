(ns bh-ui.atom.diagram.flow-diagram
  (:require [clojure.set :as set]
            [reagent.core :as r]
            [taoensso.timbre :as log]
            ["react" :as react]
            ["reactflow$default" :as ReactFlow]
            ["reactflow" :refer (ReactFlowProvider MiniMap Controls
                                  Handle MarkerType
                                  Background
                                  applyNodeChanges
                                  applyEdgeChanges
                                  useNodesState
                                  useEdgesState
                                  useCallBack Handle Position)]
    ; TODO: migrate handle-style into a better namespace
            [bh-ui.molecule.composite.dsl-support.dsl-nodes :as dn]
            [bh-ui.utils.helpers :as h]))



(log/info "bh-ui.atom.diagram.flow-diagram")


(def last-data (atom nil))
(def last-types (atom nil))
(def last-inputs (atom nil))


(declare node)

(def color-black "#000000")
(def color-white "#ffffff")
(def handle-style {:width "8px" :height "8px" :borderRadius "50%"})
(def next-id (atom 0))


(def sample-data
  {:nodes [{:id       ":ui/targets"
            ;:type     ":ui/component"
            :data     {:label   ":ui/targets"
                       :inputs  []
                       :outputs []}
            :position {:x 0 :y 100}}
           {:id       ":topic/target-data"
            ;:type     ":source/remote"
            :data     {:label   ":topic/target-data"
                       :inputs  []
                       :outputs []}
            :position {:x 100 :y 0}}
           {:id       ":topic/selected-targets"
            ;:type     ":source/local"
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
                                    :style (merge dn/handle-style {:left (+ 20 (* 10 idx))})}])))
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
                                    :style (merge dn/handle-style {:right (+ 20 (* 10 idx))})}])))
       (into [:<>])))])


(defn- apply-handles [label inputs outputs input-position output-position]
  (let [i        (->> inputs
                   (map (fn [[k [s d]]] [k s d]))
                   (into #{}))
        o        (->> outputs
                   (map (fn [[k [s d]]] [k s d]))
                   (into #{}))
        in-out   (set/intersection i o)
        in-only  (set/difference (set/difference i o) in-out)
        out-only (set/difference (set/difference o i) in-out)]

    (input-handles label in-out input-position)
    (input-handles label in-only input-position)
    (output-handles label out-only output-position)))


(defn input-output-handles
  "

  NOTE: the inputs (values in the hash-map) are STRINGS!
  "

  [label inputs outputs]

  ;(log/info "input-output-handles" label "//" inputs)

  ;(reset! last-inputs {:in inputs :out outputs})

  [:<>
   ; add the input handles
   (doall
     (->> inputs
       (map-indexed (fn [idx [target ports]]
                      (let [[source-port target-port] ports]
                        ;(log/info "input-handle" label "/" target-port "///" target "/" source-port)
                        [:> Handle {:id    target-port :type "target" :position "top"
                                    :style (merge handle-style {:left (+ 20 (* 10 idx))})}])))
       (into [:<>])))

   ; add the output handles
   (doall
     (->> outputs
       (map-indexed (fn [idx [target ports]]
                      (let [[source-port target-port] ports]
                        ;(log/info "output-handle" label "/" source-port "///" target "/" target-port)
                        [:> Handle {:id    source-port :type "source" :position "bottom"
                                    :style (merge handle-style {:left (+ 20 (* 10 idx))})}])))
       (into [:<>])))])

;; endregion


;; region ; digraph drag-and-drop support

(defn- on-drag-start [node-type event]
  (.setData (.-dataTransfer event) "editable-flow" node-type)
  (set! (.-effectAllowed (.-dataTransfer event)) "move"))


(defn- on-drag-over [event]
  (.preventDefault event)
  (set! (.-dropEffect (.-dataTransfer event)) "move"))


(defn- on-drop [component-id node-data node-kind-fn data
                reactFlowInstance set-nodes-fn wrapper event]
  (.preventDefault event)

  (let [node-type       (.getData (.-dataTransfer event) "editable-flow")
        x               (.-clientX event)
        y               (.-clientY event)
        reactFlowBounds (.getBoundingClientRect @wrapper)]

    ;(log/info "on-drop" node-type)
    ;"//" @wrapper
    ;"//" (.-current @wrapper)
    ;"//" (.getBoundingClientRect @wrapper))
    ;"//" (js->clj reactFlowBounds)

    (when (not= node-type "undefined")
      (let [new-id   (str node-type "-" (swap! next-id inc))
            position ((.-project @reactFlowInstance) (clj->js {:x (- x (.-left reactFlowBounds))
                                                               :y (- y (.-top reactFlowBounds))}))
            new-node ((get node-data node-type)
                      node-type
                      new-id
                      (node-kind-fn node-type)
                      position)]

        ;(log/info @data)

        (swap! data assoc :nodes (conj (:nodes @data) new-node))
        (set-nodes-fn (fn [nds] (.concat nds (clj->js new-node))))))))


(defn make-draggable-node [[k {:keys [label type color
                                      text-color border-color]} :as node]]
  ;(log/info "make-draggable-node" label type "//" node)
  ^{:key label} [:div.draggable.draggable-node
                 {:style       {:background color
                                :color      text-color
                                :border (str "1px solid " border-color)}
                  :onDragStart #(on-drag-start type %)
                  :draggable   true}
                 label])


(defn on-connect [data flowInstance set-edges-fn wrapper event]
  ;(log/info "on-connect" (js->clj event :keywordize-keys true))

  (let [event-map     (js->clj event :keywordize-keys true)
        source-id     (:source event-map)
        source-handle (:sourceHandle event-map)
        target-id     (:target event-map)
        target-handle (:targetHandle event-map)
        new-edge      {:id            (str source-id "->" target-id)
                       :source        source-id
                       :sourceHandle  source-handle
                       :target        target-id
                       :targetHandle  target-handle
                       :style         {:stroke :blue :strokeWidth 1}
                       :arrowHeadType "arrowclosed"}]
    ;(log/info "connecting" new-edge)

    ;add the new nodes to the original nodes data (an atom)...
    (swap! data assoc :edges (conj (:edges @data) new-edge))

    ; and this updates the data internal to the React diagram component..
    (set-edges-fn (fn [e] (.concat e (clj->js new-edge))))))

;; endregion


(defn- diagram* [& {:keys [nodes edges
                           node-types edge-types
                           minimap-styles
                           flowInstance
                           on-change-nodes on-change-edges on-drop on-drag-over
                           zoom-on-scroll preventScrolling connectFn] :as params}]

  ;(log/info "diagram(star) (params)" nodes "=====" node-types "======" edge-types)

  (let [params (apply merge {:nodes               (or nodes [])
                             :edges               (or edges [])
                             :onNodesChange       (or on-change-nodes #())
                             :onEdgesChange       (or on-change-edges #())
                             :zoomOnScroll        (or zoom-on-scroll false)
                             :preventScrolling    (or preventScrolling false)
                             :onConnect           (or connectFn #())
                             :fitView             true
                             :defaultViewport     {:x 0 :y 0 :zoom 1.5}
                             :attributionPosition "bottom-left"
                             :onDrop              (or on-drop #())
                             :onDragOver          (or on-drag-over #())
                             :onInit              (fn [r] (reset! flowInstance r))}
                 (when node-types {:node-types node-types})
                 (when edge-types {:edge-types edge-types}))]

    ;(log/info "diagram(star) (local-params)" params)

    [:> ReactFlow params
     [:> MiniMap (if minimap-styles minimap-styles {})]
     [:> Background]
     [:> Controls]]))


(defn- diagram [& {:keys [component-id
                          orig-data
                          nodes edges
                          node-types edge-types
                          node-data node-kind-fn
                          style
                          minimap-styles                    ;on-drop on-drag-over
                          zoom-on-scroll preventScrolling
                          flowInstance
                          force-layout?] :as params}]

  ;(log/info "diagram" (first nodes))

  ;(reset! last-types node-types)

  (let [n       nodes
        e       edges
        [ns set-nodes on-change-nodes] (useNodesState (clj->js n))
        [es set-edges on-change-edges] (useEdgesState (clj->js e))
        wrapper (clojure.core/atom nil)]

    ;(log/info "diagram (b)" n "////" node-types)

    [:> ReactFlowProvider
     [:div#wrapper {:style (or style {:width "800px" :height "700px"})
                    :ref   (fn [el] (reset! wrapper el))}
      [diagram*
       :component-id component-id
       :orig-data orig-data
       :nodes ns :edges es
       :on-change-nodes on-change-nodes
       :on-change-edges on-change-edges
       :node-types node-types
       :edge-types edge-types
       :minimap-styles minimap-styles
       :connectFn (partial on-connect orig-data flowInstance set-edges wrapper)
       :zoom-on-scroll zoom-on-scroll
       :preventScrolling preventScrolling
       :on-drop (partial on-drop component-id node-data node-kind-fn
                  orig-data flowInstance set-nodes wrapper)
       :on-drag-over on-drag-over
       :flowInstance flowInstance]]]))


(defn component [& {:keys [data
                           config
                           component-id container-id
                           force-layout?]}]

  ;(log/info "component"
  ;@data
  ;config

  (reset! last-data @data)

  (let [d             (h/resolve-value data)
        {:keys [node-types edge-types
                node-data node-kind-fn
                minimap-styles
                style
                tool-types
                connectFn zoom-on-scroll preventScrolling]} @(h/resolve-value config)
        open-details? (r/atom {})
        n-types       (->> node-types
                        (map (fn [[k v]]
                               {k (partial v open-details?)}))
                        (into {})
                        (clj->js))
        flowInstance  (clojure.core/atom nil)]

    ;(log/info "component (DIGRAPH)"
    ;  data)
    ;  "//" (:nodes @d)
    ;  "// node-types" node-types)
    ;  "// n-types" n-types)

    (fn []
      [:f> diagram
       :component-id component-id
       :orig-data d
       :nodes (:nodes @d)
       :edges (:edges @d)
       :node-types n-types
       :edge-types edge-types
       :node-data node-data
       :node-kind-fn node-kind-fn
       :style style
       :minimap-styles (or minimap-styles {})
       :zoom-on-scroll zoom-on-scroll
       :preventScrolling preventScrolling
       :flowInstance flowInstance
       :force-layout? force-layout?])))





(comment
  (let [{:keys [one two]} {:one "1" :two "2"}]
    [one two])


  (do
    (def inputs @last-inputs))

  (doall
    (->> inputs
      (map-indexed (fn [idx [target ports]]
                     (let [[source-port target-port] ports]
                       ;(log/info "input-handle" label "/" target-port "///" target "/" source-port)
                       [:> Handle {:id    target-port :type "target" :position "top"
                                   :style (merge handle-style {:left (+ 20 (* 10 idx))})}])))
      (into [:<>])))


  ())


(comment
  [{:id       "node-lightning",
    :type     ":source/remote",
    :position {:x 150, :y 100},
    :data     {:label "lightning", :kind ":source/remote"}}]

  ())



;(comment
;  (do
;    (def data @last-data)
;    (def nodes (:nodes data))
;    (def edges (:edges data)))
;
;
;
;  ())
