(ns catalog.atom.icons
  "Catalog and demonstrations of available icon components."
  (:require [catalog.atom.example.icons.simple-image :as simple-image]
            [catalog.atom.example.icons.standard-icon :as standard-icon]
            [catalog.atom.example.icons.colored-icon :as colored-icon]
            [catalog.atom.example.icons.small-icon :as small-icon]
            [catalog.atom.example.icons.medium-icon :as medium-icon]
            [catalog.atom.example.icons.large-icon :as large-icon]
            [catalog.atom.example.icons.brand-icon :as brand-icon]
            [catalog.atom.example.icons.clickable-icon :as clickable-icon]))


(defn examples
  []

  [:div
   [simple-image/example]
   [standard-icon/example]
   [colored-icon/example]
   [small-icon/example]
   [medium-icon/example]
   [large-icon/example]
   [brand-icon/example]
   [clickable-icon/example]])



