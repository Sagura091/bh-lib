(ns demo.catalog.atom.layouts
  "demo.catalog and acu/demonstrations of available layout components."
  (:require [demo.catalog.atom.example.layout.page :as page]
            [demo.catalog.atom.example.layout.page-header :as page-header]
            [demo.catalog.atom.example.layout.page-title :as page-title]
            [demo.catalog.atom.example.layout.text-block :as text-block]
            [demo.catalog.atom.example.layout.centered-block :as centered-block]
            [demo.catalog.atom.example.layout.markdown-block :as markdown-block]
            [demo.catalog.atom.example.layout.frame :as frame]
            [demo.catalog.atom.example.layout.section :as section]
            [demo.catalog.atom.example.layout.layout-grid :as layout-grid]))


(defn examples
  []
  [:div
   [page/example]
   [page-header/example]
   [page-title/example]
   [section/example]
   [text-block/example]
   [centered-block/example]
   [markdown-block/example]
   [frame/example]
   [layout-grid/example]])
