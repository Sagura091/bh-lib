(ns demo.src.catalog.technologies.systems-services
  (:require [demo.src.catalog.technologies.overview.event-modeling :as event-modeling]
            [demo.src.catalog.technologies.overview.kafka :as kafka]
            [demo.src.catalog.technologies.overview.micro-services :as micro-services]
            [demo.src.catalog.technologies.overview.re-frame-10x :as re-frame-10x]
            [demo.src.catalog.technologies.overview.swagger :as swagger]
            [re-com.core :as rc]
            [woolybear.ad.layout :as layout]))


(defn page []

  [layout/page {:extra-classes :is-fluid}
   [:h2.has-text-info "System / Services"]
   [layout/markdown-block
    "We use a number of techniques, technologies, and tools to provide critical system-level functionality:

> For a short video summary of event-driven design as the backbone of a microservice architecture in Clojure, [click here](https://www.youtube.com/watch?v=ZEcjEHYs0zo)
"]
   [rc/gap :size "8px"]

   [layout/frame {:extra-classes :is-fluid}
    [event-modeling/overview]]

   [layout/frame {:extra-classes :is-fluid}
    [micro-services/overview]]

   [layout/frame {:extra-classes :is-fluid}
    [kafka/overview]]

   [layout/frame {:extra-classes :is-fluid}
    [swagger/overview]]

   [layout/frame {:extra-classes :is-fluid}
    [re-frame-10x/overview]]])
