goog.provide('ui_component.utils');
ui_component.utils.default_pub_sub = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pub","pub",-1189143908),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"sub","sub",-2093760025),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"container","container",-1736937707),""], null);
ui_component.utils.h_wrap = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"-webkit-flex-flow","-webkit-flex-flow",667076810),"row wrap",new cljs.core.Keyword(null,"flex-flow","flex-flow",544537375),"row wrap"], null);
ui_component.utils.v_wrap = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"-webkit-flex-flow","-webkit-flex-flow",667076810),"column wrap",new cljs.core.Keyword(null,"flex-flow","flex-flow",544537375),"column wrap"], null);
ui_component.utils.config_tab_panel = (function ui_component$utils$config_tab_panel(component_id){
return ui_component.utils.helpers.config_tab_panel(component_id);
});
ui_component.utils.component_id = (function ui_component$utils$component_id(){
return ui_component.utils.helpers.component_id();
});
ui_component.utils.chart_config = (function ui_component$utils$chart_config(v,data_panel,config_panel){
return ui_component.utils.helpers.chart_config(v,data_panel,config_panel);
});
ui_component.utils.path__GT_string = (function ui_component$utils$path__GT_string(var_args){
var args__4870__auto__ = [];
var len__4864__auto___51094 = arguments.length;
var i__4865__auto___51095 = (0);
while(true){
if((i__4865__auto___51095 < len__4864__auto___51094)){
args__4870__auto__.push((arguments[i__4865__auto___51095]));

var G__51096 = (i__4865__auto___51095 + (1));
i__4865__auto___51095 = G__51096;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return ui_component.utils.path__GT_string.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(ui_component.utils.path__GT_string.cljs$core$IFn$_invoke$arity$variadic = (function (path){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ui_component.utils.helpers.path__GT_string,path);
}));

(ui_component.utils.path__GT_string.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(ui_component.utils.path__GT_string.cljs$lang$applyTo = (function (seq51083){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51083));
}));

ui_component.utils.path__GT_keyword = (function ui_component$utils$path__GT_keyword(var_args){
var args__4870__auto__ = [];
var len__4864__auto___51097 = arguments.length;
var i__4865__auto___51098 = (0);
while(true){
if((i__4865__auto___51098 < len__4864__auto___51097)){
args__4870__auto__.push((arguments[i__4865__auto___51098]));

var G__51099 = (i__4865__auto___51098 + (1));
i__4865__auto___51098 = G__51099;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return ui_component.utils.path__GT_keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(ui_component.utils.path__GT_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (path){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ui_component.utils.helpers.path__GT_keyword,path);
}));

(ui_component.utils.path__GT_keyword.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(ui_component.utils.path__GT_keyword.cljs$lang$applyTo = (function (seq51084){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51084));
}));

ui_component.utils.init_container_locals = (function ui_component$utils$init_container_locals(container_id,locals_and_defaults){
return ui_component.utils.locals.init_container_locals(container_id,locals_and_defaults);
});
ui_component.utils.subscribe_local = (function ui_component$utils$subscribe_local(container_id,value_path){
return ui_component.utils.locals.subscribe_local(container_id,value_path);
});
ui_component.utils.resolve_subscribe_local = (function ui_component$utils$resolve_subscribe_local(container_id,value_path){
return ui_component.utils.locals.resolve_subscribe_local(container_id,value_path);
});
ui_component.utils.dispatch_local = (function ui_component$utils$dispatch_local(container_id,value_path,new_val){
return ui_component.utils.locals.dispatch_local(container_id,value_path,new_val);
});
ui_component.utils.build_subs = (function ui_component$utils$build_subs(container_id,local_config){
return ui_component.utils.locals.build_subs(container_id,local_config);
});
ui_component.utils.resolve_sub = (function ui_component$utils$resolve_sub(subs__$1,path){
return ui_component.utils.locals.resolve_sub(subs__$1,path);
});
ui_component.utils.init_container = (function ui_component$utils$init_container(container_id){
return ui_component.utils.container.init_container(container_id);
});
ui_component.utils.subscribe_to_container = (function ui_component$utils$subscribe_to_container(container_id,component_path){
return ui_component.utils.container.subscribe_to_container(container_id,component_path);
});
ui_component.utils.publish_to_container = (function ui_component$utils$publish_to_container(container_id,component_path,new_val){
return ui_component.utils.container.publish_to_container(container_id,component_path,new_val);
});
ui_component.utils.override_subs = (function ui_component$utils$override_subs(container_id,local_subs,subs__$1){
return ui_component.utils.container.override_subs(container_id,local_subs,subs__$1);
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("events","init-remote-data-source","events/init-remote-data-source",1224460498),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__51085){
var vec__51086 = p__51085;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51086,(0),null);
var data_source_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51086,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"data-source-id","data-source-id",1961433289,null)], null)], null),cljs.core.list(new cljs.core.Symbol("log","info","log/info",1323354801,null),":events/init-remote-data-source",new cljs.core.Symbol(null,"data-source-id","data-source-id",1961433289,null))));

var result__35734__auto__ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"ui-component.utils",null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [":events/init-remote-data-source",(function (){var result__35734__auto__ = data_source_id;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__35734__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"data-source-id","data-source-id",1961433289,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__35734__auto__;
})()], null);
}),null)),null,1071168372,null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__35734__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("log","info","log/info",1323354801,null),":events/init-remote-data-source",new cljs.core.Symbol(null,"data-source-id","data-source-id",1961433289,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__35734__auto__;
}catch (e51089){var e = e51089;
throw e;
}}):(function (db,p__51090){
var vec__51091 = p__51090;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51091,(0),null);
var data_source_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51091,(1),null);
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"ui-component.utils",null,108,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [":events/init-remote-data-source",data_source_id], null);
}),null)),null,23521173,null);
})));
ui_component.utils.init_data_source = (function ui_component$utils$init_data_source(data_source_id){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("events","init-remote-data-source","events/init-remote-data-source",1224460498),data_source_id], null));
});
ui_component.utils.subscribe_data_source = (function ui_component$utils$subscribe_data_source(data_source_id){
return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574),ui_component.utils.path__GT_keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data_source_id], 0))], null));
});

//# sourceMappingURL=ui_component.utils.js.map
