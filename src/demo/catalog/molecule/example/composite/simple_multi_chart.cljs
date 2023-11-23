(ns demo.catalog.molecule.example.composite.simple-multi-chart
  (:require [bh-ui.core :as bh]
            [bh-ui.utils.color :as color]
            [bh-ui.utils.example-data :as data]
            [demo.catalog.atom.example.chart.examples.user-tool :as tools]
            [re-com.core :as rc]
            [re-frame.core :as re-frame]
            [reagent.core :as r]
            [taoensso.timbre :as log]
            [woolybear.ad.catalog.utils :as acu]
            [woolybear.ad.layout :as layout]))


(log/info "demo.catalog.molecule.example.composite.simple-multi-chart")


(def atom-wrapped-dsl (r/atom bh/simple-multi-chart1-ui-def))


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


(defn- data-config-update-example [& {:keys [widget component-id config reset-config next-color] :as params}]
  ;(log/info "config-update-example (params)" params)

  [rc/v-box :src (rc/at)
   :gap "10px"
   :width "100%"
   :height "100%"
   :children [[:div.chart-part {:style {:width "100%"}}     ;:height "90%"}}
               widget]

              [rc/v-box :src (rc/at)
               :gap "8px"
               :children [[tools/data-tools
                           [component-id :blackboard :topic.data]
                           config
                           bh/simple-multi-chart1-sample-data
                           data/random-meta-tabular-data
                           next-color]
                          [tools/config-tools
                           [component-id :blackboard :topic.data]
                           config
                           reset-config]]]]])


(defn example []
  (let [next-color (atom -1)
        reset-config (default-config next-color)
        config (r/atom reset-config)
        container-id "simple-multi-chart"
        component-id (bh/utils-path->keyword container-id "widget")]
    (fn []
      (acu/demo "(A simple) Multiple Charts in a Widget (shared data)"
        "This example provides a 'widget' (collection of UI Components) organized into a digraph (Event Model) that
          describes the flow of data from sources (remote or local) into and out-of the UI.

> This example works on the entire 'data' item, rather than _reaching inside_ like
> `atom/example/chart/bar-chart/data-sub-example`
>
> See also `molecule/example/simple-multi-chart-2`

> Note: we are using a `(r/atom config)` to hold the Chart config, so the `Add :new-item` button will show the correct results.

> Note 2: this example is using the *older* implementation of Recharts, which do _NOT_ yet implement a `:config`
> parameter, so any changes the user makes on the `Config Properties:` tool will _NOT_ be reflected
> in the charts.
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
                    :data atom-wrapped-dsl
                    :config config
                    :component-id component-id
                    :resizable true
                    :tools true]
           :component-id component-id
           :config config
           :reset-config reset-config]]]

        bh/simple-multi-chart1-src-code))))


(comment
  (do
    (def container-id "simple-multi-chart")
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


  ;:simple-multi-chart.widget.blackboard.topic.data.data

  (:event @re-frame.registrar/kind->id->handler)

  (get-in @re-frame.registrar/kind->id->handler [:event :simple-multi-chart.widget.blackboard.topic.data])
  (get-in @re-frame.registrar/kind->id->handler [:event :simple-multi-chart.widget.blackboard.topic.data.data])


  ())



(comment
  @atom-wrapped-dsl


  ())