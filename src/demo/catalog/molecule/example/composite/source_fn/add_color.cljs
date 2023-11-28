(ns demo.catalog.molecule.example.composite.source-fn.add-color
  (:require [bh-ui.atom.bhui.color-pallet :as color]
            [re-frame.core :as re-frame]
            [day8.re-frame.tracing :refer-macros [fn-traced]]
            [demo.catalog.molecule.example.composite.source-fn.support :as support]
            [taoensso.timbre :as log]))


(defn- fn-add-color*
  "apply color information to all 'entities' (i.e., a hash-map of properties)"
  [entities next-color]

  (->> entities
    (map (fn [e]
           (if (:color e)
             e
             (assoc e :color (color/next-color next-color color/html-color-names)))))
    vec))


(defn fn-add-color [entities sub-name]
  (let [next-color (atom -1)]

    (if entities
      (re-frame/reg-sub
        (first sub-name)
        :<- entities
        (fn [e _]
          (if (empty? e)
            e
            (fn-add-color* entities next-color))))

      (re-frame/reg-sub
        (first sub-name)
        (fn [_ _]
          [])))

    (support/make-handler entities sub-name)))


(re-frame/dispatch-sync
  [:register-meta {:fn/add-color {:function fn-add-color
                                  :ports    {:entities :port/source-sink}}}])



(comment
  (def entities [{:id "e-1" :color [:yellow "rgba(255, 255, 0, 0.3)" [255 255 0 0.3] [1 1 0 0.2] "#FFFF00"]}
                 {:id "e-2"}
                 {:id "e-3"}
                 {:id "e-4" :color [:cyan "rgba(0, 255, 255, 0.3)" [0 255 255 0.3] [0 1 1 0.3] "#00FFFF"]}])


  (fn-add-color* [{:id "e-1"}
                  {:id "e-2"}
                  {:id "e-3"}
                  {:id "e-4"}] (atom -1))

  (fn-add-color* entities (atom 2))

  (fn-add-color* (conj entities {:id "e-5"})
    (atom 2))




  ())


(comment

  (do
    (require '[demo.catalog.molecule.example.composite.data.satellites :as sat])
    (require '[demo.catalog.molecule.example.composite.data.satellite-details :as d])

    (let [next-color (atom -1)]
      (-> (sat/satellites)
        (fn-add-color* next-color)
        (d/fn))))


  ())
