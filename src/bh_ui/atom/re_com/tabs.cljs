(ns bh-ui.atom.re-com.tabs
  (:require [re-com.core :as rc]
            [reagent.core :as r]
            [taoensso.timbre :as log]))


(def sample-data [{:id ::one :label "One" :child [:p "child one"]}
                  {:id ::two :label "Two" :child [:p "child two"]}
                  {:id ::three :label "Three" :child [:p "child three"]}])

(def tab-1 {:id "one" :label "One" :child [:p "child one in a tab"]})
(def tab-2 {:id "two" :label "Two" :child [:p "child two in a tab"]})
(def tab-3 {:id "three" :label "Three" :child [:p "child three in a tab"]})


(defn item-for-id
  "Takes a vector of maps 'v'. Returns the first item in 'v' whose id-fn (default :id) matches 'id'.
   Returns nil if id not found"
  [id v & {:keys [id-fn] :or {id-fn :id}}]
  (first (filter #(= (id-fn %) id) v)))


(defn tab [& {:keys [id label child]}]
  ; TODO: the problem here is that this is NOT hiccup!
  {:id id :label label :child child})


(defn h-tabs [& {:keys [children style config]}]
  ; TODO: where do :style and :config params apply?

  (r/with-let [selected-tab (r/atom (-> children first :id))]
    [rc/v-box
     :gap "5px"
     :children [[rc/horizontal-tabs :src (rc/at)
                 :style {:border "1px solid"}
                 :model selected-tab
                 :tabs children
                 :on-change #(reset! selected-tab %)]
                [rc/box :src (rc/at)
                 :child (:child (item-for-id @selected-tab children))]]]))


(defn h-bar-tabs [& {:keys [children style config]}]
  ; TODO: where do :style and :config params apply?

  (r/with-let [selected-tab (r/atom (-> children first :id))]
    [rc/v-box
     :gap "5px"
     :children [[rc/horizontal-bar-tabs :src (rc/at)
                 :style {:border "1px solid"}
                 :model selected-tab
                 :tabs children
                 :on-change #(reset! selected-tab %)]
                [rc/box :src (rc/at)
                 :child (:child (item-for-id @selected-tab children))]]]))


(defn h-pill-tabs [& {:keys [children style config]}]
  ; TODO: where do :style and :config params apply?

  (r/with-let [selected-tab (r/atom (-> children first :id))]
    [rc/v-box
     :gap "5px"
     :children [[rc/horizontal-pill-tabs :src (rc/at)
                 :style {:border "1px solid"}
                 :model selected-tab
                 :tabs children
                 :on-change #(reset! selected-tab %)]
                [rc/box :src (rc/at)
                 :child (:child (item-for-id @selected-tab children))]]]))


(defn v-bar-tabs [& {:keys [children style config]}]
  ; TODO: where do :style and :config params apply?

  (r/with-let [selected-tab (r/atom (-> children first :id))]
    [rc/h-box
     :gap "5px"
     :children [[rc/vertical-bar-tabs :src (rc/at)
                 :style {:border "1px solid"}
                 :model selected-tab
                 :tabs children
                 :on-change #(reset! selected-tab %)]
                [rc/box :src (rc/at)
                 :child (:child (item-for-id @selected-tab children))]]]))


(defn v-pill-tabs [& {:keys [children style config]}]
  ; TODO: where do :style and :config params apply?

  (r/with-let [selected-tab (r/atom (-> children first :id))]
    [rc/h-box
     :gap "5px"
     :children [[rc/vertical-pill-tabs :src (rc/at)
                 :style {:border "1px solid"}
                 :model selected-tab
                 :tabs children
                 :on-change #(reset! selected-tab %)]
                [rc/box :src (rc/at)
                 :child (:child (item-for-id @selected-tab children))]]]))


(def element-defs {:rc/tab         {:component tab :child :keyword}
                   :rc/h-tabs      {:component h-tabs :children :keyword}
                   :rc/h-bar-tabs  {:component h-bar-tabs :children :keyword}
                   :rc/h-pill-tabs {:component h-pill-tabs :children :keyword}
                   :rc/v-bar-tabs  {:component v-bar-tabs :children :keyword}
                   :rc/v-pill-tabs {:component v-pill-tabs :children :keyword}})

(re-frame.core/dispatch-sync [:register-meta element-defs])


