
(ns demo.src.molecules
  (:require [bh-ui.tabbed-pane.utils :as tab-utils]
            [bh-ui.atom.bhui.navbar :as navbar]
            [demo.src.catalog.molecule.general :as general]
            [demo.src.catalog.molecule.all :as all]
            [bh-ui.atom.bhui.tabbed-panel :as tabbed-panel]
            [woolybear.ad.layout :as layout]))



(def navbar [[:molecules/general "General" [general/demo.src.catalog]]
             [:molecules/all "All" [all/demo.src.catalog]]])


(defn page
  "Page to explore the various 'molecules' (more complex UI elements)"
  []

  [layout/page {:extra-classes :is-fluid}

   ;[layout/page-header {:extra-classes :is-fluid}
   ; [:h1.has-text-info "'Molecules'"]]

   [tabbed-panel/tabbed-panel
    :extra-classes {:extra-classes :is-fluid
                    :height "85vh"}

    :title ""
    :description ""
    :short-name "molecules"
    :children navbar
    :start-page :molecules/general]])



