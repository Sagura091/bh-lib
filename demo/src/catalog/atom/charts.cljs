(ns catalog.atom.charts
  (:require [catalog.atom.example.chart.area-chart :as area-chart]
            [catalog.atom.example.chart.bar-chart :as bar-chart]
            [catalog.atom.example.chart.colored-pie-chart :as colored-pie-chart]
            [catalog.atom.example.chart.funnel-chart :as funnel-chart]
            [catalog.atom.example.chart.line-chart :as line-chart]
            [catalog.atom.example.chart.pie-chart :as pie-chart]
            [catalog.atom.example.chart.radar-chart :as radar-chart]
            [catalog.atom.example.chart.radial-bar-chart :as radial-bar-chart]
            [catalog.atom.example.chart.sankey-chart :as sankey-chart]
            [catalog.atom.example.chart.scatter-chart :as scatter-chart]
            [catalog.atom.example.chart.treemap-chart :as treemap-chart]))


(defn page
  "Charts"
  []

  [:div
   [area-chart/examples]
   [bar-chart/examples]
   [colored-pie-chart/examples]
   [funnel-chart/examples]
   [line-chart/examples]
   [pie-chart/examples]
   [radar-chart/examples]
   [radial-bar-chart/examples]
   [sankey-chart/examples]
   [scatter-chart/examples]
   [treemap-chart/examples]])

