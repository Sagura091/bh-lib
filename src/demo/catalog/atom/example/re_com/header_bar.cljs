(ns demo.catalog.atom.example.re-com.header-bar
  (:require [bh-ui.core :as bh]
            [demo.events :as events]
            [demo.subs :as subs]
            [re-com.core :as rc]
            [re-frame.core :as re-frame]
            [taoensso.timbre :as log]
            [woolybear.ad.catalog.utils :as acu]
            [woolybear.ad.layout :as layout]))


(defn example []
  (let [version (re-frame/subscribe [::subs/version])
        uuid    (re-frame/subscribe [::subs/uuid])]

    (acu/demo "Header Bar"
      "A stylized header for an applications. Includes the version number provided by the server."
      [layout/centered

       [bh/recom-header-bar
        :children [[:h1 "Black Hammer UI Catalog"]
                   [rc/h-box :src (rc/at)
                    :gap "10px"
                    :align :center
                    :children [[:h5.is-small "version: " (or @version "unknown")]
                               [bh/recom-button
                                "Log Off"
                                #() "Log Off"]]]]]]
      '[])))


