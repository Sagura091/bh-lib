(ns bh-ui.atom.worldwind.globe.shape.attributes
  (:require ["worldwindjs" :as WorldWind]
            [bh-ui.atom.worldwind.globe.color :as color]
            [taoensso.timbre :as log]))


(log/info "bh-ui.atom.worldwind.globe.shape.attributes")


(defn shape-attributes [{:keys [fill-color outline-color width] :as params}]

  (log/info "shape-attributes" params)

  (let [attributes (WorldWind/ShapeAttributes.)]
    (set! (.-interiorColor attributes) (color/color (or fill-color color/default-fill-color)))
    (set! (.-outlineColor attributes) (color/color (or outline-color color/default-outline-color)))
    (set! (.-outlineWidth attributes) (or width color/default-width))

    attributes))


(defn text-attributes [{:keys [fill-color outline-color width] :as params}]

  (log/info "text-attributes" params)

  (let [attributes (WorldWind/TextAttributes.)]
    (set! (.-color attributes) (color/color (or fill-color color/default-fill-color)))
    (set! (.-outlineColor attributes) (color/color (or outline-color color/default-outline-color)))
    (set! (.-outlineWidth attributes) (or width color/default-width))
    (set! (.-depthTest attributes) false)

    attributes))


