(ns demo.catalog.atom.example.misc.resium.globe
  (:require [bh-ui.atom.resium.globe :as globe]
            [woolybear.ad.catalog.utils :as acu]))

(defn example []
  (acu/demo "Resium Globe"
    "A 3D globe based on [resium](https://github.com/reearth/resium)."
    [globe/globe :shapes globe/sample-data]))
