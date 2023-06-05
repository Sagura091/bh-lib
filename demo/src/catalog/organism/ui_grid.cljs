(ns catalog.organism.ui-grid
  (:require [catalog.organism.ui-grid.ratom-example :as ratom-example]
            [catalog.organism.ui-grid.sub-example :as sub-example]))


(defn page []
  [:div
   [ratom-example/example]
   [sub-example/example]])

