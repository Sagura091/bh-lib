(ns demo.catalog.molecule.example.composite.data.satellites
  (:require [demo.catalog.molecule.remote-source :as rs]
            [re-frame.core :as re-frame]))


(def satellite-tle
  [{:name            "ISS"
    :orbit/ephemeris {:line1 "1 25544U 98067A   19156.50900463  .00003075  00000-0  59442-4 0  9992"
                      :line2 "2 25544  51.6433  59.2583 0008217  16.4489 347.6017 15.51174618173442"}}
   {:name            "wgs-f1"
    :orbit/ephemeris {:line1 "1 32258U 07046A   23331.52849543  .00000050  00000+0  00000+0 0  9992"
                      :line2 "2 32258   0.0164 351.1502 0000389 247.3054  24.0178  1.00268698 42991"}}
   {:name "wgs-f6"
    :orbit/ephemeris {:line1 "1 39222U 13041A   23331.54451944  .00000099  00000+0  00000+0 0  9991"
                      :line2 "2 39222   0.0081 358.3112 0000716 265.2602 223.4721  1.00270201 36709"}}
   {:name            "wgs-f7"
    :orbit/ephemeris {:line1 "1 40746U 15036A   23331.41893376  .00000027  00000+0  00000+0 0  9996"
                      :line2 "2 40746   0.0085  11.6100 0000233 173.0963 207.2319  1.00271819 30514"}}])



(defn add-minutes [date minutes]
  (new js/Date (+ (.getTime date) (* minutes 60000))))


(defn- compute-position [satrec time]
  (let [positionAndVelocity (.propagate js/satellite satrec time)
        positionEci         (.-position positionAndVelocity)
        gmst                (.gstime js/satellite time)
        positionGd          (.eciToGeodetic js/satellite positionEci, gmst)
        lat                 (.-latitude positionGd)
        lon                 (.-longitude positionGd)
        alt                 (.-height positionGd)]

    [(.degreesLat js/satellite lat) (.degreesLong js/satellite lon) alt]))


(defn- compute-path [ephemeris now]
  (let [satrec (.twoline2satrec js/satellite
                 (:line1 ephemeris)
                 (:line2 ephemeris))]
    (into []
      (for [time-offset (range -20 120 10)]
        [time-offset
         (compute-position satrec (add-minutes now time-offset))]))))


(defn satellites []
  (let [now (js/Date.)]
    (->> satellite-tle
      (map (fn [s]
             (assoc s
               :orbit/position
               (compute-path (:orbit/ephemeris s) now))))
      vec)))


(re-frame/dispatch-sync [::rs/register-source :source/satellites satellites])





(comment
  (satellites)



  ())


(comment
  (do
    (def line1 "1 25544U 98067A   19156.50900463  .00003075  00000-0  59442-4 0  9992")
    (def line2 "2 25544  51.6433  59.2583 0008217  16.4489 347.6017 15.51174618173442")

    (def now (js/Date.))

    (def satrec (.twoline2satrec js/satellite line1 line2))
    (def positionAndVelocity (.propagate js/satellite satrec now))

    (def positionEci (.-position positionAndVelocity))
    (def velocityEci (.-velocity positionAndVelocity))

    (def observerGd #js{:longitude (.degreesToRadians js/satellite -122.0308),
                        :latitude  (.degreesToRadians js/satellite 36.9613422),
                        :height    0.370})

    (def gmst (.gstime js/satellite now))

    (def positionEcf (.eciToEcf js/satellite positionEci gmst))
    (def velocityEcf (.eciToEcf js/satellite velocityEci gmst))
    (def observerEcf (.geodeticToEcf js/satellite observerGd))
    (def positionGd (.eciToGeodetic js/satellite positionEci, gmst))
    (def lookAngles (.ecfToLookAngles js/satellite observerGd, positionEcf))


    ; WRONG in the readme!
    (def dopplerFactor (.dopplerFactor js/satellite observerEcf,
                         positionEcf, velocityEcf))


    (def lat (.-latitude positionGd))
    (def lon (.-longitude positionGd))
    (def alt (.-height positionGd))

    (def position-deg [(.degreesLat js/satellite lat)
                       (.degreesLong js/satellite lon)
                       alt]))







  (.sgp4 js/satellite satrec js/satellite timeSinceTleEpochMinutes)





  ())


(comment
  (do
    (def ephemeris {:line1 "1 25544U 98067A   19156.50900463  .00003075  00000-0  59442-4 0  9992"
                    :line2 "2 25544  51.6433  59.2583 0008217  16.4489 347.6017 15.51174618173442"})
    (def iss {:name            "ISS"
              :orbit/position  {}
              :orbit/ephemeris ephemeris})
    (def satrec (.twoline2satrec js/satellite
                  (:line1 ephemeris)
                  (:line2 ephemeris)))
    (def now (js/Date.))
    (def time-offset 30))


  (for [time-offset (range -20 60 10)]
    (compute-position satrec (add-minutes now time-offset)))

  (for [time-offset (range -20 60 10)]
    {(keyword (str "t_" time-offset))
     (compute-position satrec (add-minutes now time-offset))})

  (assoc iss
    :orbit/position
    (compute-path (:orbit/ephemeris iss) (js/Date.)))



  (def satrec (.twoline2satrec js/satellite
                (:line1 ephemeris)
                (:line2 ephemeris)))

  ())