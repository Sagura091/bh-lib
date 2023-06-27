(ns demo.catalog.atom.all
  "atom and acu/demonstrations of all available UI components."
  (:require [re-com.core :as rc]

            [demo.catalog.atom.example.layout.page :as page]
            [demo.catalog.atom.example.layout.page-header :as page-header]
            [demo.catalog.atom.example.layout.page-title :as page-title]
            [demo.catalog.atom.example.layout.text-block :as text-block]
            [demo.catalog.atom.example.layout.centered-block :as centered-block]
            [demo.catalog.atom.example.layout.markdown-block :as markdown-block]
            [demo.catalog.atom.example.layout.frame :as frame]
            [demo.catalog.atom.example.layout.section :as section]

            [demo.catalog.atom.example.container.navbar :as navbar]

            [demo.catalog.atom.example.icons.simple-image :as simple-image]
            [demo.catalog.atom.example.icons.standard-icon :as standard-icon]
            [demo.catalog.atom.example.icons.colored-icon :as colored-icon]
            [demo.catalog.atom.example.icons.small-icon :as small-icon]
            [demo.catalog.atom.example.icons.medium-icon :as medium-icon]
            [demo.catalog.atom.example.icons.large-icon :as large-icon]
            [demo.catalog.atom.example.icons.brand-icon :as brand-icon]
            [demo.catalog.atom.example.icons.clickable-icon :as clickable-icon]

            [demo.catalog.atom.example.forms.simple-form-label :as simple-label]
            [demo.catalog.atom.example.forms.required-form-label :as required-label]
            [demo.catalog.atom.example.forms.text-input :as text-input]
            [demo.catalog.atom.example.forms.password-input :as pass-input]
            [demo.catalog.atom.example.forms.placeholder-text-input :as place-text-input]
            [demo.catalog.atom.example.forms.disabled-text-input :as disabled-text-input]
            [demo.catalog.atom.example.forms.error-text-input :as error-text-input]
            [demo.catalog.atom.example.forms.simple-select-input :as simple-select-input]
            [demo.catalog.atom.example.forms.custom-select-input :as custom-select-input]
            [demo.catalog.atom.example.forms.disabled-select-input :as disabled-select-input]
            [demo.catalog.atom.example.forms.multi-select-input :as multi-select-input]
            [demo.catalog.atom.example.forms.checkbox :as checkbox]
            [demo.catalog.atom.example.forms.disabled-checkbox :as disabled-checkbox]

            [demo.catalog.atom.example.chart.bar-chart :as bar-chart]
            [demo.catalog.atom.example.chart.line-chart :as line-chart]
            [demo.catalog.atom.example.chart.pie-chart :as pie-chart]
            [demo.catalog.atom.example.chart.colored-pie-chart :as colored-piechart]

            [demo.catalog.atom.example.re-com.table :as table]
            [demo.catalog.atom.example.re-com.alert-box :as alert-box]
            [demo.catalog.atom.example.re-com.line :as line]
            [demo.catalog.atom.example.re-com.header-bar :as header-bar]
            [demo.catalog.atom.example.re-com.login :as login]))


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

   [bar-chart/examples]
   [line-chart/examples]
   [pie-chart/examples]
   [colored-piechart/examples]

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
   [clickable-icon/example]
   [header-bar/example]
   [login/example]])
