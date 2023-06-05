
(ns organisms
  (:require [taoensso.timbre :as log]
            [woolybear.ad.layout :as layout]
            [catalog.organism.ui-grid :as ui-grid]))


(log/info "catalogs.organisms")


(defn page
  "Atomic Design 'Organisms' page"
  []

  [layout/page {:extra-classes :is-fluid}
   [ui-grid/page]])


