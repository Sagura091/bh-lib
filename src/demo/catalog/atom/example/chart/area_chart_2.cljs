(ns demo.catalog.atom.example.chart.area-chart-2
  (:require [bh-ui.core :as bh]
            [bh-ui.atom.chart.area-chart-2 :as area-chart]
            [bh-ui.utils.color :as color]
            [bh-ui.utils.example-data :as data]
            [demo.catalog.atom.example.chart.examples.data-ratom :as data-ratom]
            [demo.catalog.atom.example.chart.examples.data-structure :as data-structure]
            [demo.catalog.atom.example.chart.examples.data-subscription :as data-subscription]
            [demo.catalog.atom.example.multi-example :as me]
            [demo.catalog.atom.example.chart.examples.user-tool :as tools]
            [reagent.core :as r]
            [re-com.core :as rc]
            [woolybear.ad.catalog.utils :as acu]
            [taoensso.timbre :as log]))


(log/info "demo.catalog.atom.example.chart.area-chart-2")


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


(def example-data data/meta-tabular-data)
(def example-config default-config)


(defn chart-container [chart]
  [:div.component-example {:style {:width "100%" :height "450px"}}
   chart])


(defn config-ratom-example []
  (let [next-color   (atom -1)
        component-id "area-chart-2"
        container-id ""
        reset-config (example-config next-color)
        config       (r/atom reset-config)]

    (acu/demo "Area Chart 2"
      "Trying to fix Recharts implementation (config is a `(r)atom`)"
      [rc/box :src (rc/at)
       :justify :center
       :width "100%"
       :height "100%"
       :child [rc/v-box :src (rc/at)
               :gap "3px"
               :width "100%"
               :height "100%"
               :children [[chart-container
                           [area-chart/component
                            :data example-data
                            :config config
                            :component-id component-id
                            :container-id container-id]]
                          [tools/config-tools example-data config reset-config]]]]
      area-chart/source-code)))


(defn config-struct-example []
  (let [next-color   (atom -1)
        component-id "area-chart-2"
        container-id ""]

    (acu/demo "Area Chart 2"
      "Trying to fix Recharts implementation (config is a *plain* hash-map)"
      [rc/box :src (rc/at)
       :justify :center
       :width "100%"
       :height "100%"
       :child [rc/v-box :src (rc/at)
               :gap "3px"
               :width "100%"
               :height "100%"
               :children [[chart-container
                           [area-chart/component
                            :data example-data
                            :config (example-config next-color)
                            :component-id component-id
                            :container-id container-id]]]]]
      area-chart/source-code)))


(defn config-sub-example []
  (let [next-color   (atom -1)
        component-id :area-chart-2-data-sub-demo
        container-id ""
        reset-config (example-config next-color)
        config       [component-id :blackboard :config]
        id           (atom nil)]

    (fn []
      (when (nil? @id)
        (reset! id component-id)
        (bh/utils-init-container-locals @id {:blackboard {:config reset-config}
                                             :container  container-id})
        (bh/utils-dispatch-local @id [:container] component-id))

      (acu/demo "Area Chart 2"
        "Trying to fix Recharts implementation (subscribing to `:config`)"
        [rc/box :src (rc/at)
         :justify :center
         :width "100%"
         :height "100%"
         :child [rc/v-box :src (rc/at)
                 :gap "3px"
                 :width "100%"
                 :height "100%"
                 :children [[chart-container
                             [area-chart/component
                              :data example-data
                              :config config
                              :component-id component-id
                              :container-id container-id]]
                            [tools/config-tools example-data config reset-config]]]]
        area-chart/source-code))))


(defn data-ratom-example []
  [data-ratom/example
   :container-id :area-chart-2-data-ratom-demo
   :title "Area Chart (#2) (Live Data - ratom)"
   :description "An Area Chart built using [Recharts](https://recharts.org/en-US/api/AreaChart). This example shows how
  charts can take [ratoms](http://reagent-project.github.io/docs/master/reagent.ratom.html) as input and re-render as the data changes.

  > In _this_ case, we are using a ratom for the data.
  >
  > You can use the buttons below to change some of the data and see how the chart responds."
   :example-data example-data
   :random-data-fn data/random-meta-tabular-data
   :source-code area-chart/source-code
   :chart area-chart/component])


(defn data-structure-example []
  [data-structure/example
   :container-id :area-chart-data-structure-demo
   :title "Area Chart (#2) (Live Data - structure)"
   :description "An Area Chart built using [Recharts](https://recharts.org/en-US/api/AreaChart). This example shows how
  charts can take [ratoms](http://reagent-project.github.io/docs/master/reagent.ratom.html) as input and re-render as the data changes.

  > In _this_ case, we are using a plain data structure for the data, so there is no way to update it (it lives
  > only inside the chart, with no way to get at it from outside)."
   :example-data example-data
   :random-data-fn data/random-meta-tabular-data
   :source-code bh/area-chart-source-code
   :chart area-chart/component])


(defn data-subscription-example []
  (let [container-id :area-chart-data-sub-demo]
    [data-subscription/example
     :container-id container-id
     :title "Area Chart (#2) (Live Data - subscription)"
     :description "An Area Chart built using [Recharts](https://recharts.org/en-US/api/AreaChart). This example shows how
     charts can take [subscriptions](https://day8.github.io/re-frame/subscriptions/) as input and re-render as the configuration changes.

> In _this_ case, we are using a subscription to handle the data for the chart.
"
     :example-data [container-id :blackboard :topic.sample-data]
     :reset-data example-data
     :random-data-fn data/random-meta-tabular-data
     :source-code bh/area-chart-source-code
     :chart area-chart/component]))


(defn examples []
  [me/examples {"data-ratom"    [data-ratom-example]
                "data-struct"   [data-structure-example]
                "data-sub"      [data-subscription-example]
                "config-ratom"  [config-ratom-example]
                "config-struct" [config-struct-example]
                "config-sub"    [config-sub-example]}])


(comment
  @example-data

  (data/random-entity-data ["Page A" "Page B" "Page C"])

  (data/random-meta-tabular-data)


  ())



(comment
  (def next-color (atom -1))
  (example-data next-color)



  ())




