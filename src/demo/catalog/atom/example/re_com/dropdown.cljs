(ns demo.catalog.atom.example.re-com.dropdown
  (:require [re-com.core :as rc]
            [bh-ui.atom.re-com.dropdown :as dropdown]
            [woolybear.ad.catalog.utils :as acu]
            [woolybear.ad.layout :as layout]
            [reagent.core :as r]
            [reagent.core    :as    reagent]
            [re-com.util     :refer [item-for-id]]))


(defn dropdown []
  ([rc/single-dropdown
        :choices ["yo", "bro"]
        ] ))

(def demos [{:id 1  :label "Simple dropdown"}
            {:id 2  :label "Dropdown with grouping"}
            {:id 3  :label "Dropdown with filtering"}
            ;{:id 4 :label "Use of :id-fn etc."} ;; for testing
            {:id 5  :label "Keyboard support"}
            {:id 6  :label "Other parameters"}
            {:id 7  :label "Two dependent dropdowns"}
            {:id 8  :label "Custom markup"}
            {:id 9  :label "Async choices load"}
            {:id 10 :label "Drop above"}
            {:id 11 :label "Free text"}])


(def countries [{:id "au" :label "Australia"}
                {:id "us" :label "United States"}
                {:id "uk" :label "United Kingdom"}
                {:id "ca" :label "Canada"}
                {:id "nz" :label "New Zealand"}])


(def cities [{:id "01" :label "Sydney"       :country-id "au"}
             {:id "02" :label "Melbourne"    :country-id "au"}
             {:id "03" :label "Brisbane"     :country-id "au"}
             {:id "04" :label "Adelaide"     :country-id "au"}
             {:id "05" :label "Perth"        :country-id "au"}
             {:id "06" :label "Canberra"     :country-id "au"}
             {:id "07" :label "Hobart"       :country-id "au"}
             {:id "08" :label "Darwin"       :country-id "au"}
             {:id "09" :label "New York"     :country-id "us"}
             {:id "10" :label "Los Angeles"  :country-id "us"}
             {:id "11" :label "Dallas"       :country-id "us"}
             {:id "12" :label "Washington"   :country-id "us"}
             {:id "13" :label "Orlando"      :country-id "us"}
             {:id "14" :label "London"       :country-id "uk"}
             {:id "15" :label "Manchester"   :country-id "uk"}
             {:id "16" :label "Glasgow"      :country-id "uk"}
             {:id "17" :label "Brighton"     :country-id "uk"}
             {:id "18" :label "Birmingham"   :country-id "uk"}
             {:id "19" :label "Toronto"      :country-id "ca"}
             {:id "20" :label "Montreal"     :country-id "ca"}
             {:id "21" :label "Calgary"      :country-id "ca"}
             {:id "22" :label "Ottawa"       :country-id "ca"}
             {:id "23" :label "Edmonton"     :country-id "ca"}
             {:id "24" :label "Auckland"     :country-id "nz"}
             {:id "25" :label "Wellington"   :country-id "nz"}
             {:id "26" :label "Christchurch" :country-id "nz"}
             {:id "27" :label "Hamilton"     :country-id "nz"}
             {:id "28" :label "Dunedin"      :country-id "nz"}])



(def grouped-countries [{:id "AU" :label "Australia"                :group "EN Speakers"}
                        {:id "US" :label "United States"            :group "EN Speakers"}
                        {:id "GB" :label "United Kingdom"           :group "EN Speakers"}
                        {:id "E1" :label "Iraq"                     :group "Updated Axis Of Evil"}
                        {:id "E2" :label "New Zealand"              :group "Updated Axis Of Evil"}
                        {:id "E3" :label "Iran"                     :group "Updated Axis Of Evil"}
                        {:id "E4" :label "North Korea"              :group "Updated Axis Of Evil"}
                        {:id "03" :label "Afghanistan"              :group "'A' COUNTRIES"}
                        {:id "04" :label "Albania"                  :group "'A' COUNTRIES"}
                        {:id "05" :label "Algeria"                  :group "'A' COUNTRIES"}
                        {:id "06" :label "American Samoa"           :group "'A' COUNTRIES"}
                        {:id "07" :label "Andorra"                  :group "'A' COUNTRIES"}
                        {:id "08" :label "Angola"                   :group "'A' COUNTRIES"}
                        {:id "09" :label "Anguilla"                 :group "'A' COUNTRIES"}
                        {:id "10" :label "Antarctica"               :group "'A' COUNTRIES"}
                        {:id "11" :label "Antigua and Barbuda"      :group "'A' COUNTRIES"}
                        {:id "12" :label "Argentina"                :group "'A' COUNTRIES"}
                        {:id "13" :label "Armenia"                  :group "'A' COUNTRIES"}
                        {:id "14" :label "Aruba"                    :group "'A' COUNTRIES"}
                        {:id "16" :label "Austria"                  :group "'A' COUNTRIES"}
                        {:id "17" :label "Azerbaijan"               :group "'A' COUNTRIES"}
                        {:id "18" :label "Bahamas"                  :group "'B' COUNTRIES"}
                        {:id "19" :label "Bahrain"                  :group "'B' COUNTRIES"}
                        {:id "20" :label "Bangladesh"               :group "'B' COUNTRIES"}
                        {:id "21" :label "Barbados"                 :group "'B' COUNTRIES"}
                        {:id "22" :label "Belarus"                  :group "'B' COUNTRIES"}
                        {:id "23" :label "Belgium"                  :group "'B' COUNTRIES"}
                        {:id "24" :label "Belize"                   :group "'B' COUNTRIES"}
                        {:id "25" :label "Benin"                    :group "'B' COUNTRIES"}
                        {:id "26" :label "Bermuda"                  :group "'B' COUNTRIES"}
                        {:id "27" :label "Bhutan"                   :group "'B' COUNTRIES"}
                        {:id "28" :label "Bolivia"                  :group "'B' COUNTRIES"}
                        {:id "29" :label "Bosnia and Herzegovina"   :group "'B' COUNTRIES"}
                        {:id "30" :label "Botswana"                 :group "'B' COUNTRIES"}
                        {:id "31" :label "Bouvet Island"            :group "'B' COUNTRIES"}
                        {:id "32" :label "Brazil"                   :group "'B' COUNTRIES"}
                        {:id "34" :label "Brunei Darussalam"        :group "'B' COUNTRIES"}
                        {:id "35" :label "Bulgaria"                 :group "'B' COUNTRIES"}
                        {:id "36" :label "Burkina Faso"             :group "'B' COUNTRIES"}
                        {:id "37" :label "Burundi"                  :group "'B' COUNTRIES"}])


(def grouped-countries-2 [{:code "AU" :country "Australia"     :region "EN Speakers"}
                          {:code "US" :country "United States" :region "EN Speakers"}
                          {:code "E1" :country "Iraq"          :region "Updated Axis Of Evil"}
                          {:code "E2" :country "New Zealand"   :region "Updated Axis Of Evil"}
                          {:code "03" :country "Afghanistan"   :region "'A' COUNTRIES"}
                          {:code "04" :country "Albania"       :region "'A' COUNTRIES"}
                          {:code "18" :country "Bahamas"       :region "'B' COUNTRIES"}
                          {:code "19" :country "Bahrain"       :region "'B' COUNTRIES"}])
(def languges [{:id "USA" :label "English"           :group "EN Speakers"}
                        {:id "FR" :label "French"            :group "FR Speakers"}
                        {:id "ES" :label "Spanish"           :group "ES Speakers"}
                        {:id "PO" :label "Polish"            :group "PO Speakers"}])

(defn id-fn-demo
  []
  (let [id-fn               #(str (:code %) "$")
        label-fn            #(str (:country %) "!")
        group-fn            #(str "[" (:region %) "]")
        selected-country-id (reagent/atom (id-fn {:code "US"}))]
    (fn []
      [rc/v-box
       :src      (rc/at)
       :gap      "10px"
       :children [[:p "This example is the same as the previous one except the list is shorter and the following parameters have been added to use different keywords for the data and transform the values provided:"]
                  [:p [:code ":id-fn"] " is set to " [:code "#(str (:code %) \"$\")"]]
                  [:p [:code ":label-fn"] " is set to " [:code "#(str (:country %) \"!\")"]]
                  [:p [:code ":group-fn"] " is set to " [:code "#(str \"[\" (:region %) \"]\")"]]
                  [rc/h-box
                   :src      (rc/at)
                   :gap      "10px"
                   :align    :center
                   :children [[rc/single-dropdown
                               :src         (rc/at)
                               :choices     grouped-countries-2
                               :model       selected-country-id
                               :width       "300px"
                               :max-height  "400px"
                               :filter-box? true
                               :id-fn       id-fn
                               :label-fn    label-fn
                               :group-fn    group-fn
                               :on-change   #(reset! selected-country-id %)]
                              [:div
                               [:strong "Selected country: "]
                               (if (nil? @selected-country-id)
                                 "None"
                                 (str (label-fn (item-for-id @selected-country-id grouped-countries-2 :id-fn id-fn)) " [" @selected-country-id "]"))]]]]])))

(defn simple-demo
  []
  (let [selected-country-id (reagent/atom nil)]
  (fn []
  [rc/v-box
   :src (rc/at)
   :gap "10px"
   :children [[rc/h-box
               :src      (rc/at)
               :gap      "10px"
               :align    :center
               :children [[rc/single-dropdown
                          :src         (rc/at)
                          :choices     demos
                           :model       selected-country-id
                          :title?      true
                          :placeholder "Choose a language"
                          :width       "300px"
                          :max-height  "400px"
                          :filter-box? false
                           :on-change   #(reset! selected-country-id %)]]]]])))
(defn grouping-demo
  []
  (let [selected-country-id (reagent/atom nil)]
    (fn []
      [rc/v-box
       :src      (rc/at)
       :gap      "10px"
       :children [[rc/h-box
                   :src      (rc/at)
                   :gap      "10px"
                   :align    :center
                   :children [[rc/single-dropdown
                               :src         (rc/at)
                               :choices     languges
                               :model       selected-country-id
                               :title?      true
                               :placeholder "Choose a language"
                               :width       "300px"
                               :max-height  "400px"
                               :filter-box? false
                               :on-change   #(reset! selected-country-id %)]]]]])))

(def data (r/atom {:choices [{:id :first :label "first selection"}
                             {:id :second :label "second selection"}
                             {:id :third :label "third selection"}]
                   :selected :first}))
(def config {:label "Dropdown label"})
(def style {:width "300px"})
(defn example []
  (acu/demo
    "Dropdown"
    [layout/centered {:extra-classes :width-50}
     [dropdown/dropdown
      :data data
      :config config
      :style style]]))
