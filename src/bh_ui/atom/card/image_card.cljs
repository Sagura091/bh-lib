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


(defn card
  "data - Map
    :content (required) - hiccup code (html). Ex: [:div \"hello world\"]
   config - Map
    :image (optional) String - name of image Ex: \"image.png\"
    :alt-text (optional) String - alt text for the image Ex: \"alt text\"
    :title (required) String - title Ex: \"Title\"
   style - Map
    :image-style (optional) Map<:class, String> - a css class name. Ex: {:class \"img-style\"}\""

  [& {:keys [data config style]}]
  [:div.card (or (:style style) default-card-style)
   [:div.card-image
    [rc/v-box
     :children [[rc/gap :size "10px"]
                [:figure.image (or (:image-style style) default-image-style)
                 [:img {:src (or (:image config) default-image) :alt (or (:alt-text config) (:title config))}]]]]]
   [:div.card-content.center-text
    [:p.title.is-4 (:title config)]
    (:content data)]])



