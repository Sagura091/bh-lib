(ns  bh-ui.utils.component-validator
  (:require  [malli.core :as m]
             [malli.error :as me]))

(defn- invalid-component-explanation [schema actual-values]
  [:div
   [:p "Expected Schema: " (-> schema (m/explain actual-values) (me/humanize))]])

(defn component-validator [& {:keys [schema component data config style]}]
  (let [actual-values {
                       :data data
                       :config config
                       :style style}]
    (if (m/validate schema actual-values)
      (component :data data
                 :config config
                 :style style)
      (invalid-component-explanation schema actual-values))))
