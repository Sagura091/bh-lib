(ns demo.catalog.atom.example.chart.examples.data-structure
  (:require [bh-ui.core :as bh]
            [demo.catalog.atom.example.chart.examples.user-tool :as tools]
            [re-com.core :as rc]
            [woolybear.ad.catalog.utils :as acu]))


(defn example [& {:keys [container-id title description
                         chart source-code
                         example-data]}]
  (let [component-id (bh/utils-path->keyword container-id "chart")
        data         example-data]

    (acu/demo title
      description
      [rc/box :src (rc/at)
       :justify :center
       :width "100%"
       :height "100%"
       :child [rc/v-box :src (rc/at)
               :gap "3px"
               :width "100%"
               :height "100%"
               :children [[tools/chart-container
                           [chart
                            :data data
                            :component-id component-id
                            :container-id container-id]]]]]
      source-code)))
