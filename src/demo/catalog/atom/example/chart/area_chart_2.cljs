(ns demo.catalog.atom.example.chart.area-chart-2
  (:require [bh-ui.atom.chart.area-chart-2 :as area-chart]
            [bh-ui.utils.color :as color]
            [bh-ui.utils.example-data :as data]
            [demo.catalog.atom.example.multi-example :as me]
            [reagent.core :as r]
            [re-com.core :as rc]
            [woolybear.ad.catalog.utils :as acu]
            [taoensso.timbre :as log]))


(log/info "demo.catalog.atom.example.chart.area-chart-2")

(def next-color (atom -1))


(def default-config (merge {:isAnimationActive true
                            :grid              {:include         true
                                                :strokeDasharray {:dash 3 :space 3}
                                                :stroke          :gray}
                            :x-axis            {:include     true
                                                :dataKey     :name
                                                :orientation :bottom
                                                :scale       "auto"}
                            :y-axis            {:include     true
                                                :dataKey     ""
                                                :orientation :left
                                                :scale       "auto"
                                                :interval    "preserveStartEnd"}
                            :tooltip           {:include true}
                            :legend            {:include       true
                                                :layout        :horizontal
                                                :align         :center
                                                :verticalAlign :bottom}}
                      (->> [:uv :pv :tv :amt]
                        (map (fn [val]
                               (let [color (color/next-color next-color)]
                                 {val {:include true :animate true
                                       :stroke  color :fill color}})))
                        (into {}))))


(defn- data-ratom-tools [data-ratom config-ratom default-data random-data-fn]
  [rc/h-box :src (rc/at)
   :gap "10px"

   :class "tools-panel"
   :children [[:label.h5 "Input Data:"]
              [rc/button :label "Empty" :on-click #(reset! data-ratom []) :label "Empty"]
              [rc/button :label "Default" :on-click #(reset! data-ratom default-data)]
              ; TODO: need to pass a "meaningful" random-data-set builder function into the tools
              [rc/button :label "Random" :on-click #(reset! data-ratom (random-data-fn))]
              [rc/button :label "A(uv) -> 10,000" :on-click #(do
                                                               ;(log/info "meta-tabular-data-ratom-tools (button)" data)
                                                               (swap! data-ratom assoc-in [:data 0 :uv] 10000))]
              [rc/button :label "Add 'Q'"
               :on-click #(swap! data-ratom assoc :data
                            (conj (-> @data-ratom :data)
                              {:name "Page Q" :uv (rand-int 5000)
                               :pv   (rand-int 5000) :tv (rand-int 5000) :amt (rand-int 5000)}))]

              [rc/button :label "Drop Last 2"
               :on-click #(swap! data-ratom assoc :data (into [] (drop-last 2 (:data @data-ratom))))]

              [rc/button :label "Add :new-item"
               :on-click #(do
                            (reset! data-ratom (-> @data-ratom
                                                 (assoc-in [:metadata :fields :new-item] :number)
                                                 (assoc :data (into []
                                                                (map (fn [x]
                                                                       (assoc x :new-item (rand-int 7000)))
                                                                  (:data @data-ratom))))))
                            (let [color (color/next-color next-color)]
                              (reset! config-ratom (-> @config-ratom
                                                     (assoc :new-item
                                                            {:include true :animate true
                                                             :stroke  color :fill color})))))]]])


(defn- config-tools [config reset-config]
  [:p "config-tools"])


(def example-data (r/atom data/meta-tabular-data))
(def example-config (r/atom default-config))


(defn data-ratom-example []
  (let []
    (acu/demo "Area Chart 2"
      "Trying to fix Recharts implementation"
      [rc/box :src (rc/at)
       :justify :center
       :child [rc/v-box :src (rc/at)
               :children [[:div {:style {:width 1200 :height 500}}
                           [area-chart/component
                            :data example-data
                            ;:config example-config
                            :component-id "area-chart-2"
                            :container-id ""]]
                          [data-ratom-tools example-data example-config
                           data/meta-tabular-data
                           data/random-meta-tabular-data]]]]
                          ;[config-tools example-config default-config]]]]
      area-chart/source-code)))


(defn examples []
  [me/examples {"data-ratom" [data-ratom-example]}])


(comment
  @example-data

  (data/random-entity-data ["Page A" "Page B" "Page C"])

  (data/random-meta-tabular-data)


  ())




