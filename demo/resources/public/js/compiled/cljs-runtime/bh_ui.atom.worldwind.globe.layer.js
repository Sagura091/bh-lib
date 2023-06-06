goog.provide('bh_ui.atom.worldwind.globe.layer');
bh_ui.atom.worldwind.globe.layer.renderable_layer = (function bh_ui$atom$worldwind$globe$layer$renderable_layer(layer_name,children){
var layer = (new shadow.js.shim.module$worldwindjs.RenderableLayer());
(layer.displayName = layer_name);

cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (child){
return layer.addRenderable(child);
}),children));

return layer;
});
bh_ui.atom.worldwind.globe.layer.getLayer = (function bh_ui$atom$worldwind$globe$layer$getLayer(this$,layer_name){
var layer = this$.wwd.layers.filter((function (p1__59588_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__59588_SHARP_.displayName,layer_name);
}));
return cljs.core.first(layer);
});
bh_ui.atom.worldwind.globe.layer.addLayer = (function bh_ui$atom$worldwind$globe$layer$addLayer(this$,idx,layer){
this$.wwd.insertLayer(idx,layer);

this$.wwd.redraw();

return layer;
});
bh_ui.atom.worldwind.globe.layer.removeLayer = (function bh_ui$atom$worldwind$globe$layer$removeLayer(this$,layer_name){
var temp__5751__auto__ = bh_ui.atom.worldwind.globe.layer.getLayer(this$,layer_name);
if(cljs.core.truth_(temp__5751__auto__)){
var layer = temp__5751__auto__;
this$.wwd.removeLayer(layer);

return this$.wwd.redraw();
} else {
return null;
}
});

//# sourceMappingURL=bh_ui.atom.worldwind.globe.layer.js.map
