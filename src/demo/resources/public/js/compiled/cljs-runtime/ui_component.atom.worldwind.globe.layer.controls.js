goog.provide('ui_component.atom.worldwind.globe.layer.controls');
ui_component.atom.worldwind.globe.layer.controls.last_this = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
ui_component.atom.worldwind.globe.layer.controls.controls = (function ui_component$atom$worldwind$globe$layer$controls$controls(this$,layer_name){
cljs.core.reset_BANG_(ui_component.atom.worldwind.globe.layer.controls.last_this,this$);

var layer = (new shadow.js.shim.module$worldwindjs.ViewControlsLayer(this$.wwd));
(layer.displayName = layer_name);

return layer;
});

//# sourceMappingURL=ui_component.atom.worldwind.globe.layer.controls.js.map
