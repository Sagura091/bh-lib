(ns bh-ui.atom.bhui.bulma-modal)


(defn modal [content show?]
  [:div#modal-js-example {:class (if @show? "modal is-active" "modal")}
   [:div.modal-background]
   [:div.modal-content
    content]])

(defn modal-card [title content show?]
  [:div#modal-js-example {:class (if @show? "modal is-active" "modal")}
   [:div.modal-background]
   [:div.modal-card
    [:header.modal-card-head
     [:p.modal-card-title title]
     [:button.delete {:aria-label "close"}]]
    [:section.modal-card-body
     content]
    [:footer.modal-card-foot
     [:div.buttons
      [:button.is-success :on-click #(reset! show? false) "Save"]
      [:button #(reset! show? false) "Cancel"]]]]])



