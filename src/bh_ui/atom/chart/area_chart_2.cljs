(ns bh-ui.atom.chart.area-chart-2
  (:require [bh-ui.atom.chart.utils :as utils]
            [bh-ui.utils.helpers :as h]
            [bh-ui.utils.color :as color]
            [reagent.core :as r]
            [re-com.core :as rc]
            [re-frame.core :as rf]
            [cljs.spec.alpha :as spec]
            [taoensso.timbre :as log]
            ["recharts" :refer [ResponsiveContainer AreaChart Area Brush
                                XAxis YAxis CartesianGrid Tooltip Legend]]))


(log/info "bh-ui.atom.chart.area-chart-2")


(def source-code '[])


(defn data->config [data next-color]
  (log/info "data->config" (spec/valid? :tabular-data/meta-data data)
    "_____" (spec/valid? :remote-data/meta-data data)
    "_____" data)
  (cond
    (or (spec/valid? :tabular-data/meta-data data)
      (spec/valid? :remote-data/meta-data data))
    (merge {:isAnimationActive true
            :grid              {:include         true
                                :strokeDasharray {:dash 3 :space 3}
                                :stroke          :gray}
            :x-axis            {:include     true
                                :dataKey     (get-in data [:metadata :id])
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
      (->> (get-in data [:metadata :fields])
        keys
        (map (fn [val]
               (let [color (color/next-color next-color)]
                 {val {:include true :animate true
                       :stroke  color :fill color}})))
        (into {})))))


(defn standard-chart-components [component-id config]

  ;(log/info "standard-chart-components (a)" component-id config)

  [:<>
   (when (get-in config [:grid :include])
     [:> CartesianGrid {:strokeDasharray (utils/strokeDasharray
                                           (get-in config [:grid :strokeDasharray :dash])
                                           (get-in config [:grid :strokeDasharray :space]))
                        :stroke          (get-in config [:grid :stroke])}])

   (when (get-in config [:x-axis :include])
     [:> XAxis {:dataKey     (get-in config [:x-axis :dataKey])
                :orientation (get-in config [:x-axis :orientation])
                :scale       (get-in config [:x-axis :scale])}])

   (when (get-in config [:y-axis :include])
     [:> YAxis {:dataKey     (get-in config [:y-axis :dataKey])
                :orientation (get-in config [:y-axis :orientation])
                :scale       (get-in config [:y-axis :scale])
                :interval    (get-in config [:y-axis :interval])}])

   (when (get-in config [:tooltip :include]) [:> Tooltip])

   (when (get-in config [:legend :include])
     [:> Legend {:layout        (get-in config [:legend :layout])
                 :align         (get-in config [:legend :align])
                 :verticalAlign (get-in config [:legend :verticalAlign])}])])


(defn- make-area-display [data config]
  (log/info "make-area-display (a)" data "_____" config)

  (let [ret (->> (get-in data [:metadata :fields])
              (filter (fn [[_ v]] (= :number v)))
              keys
              (map (fn [a]
                     (if (get-in config [a :include])
                       [:> Area (merge {:type              "monotone"
                                        :dataKey           a
                                        :isAnimationActive (get-in config [:isAnimationActive])
                                        :stroke            (get-in config [a :stroke])
                                        :fill              (get-in config [a :fill])}
                                  (when (seq (get-in config [a :stackId]))
                                    {:stackId (get-in config [a :stackId])}))]
                       [])))
              (remove empty?)
              (into [:<>]))]

    (log/info "make-area-display (b)" ret)

    ret))


(defn component [& {:keys [data config style help component-id container-id]}]
  (let [d    (h/resolve-value data)
        c    (h/resolve-value config)
        _    (log/info "component (a)" c "_____" (empty? @c))
        styl (h/resolve-value style)
        hlp  (h/resolve-value help)]

    (log/info "component (b)" d "_____" c)

    (fn []
      (let [next-color (atom -2)
            cfg        (if (empty? @c) (r/atom (data->config @d next-color)) c)]

        (log/info "component (c)" d "_____" cfg)

        (if (empty? @d)
          [rc/alert-box :src (rc/at)
           :alert-type :info
           :class "h-w-100pc"
           :heading "Waiting for data"]

          [:> ResponsiveContainer
           [:> AreaChart {:data (:data @d)}

            (standard-chart-components component-id @cfg)

            (when (:brush @cfg) [:> Brush])

            (make-area-display @d @cfg)]])))))



(rf/dispatch-sync [:register-meta
                   {:rechart/area-2 {:component component
                                     :atm/role  :ui/component
                                     :ports     {:data   :port/sink
                                                 :config :port/sink}}}])





(comment
  (h/resolve-value {})



  ())
