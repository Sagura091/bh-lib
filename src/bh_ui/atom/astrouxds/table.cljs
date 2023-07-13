(ns bh-ui.atom.astrouxds.table
  (:require ["@astrouxds/react" :refer (RuxTable RuxTableHeader RuxTableHeaderRow RuxTableHeaderCell RuxTableBody RuxTableRow RuxTableCell)]))


(defn table [header row1 row2 row3 row4 row5]
   [:> RuxTable
    [:> RuxTableHeader
     [:> RuxTableHeaderRow
       (doall (for [h header]
                ^{:key h} [:> RuxTableHeaderCell h]))]]
    [:> RuxTableBody
     (doall (for [[idx r] (map-indexed vector [row1 row2 row3 row4 row5])]
              ^{:key idx} [:> RuxTableRow {:selected false}
                           (doall (for [[idx c] (map-indexed vector r)]
                                    ^{:key (str idx "." c)} [:> RuxTableCell c]))]))]])

