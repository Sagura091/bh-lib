goog.provide('subscriptions');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("subscriptions","start","subscriptions/start",1615772145),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__48135,p__48136){
var map__48137 = p__48135;
var map__48137__$1 = cljs.core.__destructure_map(map__48137);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48137__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__48138 = p__48136;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48138,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48138,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"id","id",252129435,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"start!","start!",1571930471,null),new cljs.core.Symbol(null,"id","id",252129435,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"pub-sub-started?","pub-sub-started?",1238574313),true)], null)));

var result__35734__auto___48293 = (function (){var G__48143 = (function (){var result__35734__auto___48293 = id;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(2),new cljs.core.Keyword(null,"result","result",1415092211),result__35734__auto___48293,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__35734__auto___48293;
})();
return (subscriptions.start_BANG_.cljs$core$IFn$_invoke$arity$1 ? subscriptions.start_BANG_.cljs$core$IFn$_invoke$arity$1(G__48143) : subscriptions.start_BANG_.call(null,G__48143));
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__35734__auto___48293,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"start!","start!",1571930471,null),new cljs.core.Symbol(null,"id","id",252129435,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));


var result__35734__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var result__35734__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__35734__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__35734__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__35734__auto__;
})(),new cljs.core.Keyword(null,"pub-sub-started?","pub-sub-started?",1238574313),true);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__35734__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"pub-sub-started?","pub-sub-started?",1238574313),true),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__35734__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__35734__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"pub-sub-started?","pub-sub-started?",1238574313),true)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__35734__auto__;
}catch (e48141){var e = e48141;
throw e;
}}):(function (p__48152,p__48153){
var map__48154 = p__48152;
var map__48154__$1 = cljs.core.__destructure_map(map__48154);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48154__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__48155 = p__48153;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48155,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48155,(1),null);
(subscriptions.start_BANG_.cljs$core$IFn$_invoke$arity$1 ? subscriptions.start_BANG_.cljs$core$IFn$_invoke$arity$1(id) : subscriptions.start_BANG_.call(null,id));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"pub-sub-started?","pub-sub-started?",1238574313),true)], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("subscriptions","stop","subscriptions/stop",378631176),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),cljs.core.list(new cljs.core.Symbol(null,"stop-router!","stop-router!",1810263351,null))));

var result__35734__auto__ = (subscriptions.stop_router_BANG_.cljs$core$IFn$_invoke$arity$0 ? subscriptions.stop_router_BANG_.cljs$core$IFn$_invoke$arity$0() : subscriptions.stop_router_BANG_.call(null));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__35734__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"stop-router!","stop-router!",1810263351,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__35734__auto__;
}catch (e48161){var e = e48161;
throw e;
}}):(function (_,___$1){
return (subscriptions.stop_router_BANG_.cljs$core$IFn$_invoke$arity$0 ? subscriptions.stop_router_BANG_.cljs$core$IFn$_invoke$arity$0() : subscriptions.stop_router_BANG_.call(null));
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("subscriptions","cancel-all","subscriptions/cancel-all",1227150807),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__48164,_){
var map__48165 = p__48164;
var map__48165__$1 = cljs.core.__destructure_map(map__48165);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48165__$1,new cljs.core.Keyword(null,"db","db",993250759));
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null)], null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"user-id","user-id",1433709236,null),cljs.core.list(new cljs.core.Keyword(null,"user-id","user-id",-206822291),new cljs.core.Symbol(null,"db","db",-1661185010,null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol(null,"default-header","default-header",-277631459,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),"/subscribe/cancel-all",new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),new cljs.core.Symbol(null,"user-id","user-id",1433709236,null)], null)], null))], null))));

var result__35734__auto__ = (function (){var user_id = (function (){var result__35734__auto__ = new cljs.core.Keyword(null,"user-id","user-id",-206822291).cljs$core$IFn$_invoke$arity$1((function (){var result__35734__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(5),new cljs.core.Keyword(null,"result","result",1415092211),result__35734__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__35734__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__35734__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword(null,"user-id","user-id",-206822291),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__35734__auto__;
})();
var result__35734__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),(function (){var result__35734__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var result__35734__auto__ = events.default_header;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(9),new cljs.core.Keyword(null,"result","result",1415092211),result__35734__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"default-header","default-header",-277631459,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__35734__auto__;
})(),(function (){var result__35734__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),"/subscribe/cancel-all",new cljs.core.Keyword(null,"params","params",710516235),(function (){var result__35734__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),(function (){var result__35734__auto__ = user_id;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(18),new cljs.core.Keyword(null,"result","result",1415092211),result__35734__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"user-id","user-id",1433709236,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__35734__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(16),new cljs.core.Keyword(null,"result","result",1415092211),result__35734__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),new cljs.core.Symbol(null,"user-id","user-id",1433709236,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__35734__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(10),new cljs.core.Keyword(null,"result","result",1415092211),result__35734__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),"/subscribe/cancel-all",new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),new cljs.core.Symbol(null,"user-id","user-id",1433709236,null)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__35734__auto__;
})()], 0));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(8),new cljs.core.Keyword(null,"result","result",1415092211),result__35734__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol(null,"default-header","default-header",-277631459,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),"/subscribe/cancel-all",new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),new cljs.core.Symbol(null,"user-id","user-id",1433709236,null)], null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__35734__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(6),new cljs.core.Keyword(null,"result","result",1415092211),result__35734__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol(null,"default-header","default-header",-277631459,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),"/subscribe/cancel-all",new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),new cljs.core.Symbol(null,"user-id","user-id",1433709236,null)], null)], null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__35734__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__35734__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"user-id","user-id",1433709236,null),cljs.core.list(new cljs.core.Keyword(null,"user-id","user-id",-206822291),new cljs.core.Symbol(null,"db","db",-1661185010,null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol(null,"default-header","default-header",-277631459,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),"/subscribe/cancel-all",new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),new cljs.core.Symbol(null,"user-id","user-id",1433709236,null)], null)], null))], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__35734__auto__;
}catch (e48169){var e = e48169;
throw e;
}}):(function (p__48196,_){
var map__48197 = p__48196;
var map__48197__$1 = cljs.core.__destructure_map(map__48197);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48197__$1,new cljs.core.Keyword(null,"db","db",993250759));
var user_id = new cljs.core.Keyword(null,"user-id","user-id",-206822291).cljs$core$IFn$_invoke$arity$1(db);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([events.default_header,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),"/subscribe/cancel-all",new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),user_id], null)], null)], 0))], null);
})));
subscriptions.router_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
subscriptions.ch_chsk = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
subscriptions.chsk_send_BANG_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
subscriptions.chsk_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
subscriptions.config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"packer","packer",66077544),taoensso.sente.packers.transit.get_transit_packer.cljs$core$IFn$_invoke$arity$0()], null);
subscriptions.state_watcher = (function subscriptions$state_watcher(_key,_atom,_old_state,new_state){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"subscriptions",null,54,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New state",new_state], null);
}),null)),null,-1879417686,null);
});
subscriptions.create_client_BANG_ = (function subscriptions$create_client_BANG_(id){
var map__48270 = taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic("/chsk",csrf._QMARK_csrf_token,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(subscriptions.config,new cljs.core.Keyword(null,"client-id","client-id",-464622140),id)], 0));
var map__48270__$1 = cljs.core.__destructure_map(map__48270);
var ch_recv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48270__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48270__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48270__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
cljs.core.reset_BANG_(subscriptions.ch_chsk,ch_recv);

cljs.core.reset_BANG_(subscriptions.chsk_send_BANG_,send_fn);

return cljs.core.add_watch(state,new cljs.core.Keyword(null,"state-watcher","state-watcher",725059372),subscriptions.state_watcher);
});
subscriptions.stop_router_BANG_ = (function subscriptions$stop_router_BANG_(){
var temp__5753__auto__ = cljs.core.deref(subscriptions.router_);
if(cljs.core.truth_(temp__5753__auto__)){
var stop_f = temp__5753__auto__;
return (stop_f.cljs$core$IFn$_invoke$arity$0 ? stop_f.cljs$core$IFn$_invoke$arity$0() : stop_f.call(null));
} else {
return null;
}
});
subscriptions.start_router_BANG_ = (function subscriptions$start_router_BANG_(){
subscriptions.stop_router_BANG_();

return cljs.core.reset_BANG_(subscriptions.router_,taoensso.sente.start_client_chsk_router_BANG_(cljs.core.deref(subscriptions.ch_chsk),subscription_handlers.event_msg_handler));
});
subscriptions.start_BANG_ = (function subscriptions$start_BANG_(id){
subscriptions.create_client_BANG_(id);

return subscriptions.start_router_BANG_();
});

//# sourceMappingURL=subscriptions.js.map
