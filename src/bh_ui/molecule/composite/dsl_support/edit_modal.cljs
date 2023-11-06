(ns bh-ui.molecule.composite.dsl-support.edit-modal
  (:require [bh-ui.molecule.composite.dsl-support.dsl-nodes :as dsl]
            [reagent.core :as r]
            [re-com.core :as rc]
            [taoensso.timbre :as log]))


(log/info "bh-ui.molecule.composite.dsl-support.edit-modal")


(defn- assoc-flow-node [nodes-atom id update-path update-value]
  (log/info "assoc-flow-node" (:mol/flow-nodes nodes-atom) "_____" id "____" update-path "____" update-value)

  (let [flow-nodes (:mol/flow-nodes nodes-atom)
        the-node (first (filter #(= id (:id %)) flow-nodes))
        the-rest (remove #(= id (:id %)) flow-nodes)]
    (assoc nodes-atom :mol/flow-nodes
      (conj the-rest (assoc-in the-node update-path update-value)))))


(defn- update-dsl [dsl node-data]
  (let [id (:id node-data)
        text (:text node-data)
        kind (dsl/string->keyword (:kind node-data))]
    (swap! dsl
      #(-> %
         (assoc-in [:mol/components id :atm/label] text)
         (assoc-in [:mol/components id :atm/kind] kind)
         (assoc-flow-node id [:data :label] text)
         (assoc-flow-node id [:data :kind] kind)
         (assoc-flow-node id [:data :kind-js] (str kind))))

    (log/info "update-dsl"
      (get-in @dsl [:mol/components id])
      (get-in @dsl [:mol/flow-nodes id]))))



(defn edit-modal [dsl node-data show?]
  (log/info "edit-modal" @dsl "_____" @node-data)

  (let [save-form-data (r/atom @node-data)
        process-ok     (fn [event]
                         (update-dsl dsl @node-data)
                         (reset! show? false)
                         (log/info "Submitted form data:" @node-data)
                         false)                             ;; Prevent default "GET" form submission (if used)
        process-cancel (fn [event]
                         (reset! node-data @save-form-data)
                         (reset! show? false)
                         (log/info "Cancelled form data:" @node-data)
                         false)]
    (fn []
      [rc/border :src (rc/at)
       :border "1px solid #eee"
       :child [rc/v-box :src (rc/at)
               :padding "10px"
               :style {:background-color "cornsilk"}
               :children [[rc/title :src (rc/at) :label "Edit this Element" :level :level2]
                          [rc/v-box :src (rc/at)
                           :class "form-group"
                           :children [[:label "Name / Label"]
                                      [rc/input-text :src (rc/at)
                                       :model (:text @node-data)
                                       :on-change #(swap! node-data assoc :text %)
                                       :placeholder "Enter name / label"
                                       :class "form-control"
                                       :attr {:id "text"}]]]
                          [rc/v-box :src (rc/at)
                           :class "form-group"
                           :children [[:label "Kind"]
                                      [rc/input-text :src (rc/at)
                                       :model (:kind @node-data)
                                       :on-change #(swap! node-data assoc :kind %)
                                       :placeholder "Enter kind of element"
                                       :class "form-control"
                                       :attr {:id "kind"}]]]
                          [rc/line :src (rc/at) :color "#ddd" :style {:margin "10px 0 10px"}]
                          [rc/h-box :src (rc/at)
                           :gap "12px"
                           :children [[rc/button :src (rc/at)
                                       :label "Okay"
                                       :class "btn-primary"
                                       :on-click process-ok]
                                      [rc/button :src (rc/at)
                                       :label "Cancel"
                                       :on-click process-cancel]]]]]])))


