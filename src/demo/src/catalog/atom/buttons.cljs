(ns demo.src.catalog.atom.buttons
  "demo.src.catalog and demonstrations of available button components."
  (:require [demo.src.catalog.atom.example.button.simple-button :as simple-button]
            [demo.src.catalog.atom.example.button.specialized-button :as specialized-button]
            [demo.src.catalog.atom.example.button.icon-button :as icon-button]
            [demo.src.catalog.atom.example.button.toggle-button :as toggle-button]))

(defn examples
  []

  [:div
   [simple-button/example]
   [specialized-button/example]
   [icon-button/example]
   [toggle-button/example]])
