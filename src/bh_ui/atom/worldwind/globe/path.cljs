(ns bh-ui.atom.worldwind.globe.path
  (:require ["worldwindjs" :as WorldWind]
            [bh-ui.atom.worldwind.globe.shape :as shape]
            [bh-ui.atom.worldwind.globe.location :as location]
            [bh-ui.atom.worldwind.globe.shape.attributes :as attributes]
            [taoensso.timbre :as log]))


(log/info "bh-ui.atom.worldwind.globe.shape")


; :shape/polygon
(defmethod shape/make-shape :shape/path [{:keys [id positions
                                                 color width
                                                 extrude]}]

  ;(log/info "make-shape :shape/path" positions "//" color "//" width "//" extrude)

  (let [attributes (attributes/shape-attributes
                     {:outline-color color
                      :width width})
        pos        (->> positions
                     (map location/position)
                     (into-array))
        path       (WorldWind/Path. pos attributes)]

    (set! (.-displayName path) id)
    (set! (.-extrude path) (or extrude false))
    (set! (.-altitudeMode path) (.-ABSOLUTE WorldWind))
    (set! (.-followTerrain path) false)
    (set! (.-useSurfaceShapeFor2D path) true)

    path))



(comment
  (shape/make-shape {:shape     :shape/path
                     :id        "dummy"
                     :positions [[10 10 10000] [30 30 10000] [20 40 10000]]
                     :color     bh.ui-component.atom.worldwind.globe.color/default-outline-color})



  ())