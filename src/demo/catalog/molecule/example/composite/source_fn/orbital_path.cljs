(ns demo.catalog.molecule.example.composite.source-fn.orbital-path
  (:require [re-frame.core :as re-frame]
            [bh-ui.atom.bhui.color-pallet :as colors]
            [day8.re-frame.tracing :refer-macros [fn-traced]]
            [demo.catalog.molecule.example.composite.source-fn.support :as support]))


(defn- limit-lon [lon]
  (let [lon-r (mod lon 360.0)]
    (cond
      (< 180.0 lon-r) (- lon-r 360.0)
      (<= lon-r -180) (+ lon-r 360.0)
      :else lon-r)))


(defn- next-lon [lon delta]
  (limit-lon (+ lon delta)))


(defn- orbit-positions [positions ephemeris]
  (->> positions
    (map (fn [[_ [lat lon alt]]] [lat lon (support/->km alt)]))
    vec))



(defn- fn-orbital-path* [entities]
  (->> entities
    (map (fn [{:keys [name color orbit/position orbit/ephemeris] :as entity}]
           (update entity :shapes conj {:shape     :shape/path
                                        :id        (str name "-orbit")
                                        :positions (orbit-positions position ephemeris)
                                        :color     (or color (colors/get-color-name
                                                               colors/html-color-names
                                                               :blue))
                                        :width     1
                                        :extrude   true})))
    vec))


(defn fn-orbital-path
  "adds :shape/path data, representing the entity's orbit, to each entity"
  [& {:keys [entities sub-name]}]

  (if entities
    (re-frame/reg-sub
      (first sub-name)
      :<- entities
      (fn [e _]
        (if (empty? e)
          e
          (fn-orbital-path* e))))

    (re-frame/reg-sub
      (first sub-name)
      (fn [_ _]
        [])))

  (support/make-handler entities sub-name))



(re-frame/dispatch-sync
  [:register-meta {:fn/fn-orbital-path {:function fn-orbital-path
                                        :ports    {:entities :port/source-sink}}}])






(comment
  (limit-lon -15)
  (limit-lon -150)
  (limit-lon -250)

  (limit-lon 15)
  (limit-lon 150)
  (limit-lon 250)


  (mod -250 360.0)

  ())


