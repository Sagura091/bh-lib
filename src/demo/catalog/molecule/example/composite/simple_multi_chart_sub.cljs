(ns demo.catalog.molecule.example.composite.simple-multi-chart-sub
  (:require [bh-ui.core :as bh]
            [re-com.core :as rc]
            [re-frame.core :as re-frame]
            [reagent.core :as r]
            [taoensso.timbre :as log]
            [woolybear.ad.catalog.utils :as acu]
            [woolybear.ad.layout :as layout]))


(log/info "demo.catalog.molecule.example.composite.simple-multi-chart-sub")


(defn- data-tools [data]
  (let [old-data (bh/utils-subscribe-local data [:data])
        old-meta (bh/utils-subscribe-local data [])]

    ;(log/info "data-tools" data "//" @old-data "//" @old-meta)

    (fn []
      [rc/h-box :src (rc/at)
       :gap "10px"
       :class "tools-panel"
       :children [[:label.h5 "Input Data:"]

                  [rc/button :on-click #(bh/utils-handle-change-path (drop-last data) [[bh/utils-set-local-values (take-last 1 data) []]]) :label "Empty"]

                  [rc/button :on-click #(bh/utils-handle-change-path (drop-last data) (take-last 1 data) bh/simple-multi-chart1-sample-data)
                   :label "Default"]

                  [rc/button :on-click #(bh/utils-handle-change-path data [:data]
                                          (assoc-in @old-data [0 :uv] 10000))
                   :label "A -> 10000"]

                  [rc/button :on-click #(bh/utils-handle-change-path data [:data]
                                          (conj @old-data
                                            {:name "Page Q" :uv 1100
                                             :pv   1100 :tv 1100 :amt 1100}))
                   :label "Add 'Q'"]

                  [rc/button :on-click #(bh/utils-handle-change-path data [:data]
                                          (into [] (drop-last 2 @old-data)))
                   :label "Drop Last 2"]

                  [rc/button :on-click #(bh/utils-handle-change-path data []
                                          (-> @old-meta
                                            (assoc-in [:metadata :fields :new-item] :number)
                                            (assoc :data (into []
                                                           (map (fn [x]
                                                                  (assoc x :new-item (rand-int 7000)))
                                                             @old-data)))))
                   :label "Add :new-item"]]])))


(defn- config-tools [config-data]
  (let [brush? (bh/utils-subscribe-local config-data [:brush])
        uv?    (bh/utils-subscribe-local config-data [:uv :include])
        tv?    (bh/utils-subscribe-local config-data [:tv :include])]

    ;(log/info "config-tools" config-data "//" @brush? "//" @uv?)

    (fn []
      [rc/h-box :src (rc/at)
       :gap "10px"
       :class "tools-panel"
       :children [[:label.h5 "Config:"]
                  [rc/button :on-click #(bh/utils-handle-change-path config-data [] bh/simple-multi-chart1-default-config) :label "Default"]
                  [rc/button :on-click #(bh/utils-handle-change-path config-data [:brush] (not @brush?))
                   :label "!Brush"]
                  [rc/button :on-click #(bh/utils-handle-change-path config-data [:uv :include] (not @uv?))
                   :label "! uv data"]
                  [rc/button :on-click #(bh/utils-handle-change-path config-data [:tv :include] (not @tv?))
                   :label "! tv data"]
                  [bh/chart-utils-color-config config-data ":amt :fill" [:amt :fill] :above-center]
                  [rc/button :on-click #((bh/utils-handle-change-path config-data [:uv :stackId] "b")
                                         (bh/utils-handle-change-path config-data [:pv :stackId] "b"))
                   :label "stack uv/pv"]
                  [rc/button :on-click #((bh/utils-handle-change-path config-data [:uv :stackId] "")
                                         (bh/utils-handle-change-path config-data [:pv :stackId] ""))
                   :label "!stack uv/pv"]
                  [rc/button :on-click #((bh/utils-handle-change-path config-data [:tv :stackId] "a")
                                         (bh/utils-handle-change-path config-data [:amt :stackId] "a"))
                   :label "stack tv/amt"]
                  [rc/button :on-click #((bh/utils-handle-change-path config-data [:tv :stackId] "")
                                         (bh/utils-handle-change-path config-data [:amt :stackId] ""))
                   :label "!stack tv/amt"]]])))


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
               :children [[data-tools [component-id :blackboard :topic.data]]
                          [config-tools [component-id :blackboard :topic.config]]]]]])


(defn example []
  (let [container-id "simple-multi-chart-2"
        component-id (bh/utils-path->keyword container-id "widget")]
    (fn []
      (acu/demo "(A simpler) Multiple Charts in a Widget (WIP)"
        "This example provides a 'widget' (collection of UI Components) organized into a digraph (Event Model) that
          describes the flow of data from sources (remote or local) into and out-of the UI.

> Current the data tools *DON'T WORK*, but this is written as is *should* be written (subscribe-local ...)
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
                    :data (r/atom bh/simple-multi-chart1-ui-def)
                    :component-id component-id
                    :resizable true
                    :tools true]
           :component-id component-id]]]

        bh/simple-multi-chart1-src-code))))


(comment
  (do
    (def container-id "simple-multi-chart-2")
    (def component-id (bh/utils-path->keyword container-id "widget"))
    (def data [component-id :blackboard :topic.data])
    (def path [:data])
    (def old-data (bh/utils-resolve-subscribe-local data [:data]))

    (def value data)
    (def new-value (assoc-in @old-data [0 :uv] 10000)))

  (re-frame/subscribe [(bh/utils-path->keyword data)])


  (bh/utils-subscribe-local data [])
  (bh/utils-subscribe-local data [:data])
  (bh/utils-subscribe-local data [:data 0])
  (bh/utils-subscribe-local data [:data 0 :uv])


  (cond
    (or (coll? value)
      (keyword? value)
      (string? value)) (let [update-event (conj [(bh/utils-path->keyword value path)] new-value)]
                         ;(log/info "handle-change-path (update event)" update-event)
                         (re-frame/dispatch update-event))
    (instance? reagent.ratom.RAtom value) (swap! value assoc-in path new-value)
    (instance? Atom value) (swap! value assoc-in path new-value)
    :else ())


  (bh/utils-handle-change-path data [:data]
    (assoc-in @old-data [0 :uv] 10000))


  :simple-multi-chart-2.widget.blackboard.topic.data.data

  (:event @re-frame.registrar/kind->id->handler)

  (get-in @re-frame.registrar/kind->id->handler [:event :simple-multi-chart-2.widget.blackboard.topic.data])
  (get-in @re-frame.registrar/kind->id->handler [:event :simple-multi-chart-2.widget.blackboard.topic.data.data])


  ())