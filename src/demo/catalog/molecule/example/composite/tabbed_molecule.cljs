(ns demo.catalog.molecule.example.composite.tabbed-molecule
  (:require [bh-ui.molecule.grid-container :as grid]
            [bh-ui.utils.helpers :as h]
            [bh-ui.utils :as ui-utils]
            [bh-ui.atom.chart.bar-chart :as bar]
            [woolybear.ad.icons :as icons]
            [reagent.core :as r]
            [re-com.core :as rc]
            [taoensso.timbre :as log]
            [woolybear.ad.catalog.utils :as acu]
            [woolybear.ad.layout :as layout]))

(def tabs-config {:labels ["Bar" "Line"]})

(def chart-data-one (assoc-in bar/sample-data [:metadata :title] "ONE"))
(def chart-data-two (-> bar/sample-data
                      (assoc-in [:metadata :title] "TWO TWO TWO")
                      (assoc :data
                        (for [[i k] (map-indexed vector
                                      (map #(dissoc % :uv :tv :pv :amt)
                                        (:data bar/sample-data)))
                              [j v] (map-indexed vector
                                      (shuffle (map #(dissoc % :name)
                                                 (:data bar/sample-data))))
                              :when (= i j)]
                          (merge k v)))))


(def molecule-def {:mol/components  {"bar-chart"  {:atm/role :ui/component :atm/kind :rechart/bar}
                                     "line-chart" {:atm/role :ui/component :atm/kind :rechart/line}
                                     "bar"        {:atm/role  :ui/component :atm/kind :rc/box :atm/child "bar-chart"
                                                   :atm/style {:border "1px solid" :width "600px" :height "250px"}}
                                     "line"       {:atm/role  :ui/component :atm/kind :rc/box :atm/child "line-chart"
                                                   :atm/style {:border "1px solid" :width "600px" :height "250px"}}
                                     "tabs"       {:atm/role     :ui/component :atm/kind :rc/h-tabs
                                                   :atm/label    "Multiple Views"
                                                   :atm/children ["bar" "line"] :atm/default-config tabs-config}
                                     "data/one"   {:atm/role :source/local :atm/kind :data/one :default bar/sample-data}
                                     "data/two"   {:atm/role :source/local :atm/kind :data/two :default chart-data-two}}
                   :mol/links       {"data/one" {:data {"bar-chart" :data}}
                                     "data/two" {:data {"line-chart" :data}}}
                   :mol/grid-layout [{:i "tabs" :x 0 :y 0 :w 10 :h 11 :static true}]})
(def source-code '[])


(defn example []
  (let [container-id "tabbed-molecule"
        component-id (h/path->keyword container-id "molecule")]
    (fn []
      (acu/demo "Tabbed Molecule"
        "This example provides a 'widget' (collection of UI Components) with multiple 'pages,'
    one in each 'tab'"
        [layout/frame
         [:div.molecule-content
          [grid/component
           :data (r/atom molecule-def)
           :component-id component-id
           :resizable true
           :tools true]]]

        source-code))))



(def molecule2 {:mol/components  {"item-1"   {:atm/role :ui/component :atm/kind :stunt/textarea :atm/label "One"}
                                  "item-2"   {:atm/role :ui/component :atm/kind :stunt/textarea :atm/label "Two"}
                                  "tabs"     {:atm/role     :ui/component :atm/kind :rc/h-tabs
                                              :atm/label    "Multiple Views"
                                              :atm/children ["item-1" "item-2"] :atm/default-config {:labels ["One" "Two"]}}
                                  "data/one" {:atm/role :source/local :atm/kind :data/one :default chart-data-one}
                                  "data/two" {:atm/role :source/local :atm/kind :data/two :default chart-data-two}}
                :mol/links       {"data/one" {:data {"item-1" :data}}
                                  "data/two" {:data {"item-2" :data}}}
                :mol/grid-layout [{:i "tabs" :x 0 :y 0 :w 10 :h 11 :static true}]})


(defn example-2 []
  (let [container-id "tabbed-molecule-2"
        component-id (h/path->keyword container-id "molecule")]
    (fn []
      (acu/demo "Tabbed Molecule"
        "This example provides a 'widget' (collection of UI Components) with multiple 'pages,'
    one in each 'tab'"
        [layout/frame
         [:div.molecule-content
          [grid/component
           :data (r/atom molecule2)
           :component-id component-id
           :resizable true
           :tools true]]]

        source-code))))


(comment
  (:containers @re-frame.db/app-db)


  ())

