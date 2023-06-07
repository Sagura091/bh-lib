(ns demo.src.catalog.atom.example.astrouxds.progress-bar
  (:require [bh-ui.atom.astrouxds.progress-bar :as pb]
            [re-com.core :as rc]
            [woolybear.ad.utils :as acu]))


(defn example []
  (acu/demo
    "Progress Bar"
    [rc/h-box :src (rc/at)
     :gap "50px"
     :children [[pb/progress-bar :value 60 :max 100 :hide-label false]]]))
