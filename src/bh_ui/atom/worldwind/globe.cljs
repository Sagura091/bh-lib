(ns bh-ui.atom.worldwind.globe
  (:require ["worldwindjs" :as WorldWind]
            [bh-ui.atom.worldwind.globe.geo-tiff]
            [bh-ui.atom.worldwind.globe.image]
            [bh-ui.atom.worldwind.globe.layer.blue-marble :as blue-marble]
            [bh-ui.atom.worldwind.globe.layer.night :as night]
            [bh-ui.atom.worldwind.globe.layer.compass :as compass]
            [bh-ui.atom.worldwind.globe.layer.star-field :as star-field]
            [bh-ui.atom.worldwind.globe.projection :as proj]
            [bh-ui.atom.worldwind.globe.react-support :as rs]
            [bh-ui.atom.worldwind.globe.layer :as layer]
            [bh-ui.atom.worldwind.globe.shape :as shape]
            [bh-ui.atom.worldwind.globe.volume :as volume]
            [bh-ui.atom.worldwind.globe.path :as path]
            [bh-ui.atom.worldwind.globe.sector :as sector]
            [bh-ui.utils.bounding-box :as bound]
            [bh-ui.utils.helpers :as h]
            [re-frame.core :as rf]
            [cljs-time.coerce :as coerce]
            [cljs-time.core :as cljs-time]
            [reagent.core :as r]
            [taoensso.timbre :as log]))


(log/info "bh-ui.atom.worldwind.globe")


(def DEFAULT_BACKGROUND_COLOR "rgb(36,74,101)")
(def alt 1000000)

(def sample-data [
                  {:layer-id "swath"
                   :z        150
                   :shapes   [{:shape          :shape/volume :id "polar-sat-1-coverage"
                               :positions      [[40 -90 alt] [30 -100 0] [30 -80 0] [50 -80 0] [50 -100 0]]
                               :faces          [[0 1 2], [0 2 3], [0 3 4], [0 1 4]]
                               :outline        [0, 1, 2, 3, 4, 0, 3, 2, 0, 1, 4]
                               :interior-color [1 1 1 0.5]
                               :outline-color  [0 0 1 1.0]
                               :width          1 :extrude true}]}

                  {:layer-id "polygons"
                   :z        10
                   :shapes   [{:shape      :shape/polygon :id "square"
                               :locations  [[30.0 -130.0] [30.0 -100.0]
                                            [0.0 -100.0] [0.0 -130.0]]
                               :fill-color [1 0 0 0.3] :outline-color [1 0 0 1] :width 2}
                              {:shape      :shape/polygon :id "5-sided"
                               :locations  [[37 -115.0] [32.0 -115.0] [33.0 -107.0]
                                            [31.0 -102.0] [35.0 -102.0] [37.0 -115.0]]
                               :fill-color [1 0 0 0.6] :outline-color [1 0 0 1] :width 2}]}

                  {:layer-id "polylines"
                   :z        10
                   :shapes   [{:shape         :shape/polyline :id "line1" :locations [[35 -75] [35 -125]]
                               :outline-color [1 1 0 1.0] :width 5}
                              {:shape         :shape/polyline :id "line2" :locations [[22 -55] [45 -105] [36 -125.7]]
                               :outline-color [1 0.5 0.78 1.0] :width 5}]}

                  {:layer-id "circles"
                   :z        10
                   :shapes   [{:shape      :shape/circle :id "circle"
                               :location   [28.538336 -81.379234] :radius 1000000
                               :fill-color [0 1 0 0.5] :outline-color [1 1 1 1] :width 2 :height 2}]}

                  {:layer-id "locations"
                   :z        10
                   :shapes   [{:shape      :shape/label :id "orlando" :location [28.538336 -81.379234] :label "Orlando"
                               :fill-color [1 0.9 0.0 1.0] :outline-color [1 0.9 0.0 1.0] :width 1}]}

                  {:layer-id "orbits"
                   :z        100
                   :shapes   [{:shape     :shape/path :id "polar-sat-1"
                               :positions [[90 -100 alt] [0 -90 alt] [-90 -80 alt] [0 90 alt] [90 -80 alt]]
                               :color     [1 1 0 1.0] :width 1 :extrude true}]}

                  {:layer-id "images"
                   :z        10
                   :shapes   [{:shape        :shape/image, :id "image-15",
                               :url          "data/a.png",
                               :bounding-box [22.074653 33.344622 -95.433292 -82.723547]}

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
                               :bounding-box (bound/make-bounding-box 45.0987 -106.09 0.5)}
                              {:shape        :shape/image
                               :id           (h/component-id)
                               :url          "images/lightning/Lightning3png.png"
                               :bounding-box (bound/make-bounding-box 46 -105 0.5)}]}])

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

           [:canvas (merge props {:id (:canvasId @state)
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


