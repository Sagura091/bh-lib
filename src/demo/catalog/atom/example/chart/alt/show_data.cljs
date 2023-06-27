(ns demo.catalog.atom.example.chart.alt.show-data
  (:require [bh-ui.utils.helpers :as h]
            [re-com.core :as rc]
            [taoensso.timbre :as log]))


(log/info "demo.catalog.atom.example.chart.alt.show-data")


(defn show-data [data]
  (let [d (h/resolve-value data)]
    (fn []

      ;(log/info "show-data" data "//" d "//" @d)

      [rc/h-box :src (rc/at)
       :gap "10px"
       :style {:background "#808080"}
       :class "tools-panel"
       :children [[:p {:style {:color "white" :overflow :auto
                               :max-height "100px" :min-height "100px"}}
                   (str @d)]]])))


(defn show-config [config-data]
  (let [d (h/resolve-value config-data)]
    (fn []

      ;(log/info "show-data" data "//" d "//" @d)

      [rc/h-box :src (rc/at)
       :gap "10px"
       :style {:background "#808080"}
       :class "tools-panel"
       :children [[:p {:style {:color "white"}}
                   (str @d)]]])))
