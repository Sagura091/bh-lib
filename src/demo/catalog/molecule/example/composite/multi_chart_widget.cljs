(ns demo.catalog.molecule.example.composite.multi-chart-widget
  (:require [bh-ui.core :as bh]
            [bh-ui.utils.color :as color]
            [demo.catalog.molecule.local-storage :as storage]
            [demo.catalog.atom.example.chart.examples.user-tool :as tools]
            [reagent.core :as r]
            [re-com.core :as rc]
            [taoensso.timbre :as log]
            [woolybear.ad.catalog.utils :as acu]
            [woolybear.ad.layout :as layout]))


(log/info "demo.catalog.molecule.example.composite.multi-chart-widget")


(defn- data-tools [data config next-color]
  (let [old-data (bh/utils-subscribe-local data [])
        old-config (bh/utils-subscribe-local config [])]

    ;(log/info "data-tools" data "//" @old-data)

    (fn []
      [rc/h-box :src (rc/at)
       :gap "10px"
       :class "tools-panel"
       :children [[:label.h5 "Input Data:"]

                  [rc/button :on-click #(bh/utils-handle-change-path (drop-last data) [[bh/utils-set-local-values (take-last 1 data) []]]) :label "Empty"]

                  [rc/button :on-click #(bh/utils-handle-change-path (drop-last data) [[bh/utils-set-local-values (take-last 1 data) bh/multi-chart-sample-data]])
                   :label "Default"]

                  [rc/button :on-click #(bh/utils-handle-change-path data [[assoc-in [:data 0 :uv] 10000]])
                   :label "A -> 10000"]

                  [rc/button :on-click #(bh/utils-handle-change-path data [[bh/utils-conj-in [:data]
                                                                            {:name "Page Q" :uv 1100
                                                                             :pv   1100 :tv 1100 :amt 1100}]])
                   :label "Add 'Q'"]

                  [rc/button :on-click #(bh/utils-handle-change-path data [[bh/utils-drop-last-in [:data] 2]])
                   :label "Drop Last 2"]

                  [rc/button :on-click #(let [color (color/get-color (-> @old-data
                                                                       :data
                                                                       count))]
                                          (log/info "Add :new-item" color)
                                          (bh/utils-handle-change-path data [[assoc-in [:metadata :fields :new-item] :number]
                                                                             [assoc :data (into []
                                                                                            (map (fn [x]
                                                                                                   (assoc x :new-item (rand-int 7000)))
                                                                                              (:data @old-data)))]])
                                          (bh/utils-handle-change-path config [[assoc :new-item
                                                                                {:include true :animate true
                                                                                 :stroke color :fill color}]]))
                   :label "Add :new-item"]]])))


(defn- data-update-example [& {:keys [widget component-id next-color] :as params}]
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
                           [component-id :blackboard :data]
                           [component-id :blackboard :config]
                           [] #() next-color]]]]])


(defn example []
  (let [next-color (atom -1)
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
                    :component-id component-id
                    :save-fn storage/save-to-local-storage
                    :resizable true
                    :tools true]
           :component-id component-id
           :next-color next-color]]]
        bh/multi-chart-src-code))))
