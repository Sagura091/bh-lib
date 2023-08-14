(ns demo.pages.technologies
  (:require [bh-ui.core :as bh]
            [woolybear.ad.layout :as layout]
            [demo.catalog.technologies.overview.data-flow-digraph :as data-flow]
            [demo.catalog.technologies.clojure :as tech-clj]
            [demo.catalog.technologies.clojurescript :as tech-cljs]
            [demo.catalog.technologies.systems-services :as s-s]
            [demo.catalog.technologies.all :as all]))



(def navbar [[:tech/data-flow "Data-flow Design" [data-flow/page]]
             [:tech/system "System / Services" [s-s/page]]
             [:tech/server "Server-side" [tech-clj/page]]
             [:tech/client "Client-side" [tech-cljs/page]]
             [:tech/all "All" [all/page]]])


(defn page
  "Some background on the various technologies we are using"
  []

  [layout/page {:extra-classes :is-fluid}
   [bh/bh-tabbed-panel
    :extra-classes {:extra-classes :is-fluid
                    :height        "85vh"}
    :title ""
    :short-name "technologies"
    :description ""
    :children navbar
    :start-panel :tech/data-flow]])

