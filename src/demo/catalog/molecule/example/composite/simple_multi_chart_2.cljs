(ns demo.catalog.molecule.example.composite.simple-multi-chart-2
  (:require [bh-ui.core :as bh]
            [demo.catalog.molecule.local-storage :as storage]
            [demo.catalog.atom.example.chart.examples.user-tool :as tools]
            [bh-ui.utils.example-data :as data]
            [re-com.core :as rc]
            [re-frame.core :as re-frame]
            [reagent.core :as r]
            [taoensso.timbre :as log]
            [woolybear.ad.catalog.utils :as acu]
            [woolybear.ad.layout :as layout]))


(log/info "demo.catalog.molecule.example.composite.simple-multi-chart-2")


(def last-thing (atom nil))


(defn- data-config-update-example [& {:keys [widget component-id next-color] :as params}]
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
                           [component-id :blackboard :data]
                           ; TODO: (data-tools) we need a second config for the react-table, this is olny for the area-charts
                           [component-id :blackboard :config]
                           bh/simple-multi-chart1-sample-data
                           data/random-meta-tabular-data
                           next-color]
                          ; TODO: (config-tools) we need a second config for the react-table, this is olny for the area-charts
                          [tools/config-tools
                           [component-id :blackboard :data]
                           [component-id :blackboard :config]
                           bh/simple-multi-chart1-default-config]]]]])


(defn example []
  (let [next-color (atom 3)
        container-id "simple-multi-chart-2"
        component-id (bh/utils-path->keyword container-id "widget")]
    (fn []
      (acu/demo "(A simple) Multiple Charts in a Widget (adding configuration)"
        "This example provides a 'widget' (collection of UI Components) organized into a digraph (Event Model) that
          describes the flow of data from sources (remote or local) into and out-of the UI.

> This example works on the entire 'data' item, rather than _reaching inside_ like
> `atom/example/chart/bar-chart/data-sub-example`
>
> See also `molecule/example/simple-multi-chart-2`

> Note: Currently, (sha: x962dea7) only the Chart will show the new item when the user click the `Add :new-item` button. This
> is because the tools/data-tools only knows of one config param, and in this case we pass only the config for the Chart.
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
                    :data (r/atom bh/simple-multi-chart2-ui-def)
                    :component-id component-id
                    :save-fn storage/save-to-local-storage
                    :resizable true
                    :tools true]
           :component-id component-id
           :next-color next-color]]]

        bh/simple-multi-chart2-src-code))))


(comment
  (do
    (def container-id "simple-multi-chart-2")
    (def component-id (bh/utils-path->keyword container-id "widget"))
    (def data [component-id :blackboard :topic.data])
    (def path [:data])
    (def old-data (bh/resolve-subscribe-local data [:data]))

    (def value data)
    (def new-value (assoc-in @old-data [0 :uv] 10000)))

  (re-frame/subscribe [(bh/utils-path->keyword data)])


  (bh/subscribe-local data [])
  (bh/subscribe-local data [:data])
  (bh/subscribe-local data [:data 0])
  (bh/subscribe-local data [:data 0 :uv])


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


  :simple-multi-chart.widget.blackboard.topic.data.data

  (:event @re-frame.registrar/kind->id->handler)

  (get-in @re-frame.registrar/kind->id->handler [:event :simple-multi-chart.widget.blackboard.topic.data])
  (get-in @re-frame.registrar/kind->id->handler [:event :simple-multi-chart.widget.blackboard.topic.data.data])


  ())

