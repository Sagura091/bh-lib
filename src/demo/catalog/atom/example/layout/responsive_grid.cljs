(ns demo.catalog.atom.example.layout.responsive-grid
  (:require [bh-ui.atom.layout.responsive-grid :as r-grid]
            [bh-ui.atom.layout.grid :as grid]
            [bh-ui.atom.re-com.box :as box]
            [bh-ui.atom.re-com.v-scroller :as v-scroll]
            [bh-ui.atom.chart.bar-chart :as bar-chart]
            [bh-ui.atom.chart.line-chart :as line-chart]
            [re-com.core :as rc]
            [taoensso.timbre :as log]
            [woolybear.ad.catalog.utils :as acu]
            [woolybear.ad.icons :as icons]
            [woolybear.ad.layout :as layout]))


(log/info "demo.catalog.atom.example.layout.responsive-grid")


(def simple-dsl [[:div.grid-toolbar.title-wrapper.move-cursor
                  {:key "one" :style {:border           :solid
                                      :background-color :green
                                      :color            :white}}
                  [rc/h-box
                   :gap "5px"
                   :children [[layout/markdown-block "bar-chart"]]]]
                 [:div.grid-toolbar.title-wrapper.move-cursor
                  {:key "two" :style {:border           :solid
                                      :background-color :blue
                                      :color            :white}}
                  [rc/h-box
                   :gap "5px"
                   :children [[layout/markdown-block "line-chart"]]]]
                 [:div.grid-toolbar.title-wrapper.move-cursor
                  {:key "three" :style {:border           :solid
                                        :background-color :yellow
                                        :color            :black}}
                  [rc/h-box
                   :gap "5px"
                   :children [[layout/markdown-block "area-chart"]]]]])

(def simple-layout  [{:i "one" :x 0 :y 0 :w 2 :h 3 :static true}
                     {:i "two" :x 1 :y 0 :w 3 :h 2}
                     {:i "three" :x 4 :y 0 :w 4 :h 2}])

(def mol-dsl [[:div.widget-parent {:key "v-scroll"}
               [:div.grid-toolbar.title-wrapper.move-cursor :style {:height "1.5em"} "v-scroll"]
               [:div.widget.widget-content {:on-mouse-down #(.stopPropagation %)}
                [v-scroll/v-scroller {:style {:height "500px", :width "600px"}}
                 :children
                 [box/box {:border "1px solid", :width "600px", :height "250px"}
                  :child
                  [bar-chart/component
                   :component-id
                   :v-scroll-with-children.molecule.bar-chart
                   :container-id
                   :v-scroll-with-children.molecule
                   :data
                   [:v-scroll-with-children.molecule.blackboard.topic.data]]
                  [box/box {:border "1px solid", :width "600px", :height "250px"}
                   :child
                   [line-chart/component
                    :component-id
                    :v-scroll-with-children.molecule.line-chart
                    :container-id
                    :v-scroll-with-children.molecule
                    :data
                    [:v-scroll-with-children.molecule.blackboard.topic.data]]]]]]]])

(def mol-dsl-layout [{:i "one", :x 0, :y 0, :w 10, :h 11, :static true}])


(defn example []
  (let [widgets simple-dsl
        layout  simple-layout]

    (acu/demo "Mol-DSL"
      "Some meaningful text goes here..."
      [layout/frame
       [r-grid/grid
        :id "mol-dsl-example"
        :class "layout"
        :children widgets
        :layout layout
        :cols 20
        :width 1200
        :rowHeight 25
        :layoutFn #(bh-ui.molecule.grid-container/on-layout-change "mol-dsl-example" %1 %2)
        :widthFn #(bh-ui.molecule.grid-container/on-width-update %1 %2 %3 %4)]]

      '[])))
