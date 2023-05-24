(ns ui-component.atom.oz.core
  (:require [ui-component.atom.oz.bar-chart :as bar-chart]
            [ui-component.atom.oz.line-chart :as line-chart]))


(def bar-component bar-chart/component)
(def line-component line-chart/component)
