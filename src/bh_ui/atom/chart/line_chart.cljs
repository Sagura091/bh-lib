(ns bh-ui.atom.chart.line-chart
  (:require [bh-ui.atom.chart.utils :as utils]
            [bh-ui.atom.re-com.configure-toggle :as ct]
            [bh-ui.utils :as ui-utils]
            [bh-ui.utils.color :as color]
            [bh-ui.utils.example-data :as example-data]
            [bh-ui.utils.helpers :as h]
            [bh-ui.utils.locals :as l]
            [bh-ui.atom.chart.wrapper-2 :as wrapper]
            [re-frame.core :as rf]
            [re-com.core :as rc]
            [reagent.core :as r]
            [taoensso.timbre :as log]
            [woolybear.ad.layout :as layout]
            ["recharts" :refer [ResponsiveContainer LineChart Line Brush]]
            ["reactflow" :refer (Position)]))


(def source-code '[:> LineChart {:data d}
                   (utils/standard-chart-components component-id {})
                   [:> Line (merge {:type              "monotone" :dataKey a
                                    :isAnimationActive @isAnimationActive?
                                    :stroke            (ui-utils/resolve-sub subscriptions [a :stroke])
                                    :fill              (ui-utils/resolve-sub subscriptions [a :fill])}
                              (when (seq (ui-utils/resolve-sub subscriptions [a :stackId]))
                                {:stackId (ui-utils/resolve-sub subscriptions [a :stackId])}))]])


(def sample-data example-data/meta-tabular-data)
(def sample-config-data example-data/tabular-column-config-data)
(def random-data example-data/random-meta-tabular-data)


(defn local-config [data]
  (merge
    {:brush false}
    (->> (get-in @data [:metadata :fields])
      (filter (fn [[k v]] (= :number v)))
      keys
      (map-indexed (fn [idx a]
                     ;(log/info "line color" idx a (ui-utils/get-color idx))
                     {a {:include true
                         :stroke  (color/get-color idx)
                         :fill    (color/get-color idx)}}))
      (into {}))))


(defn config [component-id data]
  (-> ui-utils/default-pub-sub
    (merge
      utils/default-config
      {:type      "line-chart"
       :tab-panel {:value     (keyword component-id "config")
                   :data-path [:containers (keyword component-id) :tab-panel]}}
      (local-config data))
    (assoc-in [:x-axis :dataKey] (get-in @data [:metadata :id]))))


(defn- line-config [component-id label path position]
  [rc/v-box :src (rc/at)
   :gap "5px"
   :children [[utils/boolean-config component-id label (conj path :include)]
              [rc/h-box :src (rc/at)
               :gap "5px"
               :children [[utils/color-config component-id ":stroke" (conj path :stroke) position]
                          [utils/color-config component-id ":fill" (conj path :fill) position]]]]])


(defn- make-line-config [component-id data]
  (->> (get-in @data [:metadata :fields])
    (filter (fn [[k v]] (= :number v)))
    keys
    (map-indexed (fn [idx a]
                   [line-config component-id a [a] :above-right]))
    (into [])))


(defn config-panel [data component-id]

  ;(log/info "config-panel" data component-id)

  [rc/v-box :src (rc/at)
   :gap "10px"
   :width "100%"
   :class "chart-config-panel"
   :children [[utils/standard-chart-config data component-id]
              [rc/line :src (rc/at) :size "2px"]
              [rc/h-box :src (rc/at)
               :gap "10px"
               :children (make-line-config component-id data)]
              [rc/line :src (rc/at) :size "2px"]
              [utils/boolean-config component-id ":brush?" [:brush]]]])


(defn- make-line-display [component-id data subscriptions isAnimationActive?]

  ;(log/info "make-line-display" data)
  (->> (get-in data [:metadata :fields])
    (filter (fn [[_ v]] (= :number v)))
    keys
    (map (fn [a]
           (if (ui-utils/resolve-sub subscriptions [a :include])
             [:> Line {:type              "monotone" :dataKey a
                       :isAnimationActive @isAnimationActive?
                       :stroke            (ui-utils/resolve-sub subscriptions [a :stroke])
                       :fill              (ui-utils/resolve-sub subscriptions [a :fill])}]
             [])))
    (remove empty?)
    (into [:<>])))


(defn- component* [& {:keys [data config component-id container-id
                             subscriptions isAnimationActive?]
                      :as   params}]

  (let [d (if (empty? data) [] (get data :data))]

    ;(log/info "component*" data "//" d)
    [:> ResponsiveContainer
     [:> LineChart {:data d}

      (utils/standard-chart-components component-id {})

      (when (ui-utils/resolve-sub subscriptions [:brush]) [:> Brush])

      (make-line-display component-id data subscriptions isAnimationActive?)]]))


(defn component [& {:keys [component-id] :as params}]

  ;(log/info "component-2" params)

  (let [input-params (assoc params :component* component*
                       :component-panel wrapper/component-panel
                       :config config
                       :local-config local-config)]

    (reduce into [wrapper/base-chart] (seq input-params))))


(def meta-data {:rechart/line {:component component
                               :atm/role  :ui/component
                               :ports     {:data   :port/sink
                                           :config :port/sink}}})


(rf/dispatch-sync [:register-meta meta-data])



; logic to turn :ports into :handles for the flow-diagram
(comment

  (def ports (-> meta-data :rechart/line :ports))


  ; :port/sink -> inputs
  ; :port/source -> outputs
  ; :port/source-sink -> inputs AND outputs
  (group-by (fn [[_ direction]] direction)
    (-> meta-data :rechart/line :ports))

  (->> (-> meta-data :rechart/line :ports)
    (group-by (fn [[_ direction]] direction))
    (map (fn [[direction ports]]
           {:d direction :p ports})))


  ; build port handle data
  (map-indexed (fn [idx [p _]]
                 {p {:label (str (name p) "-in")
                     :style {:top (+ 10 (* idx 10)) :background "#555"}
                     :position (.-Left Position)}})
    [[:data :port/sink]
     [:config :port/sink]])



  (->> (-> meta-data :rechart/line :ports)
    (group-by (fn [[_ direction]] direction))
    (map (fn [[direction ports]]
           (condp = direction
             :port/source {:outputs (bh-ui.atom.component-registry/build-outputs ports)}
             :port/sink {:inputs (bh-ui.atom.component-registry/build-inputs ports)}
             :port/source-sink {:outputs (bh-ui.atom.component-registry/build-outputs ports)
                                :inputs (bh-ui.atom.component-registry/build-inputs ports)})))
    (into {}))






  ())
