(ns demo.catalog.atom.example.astrouxds.progress-bar
  (:require [bh-ui.core :as bh]
            [re-com.core :as rc]
            [woolybear.ad.catalog.utils :as acu]))


(defn example []
  (acu/demo
    "Progress Bar"
    [rc/h-box :src (rc/at)
     :gap "50px"
     :children [[bh/astro-progress-bar :value 60 :max 100 :hide-label false]]]))
