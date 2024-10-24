(ns demo.catalog.atom.layouts
  "Catalog and acu/demonstrations of available layout components."
  (:require [demo.catalog.atom.example.layout.page :as page]
            [demo.catalog.atom.example.layout.page-header :as page-header]
            [demo.catalog.atom.example.layout.page-title :as page-title]
            [demo.catalog.atom.example.layout.text-block :as text-block]
            [demo.catalog.atom.example.layout.centered-block :as centered-block]
            [demo.catalog.atom.example.layout.markdown-block :as markdown-block]
            [demo.catalog.atom.example.layout.frame :as frame]
            [demo.catalog.atom.example.layout.section :as section]
            [demo.catalog.atom.example.layout.layout-grid :as layout-grid]
            [demo.catalog.atom.example.layout.responsive-grid :as responsive-grid]
            [demo.catalog.atom.example.layout.carousel :as carousel]))


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
   [layout-grid/example]
   [responsive-grid/example]

   [carousel/carousel-ex-1]
   [carousel/carousel-ex-2]
   [carousel/carousel-ex-3]
   [carousel/carousel-ex-4]])
