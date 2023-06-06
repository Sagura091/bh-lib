goog.provide('bh_ui.utils');
bh_ui.utils.default_pub_sub = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pub","pub",-1189143908),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"sub","sub",-2093760025),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"container","container",-1736937707),""], null);
bh_ui.utils.h_wrap = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"-webkit-flex-flow","-webkit-flex-flow",667076810),"row wrap",new cljs.core.Keyword(null,"flex-flow","flex-flow",544537375),"row wrap"], null);
bh_ui.utils.v_wrap = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"-webkit-flex-flow","-webkit-flex-flow",667076810),"column wrap",new cljs.core.Keyword(null,"flex-flow","flex-flow",544537375),"column wrap"], null);
bh_ui.utils.config_tab_panel = (function bh_ui$utils$config_tab_panel(component_id){
return bh_ui.utils.helpers.config_tab_panel(component_id);
});
bh_ui.utils.component_id = (function bh_ui$utils$component_id(){
return bh_ui.utils.helpers.component_id();
});
bh_ui.utils.chart_config = (function bh_ui$utils$chart_config(v,data_panel,config_panel){
return bh_ui.utils.helpers.chart_config(v,data_panel,config_panel);
});
bh_ui.utils.path__GT_string = (function bh_ui$utils$path__GT_string(var_args){
var args__4870__auto__ = [];
var len__4864__auto___51041 = arguments.length;
var i__4865__auto___51042 = (0);
while(true){
if((i__4865__auto___51042 < len__4864__auto___51041)){
args__4870__auto__.push((arguments[i__4865__auto___51042]));

var G__51043 = (i__4865__auto___51042 + (1));
i__4865__auto___51042 = G__51043;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return bh_ui.utils.path__GT_string.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(bh_ui.utils.path__GT_string.cljs$core$IFn$_invoke$arity$variadic = (function (path){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(bh_ui.utils.helpers.path__GT_string,path);
}));

(bh_ui.utils.path__GT_string.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bh_ui.utils.path__GT_string.cljs$lang$applyTo = (function (seq51030){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51030));
}));

bh_ui.utils.path__GT_keyword = (function bh_ui$utils$path__GT_keyword(var_args){
var args__4870__auto__ = [];
var len__4864__auto___51044 = arguments.length;
var i__4865__auto___51045 = (0);
while(true){
if((i__4865__auto___51045 < len__4864__auto___51044)){
args__4870__auto__.push((arguments[i__4865__auto___51045]));

var G__51046 = (i__4865__auto___51045 + (1));
i__4865__auto___51045 = G__51046;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return bh_ui.utils.path__GT_keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(bh_ui.utils.path__GT_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (path){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(bh_ui.utils.helpers.path__GT_keyword,path);
}));

(bh_ui.utils.path__GT_keyword.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bh_ui.utils.path__GT_keyword.cljs$lang$applyTo = (function (seq51031){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51031));
}));

bh_ui.utils.init_container_locals = (function bh_ui$utils$init_container_locals(container_id,locals_and_defaults){
return bh_ui.utils.locals.init_container_locals(container_id,locals_and_defaults);
});
bh_ui.utils.subscribe_local = (function bh_ui$utils$subscribe_local(container_id,value_path){
return bh_ui.utils.locals.subscribe_local(container_id,value_path);
});
bh_ui.utils.resolve_subscribe_local = (function bh_ui$utils$resolve_subscribe_local(container_id,value_path){
return bh_ui.utils.locals.resolve_subscribe_local(container_id,value_path);
});
bh_ui.utils.dispatch_local = (function bh_ui$utils$dispatch_local(container_id,value_path,new_val){
return bh_ui.utils.locals.dispatch_local(container_id,value_path,new_val);
});
bh_ui.utils.build_subs = (function bh_ui$utils$build_subs(container_id,local_config){
return bh_ui.utils.locals.build_subs(container_id,local_config);
});
bh_ui.utils.resolve_sub = (function bh_ui$utils$resolve_sub(subs,path){
return bh_ui.utils.locals.resolve_sub(subs,path);
});
bh_ui.utils.init_container = (function bh_ui$utils$init_container(container_id){
return bh_ui.utils.container.init_container(container_id);
});
bh_ui.utils.subscribe_to_container = (function bh_ui$utils$subscribe_to_container(container_id,component_path){
return bh_ui.utils.container.subscribe_to_container(container_id,component_path);
});
bh_ui.utils.publish_to_container = (function bh_ui$utils$publish_to_container(container_id,component_path,new_val){
return bh_ui.utils.container.publish_to_container(container_id,component_path,new_val);
});
bh_ui.utils.override_subs = (function bh_ui$utils$override_subs(container_id,local_subs,subs){
return bh_ui.utils.container.override_subs(container_id,local_subs,subs);
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("events","init-remote-data-source","events/init-remote-data-source",1224460498),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__51032){
var vec__51033 = p__51032;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51033,(0),null);
var data_source_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51033,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"data-source-id","data-source-id",1961433289,null)], null)], null),cljs.core.list(new cljs.core.Symbol("log","info","log/info",1323354801,null),":events/init-remote-data-source",new cljs.core.Symbol(null,"data-source-id","data-source-id",1961433289,null))));

var result__38107__auto__ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"bh-ui.utils",null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [":events/init-remote-data-source",(function (){var result__38107__auto__ = data_source_id;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"data-source-id","data-source-id",1961433289,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__38107__auto__;
})()], null);
}),null)),null,-1821112297,null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("log","info","log/info",1323354801,null),":events/init-remote-data-source",new cljs.core.Symbol(null,"data-source-id","data-source-id",1961433289,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__38107__auto__;
}catch (e51036){var e = e51036;
throw e;
}}):(function (db,p__51037){
var vec__51038 = p__51037;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51038,(0),null);
var data_source_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51038,(1),null);
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"bh-ui.utils",null,108,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [":events/init-remote-data-source",data_source_id], null);
}),null)),null,29685970,null);
})));
bh_ui.utils.init_data_source = (function bh_ui$utils$init_data_source(data_source_id){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("events","init-remote-data-source","events/init-remote-data-source",1224460498),data_source_id], null));
});
bh_ui.utils.subscribe_data_source = (function bh_ui$utils$subscribe_data_source(data_source_id){
return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574),bh_ui.utils.path__GT_keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data_source_id], 0))], null));
});

//# sourceMappingURL=bh_ui.utils.js.map
