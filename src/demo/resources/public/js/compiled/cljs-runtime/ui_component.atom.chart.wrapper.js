goog.provide('ui_component.atom.chart.wrapper');
/**
 * takes a component and wraps it with a 'settings' button which can show/hide the
 *   appropriate data and config panels.
 * 
 *   ---
 * 
 *   - data : (atom) the data to be shown
 *   - config : (hash-map) the data structure providing the local state for the component and the config-panel
 *   - id : (string) unique identifier for this component instance
 *   - config-panel : (hiccup) the configuration 'molecule' for the component
 *   - component : (hiccup) the component itself
 * 
 *   Returns : (hiccup) the Reagent component representing the entire 'package' (component + config-panel + button)
 *   
 */
ui_component.atom.chart.wrapper.configurable_chart = (function ui_component$atom$chart$wrapper$configurable_chart(var_args){
var args__4870__auto__ = [];
var len__4864__auto___58900 = arguments.length;
var i__4865__auto___58901 = (0);
while(true){
if((i__4865__auto___58901 < len__4864__auto___58900)){
args__4870__auto__.push((arguments[i__4865__auto___58901]));

var G__58902 = (i__4865__auto___58901 + (1));
i__4865__auto___58901 = G__58902;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return ui_component.atom.chart.wrapper.configurable_chart.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(ui_component.atom.chart.wrapper.configurable_chart.cljs$core$IFn$_invoke$arity$variadic = (function (p__58890){
var map__58891 = p__58890;
var map__58891__$1 = cljs.core.__destructure_map(map__58891);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58891__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58891__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var container_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58891__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var config_panel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58891__$1,new cljs.core.Keyword(null,"config-panel","config-panel",-1307835748));
var data_panel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58891__$1,new cljs.core.Keyword(null,"data-panel","data-panel",198148393));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58891__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var ui = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58891__$1,new cljs.core.Keyword(null,"ui","ui",-469653645));
var open_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var config_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(component_id,"config");
var data_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(component_id,"data");
var tab_panel = ui_component.utils.path__GT_keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([component_id,"tab-panel"], 0));
var selected_tab = ui_component.utils.path__GT_keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([component_id,"tab-panel.value"], 0));
var chart_events = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [config_key,data_key,tab_panel,selected_tab], null);
ui_component.utils.dispatch_local(component_id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"container","container",-1736937707)], null),container_id);

return (function() { 
var G__58903__delegate = function (p__58892){
var map__58893 = p__58892;
var map__58893__$1 = cljs.core.__destructure_map(map__58893);
var data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58893__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var component_id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58893__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var config_panel__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58893__$1,new cljs.core.Keyword(null,"config-panel","config-panel",-1307835748));
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58893__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var ui__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58893__$1,new cljs.core.Keyword(null,"ui","ui",-469653645));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/chart/wrapper.cljs",new cljs.core.Keyword(null,"line","line",212345235),43], null)),new cljs.core.Keyword(null,"gap","gap",80255254),"2px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/chart/wrapper.cljs",new cljs.core.Keyword(null,"line","line",212345235),45], null)),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.re_com.configure_toggle.configure_toggle,open_QMARK_], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.layout.centered,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843),new cljs.core.Keyword(null,"is-one-third","is-one-third",-1778254608)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/chart/wrapper.cljs",new cljs.core.Keyword(null,"line","line",212345235),49], null)),new cljs.core.Keyword(null,"gap","gap",80255254),"5px",new cljs.core.Keyword(null,"width","width",-384071477),"600px",new cljs.core.Keyword(null,"height","height",1025178622),"600px",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.deref(open_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.layout.centered,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843),new cljs.core.Keyword(null,"is-one-third","is-one-third",-1778254608)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"75%"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.utils.chart_config,chart_events,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [data_panel,data__$1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [config_panel__$1,data__$1,component_id__$1], null)], null)], null)], null)], null):cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [component__$1,data__$1,component_id__$1,container_id,ui__$1], null))], null)], null)], null)], null);
};
var G__58903 = function (var_args){
var p__58892 = null;
if (arguments.length > 0) {
var G__58904__i = 0, G__58904__a = new Array(arguments.length -  0);
while (G__58904__i < G__58904__a.length) {G__58904__a[G__58904__i] = arguments[G__58904__i + 0]; ++G__58904__i;}
  p__58892 = new cljs.core.IndexedSeq(G__58904__a,0,null);
} 
return G__58903__delegate.call(this,p__58892);};
G__58903.cljs$lang$maxFixedArity = 0;
G__58903.cljs$lang$applyTo = (function (arglist__58905){
var p__58892 = cljs.core.seq(arglist__58905);
return G__58903__delegate(p__58892);
});
G__58903.cljs$core$IFn$_invoke$arity$variadic = G__58903__delegate;
return G__58903;
})()
;
}));

(ui_component.atom.chart.wrapper.configurable_chart.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(ui_component.atom.chart.wrapper.configurable_chart.cljs$lang$applyTo = (function (seq58889){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58889));
}));

ui_component.atom.chart.wrapper.chart = (function ui_component$atom$chart$wrapper$chart(var_args){
var args__4870__auto__ = [];
var len__4864__auto___58906 = arguments.length;
var i__4865__auto___58907 = (0);
while(true){
if((i__4865__auto___58907 < len__4864__auto___58906)){
args__4870__auto__.push((arguments[i__4865__auto___58907]));

var G__58908 = (i__4865__auto___58907 + (1));
i__4865__auto___58907 = G__58908;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return ui_component.atom.chart.wrapper.chart.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(ui_component.atom.chart.wrapper.chart.cljs$core$IFn$_invoke$arity$variadic = (function (p__58895){
var map__58896 = p__58895;
var map__58896__$1 = cljs.core.__destructure_map(map__58896);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58896__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58896__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var container_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58896__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58896__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var ui = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58896__$1,new cljs.core.Keyword(null,"ui","ui",-469653645));
ui_component.utils.dispatch_local(component_id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"container","container",-1736937707)], null),container_id);

var d = ui_component.utils.helpers.resolve_value(data);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,data,component_id,container_id,ui], null);
}));

(ui_component.atom.chart.wrapper.chart.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(ui_component.atom.chart.wrapper.chart.cljs$lang$applyTo = (function (seq58894){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58894));
}));

ui_component.atom.chart.wrapper.base_chart = (function ui_component$atom$chart$wrapper$base_chart(var_args){
var args__4870__auto__ = [];
var len__4864__auto___58909 = arguments.length;
var i__4865__auto___58910 = (0);
while(true){
if((i__4865__auto___58910 < len__4864__auto___58909)){
args__4870__auto__.push((arguments[i__4865__auto___58910]));

var G__58911 = (i__4865__auto___58910 + (1));
i__4865__auto___58910 = G__58911;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return ui_component.atom.chart.wrapper.base_chart.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(ui_component.atom.chart.wrapper.base_chart.cljs$core$IFn$_invoke$arity$variadic = (function (p__58898){
var map__58899 = p__58898;
var map__58899__$1 = cljs.core.__destructure_map(map__58899);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58899__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58899__$1,new cljs.core.Keyword(null,"config","config",994861415));
var component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58899__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var container_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58899__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var data_panel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58899__$1,new cljs.core.Keyword(null,"data-panel","data-panel",198148393));
var config_panel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58899__$1,new cljs.core.Keyword(null,"config-panel","config-panel",-1307835748));
var component_panel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58899__$1,new cljs.core.Keyword(null,"component-panel","component-panel",-744929766));
var ui = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58899__$1,new cljs.core.Keyword(null,"ui","ui",-469653645));
var id = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var not_configurable_QMARK_ = (config_panel == null);
var d = ui_component.utils.helpers.resolve_value(data);
return (function (){
if((cljs.core.deref(id) == null)){
cljs.core.reset_BANG_(id,component_id);

ui_component.utils.init_container_locals(cljs.core.deref(id),config);

ui_component.utils.dispatch_local(cljs.core.deref(id),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"container","container",-1736937707)], null),container_id);
} else {
}

if(not_configurable_QMARK_){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.chart.wrapper.chart,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"component-id","component-id",1551113783),cljs.core.deref(id),new cljs.core.Keyword(null,"container-id","container-id",1274665684),container_id,new cljs.core.Keyword(null,"component","component",1555936782),component_panel,new cljs.core.Keyword(null,"ui","ui",-469653645),ui], null);
} else {
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.chart.wrapper.configurable_chart,new cljs.core.Keyword(null,"data","data",-232669377),d,new cljs.core.Keyword(null,"component-id","component-id",1551113783),cljs.core.deref(id),new cljs.core.Keyword(null,"container-id","container-id",1274665684),container_id,new cljs.core.Keyword(null,"data-panel","data-panel",198148393),data_panel,new cljs.core.Keyword(null,"config-panel","config-panel",-1307835748),config_panel,new cljs.core.Keyword(null,"component","component",1555936782),component_panel,new cljs.core.Keyword(null,"ui","ui",-469653645),ui], null);
}
});
}));

(ui_component.atom.chart.wrapper.base_chart.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(ui_component.atom.chart.wrapper.base_chart.cljs$lang$applyTo = (function (seq58897){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58897));
}));


//# sourceMappingURL=ui_component.atom.chart.wrapper.js.map
