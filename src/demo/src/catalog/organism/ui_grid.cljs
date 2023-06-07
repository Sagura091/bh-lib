(ns demo.src.catalog.organism.ui-grid
  (:require [demo.src.catalog.organism.ui-grid.ratom-example :as ratom-example]
            [demo.src.catalog.organism.ui-grid.sub-example :as sub-example]))


(defn page []
  [:div
   [ratom-example/example]
   [sub-example/example]])

