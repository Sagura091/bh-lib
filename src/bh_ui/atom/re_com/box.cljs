(ns bh-ui.atom.re-com.box
  (:require [re-com.core :as rc]
            [taoensso.timbre :as log]))


(log/info "bh-ui.atom.re-com.box")


(defn box [& {:keys [child style]}]
  [rc/box
   :style style
   :child child])


(defn h-box [& {:keys [children style]}]
  [rc/h-box
   :style style
   :children children])


(defn v-box [& {:keys [children style]}]
  [rc/v-box
   :style style
   :children children])

(def element-def {:rc/box {:component box :child :keyword}
                  :rc/h-box {:component h-box :children :keyword}
                  :rc/v-box {:component v-box :children :keyword}})

(re-frame.core/dispatch-sync [:register-meta element-def])

