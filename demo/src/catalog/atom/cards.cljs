(ns catalog.atom.cards
  (:require [catalog.atom.example.card.card :as card]
            [catalog.atom.example.card.flippable-card :as flippable-card]
            [catalog.atom.example.card.image-card :as image-card]))


(defn examples []
  [:div
   [card/example]
   [image-card/example]
   [flippable-card/example]])

