(ns bh-ui.molecule.composite.simple-multi-chart-2
  (:require [bh-ui.atom.chart.bar-chart :as chart]
            [bh-ui.atom.chart.area-chart-2]
            [bh-ui.utils.color :as color]
            [bh-ui.utils.helpers :as h]
            [taoensso.timbre :as log]
            ["reactflow" :refer (Position)]))


(log/info "bh-ui.molecule.composite.simple-multi-chart-2")


(def sample-data chart/sample-data)
(def default-config-data {:isAnimationActive true
                          :grid              {:include         true
                                              :strokeDasharray {:dash 3 :space 3}
                                              :stroke          :gray}
                          :x-axis            {:include     true
                                              :dataKey     :name
                                              :orientation :bottom
                                              :scale       "auto"}
                          :y-axis            {:include     true
                                              :dataKey     ""
                                              :orientation :left
                                              :scale       "auto"
                                              :interval    "preserveStartEnd"}
                          :tooltip           {:include true}
                          :legend            {:include       true
                                              :layout        :horizontal
                                              :align         :center
                                              :verticalAlign :bottom}
                          :brush             false
                          :uv                {:include true, :fill (color/get-color 0), :stackId "a"}
                          :pv                {:include true, :fill (color/get-color 1), :stackId "a"}
                          :tv                {:include true, :fill (color/get-color 2), :stackId "a"}
                          :amt               {:include true, :fill (color/get-color 3), :stackId "a"}})


(def ui-definition
  {:mol/components  {"area-chart" {:atm/role :ui/component :atm/kind :rechart/area-2}
                     "table"      {:atm/role :ui/component :atm/kind :react-table/table}
                     "data"       {:atm/role :source/local :atm/kind :source/local :atm/default-data sample-data}
                     "config"     {:atm/role :source/local :atm/kind :source/local :atm/default-data default-config-data}}

   :mol/links       {"data"   {:data {"area-chart" :data
                                      "table"      :data}}
                     "config" {:data {"area-chart" :config}}}

   :mol/grid-layout [{:i "table" :x 0 :y 0 :w 10 :h 11 :static true}
                     {:i "area-chart" :x 10 :y 0 :w 10 :h 11 :static true}]})


(def source-code '(let [def {:mol/components  {"area-chart" {:atm/role :ui/component :atm/kind :rechart/area-2}
                                               "table"      {:atm/role :ui/component :atm/kind :react-table/table}
                                               "data"       {:atm/role :source/local :atm/kind :source/local :atm/default-data sample-data}
                                               "config"     {:atm/role :source/local :atm/kind :source/local :atm/default-data default-config-data}}

                             :mol/links       {"data"   {:data {"area-chart" :data
                                                                "table"      :data}}
                                               "config" {:data {"area-chart" :config}}}

                             :mol/grid-layout [{:i "area-chart" :x 0 :y 0 :w 10 :h 11 :static true}
                                               {:i "table" :x 10 :y 0 :w 10 :h 11 :static true}]}]
                    [grid-widget/component
                     :data def
                     :component-id (h/path->keyword container-id "widget")]))

