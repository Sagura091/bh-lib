(ns demo.catalog.atom.example.misc.resium.globe
  (:require [bh-ui.core :as bh]
            [demo.catalog.atom.example.misc.data.globe :as data]
            [woolybear.ad.catalog.utils :as acu]))

(defn example []
  (acu/demo "Resium Globe"
    "A 3D globe based on [resium](https://github.com/reearth/resium)."
    [bh/resium-globe :shapes data/sample-data]))
