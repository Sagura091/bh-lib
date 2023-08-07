(ns bh-ui.molecule.composite.util.digraph
  "Expand on the configuration, computing denormalized data, the [Loom](https://github.com/aysylu/loom)
  digraph, etc. This enriched data is used in later stages of the Molecule-DSL 'interpreter'

  > Note: you won't find anything called the 'Interpreter', its just a term for the code that reads the
  Mol-DSL and transforms it into the functions that actually provide the run-time effects described in
  component definition.
  "
  (:require [day8.re-frame.tracing :refer-macros [fn-traced]]
            [loom.graph :as lg]
            ["dagre" :as dagre]
            ["graphlib" :as graphlib]
            ["reactflow" :refer (ReactFlowProvider Controls Handle Background)]))


(defn expand-components
  "Expand the Mol-DSL describing the UI 'widget' to the specific functions that provide the run-time implementation (i.e.,
  the 'interpreter'

  - data : (hash-map) the Mol-DSL definition of the 'widget'
  - registry : (hash-map) registry mapping the 'type' of component (defined by :atm/kind) to the function that provides the run-time implementation (also includes information about in/out ports and some other things).
  "

  [data registry]

  (let [components (:mol/components data)]
    (->> data
      :mol/components
      (map (fn [[id meta-data]]
             {id (assoc meta-data
                   :ports
                   (condp = (:atm/role meta-data)
                     :ui/component (->> components id :atm/kind registry :ports)
                     :source/remote {:port/pub-sub :data}
                     :source/local {:port/pub-sub :data}
                     :source/fn (:ports meta-data)))}))
      (assoc data :mol/components))))


(defn get-predecessor-name
  "
  "

  [links graph source target]

  ;(log/info "pred" source target "//" graph)
  (->> links
    (filter (fn [[s _]]
              (and (contains? (lg/predecessors* graph source) s)
                (= s target))))
    vals
    first
    keys
    first))


(defn get-successor-name
  "Returns the name of the 'target' node that follows the 'source' node

  - links : (hash-map) the :mol/links value from the original Mol-DSL definition
  - graph : (Loom graph) representation of the entire definition (nodes & edges)
  - source : (keyword/string) the unique identifier of the node at the _start_ of the link, as defined in :mol/components
  - target : (keyword/string) the unique identifier of the node at the _end_ of the link, as defined in :mol/components
  "

  [links graph source target]
  (->> links
    source
    (filter (fn [[s _]]
              (contains? (lg/successors* graph source) target)))
    vals
    first
    vals
    first))


(defn get-inputs
  "get all the inputs to the given node (these are 'predecessor nodes')

  we grab the node's predecessors, and format the data correctly:

  {<source> [<node's-port> <source's-port>]
   <source> [<node's-port> <source's-port>]}


  - links : (hash-map) the :mol/links value from the original Mol-DSL definition
  - graph : (Loom graph) representation of the entire definition (nodes & edges)
  - node : (keyword/string) the unique identifier of the node, as defined in :mol/components
  "

  [links graph node]
  (->> node
    (lg/predecessors* graph)
    (map (fn [p]
           ; 1. grab the target meta-data for each source
           (apply merge
             (map (fn [[source-port targets]]
                    (let [target-port (get targets node)]
                      {p [source-port target-port]}))
               (get links p)))))
    (into {})))


(defn get-outputs
  "get all the outputs of the given node

  these are given directly by the links, but need reformatting from:

  {<source's-port> {<target> <target's-port>
                    <target> <target's-port>}}

  to:

  {<target> [<node's-port> <target's-port>]
   <target> [<node's-port> <target's-port>]}

  - links : (hash-map) the :mol/links value from the original Mol-DSL definition
  - node : (keyword/string) the unique identifier of the node, as defined in :mol/components
  "
  [links node]

  (->> links
    ((fn [n] (get n node)))
    (map (fn [[node-port target-meta]]
           (apply merge
             (map (fn [[target target-port]]
                    {target [node-port target-port]})
               target-meta))))
    (apply merge)))


(defn denorm-components
  "denormalize the links between components by mixing in additional information about the
  ports at both ends of the inter-connection:

  {<node> {:inputs  {<source> [<node's-port> <source's-port>]
                     <source> [<node's-port> <source's-port>]}
           :outputs {<target> [<node's-port> <target's-port>]
                     <target> [<node's-port> <target's-port>]}}

  - graph : (Loom graph) representation of the entire definition (nodes & edges)
  - links : (hash-map) the :mol/links value from the original Mol-DSL definition
  - node : (keyword/string) the unique identifier of the node, as defined in :mol/components
  "
  [graph links nodes]
  (->> nodes
    (map (fn [node]
           {node
            {:inputs  (get-inputs links graph node)
             :outputs (get-outputs links node)
             :params  {}}}))
    (into {})))

