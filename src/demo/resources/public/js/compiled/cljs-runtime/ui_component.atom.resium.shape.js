goog.provide('ui_component.atom.resium.shape');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"ui-component.atom.resium.shape",null,8,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ui-component.atom.resium.shape"], null);
}),null)),null,-261263046,null);
/**
 * Cesium/Resium locations are [lon lat] while Worldwind locations are [lat lon], so we need this
 *   function to do the conversion (easier to go in this direction)
 *   
 */
ui_component.atom.resium.shape.correct_locations = (function ui_component$atom$resium$shape$correct_locations(locations){
return cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__59358){
var vec__59359 = p__59358;
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59359,(0),null);
var lon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59359,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lon,lat], null);
}),locations));
});
ui_component.atom.resium.shape.correct_location = (function ui_component$atom$resium$shape$correct_location(p__59362){
var vec__59363 = p__59362;
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59363,(0),null);
var lon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59363,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lon,lat], null);
});
ui_component.atom.resium.shape.cartesian3 = (function ui_component$atom$resium$shape$cartesian3(var_args){
var G__59367 = arguments.length;
switch (G__59367) {
case 1:
return ui_component.atom.resium.shape.cartesian3.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return ui_component.atom.resium.shape.cartesian3.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(ui_component.atom.resium.shape.cartesian3.cljs$core$IFn$_invoke$arity$1 = (function (p__59368){
var vec__59369 = p__59368;
var lon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59369,(0),null);
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59369,(1),null);
return shadow.js.shim.module$cesium.Cartesian3.fromDegrees(lon,lat);
}));

(ui_component.atom.resium.shape.cartesian3.cljs$core$IFn$_invoke$arity$2 = (function (lon,lat){
return shadow.js.shim.module$cesium.Cartesian3.fromDegrees(lon,lat);
}));

(ui_component.atom.resium.shape.cartesian3.cljs$lang$maxFixedArity = 2);

if((typeof ui_component !== 'undefined') && (typeof ui_component.atom !== 'undefined') && (typeof ui_component.atom.resium !== 'undefined') && (typeof ui_component.atom.resium.shape !== 'undefined') && (typeof ui_component.atom.resium.shape.make_shape !== 'undefined')){
} else {
ui_component.atom.resium.shape.make_shape = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__59372 = cljs.core.get_global_hierarchy;
return (fexpr__59372.cljs$core$IFn$_invoke$arity$0 ? fexpr__59372.cljs$core$IFn$_invoke$arity$0() : fexpr__59372.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("ui-component.atom.resium.shape","make-shape"),(function (p__59373){
var map__59374 = p__59373;
var map__59374__$1 = cljs.core.__destructure_map(map__59374);
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59374__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
return shape;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
ui_component.atom.resium.shape.make_shape.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("shape","polygon","shape/polygon",107018784),(function (p__59375){
var map__59376 = p__59375;
var map__59376__$1 = cljs.core.__destructure_map(map__59376);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59376__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var locations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59376__$1,new cljs.core.Keyword(null,"locations","locations",-435476560));
var fill_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59376__$1,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903));
var outline_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59376__$1,new cljs.core.Keyword(null,"outline-color","outline-color",-804747875));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59376__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var vec__59377 = fill_color;
var f_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59377,(0),null);
var f_g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59377,(1),null);
var f_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59377,(2),null);
var f_a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59377,(3),null);
var vec__59380 = outline_color;
var o_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59380,(0),null);
var o_g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59380,(1),null);
var o_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59380,(2),null);
var o_a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59380,(3),null);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$resium.Entity,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$resium.PolygonGraphics,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),shadow.js.shim.module$cesium.Cartesian3.fromDegreesArray(cljs.core.clj__GT_js(ui_component.atom.resium.shape.correct_locations(locations))),new cljs.core.Keyword(null,"outlineColor","outlineColor",-619169339),(new shadow.js.shim.module$cesium.Color(o_r,o_g,o_b,o_a)),new cljs.core.Keyword(null,"outlineWidth","outlineWidth",-1300824866),width,new cljs.core.Keyword(null,"outline","outline",793464534),true,new cljs.core.Keyword(null,"material","material",460118677),(new shadow.js.shim.module$cesium.Color(f_r,f_g,f_b,f_a))], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
}));
ui_component.atom.resium.shape.make_shape.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("shape","image","shape/image",-487971145),(function (p__59383){
var map__59384 = p__59383;
var map__59384__$1 = cljs.core.__destructure_map(map__59384);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59384__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var bounding_box = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59384__$1,new cljs.core.Keyword(null,"bounding-box","bounding-box",201336205));
var locations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59384__$1,new cljs.core.Keyword(null,"locations","locations",-435476560));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59384__$1,new cljs.core.Keyword(null,"url","url",276297046));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$resium.Entity,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$resium.PolygonGraphics,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),shadow.js.shim.module$cesium.Cartesian3.fromDegreesArray(cljs.core.clj__GT_js(ui_component.atom.resium.shape.correct_locations(((cljs.core.seq(locations))?locations:((cljs.core.seq(bounding_box))?ui_component.utils.bounding_box.bounding_box__GT_locations(bounding_box):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),":shape/image is missing both :bounding-box AND :locations parameters"], null)
))))),new cljs.core.Keyword(null,"material","material",460118677),(new shadow.js.shim.module$cesium.ImageMaterialProperty(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"image","image",-58725096),url], null))))], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
}));
ui_component.atom.resium.shape.make_shape.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("shape","polyline","shape/polyline",-1907093095),(function (p__59385){
var map__59386 = p__59385;
var map__59386__$1 = cljs.core.__destructure_map(map__59386);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59386__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var locations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59386__$1,new cljs.core.Keyword(null,"locations","locations",-435476560));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59386__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var outline_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59386__$1,new cljs.core.Keyword(null,"outline-color","outline-color",-804747875));
var vec__59387 = outline_color;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59387,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59387,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59387,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59387,(3),null);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$resium.Entity,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$resium.PolylineGraphics,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"positions","positions",-1380538434),shadow.js.shim.module$cesium.Cartesian3.fromDegreesArray(cljs.core.clj__GT_js(ui_component.atom.resium.shape.correct_locations(locations))),new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"material","material",460118677),(new shadow.js.shim.module$cesium.Color(r,g,b,a))], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
}));
ui_component.atom.resium.shape.make_shape.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("shape","circle","shape/circle",1944831915),(function (p__59390){
var map__59391 = p__59390;
var map__59391__$1 = cljs.core.__destructure_map(map__59391);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59391__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var location = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59391__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59391__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var fill_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59391__$1,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903));
var outline_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59391__$1,new cljs.core.Keyword(null,"outline-color","outline-color",-804747875));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59391__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59391__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var vec__59392 = fill_color;
var f_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59392,(0),null);
var f_g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59392,(1),null);
var f_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59392,(2),null);
var f_a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59392,(3),null);
var vec__59395 = outline_color;
var o_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59395,(0),null);
var o_g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59395,(1),null);
var o_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59395,(2),null);
var o_a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59395,(3),null);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$resium.Entity,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),ui_component.atom.resium.shape.cartesian3.cljs$core$IFn$_invoke$arity$1(ui_component.atom.resium.shape.correct_location(location))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$resium.EllipseGraphics,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"semiMajorAxis","semiMajorAxis",865311773),radius,new cljs.core.Keyword(null,"semiMinorAxis","semiMinorAxis",-1338155641),radius,new cljs.core.Keyword(null,"material","material",460118677),(new shadow.js.shim.module$cesium.Color(f_r,f_g,f_b,f_a)),new cljs.core.Keyword(null,"outlineColor","outlineColor",-619169339),(new shadow.js.shim.module$cesium.Color(o_r,o_g,o_b,o_a)),new cljs.core.Keyword(null,"outlineWidth","outlineWidth",-1300824866),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"outline","outline",793464534),true], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
}));
ui_component.atom.resium.shape.make_shape.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("shape","label","shape/label",-1779986991),(function (p__59398){
var map__59399 = p__59398;
var map__59399__$1 = cljs.core.__destructure_map(map__59399);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59399__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var location = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59399__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59399__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var font = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59399__$1,new cljs.core.Keyword(null,"font","font",-1506159249));
var fill_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59399__$1,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903));
var outline_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59399__$1,new cljs.core.Keyword(null,"outline-color","outline-color",-804747875));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59399__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var vec__59400 = fill_color;
var f_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59400,(0),null);
var f_g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59400,(1),null);
var f_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59400,(2),null);
var f_a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59400,(3),null);
var vec__59403 = outline_color;
var o_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59403,(0),null);
var o_g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59403,(1),null);
var o_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59403,(2),null);
var o_a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59403,(3),null);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$resium.Entity,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),ui_component.atom.resium.shape.cartesian3.cljs$core$IFn$_invoke$arity$1(ui_component.atom.resium.shape.correct_location(location))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$resium.LabelGraphics,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"text","text",-1790561697),label,new cljs.core.Keyword(null,"font","font",-1506159249),(function (){var or__4253__auto__ = font;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "24px Helvetica";
}
})(),new cljs.core.Keyword(null,"fillColor","fillColor",-176906116),(new shadow.js.shim.module$cesium.Color(f_r,f_g,f_b,f_a)),new cljs.core.Keyword(null,"outlineColor","outlineColor",-619169339),(new shadow.js.shim.module$cesium.Color(o_r,o_g,o_b,o_a)),new cljs.core.Keyword(null,"outlineWidth","outlineWidth",-1300824866),width,new cljs.core.Keyword(null,"show","show",-576705889),true], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
}));
ui_component.atom.resium.shape.make_shape.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$resium.Entity], null);
}));

//# sourceMappingURL=ui_component.atom.resium.shape.js.map
