(ns demo.src.catalog.atom.example.layout.centered-block
  (:require [woolybear.ad.utils :as acu]
            [woolybear.ad.layout :as layout]))


(defn example []
  (acu/demo "Centered Block"
    "Centers itself horizontally on the page."
    [layout/centered {:extra-classes :width-50}
     [layout/text-block acu/lorem]]
    '[layout/centered {:extra-classes :width-50}
      [layout/text-block acu/lorem]]))
