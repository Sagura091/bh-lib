(ns bh-ui.atom.resium.globe
  (:require ["resium" :refer (Viewer Globe Clock)]
            ["cesium" :refer (Cartesian3 Ion JulianDate)]
            [bh-ui.atom.resium.shape :as s]
            [bh-ui.utils.bounding-box :as bound]
            [bh-ui.utils.helpers :as h]
            [cljs-time.coerce :as coerce]
            [cljs-time.core :as cljs-time]
            [re-frame.core :as rf]
            [taoensso.timbre :as log]))


(log/info "bh-ui.atom.resium.globe")


(def alt 1000e3)


(def sample-data [
                  {:layer-id "misc"
                   :z        10
                   :shapes   [{:shape      :shape/polygon :id "square"
                               :locations  [[30.0 -130.0] [30.0 -100.0]
                                            [0.0 -100.0] [0.0 -130.0]]
                               :fill-color [1 0 0 0.3] :outline-color [1 0 0 1] :width 2}
                              {:shape      :shape/polygon :id "5-sided"
                               :locations  [[37 -115.0] [32.0 -115.0] [33.0 -107.0]
                                            [31.0 -102.0] [35.0 -102.0] [37.0 -115.0]]
                               :fill-color [1 0 0 0.6] :outline-color [1 0 0 1] :width 2}
                              {:shape         :shape/polyline :id "line1" :locations [[35 -75] [35 -125]]
                               :outline-color [1 1 0 1.0] :width 5}
                              {:shape      :shape/circle :id "circle"
                               :location   [28.538336 -81.379234] :radius 1000000
                               :fill-color [0 1 0 0.5] :outline-color [1 1 1 1] :width 2 :height 2}
                              {:shape         :shape/polyline :id "line2" :locations [[22 -55] [45 -105] [36 -125.7]]
                               :outline-color [1 0.5 0.78 1.0] :width 5}
                              {:shape      :shape/label :id "orlando" :location [28.538336 -81.379234] :label "Orlando"
                               :fill-color [1 0.9 0.0 1.0] :outline-color [1 0.9 0.0 1.0] :width 1}]}

                  {:layer-id "polar-sat-1"
                   :z        100
                   :shapes   [{:shape     :shape/path :id "polar-sat-1-orbit"
                               :positions [[90 -100 alt] [0 -90 alt] [-90 -80 alt] [0 90 alt] [90 -80 alt]]
                               :color     [1 1 0 1.0] :width 1 :extrude true}
                              {:shape          :shape/volume :id "polar-sat-1-coverage"
                               :positions      [[40 -90 alt] [30 -100 0] [30 -80 0] [50 -80 0] [50 -100 0]]
                               :faces          [[0 1 2], [0 2 3], [0 3 4], [0 1 4]]
                               :outline        [0, 1, 2, 3, 4, 0, 3, 2, 0, 1, 4]
                               :interior-color [1 1 1 0.5]
                               :outline-color  [0 0 1 1.0]
                               :width          1 :extrude true}
                              {:shape        :shape/model
                               :id           "dataduck"
                               :model-folder "data/models"
                               :position     [40 -90 1000e3]
                               :url          "duck"}]}

                  {:layer-id "images"
                   :z        0
                   :shapes   [{:shape     :shape/image, :id "image-15",
                               :url       "data/a.png",
                               :locations [[22.229767 -93.016231]
                                           [33.344622 -95.433292]
                                           [33.082839 -83.694864]
                                           [22.074653 -82.723547]]}
                              {:shape        :shape/image
                               :id           (h/component-id)
                               :url          "images/lightning/Lightning3png.png"
                               :bounding-box (bound/make-bounding-box 46.076 -105.876 0.5)}
                              {:shape        :shape/image
                               :id           (h/component-id)
                               :url          "images/lightning/Lightning3png.png"
                               :bounding-box (bound/make-bounding-box 45.9087 -104.9876 0.5)}
                              {:shape        :shape/image
                               :id           (h/component-id)
                               :url          "images/lightning/Lightning3png.png"
                               :bounding-box (bound/make-bounding-box -25.0987 -86.09 0.5)}
                              {:shape        :shape/image
                               :id           (h/component-id)
                               :url          "images/lightning/Lightning3png.png"
                               :bounding-box (bound/make-bounding-box -26 -85 0.5)}]}])


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