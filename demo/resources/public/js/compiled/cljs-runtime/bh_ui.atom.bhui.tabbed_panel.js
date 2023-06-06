goog.provide('bh_ui.atom.bhui.tabbed_panel');
/**
 * makes a large panel containing tabs for each item. Selecting a tab will make tha corresponding
 *   page show (and hide all the others)
 * 
 *   
 */
bh_ui.atom.bhui.tabbed_panel.tabbed_panel = (function bh_ui$atom$bhui$tabbed_panel$tabbed_panel(var_args){
var args__4870__auto__ = [];
var len__4864__auto___48565 = arguments.length;
var i__4865__auto___48566 = (0);
while(true){
if((i__4865__auto___48566 < len__4864__auto___48565)){
args__4870__auto__.push((arguments[i__4865__auto___48566]));

var G__48567 = (i__4865__auto___48566 + (1));
i__4865__auto___48566 = G__48567;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return bh_ui.atom.bhui.tabbed_panel.tabbed_panel.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(bh_ui.atom.bhui.tabbed_panel.tabbed_panel.cljs$core$IFn$_invoke$arity$variadic = (function (p__48559){
var map__48560 = p__48559;
var map__48560__$1 = cljs.core.__destructure_map(map__48560);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48560__$1,new cljs.core.Keyword(null,"title","title",636505583));
var extra_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48560__$1,new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843));
var short_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48560__$1,new cljs.core.Keyword(null,"short-name","short-name",-1767085022));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48560__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48560__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var start_panel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48560__$1,new cljs.core.Keyword(null,"start-panel","start-panel",582481224));
bh_ui.tabbed_pane.utils.init_tabbed_panel(short_name,start_panel);

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.packs.flex_panel.flex_panel,(function (){var or__4253__auto__ = extra_classes;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.packs.flex_panel.flex_top,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.layout.page_header,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843),new cljs.core.Keyword(null,"is-fluid","is-fluid",1776512135)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.layout.page_title,title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.layout.markdown_block,description], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.layout.text_block,""], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.bhui.navbar.navbar,children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(short_name,"tab-panel")], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.layout.page_body,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843),new cljs.core.Keyword(null,"is-fluid","is-fluid",1776512135)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.packs.tab_panel.tab_panel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843),new cljs.core.Keyword(null,"is-fluid","is-fluid",1776512135),new cljs.core.Keyword(null,"subscribe-to-selected-tab","subscribe-to-selected-tab",138020659),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(short_name,"value")], null)], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__48561){
var vec__48562 = p__48561;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48562,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48562,(1),null);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48562,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.packs.tab_panel.sub_panel,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"panel-id","panel-id",2118466015),tag], null),page], null);
}),children)))], null)], null);
}));

(bh_ui.atom.bhui.tabbed_panel.tabbed_panel.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bh_ui.atom.bhui.tabbed_panel.tabbed_panel.cljs$lang$applyTo = (function (seq48558){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48558));
}));


//# sourceMappingURL=bh_ui.atom.bhui.tabbed_panel.js.map
