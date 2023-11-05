(ns bh-ui.atom.bhui.bulma-modal)


(defn modal [content show?]
  [:div#modal-js-example {:class (if @show? "modal is-active" "modal")}
   [:div.modal-background]
   [:div.modal-content
    content]])



