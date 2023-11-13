(ns bh-ui.atom.worldwind.globe.models
  (:require ["worldwindjs" :as WorldWind]
            [bh-ui.atom.worldwind.globe.location :as location]
            [bh-ui.atom.worldwind.globe.shape :as shape]
            [bh-ui.atom.worldwind.globe.shape.attributes :as attributes]
            [reagent.core :as r]
            [taoensso.timbre :as log]))


(def model-format "collada")
(def model-ext "dae")


(def model (atom nil))


(defn load-callback [model id scale scene]
  (set! (.-scale scene) scale)
  (set! (.-displayName scene) id)
  (reset! model scene)

  (log/info "load-callback" scene "____" model))


(defn- make-collada [model id model-folder url position scale]
  (let [pos        (location/position position)
        loader     (WorldWind/ColladaLoader. pos)
        model-path (str model-folder "/" model-format "/")
        model-file (str url "." model-ext)
        ;model      (atom nil)

        _          (.init loader #js{:dirPath model-path})

        ; TODO: this wraps an ASYNC call which doesn't produce the value before .load returns, but sometime after
        ;_      (js/await (.load loader model-file
        ;                   (partial load-callback model id scale)))
        _          (.load loader model-file
                     (partial load-callback model id scale))]

    (log/info "make-shape :shape/model-collada (c)" model-path
      "//" model-file
      "//" @model)))


; shape/make-shape :shape/model
(defmethod shape/make-shape :shape/model [{:keys [id model-folder url position scale]}]
  (let [label      (WorldWind/GeographicText. (location/position position) id)
        attributes (attributes/text-attributes
                     {:fill-color    [1 0.9 0.0 1.0]
                      :outline-color [1 0.9 0.0 1.0]
                      :width         1})
        _          (make-collada model id model-folder url position scale)]

    (log/info "shape/make-shape :shape/model" model)

    (set! (.-attributes label) attributes)
    (if @model @model label)))





(comment
  (do
    (def id "dataduck")
    (def model-folder "data/models")
    (def url "duck")
    (def position [40 -90 1000e3])
    (def scale 5000))


  (def model (make-collada model id model-folder url position scale))



  ())



