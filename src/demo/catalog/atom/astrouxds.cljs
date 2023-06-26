(ns demo.catalog.atom.astrouxds
      "Catalog and demonstrations of available AstroUXDS components."
      (:require [demo.catalog.atom.example.astrouxds.button :as button]
                [demo.catalog.atom.example.astrouxds.classification-marking :as cm]
                [demo.catalog.atom.example.astrouxds.classification-list :as cl]
                [demo.catalog.atom.example.astrouxds.status :as status]
                [demo.catalog.atom.example.astrouxds.progress-bar :as progress-bar]
                [demo.catalog.atom.example.astrouxds.slider :as slider]
                [demo.catalog.atom.example.astrouxds.radio-button :as rb]
                [demo.catalog.atom.example.astrouxds.table :as table]))


(defn examples
      []

      [:div
       [button/example]
       [cl/example]
       [cm/example]
       [status/example]
       [progress-bar/example]
       [slider/example]
       [rb/example]
       [table/example]])
