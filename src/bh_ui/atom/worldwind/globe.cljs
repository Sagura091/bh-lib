(ns bh-ui.atom.worldwind.globe
  (:require ["worldwindjs" :as WorldWind]
            [bh-ui.atom.worldwind.globe.geo-tiff]
            [bh-ui.atom.worldwind.globe.image]
            [bh-ui.atom.worldwind.globe.layer :as layer]
            [bh-ui.atom.worldwind.globe.layer.blue-marble :as blue-marble]
            [bh-ui.atom.worldwind.globe.layer.compass :as compass]
            [bh-ui.atom.worldwind.globe.layer.night :as night]
            [bh-ui.atom.worldwind.globe.layer.star-field :as star-field]
            [bh-ui.atom.worldwind.globe.models]
            [bh-ui.atom.worldwind.globe.path]
            [bh-ui.atom.worldwind.globe.projection :as proj]
            [bh-ui.atom.worldwind.globe.react-support :as rs]
            [bh-ui.atom.worldwind.globe.sector]
            [bh-ui.atom.worldwind.globe.shape :as shape]
            [bh-ui.atom.worldwind.globe.volume]
            [bh-ui.utils.bounding-box :as bound]
            [bh-ui.atom.bhui.color-pallet :as pallet]
            [bh-ui.utils.helpers :as h]
            [cljs-time.coerce :as coerce]
            [cljs-time.core :as cljs-time]
            [re-frame.core :as rf]
            [reagent.core :as r]
            [taoensso.timbre :as log]))


(log/info "bh-ui.atom.worldwind.globe")


(def DEFAULT_BACKGROUND_COLOR "rgb(36,74,101)")
(def alt 1000000)


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

                  {:layer-id "fake-wgs-1"
                   :z        100
                   :shapes   [{:shape        :shape/model
                               :id           "fake-wgs-1"
                               :model-folder "data/models"
                               :position     [0 -75 30000000]
                               :url          "satellite"
                               :scale        5000}
                              {:shape     :shape/path,
                               :id        "fake-wgs-1-orbit",
                               :positions [[0 -75 30000000] [0 15 30000000] [0 105 30000000] [0 -165 30000000] [0 -75 30000000]],
                               :color     (pallet/get-color-name pallet/html-color-names :yellow),
                               :width     1,
                               :extrude   false}]}

                  {:layer-id "fake-wgs-1"
                   :z        100
                   :shapes   [{:shape        :shape/model
                               :id           "fake-wgs-2"
                               :model-folder "data/models"
                               :position     [0 -135 30000000]
                               :url          "satellite"
                               :scale        5000}
                              {:shape     :shape/path,
                               :id        "fake-wgs-2-orbit",
                               :positions [[0 -135 30000000] [0 -45 30000000] [0 45 30000000] [0 135 30000000] [0 -135 30000000]],
                               :color     (pallet/get-color-name pallet/html-color-names :cyan),
                               :width     1,
                               :extrude   false}]}

                  {:layer-id "polar-sat-1"
                   :z        100
                   :shapes   [
                              {:shape     :shape/path :id "polar-sat-1-orbit"
                               :positions [[90 -100 alt] [0 -90 alt] [-90 -80 alt] [0 90 alt] [90 -80 alt]]
                               :color     (pallet/get-color-name pallet/html-color-names :lemonchiffon)
                               :width     1 :extrude false}

                              {:shape          :shape/volume :id "polar-sat-1-coverage"
                               :positions      [[40 -90 alt] [30 -100 0] [30 -80 0] [50 -80 0] [50 -100 0]]
                               :faces          [[0 1 2] [0 2 3] [0 3 4] [0 4 1]]
                               :outline        [0 1 2 3 4 0 3 2 0 1 4]
                               :interior-color (pallet/get-color-name pallet/html-color-names :white 0.3)
                               :outline-color  (pallet/get-color-name pallet/html-color-names :cyan)
                               :width          1
                               :extrude        false}
                              {:shape        :shape/model
                               :id           "dataduck"
                               :model-folder "data/models"
                               :position     [40 -90 1000e3]
                               :url          "duck"
                               :scale        2000}]}

                  {:layer-id "images"
                   :z        0
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

;:url    "https://worldwind.arc.nasa.gov/web/examples/data/black_sea_rgb.tif"
;:url    "data/GOES18-ABI-FD-GEOCOLOR-10848x10848.tif"
;:url    "data/20222351640_GOES18-ABI-FD-GEOCOLOR-10848x10848.jpg"
;:url    "https://cdn.star.nesdis.noaa.gov/GOES18/ABI/FD/GEOCOLOR/20222241400_GOES18-ABI-FD-GEOCOLOR-10848x10848.tif"


(defn- base-layers [globe-id]
  ;(log/info "base-layers" globe-id)
  [
   {:id (str globe-id " Blue Marble") :layer (blue-marble/blue-marble (str globe-id " Blue Marble")) :z 0}
   ;(str globe-id " day-only") (day-only/day-only (str globe-id " day-only"))})
   {:id (str globe-id " Night") :layer (night/night (str globe-id " Night")) :z 1}
   {:id (str globe-id " Compass") :layer (compass/compass (str globe-id " Compass")) :z 1}
   {:id (str globe-id " Star Field") :layer (star-field/star-field (str globe-id " Star Field")) :z 1}])


(defn- globe* [props & children]
  ;(log/info "globe-render" props children)

  (let [state    (atom {:children children})
        dom-node (atom nil)]

    (r/create-class
      {:display-name         (:id props)

       :constructor          (fn [this props children]
                               ;(log/info "constructor" props
                               ;  "////" (r/props this)
                               ;  "////" (r/children this))
                               (swap! state assoc
                                 :wwd ()
                                 :canvasId (or (:id (r/props this)) (str "canvas_" (js/Date.now)))
                                 :id (or (:id (r/props this)) (str "canvas_" (js/Date.now)))
                                 :isValid false
                                 :isDropArmed false
                                 :projection (or (:projection (r/props this)) (nth proj/projections 0))
                                 :layers (r/children this)))

       :component-did-mount  (partial rs/component-did-mount dom-node state)

       :component-did-update (partial rs/component-did-update dom-node state)

       :reagent-render
       (fn [props & children]
         @dom-node
         (let [cursor          (if (:isDropArmed @state) "crosshair" "default")
               backgroundColor (or (:backgroundColor @state) DEFAULT_BACKGROUND_COLOR)]

           [:canvas (merge props {:id  (:canvasId @state)
                                  :ref (fn [el] (reset! dom-node el))})

            "Your browser does not support HTML5 Canvas."]))})))


(def last-layers (atom nil))
(def last-shapes (atom nil))

(defn- globe-inter [& {:keys [shapes layers current-time component-id]}]

  (reset! last-layers layers)
  (reset! last-shapes shapes)

  (let [shape-layers (->> shapes (map layer/make-layer-per-shape) (into []))
        layer-layers (->> layers (map layer/make-layer) (into []))
        all-layer    (concat
                       (base-layers component-id)
                       layer-layers
                       shape-layers)]

    ;(log/info "globe-inter" (map :id all-layer) "//" current-time "//" (count all-layer))

    [globe*
     {:id         component-id
      :time       (coerce/to-date current-time)
      :projection "3D"
      :min-max    :max
      :style      {:background-color :black
                   :border-radius    "3px"
                   :width            "100%"
                   :height           "100%"}}
     all-layer]))


(comment
  (conj [:a :b] [:c :d] [:e :f])
  (merge [:a :b] [:c :d] [:e :f])
  (merge-with conj [:a :b] [:c :d] [:e :f])
  (concat [:a :b] [:c :d] [:e :f])


  (do
    (def component-id "dummy")
    (def shape-layers (->> @last-shapes (map shape/make-shape) (into [])))
    (def layer-layers (->> @last-layers (map layer/make-layer) (into []))))
  (concat
    (base-layers component-id)
    layer-layers)
  ;shape-layers)

  ())


(defn globe [& {:keys [shapes layers current-time component-id container-id]}]

  (let [s (h/resolve-value shapes)
        l (h/resolve-value layers)
        t (h/resolve-value current-time)]

    ;(log/info "globe" shapes "//" current-time "//" @s "//" @t "//" component-id)

    (fn []
      ;(log/info "globe INNER" shapes current-time component-id
      ;  "//" @s)

      [globe-inter
       :shapes @s
       :layers @l
       :current-time (or @t (cljs-time/now))
       :component-id component-id
       :container-id container-id])))


(def meta-data {:ww/globe {:type      :bh-ui
                           :component globe
                           :ports     {:shapes       :port/sink
                                       :current-time :port/sink}}})

(rf/dispatch-sync [:register-meta meta-data])


(comment
  (def component-id "dummy")
  (def shapes sample-data)
  (def children sample-data)


  (shape/make-shape (get shapes 0))
  (->> shapes (map shape/make-shape) (into []))


  (map inc [1 2 3 4 5])
  (filter string? [1 2 3 4 5])
  (reduce + 0 [1 2 3 4 5])
  (reduce conj [:a :b :c] [:d :e :f])

  (group-by :shape sample-data)



  ())


