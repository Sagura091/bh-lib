(ns demo.catalog.atom.diagrams
  (:require [demo.catalog.atom.example.diagram.flow :as flow]
            [demo.catalog.atom.example.diagram.editable-digraph :as editable]))


(defn examples []
  [:div
   ;[flow/example]
   [editable/example]])
