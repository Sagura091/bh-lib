(ns demo.catalog.atom.fast-charts
  (:require
    [demo.catalog.atom.example.fast-chart.fast-line-chart :as fast-line-chart]))


(defn page
  "Fast Charts"
  []

  [:div
   [fast-line-chart/example]])

