goog.provide('subscription_handlers');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("subscription-handlers","fully-opened-socket-start","subscription-handlers/fully-opened-socket-start",1566962494),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__47107){
var vec__47108 = p__47107;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47108,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47108,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"id","id",252129435,null)], null)], null),cljs.core.list(new cljs.core.Symbol("log","info","log/info",1323354801,null),"::sub-handler/fully-opened-websocket-start",new cljs.core.Symbol(null,"id","id",252129435,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"pub-sub-started?","pub-sub-started?",1238574313),true)));

var result__35734__auto___47195 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"subscription-handlers",null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["::sub-handler/fully-opened-websocket-start",(function (){var result__35734__auto___47195 = id;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__35734__auto___47195,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__35734__auto___47195;
})()], null);
}),null)),null,1500649268,null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__35734__auto___47195,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("log","info","log/info",1323354801,null),"::sub-handler/fully-opened-websocket-start",new cljs.core.Symbol(null,"id","id",252129435,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));


var result__35734__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__35734__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(2),new cljs.core.Keyword(null,"result","result",1415092211),result__35734__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__35734__auto__;
})(),new cljs.core.Keyword(null,"pub-sub-started?","pub-sub-started?",1238574313),true);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__35734__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"pub-sub-started?","pub-sub-started?",1238574313),true),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__35734__auto__;
}catch (e47111){var e = e47111;
throw e;
}}):(function (db,p__47116){
var vec__47117 = p__47116;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47117,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47117,(1),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"subscription-handlers",null,11,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["::sub-handler/fully-opened-websocket-start",id], null);
}),null)),null,-575269416,null);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"pub-sub-started?","pub-sub-started?",1238574313),true);
})));
if((typeof subscription_handlers !== 'undefined') && (typeof subscription_handlers.event_msg_handler !== 'undefined')){
} else {
subscription_handlers.event_msg_handler = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__47121 = cljs.core.get_global_hierarchy;
return (fexpr__47121.cljs$core$IFn$_invoke$arity$0 ? fexpr__47121.cljs$core$IFn$_invoke$arity$0() : fexpr__47121.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("subscription-handlers","event-msg-handler"),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
subscription_handlers.event_msg_handler.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__47122){
var map__47123 = p__47122;
var map__47123__$1 = cljs.core.__destructure_map(map__47123);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47123__$1,new cljs.core.Keyword(null,"event","event",301435442));
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"subscription-handlers",null,18,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unhandled event:",event], null);
}),null)),null,2025405279,null);
}));
subscription_handlers.event_msg_handler.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),(function (p__47126){
var map__47127 = p__47126;
var map__47127__$1 = cljs.core.__destructure_map(map__47127);
var msg = map__47127__$1;
var _ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47127__$1,new cljs.core.Keyword(null,"_","_",1453416199));
var _QMARK_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47127__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
return data_source_handler.data_source_msg_handler(_QMARK_data);
}));
subscription_handlers.event_msg_handler.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),(function (p__47133){
var map__47134 = p__47133;
var map__47134__$1 = cljs.core.__destructure_map(map__47134);
var ev_msg = map__47134__$1;
var _QMARK_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47134__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var vec__47135 = _QMARK_data;
var old_state_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47135,(0),null);
var new_state_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47135,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"first-open?","first-open?",396686530).cljs$core$IFn$_invoke$arity$1(new_state_map))){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subscription-handlers","fully-opened-socket-start","subscription-handlers/fully-opened-socket-start",1566962494)], null));

return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"subscription-handlers",null,32,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Channel socket successfully established!: ",new_state_map], null);
}),null)),null,1979443077,null);
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"subscription-handlers",null,33,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Channel socket state change: ",new_state_map], null);
}),null)),null,-794712557,null);
}
}));
subscription_handlers.event_msg_handler.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),(function (p__47139){
var map__47140 = p__47139;
var map__47140__$1 = cljs.core.__destructure_map(map__47140);
var ev_msg = map__47140__$1;
var _QMARK_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47140__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var vec__47153 = _QMARK_data;
var _QMARK_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47153,(0),null);
var _QMARK_csrf_token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47153,(1),null);
var _QMARK_handshake_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47153,(2),null);
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"subscription-handlers",null,38,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WS Handshake for: ",_QMARK_uid," data: ",_QMARK_handshake_data], null);
}),null)),null,-12802286,null);
}));
subscription_handlers.event_msg_handler.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304),(function (p__47159){
var map__47160 = p__47159;
var map__47160__$1 = cljs.core.__destructure_map(map__47160);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47160__$1,new cljs.core.Keyword(null,"event","event",301435442));
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"subscription-handlers",null,42,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WS Ping"], null);
}),null)),null,-1577064879,null);
}));

//# sourceMappingURL=subscription_handlers.js.map
