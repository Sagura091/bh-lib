(ns bh-ui.atom.chart.core
  (:require [bh-ui.atom.chart.area-chart :as area-chart]
            [bh-ui.atom.chart.bar-chart :as bar-chart]
            [bh-ui.atom.chart.colored-pie-chart :as colored-pie-chart]
            [bh-ui.atom.chart.funnel-chart :as funnel-chart]
            [bh-ui.atom.chart.line-chart :as line-chart]
            [bh-ui.atom.chart.pie-chart :as pie-chart]
            [bh-ui.atom.chart.radar-chart :as radar-chart]
            [bh-ui.atom.chart.radial-bar-chart :as radial-bar-chart]
            [bh-ui.atom.chart.sankey-chart :as sankey-chart]
            [bh-ui.atom.chart.scatter-chart :as scatter-chart]
            [bh-ui.atom.chart.treemap-chart :as tree-map-chart]
            [bh-ui.atom.chart.utils :as utils]
            [bh-ui.atom.chart.wrapper :as chart-wrapper]
            [bh-ui.atom.chart.wrapper-2 :as chart-wrapper-2]))



;; this is the Area-chart Lib fucntions you can call
(def area-chart-local-config area-chart/local-config)
(def area-chart-config area-chart/config)
(def area-chart-config-panel area-chart/config-panel)

(def aread-chart-component area-chart/component)


;; bar-chart lib functions you can call.
(def bar-chart-local-config bar-chart/local-config)
(def bar-chart-config bar-chart/config)

(def bar-chart-config-panel bar-chart/config-panel)

(def bar-chart-component bar-chart/component)


;; colored pie  charts functions that can be called.
(def colored-pie-chart-local-config colored-pie-chart/local-config)

(def colored-pie-chart-config colored-pie-chart/config)

(def colored-pie-chart-config-panel colored-pie-chart/config-panel)

(def colored-pie-chart-component colored-pie-chart/component)


;; Funnel chart lib functions to call
(def funnel-chart-local-config funnel-chart/local-config)

(def funnel-chart-make-cells funnel-chart/make-cells)

(def funnel-chart-config funnel-chart/config)

(def funnel-chart-config-panel funnel-chart/config-panel)

(def funnel-chart-component funnel-chart/component)


;; line chart lib functions to call

(def line-chart-local-config line-chart/local-config)
(def line-chart-config-panel line-chart/config-panel)
;(def line-chart-config line-chart/config)
(def line-chart-component line-chart/component)


;; pie chart lib functions to call

(def pie-chart-config pie-chart/config)
(def pie-chart-local-config pie-chart/local-config)

(def pie-chart-config-panel pie-chart/config-panel)

(def pie-chart-component pie-chart/component)

;; radar chart lib functions to call

(def radar-chart-config radar-chart/config)
(def radar-chart-config-panel radar-chart/config-panel)
(def radar-chart-local-config radar-chart/local-config)
(def radar-chart-component radar-chart/component)


;; radial bar chart lib functions to call

(def radial-bar-chart-local-config radial-bar-chart/local-config)
(def radial-bar-chart-config radial-bar-chart/config)
(def radial-bar-chart-config-panel radial-bar-chart/config-panel)
(def radial-bar-chart-component radial-bar-chart/component)

;; sankey chart lib function to call

(def sankey-chart-local-config sankey-chart/local-config)
(def sankey-chart-config sankey-chart/config)
(def sankey-chart-config-panel sankey-chart/config-panel)
(def sankey-chart-component sankey-chart/component)
(def sankey-chart-color-source->target sankey-chart/color-source->target)
(def sankey-chart-color-source->white sankey-chart/color-source->white)
(def sankey-chart-color-white->target sankey-chart/color-white->target)


;;scatter chart lib functions to call

(def scatter-chart-local-config scatter-chart/local-config)
(def scatter-chart-config scatter-chart/config)
(def scatter-chart-config-panel scatter-chart/config-panel)
(def scatter-chart-component scatter-chart/component)

;; Tree-map-chart lib functions to call

;(def tree-map-chart-local-config tree-map-chart/local-config)
(def tree-map-chart-config tree-map-chart/config)
;(def tree-map-chart-config-panel tree-map-chart/config-panel)
(def tree-map-chart-component tree-map-chart/component)
(def tree-map-chart-configurable-component tree-map-chart/configurable-component)



