(ns ui-component.atom.re-com.core
  (:require [ui-component.atom.re-com.button :as button]
            [ui-component.atom.re-com.configure-toggle :as configure-toggle]
            [ui-component.atom.re-com.editable-table :as editable-table]
            [ui-component.atom.re-com.header-bar :as header-bar]
            [ui-component.atom.re-com.label :as label]
            [ui-component.atom.re-com.labeled-field :as labeled-field]
            [ui-component.atom.re-com.login :as login]
            [ui-component.atom.re-com.slider :as slider]
            [ui-component.atom.re-com.table :as table]))


(def button                      button/button)
(def configure-toggle            configure-toggle/configure-toggle)
(def edit-table                  editable-table/table)
(def header-bar                  header-bar/header-bar)
(def label                       label/label)
(def label-sm                    label/label-sm)
(def label-md                    label/label-md)
(def label-lg                    label/label-lg)
(def label-hg                    label/label-hg)
(def labeled-field               labeled-field/labeled-field)
(def labeled-area                labeled-field/labeled-area)
(def login                       login/login)
(def slider                      slider/slider)
(def table-column-headers        table/table-column-headers)
(def meta-table                  table/meta-table)
(def table                       table/table)


