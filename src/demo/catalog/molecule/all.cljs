#_{:clj-kondo/ignore [:namespace-name-mismatch]}
(ns demo.catalog.molecule.all
  "demo.catalog and demonstrations of general components."
  (:require [taoensso.timbre :as log]
            [demo.catalog.molecule.example.header-bar :as header-bar]))


(defn catalog
  []

  [:div
   [header-bar/example]])
