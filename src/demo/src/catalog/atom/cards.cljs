(ns demo.src.catalog.atom.cards
  (:require [demo.src.catalog.atom.example.card.card :as card]
            [demo.src.catalog.atom.example.card.flippable-card :as flippable-card]
            [demo.src.catalog.atom.example.card.image-card :as image-card]))


(defn examples []
  [:div
   [card/example]
   [image-card/example]
   [flippable-card/example]])

