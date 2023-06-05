(ns catalog.atom.astrouxds
      "Catalog and demonstrations of available AstroUXDS components."
      (:require [catalog.atom.example.astrouxds.button :as button]
                [catalog.atom.example.astrouxds.classification-marking :as cm]
                [catalog.atom.example.astrouxds.classification-list :as cl]
                [catalog.atom.example.astrouxds.status :as status]
                [catalog.atom.example.astrouxds.progress-bar :as progress-bar]
                [catalog.atom.example.astrouxds.slider :as slider]
                [catalog.atom.example.astrouxds.radio-button :as rb]
                [catalog.atom.example.astrouxds.table :as table]))


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
