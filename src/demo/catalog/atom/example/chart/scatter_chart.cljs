(ns demo.catalog.atom.example.chart.scatter-chart
  (:require [bh-ui.core :as bh]
            [demo.catalog.atom.example.chart.alt.data-tools :as data-tools]
            [demo.catalog.atom.example.chart.alt.config-tools :as config-tools]
            [demo.catalog.atom.example.chart.alt.data-ratom-example :as data-ratom-example]
            [demo.catalog.atom.example.chart.alt.data-structure-example :as data-structure-example]
            [demo.catalog.atom.example.chart.alt.data-sub-example :as data-sub-example]
            [demo.catalog.atom.example.chart.alt.config-ratom-example :as config-ratom-example]
            [demo.catalog.atom.example.chart.alt.config-structure-example :as config-structure-example]
            [demo.catalog.atom.example.chart.alt.config-sub-example :as config-sub-example]
            [taoensso.timbre :as log]
            [re-com.core :as rc]
            [reagent.core :as r]
            [demo.catalog.atom.example.multi-example :as me]))


(log/info "demo.catalog.atom.example.chart.scatter-chart")


(defn- column-picker-ratom [config-data label path]
  ;(log/info "column-picker-ratom" @config-data  "//" path)
  (fn []
    (let [headings (into #{} (get-in @config-data [:value :keys]))
          buttons  (mapv (fn [h] {:id h :label h}) headings)]
      ;(log/info "column-picker" headings)
      [rc/h-box :src (rc/at)
       :gap "5px"
       :children [[rc/box :src (rc/at) :align :start :child [:code label]]
                  [rc/horizontal-bar-tabs
                   :src (rc/at)
                   :model (get-in @config-data path)
                   :tabs buttons
                   :style bh/chart-utils-btns-style
                   :on-change #(swap! config-data assoc-in path %)]]])))


(defn- column-picker-sub [config-data label path]
  ;(log/info "column-picker-sub" config-data  "//" path)
  (let [cd (bh/utils-resolve-value config-data)]
    (fn []
      (let [headings (into #{} (get-in @cd [:value :keys]))
            buttons  (mapv (fn [h] {:id h :label h}) headings)]
        [rc/h-box :src (rc/at)
         :gap "5px"
         :children [[rc/box :src (rc/at) :align :start :child [:code label]]
                    [rc/horizontal-bar-tabs
                     :src (rc/at)
                     :model (get-in @cd path)
                     :tabs buttons
                     :style bh/chart-utils-btns-style
                     :on-change #(bh/utils-handle-change-path config-data [[assoc-in path %]])]]]))))


(defn- meta-tabular-config-row-ratom-tools [config-data default-config-data data component-id]
  ;(log/info "meta-tabular" component-id)
  [rc/h-box :src (rc/at)
   :gap "10px"
   :style {:border     "1px solid" :border-radius "3px"
           :box-shadow "5px 5px 5px 2px"
           :margin     "5px" :padding "5px"}
   :children [[:label.h5 "Config:"]
              [rc/button :on-click #(reset! config-data default-config-data) :label "Default"]
              [rc/button :on-click #(swap! config-data update-in [:Page-A :include] not) :label "! Page A"]
              [rc/button :on-click #(swap! config-data update-in [:Page-C :include] not) :label "! Page C"]
              [bh/chart-utils-color-config config-data ":Page-D :color" [:Page-D :color] :above-center]
              [column-picker-ratom config-data ":x" [:values :x]]
              [column-picker-ratom config-data ":y" [:values :y]]
              [column-picker-ratom config-data ":z" [:values :z]]]])


(defn- meta-tabular-config-row-sub-tools [config-data default-config-data data component-id]
  (let [page-a (bh/utils-subscribe-local config-data [:Page-A :include])
        page-c (bh/utils-subscribe-local config-data [:Page-C :include])]

    (fn []
      [rc/h-box :src (rc/at)
       :gap "10px"
       :style {:border     "1px solid" :border-radius "3px"
               :box-shadow "5px 5px 5px 2px"
               :margin     "5px" :padding "5px"}
       :children [[:label.h5 "Config:"]
                  [rc/button :on-click #(bh/utils-handle-change-path config-data [[bh/utils-set-local-values [] default-config-data]]) :label "Default"]
                  [rc/button :on-click #(bh/utils-handle-change-path config-data [[update-in [:Page-A :include] not]]) :label "! Page A"]
                  [rc/button :on-click #(bh/utils-handle-change-path config-data [[update-in [:Page-C :include] not]]) :label "! Page C"]
                  [bh/chart-utils-color-config config-data ":Page-D :color" [:Page-D :color] :above-center]
                  [column-picker-sub config-data ":x" [:values :x]]
                  [column-picker-sub config-data ":y" [:values :y]]
                  [column-picker-sub config-data ":z" [:values :z]]]])))


(defn- data-ratom []
  [data-ratom-example/example
   :container-id :scatter-chart-data-ratom-demo
   :title "Scatter Chart (Live Data - ratom) - IN PROGRESS (not complete)"
   :description "A Scatter Chart built using [Recharts](https://recharts.org/en-US/api/ScatterChart). This example shows how
  charts can take [ratoms](http://reagent-project.github.io/docs/master/reagent.ratom.html) as input and re-render as the data changes.

  > In _this_ case, we are using a ratom for the data.
  >
  > You can use the buttons below to change some of the data and see how the chart responds."
   :sample-data bh/scatter-chart-sample-data
   :random-data bh/scatter-chart-random-data
   :source-code bh/scatter-chart-source-code
   :data-tools data-tools/meta-tabular-data-ratom-tools
   :source-code bh/scatter-chart-source-code
   :component bh/scatter-chart-component
   :data-panel bh/chart-utils-meta-tabular-data-panel
   :config-panel bh/scatter-chart-config-panel])


(defn- data-structure []
  [data-structure-example/example
   :container-id :scatter-chart-data-structure-demo
   :title "Scatter Chart (Live Data - structure) - IN PROGRESS (not complete)"
   :description "A Scatter Chart built using [Recharts](https://recharts.org/en-US/api/ScatterChart) with colored Cells. This example shows how
  charts can take [ratoms](http://reagent-project.github.io/docs/master/reagent.ratom.html) as input and re-render as the data changes.

  > In _this_ case, we are using a plain data structure for the data, so there is no way to update it (it lives
  > only inside the chart, with no way to get at it from outside)."
   :sample-data bh/scatter-chart-sample-data
   :random-data bh/scatter-chart-random-data
   :source-code bh/scatter-chart-source-code
   :component bh/scatter-chart-component
   :data-panel bh/chart-utils-meta-tabular-data-panel
   :config-panel bh/scatter-chart-config-panel])


(defn data-sub []
  (let [container-id :scatter-chart-data-sub-demo]
    [data-sub-example/example
     :container-id container-id
     :title "Scatter Chart (Live Data - subscription) - IN PROGRESS (not complete)"
     :description "A Scatter Chart built using [Recharts](https://recharts.org/en-US/api/ScatterChart) with colored Cells. This example shows how
     charts can take [subscriptions](https://day8.github.io/re-frame/subscriptions/) as input and re-render as the configuration changes.

> In _this_ case, we are using a subscription to handle the data for the chart.
"
     :sample-data [container-id :blackboard :topic.sample-data]
     :default-data bh/scatter-chart-sample-data
     :random-data bh/scatter-chart-random-data
     :data-tools data-tools/meta-tabular-data-sub-tools
     :source-code bh/scatter-chart-source-code
     :component bh/scatter-chart-component
     :data-panel bh/chart-utils-meta-tabular-data-panel
     :config-panel bh/scatter-chart-config-panel]))


(defn- config-ratom []
  [config-ratom-example/example
   :container-id :scatter-chart-config-ratom-demo
   :title "Scatter Chart (Live Configuration - ratom) - IN PROGRESS (not complete)"
   :description "A Scatter Chart built using [Recharts](https://recharts.org/en-US/api/ScatterChart) with colored Cells. This example shows how
     charts can take [ratoms](http://reagent-project.github.io/docs/master/reagent.ratom.html) as input and re-render as the configuration changes.

> In _this_ case, we are using a ratom to hold the configuration for the chart.
>
> You can use the buttons in the bottom-most panel to change some of the chart configuration options and see
> how that affects the data (shown in the gray panel) and how the chart responds."
   :sample-data bh/scatter-chart-sample-data
   :config-tools meta-tabular-config-row-ratom-tools
   :source-code bh/scatter-chart-source-code
   :component bh/scatter-chart-component
   :default-config-data bh/scatter-chart-sample-config-data])


(defn- config-structure []
  [config-structure-example/example
   :container-id :scatter-chart-config-structure-demo
   :title "Scatter Chart (Live Configuration - structure) - IN PROGRESS (not complete)"
   :description "A Scatter Chart built using [Recharts](https://recharts.org/en-US/api/ScatterChart) with colored Cells. This example shows how
     charts can take [ratoms](http://reagent-project.github.io/docs/master/reagent.ratom.html) as input and re-render as the configuration changes.

> In _this_ case, we are using a plain data structure to hold the configuration for the chart.
>
> You can see the configuration data in the gray panel and how it how that affects the chart."
   :sample-data bh/scatter-chart-sample-data
   :source-code bh/scatter-chart-source-code
   :component bh/scatter-chart-component
   :default-config-data bh/scatter-chart-sample-config-data])


(defn- config-sub []
  (let [container-id :scatter-chart-config-sub-demo]
    [config-sub-example/example
     :container-id container-id
     :title "Scatter Chart (Live Configuration - subscription) - IN PROGRESS (not complete)"
     :description "A Scatter Chart built using [Recharts](https://recharts.org/en-US/api/ScatterChart) with colored Cells. This example shows how
     charts can take [subscriptions](https://day8.github.io/re-frame/subscriptions/) as input and re-render as the configuration changes.

> In _this_ case, we are using a subscription to handle the configuration for the chart."
     :sample-data bh/scatter-chart-sample-data
     :config-tools meta-tabular-config-row-sub-tools ; TODO: this tool panel does not have tools for the axes
     :source-code bh/scatter-chart-source-code
     :component bh/scatter-chart-component
     :config-data [container-id :blackboard :config-data]
     :default-config-data bh/scatter-chart-sample-config-data]))


(defn examples []
  [me/examples {"data-ratom" [data-ratom]
                "data-struct"  [data-structure]
                "data-sub"  [data-sub]
                "config-ratom"  [config-ratom]
                "config-struct"  [config-structure]
                "config-sub"  [config-sub]}])

