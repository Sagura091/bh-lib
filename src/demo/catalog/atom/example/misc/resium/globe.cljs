(ns demo.catalog.atom.example.misc.resium.globe
  (:require [bh-ui.core :as bh]
            [demo.catalog.atom.example.misc.data.globe :as data]
            [demo.catalog.atom.example.misc.data.czml :refer [czml-json]]
            [woolybear.ad.catalog.utils :as acu]))

(defn example-models []
  (acu/demo "Resium Globe drawing defined model entities"
    "A 3D globe based on [resium](https://github.com/reearth/resium)."
            [bh/resium-globe :shapes data/sample-data]))

(defn example-czml []
  (acu/demo "Resium Globe displaying a scene defined in CZML"
            "A 3D globe based on [resium](https://github.com/reearth/resium)
              using [CZML](https://github.com/AnalyticalGraphicsInc/czml-writer/wiki/CZML-Structure)."
            [bh/czml-globe :czml czml-json]))
