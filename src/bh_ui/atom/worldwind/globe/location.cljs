(ns bh-ui.atom.worldwind.globe.location
  (:require ["worldwindjs" :as WorldWind]))


(defn location
  ([[lat lon]]
   (WorldWind/Location. lat lon))

  ([lat lon]
   (WorldWind/Location. lat lon)))


(defn position
  ([[lat lon & alt]]
   (WorldWind/Position. lat lon (or (first alt) 100)))

  ([lat lon alt]
   (WorldWind/Position. lat lon alt))

  ([lat lon]
   (WorldWind/Position. lat lon 100)))




