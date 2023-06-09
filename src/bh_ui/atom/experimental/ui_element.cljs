(ns bh-ui.atom.experimental.ui-element

  "some components that act as stand-ins for 'real' bh-uis"

  (:require [bh-ui.atom.re-com.labeled-field :as lf]
            [bh-ui.utils.helpers :as h]
            [re-com.core :as rc]
            [re-frame.core :as re-frame]
            [re-frame.core :as rf]
            [reagent.core :as r]
            [taoensso.timbre :as log]))


(log/info "bh-ui.atom.experimental.ui-element")


(defn config-panel [& {:keys [config-data] :as params}]
  ;(log/info "config-panel" params)

  (let [c (h/resolve-value config-data)]

    ;(log/info "config-panel (resolve-value)" @c)

    [:div.card.h-w-100pc
     (map (fn [[k v]]
            ^{:key k} [lf/labeled-field (str k) v])
       @c)]))


(defn selectable-table [& {:keys [data selection]}]

  ;(log/info "selectable-table data" data "// selection" selection)

  (let [source  (re-frame/subscribe data)
        clicked (r/atom 0)]
    (fn [& {:keys [data selection component-id container-id]}]
      ;(log/info "selectable-table RENDER")
      [:div.card.selectable-table-container
       [:h2.center-text "Selectable Table"]
       [:div.ui-element
        [lf/labeled-field "data" @source]
        [:button.button {:on-click #(do
                                      (swap! clicked inc)
                                      (re-frame/dispatch (conj selection @clicked)))}
         "Click!"]]])))


(defn three-d-globe [& {:keys [layers current-time component-id container-id]}]

  ;(log/info "three-d-globe layers" layers "// current-time" current-time)

  (let [l (re-frame/subscribe layers)
        t (re-frame/subscribe current-time)]
    (fn [& {:keys [layers current-time component-id container-id]}]
      ;(log/info "three-d-globe RENDER")
      [:div.card.globe-container
       [:h2.center-text "3D Globe Table"]
       [:div.ui-element
        [rc/input-textarea
         :src (rc/at)
         :model (r/atom (str @l))
         :rows 5
         :on-change #()]
        [lf/labeled-field "Current Time" @t]]])))


(defn slider [& {:keys [value range]}]

  ;(log/info "slider value" value "// range" range)

  (let [v (re-frame/subscribe value)
        r (re-frame/subscribe range)]
    (fn [& {:keys [value range]}]
      ;(log/info "slider RENDER")
      (let [[min max] @r]
        [:div.card.slider-label-container
         [:h2.center-text "Slider"]
         [rc/slider
          :src (rc/at)
          :model (str @v)
          :min min
          :max max
          :width "90%"
          :style {:margin-left :auto :margin-right :auto}
          :on-change #(do
                        ;(log/info "slider" (str %))
                        (re-frame/dispatch-sync (conj value %)))
          :disabled? false]
         [:div.ui-element
          [lf/labeled-field "Value" @v]
          [lf/labeled-field "Range" @r]]]))))


(defn label [& {:keys [value]}]

  ;(log/info "label value" value)

  (let [v (re-frame/subscribe value)]
    ;(log/info "label RENDER")
    (fn [& {:keys [value]}]
      [:div.card.slider-label-container
       [:h2.center-text "Label"]
       [:div.ui-element
        [lf/labeled-field "Value" @v]]])))



(def meta-data {:stunt/config-panel     {:component config-panel
                                         :ports     {:config-data :port/source-sink}}
                :stunt/selectable-table {:component selectable-table
                                         :ports     {:data      :port/source-sink ; out this be {:data-in :port/sink} & {:data-out :port/source}?
                                                     :selection :port/source}}

                :stunt/globe            {:component three-d-globe
                                         :ports     {:layers       :port/sink
                                                     :current-time :port/sink}}

                :stunt/label            {:component label
                                         :ports     {:value :port/sink}}

                :stunt/slider           {:component slider
                                         :ports     {:value :port/source-sink
                                                     :range :port/sink}}})


(rf/dispatch-sync [:register-meta meta-data])





(comment
  (def data [:sources/string])

  ())

