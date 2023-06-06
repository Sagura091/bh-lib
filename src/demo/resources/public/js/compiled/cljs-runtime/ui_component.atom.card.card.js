goog.provide('ui_component.atom.card.card');
ui_component.atom.card.card.source_code = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card","div.card",-459317104),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"style","style",1143888791,null),new cljs.core.Symbol(null,"default-card-style","default-card-style",1775191352,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-header","div.card-header",1547492121),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-header-title","div.card-header-title",1709257453),new cljs.core.Symbol(null,"title","title",-2017930186,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-content","div.card-content",1464214949),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"content","content",1656364751,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#empty","div#empty",2059645184)], null))], null)], null);
ui_component.atom.card.card.default_background = "#9CA8B3";
ui_component.atom.card.card.default_color = "#FF";
ui_component.atom.card.card.default_card_style = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"margin","margin",-995903681),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"background","background",-863952629),ui_component.atom.card.card.default_background,new cljs.core.Keyword(null,"color","color",1011675173),ui_component.atom.card.card.default_color], null);
ui_component.atom.card.card.card = (function ui_component$atom$card$card$card(var_args){
var args__4870__auto__ = [];
var len__4864__auto___50914 = arguments.length;
var i__4865__auto___50915 = (0);
while(true){
if((i__4865__auto___50915 < len__4864__auto___50914)){
args__4870__auto__.push((arguments[i__4865__auto___50915]));

var G__50916 = (i__4865__auto___50915 + (1));
i__4865__auto___50915 = G__50916;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return ui_component.atom.card.card.card.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(ui_component.atom.card.card.card.cljs$core$IFn$_invoke$arity$variadic = (function (p__50912){
var map__50913 = p__50912;
var map__50913__$1 = cljs.core.__destructure_map(map__50913);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50913__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var header_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50913__$1,new cljs.core.Keyword(null,"header-style","header-style",-2122121341));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50913__$1,new cljs.core.Keyword(null,"title","title",636505583));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50913__$1,new cljs.core.Keyword(null,"content","content",15833224));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card","div.card",-459317104),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),(function (){var or__4253__auto__ = style;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return ui_component.atom.card.card.default_card_style;
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-header","div.card-header",1547492121),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-header-title","div.card-header-title",1709257453),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-content","div.card-content",1464214949),(function (){var or__4253__auto__ = content;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#empty","div#empty",2059645184)], null);
}
})()], null)], null);
}));

(ui_component.atom.card.card.card.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(ui_component.atom.card.card.card.cljs$lang$applyTo = (function (seq50911){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50911));
}));

ui_component.atom.card.card.meta_data = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("bhui","card","bhui/card",-1425218458),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),ui_component.atom.card.card.card,new cljs.core.Keyword(null,"ports","ports",-1014790862),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword("port","sink","port/sink",185875552),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword("port","sink","port/sink",185875552)], null)], null)], null);
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-meta","register-meta",1726375773),ui_component.atom.card.card.meta_data], null));

//# sourceMappingURL=ui_component.atom.card.card.js.map
