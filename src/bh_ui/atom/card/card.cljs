(ns bh-ui.atom.card.card
  (:require [re-frame.core :as rf]))



(def source-code '[:div.card (or style default-card-style)
                   [:div.card-header
                    [:div.card-header-title title]]

                   [:div.card-content
                    (or content [:div#empty])]])

;(def default-background "#9CA8B3")
;(def default-color "#FF")
(def default-card-style {:class "default-card"})


(defn card [& {:keys [style header-style title content]}]
  [:div.card (or style default-card-style)
   [:div.card-header
    [:div.card-header-title title]]

   [:div.card-content
    (or content [:div#empty])]])


(def meta-data {:bhui/card {:component card
                          :ports     {:title   :port/sink
                                      :content :port/sink}}})


(rf/dispatch-sync [:register-meta meta-data])




