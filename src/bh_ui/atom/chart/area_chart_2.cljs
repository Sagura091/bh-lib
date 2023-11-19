(ns bh-ui.atom.chart.area-chart-2
  (:require [bh-ui.atom.chart.utils :as utils]
            [bh-ui.utils.helpers :as h]
            [re-com.core :as rc]
            [taoensso.timbre :as log]
            ["recharts" :refer [ResponsiveContainer AreaChart Area Brush
                                XAxis YAxis CartesianGrid Tooltip Legend]]))


(log/info "bh-ui.atom.chart.area-chart-2")


(def source-code '[])


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


(defn component [& {:keys [data config style help
                           component-id container-id]}]

  (let [d    (h/resolve-value data)
        cfg  (h/resolve-value config)
        styl (h/resolve-value style)
        hlp  (h/resolve-value help)]

    (log/info "component" d "_____" cfg)

    (fn []
      (if (empty? @d)
        [rc/alert-box :src (rc/at)
         :alert-type :info
         :class "h-w-100pc"
         :heading "Waiting for data"]

        [:> ResponsiveContainer
         [:> AreaChart {:data (:data @d)}

          (standard-chart-components component-id @cfg)

          (when (:brush @cfg) [:> Brush])

          (make-area-display @d @cfg)]]))))





(comment
  (h/resolve-value {})



  ())
