(ns demo.catalog.atom.example.astrouxds.radio-button
  (:require [bh-ui.core :as bh]
            [re-com.core :as rc]
            [woolybear.ad.catalog.utils :as acu]))

(defn example []
  (acu/demo
    "Radio Button"
    [rc/h-box :src (rc/at)
     :gap "50px"
     :children [[bh/astro-radio-button ["One" "Two" "Three"]]]]))

