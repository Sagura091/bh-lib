(ns bh-ui.atom.experimental.react-table
  (:require
    [reagent.core :as r]
    [reagent.dom :as rdom]
    [re-frame.core :as re-frame]
    ["react-table" :as rt]
    [bh-ui.utils.helpers :as h]))


(defn- table [columns data table-type config]
  (let [^js table (rt/useTable (clj->js {:columns columns :data data :autoResetExpanded false}) rt/useExpanded)]
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
  [data react-data config]
  (h/handle-change-path data [:data] (if (= :standard (:table-type @config))
                                       @react-data
                                       (into [] (mapcat #(get %1 :subRows) @react-data)))))


(defn- toggle
  "toggle all values to true or false in a column for all rows"
  [value colId data react-data config]
  (let [type (:table-type @config)]
    (cond
      (= type :standard) (reset! react-data (into [] (map #(assoc % colId value) @react-data)))
      (= type :expandable) (reset! react-data (into []
                                                (map
                                                  (fn [m]
                                                    (assoc m :subRows (into [] (map #(assoc % colId value) (:subRows m)))))
                                                  @react-data)))))

  (sync-data data react-data config))


(defn- update-val
  "update value to a specific row and column"
  [value [index subRowIndex colId data react-data config]]
  (let [path (if (nil? subRowIndex)
               [index (keyword colId)]
               [index :subRows subRowIndex (keyword colId)])]

    (swap! react-data assoc-in path value)
    (sync-data data react-data config)))


(defn- configure-expandable-columns
  "configures expandable table properties based on meta-data info"
  [data react-data config style]
  (into [] (map
             (fn [m]
               {:Header      (cond
                               (= (:colProp m) :select-all) (r/as-element [:button
                                                                           {:onClick (fn [e]
                                                                                       (toggle true (:colSelect m) data react-data config))}
                                                                           (str (:colHeader m))])
                               (= (:colProp m) :select-none) (r/as-element [:button
                                                                            {:onClick (fn [e]
                                                                                        (toggle false (:colSelect m) data react-data config))}
                                                                            (str (:colHeader m))])
                               :else (:colHeader m))
                :accessor    (:colId m)
                :subRowCell  (if (or (= (:colProp m) :expandable) (= (:group-by @config) (:colId m)))
                               (fn [] nil)
                               (fn [cellProps]
                                 (let [value       (.-value cellProps)
                                       index       (js/parseInt (.-id (.-row cellProps)))
                                       subRowIndex (.-index (.-row cellProps))
                                       colId       (keyword (.-id (.-column (.-cell cellProps))))]
                                   (if (contains? m :render)
                                     ((:render m) value update-val index subRowIndex colId data react-data config)
                                     (str value)))))
                :mainRowCell (if (or (= (:colProp m) :expandable) (= (:group-by @config) (:colId m)))
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
                                       ((:render m) value update-val index subRowIndex colId data react-data config)
                                       (str value)))))
                               (fn []
                                 nil))})
             (:columns @config))))


(defn- configure-standard-columns
  "configures standard table properties based on the table's config info"
  [data react-data config]
  (into []
    (map
      (fn [m]
        {:Header      (cond
                        (= (:colProp m) :select-all) (r/as-element [:button
                                                                    {:onClick (fn [e]
                                                                                (toggle true (:colSelect m) data react-data config))}
                                                                    (str (:colHeader m))])
                        (= (:colProp m) :select-none) (r/as-element [:button
                                                                     {:onClick (fn [e]
                                                                                 (toggle false (:colSelect m) data react-data config))}
                                                                     (str (:colHeader m))])
                        :else (:colHeader m))
         :accessor    (:colId m)
         :mainRowCell (fn [cellProps]
                        (let [value       (.-value cellProps)
                              index       (js/parseInt (.-id (.-row cellProps)))
                              subRowIndex nil
                              colId       (.-id (.-column (.-cell cellProps)))]
                          (if (contains? m :render)
                            ((:render m) value update-val index subRowIndex colId data react-data config)
                            (str value))))})
      (:columns @config))))


(defn- configure-data
  "configures data into format react-table want it"
  [data config]
  (let [table-type   (:table-type @config)
        d            @data
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
  (let [cfg           (h/resolve-value config)
        d             (h/resolve-value data)
        s             (h/resolve-value style)
        react-data    (r/atom (configure-data d cfg))
        column-config (clj->js (if (= :expandable (:table-type @cfg))
                                 (configure-expandable-columns d react-data cfg s)
                                 (configure-standard-columns d react-data cfg)))]

    (reset! last-params {:data d :config cfg :style s})

    (fn []
      [:f> table
       column-config
       (clj->js @react-data)
       (:table-type @cfg)
       s])))


(def meta-data {:react-table/table {:component table-component
                                    :ports     {:config :port/sink
                                                :style  :port/sink
                                                :data   :port/source-sink}}})

(re-frame/dispatch-sync [:register-meta meta-data])


(comment
  (do
    (def config (:config @last-params))
    (def data (:data @last-params))
    (def style (:style (@last-params)))

    (def cfg           (h/resolve-value config))
    (def d             (h/resolve-value data))
    (def s             (h/resolve-value style))
    (def react-data    (r/atom (configure-data d cfg)))
    (def column-config (clj->js (if (= :expandable (:table-type @cfg))
                                  (configure-expandable-columns d react-data cfg s)
                                  (configure-standard-columns d react-data cfg)))))


  ())


