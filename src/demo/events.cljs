(ns demo.events
  (:require [day8.re-frame.http-fx]
            [day8.re-frame.tracing :refer-macros [fn-traced]]
            [demo.db :as db]
            [re-frame.core :as re-frame]
            [bh-ui.version :as version]
            [taoensso.timbre :as log]))


(re-frame/reg-event-fx
  ::initialize-db
  (fn [{:keys [db] :as cofx} _]
    ;(log/info "(RCCST) ::initialize-db" db)
    {:dispatch [::get-version]
     :db       (merge db db/default-db)}))


(re-frame/reg-event-db
  ::get-version
  (fn-traced [db _]
     (assoc db
       :version (or version/version "unknown")
       :i18n ":en")))


(re-frame/reg-event-db
  :set-i18n
  (fn-traced [db [_ i18n]]
             (assoc-in db [:i18n] i18n)))


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