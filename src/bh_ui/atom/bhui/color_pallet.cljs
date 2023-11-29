(ns bh-ui.atom.bhui.color-pallet
  (:require [bh-ui.utils.color :as color]))


(def color-pallet [[:yellow "rgba(255, 255, 0, 0.3)" [255, 255, 0, 0.3] [1.0 1.0 0.0 0.2] "#FFFF00"]
                   [:cyan "rgba(0, 255, 255, 0.3)" [0, 255, 255, 0.3] [0.0 1.0 1.0 0.3] "#00FFFF"]
                   [:blue "rgba(0, 0, 255, 0.3)" [0, 0, 255, 0.3] [0.0 0. 1.0 0.1] "#0000FF"]
                   [:orange "rgba(255, 165, 0, 0.3)" [255, 165, 0, 0.3] [1.0 0.65 0.0 0.3] "#FFA500"]
                   [:grey "rgba(128, 128, 128, 0.3)" [128, 128, 128, 0.3] [0.5 0.5 0.5 0.3] "#808080"]
                   [:cornflowerblue "rgba(100, 149, 237, 0.3)" [100, 149, 237, 0.3] [0.4 0.58 0.93 0.3] "#6495ED"]
                   [:darkcyan "rgba(0, 139, 139, 0.3)" [0, 139, 139, 0.3] [0.0 0.55 0.55 0.3] "#008B8B"]
                   [:goldenrod "rgba(218, 165, 32, 0.3)" [218, 165, 32, 0.3] [0.84 0.65 0.13 0.3] "#DAA520"]
                   [:khaki "rgba(240, 230, 140, 0.3)" [240, 230, 140, 0.3] [0.94 0.90 0.55 0.3] "#F0E68C"]
                   [:deepskyblue "rgba(0, 191, 255, 0.3)" [0, 191, 255, 0.3] [1.0 0.0 1.0 0.3] "#00BFFF"]
                   [:darkseagreen "rgba(143, 188, 143, 0.3)" [143, 188, 143, 0.3] [0.55 0.74 0.56 0.3] "#8FBC8F"]
                   [:darkviolet "rgba(148, 0, 211, 0.3)" [148, 0, 211, 0.3] [0.58 0 0.83 0.3] "#9400D3"]
                   [:forestgreen "rgba(34, 139, 34, 0.3)" [34, 139, 34, 0.3] [0.13 0.55 0.13 0.3] "#228B22"]
                   [:orchid "rgba(218, 112, 214, 0.3)" [218, 112, 214, 0.3] [0.84 0.44 0.84 0.3] "#DA70D6"]
                   [:plum "rgba(221, 160, 221, 0.3)" [221, 160, 221, 0.3] [0.87 0.63 0.87 0.3] "#DDA0DD"]
                   [:tomato "rgba(255, 99, 71, 0.3)" [255, 99, 71, 0.3] [1.0 0.39 0.28 0.3] "#FF6347"]
                   [:green "rgba(0, 128, 0, 0.3)" [0, 128, 0, 0.3] [0.0 0.5 0.0 0.2] "#008000"]
                   [:orangered "rgba(255, 69, 0, 0.3)" [255, 69, 0, 0.3] [1.0 0.27 0.0 0.3] "#FF4500"]
                   [:navy "rgba(0, 0, 128, 0.3)" [0, 0, 128, 0.3] [0.0 0.0 0.5 0.3] "#000080"]
                   [:darkred "rgba(139, 0, 0, 0.3)" [139, 0, 0, 0.3] [0.55 0.0 0.0 0.3] "#8B0000"]
                   [:white "rgba(255, 255, 255, 0.3)" [255, 255, 255, 0.3] [1.0 1.0 1.0 0.3] "#FFFFFF"]
                   [:red "rgba(255, 0, 0, 1.0)" [255, 0, 0, 1.0] [1.0 0.0 0.0 1.0] "#FF0000"]
                   [:pink "rgb(255, 192, 203)" [255, 192, 203] [] "#FFC0CB"]])


(def html-color-names [[:indianred "rgba(205, 92, 92, 1)" [205 92 92 1] [0.803921568627451 0.3607843137254902 0.3607843137254902 1] "#CD5C5C"]
                       [:lightcoral "rgba(240, 128, 128, 1)" [240 128 128 1] [0.9411764705882353 0.5019607843137255 0.5019607843137255 1] "#F08080"]
                       [:salmon "rgba(250, 128, 114, 1)" [250 128 114 1] [0.9803921568627451 0.5019607843137255 0.4470588235294118 1] "#FA8072"]
                       [:darksalmon "rgba(233, 150, 122, 1)" [233 150 122 1] [0.9137254901960784 0.5882352941176471 0.47843137254901963 1] "#E9967A"]
                       [:lightsalmon "rgba(255, 160, 122, 1)" [255 160 122 1] [1 0.6274509803921569 0.47843137254901963 1] "#FFA07A"]
                       [:crimson "rgba(220, 20, 60, 1)" [220 20 60 1] [0.8627450980392157 0.0784313725490196 0.23529411764705882 1] "#DC143C"]
                       [:red "rgba(255, 0, 0, 1)" [255 0 0 1] [1 0 0 1] "#FF0000"]
                       [:firebrick "rgba(178, 34, 34, 1)" [178 34 34 1] [0.6980392156862745 0.13333333333333333 0.13333333333333333 1] "#B22222"]
                       [:darkred "rgba(139, 0, 0, 1)" [139 0 0 1] [0.5450980392156862 0 0 1] "#8B0000"]
                       [:pink "rgba(255, 192, 203, 1)" [255 192 203 1] [1 0.7529411764705882 0.796078431372549 1] "#FFC0CB"]
                       [:lightpink "rgba(255, 182, 193, 1)" [255 182 193 1] [1 0.7137254901960784 0.7568627450980392 1] "#FFB6C1"]
                       [:hotpink "rgba(255, 105, 180, 1)" [255 105 180 1] [1 0.4117647058823529 0.7058823529411765 1] "#FF69B4"]
                       [:deeppink "rgba(255, 20, 147, 1)" [255 20 147 1] [1 0.0784313725490196 0.5764705882352941 1] "#FF1493"]
                       [:mediumvioletred "rgba(199, 21, 133, 1)" [199 21 133 1] [0.7803921568627451 0.08235294117647059 0.5215686274509804 1] "#C71585"]
                       [:palevioletred "rgba(183, 9, NaN, 1)" [183 9 ##NaN 1] [0.7176470588235294 0.03529411764705882 ##NaN 1] "DB7093"]
                       [:coral "rgba(255, 127, 80, 1)" [255 127 80 1] [1 0.4980392156862745 0.3137254901960784 1] "#FF7F50"]
                       [:tomato "rgba(255, 99, 71, 1)" [255 99 71 1] [1 0.38823529411764707 0.2784313725490196 1] "#FF6347"]
                       [:orangered "rgba(255, 69, 0, 1)" [255 69 0 1] [1 0.27058823529411763 0 1] "#FF4500"]
                       [:darkorange "rgba(255, 140, 0, 1)" [255 140 0 1] [1 0.5490196078431373 0 1] "#FF8C00"]
                       [:orange "rgba(255, 165, 0, 1)" [255 165 0 1] [1 0.6470588235294118 0 1] "#FFA500"]
                       [:gold "rgba(255, 215, 0, 1)" [255 215 0 1] [1 0.8431372549019608 0 1] "#FFD700"]
                       [:yellow "rgba(255, 255, 0, 1)" [255 255 0 1] [1 1 0 1] "#FFFF00"]
                       [:lightyellow "rgba(255, 255, 224, 1)" [255 255 224 1] [1 1 0.8784313725490196 1] "#FFFFE0"]
                       [:lemonchiffon "rgba(255, 250, 205, 1)" [255 250 205 1] [1 0.9803921568627451 0.803921568627451 1] "#FFFACD"]
                       [:lightgoldenrodyellow "rgba(250, 250, 210, 1)" [250 250 210 1] [0.9803921568627451 0.9803921568627451 0.8235294117647058 1] "#FAFAD2"]
                       [:papayawhip "rgba(255, 239, 213, 1)" [255 239 213 1] [1 0.9372549019607843 0.8352941176470589 1] "#FFEFD5"]
                       [:moccasin "rgba(255, 228, 181, 1)" [255 228 181 1] [1 0.8941176470588236 0.7098039215686275 1] "#FFE4B5"]
                       [:peachpuff "rgba(255, 218, 185, 1)" [255 218 185 1] [1 0.8549019607843137 0.7254901960784313 1] "#FFDAB9"]
                       [:palegoldenrod "rgba(238, 232, 170, 1)" [238 232 170 1] [0.9333333333333333 0.9098039215686274 0.6666666666666666 1] "#EEE8AA"]
                       [:khaki "rgba(240, 230, 140, 1)" [240 230 140 1] [0.9411764705882353 0.9019607843137255 0.5490196078431373 1] "#F0E68C"]
                       [:darkkhaki "rgba(189, 183, 107, 1)" [189 183 107 1] [0.7411764705882353 0.7176470588235294 0.4196078431372549 1] "#BDB76B"]
                       [:lavender "rgba(230, 230, 250, 1)" [230 230 250 1] [0.9019607843137255 0.9019607843137255 0.9803921568627451 1] "#E6E6FA"]
                       [:thistle "rgba(216, 191, 216, 1)" [216 191 216 1] [0.8470588235294118 0.7490196078431373 0.8470588235294118 1] "#D8BFD8"]
                       [:plum "rgba(221, 160, 221, 1)" [221 160 221 1] [0.8666666666666667 0.6274509803921569 0.8666666666666667 1] "#DDA0DD"]
                       [:violet "rgba(238, 130, 238, 1)" [238 130 238 1] [0.9333333333333333 0.5098039215686274 0.9333333333333333 1] "#EE82EE"]
                       [:orchid "rgba(218, 112, 214, 1)" [218 112 214 1] [0.8549019607843137 0.4392156862745098 0.8392156862745098 1] "#DA70D6"]
                       [:fuchsia "rgba(255, 0, 255, 1)" [255 0 255 1] [1 0 1 1] "#FF00FF"]
                       [:magenta "rgba(255, 0, 255, 1)" [255 0 255 1] [1 0 1 1] "#FF00FF"]
                       [:mediumorchid "rgba(186, 85, 211, 1)" [186 85 211 1] [0.7294117647058823 0.3333333333333333 0.8274509803921568 1] "#BA55D3"]
                       [:mediumpurple "rgba(147, 112, 219, 1)" [147 112 219 1] [0.5764705882352941 0.4392156862745098 0.8588235294117647 1] "#9370DB"]
                       [:rebeccapurple "rgba(102, 51, 153, 1)" [102 51 153 1] [0.4 0.2 0.6 1] "#663399"]
                       [:blueviolet "rgba(138, 43, 226, 1)" [138 43 226 1] [0.5411764705882353 0.16862745098039217 0.8862745098039215 1] "#8A2BE2"]
                       [:darkviolet "rgba(148, 0, 211, 1)" [148 0 211 1] [0.5803921568627451 0 0.8274509803921568 1] "#9400D3"]
                       [:darkmagenta "rgba(153, 50, 204, 1)" [153 50 204 1] [0.6 0.19607843137254902 0.8 1] "#9932CC"]
                       [:purple "rgba(139, 0, 139, 1)" [139 0 139 1] [0.5450980392156862 0 0.5450980392156862 1] "#8B008B"]
                       [:indigo "rgba(75, 0, 130, 1)" [75 0 130 1] [0.29411764705882354 0 0.5098039215686274 1] "#4B0082"]
                       [:slateblue "rgba(106, 90, 205, 1)" [106 90 205 1] [0.41568627450980394 0.35294117647058826 0.803921568627451 1] "#6A5ACD"]
                       [:darkslateblue "rgba(72, 61, 139, 1)" [72 61 139 1] [0.2823529411764706 0.23921568627450981 0.5450980392156862 1] "#483D8B"]
                       [:mediumslateblue "rgba(123, 104, 238, 1)" [123 104 238 1] [0.4823529411764706 0.40784313725490196 0.9333333333333333 1] "#7B68EE"]
                       [:greenyellow "rgba(173, 255, 47, 1)" [173 255 47 1] [0.6784313725490196 1 0.1843137254901961 1] "#ADFF2F"]
                       [:chartreuse "rgba(173, 255, 47, 1)" [173 255 47 1] [0.6784313725490196 1 0.1843137254901961 1] "#ADFF2F"]
                       [:lawngreen "rgba(124, 252, 0, 1)" [124 252 0 1] [0.48627450980392156 0.9882352941176471 0 1] "#7CFC00"]
                       [:lime "rgba(0, 255, 0, 1)" [0 255 0 1] [0 1 0 1] "#00FF00"]
                       [:limegreen "rgba(50, 205, 50, 1)" [50 205 50 1] [0.19607843137254902 0.803921568627451 0.19607843137254902 1] "#32CD32"]
                       [:palegreen "rgba(152, 251, 152, 1)" [152 251 152 1] [0.596078431372549 0.984313725490196 0.596078431372549 1] "#98FB98"]
                       [:lightgreen "rgba(144, 238, 144, 1)" [144 238 144 1] [0.5647058823529412 0.9333333333333333 0.5647058823529412 1] "#90EE90"]
                       [:mediumspringgreen "rgba(0, 250, 154, 1)" [0 250 154 1] [0 0.9803921568627451 0.6039215686274509 1] "#00FA9A"]
                       [:springgreen "rgba(0, 255, 127, 1)" [0 255 127 1] [0 1 0.4980392156862745 1] "#00FF7F"]
                       [:mediumseagreen "rgba(60, 179, 113, 1)" [60 179 113 1] [0.23529411764705882 0.7019607843137254 0.44313725490196076 1] "#3CB371"]
                       [:seagreen "rgba(46, 139, 87, 1)" [46 139 87 1] [0.1803921568627451 0.5450980392156862 0.3411764705882353 1] "#2E8B57"]
                       [:forestgreen "rgba(34, 139, 34, 1)" [34 139 34 1] [0.13333333333333333 0.5450980392156862 0.13333333333333333 1] "#228B22"]
                       [:green "rgba(0, 128, 0, 1)" [0 128 0 1] [0 0.5019607843137255 0 1] "#008000"]
                       [:darkgreen "rgba(0, 100, 0, 1)" [0 100 0 1] [0 0.39215686274509803 0 1] "#006400"]
                       [:yellowgreen "rgba(154, 205, 50, 1)" [154 205 50 1] [0.6039215686274509 0.803921568627451 0.19607843137254902 1] "#9ACD32"]
                       [:olivedrab "rgba(107, 142, 35, 1)" [107 142 35 1] [0.4196078431372549 0.5568627450980392 0.13725490196078433 1] "#6B8E23"]
                       [:olive "rgba(128, 128, 0, 1)" [128 128 0 1] [0.5019607843137255 0.5019607843137255 0 1] "#808000"]
                       [:darkolivegreen "rgba(85, 107, 47, 1)" [85 107 47 1] [0.3333333333333333 0.4196078431372549 0.1843137254901961 1] "#556B2F"]
                       [:mediumaquamarine "rgba(102, 205, 170, 1)" [102 205 170 1] [0.4 0.803921568627451 0.6666666666666666 1] "#66CDAA"]
                       [:darkseagreen "rgba(143, 188, 139, 1)" [143 188 139 1] [0.5607843137254902 0.7372549019607844 0.5450980392156862 1] "#8FBC8B"]
                       [:lightseagreen "rgba(32, 178, 170, 1)" [32 178 170 1] [0.12549019607843137 0.6980392156862745 0.6666666666666666 1] "#20B2AA"]
                       [:darkcyan "rgba(0, 139, 139, 1)" [0 139 139 1] [0 0.5450980392156862 0.5450980392156862 1] "#008B8B"]
                       [:teal "rgba(0, 128, 128, 1)" [0 128 128 1] [0 0.5019607843137255 0.5019607843137255 1] "#008080"]
                       [:aqua "rgba(0, 255, 255, 1)" [0 255 255 1] [0 1 1 1] "#00FFFF"]
                       [:cyan "rgba(0, 255, 255, 1)" [0 255 255 1] [0 1 1 1] "#00FFFF"]
                       [:lightcyan "rgba(224, 255, 255, 1)" [224 255 255 1] [0.8784313725490196 1 1 1] "#E0FFFF"]
                       [:paleturquoise "rgba(175, 238, 238, 1)" [175 238 238 1] [0.6862745098039216 0.9333333333333333 0.9333333333333333 1] "#AFEEEE"]
                       [:aquamarine "rgba(127, 255, 212, 1)" [127 255 212 1] [0.4980392156862745 1 0.8313725490196079 1] "#7FFFD4"]
                       [:turquoise "rgba(64, 224, 208, 1)" [64 224 208 1] [0.25098039215686274 0.8784313725490196 0.8156862745098039 1] "#40E0D0"]
                       [:mediumturquoise "rgba(72, 209, 204, 1)" [72 209 204 1] [0.2823529411764706 0.8196078431372549 0.8 1] "#48D1CC"]
                       [:darkturquoise "rgba(0, 206, 209, 1)" [0 206 209 1] [0 0.807843137254902 0.8196078431372549 1] "#00CED1"]
                       [:cadetblue "rgba(95, 158, 160, 1)" [95 158 160 1] [0.37254901960784315 0.6196078431372549 0.6274509803921569 1] "#5F9EA0"]
                       [:steelblue "rgba(70, 130, 180, 1)" [70 130 180 1] [0.27450980392156865 0.5098039215686274 0.7058823529411765 1] "#4682B4"]
                       [:lightsteelblue "rgba(176, 196, 222, 1)" [176 196 222 1] [0.6901960784313725 0.7686274509803922 0.8705882352941177 1] "#B0C4DE"]
                       [:powderblue "rgba(176, 224, 230, 1)" [176 224 230 1] [0.6901960784313725 0.8784313725490196 0.9019607843137255 1] "#B0E0E6"]
                       [:lightblue "rgba(173, 216, 230, 1)" [173 216 230 1] [0.6784313725490196 0.8470588235294118 0.9019607843137255 1] "#ADD8E6"]
                       [:skyblue "rgba(135, 206, 235, 1)" [135 206 235 1] [0.5294117647058824 0.807843137254902 0.9215686274509803 1] "#87CEEB"]
                       [:lightskyblue "rgba(135, 206, 250, 1)" [135 206 250 1] [0.5294117647058824 0.807843137254902 0.9803921568627451 1] "#87CEFA"]
                       [:deepskyblue "rgba(0, 191, 255, 1)" [0 191 255 1] [0 0.7490196078431373 1 1] "#00BFFF"]
                       [:dodgerblue "rgba(30, 144, 255, 1)" [30 144 255 1] [0.11764705882352941 0.5647058823529412 1 1] "#1E90FF"]
                       [:cornflowerblue "rgba(100, 149, 237, 1)" [100 149 237 1] [0.39215686274509803 0.5843137254901961 0.9294117647058824 1] "#6495ED"]
                       [:mediumslateblue "rgba(123, 104, 238, 1)" [123 104 238 1] [0.4823529411764706 0.40784313725490196 0.9333333333333333 1] "#7B68EE"]
                       [:royalblue "rgba(65, 105, 225, 1)" [65 105 225 1] [0.2549019607843137 0.4117647058823529 0.8823529411764706 1] "#4169E1"]
                       [:blue "rgba(0, 0, 255, 1)" [0 0 255 1] [0 0 1 1] "#0000FF"]
                       [:mediumblue "rgba(0, 0, 205, 1)" [0 0 205 1] [0 0 0.803921568627451 1] "#0000CD"]
                       [:darkblue "rgba(0, 0, 139, 1)" [0 0 139 1] [0 0 0.5450980392156862 1] "#00008B"]
                       [:navy "rgba(0, 0, 128, 1)" [0 0 128 1] [0 0 0.5019607843137255 1] "#000080"]
                       [:midnightblue "rgba(25, 25, 112, 1)" [25 25 112 1] [0.09803921568627451 0.09803921568627451 0.4392156862745098 1] "#191970"]
                       [:cornsilk "rgba(255, 248, 220, 1)" [255 248 220 1] [1 0.9725490196078431 0.8627450980392157 1] "#FFF8DC"]
                       [:blanchedalmond "rgba(255, 235, 205, 1)" [255 235 205 1] [1 0.9215686274509803 0.803921568627451 1] "#FFEBCD"]
                       [:bisque "rgba(255, 228, 196, 1)" [255 228 196 1] [1 0.8941176470588236 0.7686274509803922 1] "#FFE4C4"]
                       [:navajowhite "rgba(255, 222, 173, 1)" [255 222 173 1] [1 0.8705882352941177 0.6784313725490196 1] "#FFDEAD"]
                       [:wheat "rgba(245, 222, 179, 1)" [245 222 179 1] [0.9607843137254902 0.8705882352941177 0.7019607843137254 1] "#F5DEB3"]
                       [:burlywood "rgba(245, 222, 179, 1)" [245 222 179 1] [0.9607843137254902 0.8705882352941177 0.7019607843137254 1] "#F5DEB3"]
                       [:tan "rgba(210, 180, 140, 1)" [210 180 140 1] [0.8235294117647058 0.7058823529411765 0.5490196078431373 1] "#D2B48C"]
                       [:rosybrown "rgba(188, 143, 143, 1)" [188 143 143 1] [0.7372549019607844 0.5607843137254902 0.5607843137254902 1] "#BC8F8F"]
                       [:sandybrown "rgba(244, 164, 96, 1)" [244 164 96 1] [0.9568627450980393 0.6431372549019608 0.3764705882352941 1] "#F4A460"]
                       [:goldenrod "rgba(218, 165, 32, 1)" [218 165 32 1] [0.8549019607843137 0.6470588235294118 0.12549019607843137 1] "#DAA520"]
                       [:darkgoldenrod "rgba(184, 134, 11, 1)" [184 134 11 1] [0.7215686274509804 0.5254901960784314 0.043137254901960784 1] "#B8860B"]
                       [:peru "rgba(205, 133, 63, 1)" [205 133 63 1] [0.803921568627451 0.5215686274509804 0.24705882352941178 1] "#CD853F"]
                       [:chocolate "rgba(210, 105, 30, 1)" [210 105 30 1] [0.8235294117647058 0.4117647058823529 0.11764705882352941 1] "#D2691E"]
                       [:saddlebrown "rgba(139, 69, 19, 1)" [139 69 19 1] [0.5450980392156862 0.27058823529411763 0.07450980392156863 1] "#8B4513"]
                       [:sienna "rgba(160, 82, 45, 1)" [160 82 45 1] [0.6274509803921569 0.3215686274509804 0.17647058823529413 1] "#A0522D"]
                       [:brown "rgba(165, 42, 42, 1)" [165 42 42 1] [0.6470588235294118 0.16470588235294117 0.16470588235294117 1] "#A52A2A"]
                       [:maroon "rgba(128, 0, 0, 1)" [128 0 0 1] [0.5019607843137255 0 0 1] "#800000"]
                       [:white "rgba(255, 255, 255, 1)" [255 255 255 1] [1 1 1 1] "#FFFFFF"]
                       [:snow "rgba(255, 250, 250, 1)" [255 250 250 1] [1 0.9803921568627451 0.9803921568627451 1] "#FFFAFA"]
                       [:honeydew "rgba(240, 255, 240, 1)" [240 255 240 1] [0.9411764705882353 1 0.9411764705882353 1] "#F0FFF0"]
                       [:mintcream "rgba(245, 255, 250, 1)" [245 255 250 1] [0.9607843137254902 1 0.9803921568627451 1] "#F5FFFA"]
                       [:azure "rgba(240, 255, 255, 1)" [240 255 255 1] [0.9411764705882353 1 1 1] "#F0FFFF"]
                       [:aliceblue "rgba(240, 248, 255, 1)" [240 248 255 1] [0.9411764705882353 0.9725490196078431 1 1] "#F0F8FF"]
                       [:ghostwhite "rgba(248, 248, 255, 1)" [248 248 255 1] [0.9725490196078431 0.9725490196078431 1 1] "#F8F8FF"]
                       [:whitesmoke "rgba(245, 245, 245, 1)" [245 245 245 1] [0.9607843137254902 0.9607843137254902 0.9607843137254902 1] "#F5F5F5"]
                       [:seashell "rgba(255, 245, 238, 1)" [255 245 238 1] [1 0.9607843137254902 0.9333333333333333 1] "#FFF5EE"]
                       [:beige "rgba(245, 245, 220, 1)" [245 245 220 1] [0.9607843137254902 0.9607843137254902 0.8627450980392157 1] "#F5F5DC"]
                       [:oldlace "rgba(253, 245, 230, 1)" [253 245 230 1] [0.9921568627450981 0.9607843137254902 0.9019607843137255 1] "#FDF5E6"]
                       [:floralwhite "rgba(255, 250, 240, 1)" [255 250 240 1] [1 0.9803921568627451 0.9411764705882353 1] "#FFFAF0"]
                       [:ivory "rgba(255, 255, 240, 1)" [255 255 240 1] [1 1 0.9411764705882353 1] "#FFFFF0"]
                       [:antiquewhite "rgba(250, 235, 215, 1)" [250 235 215 1] [0.9803921568627451 0.9215686274509803 0.8431372549019608 1] "#FAEBD7"]
                       [:linen "rgba(250, 240, 230, 1)" [250 240 230 1] [0.9803921568627451 0.9411764705882353 0.9019607843137255 1] "#FAF0E6"]
                       [:lavenderblush "rgba(255, 240, 245, 1)" [255 240 245 1] [1 0.9411764705882353 0.9607843137254902 1] "#FFF0F5"]
                       [:mistyrose "rgba(255, 228, 225, 1)" [255 228 225 1] [1 0.8941176470588236 0.8823529411764706 1] "#FFE4E1"]
                       [:gainsboro "rgba(220, 220, 220, 1)" [220 220 220 1] [0.8627450980392157 0.8627450980392157 0.8627450980392157 1] "#DCDCDC"]
                       [:lightgray "rgba(211, 211, 211, 1)" [211 211 211 1] [0.8274509803921568 0.8274509803921568 0.8274509803921568 1] "#D3D3D3"]
                       [:silver "rgba(192, 192, 192, 1)" [192 192 192 1] [0.7529411764705882 0.7529411764705882 0.7529411764705882 1] "#C0C0C0"]
                       [:darkgray "rgba(169, 169, 169, 1)" [169 169 169 1] [0.6627450980392157 0.6627450980392157 0.6627450980392157 1] "#A9A9A9"]
                       [:gray "rgba(128, 128, 128, 1)" [128 128 128 1] [0.5019607843137255 0.5019607843137255 0.5019607843137255 1] "#808080"]
                       [:dimgray "rgba(105, 105, 105, 1)" [105 105 105 1] [0.4117647058823529 0.4117647058823529 0.4117647058823529 1] "#696969"]
                       [:lightslategray "rgba(119, 136, 153, 1)" [119 136 153 1] [0.4666666666666667 0.5333333333333333 0.6 1] "#778899"]
                       [:slategray "rgba(112, 128, 144, 1)" [112 128 144 1] [0.4392156862745098 0.5019607843137255 0.5647058823529412 1] "#708090"]
                       [:darkslategray "rgba(47, 79, 79, 1)" [47 79 79 1] [0.1843137254901961 0.30980392156862746 0.30980392156862746 1] "#2F4F4F"]
                       [:black "rgba(0, 0, 0, 1)" [0 0 0 1] [0 0 0 1] "#000000"]])


(defn make-color-vec
  ([name hex]
   (make-color-vec name hex 1.0))

  ([name hex alpha]
   (let [rgba (color/hex->rgba hex alpha)]
     [name
      (color/rgba-map->js-function rgba)
      (color/rgba-map->rgba-vector rgba)
      (-> rgba
        color/rgba-normal
        ((fn [{:keys [r g b a]}] [r g b a])))
      hex])))


(defn get-color-name
  ([pallet color-name alpha]
   (-> (get-color-name pallet color-name)
     ((fn [[name _ _ _ hex]]
        (make-color-vec name hex alpha)))))

  ([pallet color-name]
   (->> pallet
     (filter (fn [[name _ _ _ _]] (= name color-name)))
     first)))


(defn get-color
  ([idx source] (let [i (mod idx (count source))]
                  (get source i)))
  ([idx] (get-color idx color-pallet)))


(defn next-color
  ([idx-atom source] (get-color (swap! idx-atom inc) source))
  ([idx-atom] (get-color (swap! idx-atom inc))))





(comment
  (get-color-name color-pallet :green)
  (get-color-name html-color-names :pink)
  (get-color-name html-color-names :slateblue)

  (get-color-name html-color-names :slateblue 0.2)



  ())


; use the repl to build all the color data for all 140 names HTML colors
(comment
  (def color-names [:indianred :lightcoral :salmon :darksalmon :crimson :red :firebrick :darkred
                    :pink :lightpink :hotpink :deeppink :mediumvioletred :palevioletred
                    :lightsalmon :coral :tomato :orangered :darkorange :orange
                    :gold :yellow :lightyellow :lemonchiffon :lightgoldenrodyellow :papayawhip :moccasin :peachpuff :palegoldenrod :khaki :darkkhaki
                    :lavender :thistle :plum :violet :orchid :fuchsia :magenta :mediumorchid :mediumpurple :rebeccapurple :blueviolet :darkviolet :darkmagenta :purple :indigo :slateblue :darkslateblue :mediumslateblue
                    :greenyellow :chartreuse :lawngreen :lime :limegreen :palegreen :lightgreen :mediumspringgreen :springgreen :mediumseagreen :seagreen :forestgreen :green :darkgreen :yellowgreen :olivedrab :olive :mediumaquamarine :darkseagreen :lightseagreen :darkcyan :teal
                    :aqua :cyan :lightcyan :paleturquoise :aquamarine :turquoise :mediumturquoise :darkturquoise :cadetblue :steelblue :lightsteelblue :powderblue :lightblue :skyblue :lightskyblue :deepskyblue :dodgerblue :cornflowerblue :mediumslateblue :royalblue :blue :mediumblue :darkblue :navy :midnightblue
                    :cornsilk :blanchedalmond :bisque :navajowhite :wheat :burlywood :tan :rosybrown :sandybrown :goldenrod :darkgoldenrod :peru :chocolate :saddlebrown :sienna :brown :maroon
                    :white :snow :honeydew :mintcream :azure :aliceblue :ghostwhite :whitesmoke :seashell :beige :oldlace :floralwhite :ivory :antiquewhite :linen :lavenderblush :mistyrose
                    :gainsboro :lightgray :silver :darkgray :gray :dimgray :lightslategray :slategray :darkslategray
                    :black])


  (->> color-names
    (map (fn [c] [c "#"]))
    vec)

  [[:indianred "" [] [] "#CD5C5C"]
   [:lightcoral "" [] [] "#F08080"]
   [:salmon "" [] [] "#FA8072"]
   [:darksalmon "#E9967A"]]


  (def color-names-2 [[:indianred "#CD5C5C"]
                      [:lightcoral "#F08080"]
                      [:salmon "#FA8072"]
                      [:darksalmon "#E9967A"]
                      [:lightsalmon "#FFA07A"]
                      [:crimson "#DC143C"]
                      [:red "#FF0000"]
                      [:firebrick "#B22222"]
                      [:darkred "#8B0000"]
                      [:pink "#FFC0CB"]
                      [:lightpink "#FFB6C1"]
                      [:hotpink "#FF69B4"]
                      [:deeppink "#FF1493"]
                      [:mediumvioletred "#C71585"]
                      [:palevioletred "DB7093"]
                      [:coral "#FF7F50"]
                      [:tomato "#FF6347"]
                      [:orangered "#FF4500"]
                      [:darkorange "#FF8C00"]
                      [:orange "#FFA500"]
                      [:gold "#FFD700"]
                      [:yellow "#FFFF00"]
                      [:lightyellow "#FFFFE0"]
                      [:lemonchiffon "#FFFACD"]
                      [:lightgoldenrodyellow "#FAFAD2"]
                      [:papayawhip "#FFEFD5"]
                      [:moccasin "#FFE4B5"]
                      [:peachpuff "#FFDAB9"]
                      [:palegoldenrod "#EEE8AA"]
                      [:khaki "#F0E68C"]
                      [:darkkhaki "#BDB76B"]
                      [:lavender "#E6E6FA"]
                      [:thistle "#D8BFD8"]
                      [:plum "#DDA0DD"]
                      [:violet "#EE82EE"]
                      [:orchid "#DA70D6"]
                      [:fuchsia "#FF00FF"]
                      [:magenta "#FF00FF"]
                      [:mediumorchid "#BA55D3"]
                      [:mediumpurple "#9370DB"]
                      [:rebeccapurple "#663399"]
                      [:blueviolet "#8A2BE2"]
                      [:darkviolet "#9400D3"]
                      [:darkmagenta "#9932CC"]
                      [:purple "#8B008B"]
                      [:indigo "#4B0082"]
                      [:slateblue "#6A5ACD"]
                      [:darkslateblue "#483D8B"]
                      [:mediumslateblue "#7B68EE"]
                      [:greenyellow "#ADFF2F"]
                      [:chartreuse "#ADFF2F"]
                      [:lawngreen "#7CFC00"]
                      [:lime "#00FF00"]
                      [:limegreen "#32CD32"]
                      [:palegreen "#98FB98"]
                      [:lightgreen "#90EE90"]
                      [:mediumspringgreen "#00FA9A"]
                      [:springgreen "#00FF7F"]
                      [:mediumseagreen "#3CB371"]
                      [:seagreen "#2E8B57"]
                      [:forestgreen "#228B22"]
                      [:green "#008000"]
                      [:darkgreen "#006400"]
                      [:yellowgreen "#9ACD32"]
                      [:olivedrab "#6B8E23"]
                      [:olive "#808000"]
                      [:darkolivegreen "#556B2F"]
                      [:mediumaquamarine "#66CDAA"]
                      [:darkseagreen "#8FBC8B"]
                      [:lightseagreen "#20B2AA"]
                      [:darkcyan "#008B8B"]
                      [:teal "#008080"]
                      [:aqua "#00FFFF"]
                      [:cyan "#00FFFF"]
                      [:lightcyan "#E0FFFF"]
                      [:paleturquoise "#AFEEEE"]
                      [:aquamarine "#7FFFD4"]
                      [:turquoise "#40E0D0"]
                      [:mediumturquoise "#48D1CC"]
                      [:darkturquoise "#00CED1"]
                      [:cadetblue "#5F9EA0"]
                      [:steelblue "#4682B4"]
                      [:lightsteelblue "#B0C4DE"]
                      [:powderblue "#B0E0E6"]
                      [:lightblue "#ADD8E6"]
                      [:skyblue "#87CEEB"]
                      [:lightskyblue "#87CEFA"]
                      [:deepskyblue "#00BFFF"]
                      [:dodgerblue "#1E90FF"]
                      [:cornflowerblue "#6495ED"]
                      [:mediumslateblue "#7B68EE"]
                      [:royalblue "#4169E1"]
                      [:blue "#0000FF"]
                      [:mediumblue "#0000CD"]
                      [:darkblue "#00008B"]
                      [:navy "#000080"]
                      [:midnightblue "#191970"]
                      [:cornsilk "#FFF8DC"]
                      [:blanchedalmond "#FFEBCD"]
                      [:bisque "#FFE4C4"]
                      [:navajowhite "#FFDEAD"]
                      [:wheat "#F5DEB3"]
                      [:burlywood "#F5DEB3"]
                      [:tan "#D2B48C"]
                      [:rosybrown "#BC8F8F"]
                      [:sandybrown "#F4A460"]
                      [:goldenrod "#DAA520"]
                      [:darkgoldenrod "#B8860B"]
                      [:peru "#CD853F"]
                      [:chocolate "#D2691E"]
                      [:saddlebrown "#8B4513"]
                      [:sienna "#A0522D"]
                      [:brown "#A52A2A"]
                      [:maroon "#800000"]
                      [:white "#FFFFFF"]
                      [:snow "#FFFAFA"]
                      [:honeydew "#F0FFF0"]
                      [:mintcream "#F5FFFA"]
                      [:azure "#F0FFFF"]
                      [:aliceblue "#F0F8FF"]
                      [:ghostwhite "#F8F8FF"]
                      [:whitesmoke "#F5F5F5"]
                      [:seashell "#FFF5EE"]
                      [:beige "#F5F5DC"]
                      [:oldlace "#FDF5E6"]
                      [:floralwhite "#FFFAF0"]
                      [:ivory "#FFFFF0"]
                      [:antiquewhite "#FAEBD7"]
                      [:linen "#FAF0E6"]
                      [:lavenderblush "#FFF0F5"]
                      [:mistyrose "#FFE4E1"]
                      [:gainsboro "#DCDCDC"]
                      [:lightgray "#D3D3D3"]
                      [:silver "#C0C0C0"]
                      [:darkgray "#A9A9A9"]
                      [:gray "#808080"]
                      [:dimgray "#696969"]
                      [:lightslategray "#778899"]
                      [:slategray "#708090"]
                      [:darkslategray "#2F4F4F"]
                      [:black "#000000"]])


  (-> "#CD5C5C" color/hex->rgba color/rgba-map->rgba-vector)
  (-> "#CD5C5C"
    color/hex->rgba
    color/rgba-normal
    ((fn [{:keys [r g b a]}] [r g b a])))


  (let [{:keys [r g b a]} {:r 0.803921568627451, :g 0.3607843137254902, :b 0.3607843137254902, :a 1}]
    [r g b a])



  (->> color-names-2
    (map (fn [[n hex]]
           [n
            (-> hex color/hex->rgba color/rgba-map->js-function)
            (-> hex color/hex->rgba color/rgba-map->rgba-vector)
            (-> hex color/hex->rgba color/rgba-normal
              ((fn [{:keys [r g b a]}] [r g b a])))
            hex]))
    vec)


  (= (make-color-vec :indianred "#CD5C5C")
    (get-color-name html-color-names :indianred))


  (= (make-color-vec :indianred "#CD5C5C" 0.3)
    (get-color-name html-color-names :indianred 0.3))


  ())



(comment
  (shuffle html-color-names)


  ())
