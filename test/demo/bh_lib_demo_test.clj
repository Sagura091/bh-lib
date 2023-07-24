(ns demo.bh_lib_demo_test
  (:require
    [clojure.test :refer :all]
    [etaoin.api :as e]))

(def site-url "http://localhost:8888/")

;Change to your browser: chrome, firefox, safari etc.
(defn browser [] (e/firefox))
(deftest bh-lib-welcome-page-test
  (def driver (browser))

  (e/go driver site-url)

  (e/has-text? driver "How to Use this Catalog")

  (e/has-text? driver "Rationale")

  (e/has-text? driver "Examples")

  (e/quit driver))

(deftest bh-lib-technologies-page-test
  (def driver (browser))

  (e/go driver site-url)

  (e/click driver {:tag :button :fn/text "Technologies"})
  (e/has-text? driver "Data-flow Oriented Design")

  (e/wait driver 1)
  (e/click driver {:tag :button :fn/text "System / Services"})
  (e/has-text? driver "System / Services")
  (e/has-text? driver "Event Modeling")

  (e/click driver {:tag :button :fn/text "Server-side"})
  (e/has-text? driver "Clojure")
  (e/has-text? driver "Ring")
  (e/has-text? driver "Compojure")

  (e/click driver {:tag :button :fn/text "Client-side"})
  (e/has-text? driver "Clojurescript")
  (e/has-text? driver "Atomic Design")
  (e/has-text? driver "Reagent")

  (e/click driver {:tag :button :fn/text "All"})
  (e/has-text? driver "All")
  (e/has-text? driver "Ring")

  (e/quit driver))

(deftest bh-lib-atoms-page-test
  (def driver (browser))

  (e/go driver site-url)

  (e/click driver {:tag :button :fn/text "'Atoms'"})
  (e/has-text? driver "Page")
  (e/wait driver 1)

  (e/click driver {:tag :button :fn/text "Containers"})
  (e/has-text? driver "Vertical scroll pane")
  (e/has-text? driver "Shy block")

  (e/click driver {:tag :button :fn/text "Cards"})
  (e/has-text? driver "Card")
  (e/click driver {:tag :button :fn/text "Show Code"})

  (e/click driver {:tag :button :fn/text "Charts"})
  (e/has-text? driver "Area Chart")
  (e/wait driver 1)
  (e/click driver {:tag :button :fn/text "data-sub"})

  (e/click driver {:tag :button :fn/text "Fast Charts"})
  (e/has-text? driver "Fast Line Chart")
  (e/click driver {:tag :button :fn/text "Show Code"})

  (e/click driver {:tag :button :fn/text "Diagrams"})
  (e/has-text? driver "Flow Diagram")

  (e/click driver {:tag :button :fn/text "Icons / Images"})
  (e/has-text? driver "Simple Image")
  (e/has-text? driver "Standard Icons")

  (e/click driver {:tag :button :fn/text "Buttons"})
  (e/has-text? driver "Simple button")
  (e/click driver {:tag :button :fn/text "Click me!"})

  (e/click driver {:tag :button :fn/text "Forms"})
  (e/has-text? driver "Form field labels")
  (e/fill driver {:tag :input :id "demo-1"} "Clojure programming language")

  (e/click driver {:tag :button :fn/text "Re-com"})
  (e/has-text? driver "Table")

  (e/click driver {:tag :button :fn/text "AstroUXDS"})
  (e/has-text? driver "Buttons")

  (e/click driver {:tag :button :fn/text "Misc."})
  (e/has-text? driver "Worldwind Globe")
  (e/has-text? driver "Resium Globe")

  (e/click driver {:tag :button :fn/text "Experimental"})
  (e/has-text? driver "Raw Re-com Table")
  (e/click driver {:tag :button :fn/text "Add 'Q'"})
  (e/has-text? driver "React-Table")
  (e/click driver {:tag :input :type "checkbox"})
  (e/click driver {:tag :span :title "Toggle Row Expanded"})

  (e/click driver {:tag :span :fn/text "Choose a language"})
  (e/wait driver 1)
  (e/click driver {:fn/text "French"})
  (e/has-text? driver "Cliquez sur moi !")

  (e/click driver {:tag :button :fn/text "All"})
  (e/has-text? driver "Page")

  (e/quit driver))

(deftest bh-lib-molecules-page-test
  (def driver (browser))

  (e/go driver site-url)

  (e/click driver {:tag :button :fn/text "'Molecules'"})
  (e/has-text? driver "Colored Selection Table")
  (e/wait driver 1)
  (e/click driver {:tag :button :fn/text "All"})


  (e/quit driver))

(deftest bh-lib-organisms-page-test
  (def driver (browser))

  (e/go driver site-url)

  (e/click driver {:tag :button :fn/text "'Organisms'"})
  (e/has-text? driver "Widget Grid")
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
  (e/has-text? driver "templates")


  (e/quit driver))

(deftest bh-lib-giants-page-test
  (def driver (browser))

  (e/go driver site-url)

  (e/click driver {:tag :button :fn/text "Giants"})
  (e/has-text? driver "Rick Hickey")


  (e/quit driver))