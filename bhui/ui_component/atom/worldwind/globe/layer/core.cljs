(ns ui-component.atom.worldwind.globe.layer.core
  (:require [ui-component.atom.worldwind.globe.layer.blue-marble :as blue-marble]
            [ui-component.atom.worldwind.globe.layer.compass :as compass]
            [ui-component.atom.worldwind.globe.layer.controls :as controls]
            [ui-component.atom.worldwind.globe.layer.coordinates :as coordinates]
            [ui-component.atom.worldwind.globe.layer.day-only :as day-only]
            [ui-component.atom.worldwind.globe.layer.night :as night]
            [ui-component.atom.worldwind.globe.layer.star-field :as field]
            [ui-component.atom.worldwind.globe.layer.tesselation :as tesselation]))


(def blue-marble blue-marble/blue-marble)
(def compass compass/compass)
(def controls controls/controls)
(def coordinates coordinates/coordinates)
(def day-only day-only/day-only)
(def night night/night)
(def star-field field/star-field)
(def tesselation tesselation/tesselation)