(ns bh-ui.atom.data-transformation
  (:require [bh-ui.utils.example-data :as ex-data]))



(defn tabular->x-y [tabular-data x-name]
  (->> tabular-data
    (map-indexed (fn [idx-d d]
                   (map (fn [[k v]]
                          {:x idx-d :y v
                           :group-id k :label (x-name d)})
                     (dissoc d x-name))))
    (apply concat)
    (map #(dissoc % :x))
    (group-by :group-id)
    vals))


(defn meta-tabular->x-y [mt-data]
  (let [x-name (get-in mt-data [:metadata :id])]
    (tabular->x-y (:data mt-data) x-name)))



; tabular->x-y
(comment
  ex-data/tabular-data

  (-> ex-data/tabular-data first first first)

  (for [d ex-data/tabular-data
        fd (dissoc d :name)
        val-d (vals fd)]

    {:x (:name d) :y val-d})

  (map (fn [d]
         (map (fn [[k v]]
                {:x (:name d) :y v})
           (dissoc d :name)))
    ex-data/tabular-data)

  (->> ex-data/tabular-data
    (map-indexed (fn [idx-d d]
                   (map-indexed (fn [idx-k [k v]]
                                  {:x idx-d :y v
                                   :group-id k :label (:name d)})
                     (dissoc d :name))))
    (apply concat)
    (map #(dissoc % :x))
    (group-by :group-id)
    vals)

  (tabular->x-y ex-data/tabular-data :name)

  ())


; meta-tabular->x-y
(comment
  ex-data/meta-tabular-data

  (get-in ex-data/meta-tabular-data [:metadata :id])


  (meta-tabular->x-y ex-data/meta-tabular-data)
  ())


