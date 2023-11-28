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


(def alt 400E3)


(def sample-data [
                  {:layer-id "misc"
                   :z        10
                   :shapes   [{:shape         :shape/polygon :id "square"
                               :locations     [[30.0 -130.0] [30.0 -100.0]
                                               [0.0 -100.0] [0.0 -130.0]]
                               :fill-color    (pallet/get-color-name pallet/html-color-names :red 0.6)
                               :outline-color (pallet/get-color-name pallet/html-color-names :red 1.0)
                               :width         2}
                              {:shape         :shape/polygon :id "5-sided"
                               :locations     [[37 -115.0] [32.0 -115.0] [33.0 -107.0]
                                               [31.0 -102.0] [35.0 -102.0] [37.0 -115.0]]
                               :fill-color    (pallet/get-color-name pallet/html-color-names :red 0.6)
                               :outline-color (pallet/get-color-name pallet/html-color-names :red 1.0)
                               :width         2}
                              {:shape         :shape/polyline :id "line1" :locations [[35 -75] [35 -125]]
                               :outline-color (pallet/get-color-name pallet/html-color-names :yellow)
                               :width         5}
                              {:shape         :shape/circle :id "circle"
                               :location      [28.538336 -81.379234] :radius 1000000
                               :fill-color    (pallet/get-color-name pallet/html-color-names :green 0.5) ; [0 1 0 0.5]
                               :outline-color (pallet/get-color-name pallet/html-color-names :white) ;[1 1 1 1]
                               :width         2 :height 2}
                              {:shape         :shape/polyline :id "line2" :locations [[22 -55] [45 -105] [36 -125.7]]
                               :outline-color (pallet/get-color-name pallet/html-color-names :pink)
                               :width         5}
                              {:shape         :shape/label :id "orlando" :location [28.538336 -81.379234] :label "Orlando"
                               :fill-color    (pallet/get-color-name pallet/html-color-names :yellowgreen)
                               :outline-color (pallet/get-color-name pallet/html-color-names :yellowgreen)
                               :width         1}]}


                  {:layer-id "satellite-flow"
                   :z        100
                   :shapes   [{:shape :shape/model,
                               :id "ISS",
                               :model-folder "data/models",
                               :position [-51.798868074327494 -38.86014467827659 383690.8309445025],
                               :url "iss_2016",
                               :scale 5000}
                              {:shape :shape/path,
                               :id "ISS-orbit",
                               :positions [[-9.402357286319466 -116.70788000403124 372792.20920464286]
                                           [-37.778879768210864 -89.15192248761649 379732.3609414316]
                                           [-51.798868074327494 -38.86014467827659 383690.8309445025]
                                           [-37.44744675285178 11.116437708375255 377880.9021487641]
                                           [-8.965947606506829 38.50494856241348 370033.3140549756]
                                           [21.576749025597785 61.226433383021046 370847.1868300439]
                                           [46.37742474264643 96.21322908164264 377656.3253038876]
                                           [49.009895833301826 153.11036243432363 379332.7082742626]
                                           [26.576757970285037 -167.71336467445724 374178.8721890325]
                                           [-3.6102527856415385 -144.22665206243605 372170.6647535875]
                                           [-32.98496858362801 -118.90107041008206 378276.9599256335]
                                           [-51.247111747568034 -73.51978972142335 383687.4862978484]
                                           [-41.82416195165355 -19.462855144635178 379524.7344887166]
                                           [-14.70373658128768 10.842355193333056 371033.0130330449]],
                               :color [:indianred
                                       "rgba(205, 92, 92, 1)"
                                       [205 92 92 1]
                                       [0.803921568627451 0.3607843137254902 0.3607843137254902 1]
                                       "#CD5C5C"],
                               :width 1,
                               :extrude true}
                              {:shape :shape/model,
                               :id "wgs-f1",
                               :model-folder "data/models",
                               :position [0.030611190449795784 6.0116566183455955 3.578817020302033E7],
                               :url "satellite",
                               :scale 5000}
                              {:shape :shape/path,
                               :id "wgs-f1-orbit",
                               :positions [[0.03222880443215192 6.012083417545063 3.578825877631996E7]
                                           [0.031449812737392516 6.01186740913813 3.578821573750247E7]
                                           [0.030611190449795784 6.0116566183455955 3.578817020302033E7]
                                           [0.029714499182636307 6.011451333646555 3.578812225902632E7]
                                           [0.02876141094785385 6.011251835888756 3.578807199628083E7]
                                           [0.02775370508874856 6.011058393514502 3.578801950998105E7]
                                           [0.026693264957727534 6.0108712637181 3.5787964899578944E7]
                                           [0.02558207439548455 6.010690692792696 3.5787908268590905E7]
                                           [0.024422214018173783 6.010516915244417 3.578784972439993E7]
                                           [0.02321585731950416 6.0103501504284225 3.5787789378050126E7]
                                           [0.021965266680326986 6.01019060704341 3.5787727344038546E7]
                                           [0.020672788784329783 6.010038480562836 3.578766374007946E7]
                                           [0.01934085071332908 6.00989394943943 3.57875986869041E7]
                                           [0.017971955052568996 6.009757182589857 3.57875323080132E7]],
                               :color [:lightcoral
                                       "rgba(240, 128, 128, 1)"
                                       [240 128 128 1]
                                       [0.9411764705882353 0.5019607843137255 0.5019607843137255 1]
                                       "#F08080"],
                               :width 1,
                               :extrude true}
                              {:shape :shape/model,
                               :id "wgs-f6",
                               :model-folder "data/models",
                               :position [-0.008225192334632033 -135.19007357307393 3.5784692275893E7],
                               :url "satellite",
                               :scale 5000}
                              {:shape :shape/path,
                               :id "wgs-f6-orbit",
                               :positions [[-0.010348185648492013 -135.190482617346 3.578448663295045E7]
                                           [-0.009295844801775543 -135.19027196573174 3.578458764633242E7]
                                           [-0.008225192334632033 -135.19007357307393 3.5784692275893E7]
                                           [-0.007138227920021546 -135.1898878573431 3.578480032002732E7]
                                           [-0.0060369835782724006 -135.18971520942088 3.5784911570604056E7]
                                           [-0.004923519933624668 -135.18955599663533 3.5785025813357405E7]
                                           [-0.0037999223436974176 -135.1894105604032 3.5785142828297555E7]
                                           [-0.002668296979106514 -135.18927921475256 3.578526239013185E7]
                                           [-0.0015307668606528324 -135.18916224614986 3.578538426869644E7]
                                           [-3.8946786158271945E-4 -135.18905991588014 3.5785508229396835E7]
                                           [7.534552408613791E-4 -135.1889724546585 3.578563403364878E7]
                                           [0.0018958531169525298 -135.18890006430277 3.578576143936887E7]
                                           [0.0030355754813114065 -135.18884292087458 3.578589020138734E7]
                                           [0.004170475460770711 -135.18880116645514 3.5786020071951225E7]],
                               :color [:salmon
                                       "rgba(250, 128, 114, 1)"
                                       [250 128 114 1]
                                       [0.9803921568627451 0.5019607843137255 0.4470588235294118 1]
                                       "#FA8072"],
                               :width 1,
                               :extrude true}
                              {:shape :shape/model,
                               :id "wgs-f7",
                               :model-folder "data/models",
                               :position [-0.021178167234963186 175.03840814671221 3.5785912351714574E7],
                               :url "satellite",
                               :scale 5000}
                              {:shape :shape/path,
                               :id "wgs-f7-orbit",
                               :positions [[-0.021659275195357992 175.03832940014755 3.578582883472812E7]
                                           [-0.0214388800003371 175.03837126429272 3.578587043406625E7]
                                           [-0.021178167234963186 175.03840814671221 3.5785912351714574E7]
                                           [-0.02087755840739349 175.03844001174434 3.578595450662344E7]
                                           [-0.020537550442349537 175.03846683605454 3.578599681729278E7]
                                           [-0.020158714888656493 175.03848860442457 3.578603920192508E7]
                                           [-0.019741696971550673 175.03850531145255 3.5786081578582086E7]
                                           [-0.019287214504722473 175.03851696240335 3.5786123865341716E7]
                                           [-0.01879605666391207 175.03852357278552 3.578616598045469E7]
                                           [-0.01826908262413959 175.03852516541087 3.578620784250117E7]
                                           [-0.017707220101736632 175.03852177525965 3.578624937054377E7]
                                           [-0.017111463573073957 175.03851344729154 3.578629048429354E7]
                                           [-0.016482872743931364 175.03850023288416 3.5786331104246974E7]
                                           [-0.015822570518802457 175.03848219761167 3.578637115184932E7]],
                               :color [:darksalmon
                                       "rgba(233, 150, 122, 1)"
                                       [233 150 122 1]
                                       [0.9137254901960784 0.5882352941176471 0.47843137254901963 1]
                                       "#E9967A"],
                               :width 1,
                               :extrude true}]}

                  {:layer-id "polar-sat-1"
                   :z        100
                   :shapes   [
                              {:shape     :shape/path :id "polar-sat-1-orbit"
                               :positions [[90 -100 alt] [0 -90 alt] [-90 -80 alt] [0 90 alt] [90 -80 alt]]
                               :color     (pallet/get-color-name pallet/html-color-names :lemonchiffon)
                               :width     1 :extrude true}

                              {:shape          :shape/volume :id "polar-sat-1-coverage"
                               :positions      [[40 -90 alt] [30 -100 0] [30 -80 0] [50 -80 0] [50 -100 0]]
                               :faces          [[0 1 2] [0 2 3] [0 3 4] [0 4 1]]
                               :outline        [0 1 2 3 4 0 3 2 0 1 4]
                               :interior-color (pallet/get-color-name pallet/html-color-names :white 0.3)
                               :outline-color  (pallet/get-color-name pallet/html-color-names :cyan)
                               :width          1 :extrude true}
                              {:shape        :shape/model
                               :id           "dataduck"
                               :model-folder "data/models"
                               :position     [40 -90 alt]
                               :url          "duck"
                               :scale        2000}]}

                  {:layer-id "images"
                   :z        10
                   :shapes   [{:shape     :shape/image :id "image-15"
                               :url       "data/a.png"
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