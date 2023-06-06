goog.provide('bh_ui.atom.chart.treemap_chart');
/**
 * the Treemap Chart works best with "hierarchical data" so we return the hierarchy-data from utils
 */
bh_ui.atom.chart.treemap_chart.sample_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(bh_ui.utils.example_data.hierarchy_data);
bh_ui.atom.chart.treemap_chart.default_ratio = ((4) / (3));
bh_ui.atom.chart.treemap_chart.default_stroke = "#ffffff";
bh_ui.atom.chart.treemap_chart.default_fill = "#8884d8";
/**
 * constructs the configuration panel for the chart's configurable properties. This is specific to
 *   this being a line-chart component (see [[local-config]]).
 * 
 *   Merges together the configuration needed for:
 * 
 *   1. line charts
 *   2. pub/sub between components of a container
 *   3. `default-config` for all Rechart-based types
 *   4. the `tab-panel` for view/edit configuration properties and data
 *   5. sets properties of the default-config (local config properties are just set inside [[local-config]])
 *   6. sets meta-data for properties this component publishes (`:pub`) or subscribes (`:sub`)
 * 
 *   ---
 * 
 *   - component-id : (string) unique id of the chart
 *   
 */
bh_ui.atom.chart.treemap_chart.config = (function bh_ui$atom$chart$treemap_chart$config(component_id,data){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bh_ui.utils.default_pub_sub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tab-panel","tab-panel",439413104),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(component_id,"config"),new cljs.core.Keyword(null,"data-path","data-path",674802181),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"containers","containers",-2127048083),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(component_id),new cljs.core.Keyword(null,"tab-panel","tab-panel",439413104)], null)], null),new cljs.core.Keyword(null,"isAnimationActive","isAnimationActive",441882911),true,new cljs.core.Keyword(null,"ratio","ratio",-926560044),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"include","include",153360230),true,new cljs.core.Keyword(null,"n","n",562130025),(4),new cljs.core.Keyword(null,"d","d",1972142424),(3)], null),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#ffffff"], null),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#8884d8"], null)], null)], 0));
});
/**
 * builds the ui components needed to configure the `ration` property of the treemap
 * 
 * > See also:
 * >
 * > [Recharts/treemap](https://recharts.org/en-US/api/Treemap)
 */
bh_ui.atom.chart.treemap_chart.ratio_config = (function bh_ui$atom$chart$treemap_chart$ratio_config(component_id){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"bh_ui/atom/chart/treemap_chart.cljs",new cljs.core.Keyword(null,"line","line",212345235),60], null)),new cljs.core.Keyword(null,"gap","gap",80255254),"5px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.chart.utils.boolean_config,component_id,":ratio",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ratio","ratio",-926560044),new cljs.core.Keyword(null,"include","include",153360230)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"bh_ui/atom/chart/treemap_chart.cljs",new cljs.core.Keyword(null,"line","line",212345235),63], null)),new cljs.core.Keyword(null,"gap","gap",80255254),"5px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.chart.utils.slider_config,component_id,(1),(10),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ratio","ratio",-926560044),new cljs.core.Keyword(null,"n","n",562130025)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.chart.utils.slider_config,component_id,(1),(10),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ratio","ratio",-926560044),new cljs.core.Keyword(null,"d","d",1972142424)], null)], null)], null)], null)], null)], null);
});
/**
 * the panel of configuration controls
 * 
 *   ---
 * 
 *   - data : (atom) data to display (may be used by the standard configuration components for thins like axes, etc.
 *   - component-id : (string) unique identifier for this chart instance
 *   
 */
bh_ui.atom.chart.treemap_chart.config_panel = (function bh_ui$atom$chart$treemap_chart$config_panel(_,component_id){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"bh_ui/atom/chart/treemap_chart.cljs",new cljs.core.Keyword(null,"line","line",212345235),79], null)),new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"width","width",-384071477),"400px",new cljs.core.Keyword(null,"height","height",1025178622),"500px",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"15px",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"1px solid #DDD",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#f7f7f7"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.chart.utils.isAnimationActive,component_id], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.line,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"bh_ui/atom/chart/treemap_chart.cljs",new cljs.core.Keyword(null,"line","line",212345235),87], null)),new cljs.core.Keyword(null,"size","size",1098693007),"2px"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"bh_ui/atom/chart/treemap_chart.cljs",new cljs.core.Keyword(null,"line","line",212345235),88], null)),new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.chart.treemap_chart.ratio_config,component_id], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.chart.utils.color_config_text,component_id,":stroke",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"color","color",1011675173)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.chart.utils.color_config_text,component_id,":fill",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"color","color",1011675173)], null)], null)], null)], null)], null)], null);
});
bh_ui.atom.chart.treemap_chart.source_code = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,">",">",-555517146),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","shadow.js.shim.module$recharts.Treemap","js/shadow.js.shim.module$recharts.Treemap",1935289824,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"width","width",-384071477),null,(1),null)),(new cljs.core.List(null,(400),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"height","height",1025178622),null,(1),null)),(new cljs.core.List(null,(400),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"data","data",-232669377),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("bh-ui.atom.chart.treemap-chart","data","bh-ui.atom.chart.treemap-chart/data",711101011,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"dataKey","dataKey",-334896751),null,(1),null)),(new cljs.core.List(null,"size",null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"isAnimationActive","isAnimationActive",441882911),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"ratio","ratio",-926560044),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","/","cljs.core//",-696756880,null),null,(1),null)),(new cljs.core.List(null,(4),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(3),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"stroke","stroke",1741823555),null,(1),null)),(new cljs.core.List(null,"#ffffff",null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"fill","fill",883462889),null,(1),null)),(new cljs.core.List(null,"#8884d8",null,(1),null))], 0))))),null,(1),null))], 0)))));
/**
 * the chart to draw, taking cues from the settings of the configuration panel
 * 
 *   ---
 * 
 *   - data : (atom) any data shown by the component's ui
 *   - component-id : (string) unique identifier for this widget instance
 *   
 */
bh_ui.atom.chart.treemap_chart.component_panel = (function bh_ui$atom$chart$treemap_chart$component_panel(data,component_id,container_id,ui){
var isAnimationActive_QMARK_ = bh_ui.utils.subscribe_local(component_id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"isAnimationActive","isAnimationActive",441882911)], null));
var stroke = bh_ui.utils.subscribe_local(component_id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"color","color",1011675173)], null));
var fill = bh_ui.utils.subscribe_local(component_id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"color","color",1011675173)], null));
return (function (data__$1,component_id__$1,container_id__$1,ui__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$recharts.ResponsiveContainer,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$recharts.Treemap,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.deref(data__$1),new cljs.core.Keyword(null,"dataKey","dataKey",-334896751),"size",new cljs.core.Keyword(null,"isAnimationActive","isAnimationActive",441882911),cljs.core.deref(isAnimationActive_QMARK_),new cljs.core.Keyword(null,"ratio","ratio",-926560044),bh_ui.atom.chart.treemap_chart.default_ratio,new cljs.core.Keyword(null,"stroke","stroke",1741823555),cljs.core.deref(stroke),new cljs.core.Keyword(null,"fill","fill",883462889),cljs.core.deref(fill)], null)], null)], null);
});
});
/**
 * the chart to draw, taking cues from the settings of the configuration panel
 * 
 *   ---
 * 
 *   - :data : (atom) any data shown by the component's ui
 *   - :component-id : (string) unique identifier for this chart instance within this container
 *   - :container-id : (string) name of the container this chart is inside of
 *   
 */
bh_ui.atom.chart.treemap_chart.configurable_component = (function bh_ui$atom$chart$treemap_chart$configurable_component(var_args){
var args__4870__auto__ = [];
var len__4864__auto___58994 = arguments.length;
var i__4865__auto___58995 = (0);
while(true){
if((i__4865__auto___58995 < len__4864__auto___58994)){
args__4870__auto__.push((arguments[i__4865__auto___58995]));

var G__58996 = (i__4865__auto___58995 + (1));
i__4865__auto___58995 = G__58996;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return bh_ui.atom.chart.treemap_chart.configurable_component.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(bh_ui.atom.chart.treemap_chart.configurable_component.cljs$core$IFn$_invoke$arity$variadic = (function (p__58980){
var map__58981 = p__58980;
var map__58981__$1 = cljs.core.__destructure_map(map__58981);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58981__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58981__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var container_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58981__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var ui = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58981__$1,new cljs.core.Keyword(null,"ui","ui",-469653645));
return new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.chart.wrapper.base_chart,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"config","config",994861415),bh_ui.atom.chart.treemap_chart.config(component_id,data),new cljs.core.Keyword(null,"component-id","component-id",1551113783),component_id,new cljs.core.Keyword(null,"container-id","container-id",1274665684),(function (){var or__4253__auto__ = container_id;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"data-panel","data-panel",198148393),bh_ui.atom.chart.utils.hierarchy_data_panel,new cljs.core.Keyword(null,"config-panel","config-panel",-1307835748),bh_ui.atom.chart.treemap_chart.config_panel,new cljs.core.Keyword(null,"component-panel","component-panel",-744929766),bh_ui.atom.chart.treemap_chart.component_panel,new cljs.core.Keyword(null,"ui","ui",-469653645),ui], null);
}));

(bh_ui.atom.chart.treemap_chart.configurable_component.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bh_ui.atom.chart.treemap_chart.configurable_component.cljs$lang$applyTo = (function (seq58978){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58978));
}));

/**
 * the chart to draw. this variant does NOT provide a configuration panel
 * 
 *   ---
 * 
 *   - :data : (atom) any data shown by the component's ui
 *   - :component-id : (string) unique identifier for this chart instance within this container
 *   - :container-id : (string) name of the container this chart is inside of
 *   
 */
bh_ui.atom.chart.treemap_chart.component = (function bh_ui$atom$chart$treemap_chart$component(var_args){
var args__4870__auto__ = [];
var len__4864__auto___58997 = arguments.length;
var i__4865__auto___58998 = (0);
while(true){
if((i__4865__auto___58998 < len__4864__auto___58997)){
args__4870__auto__.push((arguments[i__4865__auto___58998]));

var G__58999 = (i__4865__auto___58998 + (1));
i__4865__auto___58998 = G__58999;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return bh_ui.atom.chart.treemap_chart.component.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(bh_ui.atom.chart.treemap_chart.component.cljs$core$IFn$_invoke$arity$variadic = (function (p__58986){
var map__58988 = p__58986;
var map__58988__$1 = cljs.core.__destructure_map(map__58988);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58988__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58988__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var container_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58988__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var ui = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58988__$1,new cljs.core.Keyword(null,"ui","ui",-469653645));
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.chart.wrapper.base_chart,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"config","config",994861415),bh_ui.atom.chart.treemap_chart.config(component_id,data),new cljs.core.Keyword(null,"component-id","component-id",1551113783),component_id,new cljs.core.Keyword(null,"container-id","container-id",1274665684),(function (){var or__4253__auto__ = container_id;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"component-panel","component-panel",-744929766),bh_ui.atom.chart.treemap_chart.component_panel,new cljs.core.Keyword(null,"ui","ui",-469653645),ui], null);
}));

(bh_ui.atom.chart.treemap_chart.component.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bh_ui.atom.chart.treemap_chart.component.cljs$lang$applyTo = (function (seq58984){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58984));
}));

bh_ui.atom.chart.treemap_chart.meta_data = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rechart","treemap","rechart/treemap",-825332278),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),bh_ui.atom.chart.treemap_chart.component,new cljs.core.Keyword(null,"ports","ports",-1014790862),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("port","sink","port/sink",185875552),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword("port","sink","port/sink",185875552)], null)], null)], null);
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-meta","register-meta",1726375773),bh_ui.atom.chart.treemap_chart.meta_data], null));

//# sourceMappingURL=bh_ui.atom.chart.treemap_chart.js.map
