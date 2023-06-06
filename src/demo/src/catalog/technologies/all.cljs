(ns demo.src.catalog.technologies.all
  (:require [demo.src.catalog.technologies.overview.compojure :as compojure-overview]
            [demo.src.catalog.technologies.overview.component :as component-overview]
            [demo.src.catalog.technologies.overview.jackdaw :as jackdaw-overview]
            [demo.src.catalog.technologies.overview.kafka :as kafka]
            [demo.src.catalog.technologies.overview.next-jdbc :as next-jdbc-overview]
            [demo.src.catalog.technologies.overview.re-com :as re-com]
            [demo.src.catalog.technologies.overview.re-frame :as re-frame]
            [demo.src.catalog.technologies.overview.reagent :as reagent]
            [demo.src.catalog.technologies.overview.recharts :as recharts]
            [demo.src.catalog.technologies.overview.ring :as ring-overview]
            [demo.src.catalog.technologies.overview.sente :as sente-overview]
            [demo.src.catalog.technologies.overview.swagger :as swagger]
            [demo.src.catalog.technologies.overview.transit :as transit-overview]
            [demo.src.catalog.technologies.overview.woolybear :as woolybear]
            [re-com.core :as rc]
            [woolybear.ad.layout :as layout]))


(defn page []
  [layout/page {:extra-classes :is-fluid}
   [:h2.has-text-info "All"]
   [layout/text-block "An overview of many of the technologies we use in RCCST"]
   [rc/gap :size "8px"]

   [layout/frame {:extra-classes :is-fluid}
    [ring-overview/overview]]
   [layout/frame {:extra-classes :is-fluid}
    [compojure-overview/overview]]
   [layout/frame {:extra-classes :is-fluid}
    [component-overview/overview]]
   [layout/frame {:extra-classes :is-fluid}
    [sente-overview/overview]]
   [layout/frame {:extra-classes :is-fluid}
    [transit-overview/overview]]
   [layout/frame {:extra-classes :is-fluid}
    [next-jdbc-overview/overview]]
   [layout/frame {:extra-classes :is-fluid}
    [jackdaw-overview/overview]]

   [layout/frame {:extra-classes :is-fluid}
    [reagent/overview]]
   [layout/frame {:extra-classes :is-fluid}
    [re-frame/overview]]
   [layout/frame {:extra-classes :is-fluid}
    [re-com/overview]]
   [layout/frame {:extra-classes :is-fluid}
    [woolybear/overview]]
   [layout/frame {:extra-classes :is-fluid}
    [recharts/overview]]

   [layout/frame {:extra-classes :is-fluid}
    [kafka/overview]]
   [layout/frame {:extra-classes :is-fluid}
    [swagger/overview]]])

