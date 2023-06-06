(ns bh-ui.atom.astrouxds.radio-button
  (:require ["@astrouxds/react" :refer (RuxRadioGroup RuxRadio)]))


(defn radio-button [data]
  [:> RuxRadioGroup
   (doall (for [v data]
            [:> RuxRadio {:value v} v]))])
