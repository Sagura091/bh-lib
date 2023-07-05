(ns demo.catalog.molecule.example.composite.v-scroll-pane-children
  (:require [bh-ui.molecule.grid-container :as grid]
            [bh-ui.atom.chart.area-chart :as chart]
            [bh-ui.utils :as ui-utils]
            [bh-ui.utils.helpers :as h]
            [re-com.core :as rc]
            [re-frame.core :as re-frame]
            [reagent.core :as r]
            [taoensso.timbre :as log]
            [woolybear.ad.catalog.utils :as acu]
            [woolybear.ad.layout :as layout]))


(log/info "demo.catalog.molecule.example.composite.v-scroll-pane-children")


(def source-code "")
(def ui-definition {:mol/components  {"bar-chart"  {:atm/role :ui/component :atm/kind :rechart/bar :config-data []}
                                      "line-chart" {:atm/role :ui/component :atm/kind :rechart/line :config-data []}
                                      "v-scroll"   {:atm/role :ui/component :atm/kind :bhui/v-scroll-pane :children ["bar-chart" "line-chart"]}
                                      "data"       {:atm/role :source/local :atm/kind :topic/data :default chart/sample-data}}
                    :mol/links       {"data" {:data {"bar-chart"  :data
                                                     "line-chart" :data}}}
                    :mol/grid-layout [{:i "v-scroll" :x 0 :y 0 :w 10 :h 11 :static true}]})



(defn example []
  (let [container-id "v-scroll-with-children"
        component-id (h/path->keyword container-id "molecule")]
    (fn []
      (acu/demo "Vertical Scroll with Children"
        "This example is ***IN PROGRESS***, and may not be working yet.

The goal is to support atoms which can have 'children', i.e., other atoms
that are visually contained _within_ the outer atom. In this example, we use the v-scroller (woolybear) atom."
        [layout/frame
         [:div.molecule-content
          [grid/component
           :data (r/atom ui-definition)
           :component-id component-id
           :resizable true
           :tools true]]]

        source-code))))
