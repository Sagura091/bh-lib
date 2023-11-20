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
      (string? item)                                        ; need this in case the Mol-DSL only has a string for this
      (keyword? item)) :subscription
    (or
      (instance? ra/RAtom item)
      (instance? ra/Reaction item)
      (instance? Atom item)) :ratom

    :else :value))


(defn- data-tools [data config default-data random-data-fn]
  (log/info "data-tools (a)" data)

  (let [cat-data   (categorize-item data)
        old-data   (condp = cat-data
                     :subscription @(bh/utils-subscribe-local data [:data])
                     :ratom @data
                     :else data)
        cat-config (categorize-item config)
        old-config (condp = cat-config
                     :subscription (bh/utils-subscribe-local config)
                     :ratom @config
                     :else config)]

    (log/info "data-tools (b)" data
      "_____" cat-data "_____" old-data)

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
                                                                                                                   (assoc x :new-item
                                                                                                                            (rand-int 7000)))
                                                                                                              old-data))]])
                                            :ratom (reset! data (-> @data
                                                                  (assoc-in [:metadata :fields :new-item] :number)
                                                                  (assoc :data (into []
                                                                                 (map (fn [x]
                                                                                        (assoc x :new-item (- (rand-int 12000) 2000)))
                                                                                   (:data old-data))))))
                                            :else ())
                                          (let [color (color/next-color next-color)]
                                            (condp = cat-config
                                              :subscription (bh/utils-handle-change-path config [[assoc :new-item
                                                                                                  {:include true :animate true
                                                                                                   :stroke  color :fill color}]])
                                              :ratom (reset! config (-> @config
                                                                      (assoc :new-item
                                                                             {:include true :animate true
                                                                              :stroke  color :fill color})))
                                              :else ())))]]]]]))


(defn- config-tools [data config reset-config]
  (log/info "config-tools (a)" config)

  (let [cat-config (categorize-item config)
        old-config (condp = cat-config
                     :subscription (bh/utils-subscribe-local config)
                     :ratom @config
                     :else config)]

    (log/info "config-tools (b)" config
      "_____" cat-config "_____" old-config)

    [rc/v-box :src (rc/at)
     :gap "3px"
     :width "100%"
     :height "30%"
     :children [[sd/show-config config]
                [rc/h-box :src (rc/at)
                 :gap "10px"
                 :class "tools-panel"
                 :children [[:label.h5 "Config Properties:"]
                            [rc/button :label "Default" :on-click #(condp = cat-config
                                                                     :subscription (bh/utils-handle-change-path config
                                                                                     [[bh/utils-set-local-values [] reset-config]])
                                                                     :ratom (reset! config reset-config)
                                                                     :else ())]
                            [rc/button :label "! brush" :on-click #(condp = cat-config
                                                                     :subscription (bh/utils-handle-change-path config
                                                                                     [[update-in [:brush] not]])
                                                                     :ratom (swap! config update-in [:brush] not)
                                                                     :else ())]
                            [rc/button :label "! :uv" :on-click #(condp = cat-config
                                                                   :subscription (bh/utils-handle-change-path config
                                                                                   [[update-in [:uv :include] not]])
                                                                   :ratom (swap! config update-in [:uv :include] not)
                                                                   :else ())]
                            [rc/button :label "! :pv" :on-click #(condp = cat-config
                                                                   :subscription (bh/utils-handle-change-path config
                                                                                   [[update-in [:pv :include] not]])
                                                                   :ratom (swap! config update-in [:pv :include] not)
                                                                   :else ())]
                            [rc/button :label "! :tv" :on-click #(condp = cat-config
                                                                   :subscription (bh/utils-handle-change-path config
                                                                                   [[update-in [:tv :include] not]])
                                                                   :ratom (swap! config update-in [:tv :include] not)
                                                                   :else ())]
                            [rc/button :label "! :amt" :on-click #(condp = cat-config
                                                                    :subscription (bh/utils-handle-change-path config
                                                                                    [[update-in [:amt :include] not]])
                                                                    :ratom (swap! config update-in [:amt :include] not)
                                                                    :else ())]
                            [bh/chart-utils-color-config config ":uv :fill" [:uv :fill] :above-center]
                            [bh/chart-utils-color-config config ":tv :fill" [:tv :fill] :above-center]
                            [bh/chart-utils-color-config config ":pv :fill" [:pv :fill] :above-center]
                            [bh/chart-utils-color-config config ":amt :fill" [:amt :fill] :above-center]
                            [rc/button :label "stack uv/pv" :on-click #(condp = cat-config
                                                                         :subscription (do
                                                                                         (bh/utils-handle-change-path config
                                                                                           [[assoc-in [:uv :stackId] "b"]])
                                                                                         (bh/utils-handle-change-path config
                                                                                           [[assoc-in [:pv :stackId] "b"]]))
                                                                         :ratom (reset! config (-> @config
                                                                                                 (assoc-in [:uv :stackId] "a")
                                                                                                 (assoc-in [:pv :stackId] "a")))
                                                                         :else ())]
                            [rc/button :label "unstack uv/pv" :on-click #(condp = cat-config
                                                                           :subscription (do
                                                                                           (bh/utils-handle-change-path config
                                                                                             [[assoc-in [:uv :stackId] ""]])
                                                                                           (bh/utils-handle-change-path config
                                                                                             [[assoc-in [:pv :stackId] ""]]))
                                                                           :ratom (reset! config (-> @config
                                                                                                   (assoc-in [:uv :stackId] "")
                                                                                                   (assoc-in [:pv :stackId] "")))
                                                                           :else ())]
                            [rc/button :label "stack tv/amt" :on-click #(condp = cat-config
                                                                          :subscription (do
                                                                                          (bh/utils-handle-change-path config
                                                                                            [[assoc-in [:tv :stackId] "b"]])
                                                                                          (bh/utils-handle-change-path config
                                                                                            [[assoc-in [:amt :stackId] "b"]]))
                                                                          :ratom (reset! config (-> @config
                                                                                                  (assoc-in [:tv :stackId] "b")
                                                                                                  (assoc-in [:amt :stackId] "b")))
                                                                          :else ())]
                            [rc/button :label "unstack tv/amt" :on-click #(condp = cat-config
                                                                            :subscription (do
                                                                                            (bh/utils-handle-change-path config
                                                                                              [[assoc-in [:tv :stackId] ""]])
                                                                                            (bh/utils-handle-change-path config
                                                                                              [[assoc-in [:amt :stackId] ""]]))
                                                                            :ratom (reset! config (-> @config
                                                                                                    (assoc-in [:tv :stackId] "")
                                                                                                    (assoc-in [:amt :stackId] "")))
                                                                            :else ())]]]]]))


(def example-data data/meta-tabular-data)
(def example-config default-config)


(defn chart-container [chart]
  [:div.component-example {:style {:width "100%" :height "450px"}}
   chart])


(defn config-ratom-example []
  (let [component-id "area-chart-2"
        container-id ""
        config       (r/atom example-config)]

    (acu/demo "Area Chart 2"
      "Trying to fix Recharts implementation (config is a `(r)atom`)"
      [rc/box :src (rc/at)
       :justify :center
       :width "100%"
       :height "100%"
       :child [rc/v-box :src (rc/at)
               :gap "3px"
               :width "100%"
               :height "100%"
               :children [[chart-container
                           [area-chart/component
                            :data example-data
                            :config config
                            :component-id component-id
                            :container-id container-id]]
                          [config-tools example-data config example-config]]]]
      area-chart/source-code)))


(defn config-struct-example []
  (let [component-id "area-chart-2"
        container-id ""]

    (acu/demo "Area Chart 2"
      "Trying to fix Recharts implementation (config is a *plain* hash-map)"
      [rc/box :src (rc/at)
       :justify :center
       :width "100%"
       :height "100%"
       :child [rc/v-box :src (rc/at)
               :gap "3px"
               :width "100%"
               :height "100%"
               :children [[chart-container
                           [area-chart/component
                            :data example-data
                            :config example-config
                            :component-id component-id
                            :container-id container-id]]]]]
      area-chart/source-code)))


(defn config-sub-example []
  (let [component-id :area-chart-2-data-sub-demo
        container-id ""
        config       [component-id :blackboard :config]
        id           (atom nil)]

    (fn []
      (when (nil? @id)
        (reset! id component-id)
        (bh/utils-init-container-locals @id {:blackboard {:config example-config}
                                             :container  container-id})
        (bh/utils-dispatch-local @id [:container] component-id))

      (acu/demo "Area Chart 2"
        "Trying to fix Recharts implementation (subscribing to `:config`)"
        [rc/box :src (rc/at)
         :justify :center
         :width "100%"
         :height "100%"
         :child [rc/v-box :src (rc/at)
                 :gap "3px"
                 :width "100%"
                 :height "100%"
                 :children [[chart-container
                             [area-chart/component
                              :data example-data
                              :config config
                              :component-id component-id
                              :container-id container-id]]
                            [config-tools example-data config example-config]]]]
        area-chart/source-code))))


(defn data-ratom-example []
  (let [component-id "area-chart-2"
        container-id ""
        data         (r/atom example-data)]

    (acu/demo "Area Chart 2"
      "Trying to fix Recharts implementation (data is a `(r)atom`)"
      [rc/box :src (rc/at)
       :justify :center
       :width "100%"
       :height "100%"
       :child [rc/v-box :src (rc/at)
               :gap "3px"
               :width "100%"
               :height "100%"
               :children [[chart-container
                           [area-chart/component
                            :data data
                            :component-id component-id
                            :container-id container-id]]
                          [data-tools data example-config
                           data/meta-tabular-data
                           data/random-meta-tabular-data]]]]
      area-chart/source-code)))


(defn data-struct-example []
  (let [component-id "area-chart-2"
        container-id ""
        data         example-data]

    (acu/demo "Area Chart 2"
      "Trying to fix Recharts implementation (data is a *plain* hash-map)"
      [rc/box :src (rc/at)
       :justify :center
       :width "100%"
       :height "100%"
       :child [rc/v-box :src (rc/at)
               :gap "3px"
               :width "100%"
               :height "100%"
               :children [[chart-container
                           [area-chart/component
                            :data data
                            :component-id component-id
                            :container-id container-id]]]]]
      area-chart/source-code)))


(defn data-sub-example []
  (let [component-id :area-chart-2-data-sub-demo
        container-id ""
        data         [component-id :blackboard :topic.sample-data]
        id           (atom nil)]

    (fn []
      (when (nil? @id)
        (reset! id component-id)
        (bh/utils-init-container-locals @id {:blackboard {:topic.sample-data
                                                          (assoc-in example-data
                                                            [:metadata :title]
                                                            "Tabular from a Subscription")}
                                             :container  container-id})
        (bh/utils-dispatch-local @id [:container] component-id))

      (acu/demo "Area Chart 2"
        "Trying to fix Recharts implementation (subscribing to `:data`)"
        [rc/box :src (rc/at)
         :justify :center
         :width "100%"
         :height "100%"
         :child [rc/v-box :src (rc/at)
                 :gap "3px"
                 :width "100%"
                 :height "100%"
                 :children [[chart-container
                             [area-chart/component
                              :data data
                              :component-id component-id
                              :container-id container-id]]
                            [data-tools data example-config
                             data/meta-tabular-data
                             data/random-meta-tabular-data]]]]
        area-chart/source-code))))


(defn examples []
  [me/examples {"data-ratom"    [data-ratom-example]
                "data-struct"   [data-struct-example]
                "data-sub"      [data-sub-example]
                "config-ratom"  [config-ratom-example]
                "config-struct" [config-struct-example]
                "config-sub"    [config-sub-example]}])


(comment
  @example-data

  (data/random-entity-data ["Page A" "Page B" "Page C"])

  (data/random-meta-tabular-data)


  ())




