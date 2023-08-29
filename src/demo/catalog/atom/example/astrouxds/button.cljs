(ns demo.catalog.atom.example.astrouxds.button
  (:require [bh-ui.core :as bh]
            [re-com.core :as rc]
            [woolybear.ad.catalog.utils :as acu]))

(defn- button-sm []
  [bh/astro-button :label "small" :size "small"])

(defn- button-md []
  [bh/astro-button :label "medium" :size "medium"])

(defn- button-lg []
  [bh/astro-button :label "large" :size "large"])

(defn- button-lg-icon []
  [bh/astro-button :label "large w/ icon" :size "large" :icon "settings"])

(defn example []
  (acu/demo
    "Buttons"
    [rc/h-box :src (rc/at)
     :gap "50px"
     :children [[rc/v-box :src (rc/at)
                 :align :center
                 :children [[button-sm]]]
                [rc/v-box :src (rc/at)
                 :align :center
                 :children [[button-md]]]
                [rc/v-box :src (rc/at)
                 :align :center
                 :children [[button-lg]]]
                [rc/v-box :src (rc/at)
                 :align :center
                 :children [[button-lg-icon]]]]]))

