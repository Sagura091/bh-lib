(ns demo.catalog.molecule.example.composite.dsl-example
  (:require [bh-ui.core :as bh]
            [re-com.core :as rc]
            [re-frame.core :as re-frame]
            [reagent.core :as r]
            [taoensso.timbre :as log]
            [woolybear.ad.catalog.utils :as acu]
            [woolybear.ad.layout :as layout]))


(log/info "demo.catalog.molecule.example.composite.dsl-example")


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

(def data-one {:title    "Subchannel Groups"
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

(def data-two {:title    "Subchannel Groups #2"
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

(def table-config {:table-type :standard
                   :columns    [{:colHeader "Subchannel Group" :colId :subchannel-group}
                                {:colHeader "Super Subchannel Group" :colId :super-subchannel-group}
                                {:colHeader "Uplink Subchannel Group Route" :colId :uplink-subchannel-group-route}
                                {:colHeader "Downlink Subchannel Group" :colId :downlink-subchannel-group-route}
                                {:colHeader "Uplink Channel" :colId :uplink-channel}
                                {:colHeader "Uplink Start Frequency (MHz)" :colId :uplink-start-freq}
                                {:colHeader "Uplink Stop Frequency (MHz)" :colId :uplink-stop-freq}
                                {:colHeader "Uplink Start Subchannel" :colId :uplink-start-subchannel}]})


(def mol-def {:mol/components  {"data/one"    {:atm/role :source/local :atm/kind :source/local :atm/default-data data-one}
                                "data/two"    {:atm/role :source/local :atm/kind :source/local :atm/default-data data-two}

                                "table-one"   {:atm/role :ui/component :atm/kind :react-table/table :atm/default-config table-config}
                                "table-two"   {:atm/role :ui/component :atm/kind :react-table/table :atm/default-config table-config}
                                "table-three" {:atm/role :ui/component :atm/kind :react-table/table :atm/default-config table-config}
                                "table-four"  {:atm/role :ui/component :atm/kind :react-table/table :atm/default-config table-config}

                                "v-scroll-1"  {:atm/role  :ui/container :atm/kind :rc/v-scroll :atm/children ["table-one" "table-two"]
                                               :atm/label "Tables 1 & 2"}
                                "v-scroll-2"  {:atm/role  :ui/container :atm/kind :rc/v-scroll :atm/children ["table-three" "table-four"]
                                               :atm/label "Tables 3 & 4"}

                                "carousel"    {:atm/role           :ui/container :atm/kind :bhui/carousel
                                               :atm/children       ["v-scroll-1" "v-scroll-2"]
                                               :atm/default-config {:showIndicators true :showThumbs true}}}


              :mol/links       {"data/one" {:data {"table-one" :data
                                                   "table-two" :data}}
                                "data/two" {:data {"table-three" :data
                                                   "table-four"  :data}}}

              :mol/grid-layout [{:i "carousel" :x 0 :y 0 :w 10 :h 10}]})

              ;:mol/flow-nodes  (:nodes demo.catalog.atom.example.diagram.flow-diagram/dsl-layout-gold)
              ;:mol/flow-edges  (:edges demo.catalog.atom.example.diagram.flow-diagram/dsl-layout-gold)})


(defn example []
  (let [container-id "dsl-example"
        component-id (bh/utils-path->keyword container-id "molecule")]
    (fn []
      (acu/demo "DSL Example"
        "The example molecule is intended to show how all the various elements of the DSL
can be used to together to build complex UIs"
        [layout/frame
         [:div.molecule-content
          [bh/grid-container
           :data (r/atom mol-def)
           :component-id component-id
           :resizable true
           :tools true]]]

        '[]))))