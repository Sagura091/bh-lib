(ns bh-ui.atom.resium.globe
  (:require ["resium" :refer (Viewer Globe Clock CzmlDataSource)]
            ["cesium" :as Cesium :refer (Cartesian3 Ion JulianDate dataSource CzmlDataSource DataSourceCollection Timeline)]
            [bh-ui.atom.resium.shape :as s]
            [bh-ui.utils.bounding-box :as bound]
            [bh-ui.utils.helpers :as h]
            [bh-ui.atom.bhui.color-pallet :as pallet]
            [cljs-time.coerce :as coerce]
            [cljs-time.core :as cljs-time]
            [re-frame.core :as rf]
            [taoensso.timbre :as log]
            [demo.catalog.atom.example.misc.data.czml :refer [czml-json]]))


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


;; Resium globe implementation to handle CZML input file
;; https://sandcastle.cesium.com/?src=CZML.html&label=All
(defn czmlglobe [& {:keys [czml]}]
  ;(log/info "resium Globe" shapes)

  (set! (.-defaultAccessToken Ion) "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkYWNiMDFiNy1iYzFiLTQ2NDMtYmJlNC0zMjRiNTIzMjM5ODQiLCJpZCI6ODQ1MDAsImlhdCI6MTY0NjMyODY1Mn0.Nax1YEWqQzM_eOqHPhblhU9TO9U42VJn4wCcolAkuhM")

  ;(log/info "globe OUTER CZML" czml)

  (let [dataSourcePromise (.load (.-CzmlDataSource Cesium) (clj->js czml-json))
        collector (new DataSourceCollection)
        promise (.add collector dataSourcePromise)] ;;resolve (.resolve js/Promise promise)

    ;(log/info "CZML Globe:  " promise)

    (fn []
        [:> Viewer {:class "h-w-100pc"
                    :dataSources collector
                    :timeline false}  ;; timeline doesnt sync up with clock time automatically so forget it
         [:> Clock {:currentTime (.fromDate JulianDate (coerce/to-date (cljs-time/date-time 2012 03 15 10 00)))
                    :startTime (.fromDate JulianDate (coerce/to-date (cljs-time/date-time 2012 03 15 10 00)))
                    :stopTime (.fromDate JulianDate (coerce/to-date (cljs-time/date-time 2012 03 16 10 00)))
                    :multiplier 60
                    :canAnimate true
                    :shouldAnimate true}]])))



(def meta-data {:r/globe {:component globe
                          :ports     {:shapes       :port/sink
                                      :current-time :port/sink}}})


(rf/dispatch-sync [:register-meta meta-data])


;; figure out CZML globe display
(comment

  (.load CzmlDataSource (clj->js czml-json))

  (def viewer (new (.-Viewer Cesium) "globe"))

  (def dataSourcePromise (.load (.-CzmlDataSource Cesium) (clj->js czml-json)))

  (.add (.-dataSources viewer) dataSourcePromise)

  collector (.add (new DataSourceCollection) dataSourcePromise)

  (let [dataSourcePromise (.load (.-CzmlDataSource Cesium) (clj->js czml-json))
        collector (new DataSourceCollection)
        promise (.add collector dataSourcePromise)
        resolve (.resolve js/Promise promise)]

    [:> Viewer {:class "h-w-100pc"
                :dataSources collector}]
    [:> CzmlDataSource {:data (clj->js czml)}]
    ;; this CzmlDataSource component from Resium might work, but got it working
    ;; with the above load datasource to the Viewer so not touching it


    )


  ())




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