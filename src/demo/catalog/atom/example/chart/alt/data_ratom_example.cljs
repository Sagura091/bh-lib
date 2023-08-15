(ns demo.catalog.atom.example.chart.alt.data-ratom-example
  (:require [demo.catalog.atom.utils :as example]
            [bh-ui.core :as bh]
            [demo.catalog.atom.example.chart.alt.show-data :as sd]
            [re-com.core :as rc]
            [reagent.core :as r]
            [taoensso.timbre :as log]))


(log/info "demo.catalog.atom.example.chart.alt.data-ratom-example")


(defn- data-update-example [component default-data random-data
                            & {:keys [data data-tools] :as params}]

  ;(log/info "data-update-example (params)" params)
  ;(log/info "data-update-example" default-data)

  [rc/v-box :src (rc/at)
   :class "data-update-example"
   :gap "10px"
   :width "100%"
   :height "100%"
   :children [[:div.chart-part.h-w-100pc
               (reduce into [component] params)]
              [rc/v-box
               :gap "5px"
               :style {:width "100%" :height "30%"}
               :children [[sd/show-data data]
                          [data-tools data default-data random-data]]]]])


(defn example [& {:keys [container-id sample-data random-data component] :as params}]
  (let [component-id (bh/utils-path->keyword container-id "chart")
        data         (r/atom sample-data)
        input-params (assoc params
                       :data data
                       :component-id component-id
                       :component (partial data-update-example component sample-data random-data))

        ret (reduce into [example/component-example] (seq input-params))]

    ;(log/info "example" ret)
      ;"//////" params
      ;"//////" input-params)

    ret))


