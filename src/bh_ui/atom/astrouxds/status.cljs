(ns bh-ui.atom.astrouxds.status
  (:require ["@astrouxds/react" :refer [RuxStatus]]))

(defn status [status]
  [:> RuxStatus {:status status}])