(ns demo.catalog.molecule.example.composite.source-fn.model-3d
  (:require [re-frame.core :as re-frame]
            [day8.re-frame.tracing :refer-macros [fn-traced]]
            [demo.catalog.molecule.example.composite.source-fn.support :as support]))


(defn- fn-3d-model* [entities models]
  (->> entities
    (map (fn [{:keys [name orbit/position orbit/ephemeris] :as entity}]
           (let [m (-> models (get name))
                 [_ [lat lon alt]] (->> position (filter #(= 0 (first %))) first)
                 shape {:shape        :shape/model
                        :id           name
                        :model-folder "data/models"
                        :position     [lat lon (support/->km alt)]
                        :url          (:model m)
                        :scale        (:scale m)}]
             (if (:shapes entity)
               (update entity :shapes conj shape)
               (assoc entity :shapes [shape])))))
    vec))


(defn fn-3d-model
  "adds :shape/model data to each entities"
  [& {:keys [entities models sub-name]}]

  (condp = [entities models]
    [entities models] (re-frame/reg-sub
                        (first sub-name)
                        :<- entities
                        :<- models
                        (fn [[s m] _]
                          (if (empty? s)
                            s
                            (fn-3d-model* s m))))
    [entities nil] (re-frame/reg-sub
                     (first sub-name)
                     :<- entities
                     (fn [e _] e))

    [nil models] (re-frame/reg-sub
                   (first sub-name)
                   :<- models
                   (fn [_ _] []))

    [nil nil] (re-frame/reg-sub
                (first sub-name)
                (fn [_ _] [])))

  (support/make-handler entities sub-name))


(re-frame/dispatch-sync
  [:register-meta {:fn/add-3d-model {:function fn-3d-model
                                     :ports    {:entities :port/source-sink
                                                :models   :port/sink}}}])




