(ns demo.catalog.organism.ui-grid.ratom-example
  (:require [bh-ui.core :as bh]
            [demo.catalog.organism.ui-grid.data :as data]
            [re-com.core :as rc]
            [re-frame.core :as re-frame]
            [reagent.core :as r]
            [taoensso.timbre :as log]
            [woolybear.ad.catalog.utils :as acu]
            [woolybear.ad.layout :as layout]))


(log/info "demo.catalog.organism.ui-grid.ratom-example")


(def container-id "ui-grid-ratom-demo")

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
; region ; default data

(def multi-chart-widget (data/prep-widget-load
                          {:id           "multi-chart"
                           :title        "Multi-Chart"
                           :data         bh/simple-multi-chart1-ui-def
                           :component-id (bh/utils-path->keyword container-id "multi-chart")
                           :resizeable   true
                           :bar-color    :blue
                           :text-color   :white}))
(def multi-chart-2-widget (data/prep-widget-load
                            {:id           "multi-chart-2"
                             :title        "Multi-Chart-2"
                             :data         bh/simple-multi-chart2-ui-def
                             :component-id (bh/utils-path->keyword container-id "multi-chart-2")
                             :resizable    true
                             :bar-color    :rebeccapurple
                             :text-color   :white}))
(def default-widgets #{multi-chart-widget})

(def multi-chart-layout (data/prep-layout-load {:i "multi-chart" :x 0 :y 10 :w 8 :h 15}))
(def multi-chart-2-layout (data/prep-layout-load {:i "multi-chart-2" :x 8 :y 21 :w 12 :h 15}))
(def default-layout #{multi-chart-layout})


(def empty-widgets #{})
(def empty-layout #{})

; endregion


(defn- widget-tools [widgets layout default-widgets default-layout]
  [rc/h-box :src (rc/at)
   :gap "10px"
   :class "tools-panel"
   :children [[:label.h5 "Widgets:"]
              [rc/button :on-click #(data/grid-reset widgets layout empty-widgets empty-layout)
               :label "Empty"]
              [rc/button :on-click #(data/grid-reset widgets layout default-widgets default-layout)
               :label "Default"]
              [rc/button :on-click #(data/grid-update widgets layout multi-chart-widget multi-chart-layout)
               :label "! Multi Chart"]
              [rc/button :on-click #(data/grid-update widgets layout multi-chart-2-widget multi-chart-2-layout)
               :label "! Multi Chart 2"]]])


(def last-data (atom nil))


(defn example []
  (let [loaded-dsl (data/load-widgets container-id)
        widgets    (r/atom (or (:widgets loaded-dsl) default-widgets))
        layout     (r/atom (or (:layout loaded-dsl) default-layout))]

    (reset! last-data {:widgets widgets :layout layout})

    (acu/demo "Widget Grid (ratom-based)"
      "A grid of widget, which are composed of UI Components using a data structure that defines a directed graph."

      [layout/page {:extra-classes :is-fluid}

       [rc/v-box :src (rc/at)
        :gap "5px"
        :children [[bh/ui-grid
                    :widgets widgets
                    :layout layout
                    :save-fn data/save-widgets
                    :container-id container-id]
                   [widget-tools widgets layout default-widgets default-layout]]]]

      '[bh/ui-grid
        :widgets widgets
        :layout layout
        :container-id container-id])))




(comment

  @last-data


  (demo.catalog.molecule.local-storage/load-from-local-storage
    "ui-grid-ratom-demo")


  (seq (filter #(= "multi-chart-2" (first %)) @(:widgets @last-data)))



  ())
