(ns bh-ui.atom.re-com.box
  (:require [re-com.core :as rc]
            [taoensso.timbre :as log]))


(log/info "bh-ui.atom.re-com.box")


(defn box [& {:keys [child style]}]
  [rc/box
   :style style
   :child child])


(def element-def {:rc/box {:component box
                           :child :keyword}})

(re-frame.core/dispatch-sync [:register-meta element-def])

