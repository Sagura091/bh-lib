(ns demo.catalog.molecule.example.composite.signal-analysis
  (:require [bh-ui.molecule.grid-container :as grid]
            [bh-ui.utils.helpers :as h]
            [bh-ui.atom.chart.area-chart :as chart]
            [woolybear.ad.icons :as icons]
            [reagent.core :as r]
            [taoensso.timbre :as log]
            [woolybear.ad.catalog.utils :as acu]
            [woolybear.ad.layout :as layout]))


(def tab-config {:labels ["One" "Two" "Three"]})            ;"Two" "Three"]})

(def data-one {:title    "Set One"
               :c-o-c    [{:step      :generated
                           :by        "demo.catalog.atom.example.experimental.react-table"
                           :version   "generated"
                           :at        "dummy-date"
                           :signature "dummy-uuid"}]
               :metadata {:title  "Set One"
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
(def data-three {:title    "Set Three"
                 :c-o-c    [{:step      :generated
                             :by        "demo.catalog.atom.example.experimental.react-table"
                             :version   "generated"
                             :at        "dummy-date"
                             :signature "dummy-uuid"}]
                 :metadata {:title  "Set Tree"
                            :type   :tabular
                            :id     :AoI
                            :fields {:AoI :string :Symbol :string :include :boolean}}

                 :data     [{:Symbol "#FF0000" :include false :AoI "Theta"}
                            {:Symbol "#000FF" :include false :AoI "Omega"}
                            {:Symbol "#0a0aFF" :include false :AoI "Phi"}
                            {:Symbol "#3a3a3a" :include false :AoI "Delta"}]})

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


(def molecule-def
  {:mol/components  {"signal-trace" {:atm/role :ui/component :atm/kind :rechart/line}
                     "tabs"         {:atm/role           :ui/component :atm/kind :rc/h-tabs
                                     :atm/children       ["table-one" "table-two" "table-three"]
                                     :atm/default-config tab-config}
                     "table-one"    {:atm/role :ui/component :atm/kind :react-table/table :atm/default-config table-config}
                     "table-two"    {:atm/role :ui/component :atm/kind :react-table/table :atm/default-config table-config}
                     "table-three"  {:atm/role :ui/component :atm/kind :react-table/table :atm/default-config table-config}

                     "signal-data"  {:atm/role :source/local :atm/kine :signal/one :default chart/sample-data}
                     "data-one"     {:atm/role :source/local :atm/kind :data/one :default data-one}
                     "data-two"     {:atm/role :source/local :atm/kind :data/two :default data-two}
                     "data-three"   {:atm/role :source/local :atm/kind :data/three :default data-three}}

   :mol/links       {"signal-data" {:data {"signal-trace" :data}}
                     "data-one"    {:data {"table-one" :data}}
                     "data-two"    {:data {"table-two" :data}}
                     "data-three"  {:data {"table-three" :data}}}

   :mol/grid-layout [{:i "signal-trace" :x 0 :y 0 :w 10 :h 8}
                     {:i "tabs" :x 0 :y 8 :w 10 :h 8}]})


;(def mol-2 {:mol/components  {"tabs"        {:atm/role     :ui/component :atm/kind :rc/h-pill-tabs :atm/default-config tab-config
;                                             :atm/children ["table-one" "table-two" "table-three"]}
;                              "v-scroll"   {:atm/role  :ui/component :atm/kind :rc/v-scroll
;                                            :atm/label "Multiple Tables" :atm/children ["table-one" "table-two" "table-three"]}
;                              "table-one"   {:atm/role           :ui/component :atm/kind :react-table/table :atm/label "One"
;                                             :atm/default-config demo.catalog.atom.example.experimental.react-table/data-config}
;                              "table-two"   {:atm/role           :ui/component :atm/kind :react-table/table :atm/label "Two"
;                                             :atm/default-config demo.catalog.atom.example.experimental.react-table/data-config}
;                              "table-three" {:atm/role           :ui/component :atm/kind :react-table/table :atm/label "Three"
;                                             :atm/default-config demo.catalog.atom.example.experimental.react-table/data-config}
;                              "data-one"    {:atm/role :source/local :atm/kind :topic/data-one :default data-one}
;                              "data-two"    {:atm/role :source/local :atm/kind :topic/data-one :default data-two}
;                              "data-three"  {:atm/role :source/local :atm/kind :topic/data-one :default data-three}}
;
;            :mol/links       {"data-one"   {:data {"table-one" :data}}
;                              "data-two"   {:data {"table-two" :data}}
;                              "data-three" {:data {"table-three" :data}}}
;            :mol/grid-layout [{:i "tabs" :x 0 :y 0 :w 10 :h 10}]})
(def source-code '{})


(defn example []
  [:p "demo.catalog.molecule.example.composite.demo.catalog.molecule.example.composite.signal-analysis"]

  (let [container-id "signal-analysis"
        component-id (h/path->keyword container-id "molecule")]
    (fn []
      (acu/demo "Signal Analysis"
        "This example provides a 'widget' (collection of UI Components) to show signal analysis traces
alongside a table-panel of tables, allowing the user to switch traces and see related information."
        [layout/frame
         [:div.molecule-content
          [grid/component
           :data (r/atom molecule-def)
           :component-id component-id
           :resizable true
           :tools true]]]

        source-code))))


(comment
  @re-frame.db/app-db


  ())


