(ns bh-ui.atom.resium.globe
  (:require ["resium" :refer (Viewer Globe Clock)]
            ["cesium" :refer (Cartesian3 Ion JulianDate)]
            [bh-ui.atom.resium.shape :as s]
            [bh-ui.utils.bounding-box :as bound]
            [bh-ui.utils.helpers :as h]
            [bh-ui.atom.bhui.color-pallet :as pallet]
            [cljs-time.coerce :as coerce]
            [cljs-time.core :as cljs-time]
            [re-frame.core :as rf]
            [taoensso.timbre :as log]))


(log/info "bh-ui.atom.resium.globe")


(defn- unroll-layers [data]
  (let [layer-shapes     (->> data
                           (filter #(:layer-id %))
                           (mapcat :shapes))
        non-layer-shapes (->> data
                           (remove #(:layer-id %)))]
    (into []
      (apply conj layer-shapes non-layer-shapes))))


(defn globe [& {:keys [shapes current-time component-id container-id]}]
  ;(log/info "resium Globe" shapes)

  (set! (.-defaultAccessToken Ion) "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkYWNiMDFiNy1iYzFiLTQ2NDMtYmJlNC0zMjRiNTIzMjM5ODQiLCJpZCI6ODQ1MDAsImlhdCI6MTY0NjMyODY1Mn0.Nax1YEWqQzM_eOqHPhblhU9TO9U42VJn4wCcolAkuhM")

  (let [s (h/resolve-value shapes)
        t (h/resolve-value current-time)]

    ;(log/info "globe OUTER" shapes component-id)
    (fn []
      [:> Viewer {:class "h-w-100pc"}
       ;[:> CameraFlyTo {:destination (s/cartesian3 [40.0 -90.0 210000]) :duration 0}]
       [:> Globe {:enableLighting true}]
       [:> Clock {:currentTime (.fromDate JulianDate (or @t (coerce/to-date (cljs-time/now))))}]
       (into [:<>]
         (doall (map s/make-shape (unroll-layers @s))))])))



(def meta-data {:r/globe {:component globe
                          :ports     {:shapes       :port/sink
                                      :current-time :port/sink}}})


(rf/dispatch-sync [:register-meta meta-data])





(comment
  (map #(:layer-id %) sample-data)

  (->> sample-data
    (filter #(:layer-id %))
    (mapcat :shapes))

  (->> sample-data
    (remove #(:layer-id %)))

  ())



(comment
  (def s (atom sample-data))


  (into [:<>]
    (doall (map s/make-shape @s)))



  ())


(comment
  (def shapes sample-data)

  (s/make-shape (first shapes))

  (.fromDegrees Cartesian3 -90 40 2000000.0)


  [:> Globe
   (into [:<>]
     (doall (map-indexed (fn [idx shape]
                           ^{:keys idx} (make-shape shape))
              shapes)))]

  (def v [:a :b :c])

  (v 0)

  {:a 1 :b 2}

  (defn lister [items]
    [:ul
     (for [item items]
       ^{:key item} [:li "Item " item])])

  (defn lister-user []
    [:div
     "Here is a list:"
     [lister (range 3)]])


  ())