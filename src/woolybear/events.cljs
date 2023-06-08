(ns woolybear.events
  (:require
   [re-frame.core :as re-frame]
   [woolybear.db :as db]
   [day8.re-frame.tracing :refer-macros [fn-traced defn-traced]]
   [taoensso.timbre :as log]))


(re-frame/reg-event-db
 ::initialize-db
 (fn-traced [_ _]
   (log/info "(WB) ::initialize-db")
   db/default-db))


(re-frame/reg-event-db
 ::set-active-panel
 (fn-traced [db [_ active-panel]]
   (assoc db :active-panel active-panel)))
