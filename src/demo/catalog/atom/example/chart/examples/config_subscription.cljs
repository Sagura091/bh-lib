(ns demo.catalog.atom.example.chart.examples.config-subscription
  (:require [bh-ui.core :as bh]
            [demo.catalog.atom.example.chart.examples.user-tool :as tools]
            [re-com.core :as rc]
            [woolybear.ad.catalog.utils :as acu]
            [taoensso.timbre :as log]))


(defn example [& {:keys [container-id title description
                         chart source-code
                         example-data example-config reset-config]}]

  (log/info "config-sub example (a)")

  (let [component-id (bh/utils-path->keyword container-id)
        id           (atom nil)]

    (log/info "config-sub example (b)" container-id component-id
      "_____" example-config
      "_____" reset-config)

    (fn []
      (when (nil? @id)
        (reset! id component-id)
        (bh/utils-init-container-locals @id {:blackboard {:config reset-config}
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
                              :data example-data
                              :config example-config
                              :component-id component-id
                              :container-id container-id]]
                            [tools/config-tools example-data
                             example-config reset-config]]]]
        source-code))))
