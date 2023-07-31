(ns demo.catalog.atom.example.fast-chart.fast-line-chart
  (:require [woolybear.ad.catalog.utils :as acu]
            [woolybear.ad.layout :as layout]
            [bh-ui.atom.fast-chart.canvas-js-chart :as fast-chart]
            [bh-ui.atom.data-transformation :as xform]
            [bh-ui.utils.example-data :as example-data]))


(def default-background "#9CA8B3")
(def default-color "#FF")
(def node-style {:width      "300px" :height "300px"
                 :margin     :auto
                 :background default-background
                 :color      default-color})

(def source-code
  '(let [CanvasJSChart (.-CanvasJSChart CanvasJSReact)
         options       {:zoomEnabled      true
                        :animationEnabled true
                        :theme            theme
                        :title            {:text chart-title}
                        :axisX            {:title x-axis-title}
                        :axisY            {:title y-axis-title}
                        :data             (mapv (fn [data]
                                                  {:type       type
                                                   :markerSize line-size
                                                   :dataPoints data})
                                            data-sets)}]
     [:> CanvasJSChart {:options options}]))


(defn generate-chart-data [num-entries max-value]
  (let [num-entries num-entries
        max-value   max-value]
    (vec (repeatedly num-entries
           (fn []
             {:x (rand-int (inc max-value))
              :y (rand-int (inc max-value))})))))


(defn example []
  (acu/demo "Fast Line Chart"
    "A simple fast line chart, based on potential satellite data, this chart is designed to handle large data sets
    with fast re-rendering"

    [fast-chart/line-chart
     :data example-data/meta-tabular-data
     :config {:theme        "light1"
              :title        (get-in example-data/meta-tabular-data [:metadata :title])
              :x-axis-title (str (get-in example-data/meta-tabular-data [:metadata :id]))
              :line-size    1}]

    source-code))



