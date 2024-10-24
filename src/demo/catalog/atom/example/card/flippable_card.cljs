(ns demo.catalog.atom.example.card.flippable-card
  (:require [bh-ui.core :as bh]
            [re-com.core :as rc]
            [woolybear.ad.catalog.utils :as acu]
            [woolybear.ad.layout :as layout]))


(def default-background "#9CA8B3")
(def default-color "#FF")
(def node-style-square {:style {:width "300px"
                                :height "500px"
                                :overflow        "hidden"
                                :margin          :auto
                                ;:background      default-background
                                ;:color           default-color
                                :display         :flex
                                :flex-direction  :column
                                :justify-content :center
                                :align-items     :center}})
(def image-style {:width        "200px" :height "200px"
                  :display      :block
                  :margin-left  :auto
                  :margin-right :auto})


(defn example []
  (acu/demo "Flippable Card"
    "A simple 'flippable' Card, using [react-ui-cards](). This card has
    `.flip-card-front` and `.flip-card-back` using CSS, and flips between them when the user moves the mouse
    over the card.
    "
    [layout/centered {:extra-classes :width-50}
     [bh/flippable-card
      :data {:front [rc/v-box
                     :gap "10px"
                     :children [[rc/gap :size "20px"]
                                [:figure.image
                                 [:img.is-rounded {:style image-style
                                                   :src   "/imgs/giants/rich-hickey.jpeg"}]]
                                [:p.title.is-4 "Rich Hickey"]]]
             :back [layout/markdown-block
                    "Rich created the [Clojure](https://clojure.org/) programming language, and the [Datomic](https://www.datomic.com/) database."]}
      :style node-style-square]]


    bh/flippable-card-src-code))