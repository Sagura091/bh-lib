goog.provide('ui_component.atom.worldwind.globe.shape');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"ui-component.atom.worldwind.globe.shape",null,8,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ui-component.atom.worldwind.globe.shape"], null);
}),null)),null,1388288845,null);
ui_component.atom.worldwind.globe.shape.wrap_shape = (function ui_component$atom$worldwind$globe$shape$wrap_shape(id,shapes,z){
var layer = (new shadow.js.shim.module$worldwindjs.RenderableLayer());
(layer.displayName = id);

cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59540_SHARP_){
return layer.addRenderable(p1__59540_SHARP_);
}),shapes));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"layer","layer",-1601820589),layer,new cljs.core.Keyword(null,"z","z",-789527183),z], null);
});
if((typeof ui_component !== 'undefined') && (typeof ui_component.atom !== 'undefined') && (typeof ui_component.atom.worldwind !== 'undefined') && (typeof ui_component.atom.worldwind.globe !== 'undefined') && (typeof ui_component.atom.worldwind.globe.shape !== 'undefined') && (typeof ui_component.atom.worldwind.globe.shape.make_shape !== 'undefined')){
} else {
ui_component.atom.worldwind.globe.shape.make_shape = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__59544 = cljs.core.get_global_hierarchy;
return (fexpr__59544.cljs$core$IFn$_invoke$arity$0 ? fexpr__59544.cljs$core$IFn$_invoke$arity$0() : fexpr__59544.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("ui-component.atom.worldwind.globe.shape","make-shape"),(function (p__59548){
var map__59549 = p__59548;
var map__59549__$1 = cljs.core.__destructure_map(map__59549);
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59549__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
return shape;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
ui_component.atom.worldwind.globe.shape.make_shape.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("shape","polygon","shape/polygon",107018784),(function (p__59551){
var map__59552 = p__59551;
var map__59552__$1 = cljs.core.__destructure_map(map__59552);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59552__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var locations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59552__$1,new cljs.core.Keyword(null,"locations","locations",-435476560));
var fill_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59552__$1,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903));
var outline_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59552__$1,new cljs.core.Keyword(null,"outline-color","outline-color",-804747875));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59552__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var z = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59552__$1,new cljs.core.Keyword(null,"z","z",-789527183));
var attributes = ui_component.atom.worldwind.globe.shape.attributes.shape_attributes(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),fill_color,new cljs.core.Keyword(null,"outline-color","outline-color",-804747875),outline_color,new cljs.core.Keyword(null,"width","width",-384071477),width], null));
var locs = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(ui_component.atom.worldwind.globe.location.location,locations));
var polygon = (new shadow.js.shim.module$worldwindjs.SurfacePolygon(locs,attributes));
(polygon.displayName = id);

return ui_component.atom.worldwind.globe.shape.wrap_shape(id,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[polygon],null)),(function (){var or__4253__auto__ = z;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (5);
}
})());
}));
ui_component.atom.worldwind.globe.shape.make_shape.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("shape","circle","shape/circle",1944831915),(function (p__59553){
var map__59554 = p__59553;
var map__59554__$1 = cljs.core.__destructure_map(map__59554);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59554__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var location = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59554__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var fill_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59554__$1,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903));
var outline_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59554__$1,new cljs.core.Keyword(null,"outline-color","outline-color",-804747875));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59554__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59554__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var z = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59554__$1,new cljs.core.Keyword(null,"z","z",-789527183));
var attributes = ui_component.atom.worldwind.globe.shape.attributes.shape_attributes(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),fill_color,new cljs.core.Keyword(null,"outline-color","outline-color",-804747875),outline_color,new cljs.core.Keyword(null,"width","width",-384071477),width], null));
var circle = (new shadow.js.shim.module$worldwindjs.SurfaceCircle(ui_component.atom.worldwind.globe.location.location.cljs$core$IFn$_invoke$arity$1(location),radius,attributes));
(circle.displayName = id);

return ui_component.atom.worldwind.globe.shape.wrap_shape(id,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[circle],null)),(function (){var or__4253__auto__ = z;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (5);
}
})());
}));
ui_component.atom.worldwind.globe.shape.make_shape.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("shape","polyline","shape/polyline",-1907093095),(function (p__59555){
var map__59556 = p__59555;
var map__59556__$1 = cljs.core.__destructure_map(map__59556);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59556__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var locations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59556__$1,new cljs.core.Keyword(null,"locations","locations",-435476560));
var outline_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59556__$1,new cljs.core.Keyword(null,"outline-color","outline-color",-804747875));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59556__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var z = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59556__$1,new cljs.core.Keyword(null,"z","z",-789527183));
var attributes = ui_component.atom.worldwind.globe.shape.attributes.shape_attributes(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"outline-color","outline-color",-804747875),outline_color,new cljs.core.Keyword(null,"width","width",-384071477),width], null));
var locs = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(ui_component.atom.worldwind.globe.location.location,locations));
var polyline = (new shadow.js.shim.module$worldwindjs.SurfacePolyline(locs,attributes));
(polyline.displayName = id);

return ui_component.atom.worldwind.globe.shape.wrap_shape(id,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[polyline],null)),(function (){var or__4253__auto__ = z;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (5);
}
})());
}));
ui_component.atom.worldwind.globe.shape.make_shape.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("shape","label","shape/label",-1779986991),(function (p__59557){
var map__59558 = p__59557;
var map__59558__$1 = cljs.core.__destructure_map(map__59558);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59558__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59558__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var location = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59558__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var fill_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59558__$1,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903));
var outline_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59558__$1,new cljs.core.Keyword(null,"outline-color","outline-color",-804747875));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59558__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var z = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59558__$1,new cljs.core.Keyword(null,"z","z",-789527183));
var label__$1 = (new shadow.js.shim.module$worldwindjs.GeographicText(ui_component.atom.worldwind.globe.location.position.cljs$core$IFn$_invoke$arity$1(location),label));
var attributes = ui_component.atom.worldwind.globe.shape.attributes.text_attributes(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),fill_color,new cljs.core.Keyword(null,"outline-color","outline-color",-804747875),outline_color,new cljs.core.Keyword(null,"width","width",-384071477),width], null));
(label__$1.attributes = attributes);

return ui_component.atom.worldwind.globe.shape.wrap_shape(id,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[label__$1],null)),(function (){var or__4253__auto__ = z;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (10);
}
})());
}));

//# sourceMappingURL=ui_component.atom.worldwind.globe.shape.js.map
