(ns demo.catalog.atom.example.oz.bar-chart
  (:require [bh-ui.core :as bh]
            [demo.catalog.atom.utils :as example]
            [taoensso.timbre :as log]))


(defn example []
  (let [container-id "oz-bar-chart-demo"]
    [example/component-example
     :title "Bar Chart (oz)"
     :container-id container-id
     :description "A simple Bar Chart built using [Oz](https://github.com/metasoarous/oz)"
     :data bh/oz-bar-chart-sample-data
     :component bh/oz-bar-chart
     :component-id (bh/utils-path->keyword container-id "bar-chart")
     :source-code bh/oz-bar-chart-source-code]))

