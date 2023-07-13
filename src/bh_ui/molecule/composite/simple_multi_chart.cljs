(ns bh-ui.molecule.composite.simple-multi-chart
  (:require [bh-ui.atom.chart.bar-chart :as chart]
            [bh-ui.utils.color :as color]
            [bh-ui.utils.helpers :as h]
            [bh-ui.utils.locals :as l]
            [re-frame.core :as re-frame]
            [taoensso.timbre :as log]))


(log/info "bh-ui.molecule.composite.simple-multi-chart")


(def sample-data chart/sample-data)


(def ui-definition
  {:mol/components  {":ui/bar-chart"  {:atm/role    :ui/component :atm/kind :rechart/bar
                                       :atm/label "Revenue by Org" :atm/default-config []}
                     ":ui/line-chart" {:atm/role    :ui/component :atm/kind :rechart/line
                                       :atm/default-config []}
                     ":topic/data"    {:atm/role :source/local :atm/kind :topic/data :default sample-data}}
   :mol/links       {":topic/data" {:data {":ui/bar-chart"  :data
                                           ":ui/line-chart" :data}}}
   :mol/grid-layout [{:i ":ui/line-chart" :x 0 :y 0 :w 10 :h 11 :static true}
                     {:i ":ui/bar-chart" :x 10 :y 0 :w 10 :h 11 :static true}]})


(def source-code '(let [def {:mol/components  {":ui/bar-chart"  {:atm/role    :ui/component :atm/kind :rechart/bar
                                                                 :atm/label "BAR CHART!!!" :atm/default-config []}
                                               ":ui/line-chart" {:atm/role    :ui/component :atm/kind :rechart/line
                                                                 :atm/default-config []}
                                               ":topic/data"    {:atm/role :source/local :atm/kind :topic/data :default sample-data}}
                             :mol/links       {":topic/data" {:data {":ui/bar-chart"  :data
                                                                     ":ui/line-chart" :data}}}
                             :mol/grid-layout [{:i ":ui/line-chart" :x 0 :y 0 :w 10 :h 11 :static true}
                                               {:i ":ui/bar-chart" :x 10 :y 0 :w 10 :h 11 :static true}]}]
                    [grid-widget/component
                     :data def
                     :component-id (h/path->keyword container-id "widget")]))

