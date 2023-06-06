goog.provide('demo.src.catalog.atom.utils');
demo.src.catalog.atom.utils.chart_config = (function demo$src$catalog$atom$utils$chart_config(p__58598,data_panel,config_panel){
var vec__58599 = p__58598;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58599,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58599,(1),null);
var panel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58599,(2),null);
var tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58599,(3),null);
var data_or_config = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [config,"config"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [data,"data"], null)], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.chart-config","div.chart-config",-1461132065),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.bhui.navbar.navbar,data_or_config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [panel], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.scroller,new cljs.core.Keyword(null,"v-scroll","v-scroll",-1842185668),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"height","height",1025178622),"500px",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.packs.tab_panel.tab_panel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843),new cljs.core.Keyword(null,"is-fluid","is-fluid",1776512135),new cljs.core.Keyword(null,"subscribe-to-selected-tab","subscribe-to-selected-tab",138020659),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tab], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.packs.tab_panel.sub_panel,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"panel-id","panel-id",2118466015),config], null),config_panel], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.packs.tab_panel.sub_panel,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"panel-id","panel-id",2118466015),data], null),data_panel], null)], null)], null)], null);
});
/**
 * this is the workhorse function. It build a side-by-side UI with the config to the left
 *   and the component to the right. The user can change values in the config (checkboxes,
 *   sliders, etc.) and the component will update on the fly.
 * 
 *   ---
 * 
 *   - component : (hiccup) the UI component we want to demonstrate for the user
 *   - config : (hiccup) a UI component that provides options to the User for changing the config
 *   of the corresponding UI component
 * 
 *   > See also:
 *   >
 *   > [Re-com](https://github.com/Day8/re-com)
 *   > [re-com demo](https://re-com.day8.com.au/#/h-box)
 *   > [demo source](https://github.com/day8/re-com/blob/master/src/re_demo/h_box.cljs)
 *   
 */
demo.src.catalog.atom.utils.config_display = (function demo$src$catalog$atom$utils$config_display(chart_events,data_panel,config_panel,component){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.demo-display","div.demo-display",-13245258),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"demo/src/catalog/atom/utils.cljs",new cljs.core.Keyword(null,"line","line",212345235),58], null)),new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.layout.centered,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843),new cljs.core.Keyword(null,"is-one-third","is-one-third",-1778254608)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.src.catalog.atom.utils.chart_config,chart_events,data_panel,config_panel], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.layout.centered,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843),new cljs.core.Keyword(null,"is-one-third","is-one-third",-1778254608)], null),component], null)], null)], null)], null);
});
/**
 * provides a complex UI, similar to the basic Woolybear
 *   
 */
demo.src.catalog.atom.utils.configurable_demo = (function demo$src$catalog$atom$utils$configurable_demo(var_args){
var args__4870__auto__ = [];
var len__4864__auto___58620 = arguments.length;
var i__4865__auto___58621 = (0);
while(true){
if((i__4865__auto___58621 < len__4864__auto___58620)){
args__4870__auto__.push((arguments[i__4865__auto___58621]));

var G__58622 = (i__4865__auto___58621 + (1));
i__4865__auto___58621 = G__58622;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return demo.src.catalog.atom.utils.configurable_demo.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(demo.src.catalog.atom.utils.configurable_demo.cljs$core$IFn$_invoke$arity$variadic = (function (name,children){
var vec__58604 = ((typeof cljs.core.first(children) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(children),cljs.core.rest(children)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,children], null));
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58604,(0),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58604,(1),null);
var vec__58607 = children__$1;
var chart_events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58607,(0),null);
var data_panel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58607,(1),null);
var config_panel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58607,(2),null);
var component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58607,(3),null);
var src = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58607,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.demo-container","div.demo-container",839349501),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.demo-name","div.demo-name",509127859),name], null),(cljs.core.truth_(notes)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_markdown,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),notes], null)], null):""),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.src.catalog.atom.utils.config_display,chart_events,data_panel,config_panel,component], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.containers.spoiler,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show-label","show-label",2070422077),"Show Code",new cljs.core.Keyword(null,"hide-label","hide-label",-92736657),"Hide Code"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.utils.code_block,clojure.string.triml((woolybear.ad.utils.pps.cljs$core$IFn$_invoke$arity$1 ? woolybear.ad.utils.pps.cljs$core$IFn$_invoke$arity$1(src) : woolybear.ad.utils.pps.call(null,src)))], null)], null)], null);
}));

(demo.src.catalog.atom.utils.configurable_demo.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(demo.src.catalog.atom.utils.configurable_demo.cljs$lang$applyTo = (function (seq58602){
var G__58603 = cljs.core.first(seq58602);
var seq58602__$1 = cljs.core.next(seq58602);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58603,seq58602__$1);
}));

demo.src.catalog.atom.utils.component_example = (function demo$src$catalog$atom$utils$component_example(var_args){
var args__4870__auto__ = [];
var len__4864__auto___58623 = arguments.length;
var i__4865__auto___58624 = (0);
while(true){
if((i__4865__auto___58624 < len__4864__auto___58623)){
args__4870__auto__.push((arguments[i__4865__auto___58624]));

var G__58625 = (i__4865__auto___58624 + (1));
i__4865__auto___58624 = G__58625;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return demo.src.catalog.atom.utils.component_example.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(demo.src.catalog.atom.utils.component_example.cljs$core$IFn$_invoke$arity$variadic = (function (p__58611){
var map__58612 = p__58611;
var map__58612__$1 = cljs.core.__destructure_map(map__58612);
var params = map__58612__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58612__$1,new cljs.core.Keyword(null,"title","title",636505583));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58612__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58612__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58612__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var source_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58612__$1,new cljs.core.Keyword(null,"source-code","source-code",-685884337));
var extra_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58612__$1,new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843));
bh_ui.utils.init_container(component_id);

var input_params = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(params,new cljs.core.Keyword(null,"title","title",636505583),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"sample-data","sample-data",1646287982),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843),new cljs.core.Keyword(null,"source-code","source-code",-685884337),new cljs.core.Keyword(null,"component","component",1555936782)], 0));
var paramed_component = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null),cljs.core.seq(input_params));
var G__58613 = title;
var G__58614 = description;
var G__58615 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.layout.centered,(function (){var or__4253__auto__ = extra_classes;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.component-example","div.component-example",890254977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"700px"], null)], null),paramed_component], null)], null);
var G__58616 = source_code;
return (woolybear.ad.utils.demo.cljs$core$IFn$_invoke$arity$4 ? woolybear.ad.utils.demo.cljs$core$IFn$_invoke$arity$4(G__58613,G__58614,G__58615,G__58616) : woolybear.ad.utils.demo.call(null,G__58613,G__58614,G__58615,G__58616));
}));

(demo.src.catalog.atom.utils.component_example.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(demo.src.catalog.atom.utils.component_example.cljs$lang$applyTo = (function (seq58610){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58610));
}));

demo.src.catalog.atom.utils.example = (function demo$src$catalog$atom$utils$example(var_args){
var args__4870__auto__ = [];
var len__4864__auto___58626 = arguments.length;
var i__4865__auto___58627 = (0);
while(true){
if((i__4865__auto___58627 < len__4864__auto___58626)){
args__4870__auto__.push((arguments[i__4865__auto___58627]));

var G__58628 = (i__4865__auto___58627 + (1));
i__4865__auto___58627 = G__58628;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return demo.src.catalog.atom.utils.example.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(demo.src.catalog.atom.utils.example.cljs$core$IFn$_invoke$arity$variadic = (function (p__58618){
var map__58619 = p__58618;
var map__58619__$1 = cljs.core.__destructure_map(map__58619);
var params = map__58619__$1;
var component_panel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58619__$1,new cljs.core.Keyword(null,"component-panel","component-panel",-744929766));
var config_panel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58619__$1,new cljs.core.Keyword(null,"config-panel","config-panel",-1307835748));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58619__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58619__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58619__$1,new cljs.core.Keyword(null,"config","config",994861415));
var data_panel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58619__$1,new cljs.core.Keyword(null,"data-panel","data-panel",198148393));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58619__$1,new cljs.core.Keyword(null,"title","title",636505583));
var source_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58619__$1,new cljs.core.Keyword(null,"source-code","source-code",-685884337));
var container_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58619__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
bh_ui.utils.init_container_locals(container_id,config);

var config_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(container_id,"config");
var data_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(container_id,"data");
var tab_panel = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(container_id,"tab-panel");
var selected_tab = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(container_id,"tab-panel.value");
return demo.src.catalog.atom.utils.configurable_demo.cljs$core$IFn$_invoke$arity$variadic(title,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [config_key,data_key,tab_panel,selected_tab], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [data_panel,data], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [config_panel,data,container_id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [component_panel,data,container_id], null),source_code], 0));
}));

(demo.src.catalog.atom.utils.example.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(demo.src.catalog.atom.utils.example.cljs$lang$applyTo = (function (seq58617){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58617));
}));


//# sourceMappingURL=demo.src.catalog.atom.utils.js.map
