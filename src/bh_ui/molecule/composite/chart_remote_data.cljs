(ns bh-ui.molecule.composite.chart-remote-data)


(def ui-definition
  {:mol/components   {":topic/measurements" {:atm/role :source/remote :atm/kind :source/measurements}
                      ":ui/bar-chart"       {:atm/role :ui/component :atm/kind :rechart/bar}}

   :mol/links        {":topic/measurements" {:data {":ui/bar-chart" :data}}}

   :mol/grid-layout  [{:i ":ui/bar-chart" :x 0 :y 0 :w 20 :h 11 :static true}]})


(def source-code '(let [def {:mol/components   {":ui/bar-chart"     {:type :ui/component :name :rechart/bar}
                                                ":topic/measurements" {:type :source/remote :name :source/measurements}}
                             :mol/links        {":topic/measurements" {:data {":ui/bar-chart" :data}}}
                             :mol/grid-layout  [{:i ":ui/bar-chart" :x 0 :y 0 :w 20 :h 11 :static true}]}]
                    [grid-widget/component
                     :data def
                     :component-id (h/path->keyword container-id "widget")]))
