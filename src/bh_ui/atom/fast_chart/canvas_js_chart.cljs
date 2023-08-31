(ns bh-ui.atom.fast-chart.canvas-js-chart
  (:require ["@canvasjs/react-charts$default" :as CanvasJSReact]
            ["reactflow" :refer (Position)]
            [bh-ui.utils.helpers :as h]
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
  "See: https://canvasjs.com/react-charts/ for supported chart types
  ex: theme - light1, dark1
  ex: datasets [[{:x 1 :y 2} {:x 5 :y 8}] [{:x 4 :y 2} {:x 2 :y 9}]]"

  [type data config style]

  ;(log/info "canvas-js-chart (a)" data "//" config)

  ; TODO: how do we make CanvasJSChart fit inside it's parent?
  (let [CanvasJSChart (.-CanvasJSChart CanvasJSReact)
        d (h/resolve-value data)

        cooked-data (cook-data @d)
        options {:zoomEnabled      true
                 :animationEnabled true
                 :height           (or (:height config) nil)
                 :width            (or (:width config) nil)
                 :exportEnabled    (or (:exportEnabled config) false)
                 :theme            (or (:theme config) "light1")
                 :title            {:text (or (:title config) "")}
                 :axisX            {:title (or (:x-axis-title config) "")}
                 :axisY            {:title (or (:y-axis-title config) "")}
                 :data             (mapv (fn [data]
                                           {:type       type
                                            :markerSize (or (:line-size config) 1)
                                            :dataPoints data})
                                         cooked-data)}]

    ;(log/info "canvas-js-chart (b)"
    ;  data
    ;  "//" cooked-data
    ;  "//" options)
    (print "cooked data" cooked-data)
    [:> CanvasJSChart {:options options}]))

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

(defn line-chart [& {:keys [data config style]}]
  ;(log/info "line-chart" data "//" config)

  ;(if (cv/component-validator :schema fast-chart-schema
  ;                            :data data
  ;                            :config config)
  (canvas-js-chart "line" data config style))
  ;  (cv/invalid-component-explanation fast-chart-schema {:data data :config config :style style})))


(defn spline-chart [& {:keys [data config style]}]
  ;(log/info "line-chart" data "//" config)

  ; TODO: CanvasJs uses a "spline" type to draw curved line charts. Consider changing
  ;       Recharts to match (both have "line" - no curves, both have "spline" - curved
  (canvas-js-chart "spline" data config style))


(re-frame.core/dispatch-sync
  [:register-meta
   {:fc/line   {:component line-chart
                :ports     {:data   :port/sink
                            :config :port/sink}
                :handles   {:inputs  [{:label "data-in" :style {:top 10 :background "#555"} :position (.-Left Position)}
                                      {:label "config-in" :style {:top 20 :background "#555"} :position (.-Left Position)}]
                            :outputs [{:label "data-out" :style {:top 10 :background "#999"} :position (.-Right Position)}
                                      {:label "config-out" :style {:top 20 :background "#999"} :position (.-Right Position)}]}}
    :fc/spline {:component spline-chart
                :ports     {:data   :port/sink
                            :config :port/sink}
                :handles   {:inputs  [{:label "data-in" :style {:top 10 :background "#555"} :position (.-Left Position)}
                                      {:label "config-in" :style {:top 20 :background "#555"} :position (.-Left Position)}]
                            :outputs [{:label "data-out" :style {:top 10 :background "#999"} :position (.-Right Position)}
                                      {:label "config-out" :style {:top 20 :background "#999"} :position (.-Right Position)}]}}}])
