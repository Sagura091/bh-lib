(ns bh-ui.atom.re-com.tabs
  (:require [re-com.core :as rc]
            [reagent.core :as r]
            [taoensso.timbre :as log]))

(def last-params (atom nil))
(def default-style {:style {:height "150px" :width "100%"
                            :border "1px solid" :border-radius "10px"}})
(def sample-children [[:div default-style "child one"]
                      [:div default-style "child two"]
                      [:div default-style "child three"]])
(def sample-config {:labels ["One" "Two" "Three"]})


(defn- item-for-id
  "Takes a vector of maps 'v'. Returns the first item in 'v' whose id-fn (default :id) matches 'id'.
   Returns nil if id not found"
  [id v & {:keys [id-fn] :or {id-fn :id}}]
  (first (filter #(= (id-fn %) id) v)))


(defn- make-tab [[id content]]
  {:id id :label id :child ^{:key id} content})


(def last-contents (atom nil))
(def last-child (atom nil))


(defn- contents [{:keys [label child]} selected-tab]
  (let [vis (= @selected-tab label)]
    ;(log/info "contents" label "//" vis "//" @selected-tab)
    (when vis
      ^{:key label} [:div child])))


(defn- h-tab*
  "Generates appropriate hiccup for one of the horizontal tab types in [Re-com](https://re-com.day8.com.au/#/tabs)

    - tab-kind - re-com tab function for the specific visual representation
    - children - sequence of hiccup components, one for each 'tab'
    - config - hash-map of configuration information, specifically
           - :labels - vector of strings, one per 'tab' and in the same order, the string will be used as the
                       text/label on the tab ui element itself

    Clicking on a tab will swap the content to the associated hiccup 'child'"

  [tab-kind children style config]

  ;(log/info "h-tab (a)" config "//" children)

  (let [pages        (map make-tab (zipmap (:labels config) children))
        selected-tab (r/atom (-> pages first :id))]

    ;(log/info "h-tab (b)" @selected-tab "//" pages)

    (fn [params]
      (reset! last-contents {:p pages :s @selected-tab})

      ;(log/info "h-tab (c)" @selected-tab "//" pages)

      [rc/v-box
       :gap "5px"
       :children [[tab-kind :src (rc/at)
                   :style (merge style {:border "1px solid"})
                   :model selected-tab
                   :tabs pages
                   :on-change #(reset! selected-tab %)]
                  [rc/h-box :src (rc/at)
                   :children (->> pages
                               (map #(contents % selected-tab))
                               (filter some?))]]])))


(comment
  (do
    (def pages (:p @last-contents))
    (def selected-tab (atom (:s @last-contents))))

  (item-for-id selected-tab v)
  (first (filter #(= (:id %) "Two") v))

  @last-child
  ((seq @last-child))

  (->> pages
    (filter #(= (:id %)
               @selected-tab)))

  (->> pages
    (filter #(= (:id %)
               @selected-tab))
    (map :child))

  ((first @last-child)
   :data [:tabbed-molecule-2.molecule.blackboard.data.two])
  (type (first @last-child))

  (((first @last-child)
    :data [:tabbed-molecule-2.molecule.blackboard.data.one]))
  (((first @last-child)
    :data [:tabbed-molecule-2.molecule.blackboard.data.two]))


  ())


(defn- v-tab*
  "Generates appropriate hiccup for one of the vertical tab types in [Re-com](https://re-com.day8.com.au/#/tabs)

    - tab-kind - re-com tab function for the specific visual representation
    - children - sequence of hiccup components, one for each 'tab'
    - config - hash-map of configuration information, specifically
           - :labels - vector of strings, one per 'tab' and in the same order, the string will be used as the
                       text/label on the tab ui element itself

    Clicking on a tab will swap the content to the associated hiccup 'child'"

  [tab-kind children style config]

  (let [contents     (map make-tab (zipmap (:labels config) children))
        selected-tab (r/atom (-> contents first :id))]

    (fn []
      [rc/h-box
       :gap "5px"
       :children [[tab-kind :src (rc/at)
                   :style (merge style {:border "1px solid"})
                   :model selected-tab
                   :tabs contents
                   :on-change #(reset! selected-tab %)]
                  [rc/box :src (rc/at)
                   :child (:child (item-for-id @selected-tab contents))]]])))

(defn h-tabs [& {:keys [children style config]}]
  (h-tab* rc/horizontal-tabs children style config))

(defn h-bar-tabs [& {:keys [children style config]}]
  (h-tab* rc/horizontal-bar-tabs children style config))

(defn h-pill-tabs [& {:keys [children style config] :as params}]
  (reset! last-params params)
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



(comment
  @last-params


  ())
