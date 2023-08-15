(ns demo.catalog.atom.example.astrouxds.classification-list
  (:require [bh-ui.core :as bh]
            [re-com.core :as rc]
            [woolybear.ad.catalog.utils :as acu]))

(defn example []
  (acu/demo
    "Classification Markings List"
    "Here we list all the classification levels provided by AstroUX."
    [rc/v-box :src (rc/at)
     :gap "5px"
     :children [[bh/astro-classification-marking :level "unclassified"]
                [bh/astro-classification-marking :level "cui"]
                [bh/astro-classification-marking :level "controlled"]
                [bh/astro-classification-marking :level "confidential"]
                [bh/astro-classification-marking :level "secret"]
                [bh/astro-classification-marking :level "top-secret"]
                [bh/astro-classification-marking :level "top-secret-sci"]]]))


