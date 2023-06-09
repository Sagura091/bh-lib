(ns demo.catalog.molecule.example.composite.simple-multi-chart
  (:require [bh-ui.atom.chart.utils :as chart-utils]
            [bh-ui.molecule.composite.simple-multi-chart :as widget]
            [bh-ui.molecule.grid-container :as grid]
            [bh-ui.utils :as ui-utils]
            [bh-ui.utils.helpers :as h]
            [re-com.core :as rc]
            [re-frame.core :as re-frame]
            [reagent.core :as r]
            [taoensso.timbre :as log]
            [woolybear.ad.catalog.utils :as acu]
            [woolybear.ad.layout :as layout]))


(log/info "demo.catalog.molecule.example.composite.simple-multi-chart")


(defn- data-tools [data]
  (let [old-data (ui-utils/subscribe-local data [])]

    ;(log/info "data-tools" data "//" @old-data)

    (fn []
      [rc/h-box :src (rc/at)
       :gap "10px"
       :class "tools-panel"
       :children [[:label.h5 "Input Data:"]

                  [rc/button :on-click #(h/handle-change-path data [] []) :label "Empty"]

                  [rc/button :on-click #(h/handle-change-path data [] widget/sample-data)
                   :label "Default"]

                  [rc/button :on-click #(h/handle-change-path data []
                                          (assoc-in @old-data [:data 0 :uv] 10000))
                   :label "A -> 10000"]

                  [rc/button :on-click #(h/handle-change-path data []
                                          (assoc @old-data :data
                                            (conj (:data @old-data)
                                              {:name "Page Q" :uv 1100
                                               :pv   1100 :tv 1100 :amt 1100})))
                   :label "Add 'Q'"]

                  [rc/button :on-click #(h/handle-change-path data []
                                          (assoc @old-data :data
                                            (into [] (drop-last 2 (:data @old-data)))))
                   :label "Drop Last 2"]

                  [rc/button :on-click #(h/handle-change-path data []
                                          (-> @old-data
                                            (assoc-in [:metadata :fields :new-item] :number)
                                            (assoc :data (into []
                                                           (map (fn [x]
                                                                  (assoc x :new-item (rand-int 7000)))
                                                             (:data @old-data))))))
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
               :children [[data-tools [component-id :blackboard :topic.data]]]]]])


(defn example []
  (let [container-id "simple-multi-chart"
        component-id (h/path->keyword container-id "widget")]
    (fn []
      (acu/demo "(A simple) Multiple Charts in a Widget (shared data)"
        "This example provides a 'widget' (collection of UI Components) organized into a digraph (Event Model) that
          describes the flow of data from sources (remote or local) into and out-of the UI.

> This example works on the entire 'data' item, rather than _reaching inside_ like
> `atom/example/chart/bar-chart/data-sub-example`
>
> See also `molecule/example/simple-multi-chart-2`
"
        [layout/frame
         ;;
         ;; NOTE: the :height MUST be specified here since the ResponsiveContainer down in bowels of the chart needs a height
         ;; in order to actually draw the Recharts components. just saying "100%" doesn't work, since the
         ;; that really means "be as big as you need" and ResponsiveContainer then doesn't know what to do.
         ;;
         [:div.molecule-content
          [data-config-update-example
           :widget [grid/component
                    :data (r/atom widget/ui-definition)
                    :component-id component-id
                    :resizable true
                    :tools true]
           :component-id component-id]]]

        widget/source-code))))


(comment
  (do
    (def container-id "simple-multi-chart")
    (def component-id (h/path->keyword container-id "widget"))
    (def data [component-id :blackboard :topic.data])
    (def path [:data])
    (def old-data (ui-utils/resolve-subscribe-local data [:data]))

    (def value data)
    (def new-value (assoc-in @old-data [0 :uv] 10000)))

  (re-frame/subscribe [(h/path->keyword data)])


  (ui-utils/subscribe-local data [])
  (ui-utils/subscribe-local data [:data])
  (ui-utils/subscribe-local data [:data 0])
  (ui-utils/subscribe-local data [:data 0 :uv])


  (cond
    (or (coll? value)
      (keyword? value)
      (string? value)) (let [update-event (conj [(h/path->keyword value path)] new-value)]
                         ;(log/info "handle-change-path (update event)" update-event)
                         (re-frame/dispatch update-event))
    (instance? reagent.ratom.RAtom value) (swap! value assoc-in path new-value)
    (instance? Atom value) (swap! value assoc-in path new-value)
    :else ())


  (h/handle-change-path data [:data]
    (assoc-in @old-data [0 :uv] 10000))


  :simple-multi-chart.widget.blackboard.topic.data.data

  (:event @re-frame.registrar/kind->id->handler)

  (get-in @re-frame.registrar/kind->id->handler [:event :simple-multi-chart.widget.blackboard.topic.data])
  (get-in @re-frame.registrar/kind->id->handler [:event :simple-multi-chart.widget.blackboard.topic.data.data])


  ())

