(ns demo.catalog.organism.ui-grid.data
  (:require [bh-ui.core :as bh]
            [demo.catalog.molecule.local-storage :as storage]
            [reagent.core :as r]
            [taoensso.timbre :as log]))


(log/info "demo.catalog.organism.ui-grid.data")


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
; region ; load & save of widget data

(defn- prep-widget-save [widget]
  (let [[id title [_ & {:keys [data component-id resizable]}]
         bar-color text-color] widget
        ;_   (log/info "prep-widget (a)" widget "_____" data)
        ret {:id           id
             :title        title
             :data         (select-keys @data [:mol/components :mol/links
                                               :mol/grid-layout :mol/flow-nodes
                                               :mol/flow-edges])
             :component-id component-id
             :resizable    resizable
             :bar-color    bar-color
             :text-color   text-color}]

    ;(log/info "prep-widget (b)" ret)

    ret))


(defn- prep-layout-save [layout]
  (js->clj layout :keywordize true))


(defn prep-widget-load [{:keys [id title data component-id
                                resizeable bar-color text-color] :as widget}]
  ;(log/info "prep-widget-load" widget)
  [id
   title
   [bh/grid-container
    :data (r/atom data)
    :component-id component-id
    :resizable resizeable]
   bar-color
   text-color])


(defn prep-layout-load [layout]
  layout)


(defn- marshall-widget-save [widgets layout]
  {:widgets (set (map prep-widget-save widgets))
   :layout  (set (prep-layout-save layout))})


(defn marshal-widgets-load [widgets]
  (some->> widgets
    (map prep-widget-load)
    set))


(defn marshal-layout-load [layout]
  layout)


(defn save-widgets [container-id widgets layout]
  ;(log/info "save-widgets" container-id "____" widgets "____" layout)

  (storage/save-to-local-storage container-id
    (marshall-widget-save widgets layout)))


(defn load-widgets [container-id]
  ;(log/info "load-widgets" container-id "____" widgets "____" layout)

  (let [loaded (storage/load-from-local-storage container-id)]
    (when loaded
      {:widgets (marshal-widgets-load (:widgets loaded))
       :layout (marshal-layout-load (:layout loaded))})))


; endregion



;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
; region ; set and reset the example data

(defn grid-reset [widgets layout widget-val layout-val]
  (reset! widgets widget-val)
  (reset! layout layout-val))


(defn toggle-widgets [widgets [widget-id & _ :as widget]]
  (set
    (if (seq (filter #(= (first %) widget-id) widgets))
      (remove #(= (first %) widget-id) widgets)
      (conj widgets widget))))


(defn toggle-layout [s val]
  (if (contains? s val)
    (disj s val)
    (conj s val)))


(defn grid-update [widgets layout widget-val layout-val]
  (reset! widgets (toggle-widgets @widgets widget-val))
  (reset! layout (toggle-layout @layout layout-val)))


; endregion





; work out logic for toggling a widget when we can't use set-logic (r/atoms!)
(comment
  (do
    (def widgets #{["widget-1" [:wrapper (r/atom "widget-1")]]
                   ["widget-2" [:wrapper (r/atom "widget-2")]]
                   ["widget-3" [:wrapper (r/atom "widget-3")]]})
    (def widget ["widget-2" [:wrapper (r/atom "widget-2")]])
    (def widget-missing ["widget-4" [:wrapper (r/atom "widget-4")]]))


  ; notice we get a false here, due to the use of r/atom
  (contains? widgets widget)

  ; we can find the item by the id (first element of the vector)
  (filter #(= (first %) (first widget)) widgets)
  (filter #(= (first %) (first widget-missing)) widgets)

  ; we can remove it, if it exists, the same way
  (remove #(= (first %) (first widget)) widgets)
  (remove #(= (first %) (first widget-missing)) widgets)

  ; use (seq) to get a predicate-like thing
  (seq (filter #(= (first %) (first widget)) widgets))

  (if (seq (filter #(= (first %) (first widget)) widgets))
    :found
    :not-found)
  (if (seq (filter #(= (first %) (first widget-missing)) widgets))
    :found
    :not-found)

  ; we can then remove or add (conj) the widget as needed
  (set
    (if (seq (filter #(= (first %) (first widget)) widgets))
      (remove #(= (first %) (first widget)) widgets)
      (conj widgets widget)))

  (set
    (if (seq (filter #(= (first %) (first widget-missing)) widgets))
      (remove #(= (first %) (first widget-missing)) widgets)
      (conj widgets widget-missing)))



  ())





