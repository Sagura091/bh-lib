(ns bh-ui.atom.fast-chart.canvas-js-chart
  (:require ["@canvasjs/react-charts$default" :as CanvasJSReact]
            ["reactflow" :refer (Position)]
            [bh-ui.utils.helpers :as h]
            [bh-ui.atom.experimental.popover :as pop]
            [bh-ui.utils.component-validator :as cv]
            [bh-ui.atom.data-transformation :as xform]
            [cljs.spec.alpha :as spec]
            [malli.core :as m]
            [taoensso.timbre :as log]))


(defn- cook-data
  "convert the data, as needed, to a format CanvasJS can handle, specifically
  BH-UI 'tabular' and 'meta-tabular'"

  [d]

  (cond
    (spec/valid? :tabular-data/meta-data d) (xform/meta-tabular->x-y d)
    (spec/valid? :tabular-data/data d) (xform/tabular->x-y d (-> d first first first))
    :else d))

(defn canvas-js-chart
  "Creates a CanvasJS chart component for rendering various chart types


  Parameters:
  - data: A map containing data for the chart, where the data is a sequence of x, y number pairs.
  - config: A map of additional configuration options for the chart.
    - :height (optional): The height of the chart.
    - :width (optional): The width of the chart.
    - :export-enabled (optional): A boolean indicating whether export options are enabled.
    - :theme (optional): The theme of the chart (default: 'light1').
    - :title (optional): The title of the chart.
    - :x-axis-title (optional): The title for the X-axis.
    - :y-axis-title (optional): The title for the Y-axis.
    - :line-size (optional): The size of data point markers (default: 1).
  - help: A configuration map for additional help settings, including keys like:
    - :clickable (optional, default: false): A boolean indicating whether the chart is clickable to open details.
    - :popover-title (optional): The title of the popover when clicking the chart.
    - :position (optional): The position of the popover (e.g., 'right', 'bottom').
    - :popover-body-text (optional): The content of the popover.


  Returns:
  - A hiccup-style component representing the CanvasJS chart.


  Example Usage:
  [canvas-js-chart
    \"line\"
    bh/example-meta-tabular-data
    {:theme        \"light1\"
     :height       400
     :width        800
     :title        (get-in bh/example-meta-tabular-data [:metadata :title])
     :x-axis-title (str (get-in bh/example-meta-tabular-data [:metadata :id]))
     :line-size    1}
    style ; Style configuration (not fully documented in the code)
    {:clickable         true
     :popover-title     \"Fast Line Chart\"
     :position \"right\"
     :popover-body-text \"A simple fast line chart, based on potential satellite data, this chart is designed to handle
      large data sets with fast re-rendering\"}]"


  [type data config style help]
  (let [CanvasJSChart (.-CanvasJSChart CanvasJSReact)
        d (h/resolve-value data)
        cooked-data (cook-data @d)
        options {:zoomEnabled      true
                 :animationEnabled true
                 :height           (or (:height config) nil)
                 :width            (or (:width config) nil)
                 :exportEnabled    (or (:export-enabled config) false)
                 :theme            (or (:theme config) "light1")
                 :title            {:text (or (:title config) "")}
                 :axisX            {:title (or (:x-axis-title config) "")}
                 :axisY            {:title (or (:y-axis-title config) "")}
                 :data             (mapv (fn [data]
                                           {:type       type
                                            :markerSize (or (:line-size config) 1)
                                            :dataPoints data})
                                         cooked-data)}]

 ;TODO: Uncomment popover
    ;(pop/popover-wrapper
    ;     :data {:component [:div
    [:> CanvasJSChart {:options options}]))
    ;     :config help)))


(def fast-chart-schema
  (m/schema [:map
             ;[:data map?]
             [:config
              [:map
               [:theme string?]
               [:title string?]
               [:x-axis-title string?]
               [:line-size int?]]]]))

; TODO: CanvasJs uses a "spline" type to draw curved line charts. Consider changing
;       Recharts to match (both have "line" - no curves, both have "spline" - curved

(defn line-chart
  "data - array (required) - Ex: [[{:x 1 :y 2} {:x 5 :y 8}] [{:x 4 :y 2} {:x 2 :y 9}]]
   config - Map
    :title (required) String - title Ex: \"Title\"
    :theme (optional) String - name of theme Ex: \"light1, dark1\"
    :x-axis-title (optional) String - title Ex: \"X-Axis\"
    :y-axis-title (optional) String - title Ex: \"Y-Axis\"
    :line-size (optional) Integer - size of data points Ex: 1
    :export-default (optional) Boolean - displays a menu to export the chart to formats such as .pdf, .png etc.
    :height (optional) Integer - fixed height of chart
    :width (optional) Integer - fixed width of chart"

  [& {:keys [data config style help]}]
  ;(log/info "line-chart" data "//" config)

  ;(if (cv/component-validator :schema fast-chart-schema
  ;                            :data data
  ;                            :config config)
  (canvas-js-chart "line" data config style help))
  ;  (cv/invalid-component-explanation fast-chart-schema {:data data :config config :style style})))


(defn spline-chart
  "data - array (required) - Ex: [[{:x 1 :y 2} {:x 5 :y 8}] [{:x 4 :y 2} {:x 2 :y 9}]]
   config - Map
    :title (required) String - title Ex: \"Title\"
    :theme (optional) String - name of theme Ex: \"light1, dark1\"
    :x-axis-title (optional) String - title Ex: \"X-Axis\"
    :y-axis-title (optional) String - title Ex: \"Y-Axis\"
    :line-size (optional) Integer - size of data points Ex: 1
    :export-default (optional) Boolean - displays a menu to export the chart to formats such as .pdf, .png etc.
    :height (optional) Integer - fixed height of chart
    :width (optional) Integer - fixed width of chart"
  [& {:keys [data config style help]}]
  ;(log/info "line-chart" data "//" config)

  ; TODO: CanvasJs uses a "spline" type to draw curved line charts. Consider changing
  ;       Recharts to match (both have "line" - no curves, both have "spline" - curved
  (canvas-js-chart "spline" data config style help))


(re-frame.core/dispatch-sync
  [:register-meta
   {:fc/line   {:component line-chart
                :ports     {:data   :port/sink
                            :config :port/sink
                            :help   :port/sink}
                :handles   {:inputs  [{:label "data-in" :style {:top 10 :background "#555"}
                                       :position (.-Left Position)}
                                      {:label "config-in" :style {:top 20 :background "#555"}
                                       :position (.-Left Position)}]
                            :outputs [{:label "data-out" :style {:top 10 :background "#999"}
                                       :position (.-Right Position)}
                                      {:label "config-out" :style {:top 20 :background "#999"}
                                       :position (.-Right Position)}]}}
    :fc/spline {:component spline-chart
                :ports     {:data   :port/sink
                            :config :port/sink
                            :help   :port/sink}
                :handles   {:inputs  [{:label "data-in" :style {:top 10 :background "#555"}
                                       :position (.-Left Position)}
                                      {:label "config-in" :style {:top 20 :background "#555"}
                                       :position (.-Left Position)}]
                            :outputs [{:label "data-out" :style {:top 10 :background "#999"}
                                       :position (.-Right Position)}
                                      {:label "config-out" :style {:top 20 :background "#999"}
                                       :position (.-Right Position)}]}}}])

(defn addition [x y]
  (+ x y))
