(ns bh-ui.atom.experimental.popover
  (:require [reagent.core :as r]
            ["@tippyjs/react$default" :as Tippy]
            ["tippy.js/dist/tippy.css"]
            ["tippy.js/dist/backdrop.css"]
            ["tippy.js/animations/shift-away.css"]
            ["tippy.js/themes/light.css"]
            ["tippy.js/themes/light-border.css"]
            ["tippy.js/themes/material.css"]
            ["tippy.js/themes/translucent.css"]
            ["react-markdown" :as ReactMarkdown]
            [cljss.core :refer-macros [defstyles]]
            [bh-ui.utils.helpers :as h]
            [taoensso.timbre :as log]))


(log/info "bh-ui.atom.re-com.popover")

(defstyles white-text []
           {:color "white !important"})

(defn popover-wrapper
  "Creates a popover attached to the passed in component that supports the use of Markdown
  See: https://www.markdownguide.org/cheat-sheet/.

  Parameters:
  - & {:keys [data config]}: A map of configuration options.
    - :data (required): A map containing the component to be wrapped in the popover.
    - :config (optional): A map of additional configuration options, including:
      - :position (optional): The placement of the popover relative to the anchor element.
                            (default: 'top')
      - :clickable (optional): A boolean indicating whether the popover is clickable to open/close.
                             If true, it opens on click; if false, it opens on hover.
      - :theme (optional): The theme of the popover, which may affect its appearance. Possible values are 'light',
       'light-border', 'material', 'translucent', or 'dark'.
      - :popover-title (optional): The title of the popover.
      - :popover-body-text (optional): The body text content of the popover.

 Returns:
 - The original hiccup-style component with a popover attached to it.

  Example Usage:
  (popover-wrapper
    {:component [:div \"Hover or Click Me\"]}
    {:clickable true
     :theme \"dark\"
     :position \":bottom\"
     :popover-title \"Popover Title\"
     :popover-body-text \"This is the popover content.\"})

  Notes:
  - The `data` parameter is required and should be a map containing the component to be wrapped in the popover.
  - The `config` parameter is optional and can be used to customize the popover's behavior and appearance."

  [& {:keys [data config]}]
  (let [cfg           (h/resolve-value config)
        d             (h/resolve-value data)
        properties (if (and (not (= nil (:theme @cfg))) (and (not (= "light" (:theme @cfg))) (not (= "light-border" (:theme @cfg)))) ) #js{:class (white-text)} #js{})]

    [:> Tippy {:content (r/create-element "div" #js{} ""
                                          (r/create-element "h3" properties (:popover-title @cfg))
                                          (r/create-element "div" properties (r/as-element [:> ReactMarkdown
                                                                                            (:popover-body-text @cfg)])))

               :placement (or (:position @cfg) "top")
               :trigger (if (:clickable @cfg) "click" "mouseenter")
               :interactive true
               :theme (or (:theme @cfg) "light")}
     [:div
      (:component @d)]]))

(def element-def {:rc/popover-wrapper {:component popover-wrapper :child :keyword}})


(re-frame.core/dispatch-sync [:register-meta element-def])

