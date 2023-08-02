(ns demo.catalog.organism.ui-grid.sub-example
  (:require [demo.subs :as subs]
            [bh-ui.molecule.composite.chart-remote-data :as chart-remote-data]
            [bh-ui.molecule.composite.coverage-plan :as coverage-plan]
            [bh-ui.molecule.composite.simple-multi-chart :as simple-multi-chart]
            [bh-ui.molecule.composite.simple-multi-chart-2 :as simple-multi-chart-2]
            [bh-ui.molecule.grid-container :as grid-container]
            [bh-ui.organism.ui-grid :as grid]
            [bh-ui.utils :as ui-utils]
            [bh-ui.utils.helpers :as h]
            [re-com.core :as rc]
            [re-frame.core :as re-frame]
            [reagent.core :as r]
            [taoensso.timbre :as log]
            [woolybear.ad.catalog.utils :as acu]
            [woolybear.ad.layout :as layout]))


(log/info "demo.catalog.organism.ui-grid.sub-example")


(def container-id :ui-grid-sub-demo)

;(def bar-chart-widget ["bar-chart" "Bar Chart"
;                       [grid-container/component
;                        :data (r/atom chart-remote-data/ui-definition)
;                        :component-id (h/path->keyword container-id "bar-chart")
;                        :resizable true]
;                       :green :white])
(def multi-chart-widget ["multi-chart" "Multi-Chart"
                         [grid-container/component
                          :data (r/atom simple-multi-chart/ui-definition)
                          :component-id (h/path->keyword container-id "multi-chart")
                          :resizable true]
                         :blue :white])
(def multi-chart-2-widget ["multi-chart-2" "Multi-Chart-2"
                           [grid-container/component
                            :data (r/atom simple-multi-chart-2/ui-definition)
                            :component-id (h/path->keyword container-id "multi-chart-2")
                            :resizable true]
                           :rebeccapurple :white])
;(def coverage-plan-widget ["coverage-plan" "Coverage Plan"
;                           [grid-container/component
;                            :data (r/atom coverage-plan/ui-definition)
;                            :component-id (h/path->keyword container-id "coverage-plan")
;                            :resizable true]
;                           :yellow :black])
(def default-widgets #{multi-chart-widget})

;(def bar-chart-layout {:i "bar-chart" :x 0 :y 0 :w 8 :h 15})
(def multi-chart-layout {:i "multi-chart" :x 0 :y 10 :w 8 :h 15})
(def multi-chart-2-layout {:i "multi-chart-2" :x 8 :y 21 :w 12 :h 15})
;(def coverage-plan-layout {:i "coverage-plan" :x 8 :y 0 :w 12 :h 21})
(def default-layout #{multi-chart-layout})

(def empty-widgets #{})
(def empty-layout #{})


(def config
  {:widgets   default-widgets
   :layout    default-layout
   :container ""})


(defn- grid-reset [container-id widget-val layout-val]
  (h/handle-change [container-id] {:widgets widget-val :layout layout-val}))


(defn- toggle-val [s val]
  (if (contains? s val)
    (disj s val)
    (conj s val)))


(defn- grid-update [container-id widgets layout widget-val layout-val]
  (h/handle-change [container-id]
    {:widgets (toggle-val @(h/resolve-value widgets) widget-val)
     :layout  (toggle-val @(h/resolve-value layout) layout-val)}))


(defn- widget-tools [container-id widgets layout default-widgets]
  [rc/h-box :src (rc/at)
   :gap "10px"
   :class "tools-panel"
   :children [[:label.h5 "Widgets:"]
              [rc/button :on-click #(grid-reset container-id
                                      empty-widgets empty-layout)
               :label "Empty"]
              [rc/button :on-click #(grid-reset container-id
                                      default-widgets default-layout)
               :label "Default"]
              ;[rc/button :on-click #(grid-update container-id widgets layout
              ;                        bar-chart-widget bar-chart-layout)
              ; :label "! Bar Chart"]
              [rc/button :on-click #(grid-update container-id widgets layout
                                      multi-chart-widget multi-chart-layout)
               :label "! Multi Chart"]
              [rc/button :on-click #(grid-update container-id widgets layout
                                      multi-chart-2-widget multi-chart-2-layout)
               :label "! Multi Chart 2"]]])
;[rc/button :on-click #(grid-update container-id widgets layout
;                        coverage-plan-widget coverage-plan-layout)
; :label "! Coverage Plan"]]])


(defn- ui-grid-container [& {:keys [widgets layout container-id] :as params}]
  ;(log/info "ui-grid-container" params)

  (let [id (r/atom nil)]

    (fn []
      (when (nil? @id)
        (reset! id container-id)
        (ui-utils/init-container-locals @id config)
        (ui-utils/dispatch-local @id [:container] container-id)
        (ui-utils/build-subs container-id config))

      [grid/component
       :widgets widgets
       :layout layout
       :container-id container-id])))


(defn example []
  (let [widgets [container-id :widgets]
        layout  [container-id :layout]]

    (acu/demo "Widget Grid (subscription-based)"
      "A grid of widget, which are composed of UI Components using subscription to the data structure that defines a directed graph."

      [layout/page {:extra-classes :is-fluid}

       [rc/v-box :src (rc/at)
        :gap "5px"
        :children [[ui-grid-container
                    :widgets widgets
                    :layout layout
                    :container-id container-id]
                   [widget-tools container-id widgets layout default-widgets default-layout]]]]

      '[grid/component
        :widgets widgets
        :layout layout
        :container-id container-id])))

