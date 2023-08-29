(ns demo.pages.atoms
  (:require [bh-ui.core :as bh]
            [demo.catalog.atom.all :as all-demo]
            [demo.catalog.atom.astrouxds :as astro-demo]
            [demo.catalog.atom.buttons :as buttons-demo]
            [demo.catalog.atom.cards :as cards-demo]
            [demo.catalog.atom.charts :as charts-demo]
            [demo.catalog.atom.fast-charts :as fast-charts-demo]
            [demo.catalog.atom.containers :as containers-demo]
            [demo.catalog.atom.diagrams :as diagrams-demo]
            [demo.catalog.atom.experimental :as experimental]
            [demo.catalog.atom.forms :as forms-demo]
            [demo.catalog.atom.icons :as icons-demo]
            [demo.catalog.atom.layouts :as layout-demo]
            [demo.catalog.atom.miscellaneous :as misc]
            [demo.catalog.atom.re-com :as re-com-demo]

            [woolybear.ad.layout :as layout]))


(def atom-navbar [[:atoms/layouts "Layout" [layout-demo/examples]]
                  [:atoms/containers "Containers" [containers-demo/examples]]
                  [:atoms/cards "Cards" [cards-demo/examples]]
                  [:atoms/charts "Charts" [charts-demo/page]]
                  [:atoms/fast-charts "Fast Charts" [fast-charts-demo/page]]
                  [:atoms/diagrams "Diagrams" [diagrams-demo/examples]]
                  [:atoms/icons "Icons / Images" [icons-demo/examples]]
                  [:atoms/buttons "Buttons" [buttons-demo/examples]]
                  [:atoms/forms "Forms" [forms-demo/examples]]
                  [:atoms/re-com "Re-com" [re-com-demo/examples]]
                  [:atoms/astro "AstroUXDS" [astro-demo/examples]]
                  [:atoms/misc "Misc." [misc/examples]]
                  [:atoms/experimental "Experimental" [experimental/examples]]
                  [:atoms/all "All" [all-demo/examples]]])


(defn page
  "Top-level AD Atom page"
  []

  [layout/page {:extra-classes :is-fluid}

   ;[layout/page-header {:extra-classes :is-fluid}
   ; [:h1.has-text-info "'Atoms'"]]

   [bh/bh-tabbed-panel
    :extra-classes {:extra-classes :is-fluid
                    :height        "85vh"}
    :title ""
    :short-name "atoms"
    :description ""
    :children atom-navbar
    :start-panel :atoms/layouts]])



