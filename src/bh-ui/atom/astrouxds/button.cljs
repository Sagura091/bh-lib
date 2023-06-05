(ns bh-ui.atom.astrouxds.button
  (:require ["@astrouxds/react" :refer [RuxButton]]))

(defn button [& {:keys [label size icon]}]
  (if (exists? :icon) [:> RuxButton {:size size :icon icon} label] [:> RuxButton {:size size} label]))

