(ns bh-ui.atom.worldwind.globe.layer.core
  (:require [bh-ui.atom.worldwind.globe.layer.blue-marble :as blue-marble]
            [bh-ui.atom.worldwind.globe.layer.compass :as compass]
            [bh-ui.atom.worldwind.globe.layer.controls :as controls]
            [bh-ui.atom.worldwind.globe.layer.coordinates :as coordinates]
            [bh-ui.atom.worldwind.globe.layer.day-only :as day-only]
            [bh-ui.atom.worldwind.globe.layer.night :as night]
            [bh-ui.atom.worldwind.globe.layer.star-field :as field]
            [bh-ui.atom.worldwind.globe.layer.tesselation :as tesselation]))


(def blue-marble blue-marble/blue-marble)
(def compass compass/compass)
(def controls controls/controls)
(def coordinates coordinates/coordinates)
(def day-only day-only/day-only)
(def night night/night)
(def star-field field/star-field)
(def tesselation tesselation/tesselation)