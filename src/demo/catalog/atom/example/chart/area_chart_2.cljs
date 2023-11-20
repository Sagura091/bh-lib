(ns demo.catalog.atom.example.chart.area-chart-2
  (:require [bh-ui.core :as bh]
            [bh-ui.atom.chart.area-chart-2 :as area-chart]
            [bh-ui.utils.color :as color]
            [bh-ui.utils.example-data :as data]
            [demo.catalog.atom.example.multi-example :as me]
            [demo.catalog.atom.example.chart.examples.user-tool :as tools]
    ;[demo.catalog.atom.example.chart.alt.show-data :as sd]
            [reagent.core :as r]
            [re-com.core :as rc]
            [woolybear.ad.catalog.utils :as acu]
            [taoensso.timbre :as log]))


(log/info "demo.catalog.atom.example.chart.area-chart-2")


;(def next-color (atom -1))


(defn default-config [next-color]
  (merge {:isAnimationActive true
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


(def example-data data/meta-tabular-data)
(def example-config default-config)


(defn chart-container [chart]
  [:div.component-example {:style {:width "100%" :height "450px"}}
   chart])


(defn config-ratom-example []
  (let [next-color   (atom -1)
        component-id "area-chart-2"
        container-id ""
        reset-config (example-config next-color)
        config       (r/atom reset-config)]

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
                          [tools/config-tools example-data config reset-config]]]]
      area-chart/source-code)))


(defn config-struct-example []
  (let [next-color   (atom -1)
        component-id "area-chart-2"
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
                            :config (example-config next-color)
                            :component-id component-id
                            :container-id container-id]]]]]
      area-chart/source-code)))


(defn config-sub-example []
  (let [next-color   (atom -1)
        component-id :area-chart-2-data-sub-demo
        container-id ""
        reset-config (example-config next-color)
        config       [component-id :blackboard :config]
        id           (atom nil)]

    (fn []
      (when (nil? @id)
        (reset! id component-id)
        (bh/utils-init-container-locals @id {:blackboard {:config reset-config}
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
                            [tools/config-tools example-data config reset-config]]]]
        area-chart/source-code))))


(defn data-ratom-example []
  (let [next-color   (atom -1)
        component-id "area-chart-2"
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
                          [tools/data-tools data (example-config next-color)
                           data/meta-tabular-data
                           data/random-meta-tabular-data
                           next-color]]]]
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
  (let [next-color   (atom -1)
        component-id :area-chart-2-data-sub-demo
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
                            [tools/data-tools data (example-config next-color)
                             data/meta-tabular-data
                             data/random-meta-tabular-data
                             next-color]]]]
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



(comment
  (def next-color (atom -1))
  (example-data next-color)



  ())




