(ns demo.catalog.molecule.example.composite.bigger-coverage-plan
  (:require [demo.subs :as subs]
            [demo.catalog.molecule.example.composite.bigger-coverage-plan :as coverage-plan]
            [bh-ui.molecule.grid-container :as grid]
            [bh-ui.utils.helpers :as h]
            [re-com.core :as rc]
            [re-frame.core :as re-frame]
            [reagent.core :as r]
            [taoensso.timbre :as log]
            [woolybear.ad.catalog.utils :as acu]
            [woolybear.ad.layout :as layout]))


(log/info "views.molecule.example.composite.coverage-plan")


(defn ww-example []
  (let [container-id "coverage-plan-demo-ww"]

    (fn []

      (acu/demo "Coverage Plan using a Grid for layout (Worldwind globe) WIP"
        "This experiment uses a GRID to layout the various UI components that make up the 'composite'.
        Constructs 'coverage-plan', drawing the layout from `:grid-layout` which provides X/Y/W/H for each
        component on the widget's internal grid."
        [layout/frame
         ;;
         ;; NOTE: the :height MUST be specified here since the ResponsiveContainer down in bowels of the chart needs a height
         ;; in order to actually draw the Recharts components. just saying "100%" doesn't work, since the
         ;; that really means "be as big as you need" and ResponsiveContainer then doesn't know what to do.
         ;;
         [:div.molecule-content
          [grid/component
           :data (r/atom coverage-plan/ui-definition)
           :component-id (h/path->keyword container-id "grid-widget")
           :container-id container-id
           :resizable true
           :tools true]]])
      (acu/demo
        "Coverage Plan"
        [rc/alert-box :src (rc/at)
         :alert-type :info
         :heading "Waiting for (demo) Log-in"]))))


(defn r-example []
  (let [container-id "coverage-plan-demo-r"]

    (fn []
      (acu/demo "Coverage Plan using a Grid for layout (Resium globe)"
        "This experiment uses a GRID to layout the various UI components that make up the 'composite'.  Constructs
        'coverage-plan', drawing the layout from `:grid-layout` which provides X/Y/W/H for each component
        on the widget's internal grid.

> This example differs from the Worldwind version only by replacing the `:ww/globe` reference with `:r/globe`
"
        [layout/frame
         ;;
         ;; NOTE: the :height MUST be specified here since the ResponsiveContainer down in bowels of the chart needs a height
         ;; in order to actually draw the Recharts components. just saying "100%" doesn't work, since the
         ;; that really means "be as big as you need" and ResponsiveContainer then doesn't know what to do.
         ;;
         [:div.molecule-content
          [grid/component
           :data (r/atom
                   (assoc-in coverage-plan/ui-definition
                     [:components :ui/globe :name] :r/globe))
           :component-id (h/path->keyword container-id "grid-widget")
           :container-id container-id
           :resizable true
           :tools true]]])
      (acu/demo
        "Coverage Plan"
        [rc/alert-box :src (rc/at)
         :alert-type :info
         :heading "Waiting for (demo) Log-in"]))))


(defn twoD-example []
  (let [container-id "coverage-plan-demo-2D"]

    (fn []
      (if (and @logged-in? @pub-sub-started?)
        (acu/demo "Coverage Plan using a Grid for layout (Leaflet globe)"
          "This experiment uses a GRID to layout the various UI components that make up the 'composite'.  Constructs
          'coverage-plan', drawing the layout from `:grid-layout` which provides X/Y/W/H for each component
          on the widget's internal grid.

> This example differs from the Worldwind version only by replacing the `:ww/globe` reference with `:l/globe`
"
          [layout/frame
           ;;
           ;; NOTE: the :height MUST be specified here since the ResponsiveContainer down in bowels of the chart needs a height
           ;; in order to actually draw the Recharts components. just saying "100%" doesn't work, since the
           ;; that really means "be as big as you need" and ResponsiveContainer then doesn't know what to do.
           ;;
           [:div.molecule-content
            [grid/component
             :data (r/atom
                     (assoc-in coverage-plan/ui-definition
                       [:components :ui/globe :name] :l/globe))
             :component-id (h/path->keyword container-id "grid-widget")
             :container-id container-id
             :resizable true
             :tools true]]])
        (acu/demo
          "Coverage Plan"
          [rc/alert-box :src (rc/at)
           :alert-type :info
           :heading "Waiting for (demo) Log-in"])))))


(comment
  (def logged-in? (re-frame/subscribe [:subs/logged-in?]))

  (if (not @logged-in?)
    (re-frame/dispatch [:events/login "test-user" "test-pwd"]))

  ())



(comment
  (def container-id "coverage-plan-demo-ww")


  ())

