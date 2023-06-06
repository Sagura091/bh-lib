goog.provide('bh_ui.atom.chart.wrapper_2');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"bh-ui.atom.chart.wrapper-2",null,11,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bh-ui.atom.chart.wrapper-2"], null);
}),null)),null,-2135147370,null);
bh_ui.atom.chart.wrapper_2.component_panel = (function bh_ui$atom$chart$wrapper_2$component_panel(var_args){
var args__4870__auto__ = [];
var len__4864__auto___58550 = arguments.length;
var i__4865__auto___58551 = (0);
while(true){
if((i__4865__auto___58551 < len__4864__auto___58550)){
args__4870__auto__.push((arguments[i__4865__auto___58551]));

var G__58552 = (i__4865__auto___58551 + (1));
i__4865__auto___58551 = G__58552;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return bh_ui.atom.chart.wrapper_2.component_panel.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(bh_ui.atom.chart.wrapper_2.component_panel.cljs$core$IFn$_invoke$arity$variadic = (function (p__58538){
var map__58539 = p__58538;
var map__58539__$1 = cljs.core.__destructure_map(map__58539);
var params = map__58539__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58539__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var config_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58539__$1,new cljs.core.Keyword(null,"config-data","config-data",1933573865));
var component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58539__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var component_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58539__$1,new cljs.core.Keyword(null,"component*","component*",1963849553));
var local_config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58539__$1,new cljs.core.Keyword(null,"local-config","local-config",-2015662519));
var d = bh_ui.utils.helpers.resolve_value(data);
var c = bh_ui.utils.helpers.resolve_value(config_data);
var isAnimationActive_QMARK_ = bh_ui.utils.subscribe_local(component_id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"isAnimationActive","isAnimationActive",441882911)], null));
return (function (){
bh_ui.utils.locals.update_local_values(component_id,(local_config.cljs$core$IFn$_invoke$arity$1 ? local_config.cljs$core$IFn$_invoke$arity$1(d) : local_config.call(null,d)));

var l_c = (local_config.cljs$core$IFn$_invoke$arity$1 ? local_config.cljs$core$IFn$_invoke$arity$1(d) : local_config.call(null,d));
var local_subs = bh_ui.utils.build_subs(component_id,l_c);
var override_subs = (cljs.core.truth_(config_data)?bh_ui.utils.locals.process_locals(cljs.core.PersistentVector.EMPTY,null,cljs.core.deref(c)):null);
var subscriptions = (cljs.core.truth_(config_data)?bh_ui.utils.override_subs(cljs.core.deref(c),local_subs,override_subs):local_subs);
var input_params = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(params,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.deref(d),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"isAnimationActive?","isAnimationActive?",-1020610123),isAnimationActive_QMARK_,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),subscriptions], 0));
if(cljs.core.empty_QMARK_(cljs.core.deref(d))){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.alert_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"bh_ui/atom/chart/wrapper_2.cljs",new cljs.core.Keyword(null,"line","line",212345235),48], null)),new cljs.core.Keyword(null,"alert-type","alert-type",405751817),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null),new cljs.core.Keyword(null,"heading","heading",-1312171873),"Waiting for data"], null);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component_STAR_], null),cljs.core.seq(input_params));
}
});
}));

(bh_ui.atom.chart.wrapper_2.component_panel.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bh_ui.atom.chart.wrapper_2.component_panel.cljs$lang$applyTo = (function (seq58537){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58537));
}));

bh_ui.atom.chart.wrapper_2.configurable_component_panel = (function bh_ui$atom$chart$wrapper_2$configurable_component_panel(var_args){
var args__4870__auto__ = [];
var len__4864__auto___58555 = arguments.length;
var i__4865__auto___58556 = (0);
while(true){
if((i__4865__auto___58556 < len__4864__auto___58555)){
args__4870__auto__.push((arguments[i__4865__auto___58556]));

var G__58557 = (i__4865__auto___58556 + (1));
i__4865__auto___58556 = G__58557;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return bh_ui.atom.chart.wrapper_2.configurable_component_panel.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(bh_ui.atom.chart.wrapper_2.configurable_component_panel.cljs$core$IFn$_invoke$arity$variadic = (function (p__58542){
var map__58543 = p__58542;
var map__58543__$1 = cljs.core.__destructure_map(map__58543);
var params = map__58543__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58543__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58543__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58543__$1,new cljs.core.Keyword(null,"config","config",994861415));
var local_config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58543__$1,new cljs.core.Keyword(null,"local-config","local-config",-2015662519));
var config_panel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58543__$1,new cljs.core.Keyword(null,"config-panel","config-panel",-1307835748));
var data_panel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58543__$1,new cljs.core.Keyword(null,"data-panel","data-panel",198148393));
var open_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var config_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(component_id,"config");
var data_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(component_id,"data");
var tab_panel = bh_ui.utils.path__GT_keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([component_id,"tab-panel"], 0));
var selected_tab = bh_ui.utils.path__GT_keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([component_id,"tab-panel.value"], 0));
var chart_events = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [config_key,data_key,tab_panel,selected_tab], null);
bh_ui.utils.init_container_locals(component_id,(function (){var G__58544 = component_id;
var G__58545 = bh_ui.utils.helpers.resolve_value(data);
return (config.cljs$core$IFn$_invoke$arity$2 ? config.cljs$core$IFn$_invoke$arity$2(G__58544,G__58545) : config.call(null,G__58544,G__58545));
})());

return (function (){
var d = bh_ui.utils.helpers.resolve_value(data);
bh_ui.utils.locals.update_local_values(component_id,(local_config.cljs$core$IFn$_invoke$arity$1 ? local_config.cljs$core$IFn$_invoke$arity$1(d) : local_config.call(null,d)));

return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"bh_ui/atom/chart/wrapper_2.cljs",new cljs.core.Keyword(null,"line","line",212345235),80], null)),new cljs.core.Keyword(null,"class","class",-2030961996),"configurable-component-panel",new cljs.core.Keyword(null,"gap","gap",80255254),"2px",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"bh_ui/atom/chart/wrapper_2.cljs",new cljs.core.Keyword(null,"line","line",212345235),85], null)),new cljs.core.Keyword(null,"class","class",-2030961996),"chart-config-tools",new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.re_com.configure_toggle.configure_toggle,open_QMARK_], null)], null)], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"bh_ui/atom/chart/wrapper_2.cljs",new cljs.core.Keyword(null,"line","line",212345235),89], null)),new cljs.core.Keyword(null,"class","class",-2030961996),"chart-itself",new cljs.core.Keyword(null,"gap","gap",80255254),"5px",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"90%",new cljs.core.Keyword(null,"children","children",-940561982),(cljs.core.truth_(cljs.core.deref(open_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.chart-config-panel","div.chart-config-panel",-694644511),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"40%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.utils.chart_config,chart_events,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [data_panel,d], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [config_panel,d,component_id], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.chart-content","div.chart-content",1634052671),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"60%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.chart.wrapper_2.component_panel], null),cljs.core.seq(params))], null)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.chart-content","div.chart-content",1634052671),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.chart.wrapper_2.component_panel], null),cljs.core.seq(params))], null)], null))], null)], null)], null);
});
}));

(bh_ui.atom.chart.wrapper_2.configurable_component_panel.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bh_ui.atom.chart.wrapper_2.configurable_component_panel.cljs$lang$applyTo = (function (seq58540){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58540));
}));

bh_ui.atom.chart.wrapper_2.base_chart = (function bh_ui$atom$chart$wrapper_2$base_chart(var_args){
var args__4870__auto__ = [];
var len__4864__auto___58559 = arguments.length;
var i__4865__auto___58560 = (0);
while(true){
if((i__4865__auto___58560 < len__4864__auto___58559)){
args__4870__auto__.push((arguments[i__4865__auto___58560]));

var G__58561 = (i__4865__auto___58560 + (1));
i__4865__auto___58560 = G__58561;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return bh_ui.atom.chart.wrapper_2.base_chart.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(bh_ui.atom.chart.wrapper_2.base_chart.cljs$core$IFn$_invoke$arity$variadic = (function (p__58548){
var map__58549 = p__58548;
var map__58549__$1 = cljs.core.__destructure_map(map__58549);
var params = map__58549__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58549__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58549__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var container_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58549__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58549__$1,new cljs.core.Keyword(null,"config","config",994861415));
var config_panel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58549__$1,new cljs.core.Keyword(null,"config-panel","config-panel",-1307835748));
var id = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var not_configurable_QMARK_ = (config_panel == null);
var d = bh_ui.utils.helpers.resolve_value(data);
var c = (config.cljs$core$IFn$_invoke$arity$2 ? config.cljs$core$IFn$_invoke$arity$2(component_id,d) : config.call(null,component_id,d));
return (function (){
if((cljs.core.deref(id) == null)){
cljs.core.reset_BANG_(id,component_id);

bh_ui.utils.init_container_locals(cljs.core.deref(id),c);

bh_ui.utils.dispatch_local(cljs.core.deref(id),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"container","container",-1736937707)], null),container_id);
} else {
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.base-chart","div.base-chart",-911665867),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),((not_configurable_QMARK_)?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.chart.wrapper_2.component_panel], null),cljs.core.seq(params)):cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.chart.wrapper_2.configurable_component_panel], null),cljs.core.seq(params)))], null);
});
}));

(bh_ui.atom.chart.wrapper_2.base_chart.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bh_ui.atom.chart.wrapper_2.base_chart.cljs$lang$applyTo = (function (seq58547){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58547));
}));


//# sourceMappingURL=bh_ui.atom.chart.wrapper_2.js.map
