(ns bh-ui.atom.worldwind.globe.models
  (:require ["worldwindjs" :as WorldWind]
            [bh-ui.atom.worldwind.globe.shape :as shape]
            [bh-ui.atom.worldwind.globe.location :as location]
            [bh-ui.atom.worldwind.globe.shape.attributes :as attributes]
            [taoensso.timbre :as log]))


(def model-format "collada")


(defmethod shape/make-shape :shape/model [{:keys [id model-folder url position]}]
  (let [label      (WorldWind/GeographicText. (location/position position) id)
        attributes (attributes/text-attributes
                     {:fill-color    [1 0.9 0.0 1.0]
                      :outline-color [1 0.9 0.0 1.0]
                      :width         1})]
    (set! (.-attributes label) attributes)
    label))




