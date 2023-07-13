(ns demo.catalog.atom.example.re-com.tabs
  (:require [bh-ui.atom.re-com.tabs :as tabs]
            [re-com.core :as rc]
            [woolybear.ad.catalog.utils :as acu]
            [woolybear.ad.layout :as layout]))


(defn- label-example [label ex]
  [rc/v-box :src (rc/at) :gap "2px"
   :children [[:div.h4 label]
              ex]])


(defn example []
  (acu/demo "Tabs"
    "Wrap any 'pages' of UI elements in a single tab, which can be change by a click"

    [layout/centered {:extra-classes :width-50}
     [rc/v-box :src (rc/at)
      :gap "5px"
      :children [[rc/h-box :src (rc/at)
                  :gap "25px"
                  :children [(label-example "Horizontal Tabs" [tabs/h-tabs :children tabs/sample-data])
                             (label-example "Horizontal Bar Tabs" [tabs/h-bar-tabs :children tabs/sample-data])
                             (label-example "Horizontal Pill Tabs" [tabs/h-pill-tabs :children tabs/sample-data])
                             (label-example "Horizontal Tabs (alt)" [tabs/h-tabs :children [(tabs/tab :id "one" :label "One" :child [:p "tab one"])
                                                                                            (tabs/tab :id "two" :label "Two" :child [:p "tab two"])
                                                                                            (tabs/tab :id "three" :label "Three" :child [:p "tab three"])]])]]
                 [rc/h-box :src (rc/at)
                  :gap "25px"
                  :children [(label-example "Vertical Bar Tabs" [tabs/v-bar-tabs :children tabs/sample-data])
                             (label-example "Vertical Pill Tabs" [tabs/v-pill-tabs :children tabs/sample-data])]]]]]

    '[layout/centered {:extra-classes :width-50}
      []]))