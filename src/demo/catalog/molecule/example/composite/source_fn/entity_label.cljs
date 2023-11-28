(ns demo.catalog.molecule.example.composite.source-fn.entity-label
  (:require [re-frame.core :as re-frame]
            [bh-ui.atom.bhui.color-pallet :as pallet]
            [day8.re-frame.tracing :refer-macros [fn-traced]]
            [demo.catalog.molecule.example.composite.source-fn.support :as support]))


(defn- fn-entity-label*
  "add :shape/label information onto all 'entities' (i.e., a hash-map of properties)"
  [entities]

  (->> entities
    (map (fn [{:keys [name color orbit/position] :as entity}]
           (let [[_ [lat lon alt]] (->> position (filter #(= 0 (first %))) first)
                 shape {:shape         :shape/label
                        :id            name
                        :location      [lat lon (support/->km alt)]
                        :label         name
                        :fill-color    (or color (pallet/get-color-name pallet/html-color-names :yellowgreen))
                        :outline-color (or color (pallet/get-color-name pallet/html-color-names :yellowgreen))
                        :width         1}]
             (if (:shapes entity)
               (update entity :shapes conj shape)
               (assoc entity :shapes [shape])))))))


(defn fn-entity-label
  "add :shape/label information onto all 'entities' (i.e., a hash-map of properties)"
  [& {:keys [entities sub-name]}]

  (if entities
    (re-frame/reg-sub
      (first sub-name)
      :<- entities
      (fn [e _]
        (if (empty? e)
          e
          (fn-entity-label* e))))

    (re-frame/reg-sub
      (first sub-name)
      (fn [_ _]
        [])))

  (support/make-handler entities sub-name))


(re-frame/dispatch-sync
  [:register-meta {:fn/fn-orbital-path {:function fn-entity-label
                                        :ports    {:entities :port/source-sink}}}])


