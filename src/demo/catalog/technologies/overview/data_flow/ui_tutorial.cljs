(ns demo.catalog.technologies.overview.data-flow.ui-tutorial
  (:require [woolybear.ad.layout :as layout]))


(defn- the-problem []
  [layout/frame {:extra-classes :is-fluid}
   [:h3 "The Problem"]
   [layout/markdown-block "As a user, your particular _system_ manages any number of data sources and view, making some or
   all of them available for analysis and visualization. For this example, we want to view the source called `:source/measurements`
   as a \"area chart\", as show in Figure x-1 below.

   ![Figure x-1. Our objective widget.](/imgs/data-flow/figure/atwiad/atwiad.012.png)

   _Figure x-1. Our objective widget._


   So how can we build it using the Black Hammer toolkit?"]])


(defn- first-steps []
  [layout/frame {:extra-classes :is-fluid}
   [:h3 "First Steps"]
   [layout/markdown-block "
   > This will have some discussion of the various :sources and :ui/components available, and
   > possibly some discussion of how a user can view the possibilities (do we have a mechanism _outside_ the DSL editor?)"]])


(defn- defining-the-components []
  [layout/frame {:extra-classes :is-fluid}
   [:h3 "Defining the Components"]
   [layout/markdown-block "Start by dragging out the data sources you want to visualize. For this example, we will
   just use a single _remote_ source (one that gets data from the `server`), specifically the source called `:source/measurements`.

   ![Figure x-2. Drag the data source onto the workspace.](/imgs/data-flow/figure/atwiad/atwiad.013.png)

   _Figure x-2. Drag the data source onto the workspace._




   This drops a generic data source. But we wanted `:source/mesurements`. Let's change that now by double-clicking on the
   generic node and editing the popup.

   ![Figure x-3. Edit the source to fetch the correct data, and to give it a more meaningful label.](/imgs/data-flow/figure/atwiad/atwiad.014.png)

   _Figure x-3. Edit the source to fetch the correct data, and to give it a more meaningful label._




   Next, drag out the UI Components you will need. Here we want just a single \"Area chart\".

   ![Figure x-4. Drag out a `:ui/component`.](/imgs/data-flow/figure/atwiad/atwiad.015.png)

   _Figure x-4. Drag out a `:ui/component`._




   Again, we will to change the generic component to the specific type we want, for this example it's an \"Area chart\".

   > Note: the generic `:ui/component` actually works! Go ahead and switch back to _widget mode_ and see!

   ![Figure x-5. Rename the ui component to `:rechart/area`.](/imgs/data-flow/figure/atwiad/atwiad.016.png)

   _Figure x-5. Rename the ui component to `:rechart/area`._


    "]])


(defn- linking-things []
  [layout/frame {:extra-classes :is-fluid}
   [:h3 "Linking Things"]
   [layout/markdown-block "
   Finally, we can draw a link between the data source and the chart:


   ![Figure x-1. Connecting the node on the diagram inserts the correct information into the DSL.](/imgs/data-flow/figure/atwiad/atwiad.017.png)

   _Figure x-1. Connecting the node on the diagram inserts the correct information into the DSL._


   That's it! Click the \"widget mode\" button and you should see the data start flowing within a few seconds
   and the chart will update accordingly."]])


(defn- layout-components []
  [layout/frame {:extra-classes :is-fluid}
   [:h3 "Layout"]
   [layout/markdown-block "And here is how it looks when done.

   ![Figure x-1. The finished widget.](/imgs/data-flow/figure/atwiad/atwiad-vid-001.png)

   _Figure x-1. The finished widget._"]])


(defn- testing-and-troubleshooting []
  [layout/frame {:extra-classes :is-fluid}
   [:h3 "Testing and Troubleshooting"]
   [layout/markdown-block ""]])


(defn tutorial []
  [layout/frame {:extra-classes :is-fluid}
   [:h2.has-text-info "Let's Build One!"]
   [layout/markdown-block
    ""]

   [the-problem]

   [first-steps]

   [defining-the-components]

   [linking-things]

   [layout-components]

   [testing-and-troubleshooting]])

