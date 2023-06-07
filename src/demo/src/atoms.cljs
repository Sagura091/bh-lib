(ns demo.src.atoms
  (:require [bh-ui.atom.bhui.tabbed-panel :as tabbed-panel]
            [demo.src.catalog.atom.all :as all-demo]
            [demo.src.catalog.atom.astrouxds :as astro-demo]
            [demo.src.catalog.atom.buttons :as buttons-demo]
            [demo.src.catalog.atom.cards :as cards-demo]
            [demo.src.catalog.atom.charts :as charts-demo]
            [demo.src.catalog.atom.containers :as containers-demo]
            [demo.src.catalog.atom.diagrams :as diagrams-demo]
            [demo.src.catalog.atom.experimental :as experimental]
            [demo.src.catalog.atom.forms :as forms-demo]
            [demo.src.catalog.atom.icons :as icons-demo]
            [demo.src.catalog.atom.layouts :as layout-demo]
            [demo.src.catalog.atom.miscellaneous :as misc]
            [demo.src.catalog.atom.re-com :as re-com-demo]

            [woolybear.ad.layout :as layout]))


(def atom-navbar [[:atoms/layouts "Layout" [layout-demo/examples]]
                  [:atoms/containers "Containers" [containers-demo/examples]]
                  [:atoms/cards "Cards" [cards-demo/examples]]
                  [:atoms/charts "Charts" [charts-demo/page]]
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

   [tabbed-panel/tabbed-panel
    :extra-classes {:extra-classes :is-fluid
                    :height        "85vh"}
    :title ""
    :short-name "atoms"
    :description ""
    :children atom-navbar
    :start-panel :atoms/layouts]])



