(ns demo.catalog.atom.example.chart.treemap-chart
  (:require [bh-ui.core :as bh]
            [demo.catalog.atom.utils :as example]
            [bh-ui.utils :as utils]
            [taoensso.timbre :as log]))


(defn example* []
  (let [container-id "treemap-chart-demo"]
    [example/component-example
     :title "Treemap Chart"
     :container-id container-id
     :description "A simple Treemap Chart built using [Recharts](https://recharts.org/en-US/api/Treemap)"
     :data bh/tree-map-chart-sample-data
     :component bh/tree-map-chart-configurable-component
     :component-id (bh/utils-path->keyword container-id "treemap-chart")
     :source-code bh/tree-map-chart-source-code]))


(defn examples []
  [:div
   [example*]])
