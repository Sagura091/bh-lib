(ns demo.catalog.atom.example.re-com.login
  (:require [woolybear.ad.catalog.utils :as acu]
            [woolybear.ad.layout :as layout]
            [bh-ui.core :as bh]))


(defn example []
  (acu/demo "Login"
    "A simple login page (user id & password). Calls the server for validation."
    [layout/centered {:extra-classes :width-50}
     [bh/recom-login]]
    '[]))

