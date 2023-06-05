#_{:clj-kondo/ignore [:namespace-name-mismatch]}
(ns catalog.molecule.general
  "Catalog and demonstrations of general components."
  (:require [taoensso.timbre :as log]
            [catalog.molecule.example.header-bar :as header-bar]
            [catalog.molecule.example.login :as login]
            [catalog.molecule.example.two-d-three-d-globe :as two-d-three-d-globe]
            [catalog.molecule.example.composite.coverage-plan :as coverage-plan]
            [catalog.molecule.example.composite.chart-remote-data :as chart-remote-data]
            [catalog.molecule.example.composite.simple-multi-chart :as simple-multi-chart]
            [catalog.molecule.example.composite.simple-multi-chart-2 :as simple-multi-chart-2]
            [catalog.molecule.example.composite.with-fn-example :as with-fn]
            [catalog.molecule.example.composite.multi-chart-widget :as multi-chart-widget]))


(log/info "catalog.molecule.general")


(defn catalog []

  [:div
   [chart-remote-data/example]
   [simple-multi-chart/example]
   [simple-multi-chart-2/example]
   [multi-chart-widget/example]
   [with-fn/example]
   [coverage-plan/ww-example]
   [coverage-plan/r-example]
   [coverage-plan/twoD-example]
   [header-bar/example]
   [login/example]
   [two-d-three-d-globe/example]])
