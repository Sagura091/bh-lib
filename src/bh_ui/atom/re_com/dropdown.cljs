(ns bh-ui.atom.re-com.dropdown
  (:require [bh-ui.utils.helpers :as h]
            [re-com.core :as rc]
            [bh-ui.utils.locals :as l]
            [re-frame.core :as re-frame]
            [bh-ui.atom.re-com.label :as label]
            [reagent.core :as r]
            [day8.re-frame.tracing :refer-macros [fn-traced]]
            [taoensso.timbre :as log]))



(defn dropdown [& {:keys [data config style component-id container-id] :as params}]
  (let [d (h/resolve-value data)
        c (h/resolve-value config)
        s (h/resolve-value style)]
    (fn []
      [rc/h-box :src (rc/at)
       :align :center
       :gap   "10px"
       :children [[label/label :value (:label @c)]
                  [rc/single-dropdown :src (rc/at)
                   :width (or (:width @s) "200px")
                   :max-height (or (:max-height @s) "240px")
                   :choices (:choices @d)
                   :model   (:selected @d)
                   :on-change #(h/handle-change-path data [[assoc-in [:selected] %]])]]])))


(def meta-data {:rc/dropdown {:component dropdown
                                 :ports     {:data   :port/sink
                                             :config :port/sink
                                             :style  :port/sink}}})

(re-frame/dispatch-sync [:register-meta meta-data])
