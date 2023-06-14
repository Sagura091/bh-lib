(ns bh-ui.atom.fast-chart.canvas-js-chart

  (:require ["@canvasjs/react-charts$default" :as CanvasJSReact]))

(defn canvas-js-chart
  "See: https://canvasjs.com/react-charts/ for supported chart types
  ex: theme - light1, dark1
  ex: datasets [[{:x 1 :y 2} {:x 5 :y 8}] [{:x 4 :y 2} {:x 2 :y 9}]]"

  [type theme chart-title x-axis-title y-axis-title line-size data-sets]

  (let [CanvasJSChart (.-CanvasJSChart CanvasJSReact)
        options {:zoomEnabled true
                 :animationEnabled true
                 :theme theme
                 :title {:text chart-title}
                 :axisX {:title x-axis-title}
                 :axisY {:title y-axis-title}
                 :data (mapv (fn [data]
                               {:type type
                                :markerSize line-size
                                :dataPoints data})
                            data-sets)}]
    [:> CanvasJSChart {:options options}]))

(def source-code
  '(let [CanvasJSChart (.-CanvasJSChart CanvasJSReact)
         options {:zoomEnabled true
                  :animationEnabled true
                  :theme theme
                  :title {:text chart-title}
                  :axisX {:title x-axis-title}
                  :axisY {:title y-axis-title}
                  :data (mapv (fn [data]
                                {:type type
                                 :markerSize line-size
                                 :dataPoints data})
                              data-sets)}]
     [:> CanvasJSChart {:options options}]))