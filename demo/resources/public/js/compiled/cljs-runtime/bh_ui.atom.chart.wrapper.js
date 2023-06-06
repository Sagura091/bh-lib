goog.provide('bh_ui.atom.chart.wrapper');
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
bh_ui.atom.chart.wrapper.configurable_chart = (function bh_ui$atom$chart$wrapper$configurable_chart(var_args){
var args__4870__auto__ = [];
var len__4864__auto___58866 = arguments.length;
var i__4865__auto___58867 = (0);
while(true){
if((i__4865__auto___58867 < len__4864__auto___58866)){
args__4870__auto__.push((arguments[i__4865__auto___58867]));

var G__58868 = (i__4865__auto___58867 + (1));
i__4865__auto___58867 = G__58868;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return bh_ui.atom.chart.wrapper.configurable_chart.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(bh_ui.atom.chart.wrapper.configurable_chart.cljs$core$IFn$_invoke$arity$variadic = (function (p__58856){
var map__58857 = p__58856;
var map__58857__$1 = cljs.core.__destructure_map(map__58857);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58857__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58857__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var container_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58857__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var config_panel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58857__$1,new cljs.core.Keyword(null,"config-panel","config-panel",-1307835748));
var data_panel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58857__$1,new cljs.core.Keyword(null,"data-panel","data-panel",198148393));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58857__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var ui = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58857__$1,new cljs.core.Keyword(null,"ui","ui",-469653645));
var open_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var config_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(component_id,"config");
var data_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(component_id,"data");
var tab_panel = bh_ui.utils.path__GT_keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([component_id,"tab-panel"], 0));
var selected_tab = bh_ui.utils.path__GT_keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([component_id,"tab-panel.value"], 0));
var chart_events = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [config_key,data_key,tab_panel,selected_tab], null);
bh_ui.utils.dispatch_local(component_id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"container","container",-1736937707)], null),container_id);

return (function() { 
var G__58869__delegate = function (p__58858){
var map__58859 = p__58858;
var map__58859__$1 = cljs.core.__destructure_map(map__58859);
var data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58859__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var component_id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58859__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var config_panel__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58859__$1,new cljs.core.Keyword(null,"config-panel","config-panel",-1307835748));
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58859__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var ui__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58859__$1,new cljs.core.Keyword(null,"ui","ui",-469653645));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"bh_ui/atom/chart/wrapper.cljs",new cljs.core.Keyword(null,"line","line",212345235),43], null)),new cljs.core.Keyword(null,"gap","gap",80255254),"2px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"bh_ui/atom/chart/wrapper.cljs",new cljs.core.Keyword(null,"line","line",212345235),45], null)),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.re_com.configure_toggle.configure_toggle,open_QMARK_], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.layout.centered,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843),new cljs.core.Keyword(null,"is-one-third","is-one-third",-1778254608)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"bh_ui/atom/chart/wrapper.cljs",new cljs.core.Keyword(null,"line","line",212345235),49], null)),new cljs.core.Keyword(null,"gap","gap",80255254),"5px",new cljs.core.Keyword(null,"width","width",-384071477),"600px",new cljs.core.Keyword(null,"height","height",1025178622),"600px",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.deref(open_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.layout.centered,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843),new cljs.core.Keyword(null,"is-one-third","is-one-third",-1778254608)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"75%"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.utils.chart_config,chart_events,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [data_panel,data__$1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [config_panel__$1,data__$1,component_id__$1], null)], null)], null)], null)], null):cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [component__$1,data__$1,component_id__$1,container_id,ui__$1], null))], null)], null)], null)], null);
};
var G__58869 = function (var_args){
var p__58858 = null;
if (arguments.length > 0) {
var G__58870__i = 0, G__58870__a = new Array(arguments.length -  0);
while (G__58870__i < G__58870__a.length) {G__58870__a[G__58870__i] = arguments[G__58870__i + 0]; ++G__58870__i;}
  p__58858 = new cljs.core.IndexedSeq(G__58870__a,0,null);
} 
return G__58869__delegate.call(this,p__58858);};
G__58869.cljs$lang$maxFixedArity = 0;
G__58869.cljs$lang$applyTo = (function (arglist__58871){
var p__58858 = cljs.core.seq(arglist__58871);
return G__58869__delegate(p__58858);
});
G__58869.cljs$core$IFn$_invoke$arity$variadic = G__58869__delegate;
return G__58869;
})()
;
}));

(bh_ui.atom.chart.wrapper.configurable_chart.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bh_ui.atom.chart.wrapper.configurable_chart.cljs$lang$applyTo = (function (seq58855){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58855));
}));

bh_ui.atom.chart.wrapper.chart = (function bh_ui$atom$chart$wrapper$chart(var_args){
var args__4870__auto__ = [];
var len__4864__auto___58872 = arguments.length;
var i__4865__auto___58873 = (0);
while(true){
if((i__4865__auto___58873 < len__4864__auto___58872)){
args__4870__auto__.push((arguments[i__4865__auto___58873]));

var G__58874 = (i__4865__auto___58873 + (1));
i__4865__auto___58873 = G__58874;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return bh_ui.atom.chart.wrapper.chart.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(bh_ui.atom.chart.wrapper.chart.cljs$core$IFn$_invoke$arity$variadic = (function (p__58861){
var map__58862 = p__58861;
var map__58862__$1 = cljs.core.__destructure_map(map__58862);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58862__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58862__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var container_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58862__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58862__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var ui = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58862__$1,new cljs.core.Keyword(null,"ui","ui",-469653645));
bh_ui.utils.dispatch_local(component_id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"container","container",-1736937707)], null),container_id);

var d = bh_ui.utils.helpers.resolve_value(data);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,data,component_id,container_id,ui], null);
}));

(bh_ui.atom.chart.wrapper.chart.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bh_ui.atom.chart.wrapper.chart.cljs$lang$applyTo = (function (seq58860){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58860));
}));

bh_ui.atom.chart.wrapper.base_chart = (function bh_ui$atom$chart$wrapper$base_chart(var_args){
var args__4870__auto__ = [];
var len__4864__auto___58875 = arguments.length;
var i__4865__auto___58876 = (0);
while(true){
if((i__4865__auto___58876 < len__4864__auto___58875)){
args__4870__auto__.push((arguments[i__4865__auto___58876]));

var G__58877 = (i__4865__auto___58876 + (1));
i__4865__auto___58876 = G__58877;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return bh_ui.atom.chart.wrapper.base_chart.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(bh_ui.atom.chart.wrapper.base_chart.cljs$core$IFn$_invoke$arity$variadic = (function (p__58864){
var map__58865 = p__58864;
var map__58865__$1 = cljs.core.__destructure_map(map__58865);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58865__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58865__$1,new cljs.core.Keyword(null,"config","config",994861415));
var component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58865__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var container_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58865__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var data_panel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58865__$1,new cljs.core.Keyword(null,"data-panel","data-panel",198148393));
var config_panel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58865__$1,new cljs.core.Keyword(null,"config-panel","config-panel",-1307835748));
var component_panel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58865__$1,new cljs.core.Keyword(null,"component-panel","component-panel",-744929766));
var ui = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58865__$1,new cljs.core.Keyword(null,"ui","ui",-469653645));
var id = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var not_configurable_QMARK_ = (config_panel == null);
var d = bh_ui.utils.helpers.resolve_value(data);
return (function (){
if((cljs.core.deref(id) == null)){
cljs.core.reset_BANG_(id,component_id);

bh_ui.utils.init_container_locals(cljs.core.deref(id),config);

bh_ui.utils.dispatch_local(cljs.core.deref(id),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"container","container",-1736937707)], null),container_id);
} else {
}

if(not_configurable_QMARK_){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.chart.wrapper.chart,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"component-id","component-id",1551113783),cljs.core.deref(id),new cljs.core.Keyword(null,"container-id","container-id",1274665684),container_id,new cljs.core.Keyword(null,"component","component",1555936782),component_panel,new cljs.core.Keyword(null,"ui","ui",-469653645),ui], null);
} else {
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.chart.wrapper.configurable_chart,new cljs.core.Keyword(null,"data","data",-232669377),d,new cljs.core.Keyword(null,"component-id","component-id",1551113783),cljs.core.deref(id),new cljs.core.Keyword(null,"container-id","container-id",1274665684),container_id,new cljs.core.Keyword(null,"data-panel","data-panel",198148393),data_panel,new cljs.core.Keyword(null,"config-panel","config-panel",-1307835748),config_panel,new cljs.core.Keyword(null,"component","component",1555936782),component_panel,new cljs.core.Keyword(null,"ui","ui",-469653645),ui], null);
}
});
}));

(bh_ui.atom.chart.wrapper.base_chart.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bh_ui.atom.chart.wrapper.base_chart.cljs$lang$applyTo = (function (seq58863){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58863));
}));


//# sourceMappingURL=bh_ui.atom.chart.wrapper.js.map
