(ns demo.bh_lib_demo_test
  (:require
    [clojure.test :refer :all]
    [etaoin.api :as e]))

(def site-url "http://localhost:8888/")

;Change to your browser: chrome, firefox, safari etc.
(defn browser [] (e/chrome))
(deftest bh-lib-welcome-page-test
  (def driver (browser))

  (e/go driver site-url)

  (is (e/has-text? driver "How to Use this Catalog") true)
  (is (e/has-text? driver "Rationale") true)
  (is (e/has-text? driver "Examples") true)

  (e/quit driver))

(deftest bh-lib-technologies-page-test
  (def driver (browser))

  (e/go driver site-url)

  (e/click driver {:tag :button :fn/text "Technologies"})
  (e/wait driver 1)
  (is (e/has-text? driver "Data-flow Oriented Design") true)

  (e/wait driver 1)
  (e/click driver {:tag :button :fn/text "System / Services"})
  (e/wait driver 1)
  (is (e/has-text? driver "System / Services") true)
  (is (e/has-text? driver "Event Modeling") true)

  (e/click driver {:tag :button :fn/text "Server-side"})
  (e/wait driver 1)
  (is (e/has-text? driver "Clojure") true)
  (is (e/has-text? driver "Ring") true)
  (is (e/has-text? driver "Compojure") true)

  (e/click driver {:tag :button :fn/text "Client-side"})
  (e/wait driver 1)
  (is (e/has-text? driver "Clojurescript") true)
  (is (e/has-text? driver "Atomic Design") true)
  (is (e/has-text? driver "Reagent")true)

  (e/click driver {:tag :button :fn/text "All"})
  (e/wait driver 1)
  (is (e/has-text? driver "All") true)
  (is (e/has-text? driver "Ring") true)

  (e/quit driver))

(deftest bh-lib-atoms-page-test
  (def driver (browser))

  (e/go driver site-url)

  (e/click driver {:tag :button :fn/text "'Atoms'"})
  (e/wait driver 1)
  (is (e/has-text? driver "Page") true)
  (e/wait driver 1)

  (e/click driver {:tag :button :fn/text "Containers"})
  (e/wait driver 1)
  (is (e/has-text? driver "Vertical scroll pane") true)
  (is (e/has-text? driver "Shy block") true)

  (e/click driver {:tag :button :fn/text "Cards"})
  (e/wait driver 1)
  (is (e/has-text? driver "Card") true)
  (e/click driver {:tag :button :fn/text "Show Code"})

  (e/click driver {:tag :button :fn/text "Charts"})
  (e/wait driver 1)
  (is (e/has-text? driver "Area Chart") true)
  (e/wait driver 1)
  (e/click driver {:tag :button :fn/text "data-sub"})

  (e/click driver {:tag :button :fn/text "Fast Charts"})
  (e/wait driver 1)
  (is (e/has-text? driver "Fast Line Chart") true)
  (e/click driver {:tag :button :fn/text "Show Code"})

  (e/click driver {:tag :button :fn/text "Diagrams"})
  (e/wait driver 1)
  (is (e/has-text? driver "Flow Diagram") true)

  (e/click driver {:tag :button :fn/text "Icons / Images"})
  (e/wait driver 1)
  (is (e/has-text? driver "Simple Image") true)
  (is (e/has-text? driver "Standard Icons") true)

  (e/click driver {:tag :button :fn/text "Buttons"})
  (e/wait driver 1)
  (is (e/has-text? driver "Simple button") true)
  (e/wait driver 1)
  (e/click driver {:tag :button :fn/text "Click me!"})

  (e/click driver {:tag :button :fn/text "Forms"})
  (e/wait driver 1)
  (is (e/has-text? driver "Form field labels") true)
  (e/fill driver {:tag :input :id "demo-1"} "Clojure programming language")

  (e/click driver {:tag :button :fn/text "Re-com"})
  (e/wait driver 1)
  (is (e/has-text? driver "Table") true)

  (e/click driver {:tag :button :fn/text "AstroUXDS"})
  (e/wait driver 1)
  (is (e/has-text? driver "Buttons") true)

  (e/click driver {:tag :button :fn/text "Misc."})
  (e/wait driver 1)
  (is (e/has-text? driver "Worldwind Globe") true)
  (is (e/has-text? driver "Resium Globe") true)

  (e/click driver {:tag :button :fn/text "Experimental"})
  (e/wait driver 1)
  (is (e/has-text? driver "Raw Re-com Table") true)
  (e/click driver {:tag :button :fn/text "Add 'Q'"})
  (is (e/has-text? driver "React-Table") true)
  (e/click driver {:tag :input :type "checkbox"})
  (e/click driver {:tag :span :title "Toggle Row Expanded"})

  (e/click driver {:tag :span :fn/text "Choose a language"})
  (e/wait driver 1)
  (e/click driver {:fn/text "French"})
  (e/wait driver 1)
  (is (e/has-text? driver "Cliquez sur moi !") true)

  (e/click driver {:tag :button :fn/text "All"})
  (e/wait driver 1)
  (is (e/has-text? driver "Page") true)

  (e/quit driver))

(deftest bh-lib-molecules-page-test
  (def driver (browser))

  (e/go driver site-url)

  (e/click driver {:tag :button :fn/text "'Molecules'"})
  (e/wait driver 1)
  (is (e/has-text? driver "Colored Selection Table") true)
  (e/wait driver 1)
  (e/click driver {:tag :button :fn/text "All"})


  (e/quit driver))

(deftest bh-lib-organisms-page-test
  (def driver (browser))

  (e/go driver site-url)

  (e/click driver {:tag :button :fn/text "'Organisms'"})
  (e/wait driver 1)
  (is (e/has-text? driver "Widget Grid") true)
  (e/wait driver 1)
  (e/click driver {:fn/text "Empty"})
  (e/wait driver 1)
  (e/click driver {:fn/text "Default"})
  (e/wait driver 1)
  (e/click driver {:fn/text "! Multi Chart"})
  (e/wait driver 1)
  (e/click driver {:fn/text "! Multi Chart 2"})

  (e/quit driver))

(deftest bh-lib-templates-page-test
  (def driver (browser))

  (e/go driver site-url)

  (e/click driver {:tag :button :fn/text "'Templates'"})
  (e/wait driver 1)
  (is (e/has-text? driver "Templates") true)


  (e/quit driver))

(deftest bh-lib-giants-page-test
  (def driver (browser))

  (e/go driver site-url)

  (e/click driver {:tag :button :fn/text "Giants"})
  (e/wait driver 1)
  (is (e/has-text? driver "Rich") true)


  (e/quit driver))