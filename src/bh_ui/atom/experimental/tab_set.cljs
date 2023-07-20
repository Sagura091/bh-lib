(ns bh-ui.atom.experimental.tab-set
  (:require [re-com.core :as rc]
            [reagent.core :as r]
            [taoensso.timbre :as log]))


(def last-params (atom nil))
(defn- make-button [label selected-tab]
  (log/info "make-button" label)

  ^{:key label} [rc/button :src (rc/at)
                 :label label
                 :class (if (= @selected-tab label) "button is-info" "button")
                 :on-click #(reset! selected-tab label)])


(defn- make-tab [[id content]]
  {:id id :label id :child ^{:key id} content})


(defn- content [{:keys [label child]} selected-tab]
  (let [vis (if (= @selected-tab label) "visible" "hidden")]
    (log/info "contents" label "//" vis "//" @selected-tab)
    ^{:key label} [:div {:style {:visibility vis :position "absolute"}}
                   child]))


(defn tab-set [& {:keys [children config style
                         component-id container-id] :as params}]

  (log/info "tab-set2 (a)" children "//" config)
  (reset! last-params {:ch children :cfg config})

  (let [pages        (map make-tab (zipmap (:labels config) children))
        selected-tab (r/atom (-> pages first :id))
        buttons (doall
                  (map (fn [{:keys [label child]}]
                         (make-button label selected-tab))
                    pages))]

    (fn []
      (log/info "tab-set2 (render)" @selected-tab)
      [rc/v-box :src (rc/at)
       :children [[rc/h-box :src (rc/at)
                   :children (map (fn [{:keys [label child]}]
                                    (make-button label selected-tab))
                               pages)]
                  [rc/h-box :src (rc/at)
                   :style {:min-height "400px" :min-width "400px"
                           :border "1px dotted"}
                   :children (map #(content % selected-tab) pages)]]])))


(comment
  @last-params

  (do
    (def config (:cfg @last-params))
    (def children (:ch @last-params))


    (def pages (map make-tab (zipmap (:labels config) children)))
    (def selected-tab (r/atom (-> pages first :id)))
    (def buttons (doall
                   (map (fn [{:keys [label child]}]
                          (make-button label selected-tab))
                     pages))))


  (map (fn [{:keys [label child]}]
         {:l label :c child})
    pages)

  ())

