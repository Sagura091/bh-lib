(ns demo.catalog.technologies.overview.data-flow-digraph
  (:require [woolybear.ad.layout :as layout]
            [demo.catalog.technologies.overview.data-flow.ui-tutorial :as tutorial]))


(defn- intro []
  [layout/frame {:extra-classes :is-fluid}
   [:h2.has-text-info "Data-flow Oriented Design"]
   [layout/markdown-block
    "> _a system design approach where data is transformed across a collection of 'processes',
> sometimes called 'automata' (nodes) that are connected (edges) via 'channels' (pub/sub, topics,
> queues, function calls, etc.)_

We have developed a mental model of software as a directed graph of data transformations. We see this
model as applicable at al levels of system design (requirements, architecture, modularity, deployment)
and in all aspects of system implementation (front-end, back-end, etc.).

This model fits perfectly within the idiomatic approach promoted by the Clojure functional programing language
we are developing in: transformations of immutable data, glued together into systems. Rich Hickey, creator of Clojure,
strongly promotes the use of queue as a system implementation mechanism (see [here](https://www.youtube.com/watch?v=LKtk3HCgTa8) and
[here](https://www.youtube.com/watch?v=ROor6_NGIWU)) to decouple the elements of computation/transformation.

As can be seen through a survey of dataflow system approaches, this model is often applied only to the 'services' portion,
often called the 'back-end', but we have determined that this approach is perfectly amenable to developing User Interfaces
(UIs), or 'front-ends'. This is a significant shift from how UI development is typically taught and practiced.
"]])


(defn- history []
  [layout/frame {:extra-classes :is-fluid}
   [:h2.has-text-info "How we got here"]
   [layout/markdown-block "The breakthrough came when we recognized that 'molecules', as introduced by Brad Frost as
   part of his [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/),
in chemistry classes are physically modeled using balls and sticks, as show in Figure 1.

![Figure 1. Molecule Modeling Kit](/imgs/data-flow/chemical-modeling-kit.jpeg)

_Figure 1. Molecule Modeling Kit_

Combined with Clojure's, and most other functional programming languages', idiomatic approach promoting system composition from
transformations of data (using map, :topic/target-filter, and reduce), and the Re-frame notion of the
[_signal graph_](https://day8.github.io/re-frame/subscriptions/)
we saw that by placing the Signal Graph center of the design, rather than being a by product of a more typical approach, we
could unlock the power of the directed graph, simplifying both design and implementation.

We can also implement any and all UIs in a single, standard way, using a single, standard software mechanism, rather than
continually developing one-off, custom UI elements and composed widgets.

This approach also means we can apply the same System Engineering approach used for the services on the back-end to the
front-end as well! In fact, the front-end is not really a separate system as it is typically considered in the ad hoc approach, but
just one more collection of transformations of data within the boundary of the 'system' as a whole. However, instead of depositing
the results of a transformation into a database or a channel, queue, or topic, in the case of the UI, the results are converted into
HTML and 'deposited' on the User's display!

> ***Note:*** Although we've developed this sophisticated graph-based capability, and we encourage you to use it,
> all the UI components are still available for use in developing more 'typical' ad-hoc UIs. The Data-flow approach
> is build _on top_ of the basic components. Developers get the best of both worlds!"]])


(defn- transforming-data []
  [layout/frame {:extra-classes :is-fluid}
   [:h2.has-text-info "Transforming Data"]
   [layout/markdown-block "Sticking with our chemistry analogy, chemical processes also perform transformations on the molecules, as
shown in Figure 2.

![Figure 2. Chemical outputs from the combustion of Ethanol](/imgs/data-flow/combustion-reaction-model.jpeg)

_Figure 2. Chemical outputs from the combustion of Ethanol._

Note the arrow! Even in this simple example we can see the flow.


#### Types of transforms:

- filter : select only certain items or just parts of items, based upon some criterion.
- transform : convert the physical format; e.g., vector of hash-maps to vector of vectors, etc.
- augment : add data
- merge : combining two or more data items into a single item
- reduce : materialize a data item from a collection of items (summation, group-by, etc.)

The flow can be defined and visualized as a directed graph (digraph)

One of the keys to designing software using data-flow is to focus on that data at the
beginning (the original source) and the end of the flow (typically the UI or the output)
of a microservice)"]])



;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; region ; Designing a UI with Data-flow
(defn- dev-process []
  [layout/frame {:extra-classes :is-fluid}
   [:h3 "Development Process"]
   [layout/markdown-block "Overall, the approach to developing using this technique is:

1. Identify the original source(s) of data, typically of 'type' `:source/remote`
2. Identify the UI components (i.e., `:ui/component`) to visualize the data
3. Determine the transformations from the source data to the visualization, specifically:
    - filtering
    - additional _enhancing_ data, sometimes called _mix-ins_
    - any re-formatting of the data (rearranging fields, changing hash-map keys, etc.)
4. Connect the various nodes to each other, from sources, through transformations, and into the UI components

One way to think of this is as a _directed graph_, with the sources at the top and the UI at the bottom;
the data flows _down hill_.

![Figure 3. A simplified directed graph of a UI.](/imgs/data-flow/figure/atwiad/atwiad.023.png)

_Figure 3. A simplified directed graph of a UI._"]])


(defn- ui-design []
  [layout/frame {:extra-classes :is-fluid}
   [:h3 "Designing a UI " [:span [:i "Widget"]]]
   [layout/markdown-block "The very simplest example is to take a single source and connect it directly to a UI component without
any additional processing, so:

![Figure 4a. Simplest possible UI example visualized as a directed graph.](/imgs/data-flow/simplest-digraph-model.png)
![Figure 4b. A UI can also be visualized as an Event Model.](/imgs/data-flow/simplest-event-model.png)

_Figure 4. Simplest possible UI example visualized as a Directed Graph or as an Event Model._

As you can see, we have a single `:source/remote`, which we will call `:source/data` and a single UI
components, which we will call `:ui/table`. By design, we give each element of the model a
name (`:source/data` and `:ui/table`) so we can refer to them throughout the definition.

It is also possible to visualize the same UI as an Event Model. As you can see, the Event Model shows the
UI element, called the 'View' in EM-speak, with the data source at the bottom, represented as line, showing the data as an 'Event',
hence the Orange color

Each element also has a _type_ which tells the processing logic how to actually implement the required logic.
Our toolkit provides dozens of pre-built data and UI components, and you can always develop your own.


In Our system, UI element are described like this:

``` clojure
(def ui-definition
  {:mol/components   {\"data\"  {:atm/role :source/remote :atm/kind :source/measurements}
                      \"chart\" {:atm/role :ui/component :atm/kind :rechart/bar}}

   :mol/links        {\"data\" {:data {\"chart\" :data}}}

   :mol/grid-layout  [{:i \"chart\" :x 0 :y 0 :w 10 :h 10 :static true}]})
```

Additionally, this data structure can also be used to track the visualization affordance we provide
to developer, designer, and even users to create and edit the DSL defining a User Interface. Since the
visualization is also built upon these same principles (do you expect anything else?), we track the
_nodes_ and _edges_ of this alternate visualization:

``` clojure
   :mol/flow-nodes [{:id \"bar-chart\"
                     :type \":ui/component\"
                     :data {:label \"bar-chart\"
                            :kind :rechart/bar
                            :kind-js \":rechart/bar\"
                            :children [nil nil]
                            :inputs {:data {:label \"data-in\" :style {:left 10 :background \"#555\"} :position \"top\"}
                                     :config {:label \"config-in\" :style {:left 20 :background \"#555\"} :position \"top\"}}
                            :outputs {}}
                     :position {:x 25.5, :y 69.5}}
                    {:id \"data\"
                     :type \":source/remote\"
                     :data {:label \"data\"
                            :kind :source/measurements
                         :kind-js \":source/measurements\"
                         :children [nil nil]
                         :inputs {}
                         :outputs {:data {:label \"data-out\" :style {:left 10 :background \"#555\"} :position \"bottom\"}}
                  :position {:x -13.5, :y -43.5}}}]

   :mol/flow-edges [{:targetHandle \"data-in\",
                     :animated false,
                     :source \"data\",
                     :style {:strokeWidth 1, :stroke :black},
                     :markerEnd {:type \"arrowclosed\", :width 10, :height 10, :color :black},
                     :label \"\",
                     :id \"edge-0\",
                     :sourceHandle \"\",
                     :target \"chart\"}]
"]])


(defn- components []
  [layout/frame {:extra-classes :is-fluid}
   [:h3 "Components"]
   [layout/markdown-block "The `:component` section describes the individual building block (think LEGO) that make up the
working part of the UI
data-flow. These are the things that do the work: draw the UI, compute values, represent data fetched (subscribed really)
from servers, etc.

##### `:ui/component`

identifies the UI elements that your Users works with to view and interact with data in the system.

##### `:source/remote` and `:source/local`

are components that both represent data available to use
within your system, and the represent the software mechanisms necessary to access and manage
such data.

##### `:source/fn`

is a _function_, literally a function in the source code, that provides any type of
manipulation or transformation of the various data items within the system. For example, if you have some data that
represents some organization that you will want to display on a 3D map, your User might like to control the color and perhaps
shape to draw for each, making it easy to visually distinguish each item. The original data, perhaps the `:source/remote`
should ***NOT*** contains this kind of _visual-only_ data, it should be _mixed-in_ just before your user wants to view it. The
actual enhancement of the original data with the visually-oriented data should happen in a `:source/fn`.

Typically, you'll want to start by defining either the `:ui/components` or the `:source/remote` data elements, since these tend to
drive the purpose of the overall UI _widget_. They identify what you User wants to see (`:source/remote`) and how they will be able
to see it (`:ui/component`).

Next, you might start to wire your remote data to your UI elements (see _Links_). Quickly, you'll find that you need to introduce
some `:source/locals` or `:source/fns` (or more likely both) for one of the following reasons:

1. You want to move data from one `:ui/component` to another
2. You want to add (`assoc`), remove (`filter`), or transform (`map` or `reduce`) some data so it is fit for some other purpose

Now wou can start to _invent_ these components, since they only exist within the scope of the UI _widget_ you are designing.
"]])


(defn- links []
  [layout/frame {:extra-classes :is-fluid}
   [:h3 "Links"]
   [layout/markdown-block "`:mol/links` describe how the different parts of the _widget_ connect to
and communicate with each other, turning a picture of
'blocks' into a directed graph. In the case of the UI, each component can be designed with multiple input and multiple outputs.

This is further described by metadata stored in a run-time registry.

#### Grid Layout

`:mol/grid-layout` describe how the various bh-uis, the tables, charts, diagrams,
etc. are to be arranged visually on the display. We use a user-customizable graph component (built in ReactJS) for doing
the actual presentation on the display."]])


(defn- putting-it-together []
  [layout/frame {:extra-classes :is-fluid}
   [:h3 "Putting it Together"]
   [layout/markdown-block "Figure 5 shows how the different parts of the textual DSL are mapped to the 2 visual representations:
*visual* (i.e., a widget) and *DSL* (showing the data flow through the UI and allowing the user to edit that flow).

![Figure 5. Mapping the DSL to the visual representations.](/imgs/data-flow/figure/atwiad/atwiad.011.png)

_Figure 5. Mapping the DSL to the visual representations._
   "]])


(defn- more-details []
  [layout/frame {:extra-classes :is-fluid}
   [:h3 "More Details"]
   [layout/markdown-block "The actual software element that implements these component,
for example :rechart/bar."]])


(defn- data-flow-ui []
  [layout/frame {:extra-classes :is-fluid}
   [:h2.has-text-info "Visually designing a UI with Black Hammer"]
   [layout/markdown-block "Since we are working in Clojure, and using Re-frame in the UI, we take advantage of the Re-frame Signal Graph,
using the [Layer 2 'Extractors' and Layer 3 'Materialized Views'](https://day8.github.io/re-frame/subscriptions/#the-four-layers)
as the primary mechanisms for the various data transformations needed to support the UI.

Layer 2 extractors are used for remote sources (`:source/remote`), while Layer 3 materialized views provide
the computational logic to produce the values for use with `:source/local`.

Layer 4, the View Functions, are provided by the various UI Components we have developed. The demo.catalog
show them and how they can be used, but within the Data-flow implementation, or more 'manually' as part
of some custom UI.

The 'magic' is that our implementation build the Layer 3 subscriptions programmatically, based upon the structure of the data
you define for the intermediary, what we call a `:source/local`. In those cases where you must perform some custom logic,
you also inject a `:source/fn` or 'source function' to produce the data, and the output can then be fed into other Layer 3 or
even Layer 4 subscriptions, depending upon how you wire everything together in the graph."]

   [dev-process]

   [ui-design]

   [components]

   [links]

   [putting-it-together]

   [more-details]])

;; endregion


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; region ; Microservices

(defn- microservices []
  [layout/frame {:extra-classes :is-fluid}
   [:h2.has-text-info "Building Microservices"]
   [layout/markdown-block "Microservices (which are based upon [Willa](https://github.com/DaveWM/willa)), look like this:

```
(def sudoku-service
  {:entities {:topic/event-in        (assoc rpl-puzzle-topic ::w/entity-type :topic)
              :stream/solve-puzzle   {::w/entity-type :kstream
                                      ::w/xform       sudoku-pipeline}
              :topic/answer-out      (assoc rpl-solution-topic ::w/entity-type :topic)}

   :workflow [[:topic/event-in :stream/solve-puzzle]
              [:stream/solve-puzzle :topic/answer-out]]})
```

It's easy to see the relative similarities between this notation and the one we use for developing UI \"widgets\" two description.
Let's look at each part individually.

"]])


;; endregion


(defn- other-approaches []
  [layout/frame {:extra-classes :is-fluid}
   [:h2.has-text-info "Other Similar Approaches"]
   [layout/markdown-block
    "
- [Event Modeling](https://eventmodeling.org)
- [Stream processing](https://en.wikipedia.org/wiki/Stream_processing)
- [Reactive programming](https://en.wikipedia.org/wiki/Reactive_programming)
- [LabView](https://www.ni.com/getting-started/labview-basics/dataflow)
- [Power BI](https://en.wikipedia.org/wiki/Microsoft_Power_BI)
- [Lucid programming language](https://en.wikipedia.org/wiki/Lucid_(programming_language))
- [Petri Nets](https://en.wikipedia.org/wiki/Petri_net)
- [React](https://reactjs.org/)
- [Re-frame](https://day8.github.io/re-frame/re-frame/)"]])


(defn- additional-links []
  [layout/frame {:extra-classes :is-fluid}
   [:h2.has-text-info "Additional Concepts"]
   [layout/markdown-block
    "
### [Dataflow (Wikipedia)](https://en.wikipedia.org/wiki/Dataflow)

Per [Wikipedia](https://en.wikipedia.org/wiki/Dataflow), Dataflow is defined as

  > _\"Dataflow computing is a software paradigm based on the idea of representing computations as
  > a directed graph, where nodes are computations and data flow along the edges.\"_

This precisely matches out conception at all level of Black Hammer's design; system, service, and user
interface composition.

Related concepts include [Dataflow programming](https://en.wikipedia.org/wiki/Dataflow_programming) and
[Flow-based programming](https://en.wikipedia.org/wiki/Flow-based_programming),
which have specific relevance to our Black Hammer concept.


### [Dataflow programming (Wikipedia)](https://en.wikipedia.org/wiki/Dataflow_programming)



### [Kahn process network (Wikipedia)](https://en.wikipedia.org/wiki/Kahn_process_networks)


### [Structure and Interpretation of Computer Programs (SICP)](https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/6515/sicp.zip/index.html)
SICP begins ([Lecture 1A](https://www.youtube.com/watch?v=2Op3QLzMgSY&list=PL8FE88AA54363BC46&index=2))
with the notion of a programming language or paradigm, as defined by

1) The Primitive Elements
2) Means of Combination
3) Means of Abstraction

Let's look at how Black Hammer could be defined in these terms.


#### Primitive Elements of Black Hammer

Black Hammer is built upon, and best conceptually understood using, a functional programming model. This means that the
**primitive elements** are _functions_. It is



#### Means of Combination in Black Hammer

Again, since Black Hammer is build on a function basis, the **means of combination** is the function calling interface, which
in Black Hammer is represented graphically as the the interconnections between the nodes (primative elements), i.e., the _links_.



#### Means of Abstraction in Black Hammer

If we extend our notion of functional programming to a combination of function applications:

  h :: g(f(x))       (_h is defined as g(f(x))_)

which we can represent graphically as

![Figure 3. Graphical representation of h :: g(f(x))](/imgs/data-flow/figure/atwiad/atwiad.010.png)

_Figure 3. Graphical representation of h :: g(f(x))._

This means we can consider a directed graph, or any subgraph of a larger directed graph, as a single function.
This is just another application of _[Referential Transparency](https://en.wikipedia.org/wiki/Referential_transparency)

Using this technique we can condense large, complex graphs into a graph of a smaller collection of function nodes,
where each node represents a compete directed subgraph. This works both visually and within any textual representation
of the directed graph, at any level. In mathematical terms, we can [decompose](https://www.youtube.com/watch?v=BiLjdZYj_RI)
a graph into many subgraphs.

It also works in the other direction; multiple graphs can be composed into a single graph mathematically. This
afford this abstraction/approach a tremendous amount of power.





"]])


(defn- reactive-programming []
  [layout/frame {:extra-classes :is-fluid}
   [:h2.has-text-info "Reactive Programming"]
   [layout/markdown-block
    "Another key part of our approach, and one which tied tightly with our Data-flow approach, is
to use 'reactive programming' techniques. Specifically, our approach is 'reactive' in the sense that
a change to the inputs automatically triggers a re-computation of the outputs. This is what drives
our 'data flows _downhill_' analogy for our directed-graph visualization and mental model.

An easy way to see this in action is to look at what happens behind the scenes in any dataflow-based UI
that includes a `:source/remote`.


See also

- [Reactive Programming](https://en.wikipedia.org/wiki/Reactive_programming)
- [Functional Reactive Programming](https://en.wikipedia.org/wiki/Functional_reactive_programming)
- [Stream Processing](https://en.wikipedia.org/wiki/Stream_processing)

"]])



(defn page []
  [layout/page {:extra-classes :is-fluid}
   [:div.is-fluid
    [intro]

    [history]

    [transforming-data]

    [data-flow-ui]

    [tutorial/tutorial]

    [microservices]

    [other-approaches]

    [additional-links]

    [reactive-programming]]])





