(ns demo.catalog.atom.example.chart.alt.config-ratom-example
  (:require [bh-ui.core :as bh]
            [demo.catalog.atom.utils :as example]
            [demo.catalog.atom.example.chart.alt.show-data :as sd]
            [re-com.core :as rc]
            [reagent.core :as r]
            [taoensso.timbre :as log]))


(log/info "demo.catalog.atom.example.chart.alt.config-ratom-example")


(defn- config-update-example [component default-config-data
                              & {:keys [config-data config-tools] :as params}]
  ;(log/info "config-update-example (params)" params)

  [rc/v-box :src (rc/at)
   :gap "10px"
   :width "100%"
   :height "100%"
   :children [[:div.chart-part.h-w-100pc
               (reduce into [component] (seq params))]

              [rc/v-box
               :gap "5px"
               :style {:width "100%" :height "30%"}
               :children [[sd/show-data config-data]
                          [config-tools config-data default-config-data]]]]])


(defn example [& {:keys [container-id
                         sample-data default-config-data
                         config-tools
                         source-code
                         component] :as params}]

  ;(log/info "example" params)

  (let [component-id (bh/utils-path->keyword container-id "chart")
        data (r/atom sample-data)
        input-params (assoc params :component-id component-id
                                   :data data
                                   :component (partial config-update-example component default-config-data)
                                   :config-data (r/atom default-config-data))]

    (reduce into [example/component-example] (seq input-params))))


