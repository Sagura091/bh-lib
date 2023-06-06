(ns demo.src.catalog.atom.example.forms.disabled-text-input
  (:require [woolybear.ad.utils :as acu]
            [woolybear.ad.forms :as forms]
            [woolybear.ad.layout :as layout]))


(defn example []
  (acu/demo "Disabled text input"
    "Use a subscription if you need to disable/enable a field at run-time."
    [layout/padded
     [forms/text-input {:id                          "demo-4"
                        :placeholder                 "This field is disabled"
                        :component-data-path         [:demo.src.catalog :forms-demo 4]
                        :subscribe-to-component-data [:forms-demo/demo 4]
                        :subscribe-to-disabled?      (atom true)}]]
    '[layout/padded
      [forms/text-input {:id                          "demo-4"
                         :placeholder                 "This field is disabled"
                         :component-data-path         [:demo.src.catalog :forms-demo 4]
                         :subscribe-to-component-data [:forms-demo/demo 4]
                         :subscribe-to-disabled?      (atom true)}]]))