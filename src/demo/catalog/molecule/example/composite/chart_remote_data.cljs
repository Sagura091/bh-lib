(ns demo.catalog.molecule.example.composite.chart-remote-data
  (:require [bh-ui.core :as bh]
            [demo.catalog.molecule.remote-source :as rs]
            [demo.catalog.molecule.local-storage :as storage]
            [bh-ui.subs :as subs]
            [cljs-uuid-utils.core :as uuid]
            [bh-ui.version :as version]
            [re-frame.core :as re-frame]
            [reagent.core :as r]
            [taoensso.timbre :as log]
            [woolybear.ad.catalog.utils :as acu]
            [woolybear.ad.layout :as layout]))


(log/info "demo.catalog.molecule.example.composite.chart-remote-data")


(defn- measurements-source []
  ;(log/info "measurements-source GENERATING")

  {:title    "Measurements"
   :c-o-c    [{:coc/step      :generated
               :coc/by        "bh-lib.demo.remote-data-source.measurements"
               :coc/version   version/version
               :coc/at        (str (js/Date.))
               :coc/signature (str (uuid/make-random-uuid))}]
   :metadata {:type   :data/tabular
              :id     :name
              :title  "Tabular Measurement Data with Metadata"
              :fields {:name :string :uv :number :pv :number :tv :number :amt :number}}
   :data     (bh-ui.utils.example-data/random-entity-data
               ["Page A" "Page B" "Page C" "Page D" "Page E" "Page F"])})


(re-frame/dispatch-sync [::rs/register-source :source/measurements measurements-source])


(def ui-definition
  {:mol/components  {"measurements" {:atm/role :source/remote :atm/kind :source/measurements}
                     "chart"        {:atm/role :ui/component :atm/kind :rechart/area-2}}

   :mol/links       {"measurements" {:data {"chart" :data}}}

   :mol/grid-layout [{:i "chart" :x 0 :y 0 :w 20 :h 11 :static true}]})


(defn example []
  (let [container-id "chart-remote-data-demo"
        component-id (bh/utils-path->keyword container-id "molecule")
        dsl          (r/atom (or (storage/load-from-local-storage component-id) ui-definition))] ;bh/chart-remote-data-ui-def))]

    (fn []
      (acu/demo "Bar chart of remote data"
        "This example shows a (Recharts) Chart displaying data via a subscription to the Server"
        [layout/frame
         ;;
         ;; NOTE: the :height MUST be specified here since the ResponsiveContainer down in bowels of the chart needs a height
         ;; in order to actually draw the Recharts components. just saying "100%" doesn't work, since the
         ;; that really means "be as big as you need" and ResponsiveContainer then doesn't know what to do.
         ;;
         [:div.molecule-content
          [bh/grid-container
           :data dsl
           :component-id component-id
           :save-fn storage/save-to-local-storage
           :resizable true
           :tools true]]]
        bh/chart-remote-data-src-code))))



(comment

  (re-frame/subscribe [::subs/source :source/measurements])


  ())

