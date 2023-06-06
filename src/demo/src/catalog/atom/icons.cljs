(ns demo.src.catalog.atom.icons
  "demo.src.catalog and demonstrations of available icon components."
  (:require [demo.src.catalog.atom.example.icons.simple-image :as simple-image]
            [demo.src.catalog.atom.example.icons.standard-icon :as standard-icon]
            [demo.src.catalog.atom.example.icons.colored-icon :as colored-icon]
            [demo.src.catalog.atom.example.icons.small-icon :as small-icon]
            [demo.src.catalog.atom.example.icons.medium-icon :as medium-icon]
            [demo.src.catalog.atom.example.icons.large-icon :as large-icon]
            [demo.src.catalog.atom.example.icons.brand-icon :as brand-icon]
            [demo.src.catalog.atom.example.icons.clickable-icon :as clickable-icon]))


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



