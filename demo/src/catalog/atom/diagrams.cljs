(ns catalog.atom.diagrams
  (:require [catalog.atom.example.diagram.flow :as flow]
            [catalog.atom.example.diagram.editable-digraph :as editable]))


(defn examples []
  [:div
   ;[flow/example]
   [editable/example]])
