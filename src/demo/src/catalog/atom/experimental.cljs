(ns demo.src.catalog.atom.experimental
  (:require [demo.src.catalog.atom.example.oz.line-chart :as oz-line-chart]
            [demo.src.catalog.atom.example.oz.bar-chart :as oz-bar-chart]
            [demo.src.catalog.atom.example.experimental.ui-element :as ui-element]

            [demo.src.catalog.atom.example.re-com.plain-table :as plain-table]))



(defn examples []
  [:div
   [oz-bar-chart/example]
   [oz-line-chart/example]
   [plain-table/example]])
   ;[ui-element/selectable-table]])
   ;[ui-element/three-d-globe]
   ;[ui-element/slider]
   ;[ui-element/label]])
