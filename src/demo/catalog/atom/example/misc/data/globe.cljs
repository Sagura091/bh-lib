(ns demo.catalog.atom.example.misc.data.globe
  (:require [bh-ui.utils.bounding-box :as bound]
            [bh-ui.utils.helpers :as h]
            [bh-ui.atom.bhui.color-pallet :as pallet]))


(def alt 400E3)


(def sample-data [
                  {:layer-id "misc"
                   :z        10
                   :shapes   [{:shape         :shape/polygon :id "square"
                               :locations     [[30.0 -130.0] [30.0 -100.0]
                                               [0.0 -100.0] [0.0 -130.0]]
                               :fill-color    (pallet/get-color-name pallet/html-color-names :red 0.6)
                               :outline-color (pallet/get-color-name pallet/html-color-names :red 1.0)
                               :width         2}
                              {:shape         :shape/polygon :id "5-sided"
                               :locations     [[37 -115.0] [32.0 -115.0] [33.0 -107.0]
                                               [31.0 -102.0] [35.0 -102.0] [37.0 -115.0]]
                               :fill-color    (pallet/get-color-name pallet/html-color-names :red 0.6)
                               :outline-color (pallet/get-color-name pallet/html-color-names :red 1.0)
                               :width         2}
                              {:shape         :shape/polyline :id "line1" :locations [[35 -75] [35 -125]]
                               :outline-color (pallet/get-color-name pallet/html-color-names :yellow)
                               :width         5}
                              {:shape         :shape/circle :id "circle"
                               :location      [28.538336 -81.379234] :radius 1000000
                               :fill-color    (pallet/get-color-name pallet/html-color-names :green 0.5) ; [0 1 0 0.5]
                               :outline-color (pallet/get-color-name pallet/html-color-names :white) ;[1 1 1 1]
                               :width         2 :height 2}
                              {:shape         :shape/polyline :id "line2" :locations [[22 -55] [45 -105] [36 -125.7]]
                               :outline-color (pallet/get-color-name pallet/html-color-names :pink)
                               :width         5}
                              {:shape         :shape/label :id "orlando" :location [28.538336 -81.379234] :label "Orlando"
                               :fill-color    (pallet/get-color-name pallet/html-color-names :yellowgreen)
                               :outline-color (pallet/get-color-name pallet/html-color-names :yellowgreen)
                               :width         1}]}


                  {:layer-id "satellite-flow"
                   :z        100
                   :shapes   [{:shape :shape/model,
                               :id "ISS",
                               :model-folder "data/models",
                               :position [-5.046279817318429 170.08176731324795 372325.67633414874],
                               :url "satellite",
                               :scale 1000}
                              {:shape :shape/path,
                               :id "ISS-orbit",
                               :positions [[48.37436643146414 108.86271764416266 379188.3002179639]
                                           [25.249941625227397 146.85333448903904 373943.5388503798]
                                           [-5.046279817318429 170.08176731324795 372325.67633414874]
                                           [-34.20589441782211 -164.1065418837078 378671.9033386471]
                                           [-51.49296993277116 -117.46883658628892 383736.3450541379]
                                           [-40.791203438148855 -64.29794124698147 379117.0096665755]
                                           [-13.29339184431137 -34.78556647911476 370719.69144234573]
                                           [17.372900257211516 -12.359750889149886 370077.01839382935]
                                           [43.707561835667974 19.62730154191465 376730.5130393188]
                                           [50.56923289181377 75.171595811922 379629.32916047337]
                                           [30.521990353544297 118.12001201466971 375005.68302524695]
                                           [0.7675558322950464 142.61583563414575 371955.1939919902]
                                           [-29.145688779109264 166.70666757476235 377192.57615873084]
                                           [-50.075167533878734 -151.7563922491734 383444.2883118145]],
                               :color [:indianred
                                       "rgba(205, 92, 92, 1)"
                                       [205 92 92 1]
                                       [0.803921568627451 0.3607843137254902 0.3607843137254902 1]
                                       "#CD5C5C"],
                               :width 1,
                               :extrude true}
                              {:shape :shape/label,
                               :id "ISS",
                               :location [-5.046279817318429 170.08176731324795 372325.67633414874],
                               :label "ISS",
                               :fill-color [:indianred
                                            "rgba(205, 92, 92, 1)"
                                            [205 92 92 1]
                                            [0.803921568627451 0.3607843137254902 0.3607843137254902 1]
                                            "#CD5C5C"],
                               :outline-color [:indianred
                                               "rgba(205, 92, 92, 1)"
                                               [205 92 92 1]
                                               [0.803921568627451 0.3607843137254902 0.3607843137254902 1]
                                               "#CD5C5C"],
                               :width 1}
                              {:shape :shape/model,
                               :id "wgs-f1",
                               :model-folder "data/models",
                               :position [-0.0042067748257224764 6.0087090588891074 3.5786507621350795E7],
                               :url "satellite",
                               :scale 1000}
                              {:shape :shape/path,
                               :id "wgs-f1-orbit",
                               :positions [[-0.001020558630658204 6.008748726340671 3.578664969184205E7]
                                           [-0.0026158905404276094 6.008724672274123 3.578657835026096E7]
                                           [-0.0042067748257224764 6.0087090588891074 3.5786507621350795E7]
                                           [-0.0057902027656822844 6.008701808656116 3.578643763948494E7]
                                           [-0.007363178697363166 6.008702828076484 3.578636853760807E7]
                                           [-0.008922725698646638 6.008712009510244 3.578630044698148E7]
                                           [-0.010465891238056671 6.00872922635801 3.578623349693198E7]
                                           [-0.01198975278073058 6.0087543403672035 3.578616781460428E7]
                                           [-0.01349142333985324 6.008787196877475 3.578610352471775E7]
                                           [-0.014968056864851417 6.0088276245852175 3.578604074933164E7]
                                           [-0.016416854046518593 6.008875439990136 3.5785979607594796E7]
                                           [-0.017835067047412546 6.008930442984578 3.578592021554292E7]
                                           [-0.019220005128482338 6.008992421356593 3.57858626858593E7]
                                           [-0.02056903967172928 6.009061150253179 3.5785807127663456E7]],
                               :color [:lightcoral
                                       "rgba(240, 128, 128, 1)"
                                       [240 128 128 1]
                                       [0.9411764705882353 0.5019607843137255 0.5019607843137255 1]
                                       "#F08080"],
                               :width 1,
                               :extrude true}
                              {:shape :shape/label,
                               :id "wgs-f1",
                               :location [-0.0042067748257224764 6.0087090588891074 3.5786507621350795E7],
                               :label "wgs-f1",
                               :fill-color [:lightcoral
                                            "rgba(240, 128, 128, 1)"
                                            [240 128 128 1]
                                            [0.9411764705882353 0.5019607843137255 0.5019607843137255 1]
                                            "#F08080"],
                               :outline-color [:lightcoral
                                               "rgba(240, 128, 128, 1)"
                                               [240 128 128 1]
                                               [0.9411764705882353 0.5019607843137255 0.5019607843137255 1]
                                               "#F08080"],
                               :width 1}
                              {:shape :shape/model,
                               :id "wgs-f6",
                               :model-folder "data/models",
                               :position [0.018743679235158236 -135.18991972356042 3.578786346970888E7],
                               :url "satellite",
                               :scale 1000}
                              {:shape :shape/path,
                               :id "wgs-f6-orbit",
                               :positions [[0.017032347006904064 -135.18957755781875 3.578762501332535E7]
                                           [0.017904516238177404 -135.18974155476732 3.57877454719053E7]
                                           [0.018743679235158236 -135.18991972356042 3.578786346970888E7]
                                           [0.019548232385688827 -135.19011175837142 3.57879787796407E7]
                                           [0.02031663612146956 -135.1903173268591 3.578809117975118E7]
                                           [0.02104741787087128 -135.19053606913667 3.5788200453661054E7]
                                           [0.021739174887247227 -135.19076760346232 3.578830639097511E7]
                                           [0.022390576947331747 -135.19101151988406 3.5788408787684314E7]
                                           [0.023000368914553086 -135.1912673860213 3.5788507446555875E7]
                                           [0.023567373125779823 -135.19153474838177 3.5788602177504145E7]
                                           [0.0240904918191887 -135.19181312917226 3.5788692797979005E7]
                                           [0.024568709035626187 -135.19210203182953 3.578877913327672E7]
                                           [0.025001092750086815 -135.1924009379108 3.578886101689953E7]
                                           [0.02538679665170108 -135.19270930898824 3.5788938290867455E7]],
                               :color [:salmon
                                       "rgba(250, 128, 114, 1)"
                                       [250 128 114 1]
                                       [0.9803921568627451 0.5019607843137255 0.4470588235294118 1]
                                       "#FA8072"],
                               :width 1,
                               :extrude true}
                              {:shape :shape/label,
                               :id "wgs-f6",
                               :location [0.018743679235158236 -135.18991972356042 3.578786346970888E7],
                               :label "wgs-f6",
                               :fill-color [:salmon
                                            "rgba(250, 128, 114, 1)"
                                            [250 128 114 1]
                                            [0.9803921568627451 0.5019607843137255 0.4470588235294118 1]
                                            "#FA8072"],
                               :outline-color [:salmon
                                               "rgba(250, 128, 114, 1)"
                                               [250 128 114 1]
                                               [0.9803921568627451 0.5019607843137255 0.4470588235294118 1]
                                               "#FA8072"],
                               :width 1}
                              {:shape :shape/model,
                               :id "wgs-f7",
                               :model-folder "data/models",
                               :position [-0.0036012606688371677 175.03774780673896 3.57868411943167E7],
                               :url "satellite",
                               :scale 1000}
                              {:shape :shape/path,
                               :id "wgs-f7-orbit",
                               :positions [[-0.005512098323907175 175.03789528496492 3.578679165814169E7]
                                           [-0.004561641282973609 175.0378230271456 3.578681718337252E7]
                                           [-0.0036012606688371677 175.03774780673896 3.57868411943167E7]
                                           [-0.0026327374690028765 175.03766980742844 3.578686364421802E7]
                                           [-0.0016578707060011966 175.0375892183275 3.578688448930848E7]
                                           [-6.784740869329493E-4 175.03750623527523 3.578690368889187E7]
                                           [3.0362738001416006E-4 175.03742105545336 3.578692120542161E7]
                                           [0.0012866007957569843 175.03733388408477 3.578693700457269E7]
                                           [0.002268608800832393 175.037244929032 3.578695105530713E7]
                                           [0.0032478129542818034 175.0371543998883 3.578696332993285E7]
                                           [0.004222377447963346 175.03706251166759 3.57869738041596E7]
                                           [0.0051904721651746 175.03696947969257 3.578698245714059E7]
                                           [0.006150276390829921 175.03687552327386 3.578698927151573E7]
                                           [0.007099982180814801 175.0367808643622 3.578699423344398E7]],
                               :color [:darksalmon
                                       "rgba(233, 150, 122, 1)"
                                       [233 150 122 1]
                                       [0.9137254901960784 0.5882352941176471 0.47843137254901963 1]
                                       "#E9967A"],
                               :width 1,
                               :extrude true}
                              {:shape :shape/label,
                               :id "wgs-f7",
                               :location [-0.0036012606688371677 175.03774780673896 3.57868411943167E7],
                               :label "wgs-f7",
                               :fill-color [:darksalmon
                                            "rgba(233, 150, 122, 1)"
                                            [233 150 122 1]
                                            [0.9137254901960784 0.5882352941176471 0.47843137254901963 1]
                                            "#E9967A"],
                               :outline-color [:darksalmon
                                               "rgba(233, 150, 122, 1)"
                                               [233 150 122 1]
                                               [0.9137254901960784 0.5882352941176471 0.47843137254901963 1]
                                               "#E9967A"],
                               :width 1}]}

                  {:layer-id "polar-sat-1"
                   :z        100
                   :shapes   [
                              {:shape     :shape/path :id "polar-sat-1-orbit"
                               :positions [[90 -100 alt] [0 -90 alt] [-90 -80 alt] [0 90 alt] [90 -80 alt]]
                               :color     (pallet/get-color-name pallet/html-color-names :lemonchiffon)
                               :width     1 :extrude true}

                              {:shape          :shape/volume :id "polar-sat-1-coverage"
                               :positions      [[40 -90 alt] [30 -100 0] [30 -80 0] [50 -80 0] [50 -100 0]]
                               :faces          [[0 1 2] [0 2 3] [0 3 4] [0 4 1]]
                               :outline        [0 1 2 3 4 0 3 2 0 1 4]
                               :interior-color (pallet/get-color-name pallet/html-color-names :white 0.3)
                               :outline-color  (pallet/get-color-name pallet/html-color-names :cyan)
                               :width          1 :extrude true}
                              {:shape        :shape/model
                               :id           "dataduck"
                               :model-folder "data/models"
                               :position     [40 -90 alt]
                               :url          "duck"
                               :scale        2000}]}

                  {:layer-id "images"
                   :z        10
                   :shapes   [{:shape     :shape/image :id "image-15"
                               :url       "data/a.png"
                               :locations [[22.229767 -93.016231]
                                           [33.344622 -95.433292]
                                           [33.082839 -83.694864]
                                           [22.074653 -82.723547]]}
                              {:shape        :shape/image
                               :id           (h/component-id)
                               :url          "images/lightning/Lightning3png.png"
                               :bounding-box (bound/make-bounding-box 46.076 -105.876 0.5)}
                              {:shape        :shape/image
                               :id           (h/component-id)
                               :url          "images/lightning/Lightning3png.png"
                               :bounding-box (bound/make-bounding-box 45.9087 -104.9876 0.5)}
                              {:shape        :shape/image
                               :id           (h/component-id)
                               :url          "images/lightning/Lightning3png.png"
                               :bounding-box (bound/make-bounding-box -25.0987 -86.09 0.5)}
                              {:shape        :shape/image
                               :id           (h/component-id)
                               :url          "images/lightning/Lightning3png.png"
                               :bounding-box (bound/make-bounding-box -26 -85 0.5)}]}])