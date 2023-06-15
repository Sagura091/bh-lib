(ns demo.catalog.atom.diagrams
  (:require [demo.catalog.atom.example.diagram.editable-digraph :as editable]
            [demo.catalog.atom.example.diagram.flow-diagram :as flow-diagram]))


(defn examples []
  [:div
   ;[editable/example]
   [flow-diagram/example]])
