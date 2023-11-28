(ns demo.catalog.atom.example.chart.area-chart-2
  (:require [bh-ui.core :as bh]
            [bh-ui.atom.chart.area-chart-2 :as area-chart]
            [bh-ui.utils.color :as color]
            [bh-ui.utils.example-data :as data]
            [demo.catalog.atom.example.chart.examples.both-ratom :as both-ratom]
            [demo.catalog.atom.example.chart.examples.both-subscription :as both-subscription]
            [demo.catalog.atom.example.chart.examples.config-ratom :as config-ratom]
            [demo.catalog.atom.example.chart.examples.config-structure :as config-structure]
            [demo.catalog.atom.example.chart.examples.config-subscription :as config-subscription]
            [demo.catalog.atom.example.chart.examples.data-ratom :as data-ratom]
            [demo.catalog.atom.example.chart.examples.data-structure :as data-structure]
            [demo.catalog.atom.example.chart.examples.data-subscription :as data-subscription]
            [demo.catalog.atom.example.multi-example :as me]
            [taoensso.timbre :as log]))


(log/info "demo.catalog.atom.example.chart.area-chart-2")


(defn example-config [next-color]
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


(defn both-ratom-example []
  (let [next-color (atom -1)]
    [both-ratom/example
     :container-id :area-chart-both-ratom-demo
     :title "Area Chart (Live Data AND Configuration - ratom)"
     :description "An Area Chart built using [Recharts](https://recharts.org/en-US/api/AreaChart). This example shows how
     charts can take [ratoms](http://reagent-project.github.io/docs/master/reagent.ratom.html) as input and re-render as the configuration changes.

> In _this_ case, we are using a ratom to hold both the data ***and*** the configuration for the chart.
>
> You can use the buttons in the bottom-most panel to change some of the chart configuration options and see
> how that affects the configuration (shown in the gray panel) and how the chart responds."
     :example-data example-data
     :reset-data example-data
     :random-data-fn data/random-meta-tabular-data
     :example-config (example-config next-color)
     :source-code bh/area-chart-source-code
     :chart area-chart/component
     :next-color next-color]))


(defn both-subscription-example []
  (log/info "both-subscription-example (a)")

  (let [container-id :area-chart-both-subscription-demo
        next-color   (atom -1)]
    (log/info "both-subscription-example (b)")

    [both-subscription/example
     :container-id container-id
     :title "Area Chart (Live Data AND Configuration - subscription)"
     :description "An Area Chart built using [Recharts](https://recharts.org/en-US/api/AreaChart). This example shows how
     charts can take [subscriptions](https://day8.github.io/re-frame/subscriptions/) as input and re-render as the data
     and/or the configuration changes.

> In _this_ case, we are using a subscription to handle both the data _and_ configuration for the chart.
"
     :example-data [container-id :blackboard :topic.sample-data]
     :reset-data example-data
     :random-data-fn data/random-meta-tabular-data
     :example-config [container-id :blackboard :config]
     :reset-config (example-config next-color)
     :source-code bh/area-chart-source-code
     :chart area-chart/component]))


(defn config-ratom-example []
  [config-ratom/example
   :container-id :area-chart-config-ratom-demo
   :title "Area Chart (Live Configuration - ratom)"
   :description "An Area Chart built using [Recharts](https://recharts.org/en-US/api/AreaChart). This example shows how
     charts can take [ratoms](http://reagent-project.github.io/docs/master/reagent.ratom.html) as input and re-render as the configuration changes.

> In _this_ case, we are using a ratom to hold the configuration for the chart.
>
> You can use the buttons in the bottom-most panel to change some of the chart configuration options and see
> how that affects the data (shown in the gray panel) and how the chart responds."
   :example-data example-data
   :example-config example-config
   :source-code bh/area-chart-source-code
   :chart area-chart/component])


(defn config-struct-example []
  (let [next-color (atom -1)]
    [config-structure/example
     :container-id :area-chart-config-structure-demo
     :title "Area Chart (Live Configuration - structure)"
     :description "An Area Chart built using [Recharts](https://recharts.org/en-US/api/AreaChart). This example shows how
     charts can take [ratoms](http://reagent-project.github.io/docs/master/reagent.ratom.html) as input and re-render as the configuration changes.

> In _this_ case, we are using a plain data structure to hold the configuration for the chart.
>
> You can see the configuration data in the gray panel and how it how that affects the chart."
     :example-data example-data
     :example-config (example-config next-color)
     :source-code bh/area-chart-source-code
     :chart area-chart/component]))


(defn config-subscription-example []
  (let [container-id :area-chart-config-subscription-demo
        next-color   (atom -1)]
    [config-subscription/example
     :container-id container-id
     :title "Area Chart (Live Configuration - structure)"
     :description "An Area Chart built using [Recharts](https://recharts.org/en-US/api/AreaChart). This example shows how
     charts can take [ratoms](http://reagent-project.github.io/docs/master/reagent.ratom.html) as input and re-render as the configuration changes.

> In _this_ case, we are using a plain data structure to hold the configuration for the chart.
>
> You can see the configuration data in the gray panel and how it how that affects the chart."
     :example-data example-data
     :example-config [container-id :blackboard :config]
     :reset-config (example-config next-color)
     :source-code bh/area-chart-source-code
     :chart area-chart/component]))


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
  (let [container-id :area-chart-data-subscription-demo]
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
                "config-sub"    [config-subscription-example]
                "both-ratom"    [both-ratom-example]
                "both-sub"      [both-subscription-example]}])







(comment
  @example-data

  (data/random-entity-data ["Page A" "Page B" "Page C"])

  (data/random-meta-tabular-data)


  ())



(comment
  (def next-color (atom -1))
  (example-data next-color)



  ())




