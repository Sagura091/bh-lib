(ns bh-ui.molecule.composite.util.signals
  (:require [bh-ui.utils :as ui-utils]
            [bh-ui.events :as events]
            [bh-ui.subs :as subs]
            [bh-ui.utils.locals :as ul]
            [day8.re-frame.tracing :refer-macros [fn-traced]]
            [woolybear.ad.containers :as containers]
            [woolybear.ad.layout :as layout]
            [re-com.core :as rc]
            [re-frame.core :as re-frame]
            [loom.graph :as lg]
            [loom.alg :as lalg]
            [taoensso.timbre :as log]
            ["dagre" :as dagre]
            ["graphlib" :as graphlib]
            ["reactflow" :refer (ReactFlowProvider Controls Handle Background)]))


(defn- error-ui
  "this UI element is used in those cases where a widget definition tries to use a component impleentation
  that is NOT found in the registry. Since Reagent really does not like nil's as the component function, we
  need ot provide something useful to the user and, ultimately, the developer."
  [& {:as m}]

  [rc/alert-box :src (rc/at)
   :alert-type :warning
   :body [rc/v-box :src (rc/at)
          :gap "2px"
          :children [[:h3 "Problem with the widget!"]
                     [:p "This widget tried to use a UI component that was not in the 'registry'."]
                     [rc/gap :size "5px"]
                     [:p "This is the data passed into the component. It may help point to the offending code."]
                     [rc/line :size "2px"]
                     [containers/v-scroll-pane
                      {:height "4rem" :width "100px"}
                      [layout/text-block (str m)]]
                     [rc/line :size "2px"]
                     [:p "Please contact Tech Support."]]]])

(defn- make-params [configuration node direction container-id]
  (let [ret (->> configuration
              :denorm
              ((fn [n] (get n node)))
              direction
              (map (fn [[target ports]]
                     (let [[source-port target-port] ports
                           target-type (get-in configuration [:mol/components target :atm/role])
                           remote      (get-in configuration [:mol/components target :atm/kind])]
                       ;(log/info "make-params (a)" target "//" target-type "//" remote)
                       (if (= direction :outputs)
                         {source-port (if (= :source/local target-type)
                                        [(ui-utils/path->keyword container-id :blackboard target)]
                                        [::subs/source remote])}
                         {target-port (condp = target-type
                                        :source/local [(ui-utils/path->keyword container-id :blackboard target)]
                                        :source/fn (let [sub-name (get-in configuration [:mol/components target :atm/kind])]
                                                     [(ui-utils/path->keyword container-id :blackboard sub-name)])
                                        :else [::subs/source remote])}))))
              (into {}))]
    ;(log/info "make-params (b)" node "//" container-id "//" ret)
    ret))


(defmulti component->ui (fn [{:keys [type]}]
                          type))


(def last-params (atom nil))
(def last-hiccup (atom nil))


; :ui/component
(defmethod component->ui :ui/component [{:keys [node atm-set registry configuration component-id container-id] :as params}]

  (reset! last-params params)

  (let [ui-type    (get-in configuration [:mol/components node :atm/kind])
        bh-ui      (if (keyword? ui-type)
                     (->> registry ui-type :component)
                     ui-type)
        styl       (get-in configuration [:mol/components node :atm/style])
        children?  (->> registry ui-type :children)
        children   (-> configuration :mol/components (get node) :atm/children)
        child?     (->> registry ui-type :child)
        child      (-> configuration :mol/components (get node) :atm/child)
        def-config (-> configuration :mol/components (get node) :atm/default-config)
        label      (-> configuration :mol/components (get node) :atm/label)

        ;_         (log/info "component->ui :ui/component" node "//" ui-type "//" bh-ui "//"
        ;            children? "//" children "//"
        ;            child? "//" child "//"
        ;            @atm-set)

        ret        {node

                    {:component (condp = [child? children?]

                                  [:enumerated nil]
                                  (do
                                    ;(log/info "enumerated child" node "//" child)
                                    (into [(or bh-ui error-ui) (or styl {:style {:height "100%" :width "100%"}})]
                                      (:component ((fn [c] (get @atm-set c)) child))))

                                  [:keyword nil]
                                  (do
                                    ;(log/info "keyword child" node "//" child)
                                    [(or bh-ui error-ui)
                                     :style (or styl {:height "100%" :width "100%"})
                                     :config def-config
                                     :child (:component ((fn [c] (get @atm-set c)) child))])

                                  [nil :enumerated]
                                  (do
                                    ;(log/info "enumerated children" node "//" children)
                                    (into [(or bh-ui error-ui) (or styl {:style {:height "100%" :width "100%"}})]
                                      (map (fn [c] (:component (get @atm-set c))) children)))

                                  [nil :keyword]
                                  (do
                                    ;(log/info "keyword children" node "//" children)
                                    [(or bh-ui error-ui)
                                     :style (or styl {:height "100%" :width "100%"})
                                     :config def-config
                                     :children (into [] (map (fn [c] (:component (get @atm-set c))) children))])

                                  [nil nil]
                                  (do
                                    ;(log/info "NO Children!" node)
                                    (reduce into [(or bh-ui error-ui)
                                                  :component-id component-id :container-id container-id
                                                  :style (or styl {:height "100%" :width "100%"})
                                                  :config def-config]
                                      (seq
                                        (merge
                                          (make-params configuration node :inputs container-id)
                                          (make-params configuration node :outputs container-id))))))
                     :label     label}}]

    (reset! last-hiccup ret)
    ret))


; :source/local
(defmethod component->ui :source/local [{:keys [node meta-data configuration container-id] :as params}]
  ;(log/info "component->ui :source/local" node meta-data)

  (let [denorm     (:denorm configuration)
        components (:mol/components configuration)]

    ; 1. add the key to the blackboard, uses the :default property of the meta-data
    ;
    ;  only IF one exists, otherwise we assume it will be serviced by a :source/fn somewhere
    ;
    (when (:default meta-data)
      (ul/dispatch-local container-id [:blackboard node] (:default meta-data)))

    ; 2. create the subscription against the new :blackboard key
    (ul/create-container-local-sub container-id
      [:blackboard node]
      (:default meta-data)
      (if-let [inputs (:inputs (get denorm node))]          ; if this :source/local falls after another component, depend upon IT!
        (->> (get components (first (keys inputs)))
          :atm/kind)))

    ; TODO: approach #2 ==> create subs to each element of the defaults, when provided
    ;(when default
    ;  (let [paths (process-locals [] nil default)]))))

    ; 3. create the event against the new :blackboard key
    (ul/create-container-local-event container-id [:blackboard node])

    ; 4. return the signal vector for the new subscription
    [(ui-utils/path->keyword container-id [:blackboard node])]))


;source/remote
(defmethod component->ui :source/remote [{:keys [node meta-data]}]
  ; get the meta-data for the node and use the "actual name" as the thing to subscribe to
  (let [remote (:atm/kind meta-data)]

    ;(log/info "component->ui :source/remote" node "//" remote)

    ; 1. subscribe to the server (if needed)
    (re-frame/dispatch-sync [::events/subscribe-to #{remote}])

    ; 2. return the signal vector to the new data-source key
    [::subs/source remote]))


; :source/fn
(defmethod component->ui :source/fn [{:keys [node configuration container-id] :as inputs}]
  (let [fn-name   (get-in configuration [:mol/components node :atm/kind])
        actual-fn (if (keyword fn-name)
                    (-> @(re-frame/subscribe [:meta-data-registry]) fn-name :function)
                    fn-name)
        params    (merge
                    {:container-id container-id
                     :sub-name     [(ui-utils/path->keyword container-id :blackboard fn-name)]}
                    (make-params configuration node :inputs container-id))]

    ;(log/info "component->ui :source/fn" node "//" fn-name "//" params "//" actual-fn)

    (actual-fn params)))


(defn process-components [configuration node-type registry container-id]
  (doall
    (->> configuration
      :mol/components
      (filter (fn [[_ meta-data]]
                (= node-type (:atm/role meta-data))))
      (map (fn [[node meta-data]]
             ;(log/info "process-components (nodes)" node "//" meta-data "//" (:atm/role meta-data))
             (component->ui {:node          node
                             :type          (:atm/role meta-data)
                             :meta-data     meta-data
                             :configuration configuration
                             :registry      registry
                             :component-id  (ui-utils/path->keyword container-id node)
                             :container-id  container-id}))))))


(defn process-components-stateful [configuration node-type registry container-id]
  (let [atm-set       (atom {})
        cfg           (->> configuration
                        :mol/components
                        (filter (fn [[_ meta-data]]
                                  (= node-type (:atm/role meta-data))))
                        (into {}))
        edges         (mapcat (fn [[name {:keys [atm/children]}]]
                                (when children
                                  (map (fn [c] [name c]) children)))
                        cfg)
        g             (-> (lg/digraph)
                        (#(apply lg/add-nodes % (keys cfg)))
                        (#(apply lg/add-edges % edges))
                        (lalg/topsort)
                        reverse)
        sorted-config (map (fn [id]
                             (-> configuration
                               :mol/components
                               (get id)
                               ((fn [x] [id x]))))
                        g)]
    (doall
      (map (fn [[node meta-data]]
             (let [atm
                   (bh-ui.molecule.composite.util.signals/component->ui
                     {:node          node
                      :atm-set       atm-set
                      :type          (:atm/role meta-data)
                      :meta-data     meta-data
                      :configuration configuration
                      :registry      registry
                      :component-id  (ui-utils/path->keyword container-id node)
                      :container-id  container-id})]
               ; (log/info "process-components-stateful" atm "//" @atm-set)
               (swap! atm-set merge atm)
               atm))
        sorted-config))))



; what if :source/local is fed from another component, say a :source/fn?
;       1) how do we communicate this situation?
(comment
  (do
    (def configuration (:configuration @last-locals))
    (def node (:node @last-locals))
    (def denorm (:denorm configuration))
    (def components (:mol/components configuration)))

  (if-let [inputs (:inputs (get denorm node))]
    (->> (get components (first (keys inputs)))
      :atm/kind))



  ())



(comment
  (merge {} {:one "one"})
  (merge {:one "one"} {:two "two"})


  {"v-scroll" ["#object[woolybear$ad$containers$v_scroll_pane]"
               {:style {:height "500px", :width "700px"}}
               ["#object[bh_ui$atom$chart$bar_chart$component]"
                :component-id :v-scroll-with-children.molecule.bar-chart
                :container-id :v-scroll-with-children.molecule
                :data [:v-scroll-with-children.molecule.blackboard.data]]
               ["#object[bh_ui$atom$chart$line_chart$component]"
                :component-id :v-scroll-with-children.molecule.line-chart
                :container-id :v-scroll-with-children.molecule
                :data [:v-scroll-with-children.molecule.blackboard.data]]]}
  ())


(comment
  (do
    (def configuration (:configuration @last-params))
    (def node "v-scroll")                                   ;(:node @last-params))
    (def atm-set (:atm-set @last-params))
    (def registry (:registry @last-params))

    (def ui-type (get-in configuration [:mol/components node :atm/kind]))
    (def bh-ui (if (keyword? ui-type)
                 (->> registry ui-type :component
                   ui-type)))
    (def styl (get-in configuration [:mol/components node :atm/style]))
    (def children? (->> registry ui-type :children))
    (def children (-> configuration :mol/components (get node) :atm/children))
    (def child? (->> registry ui-type :child))
    (def child (-> configuration :mol/components (get node) :atm/child)))


  [(or bh-ui error-ui) (or styl {:style {:height "100%" :width "100%"}})
   :child ((fn [c] (get @atm-set c)) child)]



  (:component ((fn [c] (get @atm-set c)) child))

  (into [] (map (fn [c] (:component (get @atm-set c))) children))


  ())

