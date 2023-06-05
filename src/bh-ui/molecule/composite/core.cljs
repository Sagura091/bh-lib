(ns bh-ui.molecule.composite.core
  (:require [bh-ui.molecule.composite.chart-remote-data :as chart-remote-data]
            [bh-ui.molecule.composite.coverage-plan.support :as coverage-plan.support]
            [bh-ui.molecule.composite.coverage-plan :as coverage-plan]
            [bh-ui.molecule.composite.multi-chart :as multi-chart]
            [bh-ui.molecule.composite.simple-multi-chart :as simple-multi-chart]
            [bh-ui.molecule.composite.simple-multi-chart-2 :as simple-multi-chart-2]
            [bh-ui.molecule.composite.with-fn :as with-fn]))

(def coverage-plan.support-boundary-locations coverage-plan.support/boundary-locations)
(def coverage-plan.support-make-coverage-shape coverage-plan.support/make-coverage-shape)
(def coverage-plan.support-make-target-shape coverage-plan.support/make-target-shape)
(def coverage-plan.support-make-imagery-shape coverage-plan.support/make-imagery-shape)
(def coverage-plan.support-cook-coverages coverage-plan.support/cook-coverages)
(def coverage-plan.support-cook-targets coverage-plan.support/cook-targets)
(def coverage-plan.support-cook-imagery coverage-plan.support/cook-imagery)

(def coverage-plan-fn-coverage coverage-plan/fn-coverage)
(def coverage-plan-fn-range coverage-plan/fn-range)
(def coverage-plan-fn-color-targets coverage-plan/fn-color-targets)
(def coverage-plan-fn-color-satellites coverage-plan/fn-color-satellites)
(def coverage-plan-fn-filtered-targets coverage-plan/fn-filtered-targets)




(def multi-chart-fn-make-config multi-chart/fn-make-config)
(def with-fn-compute-new-data with-fn/compute-new-data)
