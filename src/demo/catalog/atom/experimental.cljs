(ns demo.catalog.atom.experimental
  (:require [demo.catalog.atom.example.oz.line-chart :as oz-line-chart]
            [demo.catalog.atom.example.oz.bar-chart :as oz-bar-chart]
            [demo.catalog.atom.example.experimental.ui-element :as ui-element]
            [demo.catalog.atom.example.experimental.react-table :as react-table]
            [demo.catalog.atom.example.re-com.plain-table :as plain-table]
            [demo.catalog.atom.example.experimental.tab-set :as tab-set]
            [demo.catalog.atom.example.re-com.plain-table :as plain-table]
            [demo.catalog.atom.example.experimental.internationalization :as inter]
            [re-frame.core :as re-frame]
            [demo.subs :as sub]))



(defn examples []
  [:div
   ;[oz-bar-chart/example]
   ;[oz-line-chart/example]

   [tab-set/example-1]
   [tab-set/example-2]
   [tab-set/example-3]

   [plain-table/example]
   [react-table/standard-table]
   [react-table/expandable-table]
   [react-table/subchannel-table]

   [inter/internationalization (re-frame/subscribe[::sub/i18n])]])

   ;[ui-element/selectable-table]])
   ;[ui-element/three-d-globe]
   ;[ui-element/slider]
   ;[ui-element/label]])
