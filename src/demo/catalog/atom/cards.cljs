(ns demo.catalog.atom.cards
  (:require [demo.catalog.atom.example.card.card :as card]
            [demo.catalog.atom.example.card.flippable-card :as flippable-card]
            [demo.catalog.atom.example.card.image-card :as image-card]))


(defn examples []
  [:div
   [card/example]
   [image-card/example]
   [flippable-card/example]])

