(ns bh-ui.atom.worldwind.core
  (:require [bh-ui.atom.worldwind.globe :as globe]
            [bh-ui.atom.worldwind.globe.cell :as cell]
            [bh-ui.atom.worldwind.globe.color :as color]
            [bh-ui.atom.worldwind.globe.globe-time :as globe-time]
            [bh-ui.atom.worldwind.globe.layer :as layer]
            [bh-ui.atom.worldwind.globe.layer.core]
            [bh-ui.atom.worldwind.globe.location :as location]
            [bh-ui.atom.worldwind.globe.projection :as projection]
            [bh-ui.atom.worldwind.globe.react-support :as react-support]
            [bh-ui.atom.worldwind.globe.shape :as shape]
            [bh-ui.atom.worldwind.globe.volume :as volume]
            [bh-ui.atom.worldwind.globe.shape.core]))




(def globe globe/globe)
(def boundary-locations cell/boundary-locations)

; colors
(def yellow color/yellow)
(def white color/white)
(def blue color/blue)
(def red color/red)
(def green color/green)
(def black color/black)
(def color color/color)

(def change-time globe-time/change-time)
(def renderable-layer layer/renderable-layer)
(def getLayer layer/getLayer)
(def addLayer layer/addLayer)
(def removeLayer layer/removeLayer)
(def make-layer layer/make-layer)

(def location location/location)
(def position location/position)

(def change-projection projection/change-projection)

(def update-children react-support/update-children)
(def component-did-mount react-support/component-did-mount)
(def component-did-update react-support/component-did-update)

(def wrap-shape shape/wrap-shape)
