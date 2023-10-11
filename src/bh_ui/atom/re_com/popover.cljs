(ns bh-ui.atom.re-com.popover
  (:require [reagent.core :as r]
            ["@tippyjs/react$default" :as Tippy]
            ["tippy.js/dist/tippy.css"]
            ["tippy.js/dist/backdrop.css"]
            ["tippy.js/animations/shift-away.css"]
            ["tippy.js/themes/light.css"]
            ["tippy.js/themes/light-border.css"]
            ["tippy.js/themes/material.css"]
            ["tippy.js/themes/translucent.css"]
            [cljss.core :refer-macros [defstyles]]
            ;[cljss.rum :refer [defstyled]]
            [bh-ui.utils.helpers :as h]
            [taoensso.timbre :as log]
            [woolybear.ad.layout :as layout]))


(log/info "bh-ui.atom.re-com.popover")

(defstyles white-text []
           {:color "white"})

(defn popover-wrapper

  [& {:keys [data config]}]
  (let [cfg           (h/resolve-value config)
        d             (h/resolve-value data)
        properties (if (= "light" (:theme @cfg)) #js{} #js{:class (white-text)})]

    [:> Tippy {:content (r/create-element "div" #js{} ""
                                          (r/create-element "h3" properties (:popover-title @cfg))
                                          (r/create-element "p" properties (r/as-element [layout/markdown-block (:popover-body-text @cfg)])))
               :placement (or (:position @cfg) "top")
               :trigger (if (:clickable @cfg) "click" "mouseenter focus")
               :interactive true
               :inlinePositioning true
               :theme (or (:theme @cfg) "light")}
     [:div
      (:component @d)]]))

(def element-def {:rc/popover-wrapper {:component popover-wrapper :child :keyword}})


(re-frame.core/dispatch-sync [:register-meta element-def])

