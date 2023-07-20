(ns demo.catalog.atom.example.experimental.internatonilization
  (:require
    [reagent.core :as r]
    [taoensso.timbre :as log]
    [woolybear.ad.layout :as layout]
    [woolybear.ad.catalog.utils :as acu]
    [reagent.ratom :as ratom]
    [re-com.core :as rc]
    [demo.catalog.atom.example.experimental.i18n :as inter]
    [re-frame.core :as re-frame]
    [demo.events]))

(def languages [{:id :en :label "English" :group "EN Speakers"}
                {:id :fr :label "French" :group "FR Speakers"}
                {:id :es :label "Spanish" :group "ES Speakers"}
                {:id :po :label "Polish" :group "ES Speakers"}])
(def local-atom (atom ":en"))

(def Selected-Languges {:name "defualt"})
(defn check-box [language]
  (log/info "Rendering the check-box - first time through")
  (r/with-let [clicked? (ratom/atom false)]
              (log/info "Rendering the check-box in with-let" @language)
              [rc/checkbox
               :src (rc/at)
               :label (inter/translate :demo (keyword @language) :demo/check-box-label)
               :model clicked?
               :on-change #(reset! clicked? %)]))

(defn single-dropdown
  []
  (let [selected-country-id (r/atom nil)]
    (fn []
      [rc/v-box
       :src (rc/at)
       :gap "10px"
       :children [[rc/h-box
                   :src (rc/at)
                   :gap "10px"
                   :align :center
                   :children [[rc/single-dropdown
                               :src (rc/at)
                               :choices languages
                               :model selected-country-id
                               :title? true
                               :placeholder "Choose a language"
                               :width "300px"
                               :max-height "400px"
                               :filter-box? false
                               :on-change (fn [event]
                                            (reset! selected-country-id event)
                                            (reset! local-atom event)
                                            (print event)
                                            (print @local-atom)
                                            (re-frame/dispatch [:set-i18n @local-atom]))]]]]])))

(def trans)
(defn internatonilization [language]
  (acu/demo
    "internatonilization"
    [layout/text-block
     [single-dropdown]
     [layout/centered {:extra-classes :width-50}
      [check-box language]]]
    ))



(comment

  (def local-atom2 (atom {:name :en}))
  (def yo single-dropdown)
  (print (get @local-atom2 :name))

  (keyword ":en")




  ())