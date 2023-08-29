(ns bh-ui.atom.layout.carousel
  (:require ["react-responsive-carousel" :refer (Carousel)]
            [taoensso.timbre :as log]))


(log/info "bh-ui.atom.experimental.carousel")


(defn carousel [config-style & children]
  (into [:> Carousel config-style]
    children))



(re-frame.core/dispatch-sync
  [:register-meta {:bhui/carousel {:component carousel :children :enumerated}}])





(comment

  (->> @re-frame.db/app-db
    :meta-data-registry
    :bhui/carousel)

  ())