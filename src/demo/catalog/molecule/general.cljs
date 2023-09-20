#_{:clj-kondo/ignore [:namespace-name-mismatch]}
(ns demo.catalog.molecule.general
  "Catalog and demonstrations of general components."
  (:require [taoensso.timbre :as log]
            [demo.catalog.molecule.example.two-d-three-d-globe :as two-d-three-d-globe]
            [demo.catalog.molecule.example.composite.coverage-plan :as coverage-plan]
            [demo.catalog.molecule.example.composite.chart-remote-data :as chart-remote-data]
            [demo.catalog.molecule.example.composite.simple-multi-chart :as simple-multi-chart]
            [demo.catalog.molecule.example.composite.simple-multi-chart-2 :as simple-multi-chart-2]
            [demo.catalog.molecule.example.composite.with-fn-example :as with-fn]
            [demo.catalog.molecule.example.composite.multi-chart-widget :as multi-chart-widget]
            [demo.catalog.molecule.example.composite.v-scroll-pane-children :as v-scroll]
            [demo.catalog.molecule.example.composite.colored-selection-table :as cs-table]
            [demo.catalog.molecule.example.composite.tabbed-molecule :as tabbed]
            [demo.catalog.molecule.example.composite.signal-analysis :as signal]
            [demo.catalog.molecule.example.composite.single-chart :as single-chart]
            [demo.catalog.molecule.example.composite.function-chain :as fc]))


(log/info "demo.catalog.molecule.general")


(defn catalog []

  [:div
   ; depend on :source/remote

   [coverage-plan/ww-example]

   ;[chart-remote-data/example]
   ;[coverage-plan/r-example]
   ;[coverage-plan/twoD-example]
   ;[two-d-three-d-globe/example]

   [single-chart/example]
   [cs-table/example]
   [v-scroll/example]
   [v-scroll/example-2]
   [tabbed/example]
   [tabbed/example-2]
   [signal/example]

   [simple-multi-chart/example]
   [simple-multi-chart-2/example]
   [multi-chart-widget/example]

   [with-fn/example]
   [fc/example]])


