(ns bh-ui.atom.experimental.react-table
  (:require
    [reagent.core :as r]
    [reagent.dom :as rdom]
    [re-frame.core :as re-frame]
    ["react-table" :as rt]
    [bh-ui.utils.helpers :as h]))


(defn- table [columns data table-type config]
  (let [^js table  (rt/useTable (clj->js {:columns columns :data data :autoResetExpanded false}) rt/useExpanded)]
    [:div {:style {:max-height (or (:height @config) "300px")
                   :overflow "auto"
                   :white-space "no-wrap"
                   :width (or (:width @config) "100%")
                   :border (or (:table-border @config) "2px solid black")}}
     [:r> "table" (.getTableProps table (clj->js {:style {:color (or (:text-color @config) "black")}
                                                  :className "table"}))
      [:thead {:style {:backgroundColor (or (:header-bg-color @config) "lightgray")
                       :position "sticky" :top 0}}
       (let [hgs (.-headerGroups table)]
         (doall
           (for [hg hgs]
             [:r> "tr" (.getHeaderGroupProps hg)
              (doall
                (for [col (.-headers hg)]
                  [:r> "th" (.getHeaderProps col)
                   (.render col "Header")]))])))]
      [:r> "tbody" (.getTableBodyProps table (clj->js {:style {:backgroundColor (or (:body-bg-color @config) "white")}}))
       (doall
         (for [row (.-rows table)]
           (let [prepareRow (fn [] (.prepareRow table row))]
             (prepareRow)
             (r/as-element [:<> {:key (.-key (.getRowProps row))}
                            [:r> "tr" (.getRowProps row)
                             (doall
                               (for [cell (.-cells row)]
                                 (let [cellType (if (and (not (.-canExpand row)) (= table-type :expandable))
                                                  "subRowCell"
                                                  "mainRowCell")]
                                   [:r> "td" (.getCellProps cell (clj->js {:style {:borderColor (or (:row-border-color @config) "white-smoke")}}))
                                    (.render cell cellType)])))]]))))]]]))

(defn- sync-data
  "sync data between react-table and external data"
  [data react-data]
  (h/handle-change-path data [:data] (if (= :standard (:table-type (:meta-data @data)))
                                     @react-data
                                     (into [] (mapcat #(get %1 :subRows) @react-data)))))

(defn- toggle
  "toggle all values to true or false in a column for all rows"
  [value colId data react-data]
  (let [type (:table-type (:meta-data @data))]
    (cond
      (= type :standard) (reset! react-data (into [] (map #(assoc % colId value) @react-data)))
      (= type :expandable) (reset! react-data (into []
                                                    (map
                                                      (fn [m]
                                                        (assoc m :subRows (into [] (map #(assoc % colId value) (:subRows m)))))
                                                      @react-data))))
    )
  (sync-data data react-data))

(defn- update-val
  "update value to a specific row and column"
  [value [index subRowIndex colId data react-data]]
  (let [path (if (nil? subRowIndex)
               [index (keyword colId)]
               [index :subRows subRowIndex (keyword colId)])]

    (swap! react-data assoc-in path value)
    (sync-data data react-data)))

(defn- configure-expandable-columns
  "configures expandable table properties based on meta-data info"
  [data react-data config]
  (into [] (map
             (fn [m]
               {:Header      (cond
                               (= (:colProp m) :select-all) (r/as-element [:button
                                                                          {:onClick (fn [e]
                                                                                      (toggle true (:colSelect m) data react-data))}
                                                                          (str (:colHeader m))])
                               (= (:colProp m) :select-none) (r/as-element [:button
                                                                           {:onClick (fn [e]
                                                                                       (toggle false (:colSelect m) data react-data))}
                                                                           (str (:colHeader m))])
                               :else (:colHeader m))
                :accessor    (:colId m)
                :subRowCell  (if (or (= (:colProp m) :expandable) (= (:group-by (:meta-data @data)) (:colId m)))
                               (fn [] nil)
                               (fn [cellProps]
                                 (let [value (.-value cellProps)
                                       index (js/parseInt (.-id (.-row cellProps)))
                                       subRowIndex (.-index (.-row cellProps))
                                       colId       (keyword (.-id (.-column (.-cell cellProps))))]
                                   (if (contains? m :render)
                                     ((:render m) value update-val index subRowIndex colId data react-data )
                                     (str value)))))
                :mainRowCell (if (or (= (:colProp m) :expandable) (= (:group-by (:meta-data @data)) (:colId m)))
                               (if (= (:colProp m) :expandable)
                                 (fn [cellProps]
                                   (let [row (.-row cellProps)]
                                     (r/as-element [:r> "span" (.getToggleRowExpandedProps row)
                                                    (if (.-isExpanded row)
                                                      (or (:fold-row-icon @config) "\uD83D\uDC47")
                                                      (or (:expand-row-icon @config) "\uD83D\uDC49"))])))
                                 (fn [cellProps]
                                   (let [value (.-value cellProps)
                                         index (js/parseInt (.-id (.-row cellProps)))
                                         subRowIndex nil
                                         colId       (.-id (.-column (.-cell cellProps)))]
                                     (if (contains? m :render)
                                       ((:render m) value update-val index subRowIndex colId data react-data )
                                       (str value)))))
                               (fn []
                                 nil))})
             (:columns (:meta-data @data)))))


(defn- configure-standard-columns
  "configures standard table properties based on meta-data info"
  [data react-data]
  (into [] (map
             (fn [m]
               {:Header      (cond
                               (= (:colProp m) :select-all) (r/as-element [:button
                                                                          {:onClick (fn [e]
                                                                                      (toggle true (:colSelect m) data react-data))}
                                                                          (str (:colHeader m))])
                               (= (:colProp m) :select-none) (r/as-element [:button
                                                                           {:onClick (fn [e]
                                                                                       (toggle false (:colSelect m) data react-data))}
                                                                           (str (:colHeader m))])
                               :else (:colHeader m))
                :accessor    (:colId m)
                :mainRowCell (fn [cellProps]
                               (let [value (.-value cellProps)
                                     index (js/parseInt (.-id (.-row cellProps)))
                                     subRowIndex nil
                                     colId       (.-id (.-column (.-cell cellProps)))]
                                 (if (contains? m :render)
                                   ((:render m) value update-val index subRowIndex colId data react-data )
                                   (str value))))})
             (:columns (:meta-data @data)))))

(defn- configure-data
  "configures data into format react-table want it"
  [data]
  (let [table-type   (:table-type (:meta-data @data))
        d            (:data @data)
        group-by-key (:group-by (:meta-data @data))]
    ;(js/console.log "configure data")
    (if (= table-type :expandable)
      (->> d
           (reduce #(conj %1 (group-by-key %2)) #{})
           (sort)
           (map (fn [val]
                  {group-by-key val
                   :subRows (into []
                                  (filter
                                    (fn [row]
                                      (= val (group-by-key row))) d))}))
           (into []))
      d)))

(defn table-component [& {:keys [config data]}]
  (let [config        (h/resolve-value config)
        data          (h/resolve-value data)
        react-data    (r/atom (configure-data data))
        column-config (clj->js (if (= :expandable (:table-type (:meta-data @data)))
                                 (configure-expandable-columns data react-data config)
                                 (configure-standard-columns data react-data)))]

    (fn []
      [:f> table column-config (clj->js @react-data) (:table-type (:meta-data @data)) config])))


(def meta-data {:react-table/table {:component table-component
                                    :ports     {:config :port/sink
                                                :data   :port/source-sink}}})

(re-frame/dispatch-sync [:register-meta meta-data])



