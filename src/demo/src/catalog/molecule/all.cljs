#_{:clj-kondo/ignore [:namespace-name-mismatch]}
(ns demo.src.catalog.molecule.all
  "demo.src.catalog and demonstrations of general components."
  (:require [taoensso.timbre :as log]
            [demo.src.catalog.molecule.example.header-bar :as header-bar]))


(defn demo.src.catalog
  []

  [:div
   [header-bar/example]])
