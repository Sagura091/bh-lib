(ns bh-ui.atom.worldwind.globe.shape
  (:require ["worldwindjs" :as WorldWind]
            [bh-ui.atom.worldwind.globe.location :as location]
            [bh-ui.atom.worldwind.globe.shape.attributes :as attributes]
            [taoensso.timbre :as log]))


(log/info "bh-ui.atom.worldwind.globe.shape")


(defn wrap-shape [id shapes z]
  ;(log/info "wrap-shape" id "//" shapes)
  (let [layer (WorldWind/RenderableLayer.)]
    (set! (.-displayName layer) id)

    (dorun
      (map #(.addRenderable layer %) shapes))

    {:id id :layer layer :z z}))


(defmulti make-shape (fn [{:keys [shape]}]
                       ;(log/info "make-shape" shape)
                       shape))


(defmethod make-shape :default [{:keys [shape]}]
  (let [label      (WorldWind/GeographicText. (location/position [0 0]) (str "missing  " shape))
        attributes (attributes/text-attributes
                     {:fill-color    [1 0.9 0.0 1.0]
                      :outline-color [1 0.9 0.0 1.0]
                      :width         1})]
    (set! (.-attributes label) attributes)
    label))


; :shape/polygon
(defmethod make-shape :shape/polygon [{:keys [id locations
                                              fill-color outline-color
                                              width z]}]

  ;(log/info "polygon" locations "//" fill-color "//" outline-color "//" width)

  (let [[_ _ _ fc _] fill-color
        [_ _ _ oc _] outline-color
        attributes (attributes/shape-attributes
                     {:fill-color    fc
                      :outline-color oc
                      :width         width})
        locs       (->> locations
                     (map location/location)
                     (into-array))
        polygon    (WorldWind/SurfacePolygon. locs attributes)]
    (set! (.-displayName polygon) id)
    polygon))


; :shape/circle
(defmethod make-shape :shape/circle [{:keys [id location
                                             fill-color outline-color
                                             width radius z]}]

  ;(log/info "circle" location "//" fill-color "//" outline-color "//" width "//" radius)

  (let [[_ _ _ fc _] fill-color
        [_ _ _ oc _] outline-color
        attributes (attributes/shape-attributes
                     {:fill-color    fc
                      :outline-color oc
                      :width         width})
        circle     (WorldWind/SurfaceCircle. (location/location location)
                     radius attributes)]
    (set! (.-displayName circle) id)
    circle))


; :shape/polyline
(defmethod make-shape :shape/polyline [{:keys [id locations outline-color width z]}]

  ;(log/info "circle" locations "//" outline-color "//" width)

  (let [[_ _ _ oc _] outline-color
        attributes (attributes/shape-attributes
                     {:outline-color oc
                      :width         width})
        locs       (->> locations
                     (map location/location)
                     (into-array))
        polyline   (WorldWind/SurfacePolyline. locs attributes)]
    (set! (.-displayName polyline) id)
    polyline))


;:shape/label
(defmethod make-shape :shape/label [{:keys [id label location fill-color outline-color width z]}]

  ;(log/info "label" location "//" label "//" fill-color "//" width)

  (let [[_ _ _ fc _] fill-color
        [_ _ _ oc _] outline-color
        label      (WorldWind/GeographicText. (location/position location) label)
        attributes (attributes/text-attributes
                     {:fill-color    fc
                      :outline-color oc
                      :width         width})]
    (set! (.-attributes label) attributes)
    label))





