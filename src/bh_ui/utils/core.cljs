(ns bh-ui.utils.core
  (:require [bh-ui.utils.color :as color]
            [bh-ui.utils.container :as container]
            [bh-ui.utils.example-data :as example-data]
            [bh-ui.utils.helpers :as helpers]
            [bh-ui.utils.locals :as locals]))

;; color function to call in the utils color.cljs
(def utils-get-color color/get-color)
(def utils-hex->rgba color/hex->rgba)
(def utils-rgba-normal color/rgba-normal)
(def utils-normal->rgba color/normal->rgba)
(def utils-rgba-map->rgba-vector color/rgba-map->rgba-vector)
(def utils-rgba-map->js-function color/rgba-map->js-function)
(def utils-rgba->hex color/rgba->hex)
(def utils-hash->rgba color/hash->rgba)
(def utils-relative-luminance color/relative-luminance)
(def utils-best-text-color color/best-text-color)
(def utils-best-text-color-alpha color/best-text-color-alpha)

;; container functions to call in the utils container.cljs

(def utils-init-container container/init-container)
(def utils-subscribe-to-container container/subscribe-to-container)
(def utils-publish-to-container container/publish-to-container)
(def utils-build-container-subs container/build-container-subs)

(def utils-override-subs container/override-subs)


;; helper functions to call in the utils helper.cljs

(def utils-config-tab-panel helpers/config-tab-panel)

(def utils-component-id helpers/component-id)

(def utils-chart-config helpers/chart-config)

(def utils-path->string helpers/path->string)

(def utils-path->keyword helpers/path->keyword)

(def utils-string->keyword helpers/string->keyword)

(def utils-resolve-value helpers/resolve-value)

(def utils-handle-change helpers/handle-change)

(def utils-handle-change-path helpers/handle-change-path)

;; locals functions to call in the utils locals.cljs
(def utils-init-local-values locals/init-local-values)
(def utils-update-local-values locals/update-local-values)
(def utils-update-local-path-values locals/update-local-path-values)
(def utils-process-branch locals/process-branch)

(def utils-process-leaf locals/process-leaf)

(def utils-process-locals locals/process-locals)

(def utils-compute-container-path locals/compute-container-path)

(def utils-compute-container-deps locals/compute-container-deps)

(def utils-compute-deps locals/compute-deps)

(def utils-create-container-sub locals/create-container-sub)

(def utils-create-container-local-sub locals/create-container-local-sub)

(def utils-create-local-path-sub locals/create-local-path-sub)

(def utils-create-container-event locals/create-container-event)

(def utils-create-container-local-event locals/create-container-local-event)

(def utils-create-local-path-event locals/create-local-path-event)

(def utils-init-container-locals locals/init-container-locals)

(def utils-subscribe-local locals/subscribe-local)

(def utils-resolve-subscribe-local locals/resolve-subscribe-local)

(def utils-dispatch-local locals/dispatch-local)

(def utils-apply-local locals/apply-local)

(def utils-build-subs locals/build-subs)

(def utils-resolve-sub locals/resolve-sub)


