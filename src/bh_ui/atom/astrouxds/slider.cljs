(ns bh-ui.atom.astrouxds.slider
  (:require ["@astrouxds/react" :refer (RuxSlider)]))

(defn slider [& {:keys [min max step val disabled]}]
  ;TODO: component should take width as a prop
  [:div {:style {:width 400}}
   [:> RuxSlider {:min min :max max :step step :val val :disabled disabled}]])
