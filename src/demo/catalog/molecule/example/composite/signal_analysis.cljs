(ns demo.catalog.molecule.example.composite.signal-analysis
  (:require [bh-ui.molecule.grid-container :as grid]
            [bh-ui.utils.helpers :as h]
            [demo.catalog.molecule.example.composite.data.signals :as d]
            [woolybear.ad.icons :as icons]
            [reagent.core :as r]
            [re-frame.core :as re-frame]
            [re-com.core :as rc]
            [bh-ui.utils.locals :as l]
            [day8.re-frame.tracing :refer-macros [fn-traced]]
            [taoensso.timbre :as log]
            [woolybear.ad.catalog.utils :as acu]
            [woolybear.ad.layout :as layout]
            [bh-ui.atom.re-com.input-field :as input-field]))


(def source-code '{})


(def subchannel-tabs {:labels ["Subchannel Groups" "Unauthorized Accesses" "Subnets"
                               "Carriers" "Channels" "Beacons"]})


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;
; region ; Table Data

(def raw-data [["CCS5" "Enter_CCS_superchannel_group_name" "NCR2A.48 EOXA.O" "ECXA.0 NCR2A 48" "NCRA" 30125.00 30127.604 48]
               ["Japan_FO_leg_1o_US" "Japan_FO Jo_US/AUS/MOS" "NCR2A. 68-78_SBXIA.68-78" "SBXIA 68-78_NCR2A 68-78" "NCRA" 30177.083 30205.729 68]
               ["Japan_FO_Leg_1_to_US__SBX4A_68_78_1" "Japan_FO Jo_US/AUS/MOS" "NCR2A. 68-78_SBXIA.68-78" "SBXIA 68-78_NCR2A 68-78" "NCRA" 30177.083 30205.729 68]
               ["Japan_FO_Leg_1_Jo_US_-_SBX4A_68_78_1_-_SBX5A_116_126_1" "Japan_FO Jo_US/AUS/MOS" "NCR2A 68-78_SBX5A.116-126" "SEX5A 116-126_NCR2A.68-78" "NCRA" 30177.083 30205.729 68]])
(def raw-fields {:subchannel-group                :string
                 :super-subchannel-group          :string
                 :uplink-subchannel-group-route   :string
                 :downlink-subchannel-group-route :string
                 :uplink-channel                  :string
                 :uplink-start-freq               :number
                 :uplink-stop-freq                :number
                 :uplink-start-subchannel         :number})

(def subchannel-groups-data {:title    "Subchannel Groups"
                             :c-o-c    [{:step      :generated
                                         :by        "demo.catalog.molecule.example.composite.signal-analysis"
                                         :version   "generated"
                                         :at        "dummy-date"
                                         :signature "dummy-uuid"}]
                             :metadata {:title  "Subchannel Groups"
                                        :type   :tabular
                                        :id     :subchannel-group
                                        :fields raw-fields}

                             :data     (into []
                                         (map (fn [vs]
                                                (zipmap (keys raw-fields) vs))
                                           raw-data))})
(def subchannel-groups-config {:table-type :standard
                               :columns    [{:colHeader "Subchannel Group" :colId :subchannel-group :disableSortBy false}
                                            {:colHeader "Super Subchannel Group" :colId :super-subchannel-group :disableSortBy false}
                                            {:colHeader "Uplink Subchannel Group Route" :colId :uplink-subchannel-group-route :disableSortBy false}
                                            {:colHeader "Downlink Subchannel Group" :colId :downlink-subchannel-group-route :disableSortBy false}
                                            {:colHeader "Uplink Channel" :colId :uplink-channel :disableSortBy false}
                                            {:colHeader "Uplink Start Frequency (MHz)" :colId :uplink-start-freq :disableSortBy false}
                                            {:colHeader "Uplink Stop Frequency (MHz)" :colId :uplink-stop-freq :disableSortBy false}
                                            {:colHeader "Uplink Start Subchannel" :colId :uplink-start-subchannel :disableSortBy false}]})

(def data-two {:title    "Set Two"
               :c-o-c    [{:step      :generated
                           :by        "demo.catalog.atom.example.experimental.react-table"
                           :version   "generated"
                           :at        "dummy-date"
                           :signature "dummy-uuid"}]
               :metadata {:title  "Set Two"
                          :type   :tabular
                          :id     :AoI
                          :fields {:AoI :string :Symbol :string :include :boolean}}

               :data     [{:Symbol "#FFFF00" :include false :AoI "Target Alpha"}
                          {:Symbol "#00FFFF" :include false :AoI "Target Bravo"}
                          {:Symbol "#0000FF" :include false :AoI "Target Charlie"}]})
(def table-config {:table-type :standard                    ;specify table type, :standard or :expandable
                   :columns    [{:colHeader "Include?"      ; specifies what is rendered for each column header.
                                 :colId     :include        ; unique column id
                                 ;include render function if you want to enhance table data
                                 ;Params:
                                 ;value      - value of cell passed from react-table component
                                 ;update-val - callback function to update value
                                 ;rest       - cell info pertaining to react-table component (row index and column id)
                                 :render    (fn [value update-val & rest] ;
                                              (r/as-element [:input
                                                             {:type     "checkbox"
                                                              :checked  value
                                                              :onChange (fn [e] (update-val (not value) rest))}]))}

                                {:colHeader "Symbol"
                                 :colId     :Symbol
                                 :render    (fn [value]
                                              (r/as-element [:div {:style {:background-color (str value)
                                                                           :height           "20px"
                                                                           :width            "20px"
                                                                           :border-radius    "50%"}}]))}

                                {:colHeader "AoI"
                                 :colId     :AoI}

                                {:colHeader "All"
                                 :colProp   :select-all     ; renders button in column header that switches value in every row to 'true'
                                 :colSelect :include        ; specify which column to switch value
                                 :colId     :select-all
                                 :render    (fn []
                                              (r/as-element [icons/icon {:icon "save" :extra-classes :has-text-danger}]))}

                                {:colHeader "None"
                                 :colProp   :select-none    ; renders button in column header that switches value in every row to 'false'
                                 :colSelect :include        ; specify which column to switch value
                                 :colId     :none
                                 :render    (fn []
                                              (r/as-element [icons/icon {:icon "edit" :extra-classes :has-text-success}]))}]})

; endregion

(def mol-2 {:mol/components  {"signal-trace"       {:atm/role :ui/component :atm/kind :fc/line :atm/default-config {:theme        "dark1"
                                                                                                                    :x-axis-title "MHz"
                                                                                                                    :y-axis-title "dBm"
                                                                                                                    :width 1400
                                                                                                                    :height 250}}
                              "tabs"               {:atm/role           :ui/component :atm/kind :rc/h-tabs
                                                    :atm/children       ["subchannel-box" "table-box" "table-box" "table-box" "table-box"]
                                                    :atm/default-config subchannel-tabs}

                              "subchannel-filter"  {:atm/role :ui/component :atm/kind :rc/input-field}

                              "input-data"         {:atm/role :source/local :atm/kind :input/data :atm/default-data ""}

                              "filter-key"         {:atm/role :source/local :atm/kind :input/data :atm/default-data :subchannel-group}

                              "filter-subchannels" {:atm/role :source/fn :atm/kind :fn/filter-fn}


                              "subchannel-box"     {:atm/role  :ui/component :atm/kind :rc/v-box :atm/children ["subchannel-filter"
                                                                                                                "subchannel-table"]
                                                    :atm/style {:border "1px solid" :width "1400px" :height "250px"}}
                              "subchannel-table"   {:atm/role :ui/component :atm/kind :react-table/table :atm/default-config subchannel-groups-config}

                              "table-box"          {:atm/role  :ui/component :atm/kind :rc/box :atm/child "table-two"
                                                    :atm/style {:border "1px solid" :width "1400px" :height "250px"}}
                              "table-two"          {:atm/role :ui/component :atm/kind :react-table/table :atm/default-config table-config}

                              "signal-data"        {:atm/role :source/local :atm/kind :signal/one :atm/default-data d/signal-data}
                              "subchannel-data"    {:atm/role :source/local :atm/kind :data/one :atm/default-data subchannel-groups-data}
                              "data-two"           {:atm/role :source/local :atm/kind :data/two :atm/default-data data-two}}

            :mol/links       {"signal-data"        {:data {"signal-trace" :data}}
                              "subchannel-data"    {:data {"filter-subchannels" :data}}
                              "input-data"         {:data {"subchannel-filter"  :data
                                                           "filter-subchannels" :filter-value}}
                              "data-two"           {:data {"table-two" :data}}
                              "filter-subchannels" {:data {"subchannel-table" :data}}
                              "filter-key"         {:data {"filter-subchannels" :data-key}}}

            :mol/grid-layout [{:i "signal-trace" :x 0 :y 0 :w 20 :h 8 :static true}
                              {:i "tabs" :x 0 :y 8 :w 20 :h 12 :static true}]})


(defn example []
  (let [container-id "signal-analysis"
        component-id (h/path->keyword container-id "molecule")]
    (fn []
      (acu/demo "Signal Analysis"
        "This example provides a 'widget' (collection of UI Components) to show signal analysis traces
alongside a table-panel of tables, allowing the user to switch traces and see related information.

> Note: this example uses somewhat realistic data."
        [layout/frame
         [:div.molecule-content
          [grid/component
           :data (r/atom mol-2)
           :component-id component-id
           :resizable true
           :tools true]]]

        source-code))))


(comment
  @re-frame.db/app-db


  ())


