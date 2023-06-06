goog.provide('bh_ui.atom.resium.shape');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"bh-ui.atom.resium.shape",null,8,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bh-ui.atom.resium.shape"], null);
}),null)),null,-1518172943,null);
/**
 * Cesium/Resium locations are [lon lat] while Worldwind locations are [lat lon], so we need this
 *   function to do the conversion (easier to go in this direction)
 *   
 */
bh_ui.atom.resium.shape.correct_locations = (function bh_ui$atom$resium$shape$correct_locations(locations){
return cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__59351){
var vec__59352 = p__59351;
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59352,(0),null);
var lon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59352,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lon,lat], null);
}),locations));
});
bh_ui.atom.resium.shape.correct_location = (function bh_ui$atom$resium$shape$correct_location(p__59355){
var vec__59356 = p__59355;
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59356,(0),null);
var lon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59356,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lon,lat], null);
});
bh_ui.atom.resium.shape.cartesian3 = (function bh_ui$atom$resium$shape$cartesian3(var_args){
var G__59360 = arguments.length;
switch (G__59360) {
case 1:
return bh_ui.atom.resium.shape.cartesian3.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bh_ui.atom.resium.shape.cartesian3.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bh_ui.atom.resium.shape.cartesian3.cljs$core$IFn$_invoke$arity$1 = (function (p__59361){
var vec__59362 = p__59361;
var lon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59362,(0),null);
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59362,(1),null);
return shadow.js.shim.module$cesium.Cartesian3.fromDegrees(lon,lat);
}));

(bh_ui.atom.resium.shape.cartesian3.cljs$core$IFn$_invoke$arity$2 = (function (lon,lat){
return shadow.js.shim.module$cesium.Cartesian3.fromDegrees(lon,lat);
}));

(bh_ui.atom.resium.shape.cartesian3.cljs$lang$maxFixedArity = 2);

if((typeof bh_ui !== 'undefined') && (typeof bh_ui.atom !== 'undefined') && (typeof bh_ui.atom.resium !== 'undefined') && (typeof bh_ui.atom.resium.shape !== 'undefined') && (typeof bh_ui.atom.resium.shape.make_shape !== 'undefined')){
} else {
bh_ui.atom.resium.shape.make_shape = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__59365 = cljs.core.get_global_hierarchy;
return (fexpr__59365.cljs$core$IFn$_invoke$arity$0 ? fexpr__59365.cljs$core$IFn$_invoke$arity$0() : fexpr__59365.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("bh-ui.atom.resium.shape","make-shape"),(function (p__59366){
var map__59367 = p__59366;
var map__59367__$1 = cljs.core.__destructure_map(map__59367);
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59367__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
return shape;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
bh_ui.atom.resium.shape.make_shape.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("shape","polygon","shape/polygon",107018784),(function (p__59368){
var map__59369 = p__59368;
var map__59369__$1 = cljs.core.__destructure_map(map__59369);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59369__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var locations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59369__$1,new cljs.core.Keyword(null,"locations","locations",-435476560));
var fill_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59369__$1,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903));
var outline_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59369__$1,new cljs.core.Keyword(null,"outline-color","outline-color",-804747875));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59369__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var vec__59370 = fill_color;
var f_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59370,(0),null);
var f_g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59370,(1),null);
var f_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59370,(2),null);
var f_a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59370,(3),null);
var vec__59373 = outline_color;
var o_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59373,(0),null);
var o_g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59373,(1),null);
var o_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59373,(2),null);
var o_a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59373,(3),null);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$resium.Entity,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$resium.PolygonGraphics,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),shadow.js.shim.module$cesium.Cartesian3.fromDegreesArray(cljs.core.clj__GT_js(bh_ui.atom.resium.shape.correct_locations(locations))),new cljs.core.Keyword(null,"outlineColor","outlineColor",-619169339),(new shadow.js.shim.module$cesium.Color(o_r,o_g,o_b,o_a)),new cljs.core.Keyword(null,"outlineWidth","outlineWidth",-1300824866),width,new cljs.core.Keyword(null,"outline","outline",793464534),true,new cljs.core.Keyword(null,"material","material",460118677),(new shadow.js.shim.module$cesium.Color(f_r,f_g,f_b,f_a))], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
}));
bh_ui.atom.resium.shape.make_shape.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("shape","image","shape/image",-487971145),(function (p__59376){
var map__59377 = p__59376;
var map__59377__$1 = cljs.core.__destructure_map(map__59377);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59377__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var bounding_box = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59377__$1,new cljs.core.Keyword(null,"bounding-box","bounding-box",201336205));
var locations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59377__$1,new cljs.core.Keyword(null,"locations","locations",-435476560));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59377__$1,new cljs.core.Keyword(null,"url","url",276297046));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$resium.Entity,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$resium.PolygonGraphics,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),shadow.js.shim.module$cesium.Cartesian3.fromDegreesArray(cljs.core.clj__GT_js(bh_ui.atom.resium.shape.correct_locations(((cljs.core.seq(locations))?locations:((cljs.core.seq(bounding_box))?bh_ui.utils.bounding_box.bounding_box__GT_locations(bounding_box):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),":shape/image is missing both :bounding-box AND :locations parameters"], null)
))))),new cljs.core.Keyword(null,"material","material",460118677),(new shadow.js.shim.module$cesium.ImageMaterialProperty(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"image","image",-58725096),url], null))))], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
}));
bh_ui.atom.resium.shape.make_shape.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("shape","polyline","shape/polyline",-1907093095),(function (p__59378){
var map__59379 = p__59378;
var map__59379__$1 = cljs.core.__destructure_map(map__59379);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59379__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var locations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59379__$1,new cljs.core.Keyword(null,"locations","locations",-435476560));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59379__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var outline_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59379__$1,new cljs.core.Keyword(null,"outline-color","outline-color",-804747875));
var vec__59380 = outline_color;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59380,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59380,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59380,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59380,(3),null);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$resium.Entity,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$resium.PolylineGraphics,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"positions","positions",-1380538434),shadow.js.shim.module$cesium.Cartesian3.fromDegreesArray(cljs.core.clj__GT_js(bh_ui.atom.resium.shape.correct_locations(locations))),new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"material","material",460118677),(new shadow.js.shim.module$cesium.Color(r,g,b,a))], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
}));
bh_ui.atom.resium.shape.make_shape.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("shape","circle","shape/circle",1944831915),(function (p__59383){
var map__59384 = p__59383;
var map__59384__$1 = cljs.core.__destructure_map(map__59384);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59384__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var location = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59384__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59384__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var fill_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59384__$1,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903));
var outline_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59384__$1,new cljs.core.Keyword(null,"outline-color","outline-color",-804747875));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59384__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59384__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var vec__59385 = fill_color;
var f_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59385,(0),null);
var f_g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59385,(1),null);
var f_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59385,(2),null);
var f_a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59385,(3),null);
var vec__59388 = outline_color;
var o_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59388,(0),null);
var o_g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59388,(1),null);
var o_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59388,(2),null);
var o_a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59388,(3),null);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$resium.Entity,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),bh_ui.atom.resium.shape.cartesian3.cljs$core$IFn$_invoke$arity$1(bh_ui.atom.resium.shape.correct_location(location))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$resium.EllipseGraphics,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"semiMajorAxis","semiMajorAxis",865311773),radius,new cljs.core.Keyword(null,"semiMinorAxis","semiMinorAxis",-1338155641),radius,new cljs.core.Keyword(null,"material","material",460118677),(new shadow.js.shim.module$cesium.Color(f_r,f_g,f_b,f_a)),new cljs.core.Keyword(null,"outlineColor","outlineColor",-619169339),(new shadow.js.shim.module$cesium.Color(o_r,o_g,o_b,o_a)),new cljs.core.Keyword(null,"outlineWidth","outlineWidth",-1300824866),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"outline","outline",793464534),true], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
}));
bh_ui.atom.resium.shape.make_shape.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("shape","label","shape/label",-1779986991),(function (p__59391){
var map__59392 = p__59391;
var map__59392__$1 = cljs.core.__destructure_map(map__59392);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59392__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var location = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59392__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59392__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var font = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59392__$1,new cljs.core.Keyword(null,"font","font",-1506159249));
var fill_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59392__$1,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903));
var outline_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59392__$1,new cljs.core.Keyword(null,"outline-color","outline-color",-804747875));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59392__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var vec__59393 = fill_color;
var f_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59393,(0),null);
var f_g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59393,(1),null);
var f_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59393,(2),null);
var f_a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59393,(3),null);
var vec__59396 = outline_color;
var o_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59396,(0),null);
var o_g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59396,(1),null);
var o_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59396,(2),null);
var o_a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59396,(3),null);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$resium.Entity,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),bh_ui.atom.resium.shape.cartesian3.cljs$core$IFn$_invoke$arity$1(bh_ui.atom.resium.shape.correct_location(location))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$resium.LabelGraphics,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"text","text",-1790561697),label,new cljs.core.Keyword(null,"font","font",-1506159249),(function (){var or__4253__auto__ = font;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "24px Helvetica";
}
})(),new cljs.core.Keyword(null,"fillColor","fillColor",-176906116),(new shadow.js.shim.module$cesium.Color(f_r,f_g,f_b,f_a)),new cljs.core.Keyword(null,"outlineColor","outlineColor",-619169339),(new shadow.js.shim.module$cesium.Color(o_r,o_g,o_b,o_a)),new cljs.core.Keyword(null,"outlineWidth","outlineWidth",-1300824866),width,new cljs.core.Keyword(null,"show","show",-576705889),true], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
}));
bh_ui.atom.resium.shape.make_shape.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$resium.Entity], null);
}));

//# sourceMappingURL=bh_ui.atom.resium.shape.js.map
