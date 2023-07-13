(ns bh-ui.atom.astrouxds.radio-button
  (:require ["@astrouxds/react" :refer (RuxRadioGroup RuxRadio)]
            [taoensso.timbre :as log]))


(defn radio-button [data]
  [:> RuxRadioGroup
   (doall
     (for [[idx v] (map-indexed vector data)]
       ^{:key (str idx "." v)} [:> RuxRadio {:value v} v]))])
