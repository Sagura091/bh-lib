(ns demo.catalog.atom.forms
  "Catalog and acu/demonstrations of available form and form-field components."
  (:require [re-frame.core :as re-frame]
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
            [demo.catalog.atom.example.forms.disabled-checkbox :as disabled-checkbox]))


(re-frame/reg-sub
 :atom/forms-demo
 :<- [:db/atom]
 (fn [examples]
   (:forms-demo examples)))


(re-frame/reg-sub
 :forms-demo/demo
 :<- [:atom/forms-demo]
 (fn [forms-demo [_ ix]]
   (get forms-demo ix)))


(defn examples
  []

  [:div
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
   [disabled-checkbox/example]])