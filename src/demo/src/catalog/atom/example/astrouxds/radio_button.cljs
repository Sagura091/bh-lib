(ns demo.src.catalog.atom.example.astrouxds.radio-button
  (:require [bh-ui.atom.astrouxds.radio-button :as rb]
            [re-com.core :as rc]
            [woolybear.ad.utils :as acu]))

(defn example []
  (acu/demo
    "Radio Button"
    [rc/h-box :src (rc/at)
     :gap "50px"
     :children [[rb/radio-button ["One" "Two" "Three"]]]]))

