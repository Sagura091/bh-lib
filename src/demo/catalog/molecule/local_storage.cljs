(ns demo.catalog.molecule.local-storage
  (:require [taoensso.timbre :as log]))



; from https://github.com/ghivert/cljs-blob/master/src/local_storage/core.cljs
; MIT license


(defn get-item!
  "Get item from localStorage and returns it. Accepts keywords."
  [key]
  (let [value
        (->> (name key)
          (.getItem js/localStorage))]
          ;(.parse js/JSON))]
    (cljs.reader/read-string value)))


(defn- assoc-items! [acc key]
  (assoc acc key (get-item! key)))


(defn get-items!
  "Get items from localStorage and returns it. Accepts a vector of keywords."
  [keys]
  (reduce assoc-items! {} keys))


(defn set-item!
  "Set item in localStorage and returns the value provided in argument.
   Accepts keywords and EDN."
  [key value]
  (->> (pr-str value)
    ;(.stringify js/JSON)
    (.setItem js/localStorage (name key)))
  value)


(defn set-items!
  "Set items in localStorage and returns the value provided in argument.
   Accepts a map of keywords and EDN."
  [objects]
  (mapv (fn [[key value]] (set-item! key value)) objects)
  objects)


(defn remove-item!
  "Remove item from localStorage and returns the value which was stored inside.
   Accepts keywords."
  [key]
  (let [value (get-item! key)]
    (->> (name key)
      (.removeItem js/localStorage))
    value))


(defn remove-items!
  "Remove items from localStorage and returns the values which was stored inside.
   Accepts a vector of keywords."
  [keys]
  (reduce (fn [acc key] (assoc acc key (remove-item! key))) {} keys))


(defn length!
  "Returns the length of localStorage."
  []
  (.-length js/localStorage))


(defn get-all!
  "Returns all the value stored in localStorage associated with their keys."
  ([n objects]
   (if (< n 0)
     objects
     (let [key   (keyword (.key js/localStorage n))
           value (get-item! key)]
       (get-all! (- n 1) (assoc objects key value)))))
  ([] (let [total (- (length!) 1)]
        (get-all! total {}))))


(defn clear!
  "Clear all localStorage and returns what’s contained inside."
  []
  (let [all (get-all!)]
    (.clear js/localStorage)
    all))


(defn save-to-local-storage
  "NOTE: we LOSE the qualifiers on the keys here!!!"
  [id dsl-data]
  ;(log/info "save-to-local-storage" id "//" (keys dsl-data))
  (set-item! id dsl-data))


(defn load-from-local-storage [id]
  (let [ret (get-item! id)]
    ;(log/info "load-from-local-storage" id "//" (keys ret))
    ret))





(comment

  (set-item! :example-string "this is a string")
  (get-item! :example-string)

  (set-item! :example-vector [0 1 2 "three" 4.0])
  (get-item! :example-vector)

  (set-item! :example-map {:alpha "string" :bravo [0 1 2 "three" 4.0]
                           :charlie {:delta "echo"}})
  (get-item! :example-map)

  (length!)
  (count (get-all!))
  (remove-item! :my-key)
  (remove-items! [:example-1])

  ())

