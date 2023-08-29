(ns demo.catalog.atom.example.astrouxds.status
  (:require [bh-ui.core :as bh]
            [re-com.core :as rc]
            [woolybear.ad.catalog.utils :as acu]))

(defn example []
  (acu/demo
    "Status symbols"
    "Here we show the symbols used for displaying system status."
    [rc/h-box :src (rc/at)
     :gap "50px"
     :children [[rc/v-box :src (rc/at)
                 :align :center
                 :children [[:p "Off"]
                            [bh/astro-status "off"]]]
                [rc/v-box :src (rc/at)
                 :align :center
                 :children [[:p "Standby"]
                            [bh/astro-status "standby"]]]
                [rc/v-box :src (rc/at)
                 :align :center
                 :children [[:p "Normal"]
                            [bh/astro-status "normal"]]]
                [rc/v-box :src (rc/at)
                 :align :center
                 :children [[:p "Caution"]
                            [bh/astro-status "caution"]]]
                [rc/v-box :src (rc/at)
                 :align :center
                 :children [[:p "Serious"]
                            [bh/astro-status "serious"]]]
                [rc/v-box :src (rc/at)
                 :align :center
                 :children [[:p "Critical"]
                            [bh/astro-status "critical"]]]]]))




