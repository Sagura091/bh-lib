(ns bh-ui.atom.re-com.v-scroller
  (:require [re-com.core :as rc]))


(defn v-scroller [& {:keys [children height]}]
  [rc/scroller
   :v-scroll :auto
   :style {:height height :width "600px"}
   :child [rc/v-box
           :justify :between
           :children children]])


(def element-def {:rc/v-scroll {:component v-scroller
                                :children  :keyword}})

(re-frame.core/dispatch-sync [:register-meta element-def])
