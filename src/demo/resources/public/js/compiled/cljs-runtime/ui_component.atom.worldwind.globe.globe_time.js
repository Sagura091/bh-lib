goog.provide('ui_component.atom.worldwind.globe.globe_time');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"ui-component.atom.worldwind.globe.globe-time",null,7,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ui-component.atom.worldwind.globe.globe-time"], null);
}),null)),null,-379057123,null);
ui_component.atom.worldwind.globe.globe_time.change_time = (function ui_component$atom$worldwind$globe$globe_time$change_time(this$,globe_id,new_time){
var temp__5751__auto__ = (function (){var or__4253__auto__ = ui_component.atom.worldwind.globe.layer.getLayer(this$,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(globe_id)," Night"].join(''));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return ui_component.atom.worldwind.globe.layer.getLayer(this$,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(globe_id)," Day-only"].join(''));
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var layer = temp__5751__auto__;
(layer.time = new_time);

return this$.wwd.redraw();
} else {
return null;
}
});

//# sourceMappingURL=ui_component.atom.worldwind.globe.globe_time.js.map
