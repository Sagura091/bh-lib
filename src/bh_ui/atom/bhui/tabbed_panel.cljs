(ns bh-ui.atom.bhui.tabbed-panel
  (:require [taoensso.timbre :as log]

            [woolybear.ad.layout :as layout]
            [woolybear.packs.flex-panel :as flex]
            [woolybear.packs.tab-panel :as tab-panel]

            [bh-ui.atom.bhui.navbar :as navbar]
            [bh-ui.tabbed-pane.utils :as tab-utils]))


(def last-short-name (atom nil))
(def last-start-panel (atom nil))

(defn tabbed-panel
  "makes a large panel containing tabs for each item. Selecting a tab will make tha corresponding
  page show (and hide all the others)

  "
  [& {:keys [title extra-classes short-name description children start-panel]}]

  (reset! last-short-name short-name)
  (reset! last-start-panel start-panel)

  (tab-utils/init-tabbed-panel short-name start-panel)

  ;[layout/page {:extra-classes :is-fluid}
  [flex/flex-panel (or extra-classes {})
   [flex/flex-top
    [layout/page-header {:extra-classes :is-fluid}
     [layout/page-title title]
     [layout/markdown-block description]
     [layout/text-block ""]]
    [navbar/navbar children [(keyword short-name "tab-panel")]]]

   [layout/page-body {:extra-classes :is-fluid}
    (into
      [tab-panel/tab-panel {:extra-classes             :is-fluid
                            :subscribe-to-selected-tab [(keyword short-name "value")]}]

      (doall
        (map (fn [[tag _ page]]
               [tab-panel/sub-panel {:panel-id tag} page])
          children)))]])



(comment
  @last-short-name
  @last-start-panel
  (def short-name @last-short-name)


  (keyword "" "value")

  ())

