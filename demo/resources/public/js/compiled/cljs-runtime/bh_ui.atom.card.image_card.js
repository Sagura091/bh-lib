goog.provide('bh_ui.atom.card.image_card');
bh_ui.atom.card.image_card.source_code = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card","div.card",-459317104),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"style","style",1143888791,null),new cljs.core.Symbol(null,"default-card-style","default-card-style",1775191352,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-image","div.card-image",1315910447),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure.image","figure.image",-1216510536),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"image-style","image-style",784185349,null),new cljs.core.Symbol(null,"default-image-style","default-image-style",1078068698,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"image","image",1581806431,null),new cljs.core.Symbol(null,"default-image","default-image",-1550801870,null)),new cljs.core.Keyword(null,"alt","alt",-3214426),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"alt-text","alt-text",99697820,null),new cljs.core.Symbol(null,"title","title",-2017930186,null))], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-content","div.card-content",1464214949),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.title.is-4","p.title.is-4",-1910948554),new cljs.core.Symbol(null,"title","title",-2017930186,null)], null),new cljs.core.Symbol(null,"content","content",1656364751,null)], null)], null);
bh_ui.atom.card.image_card.default_background = "#9CA8B3";
bh_ui.atom.card.image_card.default_color = "#FF";
bh_ui.atom.card.image_card.default_card_style = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"height","height",1025178622)],[new cljs.core.Keyword(null,"center","center",-748944368),bh_ui.atom.card.image_card.default_color,"hidden","100%",bh_ui.atom.card.image_card.default_background,new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"column","column",2078222095),"100%"]);
bh_ui.atom.card.image_card.default_image_style = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"75px",new cljs.core.Keyword(null,"height","height",1025178622),"75px",new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),new cljs.core.Keyword(null,"auto","auto",-566279492)], null);
bh_ui.atom.card.image_card.default_image = "imgs/hammer-icon-16x16.png";
bh_ui.atom.card.image_card.card = (function bh_ui$atom$card$image_card$card(var_args){
var args__4870__auto__ = [];
var len__4864__auto___50869 = arguments.length;
var i__4865__auto___50870 = (0);
while(true){
if((i__4865__auto___50870 < len__4864__auto___50869)){
args__4870__auto__.push((arguments[i__4865__auto___50870]));

var G__50871 = (i__4865__auto___50870 + (1));
i__4865__auto___50870 = G__50871;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return bh_ui.atom.card.image_card.card.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(bh_ui.atom.card.image_card.card.cljs$core$IFn$_invoke$arity$variadic = (function (p__50863){
var map__50864 = p__50863;
var map__50864__$1 = cljs.core.__destructure_map(map__50864);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50864__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50864__$1,new cljs.core.Keyword(null,"title","title",636505583));
var image = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50864__$1,new cljs.core.Keyword(null,"image","image",-58725096));
var image_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50864__$1,new cljs.core.Keyword(null,"image-style","image-style",-856346178));
var alt_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50864__$1,new cljs.core.Keyword(null,"alt-text","alt-text",-1540833707));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50864__$1,new cljs.core.Keyword(null,"content","content",15833224));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card","div.card",-459317104),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),(function (){var or__4253__auto__ = style;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return bh_ui.atom.card.image_card.default_card_style;
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-image","div.card-image",1315910447),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"10px"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure.image","figure.image",-1216510536),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),(function (){var or__4253__auto__ = image_style;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return bh_ui.atom.card.image_card.default_image_style;
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),(function (){var or__4253__auto__ = image;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return bh_ui.atom.card.image_card.default_image;
}
})(),new cljs.core.Keyword(null,"alt","alt",-3214426),(function (){var or__4253__auto__ = alt_text;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return title;
}
})()], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-content","div.card-content",1464214949),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.title.is-4","p.title.is-4",-1910948554),title], null),content], null)], null);
}));

(bh_ui.atom.card.image_card.card.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bh_ui.atom.card.image_card.card.cljs$lang$applyTo = (function (seq50862){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50862));
}));


//# sourceMappingURL=bh_ui.atom.card.image_card.js.map
