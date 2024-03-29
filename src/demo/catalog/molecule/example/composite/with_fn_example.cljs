(ns demo.catalog.molecule.example.composite.with-fn-example
  (:require [bh-ui.core :as bh]
            [demo.catalog.molecule.local-storage :as storage]
            [re-com.core :as rc]
            [re-frame.core :as re-frame]
            [reagent.core :as r]
            [taoensso.timbre :as log]
            [woolybear.ad.catalog.utils :as acu]
            [woolybear.ad.layout :as layout]))


(log/info "demo.catalog.molecule.example.composite.with-fn-example")


(defn- data-tools [data]
  (let [old-data (bh/utils-subscribe-local data [])]

    ;(log/info "data-tools" data "//" @old-data)

    (fn []
      [rc/h-box :src (rc/at)
       :gap "10px"
       :class "tools-panel"
       :children [[:label.h5 "Input Data:"]

                  [rc/button :on-click #(bh/utils-handle-change-path (drop-last data) [[bh/utils-set-local-values (take-last 1 data) []]]) :label "Empty"]

                  [rc/button :on-click #(bh/utils-handle-change-path (drop-last data) [[bh/utils-set-local-values (take-last 1 data) bh/with-fn-sample-data]])
                   :label "Default"]

                  [rc/button :on-click #(bh/utils-handle-change-path data [[assoc-in [:data 0 :uv] 10000]])
                   :label "A -> 10000"]

                  [rc/button :on-click #(bh/utils-handle-change-path data [[bh/utils-conj-in [:data] {:name "Page Q" :uv 1100
                                                                                        :pv   1100 :tv 1100 :amt 1100}]])
                   :label "Add 'Q'"]

                  [rc/button :on-click #(bh/utils-handle-change-path data [[bh/utils-drop-last-in [:data] 2]])
                   :label "Drop Last 2"]

                  [rc/button :on-click #(bh/utils-handle-change-path data
                                          [[assoc-in [:metadata :fields :new-item] :number]
                                           ; TODO: can we do this better?
                                           [assoc :data (into []
                                                          (map (fn [x]
                                                                 (assoc x :new-item (rand-int 7000)))
                                                            (:data @old-data)))]])
                   :label "Add :new-item"]]])))


(defn- data-config-update-example [& {:keys [widget component-id] :as params}]
  ;(log/info "config-update-example (params)" params)

  [rc/v-box :src (rc/at)
   :gap "10px"
   :width "100%"
   :height "100%"
   :children [[:div.chart-part {:style {:width "100%"}}     ;:height "90%"}}
               widget]

              [rc/v-box :src (rc/at)
               :gap "8px"
               :children [[data-tools [component-id :blackboard "data"]]]]]])


(defn example []
  (let [container-id "chart-with-fn"
        component-id (bh/utils-path->keyword container-id "widget")
        dsl          (r/atom (or (storage/load-from-local-storage component-id) bh/with-fn-ui-def))]
    (fn []
      (acu/demo "A Multiple Charts in a Widget (with 'computed' data)"
        "This example provides a 'widget' (collection of UI Components) organized into a digraph (Event Model) that
          describes the flow of data from sources (remote or local) into and out-of the UI.

Here, we show the original data in the line chart while the pie chart shows the result of `(:uv * :pv) / 1000`

  > Note: this example shows hooking a :source/fn to a :source/local, like a cache. This is _not_ required; a :source/fn can connect
  > directly to a :ui/component is that is better for your design.

"
        [layout/frame
         ;;
         ;; NOTE: the :height MUST be specified here since the ResponsiveContainer down in bowels of the chart needs a height
         ;; in order to actually draw the Recharts components. just saying "100%" doesn't work, since the
         ;; that really means "be as big as you need" and ResponsiveContainer then doesn't know what to do.
         ;;
         [:div.molecule-content
          [data-config-update-example
           :widget [bh/grid-container
                    :data dsl
                    :component-id component-id
                    :save-fn storage/save-to-local-storage
                    :resizable true
                    :tools true]
           :component-id component-id]]]

        bh/with-fn-src-code))))

