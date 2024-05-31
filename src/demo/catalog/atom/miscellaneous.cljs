(ns demo.catalog.atom.miscellaneous
  "Catalog and demonstrations of miscellaneous components that don't fit anywhere else."
  (:require [demo.catalog.atom.example.misc.resium.globe :as r-globe]
            [demo.catalog.atom.example.misc.hex-color-picker :as hex-picker]
            [demo.catalog.atom.example.misc.rgba-color-picker :as rgba-picker]
            [demo.catalog.atom.example.misc.two-d-globe :as two-d-globe]
            [demo.catalog.atom.example.misc.bh.bh-table :as bh-table]
            [demo.catalog.atom.example.misc.bh.meta-bh-table :as meta-bh-table]
            [demo.catalog.atom.example.misc.bh.meta-coc-bh-table :as meta-coc-bh-table]
            [demo.catalog.atom.example.misc.worldwind.globe :as ww-globe]
            [demo.catalog.atom.example.misc.bh.data-table :as data-table]))


(defn examples
  []

  [:div
   [r-globe/example-models]
   [r-globe/example-czml]
   [ww-globe/example]
   [two-d-globe/example]

   [data-table/example]
   [bh-table/example]
   [meta-bh-table/example]
   [meta-coc-bh-table/example]

   [hex-picker/example]
   [rgba-picker/example]])

