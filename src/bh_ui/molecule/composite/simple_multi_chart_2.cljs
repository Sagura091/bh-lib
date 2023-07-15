(ns bh-ui.molecule.composite.simple-multi-chart-2
  (:require [bh-ui.atom.chart.bar-chart :as chart]
            [bh-ui.utils.color :as color]
            [bh-ui.utils.helpers :as h]
            [bh-ui.utils.locals :as l]
            [re-frame.core :as re-frame]
            [taoensso.timbre :as log]
            ["reactflow" :refer (Position)]))


(log/info "bh-ui.molecule.composite.simple-multi-chart-2")


(def sample-data chart/sample-data)


(def default-config-data {:brush true
                          :uv    {:include true, :fill "#ff0000", :stackId "b"}
                          :pv    {:include true, :fill "#228B22", :stackId "b"}
                          :tv    {:include true, :fill "#ADD8E6", :stackId "a"}
                          :amt   {:include true, :fill "#800000", :stackId "a"}})


(defn- compute-data-config [data]
  (merge {:brush false}
    (->> (get-in data [:metadata :fields])
      (filter (fn [[k v]] (= :number v)))
      keys
      (map-indexed (fn [idx a]
                     {a {:include true
                         :stroke  (color/get-color idx)
                         :fill    (color/get-color idx)
                         :stackId ""}}))
      (into {}))))


(defn fn-make-config [{:keys [data config-data container-id] :as params}]
  ;(log/info "fn-make-config" config-data)
  (re-frame/reg-sub
    (first config-data)
    :<- data
    (fn [d _]
      (doall
        ; TODO: need a way to have :topic.config passed in somehow...
        ;       - does the new :source/fn approach eliminate this issue?
        (l/update-local-path-values container-id [:blackboard :topic.config] (compute-data-config d))))))


(re-frame/dispatch-sync [:register-meta {:simple-multi-chart-2/fn-make-config {:function fn-make-config
                                                                               :ports {:data :port/sink :config-data :port/source-sink}
                                                                               :handles {:inputs [{:label "data-in" :style {:background "#555"} :position (.-Left Position)}]
                                                                                         :outputs [{:label "data-out" :style {:background "#999"} :position (.-Right Position)}]}}}])


(def ui-definition
  {:mol/components  {":ui/bar-chart"   {:atm/role :ui/component :atm/kind :rechart/bar}
                     ":ui/line-chart"  {:atm/role :ui/component :atm/kind :rechart/line}
                     ":topic/data"     {:atm/role :source/local :atm/kind :topic/data :default sample-data}
                     ":topic/config"   {:atm/role :source/local :atm/kind :topic/config :default {}}
                     ":fn/make-config" {:atm/role :source/fn :atm/kind :simple-multi-chart-2/fn-make-config}}
   :mol/links       {":topic/data"     {:data {":ui/bar-chart"   :data
                                               ":ui/line-chart"  :data
                                               ":fn/make-config" :data}}
                     ":topic/config"   {:data {":ui/line-chart" :config-data
                                               ":ui/bar-chart"  :config-data}}
                     ":fn/make-config" {:config-data {":topic/config" :data}}}

   :mol/grid-layout [{:i ":ui/line-chart" :x 0 :y 0 :w 10 :h 11 :static true}
                     {:i ":ui/bar-chart" :x 10 :y 0 :w 10 :h 11 :static true}]})


(def source-code '(let [def {:mol/components  {":ui/bar-chart"   {:atm/role :ui/component :atm/kind :rechart/bar}
                                               ":ui/line-chart"  {:atm/role :ui/component :atm/kind :rechart/line}
                                               ":topic/data"     {:atm/role :source/local :atm/kind :topic/data :default sample-data}
                                               ":topic/config"   {:atm/role :source/local :atm/kind :topic/config :default {}}
                                               ":fn/make-config" {:atm/role :source/fn :atm/kind :simple-multi-chart-2/fn-make-config}}
                             :mol/links       {":topic/data"     {:data {":ui/bar-chart"   :data
                                                                         ":ui/line-chart"  :data
                                                                         ":fn/make-config" :data}}
                                               ":topic/config"   {:data {":ui/line-chart" :config-data
                                                                         ":ui/bar-chart"  :config-data}}
                                               ":fn/make-config" {:config-data {":topic/config" :data}}}

                             :mol/grid-layout [{:i ":ui/line-chart" :x 0 :y 0 :w 10 :h 11 :static true}
                                               {:i ":ui/bar-chart" :x 10 :y 0 :w 10 :h 11 :static true}]}]
                    [grid-widget/component
                     :data def
                     :component-id (h/path->keyword container-id "widget")]))

