(ns bh-ui.atom.re-com.input-field
  (:require [bh-ui.utils.helpers :as h]
            [re-com.core :as rc]
            [bh-ui.utils.locals :as l]
            [re-frame.core :as re-frame]
            [reagent.core :as r]
            [taoensso.timbre :as log]))


(defn input-field [& {:keys [data component-id container-id] :as params}]
  (let [d (h/resolve-value data)]
    (fn []
      [rc/h-box :src (rc/at)
       :align :center
       :children [[rc/input-text :src (rc/at)
                   :model d
                   :placeholder "enter text"
                   :change-on-blur? false
                   :on-change #(h/handle-change-path data [[l/set-val [] %]])]
                  [rc/md-circle-icon-button :src (rc/at)
                   :md-icon-name "zmdi-close-circle-o"
                   :tooltip "Click to clear"
                   :size :smaller
                   :on-click #(h/handle-change-path data [[l/set-val [] ""]])]]])))


(def meta-data {:rc/input-field {:component input-field
                                 :ports     {:data :port/sink}}})


(re-frame/dispatch-sync [:register-meta meta-data])


