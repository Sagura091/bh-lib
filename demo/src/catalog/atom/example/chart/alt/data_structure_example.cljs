(ns catalog.atom.example.chart.alt.data-structure-example
  (:require [catalog.atom.utils :as example]
            [bh-ui.utils :as utils]
            [reagent.core :as r]
            [taoensso.timbre :as log]))


(log/info "catalog.atom.example.chart.alt.data-structure-example")


(defn example [& {:keys [container-id sample-data] :as params}]
  (let [component-id (utils/path->keyword container-id "chart")
        input-params (assoc params :data sample-data
                                   :component-id component-id)]

    (reduce into [example/component-example] (seq input-params))))
