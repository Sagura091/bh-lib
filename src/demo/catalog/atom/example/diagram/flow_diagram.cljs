(ns demo.catalog.atom.example.diagram.flow-diagram
  (:require [bh-ui.atom.diagram.flow-diagram :as flow]
            [demo.catalog.atom.example.diagram.node-types.custom-node :as cn]
            [demo.catalog.atom.utils :as example]
            [bh-ui.utils :as utils]
            [reagent.core :as r]
            [taoensso.timbre :as log]))


(def node-types {":ui/component"  (partial cn/custom-node :ui/component)
                 ":source/remote" (partial cn/custom-node :source/remote)})
                 ;"color-picker"   (partial cp/color-picker-node :source/local)
                 ;"editable-node"  (partial e/editableNode :source/fn)})
(def bootstrap-node-data {":ui/component"  (partial cn/node-data :ui/component)
                          ":source/remote" (partial cn/node-data :source/remote)})

(def initialEdges [{:id     "e1-2",
                    :source "100", :sourceHandle "data-out"
                    :target "200" :targetHandle "data-in"
                    :style  {:strokeWidth 1 :stroke :blue} :arrowHeadType "arrowclosed"}
                   {:id     "e1-3",
                    :source "100", :sourceHandle "data-out"
                    :target "300" :targetHandle "data-in"
                    :style  {:strokeWidth 1 :stroke :blue} :arrowHeadType "arrowclosed"}])
(def initialNodes [{:id "100", :type ":source/remote" :position {:x 100, :y 100}, :data {:label "data-source" :kind ":source/remote"}}
                   {:id "200", :type ":ui/component" :position {:x 200, :y 150}, :data {:label "table" :kind ":ui/table"}}
                   {:id "300", :type ":ui/component" :position {:x 300, :y 200}, :data {:label "bar-chart" :kind ":ui/bar-chart"}}])


(defn default-node-kind [node-type]
  (condp = node-type
    ":ui/component" ":ui/table"
    ":source/remote" ":source/remote"
    :else "unknown"))


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