(ns bh-ui.atom.experimental.react-table
  (:require
    [reagent.core :as r]
    [reagent.dom :as rdom]
    [re-frame.core :as re-frame]
    ["react-table" :as rt]
    [re-com.core :as rc]
    [bh-ui.utils.color :as c]
    [bh-ui.atom.bhui.color-picker :as picker]
    [bh-ui.utils.helpers :as h]
    [bh-ui.utils.locals :as l]
    [taoensso.timbre :as log]))


(def fa-colors {:green ".has-text-success"
                :red   ".has-text-danger"})
(def fa-icons {:save [:i.far.fa-save]
               :edit [:i.far.fa-edit]})

(defn fa-icon [value params update-val & rest]
  [:div [(keyword (str "span.icon" ((:color params) fa-colors))) ((:icon params) fa-icons)]])


(defn checkbox [value params update-val & rest]
  [:input
   {:type     "checkbox"
    :checked  value
    :onChange (fn [e] (update-val (not value) rest))}])


(defn rgba-color-picker [value params update-val & rest]
  (let [showing? (r/atom false)]
    (fn [value params update-val & rest]
      (let [d (js->clj value :keywordize-keys true)]
        ;(log/info "rgba color picker" d)
        [:div
         {:style {:background-color :transparent
                  :border-width     "1px"
                  :text-align       :left}}
         [rc/popover-anchor-wrapper :src (rc/at)
          :showing? @showing?
          :position :below-right
          :anchor [:div {:style    {:padding          "5px 10px 5px 10px"
                                    :background-color (or (c/hash->rgba (:color d)) :green)}
                         :on-click #(swap! showing? not)}
                   (:name d)]
          :popover [rc/popover-content-wrapper :src (rc/at)
                    :close-button? false
                    :no-clip? false
                    :body [picker/rgba-color-picker
                           :color (:color d)
                           :on-change (fn [x]
                                        (update-val (assoc d :color (js->clj x :keywordize-keys true)) rest))]]]]))))


(defn hex-color-picker [value params update-val & rest]
  (let [showing? (r/atom false)]
    ;(log/info "mounting")
    (fn [value params update-val & rest]
      (let [d (into {}
                (for [[k v] (js->clj value)]
                  [(keyword k) v]))]
        ^{:key (str "symb-" (:name d))}
        [:div {:style {:color      :white
                       :text-align :left}}
         [rc/popover-anchor-wrapper :src (rc/at)
          :showing? @showing?
          :position :below-right
          :anchor [:span.icon.has-text-success.is-small
                   [:i.fas.fa-circle
                    {:style    {:color (:color d)}
                     :on-click #(do
                                  (swap! showing? not))}]]
          :popover [rc/popover-content-wrapper :src (rc/at)
                    :close-button? false
                    :no-clip? false
                    :body [picker/hex-color-picker
                           :color (:color d)
                           :on-change (fn [x]
                                        ;(log/info "hex-color" x (js->clj x))
                                        (update-val (assoc d :color (js->clj x)) rest))]]]]))))


(defn aoi [value params update-val & rest]
  [:div                                                     ;{:on-click #(re-frame/dispatch [::demo/demo-update :main-grid.coverage-plan])}
   value])

(defn platform [value params update-val & rest]
  [:div                                                     ;{:on-click #(re-frame/dispatch [::demo/demo-reset :main-grid.coverage-plan])}
   value])


(defn target-edit-save [value params update-val & rest]
  (let [is-editing (r/atom false)]
    (fn []
      ;^{:key (str "edit-" name)}
      [:div {:on-click #(if @is-editing
                          (do
                            (reset! is-editing false))
                          (do
                            (reset! is-editing true)))}
       (if @is-editing
         [:span.icon.has-text-success.is-small [:i.far.fa-save]]
         [:span.icon.has-text-info.is-small [:i.far.fa-edit]])])))


(defn target-delete [value params update-val & rest]
  ;^{:key (str "delete-" name)}
  [:div {:on-click #(do)}
   [:span.icon.has-text-danger.is-small [:i.far.fa-trash-alt]]])


(def cell-mapping (atom {:check-box-cell        checkbox
                         :hex-color-picker-cell hex-color-picker
                         :aoi-cell              aoi
                         :target-edit-save-cell target-edit-save
                         :target-delete-cell    target-delete
                         :rgba-color-picker     rgba-color-picker
                         :platform-cell         platform
                         :fa-icon               fa-icon}))


(defn- table [columns data table-type config]
  ;(log/info "table" (js->clj data))

  (let [^js table (rt/useTable (clj->js {:columns columns :data (or data []) :autoResetExpanded false}) rt/useSortBy rt/useExpanded)]
    [:div {:style {:max-height  (or (:height @config) "300px")
                   :overflow    "auto"
                   :white-space "no-wrap"
                   :width       (or (:width @config) "100%")
                   :border      (or (:table-border @config) "2px solid black")}}
     [:r> "table" (.getTableProps table (clj->js {:style     {:color (or (:text-color @config) "black")}
                                                  :className "table"}))
      [:thead {:style {:backgroundColor (or (:header-bg-color @config) "lightgray")
                       :position        "sticky" :top 0}}
       (let [hgs (.-headerGroups table)]
         (doall
           (for [hg hgs]
             [:r> "tr" (.getHeaderGroupProps hg)
              (doall
                (for [col (.-headers hg)]

                  [:r> "th" (.getHeaderProps col (.getSortByToggleProps col))

                   (.render col "Header")

                   (if (.-canSort col)
                     [:span
                      (let [up-arrow      (:sort-up-arrow-icon @config)
                            down-arrow    (:sort-down-arrow-icon @config)
                            neutral-arrow (:sort-not-selected-icon @config)]
                        (if (.-isSorted col)
                          (if (.-isSortedDesc col)
                            (str " " down-arrow)
                            (str " " up-arrow))
                          (str " " neutral-arrow)))])]))])))]

      [:r> "tbody" (.getTableBodyProps table (clj->js {:style {:backgroundColor (or (:body-bg-color @config) "white")}}))
       (doall
         (for [row (.-rows table)]
           (let [prepareRow (fn [] (.prepareRow table row))]
             (prepareRow)
             (r/as-element [:<> {:key (.-key (.getRowProps row))}
                            [:r> "tr" (.getRowProps row (clj->js {:style {:background-color (or (:row-bg-color @config) "white")}}))
                             (doall
                               (for [cell (.-cells row)]
                                 (let [cellType (if (and (not (.-canExpand row)) (= table-type :expandable))
                                                  "subRowCell"
                                                  "mainRowCell")]
                                   [:r> "td" (.getCellProps cell (clj->js {:style {:borderColor (or (:row-border-color @config) "white-smoke")}}))
                                    (.render cell cellType)])))]]))))]]]))


(defn- sync-data
  "sync data between react-table and external data"
  [orig-data data react-data config]
  (let [reframe-path? (and (coll? orig-data)
                        (not (empty? orig-data))
                        (every? (or keyword? string?) orig-data))
        data-key?     (some? (:data @data))
        d             (if (= :standard (:table-type @config))
                        @react-data
                        (into [] (mapcat #(get %1 :subRows) @react-data)))]
    ;(log/info "sync-data" @react-data)
    (condp = [reframe-path? data-key?]
      [true true] (h/handle-change-path orig-data [[assoc-in [:data] d]])
      [true false] (h/handle-change-path orig-data [[l/set-val [] d]])
      [false true] (swap! data assoc-in [:data] d)
      [false false] (reset! data d))))


(defn- toggle
  "toggle all values to true or false in a column for all rows"
  [value colId orig-data data react-data config]
  (let [type (:table-type @config)]
    ;(log/info @data)
    (cond
      (= type :standard) (reset! react-data (into [] (map #(assoc % colId value) (or (:data @data) @data))))
      (= type :expandable) (reset! react-data (into []
                                                (map
                                                  (fn [m]
                                                    (assoc m :subRows (into [] (map #(assoc % colId value) (:subRows m)))))
                                                  @react-data)))))

  (sync-data orig-data data react-data config))


(defn- update-val
  "update value to a specific row and column"
  [value [orig-data index subRowIndex colId data react-data config]]
  (let [path (if (nil? subRowIndex)
               [index (keyword colId)]
               [index :subRows subRowIndex (keyword colId)])]

    (swap! react-data assoc-in path value)
    (sync-data orig-data data react-data config)))


(defn- configure-expandable-columns
  "configures expandable table properties based on meta-data info"
  [data orig-data react-data config style]
  (into [] (map
             (fn [m]
               {:Header        (cond
                                 (= (:colProp m) :select-all) (r/as-element [:button
                                                                             {:onClick (fn [e]
                                                                                         (toggle true (:colSelect m) orig-data data react-data config))}
                                                                             (str (:colHeader m))])
                                 (= (:colProp m) :select-none) (r/as-element [:button
                                                                              {:onClick (fn [e]
                                                                                          (toggle false (:colSelect m) orig-data data react-data config))}
                                                                              (str (:colHeader m))])
                                 :else (:colHeader m))
                :accessor      (:colId m)
                :sortType      (or (:sortType m) "alphanumeric")
                :disableSortBy (if (= (:disableSortBy m) false)
                                 false true)
                :subRowCell    (if (or (= (:colProp m) :expandable) (= (:group-by @config) (:colId m)))
                                 (fn [] nil)
                                 (fn [cellProps]
                                   (let [value       (.-value cellProps)
                                         index       (js/parseInt (.-id (.-row cellProps)))
                                         subRowIndex (.-index (.-row cellProps))
                                         colId       (keyword (.-id (.-column (.-cell cellProps))))]
                                     (if (contains? m :render)
                                       (r/as-element [((:render m) @cell-mapping) value (:params m) update-val orig-data index subRowIndex colId data react-data config])
                                       (str value)))))
                :mainRowCell   (if (or (= (:colProp m) :expandable) (= (:group-by @config) (:colId m)))
                                 (if (= (:colProp m) :expandable)
                                   (fn [cellProps]
                                     (let [row (.-row cellProps)]
                                       (r/as-element [:r> "span" (.getToggleRowExpandedProps row)
                                                      (if (.-isExpanded row)
                                                        (or (:fold-row-icon @style) "\uD83D\uDC47")
                                                        (or (:expand-row-icon @style) "\uD83D\uDC49"))])))
                                   (fn [cellProps]
                                     (let [value       (.-value cellProps)
                                           index       (js/parseInt (.-id (.-row cellProps)))
                                           subRowIndex nil
                                           colId       (.-id (.-column (.-cell cellProps)))]
                                       (if (contains? m :render)
                                         (r/as-element [((:render m) @cell-mapping) value (:params m) update-val orig-data index subRowIndex colId data react-data config])
                                         (str value)))))
                                 (fn []
                                   nil))})
             (:columns @config))))


(defn- configure-standard-columns
  "configures standard table properties based on the table's config info"
  [data orig-data react-data config]
  (into []
    (map
      (fn [m]
        {:Header        (cond
                          (= (:colProp m) :select-all)
                          (r/as-element [:button
                                         {:onClick (fn [e]
                                                     (toggle true (:colSelect m) orig-data data react-data config))}
                                         (str (:colHeader m))])

                          (= (:colProp m) :select-none)
                          (r/as-element [:button
                                         {:onClick (fn [e]
                                                     (toggle false (:colSelect m) orig-data data react-data config))}
                                         (str (:colHeader m))])

                          :else (:colHeader m))
         :accessor      (:colId m)
         :sortType      (or (:sortType m) "alphanumeric")
         :disableSortBy (if (= (:disableSortBy m) false)
                          false true)
         :mainRowCell   (fn [cellProps]
                          (let [value       (.-value cellProps)
                                index       (js/parseInt (.-id (.-row cellProps)))
                                subRowIndex nil
                                colId       (.-id (.-column (.-cell cellProps)))]
                            (if (contains? m :render)
                              (r/as-element [((:render m) @cell-mapping) value (:params m) update-val orig-data index
                                             subRowIndex colId data (r/atom (or (:data @data) @data)) config])
                              (str value))))})
      (:columns @config))))


(defn- configure-data
  "configures data into format react-table want it"
  [data config]
  (let [table-type   (:table-type @config)
        d            (or (:data @data) @data)
        group-by-key (:group-by @config)]

    ;(js/console.log "configure data")
    (if (= table-type :expandable)
      (->> d
        (reduce #(conj %1 (group-by-key %2)) #{})
        (sort)
        (map (fn [val]
               {group-by-key val
                :subRows     (into []
                               (filter
                                 (fn [row]
                                   (= val (group-by-key row))) d))}))
        (into []))
      d)))


(def last-params (atom nil))


(defn table-component
  "React table v7 (https://github.com/TanStack/table/tree/v7/docs/src/pages/)
  Table supports standard or expandable table types

  data - Map (required)
   :data (required) Array - Ex:

   \"standard table data\"
   [{:Symbol \"#FFFF00\" :include false :AoI \"Fire-prst-001\"}
    {:Symbol \"#00FFFF\" :include false :AoI \"Ft-202210-0010\"}
    {:Symbol \"#0000FF\" :include false :AoI \"Ft-202210-0011\"}]

   \"group table data\"
   [{:Symbol \"#FFFF00\" :time 0 :include false :AoI \"Fire-prst-001\"}
    {:Symbol \"#00FFFF\" :time 0 :include false :AoI \"Ft-202210-0010\"}
    {:Symbol \"#0000FF\" :time 0 :include false :AoI \"Ft-202210-0011\"}]

  config - Map (required) Ex:
  \"standard config data\"
  {:table-type :standard                     ;specify table type, :standard or :expandable
   :columns    [{:colHeader     \"Include?\"       ; specifies what is rendered for each column header.
                 :colId         :include         ; unique column id
                 :render        :check-box-cell}

                {:colHeader     \"Symbol\"
                 :colId         :Symbol
                 :sortType      \"alphanumeric\"}

                {:colHeader     \"AoI\"
                 :colId         :AoI
                 :disableSortBy false}]}

  \"group config data\"
  {:table-type :expandable              ;specify table type, :standard or :expandable
   :group-by   :time                    ;specify which column you want to group rows by
   :columns    [{:colProp   :expandable ; column property for expandable column
                 :colHeader \"\"
                 :colId     :expander}

                {:colHeader \"Time\"
                 :colId     :time
                 :disableSortBy false}

                {:colHeader \"Include?\"
                 :colId     :include
                 :render    :check-box-cell}]
   style - Map (optional) Ex:
    {:width                  \"600px\"
     :height                 \"300px\"
     :text-color             \"black\"
     :header-bg-color        \"lightgray\"
     :body-bg-color          \"whitesmoke\"
     :table-border           \"2px solid black\"
     :row-border-color       \"lightgray\"
     :expand-row-icon        \"\uD83D\uDC49\"
     :fold-row-icon          \"\uD83D\uDC47\"
     :sort-up-arrow-icon     \"\u2B06\"
     :sort-down-arrow-icon   \"\u2B07\"
     :sort-not-selected-icon \"\u25BC\"
     :row-bg-color           \"white\"}"
  [& {:keys [data config style]}]
  (let [cfg           (h/resolve-value config)
        d             (h/resolve-value data)
        s             (h/resolve-value style)
        react-data    (r/atom (configure-data d cfg))
        column-config (clj->js (if (= :expandable (:table-type @cfg))
                                 (configure-expandable-columns d data react-data cfg s)
                                 (configure-standard-columns d data react-data cfg)))]

    (log/info "table-component" data "//" config "//" style)

    (reset! last-params {:data d :config cfg :style s})

    (fn []
      (log/info "table-component (render)" data)
      (let [react-data (r/atom (configure-data d cfg))]
        [:f> table
         column-config
         (clj->js @react-data)
         (:table-type @cfg)
         s]))))


(def meta-data {:react-table/table {:component table-component
                                    :ports     {:config :port/sink
                                                :style  :port/sink
                                                :data   :port/source-sink}}})


(re-frame/dispatch-sync [:register-meta meta-data])


(comment
  (do
    (def config (:config @last-params))
    (def data (:data @last-params))
    (def style (:style @last-params))

    (def cfg (h/resolve-value config))
    (def d (h/resolve-value data))
    (def s (h/resolve-value style))
    (def react-data (r/atom (configure-data d cfg)))
    (def column-config (clj->js (if (= :expandable (:table-type @cfg))
                                  (configure-expandable-columns d react-data cfg s)
                                  (configure-standard-columns d react-data cfg)))))

  (get-in @re-frame.db/app-db [:containers :cs-table.molecule :blackboard :colorized-data])
  (re-frame/subscribe [:cs-table.molecule.blackboard.colorized-data])

  ())


