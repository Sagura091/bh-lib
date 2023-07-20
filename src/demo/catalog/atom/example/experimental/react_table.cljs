(ns demo.catalog.atom.example.experimental.react-table
  (:require
    [woolybear.ad.layout :as layout]
    [woolybear.ad.catalog.utils :as acu]
    [bh-ui.atom.experimental.react-table :as react-table]
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
                  :columns    [{:colHeader "Include?"       ; specifies what is rendered for each column header.
                                :colId     :include         ; unique column id
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
                                :colProp   :select-all      ; renders button in column header that switches value in every row to 'true'
                                :colSelect :include         ; specify which column to switch value
                                :colId     :select-all
                                :render    (fn []
                                             (r/as-element [icons/icon {:icon "save" :extra-classes :has-text-danger}]))}

                               {:colHeader "None"
                                :colProp   :select-none     ; renders button in column header that switches value in every row to 'false'
                                :colSelect :include         ; specify which column to switch value
                                :colId     :none
                                :render    (fn []
                                             (r/as-element [icons/icon {:icon "edit" :extra-classes :has-text-success}]))}]})


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
                                      :colId     :time}

                                     {:colHeader "Include?"
                                      :colId     :include
                                      :render    (fn [value update-val & rest]
                                                   (r/as-element [:input
                                                                  {:type     "checkbox"
                                                                   :checked  value
                                                                   :onChange (fn [e] (update-val (not value) rest))}]))}

                                     {:colId     :Symbol
                                      :colHeader "Symbol"
                                      :render    (fn [value]
                                                   (r/as-element [:div {:style {:background-color (str value)
                                                                                :height           "20px"
                                                                                :width            "20px"
                                                                                :border-radius    "50%"}}]))}
                                     {:colHeader "AoI"
                                      :colId     :AoI}

                                     {:colHeader "All"
                                      :colProp   :select-all
                                      :colSelect :include
                                      :colId     :select-all
                                      :render    (fn []
                                                   (r/as-element [icons/icon {:icon "save" :extra-classes :has-text-danger}]))}

                                     {:colHeader "None"
                                      :colProp   :select-none
                                      :colSelect :include
                                      :colId     :none
                                      :render    (fn []
                                                   (r/as-element [icons/icon {:icon "edit" :extra-classes :has-text-success}]))}]})


(def table-style {:width            "600px"
                  :height           "300px"
                  :text-color       "black"
                  :header-bg-color  "lightgray"
                  :body-bg-color    "whitesmoke"
                  :table-border     "2px solid black"
                  :row-border-color "lightgray"
                  :expand-row-icon  "\uD83D\uDC49"
                  :fold-row-icon    "\uD83D\uDC47"})


(defn standard-table []
  (acu/demo
    "React-Table Standard Table"
    [layout/centered {:extra-classes :width-50}
     [react-table/table-component
      ; TODO: should this be the norm, or should we pass the complex data in
      ;       and fix up how :source/locals passes data to downstream components
      :data data
      :config data-config
      :style table-style]]))


(defn expandable-table []
  (acu/demo
    "React-Table Expandable Table"
    [layout/centered {:extra-classes :width-50}
     [react-table/table-component
      :data group-data
      :config group-data-config
      :style table-style]]))
