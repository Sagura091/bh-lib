(ns bh-ui.atom.re-com.tabs
  (:require [re-com.core :as rc]
            [reagent.core :as r]
            [taoensso.timbre :as log]))


(def sample-children [[:p "child one"]
                      [:p "child two"]
                      [:p "child three"]])
(def sample-config ["One" "Two" "Three"])


(defn- item-for-id
  "Takes a vector of maps 'v'. Returns the first item in 'v' whose id-fn (default :id) matches 'id'.
   Returns nil if id not found"
  [id v & {:keys [id-fn] :or {id-fn :id}}]
  (first (filter #(= (id-fn %) id) v)))


-(defn make-tab [[id content]]
   {:id id :label id :child content})


(defn- h-tab* [tab-kind children style config]
  ; TODO: where does :style apply?

  (r/with-let [contents     (map make-tab (zipmap config children))
               selected-tab (r/atom (-> contents first :id))]

    [rc/v-box
     :gap "5px"
     :children [[tab-kind :src (rc/at)
                 :style {:border "1px solid"}
                 :model selected-tab
                 :tabs contents
                 :on-change #(reset! selected-tab %)]
                [rc/box :src (rc/at)
                 :child (:child (item-for-id @selected-tab contents))]]]))


(defn- v-tab* [tab-kind children style config]
  ; TODO: where does :style apply?

  (r/with-let [contents     (map make-tab (zipmap config children))
               selected-tab (r/atom (-> contents first :id))]

    [rc/h-box
     :gap "5px"
     :children [[tab-kind :src (rc/at)
                 :style {:border "1px solid"}
                 :model selected-tab
                 :tabs contents
                 :on-change #(reset! selected-tab %)]
                [rc/box :src (rc/at)
                 :child (:child (item-for-id @selected-tab contents))]]]))


(defn h-tabs [& {:keys [children style config]}]
  (h-tab* rc/horizontal-tabs children style config))


(defn h-bar-tabs [& {:keys [children style config]}]
  (h-tab* rc/horizontal-bar-tabs children style config))


(defn h-pill-tabs [& {:keys [children style config]}]
  (h-tab* rc/horizontal-pill-tabs children style config))


(defn v-bar-tabs [& {:keys [children style config]}]
  (v-tab* rc/vertical-bar-tabs children style config))


(defn v-pill-tabs [& {:keys [children style config]}]
  (v-tab* rc/vertical-pill-tabs children style config))


(def element-defs {:rc/h-tabs      {:component h-tabs :children :keyword}
                   :rc/h-bar-tabs  {:component h-bar-tabs :children :keyword}
                   :rc/h-pill-tabs {:component h-pill-tabs :children :keyword}
                   :rc/v-bar-tabs  {:component v-bar-tabs :children :keyword}
                   :rc/v-pill-tabs {:component v-pill-tabs :children :keyword}})

(re-frame.core/dispatch-sync [:register-meta element-defs])


