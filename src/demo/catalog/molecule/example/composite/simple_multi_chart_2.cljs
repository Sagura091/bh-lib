(ns demo.catalog.molecule.example.composite.simple-multi-chart-2
  (:require [bh-ui.atom.chart.utils :as chart-utils]
            [bh-ui.molecule.composite.simple-multi-chart-2 :as widget]
            [bh-ui.molecule.grid-container :as grid]
            [bh-ui.utils :as ui-utils]
            [bh-ui.utils.helpers :as h]
            [bh-ui.utils.locals :as l]
            [re-com.core :as rc]
            [re-frame.core :as re-frame]
            [reagent.core :as r]
            [taoensso.timbre :as log]
            [woolybear.ad.catalog.utils :as acu]
            [woolybear.ad.layout :as layout]))


(log/info "demo.catalog.molecule.example.composite.simple-multi-chart-2")


(defn- data-tools [data]
  (let [old-data (ui-utils/subscribe-local data [])]

    ;(log/info "data-tools" data "//" @old-data)

    (fn []
      [rc/h-box :src (rc/at)
       :gap "10px"
       :class "tools-panel"
       :children [[:label.h5 "Input Data:"]

                  [rc/button :on-click #(h/handle-change-path (drop-last data) [[l/set-val (take-last 1 data) []]]) :label "Empty"]

                  [rc/button :on-click #(h/handle-change-path (drop-last data) [[l/set-val (take-last 1 data) widget/sample-data]])
                   :label "Default"]

                  [rc/button :on-click #(h/handle-change-path data [[assoc-in [:data 0 :uv] 10000]])
                   :label "A -> 10000"]

                  [rc/button :on-click #(h/handle-change-path data [[l/conj-in [:data]
                                                                     {:name "Page Q" :uv 1100
                                                                      :pv   1100 :tv 1100 :amt 1100}]])
                   :label "Add 'Q'"]

                  [rc/button :on-click #(h/handle-change-path data [[l/drop-last-in [:data] 2]])
                   :label "Drop Last 2"]

                  [rc/button :on-click #(h/handle-change-path data [[assoc-in [:metadata :fields :new-item] :number]
                                                                    [assoc :data (into []
                                                                                   (map (fn [x]
                                                                                          (assoc x :new-item (rand-int 7000)))
                                                                                     (:data @old-data)))]])
                   :label "Add :new-item"]]])))

(def last-thing (atom nil))
(defn- config-tools [config-data]
  ;(log/info "config-tools (a)" config-data)

  (reset! last-thing config-data)

  (let [cfg (ui-utils/subscribe-local config-data [])]
    (fn []
      (let [brush? (get-in @cfg [:brush])
            uv?    (get-in @cfg [:uv :include])
            tv?    (get-in @cfg [:tv :include])]

        ;(log/info "config-tools (b)" config-data "//" cfg "//" brush? "//" uv?)

        [rc/h-box :src (rc/at)
         :gap "10px"
         :class "tools-panel"
         :children [[:label.h5 "Config:"]
                    [rc/button :on-click #(h/handle-change-path config-data [[l/set-val [] widget/default-config-data]]) :label "Default"]
                    [rc/button :on-click #(h/handle-change-path config-data [[update-in [:brush] not]])
                     :label "!Brush"]
                    [rc/button :on-click #(h/handle-change-path config-data [[update-in [:uv :include] not]])
                     :label "! uv data"]
                    [rc/button :on-click #(h/handle-change-path config-data [[update-in [:tv :include] not]])
                     :label "! tv data"]

                    [chart-utils/color-config config-data ":amt :fill" [:amt :fill] :above-center]

                    [rc/button :on-click #(h/handle-change-path config-data [[assoc-in [:uv :stackId] "b"]
                                                                             [assoc-in [:pv :stackId] "b"]])
                     :label "stack uv/pv"]
                    [rc/button :on-click #(h/handle-change-path config-data [[assoc-in [:uv :stackId] ""]
                                                                             [assoc-in [:pv :stackId] ""]])
                     :label "!stack uv/pv"]
                    [rc/button :on-click #(h/handle-change-path config-data [[assoc-in [:tv :stackId] "a"]
                                                                             [assoc-in [:amt :stackId] "a"]])
                     :label "stack tv/amt"]
                    [rc/button :on-click #(h/handle-change-path config-data [[assoc-in [:tv :stackId] ""]
                                                                             [assoc-in [:amt :stackId] ""]])
                     :label "!stack tv/amt"]]]))))


(comment
  (def config-data @last-thing)
  (def cfg (ui-utils/subscribe-local config-data []))

  ())


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
        component-id (h/path->keyword container-id "widget")]
    (fn []
      (acu/demo "(A simple) Multiple Charts in a Widget (adding configuration)"
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
    (def container-id "simple-multi-chart-2")
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

