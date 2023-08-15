(ns demo.catalog.atom.example.astrouxds.slider
  (:require [bh-ui.core :as bh]
            [re-com.core :as rc]
            [woolybear.ad.catalog.utils :as acu]))

(defn example []
  (acu/demo
    "Slider"
    [rc/h-box :src (rc/at)
     :gap "50px"
     :children [[bh/astro-slider :min 0 :max 200 :step 2 :val 100 :disabled false]]]))
