(ns bh-ui.molecule.composite.with-fn
  (:require [bh-ui.utils.example-data :as example-data]
            [re-frame.core :as re-frame]
            [taoensso.timbre :as log]))


(log/info "bh-ui.molecule.composite.with-fn")


(def sample-data example-data/meta-tabular-data)


(def source-code '{:mol/components  {":ui/pie-chart"   {:atm/role    :ui/component :atm/kind :rechart/colored-pie
                                                        :config-data {}}
                                     ":ui/line-chart"  {:atm/role    :ui/component :atm/kind :rechart/line
                                                        :config-data {}}
                                     ":topic/data"     {:atm/role :source/local :atm/kind :topic/data :default sample-data}
                                     ":topic/computed" {:atm/role :source/local :atm/kind :topic/computed}
                                     ":fn/data-fn"     {:atm/role :source/fn :atm/kind :with-fn/compute-new-data}}
                   :mol/links       {":topic/data"     {:data {":ui/line-chart" :data
                                                               ":fn/data-fn"    :data}}
                                     ":fn/data-fn"     {:computed {":topic/computed" :data}}
                                     ":topic/computed" {:data {":ui/pie-chart" :data}}}
                   :mol/grid-layout [{:i ":ui/line-chart" :x 0 :y 0 :w 10 :h 11 :static true}
                                     {:i ":ui/pie-chart" :x 10 :y 0 :w 10 :h 11 :static true}]})


(defn compute-new-data [{:keys [data computed]}]
  (re-frame/reg-sub
    (first computed)
    :<- data
    (fn [d _]
      (let [m        (:metadata d)
            fields   (-> (:fields m)
                       (dissoc :uv :pv :tv :amt)
                       (assoc :uv*pv :number :tv*amt :number))
            metadata (assoc m :fields fields)]
        (->> d
          :data
          (map (fn [{:keys [uv pv tv amt] :as all}]
                 (-> all
                   (assoc :uv*pv (/ (* uv pv) 1000)
                          :tv*amt (/ (* tv amt) 1000))
                   (dissoc :uv :pv :tv :amt))))
          (assoc {} :metadata metadata :data))))))


(re-frame/dispatch-sync [:register-meta {:with-fn/compute-new-data {:function compute-new-data
                                                                    :ports    {:data :port/sink :computed :port/source}}}])


(def ui-definition
  {:mol/components  {":ui/pie-chart"   {:atm/role    :ui/component :atm/kind :rechart/colored-pie
                                        :config-data {}}
                     ":ui/line-chart"  {:atm/role    :ui/component :atm/kind :rechart/line
                                        :config-data {}}
                     ":topic/data"     {:atm/role :source/local :atm/kind :topic/data :default sample-data}
                     ":topic/computed" {:atm/role :source/local :atm/kind :topic/computed}
                     ":fn/data-fn"     {:atm/role :source/fn :atm/kind :with-fn/compute-new-data}}
   :mol/links       {":topic/data"     {:data {":ui/line-chart" :data
                                               ":fn/data-fn"    :data}}
                     ":fn/data-fn"     {:computed {":topic/computed" :data}}
                     ":topic/computed" {:data {":ui/pie-chart" :data}}}
   :mol/grid-layout [{:i ":ui/line-chart" :x 0 :y 0 :w 10 :h 11 :static true}
                     {:i ":ui/pie-chart" :x 10 :y 0 :w 10 :h 11 :static true}]})

