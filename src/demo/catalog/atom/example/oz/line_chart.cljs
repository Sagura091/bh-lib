(ns demo.catalog.atom.example.oz.line-chart
  (:require [demo.catalog.atom.utils :as example]
            [bh-ui.core :as bh]
            [taoensso.timbre :as log]))


(defn example []
  (let [container-id "oz-line-chart-demo"]
    [example/component-example
     :title "Line Chart (oz)"
     :container-id container-id
     :description "A simple Line Chart built using [Oz](https://github.com/metasoarous/oz)"
     :data bh/oz-line-chart
     :component bh/oz-line-chart
     :component-id (bh/utils-path->keyword container-id "line-chart")
     :source-code bh/oz-line-chart-source-code]))
