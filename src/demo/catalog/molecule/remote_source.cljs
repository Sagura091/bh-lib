(ns demo.catalog.molecule.remote-source
  (:require [re-frame.core :as re-frame]
            [day8.re-frame.tracing :refer-macros [fn-traced]]
            [bh-ui.events :as events]
            [bh-ui.utils.example-data :as data]
            [taoensso.timbre :as log]))



; region ; define a registry of "remote sources":
;    associates a remote "name" (a keyword) with a function that produces data

(re-frame/reg-event-db
  ::register-source
  (fn-traced [db [_ source-name source-generator-fn]]
    (assoc-in db [:remote/sources source-name] source-generator-fn)))

; endregion


; region ; define a re-frame event handler for ::events/subscribe-to which:
;    looks up the remote "name" in the registry (see above) and adds it to a pool (in the ap-db)
(re-frame/reg-event-db
  ::events/subscribe-to
  (fn-traced [db [_ source-names]]
    (let [fns (->> source-names (map #(get-in db [:remote/sources %])) set)]
      (update db :remote/generators conj fns))))


(re-frame/reg-event-db
  ::events/un-subscribe-to
  (fn-traced [db [_ source-names]]
    (let [fns (->> source-names (map #(get-in db [:remote/sources %])) set)]
      (update db :remote/generators disj fns))))

; endregion


; region ; generate results from the subscribed remote sources

(defn- generate
  "call each function in :remote/generators and put the results into the app-db"
  []
  ;(log/info "generate")

  (doseq [[id generator] (:remote/sources @re-frame.db/app-db)]
    (re-frame/dispatch-sync [::events/data-update {:id    id
                                                   :value (generator)}])))


(defn start-generators
  "wake up every 'delay-in-seconds' seconds and generate new 'remote' data
  > NOTE: 'handle' is an atom that stores the timer so it can be shutdown later"
  [handle delay-in-seconds]

  (reset! handle (js/setInterval generate (* 1000 delay-in-seconds))))


(defn stop-generators
  "stop the time which stops generating data"
  [handle]
  (js/clearInterval @handle))


(def handle (atom nil))


(start-generators handle 10)


; endregion





;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
; region ; rich comments

(comment
  (do
    (require '[bh-ui.utils.example-data :as data])
    (defn- gen-dummy-meta-table [] data/meta-tabular-data)
    (defn- gen-dummy-table [] data/tabular-data)


    (re-frame/dispatch-sync [::register-source :source/meta-table gen-dummy-meta-table])
    (re-frame/dispatch-sync [::register-source :source/table gen-dummy-table])

    ())


  (gen-dummy-meta-table)
  (gen-dummy-table)

  ())


(comment
  (doseq [[id generator] (:remote/sources @re-frame.db/app-db)]
    (re-frame/dispatch-sync [::events/data-update {:id    id
                                                   :value (generator)}]))


  (map (fn [[id generator]]
         {:id    id
          :value (generator)})
    (seq (:remote/sources @re-frame.db/app-db)))



  (swap! re-frame.db/app-db assoc :sources {})


  ())


(comment
  (start-generators handle 10)

  (swap! re-frame.db/app-db assoc :sources {})

  (stop-generators handle)


  ())




; endregion
