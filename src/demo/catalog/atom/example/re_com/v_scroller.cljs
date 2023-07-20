(ns demo.catalog.atom.example.re-com.v-scroller
  (:require [bh-ui.atom.re-com.v-scroller :as v-scroller]
            [woolybear.ad.containers :as containers]
            [bh-ui.atom.chart.area-chart :as area]
            [bh-ui.atom.chart.line-chart :as line]
            [reagent.core :as r]
            [re-com.core :as rc]
            [taoensso.timbre :as log]
            [woolybear.ad.catalog.utils :as acu]
            [woolybear.ad.layout :as layout]))


(def example-children (->> [[rc/box :child "line one" :style {:border "2px solid" :height "50px" :width "auto"}]
                            [rc/box :child "line two" :style {:border "2px solid" :height "50px" :width "auto"}]
                            [rc/box :child "line three" :style {:border "2px solid" :height "50px" :width "auto"}]]
                        repeat
                        (take 25)
                        (reduce into [])))

(def chart-size {:height "250px" :width "550px"})

(def chart-children [[rc/box
                      :child [area/component
                              :data area/sample-data
                              :component-id "chart-children-example-area"
                              :container "chart-children-example"]
                      :style (merge {:border "1px solid"} chart-size)]
                     [rc/gap :size "25px"]
                     [rc/box
                      :child [line/component
                              :data area/sample-data
                              :component-id "chart-children-example-line"
                              :container "chart-children-example"]
                      :style (merge {:border "1px solid"} chart-size)]])



(defn example []
  (acu/demo "V-Scroller"
    "Wrap any kind of visual components (atoms) in a vertical scroll pane"

    [layout/centered {:extra-classes :width-50}
     [v-scroller/v-scroller
      :height "300px"
      :children example-children]]

    '[layout/centered {:extra-classes :width-50}
      [v-scroller/v-scroller
       :children example-children]]))


(defn chart-example []
  (acu/demo "V-Scroller w/Charts"
    "Wrap any kind of visual components (atoms) in a vertical scroll pane"

    [layout/centered {:extra-classes :width-50}
     [v-scroller/v-scroller
      :height "300px"
      :children chart-children]]

    '[layout/centered {:extra-classes :width-50}
      [v-scroller/component
       :children chart-children]]))


(defn woolybear-scroll-example []
  (acu/demo "Woolybear V-Scroll w/Charts"
    "Wrap any kind of visual components (atoms) in a vertical scroll pane"

    [layout/centered {:extra-classes :width-50}
     (into [containers/v-scroll-pane {:height "300px"}]
       chart-children)]


    '[layout/centered {:extra-classes :width-50}
      (into [containers/v-scroll-pane {:height "300px"}]
        chart-children)]))






(comment
  (->> [[:p "line one"]
        [:p "line two"]
        [:p "line three"]]
    repeat
    (take 5)
    (reduce into []))



  ())


