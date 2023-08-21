(ns demo.catalog.atom.example.layout.responsive-grid
  (:require [bh-ui.core :as bh]
            [re-frame.core :as re-frame]
            [re-com.core :as rc]
            [taoensso.timbre :as log]
            [woolybear.ad.catalog.utils :as acu]
            [woolybear.ad.icons :as icons]
            [woolybear.ad.layout :as layout]))


(log/info "demo.catalog.atom.example.layout.responsive-grid")


; need to "fake" the data subscription, since we really aren't following the
; entire Mol-DSL compiler bootstrapping path, but just displaying the end result
;
(re-frame/reg-sub
  :v-scroll-with-children.molecule.blackboard.topic.data
  (fn [_ _]
    bh/bar-chart-sample-data))


(def boxed-bar-chart
  [rc/box :style {:border "1px solid", :width "275px", :height "250px"}
   :child [bh/bar-chart-component
           :component-id :v-scroll-with-children.molecule.bar-chart
           :container-id :v-scroll-with-children.molecule
           :data [:v-scroll-with-children.molecule.blackboard.topic.data]]])
(def boxed-line-chart
  [rc/box :style {:border "1px solid", :width "275px", :height "250px"}
   :child [bh/line-chart-component
           :component-id :v-scroll-with-children.molecule.line-chart
           :container-id :v-scroll-with-children.molecule
           :data [:v-scroll-with-children.molecule.blackboard.topic.data]]])


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
(def simple-layout [{:i "one" :x 0 :y 0 :w 2 :h 3 :static true}
                    {:i "two" :x 1 :y 0 :w 3 :h 2}
                    {:i "three" :x 4 :y 0 :w 4 :h 2}])


(def intermediate-dsl [[:div.widget-parent {:key "three"}
                        [:div.grid-toolbar.title-wrapper.move-cursor
                         {:style {;:border           :solid
                                  :height           "1.5em"
                                  :background-color :yellow
                                  :color            :black}}
                         "three"]
                        [:div.widget.widget-content {:on-mouse-down #(.stopPropagation %)
                                                     :style         {:height "100%"}}
                         [bh/recom-v-scroll
                          :style {:width "100%" :height "225px"}
                          :children [boxed-bar-chart
                                     boxed-line-chart]]]]])
(def intermediate-layout [{:i "three" :x 4 :y 0 :w 4 :h 10}])


(def mol-dsl [[:div.widget-parent {:key "v-scroll"}
               [:div.grid-toolbar.title-wrapper.move-cursor {:style {:height "1.5em"}} "v-scroll"]
               [:div.widget.widget-content {:on-mouse-down #(.stopPropagation %)
                                            :style         {:height "100%"}}
                [bh/recom-v-scroll
                 :style {:width "100%" :height "225px"}
                 :children [boxed-bar-chart
                            boxed-line-chart]]]]])
(def mol-dsl-layout [{:i "v-scroll", :x 0, :y 0, :w 5, :h 9, :static true}])


(defn example []
  (let [widgets mol-dsl
        layout  mol-dsl-layout]

    (acu/demo "Mol-DSL"
      "An example of using the Responsive-Grid to wrap the output of MolDSL, the
      domain specific language we have developed to support developing complex UIs
      visually via a [Directed Graph](https://en.wikipedia.org/wiki/Directed_graph)"

      [layout/frame
       [bh/responsive-grid
        :id "mol-dsl-example"
        :class "layout"
        :children widgets
        :layout layout
        :cols 20
        :width 1200
        :rowHeight 25
        :layoutFn #((fn [_ _ _]) "mol-dsl-example" %1 %2)
        :widthFn #((fn [_ _ _ _]) %1 %2 %3 %4)]]

      '[])))
