(ns demo.catalog.molecule.example.composite.function-chain
  (:require [bh-ui.core :as bh]
            [re-com.core :as rc]
            [re-frame.core :as re-frame]
            [day8.re-frame.tracing :refer-macros [fn-traced]]
            [reagent.core :as r]
            [taoensso.timbre :as log]
            [woolybear.ad.catalog.utils :as acu]
            [woolybear.ad.layout :as layout]))


(def source-code '[])
(def example-data {:metadata {:type   :data/tabular
                              :id     :name
                              :title  "Function Chain Data"
                              :fields {:name :string :a :number}}
                   :data     [{:name "One" :a 100}
                              {:name "Two" :a 150}
                              {:name "Three" :a 200}]})


(def mol-def
  {:mol/components  {"input-data" {:atm/role         :source/local :atm/kind :input/data
                                   :atm/default-data example-data}
                     "chart"      {:atm/role :ui/component :atm/kind :rechart/bar}
                     "add-b"      {:atm/role :source/fn :atm/kind :fn/add-b}
                     "add-c"      {:atm/role :source/fn :atm/kind :fn/add-c}}

   :mol/links       {"input-data" {:data {"add-b" :data}}
                     "add-b"      {:data {"add-c" :data}}
                     "add-c"      {:data {"chart" :data}}}

   :mol/grid-layout [{:i "chart" :x 0 :y 0 :w 10 :h 5 :static true}]})


(defn- make-handler [data sub-name]
  ;(log/info "make-handler" sub-name "//" data)

  (re-frame/reg-event-fx
    (first sub-name)
    (fn-traced [_ updates]
      ;(log/info sub-name "handler" updates)
      {:dispatch (apply conj data (drop 1 updates))})))


(defn add-b [{:keys [data sub-name]}]
  ;(log/info "add-b (a)" sub-name "//" data)

  (re-frame/reg-sub
    (first sub-name)
    :<- data
    (fn [d _]
      (if (empty? d)
        d
        (-> d
          (assoc-in [:metadata :fields :b] :number)
          (assoc-in [:data] (->> d
                              :data
                              (map (fn [x] (assoc x :b (* 2.3 (:a x)))))
                              (into [])))))))

  (make-handler data sub-name))


(defn add-c [{:keys [data sub-name]}]
  (re-frame/reg-sub
    (first sub-name)
    :<- data
    (fn [d _]
      (if (empty? d)
        d
        (-> d
          (assoc-in [:metadata :fields :c] :number)
          (assoc-in [:data] (->> d
                              :data
                              (map (fn [x] (assoc x :c (* (:a x) (:b x) 0.0011355))))
                              (into [])))))))

  (make-handler data sub-name))


(re-frame/dispatch-sync
  [:register-meta
   {:fn/add-b {:function add-b
               :ports    {:data :port/sink}}
    :fn/add-c {:function add-c
               :ports    {:data :port/sink}}}])


(defn- data-tools [data source-data]
  (let [old-data (bh/utils-subscribe-local data [])]

    ;(log/info "data-tools" data "//" source-data)

    (fn []
      [rc/h-box :src (rc/at)
       :gap "10px"
       :class "tools-panel"
       :children [[:label.h5 "Input Data:"]

                  [rc/button :on-click #(bh/utils-handle-change-path (drop-last source-data)
                                          [[bh/utils-set-local-values (take-last 1 source-data) {}]]) :label "Empty"]

                  [rc/button :on-click #(bh/utils-handle-change-path (drop-last source-data)
                                          [[bh/utils-set-local-values (take-last 1 source-data) example-data]])
                   :label "Default"]

                  [rc/button :on-click #(bh/utils-handle-change-path data [[assoc-in [:data 0 :a] 444]])
                   :label "One:a -> 444"]

                  [rc/button :on-click #(bh/utils-handle-change-path data [[assoc-in [:data 1 :a] 24]])
                   :label "Two:a -> 24"]]])))


(defn- data-config-update-example [& {:keys [widget component-id] :as params}]
  ;(log/info "config-update-example (params)" params)

  [rc/v-box :src (rc/at)
   :gap "10px"
   :width "100%"
   :height "100%"
   :children [[:div.chart-part {:style {:width "100%"}}     ;:height "90%"}}
               widget]

              [rc/v-box :src (rc/at)
               :gap "8px"
               :children [[data-tools
                           [component-id :blackboard "add-c"]
                           [component-id :blackboard :input-data]]]]]])


(defn example []
  (let [container-id "function-chain"
        component-id (bh/utils-path->keyword container-id "molecule")]
    (fn []
      (acu/demo "Widget with multiple functions chained together"
        "The chart will draw data from the end of a chain of function"
        [layout/frame
         ;;
         ;; NOTE: the :height MUST be specified here since the ResponsiveContainer down in bowels of the chart needs a height
         ;; in order to actually draw the Recharts components. just saying "100%" doesn't work, since the
         ;; that really means "be as big as you need" and ResponsiveContainer then doesn't know what to do.
         ;;
         [:div.molecule-content
          [data-config-update-example
           :widget [bh/grid-container
                    :data (r/atom mol-def)
                    :component-id component-id
                    :resizable true
                    :tools true]
           :component-id component-id]]]

        source-code))))



; how to update the data using add-b and add-c
(comment
  (-> example-data
    (assoc-in [:metadata :fields :b] :number)
    (assoc-in [:data] (->> example-data
                        :data
                        (map (fn [x] (assoc x :b (* 2.3 (:a x)))))
                        (into []))))

  (->> example-data
    :data
    (map (fn [x] (assoc x :b (* 2.3 (:a x)))))
    (into []))


  (do
    (def sub-name [:function-chain.molecule.blackboard.add-b])
    (def data [:function-chain.molecule.blackboard.input-data]))

  (re-frame/reg-sub
    (first sub-name)
    :<- data
    (fn [d _]
      d))

  (add-b {:data data :sub-name sub-name})

  ())