(ns bh-ui.atom.astrouxds.progress-bar
  (:require ["@astrouxds/react" :refer [RuxProgress]]))

(defn progress-bar [& {:keys [value max hide-label]}]
  ;TODO component should take width as a prop
  [:div {:style {:width 400}}
   [:> RuxProgress {:value value :max max :hide-label hide-label}]])

