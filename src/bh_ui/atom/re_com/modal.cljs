(ns bh-ui.atom.re-com.modal
  (:require [reagent.core :as r]
            [re-com.core :as rc]
            [taoensso.timbre :as log]))


(log/info "bh-ui.atom.re-com.modal")



(defn modal
  "Create a button to test the modal component for modal dialogs"
  [content show?]

  (log/info "modal-dialog (a)")

  [rc/v-box :src (rc/at)
   :children [[rc/button :src (rc/at)
               :label "Modal Dialog"
               :class "btn-info"
               :on-click #(reset! show? true)]
              (when @show? [rc/modal-panel :src (rc/at)
                            :backdrop-color "grey"
                            :backdrop-opacity 0.4
                            :style {:font-family "Consolas"}
                            :child [content show?]])]])





