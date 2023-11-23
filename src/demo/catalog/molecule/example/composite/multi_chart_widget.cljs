(ns demo.catalog.molecule.example.composite.multi-chart-widget
  (:require [bh-ui.core :as bh]
            [bh-ui.utils.color :as color]
            [bh-ui.utils.example-data :as data]
            [demo.catalog.molecule.local-storage :as storage]
            [demo.catalog.atom.example.chart.examples.user-tool :as tools]
            [reagent.core :as r]
            [re-com.core :as rc]
            [taoensso.timbre :as log]
            [woolybear.ad.catalog.utils :as acu]
            [woolybear.ad.layout :as layout]))


(log/info "demo.catalog.molecule.example.composite.multi-chart-widget")


(defn default-config [next-color]
  (merge {:isAnimationActive true
          :grid              {:include         true
                              :strokeDasharray {:dash 3 :space 3}
                              :stroke          :gray}
          :x-axis            {:include     true
                              :dataKey     :name
                              :orientation :bottom
                              :scale       "auto"}
          :y-axis            {:include     true
                              :dataKey     ""
                              :orientation :left
                              :scale       "auto"
                              :interval    "preserveStartEnd"}
          :tooltip           {:include true}
          :legend            {:include       true
                              :layout        :horizontal
                              :align         :center
                              :verticalAlign :bottom}}
    (->> [:uv :pv :tv :amt]
      (map (fn [val]
             (let [color (color/next-color next-color)]
               {val {:include true :animate true
                     :stroke  color :fill color}})))
      (into {}))))


(defn- data-update-example [& {:keys [widget component-id data config next-color] :as params}]
  ;(log/info "data-update-example (params)" params)

  [rc/v-box :src (rc/at)
   :gap "10px"
   :width "100%"
   :height "100%"
   :children [[:div.chart-part {:style {:width "100%"}}     ;:height "90%"}}
               widget]

              [rc/v-box :src (rc/at)
               :gap "8px"
               :children [[tools/data-tools
                           data
                           config
                           bh/simple-multi-chart1-sample-data
                           data/random-meta-tabular-data
                           next-color]]]]])


(defn example []
  (let [next-color   (atom -1)
        config       (default-config next-color)
        container-id "multi-chart-widget"
        component-id (bh/utils-path->keyword container-id "widget")
        dsl          (r/atom (or (storage/load-from-local-storage component-id) bh/multi-chart-ui-def))]

    (fn []
      (acu/demo "Multiple Charts in a Widget"
        "This example provides a 'widget' (collection of UI Components) organized into a digraph (Event Model) that
          describes the flow of data from sources (remote or local) into and out-of the UI.

> In this example the configuration is presented as part of the widget, rather than separately as in
> the example above"
        [layout/frame
         ;;
         ;; NOTE: the :height MUST be specified here since the ResponsiveContainer down in bowels of the chart needs a height
         ;; in order to actually draw the Recharts components. just saying "100%" doesn't work, since the
         ;; that really means "be as big as you need" and ResponsiveContainer then doesn't know what to do.
         ;;
         [:div.molecule-content
          [data-update-example
           :widget [bh/grid-container
                    :data dsl
                    :config config
                    :component-id component-id
                    :save-fn storage/save-to-local-storage
                    :resizable true
                    :tools true]
           :component-id component-id
           :data dsl
           :config config
           :next-color next-color]]]
        bh/multi-chart-src-code))))
