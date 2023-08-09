(ns demo.catalog.atom.example.re-com.input-field
  (:require
    [woolybear.ad.layout :as layout]
    [woolybear.ad.catalog.utils :as acu]
    [bh-ui.atom.re-com.input-field :as input]
    [reagent.core :as r]))




(defn example []
  (acu/demo
    "Input Field"
    [layout/centered {:extra-classes :width-50}
     [input/input-field
      :data ""]]))
