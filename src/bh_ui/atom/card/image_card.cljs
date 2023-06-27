(ns bh-ui.atom.card.image-card
  (:require [re-com.core :as rc]))


(def source-code '[:div.card (or style default-card-style)
                   [:div.card-image
                    [rc/v-box
                     :children [[rc/gap :size "10px"]
                                [:figure.image (if image-style {:style image-style} default-image-style)
                                 [:img {:src (or image default-image) :alt (or alt-text title)}]]]]]
                   [:div.card-content.center-text
                    [:p.title.is-4 title]
                    content]])


;(def default-background "#9CA8B3")
;(def default-color "#FF")
(def default-card-style {:class "img-flippable-default-card"})
(def default-image-style {:class "img-style"})
(def default-image "imgs/hammer-icon-16x16.png")


(defn card [& {:keys [style title image image-style alt-text content]}]
  [:div.card (or style default-card-style)
   [:div.card-image
    [rc/v-box
     :children [[rc/gap :size "10px"]
                [:figure.image (or image-style default-image-style)
                 [:img {:src (or image default-image) :alt (or alt-text title)}]]]]]
   [:div.card-content.center-text
    [:p.title.is-4 title]
    content]])



