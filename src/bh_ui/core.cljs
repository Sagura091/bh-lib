(ns bh-ui.core
  (:require [bh-ui.csrf :as csrf]
            [bh-ui.data-source-handler :as source-handler]
            [bh-ui.events :as events]
            [bh-ui.subs :as subs]
            [bh-ui.subscription-handlers :as sub-handlers]
            [bh-ui.subscriptions :as subscriptions]
            [bh-ui.utils :as utils]

            [bh-ui.atom.data-transformation :as xform]

            [bh-ui.atom.astrouxds.button :as abutton]
            [bh-ui.atom.astrouxds.classification-marking :as aclassification-marking]
            [bh-ui.atom.astrouxds.progress-bar :as aprogress-bar]
            [bh-ui.atom.astrouxds.radio-button :as aradio-button]
            [bh-ui.atom.astrouxds.slider :as aslider]
            [bh-ui.atom.astrouxds.status :as astatus]
            [bh-ui.atom.astrouxds.table :as atable]

            [bh-ui.atom.bhui.color-picker :as bcolor-picker]
            [bh-ui.atom.bhui.data-table :as bdata-table]
            [bh-ui.atom.bhui.markdown :as bmarkdown]
            [bh-ui.atom.bhui.navbar :as bnavbar]
            [bh-ui.atom.bhui.tabbed-panel :as btabbed-panel]
            [bh-ui.atom.bhui.table :as btable]

            [bh-ui.atom.card.card :as card]
            [bh-ui.atom.card.flippable-card :as flippable-card]
            [bh-ui.atom.card.image-card :as image-card]

            [bh-ui.atom.chart.area-chart :as area-chart]
            [bh-ui.atom.chart.bar-chart :as bar-chart]
            [bh-ui.atom.chart.colored-pie-chart :as colored-pie-chart]
            [bh-ui.atom.chart.funnel-chart :as funnel-chart]
            [bh-ui.atom.chart.line-chart :as line-chart]
            [bh-ui.atom.chart.pie-chart :as pie-chart]
            [bh-ui.atom.chart.radar-chart :as radar-chart]
            [bh-ui.atom.chart.radial-bar-chart :as radial-bar-chart]
            [bh-ui.atom.chart.sankey-chart :as sankey-chart]
            [bh-ui.atom.chart.scatter-chart :as scatter-chart]
            [bh-ui.atom.chart.treemap-chart :as tree-map-chart]

            [bh-ui.atom.diagram.diagram.composite-dag-support :as composite-dag-support]
            [bh-ui.atom.diagram.diagram.dagre-support :as dagre-support]
            [bh-ui.atom.diagram.editable-digraph :as editable-digraph]
            [bh-ui.atom.diagram.flow-diagram :as flow-diagram]

            [bh-ui.atom.experimental.ui-element :as experimental-ui-element]
            [bh-ui.atom.experimental.react-table :as react-table]
            [bh-ui.atom.experimental.tab-set :as tabset]

            [bh-ui.atom.fast-chart.canvas-js-chart :as fast-chart]

            [bh-ui.atom.layout.grid :as grid]
            [bh-ui.atom.layout.responsive-grid :as responsive-grid]

            [bh-ui.atom.leaflet.globe :as leaf-globe]
            [bh-ui.atom.leaflet.shape :as leaf-shape]

            [bh-ui.atom.oz.bar-chart :as bar-chart]
            [bh-ui.atom.oz.line-chart :as line-chart]

            [bh-ui.atom.re-com.box :as box]
            [bh-ui.atom.re-com.button :as button]
            [bh-ui.atom.re-com.configure-toggle :as configure-toggle]
            [bh-ui.atom.re-com.editable-table :as editable-table]
            [bh-ui.atom.re-com.header-bar :as header-bar]
            [bh-ui.atom.re-com.label :as label]
            [bh-ui.atom.re-com.labeled-field :as labeled-field]
            [bh-ui.atom.re-com.login :as login]
            [bh-ui.atom.re-com.slider :as slider]
            [bh-ui.atom.re-com.table :as table]
            [bh-ui.atom.re-com.tabs :as tabs]
            [bh-ui.atom.re-com.v-scroller :as v-scroll]

            [bh-ui.atom.resium.globe :as res-globe]
            [bh-ui.atom.resium.shape :as res-shape]

            [bh-ui.atom.worldwind.globe :as ww-globe]
            [bh-ui.atom.worldwind.globe.cell :as cell]
            [bh-ui.atom.worldwind.globe.color :as color]
            [bh-ui.atom.worldwind.globe.globe-time :as globe-time]
            [bh-ui.atom.worldwind.globe.layer :as layer]
            [bh-ui.atom.worldwind.globe.location :as location]
            [bh-ui.atom.worldwind.globe.projection :as projection]
            [bh-ui.atom.worldwind.globe.react-support :as react-support]
            [bh-ui.atom.worldwind.globe.shape :as shape]

            [bh-ui.molecule.composite :as composite]
            [bh-ui.molecule.grid-container :as grid-container]
            [bh-ui.molecule.two-d-three-d-globe :as two-three-globe]

            [bh-ui.molecule.composite.chart-remote-data :as chart-remote-data]
            [bh-ui.molecule.composite.coverage-plan :as coverage-plan]
            [bh-ui.molecule.composite.multi-chart :as multi-chart]
            [bh-ui.molecule.composite.simple-multi-chart :as simple-multi1]
            [bh-ui.molecule.composite.simple-multi-chart-2 :as simple-multi2]
            [bh-ui.molecule.composite.with-fn :as with-fn]

            [bh-ui.molecule.composite.dsl-support.dsl-nodes :as dsl-nodes]

            [bh-ui.molecule.composite.util.digraph :as digraph]
            [bh-ui.molecule.composite.util.node-config-ui :as node-config-ui]
            [bh-ui.molecule.composite.util.signals :as signals]
            [bh-ui.molecule.composite.util.ui :as ui]

            [bh-ui.organism.ui-grid :as ui-grid]
            [bh-ui.tabbed-pane.utils :as tabbed-panel-utils]

            [bh-ui.utils.color :as color]
            [bh-ui.utils.container :as container]
            [bh-ui.utils.example-data :as example-data]
            [bh-ui.utils.helpers :as helpers]
            [bh-ui.utils.locals :as locals]))

;;;;;;;;;;;;;;;;;;;
;;
;; Top level namespaces
;;
;;;;;;;;;;;;;;;;;;;
;; region

(def csrf                                   csrf/?csrf-token)
(def data-source-msg-handler                source-handler/data-source-msg-handler)
(def default-event-header                   events/default-header)
(def subscription-msg-handler               sub-handlers/event-msg-handler)
(def start-subscription-client              subscriptions/start!)
(def init-data-source                       utils/init-data-source)
(def subscribe-data-source                  utils/subscribe-data-source)
(def init-container-locals                  utils/init-container-locals)
(def subscribe-local                        utils/subscribe-local)
(def resolve-subscribe-local                utils/resolve-subscribe-local)
(def dispatch-local                         utils/dispatch-local)
(def build-subs                             utils/build-subs)
(def resolve-sub                            utils/resolve-sub)
(def init-container                         utils/init-container)
(def subscribe-to-container                 utils/subscribe-to-container)
(def publish-to-container                   utils/publish-to-container)
(def override-subs                          utils/override-subs)

;; endregion

;;;;;;;;;;;;;;;;;;;;;;
;;
;; Atoms
;;
;;;;;;;;;;;;;;;;;;;;;;
;; region

(def dataxform-tabular->x-y                 xform/tabular->x-y)
(def dataxform-metatabular->x-y             xform/meta-tabular->x-y)

;;;;;;;;; Astro UXDS ;;;;;;;;;;

(def astro-button                           abutton/button)
(def astro-progress-bar                     aprogress-bar/progress-bar)
(def astro-radio-button                     aradio-button/radio-button)
(def astro-slider                           aslider/slider)
(def astro-status                           astatus/status)
(def astro-table                            atable/table)
(def astro-classification-marking           aclassification-marking/classification-marking )

;;;;;;;; BH-UI ;;;;;;;;;;;;;;;;;;

(def bh-rgba-color-picker                   bcolor-picker/rgba-color-picker)
(def bh-hex-color-picker                    bcolor-picker/hex-color-picker)
(def bh-data-table                          bdata-table/table)
(def bh-markdown                            bmarkdown/markdown)
(def bh-navbar                              bnavbar/navbar)
(def bh-tabbed-panel                        btabbed-panel/tabbed-panel)
(def bh-table                               btable/table)

;;;;;;;;;; CARD ;;;;;;;;;;;;;;;;;

(def card                                   card/card)
(def flippable-card                         flippable-card/card)
(def image-card                             image-card/card)

;;;;;;;;; CHARTS ;;;;;;;;;;;;;;;;;;

(def area-chart-local-config                area-chart/local-config)
(def area-chart-config                      area-chart/config)
(def area-chart-config-panel                area-chart/config-panel)
(def aread-chart-component                  area-chart/component)

(def bar-chart-local-config                 bar-chart/local-config)
(def bar-chart-config                       bar-chart/config)
(def bar-chart-config-panel                 bar-chart/config-panel)
(def bar-chart-component                    bar-chart/component)

(def colored-pie-chart-local-config         colored-pie-chart/local-config)
(def colored-pie-chart-config               colored-pie-chart/config)
(def colored-pie-chart-config-panel         colored-pie-chart/config-panel)
(def colored-pie-chart-component            colored-pie-chart/component)

(def funnel-chart-local-config              funnel-chart/local-config)
(def funnel-chart-make-cells                funnel-chart/make-cells)
(def funnel-chart-config                    funnel-chart/config)
(def funnel-chart-config-panel              funnel-chart/config-panel)
(def funnel-chart-component                 funnel-chart/component)

(def line-chart-local-config                line-chart/local-config)
(def line-chart-config-panel                line-chart/config-panel)
(def line-chart-config                      line-chart/config)
(def line-chart-component                   line-chart/component)

(def pie-chart-config                       pie-chart/config)
(def pie-chart-local-config                 pie-chart/local-config)
(def pie-chart-config-panel                 pie-chart/config-panel)
(def pie-chart-component                    pie-chart/component)

(def radar-chart-config                     radar-chart/config)
(def radar-chart-config-panel               radar-chart/config-panel)
(def radar-chart-local-config               radar-chart/local-config)
(def radar-chart-component                  radar-chart/component)

(def radial-bar-chart-local-config          radial-bar-chart/local-config)
(def radial-bar-chart-config                radial-bar-chart/config)
(def radial-bar-chart-config-panel          radial-bar-chart/config-panel)
(def radial-bar-chart-component             radial-bar-chart/component)

(def sankey-chart-local-config              sankey-chart/local-config)
(def sankey-chart-config                    sankey-chart/config)
(def sankey-chart-config-panel              sankey-chart/config-panel)
(def sankey-chart-component                 sankey-chart/component)
(def sankey-chart-color-source->target      sankey-chart/color-source->target)
(def sankey-chart-color-source->white       sankey-chart/color-source->white)
(def sankey-chart-color-white->target       sankey-chart/color-white->target)

(def scatter-chart-local-config             scatter-chart/local-config)
(def scatter-chart-config                   scatter-chart/config)
(def scatter-chart-config-panel             scatter-chart/config-panel)
(def scatter-chart-component                scatter-chart/component)

(def tree-map-chart-config                  tree-map-chart/config)
(def tree-map-chart-component               tree-map-chart/component)
(def tree-map-chart-configurable-component  tree-map-chart/configurable-component)

;;;;;;;;; DIAGRAM ;;;;;;;;;;;;;;

(def dag-custom-minimap-node-color          composite-dag-support/custom-minimap-node-color)
(def dag-default-custom-node                composite-dag-support/default-custom-node)
(def dagre-graph                            dagre-support/dagre-graph)
(def dagre-build-layout                     dagre-support/build-layout)
(def editable-digraph                       editable-digraph/component)
(def flow-diagram                           flow-diagram/component)

;;;;;;;;;;; EXPERIMENTAL ;;;;;;;;;;;

(def config-panel                           experimental-ui-element/config-panel)
(def selectable-table                       experimental-ui-element/selectable-table)
(def three-d-globe                          experimental-ui-element/three-d-globe)
(def slider                                 experimental-ui-element/slider)
(def label                                  experimental-ui-element/label)
(def react-table                            react-table/table-component)
(def tab-set                                tabset/tab-set)

;;;;;;;;;;; FAST CHARTS ;;;;;;;;;

(def fast-canvas-js-chart                   fast-chart/canvas-js-chart)
(def fast-line-chart                        fast-chart/line-chart)
(def fast-spline-chart                      fast-chart/spline-chart)

;;;;;;;;;;; LAYOUT ;;;;;;;;;;;;

(def layout-grid                            grid/grid)
(def responsive-grid-layout                 responsive-grid/ResponsiveGridLayout)
(def responsive-grid                        responsive-grid/grid)

;;;;;;;;; LEAFLET ;;;;;;;;;;;;;;

(def leaflet-globe                          leaf-globe/globe)
(def leaflet-shape                          leaf-shape/make-shape)

;;;;;;;;; OZ CHARTS ;;;;;;;;;;;;

(def oz-bar-chart                           bar-chart/component)
(def oz-line-chart                          line-chart/component)

;;;;;;;;; RE-COM ;;;;;;;;;;;;;;;;

(def recom-box                              box/box)
(def recom-button                           button/button)
(def recom-configure-toggle                 configure-toggle/configure-toggle)
(def recom-edit-table                       editable-table/table)
(def recom-header-bar                       header-bar/header-bar)
(def recom-label                            label/label)
(def recom-label-sm                         label/label-sm)
(def recom-label-md                         label/label-md)
(def recom-label-lg                         label/label-lg)
(def recom-label-hg                         label/label-hg)
(def recom-labeled-field                    labeled-field/labeled-field)
(def recom-labeled-area                     labeled-field/labeled-area)
(def recom-login                            login/login)
(def recom-slider                           slider/slider)
(def recom-table-column-headers             table/table-column-headers)
(def recom-meta-table                       table/meta-table)
(def recom-table                            table/table)
(def recom-h-bar-tabs                       tabs/h-bar-tabs)
(def recom-h-pill-tabs                      tabs/h-pill-tabs)
(def recom-v-bar-tabs                       tabs/v-bar-tabs)
(def recom-v-pill-tabs                      tabs/v-pill-tabs)
(def recom-v-scroll                         v-scroll/v-scroller)

;;;;;;;;;;;;; RESIUM ;;;;;;;;;;

(def resium-globe                           res-globe/globe)
(def resium-shape                           res-shape/make-shape)

;;;;;;;;;;;;; WORLDWIND ;;;;;;;;

(def worldwind-globe                        ww-globe/globe)
(def ww-boundary-locations                  cell/boundary-locations)

(def ww-yellow                              color/yellow)
(def ww-white                               color/white)
(def ww-blue                                color/blue)
(def ww-red                                 color/red)
(def ww-green                               color/green)
(def ww-black                               color/black)
(def ww-color                               color/color)
(def ww-color-pallet                        color/color-pallet)

(def ww-change-time                         globe-time/change-time)
(def ww-renderable-layer                    layer/renderable-layer)
(def ww-getLayer                            layer/getLayer)
(def ww-addLayer                            layer/addLayer)
(def ww-removeLayer                         layer/removeLayer)
(def ww-make-layer                          layer/make-layer)

(def ww-location                            location/location)
(def ww-position                            location/position)

(def ww-change-projection                   projection/change-projection)

(def ww-update-children                     react-support/update-children)
(def ww-component-did-mount                 react-support/component-did-mount)
(def ww-component-did-update                react-support/component-did-update)

(def ww-wrap-shape                          shape/wrap-shape)

;; endregion

;;;;;;;;;;;;;;;;;;;;;
;;
;; Molecules
;;
;;;;;;;;;;;;;;;;;;;;;
;; region

;;;;;; Top Level ;;;;;;;

(def composite-definition-panel             composite/definition-panel)
(def composite-dag-panel                    composite/dag-panel)
(def composite-config                       composite/config)
(def grid-container                         grid-container/component)
(def two-d-three-d-globe                    two-three-globe/component)

;;;;;;;; Composite ;;;;;;;;

(def chart-remote-data-src-code             chart-remote-data/source-code)
(def chart-remote-data-ui-def               chart-remote-data/ui-definition)

(def coverage-plan-ui-def                   coverage-plan/ui-definition)

(def multi-chart-ui-def                     multi-chart/ui-definition)
(def multi-chart-src-code                   multi-chart/source-code)
(def simple-multi-chart1-ui-def             simple-multi1/ui-definition)
(def simple-multi-chart1-src-code           simple-multi1/source-code)
(def simple-multi-chart2-ui-def             simple-multi2/ui-definition)
(def simple-multi-chart2-src-code           simple-multi2/source-code)

(def with-fn-src-code                       with-fn/source-code)
(def with-fn-sample-data                    with-fn/sample-data)
(def with-fn-compute-new-data               with-fn/compute-new-data)
(def with-fn-ui-def                         with-fn/ui-definition)

;; composite/coverage_plan/suport.cljs is only used by coverage_plan
;; skipping it since it doesnt seem to need public exposure

;;;;;;;;; DSL-NODES ;;;;;;;;;;
(def dsl-nodes-custom-node                  dsl-nodes/custom-node)
(def dsl-nodes-meta-data                    dsl-nodes/meta-data)
(def dsl-nodes-node-data                    dsl-nodes/node-data)
(def dsl-nodes-node-style                   dsl-nodes/node-style)
(def dsl-node-handle-style                  dsl-nodes/handle-style)

;;;;;;;;;;; UTILS ;;;;;;;;;;;;;;
(def digraph-expand-components              digraph/expand-components)
(def digraph-get-predecessor-name           digraph/get-predecessor-name)
(def digraph-get-successor-name             digraph/get-successor-name)
(def digraph-get-inputs                     digraph/get-inputs)
(def digraph-get-outputs                    digraph/get-outputs)
(def digraph-denorm-components              digraph/denorm-components)

(def node-config-ui-make-config-panel       node-config-ui/make-config-panel)

(def signals-process-components             signals/process-components)
(def signals-process-components-stateful    signals/process-components-stateful)
;; bh-ui.molecule.composite.util.ui only seems to be used internally

;;endregion

;;;;;;;;;;;;;;;;;;;;;
;;
;; Organisms
;;
;;;;;;;;;;;;;;;;;;;;;;
;;region

(def ui-grid                                ui-grid/component)
(def ui-grid-on-layout-change               ui-grid/on-layout-change)

(def tabbed-panel                           tabbed-panel-utils/init-tabbed-panel)

;;endregion

;;;;;;;;;;;;;;;;;;;
;;
;; Utilities
;;
;;;;;;;;;;;;;;;;;;;
;;region

;; color utils
(def utils-get-color                        color/get-color)
(def utils-hex->rgba                        color/hex->rgba)
(def utils-rgba-normal                      color/rgba-normal)
(def utils-normal->rgba                     color/normal->rgba)
(def utils-rgba-map->rgba-vector            color/rgba-map->rgba-vector)
(def utils-rgba-map->js-function            color/rgba-map->js-function)
(def utils-rgba->hex                        color/rgba->hex)
(def utils-hash->rgba                       color/hash->rgba)
(def utils-relative-luminance               color/relative-luminance)
(def utils-best-text-color                  color/best-text-color)
(def utils-best-text-color-alpha            color/best-text-color-alpha)

;; container utils

(def utils-init-container                   container/init-container)
(def utils-subscribe-to-container           container/subscribe-to-container)
(def utils-publish-to-container             container/publish-to-container)
(def utils-build-container-subs             container/build-container-subs)
(def utils-override-subs                    container/override-subs)

;; helper utils

(def utils-config-tab-panel                 helpers/config-tab-panel)
(def utils-component-id                     helpers/component-id)
(def utils-chart-config                     helpers/chart-config)
(def utils-path->string                     helpers/path->string)
(def utils-path->keyword                    helpers/path->keyword)
(def utils-string->keyword                  helpers/string->keyword)
(def utils-resolve-value                    helpers/resolve-value)
(def utils-handle-change                    helpers/handle-change)
(def utils-handle-change-path               helpers/handle-change-path)

;; locals utils

(def utils-init-local-values                locals/init-local-values)
(def utils-update-local-values              locals/update-local-values)
(def utils-update-local-path-values         locals/update-local-path-values)
(def utils-process-branch                   locals/process-branch)
(def utils-process-leaf                     locals/process-leaf)
(def utils-process-locals                   locals/process-locals)
(def utils-compute-container-path           locals/compute-container-path)
(def utils-compute-container-deps           locals/compute-container-deps)
(def utils-compute-deps                     locals/compute-deps)
(def utils-create-container-sub             locals/create-container-sub)
(def utils-create-container-local-sub       locals/create-container-local-sub)
(def utils-create-local-path-sub            locals/create-local-path-sub)
(def utils-create-container-event           locals/create-container-event)
(def utils-create-container-local-event     locals/create-container-local-event)
(def utils-create-local-path-event          locals/create-local-path-event)
(def utils-init-container-locals            locals/init-container-locals)
(def utils-subscribe-local                  locals/subscribe-local)
(def utils-resolve-subscribe-local          locals/resolve-subscribe-local)
(def utils-dispatch-local                   locals/dispatch-local)
(def utils-apply-local                      locals/apply-local)
(def utils-build-subs                       locals/build-subs)
(def utils-resolve-sub                      locals/resolve-sub)
