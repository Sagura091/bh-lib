(ns bh-ui.atom.bhui.markdown
  (:require ["react-markdown" :as ReactMarkdown]))


(defn markdown [content]
  [:> ReactMarkdown {:source content}])