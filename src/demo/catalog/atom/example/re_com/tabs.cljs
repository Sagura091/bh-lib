(ns demo.catalog.atom.example.re-com.tabs
  (:require [bh-ui.atom.re-com.tabs :as tabs]
            [re-com.core :as rc]
            [woolybear.ad.catalog.utils :as acu]
            [woolybear.ad.layout :as layout]))


(defn- labeled-example [label ex]
  [rc/v-box :src (rc/at)
   :gap "2px"
   :children [[:div.h4 label]
              ex]])


(defn example []
  (acu/demo "Tabs"
    "Wrap any 'pages' of UI elements in a set of tabs, which can be change by clicking.

    - :children - sequence of hiccup components, one for each 'tab'
    - :config - hash-map of configuration information, specifically
           - :labels - vector of strings, one per 'tab' and in the same order, the string will be used as the
                       text/label on the tab ui element itself

    Clicking on a tab will swap the content to the associated hiccup 'child'"

    [layout/centered {:extra-classes :width-50}
     [rc/v-box :src (rc/at)
      :width "200px"
      :gap "5px"
      :children [[rc/h-box :src (rc/at)
                  :width "100%"
                  :gap "25px"
                  :children [(labeled-example "Horizontal Tabs" [tabs/h-tabs :config tabs/sample-config :children tabs/sample-children])
                             (labeled-example "Horizontal Bar Tabs" [tabs/h-bar-tabs :config tabs/sample-config :children tabs/sample-children])
                             (labeled-example "Horizontal Pill Tabs" [tabs/h-pill-tabs :config tabs/sample-config :children tabs/sample-children])]]
                 [rc/h-box :src (rc/at)
                  :width "100%"
                  :gap "25px"
                  :children [(labeled-example "Vertical Bar Tabs" [tabs/v-bar-tabs :config tabs/sample-config :children tabs/sample-children])
                             (labeled-example "Vertical Pill Tabs" [tabs/v-pill-tabs :config tabs/sample-config :children tabs/sample-children])]]]]]

    '[layout/centered {:extra-classes :width-50}
      []]))