goog.provide('bh_ui.atom.worldwind.globe.image');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"bh-ui.atom.worldwind.globe.image",null,9,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bh-ui.atom.worldwind.globe.image"], null);
}),null)),null,-1404204373,null);
bh_ui.atom.worldwind.globe.shape.make_shape.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("shape","image","shape/image",-487971145),(function (p__59581){
var map__59582 = p__59581;
var map__59582__$1 = cljs.core.__destructure_map(map__59582);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59582__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59582__$1,new cljs.core.Keyword(null,"url","url",276297046));
var bounding_box = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59582__$1,new cljs.core.Keyword(null,"bounding-box","bounding-box",201336205));
var locations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59582__$1,new cljs.core.Keyword(null,"locations","locations",-435476560));
var z = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59582__$1,new cljs.core.Keyword(null,"z","z",-789527183));
if(((cljs.core.seq(locations)) && (cljs.core.not(cljs.core.seq(bounding_box))))){
var bounding_box__$1 = bh_ui.utils.bounding_box.locations__GT_bounding_box(locations);
var surfaceImage = (new shadow.js.shim.module$worldwindjs.SurfaceImage(bh_ui.atom.worldwind.globe.sector.sector.cljs$core$IFn$_invoke$arity$1(bounding_box__$1),url));
(surfaceImage.resamplingMode = shadow.js.shim.module$worldwindjs.FILTER_NEAREST);

return bh_ui.atom.worldwind.globe.shape.wrap_shape(id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [surfaceImage], null),(function (){var or__4253__auto__ = z;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (10);
}
})());
} else {
if(((cljs.core.not(cljs.core.seq(locations))) && (cljs.core.seq(bounding_box)))){
var surfaceImage = (new shadow.js.shim.module$worldwindjs.SurfaceImage(bh_ui.atom.worldwind.globe.sector.sector.cljs$core$IFn$_invoke$arity$1(bounding_box),url));
(surfaceImage.resamplingMode = shadow.js.shim.module$worldwindjs.FILTER_NEAREST);

return bh_ui.atom.worldwind.globe.shape.wrap_shape(id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [surfaceImage], null),(function (){var or__4253__auto__ = z;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (10);
}
})());
} else {
if(cljs.core.seq(bounding_box)){
var surfaceImage = (new shadow.js.shim.module$worldwindjs.SurfaceImage(bh_ui.atom.worldwind.globe.sector.sector.cljs$core$IFn$_invoke$arity$1(bounding_box),url));
(surfaceImage.resamplingMode = shadow.js.shim.module$worldwindjs.FILTER_NEAREST);

return bh_ui.atom.worldwind.globe.shape.wrap_shape(id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [surfaceImage], null),(function (){var or__4253__auto__ = z;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (10);
}
})());
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),":shape/image is missing both :bounding-box AND :locations parameters"], null);

}
}
}
}));

//# sourceMappingURL=bh_ui.atom.worldwind.globe.image.js.map
