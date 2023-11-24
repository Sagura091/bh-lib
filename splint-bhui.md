----

#### src/bh_ui/atom/bhui/color_picker.cljs:18:34 [lint/fn-wrapper]

No need to wrap function. Clojure supports first-class functions.

```clojure
(clojure.core/fn [%1] (on-change %1))
```

Consider using:

```clojure
on-change
```

----

#### src/bh_ui/atom/bhui/color_picker.cljs:12:35 [lint/fn-wrapper]

No need to wrap function. Clojure supports first-class functions.

```clojure
(clojure.core/fn [%1] (on-change %1))
```

Consider using:

```clojure
on-change
```

----

#### src/bh_ui/atom/bhui/table.cljs:41:20 [style/useless-do]

Unnecessary `do`.

```clojure
(do [:th {:style {:color :white}} (str h)])
```

Consider using:

```clojure
[:th {:style {:color :white}} (str h)]
```

----

#### src/bh_ui/atom/bhui/table.cljs:51:35 [style/useless-do]

Unnecessary `do`.

```clojure
(do [:td (str (get b (keyword key)))])
```

Consider using:

```clojure
[:td (str (get b (keyword key)))]
```

----

#### src/bh_ui/atom/bhui/table.cljs:104:18 [lint/if-same-truthy]

Use `or` instead of recreating it.

```clojure
(if (:data @d) (:data @d) [])
```

Consider using:

```clojure
(or (:data @d) [])
```

----

#### src/bh_ui/atom/bhui/table.cljs:48:14 [style/useless-do]

Unnecessary `do`.

```clojure
(do [:tr (for [key header] (do [:td (str (get b (keyword key)))]))])
```

Consider using:

```clojure
[:tr (for [key header] (do [:td (str (get b (keyword key)))]))]
```

----

#### src/bh_ui/atom/chart/area_chart_2.cljs:94:60 [style/single-key-in]

Use `get` instead of recreating it.

```clojure
(get-in config [:isAnimationActive])
```

Consider using:

```clojure
(get config :isAnimationActive)
```

----

#### src/bh_ui/atom/chart/colored_pie_chart.cljs:115:32 [style/useless-do]

Unnecessary `do`.

```clojure
(do
 [:>
  Cell
  {:key (str "cell-" idx),
   :fill
   (or
    (ui-utils/resolve-sub subscriptions [name :color])
    (color/get-color 0))}])
```

Consider using:

```clojure
[:>
 Cell
 {:key (str "cell-" idx),
  :fill
  (or
   (ui-utils/resolve-sub subscriptions [name :color])
   (color/get-color 0))}]
```

----

#### src/bh_ui/atom/chart/radar_chart.cljs:45:53 [lint/fn-wrapper]

No need to wrap function. Clojure supports first-class functions.

```clojure
(clojure.core/fn [%1] (a %1))
```

Consider using:

```clojure
a
```

----

#### src/bh_ui/atom/chart/radar_chart.cljs:55:21 [style/single-key-in]

Use `get` instead of recreating it.

```clojure
(get-in @data [:data])
```

Consider using:

```clojure
(get @data :data)
```

----

#### src/bh_ui/atom/chart/radar_chart.cljs:256:21 [style/single-key-in]

Use `get` instead of recreating it.

```clojure
(get-in @sample-data [:data])
```

Consider using:

```clojure
(get @sample-data :data)
```

----

#### src/bh_ui/atom/chart/radar_chart.cljs:285:20 [style/single-key-in]

Use `get` instead of recreating it.

```clojure
(get-in @data [:data])
```

Consider using:

```clojure
(get @data :data)
```

----

#### src/bh_ui/atom/chart/radar_chart.cljs:255:20 [lint/fn-wrapper]

No need to wrap function. Clojure supports first-class functions.

```clojure
(clojure.core/fn [%1] (domainField %1))
```

Consider using:

```clojure
domainField
```

----

#### src/bh_ui/atom/chart/radar_chart.cljs:41:21 [style/single-key-in]

Use `get` instead of recreating it.

```clojure
(get-in @data [:data])
```

Consider using:

```clojure
(get @data :data)
```

----

#### src/bh_ui/atom/chart/radar_chart.cljs:289:51 [lint/fn-wrapper]

No need to wrap function. Clojure supports first-class functions.

```clojure
(clojure.core/fn [%1] (a %1))
```

Consider using:

```clojure
a
```

----

#### src/bh_ui/atom/chart/radar_chart.cljs:56:38 [lint/fn-wrapper]

No need to wrap function. Clojure supports first-class functions.

```clojure
(clojure.core/fn [%1] (field %1))
```

Consider using:

```clojure
field
```

----

#### src/bh_ui/atom/chart/radar_chart.cljs:254:20 [style/single-key-in]

Use `get` instead of recreating it.

```clojure
(get-in sample-data [:data])
```

Consider using:

```clojure
(get sample-data :data)
```

----

#### src/bh_ui/atom/chart/radar_chart.cljs:267:20 [style/single-key-in]

Use `get` instead of recreating it.

```clojure
(get-in @sample-data [:data])
```

Consider using:

```clojure
(get @sample-data :data)
```

----

#### src/bh_ui/atom/chart/radar_chart.cljs:271:35 [lint/fn-wrapper]

No need to wrap function. Clojure supports first-class functions.

```clojure
(clojure.core/fn [%1] (a %1))
```

Consider using:

```clojure
a
```

----

#### src/bh_ui/atom/chart/radar_chart.cljs:298:35 [lint/fn-wrapper]

No need to wrap function. Clojure supports first-class functions.

```clojure
(clojure.core/fn [%1] (a %1))
```

Consider using:

```clojure
a
```

----

#### src/bh_ui/atom/chart/radar_chart.cljs:57:38 [lint/fn-wrapper]

No need to wrap function. Clojure supports first-class functions.

```clojure
(clojure.core/fn [%1] (field %1))
```

Consider using:

```clojure
field
```

----

#### src/bh_ui/atom/chart/scatter_chart.cljs:241:11 [lint/thread-macro-one-arg]

Intention of `->` is clearer with inlined form.

```clojure
(-> %1 (dissoc :name))
```

Consider using:

```clojure
(dissoc %1 :name)
```

----

#### src/bh_ui/atom/chart/scatter_chart.cljs:69:3 [lint/thread-macro-one-arg]

Intention of `->` is clearer with inlined form.

```clojure
(->
 ui-utils/default-pub-sub
 (merge
  utils/default-config
  (ui-utils/config-tab-panel component-id)
  (local-config data)))
```

Consider using:

```clojure
(merge
 ui-utils/default-pub-sub
 utils/default-config
 (ui-utils/config-tab-panel component-id)
 (local-config data))
```

----

#### src/bh_ui/atom/chart/utils.cljs:45:7 [lint/fn-wrapper]

No need to wrap function. Clojure supports first-class functions.

```clojure
(fn [navbar] (:tab-panel navbar))
```

Consider using:

```clojure
:tab-panel
```

----

#### src/bh_ui/atom/chart/utils.cljs:478:1 [naming/lisp-case]

Prefer kebab-case over other cases for top-level definitions.

```clojure
(defn
 verticalAlign-config
 "lets the user change the vertical alignment of a 'legend'.\n  Supports:\n\n    `top`  `middle`  `bottom`\n\n  ---\n\n  - component-id : id of the component\n  - path : (vector) path into `config` where the scale for the layout is stored\n  "
 [component-id path]
 (let
  [btns
   [{:id "top", :label "top"}
    {:id "middle", :label "middle"}
    {:id "bottom", :label "bottom"}]]
  (enumerated-config component-id btns ":verticalAlign" path)))
```

Consider using:

```clojure
(defn
 vertical-align-config
 "lets the user change the vertical alignment of a 'legend'.\n  Supports:\n\n    `top`  `middle`  `bottom`\n\n  ---\n\n  - component-id : id of the component\n  - path : (vector) path into `config` where the scale for the layout is stored\n  "
 [component-id path]
 (let
  [btns
   [{:id "top", :label "top"}
    {:id "middle", :label "middle"}
    {:id "bottom", :label "bottom"}]]
  (enumerated-config component-id btns ":verticalAlign" path)))
```

----

#### src/bh_ui/atom/chart/utils.cljs:755:3 [style/prefer-boolean]

Use `boolean` if you must return `true` or `false`.

```clojure
(if (and (seq ui) (not (empty? (first ui)))) true false)
```

Consider using:

```clojure
(boolean (and (seq ui) (not (empty? (first ui)))))
```

----

#### src/bh_ui/atom/chart/utils.cljs:766:3 [style/prefer-boolean]

Use `boolean` if you must return `true` or `false`.

```clojure
(if nil true false)
```

Consider using:

```clojure
(boolean nil)
```

----

#### src/bh_ui/atom/chart/utils.cljs:548:1 [naming/lisp-case]

Prefer kebab-case over other cases for top-level definitions.

```clojure
(defn
 isAnimationActive
 [component-id]
 [boolean-config
  component-id
  ":isAnimationActive"
  [:isAnimationActive]])
```

Consider using:

```clojure
(defn
 is-animation-active
 [component-id]
 [boolean-config
  component-id
  ":isAnimationActive"
  [:isAnimationActive]])
```

----

#### src/bh_ui/atom/chart/utils.cljs:212:52 [lint/if-else-nil]

Use `when` which doesn't require specifying the else branch.

```clojure
(if vertical? "-vertical")
```

Consider using:

```clojure
(when vertical? "-vertical")
```

----

#### src/bh_ui/atom/chart/utils.cljs:290:1 [style/multiple-arity-order]

defn arities should be sorted fewest to most arguments.

```clojure
(defn
 slider-config
 ([config min max step path]
  (let
   [cfg (u/subscribe-local config [])]
   (fn
    []
    (let
     [model (r/atom (get-in @cfg path))]
     [rc/slider
      :src
      (rc/at)
      :model
      @model
      :width
      "100px"
      :min
      min
      :max
      max
      :step
      step
      :on-change
      (clojure.core/fn
       [%1]
       (h/handle-change-path config [[assoc-in path %1]]))]))))
 ([config min max path] [slider-config config min max 1 path]))
```

Consider using:

```clojure
(defn
 slider-config
 ([config min max path] [slider-config config min max 1 path])
 ([config min max step path]
  (let
   [cfg (u/subscribe-local config [])]
   (fn
    []
    (let
     [model (r/atom (get-in @cfg path))]
     [rc/slider
      :src
      (rc/at)
      :model
      @model
      :width
      "100px"
      :min
      min
      :max
      max
      :step
      step
      :on-change
      (clojure.core/fn
       [%1]
       (h/handle-change-path config [[assoc-in path %1]]))])))))
```

----

#### src/bh_ui/atom/chart/utils.cljs:760:9 [lint/not-empty?]

`seq` is idiomatic, gotta learn to love it.

```clojure
(not (empty? ui))
```

Consider using:

```clojure
(seq ui)
```

----

#### src/bh_ui/atom/chart/utils.cljs:336:1 [naming/lisp-case]

Prefer kebab-case over other cases for top-level definitions.

```clojure
(defn
 dashArray-config
 "provides the user with 2 sliders to control the 2 parts of the `:strokeDasharray`\n  property of a chart's [`CartesianGrid`](https://recharts.org/en-US/api/CartesianGrid)\n\n  ---\n\n  - config : (atom) holds a hash-map of the actual configuration properties see [[config]].\n  - label : (string) tell the user which axis this control is manipulating\n  - min : (integer) minimum value for the slider\n  - max : (integer) maximum value for the slider\n  - path : (vector) path into `config` where the :strokeDasharray is stored\n  "
 [component-id label min max path]
 [rc/h-box
  :src
  (rc/at)
  :children
  [[rc/box :src (rc/at) :align :start :child [:code label]]
   [rc/v-box
    :src
    (rc/at)
    :gap
    "5px"
    :children
    [[slider-config component-id min max (conj path :dash)]
     [slider-config component-id min max (conj path :space)]]]]])
```

Consider using:

```clojure
(defn
 dash-array-config
 "provides the user with 2 sliders to control the 2 parts of the `:strokeDasharray`\n  property of a chart's [`CartesianGrid`](https://recharts.org/en-US/api/CartesianGrid)\n\n  ---\n\n  - config : (atom) holds a hash-map of the actual configuration properties see [[config]].\n  - label : (string) tell the user which axis this control is manipulating\n  - min : (integer) minimum value for the slider\n  - max : (integer) maximum value for the slider\n  - path : (vector) path into `config` where the :strokeDasharray is stored\n  "
 [component-id label min max path]
 [rc/h-box
  :src
  (rc/at)
  :children
  [[rc/box :src (rc/at) :align :start :child [:code label]]
   [rc/v-box
    :src
    (rc/at)
    :gap
    "5px"
    :children
    [[slider-config component-id min max (conj path :dash)]
     [slider-config component-id min max (conj path :space)]]]]])
```

----

#### src/bh_ui/atom/chart/utils.cljs:755:21 [lint/not-empty?]

`seq` is idiomatic, gotta learn to love it.

```clojure
(not (empty? (first ui)))
```

Consider using:

```clojure
(seq (first ui))
```

----

#### src/bh_ui/atom/chart/utils.cljs:662:20 [lint/into-literal]

Use `set` instead of recreating it.

```clojure
(into #{} (keys ui))
```

Consider using:

```clojure
(set (keys ui))
```

----

#### src/bh_ui/atom/chart/utils.cljs:323:1 [naming/lisp-case]

Prefer kebab-case over other cases for top-level definitions.

```clojure
(defn
 strokeDasharray
 "reconstitutes the 2-part string value required by `:strokeDasharray` from the\n  2 values in the [[config]] atom.\n\n  ---\n\n  - dash\n  - space\n  "
 [dash & space]
 (str dash " " (first space)))
```

Consider using:

```clojure
(defn
 stroke-dasharray
 "reconstitutes the 2-part string value required by `:strokeDasharray` from the\n  2 values in the [[config]] atom.\n\n  ---\n\n  - dash\n  - space\n  "
 [dash & space]
 (str dash " " (first space)))
```

----

#### src/bh_ui/atom/chart/utils.cljs:661:9 [lint/not-empty?]

`seq` is idiomatic, gotta learn to love it.

```clojure
(not (empty? ui))
```

Consider using:

```clojure
(seq ui)
```

----

#### src/bh_ui/atom/chart/utils.cljs:226:68 [lint/if-else-nil]

Use `when` which doesn't require specifying the else branch.

```clojure
(if selected? "active ")
```

Consider using:

```clojure
(when selected? "active ")
```

----

#### src/bh_ui/atom/chart/utils.cljs:593:21 [lint/thread-macro-one-arg]

Intention of `->>` is clearer with inlined form.

```clojure
(->> @keys (map (fn [k] {:id k, :label k})))
```

Consider using:

```clojure
(map (fn [k] {:id k, :label k}) @keys)
```

----

#### src/bh_ui/atom/chart/utils.cljs:51:7 [lint/fn-wrapper]

No need to wrap function. Clojure supports first-class functions.

```clojure
(fn [tab-panel] (:value tab-panel))
```

Consider using:

```clojure
:value
```

----

#### src/bh_ui/atom/chart/utils.cljs:761:20 [lint/into-literal]

Use `set` instead of recreating it.

```clojure
(into #{} (keys ui))
```

Consider using:

```clojure
(set (keys ui))
```

----

#### src/bh_ui/atom/component_registry.cljs:93:3 [lint/thread-macro-one-arg]

Intention of `->>` is clearer with inlined form.

```clojure
(->> meta-data (map (fn [[k v]] {k v})))
```

Consider using:

```clojure
(map (fn [[k v]] {k v}) meta-data)
```

----

#### src/bh_ui/atom/component_registry.cljs:97:3 [lint/thread-macro-one-arg]

Intention of `->>` is clearer with inlined form.

```clojure
(->>
 meta-data
 (map (fn [[_ {ports :ports} :as comp]] {:p ports, :c comp})))
```

Consider using:

```clojure
(map (fn [[_ {ports :ports} :as comp]] {:p ports, :c comp}) meta-data)
```

----

#### src/bh_ui/atom/diagram/diagram/dagre_support.cljs:15:21 [style/new-object]

dot creation is preferred.

```clojure
(new (.-Graph graphlib))
```

Consider using:

```clojure
((.-Graph graphlib).)
```

----

#### src/bh_ui/atom/diagram/diagram/dagre_support.cljs:83:3 [style/useless-do]

Unnecessary `do`.

```clojure
(do
 (def
  graph
  {:nodes
   [{:id ":ui/targets",
     :type ":ui/component",
     :data {:label ":ui/targets", :inputs [], :outputs []},
     :position {:x 0, :y 0}}
    {:id ":topic/target-data",
     :type ":source/remote",
     :data {:label ":topic/target-data", :inputs [], :outputs []},
     :position {:x 0, :y 100}}
    {:id ":topic/selected-targets",
     :type ":source/local",
     :data {:label ":topic/selected-targets", :inputs [], :outputs []},
     :position {:x 0, :y 200}}],
   :edges
   [{:id "target-data->targets",
     :source ":topic/target-data",
     :target ":ui/targets",
     :style {:strokeWidth 2, :stroke :orange}}
    {:id "targets->selected-targets",
     :source ":ui/targets",
     :target ":topic/selected-targets",
     :style {:strokeWidth 2, :stroke :blue}}]}))
```

Consider using:

```clojure
(def
 graph
 {:nodes
  [{:id ":ui/targets",
    :type ":ui/component",
    :data {:label ":ui/targets", :inputs [], :outputs []},
    :position {:x 0, :y 0}}
   {:id ":topic/target-data",
    :type ":source/remote",
    :data {:label ":topic/target-data", :inputs [], :outputs []},
    :position {:x 0, :y 100}}
   {:id ":topic/selected-targets",
    :type ":source/local",
    :data {:label ":topic/selected-targets", :inputs [], :outputs []},
    :position {:x 0, :y 200}}],
  :edges
  [{:id "target-data->targets",
    :source ":topic/target-data",
    :target ":ui/targets",
    :style {:strokeWidth 2, :stroke :orange}}
   {:id "targets->selected-targets",
    :source ":ui/targets",
    :target ":topic/selected-targets",
    :style {:strokeWidth 2, :stroke :blue}}]})
```

----

#### src/bh_ui/atom/diagram/diagram/dagre_support.cljs:39:1 [style/multiple-arity-order]

defn arities should be sorted fewest to most arguments.

```clojure
(defn
 build-layout
 "use dagre (see https://reactflow.dev/examples/layouting/) to perform an auto-layout of the nodes,\n  which are then connected by the edges.\n  "
 ([nodes edges]
  (let
   [dagreGraph (dagre-graph nodes edges) nodeWidth 172 nodeHeight 36]
   (.layout dagre dagreGraph)
   (let
    [ret
     {:nodes
      (doall
       (map
        (fn
         [element]
         (let
          [dagreNode
           (.node dagreGraph (clj->js (:id element)))
           x
           (- (.-x dagreNode) (/ nodeWidth 2))
           y
           (- (.-y dagreNode) (/ nodeHeight 2))]
          (assoc element :position {:x x, :y y})))
        nodes)),
      :edges edges}]
    ret)))
 ([graph] (build-layout (:nodes graph) (:edges graph))))
```

Consider using:

```clojure
(defn
 build-layout
 ([graph] (build-layout (:nodes graph) (:edges graph)))
 ([nodes edges]
  (let
   [dagreGraph (dagre-graph nodes edges) nodeWidth 172 nodeHeight 36]
   (.layout dagre dagreGraph)
   (let
    [ret
     {:nodes
      (doall
       (map
        (fn
         [element]
         (let
          [dagreNode
           (.node dagreGraph (clj->js (:id element)))
           x
           (- (.-x dagreNode) (/ nodeWidth 2))
           y
           (- (.-y dagreNode) (/ nodeHeight 2))]
          (assoc element :position {:x x, :y y})))
        nodes)),
      :edges edges}]
    ret))))
```

----

#### src/bh_ui/atom/diagram/diagram/dagre_support.cljs:10:1 [style/multiple-arity-order]

defn arities should be sorted fewest to most arguments.

```clojure
(defn
 dagre-graph
 "copy the nodes and edges from Look to dagre, so we can use dagre layout function to put them\n  onto the display without drawing over each other\n  "
 ([nodes edges]
  (let
   [dagreGraph (new (.-Graph graphlib)) nodeWidth 172 nodeHeight 36]
   (.setDefaultEdgeLabel dagreGraph (clj->js {}))
   (.setGraph dagreGraph (clj->js {:rankdir "tb"}))
   (doall
    (map
     (fn
      [element]
      (.setNode
       dagreGraph
       (:id element)
       (clj->js {:width nodeWidth, :height nodeHeight})))
     nodes))
   (doall
    (map
     (fn
      [element]
      (.setEdge dagreGraph (:source element) (:target element)))
     edges))
   dagreGraph))
 ([graph] (dagre-graph (:nodes graph) (:edges graph))))
```

Consider using:

```clojure
(defn
 dagre-graph
 ([graph] (dagre-graph (:nodes graph) (:edges graph)))
 ([nodes edges]
  (let
   [dagreGraph (new (.-Graph graphlib)) nodeWidth 172 nodeHeight 36]
   (.setDefaultEdgeLabel dagreGraph (clj->js {}))
   (.setGraph dagreGraph (clj->js {:rankdir "tb"}))
   (doall
    (map
     (fn
      [element]
      (.setNode
       dagreGraph
       (:id element)
       (clj->js {:width nodeWidth, :height nodeHeight})))
     nodes))
   (doall
    (map
     (fn
      [element]
      (.setEdge dagreGraph (:source element) (:target element)))
     edges))
   dagreGraph)))
```

----

#### src/bh_ui/atom/diagram/flow_diagram.cljs:441:3 [style/useless-do]

Unnecessary `do`.

```clojure
(do (def inputs @last-inputs))
```

Consider using:

```clojure
(def inputs @last-inputs)
```

----

#### src/bh_ui/atom/diagram/flow_diagram.cljs:325:18 [lint/if-same-truthy]

Use `or` instead of recreating it.

```clojure
(if minimap-styles minimap-styles {})
```

Consider using:

```clojure
(or minimap-styles {})
```

----

#### src/bh_ui/atom/diagram/flow_diagram.cljs:473:3 [lint/thread-macro-one-arg]

Intention of `->>` is clearer with inlined form.

```clojure
(->> @@last-data :mol/flow-nodes)
```

Consider using:

```clojure
(:mol/flow-nodes @@last-data)
```

----

#### src/bh_ui/atom/experimental/full_calender.cljs:89:25 [lint/into-literal]

Use `vec` instead of recreating it.

```clojure
(into [] (filter (fn [event] (not= (:id event) event-id)) @data))
```

Consider using:

```clojure
(vec (filter (fn [event] (not= (:id event) event-id)) @data))
```

----

#### src/bh_ui/atom/experimental/full_calender.cljs:208:38 [style/new-object]

dot creation is preferred.

```clojure
(new
 Draggable
 event-container
 (clj->js
  {:itemSelector ".external-event",
   :eventData
   (fn
    [eventEl]
    {:title (.-innerText eventEl),
     :id (str "auto-generated-id-" (swap! auto-id inc))})}))
```

Consider using:

```clojure
(Draggable.
 event-container
 (clj->js
  {:itemSelector ".external-event",
   :eventData
   (fn
    [eventEl]
    {:title (.-innerText eventEl),
     :id (str "auto-generated-id-" (swap! auto-id inc))})}))
```

----

#### src/bh_ui/atom/experimental/full_calender.cljs:68:25 [lint/into-literal]

Use `vec` instead of recreating it.

```clojure
(into [] (filter (fn [event] (not= (:id event) event-id)) @data))
```

Consider using:

```clojure
(vec (filter (fn [event] (not= (:id event) event-id)) @data))
```

----

#### src/bh_ui/atom/experimental/popover.cljs:60:26 [style/not-eq]

Use `not=` instead of recreating it.

```clojure
(not (= "light-border" (:theme @cfg)))
```

Consider using:

```clojure
(not= "light-border" (:theme @cfg))
```

----

#### src/bh_ui/atom/experimental/popover.cljs:58:29 [style/not-eq]

Use `not=` instead of recreating it.

```clojure
(not (= nil (:theme @cfg)))
```

Consider using:

```clojure
(not= nil (:theme @cfg))
```

----

#### src/bh_ui/atom/experimental/popover.cljs:58:34 [style/eq-nil]

Use `nil?` instead of recreating it.

```clojure
(= nil (:theme @cfg))
```

Consider using:

```clojure
(nil? (:theme @cfg))
```

----

#### src/bh_ui/atom/experimental/popover.cljs:59:26 [style/not-eq]

Use `not=` instead of recreating it.

```clojure
(not (= "light" (:theme @cfg)))
```

Consider using:

```clojure
(not= "light" (:theme @cfg))
```

----

#### src/bh_ui/atom/experimental/react_table.cljs:294:29 [style/eq-false]

Use `false?` instead of recreating it.

```clojure
(= (:disableSortBy m) false)
```

Consider using:

```clojure
(false? (:disableSortBy m))
```

----

#### src/bh_ui/atom/experimental/react_table.cljs:205:71 [lint/into-literal]

Use `vec` instead of recreating it.

```clojure
(into
 []
 (map (clojure.core/fn [%1] (assoc %1 colId value)) (:subRows m)))
```

Consider using:

```clojure
(vec (map (clojure.core/fn [%1] (assoc %1 colId value)) (:subRows m)))
```

----

#### src/bh_ui/atom/experimental/react_table.cljs:322:30 [lint/into-literal]

Use `vec` instead of recreating it.

```clojure
(into [] (filter (fn [row] (= val (group-by-key row))) d))
```

Consider using:

```clojure
(vec (filter (fn [row] (= val (group-by-key row))) d))
```

----

#### src/bh_ui/atom/experimental/react_table.cljs:471:3 [style/prefer-boolean]

Use `boolean` if you must return `true` or `false`.

```clojure
(if (and (not (seq @cfg)) (:metadata @data)) true false)
```

Consider using:

```clojure
(boolean (and (not (seq @cfg)) (:metadata @data)))
```

----

#### src/bh_ui/atom/experimental/react_table.cljs:150:22 [lint/if-else-nil]

Use `when` which doesn't require specifying the else branch.

```clojure
(if
 (.-canSort col)
 [:span
  (let
   [up-arrow
    (:sort-up-arrow-icon @config)
    down-arrow
    (:sort-down-arrow-icon @config)
    neutral-arrow
    (:sort-not-selected-icon @config)]
   (if
    (.-isSorted col)
    (if (.-isSortedDesc col) (str " " down-arrow) (str " " up-arrow))
    (str " " neutral-arrow)))])
```

Consider using:

```clojure
(when
 (.-canSort col)
 [:span
  (let
   [up-arrow
    (:sort-up-arrow-icon @config)
    down-arrow
    (:sort-down-arrow-icon @config)
    neutral-arrow
    (:sort-not-selected-icon @config)]
   (if
    (.-isSorted col)
    (if (.-isSortedDesc col) (str " " down-arrow) (str " " up-arrow))
    (str " " neutral-arrow)))])
```

----

#### src/bh_ui/atom/experimental/react_table.cljs:275:3 [lint/into-literal]

Use `vec` instead of recreating it.

```clojure
(into
 []
 (map
  (fn
   [m]
   {:Header
    (cond
     (= (:colProp m) :select-all)
     (r/as-element
      [:button
       {:onClick
        (fn
         [e]
         (toggle
          true
          (:colSelect m)
          orig-data
          data
          react-data
          config))}
       (str (:colHeader m))])
     (= (:colProp m) :select-none)
     (r/as-element
      [:button
       {:onClick
        (fn
         [e]
         (toggle
          false
          (:colSelect m)
          orig-data
          data
          react-data
          config))}
       (str (:colHeader m))])
     :else
     (:colHeader m)),
    :accessor (:colId m),
    :sortType (or (:sortType m) "alphanumeric"),
    :disableSortBy (if (= (:disableSortBy m) false) false true),
    :mainRowCell
    (fn
     [cellProps]
     (let
      [value
       (.-value cellProps)
       index
       (js/parseInt (.-id (.-row cellProps)))
       subRowIndex
       nil
       colId
       (.-id (.-column (.-cell cellProps)))]
      (if
       (contains? m :render)
       (r/as-element
        [((:render m) @cell-mapping)
         value
         (:params m)
         update-val
         orig-data
         index
         subRowIndex
         colId
         data
         (r/atom (or (:data @data) @data))
         config])
       (str value))))})
  (:columns @config)))
```

Consider using:

```clojure
(vec
 (map
  (fn
   [m]
   {:Header
    (cond
     (= (:colProp m) :select-all)
     (r/as-element
      [:button
       {:onClick
        (fn
         [e]
         (toggle
          true
          (:colSelect m)
          orig-data
          data
          react-data
          config))}
       (str (:colHeader m))])
     (= (:colProp m) :select-none)
     (r/as-element
      [:button
       {:onClick
        (fn
         [e]
         (toggle
          false
          (:colSelect m)
          orig-data
          data
          react-data
          config))}
       (str (:colHeader m))])
     :else
     (:colHeader m)),
    :accessor (:colId m),
    :sortType (or (:sortType m) "alphanumeric"),
    :disableSortBy (if (= (:disableSortBy m) false) false true),
    :mainRowCell
    (fn
     [cellProps]
     (let
      [value
       (.-value cellProps)
       index
       (js/parseInt (.-id (.-row cellProps)))
       subRowIndex
       nil
       colId
       (.-id (.-column (.-cell cellProps)))]
      (if
       (contains? m :render)
       (r/as-element
        [((:render m) @cell-mapping)
         value
         (:params m)
         update-val
         orig-data
         index
         subRowIndex
         colId
         data
         (r/atom (or (:data @data) @data))
         config])
       (str value))))})
  (:columns @config)))
```

----

#### src/bh_ui/atom/experimental/react_table.cljs:201:45 [lint/into-literal]

Use `vec` instead of recreating it.

```clojure
(into
 []
 (map
  (clojure.core/fn [%1] (assoc %1 colId value))
  (or (:data @data) @data)))
```

Consider using:

```clojure
(vec
 (map
  (clojure.core/fn [%1] (assoc %1 colId value))
  (or (:data @data) @data)))
```

----

#### src/bh_ui/atom/experimental/react_table.cljs:202:47 [lint/into-literal]

Use `vec` instead of recreating it.

```clojure
(into
 []
 (map
  (fn
   [m]
   (assoc
    m
    :subRows
    (into
     []
     (map
      (clojure.core/fn [%1] (assoc %1 colId value))
      (:subRows m)))))
  @react-data))
```

Consider using:

```clojure
(vec
 (map
  (fn
   [m]
   (assoc
    m
    :subRows
    (into
     []
     (map
      (clojure.core/fn [%1] (assoc %1 colId value))
      (:subRows m)))))
  @react-data))
```

----

#### src/bh_ui/atom/experimental/react_table.cljs:239:36 [style/eq-false]

Use `false?` instead of recreating it.

```clojure
(= (:disableSortBy m) false)
```

Consider using:

```clojure
(false? (:disableSortBy m))
```

----

#### src/bh_ui/atom/experimental/react_table.cljs:225:3 [lint/into-literal]

Use `vec` instead of recreating it.

```clojure
(into
 []
 (map
  (fn
   [m]
   {:Header
    (cond
     (= (:colProp m) :select-all)
     (r/as-element
      [:button
       {:onClick
        (fn
         [e]
         (toggle
          true
          (:colSelect m)
          orig-data
          data
          react-data
          config))}
       (str (:colHeader m))])
     (= (:colProp m) :select-none)
     (r/as-element
      [:button
       {:onClick
        (fn
         [e]
         (toggle
          false
          (:colSelect m)
          orig-data
          data
          react-data
          config))}
       (str (:colHeader m))])
     :else
     (:colHeader m)),
    :accessor (:colId m),
    :sortType (or (:sortType m) "alphanumeric"),
    :disableSortBy (if (= (:disableSortBy m) false) false true),
    :subRowCell
    (if
     (or
      (= (:colProp m) :expandable)
      (= (:group-by @config) (:colId m)))
     (fn [] nil)
     (fn
      [cellProps]
      (let
       [value
        (.-value cellProps)
        index
        (js/parseInt (.-id (.-row cellProps)))
        subRowIndex
        (.-index (.-row cellProps))
        colId
        (keyword (.-id (.-column (.-cell cellProps))))]
       (if
        (contains? m :render)
        (r/as-element
         [((:render m) @cell-mapping)
          value
          (:params m)
          update-val
          orig-data
          index
          subRowIndex
          colId
          data
          react-data
          config])
        (str value))))),
    :mainRowCell
    (if
     (or
      (= (:colProp m) :expandable)
      (= (:group-by @config) (:colId m)))
     (if
      (= (:colProp m) :expandable)
      (fn
       [cellProps]
       (let
        [row (.-row cellProps)]
        (r/as-element
         [:r>
          "span"
          (.getToggleRowExpandedProps row)
          (if
           (.-isExpanded row)
           (or (:fold-row-icon @style) "👇")
           (or (:expand-row-icon @style) "👉"))])))
      (fn
       [cellProps]
       (let
        [value
         (.-value cellProps)
         index
         (js/parseInt (.-id (.-row cellProps)))
         subRowIndex
         nil
         colId
         (.-id (.-column (.-cell cellProps)))]
        (if
         (contains? m :render)
         (r/as-element
          [((:render m) @cell-mapping)
           value
           (:params m)
           update-val
           orig-data
           index
           subRowIndex
           colId
           data
           react-data
           config])
         (str value)))))
     (fn [] nil))})
  (:columns @config)))
```

Consider using:

```clojure
(vec
 (map
  (fn
   [m]
   {:Header
    (cond
     (= (:colProp m) :select-all)
     (r/as-element
      [:button
       {:onClick
        (fn
         [e]
         (toggle
          true
          (:colSelect m)
          orig-data
          data
          react-data
          config))}
       (str (:colHeader m))])
     (= (:colProp m) :select-none)
     (r/as-element
      [:button
       {:onClick
        (fn
         [e]
         (toggle
          false
          (:colSelect m)
          orig-data
          data
          react-data
          config))}
       (str (:colHeader m))])
     :else
     (:colHeader m)),
    :accessor (:colId m),
    :sortType (or (:sortType m) "alphanumeric"),
    :disableSortBy (if (= (:disableSortBy m) false) false true),
    :subRowCell
    (if
     (or
      (= (:colProp m) :expandable)
      (= (:group-by @config) (:colId m)))
     (fn [] nil)
     (fn
      [cellProps]
      (let
       [value
        (.-value cellProps)
        index
        (js/parseInt (.-id (.-row cellProps)))
        subRowIndex
        (.-index (.-row cellProps))
        colId
        (keyword (.-id (.-column (.-cell cellProps))))]
       (if
        (contains? m :render)
        (r/as-element
         [((:render m) @cell-mapping)
          value
          (:params m)
          update-val
          orig-data
          index
          subRowIndex
          colId
          data
          react-data
          config])
        (str value))))),
    :mainRowCell
    (if
     (or
      (= (:colProp m) :expandable)
      (= (:group-by @config) (:colId m)))
     (if
      (= (:colProp m) :expandable)
      (fn
       [cellProps]
       (let
        [row (.-row cellProps)]
        (r/as-element
         [:r>
          "span"
          (.getToggleRowExpandedProps row)
          (if
           (.-isExpanded row)
           (or (:fold-row-icon @style) "👇")
           (or (:expand-row-icon @style) "👉"))])))
      (fn
       [cellProps]
       (let
        [value
         (.-value cellProps)
         index
         (js/parseInt (.-id (.-row cellProps)))
         subRowIndex
         nil
         colId
         (.-id (.-column (.-cell cellProps)))]
        (if
         (contains? m :render)
         (r/as-element
          [((:render m) @cell-mapping)
           value
           (:params m)
           update-val
           orig-data
           index
           subRowIndex
           colId
           data
           react-data
           config])
         (str value)))))
     (fn [] nil))})
  (:columns @config)))
```

----

#### src/bh_ui/atom/experimental/react_table.cljs:181:25 [lint/not-empty?]

`seq` is idiomatic, gotta learn to love it.

```clojure
(not (empty? orig-data))
```

Consider using:

```clojure
(seq orig-data)
```

----

#### src/bh_ui/atom/experimental/react_table.cljs:186:25 [lint/into-literal]

Use `vec` instead of recreating it.

```clojure
(into [] (mapcat (clojure.core/fn [%1] (get %1 :subRows)) @react-data))
```

Consider using:

```clojure
(vec (mapcat (clojure.core/fn [%1] (get %1 :subRows)) @react-data))
```

----

#### src/bh_ui/atom/experimental/react_table.cljs:99:27 [style/useless-do]

Unnecessary `do`.

```clojure
(do (reset! is-editing true))
```

Consider using:

```clojure
(reset! is-editing true)
```

----

#### src/bh_ui/atom/experimental/react_table.cljs:97:27 [style/useless-do]

Unnecessary `do`.

```clojure
(do (reset! is-editing false))
```

Consider using:

```clojure
(reset! is-editing false)
```

----

#### src/bh_ui/atom/experimental/tab_set.cljs:22:3 [lint/let-when]

Use `when-let` instead of recreating it.

```clojure
(let [vis (= @selected-tab label)] (when vis [:div child]))
```

Consider using:

```clojure
(when-let [vis (= @selected-tab label)] [:div child])
```

----

#### src/bh_ui/atom/fast_chart/canvas_js_chart.cljs:19:3 [style/prefer-condp]

Prefer condp when predicate and arguments are the same

```clojure
(cond
 (spec/valid? :tabular-data/meta-data d)
 (xform/meta-tabular->x-y d)
 (spec/valid? :tabular-data/data d)
 (xform/tabular->x-y d (-> d first first first))
 :else
 d)
```

Consider using:

```clojure
(condp
 spec/valid?
 d
 :tabular-data/meta-data
 (xform/meta-tabular->x-y d)
 :tabular-data/data
 (xform/tabular->x-y d (-> d first first first))
 d)
```

----

#### src/bh_ui/atom/layout/responsive_grid.cljs:9:1 [naming/lisp-case]

Prefer kebab-case over other cases for top-level definitions.

```clojure
(def ResponsiveGridLayout (WidthProvider. Responsive))
```

Consider using:

```clojure
(def responsive-grid-layout (WidthProvider. Responsive))
```

----

#### src/bh_ui/atom/oz/bar_chart.cljs:24:3 [lint/thread-macro-one-arg]

Intention of `->` is clearer with inlined form.

```clojure
(->
 ui-utils/default-pub-sub
 (merge
  utils/default-config
  {:type "oz-line-chart"}
  (ui-utils/config-tab-panel component-id)))
```

Consider using:

```clojure
(merge
 ui-utils/default-pub-sub
 utils/default-config
 {:type "oz-line-chart"}
 (ui-utils/config-tab-panel component-id))
```

----

#### src/bh_ui/atom/oz/line_chart.cljs:25:3 [lint/thread-macro-one-arg]

Intention of `->` is clearer with inlined form.

```clojure
(->
 ui-utils/default-pub-sub
 (merge
  utils/default-config
  {:type "oz-line-chart"}
  (ui-utils/config-tab-panel component-id)))
```

Consider using:

```clojure
(merge
 ui-utils/default-pub-sub
 utils/default-config
 {:type "oz-line-chart"}
 (ui-utils/config-tab-panel component-id))
```

----

#### src/bh_ui/atom/re_com/configure_toggle.cljs:6:1 [style/multiple-arity-order]

defn arities should be sorted fewest to most arguments.

```clojure
(defn
 configure-toggle
 "display a button that shows the 'settings' icon whn the user can clck\n  to start editing/configuring things, and the 'floppy' icon when the user can save those changes\n\n  ---\n\n  - show? : (atom) should the button show the 'save' icon (true) or the 'settings' icon (false)\n  - fn-to-apply : (fn) any function to call in addition to flipping the 'show?' atom back and forth\n  "
 ([show? fn-to-apply]
  (let
   [make-editable-style
    {:md-icon-name "zmdi-settings", :tooltip "Configure this chart"}
    save-editable-style
    {:md-icon-name "zmdi-floppy", :tooltip "Save the configuration"}]
   (reduce
    conj
    [rc/md-icon-button]
    (flatten
     (seq
      (merge
       {:class "button",
        :on-click
        (clojure.core/fn
         []
         (do (swap! show? not) (when fn-to-apply (fn-to-apply))))}
       (if @show? save-editable-style make-editable-style)))))))
 ([show?] (configure-toggle show? nil)))
```

Consider using:

```clojure
(defn
 configure-toggle
 ([show?] (configure-toggle show? nil))
 ([show? fn-to-apply]
  (let
   [make-editable-style
    {:md-icon-name "zmdi-settings", :tooltip "Configure this chart"}
    save-editable-style
    {:md-icon-name "zmdi-floppy", :tooltip "Save the configuration"}]
   (reduce
    conj
    [rc/md-icon-button]
    (flatten
     (seq
      (merge
       {:class "button",
        :on-click
        (clojure.core/fn
         []
         (do (swap! show? not) (when fn-to-apply (fn-to-apply))))}
       (if @show? save-editable-style make-editable-style))))))))
```

----

#### src/bh_ui/atom/re_com/editable_table.cljs:274:3 [lint/into-literal]

Use `vec` instead of recreating it.

```clojure
(into
 []
 (map
  (clojure.core/fn
   [%1]
   (apply merge (map (fn [[k v]] {k (str v)}) %1)))
  @dataset))
```

Consider using:

```clojure
(vec
 (map
  (clojure.core/fn
   [%1]
   (apply merge (map (fn [[k v]] {k (str v)}) %1)))
  @dataset))
```

----

#### src/bh_ui/atom/re_com/editable_table.cljs:22:21 [lint/into-literal]

Use `vec` instead of recreating it.

```clojure
(into [] (sort-by v @dataset))
```

Consider using:

```clojure
(vec (sort-by v @dataset))
```

----

#### src/bh_ui/atom/re_com/editable_table.cljs:219:46 [lint/if-same-truthy]

Use `or` instead of recreating it.

```clojure
(if (:data @d) (:data @d) [])
```

Consider using:

```clojure
(or (:data @d) [])
```

----

#### src/bh_ui/atom/re_com/editable_table.cljs:289:7 [lint/into-literal]

Use `vec` instead of recreating it.

```clojure
(into
 []
 (map
  (clojure.core/fn
   [%1]
   (vector
    box-with-border
    {:name (str %1), :background "#d860a0", :height 30, :width 500}))
  values))
```

Consider using:

```clojure
(vec
 (map
  (clojure.core/fn
   [%1]
   (vector
    box-with-border
    {:name (str %1), :background "#d860a0", :height 30, :width 500}))
  values))
```

----

#### src/bh_ui/atom/re_com/editable_table.cljs:111:16 [lint/into-literal]

Use `vec` instead of recreating it.

```clojure
(into [] (keys row))
```

Consider using:

```clojure
(vec (keys row))
```

----

#### src/bh_ui/atom/re_com/editable_table.cljs:74:11 [style/not-eq]

Use `not=` instead of recreating it.

```clojure
(not (= colidx -1))
```

Consider using:

```clojure
(not= colidx -1)
```

----

#### src/bh_ui/atom/re_com/editable_table.cljs:289:3 [lint/thread-macro-one-arg]

Intention of `->` is clearer with inlined form.

```clojure
(->
 (into
  []
  (map
   (clojure.core/fn
    [%1]
    (vector
     box-with-border
     {:name (str %1), :background "#d860a0", :height 30, :width 500}))
   values))
 (with-meta {:key (rand-int 30)}))
```

Consider using:

```clojure
(with-meta
 (into
  []
  (map
   (clojure.core/fn
    [%1]
    (vector
     box-with-border
     {:name (str %1), :background "#d860a0", :height 30, :width 500}))
   values))
 {:key (rand-int 30)})
```

----

#### src/bh_ui/atom/re_com/input_field.cljs:44:7 [lint/thread-macro-one-arg]

Intention of `->>` is clearer with inlined form.

```clojure
(->>
 (:data d)
 (filter
  (clojure.core/fn [%1] (re-find (re-pattern (str "(?i)" f)) (dk %1)))))
```

Consider using:

```clojure
(filter
 (clojure.core/fn [%1] (re-find (re-pattern (str "(?i)" f)) (dk %1)))
 (:data d))
```

----

#### src/bh_ui/atom/re_com/table.cljs:147:7 [lint/not-empty?]

`seq` is idiomatic, gotta learn to love it.

```clojure
(not (empty? value))
```

Consider using:

```clojure
(seq value)
```

----

#### src/bh_ui/atom/re_com/table.cljs:76:44 [lint/if-same-truthy]

Use `or` instead of recreating it.

```clojure
(if (:data @d) (:data @d) [])
```

Consider using:

```clojure
(or (:data @d) [])
```

----

#### src/bh_ui/atom/re_com/table.cljs:141:5 [lint/not-empty?]

`seq` is idiomatic, gotta learn to love it.

```clojure
(not (empty? value))
```

Consider using:

```clojure
(seq value)
```

----

#### src/bh_ui/atom/re_com/table.cljs:96:64 [lint/if-same-truthy]

Use `or` instead of recreating it.

```clojure
(if (:c-o-c @d) (:c-o-c @d) [])
```

Consider using:

```clojure
(or (:c-o-c @d) [])
```

----

#### src/bh_ui/atom/re_com/tabs.cljs:87:3 [lint/thread-macro-one-arg]

Intention of `->>` is clearer with inlined form.

```clojure
(->> pages (filter (clojure.core/fn [%1] (= (:id %1) @selected-tab))))
```

Consider using:

```clojure
(filter (clojure.core/fn [%1] (= (:id %1) @selected-tab)) pages)
```

----

#### src/bh_ui/atom/re_com/tabs.cljs:31:3 [lint/let-when]

Use `when-let` instead of recreating it.

```clojure
(let [vis (= @selected-tab label)] (when vis [:div child]))
```

Consider using:

```clojure
(when-let [vis (= @selected-tab label)] [:div child])
```

----

#### src/bh_ui/atom/resium/globe.cljs:143:3 [lint/thread-macro-one-arg]

Intention of `->>` is clearer with inlined form.

```clojure
(->> sample-data (remove (clojure.core/fn [%1] (:layer-id %1))))
```

Consider using:

```clojure
(remove (clojure.core/fn [%1] (:layer-id %1)) sample-data)
```

----

#### src/bh_ui/atom/resium/globe.cljs:144:13 [lint/fn-wrapper]

No need to wrap function. Clojure supports first-class functions.

```clojure
(clojure.core/fn [%1] (:layer-id %1))
```

Consider using:

```clojure
:layer-id
```

----

#### src/bh_ui/atom/resium/globe.cljs:140:13 [lint/fn-wrapper]

No need to wrap function. Clojure supports first-class functions.

```clojure
(clojure.core/fn [%1] (:layer-id %1))
```

Consider using:

```clojure
:layer-id
```

----

#### src/bh_ui/atom/resium/globe.cljs:100:26 [lint/thread-macro-one-arg]

Intention of `->>` is clearer with inlined form.

```clojure
(->> data (remove (clojure.core/fn [%1] (:layer-id %1))))
```

Consider using:

```clojure
(remove (clojure.core/fn [%1] (:layer-id %1)) data)
```

----

#### src/bh_ui/atom/resium/globe.cljs:137:8 [lint/fn-wrapper]

No need to wrap function. Clojure supports first-class functions.

```clojure
(clojure.core/fn [%1] (:layer-id %1))
```

Consider using:

```clojure
:layer-id
```

----

#### src/bh_ui/atom/resium/globe.cljs:98:36 [lint/fn-wrapper]

No need to wrap function. Clojure supports first-class functions.

```clojure
(clojure.core/fn [%1] (:layer-id %1))
```

Consider using:

```clojure
:layer-id
```

----

#### src/bh_ui/atom/resium/globe.cljs:102:5 [lint/into-literal]

Use `vec` instead of recreating it.

```clojure
(into [] (apply conj layer-shapes non-layer-shapes))
```

Consider using:

```clojure
(vec (apply conj layer-shapes non-layer-shapes))
```

----

#### src/bh_ui/atom/resium/globe.cljs:101:36 [lint/fn-wrapper]

No need to wrap function. Clojure supports first-class functions.

```clojure
(clojure.core/fn [%1] (:layer-id %1))
```

Consider using:

```clojure
:layer-id
```

----

#### src/bh_ui/atom/resium/shape.cljs:97:62 [style/prefer-boolean]

Use `boolean` if you must return `true` or `false`.

```clojure
(if outline true false)
```

Consider using:

```clojure
(boolean outline)
```

----

#### src/bh_ui/atom/worldwind/globe.cljs:29:1 [naming/lisp-case]

Prefer kebab-case over other cases for top-level definitions.

```clojure
(def DEFAULT_BACKGROUND_COLOR "rgb(36,74,101)")
```

Consider using:

```clojure
(def default-background-color "rgb(36,74,101)")
```

----

#### src/bh_ui/atom/worldwind/globe/color.cljs:44:1 [style/multiple-arity-order]

defn arities should be sorted fewest to most arguments.

```clojure
(defn
 color
 ([r g b a] (WorldWind/Color. r g b a))
 ([[r g b a]] (WorldWind/Color. r g b a)))
```

Consider using:

```clojure
(defn
 color
 ([[r g b a]] (WorldWind/Color. r g b a))
 ([r g b a] (WorldWind/Color. r g b a)))
```

----

#### src/bh_ui/atom/worldwind/globe/geo_tiff.cljs:11:1 [naming/lisp-case]

Prefer kebab-case over other cases for top-level definitions.

```clojure
(def last-xhrStatus (atom nil))
```

Consider using:

```clojure
(def last-xhr-status (atom nil))
```

----

#### src/bh_ui/atom/worldwind/globe/geo_tiff.cljs:64:5 [style/new-object]

dot creation is preferred.

```clojure
(new (.-ImageSource WorldWind) (.getImage @last-geoTiffReader))
```

Consider using:

```clojure
((.-ImageSource WorldWind). (.getImage @last-geoTiffReader))
```

----

#### src/bh_ui/atom/worldwind/globe/geo_tiff.cljs:29:17 [style/new-object]

dot creation is preferred.

```clojure
(new (.-ImageSource WorldWind) (.getImage geoTiffReader))
```

Consider using:

```clojure
((.-ImageSource WorldWind). (.getImage geoTiffReader))
```

----

#### src/bh_ui/atom/worldwind/globe/geo_tiff.cljs:10:1 [naming/lisp-case]

Prefer kebab-case over other cases for top-level definitions.

```clojure
(def last-geoTiffReader (atom nil))
```

Consider using:

```clojure
(def last-geo-tiff-reader (atom nil))
```

----

#### src/bh_ui/atom/worldwind/globe/geo_tiff.cljs:67:3 [style/new-object]

dot creation is preferred.

```clojure
(new (.-ImageSource WorldWind) (.getImage @last-geoTiffReader))
```

Consider using:

```clojure
((.-ImageSource WorldWind). (.getImage @last-geoTiffReader))
```

----

#### src/bh_ui/atom/worldwind/globe/geo_tiff.cljs:25:15 [style/new-object]

dot creation is preferred.

```clojure
(new
 (.-SurfaceImage WorldWind)
 (.. geoTiffReader -metadata -bbox)
 (new (.-ImageSource WorldWind) (.getImage geoTiffReader)))
```

Consider using:

```clojure
((.-SurfaceImage WorldWind).
 (.. geoTiffReader -metadata -bbox)
 (new (.-ImageSource WorldWind) (.getImage geoTiffReader)))
```

----

#### src/bh_ui/atom/worldwind/globe/layer.cljs:28:1 [naming/lisp-case]

Prefer kebab-case over other cases for top-level definitions.

```clojure
(defn
 addLayer
 [this idx layer]
 (.insertLayer (.-wwd this) idx layer)
 (.redraw (.-wwd this))
 layer)
```

Consider using:

```clojure
(defn
 add-layer
 [this idx layer]
 (.insertLayer (.-wwd this) idx layer)
 (.redraw (.-wwd this))
 layer)
```

----

#### src/bh_ui/atom/worldwind/globe/layer.cljs:37:1 [naming/lisp-case]

Prefer kebab-case over other cases for top-level definitions.

```clojure
(defn
 removeLayer
 [this layer-name]
 (if-let
  [layer (getLayer this layer-name)]
  (do (.removeLayer (.-wwd this) layer) (.redraw (.-wwd this)))))
```

Consider using:

```clojure
(defn
 remove-layer
 [this layer-name]
 (if-let
  [layer (getLayer this layer-name)]
  (do (.removeLayer (.-wwd this) layer) (.redraw (.-wwd this)))))
```

----

#### src/bh_ui/atom/worldwind/globe/layer.cljs:19:1 [naming/lisp-case]

Prefer kebab-case over other cases for top-level definitions.

```clojure
(defn
 getLayer
 [this layer-name]
 (let
  [layer
   (.filter
    (.. this -wwd -layers)
    (clojure.core/fn [%1] (= (.-displayName %1) layer-name)))]
  (first layer)))
```

Consider using:

```clojure
(defn
 get-layer
 [this layer-name]
 (let
  [layer
   (.filter
    (.. this -wwd -layers)
    (clojure.core/fn [%1] (= (.-displayName %1) layer-name)))]
  (first layer)))
```

----

#### src/bh_ui/atom/worldwind/globe/location.cljs:13:1 [style/multiple-arity-order]

defn arities should be sorted fewest to most arguments.

```clojure
(defn
 position
 ([[lat lon & alt]] (WorldWind/Position. lat lon (or (first alt) 100)))
 ([lat lon alt] (WorldWind/Position. lat lon alt))
 ([lat lon] (WorldWind/Position. lat lon 100)))
```

Consider using:

```clojure
(defn
 position
 ([[lat lon & alt]] (WorldWind/Position. lat lon (or (first alt) 100)))
 ([lat lon] (WorldWind/Position. lat lon 100))
 ([lat lon alt] (WorldWind/Position. lat lon alt)))
```

----

#### src/bh_ui/atom/worldwind/globe/models.cljs:57:5 [lint/if-same-truthy]

Use `or` instead of recreating it.

```clojure
(if @model @model label)
```

Consider using:

```clojure
(or @model label)
```

----

#### src/bh_ui/atom/worldwind/globe/projection.cljs:37:7 [lint/if-else-nil]

Use `when` which doesn't require specifying the else branch.

```clojure
(if
 (not (.-flatGlobe this))
 (set! (.-flatGlobe this) (WorldWind/Globe2D.)))
```

Consider using:

```clojure
(when
 (not (.-flatGlobe this))
 (set! (.-flatGlobe this) (WorldWind/Globe2D.)))
```

----

#### src/bh_ui/atom/worldwind/globe/projection.cljs:28:7 [lint/if-else-nil]

Use `when` which doesn't require specifying the else branch.

```clojure
(if
 (not= (.. this -wwd -globe) (.-roundGlobe this))
 (do
  (set! (.. this -wwd -globe) (.-roundGlobe this))
  (.redraw (.-wwd this))))
```

Consider using:

```clojure
(when
 (not= (.. this -wwd -globe) (.-roundGlobe this))
 (set! (.. this -wwd -globe) (.-roundGlobe this))
 (.redraw (.-wwd this)))
```

----

#### src/bh_ui/atom/worldwind/globe/projection.cljs:24:7 [lint/if-else-nil]

Use `when` which doesn't require specifying the else branch.

```clojure
(if
 (not (.-roundGlobe this))
 (set!
  (.-roundGlobe this)
  (WorldWind/Globe. (WorldWind/EarthElevationModel.))))
```

Consider using:

```clojure
(when
 (not (.-roundGlobe this))
 (set!
  (.-roundGlobe this)
  (WorldWind/Globe. (WorldWind/EarthElevationModel.))))
```

----

#### src/bh_ui/atom/worldwind/globe/projection.cljs:51:7 [lint/if-else-nil]

Use `when` which doesn't require specifying the else branch.

```clojure
(if
 (not= (.. this -wwd -globe) (.-flatGlobe this))
 (do
  (set! (.. this -wwd -globe) (.-flatGlobe this))
  (.redraw (.-wwd this))))
```

Consider using:

```clojure
(when
 (not= (.. this -wwd -globe) (.-flatGlobe this))
 (set! (.. this -wwd -globe) (.-flatGlobe this))
 (.redraw (.-wwd this)))
```

----

#### src/bh_ui/atom/worldwind/globe/react_support.cljs:28:5 [lint/if-else-nil]

Use `when` which doesn't require specifying the else branch.

```clojure
(if
 removed
 (do
  (doall (map (clojure.core/fn [%1] (l/removeLayer this %1)) removed))
  (.redraw (.-wwd this))))
```

Consider using:

```clojure
(when
 removed
 (doall (map (clojure.core/fn [%1] (l/removeLayer this %1)) removed))
 (.redraw (.-wwd this)))
```

----

#### src/bh_ui/atom/worldwind/globe/react_support.cljs:106:5 [lint/if-else-nil]

Use `when` which doesn't require specifying the else branch.

```clojure
(if
 (not= (:projection old-props) (:projection new-props))
 (proj/change-projection this (:projection new-props)))
```

Consider using:

```clojure
(when
 (not= (:projection old-props) (:projection new-props))
 (proj/change-projection this (:projection new-props)))
```

----

#### src/bh_ui/atom/worldwind/globe/react_support.cljs:110:7 [style/useless-do]

Unnecessary `do`.

```clojure
(do (gt/change-time this (:id @state) (:time new-props)))
```

Consider using:

```clojure
(gt/change-time this (:id @state) (:time new-props))
```

----

#### src/bh_ui/atom/worldwind/globe/react_support.cljs:35:5 [lint/if-else-nil]

Use `when` which doesn't require specifying the else branch.

```clojure
(if
 added
 (do
  (doall
   (for
    [{:keys [id layer z]}
     (map
      (clojure.core/fn [%1] (find-in-children new-children %1))
      added)]
    (do (l/addLayer this z layer))))
  (.redraw (.-wwd this))))
```

Consider using:

```clojure
(when
 added
 (doall
  (for
   [{:keys [id layer z]}
    (map
     (clojure.core/fn [%1] (find-in-children new-children %1))
     added)]
   (do (l/addLayer this z layer))))
 (.redraw (.-wwd this)))
```

----

#### src/bh_ui/atom/worldwind/globe/react_support.cljs:79:5 [lint/if-else-nil]

Use `when` which doesn't require specifying the else branch.

```clojure
(if
 (= :max (:min-max props))
 (l/addLayer
  this
  -1
  (coords/coordinates this (str canvasId " Coordinates"))))
```

Consider using:

```clojure
(when
 (= :max (:min-max props))
 (l/addLayer
  this
  -1
  (coords/coordinates this (str canvasId " Coordinates"))))
```

----

#### src/bh_ui/atom/worldwind/globe/react_support.cljs:82:5 [lint/if-else-nil]

Use `when` which doesn't require specifying the else branch.

```clojure
(if (:time props) (do (gt/change-time this (:id @state) (:time props))))
```

Consider using:

```clojure
(when (:time props) (gt/change-time this (:id @state) (:time props)))
```

----

#### src/bh_ui/atom/worldwind/globe/react_support.cljs:63:5 [lint/if-else-nil]

Use `when` which doesn't require specifying the else branch.

```clojure
(if
 (:projection props)
 (do (proj/change-projection this (:projection props))))
```

Consider using:

```clojure
(when
 (:projection props)
 (proj/change-projection this (:projection props)))
```

----

#### src/bh_ui/atom/worldwind/globe/react_support.cljs:70:9 [style/useless-do]

Unnecessary `do`.

```clojure
(do (l/addLayer this z layer))
```

Consider using:

```clojure
(l/addLayer this z layer)
```

----

#### src/bh_ui/atom/worldwind/globe/react_support.cljs:75:5 [lint/if-else-nil]

Use `when` which doesn't require specifying the else branch.

```clojure
(if
 (= :max (:min-max props))
 (l/addLayer
  this
  -1
  (controls/controls this (str canvasId " Controls"))))
```

Consider using:

```clojure
(when
 (= :max (:min-max props))
 (l/addLayer
  this
  -1
  (controls/controls this (str canvasId " Controls"))))
```

----

#### src/bh_ui/atom/worldwind/globe/react_support.cljs:64:7 [style/useless-do]

Unnecessary `do`.

```clojure
(do (proj/change-projection this (:projection props)))
```

Consider using:

```clojure
(proj/change-projection this (:projection props))
```

----

#### src/bh_ui/atom/worldwind/globe/react_support.cljs:83:7 [style/useless-do]

Unnecessary `do`.

```clojure
(do (gt/change-time this (:id @state) (:time props)))
```

Consider using:

```clojure
(gt/change-time this (:id @state) (:time props))
```

----

#### src/bh_ui/atom/worldwind/globe/react_support.cljs:40:13 [style/useless-do]

Unnecessary `do`.

```clojure
(do (l/addLayer this z layer))
```

Consider using:

```clojure
(l/addLayer this z layer)
```

----

#### src/bh_ui/atom/worldwind/globe/react_support.cljs:109:5 [lint/if-else-nil]

Use `when` which doesn't require specifying the else branch.

```clojure
(if
 (not= (:time old-props) (:time new-props))
 (do (gt/change-time this (:id @state) (:time new-props))))
```

Consider using:

```clojure
(when
 (not= (:time old-props) (:time new-props))
 (gt/change-time this (:id @state) (:time new-props)))
```

----

#### src/bh_ui/atom/worldwind/globe/shape.cljs:155:3 [lint/dorun-map]

Use `run!`, a non-lazy function.

```clojure
(dorun (map (clojure.core/fn [%1] (.addRenderable layer %1)) shapes))
```

Consider using:

```clojure
(run! (clojure.core/fn [%1] (.addRenderable layer %1)) shapes)
```

----

#### src/bh_ui/atom/worldwind/globe/shape.cljs:16:5 [lint/dorun-map]

Use `run!`, a non-lazy function.

```clojure
(dorun (map (clojure.core/fn [%1] (.addRenderable layer %1)) shapes))
```

Consider using:

```clojure
(run! (clojure.core/fn [%1] (.addRenderable layer %1)) shapes)
```

----

#### src/bh_ui/atom/worldwind/globe/shape.cljs:174:5 [lint/dorun-map]

Use `run!`, a non-lazy function.

```clojure
(dorun (map (clojure.core/fn [%1] (.addRenderable layer %1)) shapes))
```

Consider using:

```clojure
(run! (clojure.core/fn [%1] (.addRenderable layer %1)) shapes)
```

----

#### src/bh_ui/atom/worldwind/globe/volume.cljs:23:24 [lint/into-literal]

Use `vec` instead of recreating it.

```clojure
(into [] (map location/position positions))
```

Consider using:

```clojure
(vec (map location/position positions))
```

----

#### src/bh_ui/atom/worldwind/globe/volume.cljs:57:14 [lint/into-literal]

Use `vec` instead of recreating it.

```clojure
(into [] (map location/position positions))
```

Consider using:

```clojure
(vec (map location/position positions))
```

----

#### src/bh_ui/core.cljs:564:1 [naming/lisp-case]

Prefer kebab-case over other cases for top-level definitions.

```clojure
(def component_validator component-validator/component-validator)
```

Consider using:

```clojure
(def component-validator component-validator/component-validator)
```

----

#### src/bh_ui/core.cljs:435:1 [naming/lisp-case]

Prefer kebab-case over other cases for top-level definitions.

```clojure
(def ww-getLayer layer/getLayer)
```

Consider using:

```clojure
(def ww-get-layer layer/getLayer)
```

----

#### src/bh_ui/core.cljs:436:1 [naming/lisp-case]

Prefer kebab-case over other cases for top-level definitions.

```clojure
(def ww-addLayer layer/addLayer)
```

Consider using:

```clojure
(def ww-add-layer layer/addLayer)
```

----

#### src/bh_ui/core.cljs:437:1 [naming/lisp-case]

Prefer kebab-case over other cases for top-level definitions.

```clojure
(def ww-removeLayer layer/removeLayer)
```

Consider using:

```clojure
(def ww-remove-layer layer/removeLayer)
```

----

#### src/bh_ui/events.cljs:28:7 [style/useless-do]

Unnecessary `do`.

```clojure
(do db)
```

Consider using:

```clojure
db
```

----

#### src/bh_ui/events.cljs:31:7 [style/useless-do]

Unnecessary `do`.

```clojure
(do (assoc db container init-vals))
```

Consider using:

```clojure
(assoc db container init-vals)
```

----

#### src/bh_ui/molecule/composite.cljs:802:3 [lint/thread-macro-one-arg]

Intention of `->>` is clearer with inlined form.

```clojure
(->> nodes (map (fn [node] {node (dig/get-inputs links graph node)})))
```

Consider using:

```clojure
(map (fn [node] {node (dig/get-inputs links graph node)}) nodes)
```

----

#### src/bh_ui/molecule/composite.cljs:284:30 [style/single-key-in]

Use `update` instead of recreating it.

```clojure
(update-in m [:mol/grid-layout] conj layout)
```

Consider using:

```clojure
(update m :mol/grid-layout conj layout)
```

----

#### src/bh_ui/molecule/composite.cljs:971:20 [lint/thread-macro-one-arg]

Intention of `->>` is clearer with inlined form.

```clojure
(->> links :ui/satellites)
```

Consider using:

```clojure
(:ui/satellites links)
```

----

#### src/bh_ui/molecule/composite.cljs:573:19 [style/when-do]

Unnecessary `do` in `when` body.

```clojure
(when
 @show?
 (do
  (log/info "if @show?" show?)
  (r/as-element
   [modal/modal
    [edit-dialog/edit-modal configuration form-data show?]
    show?])))
```

Consider using:

```clojure
(when
 @show?
 (log/info "if @show?" show?)
 (r/as-element
  [modal/modal
   [edit-dialog/edit-modal configuration form-data show?]
   show?]))
```

----

#### src/bh_ui/molecule/composite.cljs:767:3 [lint/thread-macro-one-arg]

Intention of `->>` is clearer with inlined form.

```clojure
(->> nodes (map (fn [node] {node (dig/get-outputs links node)})))
```

Consider using:

```clojure
(map (fn [node] {node (dig/get-outputs links node)}) nodes)
```

----

#### src/bh_ui/molecule/composite/coverage_plan.cljs:340:7 [lint/into-literal]

Use `vec` instead of recreating it.

```clojure
(into
 []
 (map
  (fn
   [satellite]
   (let
    [[r g b a] (get (:color satellite) 2)]
    {:platform (:platform_id satellite),
     :sensor
     {:color {:r r, :g g, :b b, :a a}, :name (:sensor_id satellite)},
     :include? (contains? s (:sensor_id satellite))}))
  t))
```

Consider using:

```clojure
(vec
 (map
  (fn
   [satellite]
   (let
    [[r g b a] (get (:color satellite) 2)]
    {:platform (:platform_id satellite),
     :sensor
     {:color {:r r, :g g, :b b, :a a}, :name (:sensor_id satellite)},
     :include? (contains? s (:sensor_id satellite))}))
  t))
```

----

#### src/bh_ui/molecule/composite/coverage_plan.cljs:374:7 [lint/into-literal]

Use `vec` instead of recreating it.

```clojure
(into
 []
 (map
  (fn
   [imagery]
   {:description (:name imagery),
    :include? (contains? s (:name imagery))})
  i))
```

Consider using:

```clojure
(vec
 (map
  (fn
   [imagery]
   {:description (:name imagery),
    :include? (contains? s (:name imagery))})
  i))
```

----

#### src/bh_ui/molecule/composite/coverage_plan.cljs:324:17 [lint/into-literal]

Use `vec` instead of recreating it.

```clojure
(into
 []
 (map
  (fn
   [target]
   {:aoi (:name target),
    :symbol {:color (last (:color target)), :name (:name target)},
    :include? (contains? s (:name target))})
  t))
```

Consider using:

```clojure
(vec
 (map
  (fn
   [target]
   {:aoi (:name target),
    :symbol {:color (last (:color target)), :name (:name target)},
    :include? (contains? s (:name target))})
  t))
```

----

#### src/bh_ui/molecule/composite/coverage_plan.cljs:313:7 [lint/thread-macro-one-arg]

Intention of `->>` is clearer with inlined form.

```clojure
(->>
 t
 (filter
  (clojure.core/fn
   [%1]
   (re-find (re-pattern (str "(?i)" f)) (:name %1)))))
```

Consider using:

```clojure
(filter
 (clojure.core/fn
  [%1]
  (re-find (re-pattern (str "(?i)" f)) (:name %1)))
 t)
```

----

#### src/bh_ui/molecule/composite/coverage_plan.cljs:363:17 [lint/into-literal]

Use `vec` instead of recreating it.

```clojure
(into [] (concat [] (:data g) (:data m-1)))
```

Consider using:

```clojure
(vec (concat [] (:data g) (:data m-1)))
```

----

#### src/bh_ui/molecule/composite/coverage_plan/support.cljs:215:13 [lint/thread-macro-one-arg]

Intention of `->>` is clearer with inlined form.

```clojure
(->> imagery (filter (fn [m] (contains? selected-imagery (:name m)))))
```

Consider using:

```clojure
(filter (fn [m] (contains? selected-imagery (:name m))) imagery)
```

----

#### src/bh_ui/molecule/composite/multi_chart.cljs:89:65 [style/eq-zero]

Use `zero?` instead of recreating it.

```clojure
(= 0 idx)
```

Consider using:

```clojure
(zero? idx)
```

----

#### src/bh_ui/molecule/composite/util/signals.cljs:325:48 [lint/into-literal]

Use `vec` instead of recreating it.

```clojure
(into [] (map (fn [c] (:component (get @atm-set c))) children))
```

Consider using:

```clojure
(vec (map (fn [c] (:component (get @atm-set c))) children))
```

----

#### src/bh_ui/molecule/composite/util/signals.cljs:296:35 [style/useless-do]

Unnecessary `do`.

```clojure
(do
 (into
  [(or bh-ui error-ui)
   (merge
    (or styl {:style {:height "100%", :width "100%"}})
    (or def-config {}))]
  (:component ((fn [c] (get @atm-set c)) child))))
```

Consider using:

```clojure
(into
 [(or bh-ui error-ui)
  (merge
   (or styl {:style {:height "100%", :width "100%"}})
   (or def-config {}))]
 (:component ((fn [c] (get @atm-set c)) child)))
```

----

#### src/bh_ui/molecule/composite/util/signals.cljs:252:35 [style/useless-do]

Unnecessary `do`.

```clojure
(do
 (reduce
  into
  [(or bh-ui error-ui)
   :component-id
   component-id
   :container-id
   container-id
   :style
   (or styl {:height "100%", :width "100%"})
   :config
   def-config]
  (seq
   (merge
    (make-params configuration node :inputs container-id)
    (make-params configuration node :outputs container-id)))))
```

Consider using:

```clojure
(reduce
 into
 [(or bh-ui error-ui)
  :component-id
  component-id
  :container-id
  container-id
  :style
  (or styl {:height "100%", :width "100%"})
  :config
  def-config]
 (seq
  (merge
   (make-params configuration node :inputs container-id)
   (make-params configuration node :outputs container-id))))
```

----

#### src/bh_ui/molecule/composite/util/signals.cljs:244:35 [style/useless-do]

Unnecessary `do`.

```clojure
(do
 [(or bh-ui error-ui)
  :style
  (or styl {:height "100%", :width "100%"})
  :config
  def-config
  :children
  (into [] (map (fn [c] (:component (get @atm-set c))) children))])
```

Consider using:

```clojure
[(or bh-ui error-ui)
 :style
 (or styl {:height "100%", :width "100%"})
 :config
 def-config
 :children
 (into [] (map (fn [c] (:component (get @atm-set c))) children))]
```

----

#### src/bh_ui/molecule/composite/util/signals.cljs:320:35 [style/useless-do]

Unnecessary `do`.

```clojure
(do
 [(or bh-ui error-ui)
  :style
  (or styl {:height "100%", :width "100%"})
  :config
  def-config
  :children
  (into [] (map (fn [c] (:component (get @atm-set c))) children))])
```

Consider using:

```clojure
[(or bh-ui error-ui)
 :style
 (or styl {:height "100%", :width "100%"})
 :config
 def-config
 :children
 (into [] (map (fn [c] (:component (get @atm-set c))) children))]
```

----

#### src/bh_ui/molecule/composite/util/signals.cljs:612:16 [lint/if-else-nil]

Use `when` which doesn't require specifying the else branch.

```clojure
(if (keyword? ui-type) (->> registry ui-type :component ui-type))
```

Consider using:

```clojure
(when (keyword? ui-type) (->> registry ui-type :component ui-type))
```

----

#### src/bh_ui/molecule/composite/util/signals.cljs:249:48 [lint/into-literal]

Use `vec` instead of recreating it.

```clojure
(into [] (map (fn [c] (:component (get @atm-set c))) children))
```

Consider using:

```clojure
(vec (map (fn [c] (:component (get @atm-set c))) children))
```

----

#### src/bh_ui/molecule/composite/util/signals.cljs:228:35 [style/useless-do]

Unnecessary `do`.

```clojure
(do
 [(or bh-ui error-ui)
  :style
  (or styl {:height "100%", :width "100%"})
  :config
  def-config
  :child
  (:component ((fn [c] (get @atm-set c)) child))])
```

Consider using:

```clojure
[(or bh-ui error-ui)
 :style
 (or styl {:height "100%", :width "100%"})
 :config
 def-config
 :child
 (:component ((fn [c] (get @atm-set c)) child))]
```

----

#### src/bh_ui/molecule/composite/util/signals.cljs:236:35 [style/useless-do]

Unnecessary `do`.

```clojure
(do
 (into
  [(or bh-ui error-ui)
   (merge
    (or styl {:style {:height "100%", :width "100%"}})
    (or def-config {}))]
  (map (fn [c] (:component (get @atm-set c))) children)))
```

Consider using:

```clojure
(into
 [(or bh-ui error-ui)
  (merge
   (or styl {:style {:height "100%", :width "100%"}})
   (or def-config {}))]
 (map (fn [c] (:component (get @atm-set c))) children))
```

----

#### src/bh_ui/molecule/composite/util/signals.cljs:304:35 [style/useless-do]

Unnecessary `do`.

```clojure
(do
 [(or bh-ui error-ui)
  :style
  (or styl {:height "100%", :width "100%"})
  :config
  def-config
  :child
  (:component ((fn [c] (get @atm-set c)) child))])
```

Consider using:

```clojure
[(or bh-ui error-ui)
 :style
 (or styl {:height "100%", :width "100%"})
 :config
 def-config
 :child
 (:component ((fn [c] (get @atm-set c)) child))]
```

----

#### src/bh_ui/molecule/composite/util/signals.cljs:220:35 [style/useless-do]

Unnecessary `do`.

```clojure
(do
 (into
  [(or bh-ui error-ui)
   (merge
    (or styl {:style {:height "100%", :width "100%"}})
    (or def-config {}))]
  (:component ((fn [c] (get @atm-set c)) child))))
```

Consider using:

```clojure
(into
 [(or bh-ui error-ui)
  (merge
   (or styl {:style {:height "100%", :width "100%"}})
   (or def-config {}))]
 (:component ((fn [c] (get @atm-set c)) child)))
```

----

#### src/bh_ui/molecule/composite/util/signals.cljs:312:35 [style/useless-do]

Unnecessary `do`.

```clojure
(do
 (into
  [(or bh-ui error-ui)
   (merge
    (or styl {:style {:height "100%", :width "100%"}})
    (or def-config {}))]
  (map (fn [c] (:component (get @atm-set c))) children)))
```

Consider using:

```clojure
(into
 [(or bh-ui error-ui)
  (merge
   (or styl {:style {:height "100%", :width "100%"}})
   (or def-config {}))]
 (map (fn [c] (:component (get @atm-set c))) children))
```

----

#### src/bh_ui/molecule/composite/util/signals.cljs:629:3 [lint/into-literal]

Use `vec` instead of recreating it.

```clojure
(into [] (map (fn [c] (:component (get @atm-set c))) children))
```

Consider using:

```clojure
(vec (map (fn [c] (:component (get @atm-set c))) children))
```

----

#### src/bh_ui/molecule/composite/util/signals.cljs:328:35 [style/useless-do]

Unnecessary `do`.

```clojure
(do
 (reduce
  into
  [(or bh-ui error-ui)
   :component-id
   component-id
   :container-id
   container-id
   :style
   (or styl {:height "100%", :width "100%"})
   :config
   def-config]
  (seq
   (merge
    (make-params configuration node :inputs container-id)
    (make-params configuration node :outputs container-id)))))
```

Consider using:

```clojure
(reduce
 into
 [(or bh-ui error-ui)
  :component-id
  component-id
  :container-id
  container-id
  :style
  (or styl {:height "100%", :width "100%"})
  :config
  def-config]
 (seq
  (merge
   (make-params configuration node :inputs container-id)
   (make-params configuration node :outputs container-id))))
```

----

#### src/bh_ui/molecule/composite/util/ui.cljs:304:22 [lint/into-literal]

Use `vec` instead of recreating it.

```clojure
(into
 []
 (map
  (clojure.core/fn [%1] (create-flow-node @configuration %1))
  (->>
   @configuration
   :flow-nodes
   (sort-by (fn [[_ v]] (:case v)))
   (map first)
   (drop 1)
   vec)))
```

Consider using:

```clojure
(vec
 (map
  (clojure.core/fn [%1] (create-flow-node @configuration %1))
  (->>
   @configuration
   :flow-nodes
   (sort-by (fn [[_ v]] (:case v)))
   (map first)
   (drop 1)
   vec)))
```

----

#### src/bh_ui/molecule/composite/util/ui.cljs:452:3 [lint/thread-macro-one-arg]

Intention of `->` is clearer with inlined form.

```clojure
(-> configuration (get-in [:mol/components node-id :atm/kind]))
```

Consider using:

```clojure
(get-in configuration [:mol/components node-id :atm/kind])
```

----

#### src/bh_ui/molecule/composite/util/ui.cljs:314:22 [lint/into-literal]

Use `vec` instead of recreating it.

```clojure
(into
 []
 (map-indexed
  (fn [idx node] (create-flow-edge @configuration idx node))
  (:edges @configuration)))
```

Consider using:

```clojure
(vec
 (map-indexed
  (fn [idx node] (create-flow-edge @configuration idx node))
  (:edges @configuration)))
```

----

#### src/bh_ui/molecule/grid_container.cljs:714:34 [lint/into-literal]

Use `vec` instead of recreating it.

```clojure
(into [] (lg/edges graph))
```

Consider using:

```clojure
(vec (lg/edges graph))
```

----

#### src/bh_ui/molecule/grid_container.cljs:1687:21 [lint/into-literal]

Use `vec` instead of recreating it.

```clojure
(into
 []
 (clojure.set/difference
  (set (:mol/grid-layout @data))
  (set (get @last-dsl :mol/grid-layout))))
```

Consider using:

```clojure
(vec
 (clojure.set/difference
  (set (:mol/grid-layout @data))
  (set (get @last-dsl :mol/grid-layout))))
```

----

#### src/bh_ui/molecule/grid_container.cljs:109:13 [lint/not-empty?]

`seq` is idiomatic, gotta learn to love it.

```clojure
(not (empty? new-layout*))
```

Consider using:

```clojure
(seq new-layout*)
```

----

#### src/bh_ui/molecule/grid_container.cljs:1042:3 [style/useless-do]

Unnecessary `do`.

```clojure
(do
 (def
  configuration
  #:mol{:components
        {"v-scroll"
         #:atm{:role :ui/container,
               :kind :bhui/v-scroll-pane,
               :style {:style {:height "500px", :width "700px"}},
               :children ["line" "bar"]},
         "bar-box"
         #:atm{:role :ui/container, :kind :rc/box, :child "bar"},
         "line-box"
         #:atm{:role :ui/container, :kind :rc/box, :child "line"},
         "data" #:atm{:role :source/local, :kind :source/local},
         "line" #:atm{:role :ui/component, :kind :rechart/line},
         "bar" #:atm{:role :ui/component, :kind :rechart/bar}}}))
```

Consider using:

```clojure
(def
 configuration
 #:mol{:components
       {"v-scroll"
        #:atm{:role :ui/container,
              :kind :bhui/v-scroll-pane,
              :style {:style {:height "500px", :width "700px"}},
              :children ["line" "bar"]},
        "bar-box"
        #:atm{:role :ui/container, :kind :rc/box, :child "bar"},
        "line-box"
        #:atm{:role :ui/container, :kind :rc/box, :child "line"},
        "data" #:atm{:role :source/local, :kind :source/local},
        "line" #:atm{:role :ui/component, :kind :rechart/line},
        "bar" #:atm{:role :ui/component, :kind :rechart/bar}}})
```

----

#### src/bh_ui/molecule/grid_container.cljs:590:3 [lint/thread-macro-one-arg]

Intention of `->>` is clearer with inlined form.

```clojure
(->> @@last-full-config :mol/flow-nodes)
```

Consider using:

```clojure
(:mol/flow-nodes @@last-full-config)
```

----

#### src/bh_ui/molecule/grid_container.cljs:1021:3 [style/useless-do]

Unnecessary `do`.

```clojure
(do
 (def
  configuration
  #:mol{:components
        {"v-scroll"
         #:atm{:role :ui/component,
               :kind :bhui/v-scroll-pane,
               :style {:style {:height "500px", :width "700px"}},
               :children ["line" "bar"]},
         "bar-box"
         #:atm{:role :ui/component, :kind :rc/box, :child "bar"},
         "line-box"
         #:atm{:role :ui/component, :kind :rc/box, :child "line"},
         "data" #:atm{:role :source/local, :kind :source/local},
         "line" #:atm{:role :ui/component, :kind :rechart/line},
         "bar" #:atm{:role :ui/component, :kind :rechart/bar}}}))
```

Consider using:

```clojure
(def
 configuration
 #:mol{:components
       {"v-scroll"
        #:atm{:role :ui/component,
              :kind :bhui/v-scroll-pane,
              :style {:style {:height "500px", :width "700px"}},
              :children ["line" "bar"]},
        "bar-box"
        #:atm{:role :ui/component, :kind :rc/box, :child "bar"},
        "line-box"
        #:atm{:role :ui/component, :kind :rc/box, :child "line"},
        "data" #:atm{:role :source/local, :kind :source/local},
        "line" #:atm{:role :ui/component, :kind :rechart/line},
        "bar" #:atm{:role :ui/component, :kind :rechart/bar}}})
```

----

#### src/bh_ui/molecule/grid_container.cljs:1755:16 [lint/thread-macro-one-arg]

Intention of `->` is clearer with inlined form.

```clojure
(->
 (diff-dsl @last-dsl @data)
 (select-keys [:mol/components :mol/links :mol/grid-layout]))
```

Consider using:

```clojure
(select-keys
 (diff-dsl @last-dsl @data)
 [:mol/components :mol/links :mol/grid-layout])
```

----

#### src/bh_ui/molecule/grid_container.cljs:600:3 [lint/thread-macro-one-arg]

Intention of `->>` is clearer with inlined form.

```clojure
(->> @@last-full-config :mol/flow-edges)
```

Consider using:

```clojure
(:mol/flow-edges @@last-full-config)
```

----

#### src/bh_ui/molecule/grid_container.cljs:587:3 [lint/thread-macro-one-arg]

Intention of `->>` is clearer with inlined form.

```clojure
(->> @@last-full-config keys)
```

Consider using:

```clojure
(keys @@last-full-config)
```

----

#### src/bh_ui/molecule/grid_container.cljs:1129:16 [lint/into-literal]

Use `vec` instead of recreating it.

```clojure
(into [] (loom.graph/edges graph))
```

Consider using:

```clojure
(vec (loom.graph/edges graph))
```

----

#### src/bh_ui/molecule/grid_container.cljs:424:29 [lint/into-literal]

Use `vec` instead of recreating it.

```clojure
(into [] (lg/edges graph))
```

Consider using:

```clojure
(vec (lg/edges graph))
```

----

#### src/bh_ui/molecule/grid_container.cljs:1069:3 [style/useless-do]

Unnecessary `do`.

```clojure
(do (def configuration @@last-config))
```

Consider using:

```clojure
(def configuration @@last-config)
```

----

#### src/bh_ui/molecule/grid_container.cljs:1547:3 [style/useless-do]

Unnecessary `do`.

```clojure
(do (def stand-alone [(filter (fn [[k v]] (:parent v)) @layout)]))
```

Consider using:

```clojure
(def stand-alone [(filter (fn [[k v]] (:parent v)) @layout)])
```

----

#### src/bh_ui/molecule/grid_container.cljs:605:3 [lint/thread-macro-one-arg]

Intention of `->>` is clearer with inlined form.

```clojure
(->> @@last-full-config :mol/links)
```

Consider using:

```clojure
(:mol/links @@last-full-config)
```

----

#### src/bh_ui/molecule/grid_container.cljs:622:16 [lint/into-literal]

Use `vec` instead of recreating it.

```clojure
(into [] (lg/edges graph))
```

Consider using:

```clojure
(vec (lg/edges graph))
```

----

#### src/bh_ui/molecule/grid_container.cljs:683:34 [lint/into-literal]

Use `vec` instead of recreating it.

```clojure
(into [] (lg/edges graph))
```

Consider using:

```clojure
(vec (lg/edges graph))
```

----

#### src/bh_ui/molecule/grid_container.cljs:1736:16 [lint/thread-macro-one-arg]

Intention of `->` is clearer with inlined form.

```clojure
(->
 (diff-dsl @last-dsl @data)
 (select-keys [:mol/components :mol/links :mol/grid-layout]))
```

Consider using:

```clojure
(select-keys
 (diff-dsl @last-dsl @data)
 [:mol/components :mol/links :mol/grid-layout])
```

----

#### src/bh_ui/subs.cljs:14:3 [lint/fn-wrapper]

No need to wrap function. Clojure supports first-class functions.

```clojure
(fn [db] (:containers db))
```

Consider using:

```clojure
:containers
```

----

#### src/bh_ui/subs.cljs:8:3 [lint/fn-wrapper]

No need to wrap function. Clojure supports first-class functions.

```clojure
(fn [db] (:pub-sub-started? db))
```

Consider using:

```clojure
:pub-sub-started?
```

----

#### src/bh_ui/tabbed_pane/utils.cljs:36:7 [lint/fn-wrapper]

No need to wrap function. Clojure supports first-class functions.

```clojure
(fn [tab-panel] (:value tab-panel))
```

Consider using:

```clojure
:value
```

----

#### src/bh_ui/tabbed_pane/utils.cljs:30:7 [lint/fn-wrapper]

No need to wrap function. Clojure supports first-class functions.

```clojure
(fn [navbar] (:tab-panel navbar))
```

Consider using:

```clojure
:tab-panel
```

----

#### src/bh_ui/utils.cljs:92:1 [naming/conversion-functions]

Use `->` instead of `to` in the names of conversion functions.

```clojure
(defn
 subscribe-to-container
 [container-id component-path]
 (ctnr/subscribe-to-container container-id component-path))
```

Consider using:

```clojure
(defn
 subscribe->container
 [container-id component-path]
 (ctnr/subscribe-to-container container-id component-path))
```

----

#### src/bh_ui/utils.cljs:96:1 [naming/conversion-functions]

Use `->` instead of `to` in the names of conversion functions.

```clojure
(defn
 publish-to-container
 [container-id component-path new-val]
 (ctnr/publish-to-container container-id component-path new-val))
```

Consider using:

```clojure
(defn
 publish->container
 [container-id component-path new-val]
 (ctnr/publish-to-container container-id component-path new-val))
```

----

#### src/bh_ui/utils.cljs:269:3 [lint/thread-macro-one-arg]

Intention of `->>` is clearer with inlined form.

```clojure
(->> @(re-frame/subscribe [:containers/<guid-1>]) keys)
```

Consider using:

```clojure
(keys @(re-frame/subscribe [:containers/<guid-1>]))
```

----

#### src/bh_ui/utils/color.cljs:21:1 [style/multiple-arity-order]

defn arities should be sorted fewest to most arguments.

```clojure
(defn
 get-color
 ([idx source] (let [i (mod idx (count source))] (get source i)))
 ([idx] (get-color idx default-stroke-fill-colors)))
```

Consider using:

```clojure
(defn
 get-color
 ([idx] (get-color idx default-stroke-fill-colors))
 ([idx source] (let [i (mod idx (count source))] (get source i))))
```

----

#### src/bh_ui/utils/color.cljs:27:1 [style/multiple-arity-order]

defn arities should be sorted fewest to most arguments.

```clojure
(defn
 next-color
 ([idx-atom source] (get-color (swap! idx-atom inc) source))
 ([idx-atom] (get-color (swap! idx-atom inc))))
```

Consider using:

```clojure
(defn
 next-color
 ([idx-atom] (get-color (swap! idx-atom inc)))
 ([idx-atom source] (get-color (swap! idx-atom inc) source)))
```

----

#### src/bh_ui/utils/color.cljs:50:18 [style/apply-str]

Use `clojure.string/join` instead of recreating it.

```clojure
(apply str (rest hex-color))
```

Consider using:

```clojure
(clojure.string/join (rest hex-color))
```

----

#### src/bh_ui/utils/color.cljs:102:1 [style/multiple-arity-order]

defn arities should be sorted fewest to most arguments.

```clojure
(defn
 normal->rgba
 ([r g b a]
  {:r (.round js/Math (* r 255)),
   :g (.round js/Math (* g 255)),
   :b (.round js/Math (* b 255)),
   :a (.round js/Math (* a 255))})
 ([[r g b a]]
  {:r (.round js/Math (* r 255)),
   :g (.round js/Math (* g 255)),
   :b (.round js/Math (* b 255)),
   :a (.round js/Math (* a 255))}))
```

Consider using:

```clojure
(defn
 normal->rgba
 ([[r g b a]]
  {:r (.round js/Math (* r 255)),
   :g (.round js/Math (* g 255)),
   :b (.round js/Math (* b 255)),
   :a (.round js/Math (* a 255))})
 ([r g b a]
  {:r (.round js/Math (* r 255)),
   :g (.round js/Math (* g 255)),
   :b (.round js/Math (* b 255)),
   :a (.round js/Math (* a 255))}))
```

----

#### src/bh_ui/utils/container.cljs:66:1 [naming/conversion-functions]

Use `->` instead of `to` in the names of conversion functions.

```clojure
(defn
 publish-to-container
 "\n> NOTE: the re-frame event-handlers ***MUST*** be created beforehand, using [[init-container-locals]]\n\n  ---\n\n  - `container-id` : (string) name of the widget, typically a guid, but it can be any string you'd like\n  - `component-path : (vector of keys [keywords or string]) the 'key' for the item that is being publised\n  - `new-val` : (any) the new value to store at the given path\n\n  `value-path` functions exactly like any other re-frame subscription, but relative to the\n  `[:containers <component-id>]` in the overall `app-db`\n\n  It is destructured as follows:\n\n  | var        | type       | description                         |\n  |:-----------|:----------:|:------------------------------------|\n  | `a`        | keyword    | the (primary) value to subscribe to |\n  | `& more`   | keyword(s) | any additional parts to the path    |\n\n   ---\n\n   #### EXAMPLES\n\n  "
 [container-id component-path new-val]
 (let
  [p (h/path->keyword container-id "blackboard")]
  (re-frame/dispatch [p component-path new-val])))
```

Consider using:

```clojure
(defn
 publish->container
 "\n> NOTE: the re-frame event-handlers ***MUST*** be created beforehand, using [[init-container-locals]]\n\n  ---\n\n  - `container-id` : (string) name of the widget, typically a guid, but it can be any string you'd like\n  - `component-path : (vector of keys [keywords or string]) the 'key' for the item that is being publised\n  - `new-val` : (any) the new value to store at the given path\n\n  `value-path` functions exactly like any other re-frame subscription, but relative to the\n  `[:containers <component-id>]` in the overall `app-db`\n\n  It is destructured as follows:\n\n  | var        | type       | description                         |\n  |:-----------|:----------:|:------------------------------------|\n  | `a`        | keyword    | the (primary) value to subscribe to |\n  | `& more`   | keyword(s) | any additional parts to the path    |\n\n   ---\n\n   #### EXAMPLES\n\n  "
 [container-id component-path new-val]
 (let
  [p (h/path->keyword container-id "blackboard")]
  (re-frame/dispatch [p component-path new-val])))
```

----

#### src/bh_ui/utils/container.cljs:24:7 [style/useless-do]

Unnecessary `do`.

```clojure
(do (assoc-in db [:containers container] default-composite))
```

Consider using:

```clojure
(assoc-in db [:containers container] default-composite)
```

----

#### src/bh_ui/utils/container.cljs:21:7 [style/useless-do]

Unnecessary `do`.

```clojure
(do db)
```

Consider using:

```clojure
db
```

----

#### src/bh_ui/utils/container.cljs:123:30 [style/when-not-call]

Use `when-not` instead of recreating it.

```clojure
(when (not (nil? s)) {path s})
```

Consider using:

```clojure
(when-not (nil? s) {path s})
```

----

#### src/bh_ui/utils/container.cljs:123:36 [style/not-nil?]

Use `some?` instead of recreating it.

```clojure
(not (nil? s))
```

Consider using:

```clojure
(some? s)
```

----

#### src/bh_ui/utils/container.cljs:119:19 [lint/thread-macro-one-arg]

Intention of `->>` is clearer with inlined form.

```clojure
(->>
 subs
 (map
  (fn
   [path]
   (let
    [s (get-in override-source path)]
    (when (not (nil? s)) {path s})))))
```

Consider using:

```clojure
(map
 (fn
  [path]
  (let
   [s (get-in override-source path)]
   (when (not (nil? s)) {path s})))
 subs)
```

----

#### src/bh_ui/utils/container.cljs:60:1 [naming/conversion-functions]

Use `->` instead of `to` in the names of conversion functions.

```clojure
(defn
 subscribe-to-container
 [container-id [a & more :as component-path]]
 (let
  [p (l/compute-container-path container-id a more)]
  (re-frame/subscribe [p])))
```

Consider using:

```clojure
(defn
 subscribe->container
 [container-id [a & more :as component-path]]
 (let
  [p (l/compute-container-path container-id a more)]
  (re-frame/subscribe [p])))
```

----

#### src/bh_ui/utils/container.cljs:165:12 [lint/let-when]

Use `when-let` instead of recreating it.

```clojure
(let [s (get-in data-source path)] (when s {path s}))
```

Consider using:

```clojure
(when-let [s (get-in data-source path)] {path s})
```

----

#### src/bh_ui/utils/helpers.cljs:407:9 [style/neg-checks]

Use `neg?` instead of recreating it.

```clojure
(> 0 (count base-path))
```

Consider using:

```clojure
(neg? (count base-path))
```

----

#### src/bh_ui/utils/helpers.cljs:306:34 [style/useless-do]

Unnecessary `do`.

```clojure
(do (apply (first form) x (next form)))
```

Consider using:

```clojure
(apply (first form) x (next form))
```

----

#### src/bh_ui/utils/helpers.cljs:165:12 [style/single-key-in]

Use `assoc` instead of recreating it.

```clojure
(assoc-in {:a 0} [:a] 5)
```

Consider using:

```clojure
(assoc {:a 0} :a 5)
```

----

#### src/bh_ui/utils/helpers.cljs:370:34 [style/useless-do]

Unnecessary `do`.

```clojure
(do (apply (first form) x (next form)))
```

Consider using:

```clojure
(apply (first form) x (next form))
```

----

#### src/bh_ui/utils/helpers.cljs:250:3 [style/single-key-in]

Use `get` instead of recreating it.

```clojure
(get-in db [:a])
```

Consider using:

```clojure
(get db :a)
```

----

#### src/bh_ui/utils/helpers.cljs:270:14 [lint/into-literal]

Use `vec` instead of recreating it.

```clojure
(into [] (conj start value))
```

Consider using:

```clojure
(vec (conj start value))
```

----

#### src/bh_ui/utils/helpers.cljs:563:15 [style/single-key-in]

Use `get` instead of recreating it.

```clojure
(get-in d [:data])
```

Consider using:

```clojure
(get d :data)
```

----

#### src/bh_ui/utils/helpers.cljs:156:12 [style/single-key-in]

Use `assoc` instead of recreating it.

```clojure
(assoc-in {} [:a] 5)
```

Consider using:

```clojure
(assoc {} :a 5)
```

----

#### src/bh_ui/utils/helpers.cljs:338:3 [style/single-key-in]

Use `assoc` instead of recreating it.

```clojure
(assoc-in {:dummy "value"} [:dummy] "a")
```

Consider using:

```clojure
(assoc {:dummy "value"} :dummy "a")
```

----

#### src/bh_ui/utils/helpers.cljs:308:34 [style/useless-do]

Unnecessary `do`.

```clojure
(do (form x))
```

Consider using:

```clojure
(form x)
```

----

#### src/bh_ui/utils/helpers.cljs:209:33 [style/useless-do]

Unnecessary `do`.

```clojure
(do (reset! value (source-local-> @value [] [new-value])))
```

Consider using:

```clojure
(reset! value (source-local-> @value [] [new-value]))
```

----

#### src/bh_ui/utils/helpers.cljs:561:14 [style/single-key-in]

Use `get` instead of recreating it.

```clojure
(get-in d [:data])
```

Consider using:

```clojure
(get d :data)
```

----

#### src/bh_ui/utils/helpers.cljs:177:14 [style/single-key-in]

Use `assoc` instead of recreating it.

```clojure
(assoc-in {:a 0} [:a] 5)
```

Consider using:

```clojure
(assoc {:a 0} :a 5)
```

----

#### src/bh_ui/utils/helpers.cljs:89:7 [style/useless-do]

Unnecessary `do`.

```clojure
(do (re-frame/subscribe (reduce conj [(path->keyword subs)] opts)))
```

Consider using:

```clojure
(re-frame/subscribe (reduce conj [(path->keyword subs)] opts))
```

----

#### src/bh_ui/utils/helpers.cljs:108:17 [lint/not-empty?]

`seq` is idiomatic, gotta learn to love it.

```clojure
(not (empty? value))
```

Consider using:

```clojure
(seq value)
```

----

#### src/bh_ui/utils/helpers.cljs:139:34 [style/useless-do]

Unnecessary `do`.

```clojure
(do (apply (first form) x (next form)))
```

Consider using:

```clojure
(apply (first form) x (next form))
```

----

#### src/bh_ui/utils/helpers.cljs:143:34 [style/useless-do]

Unnecessary `do`.

```clojure
(do (form x))
```

Consider using:

```clojure
(form x)
```

----

#### src/bh_ui/utils/helpers.cljs:372:34 [style/useless-do]

Unnecessary `do`.

```clojure
(do (form x))
```

Consider using:

```clojure
(form x)
```

----

#### src/bh_ui/utils/helpers.cljs:565:17 [lint/into-literal]

Use `vec` instead of recreating it.

```clojure
(into [] (drop value start))
```

Consider using:

```clojure
(vec (drop value start))
```

----

#### src/bh_ui/utils/helpers.cljs:567:5 [style/single-key-in]

Use `assoc` instead of recreating it.

```clojure
(assoc-in d [:data] c)
```

Consider using:

```clojure
(assoc d :data c)
```

----

#### src/bh_ui/utils/helpers.cljs:201:27 [style/useless-do]

Unnecessary `do`.

```clojure
(do (re-frame/dispatch update-event))
```

Consider using:

```clojure
(re-frame/dispatch update-event)
```

----

#### src/bh_ui/utils/helpers.cljs:576:3 [style/single-key-in]

Use `assoc` instead of recreating it.

```clojure
(assoc-in d [:container-id] (l/set-val d [] value))
```

Consider using:

```clojure
(assoc d :container-id (l/set-val d [] value))
```

----

#### src/bh_ui/utils/helpers.cljs:414:7 [style/neg-checks]

Use `neg?` instead of recreating it.

```clojure
(> 0 (count base-path))
```

Consider using:

```clojure
(neg? (count base-path))
```

----

#### src/bh_ui/utils/helpers.cljs:86:7 [style/useless-do]

Unnecessary `do`.

```clojure
(do (re-frame/subscribe (reduce conj subs opts)))
```

Consider using:

```clojure
(re-frame/subscribe (reduce conj subs opts))
```

----

#### src/bh_ui/utils/helpers.cljs:18:3 [lint/thread-macro-one-arg]

Intention of `->` is clearer with inlined form.

```clojure
(-> (uuid/make-random-uuid) uuid/uuid-string)
```

Consider using:

```clojure
(uuid/uuid-string (uuid/make-random-uuid))
```

----

#### src/bh_ui/utils/locals.cljs:669:21 [lint/if-else-nil]

Use `when` which doesn't require specifying the else branch.

```clojure
(if x (get @x more) nil)
```

Consider using:

```clojure
(when x (get @x more))
```

----

#### src/bh_ui/utils/locals.cljs:806:20 [lint/if-else-nil]

Use `when` which doesn't require specifying the else branch.

```clojure
(if x (get-in @x value-path))
```

Consider using:

```clojure
(when x (get-in @x value-path))
```

----

#### src/bh_ui/utils/locals.cljs:50:17 [lint/into-literal]

Use `vec` instead of recreating it.

```clojure
(into [] (drop-last value start))
```

Consider using:

```clojure
(vec (drop-last value start))
```

----

#### src/bh_ui/utils/locals.cljs:151:5 [style/when-not-call]

Use `when-not` instead of recreating it.

```clojure
(when
 (not (empty? diff))
 (re-frame/dispatch-sync
  [:events/init-container-locals target merged-values])
 (doall
  (map
   (clojure.core/fn
    [%1]
    (create-container-local-sub component-id %1 nil))
   new-vals-paths))
 (doall
  (map
   (clojure.core/fn
    [%1]
    (create-container-local-event component-id %1))
   new-vals-paths)))
```

Consider using:

```clojure
(when-not
 (empty? diff)
 (re-frame/dispatch-sync
  [:events/init-container-locals target merged-values])
 (doall
  (map
   (clojure.core/fn
    [%1]
    (create-container-local-sub component-id %1 nil))
   new-vals-paths))
 (doall
  (map
   (clojure.core/fn
    [%1]
    (create-container-local-event component-id %1))
   new-vals-paths)))
```

----

#### src/bh_ui/utils/locals.cljs:269:7 [style/useless-do]

Unnecessary `do`.

```clojure
(do accum)
```

Consider using:

```clojure
accum
```

----

#### src/bh_ui/utils/locals.cljs:207:3 [style/useless-do]

Unnecessary `do`.

```clojure
(do
 (as->
  accum
  x
  (conj x (if root (if (vector? root) (conj root k) [root k]) [k]))
  (apply
   conj
   x
   (process-locals
    []
    (if root (if (vector? root) (conj root k) [root k]) k)
    v))))
```

Consider using:

```clojure
(as->
 accum
 x
 (conj x (if root (if (vector? root) (conj root k) [root k]) [k]))
 (apply
  conj
  x
  (process-locals
   []
   (if root (if (vector? root) (conj root k) [root k]) k)
   v)))
```

----

#### src/bh_ui/utils/locals.cljs:99:7 [style/useless-do]

Unnecessary `do`.

```clojure
(do db)
```

Consider using:

```clojure
db
```

----

#### src/bh_ui/utils/locals.cljs:89:7 [style/useless-do]

Unnecessary `do`.

```clojure
(do (assoc-in db [:containers container] values))
```

Consider using:

```clojure
(assoc-in db [:containers container] values)
```

----

#### src/bh_ui/utils/locals.cljs:188:5 [style/when-not-call]

Use `when-not` instead of recreating it.

```clojure
(when
 (not (empty? diff))
 (re-frame/dispatch-sync
  [:events/init-local-path container-path merged-values])
 (doall
  (map
   (clojure.core/fn
    [%1]
    (create-local-path-sub (reduce conj data-path %1) nil))
   new-vals-paths))
 (doall
  (map
   (clojure.core/fn
    [%1]
    (create-local-path-event (reduce conj data-path %1)))
   new-vals-paths)))
```

Consider using:

```clojure
(when-not
 (empty? diff)
 (re-frame/dispatch-sync
  [:events/init-local-path container-path merged-values])
 (doall
  (map
   (clojure.core/fn
    [%1]
    (create-local-path-sub (reduce conj data-path %1) nil))
   new-vals-paths))
 (doall
  (map
   (clojure.core/fn
    [%1]
    (create-local-path-event (reduce conj data-path %1)))
   new-vals-paths)))
```

----

#### src/bh_ui/utils/locals.cljs:39:30 [lint/into-literal]

Use `set` instead of recreating it.

```clojure
(into #{} (disj start value))
```

Consider using:

```clojure
(set (disj start value))
```

----

#### src/bh_ui/utils/locals.cljs:86:7 [style/useless-do]

Unnecessary `do`.

```clojure
(do db)
```

Consider using:

```clojure
db
```

----

#### src/bh_ui/utils/locals.cljs:803:15 [lint/let-if]

Use `if-let` instead of recreating it.

```clojure
(let
 [x (re-frame/subscribe [(h/path->keyword container-id a)])]
 (if x (get @x more) nil))
```

Consider using:

```clojure
(if-let
 [x (re-frame/subscribe [(h/path->keyword container-id a)])]
 (get @x more)
 nil)
```

----

#### src/bh_ui/utils/locals.cljs:679:9 [lint/if-else-nil]

Use `when` which doesn't require specifying the else branch.

```clojure
(if get-in-ok (reaction get-in-ok) nil)
```

Consider using:

```clojure
(when get-in-ok (reaction get-in-ok))
```

----

#### src/bh_ui/utils/locals.cljs:804:17 [lint/if-else-nil]

Use `when` which doesn't require specifying the else branch.

```clojure
(if x (get @x more) nil)
```

Consider using:

```clojure
(when x (get @x more))
```

----

#### src/bh_ui/utils/locals.cljs:225:3 [style/useless-do]

Unnecessary `do`.

```clojure
(do
 (conj accum (if root (if (vector? root) (conj root k) [root k]) [k])))
```

Consider using:

```clojure
(conj accum (if root (if (vector? root) (conj root k) [root k]) [k]))
```

----

#### src/bh_ui/utils/locals.cljs:668:19 [lint/let-if]

Use `if-let` instead of recreating it.

```clojure
(let
 [x (re-frame/subscribe [(h/path->keyword container-id a)])]
 (if x (get @x more) nil))
```

Consider using:

```clojure
(if-let
 [x (re-frame/subscribe [(h/path->keyword container-id a)])]
 (get @x more)
 nil)
```

----

#### src/bh_ui/utils/locals.cljs:29:17 [lint/into-literal]

Use `vec` instead of recreating it.

```clojure
(into [] (conj start value))
```

Consider using:

```clojure
(vec (conj start value))
```

----

#### src/bh_ui/utils/locals.cljs:102:7 [style/useless-do]

Unnecessary `do`.

```clojure
(do (assoc-in db local-path values))
```

Consider using:

```clojure
(assoc-in db local-path values)
```

----

#### src/bh_ui/utils/locals.cljs:188:11 [lint/not-empty?]

`seq` is idiomatic, gotta learn to love it.

```clojure
(not (empty? diff))
```

Consider using:

```clojure
(seq diff)
```

----

#### src/bh_ui/utils/locals.cljs:40:33 [lint/into-literal]

Use `vec` instead of recreating it.

```clojure
(into [] (disj start value))
```

Consider using:

```clojure
(vec (disj start value))
```

----

#### src/bh_ui/utils/locals.cljs:671:21 [lint/if-else-nil]

Use `when` which doesn't require specifying the else branch.

```clojure
(if x (get-in @x value-path))
```

Consider using:

```clojure
(when x (get-in @x value-path))
```

----

#### src/bh_ui/utils/locals.cljs:151:11 [lint/not-empty?]

`seq` is idiomatic, gotta learn to love it.

```clojure
(not (empty? diff))
```

Consider using:

```clojure
(seq diff)
```

----

#### src/bh_ui/utils/locals.cljs:675:5 [lint/if-same-truthy]

Use `or` instead of recreating it.

```clojure
(if
 sub-ok
 sub-ok
 (if get-ok (reaction get-ok) (if get-in-ok (reaction get-in-ok) nil)))
```

Consider using:

```clojure
(or
 sub-ok
 (if get-ok (reaction get-ok) (if get-in-ok (reaction get-in-ok) nil)))
```

----

#### src/bh_ui/utils/locals.cljs:60:17 [lint/into-literal]

Use `vec` instead of recreating it.

```clojure
(into [] (drop value start))
```

Consider using:

```clojure
(vec (drop value start))
```

