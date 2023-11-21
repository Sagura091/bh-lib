(ns demo.catalog.atom.example.chart.examples.both-ratom
  (:require [bh-ui.core :as bh]
            [demo.catalog.atom.example.chart.examples.user-tool :as tools]
            [re-com.core :as rc]
            [reagent.core :as r]
            [woolybear.ad.catalog.utils :as acu]
            [taoensso.timbre :as log]))


(defn example [& {:keys [container-id title description
                         chart source-code
                         example-data random-data-fn
                         example-config next-color]}]

  (log/info "both-ratom example (a)" example-config)

  (let [component-id (bh/utils-path->keyword container-id "chart")
        data         (r/atom example-data)
        reset-config example-config
        config       (r/atom reset-config)]

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
                            :config config
                            :component-id component-id
                            :container-id container-id]]
                          [tools/data-tools data config
                           example-data random-data-fn next-color]
                          [tools/config-tools example-data
                           config reset-config]]]]
      source-code)))
