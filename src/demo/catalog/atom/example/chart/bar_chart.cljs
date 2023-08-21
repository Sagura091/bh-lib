(ns demo.catalog.atom.example.chart.bar-chart
  (:require [bh-ui.core :as bh]
            [demo.catalog.atom.example.chart.alt.data-ratom-example :as data-ratom-example]
            [demo.catalog.atom.example.chart.alt.data-structure-example :as data-structure-example]
            [demo.catalog.atom.example.chart.alt.data-sub-example :as data-sub-example]
            [demo.catalog.atom.example.chart.alt.config-ratom-example :as config-ratom-example]
            [demo.catalog.atom.example.chart.alt.config-structure-example :as config-structure-example]
            [demo.catalog.atom.example.chart.alt.config-sub-example :as config-sub-example]
            [demo.catalog.atom.example.chart.alt.data-tools :as data-tools]
            [demo.catalog.atom.example.chart.alt.config-tools :as config-tools]
            [demo.catalog.atom.example.multi-example :as me]))


(defn- data-ratom []
  [data-ratom-example/example
   :container-id :bar-chart-data-ratom-demo
   :title "Bar Chart (Live Data - ratom)"
   :description "A Bar Chart built using [Recharts](https://recharts.org/en-US/api/BarChart). This example shows how
  charts can take [ratoms](http://reagent-project.github.io/docs/master/reagent.ratom.html) as input and re-render as the data changes.

  > In _this_ case, we are using a ratom for the data.
  >
  > You can use the buttons below to change some of the data and see how the chart responds."
   :sample-data bh/bar-chart-sample-data
   :random-data bh/bar-chart-random-data
   :data-tools data-tools/meta-tabular-data-ratom-tools
   :source-code bh/bar-chart-source-code
   :component bh/bar-chart-component
   :data-panel bh/chart-utils-meta-tabular-data-panel
   :config-panel bh/bar-chart-config-panel])


(defn- data-structure []
  [data-structure-example/example
   :container-id :bar-chart-data-structure-demo
   :title "Bar Chart (Live Data - structure)"
   :description "A Bar Chart built using [Recharts](https://recharts.org/en-US/api/BarChart). This example shows how
  charts can take [ratoms](http://reagent-project.github.io/docs/master/reagent.ratom.html) as input and re-render as the data changes.

  > In _this_ case, we are using a plain data structure for the data, so there is no way to update it (it lives
  > only inside the chart, with no way to get at it from outside)."
   :sample-data bh/bar-chart-sample-data
   :random-data bh/bar-chart-random-data
   :source-code bh/bar-chart-source-code
   :component bh/bar-chart-component
   :data-panel bh/chart-utils-meta-tabular-data-panel
   :config-panel bh/bar-chart-config-panel])


(defn data-sub []
  [data-sub-example/example
   :container-id :bar-chart-data-sub-demo
   :title "Bar Chart (Live Data - subscription)"
   :description "A Bar Chart built using [Recharts](https://recharts.org/en-US/api/BarChart). This example shows how
     charts can take [subscriptions](https://day8.github.io/re-frame/subscriptions/) as input and re-render as the configuration changes.

> In _this_ case, we are using a subscription to handle the data for the chart.
"
   :sample-data [:bar-chart-data-sub-demo :blackboard :topic.sample-data]
   :default-data bh/bar-chart-sample-data
   :random-data bh/bar-chart-random-data
   :data-tools data-tools/meta-tabular-data-sub-tools
   :source-code bh/bar-chart-source-code
   :component bh/bar-chart-component
   :data-panel bh/chart-utils-meta-tabular-data-panel
   :config-panel bh/bar-chart-config-panel])


(defn- config-ratom []
  [config-ratom-example/example
   :container-id :bar-chart-config-ratom-demo
   :title "Bar Chart (Live Configuration - ratom)"
   :description "A Bar Chart built using [Recharts](https://recharts.org/en-US/api/BarChart). This example shows how
     charts can take [ratoms](http://reagent-project.github.io/docs/master/reagent.ratom.html) as input and re-render as the configuration changes.

> In _this_ case, we are using a ratom to hold the configuration for the chart.
>
> You can use the buttons in the bottom-most panel to change some of the chart configuration options and see
> how that affects the data (shown in the gray panel) and how the chart responds."
   :sample-data bh/bar-chart-sample-data
   :source-code bh/bar-chart-source-code
   :config-tools config-tools/meta-tabular-config-column-ratom-tools
   :component bh/bar-chart-component
   :default-config-data bh/bar-chart-sample-config-data])


(defn- config-structure []
  [config-structure-example/example
   :container-id :bar-chart-config-structure-demo
   :title "Bar Chart (Live Configuration - structure)"
   :description "A Bar Chart built using [Recharts](https://recharts.org/en-US/api/BarChart). This example shows how
     charts can take [ratoms](http://reagent-project.github.io/docs/master/reagent.ratom.html) as input and re-render as the configuration changes.

> In _this_ case, we are using a plain data structure to hold the configuration for the chart.
>
> You can see the configuration data in the gray panel and how it how that affects the chart."
   :sample-data bh/bar-chart-sample-data
   :source-code bh/bar-chart-source-code
   :component bh/bar-chart-component
   :default-config-data bh/bar-chart-sample-config-data])


(defn- config-sub []
  (let [container-id :bar-chart-config-sub-demo]
    [config-sub-example/example
     :container-id container-id
     :title "Bar Chart (Live Configuration - subscription)"
     :description "A Bar Chart built using [Recharts](https://recharts.org/en-US/api/BarChart). This example shows how
     charts can take [subscriptions](https://day8.github.io/re-frame/subscriptions/) as input and re-render as the configuration changes.

> In _this_ case, we are using a subscription to handle the configuration for the chart."
     :sample-data bh/bar-chart-sample-data
     :source-code bh/bar-chart-source-code
     :config-tools config-tools/meta-tabular-config-column-sub-tools
     :component bh/bar-chart-component
     :config-data [container-id :blackboard :config-data]
     :default-config-data bh/bar-chart-sample-config-data]))


(defn examples []
  [me/examples {"data-ratom" [data-ratom]
                "data-struct"  [data-structure]
                "data-sub"  [data-sub]
                "config-ratom"  [config-ratom]
                "config-struct"  [config-structure]
                "config-sub"  [config-sub]}])


