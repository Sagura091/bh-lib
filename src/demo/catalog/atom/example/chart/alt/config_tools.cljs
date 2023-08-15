(ns demo.catalog.atom.example.chart.alt.config-tools
  (:require [re-com.core :as rc]
            [bh-ui.core :as bh]
            [taoensso.timbre :as log]))


(log/info "demo.catalog.atom.example.chart.alt.config-tools")


(defn meta-tabular-config-column-ratom-tools [config-data default-config-data]
  [rc/h-box :src (rc/at)
   :gap "10px"
   :class "tools-panel"
   :children [[:label.h5 "Config:"]
              [rc/button :on-click #(reset! config-data default-config-data) :label "Default"]
              [rc/button :on-click #(swap! config-data update-in [:brush] not) :label "!Brush"]
              [rc/button :on-click #(swap! config-data update-in [:uv :include] not) :label "! uv data"]
              [rc/button :on-click #(swap! config-data update-in [:tv :include] not) :label "! tv data"]
              [bh/chart-utils-color-config config-data ":amt :fill" [:amt :fill] :above-center]
              [rc/button :on-click #(reset! config-data (-> @config-data
                                                          (assoc-in [:uv :stackId] "a")
                                                          (assoc-in [:pv :stackId] "a")))
               :label "stack uv/pv"]
              [rc/button :on-click #(reset! config-data (-> @config-data
                                                          (assoc-in [:uv :stackId] "")
                                                          (assoc-in [:pv :stackId] "")))
               :label "!stack uv/pv"]
              [rc/button :on-click #(reset! config-data (-> @config-data
                                                          (assoc-in [:tv :stackId] "b")
                                                          (assoc-in [:amt :stackId] "b")))
               :label "stack tv/amt"]
              [rc/button :on-click #(reset! config-data (-> @config-data
                                                          (assoc-in [:tv :stackId] "")
                                                          (assoc-in [:amt :stackId] "")))
               :label "!stack tv/amt"]]])


(defn meta-tabular-config-column-sub-tools [config-data default-config-data]
  (let [brush? (bh/utils-subscribe-local config-data [:brush])
        uv? (bh/utils-subscribe-local config-data [:uv :include])
        tv? (bh/utils-subscribe-local config-data [:tv :include])]

    (fn []
      [rc/h-box :src (rc/at)
       :gap "10px"
       :class "tools-panel"
       :children [[:label.h5 "Config:"]
                  [rc/button :on-click #(bh/utils-handle-change-path config-data [[bh/utils-set-local-values [] default-config-data]]) :label "Default"]
                  [rc/button :on-click #(bh/utils-handle-change-path config-data [[update-in [:brush] not]])
                   :label "!Brush"]
                  [rc/button :on-click #(bh/utils-handle-change-path config-data [[update-in [:uv :include] not]])
                   :label "! uv data"]
                  [rc/button :on-click #(bh/utils-handle-change-path config-data [[update-in [:tv :include] not]])
                   :label "! tv data"]
                  [bh/chart-utils-color-config config-data ":amt :fill" [:amt :fill] :above-center]
                  [rc/button :on-click #((bh/utils-handle-change-path config-data [[assoc-in [:uv :stackId] "b"]])
                                         (bh/utils-handle-change-path config-data [[assoc-in [:pv :stackId] "b"]]))
                   :label "stack uv/pv"]
                  [rc/button :on-click #((bh/utils-handle-change-path config-data [[assoc-in [:uv :stackId] ""]])
                                         (bh/utils-handle-change-path config-data [[assoc-in [:pv :stackId] ""]]))
                   :label "!stack uv/pv"]
                  [rc/button :on-click #((bh/utils-handle-change-path config-data [[assoc-in [:tv :stackId] "a"]])
                                         (bh/utils-handle-change-path config-data [[assoc-in [:amt :stackId] "a"]]))
                   :label "stack tv/amt"]
                  [rc/button :on-click #((bh/utils-handle-change-path config-data [[assoc-in [:tv :stackId] ""]])
                                         (bh/utils-handle-change-path config-data [[assoc-in [:amt :stackId] ""]]))
                   :label "!stack tv/amt"]]])))


(defn meta-tabular-config-row-ratom-tools [config-data default-config-data]
  [rc/h-box :src (rc/at)
   :gap "10px"
   :class "tools-panel"
   :children [[:label.h5 "Config:"]
              [rc/button :on-click #(reset! config-data default-config-data) :label "Default"]
              [rc/button :on-click #(swap! config-data update-in [:Page-A :include] not) :label "! Page A"]
              [rc/button :on-click #(swap! config-data update-in [:Page-C :include] not) :label "! Page C"]
              [bh/chart-utils-color-config config-data ":Page-D :color" [:Page-D :color] :above-center]
              [rc/button :on-click #(swap! config-data assoc-in [[assoc-in [:value :chosen] :uv]]) :label ":uv"]
              [rc/button :on-click #(swap! config-data assoc-in [[assoc-in [:value :chosen] :tv]]) :label ":tv"]
              [rc/button :on-click #(swap! config-data assoc-in [[assoc-in [:value :chosen] :amt]]) :label ":amt"]]])


(defn meta-tabular-config-row-sub-tools [config-data default-config-data]
  (let [page-a (bh/utils-subscribe-local config-data [:Page-A :include])
        page-c (bh/utils-subscribe-local config-data [:Page-C :include])
        tv? (bh/utils-subscribe-local config-data [:tv :include])]

    (fn []
      [rc/h-box :src (rc/at)
       :gap "10px"
       :class "tools-panel"
       :children [[:label.h5 "Config:"]
                  [rc/button :on-click #(bh/utils-handle-change-path config-data [[bh/utils-set-local-values [] default-config-data]]) :label "Default"]
                  [rc/button :on-click #(bh/utils-handle-change-path config-data [[update-in [:Page-A :include] not]]) :label "! Page A"]
                  [rc/button :on-click #(bh/utils-handle-change-path config-data [[update-in [:Page-C :include] not]]) :label "! Page C"]
                  [bh/chart-utils-color-config config-data ":Page-D :color" [:Page-D :color] :above-center]
                  [rc/button :on-click #(bh/utils-handle-change-path config-data [[assoc-in [:value :chosen] :uv]]) :label ":uv"]
                  [rc/button :on-click #(bh/utils-handle-change-path config-data [[assoc-in [:value :chosen] :tv]]) :label ":tv"]
                  [rc/button :on-click #(bh/utils-handle-change-path config-data [[assoc-in [:value :chosen] :amt]]) :label ":amt"]]])))


(defn meta-tabular-config-pie-row-ratom-tools [config-data default-config-data]
  [rc/h-box :src (rc/at)
   :gap "10px"
   :class "tools-panel"
   :children [[:label.h5 "Config:"]
              [rc/button :on-click #(reset! config-data default-config-data) :label "Default"]
              [rc/button :on-click #(swap! config-data update-in [:Page-A :include] not) :label "! Page A"]
              [rc/button :on-click #(swap! config-data update-in [:Page-C :include] not) :label "! Page C"]
              [bh/chart-utils-color-config config-data "Pie Color" [:fill] :above-center]
              [rc/button :on-click #(swap! config-data assoc-in [:value :chosen] :uv) :label ":uv"]
              [rc/button :on-click #(swap! config-data assoc-in [:value :chosen] :tv) :label ":tv"]
              [rc/button :on-click #(swap! config-data assoc-in [:value :chosen] :amt) :label ":amt"]]])


(defn meta-tabular-config-pie-row-sub-tools [config-data default-config-data]
  (let [page-a (bh/utils-subscribe-local config-data [:Page-A :include])
        page-c (bh/utils-subscribe-local config-data [:Page-C :include])
        tv? (bh/utils-subscribe-local config-data [:tv :include])]

    (fn []
      [rc/h-box :src (rc/at)
       :gap "10px"
       :class "tools-panel"
       :children [[:label.h5 "Config:"]
                  [rc/button :on-click #(bh/utils-handle-change-path config-data [[bh/utils-set-local-values [] default-config-data]]) :label "Default"]
                  [rc/button :on-click #(bh/utils-handle-change-path config-data [[update-in [:Page-A :include] not]]) :label "! Page A"]
                  [rc/button :on-click #(bh/utils-handle-change-path config-data [[update-in [:Page-C :include] not]]) :label "! Page C"]
                  [bh/chart-utils-color-config config-data "Pie Color" [:fill] :above-center]
                  [rc/button :on-click #(bh/utils-handle-change-path config-data [[assoc-in [:value :chosen] :uv]]) :label ":uv"]
                  [rc/button :on-click #(bh/utils-handle-change-path config-data [[assoc-in [:value :chosen] :tv]]) :label ":tv"]
                  [rc/button :on-click #(bh/utils-handle-change-path config-data [[assoc-in [:value :chosen] :amt]]) :label ":amt"]]])))


(defn dag-data-config-ratom-tools [config-data default-config-data]
  [rc/h-box :src (rc/at)
   :gap "10px"
   :class "tools-panel"
   :children [[:label.h5 "Config:"]
              [rc/button :on-click #(reset! config-data default-config-data) :label "Default"]
              [bh/chart-utils-color-config config-data "Visit Fill" [:Visit :fill] :above-center]
              [bh/chart-utils-color-config config-data "Visit Stroke" [:Visit :stroke] :above-center]
              [bh/chart-utils-color-config config-data "Lost Fill" [:Lost :fill] :above-center]
              [bh/chart-utils-color-config config-data "Lost Stroke" [:Lost :stroke] :above-center]]])



(defn dag-data-config-sub-tools [config-data default-config-data]
  [rc/h-box :src (rc/at)
   :gap "10px"
   :class "tools-panel"
   :children [[:label.h5 "Config:"]
              [rc/button :on-click #(bh/utils-handle-change-path config-data [[bh/utils-set-local-values [] default-config-data]]) :label "Default"]
              [bh/chart-utils-color-config config-data "Visit Fill" [:Visit :fill] :above-center]
              [bh/chart-utils-color-config config-data "Visit Stroke" [:Visit :stroke] :above-center]
              [bh/chart-utils-color-config config-data "Lost Fill" [:Lost :fill] :above-center]
              [bh/chart-utils-color-config config-data "Lost Stroke" [:Lost :stroke] :above-center]]])

