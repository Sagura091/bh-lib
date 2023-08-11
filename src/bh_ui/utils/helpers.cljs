(ns bh-ui.utils.helpers
  (:require [bh-ui.atom.bhui.navbar :as navbar]
            [cljs-uuid-utils.core :as uuid]
            [day8.re-frame.tracing :refer-macros [fn-traced]]
            [re-com.core :as rc]
            [re-frame.core :as re-frame]
            [reagent.core :as r]
            [taoensso.timbre :as log]
            [woolybear.packs.tab-panel :as tab-panel]))


(defn config-tab-panel [component-id]
  {:tab-panel {:value     (keyword component-id "config")
               :data-path [:containers (keyword component-id) :tab-panel]}})


(defn component-id []
  (-> (uuid/make-random-uuid)
    uuid/uuid-string))


(defn chart-config [[config data panel tab] data-panel config-panel]
  ;(log/info "chart-config" config data panel tab)
  (let [data-or-config [[config "config"]
                        [data "data"]]]
    [:div.chart-config.h-w-100pc
     [navbar/navbar data-or-config [panel]]
     [rc/scroller :src (rc/at)
      :v-scroll :auto
      :height "95%"
      :child [tab-panel/tab-panel {:extra-classes             :is-fluid
                                   :subscribe-to-selected-tab [tab]}

              [tab-panel/sub-panel {:panel-id config}
               config-panel]

              [tab-panel/sub-panel {:panel-id data}
               data-panel]]]]))


(defn path->string [& path]
  (->> path
    flatten
    (remove nil?)
    (map str)
    (map #(clojure.string/replace % #":" ""))
    (map #(clojure.string/replace % #"/" "."))
    (map #(clojure.string/replace % #" " "-"))
    (clojure.string/join ".")))


(defn path->keyword [& path]
  (->> path
    path->string
    keyword))


(defn path->keyword-vec [& path]
  (when path
    [(path->keyword path)]
    []))


(defn string->keyword [s]
  (-> s
    str
    (clojure.string/replace #":" "")
    keyword))


(defn- resolve-subscription
  "resolve a subscription.

  there are 2 types if subscriptions: REMOTE and LOCAL

  REMOTE subscriptions are designed to reach across the network and query data from the Server, while
  LOCAL subscriptions are designed to reach into the Re-frame 'APP-DB' at a certain path
  "
  [subs opts]
  (let [[target & _] subs]
    ;(log/info "resolve-subscription" subs "//" target)
    (if (= target :bhui.subs/source)
      (re-frame/subscribe (reduce conj subs opts))
      (re-frame/subscribe (reduce conj [(path->keyword subs)] opts)))))


(defn resolve-value [value & opts]
  ;(log/info "resolve-value" value "//" opts
  ;  "// (path-kw)" (reduce conj [(path->keyword value)] opts)
  ;  "// (path-sub)" (reduce conj [(path->keyword value)] opts))

  (let [ret (cond
              (keyword? value) (re-frame/subscribe (reduce conj [(path->keyword value)] opts))
              (and (coll? value)
                (not (empty? value))
                (every? (or keyword? string?) value)) (resolve-subscription value opts)
              (instance? reagent.ratom.RAtom value) value
              (instance? reagent.ratom.Reaction value) value
              (instance? Atom value) value
              :else (r/atom value))]
    ;(log/info "resolve-value" value "//" opts "//" ret "//" (str @ret))
    ret))


(defn handle-change [value new-value]
  ;(log/info "handle-change" value "//" new-value)
  (cond
    (or (coll? value)
      (keyword? value)
      (string? value)) (re-frame/dispatch (conj value new-value))
    (instance? reagent.ratom.RAtom value) (reset! value new-value)
    (instance? Atom value) (reset! value new-value)
    :else ()))


(defn source-local-> [db base-path f]
  ;(log/info "source-local-> (a)" (if (map? db) (keys db) db)
  ;  "//" base-path
  ;  "//" f
  ;  "//" (get-in db base-path))

  (let [ret (loop [x (get-in db base-path), forms (first f)]
              (if forms
                (let [form     (first forms)
                      threaded (if (or (seq? form) (vector? form))
                                 (do
                                   ;(log/info "source-local-> (b)" base-path "//"
                                   ;  (first form) x (next form) "____")
                                   (apply (first form) x (next form)))
                                 (do
                                   ;(log/info "source-local-> (b) NEG " (form x))
                                   (form x)))]
                  (recur threaded (next forms)))
                x))]
    ;(log/info "source-local-> (c)" db "//" base-path "//" ret)

    (if (and (associative? db) (not-empty base-path))
      (assoc-in db base-path ret)
      ret)))


(comment
  (def ret (assoc-in {} [:a] 5))

  (assoc-in {} [] ret)

  (if (and (associative? {}) (not-empty []))
    (assoc-in {} [] ret)
    ret)


  (def ret (assoc-in {:a 0} [:a] 5))

  (assoc-in {:a 0} [] ret)

  (if (and (associative? {:a 0}) (not-empty []))
    (assoc-in {} [] ret)
    ret)


  (do
    (def db {:b {:a 0}})
    (def base-path [:b])
    (def ret (assoc-in {:a 0} [:a] 5)))

  (if (and (associative? db) (not-empty base-path))
    (assoc-in db base-path ret)
    ret)

  ())


; TODO: think handle-change-path needs to change to provide the "update-path" as a separate param, rather
;       than forcing the caller to provide a complete data item (assoc-in done inside the handler...)
;
(defn handle-change-path [value new-value]
  ;(log/info "handle-change-path (a)" value "//" (type value) "//" new-value)
  (let [update-event [(path->keyword value) new-value]]
    (cond
      (or (coll? value)
        (string? value)                                     ; need this in case the Mol-DSL only has a string for this
        (keyword? value)) (do
                            (log/info "handle-change-path (path)" update-event)
                            (re-frame/dispatch update-event))

      ; TODO: do we really need to support string "path" to the data via subscription

      (or
        (instance? reagent.ratom.RAtom value)
        (instance? Atom value)) (do
                                  ;(log/info "handle-change-path (atom)" new-value)
                                  (reset! value (source-local-> @value [] [new-value])))

      :else (log/info "handle-change-path (else)" value))))




;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
; region ; rich comments

; test handling atoms as the data-source, and structures
(comment
  (do
    (def db-atom (atom {:dummy "value"}))
    (re-frame/reg-sub
      :dummy.value
      (fn [_ _]
        @db-atom))
    (re-frame/reg-event-db
      :dummy-value
      (fn [_ [_ new-val]]
        (reset! db-atom new-val)))

    (def val-1 (resolve-value "val-1"))
    (def val-2 (resolve-value (r/atom "val-2")))
    (def val-3 (resolve-value (r/atom {:a "" :val 3})))
    (def val-4 (resolve-value (r/atom {:a "" :b "" :val 4})))
    (def val-5 (resolve-value [:dummy.value])))

  (handle-change-path val-1 [[bh-ui.utils.locals/set-val [] "a"]])
  (handle-change-path val-2 [[bh-ui.utils.locals/set-val [] "a"]])
  (handle-change-path val-3 [[bh-ui.utils.locals/set-val [:a] "a"]])
  (handle-change-path val-4 [[assoc-in [:a] "a"]])

  (handle-change-path (resolve-value [1 2]) [[bh-ui.utils.locals/conj-in [] 10]])
  (handle-change-path (resolve-value #{1 2}) [[bh-ui.utils.locals/disj-in [] 1]])
  (handle-change-path (resolve-value {:a 1}) [[assoc-in [:a] 9]])

  (get-in db [:a])
  (apply bh-ui.utils.locals/set-val {:a ""} '([:a] "a"))

  (apply bh-ui.utils.locals/set-val {:a ""} '([:a] "a"))

  (apply bh-ui.utils.locals/set-val {:a "", :val 3} '([:a] "a"))

  (apply assoc-in {:a "", :b "", :val 4} '([:a] "a"))

  (apply bh-ui.utils.locals/conj-in [1 2] '([] 10))




  (do
    (def d [1 2])
    (def path [])
    (def value 10)
    (def start (get-in d path))
    (def c (if (vector? start)
             (into [] (conj start value))
             (conj start value)))
    (def ret (if (map? d)
               (assoc-in d path c)
               c)))

  ; set-val on a non-ahs-map on a key in a hash-map works fine!
  (do
    (def db "")
    (def base-path [])
    (def f [[[bh-ui.utils.locals/set-val [] "a"]]])
    (def forms (first f))
    (def form (first forms))
    (def x (get-in db base-path)))

  (do
    (def db {:a ""})
    (def base-path [:a])
    (def f [[[bh-ui.utils.locals/set-val [:a] "a"]]])
    (def forms (first f))
    (def form (first forms))
    (def x (get-in db base-path)))

  (do
    (def db {:a "" :b ""})
    (def base-path [:a])
    (def f [[[bh-ui.utils.locals/set-val [:a] "a"]]])
    (def forms (first f))
    (def form (first forms))
    (def x (get-in db base-path)))


  (let [ret (loop [x (get-in db base-path), forms (first f)]
              (if forms
                (let [form     (first forms)
                      threaded (if (or (seq? form) (vector? form))
                                 (do
                                   (apply (first form) x (next form)))
                                 (do
                                   (form x)))]
                  (recur threaded (next forms)))
                x))]
    (log/info "loop" db "//" base-path "//" ret)

    (if (associative? db)
      (assoc-in db base-path ret)
      ret))


  ())

; now make sure it still works with [:subscription.vectors]
(comment
  (do
    (def db-atom (atom {:dummy "value"}))
    (re-frame/reg-sub
      :dummy.value
      (fn [_ _]
        (log/info ":dummy.value (sub)" @db-atom)
        @db-atom))
    (re-frame/reg-event-fx
      :dummy.value
      (fn [_ [_ new-val]]
        (log/info ":dummy.value (event)" new-val)
        (reset! db-atom (source-local-> @db-atom [] [new-val]))))

    (def val-5 (resolve-value [:dummy.value])))

  (assoc-in {:dummy "value"} [:dummy] "a")

  (handle-change-path [:dummy.value] [[bh-ui.utils.locals/set-val [:dummy] "a"]])
  (handle-change-path [:dummy.value] [[bh-ui.utils.locals/set-val [] []]])

  ; set-val of a key in a hash-map works fine...
  (do
    (def db {:dummy "value"})
    (def base-path [:dummy])
    (def f [[[bh-ui.utils.locals/set-val [:dummy] "a"]]])
    (def forms (first f))
    (def form (first forms))
    (def x (get-in db base-path)))


  ; getting set/val to work for completely replacing a hash-map...
  (do
    (def db {:dummy "value"})
    (def base-path [])
    (def f [[[bh-ui.utils.locals/set-val [] []]]])
    (def forms (first f))
    (def form (first forms))
    (def x (get-in db base-path)))

  (apply bh-ui.utils.locals/replace-val x (next form))

  (assoc-in db base-path [])

  (let [ret (loop [x (get-in db base-path), forms (first f)]
              (if forms
                (let [form     (first forms)
                      threaded (if (or (seq? form) (vector? form))
                                 (do
                                   (apply (first form) x (next form)))
                                 (do
                                   (form x)))]
                  (recur threaded (next forms)))
                x))]
    (log/info "loop" db "//" base-path "//" ret)

    (if (map? db)
      (assoc-in db base-path ret)
      ret))

  ())


(comment
  (do
    (def v (atom {:one 1 :two {:three "missing"}}))
    (def db @v)
    (def base-path [])
    (def f [[assoc-in [:two :three] "dummy"]])
    (def forms f)
    (def form (first forms))
    (def x (get-in db base-path)))

  (let [ret (loop [x (get-in db base-path), forms f]
              (if forms
                (let [form     (first forms)
                      threaded (if (or (seq? form) (vector? form))
                                 (do (println "vec?" apply (first form) x (next form))
                                     (apply (first form) x (next form)))
                                 (do (println "NOT" list form x)
                                     (list form x)))]
                  (recur threaded (next forms)))
                x))]
    ;ret)

    (if (> 0 (count base-path))
      (assoc-in db base-path ret)
      ret))

  (apply assoc-in db '([:two :three] "dummy"))
  (def ret (apply (first form) x (next form)))

  (if (> 0 (count base-path))
    (assoc-in db base-path ret)
    ret)

  (fn-> {:one 1 :two {:three "missing"}}
    []
    [[assoc-in [:two :three] "dummy"]])


  (reset! v (fn->
              @v []
              [[assoc-in [:two :three] "dummy"]]))

  (assoc-in db base-path {:one 1, :two {:three "dummy"}})



  ())


(comment
  (do
    (def container-id "simple-multi-chart")
    (def component-id (path->keyword container-id "widget"))
    (def data [component-id :blackboard :topic.data])
    (def path [:data])
    (def old-data (atom {:metadata {:type   :tabular,
                                    :id     :name,
                                    :title  "Tabular Data with Metadata",
                                    :fields {:name :string, :uv :number, :pv :number, :tv :number, :amt :number}},
                         :data     [{:name "Page A", :uv 4000, :pv 2400, :tv 1500, :amt 2400}
                                    {:name "Page B", :uv 3000, :pv 1398, :tv 1500, :amt 2210}
                                    {:name "Page C", :uv 2000, :pv 9800, :tv 1500, :amt 2290}
                                    {:name "Page D", :uv 2780, :pv 3908, :tv 1500, :amt 2000}
                                    {:name "Page E", :uv 1890, :pv 4800, :tv 1500, :amt 2181}
                                    {:name "Page F", :uv 2390, :pv 3800, :tv 1500, :amt 2500}
                                    {:name "Page G", :uv 3490, :pv 4300, :tv 1500, :amt 2100}]}))
    (def value data)
    (def new-value (assoc-in (:data @old-data) [0 :uv] 10000)))



  (cond
    (or (coll? value)
      (keyword? value)
      (string? value)) (let [update-event (conj [(path->keyword value path)] new-value)]
                         ;(log/info "handle-change-path (update event)" update-event)
                         (re-frame/dispatch update-event))
    (instance? reagent.ratom.RAtom value) (swap! value assoc-in path new-value)
    (instance? Atom value) (swap! value assoc-in path new-value)
    :else ())

  (handle-change-path data [:data]
    (assoc-in (:data @old-data) [0 :uv] 10000))



  ())


(comment
  (def path [:uv :fill])
  (def value [:dummy])

  (path->keyword value path)
  (conj [(path->keyword value path)] "#000000")

  (->>
    (re-frame/subscribe [:coverage-plan-demo.component.blackboard.topic.current-time])
    deref
    str)

  ())


(comment
  (path->string "one" "two" "three/dummy")
  (path->keyword "one" "two" "three/dummy")

  (path->keyword :area-chart-demo.area-chart :grid nil)
  (path->string :area-chart-demo.area-chart :grid nil)


  (path->keyword :topic/layers)
  (path->keyword [:topic/layers])

  (apply conj [:containers]
    (map path->keyword [:blackboard :topic/layers]))

  ())


; work out source-local->, our "function" version of the -> macro
(comment
  (get-in @re-frame.db/app-db [:containers
                               :chart-with-fn.widget
                               :blackboard
                               :topic.data])

  (def base-path (apply conj [:containers (h/path->keyword :chart-with-fn.widget)]
                   (map h/path->keyword [:blackboard :topic/data])))

  (get-in @re-frame.db/app-db base-path)


  [:assoc-in (apply conj [:containers :chart-with-fn.widget :blackboard :topic.data]
               [:data 0 :uv])]

  ; assoc-in? YES!
  (source-local->
    @re-frame.db/app-db
    [:containers :chart-with-fn.widget :blackboard :topic.data]
    [[assoc-in [:data 0 :uv] 999999]])

  ; update-in? YES!
  (source-local->
    @re-frame.db/app-db
    [:containers :chart-with-fn.widget :blackboard :topic.data]
    [[update-in [:data 0 :uv] + 123]])

  ; assoc? YES!
  (source-local->
    @re-frame.db/app-db
    [:containers :chart-with-fn.widget :blackboard :topic.data]
    [[assoc :dummy 123]])

  ; update? YES! (and we can even string a few together!)
  (source-local->
    @re-frame.db/app-db
    [:containers :chart-with-fn.widget :blackboard :topic.data]
    [[assoc :dummy 123]
     [update :dummy * 2]])


  (do
    (def d {:one          {:two [1 2 3]}
            :data         [1 2 3 4 5 6]
            :container-id "dummy"})
    (def path [:one :two])
    (def value 4))

  (get-in d path)
  (assoc-in d path "hello")
  (conj (get-in d path) 4)
  (assoc-in d path (conj (get-in d path) value))
  (l/conj-in d path value)

  (def start (get-in d [:data]))

  (let [start (get-in d [:data])
        c     (if (vector? start)
                (into [] (drop value start))
                (drop value start))]
    (assoc-in d [:data] c))


  (l/drop-in d [:data] 2)
  (l/drop-last-in d [:data] 2)
  (l/drop-last-in (get-in @re-frame.db/app-db
                    [:containers :chart-with-fn.widget :blackboard :topic.data])
    [:data] 2)

  (assoc-in d [:container-id] (l/set-val d [] value))

  ; conj-in?
  (source-local->
    @re-frame.db/app-db
    [:containers :chart-with-fn.widget :blackboard :topic.data]
    [[l/conj-in [:dummy] 123]
     [l/conj-in [:dummy] 456]])


  ; drop-in? YES!
  (source-local->
    @re-frame.db/app-db
    [:containers :chart-with-fn.widget :blackboard :topic.data]
    [[l/drop-in [:data] 2]])

  ; drop-last-in? YES!
  (source-local->
    @re-frame.db/app-db
    [:containers :chart-with-fn.widget :blackboard :topic.data]
    [[l/drop-last-in [:data] 2]])

  ; set-val?
  (source-local->
    @re-frame.db/app-db
    [:containers :chart-with-fn.widget :blackboard :container-id]
    [[l/set-val [] "container"]])



  ())

; endregion
