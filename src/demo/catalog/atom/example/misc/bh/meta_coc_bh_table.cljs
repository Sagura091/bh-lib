(ns demo.catalog.atom.example.misc.bh.meta-coc-bh-table
  (:require [bh-ui.core :as bh]
            [reagent.core :as r]
            [re-com.core :as rc]
            [taoensso.timbre :as log]
            [woolybear.ad.catalog.utils :as acu]
            [woolybear.ad.layout :as layout]))


(log/info "demo.catalog.atom.example.misc.meta-coc-bh-table")


(defonce data (r/atom bh/bh-table-sample-meta-coc-data))


(defn- data-tools []
  [rc/h-box :src (rc/at)
   :gap "10px"
   :class "tools-panel"
   :children [[:label.h5 "Input Data:"]
              [rc/button :on-click #(reset! data []) :label "Empty"]
              [rc/button :on-click #(reset! data bh/bh-table-sample-meta-coc-data) :label "Default"]
              [rc/button :on-click #(swap! data assoc-in [:data 0 :uv] 10000) :label "A -> 10,000"]
              [rc/button :on-click #(swap! data assoc :data (conj (:data @data)
                                                              {:name "Page Q" :uv 1100
                                                               :pv   1100 :tv 1100 :amt 1100}))
               :label "Add 'Q'"]
              [rc/button :on-click #(swap! data assoc :data (into [] (drop-last 2 (:data @data))))
               :label "Drop Last 2"]
              [rc/button :on-click #(swap! data assoc :data (into []
                                                              (map (fn [x]
                                                                     (assoc x :new-item 1750))
                                                                (:data @data))))
               :label "Add :new-item"]]])


(defn- data-update-example [& {:keys [data container-id component-id] :as params}]
  ;(log/info "data-update-example (params)" params)

  (let [d (bh/utils-resolve-value data)]
    (fn []
      [rc/v-box :src (rc/at)
       :class "data-update-example"
       :gap "10px"
       :width "100%"
       :height "100%"
       :children [[:div.chart-part {:style {:width "100%" :height "90%"}}
                   [bh/bh-table :data d]]
                  [:div.data-tools-part {:style {:width "100%"}}
                   [data-tools]]]])))


(defn example []
  (let [component-id "table-with-meta-and-coc-demo"]
    (acu/demo "Basic Table with meta-data, showing available Chain-of-Custody data"
      "Table using HTML tags

> And with Chain-of-Custody!!

> Feel free to use the controls at the bottom to change the data and see how the Table responds."

      [layout/centered {:extra-classes :width-50}
       [data-update-example :data data]]

      '[bh/bh-table :data bh/bh-table-sample-meta-coc-data])))

