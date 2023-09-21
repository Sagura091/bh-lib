(ns demo.catalog.atom.example.diagram.flow-diagram
  (:require ["reactflow" :refer (Position)]
            [demo.catalog.atom.utils :as example]
            [bh-ui.core :as bh]
            [bh-ui.molecule.composite.dsl-support.dsl-nodes :as dsl]
            [reagent.core :as r]
            [re-frame.core :as rf]
            [taoensso.timbre :as log]))


(def last-dsl (atom nil))


(def initialNodes [{:id       "carousel", :type ":ui/container"
                    :position {:x 25, :y 300},
                    :data     {:label    "carousel" :kind ":bhui/carousel"
                               :children {"bar-chart"  {:position {:x 25, :y 25}}
                                          "line-chart" {:position {:x 150, :y 25}}
                                          "area-chart" {:position {:x 25 :y 100}}}}}
                   {:id "lightning", :type ":source/remote" :position {:x 50, :y 100}, :data {:label "lightning" :kind ":source/remote"}}
                   {:id "config", :type ":source/local" :position {:x 200, :y 100}, :data {:label "config" :kind ":source/local"}}
                   {:id "time-range", :type ":source/fn" :position {:x 200, :y 200}, :data {:label "time-range" :kind ":simple-multi-chart-2/fn-make-config"}} ;":coverage-plan/fn-range"}}
                   {:id         "line-chart", :type ":ui/component" :position {:x 25, :y 30},
                    :parentNode "carousel" :data {:label "line-chart" :kind ":rechart/line"}}
                   {:id         "bar-chart", :type ":ui/component" :position {:x 150, :y 30},
                    :parentNode "carousel" :data {:label "bar-chart" :kind ":rechart/bar"}}])
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


(defn register-dummys []
  (doall
    (rf/dispatch-sync [:register-meta
                       {:simple-multi-chart-2/fn-make-config {:component [:div]
                                                              :atm/role  :source/fn
                                                              :ports     {:data  :port/sink
                                                                          :range :port/source}}}])))


(defn- dsl->react-flow []
  (let [nodes (for [node initialNodes]
                (let [{:keys [type position data parentNode]} node
                      kind (get data :kind)
                      label (get data :label)
                      children (get data :children)]
                  (merge {:id       (str (:id node))
                          :type     type
                          :position position
                          :data     {:label    label :kind kind :kind-js (str kind)
                                     :children children}}
                    (when parentNode {:parentNode parentNode}))))

        edges (for [edge initialEdges]
                (let [{:keys [id
                              source sourceHandle
                              target targetHandle
                              style arrowHeadType]} edge]
                  {:id            (str "edge-" id)
                   :source        (str source)
                   :sourceHandle  sourceHandle
                   :target        (str target)
                   :targetHandle  targetHandle
                   :label         (str sourceHandle)
                   :style         style
                   :arrowHeadType arrowHeadType
                   :animated      false}))]

    (reset! last-dsl {:nodes nodes :edges edges})

    (r/atom {:nodes nodes :edges edges})))


(defn example []
  (register-dummys)

  (let [container-id "flow-diagram-demo"
        data (dsl->react-flow)]

    [example/component-example
     :container-id container-id
     :title "Flow Diagram (take 2)"
     :description "A simple Flow Diagram built using [react-flow](https://reactflow.dev)"
     :data data
     :config {:node-types     dsl/node-types
              :node-data      dsl/bootstrap-node-data
              :node-kind-fn   dsl/default-node-kind
              :minimap-styles dsl/minimap-styles}
     :component bh/flow-diagram
     :component-id (bh/utils-path->keyword container-id "flow-diagram")
     :source-code '[]]))




(comment

  (map #(rf/dispatch-sync [:register-meta {% remote-source-handles}]) remote-sources)

  @(rf/subscribe [:meta-data-registry])

  ())