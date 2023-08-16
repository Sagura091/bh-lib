(ns demo.catalog.atom.example.re-com.label
  (:require [bh-ui.core :as bh]
            [re-com.core :as rc]
            [reagent.core :as r]
            [woolybear.ad.catalog.utils :as acu]))


(defn- label []
  [bh/recom-label :value "This is a \"regular\" label"])


(defn- label-sm []
  [bh/recom-label-sm :value "This is a \"small\" label"])


(defn- label-md []
  [bh/recom-label-md :value "This is a \"medium\" label"])


(defn- label-lg []
  [bh/recom-label-lg :value "This is a \"large\" label"])


(defn- label-hg []
  [bh/recom-label-hg :value "This is a \"huge\" label"])


(defn example []
  (acu/demo
    "Labels"
    [rc/v-box :src (rc/at)
     :gap "5px"
     :children [[label]
                [label-sm]
                [label-md]
                [label-lg]
                [label-hg]]]
    '[:div
      [bh/recom-label :value (r/atom "This is a \"regular\" label")]
      [bh/recom-label-sm :value (r/atom "This is a \"small\" label")]
      [bh/recom-label-md :value (r/atom "This is a \"medium\" label")]
      [bh/recom-label-lg :value (r/atom "This is a \"large\" label")]
      [bh/recom-label-hg :value (r/atom "This is a \"huge\" label")]]))

