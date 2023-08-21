(ns demo.catalog.molecule.example.two-d-three-d-globe
  (:require [demo.catalog.atom.utils :as example]
            [bh-ui.core :as bh]))


(defn example []
  (let [container-id "two-d-three-d-globe-demo"]
    [example/component-example
     :title "2D/3D Globe"
     :container-id container-id
     :description "A combination of the 2d and 3d globe components. Both show the same data."
     :data bh/two-d-three-d-globe-sample-data
     :component bh/two-d-three-d-globe
     :component-id (bh/utils-path->keyword container-id "globe")
     :source-code bh/two-d-three-d-globe-src-code]))
