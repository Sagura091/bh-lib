(ns bh-ui.organism.ui-grid
  (:require [bh-ui.atom.layout.responsive-grid :as grid]
            [bh-ui.utils.helpers :as h]
            [bh-ui.utils.locals :as l]
            [reagent.ratom]
            [taoensso.timbre :as log]))


(log/info "bh-ui.organism.ui-grid")


(defn- make-widget [[id title content bk-color txt-color]]
  ;(log/info "make-widget" id "//" title)

  [:div.widget-parent.h-w-100pc {:key id}
   [:div.grid-toolbar.title-wrapper.move-cursor
    [:div {:style {:background-color bk-color
                   :color            txt-color
                   :padding          "5px"
                   :font-weight      :bold
                   :font-size        "1.1em"}}
     title]]
   [:div.widget.widget-content
    {:on-mouse-down #(.stopPropagation %)}
    content]])


(defn- update-layout-sub [layout updated-layout]
  ;(log/info "update-layout-sub" layout "//" updated-layout)
  (h/handle-change-path layout [[l/set-val [] updated-layout]]))


(defn- update-layout-ratom [layout updated-layout]
  ;(log/info "update-layout-ratom" layout "//" updated-layout)
  (reset! layout updated-layout))


(defn- update-layout [layout updated-layout]
  ;(log/info "update-layout" layout "//" updated-layout)
  ;
  ;(log/info "update-layout" (keyword? layout)
  ;  "//" (coll? layout)
  ;  "//" (seq layout)
  ;  "//" (every? keyword? layout)
  ;  "////" (instance? reagent.ratom.RAtom layout)
  ;  "//" (instance? Atom layout))

  (cond
    (keyword? layout) (update-layout-sub layout updated-layout)

    (and (coll? layout)
      (seq layout)
      (every? keyword? layout)) (update-layout-sub layout updated-layout)

    (or (instance? reagent.ratom.RAtom layout)
      ;(instance? reagent.ratom.Reaction layout)
      (instance? Atom layout)) (update-layout-ratom layout updated-layout)

    :else ()))


(defn on-layout-change [layout container-id widgets save-fn new-layout]
  ;(log/info "on-layout-change" @widgets "_____" new-layout "_____" container-id "_____" save-fn)

  ;; note the need to convert the callbacks from js objects
  (let [n-l (js->clj new-layout :keywordize-keys true)
        fst (first n-l)]

    (when (and
            (seq n-l)
            (<= 1 (count n-l))
            (not= (:i fst) "null"))
      (let [cooked (map #(zipmap '(:i :x :y :w :h) %)
                     (map (juxt :i :x :y :w :h) n-l))]
        ;(log/info "on-layout-change (cooked)" cooked
        ;  "//" (zipmap (map :i cooked) cooked))
        (save-fn container-id @widgets cooked)
        (update-layout layout cooked)))))


(defn component [& {:keys [widgets layout container-id save-fn]}]

  (let [r-widgets (h/resolve-value widgets)
        r-layout  (h/resolve-value layout)]

    ;(log/info "component (resolve)" container-id
    ;  "//" save-fn)
    ;  "//" widgets "/////" @r-widgets
    ;  "//" layout "/////" @r-layout)

    (fn []
      [grid/grid
       :id container-id
       :children (doall (map make-widget @r-widgets))
       :cols 20
       :layoutFn (partial on-layout-change layout container-id r-widgets (or save-fn #()))
       :layout @r-layout])))





(comment
  ; example dsl data for a single widget:
  {:widgets #{{:id           "comms-plan"
               :title        "Comms Coverage Plan"
               :data         {:mol/components  {:topic/data   {:atm/role :source/remote :atm/kind :source/measurements}
                                                :ui/bar-chart {:atm/role :ui/component :atm/kind :rechart/bar}}
                              :mol/links       {:topic/data {:data {:ui/bar-chart :data}}}
                              :mol/grid-layout [{:i :ui/bar-chart :x 0 :y 0 :w 20 :h 11 :static true}]
                              :mol/flow-nodes  []
                              :mol/flow-edges  []}
               :component-id "comms-plan"
               :resizable    true
               :bar-color    :green
               :text-color   :white}}
   :layout  #{{:i "comms-plan" :x 0 :y 0 :w 20 :h 27}}}


  ; what is in the runtime:

  ; widgets
  (def live-widgets #{["multi-chart"
                       "Multi-Chart"
                       [;"#object[bh_ui$molecule$grid_container$component]"
                        :data
                        ;#object[reagent.ratom.RAtom {:val
                        {:flow-nodes          {}
                         :parent-graph        {}
                         :containership-graph {}
                         :mol/flow-nodes      []
                         :mol/flow-edges      []
                         :mol/links           {}
                         :mol/components      {}
                         :mol/grid-layout     '({})}
                        :component-id :ui-grid-ratom-demo.multi-chart
                        :resizable true]
                       :blue
                       :white]})

  (let [[id title data bar-color text-color] (first live-widgets)]
    {:id           id :title title
     :data         (select-keys (second data) [:mol/components :mol/links
                                               :mol/grid-layout :mol/flow-nodes
                                               :mol/flow-edges])
     :component-id (nth data 3)
     :resizable    (nth data 5)
     :bar-color    bar-color
     :text-color   text-color})






  ())