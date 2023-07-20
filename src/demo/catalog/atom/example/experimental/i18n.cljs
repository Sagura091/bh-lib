(ns demo.catalog.atom.example.experimental.i18n)


(def my-dictionary
  {
   :demo {

   :en   {:demo/check-box-label "click-me"
          :demo/button-label  "Press me"
          :demo/greet "Hello Thank you, %1 for providing your name!"}

   :fr {:demo/check-box-label "Cliquez sur moi !"
          :demo/button-label "Pressez-moi!"
   :demo/greet "Bonjour Merci, %1 pour avoir fourni votre nom !"}

   :po {:demo/check-box-label "Kliknij!"
          :demo/button-label "Naciśnij mnie!"
   :demo/greet "Cześć Dziękujemy, %1 za podanie imienia!"}

   :es {:demo/check-box-label "¡Haz click en mi!"
        :demo/button-label "¡Presionarme!"
        :demo/greet "\nHola, gracias, %1 por proporcionar su nombre."}  }})


(defn get-translation [dictionary locale param]
  (let [keyword-path (if (namespace param)
                       [(keyword (namespace param)) (keyword (name param))]
                       [param])]
    (get-in dictionary (concat [locale] keyword-path))))

(defn get-translate [dictionary locale param]
  (let [keyword-path (->> (clojure.string/split param #"/")
                          (mapv keyword))]
    (get-in dictionary (concat [locale] keyword-path))))


(defn translate [section locale param]
  (get-in my-dictionary [section locale param]))
(comment
  (def param :check-box/label)
  ())