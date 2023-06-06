goog.provide('rccst_ui_component.atom.utils');
rccst_ui_component.atom.utils.chart_config = (function rccst_ui_component$atom$utils$chart_config(p__58636,data_panel,config_panel){
var vec__58637 = p__58636;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58637,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58637,(1),null);
var panel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58637,(2),null);
var tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58637,(3),null);
var data_or_config = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [config,"config"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [data,"data"], null)], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.chart-config","div.chart-config",-1461132065),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.bhui.navbar.navbar,data_or_config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [panel], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.scroller,new cljs.core.Keyword(null,"v-scroll","v-scroll",-1842185668),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"height","height",1025178622),"500px",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.packs.tab_panel.tab_panel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843),new cljs.core.Keyword(null,"is-fluid","is-fluid",1776512135),new cljs.core.Keyword(null,"subscribe-to-selected-tab","subscribe-to-selected-tab",138020659),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tab], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.packs.tab_panel.sub_panel,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"panel-id","panel-id",2118466015),config], null),config_panel], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.packs.tab_panel.sub_panel,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"panel-id","panel-id",2118466015),data], null),data_panel], null)], null)], null)], null);
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
rccst_ui_component.atom.utils.config_display = (function rccst_ui_component$atom$utils$config_display(chart_events,data_panel,config_panel,component){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.demo-display","div.demo-display",-13245258),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"rccst_ui_component/atom/utils.cljs",new cljs.core.Keyword(null,"line","line",212345235),59], null)),new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.layout.centered,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843),new cljs.core.Keyword(null,"is-one-third","is-one-third",-1778254608)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rccst_ui_component.atom.utils.chart_config,chart_events,data_panel,config_panel], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.layout.centered,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843),new cljs.core.Keyword(null,"is-one-third","is-one-third",-1778254608)], null),component], null)], null)], null)], null);
});
/**
 * provides a complex UI, similar to the basic Woolybear
 *   
 */
rccst_ui_component.atom.utils.configurable_demo = (function rccst_ui_component$atom$utils$configurable_demo(var_args){
var args__4870__auto__ = [];
var len__4864__auto___58654 = arguments.length;
var i__4865__auto___58655 = (0);
while(true){
if((i__4865__auto___58655 < len__4864__auto___58654)){
args__4870__auto__.push((arguments[i__4865__auto___58655]));

var G__58656 = (i__4865__auto___58655 + (1));
i__4865__auto___58655 = G__58656;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return rccst_ui_component.atom.utils.configurable_demo.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(rccst_ui_component.atom.utils.configurable_demo.cljs$core$IFn$_invoke$arity$variadic = (function (name,children){
var vec__58642 = ((typeof cljs.core.first(children) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(children),cljs.core.rest(children)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,children], null));
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58642,(0),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58642,(1),null);
var vec__58645 = children__$1;
var chart_events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58645,(0),null);
var data_panel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58645,(1),null);
var config_panel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58645,(2),null);
var component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58645,(3),null);
var src = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58645,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.demo-container","div.demo-container",839349501),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.demo-name","div.demo-name",509127859),name], null),(cljs.core.truth_(notes)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_markdown,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),notes], null)], null):""),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [rccst_ui_component.atom.utils.config_display,chart_events,data_panel,config_panel,component], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.containers.spoiler,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show-label","show-label",2070422077),"Show Code",new cljs.core.Keyword(null,"hide-label","hide-label",-92736657),"Hide Code"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.demo.src.catalog.utils.code_block,clojure.string.triml(woolybear.ad.demo.src.catalog.utils.pps.cljs$core$IFn$_invoke$arity$1(src))], null)], null)], null);
}));

(rccst_ui_component.atom.utils.configurable_demo.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rccst_ui_component.atom.utils.configurable_demo.cljs$lang$applyTo = (function (seq58640){
var G__58641 = cljs.core.first(seq58640);
var seq58640__$1 = cljs.core.next(seq58640);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58641,seq58640__$1);
}));

rccst_ui_component.atom.utils.component_example = (function rccst_ui_component$atom$utils$component_example(var_args){
var args__4870__auto__ = [];
var len__4864__auto___58657 = arguments.length;
var i__4865__auto___58658 = (0);
while(true){
if((i__4865__auto___58658 < len__4864__auto___58657)){
args__4870__auto__.push((arguments[i__4865__auto___58658]));

var G__58659 = (i__4865__auto___58658 + (1));
i__4865__auto___58658 = G__58659;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return rccst_ui_component.atom.utils.component_example.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(rccst_ui_component.atom.utils.component_example.cljs$core$IFn$_invoke$arity$variadic = (function (p__58649){
var map__58650 = p__58649;
var map__58650__$1 = cljs.core.__destructure_map(map__58650);
var params = map__58650__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58650__$1,new cljs.core.Keyword(null,"title","title",636505583));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58650__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58650__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58650__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var source_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58650__$1,new cljs.core.Keyword(null,"source-code","source-code",-685884337));
var extra_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58650__$1,new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843));
ui_component.utils.init_container(component_id);

var input_params = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(params,new cljs.core.Keyword(null,"title","title",636505583),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"sample-data","sample-data",1646287982),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843),new cljs.core.Keyword(null,"source-code","source-code",-685884337),new cljs.core.Keyword(null,"component","component",1555936782)], 0));
var paramed_component = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null),cljs.core.seq(input_params));
return woolybear.ad.demo.src.catalog.utils.demo.cljs$core$IFn$_invoke$arity$variadic(title,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([description,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.layout.centered,(function (){var or__4253__auto__ = extra_classes;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.component-example","div.component-example",890254977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"700px"], null)], null),paramed_component], null)], null),source_code], 0));
}));

(rccst_ui_component.atom.utils.component_example.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(rccst_ui_component.atom.utils.component_example.cljs$lang$applyTo = (function (seq58648){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58648));
}));

rccst_ui_component.atom.utils.example = (function rccst_ui_component$atom$utils$example(var_args){
var args__4870__auto__ = [];
var len__4864__auto___58660 = arguments.length;
var i__4865__auto___58661 = (0);
while(true){
if((i__4865__auto___58661 < len__4864__auto___58660)){
args__4870__auto__.push((arguments[i__4865__auto___58661]));

var G__58662 = (i__4865__auto___58661 + (1));
i__4865__auto___58661 = G__58662;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return rccst_ui_component.atom.utils.example.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(rccst_ui_component.atom.utils.example.cljs$core$IFn$_invoke$arity$variadic = (function (p__58652){
var map__58653 = p__58652;
var map__58653__$1 = cljs.core.__destructure_map(map__58653);
var params = map__58653__$1;
var component_panel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58653__$1,new cljs.core.Keyword(null,"component-panel","component-panel",-744929766));
var config_panel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58653__$1,new cljs.core.Keyword(null,"config-panel","config-panel",-1307835748));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58653__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58653__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58653__$1,new cljs.core.Keyword(null,"config","config",994861415));
var data_panel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58653__$1,new cljs.core.Keyword(null,"data-panel","data-panel",198148393));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58653__$1,new cljs.core.Keyword(null,"title","title",636505583));
var source_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58653__$1,new cljs.core.Keyword(null,"source-code","source-code",-685884337));
var container_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58653__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
ui_component.utils.init_container_locals(container_id,config);

var config_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(container_id,"config");
var data_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(container_id,"data");
var tab_panel = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(container_id,"tab-panel");
var selected_tab = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(container_id,"tab-panel.value");
return rccst_ui_component.atom.utils.configurable_demo.cljs$core$IFn$_invoke$arity$variadic(title,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [config_key,data_key,tab_panel,selected_tab], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [data_panel,data], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [config_panel,data,container_id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [component_panel,data,container_id], null),source_code], 0));
}));

(rccst_ui_component.atom.utils.example.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(rccst_ui_component.atom.utils.example.cljs$lang$applyTo = (function (seq58651){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58651));
}));


//# sourceMappingURL=rccst_ui_component.atom.utils.js.map
