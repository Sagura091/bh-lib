(ns bh-ui.atom.resium.shape
  (:require ["resium" :refer (Viewer CameraFlyTo Globe Entity EllipseGraphics PolygonGraphics
                               PolylineGraphics PointPrimitive LabelGraphics Model ModelGraphics ModelProps)]
            ["cesium" :refer (Cartesian3 Ion Color CircleGeometry LabelStyle Material
                               MaterialProperty ImageMaterialProperty Transforms)]
            [bh-ui.utils.bounding-box :as bound]
            [taoensso.timbre :as log]))


(log/info "bh-ui.atom.resium.shape")


(def model-format "gltf")


(defn- correct-locations
  "Cesium/Resium locations are [lon lat] while Worldwind locations are [lat lon], so we need this
  function to do the conversion (easier to go in this direction)
  "
  [locations]
  (->> locations
    (map (fn [[lat lon]] [lon lat]))
    flatten))


(defn- correct-location [[lat lon]]
  [lon lat])


(defn- correct-position [[lat lon alt]]
  [lon lat alt])


(defn- correct-positions
  "Cesium/Resium positions are [lon lat alt] while Worldwind locations are [lat lon alt], so we need this
  function to do the conversion (easier to go in this direction)
  "
  [positions]
  (->> positions
    (map correct-position)
    flatten))


(defn cartesian3
  ([v]
   (log/info "cartesian3 (vector)")
   (case (count v)
     2 (let [[lat lon] v]
         ;(log/info "cartesian3 (vec [lat lon])" v)
         (.fromDegrees Cartesian3 lon lat))
     3 (let [[lat lon alt] v]
         ;(log/info "cartesian3 (vec [lat lon alt])" v)
         (.fromDegrees Cartesian3 lon lat alt))
     :else (.fromDegrees Cartesian3 0 0)))

  ([lon lat]
   ;(log/info "cartesian3 (lat lon)")
   (.fromDegrees Cartesian3 lon lat))

  ([lon lat alt]
   ;(log/info "cartesian3 (lat lon alt)")
   (.fromDegrees Cartesian3 lon lat alt)))


(defmulti make-shape (fn [{:keys [shape]}] shape))

; :shape/polygon
(defmethod make-shape :shape/polygon [{:keys [id locations fill-color outline-color width]}]
  (let [[_ _ _ [f-r f-g f-b f-a] _] fill-color
        [_ _ _ [o-r o-g o-b o-a] _] outline-color]
    ^{:key id} [:> Entity
                [:> PolygonGraphics {:hierarchy    (.fromDegreesArray Cartesian3 (clj->js (correct-locations locations)))
                                     :outlineColor (Color. o-r o-g o-b o-a)
                                     :outlineWidth width
                                     :outline      true
                                     :material     (Color. f-r f-g f-b f-a)}]]))


(defmethod make-shape :shape/volume [{:keys [id positions faces outline interior-color outline-color width] :as params}]
  (log/info "make-shape :shape/volume" params)

  (let [[_ _ _ [f-r f-g f-b f-a] _] interior-color
        [_ _ _ [o-r o-g o-b o-a] _] outline-color]
    [:<>
     (map-indexed (fn [idx face]
                    ^{:key (str id "-" idx)}
                    [:> Entity
                     [:> PolygonGraphics {:hierarchy         (.fromDegreesArrayHeights Cartesian3
                                                               (clj->js
                                                                 (flatten (map (fn [vertex]
                                                                                 (correct-position (nth positions vertex)))
                                                                            face))))
                                          :outlineColor      (Color. o-r o-g o-b o-a)
                                          :outlineWidth      (if outline width 0)
                                          :outline           (if outline true false)
                                          :perPositionHeight true
                                          :material          (Color. f-r f-g f-b f-a)}]])
       faces)]))

; :shape/image
(defmethod make-shape :shape/image [{:keys [id bounding-box locations url]}]
   ;(log/info "make-shape :shape/image" id bounding-box locations url)
  ^{:key id} [:> Entity
              [:> PolygonGraphics {:hierarchy (.fromDegreesArray Cartesian3
                                                (clj->js (correct-locations (cond
                                                                              (seq locations) locations
                                                                              (seq bounding-box) (bound/bounding-box->locations bounding-box)
                                                                              :else [:div ":shape/image is missing both :bounding-box AND :locations parameters"]))))
                                   :material  (ImageMaterialProperty. (clj->js {:image url}))}]])


; :shape/polyline
(defmethod make-shape :shape/polyline [{:keys [id locations width outline-color]}]
  (let [[_ _ _ [r g b a] _] outline-color]
    ^{:key id} [:> Entity
                [:> PolylineGraphics {:positions (.fromDegreesArray Cartesian3 (clj->js (correct-locations locations)))
                                      :width     width
                                      :material  (Color. r g b a)}]]))


; :shape/path
(defmethod make-shape :shape/path [{:keys [id positions width color extrude]}]
  (let [[_ _ _ [r g b a] _] color
        pos (correct-positions positions)]
    (log/info "make-shape :shape/path" positions "_____" pos)
    ^{:key id} [:> Entity
                [:> PolylineGraphics {:positions (.fromDegreesArrayHeights Cartesian3 (clj->js pos))
                                      :width     width
                                      :material  (Color. r g b a)
                                      :extrude   (nth positions 2)}]]))


; :shape/circle
(defmethod make-shape :shape/circle [{:keys [id location radius fill-color outline-color width height]}]
  (let [[_ _ _ [f-r f-g f-b f-a] _] fill-color
        [_ _ _ [o-r o-g o-b o-a] _] outline-color]
    ^{:key id} [:> Entity {:position (cartesian3 location)}
                [:> EllipseGraphics {:semiMajorAxis radius
                                     :semiMinorAxis radius
                                     :material      (Color. f-r f-g f-b f-a)
                                     :outlineColor  (Color. o-r o-g o-b o-a)
                                     :outlineWidth  width
                                     :height        height
                                     :outline       true}]]))


; :shape/label
(defmethod make-shape :shape/label [{:keys [id location label font width fill-color outline-color]}]
  (let [[_ _ _ [f-r f-g f-b f-a] _] fill-color
        [_ _ _ [o-r o-g o-b o-a] _] outline-color]
    ^{:key id} [:> Entity {:position (cartesian3 location)}
                [:> LabelGraphics {:text         label
                                   :font         (or font "24px Helvetica")
                                   :fillColor    (Color. f-r f-g f-b f-a)
                                   :outlineColor (Color. o-r o-g o-b o-a)
                                   :outlineWidth width
                                   :show         true}]]))


; :shape/model
(defmethod make-shape :shape/model [{:keys [id position model-folder url scale]}]
  (log/info "make-shape :shape/model" id (str model-folder "/" model-format "/"
                                           url "." model-format))
  (let [p      (cartesian3 position)
        matrix (.eastNorthUpToFixedFrame Transforms p)]
    ^{:key id} [:> Model {:url              (str model-folder "/" model-format "/"
                                              url "." model-format)
                          :modelMatrix      matrix
                          :minimumPixelSize 64
                          :maximumScale     (* scale 100)}]))


; make-shape :default
(defmethod make-shape :default [_]
  [:> Entity])





(comment
  (do
    (def model-folder "data/models")
    (def model-format "gtlf")
    (def position [40 -90 1000e3])
    (def url "duck")

    (def l (cartesian3 position))
    (def matrix (.eastNorthUpToFixedFrame Transforms l)))

  (str model-folder "/" model-format "/" url "." model-format)

  [:> Entity {:position l}
   [:> ModelGraphics {:url              (str model-folder "/" model-format
                                          "/" url "." model-format)
                      :minimumPixelSize 128
                      :maximumScale     20000}]]


  ())


; logic for :shape/volume
(comment
  ; let's try building separate polygons for each face

  (do
    (def positions [[40 -90 1000e3] [30 -100 0] [30 -80 0] [50 -80 0] [50 -100 0]])
    (def faces [[0 1 2], [0 2 3], [0 3 4], [0 4 1]])
    (def normals []))

  (flatten (map correct-position positions))


  (.fromDegreesArrayHeights Cartesian3
    (clj->js (flatten (map (fn [vertex]
                             (correct-position (nth positions vertex)))
                        (first faces)))))

  (into ^{:key "dummy"} [:> Entity]
    (map (fn [vertex]
           (flatten (correct-position (nth positions vertex))))
      (first faces)))


  (into ^{:key "dummy"} [:> Entity]
    (map (fn [face]
           [:> PolygonGraphics {:hierarchy         (.fromDegreesArrayHeights Cartesian3
                                                     (clj->js
                                                       (flatten (map (fn [vertex]
                                                                       (correct-position (nth positions vertex)))
                                                                  face))))
                                :outline           true
                                :perPositionHeight true}])
      faces))


  ())