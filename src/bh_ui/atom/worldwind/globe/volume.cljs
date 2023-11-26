(ns bh-ui.atom.worldwind.globe.volume
  (:require ["worldwindjs" :as WorldWind]
    [bh-ui.atom.worldwind.globe.shape :as shape]
    [bh-ui.atom.worldwind.globe.location :as location]
    [bh-ui.atom.worldwind.globe.shape.attributes :as attributes]
    [taoensso.timbre :as log]))



(log/info "bh-ui.atom.worldwind.globe.volume")


(defn triangular-mesh
  "faces are indexes into the 'positions' array, one for each vertex. MUST be in counter-clockwise
  order for the 'facing' of the triangle to be correct"

  [positions faces outline interior-color outline-color]

  ;(log/info "triangular-mesh")

  (let [[_ _ _ ic _] interior-color
        [_ _ _ oc _] outline-color
        f              (flatten faces)
        meshAttributes (attributes/shape-attributes {:fill-color ic :outline-color oc})
        pos            (into [] (map location/position positions))
        mesh           (WorldWind/TriangleMesh. (clj->js pos)
                         (clj->js f)
                         meshAttributes)]

    (set! (.-outlineIndices mesh) (clj->js outline))

    (set! (.-drawInterior meshAttributes) true)
    (set! (.-drawOutline meshAttributes) true)
    (set! (.-depthTest meshAttributes) true)
    (set! (.-applyLighting meshAttributes) true)

    mesh))


; :shape/volume
(defmethod shape/make-shape :shape/volume [{:keys [id positions faces outline
                                                   interior-color outline-color]}]

  ;(log/info ":shape/volume")
  (let [volume (triangular-mesh positions faces outline interior-color outline-color)]
    (set! (.-displayName volume) id)
    volume))



(comment
  (do
    (def interior-color [0 1 0 1.0])
    (def outline-color [0 1 0 1.0])
    (def positions [[0 -90 1000000] [10 -100 0] [10 -80 0] [-10 -80 0] [-10 -100 0]])
    (def meshAttributes (attributes/shape-attributes {:fill-color    interior-color
                                                      :outline-color outline-color}))

    (def pos (into [] (map location/position positions)))

    (def mesh (WorldWind/TriangleMesh. (clj->js pos)
                [0 1 2
                 0 2 3
                 0 3 4
                 0 4 1]
                meshAttributes)))



  ())


; how to get outline (edges) from faces
(comment
  (def faces [[0 1 2], [0 2 3], [0 3 4], [0 1 4]])

  (first faces)

  ;(clojure.combinatorics/permutations (first faces))


  ())

