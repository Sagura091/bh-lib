(ns demo.catalog.molecule.example.composite.colored-selection-table
  (:require [bh-ui.molecule.grid-container :as grid]
            [bh-ui.utils.helpers :as h]
            [bh-ui.atom.bhui.color-pallet :as cp]
            [reagent.core :as r]
            [re-frame.core :as re-frame]
            [taoensso.timbre :as log]
            [woolybear.ad.catalog.utils :as acu]
            [woolybear.ad.layout :as layout]))


(def ui-definition {:mol/components  {"table"      {:atm/role           :ui/component :atm/kind :react-table/table
                                                    :atm/default-config demo.catalog.atom.example.experimental.react-table/data-config}
                                      "colorize"   {:atm/role :source/fn :atm/kind :bh-fn/colorize}
                                      "input-data" {:atm/role :source/local :atm/kind :topic/input-data
                                                    :default  demo.catalog.atom.example.experimental.react-table/data}}

                    :mol/links       {"input-data" {:data {"colorize" :data}}
                                      "colorize"   {:data {"table" :data}}}

                    :mol/grid-layout [{:i "table" :x 0 :y 0 :w 10 :h 10}]})


(defn- color-entities [d p next-color topic k]
  (let [cnt          (count cp/color-pallet)
        last-data    ((keyword topic) p)
        assigned     (map (juxt k :color) last-data)
        assigned-set (->> assigned (map first) set)]

    (assoc d :data (doall
                     (into [] (map (fn [e]
                                     (if (contains? assigned-set (k e))
                                       (assoc e :color (->> last-data
                                                         (filter #(= (k e) (k %)))
                                                         first
                                                         :color))
                                       (assoc e :color (nth cp/color-pallet
                                                         (mod (swap! next-color inc) cnt)))))
                                (:data d)))))))


(defn- colorize [{:keys [data sub-name]}]
  (log/info "colorize (a)" sub-name "//" data)

  (let [next-target-color (atom -1)
        [component topic] (-> sub-name
                            first
                            name
                            (clojure.string/split #".blackboard."))
        path              [(keyword (str component ".blackboard"))]]

    ;(log/info "colorize (b)" sub-name "//" data "//" colored
    ;  "//" path "//" component "//" topic)

    (re-frame/reg-sub
      (first sub-name)
      :<- data
      :<- path
      (fn [[d p] _]
        (log/info "colorize (c)" d)

        (let [ret (color-entities d p next-target-color topic :name)]

          (log/info "colorize (d)" ret)

          ; need to store this in the app-db because this fn is STATEFUL, we don't
          ; want to change a target if it has already been assigned a color
          (h/handle-change-path path [topic] ret)

          ret)))))


(re-frame/dispatch-sync
  [:register-meta {:bh-fn/colorize {:function colorize
                                    :ports    {:data :port/sink}}}])


(def source-code '[])


(defn example []
  (let [container-id "cs-table"
        component-id (h/path->keyword container-id "molecule")]
    (fn []
      (acu/demo "Colored Selection Table"
        "Working out how to build the correct :data and :config inputs for pistachio to use
        the new :react-table/table atom"

        [layout/frame
         [:div.molecule-content
          [grid/component
           :data (r/atom ui-definition)
           :component-id component-id
           :resizable true
           :tools true]]]

        source-code))))
