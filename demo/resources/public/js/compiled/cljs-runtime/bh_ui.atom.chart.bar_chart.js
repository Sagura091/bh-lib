goog.provide('bh_ui.atom.chart.bar_chart');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"bh-ui.atom.chart.bar-chart",null,19,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bh-ui.atom.chart.bar-chart"], null);
}),null)),null,-37026132,null);
bh_ui.atom.chart.bar_chart.source_code = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Symbol(null,"BarChart","BarChart",-453044793,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Symbol(null,"d","d",-682293345,null)], null),cljs.core.list(new cljs.core.Symbol("utils","standard-chart-components","utils/standard-chart-components",552873810,null),new cljs.core.Symbol(null,"component-id","component-id",-1103321986,null),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Symbol(null,"Bar","Bar",-1095647106,null),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"monotone",new cljs.core.Keyword(null,"dataKey","dataKey",-334896751),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Keyword(null,"isAnimationActive","isAnimationActive",441882911),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"isAnimationActive?","isAnimationActive?",619921404,null)),new cljs.core.Keyword(null,"stroke","stroke",1741823555),cljs.core.list(new cljs.core.Symbol("ui-utils","resolve-sub","ui-utils/resolve-sub",1403080913,null),new cljs.core.Symbol(null,"subscriptions","subscriptions",-1403485993,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Keyword(null,"stroke","stroke",1741823555)], null)),new cljs.core.Keyword(null,"fill","fill",883462889),cljs.core.list(new cljs.core.Symbol("ui-utils","resolve-sub","ui-utils/resolve-sub",1403080913,null),new cljs.core.Symbol(null,"subscriptions","subscriptions",-1403485993,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Keyword(null,"fill","fill",883462889)], null))], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),cljs.core.list(new cljs.core.Symbol("ui-utils","resolve-sub","ui-utils/resolve-sub",1403080913,null),new cljs.core.Symbol(null,"subscriptions","subscriptions",-1403485993,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Keyword(null,"stackId","stackId",6901287)], null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stackId","stackId",6901287),cljs.core.list(new cljs.core.Symbol("ui-utils","resolve-sub","ui-utils/resolve-sub",1403080913,null),new cljs.core.Symbol(null,"subscriptions","subscriptions",-1403485993,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Keyword(null,"stackId","stackId",6901287)], null))], null)))], null)], null);
bh_ui.atom.chart.bar_chart.sample_data = bh_ui.utils.example_data.meta_tabular_data;
bh_ui.atom.chart.bar_chart.sample_config_data = bh_ui.utils.example_data.tabular_column_config_data;
bh_ui.atom.chart.bar_chart.random_data = bh_ui.utils.example_data.random_meta_tabular_data;
bh_ui.atom.chart.bar_chart.local_config = (function bh_ui$atom$chart$bar_chart$local_config(data){
var ret = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"brush","brush",498034117),false], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,a){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([a,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"include","include",153360230),true,new cljs.core.Keyword(null,"fill","fill",883462889),bh_ui.utils.color.get_color(idx),new cljs.core.Keyword(null,"stackId","stackId",6901287),""], null)]);
}),cljs.core.keys(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__58723){
var vec__58724 = p__58723;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58724,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58724,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"number","number",1570378438),v);
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),new cljs.core.Keyword(null,"fields","fields",-1932066230)], null))))))], 0));
return ret;
});
bh_ui.atom.chart.bar_chart.config = (function bh_ui$atom$chart$bar_chart$config(component_id,data){
return cljs.core.assoc_in(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bh_ui.utils.default_pub_sub,bh_ui.atom.chart.utils.default_config,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tab-panel","tab-panel",439413104),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(component_id,"config"),new cljs.core.Keyword(null,"data-path","data-path",674802181),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"containers","containers",-2127048083),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(component_id),new cljs.core.Keyword(null,"tab-panel","tab-panel",439413104)], null)], null)], null),bh_ui.atom.chart.bar_chart.local_config(data)], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253),new cljs.core.Keyword(null,"dataKey","dataKey",-334896751)], null),new cljs.core.Keyword(null,"name","name",1843675177));
});
bh_ui.atom.chart.bar_chart.bar_config = (function bh_ui$atom$chart$bar_chart$bar_config(component_id,label,path,position){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"bh_ui/atom/chart/bar_chart.cljs",new cljs.core.Keyword(null,"line","line",212345235),66], null)),new cljs.core.Keyword(null,"gap","gap",80255254),"5px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.chart.utils.boolean_config,component_id,label,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"include","include",153360230))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.chart.utils.color_config,component_id,":fill",cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"fill","fill",883462889)),position], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.chart.utils.text_config,component_id,":stackId",cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"stackId","stackId",6901287))], null)], null)], null);
});
bh_ui.atom.chart.bar_chart.make_bar_config = (function bh_ui$atom$chart$bar_chart$make_bar_config(component_id,data){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,a){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.chart.bar_chart.bar_config,component_id,a,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null),new cljs.core.Keyword(null,"above-right","above-right",791010942)], null);
}),cljs.core.keys(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__58727){
var vec__58728 = p__58727;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58728,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58728,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"number","number",1570378438),v);
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),new cljs.core.Keyword(null,"fields","fields",-1932066230)], null))))));
});
bh_ui.atom.chart.bar_chart.config_panel = (function bh_ui$atom$chart$bar_chart$config_panel(data,component_id){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"bh_ui/atom/chart/bar_chart.cljs",new cljs.core.Keyword(null,"line","line",212345235),87], null)),new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"5px",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"1px solid #DDD",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#f7f7f7"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.chart.utils.standard_chart_config,data,component_id], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.line,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"bh_ui/atom/chart/bar_chart.cljs",new cljs.core.Keyword(null,"line","line",212345235),95], null)),new cljs.core.Keyword(null,"size","size",1098693007),"2px"], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"bh_ui/atom/chart/bar_chart.cljs",new cljs.core.Keyword(null,"line","line",212345235),96], null)),new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"style","style",-496642736),bh_ui.utils.h_wrap,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),bh_ui.atom.chart.bar_chart.make_bar_config(component_id,data)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.line,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"bh_ui/atom/chart/bar_chart.cljs",new cljs.core.Keyword(null,"line","line",212345235),102], null)),new cljs.core.Keyword(null,"size","size",1098693007),"2px"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.chart.utils.boolean_config,component_id,":brush?",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"brush","brush",498034117)], null)], null)], null)], null);
});
bh_ui.atom.chart.bar_chart.make_bar_display = (function bh_ui$atom$chart$bar_chart$make_bar_display(data,subscriptions,isAnimationActive_QMARK_){
var ret = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (a){
if(cljs.core.truth_(bh_ui.utils.resolve_sub(subscriptions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,new cljs.core.Keyword(null,"include","include",153360230)], null)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$recharts.Bar,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"monotone",new cljs.core.Keyword(null,"dataKey","dataKey",-334896751),a,new cljs.core.Keyword(null,"isAnimationActive","isAnimationActive",441882911),cljs.core.deref(isAnimationActive_QMARK_),new cljs.core.Keyword(null,"fill","fill",883462889),bh_ui.utils.resolve_sub(subscriptions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,new cljs.core.Keyword(null,"fill","fill",883462889)], null))], null),((cljs.core.seq(bh_ui.utils.resolve_sub(subscriptions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,new cljs.core.Keyword(null,"stackId","stackId",6901287)], null))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stackId","stackId",6901287),bh_ui.utils.resolve_sub(subscriptions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,new cljs.core.Keyword(null,"stackId","stackId",6901287)], null))], null):null)], 0))], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
}),cljs.core.keys(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__58731){
var vec__58732 = p__58731;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58732,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58732,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"number","number",1570378438),v);
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),new cljs.core.Keyword(null,"fields","fields",-1932066230)], null)))))));
return ret;
});
bh_ui.atom.chart.bar_chart.component_STAR_ = (function bh_ui$atom$chart$bar_chart$component_STAR_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___58749 = arguments.length;
var i__4865__auto___58750 = (0);
while(true){
if((i__4865__auto___58750 < len__4864__auto___58749)){
args__4870__auto__.push((arguments[i__4865__auto___58750]));

var G__58751 = (i__4865__auto___58750 + (1));
i__4865__auto___58750 = G__58751;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return bh_ui.atom.chart.bar_chart.component_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(bh_ui.atom.chart.bar_chart.component_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (p__58736){
var map__58737 = p__58736;
var map__58737__$1 = cljs.core.__destructure_map(map__58737);
var params = map__58737__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58737__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58737__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var container_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58737__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var subscriptions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58737__$1,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776));
var isAnimationActive_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58737__$1,new cljs.core.Keyword(null,"isAnimationActive?","isAnimationActive?",-1020610123));
var d = ((cljs.core.empty_QMARK_(data))?cljs.core.PersistentVector.EMPTY:cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.Keyword(null,"data","data",-232669377)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$recharts.ResponsiveContainer,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$recharts.BarChart,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),d], null),bh_ui.atom.chart.utils.standard_chart_components(component_id,cljs.core.PersistentArrayMap.EMPTY),(cljs.core.truth_(bh_ui.utils.resolve_sub(subscriptions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"brush","brush",498034117)], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$recharts.Brush], null):null),bh_ui.atom.chart.bar_chart.make_bar_display(data,subscriptions,isAnimationActive_QMARK_)], null)], null);
}));

(bh_ui.atom.chart.bar_chart.component_STAR_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bh_ui.atom.chart.bar_chart.component_STAR_.cljs$lang$applyTo = (function (seq58735){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58735));
}));

bh_ui.atom.chart.bar_chart.component = (function bh_ui$atom$chart$bar_chart$component(var_args){
var args__4870__auto__ = [];
var len__4864__auto___58754 = arguments.length;
var i__4865__auto___58755 = (0);
while(true){
if((i__4865__auto___58755 < len__4864__auto___58754)){
args__4870__auto__.push((arguments[i__4865__auto___58755]));

var G__58756 = (i__4865__auto___58755 + (1));
i__4865__auto___58755 = G__58756;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return bh_ui.atom.chart.bar_chart.component.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(bh_ui.atom.chart.bar_chart.component.cljs$core$IFn$_invoke$arity$variadic = (function (p__58739){
var map__58740 = p__58739;
var map__58740__$1 = cljs.core.__destructure_map(map__58740);
var params = map__58740__$1;
var component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58740__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var input_params = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(params,new cljs.core.Keyword(null,"component*","component*",1963849553),bh_ui.atom.chart.bar_chart.component_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"component-panel","component-panel",-744929766),bh_ui.atom.chart.wrapper_2.component_panel,new cljs.core.Keyword(null,"config","config",994861415),bh_ui.atom.chart.bar_chart.config,new cljs.core.Keyword(null,"local-config","local-config",-2015662519),bh_ui.atom.chart.bar_chart.local_config], 0));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.chart.wrapper_2.base_chart], null),cljs.core.seq(input_params));
}));

(bh_ui.atom.chart.bar_chart.component.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bh_ui.atom.chart.bar_chart.component.cljs$lang$applyTo = (function (seq58738){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58738));
}));

bh_ui.atom.chart.bar_chart.meta_data = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rechart","bar","rechart/bar",1826874313),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),bh_ui.atom.chart.bar_chart.component,new cljs.core.Keyword(null,"ports","ports",-1014790862),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("port","sink","port/sink",185875552),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword("port","sink","port/sink",185875552)], null)], null)], null);
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-meta","register-meta",1726375773),bh_ui.atom.chart.bar_chart.meta_data], null));

//# sourceMappingURL=bh_ui.atom.chart.bar_chart.js.map
