(ns demo.catalog.atom.example.astrouxds.classification-marking
  (:require [bh-ui.core :as bh]
            [re-com.core :as rc]
            [woolybear.ad.catalog.utils :as acu]))

(defn example []
  (acu/demo
    "Classification Markings"
    "Here we use the classification marking component to wrap some text in a classification banner."
    [rc/v-box :src (rc/at)
     :gap "5px"
     :children [[bh/astro-classification-marking]
                [:p "Some text to be wrapped in classification banner."]
                [bh/astro-classification-marking :level "unclassified"]]]))


