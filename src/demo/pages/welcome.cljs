(ns demo.pages.welcome
  (:require [woolybear.ad.layout :as layout]
            [re-com.core :as rc]
            [woolybear.packs.flex-panel :as flex]
            [demo.catalog.welcome.how-to-use :as how-to-use]
            [demo.catalog.welcome.rationale :as rationale]
            [demo.catalog.welcome.examples :as examples]
            [demo.catalog.welcome.installing :as installing]
            [demo.catalog.welcome.adding-catalog :as adding-catalog]))



(defn page []

  [layout/page {:extra-classes :is-fluid}

   [layout/page-header {:extra-classes :is-fluid}
    [:h1.has-text-info "Welcome to the Black Hammer UI Component Catalog"]
    [layout/markdown-block]

    [rc/gap :size "10px"]]

   [flex/flex-panel {:extra-classes :is-fluid
                     :height "80vh"}

    [layout/page-body {:extra-classes :is-fluid}
     [layout/frame {:extra-classes :is-fluid}
      [how-to-use/overview]]

     [layout/frame {:extra-classes :is-fluid}
      [rationale/overview]]

     [layout/frame {:extra-classes :is-fluid}
      [examples/overview]]

     [layout/frame {:extra-classes :is-fluid}
      [installing/overview]]

     [layout/frame {:extra-classes :is-fluid}
      [adding-catalog/overview]]]]])


