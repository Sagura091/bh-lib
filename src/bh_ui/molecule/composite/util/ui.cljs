(ns bh-ui.molecule.composite.util.ui
  (:require [bh-ui.atom.diagram.diagram.dagre-support :as dagre]
            [bh-ui.molecule.composite.util.signals :as sig]
            [bh-ui.utils.locals :as ul]
            [reagent.core :as r]
            [day8.re-frame.tracing :refer-macros [fn-traced]]
            [taoensso.timbre :as log]
            ["reactflow$default" :as ReactFlow]
            ["reactflow" :refer (ReactFlowProvider MiniMap Controls
                                  Handle MarkerType
                                  NodeToolbar NodeResizer
                                  Background
                                  applyNodeChanges
                                  applyEdgeChanges
                                  useNodesState
                                  useEdgesState
                                  useCallBack Handle Position)]))


(log/info "bh-ui.molecule.composite.util.ui")


(def last-params (atom nil))
(def last-flow-edge (atom nil))


(def handle-style {:width "8px" :height "8px" :borderRadius "50%"})
(def default-node-style {:padding      "3px" :max-width "180px"
                         :borderRadius "5px" :margin :auto
                         :background   :white :color :black})
(def node-style {:ui/component  {:background :green :color :white}
                 :source/remote {:background :orange :color :black}
                 :source/local  {:background :salmon :color :black}
                 :source/fn     {:background :pink :color :black}})


(defn- open-details [open-details? node]
  (reset! open-details? (js->clj node)))
;(log/info "open-details" @open-details?))


(defn- get-handle-in [config id port]
  ;(log/info "get-handle-in" id port)
  (let [kind (get-in config [:mol/components id :atm/kind])]
    (get-in (bh-ui.atom.component-registry/lookup-component kind)
      [:handles :inputs port])))


(defn- get-handle-out [config id port]
  ;(log/info "get-handle-out" id port)
  (let [kind (get-in config [:mol/components id :atm/kind])]
    (get-in (bh-ui.atom.component-registry/lookup-component kind)
      [:handles :outputs port])))


(defn create-flow-node
  "convert the nodes, currently organized by Loom (https://github.com/aysylu/loom), into
  the format needed by react-flow (https://reactflow.dev)
  "
  [configuration node-id]

  (reset! last-params {:config configuration :id node-id})

  (let [node-role (get-in configuration [:mol/components node-id :atm/role])
        node-kind (get-in configuration [:mol/components node-id :atm/kind])
        children (merge []
                   (get-in configuration [:mol/components node-id :atm/child])
                   (get-in configuration [:mol/components node-id :atm/children]))
        ret {:id       (str node-id)
             :type     (str node-role)
             :data     {:label   (str node-id)
                        :kind    node-kind
                        :kind-js (str node-kind)
                        :children children
                        :inputs  (-> configuration
                                   (get-in [:mol/components node-id :atm/kind])
                                   bh-ui.atom.component-registry/lookup-component
                                   :handles
                                   :inputs
                                   (#(into {} %)))
                        :outputs (-> configuration
                                   (get-in [:mol/components node-id :atm/kind])
                                   bh-ui.atom.component-registry/lookup-component
                                   :handles
                                   :outputs
                                   (#(into {} %)))}
             :position {:x 0 :y 0}}]

    (log/info "create-flow-node" node-id "///" node-role "///" node-kind "///" ret)

    ret))


(defn create-flow-edge
  "convert the edges, currently organized by Loom (https://github.com/aysylu/loom), into
  the format needed by react-flow (https://reactflow.dev)
  "
  [configuration idx [source-id target-id :as edge]]

  (reset! last-flow-edge {:config configuration :source-id source-id :target-id target-id :edge edge})

  (let [[source-port target-port] (get-in configuration [:denorm source-id :outputs target-id])
        {source-handle :label} (get-handle-out configuration source-id source-port)
        {target-handle :label} (get-handle-in configuration target-id target-port)]

    ;(log/info "create-flow-edge" idx "/" source-id "/" source-port "/" source-handle
    ;  "///" target-id "/" target-port "/" target-handle)

    {:id            (str "edge-" idx)
     :source        (str source-id)
     :sourceHandle  (str source-handle)
     :target        (str target-id)
     :targetHandle  (str target-handle)
     :label         (str source-handle)
     :style         {:strokeWidth 1 :stroke :black}
     :arrowHeadType "arrowclosed"
     :animated      false}))


(defn compute-edges
  "pull out just the relevant information from the configuration, so it can be passed into Loom and
  the interconnected digraph can be built
  "
  [configuration]
  (->> configuration
    :mol/links
    (mapcat (fn [[entity links]]
              (mapcat (fn [[source-port targets]]
                        (map (fn [[target target-port]]
                               [entity target])
                          targets))
                links)))
    (into [])))


(defn make-flow
  "take the Loom graph and turn it into what react-flow needs to draw it onto the display
  "
  [configuration]

  ;(log/info "make-flow (a)" (keys configuration))

  (let [flow {:nodes (map #(create-flow-node configuration %) (:nodes configuration))
              :edges (map-indexed (fn [idx node]
                                    (create-flow-edge configuration idx node))
                       (:edges configuration))
              :rankdir "TB"
              :align "UL"}]

    ;(log/info "make-flow (b)" (first (:nodes flow)))

    (dagre/build-layout flow)))


(defn prep-environment [configuration component-id registry]
  ;(log/info "prep-environment" component-id)

  ; 1. remote subscriptions (including the remote call)
  ;
  ; [SIDE EFFECT]
  (sig/process-components configuration :source/remote registry component-id)

  ; 2. build the subscription for the "container" which provide the basis for the
  ;     subscriptions for the "locals"
  ;
  ; [SIDE EFFECT]
  (ul/create-container-sub component-id)
  (ul/create-container-local-sub component-id [:blackboard] {})

  ; 3. add blackboard data to the app-db and build local subscriptions/events against the blackboard
  ;
  ; [SIDE EFFECT]
  (sig/process-components configuration :source/local registry component-id)

  ; 4. local functions (to build subscriptions against the blackboard or remotes)
  ;
  ; [SIDE EFFECT]
  (sig/process-components configuration :source/fn registry component-id))



; fix create-flow-edge
(comment

  (do
    (def configuration (:config @last-params))
    (def node-id (:id @last-params))
    (def node-details (:details @last-params)))



  (do
    (def configuration (:config @last-flow-edge))
    (def source-id (:source-id @last-flow-edge))
    (def target-id (:target-id @last-flow-edge))
    (def edge (:edge @last-flow-edge)))


  (-> configuration
    :denorm
    (get source-id)
    :outputs
    (get target-id)
    first)

  (get-in configuration [:denorm source-id :outputs target-id])


  (->> configuration
    :mol/links
    (mapcat (fn [[entity links]]
              (mapcat (fn [[source-port targets]]
                        (map (fn [[target target-port]]
                               [entity target])
                          targets))
                links)))
    (into []))



  ())



; build handles (for edge connections) from :ports
(comment
  (do
    (def configuration (:config @last-params))
    (def config configuration)
    (def node-id (:id @last-params))
    (def id node-id)
    (def port :data)
    (def node-details (:details @last-params)))

  (get-in configuration [:denorm node-id])

  (def inputs (->> configuration
                (get-in [:denorm node-id :atm/kind])
                (bh-ui.atom.component-registry/lookup-component)
                :handles
                :inputs
                (#(into {} %))))

  (def outputs (-> configuration
                 (get-in [:mol/components node-id :atm/kind])
                 (bh-ui.atom.component-registry/lookup-component)
                 :handles
                 :outputs
                 (#(into {} %))))

  (-> configuration
    (get-in [:mol/components node-id :atm/kind]))

  (bh-ui.atom.component-registry/lookup-component :source/local)

  (-> configuration
    (get-in [:mol/components node-id :atm/kind])
    (bh-ui.atom.component-registry/lookup-component)
    :handles
    :outputs)



  (->>
    (get-in configuration [:denorm node-id :outputs])
    (map (fn [[k [source-port _]]]
           {k source-port}))
    (into {}))



  (get-in config [:mol/components
                  id
                  :atm/kind])

  (def kind (get-in config [:mol/components id :atm/kind]))
  (def comp (get-in (bh-ui.atom.component-registry/lookup-component kind)
              [:handles :outputs port]))


  ())



; gather child/children of :ui/container nodes
(comment
  (do
      (def configuration (:config @last-params))
      (def config configuration)
      (def node-id (:id @last-params))
      (def id node-id)
      (def port :data)
      (def node-details (:details @last-params)))

  (merge []
    (get-in configuration [:mol/components node-id :atm/child])
    (get-in configuration [:mol/components node-id :atm/children]))


  ())
