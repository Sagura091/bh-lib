(ns demo.catalog.atom.example.re-com.tabs
  (:require [bh-ui.core :as bh]
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
  ;(log/info "text-block (a)" params
  ;  "____" data
  ;  "____" (bh/utils-resolve-value data))

  (let [id (r/atom nil)
        d  (bh/utils-resolve-value data)]
    (fn []
      (when (nil? @id)
        ;(log/info "text-block (b)" component-id)
        (reset! id component-id)
        (bh/utils-init-container-locals @id {:container container-id})
        (bh/utils-dispatch-local @id [:container] container-id))

      ;(log/info "text-block (c)" component-id "//" @d)

      [rc/input-textarea
       :src (rc/at)
       :model (r/atom (str @d))
       :on-change #()])))


(defn text-block-3 [& {:keys [data config style component-id container-id] :as params}]
  ;(log/info "text-block (a)" params)

  [rc/input-textarea
   :src (rc/at)
   :model (r/atom (str @data))
   :on-change #()])


(defn text-block-4 [& {:keys [data config style component-id container-id] :as params}]
  ;(log/info "text-block (a)" params)

  [:div {:style {:font-style :italic}} data])


(re-frame.core/dispatch-sync
  [:register-meta {:stunt/text-block {:component text-block
                                      :ports     {:data :port/sink}}}])


(def hiccup-children [[text-block :data "text block one"
                       :component-id :example.tabs-2.text-1 :container-id :example.tabs-2]
                      [text-block :data "text block two"
                       :component-id :example.tabs-2.text-2 :container-id :example.tabs-2]
                      [text-block :data "text block three"
                       :component-id :example.tabs-2.text-3 :container-id :example.tabs-2]])
(def hiccup-3-children [[text-block-3 :data "text block one"]
                        [text-block-3 :data "text block two"]
                        [text-block-3 :data "text block three"]])
(def hiccup-4-children [[text-block-4 :data "text block one"]
                        [text-block-4 :data "text block two"]
                        [text-block-4 :data "text block three"]])



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
                  :children [(labeled-example "Horizontal Tabs" [bh/recom-h-tabs :config bh/recom-tabs-sample-config :children bh/recom-tabs-sample-children])
                             (labeled-example "Horizontal Bar Tabs" [bh/recom-h-bar-tabs :style {:color "blue" :background-color "grey"} :config bh/recom-tabs-sample-config :children bh/recom-tabs-sample-children])
                             (labeled-example "Horizontal Pill Tabs" [bh/recom-h-pill-tabs :config bh/recom-tabs-sample-config :children bh/recom-tabs-sample-children])]]
                 [rc/h-box :src (rc/at)
                  :width "100%"
                  :gap "25px"
                  :children [(labeled-example "Vertical Bar Tabs" [bh/recom-v-bar-tabs :config bh/recom-tabs-sample-config :children bh/recom-tabs-sample-children])
                             (labeled-example "Vertical Pill Tabs" [bh/recom-v-pill-tabs :config bh/recom-tabs-sample-config :children bh/recom-tabs-sample-children])]]]]]

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
                  :children [(labeled-example "Horizontal Tabs" [bh/recom-h-tabs :config bh/recom-tabs-sample-config :children hiccup-children])]]]]]

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
                  :children [(labeled-example "Horizontal Tabs" [bh/recom-h-tabs :config bh/recom-tabs-sample-config :children hiccup-children])]]]]]

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
                  :children [(labeled-example "Horizontal Tabs" [bh/recom-h-tabs :config bh/recom-tabs-sample-config :children hiccup-4-children])]]]]]

    '[layout/centered {:extra-classes :width-50}
      []]))

(def hiccup-5-children [[rc/box :width "250px" :height "300px"
                         :child [bh/area-chart-component :data bh/area-chart-sample-data :config bh/area-chart-sample-config-data
                                 :component-id :tabbed-example.ui.area :container-id :tabbed-example]]
                        [rc/box :width "250px" :height "300px"
                         :child [bh/bar-chart-component :data bh/area-chart-sample-data :config bh/area-chart-sample-config-data
                                 :component-id :tabbed-example.ui.area :container-id :tabbed-example]]
                        [rc/box :width "250px" :height "300px"
                         :child [bh/line-chart-component :data bh/area-chart-sample-data :config bh/area-chart-sample-config-data
                                 :component-id :tabbed-example.ui.area :container-id :tabbed-example]]])


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
                  :children [(labeled-example "Horizontal Tabs" [bh/recom-h-tabs :config bh/recom-tabs-sample-config :children hiccup-5-children])]]]]]

    '[layout/centered {:extra-classes :width-50}
      []]))



(def data-one {:title    "Targets One"
               :c-o-c    [{:step      :generated
                           :by        "demo.catalog.atom.example.experimental.react-table"
                           :version   "generated"
                           :at        "dummy-date"
                           :signature "dummy-uuid"}]
               :metadata {:title  "Targets Two"
                          :type   :tabular
                          :id     :AoI
                          :fields {:AoI :string :Symbol :string :include :boolean}}

               :data     [{:Symbol "#FFFF00" :include false :AoI "Fire-prst-001"}
                          {:Symbol "#00FFFF" :include false :AoI "Ft-202210-0010"}
                          {:Symbol "#0000FF" :include false :AoI "Ft-202210-0011"}
                          {:Symbol "#FFA500" :include false :AoI "Ft-202210-0012"}
                          {:Symbol "#808080" :include false :AoI "Ft-202210-0013"}
                          {:Symbol "#6495ED" :include false :AoI "Ft-202210-0014"}
                          {:Symbol "#008B8B" :include false :AoI "Ft-202210-0015"}
                          {:Symbol "#DAA520" :include false :AoI "Ft-202210-0001"}
                          {:Symbol "#00BFFF" :include false :AoI "Ft-202210-0002"}
                          {:Symbol "#8FBC8F" :include false :AoI "Ft-202210-0003"}
                          {:Symbol "#9400D3" :include false :AoI "Ft-202210-0004"}]})
(def data-two {:title    "Targets Two"
               :c-o-c    [{:step      :generated
                           :by        "demo.catalog.atom.example.experimental.react-table"
                           :version   "generated"
                           :at        "dummy-date"
                           :signature "dummy-uuid"}]
               :metadata {:title  "Targets Two"
                          :type   :tabular
                          :id     :AoI
                          :fields {:AoI :string :Symbol :string :include :boolean}}

               :data     [{:Symbol "#FFFF00" :include false :AoI "Alpha"}
                          {:Symbol "#00FFFF" :include false :AoI "Bravo"}
                          {:Symbol "#0000FF" :include false :AoI "Charlie"}]})
(def data-three {:title    "Targets Three"
                 :c-o-c    [{:step      :generated
                             :by        "demo.catalog.atom.example.experimental.react-table"
                             :version   "generated"
                             :at        "dummy-date"
                             :signature "dummy-uuid"}]
                 :metadata {:title  "Targets Three"
                            :type   :tabular
                            :id     :AoI
                            :fields {:AoI :string :Symbol :string :include :boolean}}

                 :data     [{:Symbol "#FFFF00" :include false :AoI "Omega"}
                            {:Symbol "#a0a0FF" :include false :AoI "Theta"}
                            {:Symbol "#4040FF" :include false :AoI "Phi"}
                            {:Symbol "#0aa0aF" :include false :AoI "Gamma"}]})
(def hiccup-6-children [[bh-ui.atom.experimental.react-table/table-component
                         :data demo.catalog.atom.example.experimental.react-table/group-data
                         :config demo.catalog.atom.example.experimental.react-table/group-data-config
                         :component-id :tabbed-example.ui.table-1 :container-id :tabbed-example]
                        [bh-ui.atom.experimental.react-table/table-component
                         :data data-two :config demo.catalog.atom.example.experimental.react-table/data-config
                         :component-id :tabbed-example.ui.table-2 :container-id :tabbed-example]
                        [bh-ui.atom.experimental.react-table/table-component
                         :data data-three :config demo.catalog.atom.example.experimental.react-table/data-config
                         :component-id :tabbed-example.ui.table-3 :container-id :tabbed-example]])


(defn example-6 []
  (acu/demo "Tabs #6 [react-table/table]"
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
                  :children [(labeled-example "Horizontal Tabs" [bh/recom-h-tabs :config bh/recom-tabs-sample-config :children hiccup-6-children])]]]]]

    '[layout/centered {:extra-classes :width-50}
      []]))

