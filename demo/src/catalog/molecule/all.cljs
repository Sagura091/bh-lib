#_{:clj-kondo/ignore [:namespace-name-mismatch]}
(ns catalog.molecule.all
  "Catalog and demonstrations of general components."
  (:require [taoensso.timbre :as log]
            [catalog.molecule.example.header-bar :as header-bar]))


(defn catalog
  []

  [:div
   [header-bar/example]])
