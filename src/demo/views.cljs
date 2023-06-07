(ns demo.views
  (:require [bh-ui.atom.bhui.tabbed-panel :as tabbed-panel]
            [re-frame.core :as re-frame]
            [re-com.core :as rc]
            [demo.subs :as subs]
            [demo.src.atoms :as atoms]
            [demo.src.giants :as giants]
            [demo.src.molecules :as molecules]
            [demo.src.organisms :as organisms]
            [demo.src.technologies :as tech]
            [demo.src.templates :as templates]
            [demo.src.welcome :as welcome]
            [woolybear.ad.layout :as layout]))


(def navbar [[:app-bar/welcome "Welcome!" [welcome/page]]
             [:app-bar/tech "Technologies" [tech/page]]
             ;[:app-bar/atoms "'Atoms'" [atoms/page]]
             ;[:app-bar/molecules "'Molecules'" [molecules/page]]
             ;[:app-bar/organisms "'Organisms'" [organisms/page]]
            ; [:app-bar/templates "'Templates'" [templates/page]]
             ;[:app-bar/giants "Giants" [giants/view]]
             ])


(defn view
  []

  [layout/page {:extra-classes :is-fluid}

   [tabbed-panel/tabbed-panel
    :extra-classes {:extra-classes :is-fluid
                    :width "90%"
                    :height        "95vh"}
    :title ""
    :short-name "demo.src.catalog"
    :description ""
    :children navbar
    :start-panel :app-bar/welcome]
   [rc/h-box :src (rc/at)
    :justify :between
    :children [[:p "UI Component demo.src.catalog"]
               [:p (str "version " @(re-frame/subscribe [::subs/version]))]]]])

