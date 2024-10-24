(ns demo.subs
  (:require
   [re-frame.core :as re-frame]))

(re-frame/reg-sub
  ::version
  (fn [db]
    (:version db)))

(re-frame/reg-sub
  ::i18n
  (fn [db]
    (:i18n db)))


(re-frame/reg-sub
  ::uuid
  (fn [db]
    (:uuid db)))

