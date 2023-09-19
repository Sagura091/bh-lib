(ns bh-ui.atom.component-registry
  (:require [re-frame.core :as rf]
            [day8.re-frame.tracing :refer-macros [fn-traced]]
            ["reactflow" :refer (Position)]
            [taoensso.timbre :as log]))


(defn build-inputs [ports]
  (into {}
    (map-indexed (fn [idx [p _]]
                   {p {:label    (str (name p) "-in")
                       :style    {:left (+ 10 (* idx 10)) :background "#555"}
                       :position (.-Top Position)}})
      ports)))


(defn build-outputs [ports]
  (into {}
    (map-indexed (fn [idx [p _]]
                   {p {:label    (str (name p) "-out")
                       :style    {:left (+ 10 (* idx 10)) :background "#999"}
                       :position (.-Bottom Position)}})
      ports)))


(defn- build-handles [ports]
  (->> ports
    (group-by (fn [[_ direction]] direction))
    (map (fn [[direction ports]]
           (condp = direction
             :port/source {:outputs (build-outputs ports)}
             :port/sink {:inputs (build-inputs ports)}
             :port/source-sink {:outputs (build-outputs ports)
                                :inputs  (build-inputs ports)})))
    (into {})))


(rf/reg-event-db
  :register-meta
  (fn-traced [db [_ meta-data]]
    ;(log/info ":register-meta" meta-data)


    ; 1) augment the meta-data
    (let [aug-meta (->> meta-data
                     (map (fn [[k {ports :ports :as comp}]]
                            {k (assoc comp :handles (build-handles ports))}))
                     (into {}))]


      ; 2) add the augmented meta-data to the registry
      (if (:meta-data-registry db)
        (update db :meta-data-registry conj aug-meta)
        (assoc db :meta-data-registry aug-meta)))))


(rf/reg-sub
  :meta-data-registry
  (fn [db _]
    (:meta-data-registry db)))



(defn lookup-component [component-id]
  (get-in @re-frame.db/app-db [:meta-data-registry component-id]))



; logic to add handles to each component's meta-data
(comment

  (do
    (def db {})
    (def meta-data {:stunt/config-panel     {:component "config-panel"
                                             :ports     {:config-data :port/source-sink}}
                    :stunt/selectable-table {:component "selectable-table"
                                             :ports     {:data      :port/source-sink ; out this be {:data-in :port/sink} & {:data-out :port/source}?
                                                         :selection :port/source}}

                    :stunt/globe            {:component "three-d-globe"
                                             :ports     {:layers       :port/sink
                                                         :current-time :port/sink}}

                    :stunt/label            {:component "label"
                                             :ports     {:value :port/sink}}

                    :stunt/slider           {:component "slider"
                                             :ports     {:value :port/source-sink
                                                         :range :port/sink}}})
    (def ports {:config-data :port/source-sink}))


  (->> meta-data
    (map (fn [[k v]]
           {k v})))

  (->> meta-data
    (map (fn [[_ {ports :ports} :as comp]]
           {:p ports :c comp})))


  (->> meta-data
    (map (fn [[k {ports :ports :as comp}]]
           {k (assoc comp :handles (build-handles ports))}))
    (into {}))


  (->> ports
    (group-by (fn [[_ direction]] direction))
    (map (fn [[direction ports]]
           (condp = direction
             :port/source {:outputs (bh-ui.atom.component-registry/build-outputs ports)}
             :port/sink {:inputs (bh-ui.atom.component-registry/build-inputs ports)}
             :port/source-sink {:outputs (bh-ui.atom.component-registry/build-outputs ports)
                                :inputs  (bh-ui.atom.component-registry/build-inputs ports)})))
    (into {}))

  ())


