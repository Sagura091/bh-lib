(ns demo.core
  (:require [bh-ui.subscriptions]
            [bh-ui.atom.component-registry]
            [bh-ui.core]
            [demo.config :as config]
            [demo.events :as events]
            [demo.views :as views]
            [re-frame.core :as re-frame]
            [reagent.dom :as rdom]
            [taoensso.timbre :as log]))


(set! *print-namespace-maps* false)


(defn dev-setup []
  (when config/debug?
    (log/info "dev mode")))


(defn ^:dev/after-load mount-root []
  (re-frame/clear-subscription-cache!)
  (let [root-el (.getElementById js/document "app")]
    (rdom/unmount-component-at-node root-el)
    (rdom/render [#'views/view] root-el)))


(defn init []
  (log/info "Demo.core/init")

  (re-frame/dispatch-sync [::events/initialize-db])

  (dev-setup)
  (mount-root))


(comment


  ())
