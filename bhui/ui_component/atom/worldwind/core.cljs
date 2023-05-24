(ns ui-component.atom.worldwind.core
  (:require [ui-component.atom.worldwind.globe :as globe]
            [ui-component.atom.worldwind.globe.cell :as cell]
            [ui-component.atom.worldwind.globe.color :as color]
            [ui-component.atom.worldwind.globe.globe-time :as globe-time]
            [ui-component.atom.worldwind.globe.layer :as layer]
            [ui-component.atom.worldwind.globe.layer.core]
            [ui-component.atom.worldwind.globe.location :as location]
            [ui-component.atom.worldwind.globe.projection :as projection]
            [ui-component.atom.worldwind.globe.react-support :as react-support]
            [ui-component.atom.worldwind.globe.shape :as shape]
            [ui-component.atom.worldwind.globe.shape.core]))




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

(def location location/location)
(def position location/position)

(def change-projection projection/change-projection)

(def update-children react-support/update-children)
(def component-did-mount react-support/component-did-mount)
(def component-did-update react-support/component-did-update)

(def wrap-shape shape/wrap-shape)
