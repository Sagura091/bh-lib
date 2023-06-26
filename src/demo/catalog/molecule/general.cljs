#_{:clj-kondo/ignore [:namespace-name-mismatch]}
(ns demo.catalog.molecule.general
  "demo.catalog and demonstrations of general components."
  (:require [taoensso.timbre :as log]
            [demo.catalog.molecule.example.header-bar :as header-bar]
            [demo.catalog.molecule.example.login :as login]
            [demo.catalog.molecule.example.two-d-three-d-globe :as two-d-three-d-globe]
            [demo.catalog.molecule.example.composite.coverage-plan :as coverage-plan]
            [demo.catalog.molecule.example.composite.chart-remote-data :as chart-remote-data]
            [demo.catalog.molecule.example.composite.simple-multi-chart :as simple-multi-chart]
            [demo.catalog.molecule.example.composite.simple-multi-chart-2 :as simple-multi-chart-2]
            [demo.catalog.molecule.example.composite.with-fn-example :as with-fn]
            [demo.catalog.molecule.example.composite.multi-chart-widget :as multi-chart-widget]))


(log/info "demo.catalog.molecule.general")


(defn catalog []

  [:div
   ; depend on :source/remote

   ;[chart-remote-data/example]
   ;[coverage-plan/ww-example]
   ;[coverage-plan/r-example]
   ;[coverage-plan/twoD-example]
   ;[two-d-three-d-globe/example]

   [simple-multi-chart/example]
   [simple-multi-chart-2/example]
   [multi-chart-widget/example]
   [with-fn/example]
   [header-bar/example]
   [login/example]])
