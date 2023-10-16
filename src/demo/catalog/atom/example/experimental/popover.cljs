(ns demo.catalog.atom.example.experimental.popover
  (:require
    [woolybear.ad.catalog.utils :as acu]
    [bh-ui.atom.experimental.popover :as popover]))


(defn example []
  (acu/demo
    "Popover Messages"
   [:div
    [popover/popover-wrapper
     :data {:component [:button "Press me"]}
     :config {:clickable true
              :popover-title "Light-theme Clickable Popover"
              :popover-body-text  "A simple 'popover' message, using [Tippy.js](). In the body of the popover, you can embed Markdown such as `this`"}]
    [popover/popover-wrapper
     :data  {:component [:button "Hover over me"]}
     :config {:clickable false
              :popover-title "Translucent-theme Clickable Popover"
              :popover-body-text   "A simple 'popover' message, using [Tippy.js](). In the body of the popover, you can embed Markdown such as `this`"
              :theme "translucent"}]]))
