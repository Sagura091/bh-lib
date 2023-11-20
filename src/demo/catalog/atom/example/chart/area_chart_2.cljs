(ns demo.catalog.atom.example.chart.area-chart-2
  (:require [bh-ui.core :as bh]
            [bh-ui.atom.chart.area-chart-2 :as area-chart]
            [bh-ui.utils.color :as color]
            [bh-ui.utils.example-data :as data]
            [demo.catalog.atom.example.multi-example :as me]
            [demo.catalog.atom.example.chart.alt.show-data :as sd]
            [reagent.core :as r]
            [reagent.ratom :as ra]
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


(defn categorize-item [item]
  (cond
    (or (coll? item)
      (string? item)                                     ; need this in case the Mol-DSL only has a string for this
      (keyword? item)) :subscription
    (or
      (instance? ra/RAtom item)
      (instance? ra/Reaction item)
      (instance? Atom item)) :ratom

    :else :value))


(defn- data-tools [data config-ratom default-data random-data-fn]
  (let [cat-data (categorize-item data)
        old-data (condp = cat-data
                   :subscription (bh/utils-subscribe-local data [:data])
                   :ratom @data
                   :else data)]

    [rc/v-box :src (rc/at)
     :gap "3px"
     :width "100%"
     :height "30%"
     :children [[sd/show-data data]
                [rc/h-box :src (rc/at)
                 :gap "10px"
                 :class "tools-panel"
                 :children [[:label.h5 "Input Data:"]
                            [rc/button :label "Empty" :on-click #(condp = cat-data
                                                                   :subscription (bh/utils-handle-change-path (drop-last data)
                                                                                   [[bh/utils-set-local-values (take-last 1 data) []]])
                                                                   :ratom (reset! data [])
                                                                   :else ())]
                            [rc/button :label "Default" :on-click #(condp = cat-data
                                                                     :subscription (bh/utils-handle-change-path (drop-last data)
                                                                                     [[bh/utils-set-local-values (take-last 1 data) default-data]])
                                                                     :ratom (reset! data default-data)
                                                                     :else ())]
                            ; TODO: need to pass a "meaningful" random-data-set builder function into the tools
                            [rc/button :label "Random" :on-click #(condp = cat-data
                                                                    :subscription (bh/utils-handle-change-path data
                                                                                    [[bh/utils-set-local-values [] (random-data-fn)]])
                                                                    :ratom (reset! data (random-data-fn))
                                                                    :else ())]
                            [rc/button :label "A(uv) -> 10,000" :on-click #(do
                                                                             ;(log/info "meta-tabular-data-ratom-tools (button)" data)
                                                                             (condp = (categorize-item data)
                                                                               :subscription (bh/utils-handle-change-path data
                                                                                               [[assoc-in [:data 0 :uv] 10000]])
                                                                               :ratom (swap! data assoc-in [:data 0 :uv] 10000)
                                                                               :else ()))]
                            [rc/button :label "Add 'Q'"
                             :on-click #(condp = (categorize-item data)
                                           :subscription (bh/utils-handle-change-path data
                                                           [[bh/utils-conj-in [:data]
                                                                   {:name "Page Q" :uv (rand-int 5000)
                                                                    :pv   (rand-int 5000) :tv (rand-int 5000) :amt (rand-int 5000)}]])
                                           :ratom (swap! data assoc :data
                                                    (conj (-> @data :data)
                                                      {:name "Page Q" :uv (rand-int 5000)
                                                       :pv   (rand-int 5000) :tv (rand-int 5000) :amt (rand-int 5000)}))
                                           :else ())]

                            [rc/button :label "Drop Last 2"
                             :on-click #(condp = (categorize-item data)
                                          :subscription (bh/utils-handle-change-path data [[bh/utils-drop-last-in [:data] 2]])
                                          :ratom (swap! data assoc :data (into [] (drop-last 2 (:data @data))))
                                          :else ())]

                            [rc/button :label "Add :new-item"
                             :on-click #(do
                                          (condp = (categorize-item data)
                                            :subscription (bh/utils-handle-change-path data [[assoc-in [:metadata :fields :new-item] :number]
                                                                                             [assoc :data (into []
                                                                                                            (map (fn [x]
                                                                                                                   (assoc x :new-item (rand-int 7000)))
                                                                                                              @old-data))]])
                                            :ratom (reset! data (-> @data
                                                                  (assoc-in [:metadata :fields :new-item] :number)
                                                                  (assoc :data (into []
                                                                                 (map (fn [x]
                                                                                        (assoc x :new-item (rand-int 7000)))
                                                                                   (:data old-data))))))
                                            :else ())
                                          (let [color (color/next-color next-color)]
                                            (reset! config-ratom (-> @config-ratom
                                                                   (assoc :new-item
                                                                          {:include true :animate true
                                                                           :stroke  color :fill color})))))]]]]]))


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
       :width "100%"
       :height "100%"
       :child [rc/v-box :src (rc/at)
               :gap "3px"
               :width "100%"
               :height "100%"
               :children [[:div {:style {:width 1200 :height 500}}
                           [area-chart/component
                            :data example-data
                            ;:config example-config
                            :component-id "area-chart-2"
                            :container-id ""]]
                          [data-tools example-data example-config
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




