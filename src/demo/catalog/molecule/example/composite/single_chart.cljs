(ns demo.catalog.molecule.example.composite.single-chart
  (:require [woolybear.ad.catalog.utils :as acu]
            [bh-ui.core :as bh]
            [reagent.core :as r]
            [woolybear.ad.layout :as layout]))


(defn generate-chart-data [num-entries max-value]
  (let [num-entries num-entries
        max-value   max-value]
    (vec (repeatedly num-entries
           (fn []
             {:x (rand-int (inc max-value))
              :y (rand-int (inc max-value))})))))


(def source-code '{:mol/components  {"box"   {:atm/role  :ui/component :atm/kind :rc/box :atm/child "chart"
                                              :atm/style {:border "1px solid" :width "600px" :height "250px"}}
                                     "data"  {:atm/role :source/local :atm/kind :topic/data :atm/default-data data-2}

                                     ;"chart" {:atm/role :ui/component :atm/kind :rechart/line}
                                     ;"chart" {:atm/role :ui/component :atm/kind :rechart/bar}
                                     ;"chart" {:atm/role :ui/component :atm/kind :rechart/area}
                                     "chart" {:atm/role :ui/component :atm/kind :fc/line}}


                   :mol/links       {"data" {:data {"chart" :data}}}

                   :mol/grid-layout [{:i "box" :x 0 :y 0 :w 10 :h 10 :static true}]})

(def data bh/example-meta-tabular-data)
(def data-2 [(sort-by :x (generate-chart-data 100 100))
             (sort-by :x (generate-chart-data 100 100))
             (sort-by :x (generate-chart-data 100 100))])


(def mol {:mol/components  {"box"   {:atm/role  :ui/component :atm/kind :rc/box :atm/child "chart"
                                     :atm/style {:border "1px solid" :width "600px" :height "250px"}}
                            "data"  {:atm/role :source/local :atm/kind :topic/data :atm/default-data data}

                            ;"chart" {:atm/role :ui/component :atm/kind :rechart/line}}
                            ;"chart" {:atm/role :ui/component :atm/kind :rechart/bar}}
                            ;"chart" {:atm/role :ui/component :atm/kind :rechart/area}
                            "chart" {:atm/role :ui/component :atm/kind :fc/line
                                     :atm/default-config {:title "example data"
                                                          :x-axis-title "MHz"
                                                          :y-axis-title "dBm"}}}

          :mol/links       {"data" {:data {"chart" :data}}}

          :mol/grid-layout [{:i "box" :x 0 :y 0 :w 10 :h 10 :static true}]})


(defn example []
  (let [container-id "single-chart-molecule"
        component-id (bh/utils-path->keyword container-id "molecule")]
    (fn []
      (acu/demo "Molecule with a Single Chart"
        "A means to experiment putting chart atoms into a very simple molecule as a means to
         be sure the atom is built correctly for use with the Molecule-DSL"

        [layout/frame
         [:div.molecule-content
          [bh/grid-container
           :data (r/atom mol)
           :component-id component-id
           :resizable true
           :tools true]]]

        source-code))))