
(ns demo.src.templates
  (:require [taoensso.timbre :as log]
            [woolybear.ad.layout :as layout]
            [bh-ui.atom.bhui.tabbed-panel :as tabbed-panel]))


(log/info "demo.src.catalogs.templates")


(def navbar [[:templates/all "All" [:div "all Templates"]]])


(defn page
  "Atomic Design 'Templates' page"
  []

  [layout/page {:extra-classes :is-fluid}
   [tabbed-panel/tabbed-panel
    :extra-classes {:extra-classes :is-fluid
                    :height "85vh"}
    :title ""
    :short-name "templates"
    :description ""
    :children navbar
    :start-panel :templates/all]])
