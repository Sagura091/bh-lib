(ns demo.catalog.atom.example.fast-chart.fast-line-chart
  (:require [bh-ui.atom.card.card :as card]
            [woolybear.ad.catalog.utils :as acu]
            [woolybear.ad.layout :as layout]
            [bh-ui.atom.fast-chart.canvas-js-chart :as fast-chart]))

(def default-background "#9CA8B3")
(def default-color "#FF")
(def node-style {:width      "300px" :height "300px"
                 :margin     :auto
                 :background default-background
                 :color      default-color})

(defn generate-chart-data [num-entries max-value]
  (let [num-entries num-entries
        max-value max-value]
    (vec (repeatedly num-entries
                     (fn []
                       {:x (rand-int (inc max-value))
                        :y (rand-int (inc max-value))})))))


(defn example []
  (acu/demo "Fast Line Chart"
            "A simple fast line chart, based on potential satellite data, this chart is designed to handle large data sets
            with fast rerendering"
            [fast-chart/canvas-js-chart "line" "light1" "NCR2A" "MHz" "dBm" 1 [ (sort-by :x (generate-chart-data 100 100))
                                                                               (sort-by :x(generate-chart-data 100 100))]]
            fast-chart/source-code))



