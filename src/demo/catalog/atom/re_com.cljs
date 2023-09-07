(ns demo.catalog.atom.re-com
  (:require [demo.catalog.atom.example.re-com.alert-box :as alert-box]
            [demo.catalog.atom.example.re-com.checkbox-re-com :as checkbox]
            [demo.catalog.atom.example.re-com.date-picker :as date-picker]
            [demo.catalog.atom.example.re-com.editable-table :as editable-table]
            [demo.catalog.atom.example.re-com.input-time :as input-time]
            [demo.catalog.atom.example.re-com.label :as label]
            [demo.catalog.atom.example.re-com.line :as line]
            [demo.catalog.atom.example.re-com.meta-coc-editable-table :as meta-coc-editable-table]
            [demo.catalog.atom.example.re-com.meta-editable-table :as meta-editable-table]
            [demo.catalog.atom.example.re-com.meta-table :as meta-table]
            [demo.catalog.atom.example.re-com.popover :as popover]
            [demo.catalog.atom.example.re-com.progress-bar :as progress-bar]
            [demo.catalog.atom.example.re-com.radio-button :as radio-button]
            [demo.catalog.atom.example.re-com.slider :as slider]
            [demo.catalog.atom.example.re-com.splitter :as splitter]
            [demo.catalog.atom.example.re-com.table :as table]
            [demo.catalog.atom.example.re-com.text-input-re-com :as input-text]
            [demo.catalog.atom.example.re-com.throbber :as throbber]
            [demo.catalog.atom.example.re-com.header-bar :as header-bar]
            [demo.catalog.atom.example.re-com.login :as login]
            [demo.catalog.atom.example.re-com.v-scroller :as v-scroller]
            [demo.catalog.atom.example.re-com.tabs :as tabs]
            [demo.catalog.atom.example.re-com.input-field :as input]
            [demo.catalog.atom.example.re-com.dropdown :as dropdown]))


(defn examples
  []
  [:div
   [tabs/example]
   [tabs/example-2]
   [tabs/example-3]
   [tabs/example-4]
   [tabs/example-5]
   [tabs/example-6]
   [v-scroller/example]
   [v-scroller/chart-example]
   [v-scroller/woolybear-scroll-example]
   [table/example]
   [meta-table/example]
   [editable-table/example]
   [meta-editable-table/example]
   [meta-coc-editable-table/example]
   [label/example]
   [checkbox/example]
   [radio-button/example]
   [input-text/example]
   [alert-box/example]
   [line/example]
   [progress-bar/example]
   [throbber/example]
   [date-picker/example]
   [input-time/example]
   [slider/example]
   [popover/button-anchor-example]
   [popover/link-anchor-example]
   [popover/chart-example]
   [splitter/horizontal-example]
   [splitter/vertical-example]
   [header-bar/example]
   [login/example]
   [input/example]
   [dropdown/example]])
