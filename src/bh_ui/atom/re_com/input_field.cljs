(ns bh-ui.atom.re-com.input-field
  (:require [bh-ui.utils.helpers :as h]
            [re-com.core :as rc]
            [bh-ui.utils.locals :as l]
            [re-frame.core :as re-frame]
            [reagent.core :as r]
            [day8.re-frame.tracing :refer-macros [fn-traced]]
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


(defn make-handler [data sub-name]
  (log/info "make-handler" sub-name "//" data)

  (re-frame/reg-event-fx
    (first sub-name)
    (fn-traced [_ updates]
               (log/info sub-name "handler" updates)
               {:dispatch (apply conj data (drop 1 updates))})))
(defn filter-fn [{:keys [data filter-value data-key sub-name]  :as params}]
  (print "data-key" data-key)
  (re-frame/reg-sub
    (first sub-name)
    :<- data
    :<- filter-value
    :<- data-key
    (fn [[d f dk] _]
      (->> (:data d)
           (filter #(re-find (re-pattern (str "(?i)" f)) (dk %))))))

  (make-handler data sub-name))

(defn filter-input-field [])



(def meta-data {:rc/input-field {:component input-field
                                 :ports     {:data :port/sink}}
                :fn/filter-fn {:function filter-fn
                               :ports    {:data         :port/sink
                                          :filter-value :port/sink
                                          :data-key     :port/sink}}})


(re-frame/dispatch-sync [:register-meta meta-data])

