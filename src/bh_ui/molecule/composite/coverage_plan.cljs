(ns bh-ui.molecule.composite.coverage-plan
  "provide a composed UI for a \"Coverage Plan\" which shows targets and satellite coverage areas
  on a 3D globe"
  (:require [bh-ui.atom.bhui.color-picker :as picker]
            [bh-ui.molecule.composite.coverage-plan.support :as s]
            [bh-ui.utils :as ui-utils]
            [bh-ui.utils.color :as c]
            [bh-ui.utils.helpers :as h]
            [bh-ui.utils.locals :as l]
            [cljs-time.coerce :as coerce]
            [cljs-time.core :as t]
            [re-com.core :as rc]
            [re-frame.core :as re-frame]
            [reagent.core :as r]
            [day8.re-frame.tracing :refer-macros [fn-traced]]
            [taoensso.timbre :as log]
            ["dagre" :as dagre]
            ["graphlib" :as graphlib]
            ["reactflow" :refer (Position)]))


(log/info "bh-ui.molecule.composite.coverage-plan")


;; region ; data for developing the UI


(def dummy-targets #{"alpha-hd" "bravo-img" "fire-hd" "fire-ir" "severe-hd"})


(def dummy-satellites #{"abi-meso-2" "abi-meso-10" "abi-meso-4" "abi-meso-11" "viirs-5" "avhhr-6"})

;; endregion


;; region ; local function to support :source/local topics

(defn make-shapes [data shape-fn]
  (map (fn [d] {:data d :shape (shape-fn d)}) data))


(defn fn-coverage
  "registers the subscription for the entity defined by 'layers'. processing from
  inputs to the output is performed by 'some-computation'

  this function assumes that the caller provides fully-qualified signal vectors, so the CALLER
  is responsible for building the keyword (using path->keyword)

  - targets : (vector of keywords) the subscription signal for the target data
  - satellites : (vector of keywords) the subscription signal for the 'selected' satellite data
  - coverages : (vector of keywords) the subscription signal for the coverage data

  builds and registers the subscription provided by 'layers'

  "
  [{:keys [targets satellites all-imagery
           selected-targets selected-satellites
           selected-imagery
           coverages
           current-time sub-name]}]

  ;(log/info "fn-coverage" shapes
  ;  "//" targets
  ;  "//" satellites
  ;  "//" all-imagery
  ;  "//" selected-targets
  ;  "//" selected-satellites
  ;  "//" selected-imagery}]
  ;  "//" coverages)

  (re-frame/reg-sub
    (first sub-name)
    :<- targets
    :<- satellites
    :<- all-imagery
    :<- selected-targets
    :<- selected-satellites
    :<- selected-imagery
    :<- coverages
    :<- current-time
    (fn [[t s a-i s-t s-s s-i c ct] _]
      ;(log/info "fn-coverage (sub)" ct
      ;  "// (coverages)" c
      ;  "// (targets)" t
      ;  "// (satellites)" s
      ;  "// (all-imagery)" a-i
      ;  "// (selected-targets)" s-t
      ;  "// (selected-satellites)" s-s
      ;  "// (selected-imagery)" s-i
      ;  "// (cooked)" (s/cook-coverages s s-s c ct)
      ; "// (filtered-coverages)" (filter #(contains?
      ;                                     s-s
      ;                                     (get-in % [:coverage :sensor]))
      ;                             (s/cook-coverages s s-s c ct)))

      (let [filtered-coverages (filter #(contains?
                                          s-s
                                          (get-in % [:coverage :sensor]))
                                       (s/cook-coverages s s-s c ct))
            cvg                (if (seq filtered-coverages)
                                 (map
                                   #(get % :shape)
                                   (make-shapes filtered-coverages s/make-coverage-shape))
                                 [])
            trg                (if (seq t)
                                 (map
                                   #(get % :shape)
                                   (make-shapes (s/cook-targets t s-t ct) s/make-target-shape))
                                 [])
            img                (if (seq s-i)
                                 (mapcat
                                   :shape
                                   (make-shapes (s/cook-imagery a-i s-i) s/make-imagery-shape))
                                 [])
            ret                (concat
                                 cvg
                                 trg
                                 img)]

         ;(log/info "fn-coverage (ret)"
         ;        "// (cvg)" cvg
         ;         "// (img)" img
         ;         "// (trg)" trg
         ;         )

        ret))))


(defn fn-range
  "registers the subscription for the entity defined by 'selected'. processing from
  inputs to output is performed by 'some-computation'

  - data : (vector of keywords) the subscription signal for the input data
  - container-id : (string) name of the container holding the blackboard

  builds and registers the subscription :<container>/blackboard.<selected>
  "
  [{:keys [data sub-name]}]

  ;(log/info "fn-range" range "//" data)

  (re-frame/reg-sub
    (first sub-name)
    :<- data
    (fn [d _]
      (let [times (->> d :data (map :time) set)]
        [(apply min times) (apply max times)]))))


(defn fn-current-time [{:keys [value sub-name]}]
  ;(log/info "fn-current-time" value "//" current-time)

  (re-frame/reg-sub
    (first sub-name)
    :<- value
    (fn [v _]
      (coerce/to-date (t/plus (t/now) (t/hours v))))))


(defn color-entities [d p next-color topic k]
  (let [cnt           (count s/sensor-color-pallet)
        last-data     ((keyword topic) p)
        assigned      (map (juxt k :color) last-data)
        assigned-set  (->> assigned (map first) set)]

    (doall
      (map (fn [e]
             (if (contains? assigned-set (k e))
               (assoc e :color (->> last-data
                                    (filter #(= (k e) (k %)))
                                    first
                                    :color))
               (assoc e :color (nth s/sensor-color-pallet
                                    (mod (swap! next-color inc) cnt)))))
           (:data d)))))

(defn target-table-handler [selected colors sub-name]
  ;(log/info "target-table-handler" sub-name "//" selected "//" colors)

  (re-frame/reg-event-fx
    (first sub-name)
    (fn-traced [_ [event updates]]
               (let [colors-data  @(h/resolve-value colors)
                     selected-data @(h/resolve-value selected)
                     table-data   (get (first updates) 2)
                     assigned-colors     (reduce (fn [acc itm]
                                            (assoc acc (:aoi itm) (c/match-colors-hex (:color (:symbol itm)))))
                                          {}
                                          table-data)
                     new-colors   (map (fn [t]
                                         (assoc t :color (or (get assigned-colors (:name t)) (:color t))))
                                       colors-data)
                     new-selected (reduce (fn [acc itm]
                                            (if (:include? itm)
                                              (conj acc (:aoi itm))
                                              acc))
                                          #{}
                                          table-data)]

                 {:fx [[:dispatch [(first selected) [[l/set-val [] new-selected]]]]
                       [:dispatch [(first colors) [[l/set-val [] new-colors]]]]]}))))

(defn satellite-table-handler [selected colors sub-name]
  ;(log/info "make satellite handler" sub-name "//" data)

  (re-frame/reg-event-fx
    (first sub-name)
    (fn-traced [_ [event updates]]
               (let [colors-data  @(h/resolve-value colors)
                     table-data   (get (first updates) 2)
                     assigned     (reduce (fn [acc itm]
                                            (assoc acc (:name (:sensor itm)) (c/match-colors-rgba (:color (:sensor itm)))))
                                          {}
                                          table-data)
                     new-colors   (map (fn [t]
                                         (assoc t :color (get assigned (:sensor_id t))))
                                       colors-data)
                     new-selected (reduce (fn [acc itm]
                                            (if (:include? itm)
                                              (conj acc (:name (:sensor itm)))
                                              acc))
                                          #{}
                                          table-data)]

                 ;(log/info "make-handler b"  new-colors)
                 {:fx [[:dispatch [(first selected) [[l/set-val [] new-selected]]]]
                       [:dispatch [(first colors) [[l/set-val [] new-colors]]]]]}))))

(defn imagery-table-handler [selected sub-name]
  ;(log/info "target-table-handler" sub-name "//" selected)

  (re-frame/reg-event-fx
    (first sub-name)
    (fn-traced [_ [event updates]]
               (let [table-data   (get (first updates) 2)
                     new-selected (reduce (fn [acc itm]
                                            (if (:include? itm)
                                              (conj acc (:description itm))
                                              acc))
                                          #{}
                                          table-data)]

                 {:fx [[:dispatch [(first selected) [[l/set-val [] new-selected]]]]]}))))

(defn fn-color-targets [{:keys [data sub-name colored] :as params}]
  (let [next-target-color (atom -1)
        [component _] (-> sub-name
                          first
                          name
                          (clojure.string/split #".blackboard."))
        [_ topic]      (-> colored
                           first
                           name
                           (clojure.string/split #".blackboard."))
        path              [(keyword (str component ".blackboard"))]]

    ;(log/info "fn-color-targets" params)

    (re-frame/reg-sub
      ;(log/info "fn-color-targets" (h/resolve-value data) "//" (first sub-name) "//" (h/resolve-value path))
      (first sub-name)
      :<- data
      :<- path
      (fn [[d p] _]
        ;(log/info "made it here" d p)
        (let [ret (color-entities d p next-target-color topic :name)]

          ;(log/info "fn-color-targets (ret)" ret)

          ; need to store this in the app-db because this fn is STATEFUL, we don't
          ; want to change a target if it has already been assigned a color
          (h/handle-change-path colored [[l/set-val [] ret]])
          ret)))))

(defn fn-color-satellites [{:keys [data sub-name colored]}]
  ;(log/info "fn-color-satellites" data "//" colored)
  (let [next-sat-color    (atom -1)
        [component _] (-> sub-name
                          first
                          name
                          (clojure.string/split #".blackboard."))
        [_ topic]      (-> colored
                           first
                           name
                           (clojure.string/split #".blackboard."))
        path              [(keyword (str component ".blackboard"))]]
    (re-frame/reg-sub
      (first sub-name)
      :<- data
      :<- path
      (fn [[d p] _]
        ;(log/info "fn-color-satellites (data)" d "//" (:data d))
        (let [ret (color-entities d p next-sat-color topic :sensor_id)]

          ;(log/info "fn-color-satellites (ret)" ret )

          ; need to store this in the app-db because this fn is STATEFUL, we don't
          ; want to change a satellite/sensor if it has already been assigned a color
          (h/handle-change-path colored [[l/set-val [] ret]])

          ret)))))



(defn fn-filtered-targets [{:keys [targets filter-value sub-name] :as params}]

  ;(log/info "filtered-targets" targets "//" filter-value)
  (re-frame/reg-sub
    (first sub-name)
    :<- targets
    :<- filter-value
    (fn [[t f] _]
      (->> t
           (filter #(re-find (re-pattern (str "(?i)" f)) (:name %)))))))

(defn fn-format-target-data [{:keys [targets selection sub-name colors] :as params}]
  ;(log/info "format-target-data" params)
  ;(load-scenario :main-grid.coverage-plan)
  (re-frame/reg-sub
    (first sub-name)
    :<- targets
    :<- selection
    (fn [[t s] _]
      (let [ret (into [] (map (fn [target]
                                {:aoi (:name target)
                                 :symbol {:color (last (:color target)) :name (:name target)}
                                 :include? (contains? s (:name target))})
                              t))]
        ret)))
  (target-table-handler selection colors sub-name))

(defn fn-format-satellite-data [{:keys [satellites selection sub-name colors] :as params}]
  ;(log/info "format-satellite-data" params)
  (re-frame/reg-sub
    (first sub-name)
    :<- satellites
    :<- selection
    (fn [[t s] _]
      ;(log/info "format satellite data (b) " s)
      (into [] (map (fn [satellite]
                      (let [[r g b a] (get (:color satellite) 2)]
                        {:platform (:platform_id satellite)
                         :sensor  {:color {:r r :g g :b b :a a} :name (:sensor_id satellite)}
                         :include? (contains? s (:sensor_id satellite))}))
                    t))))
  (satellite-table-handler selection colors sub-name))




(defn fn-all-imagery [{:keys [glm meso-1                    ;full-disk meso-2 conus
                              sub-name]}]
  ;(log/info "fn-all-imagery" glm "//" all-imagery)
  (re-frame/reg-sub
    (first sub-name)
    :<- glm
    ;:<- full-disk
    :<- meso-1
    ;:<- meso-2
    ;:<- conus
    (fn [[g m-1] _]
      ;(log/info "fn-all-imagery (CALLED)" g "//" m-1)
      (let [ret (into [] (concat [] (:data g) (:data m-1)))]
        ;(log/info "fn-all-imagery (ret)" ret)
        ret))))

(defn fn-format-imagery-data [{:keys [all-imagery selection sub-name] :as params}]
  ;(log/info "format-satellite-data" params)
  (re-frame/reg-sub
    (first sub-name)
    :<- all-imagery
    :<- selection
    (fn [[i s] _]
      (into [] (map (fn [imagery]
                      {:description (:name imagery)
                       :include?    (contains? s (:name imagery))})
                    i))))
  (imagery-table-handler selection sub-name))




; register meta-data for all these functions
;
(re-frame/dispatch-sync [:register-meta
                         {:bigger-coverage-plan/fn-coverage         {:function fn-coverage
                                                                     :ports    {:targets          :port/sink :satellites :port/sink
                                                                                :selected-targets :port/sink :selected-satellites :port/sink
                                                                                :coverages        :port/sink :current-time :port/sink
                                                                                :shapes           :port/source}}
                          :bigger-coverage-plan/fn-range            {:function fn-range
                                                                     :ports    {:data  :port/sink
                                                                                :range :port/source}}
                          :bigger-coverage-plan/fn-current-time     {:function fn-current-time
                                                                     :ports    {:value        :port/sink
                                                                                :current-time :port/source}}
                          :bigger-coverage-plan/fn-color-targets    {:function fn-color-targets
                                                                     :ports    {:data    :port/sink}}
                          :bigger-coverage-plan/fn-color-satellites {:function fn-color-satellites
                                                                     :ports    {:data    :port/sink
                                                                                :colored :port/source}}
                          :bigger-coverage-plan/fn-filtered-targets {:function fn-filtered-targets
                                                                     :ports    {:targets          :port/sink
                                                                                :filter-value     :port/sink}}
                          :bigger-coverage-plan/fn-format-target-data {:function fn-format-target-data
                                                                       :ports    {:targets       :port/sink
                                                                                  :selection     :port/sink}}
                          :bigger-coverage-plan/fn-format-satellite-data {:function fn-format-satellite-data
                                                                          :ports    {:satellites    :port/sink
                                                                                     :selection     :port/sink}}
                          :bigger-coverage-plan/fn-format-imagery-data   {:function fn-format-imagery-data
                                                                          :ports    {:all-imagery   :port/sink
                                                                                     :selection     :port/sink}}


                          :bigger-coverage-plan/fn-all-imagery      {:function fn-all-imagery
                                                                     :ports    {:glm         :port/sink
                                                                                ;:fill-disk   :port/sink
                                                                                ;:meso-1      :port/sink
                                                                                ;:meso-2      :port/sink
                                                                                ;:conus       :port/sink
                                                                                :all-imagery :port/source}}}])




(defn target-filter-input [& {:keys [data component-id container-id] :as params}]
  (let [v (h/resolve-value data)]
    (fn []
      [rc/h-box :src (rc/at)
       :align :center
       :children [[rc/input-text :src (rc/at)
                   :model @v
                   :placeholder "enter text to filter targets"
                   :change-on-blur? false
                   :on-change #(h/handle-change-path data [[l/set-val [] %]])]
                  [rc/md-circle-icon-button :src (rc/at)
                   :md-icon-name "zmdi-close-circle-o"
                   :tooltip "Click to clear"
                   :size :smaller
                   :on-click #(h/handle-change-path data [[l/set-val [] ""]])]]])))


(defn slider [& {:keys [value range width disabled?]}]

  (let [[min max] @(h/resolve-value range)]

    (log/info "slider" value "//" range "// [" min " " max "]")

    [rc/h-box :src (rc/at)
     :gap "2px"
     :width "100%"
     :children [[rc/slider :src (rc/at)
                 :model (h/resolve-value value)
                 :min min
                 :max max
                 :parts {:wrapper {:style {:width "90%"}}}
                 :width (or width "100%")
                 ;:on-change #(h/handle-change value (js/parseInt %))
                 :on-change #(h/handle-change-path value [[l/set-val [] (js/parseInt %)]])
                 :disabled? (or disabled? false)]
                [:p @(h/resolve-value value)]]]))



(re-frame/dispatch-sync [:register-meta
                         {
                          :bigger-coverage-plan/target-filter-input {:component target-filter-input
                                                                     :ports     {:value :port/sink}}
                          :bigger-coverage-plan/slider              {:component slider
                                                                     :ports {:value :port/source-sink
                                                                             :range :port/sink}}}])
;; endregion
(def target-table-config {:table-type :standard
                          :columns    [{:colHeader "Include?"
                                        :colId     :include?
                                        :render    :check-box-cell}
                                       {:colHeader "Symbol"
                                        :colId     :symbol
                                        :render    :hex-color-picker-cell}
                                       {:colHeader "AoI"
                                        :colId     :aoi
                                        :render    :aoi-cell}
                                       {:colHeader "all"
                                        :colProp   :select-all
                                        :colSelect :include?
                                        :colId     :select-all
                                        :render    :target-edit-save-cell}
                                       {:colHeader "none"
                                        :colProp   :select-none
                                        :colSelect :include?
                                        :colId     :none
                                        :render    :target-delete-cell}]})

(def sensor-table-config {:table-type :standard
                   :columns    [{:colHeader "Include?"
                                 :colId     :include?
                                 :render    :check-box-cell}

                                {:colHeader "Sensor/Color"
                                 :colId     :sensor
                                 :render    :rgba-color-picker}
                                {:colHeader "Platform"
                                 :colId     :platform
                                 :render    :platform-cell}

                                {:colHeader "all"
                                 :colProp   :select-all
                                 :colSelect :include?
                                 :colId     :select-all}

                                {:colHeader "none"
                                 :colProp   :select-none
                                 :colSelect :include?
                                 :colId     :none}]})

(def imagery-table-config {:table-type :standard
                           :columns    [{:colHeader "Include?"
                                         :colId     :include?
                                         :render    :check-box-cell}
                                        {:colHeader "Description"
                                         :colId     :description}
                                        {:colHeader "all"
                                         :colProp   :select-all
                                         :colSelect :include?
                                         :colId     :select-all
                                         :render    :target-delete-cell}
                                        {:colHeader "none"
                                         :colProp   :select-none
                                         :colSelect :include?
                                         :colId     :none}]})


(def remote-satellites
  {:title "Satellites",
   :c-o-c [{:step :generated,
            :by "rocky-road.pistachio.data-source.satellites",
            :version "0.9.1-0x3e87",
            :at "Wed Aug 30 10:38:01 EDT 2023",
            :signature "61cd5d25-fb12-4902-a67e-8b2044d1e4ed"}],
   :metadata {:title "Satellites",
              :type :tabular,
              :id :name,
              :fields {:name :string,
                       :start :vector,
                       :path :string,
                       :platform_id :string,
                       :type :string,
                       :steering_offset :vector,
                       :sensor_size :vector,
                       :sensor_id :string}},
   :data [{:path "geo",
           :steering_offset [[0 0] [0 0]],
           :platform_id "goes-16-(east)",
           :sensor_size [36 36],
           :steering_type "offset-computed",
           :name "goes-16-(east)",
           :sensor_id "abi-16-1",
           :start [18 56],
           :type "image",
           :orbital_slot "-75",
           :sensor_shape [],
           :orbit_offset "0"}
          {:path "geo",
           :steering_offset [[-12 12] [-12 12]],
           :platform_id "goes-16-(east)",
           :sensor_size [3 3],
           :steering_type "offset-computed",
           :name "goes-16-(east)",
           :sensor_id "abi-16-meso-1",
           :start [18 56],
           :type "hidef-image",
           :orbital_slot "-75",
           :sensor_shape [],
           :orbit_offset "0"}
          {:path "geo",
           :steering_offset [[-12 12] [-12 12]],
           :platform_id "goes-16-(east)",
           :sensor_size [3 3],
           :steering_type "offset-computed",
           :name "goes-16-(east)",
           :sensor_id "abi-16-meso-2",
           :start [18 56],
           :type "hidef-image",
           :orbital_slot "-75",
           :sensor_shape [],
           :orbit_offset "0"}
          {:path "geo",
           :steering_offset [[0 0] [0 0]],
           :platform_id "goes-17-(west)",
           :sensor_size [36 36],
           :steering_type "offset-computed",
           :name "goes-17-(west)",
           :sensor_id "abi-17-1",
           :start [18 46],
           :type "image",
           :orbital_slot "-135",
           :sensor_shape [],
           :orbit_offset "0"}
          {:path "geo",
           :steering_offset [[-12 12] [-12 12]],
           :platform_id "goes-17-(west)",
           :sensor_size [3 3],
           :steering_type "offset-computed",
           :name "goes-17-(west)",
           :sensor_id "abi-17-meso-1",
           :start [18 46],
           :type "hidef-image",
           :orbital_slot "-135",
           :sensor_shape [],
           :orbit_offset "0"}
          {:path "geo",
           :steering_offset [[-12 12] [-12 12]],
           :platform_id "goes-17-(west)",
           :sensor_size [3 3],
           :steering_type "offset-computed",
           :name "goes-17-(west)",
           :sensor_id "abi-17-meso-2",
           :start [18 46],
           :type "hidef-image",
           :orbital_slot "-135",
           :sensor_shape [],
           :orbit_offset "0"}
          {:path "geo",
           :steering_offset [[0 0] [0 0]],
           :platform_id "goes-25-(central)",
           :sensor_size [36 36],
           :steering_type "offset-computed",
           :name "goes-25-(central)",
           :sensor_id "abi-25-1",
           :start [18 51],
           :type "image",
           :orbital_slot "-105",
           :sensor_shape [],
           :orbit_offset "0"}
          {:path "geo",
           :steering_offset [[-12 12] [-12 12]],
           :platform_id "goes-25-(central)",
           :sensor_size [3 3],
           :steering_type "offset-computed",
           :name "goes-25-(central)",
           :sensor_id "abi-25-meso-1",
           :start [18 51],
           :type "hidef-image",
           :orbital_slot "-105",
           :sensor_shape [],
           :orbit_offset "0"}
          {:path "geo",
           :steering_offset [[-12 12] [-12 12]],
           :platform_id "goes-25-(central)",
           :sensor_size [3 3],
           :steering_type "offset-computed",
           :name "goes-25-(central)",
           :sensor_id "abi-25-meso-2",
           :start [18 51],
           :type "hidef-image",
           :orbital_slot "-105",
           :sensor_shape [],
           :orbit_offset "0"}
          {:path "geo",
           :steering_offset [[-12 12] [-12 12]],
           :platform_id "goes-25-(central)",
           :sensor_size [3 3],
           :steering_type "offset-computed",
           :name "goes-25-(central)",
           :sensor_id "abi-25-meso-3",
           :start [18 51],
           :type "hidef-image",
           :orbital_slot "-105",
           :sensor_shape [],
           :orbit_offset "0"}
          {:path "geo",
           :steering_offset [[-12 12] [-12 12]],
           :platform_id "goes-25-(central)",
           :sensor_size [3 3],
           :steering_type "offset-computed",
           :name "goes-25-(central)",
           :sensor_id "abi-25-meso-4",
           :start [18 51],
           :type "hidef-image",
           :orbital_slot "-105",
           :sensor_shape [],
           :orbit_offset "0"}
          {:path "horz",
           :steering_offset [],
           :platform_id "jpss-1",
           :sensor_size [],
           :steering_type "offset-shape",
           :name "jpss-1",
           :sensor_id "viirs-17-1",
           :start [18 54],
           :type "vi/r",
           :orbital_slot "0",
           :sensor_shape '([-18 -18]
                           [-18 -17]
                           [-18 -16]
                           [-18 -15]
                           [-18 -14]
                           [-18 -13]
                           [-18 -12]
                           [-18 -11]
                           [-18 -10]
                           [-18 -9]
                           [-18 -8]
                           [-18 -7]
                           [-18 -6]
                           [-18 -5]
                           [-18 -4]
                           [-18 -3]
                           [-18 -2]
                           [-18 -1]
                           [-18 0]
                           [-18 1]
                           [-18 2]
                           [-18 3]
                           [-18 4]
                           [-18 5]
                           [-18 6]
                           [-18 7]
                           [-18 8]
                           [-18 9]
                           [-18 10]
                           [-18 11]
                           [-18 12]
                           [-18 13]
                           [-18 14]
                           [-18 15]
                           [-18 16]
                           [-18 17]
                           [-18 18]
                           [-18 19]
                           [-18 20]
                           [-18 21]
                           [-18 22]
                           [-18 23]
                           [-18 24]
                           [-18 25]
                           [-18 26]
                           [-18 27]
                           [-18 28]
                           [-18 29]
                           [-18 30]
                           [-18 31]
                           [-18 32]
                           [-18 33]
                           [-18 34]
                           [-18 35]
                           [-18 36]
                           [-18 37]
                           [-18 38]
                           [-18 39]
                           [-18 40]
                           [-18 41]
                           [-18 42]
                           [-18 43]
                           [-18 44]
                           [-18 45]
                           [-18 46]
                           [-18 47]
                           [-18 48]
                           [-18 49]
                           [-18 50]
                           [-18 51]
                           [-18 52]
                           [-18 53]
                           [-18 54]
                           [-17 -18]
                           [-17 -17]
                           [-17 -16]
                           [-17 -15]
                           [-17 -14]
                           [-17 -13]
                           [-17 -12]
                           [-17 -11]
                           [-17 -10]
                           [-17 -9]
                           [-17 -8]
                           [-17 -7]
                           [-17 -6]
                           [-17 -5]
                           [-17 -4]
                           [-17 -3]
                           [-17 -2]
                           [-17 -1]
                           [-17 0]
                           [-17 1]
                           [-17 2]
                           [-17 3]
                           [-17 4]
                           [-17 5]
                           [-17 6]
                           [-17 7]
                           [-17 8]
                           [-17 9]
                           [-17 10]
                           [-17 11]
                           [-17 12]
                           [-17 13]
                           [-17 14]
                           [-17 15]
                           [-17 16]
                           [-17 17]
                           [-17 18]
                           [-17 19]
                           [-17 20]
                           [-17 21]
                           [-17 22]
                           [-17 23]
                           [-17 24]
                           [-17 25]
                           [-17 26]
                           [-17 27]
                           [-17 28]
                           [-17 29]
                           [-17 30]
                           [-17 31]
                           [-17 32]
                           [-17 33]
                           [-17 34]
                           [-17 35]
                           [-17 36]
                           [-17 37]
                           [-17 38]
                           [-17 39]
                           [-17 40]
                           [-17 41]
                           [-17 42]
                           [-17 43]
                           [-17 44]
                           [-17 45]
                           [-17 46]
                           [-17 47]
                           [-17 48]
                           [-17 49]
                           [-17 50]
                           [-17 51]
                           [-17 52]
                           [-17 53]
                           [-17 54]
                           [-16 -18]
                           [-16 -17]
                           [-16 -16]
                           [-16 -15]
                           [-16 -14]
                           [-16 -13]
                           [-16 -12]
                           [-16 -11]
                           [-16 -10]
                           [-16 -9]
                           [-16 -8]
                           [-16 -7]
                           [-16 -6]
                           [-16 -5]
                           [-16 -4]
                           [-16 -3]
                           [-16 -2]
                           [-16 -1]
                           [-16 0]
                           [-16 1]
                           [-16 2]
                           [-16 3]
                           [-16 4]
                           [-16 5]
                           [-16 6]
                           [-16 7]
                           [-16 8]
                           [-16 9]
                           [-16 10]
                           [-16 11]
                           [-16 12]
                           [-16 13]
                           [-16 14]
                           [-16 15]
                           [-16 16]
                           [-16 17]
                           [-16 18]
                           [-16 19]
                           [-16 20]
                           [-16 21]
                           [-16 22]
                           [-16 23]
                           [-16 24]
                           [-16 25]
                           [-16 26]
                           [-16 27]
                           [-16 28]
                           [-16 29]
                           [-16 30]
                           [-16 31]
                           [-16 32]
                           [-16 33]
                           [-16 34]
                           [-16 35]
                           [-16 36]
                           [-16 37]
                           [-16 38]
                           [-16 39]
                           [-16 40]
                           [-16 41]
                           [-16 42]
                           [-16 43]
                           [-16 44]
                           [-16 45]
                           [-16 46]
                           [-16 47]
                           [-16 48]
                           [-16 49]
                           [-16 50]
                           [-16 51]
                           [-16 52]
                           [-16 53]
                           [-16 54]
                           [-15 -12]
                           [-15 -11]
                           [-15 -10]
                           [-15 -9]
                           [-15 -8]
                           [-15 -7]
                           [-15 -6]
                           [-15 -5]
                           [-15 -4]
                           [-15 -3]
                           [-15 -2]
                           [-15 -1]
                           [-15 0]
                           [-15 1]
                           [-15 2]
                           [-15 3]
                           [-15 4]
                           [-15 5]
                           [-15 6]
                           [-15 7]
                           [-15 8]
                           [-15 24]
                           [-15 25]
                           [-15 26]
                           [-15 27]
                           [-15 28]
                           [-15 29]
                           [-15 30]
                           [-15 31]
                           [-15 32]
                           [-15 33]
                           [-15 34]
                           [-15 35]
                           [-15 36]
                           [-15 37]
                           [-15 38]
                           [-15 39]
                           [-15 40]
                           [-15 41]
                           [-15 42]
                           [-15 43]
                           [-15 44]
                           [-14 -10]
                           [-14 -9]
                           [-14 -8]
                           [-14 -7]
                           [-14 -6]
                           [-14 -5]
                           [-14 -4]
                           [-14 -3]
                           [-14 -2]
                           [-14 -1]
                           [-14 0]
                           [-14 1]
                           [-14 2]
                           [-14 3]
                           [-14 4]
                           [-14 5]
                           [-14 6]
                           [-14 26]
                           [-14 27]
                           [-14 28]
                           [-14 29]
                           [-14 30]
                           [-14 31]
                           [-14 32]
                           [-14 33]
                           [-14 34]
                           [-14 35]
                           [-14 36]
                           [-14 37]
                           [-14 38]
                           [-14 39]
                           [-14 40]
                           [-14 41]
                           [-14 42]
                           [-13 -9]
                           [-13 -8]
                           [-13 -7]
                           [-13 -6]
                           [-13 -5]
                           [-13 -4]
                           [-13 -3]
                           [-13 -2]
                           [-13 -1]
                           [-13 0]
                           [-13 1]
                           [-13 2]
                           [-13 3]
                           [-13 4]
                           [-13 5]
                           [-13 27]
                           [-13 28]
                           [-13 29]
                           [-13 30]
                           [-13 31]
                           [-13 32]
                           [-13 33]
                           [-13 34]
                           [-13 35]
                           [-13 36]
                           [-13 37]
                           [-13 38]
                           [-13 39]
                           [-13 40]
                           [-13 41]
                           [-12 -8]
                           [-12 -7]
                           [-12 -6]
                           [-12 -5]
                           [-12 -4]
                           [-12 -3]
                           [-12 -2]
                           [-12 -1]
                           [-12 0]
                           [-12 1]
                           [-12 2]
                           [-12 3]
                           [-12 4]
                           [-12 28]
                           [-12 29]
                           [-12 30]
                           [-12 31]
                           [-12 32]
                           [-12 33]
                           [-12 34]
                           [-12 35]
                           [-12 36]
                           [-12 37]
                           [-12 38]
                           [-12 39]
                           [-12 40]
                           [-11 -4]
                           [-11 -3]
                           [-11 -2]
                           [-11 -1]
                           [-11 0]
                           [-11 1]
                           [-11 32]
                           [-11 33]
                           [-11 34]
                           [-11 35]
                           [-11 36]
                           [-11 37]
                           [-10 -4]
                           [-10 -3]
                           [-10 -2]
                           [-10 -1]
                           [-10 0]
                           [-10 1]
                           [-10 32]
                           [-10 33]
                           [-10 34]
                           [-10 35]
                           [-10 36]
                           [-10 37]
                           [-9 -4]
                           [-9 -3]
                           [-9 -2]
                           [-9 -1]
                           [-9 0]
                           [-9 1]
                           [-9 32]
                           [-9 33]
                           [-9 34]
                           [-9 35]
                           [-9 36]
                           [-9 37]
                           [-8 -4]
                           [-8 -3]
                           [-8 -2]
                           [-8 -1]
                           [-8 0]
                           [-8 1]
                           [-8 32]
                           [-8 33]
                           [-8 34]
                           [-8 35]
                           [-8 36]
                           [-8 37]
                           [-7 -3]
                           [-7 -2]
                           [-7 -1]
                           [-7 0]
                           [-7 1]
                           [-7 2]
                           [-7 33]
                           [-7 34]
                           [-7 35]
                           [-7 36]
                           [-7 37]
                           [-7 38]
                           [-6 -3]
                           [-6 -2]
                           [-6 -1]
                           [-6 0]
                           [-6 1]
                           [-6 2]
                           [-6 33]
                           [-6 34]
                           [-6 35]
                           [-6 36]
                           [-6 37]
                           [-6 38]
                           [-5 -3]
                           [-5 -2]
                           [-5 -1]
                           [-5 0]
                           [-5 1]
                           [-5 2]
                           [-5 33]
                           [-5 34]
                           [-5 35]
                           [-5 36]
                           [-5 37]
                           [-5 38]
                           [-4 -3]
                           [-4 -2]
                           [-4 -1]
                           [-4 0]
                           [-4 1]
                           [-4 2]
                           [-4 33]
                           [-4 34]
                           [-4 35]
                           [-4 36]
                           [-4 37]
                           [-4 38]
                           [-3 -3]
                           [-3 -2]
                           [-3 -1]
                           [-3 0]
                           [-3 1]
                           [-3 2]
                           [-3 33]
                           [-3 34]
                           [-3 35]
                           [-3 36]
                           [-3 37]
                           [-3 38]
                           [-2 -3]
                           [-2 -2]
                           [-2 -1]
                           [-2 0]
                           [-2 1]
                           [-2 2]
                           [-2 33]
                           [-2 34]
                           [-2 35]
                           [-2 36]
                           [-2 37]
                           [-2 38]
                           [-1 -3]
                           [-1 -2]
                           [-1 -1]
                           [-1 0]
                           [-1 1]
                           [-1 2]
                           [-1 33]
                           [-1 34]
                           [-1 35]
                           [-1 36]
                           [-1 37]
                           [-1 38]
                           [0 -3]
                           [0 -2]
                           [0 -1]
                           [0 0]
                           [0 1]
                           [0 2]
                           [0 3]
                           [0 33]
                           [0 34]
                           [0 35]
                           [0 36]
                           [0 37]
                           [0 38]
                           [0 39]
                           [1 -2]
                           [1 -1]
                           [1 0]
                           [1 1]
                           [1 2]
                           [1 3]
                           [1 34]
                           [1 35]
                           [1 36]
                           [1 37]
                           [1 38]
                           [1 39]
                           [2 -2]
                           [2 -1]
                           [2 0]
                           [2 1]
                           [2 2]
                           [2 3]
                           [2 34]
                           [2 35]
                           [2 36]
                           [2 37]
                           [2 38]
                           [2 39]
                           [3 -2]
                           [3 -1]
                           [3 0]
                           [3 1]
                           [3 2]
                           [3 3]
                           [3 34]
                           [3 35]
                           [3 36]
                           [3 37]
                           [3 38]
                           [3 39]
                           [4 -2]
                           [4 -1]
                           [4 0]
                           [4 1]
                           [4 2]
                           [4 3]
                           [4 34]
                           [4 35]
                           [4 36]
                           [4 37]
                           [4 38]
                           [4 39]
                           [5 -2]
                           [5 -1]
                           [5 0]
                           [5 1]
                           [5 2]
                           [5 3]
                           [5 34]
                           [5 35]
                           [5 36]
                           [5 37]
                           [5 38]
                           [5 39]
                           [6 -2]
                           [6 -1]
                           [6 0]
                           [6 1]
                           [6 2]
                           [6 3]
                           [6 34]
                           [6 35]
                           [6 36]
                           [6 37]
                           [6 38]
                           [6 39]
                           [7 -2]
                           [7 -1]
                           [7 0]
                           [7 1]
                           [7 2]
                           [7 3]
                           [7 34]
                           [7 35]
                           [7 36]
                           [7 37]
                           [7 38]
                           [7 39]
                           [8 -1]
                           [8 0]
                           [8 1]
                           [8 2]
                           [8 3]
                           [8 4]
                           [8 35]
                           [8 36]
                           [8 37]
                           [8 38]
                           [8 39]
                           [8 40]
                           [9 -1]
                           [9 0]
                           [9 1]
                           [9 2]
                           [9 3]
                           [9 4]
                           [9 35]
                           [9 36]
                           [9 37]
                           [9 38]
                           [9 39]
                           [9 40]
                           [10 -1]
                           [10 0]
                           [10 1]
                           [10 2]
                           [10 3]
                           [10 4]
                           [10 35]
                           [10 36]
                           [10 37]
                           [10 38]
                           [10 39]
                           [10 40]
                           [11 -1]
                           [11 0]
                           [11 1]
                           [11 2]
                           [11 3]
                           [11 4]
                           [11 35]
                           [11 36]
                           [11 37]
                           [11 38]
                           [11 39]
                           [11 40]
                           [12 -4]
                           [12 -3]
                           [12 -2]
                           [12 -1]
                           [12 0]
                           [12 1]
                           [12 2]
                           [12 3]
                           [12 4]
                           [12 5]
                           [12 6]
                           [12 7]
                           [12 8]
                           [12 32]
                           [12 33]
                           [12 34]
                           [12 35]
                           [12 36]
                           [12 37]
                           [12 38]
                           [12 39]
                           [12 40]
                           [12 41]
                           [12 42]
                           [12 43]
                           [12 44]
                           [13 -5]
                           [13 -4]
                           [13 -3]
                           [13 -2]
                           [13 -1]
                           [13 0]
                           [13 1]
                           [13 2]
                           [13 3]
                           [13 4]
                           [13 5]
                           [13 6]
                           [13 7]
                           [13 8]
                           [13 9]
                           [13 31]
                           [13 32]
                           [13 33]
                           [13 34]
                           [13 35]
                           [13 36]
                           [13 37]
                           [13 38]
                           [13 39]
                           [13 40]
                           [13 41]
                           [13 42]
                           [13 43]
                           [13 44]
                           [13 45]
                           [14 -6]
                           [14 -5]
                           [14 -4]
                           [14 -3]
                           [14 -2]
                           [14 -1]
                           [14 0]
                           [14 1]
                           [14 2]
                           [14 3]
                           [14 4]
                           [14 5]
                           [14 6]
                           [14 7]
                           [14 8]
                           [14 9]
                           [14 10]
                           [14 30]
                           [14 31]
                           [14 32]
                           [14 33]
                           [14 34]
                           [14 35]
                           [14 36]
                           [14 37]
                           [14 38]
                           [14 39]
                           [14 40]
                           [14 41]
                           [14 42]
                           [14 43]
                           [14 44]
                           [14 45]
                           [14 46]
                           [15 -8]
                           [15 -7]
                           [15 -6]
                           [15 -5]
                           [15 -4]
                           [15 -3]
                           [15 -2]
                           [15 -1]
                           [15 0]
                           [15 1]
                           [15 2]
                           [15 3]
                           [15 4]
                           [15 5]
                           [15 6]
                           [15 7]
                           [15 8]
                           [15 9]
                           [15 10]
                           [15 11]
                           [15 12]
                           [15 28]
                           [15 29]
                           [15 30]
                           [15 31]
                           [15 32]
                           [15 33]
                           [15 34]
                           [15 35]
                           [15 36]
                           [15 37]
                           [15 38]
                           [15 39]
                           [15 40]
                           [15 41]
                           [15 42]
                           [15 43]
                           [15 44]
                           [15 45]
                           [15 46]
                           [15 47]
                           [15 48]
                           [16 -18]
                           [16 -17]
                           [16 -16]
                           [16 -15]
                           [16 -14]
                           [16 -13]
                           [16 -12]
                           [16 -11]
                           [16 -10]
                           [16 -9]
                           [16 -8]
                           [16 -7]
                           [16 -6]
                           [16 -5]
                           [16 -4]
                           [16 -3]
                           [16 -2]
                           [16 -1]
                           [16 0]
                           [16 1]
                           [16 2]
                           [16 3]
                           [16 4]
                           [16 5]
                           [16 6]
                           [16 7]
                           [16 8]
                           [16 9]
                           [16 10]
                           [16 11]
                           [16 12]
                           [16 13]
                           [16 14]
                           [16 15]
                           [16 16]
                           [16 17]
                           [16 18]
                           [16 19]
                           [16 20]
                           [16 21]
                           [16 22]
                           [16 23]
                           [16 24]
                           [16 25]
                           [16 26]
                           [16 27]
                           [16 28]
                           [16 29]
                           [16 30]
                           [16 31]
                           [16 32]
                           [16 33]
                           [16 34]
                           [16 35]
                           [16 36]
                           [16 37]
                           [16 38]
                           [16 39]
                           [16 40]
                           [16 41]
                           [16 42]
                           [16 43]
                           [16 44]
                           [16 45]
                           [16 46]
                           [16 47]
                           [16 48]
                           [16 49]
                           [16 50]
                           [16 51]
                           [16 52]
                           [16 53]
                           [16 54]
                           [17 -18]
                           [17 -17]
                           [17 -16]
                           [17 -15]
                           [17 -14]
                           [17 -13]
                           [17 -12]
                           [17 -11]
                           [17 -10]
                           [17 -9]
                           [17 -8]
                           [17 -7]
                           [17 -6]
                           [17 -5]
                           [17 -4]
                           [17 -3]
                           [17 -2]
                           [17 -1]
                           [17 0]
                           [17 1]
                           [17 2]
                           [17 3]
                           [17 4]
                           [17 5]
                           [17 6]
                           [17 7]
                           [17 8]
                           [17 9]
                           [17 10]
                           [17 11]
                           [17 12]
                           [17 13]
                           [17 14]
                           [17 15]
                           [17 16]
                           [17 17]
                           [17 18]
                           [17 19]
                           [17 20]
                           [17 21]
                           [17 22]
                           [17 23]
                           [17 24]
                           [17 25]
                           [17 26]
                           [17 27]
                           [17 28]
                           [17 29]
                           [17 30]
                           [17 31]
                           [17 32]
                           [17 33]
                           [17 34]
                           [17 35]
                           [17 36]
                           [17 37]
                           [17 38]
                           [17 39]
                           [17 40]
                           [17 41]
                           [17 42]
                           [17 43]
                           [17 44]
                           [17 45]
                           [17 46]
                           [17 47]
                           [17 48]
                           [17 49]
                           [17 50]
                           [17 51]
                           [17 52]
                           [17 53]
                           [17 54]
                           [18 -18]
                           [18 -17]
                           [18 -16]
                           [18 -15]
                           [18 -14]
                           [18 -13]
                           [18 -12]
                           [18 -11]
                           [18 -10]
                           [18 -9]
                           [18 -8]
                           [18 -7]
                           [18 -6]
                           [18 -5]
                           [18 -4]
                           [18 -3]
                           [18 -2]
                           [18 -1]
                           [18 0]
                           [18 1]
                           [18 2]
                           [18 3]
                           [18 4]
                           [18 5]
                           [18 6]
                           [18 7]
                           [18 8]
                           [18 9]
                           [18 10]
                           [18 11]
                           [18 12]
                           [18 13]
                           [18 14]
                           [18 15]
                           [18 16]
                           [18 17]
                           [18 18]
                           [18 19]
                           [18 20]
                           [18 21]
                           [18 22]
                           [18 23]
                           [18 24]
                           [18 25]
                           [18 26]
                           [18 27]
                           [18 28]
                           [18 29]
                           [18 30]
                           [18 31]
                           [18 32]
                           [18 33]
                           [18 34]
                           [18 35]
                           [18 36]
                           [18 37]
                           [18 38]
                           [18 39]
                           [18 40]
                           [18 41]
                           [18 42]
                           [18 43]
                           [18 44]
                           [18 45]
                           [18 46]
                           [18 47]
                           [18 48]
                           [18 49]
                           [18 50]
                           [18 51]
                           [18 52]
                           [18 53]
                           [18 54]),
           :orbit_offset "25"}
          {:path "horz",
           :steering_offset [],
           :platform_id "jpwx-9",
           :sensor_size [],
           :steering_type "offset-shape",
           :name "jpwx-9",
           :sensor_id "jpwx-9-1",
           :start [18 54],
           :type "hidef-image",
           :orbital_slot "0",
           :sensor_shape '([-18 -3]
                           [-18 -2]
                           [-18 -1]
                           [-18 33]
                           [-18 34]
                           [-18 35]
                           [-17 -3]
                           [-17 -2]
                           [-17 -1]
                           [-17 33]
                           [-17 34]
                           [-17 35]
                           [-16 -3]
                           [-16 -2]
                           [-16 -1]
                           [-16 33]
                           [-16 34]
                           [-16 35]
                           [-15 -2]
                           [-15 -1]
                           [-15 0]
                           [-15 34]
                           [-15 35]
                           [-15 36]
                           [-14 -2]
                           [-14 -1]
                           [-14 0]
                           [-14 34]
                           [-14 35]
                           [-14 36]
                           [-13 -2]
                           [-13 -1]
                           [-13 0]
                           [-13 34]
                           [-13 35]
                           [-13 36]
                           [-12 -2]
                           [-12 -1]
                           [-12 0]
                           [-12 34]
                           [-12 35]
                           [-12 36]
                           [-11 -2]
                           [-11 -1]
                           [-11 0]
                           [-11 34]
                           [-11 35]
                           [-11 36]
                           [-10 -2]
                           [-10 -1]
                           [-10 0]
                           [-10 34]
                           [-10 35]
                           [-10 36]
                           [-9 -2]
                           [-9 -1]
                           [-9 0]
                           [-9 34]
                           [-9 35]
                           [-9 36]
                           [-8 -2]
                           [-8 -1]
                           [-8 0]
                           [-8 34]
                           [-8 35]
                           [-8 36]
                           [-7 -2]
                           [-7 -1]
                           [-7 0]
                           [-7 34]
                           [-7 35]
                           [-7 36]
                           [-6 -1]
                           [-6 0]
                           [-6 1]
                           [-6 35]
                           [-6 36]
                           [-6 37]
                           [-5 -1]
                           [-5 0]
                           [-5 1]
                           [-5 35]
                           [-5 36]
                           [-5 37]
                           [-4 -1]
                           [-4 0]
                           [-4 1]
                           [-4 35]
                           [-4 36]
                           [-4 37]
                           [-3 -1]
                           [-3 0]
                           [-3 1]
                           [-3 35]
                           [-3 36]
                           [-3 37]
                           [-2 -1]
                           [-2 0]
                           [-2 1]
                           [-2 35]
                           [-2 36]
                           [-2 37]
                           [-1 -1]
                           [-1 0]
                           [-1 1]
                           [-1 35]
                           [-1 36]
                           [-1 37]
                           [0 -1]
                           [0 0]
                           [0 1]
                           [0 35]
                           [0 36]
                           [0 37]
                           [1 -1]
                           [1 0]
                           [1 1]
                           [1 35]
                           [1 36]
                           [1 37]
                           [2 -1]
                           [2 0]
                           [2 1]
                           [2 35]
                           [2 36]
                           [2 37]
                           [3 -1]
                           [3 0]
                           [3 1]
                           [3 35]
                           [3 36]
                           [3 37]
                           [4 -1]
                           [4 0]
                           [4 1]
                           [4 35]
                           [4 36]
                           [4 37]
                           [5 -1]
                           [5 0]
                           [5 1]
                           [5 35]
                           [5 36]
                           [5 37]
                           [6 -1]
                           [6 0]
                           [6 1]
                           [6 35]
                           [6 36]
                           [6 37]
                           [7 0]
                           [7 1]
                           [7 2]
                           [7 36]
                           [7 37]
                           [7 38]
                           [8 0]
                           [8 1]
                           [8 2]
                           [8 36]
                           [8 37]
                           [8 38]
                           [9 0]
                           [9 1]
                           [9 2]
                           [9 36]
                           [9 37]
                           [9 38]
                           [10 0]
                           [10 1]
                           [10 2]
                           [10 36]
                           [10 37]
                           [10 38]
                           [11 0]
                           [11 1]
                           [11 2]
                           [11 36]
                           [11 37]
                           [11 38]
                           [12 0]
                           [12 1]
                           [12 2]
                           [12 36]
                           [12 37]
                           [12 38]
                           [13 0]
                           [13 1]
                           [13 2]
                           [13 36]
                           [13 37]
                           [13 38]
                           [14 0]
                           [14 1]
                           [14 2]
                           [14 36]
                           [14 37]
                           [14 38]
                           [15 0]
                           [15 1]
                           [15 2]
                           [15 36]
                           [15 37]
                           [15 38]
                           [16 1]
                           [16 2]
                           [16 3]
                           [16 37]
                           [16 38]
                           [16 39]
                           [17 1]
                           [17 2]
                           [17 3]
                           [17 37]
                           [17 38]
                           [17 39]
                           [18 1]
                           [18 2]
                           [18 3]
                           [18 37]
                           [18 38]
                           [18 39]),
           :orbit_offset "15"}
          {:path "horz",
           :steering_offset [],
           :platform_id "jpwx-9",
           :sensor_size [],
           :steering_type "offset-shape",
           :name "jpwx-9",
           :sensor_id "jpwx-9-2",
           :start [18 54],
           :type "vi/r",
           :orbital_slot "0",
           :sensor_shape '([-18 -3]
                           [-18 -2]
                           [-18 -1]
                           [-18 33]
                           [-18 34]
                           [-18 35]
                           [-17 -3]
                           [-17 -2]
                           [-17 -1]
                           [-17 33]
                           [-17 34]
                           [-17 35]
                           [-16 -3]
                           [-16 -2]
                           [-16 -1]
                           [-16 33]
                           [-16 34]
                           [-16 35]
                           [-15 -2]
                           [-15 -1]
                           [-15 0]
                           [-15 34]
                           [-15 35]
                           [-15 36]
                           [-14 -2]
                           [-14 -1]
                           [-14 0]
                           [-14 34]
                           [-14 35]
                           [-14 36]
                           [-13 -2]
                           [-13 -1]
                           [-13 0]
                           [-13 34]
                           [-13 35]
                           [-13 36]
                           [-12 -2]
                           [-12 -1]
                           [-12 0]
                           [-12 34]
                           [-12 35]
                           [-12 36]
                           [-11 -2]
                           [-11 -1]
                           [-11 0]
                           [-11 34]
                           [-11 35]
                           [-11 36]
                           [-10 -2]
                           [-10 -1]
                           [-10 0]
                           [-10 34]
                           [-10 35]
                           [-10 36]
                           [-9 -2]
                           [-9 -1]
                           [-9 0]
                           [-9 34]
                           [-9 35]
                           [-9 36]
                           [-8 -2]
                           [-8 -1]
                           [-8 0]
                           [-8 34]
                           [-8 35]
                           [-8 36]
                           [-7 -2]
                           [-7 -1]
                           [-7 0]
                           [-7 34]
                           [-7 35]
                           [-7 36]
                           [-6 -1]
                           [-6 0]
                           [-6 1]
                           [-6 35]
                           [-6 36]
                           [-6 37]
                           [-5 -1]
                           [-5 0]
                           [-5 1]
                           [-5 35]
                           [-5 36]
                           [-5 37]
                           [-4 -1]
                           [-4 0]
                           [-4 1]
                           [-4 35]
                           [-4 36]
                           [-4 37]
                           [-3 -1]
                           [-3 0]
                           [-3 1]
                           [-3 35]
                           [-3 36]
                           [-3 37]
                           [-2 -1]
                           [-2 0]
                           [-2 1]
                           [-2 35]
                           [-2 36]
                           [-2 37]
                           [-1 -1]
                           [-1 0]
                           [-1 1]
                           [-1 35]
                           [-1 36]
                           [-1 37]
                           [0 -1]
                           [0 0]
                           [0 1]
                           [0 35]
                           [0 36]
                           [0 37]
                           [1 -1]
                           [1 0]
                           [1 1]
                           [1 35]
                           [1 36]
                           [1 37]
                           [2 -1]
                           [2 0]
                           [2 1]
                           [2 35]
                           [2 36]
                           [2 37]
                           [3 -1]
                           [3 0]
                           [3 1]
                           [3 35]
                           [3 36]
                           [3 37]
                           [4 -1]
                           [4 0]
                           [4 1]
                           [4 35]
                           [4 36]
                           [4 37]
                           [5 -1]
                           [5 0]
                           [5 1]
                           [5 35]
                           [5 36]
                           [5 37]
                           [6 -1]
                           [6 0]
                           [6 1]
                           [6 35]
                           [6 36]
                           [6 37]
                           [7 0]
                           [7 1]
                           [7 2]
                           [7 36]
                           [7 37]
                           [7 38]
                           [8 0]
                           [8 1]
                           [8 2]
                           [8 36]
                           [8 37]
                           [8 38]
                           [9 0]
                           [9 1]
                           [9 2]
                           [9 36]
                           [9 37]
                           [9 38]
                           [10 0]
                           [10 1]
                           [10 2]
                           [10 36]
                           [10 37]
                           [10 38]
                           [11 0]
                           [11 1]
                           [11 2]
                           [11 36]
                           [11 37]
                           [11 38]
                           [12 0]
                           [12 1]
                           [12 2]
                           [12 36]
                           [12 37]
                           [12 38]
                           [13 0]
                           [13 1]
                           [13 2]
                           [13 36]
                           [13 37]
                           [13 38]
                           [14 0]
                           [14 1]
                           [14 2]
                           [14 36]
                           [14 37]
                           [14 38]
                           [15 0]
                           [15 1]
                           [15 2]
                           [15 36]
                           [15 37]
                           [15 38]
                           [16 1]
                           [16 2]
                           [16 3]
                           [16 37]
                           [16 38]
                           [16 39]
                           [17 1]
                           [17 2]
                           [17 3]
                           [17 37]
                           [17 38]
                           [17 39]
                           [18 1]
                           [18 2]
                           [18 3]
                           [18 37]
                           [18 38]
                           [18 39]),
           :orbit_offset "15"}
          {:path "geo",
           :steering_offset [[0 0] [0 0]],
           :platform_id "euwx-1",
           :sensor_size [36 36],
           :steering_type "offset-computed",
           :name "euwx-1",
           :sensor_id "euwx-1-abi",
           :start [18 0],
           :type "image",
           :orbital_slot "0",
           :sensor_shape [],
           :orbit_offset "0"}
          {:path "geo",
           :steering_offset [[-12 12] [-12 12]],
           :platform_id "euwx-1",
           :sensor_size [3 3],
           :steering_type "offset-computed",
           :name "euwx-1",
           :sensor_id "euwx-1-meso-1",
           :start [18 0],
           :type "hidef-image",
           :orbital_slot "0",
           :sensor_shape [],
           :orbit_offset "0"}
          {:path "geo",
           :steering_offset [[-12 12] [-12 12]],
           :platform_id "euwx-1",
           :sensor_size [3 3],
           :steering_type "offset-computed",
           :name "euwx-1",
           :sensor_id "euwx-1-meso-2",
           :start [18 0],
           :type "hidef-image",
           :orbital_slot "0",
           :sensor_shape [],
           :orbit_offset "0"}]})
(def remote-targets  {:title "Targets", :c-o-c [{:step :generated, :by "rocky-road.pistachio.data-source.targets", :version "0.9.1-0xe122.DIRTY", :at "Wed Aug 30 23:43:30 EDT 2023", :signature "94a5b02e-df18-4812-961c-6e7cd4e7bffc"}], :metadata {:title "Targets", :type :tabular, :id :target, :fields {:target :string, :cells :string}}, :data [{:name "Fire-prst-0001", :cells #{[9 50 "hidef-image" 0] [10 48 "hidef-image" 4] [10 48 "hidef-image" 1] [9 50 "hidef-image" 3] [9 48 "hidef-image" 4] [10 50 "hidef-image" 5] [10 48 "hidef-image" 8] [10 50 "hidef-image" 8] [9 49 "hidef-image" 3] [10 50 "hidef-image" 6] [9 50 "hidef-image" 1] [10 48 "hidef-image" 9] [9 48 "hidef-image" 6] [9 50 "hidef-image" 4] [10 48 "hidef-image" 7] [9 49 "hidef-image" 8] [10 48 "hidef-image" 6] [10 49 "hidef-image" 9] [9 48 "hidef-image" 1] [10 49 "hidef-image" 7] [10 50 "hidef-image" 4] [9 50 "hidef-image" 6] [10 49 "hidef-image" 3] [10 48 "hidef-image" 2] [10 48 "hidef-image" 3] [9 50 "hidef-image" 5] [10 50 "hidef-image" 1] [9 50 "hidef-image" 7] [9 48 "hidef-image" 8] [10 50 "hidef-image" 9] [9 49 "hidef-image" 7] [9 48 "hidef-image" 5] [10 49 "hidef-image" 2] [9 48 "hidef-image" 0] [10 49 "hidef-image" 0] [10 49 "hidef-image" 1] [9 49 "hidef-image" 6] [9 49 "hidef-image" 1] [10 49 "hidef-image" 5] [9 48 "hidef-image" 7] [10 48 "hidef-image" 0] [9 50 "hidef-image" 9] [10 50 "hidef-image" 7] [10 49 "hidef-image" 4] [9 49 "hidef-image" 0] [10 50 "hidef-image" 3] [10 50 "hidef-image" 0] [9 48 "hidef-image" 3] [9 49 "hidef-image" 9] [9 48 "hidef-image" 9] [9 49 "hidef-image" 2] [10 50 "hidef-image" 2] [10 49 "hidef-image" 6] [9 50 "hidef-image" 8] [9 50 "hidef-image" 2] [9 48 "hidef-image" 2] [9 49 "hidef-image" 5] [10 48 "hidef-image" 5] [9 49 "hidef-image" 4] [10 49 "hidef-image" 8]}} {:name "Ft-202210-0010", :cells #{[12 53 "hidef-image" 3] [12 53 "hidef-image" 0] [13 54 "hidef-image" 3] [12 54 "hidef-image" 1] [12 55 "hidef-image" 1] [13 53 "hidef-image" 3] [12 55 "hidef-image" 3] [11 53 "hidef-image" 3] [11 53 "hidef-image" 1] [12 55 "hidef-image" 0] [11 55 "hidef-image" 0] [13 53 "hidef-image" 2] [13 55 "hidef-image" 2] [11 54 "hidef-image" 2] [12 53 "hidef-image" 1] [13 54 "hidef-image" 2] [13 54 "hidef-image" 0] [12 55 "hidef-image" 2] [12 54 "hidef-image" 0] [13 55 "hidef-image" 3] [13 54 "hidef-image" 1] [13 55 "hidef-image" 0] [11 53 "hidef-image" 2] [11 54 "hidef-image" 0] [12 54 "hidef-image" 2] [11 53 "hidef-image" 0] [12 53 "hidef-image" 2] [11 54 "hidef-image" 1] [13 55 "hidef-image" 1] [12 54 "hidef-image" 3] [11 54 "hidef-image" 3] [11 55 "hidef-image" 2] [13 53 "hidef-image" 1] [13 53 "hidef-image" 0] [11 55 "hidef-image" 1] [11 55 "hidef-image" 3]}} {:name "Ft-202210-0011", :cells #{[13 50 "hidef-image" 1] [13 50 "hidef-image" 2] [13 50 "hidef-image" 0] [13 50 "hidef-image" 3]}} {:name "Ft-202210-0012", :cells #{[11 47 "hidef-image" 0] [12 48 "hidef-image" 3] [12 47 "hidef-image" 2] [11 46 "hidef-image" 1] [11 46 "hidef-image" 0] [11 47 "hidef-image" 2] [12 47 "hidef-image" 0] [11 46 "hidef-image" 2] [12 47 "hidef-image" 1] [11 47 "hidef-image" 3] [12 47 "hidef-image" 3] [12 48 "hidef-image" 0] [12 48 "hidef-image" 2] [12 48 "hidef-image" 1] [11 46 "hidef-image" 3] [11 47 "hidef-image" 1]}} {:name "Ft-202210-0013", :cells #{[7 48 "hidef-image" 3] [7 48 "hidef-image" 2] [7 48 "hidef-image" 1] [7 48 "hidef-image" 0]}} {:name "Ft-202210-0014", :cells #{[8 50 "hidef-image" 3] [8 49 "hidef-image" 1] [8 50 "hidef-image" 2] [8 49 "hidef-image" 3] [8 50 "hidef-image" 1] [8 50 "hidef-image" 0] [8 49 "hidef-image" 0] [8 49 "hidef-image" 2]}} {:name "Ft-202210-0015", :cells #{[9 56 "hidef-image" 3] [9 56 "hidef-image" 1] [9 56 "hidef-image" 2] [9 56 "hidef-image" 0]}} {:name "Ft-202210-0001", :cells #{[13 50 "hidef-image" 1] [13 50 "hidef-image" 2] [13 50 "hidef-image" 0] [13 50 "hidef-image" 3]}} {:name "Ft-202210-0002", :cells #{[16 56 "hidef-image" 2] [16 56 "hidef-image" 0] [16 56 "hidef-image" 1] [16 56 "hidef-image" 3]}} {:name "Ft-202210-0003", :cells #{[17 57 "hidef-image" 1] [17 57 "hidef-image" 3] [17 57 "hidef-image" 2] [17 57 "hidef-image" 0]}} {:name "Ft-202210-0004", :cells #{[12 54 "hidef-image" 1] [12 54 "hidef-image" 3] [12 54 "hidef-image" 0] [12 54 "hidef-image" 2]}}]})


(def remote-coverages {:data '({:computed_at "2023-07-10T14:43:27.913306",
                                :cell [0 0],
                                :coverage #{{:platform "euwx-1", :sensor "euwx-1-abi"}
                                            {:platform "goes-16-(east)", :sensor "abi-16-1"}
                                            {:platform "jpss-1", :sensor "viirs-17-1"}},
                                :time 0})})


(def glm {:title "GLM (lighting) data", :c-o-c [{:step :generated, :by "rocky-road.pistachio.data-source.glm-data-source-generator", :version "0.9.1-0xe122.DIRTY", :at "Wed Aug 30 23:43:30 EDT 2023", :signature "41a10dc0-e06d-44e5-926f-daa8db7d3e56"}], :metadata {:type :tabular, :id :name, :title "GLM (lighting)", :fields {:name :string, :type :keyword, :points :seq-points}}, :data [{:name "glm-1", :type :points, :date_time "2022-10-16T10:40:22.959664", :points [{:id "strike-2022-10-16T10:40:22.959664-0", :point [23.674062728881836 -85.5692138671875 112]} {:id "strike-2022-10-16T10:40:22.959664-1", :point [7.599512100219727 -76.88938903808594 206]} {:id "strike-2022-10-16T10:40:22.959664-2", :point [-5.726319313049316 -69.43939208984375 17]} {:id "strike-2022-10-16T10:40:22.959664-3", :point [0.9223345518112183 -64.58483123779297 51]} {:id "strike-2022-10-16T10:40:22.959664-4", :point [23.80428123474121 -107.81201171875 19]} {:id "strike-2022-10-16T10:40:22.959664-5", :point [7.350179672241211 -77.26138305664062 127]} {:id "strike-2022-10-16T10:40:22.959664-6", :point [-1.0143393278121948 -63.48103713989258 68]} {:id "strike-2022-10-16T10:40:22.959664-7", :point [2.923712968826294 -71.6654052734375 15]} {:id "strike-2022-10-16T10:40:22.959664-8", :point [27.374351501464844 -88.07122039794922 542]} {:id "strike-2022-10-16T10:40:22.959664-9", :point [-6.531938076019287 -59.64167404174805 28]} {:id "strike-2022-10-16T10:40:22.959664-10", :point [-8.866276741027832 -61.9013557434082 93]} {:id "strike-2022-10-16T10:40:22.959664-11", :point [-5.5671467781066895 -61.200496673583984 72]} {:id "strike-2022-10-16T10:40:22.959664-12", :point [-5.470293998718262 -61.51057815551758 24]} {:id "strike-2022-10-16T10:40:22.959664-13", :point [-6.172105312347412 -59.68647384643555 36]} {:id "strike-2022-10-16T10:40:22.959664-14", :point [-8.05642318725586 -51.22053909301758 442]} {:id "strike-2022-10-16T10:40:22.959664-15", :point [24.130475997924805 -89.2496566772461 1177]} {:id "strike-2022-10-16T10:40:22.959664-16", :point [38.050880432128906 -99.64521789550781 55]} {:id "strike-2022-10-16T10:40:22.959664-17", :point [-6.600550651550293 -60.10033416748047 31]} {:id "strike-2022-10-16T10:40:22.959664-18", :point [23.80154037475586 -107.74576568603516 11]} {:id "strike-2022-10-16T10:40:22.959664-19", :point [-8.97022533416748 -61.73229217529297 89]} {:id "strike-2022-10-16T10:40:22.959664-20", :point [-4.1422905921936035 -69.078125 156]} {:id "strike-2022-10-16T10:40:22.959664-21", :point [2.94331693649292 -72.56926727294922 181]} {:id "strike-2022-10-16T10:40:22.959664-22", :point [-6.333040237426758 -59.632503509521484 349]} {:id "strike-2022-10-16T10:40:22.959664-23", :point [3.879448175430298 -70.88380432128906 260]} {:id "strike-2022-10-16T10:40:22.959664-24", :point [-5.8633341789245605 -69.47994232177734 487]} {:id "strike-2022-10-16T10:40:22.959664-25", :point [29.614110946655273 -86.15483093261719 56]} {:id "strike-2022-10-16T10:40:22.959664-26", :point [-0.5633907318115234 -70.54258728027344 14]} {:id "strike-2022-10-16T10:40:22.959664-27", :point [29.228071212768555 -85.66471099853516 360]} {:id "strike-2022-10-16T10:40:22.959664-28", :point [0.22073759138584137 -64.67529296875 77]} {:id "strike-2022-10-16T10:40:22.959664-29", :point [30.425241470336914 -84.91633605957031 389]} {:id "strike-2022-10-16T10:40:22.959664-30", :point [50.14699935913086 -82.27764892578125 1650]} {:id "strike-2022-10-16T10:40:22.959664-31", :point [29.189464569091797 -85.6996078491211 72]} {:id "strike-2022-10-16T10:40:22.959664-32", :point [2.418374538421631 -71.5183334350586 183]} {:id "strike-2022-10-16T10:40:22.959664-33", :point [9.020851135253906 -79.10263061523438 205]} {:id "strike-2022-10-16T10:40:22.959664-34", :point [-6.020741939544678 -59.703556060791016 19]} {:id "strike-2022-10-16T10:40:22.959664-35", :point [29.054346084594727 -85.57003021240234 576]} {:id "strike-2022-10-16T10:40:22.959664-36", :point [-5.2461442947387695 -69.52681732177734 1403]} {:id "strike-2022-10-16T10:40:22.959664-37", :point [-0.33942368626594543 -70.7393798828125 29]} {:id "strike-2022-10-16T10:40:22.959664-38", :point [28.775386810302734 -89.88916015625 376]} {:id "strike-2022-10-16T10:40:22.959664-39", :point [3.8904194831848145 -70.1004867553711 180]} {:id "strike-2022-10-16T10:40:22.959664-40", :point [1.8511217832565308 -72.12891387939453 102]} {:id "strike-2022-10-16T10:40:22.959664-41", :point [2.720741033554077 -71.4927749633789 77]} {:id "strike-2022-10-16T10:40:22.959664-42", :point [-8.693894386291504 -61.996341705322266 2189]} {:id "strike-2022-10-16T10:40:22.959664-43", :point [38.977699279785156 -86.28850555419922 114]} {:id "strike-2022-10-16T10:40:22.959664-44", :point [-1.0354962348937988 -63.407196044921875 253]} {:id "strike-2022-10-16T10:40:22.959664-45", :point [-8.31649112701416 -62.703765869140625 276]} {:id "strike-2022-10-16T10:40:22.959664-46", :point [6.609174728393555 -78.37930297851562 24]} {:id "strike-2022-10-16T10:40:22.959664-47", :point [38.068084716796875 -99.37694549560547 8304]} {:id "strike-2022-10-16T10:40:22.959664-48", :point [30.52375602722168 -85.01354217529297 12]} {:id "strike-2022-10-16T10:40:22.959664-49", :point [-18.87528419494629 -55.22971725463867 628]} {:id "strike-2022-10-16T10:40:22.959664-50", :point [-6.273041725158691 -60.037384033203125 39]} {:id "strike-2022-10-16T10:40:22.959664-51", :point [-1.016650676727295 -63.48563766479492 7]} {:id "strike-2022-10-16T10:40:22.959664-52", :point [-6.443620204925537 -59.869754791259766 82]} {:id "strike-2022-10-16T10:40:22.959664-53", :point [-4.235158443450928 -69.08467102050781 127]} {:id "strike-2022-10-16T10:40:22.959664-54", :point [-0.3688221871852875 -70.79278564453125 125]} {:id "strike-2022-10-16T10:40:22.959664-55", :point [32.4059944152832 -115.2112808227539 69]} {:id "strike-2022-10-16T10:40:22.959664-56", :point [-5.385134220123291 -69.43749237060547 33]} {:id "strike-2022-10-16T10:40:22.959664-57", :point [33.08440017700195 -46.9046630859375 1574]} {:id "strike-2022-10-16T10:40:22.959664-58", :point [-6.495519638061523 -59.6690559387207 15]} {:id "strike-2022-10-16T10:40:22.959664-59", :point [23.711400985717773 -107.76988983154297 45]} {:id "strike-2022-10-16T10:40:22.959664-60", :point [3.0060408115386963 -71.0635757446289 12]} {:id "strike-2022-10-16T10:40:22.959664-61", :point [24.278841018676758 -89.2300033569336 60]} {:id "strike-2022-10-16T10:40:22.959664-62", :point [-6.274376392364502 -59.80673599243164 9]} {:id "strike-2022-10-16T10:40:22.959664-63", :point [23.47880744934082 -107.87239074707031 284]} {:id "strike-2022-10-16T10:40:22.959664-64", :point [21.56645393371582 -107.37540435791016 476]} {:id "strike-2022-10-16T10:40:22.959664-65", :point [23.484882354736328 -107.86976623535156 32]} {:id "strike-2022-10-16T10:40:22.959664-66", :point [-6.127217769622803 -59.73581314086914 12]} {:id "strike-2022-10-16T10:40:22.959664-67", :point [-8.779951095581055 -61.854827880859375 18]} {:id "strike-2022-10-16T10:40:22.959664-68", :point [25.994348526000977 -85.7259292602539 1101]} {:id "strike-2022-10-16T10:40:22.959664-69", :point [2.5696935653686523 -71.38301849365234 53]} {:id "strike-2022-10-16T10:40:22.959664-70", :point [-18.201690673828125 -55.43034362792969 496]} {:id "strike-2022-10-16T10:40:22.959664-71", :point [25.730703353881836 -85.60397338867188 12]} {:id "strike-2022-10-16T10:40:22.959664-72", :point [23.719022750854492 -107.73454284667969 16]} {:id "strike-2022-10-16T10:40:22.959664-73", :point [-5.373043060302734 -61.44425582885742 154]} {:id "strike-2022-10-16T10:40:22.959664-74", :point [-6.108107089996338 -59.64649200439453 248]} {:id "strike-2022-10-16T10:40:22.959664-75", :point [6.167844772338867 -77.65469360351562 84]} {:id "strike-2022-10-16T10:40:22.959664-76", :point [0.8764637112617493 -64.60902404785156 87]} {:id "strike-2022-10-16T10:40:22.959664-77", :point [9.367162704467773 -78.62126922607422 482]} {:id "strike-2022-10-16T10:40:22.959664-78", :point [-5.712576389312744 -69.43365478515625 37]} {:id "strike-2022-10-16T10:40:22.959664-79", :point [35.657657623291016 -44.54304885864258 90]} {:id "strike-2022-10-16T10:40:22.959664-80", :point [-8.413129806518555 -62.66240310668945 19]} {:id "strike-2022-10-16T10:40:22.959664-81", :point [-0.7195045948028564 -76.22148895263672 200]} {:id "strike-2022-10-16T10:40:22.959664-82", :point [10.408285140991211 -80.95613861083984 1594]} {:id "strike-2022-10-16T10:40:22.959664-83", :point [20.898839950561523 -105.81665802001953 240]} {:id "strike-2022-10-16T10:40:22.959664-84", :point [-0.2973727881908417 -70.79353332519531 34]} {:id "strike-2022-10-16T10:40:22.959664-85", :point [27.521608352661133 -87.17703247070312 713]} {:id "strike-2022-10-16T10:40:22.959664-86", :point [-4.523622035980225 -69.23768615722656 47]} {:id "strike-2022-10-16T10:40:22.959664-87", :point [-6.439177513122559 -59.64510726928711 49]} {:id "strike-2022-10-16T10:40:22.959664-88", :point [31.544466018676758 -47.664947509765625 369]} {:id "strike-2022-10-16T10:40:22.959664-89", :point [-18.79517364501953 -55.34451675415039 83]} {:id "strike-2022-10-16T10:40:22.959664-90", :point [0.19760762155056 -64.74811553955078 100]} {:id "strike-2022-10-16T10:40:22.959664-91", :point [2.793972969055176 -72.33673858642578 423]} {:id "strike-2022-10-16T10:40:22.959664-92", :point [30.574419021606445 -87.31132507324219 417]} {:id "strike-2022-10-16T10:40:22.959664-93", :point [-4.994964599609375 -69.3966293334961 212]} {:id "strike-2022-10-16T10:40:22.959664-94", :point [3.2234106063842773 -73.46308898925781 388]} {:id "strike-2022-10-16T10:40:22.959664-95", :point [44.50505828857422 -79.0091552734375 754]} {:id "strike-2022-10-16T10:40:22.959664-96", :point [-0.39254850149154663 -70.77114868164062 19]} {:id "strike-2022-10-16T10:40:22.959664-97", :point [-5.909394264221191 -69.43601989746094 30]} {:id "strike-2022-10-16T10:40:22.959664-98", :point [-4.998542785644531 -61.24741744995117 367]} {:id "strike-2022-10-16T10:40:22.959664-99", :point [-4.393259048461914 -69.18021392822266 297]} {:id "strike-2022-10-16T10:40:22.959664-100", :point [-6.5955047607421875 -59.62008285522461 167]}]}]})
(def meso {:title "Meso (Hi-def Dwell) data", :c-o-c [{:step :generated, :by "rocky-road.pistachio.data-source.meso-data-source-generator", :version "0.9.1-0xe122.DIRTY", :at "Wed Aug 30 23:43:30 EDT 2023", :signature "a1dc3cc1-6ece-4e20-a781-a849ebe150ea"}], :metadata {:type :tabular, :id :name, :title "Meso (Hi-def Dwell)", :fields {:name :string, :type :keyword, :date-time :string, :bounding-box :vector, :url :string}}, :data [{:name "abi-17-FD", :type :fd-image, :date_time "20221006120000000.00000", :bounding_box [-75 75 -222 -57], :url "GOES18-ABI-FD-GEOCOLOR-10848x10848.png"} {:name "abi-16-meso-1", :type :meso-image, :date_time "20221006120000000.00000", :bounding_box [22.074653 33.344622 -95.433292 -82.723547], :url "20221006120000000.png"}]})

(def ui-definition {:mol/components  {; ui components
                                      ; TODO: add a :label element for use in the UI
                                      :ui/target-filter          {:atm/role :ui/component :atm/kind :bigger-coverage-plan/target-filter-input :atm/label "target-filter:"}
                                      :ui/target-table           {:atm/role           :ui/component :atm/kind :react-table/table :atm/label "targets"
                                                                  :atm/default-config target-table-config}
                                      :ui/sensor-table           {:atm/role           :ui/component :atm/kind :react-table/table :atm/label "sensors"
                                                                  :atm/default-config sensor-table-config}
                                      :ui/imagery-table          {:atm/role           :ui/component :atm/kind :react-table/table :atm/label "imagery"
                                                                  :atm/default-config imagery-table-config}
                                      :ui/time-slider            {:atm/role :ui/component :atm/kind :bigger-coverage-plan/slider :atm/label "time-slider"}
                                      :ui/current-time           {:atm/role :ui/component :atm/kind :rc/label-md :atm/label "current-time"}
                                      :ui/globe                  {:atm/role :ui/component :atm/kind :ww/globe :atm/label "globe"}

                                      ; remote data sources
                                      :topic/target-data         {:atm/role :source/local :atm/kind :source/targets :atm/default-data remote-targets}
                                      :topic/satellite-data      {:atm/role :source/local :atm/kind :source/satellites :atm/default-data remote-satellites}
                                      :topic/coverage-data       {:atm/role :source/local :atm/kind :source/coverages :atm/default-data remote-coverages}
                                      :topic/glm-data            {:atm/role :source/local :atm/kind :source/glm :atm/default-data glm}
                                      :topic/meso-data           {:atm/role :source/local :atm/kind :source/meso-1 :atm/default-data meso}

                                      ;transformation functions
                                      :fn/filtered-targets       {:atm/role :source/fn :atm/kind :bigger-coverage-plan/fn-filtered-targets}
                                      :fn/color-targets          {:atm/role :source/fn :atm/kind :bigger-coverage-plan/fn-color-targets}
                                      :fn/color-satellites       {:atm/role :source/fn :atm/kind :bigger-coverage-plan/fn-color-satellites}
                                      :fn/format-target-data     {:atm/role :source/fn :atm/kind :bigger-coverage-plan/fn-format-target-data}
                                      :fn/format-satellite-data  {:atm/role :source/fn :atm/kind :bigger-coverage-plan/fn-format-satellite-data}
                                      :fn/all-imagery            {:atm/role :source/fn :atm/kind :bigger-coverage-plan/fn-all-imagery}
                                      :fn/format-imagery-data    {:atm/role :source/fn :atm/kind :bigger-coverage-plan/fn-format-imagery-data}
                                      :fn/range                  {:atm/role :source/fn :atm/kind :bigger-coverage-plan/fn-range}
                                      :fn/current-time           {:atm/role :source/fn :atm/kind :bigger-coverage-plan/fn-current-time}
                                      :fn/coverage               {:atm/role :source/fn :atm/kind :bigger-coverage-plan/fn-coverage}

                                      ; composite-local data sources
                                      :topic/selected-targets    {:atm/role :source/local :atm/kind :selected-targets :atm/default-data #{"Fire-prst-0001"
                                                                                                                                          "Ft-202210-0001" "Ft-202210-0002" "Ft-202210-0003" "Ft-202210-0004"
                                                                                                                                          "Ft-202210-0010" "Ft-202210-0011" "Ft-202210-0012"
                                                                                                                                          "Ft-202210-0013" "Ft-202210-0014" "Ft-202210-0015"}}

                                      :topic/selected-satellites {:atm/role :source/local :atm/kind :selected-satellites :atm/default-data #{"abi-16-meso-1" "abi-16-meso-2"
                                                                                                                                             "abi-17-meso-1" "abi-17-meso-2"
                                                                                                                                             "viirs-17-1"
                                                                                                                                             "abi-25-meso-1" "abi-25-meso-2"
                                                                                                                                             "abi-25-meso-3" "abi-25-meso-4"
                                                                                                                                             "jpwx-9-1" "jpwx-9-2"}}

                                      :topic/selected-imagery    {:atm/role :source/local :atm/kind :selected-imagery :atm/default-data #{"glm-1" "abi-17-FD" "abi-16-meso-1"}}

                                      :topic/target-filter       {:atm/role :source/local :atm/kind :target-filter :atm/default-data ""}
                                      :topic/current-slider      {:atm/role :source/local :atm/kind :current-slider :atm/default-data 0}
                                      :topic/colored-targets     {:atm/role :source/local :atm/kind :colored-targets}
                                      :topic/colored-satellites  {:atm/role :source/local :atm/kind :colored-satellites}}

                    :mol/links       {
                                      :ui/target-filter          {:value {:topic/target-filter :data}}
                                      :ui/time-slider            {:value {:topic/current-slider :data}}

                                      ;topics are inputs to what?
                                      :topic/selected-targets    {:data {:fn/format-target-data :selection
                                                                         :fn/coverage           :selected-targets}}
                                      :topic/selected-satellites {:data {:fn/format-satellite-data :selection
                                                                         :fn/coverage              :selected-satellites}}
                                      :topic/target-filter       {:data {:ui/target-filter    :data
                                                                         :fn/filtered-targets :filter-value}}
                                      :topic/glm-data            {:data {:fn/all-imagery :glm}}
                                      :topic/meso-data           {:data {:fn/all-imagery :meso-1}}

                                      :topic/target-data         {:data {:fn/color-targets :data}}
                                      :topic/satellite-data      {:data {:fn/color-satellites :data}}
                                      :topic/selected-imagery    {:data {:fn/format-imagery-data :selection
                                                                         :fn/coverage            :selected-imagery}}
                                      :topic/coverage-data       {:data {:fn/range    :data
                                                                         :fn/coverage :coverages}}
                                      :topic/current-slider      {:data {:fn/current-time :value
                                                                         :ui/time-slider  :value
                                                                         :fn/coverage     :current-time}}

                                      :topic/colored-targets     {:data {:fn/color-targets      :colored
                                                                         :fn/format-target-data :colors}}

                                      :topic/colored-satellites  {:data {:fn/color-satellites      :colored
                                                                         :fn/format-satellite-data :colors}}

                                      ;transformation functions publish to what?
                                      :fn/color-targets          {:data {:fn/filtered-targets :targets}}
                                      :fn/color-satellites       {:data {:fn/format-satellite-data :satellites
                                                                         :fn/coverage              :satellites}}
                                      :fn/filtered-targets       {:data {:fn/format-target-data :targets
                                                                         :fn/coverage           :targets}}
                                      :fn/format-target-data     {:data {:ui/target-table :data}}
                                      :fn/format-satellite-data  {:data {:ui/sensor-table :data}}
                                      :fn/all-imagery            {:data {:fn/format-imagery-data :all-imagery
                                                                         :fn/coverage            :all-imagery}}
                                      :fn/format-imagery-data    {:data {:ui/imagery-table :data}}
                                      :fn/range                  {:data {:ui/time-slider :range}}
                                      :fn/current-time           {:data {:ui/current-time :value}}
                                      :fn/coverage               {:data {:ui/globe :shapes}}}


                    :mol/grid-layout [{:i :ui/target-filter :x 4 :y 0 :w 5 :h 2 :static true}
                                      {:i :ui/target-table :x 0 :y 2 :w 9 :h 7 :static true}
                                      {:i :ui/sensor-table :x 0 :y 9 :w 9 :h 7 :static true}
                                      {:i :ui/imagery-table :x 0 :y 16 :w 9 :h 7 :static true}
                                      {:i :ui/time-slider :x 1 :y 23 :w 6 :h 2 :static true}
                                      {:i :ui/current-time :x 11 :y 23 :w 11 :h 2 :static true}
                                      {:i :ui/globe :x 10 :y 0 :w 11 :h 23 :static true}]})
;; region ; Rich comments

; work out making actual shapes for the coverage data we get from the server
(comment
  (do
    (def coverages (get-in @re-frame.db/app-db [:sources :source/coverages :data]))
    (def current-time 0)

    (def time-coverage (filter #(= (:time %) current-time) coverages)))


  (ui-utils/subscribe-local
    :ui-grid-ratom-demo.coverage-plan
    [:blackboard :topic.shapes])


  ())


; can we cache the results so we only add :color to "new" elements?
(comment
  (do
    (def colored [:coverage-plan-demo-ww.grid-widget.blackboard.topic.colored-targets]) ; actual
    (def colored [:coverage-plan-demo-ww.grid-widget :blackboard :topic.colored-targets]) ; what we'd prefer

    (def last-data (atom []))
    (def last-target-data (atom dummy-targets))
    (def assigned (map (juxt :name :color) @last-data))
    (def assigned-set (->> assigned (map first) set))
    (def candidate {:name  "alpha-hd",
                    :cells #{[7 7 "hidef-image" 0] [7 6 "hidef-image" 1]
                             [7 5 "hidef-image" 3] [7 6 "hidef-image" 2]}}))

  (-> colored
    first
    name
    (clojure.string/split #".blackboard.")
    (#(map keyword %))
    ((fn [[c p]] [c :blackboard p])))

  (let [[component topic] (-> colored
                            first
                            name
                            (clojure.string/split #".blackboard."))]
    {:c [(keyword (str component ".blackboard"))] :t (keyword topic)})


  (if (contains? assigned-set (:name candidate))
    candidate
    (assoc candidate :color [:dummy :dummy :dummy]))


  (def last-target-data (atom []))

  (->> @last-target-data
    (filter #(= (:name candidate) (:name %)))
    first
    :color)


  @(re-frame/subscribe [:subs/source :source/targets])

  ; can we change the data in :source/targets and have the UI update?
  ;
  (re-frame/dispatch [:events/data-update
                      {:id    :source/targets
                       :value {:title    "Targets",
                               :c-o-c    [{:step      :generated,
                                           :by        "dummy.data-source.targets",
                                           :version   "0.6.0",
                                           :at        "Mon May 23 14:21:10 EDT 2022",
                                           :signature "73f7a470-ddc9-44d9-84fa-cf1ce1acc8f9"}],
                               :metadata {:title "Targets", :type :tabular, :id :target, :fields {:target :string, :cells :string}},
                               :data     [{:name  "alpha-hd",
                                           :cells #{[7 7 "hidef-image" 0] [7 6 "hidef-image" 1] [7 5 "hidef-image" 3] [7 6 "hidef-image" 2]}}
                                          {:name "bravo-img", :cells #{[7 2 "image" 0] [7 1 "image" 1]}}
                                          {:name  "fire-hd",
                                           :cells #{[5 3 "hidef-image" 2]
                                                    [4 3 "hidef-image" 3]
                                                    [4 3 "hidef-image" 2]
                                                    [5 3 "hidef-image" 0]
                                                    [5 3 "hidef-image" 3]}}
                                          {:name "fire-ir", :cells #{[5 4 "v/ir" 2] [5 4 "v/ir" 1] [5 3 "v/ir" 1] [5 4 "v/ir" 0] [5 4 "v/ir" 3]}}
                                          {:name  "severe-hd",
                                           :cells #{[5 7 "hidef-image" 3]
                                                    [5 6 "hidef-image" 0]
                                                    [6 6 "hidef-image" 2]
                                                    [6 5 "hidef-image" 1]
                                                    [5 7 "hidef-image" 1]}}
                                          {:name  "new-target",
                                           :cells #{[0 0 "hidef-image" 0]}}]}}])



  (get-in @re-frame.db/app-db '(:containers))
  (get-in @re-frame.db/app-db '(:containers :coverage-plan-demo-ww.grid-widget))
  (get-in @re-frame.db/app-db '(:containers :coverage-plan-demo-ww.grid-widget
                                 :blackboard))
  (get-in @re-frame.db/app-db '(:containers :coverage-plan-demo-ww.grid-widget
                                 :blackboard :topic.colored-targets))

  ; can we change the data in :topic/colored-targets?
  ;
  (def new-colors [{:name  "alpha-hd", :cells #{[7 7 "hidef-image" 0] [7 6 "hidef-image" 1]
                                                [7 5 "hidef-image" 3] [7 6 "hidef-image" 2]},
                    :color [:darkred "rgba(139, 0, 0, .3)" [139 0 0 0.3] [0.55 0.0 0.0 0.1] "#8B0000"]}
                   {:name  "bravo-img", :cells #{[7 2 "image" 0] [7 1 "image" 1]},
                    :color [:blue "rgba(0, 0, 255, .3)" [0 0 255 0.3] [0 0 1 0.1] "#0000FF"]}
                   {:name  "fire-hd", :cells #{[5 3 "hidef-image" 2] [4 3 "hidef-image" 3]
                                               [4 3 "hidef-image" 2] [5 3 "hidef-image" 0] [5 3 "hidef-image" 3]},
                    :color [:orange "rgba(255, 165, 0, .3)" [255 165 0 0.3] [1 0.65 0 0.3] "#FFA500"]}
                   {:name  "fire-ir", :cells #{[5 4 "v/ir" 2] [5 4 "v/ir" 1] [5 3 "v/ir" 1]
                                               [5 4 "v/ir" 0] [5 4 "v/ir" 3]},
                    :color [:grey "rgba(128, 128, 128, .3)" [128 128 128 0.3] [0.5 0.5 0.5 0.3] "#808080"]}
                   {:name  "severe-hd", :cells #{[5 7 "hidef-image" 3] [5 6 "hidef-image" 0]
                                                 [6 6 "hidef-image" 2] [6 5 "hidef-image" 1] [5 7 "hidef-image" 1]},
                    :color [:cornflowerblue "rgba(100, 149, 237, .3)"
                            [100 149 237 0.3] [0.4 0.58 0.93 0.3] "#6495ED"]}])

  (h/handle-change-path [:coverage-plan-demo-ww.grid-widget :blackboard :topic.colored-targets] []
    new-colors)

  ())


; update the correct target's color with the new value
(comment
  (do
    (def data [:coverage-plan-demo-ww.grid-widget.blackboard.topic.colored-targets])
    (def id "alpha-hd")
    (def new-color "#000000"))


  (let [path      (-> data
                    first
                    name
                    (clojure.string/split #".blackboard.")
                    (#(map keyword %))
                    ((fn [[c p]] [c :blackboard p])))
        orig-data (h/resolve-value data)
        target    (first (filter #(= (:name %) id) @orig-data))
        kept      (remove #(= (:name %) id) @orig-data)
        new-data  (conj kept (assoc target :color (c/match-colors-hex new-color)))]
    [target kept new-data])

  (update-color data id :name :hex new-color)


  ())


;; components have "ports" which define their inputs and outputs:
;;
;;      you SUBSCRIBE with a :port/sink, ie, data come IN   (re-frame/subscribe ...)
;;
;;      you PUBLISH to a :port/source, ie, data goes OUT    (re-frame/dispatch ...)
;;
;;      you do BOTH with :port/source-sink (both)           should we even have this, or should we spell out both directions?
;;
;; the question about :port/source-sink arises because building the layout (the call for the UI itself) doesn't actually
;; need to make a distinction (in fact the code is a bit cleaner if we don't) and we have the callee sort it out (since it
;; needs to implement the correct usage anyway). The flow-diagram, on the other hand, is easier if we DO make the
;; distinction, so we can quickly build all the Nodes and Handles used for the diagram...



;; endregion

