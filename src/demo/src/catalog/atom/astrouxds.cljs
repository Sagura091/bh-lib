(ns demo.src.catalog.atom.astrouxds
      "demo.src.catalog and demonstrations of available AstroUXDS components."
      (:require [demo.src.catalog.atom.example.astrouxds.button :as button]
                [demo.src.catalog.atom.example.astrouxds.classification-marking :as cm]
                [demo.src.catalog.atom.example.astrouxds.classification-list :as cl]
                [demo.src.catalog.atom.example.astrouxds.status :as status]
                [demo.src.catalog.atom.example.astrouxds.progress-bar :as progress-bar]
                [demo.src.catalog.atom.example.astrouxds.slider :as slider]
                [demo.src.catalog.atom.example.astrouxds.radio-button :as rb]
                [demo.src.catalog.atom.example.astrouxds.table :as table]))


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
