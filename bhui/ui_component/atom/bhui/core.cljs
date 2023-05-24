(ns ui-component.atom.bhui.core
  (:require [ui-component.atom.bhui.color-picker :as color-picker]
            [ui-component.atom.bhui.data-table :as data-table]
            [ui-component.atom.bhui.markdown :as markdown]
            [ui-component.atom.bhui.navbar :as navbar]
            [ui-component.atom.bhui.tabbed-panel :as tabbed-panel]
            [ui-component.atom.bhui.table :as table]))


(def rgba-color-picker color-picker/rgba-color-picker)
(def hex-color-picker color-picker/hex-color-picker)
(def data-table data-table/table)
(def markdown markdown/markdown)
(def navbar navbar/navbar)
(def tabbed-panel tabbed-panel/tabbed-panel)
(def table table/table)