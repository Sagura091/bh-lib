goog.provide('ui_component.utils.bounding_box');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"ui-component.utils.bounding-box",null,5,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ui-component.utils.bounding-box"], null);
}),null)),null,1414013322,null);
ui_component.utils.bounding_box.make_bounding_box = (function ui_component$utils$bounding_box$make_bounding_box(lat,lon,delta){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(lat - delta),(lat + delta),(lon - delta),(lon + delta)], null);
});
ui_component.utils.bounding_box.locations__GT_bounding_box = (function ui_component$utils$bounding_box$locations__GT_bounding_box(locations){
var latitudes = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,locations);
var longitudes = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,locations);
var minLat = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,latitudes);
var maxLat = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,latitudes);
var minLon = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,longitudes);
var maxLon = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,longitudes);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minLat,maxLat,minLon,maxLon], null);
});
ui_component.utils.bounding_box.bounding_box__GT_locations = (function ui_component$utils$bounding_box$bounding_box__GT_locations(p__59354){
var vec__59355 = p__59354;
var minLat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59355,(0),null);
var maxLat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59355,(1),null);
var minLon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59355,(2),null);
var maxLon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59355,(3),null);
var bounding_box = vec__59355;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minLat,maxLon], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxLat,maxLon], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxLat,minLon], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minLat,minLon], null)], null);
});

//# sourceMappingURL=ui_component.utils.bounding_box.js.map
