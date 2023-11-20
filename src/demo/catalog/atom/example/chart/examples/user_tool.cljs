(ns demo.catalog.atom.example.chart.examples.user-tool
  (:require [bh-ui.core :as bh]
            [bh-ui.utils.color :as color]
            [demo.catalog.atom.example.chart.alt.show-data :as sd]
            [reagent.core :as r]
            [reagent.ratom :as ra]
            [re-com.core :as rc]
            [taoensso.timbre :as log]))



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


(defn data-tools [data config default-data random-data-fn next-color]
  (log/info "data-tools (a)" data "_____" config)

  (let [cat-data   (categorize-item data)
        old-data   (condp = cat-data
                     :subscription @(bh/utils-subscribe-local data [:data])
                     :ratom @data
                     :else data)
        cat-config (categorize-item config)]

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



(defn config-tools [data config reset-config]
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
