(ns demo.catalog.atom.example.chart.examples.both-subscription
  (:require [bh-ui.core :as bh]
            [demo.catalog.atom.example.chart.examples.user-tool :as tools]
            [re-com.core :as rc]
            [woolybear.ad.catalog.utils :as acu]
            [taoensso.timbre :as log]))


(defn example [& {:keys [container-id title description
                         chart source-code
                         example-data reset-data random-data-fn
                         example-config reset-config]}]

  (log/info "both-subscription example (a)"
    example-data "_____" reset-data
    "_____"
    example-config "_____" reset-config)

  (let [next-color   (atom -1)
        component-id (bh/utils-path->keyword container-id)
        data         example-data
        config       example-config
        id           (atom nil)]

    (fn []
      (when (nil? @id)
        (reset! id component-id)
        (bh/utils-init-container-locals @id {:blackboard {:topic.sample-data reset-data
                                                          :config            reset-config}
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
                              :config config
                              :component-id component-id
                              :container-id container-id]]
                            [tools/data-tools data config
                             reset-data random-data-fn next-color]
                            [tools/config-tools data
                             config reset-config]]]]
        source-code))))
