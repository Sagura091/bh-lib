(ns demo.catalog.atom.example.experimental.react-table
  (:require
    [woolybear.ad.layout :as layout]
    [woolybear.ad.catalog.utils :as acu]
    [bh-ui.core :as bh]
    [reagent.core :as r]
    [woolybear.ad.icons :as icons]))


(def data {:title    "Targets"
           :c-o-c    [{:step      :generated
                       :by        "demo.catalog.atom.example.experimental.react-table"
                       :version   "generated"
                       :at        "dummy-date"
                       :signature "dummy-uuid"}]
           :metadata {:title  "Targets"
                      :type   :tabular
                      :id     :AoI
                      :fields {:AoI :string :Symbol :string :include :boolean}}

           :data     [{:Symbol "#FFFF00" :include false :AoI "Fire-prst-001"}
                      {:Symbol "#00FFFF" :include false :AoI "Ft-202210-0010"}
                      {:Symbol "#0000FF" :include false :AoI "Ft-202210-0011"}
                      {:Symbol "#FFA500" :include false :AoI "Ft-202210-0012"}
                      {:Symbol "#808080" :include false :AoI "Ft-202210-0013"}
                      {:Symbol "#6495ED" :include false :AoI "Ft-202210-0014"}
                      {:Symbol "#008B8B" :include false :AoI "Ft-202210-0015"}
                      {:Symbol "#DAA520" :include false :AoI "Ft-202210-0001"}
                      {:Symbol "#00BFFF" :include false :AoI "Ft-202210-0002"}
                      {:Symbol "#8FBC8F" :include false :AoI "Ft-202210-0003"}
                      {:Symbol "#9400D3" :include false :AoI "Ft-202210-0004"}]})
(def data-config {:table-type :standard                     ;specify table type, :standard or :expandable
                  :columns    [{:colHeader     "Include?"       ; specifies what is rendered for each column header.
                                :colId         :include         ; unique column id
                                :render        :check-box-cell}

                               {:colHeader     "Symbol"
                                :colId         :Symbol
                                :sortType      "alphanumeric"}

                               {:colHeader     "AoI"
                                :colId         :AoI
                                :disableSortBy false}

                               {:colHeader     "All"
                                :colProp       :select-all      ; renders button in column header that switches value in every row to 'true'
                                :colSelect     :include         ; specify which column to switch value
                                :colId         :select-all
                                :render        :fa-icon
                                :params        {:color :red
                                                :icon  :edit}}

                               {:colHeader     "None"
                                :colProp       :select-none     ; renders button in column header that switches value in every row to 'false'
                                :colSelect     :include         ; specify which column to switch value
                                :colId         :none
                                :render        :fa-icon
                                :params        {:icon :save
                                                :color :green}}]})


(def group-data {:data [{:Symbol "#FFFF00" :time 0 :include false :AoI "Fire-prst-001"}
                        {:Symbol "#00FFFF" :time 0 :include false :AoI "Ft-202210-0010"}
                        {:Symbol "#0000FF" :time 0 :include false :AoI "Ft-202210-0011"}
                        {:Symbol "#FFA500" :time 2 :include false :AoI "Ft-202210-0012"}
                        {:Symbol "#808080" :time 2 :include false :AoI "Ft-202210-0013"}
                        {:Symbol "#6495ED" :time 2 :include false :AoI "Ft-202210-0014"}
                        {:Symbol "#008B8B" :time 2 :include false :AoI "Ft-202210-0015"}
                        {:Symbol "#DAA520" :time 1 :include false :AoI "Ft-202210-0001"}
                        {:Symbol "#00BFFF" :time 1 :include false :AoI "Ft-202210-0002"}
                        {:Symbol "#8FBC8F" :time 1 :include false :AoI "Ft-202210-0003"}
                        {:Symbol "#9400D3" :time 3 :include false :AoI "Ft-202210-0004"}]})
(def group-data-config {:table-type :expandable             ;specify table type, :standard or :expandable
                        :group-by   :time                   ;specify which column you want to group rows by
                        :columns    [{:colProp   :expandable ; column property for expandable column
                                      :colHeader ""
                                      :colId     :expander}

                                     {:colHeader "Time"
                                      :colId     :time
                                      :disableSortBy false}

                                     {:colHeader "Include?"
                                      :colId     :include
                                      :render    :check-box-cell}

                                     {:colId     :Symbol
                                      :colHeader "Symbol"}
                                     {:colHeader "AoI"
                                      :colId     :AoI}

                                     {:colHeader "All"
                                      :colProp   :select-all
                                      :colSelect :include
                                      :colId     :select-all
                                      :render    :fa-icon
                                      :params    {:color :green
                                                  :icon  :save}}

                                     {:colHeader "None"
                                      :colProp   :select-none
                                      :colSelect :include
                                      :colId     :none}]})


(def table-style {:width                  "600px"
                  :height                 "300px"
                  :text-color             "black"
                  :header-bg-color        "lightgray"
                  :body-bg-color          "whitesmoke"
                  :table-border           "2px solid black"
                  :row-border-color       "lightgray"
                  :expand-row-icon        "\uD83D\uDC49"
                  :fold-row-icon          "\uD83D\uDC47"
                  :sort-up-arrow-icon     "\u2B06"
                  :sort-down-arrow-icon   "\u2B07"
                  :sort-not-selected-icon "\u25BC"
                  :row-bg-color           "white"})




(defn standard-table []
  (acu/demo
    "React-Table Standard Table"
    [layout/centered {:extra-classes :width-50}
     [bh/react-table
      ; TODO: should this be the norm, or should we pass the complex data in
      ;       and fix up how :source/locals passes data to downstream components
      :data data
      :config data-config
      :style table-style]]))


(defn expandable-table []
  (acu/demo
    "React-Table Expandable Table"
    [layout/centered {:extra-classes :width-50}
     [bh/react-table
      :data group-data
      :config group-data-config
      :style table-style]]))



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
                               :columns    [{:colHeader "Subchannel Group" :colId :subchannel-group}
                                            {:colHeader "Super Subchannel Group" :colId :super-subchannel-group}
                                            {:colHeader "Uplink Subchannel Group Route" :colId :uplink-subchannel-group-route}
                                            {:colHeader "Downlink Subchannel Group" :colId :downlink-subchannel-group-route}
                                            {:colHeader "Uplink Channel" :colId :uplink-channel}
                                            {:colHeader "Uplink Start Frequency (MHz)" :colId :uplink-start-freq}
                                            {:colHeader "Uplink Stop Frequency (MHz)" :colId :uplink-stop-freq}
                                            {:colHeader "Uplink Start Subchannel" :colId :uplink-start-subchannel}]})


(defn subchannel-table []
  (acu/demo
    "Subchannel Table"
    [layout/centered {:extra-classes :width-50}
     [bh/react-table
      :data subchannel-groups-data
      :config subchannel-groups-config
      :style table-style]]))
