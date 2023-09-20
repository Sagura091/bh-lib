(ns demo.catalog.molecule.example.composite.v-scroll-pane-children
  (:require [bh-ui.core :as bh]
            [re-com.core :as rc]
            [re-frame.core :as re-frame]
            [reagent.core :as r]
            [taoensso.timbre :as log]
            [woolybear.ad.catalog.utils :as acu]
            [woolybear.ad.layout :as layout]))


(log/info "demo.catalog.molecule.example.composite.v-scroll-pane-children")


(def source-code "")
(def ui-definition {:mol/components  {"bar-chart"  {:atm/role :ui/component :atm/kind :rechart/bar}
                                      "line-chart" {:atm/role :ui/component :atm/kind :rechart/line}
                                      "bar"        {:atm/role  :ui/container :atm/kind :rc/box :atm/child "bar-chart"
                                                    :atm/style {:border "1px solid" :width "600px" :height "250px"}}
                                      "line"       {:atm/role  :ui/container :atm/kind :rc/box :atm/child "line-chart"
                                                    :atm/style {:border "1px solid" :width "600px" :height "250px"}}
                                      "v-scroll"   {:atm/role  :ui/container :atm/kind :rc/v-scroll
                                                    :atm/label "Multiple Views" :atm/children ["bar" "line"]}
                                      "topic/data" {:atm/label "Combined Charts" :atm/role :source/local :atm/kind :source/local
                                                    :atm/default-data bh/area-chart-sample-data}
                                      "carousel"   {:atm/role           :ui/container :atm/kind :bhui/carousel
                                                    :atm/label          "Carousel" :atm/children ["bar" "line"]
                                                    :atm/default-config {:showIndicators true :showThumbs true
                                                                         :auto-play      true :interval 2000
                                                                         :infiniteLoop   true}}}
                    :mol/links       {"topic/data" {:data {"bar-chart"  :data
                                                           "line-chart" :data}}}
                    :mol/grid-layout [{:i "v-scroll" :x 0 :y 0 :w 10 :h 11 :static true}
                                      {:i "carousel" :x 10 :y 0 :w 10 :h 11 :static true}]})


(defn example []
  (let [container-id "v-scroll-with-children"
        component-id (bh/utils-path->keyword container-id "molecule")]
    (fn []
      (acu/demo "Containers (Vertical Scroll & Carousel) with Child Charts"
        "The goal is to support atoms which can have 'children', i.e., other atoms
that are visually contained _within_ the outer atom. In this example, we use the v-scroller (re-com) and
the carousel (based upon react-responsive-carousel)."
        [layout/frame
         [:div.molecule-content
          [bh/grid-container
           :data (r/atom ui-definition)
           :component-id component-id
           :resizable true
           :tools true]]]

        source-code))))


(def data-one {:title    "Targets"
               :c-o-c    [{:step      :generated
                           :by        "demo.catalog.atom.example.experimental.react-table"
                           :version   "generated"
                           :at        "dummy-date"
                           :signature "dummy-uuid"}]
               :metadata {:title  "Targets"
                          :type   :tabular
                          :id     :AoI
                          :fields {:AoI :string :Symbol :string :include :boolean}}

               :data     [{:Symbol "#FFFF00" :include false :AoI "Fire-prst-001"}
                          {:Symbol "#00FFFF" :include false :AoI "Ft-202210-0010"}
                          {:Symbol "#0000FF" :include false :AoI "Ft-202210-0011"}
                          {:Symbol "#FFA500" :include false :AoI "Ft-202210-0012"}
                          {:Symbol "#808080" :include false :AoI "Ft-202210-0013"}
                          {:Symbol "#6495ED" :include false :AoI "Ft-202210-0014"}
                          {:Symbol "#008B8B" :include false :AoI "Ft-202210-0015"}
                          {:Symbol "#DAA520" :include false :AoI "Ft-202210-0001"}
                          {:Symbol "#00BFFF" :include false :AoI "Ft-202210-0002"}
                          {:Symbol "#8FBC8F" :include false :AoI "Ft-202210-0003"}
                          {:Symbol "#9400D3" :include false :AoI "Ft-202210-0004"}]})
(def data-two {:title    "Targets"
               :c-o-c    [{:step      :generated
                           :by        "demo.catalog.atom.example.experimental.react-table"
                           :version   "generated"
                           :at        "dummy-date"
                           :signature "dummy-uuid"}]
               :metadata {:title  "Targets"
                          :type   :tabular
                          :id     :AoI
                          :fields {:AoI :string :Symbol :string :include :boolean}}

               :data     [{:Symbol "#FFFF00" :include false :AoI "Alpha"}
                          {:Symbol "#00FFFF" :include false :AoI "Bravo"}
                          {:Symbol "#0000FF" :include false :AoI "Charlie"}]})

(def def-2 {:mol/components  {"table-one" {:atm/role           :ui/component :atm/kind :react-table/table
                                           :atm/default-config demo.catalog.atom.example.experimental.react-table/data-config}
                              "table-two" {:atm/role           :ui/component :atm/kind :react-table/table
                                           :atm/default-config demo.catalog.atom.example.experimental.react-table/data-config}
                              "v-scroll"  {:atm/role  :ui/container :atm/kind :rc/v-scroll
                                           :atm/label "Multiple Views" :atm/children ["table-one" "table-two"]}
                              "data/one"  {:atm/role         :source/local :atm/kind :data/one
                                           :atm/default-data data-one}
                              "data/two"  {:atm/role         :source/local :atm/kind :data/one
                                           :atm/default-data data-two}}
            :mol/links       {"data/one" {:data {"table-one" :data}}
                              "data/two" {:data {"table-two" :data}}}
            :mol/grid-layout [{:i "v-scroll" :x 0 :y 0 :w 10 :h 11 :static true}]})


(defn example-2 []
  (let [container-id "v-scroll-with-table-children"
        component-id (bh/utils-path->keyword container-id "molecule")]
    (fn []
      (acu/demo "Vertical Scroll with Child Tables"
        "This example is ***IN PROGRESS***, and may not be working yet.

The goal is to support atoms which can have 'children', i.e., other atoms
that are visually contained _within_ the outer atom. In this example, we use the v-scroller (re-com) atom."
        [layout/frame
         [:div.molecule-content
          [bh/grid-container
           :data (r/atom def-2)
           :component-id component-id
           :resizable true
           :tools true]]]

        source-code))))
