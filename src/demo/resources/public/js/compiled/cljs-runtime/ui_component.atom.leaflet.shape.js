goog.provide('ui_component.atom.leaflet.shape');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"ui-component.atom.leaflet.shape",null,9,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ui-component.atom.leaflet.shape"], null);
}),null)),null,1503208699,null);
if((typeof ui_component !== 'undefined') && (typeof ui_component.atom !== 'undefined') && (typeof ui_component.atom.leaflet !== 'undefined') && (typeof ui_component.atom.leaflet.shape !== 'undefined') && (typeof ui_component.atom.leaflet.shape.make_shape !== 'undefined')){
} else {
ui_component.atom.leaflet.shape.make_shape = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__59422 = cljs.core.get_global_hierarchy;
return (fexpr__59422.cljs$core$IFn$_invoke$arity$0 ? fexpr__59422.cljs$core$IFn$_invoke$arity$0() : fexpr__59422.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("ui-component.atom.leaflet.shape","make-shape"),(function (p__59423){
var map__59424 = p__59423;
var map__59424__$1 = cljs.core.__destructure_map(map__59424);
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59424__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
return shape;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
ui_component.atom.leaflet.shape.make_shape.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("shape","polygon","shape/polygon",107018784),(function (p__59425){
var map__59426 = p__59425;
var map__59426__$1 = cljs.core.__destructure_map(map__59426);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59426__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var locations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59426__$1,new cljs.core.Keyword(null,"locations","locations",-435476560));
var fill_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59426__$1,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903));
var outline_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59426__$1,new cljs.core.Keyword(null,"outline-color","outline-color",-804747875));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59426__$1,new cljs.core.Keyword(null,"width","width",-384071477));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_leaflet.Polygon,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathOptions","pathOptions",-2098255182),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),ui_component.utils.color.rgba__GT_hex.cljs$core$IFn$_invoke$arity$1(ui_component.utils.color.normal__GT_rgba.cljs$core$IFn$_invoke$arity$1(outline_color)),new cljs.core.Keyword(null,"weight","weight",-1262796205),width,new cljs.core.Keyword(null,"fillColor","fillColor",-176906116),ui_component.utils.color.rgba__GT_hex.cljs$core$IFn$_invoke$arity$1(ui_component.utils.color.normal__GT_rgba.cljs$core$IFn$_invoke$arity$1(fill_color))], null),new cljs.core.Keyword(null,"positions","positions",-1380538434),locations], null)], null);
}));
ui_component.atom.leaflet.shape.make_shape.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("shape","polyline","shape/polyline",-1907093095),(function (p__59427){
var map__59428 = p__59427;
var map__59428__$1 = cljs.core.__destructure_map(map__59428);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59428__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var locations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59428__$1,new cljs.core.Keyword(null,"locations","locations",-435476560));
var outline_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59428__$1,new cljs.core.Keyword(null,"outline-color","outline-color",-804747875));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59428__$1,new cljs.core.Keyword(null,"width","width",-384071477));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_leaflet.Polyline,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathOptions","pathOptions",-2098255182),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),ui_component.utils.color.rgba__GT_hex.cljs$core$IFn$_invoke$arity$1(ui_component.utils.color.normal__GT_rgba.cljs$core$IFn$_invoke$arity$1(outline_color)),new cljs.core.Keyword(null,"weight","weight",-1262796205),width], null),new cljs.core.Keyword(null,"positions","positions",-1380538434),locations], null)], null);
}));
ui_component.atom.leaflet.shape.make_shape.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("shape","circle","shape/circle",1944831915),(function (p__59429){
var map__59430 = p__59429;
var map__59430__$1 = cljs.core.__destructure_map(map__59430);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59430__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var location = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59430__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59430__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var fill_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59430__$1,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903));
var outline_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59430__$1,new cljs.core.Keyword(null,"outline-color","outline-color",-804747875));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59430__$1,new cljs.core.Keyword(null,"width","width",-384071477));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_leaflet.Circle,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pathOptions","pathOptions",-2098255182),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),ui_component.utils.color.rgba__GT_hex.cljs$core$IFn$_invoke$arity$1(ui_component.utils.color.normal__GT_rgba.cljs$core$IFn$_invoke$arity$1(outline_color)),new cljs.core.Keyword(null,"fillColor","fillColor",-176906116),ui_component.utils.color.rgba__GT_hex.cljs$core$IFn$_invoke$arity$1(ui_component.utils.color.normal__GT_rgba.cljs$core$IFn$_invoke$arity$1(fill_color)),new cljs.core.Keyword(null,"weight","weight",-1262796205),width], null),new cljs.core.Keyword(null,"radius","radius",-2073122258),radius,new cljs.core.Keyword(null,"center","center",-748944368),location], null)], null);
}));
ui_component.atom.leaflet.shape.make_shape.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("shape","image","shape/image",-487971145),(function (p__59431){
var map__59432 = p__59431;
var map__59432__$1 = cljs.core.__destructure_map(map__59432);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59432__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var locations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59432__$1,new cljs.core.Keyword(null,"locations","locations",-435476560));
var bounding_box = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59432__$1,new cljs.core.Keyword(null,"bounding-box","bounding-box",201336205));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59432__$1,new cljs.core.Keyword(null,"url","url",276297046));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_leaflet.ImageOverlay,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),((cljs.core.seq(locations))?locations:((cljs.core.seq(bounding_box))?ui_component.utils.bounding_box.bounding_box__GT_locations(bounding_box):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),":shape/image is missing both :bounding-box AND :locations parameters"], null)
)),new cljs.core.Keyword(null,"url","url",276297046),url], null)], null);
}));
ui_component.atom.leaflet.shape.make_shape.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("shape","label","shape/label",-1779986991),(function (p__59433){
var map__59434 = p__59433;
var map__59434__$1 = cljs.core.__destructure_map(map__59434);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59434__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var location = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59434__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59434__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_leaflet.Marker,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),location], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_leaflet.Popup,label], null)], null);
}));
ui_component.atom.leaflet.shape.make_shape.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);
}));

//# sourceMappingURL=ui_component.atom.leaflet.shape.js.map
