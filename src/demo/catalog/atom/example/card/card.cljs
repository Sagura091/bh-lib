(ns demo.catalog.atom.example.card.card
  (:require [bh-ui.core :as bh]
            [woolybear.ad.catalog.utils :as acu]
            [woolybear.ad.layout :as layout]))

(def default-background "#9CA8B3")
(def default-color "#FF")
(def node-style {:style {:width "300px"
                         :height "300px"
                         :margin     :auto
                         :background default-background
                         :color      default-color}})

;(def node-style {:class "default-card"})

(defn example []
  (acu/demo "Card"
    "A simple Card, based upon [Bulma](https://bulma.io)"
    [layout/centered {:extra-classes :width-50}
     [bh/card
      :data {:content [layout/markdown-block
                       "Rich created the [Clojure]() programming language, and the [Datomic]() database."]}
      :config {:title "Rich Hickey"}
      :style {:style node-style}]]

      

    bh/card-src-code))




