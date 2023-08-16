(ns demo.catalog.atom.example.chart.colored-pie-chart
  (:require [bh-ui.core :as bh]
            [demo.catalog.atom.example.chart.alt.config-ratom-example :as config-ratom-example]
            [demo.catalog.atom.example.chart.alt.config-structure-example :as config-structure-example]
            [demo.catalog.atom.example.chart.alt.config-sub-example :as config-sub-example]
            [demo.catalog.atom.example.chart.alt.data-ratom-example :as data-ratom-example]
            [demo.catalog.atom.example.chart.alt.data-structure-example :as data-structure-example]
            [demo.catalog.atom.example.chart.alt.data-sub-example :as data-sub-example]
            [demo.catalog.atom.example.chart.alt.data-tools :as data-tools]
            [demo.catalog.atom.example.chart.alt.config-tools :as config-tools]
            [demo.catalog.atom.example.multi-example :as me]))


(defn- data-ratom []
  [data-ratom-example/example
   :container-id :colored-pie-chart-data-ratom-demo
   :title "Colored Pie Chart (Live Data - ratom)"
   :description "A Pie Chart built using [Recharts](https://recharts.org/en-US/api/PieChart) with colored Cells. This example shows how
  charts can take [ratoms](http://reagent-project.github.io/docs/master/reagent.ratom.html) as input and re-render as the data changes.

  > In _this_ case, we are using a ratom for the data.
  >
  > You can use the buttons below to change some of the data and see how the chart responds."
   :sample-data bh/colored-pie-chart-sample-data
   :random-data bh/colored-pie-chart-random-data
   :source-code bh/colored-pie-chart-source-code
   :data-tools data-tools/meta-tabular-data-ratom-tools
   :component bh/colored-pie-chart-component
   :data-panel bh/chart-utils-meta-tabular-data-panel
   :config-panel bh/colored-pie-chart-config-panel])


(defn- data-structure []
  [data-structure-example/example
   :container-id :colored-pie-chart-data-structure-demo
   :title "Colored Pie Chart (Live Data - structure)"
   :description "A Pie Chart built using [Recharts](https://recharts.org/en-US/api/PieChart) with colored Cells. This example shows how
  charts can take [ratoms](http://reagent-project.github.io/docs/master/reagent.ratom.html) as input and re-render as the data changes.

  > In _this_ case, we are using a plain data structure for the data, so there is no way to update it (it lives
  > only inside the chart, with no way to get at it from outside)."
   :sample-data bh/colored-pie-chart-sample-data
   :random-data bh/colored-pie-chart-random-data
   :source-code bh/colored-pie-chart-source-code
   :component bh/colored-pie-chart-component
   :data-panel bh/chart-utils-meta-tabular-data-panel
   :config-panel bh/colored-pie-chart-config-panel])


(defn data-sub []
  (let [container-id :colored-pie-chart-data-sub-demo]
    [data-sub-example/example
     :container-id container-id
     :title "Colored Pie Chart (Live Data - subscription)"
     :description "A Pie Chart built using [Recharts](https://recharts.org/en-US/api/PieChart) with colored Cells. This example shows how
     charts can take [subscriptions](https://day8.github.io/re-frame/subscriptions/) as input and re-render as the configuration changes.

> In _this_ case, we are using a subscription to handle the data for the chart.
"
     :sample-data [container-id :blackboard :topic.sample-data]
     :default-data bh/colored-pie-chart-sample-data
     :random-data bh/colored-pie-chart-random-data
     :data-tools data-tools/meta-tabular-data-sub-tools
     :source-code bh/colored-pie-chart-source-code
     :component bh/colored-pie-chart-component
     :data-panel bh/chart-utils-meta-tabular-data-panel
     :config-panel bh/colored-pie-chart-config-panel]))


(defn- config-ratom []
  [config-ratom-example/example
   :container-id :colored-pie-chart-config-ratom-demo
   :title "Colored Pie Chart (Live Configuration - ratom)"
   :description "A Pie Chart built using [Recharts](https://recharts.org/en-US/api/PieChart) with colored Cells. This example shows how
     charts can take [ratoms](http://reagent-project.github.io/docs/master/reagent.ratom.html) as input and re-render as the configuration changes.

> In _this_ case, we are using a ratom to hold the configuration for the chart.
>
> You can use the buttons in the bottom-most panel to change some of the chart configuration options and see
> how that affects the data (shown in the gray panel) and how the chart responds."
   :sample-data bh/colored-pie-chart-sample-data
   :config-tools config-tools/meta-tabular-config-row-ratom-tools
   :source-code bh/colored-pie-chart-source-code
   :component bh/colored-pie-chart-component
   :default-config-data bh/colored-pie-chart-sample-config-data])


(defn- config-structure []
  [config-structure-example/example
   :container-id :colored-pie-chart-config-structure-demo
   :title "Colored Pie Chart (Live Configuration - structure)"
   :description "A Pie Chart built using [Recharts](https://recharts.org/en-US/api/PieChart) with colored Cells. This example shows how
     charts can take [ratoms](http://reagent-project.github.io/docs/master/reagent.ratom.html) as input and re-render as the configuration changes.

> In _this_ case, we are using a plain data structure to hold the configuration for the chart.
>
> You can see the configuration data in the gray panel and how it how that affects the chart."
   :sample-data bh/colored-pie-chart-sample-data
   :source-code bh/colored-pie-chart-source-code
   :component bh/colored-pie-chart-component
   :default-config-data bh/colored-pie-chart-sample-config-data])


(defn- config-sub []
  (let [container-id :colored-pie-chart-config-sub-demo]
    [config-sub-example/example
     :container-id container-id
     :title "Colored Pie Chart (Live Configuration - subscription)"
     :description "A Pie Chart built using [Recharts](https://recharts.org/en-US/api/PieChart) with colored Cells. This example shows how
     charts can take [subscriptions](https://day8.github.io/re-frame/subscriptions/) as input and re-render as the configuration changes.

> In _this_ case, we are using a subscription to handle the configuration for the chart."
     :sample-data bh/colored-pie-chart-sample-data
     :config-tools config-tools/meta-tabular-config-row-sub-tools
     :source-code bh/colored-pie-chart-source-code
     :component bh/colored-pie-chart-component
     :config-data [container-id :blackboard :config-data]
     :default-config-data bh/colored-pie-chart-sample-config-data]))


(defn examples []
  [me/examples {"data-ratom" [data-ratom]
                "data-struct"  [data-structure]
                "data-sub"  [data-sub]
                "config-ratom"  [config-ratom]
                "config-struct"  [config-structure]
                "config-sub"  [config-sub]}])

