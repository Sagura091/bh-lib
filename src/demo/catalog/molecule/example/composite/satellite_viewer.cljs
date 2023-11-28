(ns demo.catalog.molecule.example.composite.satellite-viewer
  (:require [demo.catalog.molecule.example.composite.data.satellite-details :as details]
            [demo.catalog.molecule.example.composite.data.satellites :as satellites]
            [demo.catalog.molecule.example.composite.source-fn.add-color :as add-color]
            [demo.catalog.molecule.example.composite.source-fn.model-3d :as add-model]
            [demo.catalog.molecule.example.composite.source-fn.orbital-path :as orbit]
            [demo.catalog.molecule.example.composite.source-fn.extract-shapes :as extract]))





; does the data assemble correctly?
(comment
  (def next-color (atom -1))

  (satellites/satellites)
  (details/satellite-details)


  (let [next-color (atom -1)]
   (-> (satellites/satellites)
     (add-color/fn-add-color* next-color)
     (add-model/fn-3d-model* (details/satellite-details))
     (orbit/fn-orbital-path*)
     (extract/fn-extract-shapes*)))

  ())



; now, we can play with satellite.js and the TLEs
