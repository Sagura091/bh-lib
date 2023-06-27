(ns demo.catalog.atom.buttons
  "Catalog and demonstrations of available button components."
  (:require [demo.catalog.atom.example.button.simple-button :as simple-button]
            [demo.catalog.atom.example.button.specialized-button :as specialized-button]
            [demo.catalog.atom.example.button.icon-button :as icon-button]
            [demo.catalog.atom.example.button.toggle-button :as toggle-button]))

(defn examples
  []

  [:div
   [simple-button/example]
   [specialized-button/example]
   [icon-button/example]
   [toggle-button/example]])
