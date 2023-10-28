(ns demo.catalog.organism.ui-grid.sub-example
  (:require [bh-ui.core :as bh]
            [demo.catalog.organism.ui-grid.data :as data]
            [re-com.core :as rc]
            [re-frame.core :as re-frame]
            [reagent.core :as r]
            [taoensso.timbre :as log]
            [woolybear.ad.catalog.utils :as acu]
            [woolybear.ad.layout :as layout]))


(log/info "demo.catalog.organism.ui-grid.sub-example")


(def container-id :ui-grid-sub-demo)

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


(defn- grid-reset
  "we need to override this implementation, because the one provided
  by demo.catalog.organism.ui-grid.data doesn't know about re-frame"

  [container-id widget-val layout-val]
  (bh/utils-handle-change [container-id] {:widgets widget-val :layout layout-val}))


(defn- grid-update
  "we need to override this implementation, because the one provided
  by demo.catalog.organism.ui-grid.data doesn't know about re-frame"

  [container-id widgets layout widget-val layout-val]
  (bh/utils-handle-change [container-id]
    {:widgets (data/toggle-widgets @(bh/utils-resolve-value widgets) widget-val)
     :layout  (data/toggle-layout @(bh/utils-resolve-value layout) layout-val)}))


(defn- widget-tools [container-id widgets layout default-widgets default-layout]
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
              [rc/button :on-click #(grid-update container-id widgets layout
                                      multi-chart-widget multi-chart-layout)
               :label "! Multi Chart"]
              [rc/button :on-click #(grid-update container-id widgets layout
                                      multi-chart-2-widget multi-chart-2-layout)
               :label "! Multi Chart 2"]]])


(defn- ui-grid-container [& {:keys [widgets layout container-id] :as params}]
  ;(log/info "ui-grid-container" params)

  (let [id (r/atom nil)]

    (fn []
      (when (nil? @id)
        (let [config (let [loaded-dsl (data/load-widgets container-id)]
                       {:widgets   (or (:widgets loaded-dsl) default-widgets)
                        :layout    (or (:layout loaded-dsl) default-layout)
                        :container ""})]
          (reset! id container-id)
          (bh/utils-init-container-locals @id config)
          (bh/utils-dispatch-local @id [:container] container-id)
          (bh/utils-build-subs container-id config)))

      [bh/ui-grid
       :widgets widgets
       :layout layout
       :save-fn data/save-widgets
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

      '[bh/ui-grid
        :widgets widgets
        :layout layout
        :container-id container-id])))



(comment

  (demo.catalog.molecule.local-storage/load-from-local-storage
    "ui-grid-sub-demo")


  ())