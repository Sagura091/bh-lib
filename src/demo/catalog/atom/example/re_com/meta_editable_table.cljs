(ns demo.catalog.atom.example.re-com.meta-editable-table
  (:require [bh-ui.core :as bh]
            [taoensso.timbre :as log]
            [woolybear.ad.catalog.utils :as acu]
            [woolybear.ad.layout :as layout]))


(log/info "demo.catalog.atom.example.re-com.meta-editable-table")


(defonce data bh/recom-edit-table-meta-sample-data)


(defn cell-styling-fn [{:keys [amt uv pv] :as row}
                       {:keys [id] :as column}]
  (cond
    (= :uv id)
    {:background-color (cond
                         (> 2000 uv) "#FF4136"
                         (> 5000 uv 2000) "#FFDC00"
                         (> 7500 uv 5000) "#01FF70"
                         (> uv 7500) "#2ECC40")}
    (= :pv id)
    {:background-color (cond
                         (> 2000 pv) "#FF4136"
                         (> 5000 pv 2000) "#FFDC00"
                         (> 7500 pv 5000) "#01FF70"
                         (> pv 7500) "#2ECC40")}
    (= :amt id)
    {:background-color (cond
                         (> 2000 amt) "#FF4136"
                         (> 5000 amt 2000) "#FFDC00"
                         (> 7500 amt 5000) "#01FF70"
                         (> amt 7500) "#2ECC40")}))


(defn example []
  (acu/demo "Editable Table (with Metadata)"
    "We're using the `v-table` from [Re-com](https://github.com/Day8/re-com)

> This example has data ***with*** metadata!"

    [layout/centered
     [bh/recom-edit-table
      :data data
      :max-rows 5
      ;:width 600
      :on-click-row #(log/info "on-click-row")
      :cell-style cell-styling-fn]]

    '[layout/centered {:extra-classes :width-50}
      [bh/recom-edit-table
       :data data
       :max-rows 5
       ;:width 600
       :on-click-row #(log/info "on-click-row")
       :cell-style cell-styling-fn]]))


; can we change the data and have the table re-render correctly?
(comment
  (assoc-in @data [:data 0 :uv] 10000)


  (swap! data assoc-in [:data 0 :uv] 10000)
  (swap! data assoc-in [:data 0 :uv] 4000)


  ())
