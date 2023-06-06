(ns demo.src.catalog.atom.diagrams
  (:require [demo.src.catalog.atom.example.diagram.flow :as flow]
            [demo.src.catalog.atom.example.diagram.editable-digraph :as editable]))


(defn examples []
  [:div
   ;[flow/example]
   [editable/example]])
