(ns catalog.atom.all
  "atom and acu/demonstrations of all available UI components."
  (:require [re-com.core :as rc]

            [catalog.atom.example.layout.page :as page]
            [catalog.atom.example.layout.page-header :as page-header]
            [catalog.atom.example.layout.page-title :as page-title]
            [catalog.atom.example.layout.text-block :as text-block]
            [catalog.atom.example.layout.centered-block :as centered-block]
            [catalog.atom.example.layout.markdown-block :as markdown-block]
            [catalog.atom.example.layout.frame :as frame]
            [catalog.atom.example.layout.section :as section]

            [catalog.atom.example.container.navbar :as navbar]

            [catalog.atom.example.icons.simple-image :as simple-image]
            [catalog.atom.example.icons.standard-icon :as standard-icon]
            [catalog.atom.example.icons.colored-icon :as colored-icon]
            [catalog.atom.example.icons.small-icon :as small-icon]
            [catalog.atom.example.icons.medium-icon :as medium-icon]
            [catalog.atom.example.icons.large-icon :as large-icon]
            [catalog.atom.example.icons.brand-icon :as brand-icon]
            [catalog.atom.example.icons.clickable-icon :as clickable-icon]

            [catalog.atom.example.forms.simple-form-label :as simple-label]
            [catalog.atom.example.forms.required-form-label :as required-label]
            [catalog.atom.example.forms.text-input :as text-input]
            [catalog.atom.example.forms.password-input :as pass-input]
            [catalog.atom.example.forms.placeholder-text-input :as place-text-input]
            [catalog.atom.example.forms.disabled-text-input :as disabled-text-input]
            [catalog.atom.example.forms.error-text-input :as error-text-input]
            [catalog.atom.example.forms.simple-select-input :as simple-select-input]
            [catalog.atom.example.forms.custom-select-input :as custom-select-input]
            [catalog.atom.example.forms.disabled-select-input :as disabled-select-input]
            [catalog.atom.example.forms.multi-select-input :as multi-select-input]
            [catalog.atom.example.forms.checkbox :as checkbox]
            [catalog.atom.example.forms.disabled-checkbox :as disabled-checkbox]

            ;[catalog.atom.example.chart.bar-chart :as bar-chart]
            ;[catalog.atom.example.chart.line-chart :as line-chart]
            ;[catalog.atom.example.chart.pie-chart :as pie-chart]
            ;[catalog.atom.example.chart.colored-pie-chart :as colored-piechart]

            [catalog.atom.example.re-com.table :as table]
            [catalog.atom.example.re-com.alert-box :as alert-box]
            [catalog.atom.example.re-com.line :as line]))


(defn examples
  []
  [:div

   [page/example]
   [page-header/example]
   [page-title/example]
   [section/example]
   [text-block/example]
   [centered-block/example]
   [markdown-block/example]
   [frame/example]
   [navbar/example]

   [rc/line :size "5px" :color "orange"]

   ;[bar-chart/example]
   ;[line-chart/simple-example]
   ;[pie-chart/example]
   ;[colored-piechart/example]

   [rc/line :size "5px" :color "orange"]

   [simple-label/example]
   [required-label/example]
   [text-input/example]
   [pass-input/example]
   [place-text-input/example]
   [disabled-text-input/example]
   [error-text-input/example]
   [simple-select-input/example]
   [custom-select-input/example]
   [disabled-select-input/example]
   [multi-select-input/example]
   [checkbox/example]
   [disabled-checkbox/example]

   [rc/line :size "2px" :color "orange"]

   [table/example]
   [alert-box/example]
   [line/example]
   [simple-image/example]
   [standard-icon/example]
   [colored-icon/example]
   [small-icon/example]
   [medium-icon/example]
   [large-icon/example]
   [brand-icon/example]
   [clickable-icon/example]])
