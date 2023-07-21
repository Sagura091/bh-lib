(ns demo.catalog.atom.example.experimental.tab-set
  (:require
    [woolybear.ad.layout :as layout]
    [woolybear.ad.catalog.utils :as acu]
    [bh-ui.atom.experimental.tab-set :as tab-set]
    [bh-ui.atom.experimental.react-table :as t]
    [demo.catalog.atom.example.experimental.react-table :as tc]
    [reagent.core :as r]
    [re-com.core :as rc]
    [re-frame.core :as re-frame]))


(re-frame/reg-sub
  ::data-one
  (fn [_ _]
    "sample-data ONE"))
(re-frame/reg-sub
  ::data-two
  (fn [_ _]
    "sample-data TWO"))
(re-frame/reg-sub
  ::data-three
  (fn [_ _]
    "sample-data THREE"))


(defn- content-page [& {:keys [data]}]
  (let [d (re-frame/subscribe data)]
    [:p {:style {:height "200px" :width "350px"
                 :border "1px dotted"}}
     @d]))


(def sample-config-1 {:labels ["One" "Two" "Three"]})
(def sample-children-1 [[content-page :data [::data-one]]
                        [content-page :data [::data-two]]
                        [content-page :data [::data-three]]])


(defn example-1 []
  (acu/demo "Tab Set #1"
    "Trying to sort out a set of tabs that have pages associated with them, allowing the
user to click a tab and see the corresponding page.

  > In this example, we use very simple pages that call `(re-frame/subscribe)` against a dummy subscription
    (it returns static data) and displayed the result(s) in a `[:p]`"

    [layout/centered {:extra-classes :width-50}
     [rc/v-box :src (rc/at)
      :width "200px"
      :gap "5px"
      :children [[rc/h-box :src (rc/at)
                  :width "100%"
                  :gap "25px"
                  :children [[tab-set/tab-set :config sample-config-1 :children sample-children-1]]]]]]

    '[layout/centered {:extra-classes :width-50}
      []]))


(def sample-config-2 {:labels ["Area" "Bar" "Line"]})
(def sample-children-2 [[rc/box :width "400px" :height "400px"
                         :child [bh-ui.atom.chart.area-chart/component
                                 :data bh-ui.atom.chart.area-chart/sample-data
                                 :config bh-ui.atom.chart.area-chart/sample-config-data
                                 :component-id :tab-set.example.ui.area :container-id :tab-set.example]]
                        [rc/box :width "400px" :height "400px"
                         :child [bh-ui.atom.chart.bar-chart/component
                                 :data bh-ui.atom.chart.area-chart/sample-data
                                 :config bh-ui.atom.chart.bar-chart/sample-config-data
                                 :component-id :tab-set.example.ui.bar :container-id :tab-set.example]]
                        [rc/box :width "400px" :height "400px"
                         :child [bh-ui.atom.chart.line-chart/component
                                 :data bh-ui.atom.chart.area-chart/sample-data
                                 :config bh-ui.atom.chart.line-chart/sample-config-data
                                 :component-id :tab-set.example.ui.line :container-id :tab-set.example]]])


(defn example-2 []
  (acu/demo "Tab Set #2"
    "Trying to sort out a set of tabs that have pages associated with them, allowing the
user to click a tab and see the corresponding page

  > In this example, we use a recharts/chart (eg., `:rechart/area`) inside a re-com/box
    (required to give the responsive chart a fixed size to fill) for each tab page."

    [layout/centered {:extra-classes :width-50}
     [rc/v-box :src (rc/at)
      :width "200px"
      :gap "5px"
      :children [[rc/h-box :src (rc/at)
                  :width "100%"
                  :gap "25px"
                  :children [[tab-set/tab-set :config sample-config-2 :children sample-children-2]]]]]]

    '[layout/centered {:extra-classes :width-50}
      []]))


(def sample-config-3 {:labels ["One" "Two" "Three"]})
(def sample-children-3 [[t/table-component
                         :data tc/data
                         :config tc/data-config
                         :component-id :tab-set.example.ui.table-one :container-id :tab-set.example]
                        [t/table-component
                         :data tc/group-data
                         :config tc/group-data-config
                         :component-id :tab-set.example.ui.table-two :container-id :tab-set.example]
                        [t/table-component
                         :data tc/data
                         :config tc/data-config
                         :component-id :tab-set.example.ui.table-three :container-id :tab-set.example]])


(defn example-3 []
  (acu/demo "Tab Set #3"
    "Trying to sort out a set of tabs that have pages associated with them, allowing the
user to click a tab and see the corresponding page.

  > In this example, we use a `:react-table/table` for each tab page."

    [layout/centered {:extra-classes :width-50}
     [rc/v-box :src (rc/at)
      :width "200px"
      :gap "5px"
      :children [[rc/h-box :src (rc/at)
                  :width "100%"
                  :gap "25px"
                  :children [[tab-set/tab-set :config sample-config-3 :children sample-children-3]]]]]]

    '[layout/centered {:extra-classes :width-50}
      []]))
