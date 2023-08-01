(ns bh-ui.molecule.composite.multi-chart
  (:require [bh-ui.atom.chart.bar-chart :as chart]
            [bh-ui.atom.chart.utils :as utils]
            [bh-ui.utils :as ui-utils]
            [bh-ui.utils.color :as color]
            [bh-ui.utils.helpers :as h]
            [bh-ui.utils.locals :as l]
            [re-com.core :as rc]
            [re-frame.core :as re-frame]
            [taoensso.timbre :as log]))


(log/info "bh-ui.molecule.composite.multi-chart")


(def sample-data chart/sample-data)


(def default-config-data {:brush false
                          :uv    {:include true :fill (color/get-color 0) :stroke (color/get-color 0) :stackId ""}
                          :pv    {:include true :fill (color/get-color 1) :stroke (color/get-color 1) :stackId ""}
                          :tv    {:include true :fill (color/get-color 2) :stroke (color/get-color 2) :stackId ""}
                          :amt   {:include true :fill (color/get-color 3) :stroke (color/get-color 3) :stackId ""}})


(declare config-panel)


;; region ; create and handle subscription to :topic/config

;(defn- compute-data-config [data]
;  ;(log/info "compute-data-config" data)
;
;  (let [ret (merge {:brush false}
;              (->> (get-in data [:metadata :fields])
;                (filter (fn [[k v]] (= :number v)))
;                keys
;                (map-indexed (fn [idx a]
;                               {a {:include true
;                                   :stroke  (color/get-color idx)
;                                   :fill    (color/get-color idx)
;                                   :stackId ""}}))
;                (into {})))]
;    ;(log/info "compute-data-config (ret)" ret)
;    ret))
;
;
;(defn fn-make-config [{:keys [data config-data container-id] :as params}]
;  (re-frame/reg-sub
;    (first config-data)
;    :<- data
;    (fn [d _]
;      (doall
;        ; TODO: need a way to have :topic.config passed in somehow...
;        ;       - does the new :source/fn approach eliminate this issue?
;        (l/update-local-path-values container-id [:blackboard :topic.config] (compute-data-config d))))))
;
;
;(re-frame/dispatch-sync [:register-meta {:multi-chart/fn-make-config {:function fn-make-config
;                                                                      :ports {:data :port/sink
;                                                                              :config-data :port/sink}}}])

;; endregion


;; region ; create the UI panel for showing/changing the shared chart configuration

; TODO: refactor (data-config ...) for :source/local :config-data
(defn- data-config [config-data-path item position]
  [rc/v-box :src (rc/at)
   :gap "5px"
   :children [[rc/line :size "2px"]
              [rc/h-box :src (rc/at)
               :gap "5px"
               :children [[utils/boolean-config config-data-path item [item :include]]
                          [utils/color-config config-data-path ":stroke" [item :stroke] position]
                          [utils/color-config config-data-path ":fill" [item :fill] position]]]
              [utils/text-config config-data-path ":stackId" [item :stackId]]]])


; TODO: refactor (config-panel ...) for :source/local :config-data
(defn- config-panel [& {:keys [data component-id container-id] :as params}]
  (log/info "config-panel (a)" params)


  (let [c             (h/resolve-value data)
        data-only     (dissoc @c :brush)
        item-controls (map-indexed (fn [idx [item _]]
                                     (data-config data item (if (= 0 idx)
                                                              :below-right
                                                              :right-center)))
                        data-only)]

    ;(log/info "config-panel (b)" params
    ;  "//" data "//" @c)
    ;  ;"//" data-only)

    [:div.card.config-panel
     [rc/scroller
      :v-scroll :auto
      :height "90%"
      :child [rc/v-box :src (rc/at)
              :class "scroller-child"
              :width "100%"
              :height "100%"
              :gap "2px"
              :children (apply merge
                          [[utils/boolean-config data ":brush?" [:brush]]]
                          item-controls)]]]))



(comment
  (apply merge
    [["utils/boolean-config" "data" ":brush?" [:brush]]]
    [])

  ())


(re-frame/dispatch-sync [:register-meta {:multi-chart/config-panel {:component config-panel
                                                                    :port {:data :port/source-sink}}}])

;; endregion


(def ui-definition
  {:mol/components  {"ui/line"        {:atm/role :ui/component :atm/kind :rechart/line}
                     "ui/bar"         {:atm/role :ui/component :atm/kind :rechart/bar}
                     "ui/area"        {:atm/role :ui/component :atm/kind :rechart/area}
                     "ui/config"      {:atm/role :ui/component :atm/kind :multi-chart/config-panel}
                     "topic/data"     {:atm/role :source/local :atm/kind :topic/data :atm/default-data sample-data}
                     "topic/config"   {:atm/role :source/local :atm/kind :topic/config :atm/default-data default-config-data}}

   :mol/links       {"ui/config"      {:data {"topic/config" :data}}
                     "topic/data"     {:data {"ui/line"        :data
                                               "ui/bar"         :data
                                               "ui/area"        :data}}
                     "topic/config"   {:data {"ui/line"   :config-data
                                               "ui/bar"    :config-data
                                               "ui/area"   :config-data
                                               "ui/config" :data}}}

   :mol/grid-layout [{:i "ui/config" :x 0 :y 0 :w 20 :h 5 :static true}
                     {:i "ui/line" :x 0 :y 5 :w 7 :h 11 :static true}
                     {:i "ui/bar" :x 7 :y 5 :w 6 :h 11 :static true}
                     {:i "ui/area" :x 13 :y 5 :w 7 :h 11 :static true}]})


(def source-code '(let [def {:mol/components  {":ui/line"        {:atm/role :ui/component :atm/kind :rechart/line}
                                               ":ui/bar"         {:atm/role :ui/component :atm/kind :rechart/bar}
                                               ":ui/area"        {:atm/role :ui/component :atm/kind :rechart/area}
                                               ":ui/config"      {:atm/role :ui/component :atm/kind :multi-chart/config-panel}
                                               ":topic/data"     {:atm/role :source/local :atm/kind :topic/data :atm/default-data sample-data}
                                               ":topic/config"   {:atm/role :source/local :atm/kind :topic/config :atm/default-data {}}
                                               ":fn/make-config" {:atm/role :source/fn :atm/kind :multi-chart/fn-make-config}}

                             :mol/links       {":ui/config"      {:config-data {":topic/config" :data}}
                                               ":topic/data"     {:data {":ui/line"        :data
                                                                         ":ui/bar"         :data
                                                                         ":ui/area"        :data
                                                                         ":fn/make-config" :data}}
                                               ":topic/config"   {:data {":ui/line"   :config-data
                                                                         ":ui/bar"    :config-data
                                                                         ":ui/area"   :config-data
                                                                         ":ui/config" :config-data}}
                                               ":fn/make-config" {:config-data {":topic/config" :data}}}

                             :mol/grid-layout [{:i ":ui/config" :x 0 :y 0 :w 20 :h 5 :static true}
                                               {:i ":ui/line" :x 0 :y 5 :w 7 :h 11 :static true}
                                               {:i ":ui/bar" :x 7 :y 5 :w 6 :h 11 :static true}
                                               {:i ":ui/area" :x 13 :y 5 :w 7 :h 11 :static true}]}]
                    [grid-widget/component
                     :data def
                     :component-id (h/path->keyword container-id "widget")]))




; TODO: refactor testing for setting up subs/events to support widgets using :source/local
(comment
  @(re-frame/subscribe [:multi-chart-widget.widget.blackboard])
  @(re-frame/subscribe [:multi-chart-widget.widget.blackboard.topic.data])
  @(re-frame/subscribe [:multi-chart-widget.widget.blackboard.topic.config])


  @(re-frame/subscribe [:multi-chart-widget.widget.blackboard.topic.config.uv])
  @(re-frame/subscribe [:multi-chart-widget.widget.blackboard.topic.config.uv.include])
  @(re-frame/subscribe [:multi-chart-widget.widget.blackboard.topic.config.uv.fill])
  @(re-frame/subscribe [:multi-chart-widget.widget.blackboard.topic.config.uv.stroke])
  @(re-frame/subscribe [:multi-chart-widget.widget.blackboard.topic.config.uv.stackId])


  (re-frame/dispatch [:multi-chart-widget.widget.blackboard.topic.config.uv.include false])
  (re-frame/dispatch [:multi-chart-widget.widget.blackboard.topic.config.uv.include true])


  (get-in @re-frame.db/app-db [:containers :multi-chart-widget.widget])
  (get-in @re-frame.db/app-db [:containers :multi-chart-widget.widget :blackboard])
  (get-in @re-frame.db/app-db [:containers :multi-chart-widget.widget
                               :blackboard (ui-utils/path->keyword :topic/config)])
  (get-in @re-frame.db/app-db [:containers :multi-chart-widget.widget.blackboard])


  (reduce conj [:containers :dummy] [:blackboard :topic.config])

  (reduce conj [:containers] [:dummy])
  (reduce conj [:containers] [[:blackboard :topic.config]])

  (def container :multi-chart-widget.widget)
  (def container [:multi-chart-widget.widget :blackboard :topic.config])
  (def values "")
  (let [data-path (cond
                    (coll? container) (reduce conj [:containers] container)
                    :else [:containers container])]
    (get-in @re-frame/app-db data-path values))


  ())


