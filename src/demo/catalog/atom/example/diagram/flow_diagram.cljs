(ns demo.catalog.atom.example.diagram.flow-diagram
  (:require ["reactflow" :refer (Position)]
            [demo.catalog.atom.utils :as example]
            [bh-ui.core :as bh]
            [bh-ui.molecule.composite.dsl-support.dsl-nodes :as dsl]
            [reagent.core :as r]
            [re-frame.core :as rf]
            [taoensso.timbre :as log]))


;(def node-types {":ui/component"  (partial bh/dsl-nodes-custom-node :ui/component)})
;                 ":source/remote" (partial bh/dsl-nodes-custom-node :source/remote)
;                 ":source/local"  (partial bh/dsl-nodes-custom-node :source/local)
;                 ":source/fn"     (partial bh/dsl-nodes-custom-node :source/fn)})
;(def bootstrap-node-data {":ui/component"  (partial bh/dsl-nodes-node-data :ui/component)
;                          ":source/remote" (partial bh/dsl-nodes-node-data :source/remote)
;                          ":source/local"  (partial bh/dsl-nodes-node-data :source/local)
;                          ":source/fn"     (partial bh/dsl-nodes-node-data :source/fn)})

(def initialEdges [{:id     "lightning->line-chart",
                    :source "lightning", :sourceHandle "data"
                    :target "line-chart" :targetHandle "data-in"
                    :style  {:strokeWidth 1 :stroke :blue} :arrowHeadType "arrowclosed"}
                   {:id     "lightning->bar-chart",
                    :source "lightning", :sourceHandle "data"
                    :target "bar-chart" :targetHandle "data-in"
                    :style  {:strokeWidth 1 :stroke :blue} :arrowHeadType "arrowclosed"}
                   {:id     "config->time-range",
                    :source "config", :sourceHandle "data"
                    :target "time-range" :targetHandle "data"
                    :style  {:strokeWidth 1 :stroke :blue} :arrowHeadType "arrowclosed"}
                   {:id     "time-range->bar-chart",
                    :source "time-range", :sourceHandle "range"
                    :target "bar-chart" :targetHandle "config-in"
                    :style  {:strokeWidth 1 :stroke :blue} :arrowHeadType "arrowclosed"}
                   {:id     "time-range->line-chart",
                    :source "time-range", :sourceHandle "range"
                    :target "line-chart" :targetHandle "config-in"
                    :style  {:strokeWidth 1 :stroke :blue} :arrowHeadType "arrowclosed"}])
(def initialNodes [{:id "lightning", :type ":source/remote" :position {:x 150, :y 100}, :data {:label "lightning" :kind ":source/remote"}}
                   {:id "config", :type ":source/local" :position {:x 10, :y 200}, :data {:label "config" :kind ":source/local"}}
                   {:id "time-range", :type ":source/fn" :position {:x 150, :y 200}, :data {:label "time-range" :kind ":simple-multi-chart-2/fn-make-config"}} ;":coverage-plan/fn-range"}}
                   {:id "line-chart", :type ":ui/component" :position {:x 300, :y 100}, :data {:label "line-chart" :kind ":rechart/line"}}
                   {:id "bar-chart", :type ":ui/component" :position {:x 300, :y 150}, :data {:label "bar-chart" :kind ":rechart/bar"}}])


;(def remote-sources [:source/lightning])
;(def remote-source-handles {:handles {:outputs [{:label "data" :style {:background "#999"} :position (.-Right Position)}]}})


(defn register-dummys []
  (doall
    ;(map #(rf/dispatch-sync [:register-meta {% remote-source-handles}]) sources)
    (rf/dispatch-sync [:register-meta {:simple-multi-chart-2/fn-make-config
                                       {:handles {:inputs [{:label "data" :style {:background "#999"} :position (.-Left Position)}]
                                                  :outputs [{:label "range" :style {:background "#999"} :position (.-Right Position)}]}}}])))


(defn- dsl->react-flow []
  (let [nodes (for [node initialNodes]
                (let [{:keys [type position data]} node
                      kind  (get data :kind)
                      label (get data :label)]
                  {:id       (str "node-" (:id node))
                   :type     type
                   :position position
                   :data     {:label label :kind kind :kind-js (str kind)}}))

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
                   :label         (str sourceHandle "->" targetHandle)
                   :style         style
                   :arrowHeadType arrowHeadType
                   :animated      false}))]

    (r/atom {:nodes nodes :edges edges})))


(defn example []
  (register-dummys)

  (let [container-id "flow-diagram-demo"
        data         (dsl->react-flow)]

    [example/component-example
     :container-id container-id
     :title "Flow Diagram (take 2)"
     :description "A simple Flow Diagram built using [react-flow](https://reactflow.dev)"
     :data data
     :config {:node-types   dsl/node-types
              :node-data    dsl/bootstrap-node-data
              :node-kind-fn dsl/default-node-kind}
     :component bh/flow-diagram
     :component-id (bh/utils-path->keyword container-id "flow-diagram")
     :source-code '[]]))




(comment

  (map #(rf/dispatch-sync [:register-meta {% remote-source-handles}]) remote-sources)

  @(rf/subscribe [:meta-data-registry])

  ())