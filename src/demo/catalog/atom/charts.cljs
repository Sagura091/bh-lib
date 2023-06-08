(ns demo.catalog.atom.charts
  (:require [demo.catalog.atom.example.chart.area-chart :as area-chart]
            [demo.catalog.atom.example.chart.bar-chart :as bar-chart]
            [demo.catalog.atom.example.chart.colored-pie-chart :as colored-pie-chart]
            [demo.catalog.atom.example.chart.funnel-chart :as funnel-chart]
            [demo.catalog.atom.example.chart.line-chart :as line-chart]
            [demo.catalog.atom.example.chart.pie-chart :as pie-chart]
            [demo.catalog.atom.example.chart.radar-chart :as radar-chart]
            [demo.catalog.atom.example.chart.radial-bar-chart :as radial-bar-chart]
            [demo.catalog.atom.example.chart.sankey-chart :as sankey-chart]
            [demo.catalog.atom.example.chart.scatter-chart :as scatter-chart]
            [demo.catalog.atom.example.chart.treemap-chart :as treemap-chart]))


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

