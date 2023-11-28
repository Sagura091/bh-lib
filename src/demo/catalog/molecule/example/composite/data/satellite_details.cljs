(ns demo.catalog.molecule.example.composite.data.satellite-details
  (:require [demo.catalog.molecule.remote-source :as rs]
            [re-frame.core :as re-frame]))


(defn satellite-details []
  {"ISS"    {:model "duck" :scale 5000}
   "wgs-f1" {:model "satellite" :scale 5000}
   "wgs-f6" {:model "satellite" :scale 5000}
   "wgs-f7" {:model "satellite" :scale 5000}})



(re-frame/dispatch-sync [::rs/register-source :source/satellite-details satellite-details])




(comment

  (satellite-details)


  {:shape     :shape/path :id "polar-sat-1-orbit"
   :positions [[90 -100 alt] [0 -90 alt] [-90 -80 alt] [0 90 alt] [90 -80 alt]]
   :color     [1 1 0 1.0] :width 1 :extrude true}

  {:shape        :shape/model
   :id           "satellite"
   :model-folder "data/models"
   :position     [20 -90 2000e3]
   :url          "satellite"
   :scale        7000}


  ())

