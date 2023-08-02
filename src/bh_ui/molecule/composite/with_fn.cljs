(ns bh-ui.molecule.composite.with-fn
  (:require [bh-ui.utils.example-data :as example-data]
            [re-frame.core :as re-frame]
            [day8.re-frame.tracing :refer-macros [fn-traced]]
            [taoensso.timbre :as log]))


(log/info "bh-ui.molecule.composite.with-fn")


(def sample-data example-data/meta-tabular-data)


(def source-code '{})


(defn compute-new-data [{:keys [data computed sub-name]}]
  ;(log/info "compute-new-data (a)" sub-name "//" data "//" computed)

  (re-frame/reg-sub
    (first sub-name)
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
          (assoc {} :metadata metadata :data)))))

  ;(log/info "compute-new-data (reg-event-fx)" (first sub-name)
  ;  "//" data)

  ; TODO: move this reg-event-fx into a utility namespace, so :source/fn implementations don't need
  ;       to know the details (which they then risk getting wrong)
  ;
  (re-frame/reg-event-fx
    (first sub-name)
    (fn-traced [_ updates]
      ;(log/info "compute-new-data (b)" (first sub-name)
      ;  "//" data
      ;  "//" (drop 1 updates)
      ;  "//" [data updates]
      ;  "//" (apply conj data (drop 1 updates)))
      {:dispatch (apply conj data (drop 1 updates))})))


(re-frame/dispatch-sync
  [:register-meta
   {:with-fn/compute-new-data {:function compute-new-data
                               :ports    {:data :port/sink}}}])


(def ui-definition
  {:mol/components  {":ui/pie-chart"   {:atm/role    :ui/component :atm/kind :rechart/colored-pie
                                        :atm/config-data {}}
                     ":ui/line-chart"  {:atm/role    :ui/component :atm/kind :rechart/line
                                        :atm/config-data {}}
                     ":topic/data"     {:atm/role :source/local :atm/kind :topic/data :atm/default-data sample-data}
                     ":topic/computed" {:atm/role :source/local :atm/kind :topic/computed}

                     ":fn/data-fn"     {:atm/role :source/fn :atm/kind :with-fn/compute-new-data}}

   :mol/links       {":topic/data"     {:data {":ui/line-chart" :data
                                               ":fn/data-fn"    :data}}
                     ":fn/data-fn"     {:computed {":topic/computed" :data}}
                     ":topic/computed" {:data {":ui/pie-chart" :data}}}

   :mol/grid-layout [{:i ":ui/line-chart" :x 0 :y 0 :w 10 :h 11 :static true}
                     {:i ":ui/pie-chart" :x 10 :y 0 :w 10 :h 11 :static true}]})



; enhance updates to "data" (even is what you subscribe to is really a :source/fn
(comment
  (re-frame/dispatch [:chart-with-fn.widget.blackboard.with-fn.compute-new-data
                      9999999 [:data 3 :amt]])

  (re-frame/dispatch [:chart-with-fn.widget.blackboard.topic.data "new-data"])

  (->> @re-frame.db/app-db
    :containers
    :chart-with-fn.widget
    :blackboard)


  ())


