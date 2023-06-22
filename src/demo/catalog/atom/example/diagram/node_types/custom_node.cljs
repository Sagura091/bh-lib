(ns demo.catalog.atom.example.diagram.node-types.custom-node
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            ["reactflow" :refer (Handle Position NodeToolbar NodeResizer)]
            [taoensso.timbre :as log]
            ["react" :refer (useState)]
            [re-com.core :as rc]
            [bh-ui.atom.re-com.label :as label]))


(log/info "demo.catalog.atom.example.diagram.node-types.custom-node")


(def handle-style {:width "8px" :height "8px" :borderRadius "50%"})
(def node-style {:ui/component  {:background :green :color :white}
                 :source/remote {:background :orange :color :black}
                 :source/local  {:background :blue :color :white}
                 :source/fn     {:background :pink :color :black}})
(def default-node-style {:minHeight    "20px"
                         :minWidth     "100px"
                         :width        "100%"
                         :height       "100%"
                         :borderRadius "5px" :margin :auto
                         :background   :white :color :black})


(defn- open-details [open-details? node]
  (reset! open-details? (js->clj node)))


(defn string->keyword [s]
  (if (clojure.string/index-of (subs s 1) "/")
    (keyword
      (subs (subs s 1)
        0 (clojure.string/index-of (subs s 1) "/"))
      (subs (subs s 1)
        (inc (clojure.string/index-of (subs s 1) "/"))))
    (keyword
      (subs s 1))))


(defn- handle [id t style position isConnectable]
  (log/info "handle" id t style)
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
    (get (string->keyword node-type))
    :handles))

(comment
  (def node-type ":rechart/line")
  (def node-type ":line")

  (subs node-type 1)
  (clojure.string/index-of (subs node-type 1) "/")
  (subs (subs node-type 1)
    0 (clojure.string/index-of (subs node-type 1) "/"))
  (subs (subs node-type 1)
    (inc (clojure.string/index-of (subs node-type 1) "/")))

  (if (clojure.string/index-of (subs node-type 1) "/")
    (keyword
      (subs (subs node-type 1)
        0 (clojure.string/index-of (subs node-type 1) "/"))
      (subs (subs node-type 1)
        (inc (clojure.string/index-of (subs node-type 1) "/"))))
    (keyword
      (subs node-type 1)))

  (string->keyword ":source/fn")

  (look-up-ui-component ":source/fn")


  ())



(defn node-data [node-type node-id node-kind position]
  (log/info "node-data" node-type node-id node-kind)

  (let [handles (-> @(rf/subscribe [:meta-data-registry]) node-kind :handles)]
    {:id       node-id
     :type     node-type
     :data     {:label   node-id
                :kind    node-kind
                :inputs  (:inputs handles)                  ;(:inputs (get ui-component-registry-almost node-kind))
                :outputs (:outputs handles)}                ;(:outputs (get ui-component-registry-almost node-kind))}
     :position position}))


(defn custom-node
  "build a custom node for the flow diagram, this time for :ui/component, so
  green, since this is a 'view', and one Handle for each input (along the top)
  and output (along the bottom)
  "
  [node-type open-details? node & extras?]
  (let [data                (js->clj node)
        node-id             (get data "id")
        text                (get-in data ["data" "label"])
        kind-of-element     (r/atom (get-in data ["data" "kind"]))
        inputs              (get-in data ["data" "inputs"])
        outputs             (get-in data ["data" "outputs"])
        update-node-kind-fn (get-in data ["data" "update-node-kind-fn"])
        style               (merge default-node-style (node-type node-style))
        handles             (look-up-ui-component @kind-of-element)
        [isVisible set-visibility on-change-visibility] (useState false)]

    (log/info "custom-node" text node-type @kind-of-element (type node-type)
      "///" handles)
      ;"///" data
      ;"///" inputs
      ;"///" outputs
      ;"//" extras?)

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
