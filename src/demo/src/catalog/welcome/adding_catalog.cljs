(ns demo.src.catalog.welcome.adding-catalog
  (:require [demo.src.catalog.technologies.overview.overview :as o]))


(defn overview []
  [o/overview
   "Adding to the demo.src.catalog"
   "See also:

- [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)
- [Clojure](https://clojure.org)
- [Lisp](https://en.wikipedia.org/wiki/Lisp_(programming_language))
- [Functional Programming ](https://en.wikipedia.org/wiki/Functional_programming)
- [Woolybear](https://github.com/manutter51/woolybear)
- [Re-com](https://re-com.day8.com.au)"])

