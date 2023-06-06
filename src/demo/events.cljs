(ns demo.events
  (:require [day8.re-frame.http-fx]
            [day8.re-frame.tracing :refer-macros [fn-traced]]
            [demo.db :as db]
            [re-frame.core :as re-frame]
            [taoensso.timbre :as log]))


(re-frame/reg-event-fx
  ::initialize-db
  (fn [{:keys [db] :as cofx} _]
    ;(log/info "(RCCST) ::initialize-db" db)
    {:dispatch [::get-version]
     :db       (merge db db/default-db)}))


(re-frame/reg-event-fx
  ::get-version
  (fn-traced [_ _]
    ;(log/info "::get-version")
    {:http-xhrio (merge default-header
                   {:method     :get
                    :uri        "/version"
                    :on-success [::version-success]
                    :on-failure [::bad-lookup-result]})}))


(re-frame/reg-event-db
  ::version-success
  (fn-traced [db [_ {:keys [version]}]]
    ;(log/info "::version-success" version)
    (assoc db :version version)))


(re-frame/reg-event-db
  ::version-failure
  (fn-traced [db [_ _]]
    (assoc db :version "unknown")))




; some events to dispatch from the REPL
(comment
  (re-frame/dispatch [::name "Black Hammer"])
  (re-frame/dispatch [::initialize-db])

  (re-frame/dispatch [::get-version])

  @re-frame.db/app-db

  ())