(ns demo.catalog.atom.example.diagram.flow-diagram
  (:require ["reactflow" :refer (Position)]
            [demo.catalog.atom.utils :as example]
            [bh-ui.core :as bh]
            [reagent.core :as r]
            [re-frame.core :as rf]
            [taoensso.timbre :as log]))


(def node-types {":ui/component"  (partial bh/dsl-nodes-custom-node :ui/component)
                 ":source/remote" (partial bh/dsl-nodes-custom-node :source/remote)
                 ":source/local"  (partial bh/dsl-nodes-custom-node :source/local)
                 ":source/fn"     (partial bh/dsl-nodes-custom-node :source/fn)})
(def bootstrap-node-data {":ui/component"  (partial bh/dsl-nodes-node-data :ui/component)
                          ":source/remote" (partial bh/dsl-nodes-node-data :source/remote)
                          ":source/local"  (partial bh/dsl-nodes-node-data :source/local)
                          ":source/fn"     (partial bh/dsl-nodes-node-data :source/fn)})

(def initialEdges [{:id     "lightning->line-chart",
                    :source "100", :sourceHandle "data-out"
                    :target "200" :targetHandle "data-in"
                    :style  {:strokeWidth 1 :stroke :blue} :arrowHeadType "arrowclosed"}
                   {:id     "lightning->bar-chart",
                    :source "100", :sourceHandle "data-out"
                    :target "300" :targetHandle "data-in"
                    :style  {:strokeWidth 1 :stroke :blue} :arrowHeadType "arrowclosed"}
                   {:id     "config->time-range",
                    :source "10", :sourceHandle "data"
                    :target "20" :targetHandle "data"
                    :style  {:strokeWidth 1 :stroke :blue} :arrowHeadType "arrowclosed"}
                   {:id     "time-range->bar-chart",
                    :source "20", :sourceHandle "range"
                    :target "300" :targetHandle "config-in"
                    :style  {:strokeWidth 1 :stroke :blue} :arrowHeadType "arrowclosed"}])
; TODO: how to manage :source/*
(def initialNodes [{:id "100", :type ":source/local" :position {:x 150, :y 100}, :data {:label "lightning" :kind ":source/local"}}
                   {:id "10", :type ":source/local" :position {:x 10, :y 200}, :data {:label "config" :kind ":source/local"}}
                   {:id "20", :type ":source/fn" :position {:x 150, :y 200}, :data {:label "time-range" :kind ":simple-multi-chart-2/fn-make-config"}} ;":coverage-plan/fn-range"}}
                   {:id "200", :type ":ui/component" :position {:x 300, :y 100}, :data {:label "line-chart" :kind ":rechart/line"}}
                   {:id "300", :type ":ui/component" :position {:x 300, :y 150}, :data {:label "bar-chart" :kind ":rechart/bar"}}])


(def remote-sources [":source/lightning" ":source/targets" ":source/platforms"])
(def remote-source-handles {:handles {:outputs [{:label "data" :style {:background "#999"} :position (.-Right Position)}]}})


(defn register-remotes [sources]
  (doall
    (map #(rf/dispatch-sync [:register-meta {% remote-source-handles}]) sources)))


(defn default-node-kind [node-type]
  (condp = node-type
    ":ui/component" ":ui/table"
    node-type))


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
  (register-remotes remote-sources)

  (let [container-id "flow-diagram-demo"
        data         (dsl->react-flow)]

    [example/component-example
     :container-id container-id
     :title "Flow Diagram (take 2)"
     :description "A simple Flow Diagram built using [react-flow](https://reactflow.dev)"
     :data data
     :config {:node-types   node-types
              :node-data    bootstrap-node-data
              :node-kind-fn default-node-kind}
     :component bh/flow-diagram
     :component-id (bh/utils-path->keyword container-id "flow-diagram")
     :source-code '[]]))

;flow/source-code]))