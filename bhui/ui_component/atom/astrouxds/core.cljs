(ns ui-component.atom.astrouxds.core
  (:require [ui-component.atom.astrouxds.button :as abutton]
            [ui-component.atom.astrouxds.classification-marking :as aclassification-marking]
            [ui-component.atom.astrouxds.progress-bar :as aprogress-bar]
            [ui-component.atom.astrouxds.radio-button :as aradio-button]
            [ui-component.atom.astrouxds.slider :as aslider]
            [ui-component.atom.astrouxds.status :as astatus]
            [ui-component.atom.astrouxds.table :as atable]))

(def button                          abutton/button)
(def progress-bar                    aprogress-bar/progress-bar)
(def radio-button                    aradio-button/radio-button)
(def slider                          aslider/slider)
(def status                          astatus/status)
(def table                           atable/table)
(def classification-marking          aclassification-marking/classification-marking )
