(ns bh-ui.atom.experimental.full-calender
  (:require
    [reagent.core :as r]
    ["@fullcalendar/react$default" :as FullCalender]
    ["@fullcalendar/daygrid$default" :as dayGridPlugin]
    ["@fullcalendar/multimonth$default" :as multiMonthPlugin]
    ["@fullcalendar/list$default" :as listPlugin]
    ["@fullcalendar/timegrid$default" :as timeGridPlugin]
    ["@fullcalendar/interaction" :refer (Draggable)]
    ["@fullcalendar/interaction$default" :as interactionPlugin]
    [re-frame.core :as re-frame]
    [bh-ui.core :as bh]
    [taoensso.timbre :as log]))




(defn- on-date-select-default
  "Summary:
  callback that is triggered when a date/time selection is made.
  Adds newly created event to 'data' parameter as map

  Parameters
  data : vector of event maps
  auto-id : integer atom
  selectionInfo : JavaScript object (https://fullcalendar.io/docs/select-callback)"
  [data auto-id selectionInfo]
  (let [title                         (js/prompt "Please enter a title for your event")
        calendarApi                   (.-calendar (.-view selectionInfo))
        {start :startStr end :endStr} (js->clj selectionInfo :keywordize-keys true)]
    (.unselect calendarApi)
    (when title
      ;(swap! data conj {:id (str "auto-generated-id-" (swap! auto-id inc)) :title title :start start :end end})
      (bh/utils-handle-change-path data [[conj {:id (str "auto-generated-id-" (swap! auto-id inc))
                                                :title title
                                                :start start
                                                :end end}]]))))




(defn- on-event-click-default
  "Summary:
  Callback triggered when event is clicked

  Parameters:
  click-info : Javascript Object (https://fullcalendar.io/docs/eventClick)
  "
  [click-info]
  (let [title (.-title (.-event click-info))]
    (when (js/confirm (str "Are you sure you want to remove the event: '" title "'" " ?"))
      ;removes event from calendar and triggers on-event-remove callback
      (.remove (.-event click-info)))))




(defn- on-event-remove-default
  "Summary:
  Callback triggered when an event has been removed from calendar.
  Removes event from 'data' param.

  Parameters:
  data : vector of event maps
  remove-info : JavaScript object (https://fullcalendar.io/docs/eventRemove)"
  [data remove-info]
  (let [event-id        (.-id (.-event remove-info))
        filtered-events (into [] (filter (fn [event]
                                           (not= (:id event) event-id))
                                         @data))]
    ;TODO: Is there a better way to update data here. Maybe disj???
    ;(log/info filtered-events)
    (bh/utils-handle-change-path data [[bh/utils-set-local-values [] filtered-events]])))





(defn- on-event-change-default
  "Summary:
  Callback triggered after an event has been modified in some way.
  Adds updated event to 'data' param as a map.

  Parameters:
  data : vector of event maps
  change-info : Javascript object (https://fullcalendar.io/docs/eventChange)"
  [data change-info]
  (let [event-id        (.-id (.-event change-info))
        filtered-events (into [] (filter (fn [event]
                                           (not= (:id event) event-id))
                                         @data))
        new-event       (-> change-info
                            .-event
                            .toPlainObject
                            (js->clj :keywordize-keys true))]
    ;(log/info new-event)
    (bh/utils-handle-change-path data [[bh/utils-set-local-values [] (conj filtered-events new-event)]])))




(defn- on-event-receive-default
  "Summary:
  Callback triggered when an external draggable element with associated event data was dropped
  onto the calendar. Adds newly dropped event to 'data' param as a map.

  Parameters:
  data : vector of event maps
  info : JavaScript object (https://fullcalendar.io/docs/eventReceive)"
  [data info]
  ;(js/console.log info)
  (let [event (-> info
                  .-event
                  .toPlainObject
                  (js->clj :keywordize-keys true))]
    ;(log/info  (merge event (:extendedProps event)))
    (bh/utils-handle-change-path data [[conj (merge event (:extendedProps event))]])))




(defn- external-events
  "Contains external draggable events"
  []
  [:div#event-container
   [:p [:strong "Drag these on the calendar:"]]
   [:div.fc-h-event.fc-daygrid-event.external-event "event 1"]
   [:div.fc-h-event.fc-daygrid-event.external-event "event 2"]
   [:div.fc-h-event.fc-daygrid-event.external-event "event 3"]])



;TODO: some css styles from other stylesheets were inherited/overwriting full calender css styles.
;      had to comment out '.content table' selector from wb.css file for calender to display
;      correctly.

(defn component
  "Full Calender (https://fullcalendar.io)

  data - Vector of event maps (required)
  Ex: [{:id \"meeting\" :title \"Meeting\" :start \"2023-09-19T08:30:00\" :end \"2023-09-19T09:00:00\"}
       {:id \"3-week-recurring\" :title \"Recurring Event\" :daysOfWeek [1] :startTime \"09:00\" :endTime \"10:00\" :startRecur \"2023-09-04\" :endRecur \"2023-09-19\" :editable false}]

  standard events are defined as a map with the following keys:
  | keyword        | type                                                      | description
  |:---------------|:---------------------------------------------------------:|:----------------------------------------------------------------------|
  | :id            | string/int                                                | uniquely identifies event
  | :title         | string                                                    | text that appears on event
  | :start         | date parsable (https://fullcalendar.io/docs/date-parsing) | day/time event begins
  | :end           | date parsable (https://fullcalendar.io/docs/date-parsing) | day/time event ends
  | :editable      | boolean                                                   | determines if event can be modified

  Recurring events are defined as a map with the following keys:
  | keyword        | type                                                             | description
  |:---------------|:----------------------------------------------------------------:|:----------------------------------------------------------------------|
  | :id            | string/int                                                       | uniquely identifies event
  | :title         | string                                                           | text that appears on event
  | :startTime     | duration parsable (https://fullcalendar.io/docs/duration-object) | time of day event starts
  | :endTime       | duration parsable (https://fullcalendar.io/docs/duration-object) | time of day event ends
  | :editable      | boolean                                                          | determines if event can be modified
  | :daysOfWeek    | vector of integers                                               | days of weeks event repeats
  | :startRecur    | date parsable (https://fullcalendar.io/docs/date-parsing)        | when recurrences of the event start
  | :endRecur      | data parsable (https://fullcalendar.io/docs/date-parsing         | when recurrences of the event end

  config - Map (optional)
  Ex: {:initialView \"dayGridMonth\"
       :views \"dayGridMonth,listWeek,timeGridWeek,multiMonthYear\"
       :editable true
       :nowIndicator true
       :selectable true
       :weekends true
       :dayMaxEvents true
       :nowIndicator true}

  config is defined as a map with the following keys:
  | keyword               | type                | description
  |:----------------------|:-------------------:|:-------------------------------------------------------------------------|
  | :initialView          | string              | initial view when the calendar loads
  | :views                | string              | views to be displayed
  | :editable             | boolean             | determines whether events on calendar can be modified.
  | :selectable           | boolean             | allows user to highlight multiple days/time slots by clicking and dragging
  | :weekends             | boolean             | whether to include saturday/sunday columns in any of the calendar views
  | :dayMaxEvents         | boolean             | max number of events in a day until they are displayed in a popover
  | :nowIndicator         | boolean             | marker that displays the exact current time
  | :multiMonthMaxColumns | integer             | max amount of columns rendered in multiMonthYear view
  | :on-date-select       | function (callback) | See default implementation above (defn on-select-default) for required parameters
  | :on-event-click       | function (callback) | See default implementation above (defn on-event-click-default) for required parameters
  | :on-event-receive     | function (callback) | See default implementation above (defn on-event-receive-default) for required parameters
  | :on-event-change      | function (callback) | See default implementation above (defn on-event-change-default) for  required parameters
  | :on-event-remove      | function (callback) | See default implementation above (defn on-event-remove-default) for required parameters

  style - Map (optional)
  Ex: {:height \"100px\"}

  | keyword | type    | description
  |:--------|:-------:|:-------------------------------------------------------------------------|
  | :height | string  | specifies height for calendar"



  [& {:keys [data config style]}]
  (let [d       (bh/utils-resolve-value data)
        auto-id (atom 0)]

    ;(log/info d)
    (r/create-class
      {:component-did-mount (fn [] (let [event-container (js/document.getElementById "event-container")]
                                     (new
                                       Draggable
                                       event-container
                                       (clj->js {:itemSelector ".external-event"
                                                 :eventData (fn [eventEl]
                                                              {:title (.-innerText eventEl)
                                                               :id (str "auto-generated-id-" (swap! auto-id inc))})}))))

       :reagent-render      (fn []
                              ;(log/info d)
                              [:div {:style {:display :flex}}
                               [external-events]
                               [:div {:style {:width "70%"}}
                                [:> FullCalender {:plugins             [dayGridPlugin
                                                                        timeGridPlugin
                                                                        listPlugin
                                                                        multiMonthPlugin
                                                                        interactionPlugin]
                                                  :headerToolbar        {:left "prev,next" :center "title" :right (:views config)}
                                                  :initialView          (or (:initialView config) "dayGridMonth")
                                                  :editable             (or (:editable config) false)
                                                  :selectable           (or (:selectable config) false)
                                                  :nowIndicator         (or (:nowIndicator config) false)
                                                  :weekends             (or (:weekends config) false)
                                                  :dayMaxEvents         (or (:dayMaxEvents config) false)
                                                  :multiMonthMaxColumns (or (:multiMonthMaxColumns config) 3)
                                                  :select               (partial (or (:on-date-select config) on-date-select-default) d auto-id)
                                                  :eventClick           (or (:on-event-click config) on-event-click-default)
                                                  :eventRemove          (partial (or (:on-event-remove config) on-event-remove-default) d)
                                                  :eventReceive         (partial (or (:on-event-receive config) on-event-receive-default) d)
                                                  :eventChange          (partial (or (:on-event-change config) on-event-change-default) d)
                                                  :events               @d
                                                  :height               (or (:height style) "900px")}]]])})))


(def meta-data {:full-calender/calender {:component component
                                         :ports     {:config :port/sink
                                                     :data   :port/sink
                                                     :style  :port/sink}}})

(re-frame/dispatch-sync [:register-meta meta-data])
(comment

  ())