goog.provide('bh_ui.atom.worldwind.globe.geo_tiff');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"bh-ui.atom.worldwind.globe.geo-tiff",null,7,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bh-ui.atom.worldwind.globe.geo-tiff"], null);
}),null)),null,-571928605,null);
bh_ui.atom.worldwind.globe.geo_tiff.last_geoTiffReader = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
bh_ui.atom.worldwind.globe.geo_tiff.last_xhrStatus = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
bh_ui.atom.worldwind.globe.shape.make_shape.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("shape","geo-tiff","shape/geo-tiff",1222055907),(function (p__59583){
var map__59584 = p__59583;
var map__59584__$1 = cljs.core.__destructure_map(map__59584);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59584__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59584__$1,new cljs.core.Keyword(null,"url","url",276297046));
var z = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59584__$1,new cljs.core.Keyword(null,"z","z",-789527183));
var layer = (new shadow.js.shim.module$worldwindjs.RenderableLayer());
(layer.displayName = id);

(layer.showSpinner = true);

shadow.js.shim.module$worldwindjs.GeoTiffReader.retrieveFromUrl(url,(function (geoTiffReader,xhrStatus){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"bh-ui.atom.worldwind.globe.geo-tiff",null,22,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["make-shape call-back",geoTiffReader.isGeoTiff()], null);
}),null)),null,827090512,null);

cljs.core.reset_BANG_(bh_ui.atom.worldwind.globe.geo_tiff.last_geoTiffReader,geoTiffReader);

var surfaceTiff = (new shadow.js.shim.module$worldwindjs.SurfaceImage(geoTiffReader.metadata.bbox,(new shadow.js.shim.module$worldwindjs.ImageSource(geoTiffReader.getImage()))));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"bh-ui.atom.worldwind.globe.geo-tiff",null,30,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["make-shape surfaceTiff",surfaceTiff], null);
}),null)),null,95903828,null);

layer.addRenderable(surfaceTiff);

return (layer.showSpinner = false);
}));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"layer","layer",-1601820589),layer,new cljs.core.Keyword(null,"z","z",-789527183),(function (){var or__4253__auto__ = z;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (10);
}
})()], null);
}));

//# sourceMappingURL=bh_ui.atom.worldwind.globe.geo_tiff.js.map
