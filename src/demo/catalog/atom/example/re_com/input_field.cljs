(ns demo.catalog.atom.example.re-com.input-field
  (:require
    [woolybear.ad.layout :as layout]
    [woolybear.ad.catalog.utils :as acu]
    [bh-ui.core :as bh]
    [reagent.core :as r]))




(defn example []
  (acu/demo
    "Input Field"
    [layout/centered {:extra-classes :width-50}
     [bh/recom-input-field
      ; :data must be a r/atom here because static structures CANNOT be edited (by convention, currently)
      ;      see atoms/charts page examples
      :data (r/atom "")]]))
