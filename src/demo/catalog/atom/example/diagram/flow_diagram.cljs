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


(def dsl-layout-gold
  {:nodes [{:id       "carousel", :type ":ui/container"
            :position {:x 25, :y 125},
            :data     {:label    "carousel" :kind ":rc/carousel"
                       :size     {:width 625 :height 200}
                       :children {"v-scroll-1" {:position {:x 25, :y 50} :size {:width 275 :height 125}}
                                  "v-scroll-2" {:position {:x 125, :y 50} :size {:width 275 :height 125}}}}}
           {:id   "data/one", :type ":source/local" :position {:x 25, :y 25},
            :data {:label "data/one" :kind ":source/local"}}
           {:id   "data/two", :type ":source/local" :position {:x 150, :y 25},
            :data {:label "data/two" :kind ":source/local"}}

           {:id         "v-scroll-1", :type ":ui/container"
            :position   {:x 25, :y 50},
            :parentNode "carousel"
            :data       {:label    "v-scroll-1" :kind ":rc/v-scroll"
                         :size     {:width 275 :height 125}
                         :children {"table-one" {:position {:x 25, :y 50}}
                                    "table-two" {:position {:x 125, :y 50}}}}}
           {:id         "v-scroll-2", :type ":ui/container"
            :position   {:x 325, :y 50},
            :parentNode "carousel"
            :data       {:label    "v-scroll-2" :kind ":rc/v-scroll"
                         :size     {:width 275 :height 125}
                         :children {"table-three" {:position {:x 25, :y 25}}
                                    "table-four"  {:position {:x 125, :y 25}}}}}

           {:id         "table-one", :type ":ui/component" :position {:x 25, :y 50},
            :parentNode "v-scroll-1" :data {:label "table-one" :kind ":react-table/table"}}
           {:id         "table-two", :type ":ui/component" :position {:x 150, :y 50},
            :parentNode "v-scroll-1" :data {:label "table-two" :kind ":react-table/table"}}
           {:id         "table-three", :type ":ui/component" :position {:x 25, :y 50},
            :parentNode "v-scroll-2" :data {:label "table-three" :kind ":react-table/table"}}
           {:id         "table-four", :type ":ui/component" :position {:x 150, :y 50},
            :parentNode "v-scroll-2" :data {:label "table-four" :kind ":react-table/table"}}]

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


(defn register-dummys []
  (doall
    (rf/dispatch-sync [:register-meta
                       {:simple-multi-chart-2/fn-make-config {:component [:div]
                                                              :atm/role  :source/fn
                                                              :ports     {:data  :port/sink
                                                                          :range :port/source}}}])))


(defn- dsl->react-flow [n e]
  (let [nodes (for [node n]
                (let [{:keys [type position data parentNode]} node
                      kind     (get data :kind)
                      label    (get data :label)
                      children (get data :children)
                      size     (get data :size)]
                  (log/info "dsl->react-flow" label size)
                  (merge {:id       (str (:id node))
                          :type     type
                          :position position
                          :data     (merge {:label    label :kind kind :kind-js (str kind)
                                            :children children}
                                      (when size {:size size}))}
                    (when parentNode {:parentNode parentNode}))))

        edges (for [edge e]
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
        data         (dsl->react-flow initialNodes initialEdges)]

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


(defn example-2 []
  (register-dummys)

  (let [container-id "flow-diagram-demo-2"
        data         (dsl->react-flow (:nodes dsl-layout-gold) (:edges dsl-layout-gold))]

    [example/component-example
     :container-id container-id
     :title "Flow Diagram (more complex)"
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

  @(rf/subscribe [:meta-data-registry])

  (do
    (def parentNode nil)
    (def size {:width 1 :height 1})

    (def options (merge
                   (when parentNode {:parentNode parentNode})
                   (when size {:size size}))))

  (merge {:one 1} options)



  (def c-node (clj->js (let [node     (-> dsl-layout-gold :nodes first)
                             {:keys [type position size data parentNode]} node
                             kind     (get data :kind)
                             label    (get data :label)
                             children (get data :children)
                             options  (merge
                                        (when parentNode {:parentNode parentNode})
                                        (when size {:size size}))]
                         (merge {:id       (str (:id node))
                                 :type     type
                                 :position position
                                 :data     {:label    label :kind kind :kind-js (str kind)
                                            :children children}}
                           options))))

  (get (js->clj c-node) "size")

  ())