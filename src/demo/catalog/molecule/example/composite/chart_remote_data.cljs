(ns demo.catalog.molecule.example.composite.chart-remote-data
  (:require [bh-ui.core :as bh]
            [demo.catalog.molecule.remote-source :as rs]
            [bh-ui.subs :as subs]
            [cljs-uuid-utils.core :as uuid]
            [bh-ui.version :as version]
            [re-com.core :as rc]
            [re-frame.core :as re-frame]
            [reagent.core :as r]
            [taoensso.timbre :as log]
            [woolybear.ad.catalog.utils :as acu]
            [woolybear.ad.layout :as layout]))


(log/info "demo.catalog.molecule.example.composite.chart-remote-data")


(defn- measurements-source []
  ;(log/info "measurements-source GENERATING")

  {:title    "Measurements"
   :c-o-c    [{:step      :generated
               :by        "bh-lib.demo.remote-data-source.measurements"
               :version   version/version
               :at        (str (js/Date.))
               :signature (str (uuid/make-random-uuid))}]
   :metadata {:type   :tabular
              :id     :name
              :title  "Tabular Measurement Data with Metadata"
              :fields {:name :string :uv :number :pv :number :tv :number :amt :number}}
   :data     (bh-ui.utils.example-data/random-entity-data
               ["Page A" "Page B" "Page C" "Page D" "Page E" "Page F"])})


(re-frame/dispatch-sync [::rs/register-source :source/measurements measurements-source])


(defn example []
  (let [container-id "chart-remote-data-demo"]

    (fn []
      (acu/demo "Bar chart of remote data"
        "This example shows a Bar Chart displaying data via a subscription to the Server"
        [layout/frame
         ;;
         ;; NOTE: the :height MUST be specified here since the ResponsiveContainer down in bowels of the chart needs a height
         ;; in order to actually draw the Recharts components. just saying "100%" doesn't work, since the
         ;; that really means "be as big as you need" and ResponsiveContainer then doesn't know what to do.
         ;;
         [:div.molecule-content
          [bh/grid-container
           :data (r/atom bh/chart-remote-data-ui-def)
           :component-id (bh/utils-path->keyword container-id "widget")
           :resizable true
           :tools true]]]
        bh/chart-remote-data-src-code))))
;(acu/demo
;  "Bar chart of remote data"
;  [rc/alert-box :src (rc/at)
;   :alert-type :info
;   :heading "Waiting for (demo) Log-in"]
;  bh/chart-remote-data-src-code))))



(comment

  (re-frame/subscribe [::subs/source :source/measurements])


  ())

