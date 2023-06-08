(ns demo.catalog.atom.icons
  "demo.catalog and demonstrations of available icon components."
  (:require [demo.catalog.atom.example.icons.simple-image :as simple-image]
            [demo.catalog.atom.example.icons.standard-icon :as standard-icon]
            [demo.catalog.atom.example.icons.colored-icon :as colored-icon]
            [demo.catalog.atom.example.icons.small-icon :as small-icon]
            [demo.catalog.atom.example.icons.medium-icon :as medium-icon]
            [demo.catalog.atom.example.icons.large-icon :as large-icon]
            [demo.catalog.atom.example.icons.brand-icon :as brand-icon]
            [demo.catalog.atom.example.icons.clickable-icon :as clickable-icon]))


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



