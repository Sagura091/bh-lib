(ns demo.src.catalog.atom.example.astrouxds.slider
  (:require [bh-ui.atom.astrouxds.slider :as slider]
            [re-com.core :as rc]
            [woolybear.ad.utils :as acu]))

(defn example []
  (acu/demo
    "Slider"
    [rc/h-box :src (rc/at)
     :gap "50px"
     :children [[slider/slider :min 0 :max 200 :step 2 :val 100 :disabled false]]]))
