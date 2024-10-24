(ns demo.catalog.molecule.example.composite.grid-widget
  (:require [bh-ui.core :as bh]
            [woolybear.ad.catalog.utils :as acu]
            [re-frame.core :as re-frame]
            [re-com.core :as rc]
            [woolybear.ad.layout :as layout]))


(defn example []
  (let [container-id     "widget-grid-demo"]

    (fn []
        (acu/demo "Coverage Plan using a Grid for layout"
          "This experiment uses a GRID to layout the various UI components that make up the 'composite'.  Constructs 'coverage-plan', drawing the layout from `:grid-layout` which provides X/Y/W/H for each component on the widget's internal grid."
          [layout/frame
           [bh/grid-container
            :data bh/coverage-plan-ui-def
            :component-id (bh/utils-path->keyword container-id "grid-widget")
            :container-id container-id
            :resizable true
            :tools true]])
        (acu/demo
          "Coverage Plan"
          [rc/alert-box :src (rc/at)
           :alert-type :info
           :heading "Waiting for (demo) Log-in"]))))
