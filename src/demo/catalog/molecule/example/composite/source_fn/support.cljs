(ns demo.catalog.molecule.example.composite.source-fn.support
  (:require [re-frame.core :as re-frame]
            [day8.re-frame.tracing :refer-macros [fn-traced]]
            [taoensso.timbre :as log]))




(defn make-handler [data sub-name]
  ;(log/info "make-handler" sub-name "//" data)

  (re-frame/reg-event-fx
    (first sub-name)
    (fn-traced [_ updates]
      ;(log/info sub-name "handler" updates)
      {:dispatch (apply conj data (drop 1 updates))})))


