(ns demo.catalog.atom.example.misc.worldwind.globe
  (:require [bh-ui.core :as bh]
            [demo.catalog.atom.example.misc.data.globe :as data]
            [woolybear.ad.layout :as layout]
            [woolybear.ad.catalog.utils :as acu]))


(defn example []
  (let [container-id "worldwind-globe-demo"]
    (acu/demo "Worldwind Globe"
      "A 3D globe based on [Nasa WorldWind](https://github.com/WorldWindEarth/worldwindjs)."
      [layout/centered ;{:extra-classes :width-50}
       [bh/worldwind-globe
        :layers data/sample-data
        :component-id (bh/utils-path->keyword container-id "ww-globe")
        :container-id container-id]])))