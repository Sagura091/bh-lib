(ns bh-ui.atom.worldwind.globe.layer
  (:require ["worldwindjs" :as WorldWind]
            [bh-ui.atom.worldwind.globe.shape :as shape]
            [taoensso.timbre :as log]))


(defn renderable-layer [layer-name z children]
  (log/info "renderable-layer" layer-name z children)
  (let [layer (WorldWind/RenderableLayer.)]
    (set! (.-displayName layer) layer-name)
    (doall
      (map (fn [child]
             (log/info "renderable-layer adding" layer-name child)
             (.addRenderable layer child))
        children))
    {:id layer-name :layer layer :z (or z 1)}))


(defn getLayer [this layer-name]
  (let [layer (.filter (.. this -wwd -layers)
                #(= (.-displayName %) layer-name))]
    ;(log/info "getLayer"
    ;  (.-length layer)
    ;  (map #(.-displayName %) layer))
    (first layer)))


(defn addLayer [this idx layer]
  ;(log/info "addLayer" (.-displayName layer))

  (.insertLayer (.-wwd this) idx layer)
  (.redraw (.-wwd this))

  layer)


(defn removeLayer [this layer-name]
  ;(log/info "removeLayer" layer-name)

  (if-let [layer (getLayer this layer-name)]
    (do
      (.removeLayer (.-wwd this) layer)
      ;(log/info "removed?" (map #(.-displayName %)
      ;                       (.. this -wwd -layers)))
      (.redraw (.-wwd this)))))


(defn make-layer [{:keys [layer-id shapes z] :as layer}]
  (log/info "makeLayer" layer-id "//" shapes)

  (let [ret (renderable-layer layer-id z
              (map shape/make-shape shapes))]
    (log/info "makeLayer" layer-id "//" layer)
    ret))


(defn make-layer-per-shape [{:keys [id z] :as shape}]
  (shape/wrap-shape id (vector (shape/make-shape shape)) (or z 5)))
