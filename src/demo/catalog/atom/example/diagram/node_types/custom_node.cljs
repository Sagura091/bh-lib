(ns demo.catalog.atom.example.diagram.node-types.custom-node
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            ["reactflow" :refer (Handle Position NodeToolbar NodeResizer)]
            [taoensso.timbre :as log]
            ["react" :refer (useState)]))


(log/info "demo.catalog.atom.example.diagram.node-types.custom-node")


(def handle-style {:width "8px" :height "8px" :borderRadius "50%"})
(def node-style {:ui/component  {:background :green :color :white}
                 :source/remote {:background :orange :color :black}
                 :source/local  {:background :blue :color :white}
                 :source/fn     {:background :pink :color :black}})
(def default-node-style {
                         :minHeight    "30px"
                         :width        "100%"
                         :height       "100%"
                         :borderRadius "5px" :margin :auto
                         :background   :white :color :black})


(defn- open-details [open-details? node]
  (reset! open-details? (js->clj node)))


(defn- handle [id t style position isConnectable]
  [:> Handle {:id            id
              :type          t
              :position      position
              :style         style
              ;:onConnect     #(js/console.log "SOURCE handle onConnect" %)
              :isConnectable isConnectable}])


(defn- make-handle [direction {:keys [label style position]}]
  ^{:key label} [handle label direction style position true])


(defn look-up-ui-component [node-type]
  (-> @(rf/subscribe [:meta-data-registry])
    (get node-type)
    :handles))


(defn node-data [node-type node-id node-kind position]
  (log/info "node-data" node-type node-id node-kind)

  (let [handles (-> @(rf/subscribe [:meta-data-registry]) node-kind :handles)]
    {:id       node-id
     :type     node-type
     :data     {:label   node-id
                :kind    node-kind
                :inputs  (:inputs handles) ;(:inputs (get ui-component-registry-almost node-kind))
                :outputs (:outputs handles)} ;(:outputs (get ui-component-registry-almost node-kind))}
     :position position}))


(comment
  (def handles (-> @(rf/subscribe [:meta-data-registry])
                 :rechart/bar
                 :handles))

  (:inputs handles)


  ())


(defn custom-node
  "build a custom node for the flow diagram, this time for :ui/component, so
  green, since this is a 'view', and one Handle for each input (along the top)
  and output (along the bottom)
  "
  [node-type open-details? node & extras?]
  (let [data                (js->clj node)
        node-id             (get data "id")
        label               (get-in data ["data" "label"])
        kind-of-element     (r/atom (get-in data ["data" "kind"]))
        inputs              (get-in data ["data" "inputs"])
        outputs             (get-in data ["data" "outputs"])
        update-node-kind-fn (get-in data ["data" "update-node-kind-fn"])
        style               (merge default-node-style (node-type node-style))
        [isVisible set-visibility on-change-visibility] (useState false)]

    (log/info "custom-node" label node-type @kind-of-element "///" data "///" inputs "///" outputs "//" extras?)

    (r/as-element

      [:div {:style style :on-mouse-enter #(set-visibility true) :on-mouse-leave #(set-visibility false)}

       [:> NodeResizer {:color "#000000" :isVisible isVisible :minWidth 100 :minHeight 30}]

       (map #(make-handle "target" %) (:inputs (look-up-ui-component @kind-of-element)))

       [:div {:style (merge {:textAlign :center} style)} label]

       (map #(make-handle "source" %) (:outputs (look-up-ui-component @kind-of-element)))])))
