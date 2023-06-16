(ns demo.catalog.atom.example.diagram.flow-diagram
  (:require [bh-ui.atom.diagram.flow-diagram :as flow]
            ["reactflow" :refer (Position)]
            [demo.catalog.atom.example.diagram.node-types.custom-node :as cn]
            [demo.catalog.atom.utils :as example]
            [bh-ui.utils :as utils]
            [reagent.core :as r]
            [re-frame.core :as rf]
            [taoensso.timbre :as log]))


(def node-types {":ui/component"  (partial cn/custom-node :ui/component)
                 ":source/remote" (partial cn/custom-node :source/remote)
                 ":source/local" (partial cn/custom-node :source/local)
                 ":source/fn" (partial cn/custom-node :source/fn)})
(def bootstrap-node-data {":ui/component"  (partial cn/node-data :ui/component)
                          ":source/remote" (partial cn/node-data :source/remote)
                          ":source/local" (partial cn/node-data :source/local)
                          ":source/fn" (partial cn/node-data :source/fn)})

(def initialEdges [{:id     "e100-200",
                    :source "100", :sourceHandle "data-out"
                    :target "200" :targetHandle "data-in"
                    :style  {:strokeWidth 1 :stroke :blue} :arrowHeadType "arrowclosed"}
                   {:id     "e100-300",
                    :source "100", :sourceHandle "data-out"
                    :target "300" :targetHandle "data-in"
                    :style  {:strokeWidth 1 :stroke :blue} :arrowHeadType "arrowclosed"}
                   {:id     "e10-20",
                    :source "10", :sourceHandle "data-out"
                    :target "20" :targetHandle "data-in"
                    :style  {:strokeWidth 1 :stroke :blue} :arrowHeadType "arrowclosed"}
                   {:id     "e20-300",
                    :source "20", :sourceHandle "data-out"
                    :target "300" :targetHandle "config-in"
                    :style  {:strokeWidth 1 :stroke :blue} :arrowHeadType "arrowclosed"}])
(def initialNodes [{:id "100", :type ":source/remote" :position {:x 100, :y 100}, :data {:label "data-source" :kind ":source/remote"}}
                   {:id "10", :type ":source/local" :position {:x 100, :y 150}, :data {:label "config" :kind ":source/local"}}
                   {:id "20", :type ":source/fn" :position {:x 150, :y 150}, :data {:label "add-colors" :kind ":source/fn"}}
                   {:id "200", :type ":ui/component" :position {:x 200, :y 120}, :data {:label "table" :kind ":rechart/line"}}
                   {:id "300", :type ":ui/component" :position {:x 300, :y 200}, :data {:label "bar-chart" :kind ":rechart/bar"}}])


(defn default-node-kind [node-type]
  (condp = node-type
    ":ui/component" ":ui/table"
    node-type))

; TODO: migrate to the correct namespace within bh-ui...
(def meta-data {":source/remote" {:ports     {:data   :port/source}
                                  :handles {:outputs [{:label "data-out" :style {:background "#999"} :position (.-Right Position)}]}}
                ":source/local" {:ports     {:data   :port/source}
                                 :handles {:outputs [{:label "data-out" :style {:background "#999"} :position (.-Right Position)}]}}
                ":source/fn" {:ports     {:data   :port/source-sink}
                              :handles {:inputs [{:label "data-in" :style {:background "#999"} :position (.-Left Position)}]
                                        :outputs [{:label "data-out" :style {:background "#999"} :position (.-Right Position)}]}}})
(rf/dispatch-sync [:register-meta meta-data])



(defn- dsl->react-flow []
  (let [nodes (for [node initialNodes]
                (let [{:keys [type position data]} node
                      kind  (get data :kind)
                      label (get data :label)]
                  {:id       (str "node-" (:id node))
                   :type     type
                   :position position
                   :data     {:label label :kind kind}}))

        edges (for [edge initialEdges]
                (let [{:keys [id
                              source sourceHandle
                              target targetHandle
                              style arrowHeadType]} edge]
                  {:id            (str "edge-" id)
                   :source        (str "node-" source)
                   :sourceHandle  sourceHandle
                   :target        (str "node-" target)
                   :targetHandle  targetHandle
                   :style         style
                   :arrowHeadType arrowHeadType}))]

    (r/atom {:nodes nodes :edges edges})))


(defn example []
  (let [container-id "flow-diagram-demo"
        data (dsl->react-flow)]

    [example/component-example
     :container-id container-id
     :title "Flow Diagram (take 2)"
     :description "A simple Flow Diagram built using [react-flow](https://reactflow.dev)"
     :data data
     :component flow/component
     :node-types node-types
     :node-data bootstrap-node-data
     :node-kind-fn default-node-kind
     :component-id (utils/path->keyword container-id "flow-diagram")
     :source-code '[]])) ;flow/source-code]))