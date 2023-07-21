(ns demo.catalog.atom.example.re-com.tabs
  (:require [bh-ui.atom.re-com.tabs :as tabs]
            [bh-ui.utils.helpers :as h]
            [bh-ui.atom.chart.area-chart :as area]
            [bh-ui.atom.chart.bar-chart :as bar]
            [bh-ui.atom.chart.line-chart :as line]
            [bh-ui.utils :as ui-utils]
            [reagent.core :as r]
            [re-com.core :as rc]
            [woolybear.ad.catalog.utils :as acu]
            [woolybear.ad.layout :as layout]
            [taoensso.timbre :as log]))


(defn- labeled-example [label ex]
  [rc/v-box :src (rc/at)
   :gap "2px"
   :children [[:div.h4 label]
              ex]])


(defn text-block [& {:keys [data config style component-id container-id] :as params}]
  (log/info "text-block (a)" params)

  (let [id (r/atom nil)
        d  (h/resolve-value data)]
    (fn []
      (when (nil? @id)
        (log/info "text-block (b)" component-id)
        (reset! id component-id)
        (ui-utils/init-container-locals @id {:container container-id})
        (ui-utils/dispatch-local @id [:container] container-id))

      (log/info "text-block (c)" component-id "//" @d)

      [rc/input-textarea
       :src (rc/at)
       :model (r/atom (str @d))
       :on-change #()])))


(defn text-block-3 [& {:keys [data config style component-id container-id] :as params}]
  (log/info "text-block (a)" params)

  [rc/input-textarea
   :src (rc/at)
   :model data
   :on-change #()])


(defn text-block-4 [& {:keys [data config style component-id container-id] :as params}]
  (log/info "text-block (a)" params)

  [:div {:style {:font-style :italic}} data])


(re-frame.core/dispatch-sync
  [:register-meta {:stunt/text-block {:component text-block
                                      :ports     {:data :port/sink}}}])


(def hiccup-children [[text-block :data "text block one"]
                      [text-block :data "text block two"]
                      [text-block :data "text block three"]])
(def hiccup-3-children [[text-block-3 :data "text block one"]
                        [text-block-3 :data "text block two"]
                        [text-block-3 :data "text block three"]])
(def hiccup-4-children [[text-block-4 :data "text block one"]
                        [text-block-4 :data "text block two"]
                        [text-block-4 :data "text block three"]])
(def hiccup-5-children [[rc/box :width "250px" :height "300px"
                         :child [area/component :data area/sample-data :config area/sample-config-data
                                 :component-id :tabbed-example.ui.area :container-id :tabbed-example]]
                        [rc/box :width "250px" :height "300px"
                         :child [bar/component :data area/sample-data :config area/sample-config-data
                                 :component-id :tabbed-example.ui.area :container-id :tabbed-example]]
                        [rc/box :width "250px" :height "300px"
                         :child [line/component :data area/sample-data :config area/sample-config-data
                                 :component-id :tabbed-example.ui.area :container-id :tabbed-example]]])

(defn example []
  (acu/demo "Tabs [:div]"
    "Wrap any 'pages' of UI elements in a set of tabs, which can be change by clicking.

- :children - sequence of hiccup components, one for each 'tab'
- :config - hash-map of configuration information, specifically
       - :labels - vector of strings, one per 'tab' and in the same order, the string will be used as the
                   text/label on the tab ui element corresponding to the child

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


(defn example-2 []
  (acu/demo "Tabs #2 ['h/resolve-value' hiccup]"
    "Wrap any 'pages' of UI elements in a set of tabs, which can be change by clicking. Now trying it with more complex
Hiccup components

- :children - sequence of hiccup components, one for each 'tab'
- :config - hash-map of configuration information, specifically
       - :labels - vector of strings, one per 'tab' and in the same order, the string will be used as the
                   text/label on the tab ui element corresponding to the child

Clicking on a tab will swap the content to the associated hiccup 'child'"

    [layout/centered {:extra-classes :width-50}
     [rc/v-box :src (rc/at)
      :width "200px"
      :gap "5px"
      :children [[rc/h-box :src (rc/at)
                  :width "100%"
                  :gap "25px"
                  :children [(labeled-example "Horizontal Tabs" [tabs/h-tabs :config tabs/sample-config :children hiccup-children])]]]]]

    '[layout/centered {:extra-classes :width-50}
      []]))


(defn example-3 []
  (acu/demo "Tabs #3 [rc/textarea-input]"
    "Wrap any 'pages' of UI elements in a set of tabs, which can be change by clicking. Now trying it with more complex
Hiccup components

- :children - sequence of hiccup components, one for each 'tab'
- :config - hash-map of configuration information, specifically
       - :labels - vector of strings, one per 'tab' and in the same order, the string will be used as the
                   text/label on the tab ui element corresponding to the child

Clicking on a tab will swap the content to the associated hiccup 'child'"

    [layout/centered {:extra-classes :width-50}
     [rc/v-box :src (rc/at)
      :width "200px"
      :gap "5px"
      :children [[rc/h-box :src (rc/at)
                  :width "100%"
                  :gap "25px"
                  :children [(labeled-example "Horizontal Tabs" [tabs/h-tabs :config tabs/sample-config :children hiccup-children])]]]]]

    '[layout/centered {:extra-classes :width-50}
      []]))


(defn example-4 []
  (acu/demo "Tabs #4 [hiccup-wrapped :div]"
    "Wrap any 'pages' of UI elements in a set of tabs, which can be change by clicking. Now trying it with more complex
Hiccup components

- :children - sequence of hiccup components, one for each 'tab'
- :config - hash-map of configuration information, specifically
       - :labels - vector of strings, one per 'tab' and in the same order, the string will be used as the
                   text/label on the tab ui element corresponding to the child

Clicking on a tab will swap the content to the associated hiccup 'child'"

    [layout/centered {:extra-classes :width-50}
     [rc/v-box :src (rc/at)
      :width "200px"
      :gap "5px"
      :children [[rc/h-box :src (rc/at)
                  :width "100%"
                  :gap "25px"
                  :children [(labeled-example "Horizontal Tabs" [tabs/h-tabs :config tabs/sample-config :children hiccup-4-children])]]]]]

    '[layout/centered {:extra-classes :width-50}
      []]))


(defn example-5 []
  (acu/demo "Tabs #5 [recharts/charts]"
    "Wrap any 'pages' of UI elements in a set of tabs, which can be change by clicking. Now trying it with more complex
Hiccup components

- :children - sequence of hiccup components, one for each 'tab'
- :config - hash-map of configuration information, specifically
       - :labels - vector of strings, one per 'tab' and in the same order, the string will be used as the
                   text/label on the tab ui element corresponding to the child

Clicking on a tab will swap the content to the associated hiccup 'child'"

    [layout/centered {:extra-classes :width-50}
     [rc/v-box :src (rc/at)
      :width "200px"
      :gap "5px"
      :children [[rc/h-box :src (rc/at)
                  :width "100%"
                  :gap "25px"
                  :children [(labeled-example "Horizontal Tabs" [tabs/h-tabs :config tabs/sample-config :children hiccup-5-children])]]]]]

    '[layout/centered {:extra-classes :width-50}
      []]))