(ns demo.catalog.atom.example.experimental.full-calender
  (:require
    [woolybear.ad.layout :as layout]
    [woolybear.ad.catalog.utils :as acu]
    [bh-ui.atom.experimental.full-calender :as calender]
    [bh-ui.core :as bh]
    [reagent.core :as r]))

(def config {:initialView "dayGridMonth"
             :views "dayGridMonth,listWeek,timeGridWeek,multiMonthYear"
             :editable true
             :selectable true
             :weekends true
             :dayMaxEvents true
             :nowIndicator true
             :multiMonthMaxColumns 2})

(def style {:height "900px"})


 (def data (r/atom [{:id "meeting" :title "Meeting" :start "2023-09-19T08:30:00" :end "2023-09-19T09:00:00"}
                    {:id "all-day" :title "All Day Event Spanning Multiple Days" :start "2023-09-19" :end "2023-09-21"}
                    {:id "infinite-recurring" :title "Recurring Event" :daysOfWeek [5] :startTime "13:00" :endTime "14:00" :editable false}
                    {:id "3-week-recurring" :title "Recurring Event" :daysOfWeek [1] :startTime "09:00" :endTime "10:00" :startRecur "2023-09-04" :endRecur "2023-09-19" :editable false}]))

 (defn example []
   (acu/demo
     "Full Calender"
      [calender/component
       :data data
       :config config
       :style style]))
