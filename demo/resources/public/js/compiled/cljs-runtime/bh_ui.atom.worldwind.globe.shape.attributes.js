goog.provide('bh_ui.atom.worldwind.globe.shape.attributes');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"bh-ui.atom.worldwind.globe.shape.attributes",null,7,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bh-ui.atom.worldwind.globe.shape.attributes"], null);
}),null)),null,1825654441,null);
bh_ui.atom.worldwind.globe.shape.attributes.shape_attributes = (function bh_ui$atom$worldwind$globe$shape$attributes$shape_attributes(p__59556){
var map__59557 = p__59556;
var map__59557__$1 = cljs.core.__destructure_map(map__59557);
var fill_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59557__$1,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903));
var outline_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59557__$1,new cljs.core.Keyword(null,"outline-color","outline-color",-804747875));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59557__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var attributes = (new shadow.js.shim.module$worldwindjs.ShapeAttributes());
(attributes.interiorColor = bh_ui.atom.worldwind.globe.color.color.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = fill_color;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return bh_ui.atom.worldwind.globe.color.default_fill_color;
}
})()));

(attributes.outlineColor = bh_ui.atom.worldwind.globe.color.color.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = outline_color;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return bh_ui.atom.worldwind.globe.color.default_outline_color;
}
})()));

(attributes.outlineWidth = (function (){var or__4253__auto__ = width;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return bh_ui.atom.worldwind.globe.color.default_width;
}
})());

return attributes;
});
bh_ui.atom.worldwind.globe.shape.attributes.text_attributes = (function bh_ui$atom$worldwind$globe$shape$attributes$text_attributes(p__59558){
var map__59559 = p__59558;
var map__59559__$1 = cljs.core.__destructure_map(map__59559);
var fill_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59559__$1,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903));
var outline_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59559__$1,new cljs.core.Keyword(null,"outline-color","outline-color",-804747875));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59559__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var attributes = (new shadow.js.shim.module$worldwindjs.TextAttributes());
(attributes.color = bh_ui.atom.worldwind.globe.color.color.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = fill_color;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return bh_ui.atom.worldwind.globe.color.default_fill_color;
}
})()));

(attributes.outlineColor = bh_ui.atom.worldwind.globe.color.color.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = outline_color;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return bh_ui.atom.worldwind.globe.color.default_outline_color;
}
})()));

(attributes.outlineWidth = (function (){var or__4253__auto__ = width;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return bh_ui.atom.worldwind.globe.color.default_width;
}
})());

(attributes.depthTest = false);

return attributes;
});

//# sourceMappingURL=bh_ui.atom.worldwind.globe.shape.attributes.js.map
