(ns demo.catalog.atom.example.chart.examples.data-subscription
  (:require [bh-ui.core :as bh]
            [bh-ui.atom.chart.area-chart-2 :as area-chart]
            [bh-ui.utils.color :as color]
            [bh-ui.utils.example-data :as data]
            [demo.catalog.atom.example.chart.examples.user-tool :as tools]
            [reagent.core :as r]
            [re-com.core :as rc]
            [woolybear.ad.catalog.utils :as acu]
            [taoensso.timbre :as log]))



(defn example [& {:keys [container-id title description
                         chart source-code
                         example-data reset-data random-data-fn]}]
  (let [next-color   (atom -1)
        component-id (bh/utils-path->keyword container-id)
        data         example-data
        id           (atom nil)]

    (fn []
      (when (nil? @id)
        (reset! id component-id)
        (bh/utils-init-container-locals @id {:blackboard {:topic.sample-data reset-data}
                                             :container  ""})
        (bh/utils-dispatch-local @id [:container] component-id))

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
                              :container-id container-id]]
                            [tools/data-tools data (tools/example-config next-color)
                             reset-data
                             random-data-fn
                             next-color]]]]
        source-code))))
