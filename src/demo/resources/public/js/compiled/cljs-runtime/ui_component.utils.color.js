goog.provide('ui_component.utils.color');
ui_component.utils.color.default_stroke_fill_colors = new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#8884d8","#ffc107","#82ca9d","#ff00ff","#00e5ff","#4db6ac","#83a6ed","#8dd1e1","#a4de6c","#ffff00","#ff0000","#00ff00","#0000ff","#009999","#d7e62b"], null);
ui_component.utils.color.get_color = (function ui_component$utils$color$get_color(idx){
var i = cljs.core.mod(idx,cljs.core.count(ui_component.utils.color.default_stroke_fill_colors));
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(ui_component.utils.color.default_stroke_fill_colors,i);
});
/**
 * convert a color in hexadecimal (string) into a hash-map of RGBA
 * 
 *   ---
 * 
 *   - hex-color : (string) hex encoded color, such as "#ff0000" (red) or "#00CED1" (dark turquoise)
 * 
 *   returns hash-map containing:
 * 
 *   | key  | type    | range   | description    |
 *   |:-----|:-------:|:-------:|:---------------|
 *   | `:r` | integer | 0-255   | red value      |
 *   | `:g` | integer | 0-255   | green value    |
 *   | `:b` | integer | 0-255   | blue value     |
 *   | `:a` | float   | 1.0     | alpha channel value, always returned as 1.0 |
 *   
 */
ui_component.utils.color.hex__GT_rgba = (function ui_component$utils$color$hex__GT_rgba(hex_color){
var stripped = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.rest(hex_color));
var vec__50929 = cljs.core.re_seq(/\w\w/,stripped);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50929,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50929,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50929,(2),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),parseInt(r,(16)),new cljs.core.Keyword(null,"g","g",1738089905),parseInt(g,(16)),new cljs.core.Keyword(null,"b","b",1482224470),parseInt(b,(16)),new cljs.core.Keyword(null,"a","a",-2123407586),1.0], null);
});
/**
 * convert a color hash-map of RGBA to a hash-map where the values are
 *   in the range of 0.0 - 1.0
 * 
 *   ---
 * 
 *   - hex-color : (string) hex encoded color, such as "#ff0000" (red) or "#00CED1" (dark turquoise)
 * 
 *   returns hash-map containing:
 * 
 *   | key  | type    | range   | description    |
 *   |:-----|:-------:|:-------:|:---------------|
 *   | `:r` | float   | 0.0-1.0 | red value      |
 *   | `:g` | float   | 0.0-1.0 | green value    |
 *   | `:b` | float   | 0.0-1.0 | blue value     |
 *   | `:a` | float   | 1.0     | alpha channel value, always returned as 1.0 |
 *   
 */
ui_component.utils.color.rgba_normal = (function ui_component$utils$color$rgba_normal(p__50932){
var map__50933 = p__50932;
var map__50933__$1 = cljs.core.__destructure_map(map__50933);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50933__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var g = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50933__$1,new cljs.core.Keyword(null,"g","g",1738089905));
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50933__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50933__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),(r / (255)),new cljs.core.Keyword(null,"g","g",1738089905),(g / (255)),new cljs.core.Keyword(null,"b","b",1482224470),(b / (255)),new cljs.core.Keyword(null,"a","a",-2123407586),a], null);
});
/**
 * convert a color hash-map of RGBA (0-1.0) to a hash-map where the values are
 *   in the range of 0 255
 * 
 *   ---
 * 
 *   - color : (string) float encoded color
 * 
 *   returns hash-map containing:
 * 
 *   | key  | type    | range   | description    |
 *   |:-----|:-------:|:-------:|:---------------|
 *   | `:r` | float   | 0.0-1.0 | red value      |
 *   | `:g` | float   | 0.0-1.0 | green value    |
 *   | `:b` | float   | 0.0-1.0 | blue value     |
 *   | `:a` | float   | 1.0     | alpha channel value, always returned as 1.0 |
 *   
 */
ui_component.utils.color.normal_map__GT_rgba = (function ui_component$utils$color$normal_map__GT_rgba(p__50934){
var map__50935 = p__50934;
var map__50935__$1 = cljs.core.__destructure_map(map__50935);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50935__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var g = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50935__$1,new cljs.core.Keyword(null,"g","g",1738089905));
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50935__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50935__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),(r * (255)),new cljs.core.Keyword(null,"g","g",1738089905),(g * (255)),new cljs.core.Keyword(null,"b","b",1482224470),(b * (255)),new cljs.core.Keyword(null,"a","a",-2123407586),a], null);
});
ui_component.utils.color.normal__GT_rgba = (function ui_component$utils$color$normal__GT_rgba(var_args){
var G__50937 = arguments.length;
switch (G__50937) {
case 4:
return ui_component.utils.color.normal__GT_rgba.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 1:
return ui_component.utils.color.normal__GT_rgba.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(ui_component.utils.color.normal__GT_rgba.cljs$core$IFn$_invoke$arity$4 = (function (r,g,b,a){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),Math.round((r * (255))),new cljs.core.Keyword(null,"g","g",1738089905),Math.round((g * (255))),new cljs.core.Keyword(null,"b","b",1482224470),Math.round((b * (255))),new cljs.core.Keyword(null,"a","a",-2123407586),Math.round((a * (255)))], null);
}));

(ui_component.utils.color.normal__GT_rgba.cljs$core$IFn$_invoke$arity$1 = (function (p__50938){
var vec__50939 = p__50938;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50939,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50939,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50939,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50939,(3),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),Math.round((r * (255))),new cljs.core.Keyword(null,"g","g",1738089905),Math.round((g * (255))),new cljs.core.Keyword(null,"b","b",1482224470),Math.round((b * (255))),new cljs.core.Keyword(null,"a","a",-2123407586),Math.round((a * (255)))], null);
}));

(ui_component.utils.color.normal__GT_rgba.cljs$lang$maxFixedArity = 4);

ui_component.utils.color.rgba_map__GT_rgba_vector = (function ui_component$utils$color$rgba_map__GT_rgba_vector(p__50942){
var map__50943 = p__50942;
var map__50943__$1 = cljs.core.__destructure_map(map__50943);
var rgba_map = map__50943__$1;
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50943__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var g = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50943__$1,new cljs.core.Keyword(null,"g","g",1738089905));
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50943__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50943__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b,a], null);
});
ui_component.utils.color.rgba_map__GT_js_function = (function ui_component$utils$color$rgba_map__GT_js_function(p__50944){
var map__50945 = p__50944;
var map__50945__$1 = cljs.core.__destructure_map(map__50945);
var rgba_map = map__50945__$1;
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50945__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var g = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50945__$1,new cljs.core.Keyword(null,"g","g",1738089905));
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50945__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50945__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
return ["rgba(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(g),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a),")"].join('');
});
/**
 * convert a color hash-map of RGBA into a hexadecimal (string)
 * 
 *   ---
 * 
 *   - rgba-color : (hash-map) containing:
 * 
 *   | key  | type    | range   | description    |
 *   |:-----|:-------:|:-------:|:---------------|
 *   | `:r` | integer | 0-255   | red value      |
 *   | `:g` | integer | 0-255   | green value    |
 *   | `:b` | integer | 0-255   | blue value     |
 *   | `:a` | float   | 1.0     | alpha channel value, always returned as 1.0 |
 * 
 *   returns string containing the encoded color, such as "#ff0000" (red) or "#00CED1" (dark turquoise)
 *   
 */
ui_component.utils.color.rgba__GT_hex = (function ui_component$utils$color$rgba__GT_hex(var_args){
var G__50947 = arguments.length;
switch (G__50947) {
case 1:
return ui_component.utils.color.rgba__GT_hex.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return ui_component.utils.color.rgba__GT_hex.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(ui_component.utils.color.rgba__GT_hex.cljs$core$IFn$_invoke$arity$1 = (function (p__50948){
var map__50949 = p__50948;
var map__50949__$1 = cljs.core.__destructure_map(map__50949);
var rgba_color = map__50949__$1;
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50949__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var g = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50949__$1,new cljs.core.Keyword(null,"g","g",1738089905));
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50949__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var convertFn = (function (x){
var s = (new Number(x)).toString((16));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(s),(1))){
return ["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
} else {
return s;
}
});
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(convertFn(r)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(convertFn(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(convertFn(b))].join('');
}));

(ui_component.utils.color.rgba__GT_hex.cljs$core$IFn$_invoke$arity$4 = (function (r,g,b,_){
var convertFn = (function (x){
var s = (new Number(x)).toString((16));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(s),(1))){
return ["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
} else {
return s;
}
});
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(convertFn(r)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(convertFn(g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(convertFn(b))].join('');
}));

(ui_component.utils.color.rgba__GT_hex.cljs$lang$maxFixedArity = 4);

/**
 * converts a color represented as a ClojureScript hash-map into a format compatible with
 *   Javascript, HTML, and CSS.
 * 
 *   ---
 * 
 *   - hash-color : (hash-map) containing:
 * 
 *   | key  | type    | range   | description    |
 *   |:-----|:-------:|:-------:|:---------------|
 *   | `:r` | integer | 0-255   | red value      |
 *   | `:g` | integer | 0-255   | green value    |
 *   | `:b` | integer | 0-255   | blue value     |
 *   | `:a` | float   | 0-1.0   | alpha channel  |
 * 
 *   returns a Javascript command (string) that various HMTL `:style`s will treat as an rgba color
 *   
 */
ui_component.utils.color.hash__GT_rgba = (function ui_component$utils$color$hash__GT_rgba(p__50950){
var map__50951 = p__50950;
var map__50951__$1 = cljs.core.__destructure_map(map__50951);
var hash_color = map__50951__$1;
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50951__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var g = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50951__$1,new cljs.core.Keyword(null,"g","g",1738089905));
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50951__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50951__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
return ["rgba(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(g),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a),")"].join('');
});
ui_component.utils.color.match_colors_hex = (function ui_component$utils$color$match_colors_hex(hex_color){
var rgba = ui_component.utils.color.hex__GT_rgba(hex_color);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"custom","custom",340151948),ui_component.utils.color.rgba_map__GT_js_function(rgba),ui_component.utils.color.rgba_map__GT_rgba_vector(rgba),ui_component.utils.color.rgba_map__GT_rgba_vector(ui_component.utils.color.rgba_normal(ui_component.utils.color.hex__GT_rgba(hex_color))),hex_color], null);
});
ui_component.utils.color.match_colors_rgba = (function ui_component$utils$color$match_colors_rgba(rgba_color){
var hex = ui_component.utils.color.rgba__GT_hex.cljs$core$IFn$_invoke$arity$1(rgba_color);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"custom","custom",340151948),ui_component.utils.color.rgba_map__GT_js_function(rgba_color),ui_component.utils.color.rgba_map__GT_rgba_vector(rgba_color),ui_component.utils.color.rgba_map__GT_rgba_vector(ui_component.utils.color.rgba_normal(rgba_color)),ui_component.utils.color.rgba__GT_hex.cljs$core$IFn$_invoke$arity$1(rgba_color)], null);
});
/**
 * computes _relative luminance_ per the [W3C](https://www.w3.org/TR/WCAG20/#relativeluminancedef)
 * 
 *   typically, this value is uses to determine the proper color (`:white` or `:black`) to use with a
 *   colored background.
 * 
 *   ---
 *   - color : (hash-map) containing:
 * 
 *   | key  | type    | range   | description    |
 *   |:-----|:-------:|:-------:|:---------------|
 *   | `:r` | integer | 0-255   | red value      |
 *   | `:g` | integer | 0-255   | green value    |
 *   | `:b` | integer | 0-255   | blue value     |
 * 
 *   returns (long) - the relative luminance of the color
 */
ui_component.utils.color.relative_luminance = (function ui_component$utils$color$relative_luminance(p__50957){
var map__50958 = p__50957;
var map__50958__$1 = cljs.core.__destructure_map(map__50958);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50958__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var g = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50958__$1,new cljs.core.Keyword(null,"g","g",1738089905));
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50958__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var normalFn = (function (x){
return (x / (255));
});
var linearizeFn = (function (x){
if((x < 0.03928)){
return (x / 12.92);
} else {
return Math.pow(((x + 0.055) / 1.055),2.4);
}
});
return (((0.2126 * linearizeFn(normalFn(r))) + (0.7152 * linearizeFn(normalFn(g)))) + (0.0722 * linearizeFn(normalFn(b))));
});
/**
 * return `"white"` or `"black"` as the best color for text to be placed 'over'
 *   the given color.
 * 
 *   ---
 * 
 *   - rgba-color : (hash-map) containing:
 * 
 *   | key  | type    | range   | description    |
 *   |:-----|:-------:|:-------:|:---------------|
 *   | `:r` | integer | 0-255   | red value      |
 *   | `:g` | integer | 0-255   | green value    |
 *   | `:b` | integer | 0-255   | blue value     |
 *   | `:a` | float   | 0-1.0   | alpha channel  |
 * 
 *   return `"white"` or `"black"`
 *   
 */
ui_component.utils.color.best_text_color = (function ui_component$utils$color$best_text_color(rgba_color){
if((ui_component.utils.color.relative_luminance(rgba_color) <= 0.1833)){
return "white";
} else {
return "black";
}
});
/**
 * return `"white"` or `"black"` as the best color for text to be placed 'over'
 *   the given color, including it's [alpha channel](https://www.techopedia.com/definition/1945/alpha-channel).
 * 
 *   ---
 * 
 *   - rgba-color : (hash-map) containing:
 * 
 *   | key  | type    | range   | description    |
 *   |:-----|:-------:|:-------:|:---------------|
 *   | `:r` | integer | 0-255   | red value      |
 *   | `:g` | integer | 0-255   | green value    |
 *   | `:b` | integer | 0-255   | blue value     |
 *   | `:a` | float   | 0-1.0   | alpha channel  |
 * 
 *   return `"white"` or `"black"`
 *   
 */
ui_component.utils.color.best_text_color_alpha = (function ui_component$utils$color$best_text_color_alpha(p__50963){
var map__50964 = p__50963;
var map__50964__$1 = cljs.core.__destructure_map(map__50964);
var rgba_color = map__50964__$1;
var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50964__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
if((ui_component.utils.color.relative_luminance(rgba_color) <= 0.1833)){
if((0.25 <= a)){
return "white";
} else {
return "black";
}
} else {
return "black";
}
});

//# sourceMappingURL=ui_component.utils.color.js.map
