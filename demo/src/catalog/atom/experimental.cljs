(ns catalog.atom.experimental
  (:require [catalog.atom.example.oz.line-chart :as oz-line-chart]
            [catalog.atom.example.oz.bar-chart :as oz-bar-chart]
            [catalog.atom.example.experimental.ui-element :as ui-element]

            [catalog.atom.example.re-com.plain-table :as plain-table]))



(defn examples []
  [:div
   [oz-bar-chart/example]
   [oz-line-chart/example]
   [plain-table/example]])
   ;[ui-element/selectable-table]])
   ;[ui-element/three-d-globe]
   ;[ui-element/slider]
   ;[ui-element/label]])
