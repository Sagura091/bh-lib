(ns demo.catalog.technologies.overview.data-flow.ui-tutorial
  (:require [woolybear.ad.layout :as layout]))


(defn- the-problem []
  [layout/frame {:extra-classes :is-fluid}
   [:h3 "The Problem"]
   [layout/markdown-block "

   ![Figure x-1. Our objective widget.](/imgs/data-flow/figure/atwiad/atwiad.012.png)

   _Figure x-1. Our objective widget._"]])


(defn- first-steps []
  [layout/frame {:extra-classes :is-fluid}
   [:h3 "First Steps"]
   [layout/markdown-block ""]])


(defn- defining-the-components []
  [layout/frame {:extra-classes :is-fluid}
   [:h3 "Defining the Components"]
   [layout/markdown-block "Start by dragging out the data sources you want to visualize. For this example, we will
   just use a single _remote_ source (one that gets data from the `server`), specifically the source called `:source/measurements`.

   ![Figure x-2. Drag the data source onto the workspace.](/imgs/data-flow/figure/atwiad/atwiad.013.png)

   _Figure x-2. Drag the data source onto the workspace._


   This drops a generic data source. But we wanted `:source/mesurements`. Let's change that now by double-clicking on the
   generic node and editing the popup.

   ![Figure x-3. Edit the source to fetch the correct data, and to give it a more domain specific label.](/imgs/data-flow/figure/atwiad/atwiad.014.png)

   _Figure x-3. Edit the source to fetch the correct data, and to give it a more domain specific label._


   Next, drag out the UI Components you will need. Here we want just a single area-chart.

   ![Figure x-4. Drag out a `:ui/component`.](/imgs/data-flow/figure/atwiad/atwiad.015.png)

   _Figure x-4. Drag out a `:ui/component`._

   Again, we need to change the generic component to the specific we want f0r this example.

   > Note: the generic `:ui/component` actually works! Go ahead and switch back to _widget mode_ and see!


   ![Figure x-5. Rename the ui component the \"area\".](/imgs/data-flow/figure/atwiad/atwiad.016.png)

   _Figure x-5. Rename the ui component the \"area\"._


    "]])


(defn- linking-things []
  [layout/frame {:extra-classes :is-fluid}
   [:h3 "Linking Things"]
   [layout/markdown-block ""]])


(defn- layout-components []
  [layout/frame {:extra-classes :is-fluid}
   [:h3 "Layout"]
   [layout/markdown-block ""]])


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

