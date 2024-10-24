(ns demo.catalog.atom.example.chart.alt.config-structure-example
  (:require [demo.catalog.atom.utils :as example]
            [bh-ui.core :as bh]
            [demo.catalog.atom.example.chart.alt.show-data :as sd]
            [re-com.core :as rc]
            [taoensso.timbre :as log]))


(log/info "demo.catalog.atom.example.chart.bar-chart.config-structure-example")


(defn- config-example [component
                       & {:keys [config-data] :as params}]
  ;(log/info "config-example (params)" params)

  [rc/v-box :src (rc/at)
   :class "config-example"
   :gap "10px"
   :width "100%"
   :height "100%"
   :children [[:div.chart-part.h-w-100pc
               (reduce into [component] (seq params))]

              [sd/show-config config-data]]])


(defn example [& {:keys [container-id
                         sample-data default-config-data
                         component] :as params}]
  ;(log/info "example" params)

  (let [component-id (bh/utils-path->keyword container-id "chart")
        input-params (assoc params :component-id component-id
                                   :data sample-data
                                   :component (partial config-example component)
                                   :config-data default-config-data)]

    (reduce into [example/component-example] (seq input-params))))


