(ns demo.catalog.atom.example.misc.two-d-globe
  (:require [woolybear.ad.catalog.utils :as acu]
            [bh-ui.atom.leaflet.globe :as leaflet]
            [woolybear.ad.layout :as layout]))


(defn example []
  (let [container-id "leaflet-globe-demo"]
    (acu/demo "2D Globe (Leaflet)"
      "A 2D globe, build using [react-leaflet](https://react-leaflet.js.org/) and [leaflet](https://leafletjs.com)."
      [layout/centered
       [:div {:style {:width "100%" :height "500px"}}
        [leaflet/globe
         :shapes leaflet/sample-data]]]
      '[])))
