
(ns technologies
  (:require [bh-ui.atom.bhui.tabbed-panel :as tabbed-panel]
            [woolybear.ad.layout :as layout]
            [catalog.technologies.overview.data-flow-digraph :as data-flow]
            [catalog.technologies.clojure :as tech-clj]
            [catalog.technologies.clojurescript :as tech-cljs]
            [catalog.technologies.systems-services :as s-s]
            [catalog.technologies.all :as all]))



(def navbar [[:tech/data-flow "Data-flow Design" [data-flow/page]]
             [:tech/system "System / Services" [s-s/page]]
             [:tech/server "Server-side" [tech-clj/page]]
             [:tech/client "Client-side" [tech-cljs/page]]
             [:tech/all "All" [all/page]]])


(defn page
  "Some background on the various technologies we are using"
  []

  [layout/page {:extra-classes :is-fluid}
   [tabbed-panel/tabbed-panel
    :extra-classes {:extra-classes :is-fluid
                    :height        "85vh"}
    :title ""
    :short-name "technologies"
    :description ""
    :children navbar
    :start-panel :tech/data-flow]])

