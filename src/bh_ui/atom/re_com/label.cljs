(ns bh-ui.atom.re-com.label
  (:require [bh-ui.utils.helpers :as h]
            [re-frame.core :as rf]
            [re-com.core :as rc]
            [taoensso.timbre :as log]))


(log/info "bh-ui.atom.re-com.label")


(defn label [& {:keys [value style]}]
  ;(log/info "label" value "//" (str v))
  [rc/label :src (rc/at)
   :style (merge {} style)
   :label (str @(h/resolve-value value))])


(defn label-sm [& {:keys [value style]}]
  ;(log/info "label-sm" value "//" (str v))
  [rc/label :src (rc/at)
   :style (merge style {:font-size ".5em"})
   :label (str @(h/resolve-value value))])


(defn label-md [& {:keys [value style]}]
  [rc/label :src (rc/at)
   :style (merge style {:font-size "1.5em"})
   :label (str @(h/resolve-value value))])


(defn label-lg [& {:keys [value style]}]
  ;(log/info "label-lg" value "//" (str v) "//" (str @v) "//")
  [rc/label :src (rc/at)
   :style (merge style {:font-size "2em"})
   :label (str @(h/resolve-value value))])


(defn label-hg [& {:keys [value style]}]
  ;(log/info "label-hg" value "//" (str v))
  [rc/label :src (rc/at)
   :style (merge style {:font-size "2.5em"})
   :label (str @(h/resolve-value value))])


(def meta-data {:rc/label    {:component label :ports {:value :port/sink :style :port/sink}}
                :rc/label-sm {:component label-sm :ports {:value :port/sink :style :port/sink}}
                :rc/label-md {:component label-md :ports {:value :port/sink :style :port/sink}}
                :rc/label-lg {:component label-lg :ports {:value :port/sink :style :port/sink}}
                :rc/label-hg {:component label-hg :ports {:value :port/sink :style :port/sink}}})


(rf/dispatch-sync [:register-meta meta-data])


