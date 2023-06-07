(ns demo.src.catalog.welcome.examples
  (:require [demo.src.catalog.technologies.overview.overview :as o]))


(defn overview []
  [o/overview
   "Examples"
   "This application documents the design and implementation of a UI Design System using the principles of
      [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) by Brad Frost."])

