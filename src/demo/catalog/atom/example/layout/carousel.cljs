(ns demo.catalog.atom.example.layout.carousel
  (:require [bh-ui.atom.layout.carousel :as carousel]
            [bh-ui.atom.card.flippable-card :as flippable]
            [bh-ui.atom.chart.area-chart :as area]
            [bh-ui.atom.chart.bar-chart :as bar]
            [bh-ui.atom.chart.line-chart :as line]
            [bh-ui.utils.example-data :as ex-data]
            [re-com.core :as rc]
            [woolybear.ad.catalog.utils :as acu]
            [woolybear.ad.layout :as layout]
            [taoensso.timbre :as log]))


(defn carousel-ex-1 []
  (acu/demo "Carousel of Divs"
    "Colored :divs inside a Carousel"
    [layout/centered {:extra-classes :width-50}
     [carousel/carousel {:showArrows true}
                   ;:auto-play true :interval 3000 :infiniteLoop true}
      [:div {:style {:height "300px"
                     :border "1px solid"
                     :background-color :lightgreen}} "page 1"]
      [:p {:style {:height "300px"
                   :border "1px solid"
                   :background-color :cyan}} "page 2"]
      [:p {:style {:height "300px"
                   :border "1px solid"
                   :background-color :coral}} "page 3"]]]
    "[]"))


(defn- personality
  "Returns a 'flippable' card for a 'person' to be presented on the 'Giants' page. Uses the
  [react-ui-cards](https://github.com/nukeop/react-ui-cards) react component library, specifically
  the [flipping card](https://github.com/nukeop/react-ui-cards#flipping-card)
  variant (there are several provided by the library).

  ---

  - name : (string) the person's name
  - description : (markdown string) whatever you want to say about this person, including things like hyperlinks
  - image : (filepath) [optional] name of the file to show as an image (defaults to imgs/hammer-icon-16x16.png)
  "
  [name description & [image]]
  ;(log/info "personality" image)
  [flippable/card
   :style {:style {:width 270 :height 400}}
   :front [:div flippable/default-style
           [rc/v-box :src (rc/at)
            :gap "10px"
            :align :center
            :justify :center
            :children [[:figure.image {:style {:width "200px" :height "200px"}}
                        ; see https://www.youtube.com/watch?v=4ALLynsZ0u0
                        [:img {:style {:border-top-left-radius "5rem"
                                       :border-bottom-right-radius "5rem"
                                       :background "#808080"}
                               :src (or (if (empty? image) nil image)
                                      "imgs/hammer-icon-16x16.png")}]]
                       [rc/gap :size "15px"]
                       [:p.title.is-1.has-text-centered name]]]]
   :back [:div flippable/default-style
          [layout/section
           [layout/markdown-block description]]]])


(defn carousel-ex-2 []
  (acu/demo "Carousel of Cards"
    "Flippable Cards inside a Carousel"
    [layout/centered {:extra-classes :width-50}
     [carousel/carousel {:showArrows true}

      [personality "Rich Hickey"
       "Rich is the creator of Clojure and the Datomic database. His deep thinking about programming and programing languages helps guide us.

[Are We There Yet?]() (2009)

[Simple Made Easy]() (2011)
              "
       "imgs/giants/rich-hickey.jpeg"]
      [personality "Stu Halloway"
       "Stu is a Principle at Cognitect and talks on many subjects.

[Simplicity Ain't Easy](https://www.youtube.com/watch?v=cidchWg74Y4) (2012)

[The Impedance Mismatch is Our Fault](https://www.infoq.com/presentations/Impedance-Mismatch/) (2012)

[Clojure in 10 Big Ideas](https://www.youtube.com/watch?v=noiGVQoyYHw) (2013)"
       "imgs/giants/stu-halloway.jpeg"]]]
    "[]"))


(def ex-3-style {:style {:width "600px" :height "250px"}})
(defn carousel-ex-3 []
  (acu/demo "Carousel of Charts"
    "Charts inside a Carousel"
    [layout/centered {:extra-classes :width-50}
     [carousel/carousel {:showArrows true}
      [:div ex-3-style
       [area/component
        :data ex-data/meta-tabular-data
        :component-id "chart-children-example-3-area"
        :container "chart-children-example-3"]]
      [:div ex-3-style
       [bar/component
        :data ex-data/meta-tabular-data
        :component-id "chart-children-example-3-bar"
        :container "chart-children-example-3"]]
      [:div ex-3-style
       [line/component
        :data ex-data/meta-tabular-data
        :component-id "chart-children-example-3-line"
        :container "chart-children-example-3"]]]]
    "[]"))


(defn carousel-ex-4 []
  (acu/demo "Carousel of Charts in rc/box"
    "Charts inside a Box inside a Carousel"
    [layout/centered {:extra-classes :width-50}
     [carousel/carousel {:showArrows true}
      [rc/box
       :width "600px"
       :height "250px"
       :child [area/component
               :data ex-data/meta-tabular-data
               :component-id "chart-children-example-4-area"
               :container "chart-children-example-4"]]
      [rc/box
       :width "600px"
       :height "250px"
       :child [bar/component
               :data ex-data/meta-tabular-data
               :component-id "chart-children-example-4-bar"
               :container "chart-children-example-4"]]
      [rc/box
       :width "600px"
       :height "250px"
       :child [line/component
               :data ex-data/meta-tabular-data
               :component-id "chart-children-example-4-line"
               :container "chart-children-example-4"]]]]
    "[]"))



