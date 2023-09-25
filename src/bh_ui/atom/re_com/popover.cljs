(ns bh-ui.atom.re-com.popover
  (:require [re-com.core :as rc]
            [reagent.core :as r]
            [bh-ui.utils.helpers :as h]
            [taoensso.timbre :as log]
            [woolybear.ad.layout :as layout]))


(log/info "bh-ui.atom.re-com.popover")

(defn clickable-popover
  "A popover that is toggled by clicking the component

   data Map (required)
    :component (required) Hiccup - the component that the popover is attached to

   config - Map
    :title (optional) String - title of popover Ex: \"Title\"
    :body-text (optional) String - body text of popover Ex: \"Body\"
    :position (optional) keyword - position of the popover relative to component Ex: \":above-left\", \":below-center\""
  [& {:keys [data config]}]
  (let [cfg           (h/resolve-value config)
        d             (h/resolve-value data)
        showing? (r/atom false)]
    [:div
     [rc/popover-anchor-wrapper :src (rc/at)
      :showing? showing?
      :position (or (:position @cfg) :above-center)
      :anchor [:div {:on-click #(swap! showing? not)}
               (:component @d)]
      :popover [rc/popover-content-wrapper :src (rc/at)
                :title (:title @cfg)
                :no-clip? true
                :body [layout/markdown-block (:body-text @cfg)]]]]))

(defn hover-popover

  "A popover that is toggled by hovering over the component

  data Map (required)
   :component (required) Hiccup - the component that the popover is attached to

  config - Map
    :title (optional) String - title of popover Ex: \"Title\"
    :body-text (optional) String - body text of popover Ex: \"Body\"
    :position (optional) keyword - position of the popover relative to component Ex: \":above-left\", \":below-center\""
  [& {:keys [data config]}]
  (let [cfg           (h/resolve-value config)
        d             (h/resolve-value data)
        showing? (r/atom false)]
    [:div
     [rc/popover-anchor-wrapper :src (rc/at)
      :showing? showing?
      :position (or (:position @cfg) :above-center)
      :anchor [:div {:on-mouse-enter #(reset! showing? true)
                     :on-mouse-leave #(reset! showing? false)}
               (:component @d)]
      :popover [rc/popover-content-wrapper :src (rc/at)
                :title (:title @cfg)
                :no-clip? true
                :close-button? false
                :body [layout/markdown-block (:body-text @cfg)]]]]))




(def element-def {:rc/clickable-popover {:component clickable-popover :child :keyword}})


(re-frame.core/dispatch-sync [:register-meta element-def])

