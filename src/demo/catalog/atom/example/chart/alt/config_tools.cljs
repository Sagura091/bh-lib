(ns demo.catalog.atom.example.chart.alt.config-tools
  (:require [re-com.core :as rc]
            [bh-ui.atom.chart.utils :as chart-utils]
            [bh-ui.utils :as ui-utils]
            [bh-ui.utils.helpers :as h]
            [bh-ui.utils.locals :as l]
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
              [chart-utils/color-config config-data ":amt :fill" [:amt :fill] :above-center]
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
  (let [brush? (ui-utils/subscribe-local config-data [:brush])
        uv? (ui-utils/subscribe-local config-data [:uv :include])
        tv? (ui-utils/subscribe-local config-data [:tv :include])]

    (fn []
      [rc/h-box :src (rc/at)
       :gap "10px"
       :class "tools-panel"
       :children [[:label.h5 "Config:"]
                  [rc/button :on-click #(h/handle-change-path config-data [[l/set-val [] default-config-data]]) :label "Default"]
                  [rc/button :on-click #(h/handle-change-path config-data [[update-in [:brush] not]])
                   :label "!Brush"]
                  [rc/button :on-click #(h/handle-change-path config-data [[update-in [:uv :include] not]])
                   :label "! uv data"]
                  [rc/button :on-click #(h/handle-change-path config-data [[update-in [:tv :include] not]])
                   :label "! tv data"]
                  [chart-utils/color-config config-data ":amt :fill" [:amt :fill] :above-center]
                  [rc/button :on-click #((h/handle-change-path config-data [[assoc-in [:uv :stackId] "b"]])
                                         (h/handle-change-path config-data [[assoc-in [:pv :stackId] "b"]]))
                   :label "stack uv/pv"]
                  [rc/button :on-click #((h/handle-change-path config-data [[assoc-in [:uv :stackId] ""]])
                                         (h/handle-change-path config-data [[assoc-in [:pv :stackId] ""]]))
                   :label "!stack uv/pv"]
                  [rc/button :on-click #((h/handle-change-path config-data [[assoc-in [:tv :stackId] "a"]])
                                         (h/handle-change-path config-data [[assoc-in [:amt :stackId] "a"]]))
                   :label "stack tv/amt"]
                  [rc/button :on-click #((h/handle-change-path config-data [[assoc-in [:tv :stackId] ""]])
                                         (h/handle-change-path config-data [[assoc-in [:amt :stackId] ""]]))
                   :label "!stack tv/amt"]]])))


(defn meta-tabular-config-row-ratom-tools [config-data default-config-data]
  [rc/h-box :src (rc/at)
   :gap "10px"
   :class "tools-panel"
   :children [[:label.h5 "Config:"]
              [rc/button :on-click #(reset! config-data default-config-data) :label "Default"]
              [rc/button :on-click #(swap! config-data update-in [:Page-A :include] not) :label "! Page A"]
              [rc/button :on-click #(swap! config-data update-in [:Page-C :include] not) :label "! Page C"]
              [chart-utils/color-config config-data ":Page-D :color" [:Page-D :color] :above-center]
              [rc/button :on-click #(swap! config-data assoc-in [[assoc-in [:value :chosen] :uv]]) :label ":uv"]
              [rc/button :on-click #(swap! config-data assoc-in [[assoc-in [:value :chosen] :tv]]) :label ":tv"]
              [rc/button :on-click #(swap! config-data assoc-in [[assoc-in [:value :chosen] :amt]]) :label ":amt"]]])


(defn meta-tabular-config-row-sub-tools [config-data default-config-data]
  (let [page-a (ui-utils/subscribe-local config-data [:Page-A :include])
        page-c (ui-utils/subscribe-local config-data [:Page-C :include])
        tv? (ui-utils/subscribe-local config-data [:tv :include])]

    (fn []
      [rc/h-box :src (rc/at)
       :gap "10px"
       :class "tools-panel"
       :children [[:label.h5 "Config:"]
                  [rc/button :on-click #(h/handle-change-path config-data [[l/set-val [] default-config-data]]) :label "Default"]
                  [rc/button :on-click #(h/handle-change-path config-data [[update-in [:Page-A :include] not]]) :label "! Page A"]
                  [rc/button :on-click #(h/handle-change-path config-data [[update-in [:Page-C :include] not]]) :label "! Page C"]
                  [chart-utils/color-config config-data ":Page-D :color" [:Page-D :color] :above-center]
                  [rc/button :on-click #(h/handle-change-path config-data [[assoc-in [:value :chosen] :uv]]) :label ":uv"]
                  [rc/button :on-click #(h/handle-change-path config-data [[assoc-in [:value :chosen] :tv]]) :label ":tv"]
                  [rc/button :on-click #(h/handle-change-path config-data [[assoc-in [:value :chosen] :amt]]) :label ":amt"]]])))


(defn meta-tabular-config-pie-row-ratom-tools [config-data default-config-data]
  [rc/h-box :src (rc/at)
   :gap "10px"
   :class "tools-panel"
   :children [[:label.h5 "Config:"]
              [rc/button :on-click #(reset! config-data default-config-data) :label "Default"]
              [rc/button :on-click #(swap! config-data update-in [:Page-A :include] not) :label "! Page A"]
              [rc/button :on-click #(swap! config-data update-in [:Page-C :include] not) :label "! Page C"]
              [chart-utils/color-config config-data "Pie Color" [:fill] :above-center]
              [rc/button :on-click #(swap! config-data assoc-in [:value :chosen] :uv) :label ":uv"]
              [rc/button :on-click #(swap! config-data assoc-in [:value :chosen] :tv) :label ":tv"]
              [rc/button :on-click #(swap! config-data assoc-in [:value :chosen] :amt) :label ":amt"]]])


(defn meta-tabular-config-pie-row-sub-tools [config-data default-config-data]
  (let [page-a (ui-utils/subscribe-local config-data [:Page-A :include])
        page-c (ui-utils/subscribe-local config-data [:Page-C :include])
        tv? (ui-utils/subscribe-local config-data [:tv :include])]

    (fn []
      [rc/h-box :src (rc/at)
       :gap "10px"
       :class "tools-panel"
       :children [[:label.h5 "Config:"]
                  [rc/button :on-click #(h/handle-change-path config-data [[l/set-val [] default-config-data]]) :label "Default"]
                  [rc/button :on-click #(h/handle-change-path config-data [[update-in [:Page-A :include] not]]) :label "! Page A"]
                  [rc/button :on-click #(h/handle-change-path config-data [[update-in [:Page-C :include] not]]) :label "! Page C"]
                  [chart-utils/color-config config-data "Pie Color" [:fill] :above-center]
                  [rc/button :on-click #(h/handle-change-path config-data [[assoc-in [:value :chosen] :uv]]) :label ":uv"]
                  [rc/button :on-click #(h/handle-change-path config-data [[assoc-in [:value :chosen] :tv]]) :label ":tv"]
                  [rc/button :on-click #(h/handle-change-path config-data [[assoc-in [:value :chosen] :amt]]) :label ":amt"]]])))


(defn dag-data-config-ratom-tools [config-data default-config-data]
  [rc/h-box :src (rc/at)
   :gap "10px"
   :class "tools-panel"
   :children [[:label.h5 "Config:"]
              [rc/button :on-click #(reset! config-data default-config-data) :label "Default"]
              [chart-utils/color-config config-data "Visit Fill" [:Visit :fill] :above-center]
              [chart-utils/color-config config-data "Visit Stroke" [:Visit :stroke] :above-center]
              [chart-utils/color-config config-data "Lost Fill" [:Lost :fill] :above-center]
              [chart-utils/color-config config-data "Lost Stroke" [:Lost :stroke] :above-center]]])



(defn dag-data-config-sub-tools [config-data default-config-data]
  [rc/h-box :src (rc/at)
   :gap "10px"
   :class "tools-panel"
   :children [[:label.h5 "Config:"]
              [rc/button :on-click #(h/handle-change-path config-data [[l/set-val [] default-config-data]]) :label "Default"]
              [chart-utils/color-config config-data "Visit Fill" [:Visit :fill] :above-center]
              [chart-utils/color-config config-data "Visit Stroke" [:Visit :stroke] :above-center]
              [chart-utils/color-config config-data "Lost Fill" [:Lost :fill] :above-center]
              [chart-utils/color-config config-data "Lost Stroke" [:Lost :stroke] :above-center]]])

