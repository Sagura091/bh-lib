(ns demo.src.catalog.atom.containers
  "demo.src.catalog and demonstrations of available container components."
  (:require [demo.src.catalog.atom.example.container.v-scroll-panel :as v-scroll-panel]
            [demo.src.catalog.atom.example.container.shy-block :as shy-block]
            [demo.src.catalog.atom.example.container.flex-panel :as flex-panel]
            [demo.src.catalog.atom.example.container.navbar :as navbar]))


; TODO: do we need this in an RCCST namespace, or can we just grab it from woolybear/demo.src.catalog?

(defn examples
  []
  [:div
   [v-scroll-panel/example]
   [shy-block/example]
   [flex-panel/example]
   [navbar/example]])

