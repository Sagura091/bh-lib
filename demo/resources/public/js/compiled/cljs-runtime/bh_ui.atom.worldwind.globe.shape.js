goog.provide('bh_ui.atom.worldwind.globe.shape');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"bh-ui.atom.worldwind.globe.shape",null,8,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bh-ui.atom.worldwind.globe.shape"], null);
}),null)),null,-176280576,null);
bh_ui.atom.worldwind.globe.shape.wrap_shape = (function bh_ui$atom$worldwind$globe$shape$wrap_shape(id,shapes,z){
var layer = (new shadow.js.shim.module$worldwindjs.RenderableLayer());
(layer.displayName = id);

cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59560_SHARP_){
return layer.addRenderable(p1__59560_SHARP_);
}),shapes));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"layer","layer",-1601820589),layer,new cljs.core.Keyword(null,"z","z",-789527183),z], null);
});
if((typeof bh_ui !== 'undefined') && (typeof bh_ui.atom !== 'undefined') && (typeof bh_ui.atom.worldwind !== 'undefined') && (typeof bh_ui.atom.worldwind.globe !== 'undefined') && (typeof bh_ui.atom.worldwind.globe.shape !== 'undefined') && (typeof bh_ui.atom.worldwind.globe.shape.make_shape !== 'undefined')){
} else {
bh_ui.atom.worldwind.globe.shape.make_shape = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__59568 = cljs.core.get_global_hierarchy;
return (fexpr__59568.cljs$core$IFn$_invoke$arity$0 ? fexpr__59568.cljs$core$IFn$_invoke$arity$0() : fexpr__59568.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("bh-ui.atom.worldwind.globe.shape","make-shape"),(function (p__59569){
var map__59570 = p__59569;
var map__59570__$1 = cljs.core.__destructure_map(map__59570);
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59570__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
return shape;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
bh_ui.atom.worldwind.globe.shape.make_shape.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("shape","polygon","shape/polygon",107018784),(function (p__59571){
var map__59572 = p__59571;
var map__59572__$1 = cljs.core.__destructure_map(map__59572);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59572__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var locations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59572__$1,new cljs.core.Keyword(null,"locations","locations",-435476560));
var fill_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59572__$1,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903));
var outline_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59572__$1,new cljs.core.Keyword(null,"outline-color","outline-color",-804747875));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59572__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var z = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59572__$1,new cljs.core.Keyword(null,"z","z",-789527183));
var attributes = bh_ui.atom.worldwind.globe.shape.attributes.shape_attributes(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),fill_color,new cljs.core.Keyword(null,"outline-color","outline-color",-804747875),outline_color,new cljs.core.Keyword(null,"width","width",-384071477),width], null));
var locs = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(bh_ui.atom.worldwind.globe.location.location,locations));
var polygon = (new shadow.js.shim.module$worldwindjs.SurfacePolygon(locs,attributes));
(polygon.displayName = id);

return bh_ui.atom.worldwind.globe.shape.wrap_shape(id,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[polygon],null)),(function (){var or__4253__auto__ = z;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (5);
}
})());
}));
bh_ui.atom.worldwind.globe.shape.make_shape.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("shape","circle","shape/circle",1944831915),(function (p__59573){
var map__59574 = p__59573;
var map__59574__$1 = cljs.core.__destructure_map(map__59574);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59574__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var location = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59574__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var fill_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59574__$1,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903));
var outline_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59574__$1,new cljs.core.Keyword(null,"outline-color","outline-color",-804747875));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59574__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59574__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var z = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59574__$1,new cljs.core.Keyword(null,"z","z",-789527183));
var attributes = bh_ui.atom.worldwind.globe.shape.attributes.shape_attributes(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),fill_color,new cljs.core.Keyword(null,"outline-color","outline-color",-804747875),outline_color,new cljs.core.Keyword(null,"width","width",-384071477),width], null));
var circle = (new shadow.js.shim.module$worldwindjs.SurfaceCircle(bh_ui.atom.worldwind.globe.location.location.cljs$core$IFn$_invoke$arity$1(location),radius,attributes));
(circle.displayName = id);

return bh_ui.atom.worldwind.globe.shape.wrap_shape(id,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[circle],null)),(function (){var or__4253__auto__ = z;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (5);
}
})());
}));
bh_ui.atom.worldwind.globe.shape.make_shape.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("shape","polyline","shape/polyline",-1907093095),(function (p__59575){
var map__59576 = p__59575;
var map__59576__$1 = cljs.core.__destructure_map(map__59576);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59576__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var locations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59576__$1,new cljs.core.Keyword(null,"locations","locations",-435476560));
var outline_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59576__$1,new cljs.core.Keyword(null,"outline-color","outline-color",-804747875));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59576__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var z = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59576__$1,new cljs.core.Keyword(null,"z","z",-789527183));
var attributes = bh_ui.atom.worldwind.globe.shape.attributes.shape_attributes(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"outline-color","outline-color",-804747875),outline_color,new cljs.core.Keyword(null,"width","width",-384071477),width], null));
var locs = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(bh_ui.atom.worldwind.globe.location.location,locations));
var polyline = (new shadow.js.shim.module$worldwindjs.SurfacePolyline(locs,attributes));
(polyline.displayName = id);

return bh_ui.atom.worldwind.globe.shape.wrap_shape(id,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[polyline],null)),(function (){var or__4253__auto__ = z;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (5);
}
})());
}));
bh_ui.atom.worldwind.globe.shape.make_shape.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("shape","label","shape/label",-1779986991),(function (p__59577){
var map__59578 = p__59577;
var map__59578__$1 = cljs.core.__destructure_map(map__59578);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59578__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59578__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var location = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59578__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var fill_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59578__$1,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903));
var outline_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59578__$1,new cljs.core.Keyword(null,"outline-color","outline-color",-804747875));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59578__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var z = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59578__$1,new cljs.core.Keyword(null,"z","z",-789527183));
var label__$1 = (new shadow.js.shim.module$worldwindjs.GeographicText(bh_ui.atom.worldwind.globe.location.position.cljs$core$IFn$_invoke$arity$1(location),label));
var attributes = bh_ui.atom.worldwind.globe.shape.attributes.text_attributes(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),fill_color,new cljs.core.Keyword(null,"outline-color","outline-color",-804747875),outline_color,new cljs.core.Keyword(null,"width","width",-384071477),width], null));
(label__$1.attributes = attributes);

return bh_ui.atom.worldwind.globe.shape.wrap_shape(id,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[label__$1],null)),(function (){var or__4253__auto__ = z;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (10);
}
})());
}));

//# sourceMappingURL=bh_ui.atom.worldwind.globe.shape.js.map
