(ns demo.catalog.atom.example.chart.examples.data-ratom
  (:require [demo.catalog.atom.example.chart.examples.user-tool :as tools]
            [re-com.core :as rc]
            [reagent.core :as r]
            [woolybear.ad.catalog.utils :as acu]))


(defn example [& {:keys [container-id title description
                         chart source-code
                         example-data random-data-fn]}]

  (let [next-color   (atom -1)
        component-id ()
        data         (r/atom example-data)]

    (acu/demo
      title
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
                            :container-id container-id]]
                          [tools/data-tools data
                           (tools/example-config next-color)
                           example-data
                           random-data-fn
                           next-color]]]]
      source-code)))

