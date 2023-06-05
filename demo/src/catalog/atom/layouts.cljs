(ns catalog.atom.layouts
  "Catalog and acu/demonstrations of available layout components."
  (:require [catalog.atom.example.layout.page :as page]
            [catalog.atom.example.layout.page-header :as page-header]
            [catalog.atom.example.layout.page-title :as page-title]
            [catalog.atom.example.layout.text-block :as text-block]
            [catalog.atom.example.layout.centered-block :as centered-block]
            [catalog.atom.example.layout.markdown-block :as markdown-block]
            [catalog.atom.example.layout.frame :as frame]
            [catalog.atom.example.layout.section :as section]
            [catalog.atom.example.layout.layout-grid :as layout-grid]))


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
