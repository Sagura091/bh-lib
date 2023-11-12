(ns bh-ui.atom.resium.shape
  (:require ["resium" :refer (Viewer CameraFlyTo Globe Entity EllipseGraphics PolygonGraphics
                               PolylineGraphics PointPrimitive LabelGraphics Model ModelGraphics ModelProps)]
            ["cesium" :refer (Cartesian3 Ion Color CircleGeometry LabelStyle Material
                               MaterialProperty ImageMaterialProperty Transforms)]
            [bh-ui.utils.bounding-box :as bound]
            [taoensso.timbre :as log]))


(log/info "bh-ui.atom.resium.shape")


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
  (let [[f-r f-g f-b f-a] fill-color
        [o-r o-g o-b o-a] outline-color]
    ^{:key id} [:> Entity
                [:> PolygonGraphics {:hierarchy    (.fromDegreesArray Cartesian3 (clj->js (correct-locations locations)))
                                     :outlineColor (Color. o-r o-g o-b o-a)
                                     :outlineWidth width
                                     :outline      true
                                     :material     (Color. f-r f-g f-b f-a)}]]))


; :shape/image
(defmethod make-shape :shape/image [{:keys [id bounding-box locations url]}]
  / (log/info "make-shape :shape/image" id bounding-box locations url)
  ^{:key id} [:> Entity
              [:> PolygonGraphics {:hierarchy (.fromDegreesArray Cartesian3
                                                (clj->js (correct-locations (cond
                                                                              (seq locations) locations
                                                                              (seq bounding-box) (bound/bounding-box->locations bounding-box)
                                                                              :else [:div ":shape/image is missing both :bounding-box AND :locations parameters"]))))
                                   :material  (ImageMaterialProperty. (clj->js {:image url}))}]])


; :shape/polyline
(defmethod make-shape :shape/polyline [{:keys [id locations width outline-color]}]
  (let [[r g b a] outline-color]
    ^{:key id} [:> Entity
                [:> PolylineGraphics {:positions (.fromDegreesArray Cartesian3 (clj->js (correct-locations locations)))
                                      :width     width
                                      :material  (Color. r g b a)}]]))


; :shape/path
(defmethod make-shape :shape/path [{:keys [id positions width color extrude]}]
  (let [[r g b a] color
        pos (correct-positions positions)]
    (log/info "make-shape :shape/path" positions "_____" pos)
    ^{:key id} [:> Entity
                [:> PolylineGraphics {:positions (.fromDegreesArrayHeights Cartesian3 (clj->js pos))
                                      :width     width
                                      :material  (Color. r g b a)
                                      :extrude   (nth positions 2)}]]))



; :shape/circle
(defmethod make-shape :shape/circle [{:keys [id location radius fill-color outline-color width height]}]
  (let [[f-r f-g f-b f-a] fill-color
        [o-r o-g o-b o-a] outline-color]
    ^{:key id} [:> Entity {:position (cartesian3 location)}
                [:> EllipseGraphics {:semiMajorAxis radius
                                     :semiMinorAxis radius
                                     :material      (Color. f-r f-g f-b f-a)
                                     :outlineColor  (Color. o-r o-g o-b o-a)
                                     :outlineWidth  width
                                     :height        height
                                     :outline       true}]]))


; :shape/label
(defmethod make-shape :shape/label [{:keys [id location label font fill-color outline-color width]}]
  (let [[f-r f-g f-b f-a] fill-color
        [o-r o-g o-b o-a] outline-color]
    ^{:key id} [:> Entity {:position (cartesian3 location)}
                [:> LabelGraphics {:text         label
                                   :font         (or font "24px Helvetica")
                                   :fillColor    (Color. f-r f-g f-b f-a)
                                   :outlineColor (Color. o-r o-g o-b o-a)
                                   :outlineWidth width
                                   :show         true}]]))


; :shape/label
(defmethod make-shape :shape/model [{:keys [id position model-format model-folder url]}]
  (log/info "make-shape :shape/model" id model-format url)
  (let [p      (cartesian3 position)
        matrix (.eastNorthUpToFixedFrame Transforms p)]
    ^{:key id} [:> Model {:url              (str model-folder "/" model-format "/"
                                              url "." model-format)
                          :modelMatrix      matrix
                          :minimumPixelSize 128
                          :maximumScale     200000}]))



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