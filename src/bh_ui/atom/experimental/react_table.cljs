(ns bh-ui.atom.experimental.react-table
  (:require
    [reagent.core :as r]
    [reagent.dom :as rdom]
    [re-frame.core :as re-frame]
    ["react-table" :as rt]
    [bh-ui.utils.helpers :as h]
    [bh-ui.utils.locals :as l]
    [taoensso.timbre :as log]))


(defn- table [columns data table-type config]
  ;(log/info "table (render)" (js->clj data))

  (let [^js table (rt/useTable (clj->js {:columns columns :data data :autoResetExpanded false}) rt/useSortBy rt/useExpanded)]
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
    (condp = [reframe-path? data-key?]
      [true true] (h/handle-change-path orig-data [[assoc-in [:data] d]])
      [true false] (h/handle-change-path orig-data [[l/set-val [] d]])
      [false true] (swap! data assoc-in [:data] d)
      [false false] (reset! data d))))


(defn- toggle
  "toggle all values to true or false in a column for all rows"
  [value colId orig-data data react-data config]
  (let [type (:table-type @config)]
    (cond
      (= type :standard) (reset! react-data (into [] (map #(assoc % colId value) @react-data)))
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
                                       (r/as-element [(:render m) value update-val orig-data index subRowIndex colId data react-data config])
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
                                         (r/as-element [(:render m) value update-val orig-data index subRowIndex colId data react-data config])
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
                              (r/as-element [(:render m) value update-val orig-data index
                                             subRowIndex colId data react-data config])
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

(defn table-component [& {:keys [data config style]}]
  ;(log/info "table-component (a)" data)

  (let [cfg (h/resolve-value config)
        d   (h/resolve-value data)
        s   (h/resolve-value style)]

    (reset! last-params {:data d :config cfg :style s})

    (fn []
      ;(log/info "table-component (render)" data)
      (let [react-data    (r/atom (configure-data d cfg))
            column-config (clj->js (if (= :expandable (:table-type @cfg))
                                     (configure-expandable-columns d data react-data cfg s)
                                     (configure-standard-columns d data react-data cfg)))]
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


