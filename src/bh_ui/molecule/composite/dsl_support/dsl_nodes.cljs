(ns bh-ui.molecule.composite.dsl-support.dsl-nodes
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            ["reactflow" :refer (Handle Position NodeToolbar NodeResizer)]
            [taoensso.timbre :as log]
            ["react" :refer (useState)]
            [re-com.core :as rc]
            [bh-ui.atom.re-com.label :as label]))


(log/info "demo.catalog.atom.example.diagram.node-types.custom-node")


(def last-node (atom nil))

(def handle-style {:width "8px" :height "8px" :borderRadius "50%"})
(def node-style {:ui/component  {:background :green :color :white}
                 :ui/container  {:color :gray}
                 :source/remote {:background :orange :color :black}
                 :source/local  {:background :blue :color :white}
                 :source/fn     {:background :pink :color :black}})
(def default-node-style {:minHeight    "20px"
                         :minWidth     "100px"
                         :width        "100%"
                         :height       "100%"
                         :borderRadius "5px"})

(def default-text-style {:color     :black
                         :margin    :auto
                         :textAlign :center})
(def minimap-styles {:nodeStrokeColor  (fn [n]
                                         (condp = (-> n js->clj (get "type"))
                                           ":ui/component" "#008800"
                                           ":ui/container" "#DCDCDC"
                                           ":source/remote" "#FFA500"
                                           ":source/local" "#0000FF"
                                           ":source/fn" "#FFC0CB"
                                           "#FFFFFF"))
                     :nodeColor        (fn [n]
                                         (condp = (-> n js->clj (get "type"))
                                           ":ui/component" "#008800"
                                           ":ui/container" "transparent"
                                           ":source/remote" "#FFA500"
                                           ":source/local" "#0000FF"
                                           ":source/fn" "#FFC0CB"
                                           "#FFFFFF"))
                     :nodeBorderRadius 5
                     :zoomable         true
                     :pannable         true})


(defn default-node-kind [node-type]
  (condp = node-type
    ":ui/component" ":ui/table"
    node-type))


(defn- open-details [open-details? node]
  (reset! open-details? (js->clj node)))


(defn string->keyword [s]
  ;(log/info "string->keyword" s)

  (cond
    (nil? s) "missing"
    (keyword? s) s

    ; TODO: needs to handle the case where we don't have a ":" to start the string
    :else (if (clojure.string/index-of (subs s 1) "/")
            (keyword
              (subs (subs s 1)
                0 (clojure.string/index-of (subs s 1) "/"))
              (subs (subs s 1)
                (inc (clojure.string/index-of (subs s 1) "/"))))
            (keyword
              (subs s 1)))))


(defn- handle [id t style position isConnectable]
  ;(log/info "handle" id t style)
  [:> Handle {:id            id
              :type          t
              :position      position
              :style         style
              ;:onConnect     #(js/console.log "SOURCE handle onConnect" %)
              :isConnectable isConnectable}])


(defn- make-handle [direction [_ {:keys [label style position :as params]}]]
  ;(log/info "make-handle" direction "//" params)

  ^{:key label} [handle label direction style position true])


(defn look-up-ui-component [node-type]
  ;(log/info "look-up-ui-component (a)" node-type)
  ;(log/info "look-up-ui-component (b)" (-> (string->keyword node-type)
  ;                                       bh-ui.atom.component-registry/lookup-component
  ;                                       :handles))

  (-> (string->keyword node-type)
    bh-ui.atom.component-registry/lookup-component
    :handles))


(defn node-data
  ; TODO: UPDATE for dropping nodes (SEE bh-ui.molecule.composite.util.ui/create-flow-node)

  [node-type node-id node-kind children position]

  (log/info "node-data" node-type node-id node-kind)

  (let [handles (-> (string->keyword node-type)
                  bh-ui.atom.component-registry/lookup-component
                  :handles)]
    {:id       node-id
     :type     (str node-type)

     :data     {:label    node-id
                :kind     node-kind
                :kind-js  (str node-kind)
                :inputs   (:inputs handles)
                :outputs  (:outputs handles)
                :children children}
     :position position}))


(comment
  (def node-type ":source/local")

  (-> (string->keyword node-type)
    bh-ui.atom.component-registry/lookup-component
    :handles)

  ())


(defn- container-node [node]
  (let [data            (js->clj node)
        node-id         (get data "id")
        size            (get-in data ["data" "size"])
        text            (get-in data ["data" "label"])
        children        (get-in data ["data" "children"])
        parent          (get-in data "parentNode")
        kind-of-element (r/atom (get-in data ["data" "kind-js"]))
        node-styling    (-> default-node-style
                          (merge (:ui/container node-style))
                          (merge {:border "1px dashed"})
                          (merge (into {}
                                   (map (fn [[k v]]
                                          {(keyword k) v}) size))))
        text-style      (merge default-text-style (:ui/container node-style))
        [isVisible set-visibility on-change-visibility] (useState false)]

    ;(log/info "container-node (b)"
    ;data
    ;"//" text
    ;"//" children
    ;"//" size
    ;"//" (into {} (map (fn [[k v]] {(keyword k) v}) size))
    ;"//" node-type
    ;"//" node-styling
    ;  text-style
    ;"//" @kind-of-element
    ;"//" (type node-type)
    ;"///" handles
    ;"//" extras?)

    (r/as-element

      [:div {:on-mouse-enter #(set-visibility true)
             :on-mouse-leave #(set-visibility false)}

       [:> NodeResizer {:color "#000000" :isVisible isVisible}]

       [rc/v-box
        :gap "1px"
        :style node-styling
        :children [[label/label :style text-style :value text]
                   [label/label-sm :style text-style :value @kind-of-element]]]])))


(defn custom-node
  "build a custom node for the flow diagram, with one Handle for each input (along the top)
  and output (along the bottom)
  "
  [node-type two node & params]

  ;(log/info "custom-node (a)" node-type "//" two "//" node "//" params)

  (if node
    (let [data            (js->clj node)
          node-id         (get data "id")
          text            (get-in data ["data" "label"])
          kind-of-element (r/atom (get-in data ["data" "kind-js"]))
          style           (merge default-node-style (node-type node-style))
          handles         (look-up-ui-component @kind-of-element)
          [isVisible set-visibility on-change-visibility] (useState false)]

      (reset! last-node data)

      ;(log/info "custom-node (b)" data
      ;  "//" text
      ;  "//" node-type
      ;  "//" @kind-of-element)
      ;  "//" (type node-type)
      ;  "///" handles)
      ;  "//" extras?)

      (if (= node-type :ui/container)
        (container-node node)

        (r/as-element

          [:div {:style style :on-mouse-enter #(set-visibility true) :on-mouse-leave #(set-visibility false)}

           [:> NodeResizer {:color "#000000" :isVisible isVisible :minWidth 100 :minHeight 30}]

           (map #(make-handle "target" %) (:inputs handles))

           [rc/v-box
            :gap "1px"
            :children [[label/label :style (merge {:textAlign :center} style)
                        :value text]
                       [label/label-sm :style (merge {:textAlign :center} style)
                        :value @kind-of-element]]]

           (map #(make-handle "source" %) (:outputs handles))])))

    (r/as-element [:div])))


(def meta-data {:source/remote {:ports {:data :port/source}}
                :source/local  {:ports {:data :port/source-sink}}
                :source/fn     {:ports {}}})


(rf/dispatch-sync [:register-meta meta-data])



(def node-types {":ui/component"  (partial custom-node :ui/component)
                 ":ui/container"  (partial custom-node :ui/container)
                 ":source/remote" (partial custom-node :source/remote)
                 ":source/local"  (partial custom-node :source/local)
                 ":source/fn"     (partial custom-node :source/fn)})


(def bootstrap-node-data {":ui/component"  (partial node-data :ui/component)
                          ":ui/container"  (partial node-data :ui/container)
                          ":source/remote" (partial node-data :source/remote)
                          ":source/local"  (partial node-data :source/local)
                          ":source/fn"     (partial node-data :source/fn)})




(comment

  (def handles {:inputs {:data   {:label    "data-in", :style {:top 10, :background "#555"},
                                  :position "left"},
                         :config {:label    "config-in", :style {:top 20, :background "#555"},
                                  :position "left"}}})

  (map (fn [[_ m]]
         {:m m})
    (:inputs handles))

  (map #(make-handle "target" %) (:inputs handles))


  ())


(comment
  (do
    (def node @last-node)
    (def node-type :source/fn)
    (def kind-of-element (r/atom (get-in node ["data" "kind-js"])))
    (def handles (look-up-ui-component @kind-of-element)))

  (-> (string->keyword @kind-of-element)
    bh-ui.atom.component-registry/lookup-component
    :handles)


  (def size (clj->js {:width 100}))

  (map (fn [[k v]] {(keyword k) v}) {"width" 100})

  (js->clj size :keywordize-keys true)

  ())