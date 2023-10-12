(ns demo.catalog.atom.example.experimental.popover
  (:require
    [woolybear.ad.catalog.utils :as acu]
    [bh-ui.atom.experimental.popover :as popover]))


(defn example []
  (acu/demo
    "Popover messages"
   [:div
    [popover/popover-wrapper
     :data {:component [:button "Press me"]}
     :config {:clickable true
              :popover-title "Flippable Card"
              :popover-body-text  "A simple 'flippable' Card, using [react-ui-cards](). This card has
                            `.flip-card-front` and `.flip-card-back` using CSS, and flips between them when the user moves the mouse
                            over the card."}]
    [popover/popover-wrapper
     :data  {:component [:button "Hover over me"]}
     :config {:clickable false
              :popover-title "Flippable Card"
              :popover-body-text  "A simple 'flippable' Card, using [react-ui-cards](). This card has
                           `.flip-card-front` and `.flip-card-back` using CSS, and flips between them when the user moves the mouse
                           over the card."
              :theme "translucent"}]]))
