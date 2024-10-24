(ns demo.catalog.atom.example.chart.alt.data-tools
  (:require [bh-ui.core :as bh]
            [re-com.core :as rc]
            [taoensso.timbre :as log]))


(log/info "demo.catalog.atom.example.chart.alt.data-tools")


(defn meta-tabular-data-ratom-tools [data default-data random-data]
  [rc/h-box :src (rc/at)
   :gap "10px"
   :class "tools-panel"
   :children [[:label.h5 "Input Data:"]
              [rc/button :label "Empty" :on-click #(reset! data []) :label "Empty"]
              [rc/button :label "Default" :on-click #(reset! data default-data)]
              ; TODO: need to pass a "meaningful" random-data-set builder function into the tools
              [rc/button :label "Random" :on-click #(reset! data (random-data))]
              [rc/button :label "A(uv) -> 10,000" :on-click #(do
                                                               ;(log/info "meta-tabular-data-ratom-tools (button)" data)
                                                               (swap! data assoc-in [:data 0 :uv] 10000))]
              [rc/button :label "Add 'Q'"
               :on-click #(swap! data assoc :data
                            (conj (-> @data :data)
                              {:name "Page Q" :uv (rand-int 5000)
                               :pv   (rand-int 5000) :tv (rand-int 5000) :amt (rand-int 5000)}))]

              [rc/button :label "Drop Last 2"
               :on-click #(swap! data assoc :data (into [] (drop-last 2 (:data @data))))]

              [rc/button :label "Add :new-item"
               :on-click #(reset! data (-> @data
                                         (assoc-in [:metadata :fields :new-item] :number)
                                         (assoc :data (into []
                                                        (map (fn [x]
                                                               (assoc x :new-item (rand-int 7000)))
                                                          (:data @data))))))]]])


(defn meta-tabular-data-sub-tools [data default-data random-data]

  (let [old-data (bh/utils-subscribe-local data [:data])
        old-meta (bh/utils-subscribe-local data [])]

    (fn []
      [rc/h-box :src (rc/at)
       :gap "10px"
       :class "tools-panel"
       :children [[:label.h5 "Input Data:"]

                  [rc/button :label "Empty" :on-click #(bh/utils-handle-change-path (drop-last data) [[bh/utils-set-local-values (take-last 1 data) []]])]

                  [rc/button :label "Default"
                   :on-click #(bh/utils-handle-change-path (drop-last data) [[bh/utils-set-local-values (take-last 1 data) default-data]])]

                  [rc/button :label "Random" :on-click #(bh/utils-handle-change-path data [[bh/utils-set-local-values [] (random-data)]])]

                  [rc/button :label "A(uv) -> 10000"
                   :on-click #(bh/utils-handle-change-path data [[assoc-in [:data 0 :uv] 10000]])]

                  [rc/button :label "Add 'Q'"
                   :on-click #(bh/utils-handle-change-path data [[bh/utils-conj-in [:data]
                                                                  {:name "Page Q" :uv (rand-int 5000)
                                                                   :pv   (rand-int 5000) :tv (rand-int 5000) :amt (rand-int 5000)}]])]

                  [rc/button :label "Drop Last 2"
                   :on-click #(bh/utils-handle-change-path data [[bh/utils-drop-last-in [:data] 2]])]

                  [rc/button :label "Add :new-item"
                   :on-click #(bh/utils-handle-change-path data [[assoc-in [:metadata :fields :new-item] :number]
                                                                 [assoc :data (into []
                                                                                (map (fn [x]
                                                                                       (assoc x :new-item (rand-int 7000)))
                                                                                  @old-data))]])]]])))


(defn- add-node [data new-node]
  (let [original   (bh/utils-resolve-value data)
        next-index (->> @original
                     :nodes
                     (map :index)
                     (apply max)
                     inc)]
    (-> data
      bh/utils-resolve-value
      deref
      (assoc :nodes (conj (:nodes @original) {:name new-node :index next-index})))))


(defn- add-nodes-and-link [data source target value]
  (let [original   (bh/utils-resolve-value data)
        next-index (->> @original
                     :nodes
                     (map :index)
                     (apply max)
                     inc)]
    (-> data
      bh/utils-resolve-value
      deref
      (assoc :nodes (conj (:nodes @original)
                      {:name source :index next-index}
                      {:name target :index (inc next-index)})
             :links (conj (:links @original)
                      {:source source :target target :value value})))))


(defn- add-link [data source target value]
  (-> data
    bh/utils-resolve-value
    deref
    (update :links conj {:source source :target target :value value})))


(defn- update-link [data source target new-value]
  (let [original-data (bh/utils-resolve-value data)
        original-link (->> @original-data
                        :links
                        (filter #(and (= source (:source %)) (= target (:target %))))
                        first)]
    (-> data
      bh/utils-resolve-value
      deref
      (update :links disj original-link)
      (update :links conj {:source source :target target :value new-value}))))


(defn dag-data-ratom-tools [data default-data]
  [rc/h-box :src (rc/at)
   :gap "10px"
   :class "tools-panel"
   :children [[:label.h5 "Input Data:"]

              [rc/button :label "Empty" :on-click #(reset! data [])]

              [rc/button :label "Default" :on-click #(reset! data default-data)]

              [rc/button :label "+ Redirect (1)"
               :on-click #(reset! data (add-node data :Redirect))]

              [rc/button :label "+ Visit->Redirect (2)"
               :on-click #(reset! data (add-link data :Visit :Redirect 24987))]

              [rc/button :label "Redirect = 50000 (3)"
               :on-click #(reset! data (update-link data :Visit :Redirect 50000))]

              [rc/button :label "+ Dummy->New-thing"
               :on-click #(reset! data (add-nodes-and-link data :Dummy :New-thing 124987))]]])


(defn dag-data-sub-tools [data default-data]
  [rc/h-box :src (rc/at)
   :gap "10px"
   :class "tools-panel"
   :children [[:label.h5 "Input Data:"]]])

;[rc/button :label "Empty" :on-click #(bh/utils-handle-change-path data [] [])]
;
;[rc/button :label "Default" :on-click #(bh/utils-handle-change-path data [] default-data)]
;
;[rc/button :label "+ Redirect (1)"
; :on-click #(bh/utils-handle-change-path data [] (add-node data :Redirect))]
;
;[rc/button :label "+ Visit->Redirect (2)"
; :on-click #(bh/utils-handle-change-path data [] (add-link data :Visit :Redirect 24987))]
;
;[rc/button :label "Redirect = 50000 (3)"
; :on-click #(bh/utils-handle-change-path data [] (update-link data :Visit :Redirect 50000))]
;
;[rc/button :label "+ Dummy->New-thing"
; :on-click #(bh/utils-handle-change-path data [] (add-nodes-and-link data :Dummy :New-thing 124987))]]])
;




(comment
  (def data [:area-chart-2-data-sub-demo :blackboard :topic.sample-data])
  (def old-data (bh/utils-subscribe-local data [:data]))


  (bh/utils-handle-change-path data [:data]
    (assoc-in @(bh/utils-subscribe-local data [:data]) [0 :uv] 10000))
  (bh/utils-handle-change-path data [:data]
    (assoc-in @(bh/utils-subscribe-local data [:data]) [0 :pv] 7000))


  ())


(comment
  (do
    (def source :Visit)
    (def target :Page-Click)
    (def data {:nodes #{{:name :Visit :index 0}
                        {:name :Direct-Favourite :index 1}
                        {:name :Page-Click :index 2}
                        {:name :Detail-Favourite :index 3}
                        {:name :Lost :index 4}}
               :links #{{:source :Visit :target :Direct-Favourite :value 37283}
                        {:source :Visit :target :Page-Click :value 354170}
                        {:source :Page-Click :target :Detail-Favourite :value 62429}
                        {:source :Page-Click :target :Lost :value 291741}}})

    (def original-data (bh/utils-resolve-value data)))

  (def next-index (->> @original-data
                    :nodes
                    (map :index)
                    (apply max)
                    inc))


  (def original-link (->> @original-data
                       :links
                       (filter #(and (= source (:source %)) (= target (:target %))))
                       first))

  (disj (:link data) original-link)

  ())
