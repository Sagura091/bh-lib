(ns demo.catalog.organism.ui-grid.ratom-example
  (:require [bh-ui.core :as bh]
            [demo.catalog.molecule.local-storage :as storage]
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
; region ; load & save of widget data

(defn- prep-widget-save [widget]
  (let [[id title [_ & {:keys [data component-id resizable]}]
         bar-color text-color] widget
        ;_   (log/info "prep-widget (a)" widget "_____" data)
        ret {:id           id
             :title        title
             :data         (select-keys @data [:mol/components :mol/links
                                               :mol/grid-layout :mol/flow-nodes
                                               :mol/flow-edges])
             :component-id component-id
             :resizable    resizable
             :bar-color    bar-color
             :text-color   text-color}]

    ;(log/info "prep-widget (b)" ret)

    ret))


(defn- prep-layout-save [layout]
  (js->clj layout :keywordize true))


(defn- prep-widget-load [{:keys [id title data component-id
                                 resizeable bar-color text-color]}]
  [id
   title
   [bh/grid-container
    :data (r/atom data)
    :component-id component-id
    :resizable resizeable]
   bar-color
   text-color])


(defn- prep-layout-load [layout]
  layout)


(defn- marshall-widget-save [widgets layout]
  {:widgets (set (map prep-widget-save widgets))
   :layout  (set (prep-layout-save layout))})


(defn marshal-widgets-load [widgets]
  (->> widgets
    (map prep-widget-load)
    set))


(defn marshal-layout-load [layout]
  layout)


(defn save-widgets [container-id widgets layout]
  ;(log/info "save-widgets" container-id "____" widgets "____" layout)

  (storage/save-to-local-storage container-id
    (marshall-widget-save widgets layout)))


; endregion



;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
; region ; set and reset the example data

(defn- grid-reset [widgets layout widget-val layout-val]
  (reset! widgets widget-val)
  (reset! layout layout-val))


(defn- toggle-val [s val]
  (if (contains? s val)
    (disj s val)
    (conj s val)))


(defn- grid-update [widgets layout widget-val layout-val]
  (reset! widgets (toggle-val @widgets widget-val))
  (reset! layout (toggle-val @layout layout-val)))


; endregion


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
; region ; default data

(def multi-chart-widget (prep-widget-load {:id           "multi-chart"
                                           :title        "Multi-Chart"
                                           :data         bh/simple-multi-chart1-ui-def
                                           :component-id (bh/utils-path->keyword container-id "multi-chart")
                                           :resizeable   true
                                           :bar-color    :blue
                                           :text-color   :white}))
(def multi-chart-2-widget (prep-widget-load {:id           "multi-chart-2"
                                             :title        "Multi-Chart-2"
                                             :data         bh/simple-multi-chart2-ui-def
                                             :component-id (bh/utils-path->keyword container-id "multi-chart-2")
                                             :resizable    true
                                             :bar-color    :rebeccapurple
                                             :text-color   :white}))
(def default-widgets #{multi-chart-widget})

(def multi-chart-layout (prep-layout-load {:i "multi-chart" :x 0 :y 10 :w 8 :h 15}))
(def multi-chart-2-layout (prep-layout-load {:i "multi-chart-2" :x 8 :y 21 :w 12 :h 15}))
(def default-layout #{multi-chart-layout})


(def empty-widgets #{})
(def empty-layout #{})

; endregion




(defn- widget-tools [widgets layout default-widgets]
  [rc/h-box :src (rc/at)
   :gap "10px"
   :class "tools-panel"
   :children [[:label.h5 "Widgets:"]
              [rc/button :on-click #(grid-reset widgets layout empty-widgets empty-layout)
               :label "Empty"]
              [rc/button :on-click #(grid-reset widgets layout default-widgets default-layout)
               :label "Default"]
              [rc/button :on-click #(grid-update widgets layout multi-chart-widget multi-chart-layout)
               :label "! Multi Chart"]
              [rc/button :on-click #(grid-update widgets layout multi-chart-2-widget multi-chart-2-layout)
               :label "! Multi Chart 2"]]])


(def last-data (atom nil))


(defn example []
  (let [widgets (r/atom (marshal-widgets-load
                          (or (:widgets (storage/load-from-local-storage container-id))
                            default-widgets)))
        layout  (r/atom (marshal-layout-load
                          (or (:layout (storage/load-from-local-storage container-id))
                             default-layout)))]

    (reset! last-data {:widgets widgets :layout layout})

    (acu/demo "Widget Grid (ratom-based)"
      "A grid of widget, which are composed of UI Components using a data structure that defines a directed graph."

      [layout/page {:extra-classes :is-fluid}

       [rc/v-box :src (rc/at)
        :gap "5px"
        :children [[bh/ui-grid
                    :widgets widgets
                    :layout layout
                    :save-fn save-widgets
                    :container-id container-id]
                   [widget-tools widgets layout default-widgets default-layout]]]]

      '[bh/ui-grid
        :widgets widgets
        :layout layout
        :container-id container-id])))




(comment

  @last-data


  (storage/load-from-local-storage "ui-grid-ratom-demo")


  (seq (filter #(= "multi-chart-2" (first %)) @(:widgets @last-data)))



  ())
