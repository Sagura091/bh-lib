goog.provide('bh_ui.atom.worldwind.globe.layer.controls');
bh_ui.atom.worldwind.globe.layer.controls.last_this = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
bh_ui.atom.worldwind.globe.layer.controls.controls = (function bh_ui$atom$worldwind$globe$layer$controls$controls(this$,layer_name){
cljs.core.reset_BANG_(bh_ui.atom.worldwind.globe.layer.controls.last_this,this$);

var layer = (new shadow.js.shim.module$worldwindjs.ViewControlsLayer(this$.wwd));
(layer.displayName = layer_name);

return layer;
});

//# sourceMappingURL=bh_ui.atom.worldwind.globe.layer.controls.js.map
