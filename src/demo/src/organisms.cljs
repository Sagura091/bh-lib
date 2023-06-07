
(ns demo.src.organisms
  (:require [taoensso.timbre :as log]
            [woolybear.ad.layout :as layout]
            [demo.src.catalog.organism.ui-grid :as ui-grid]))


(log/info "demo.src.catalogs.organisms")


(defn page
  "Atomic Design 'Organisms' page"
  []

  [layout/page {:extra-classes :is-fluid}
   [ui-grid/page]])


