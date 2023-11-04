(ns demo.catalog.atom.example.re-com.modal
  (:require [bh-ui.atom.re-com.modal :as modal]
            [re-com.core :as rc]
            [reagent.core :as r]
            [woolybear.ad.catalog.utils :as acu]
            [taoensso.timbre :as log]))


(log/info "demo.catalog.atom.example.re-com.modal")


(defn- example-dialog

  [form-data show?]

  (log/info "example-dialog" @form-data "____" show?)

  (let [save-form-data (r/atom @form-data)
        process-ok     (fn [event]
                         (reset! show? false)
                         (println "Submitted form data: " @form-data)
                         ;; ***** PROCESS THE RETURNED DATA HERE
                         false)                             ;; Prevent default "GET" form submission (if used)
        process-cancel (fn [event]
                         (reset! form-data @save-form-data)
                         (reset! show? false)
                         (println "Cancelled form data: " @form-data)
                         false)]
    (fn []
      [rc/border :src (rc/at)
       :border "1px solid #eee"
       :child  [rc/v-box :src (rc/at)
                :padding  "10px"
                :style    {:background-color "cornsilk"}
                :children [[rc/title :src (rc/at) :label "Welcome to BH-Lib. Please log in" :level :level2]
                           [rc/v-box :src (rc/at)
                            :class    "form-group"
                            :children [[:label {:for "pf-email"} "Email address"]
                                       [rc/input-text :src (rc/at)
                                        :model       (:email @form-data)
                                        :on-change   #(swap! form-data assoc :email %)
                                        :placeholder "Enter email"
                                        :class       "form-control"
                                        :attr        {:id "pf-email"}]]]
                           [rc/v-box :src (rc/at)
                            :class    "form-group"
                            :children [[:label {:for "pf-password"} "Password"]
                                       [rc/input-text :src (rc/at)
                                        :model       (:password @form-data)
                                        :on-change   #(swap! form-data assoc :password %)
                                        :placeholder "Enter password"
                                        :class       "form-control"
                                        :attr        {:id "pf-password" :type "password"}]]]
                           [rc/checkbox :src (rc/at)
                            :label     "Forget me"
                            :model     (:remember-me @form-data)
                            :on-change #(swap! form-data assoc :remember-me %)]
                           [rc/line :src (rc/at) :color "#ddd" :style {:margin "10px 0 10px"}]
                           [rc/h-box :src (rc/at)
                            :gap      "12px"
                            :children [[rc/button :src (rc/at)
                                        :label    "Sign in"
                                        :class    "btn-primary"
                                        :on-click process-ok]
                                       [rc/button :src (rc/at)
                                        :label    "Cancel"
                                        :on-click process-cancel]]]]]])))


; made this exposed for testing/debug purposes
(def form-data      (r/atom {:email       "bh-lib@black-hammer.org"
                             :password    "abc123"
                             :remember-me true}))


(defn example []
  (let [save-form-data (r/atom nil)
        show?          (r/atom false)]

    (acu/demo
      "Modal (with a dialog box in it)"
      [modal/modal
       (partial example-dialog form-data)
       show?]

      '[])))




(comment
  @form-data



  ())