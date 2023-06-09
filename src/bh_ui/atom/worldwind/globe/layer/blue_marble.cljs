(ns bh-ui.atom.worldwind.globe.layer.blue-marble
  (:require ["worldwindjs" :as WorldWind]
            [taoensso.timbre :as log]))


(defn blue-marble [layer-name]
  (let [layer (WorldWind/BMNGOneImageLayer.)]
    (set! (.-displayName layer) layer-name)
    layer))

