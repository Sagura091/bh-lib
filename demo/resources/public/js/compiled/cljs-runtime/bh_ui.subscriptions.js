goog.provide('bh_ui.subscriptions');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bh-ui.subscriptions","start","bh-ui.subscriptions/start",774061744),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__47989,p__47990){
var map__47992 = p__47989;
var map__47992__$1 = cljs.core.__destructure_map(map__47992);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47992__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47993 = p__47990;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47993,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47993,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"id","id",252129435,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"start!","start!",1571930471,null),new cljs.core.Symbol(null,"id","id",252129435,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"pub-sub-started?","pub-sub-started?",1238574313),true)], null)));

var result__38107__auto___48299 = (function (){var G__48012 = (function (){var result__38107__auto___48299 = id;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(2),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto___48299,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__38107__auto___48299;
})();
return (bh_ui.subscriptions.start_BANG_.cljs$core$IFn$_invoke$arity$1 ? bh_ui.subscriptions.start_BANG_.cljs$core$IFn$_invoke$arity$1(G__48012) : bh_ui.subscriptions.start_BANG_.call(null,G__48012));
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto___48299,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"start!","start!",1571930471,null),new cljs.core.Symbol(null,"id","id",252129435,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));


var result__38107__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var result__38107__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__38107__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__38107__auto__;
})(),new cljs.core.Keyword(null,"pub-sub-started?","pub-sub-started?",1238574313),true);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"pub-sub-started?","pub-sub-started?",1238574313),true),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__38107__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"pub-sub-started?","pub-sub-started?",1238574313),true)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__38107__auto__;
}catch (e48011){var e = e48011;
throw e;
}}):(function (p__48027,p__48028){
var map__48029 = p__48027;
var map__48029__$1 = cljs.core.__destructure_map(map__48029);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48029__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__48030 = p__48028;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48030,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48030,(1),null);
(bh_ui.subscriptions.start_BANG_.cljs$core$IFn$_invoke$arity$1 ? bh_ui.subscriptions.start_BANG_.cljs$core$IFn$_invoke$arity$1(id) : bh_ui.subscriptions.start_BANG_.call(null,id));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"pub-sub-started?","pub-sub-started?",1238574313),true)], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bh-ui.subscriptions","stop","bh-ui.subscriptions/stop",1270216917),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),cljs.core.list(new cljs.core.Symbol(null,"stop-router!","stop-router!",1810263351,null))));

var result__38107__auto__ = (bh_ui.subscriptions.stop_router_BANG_.cljs$core$IFn$_invoke$arity$0 ? bh_ui.subscriptions.stop_router_BANG_.cljs$core$IFn$_invoke$arity$0() : bh_ui.subscriptions.stop_router_BANG_.call(null));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"stop-router!","stop-router!",1810263351,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__38107__auto__;
}catch (e48057){var e = e48057;
throw e;
}}):(function (_,___$1){
return (bh_ui.subscriptions.stop_router_BANG_.cljs$core$IFn$_invoke$arity$0 ? bh_ui.subscriptions.stop_router_BANG_.cljs$core$IFn$_invoke$arity$0() : bh_ui.subscriptions.stop_router_BANG_.call(null));
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bh-ui.subscriptions","cancel-all","bh-ui.subscriptions/cancel-all",-2046733940),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__48071,_){
var map__48072 = p__48071;
var map__48072__$1 = cljs.core.__destructure_map(map__48072);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48072__$1,new cljs.core.Keyword(null,"db","db",993250759));
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null)], null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"user-id","user-id",1433709236,null),cljs.core.list(new cljs.core.Keyword(null,"user-id","user-id",-206822291),new cljs.core.Symbol(null,"db","db",-1661185010,null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol(null,"default-header","default-header",-277631459,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),"/subscribe/cancel-all",new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),new cljs.core.Symbol(null,"user-id","user-id",1433709236,null)], null)], null))], null))));

var result__38107__auto__ = (function (){var user_id = (function (){var result__38107__auto__ = new cljs.core.Keyword(null,"user-id","user-id",-206822291).cljs$core$IFn$_invoke$arity$1((function (){var result__38107__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(5),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__38107__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword(null,"user-id","user-id",-206822291),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__38107__auto__;
})();
var result__38107__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),(function (){var result__38107__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var result__38107__auto__ = bh_ui.events.default_header;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(9),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"default-header","default-header",-277631459,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__38107__auto__;
})(),(function (){var result__38107__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),"/subscribe/cancel-all",new cljs.core.Keyword(null,"params","params",710516235),(function (){var result__38107__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),(function (){var result__38107__auto__ = user_id;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(18),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"user-id","user-id",1433709236,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__38107__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(16),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),new cljs.core.Symbol(null,"user-id","user-id",1433709236,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__38107__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(10),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),"/subscribe/cancel-all",new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),new cljs.core.Symbol(null,"user-id","user-id",1433709236,null)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__38107__auto__;
})()], 0));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(8),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol(null,"default-header","default-header",-277631459,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),"/subscribe/cancel-all",new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),new cljs.core.Symbol(null,"user-id","user-id",1433709236,null)], null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__38107__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(6),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol(null,"default-header","default-header",-277631459,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),"/subscribe/cancel-all",new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),new cljs.core.Symbol(null,"user-id","user-id",1433709236,null)], null)], null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__38107__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"user-id","user-id",1433709236,null),cljs.core.list(new cljs.core.Keyword(null,"user-id","user-id",-206822291),new cljs.core.Symbol(null,"db","db",-1661185010,null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol(null,"default-header","default-header",-277631459,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),"/subscribe/cancel-all",new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),new cljs.core.Symbol(null,"user-id","user-id",1433709236,null)], null)], null))], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__38107__auto__;
}catch (e48164){var e = e48164;
throw e;
}}):(function (p__48191,_){
var map__48192 = p__48191;
var map__48192__$1 = cljs.core.__destructure_map(map__48192);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48192__$1,new cljs.core.Keyword(null,"db","db",993250759));
var user_id = new cljs.core.Keyword(null,"user-id","user-id",-206822291).cljs$core$IFn$_invoke$arity$1(db);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bh_ui.events.default_header,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),"/subscribe/cancel-all",new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),user_id], null)], null)], 0))], null);
})));
bh_ui.subscriptions.router_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
bh_ui.subscriptions.ch_chsk = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
bh_ui.subscriptions.chsk_send_BANG_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
bh_ui.subscriptions.chsk_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
bh_ui.subscriptions.config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"packer","packer",66077544),taoensso.sente.packers.transit.get_transit_packer.cljs$core$IFn$_invoke$arity$0()], null);
bh_ui.subscriptions.state_watcher = (function bh_ui$subscriptions$state_watcher(_key,_atom,_old_state,new_state){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"bh-ui.subscriptions",null,54,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New state",new_state], null);
}),null)),null,-1661036723,null);
});
bh_ui.subscriptions.create_client_BANG_ = (function bh_ui$subscriptions$create_client_BANG_(id){
var map__48227 = taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic("/chsk",bh_ui.csrf._QMARK_csrf_token,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bh_ui.subscriptions.config,new cljs.core.Keyword(null,"client-id","client-id",-464622140),id)], 0));
var map__48227__$1 = cljs.core.__destructure_map(map__48227);
var ch_recv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48227__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48227__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48227__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
cljs.core.reset_BANG_(bh_ui.subscriptions.ch_chsk,ch_recv);

cljs.core.reset_BANG_(bh_ui.subscriptions.chsk_send_BANG_,send_fn);

return cljs.core.add_watch(state,new cljs.core.Keyword(null,"state-watcher","state-watcher",725059372),bh_ui.subscriptions.state_watcher);
});
bh_ui.subscriptions.stop_router_BANG_ = (function bh_ui$subscriptions$stop_router_BANG_(){
var temp__5753__auto__ = cljs.core.deref(bh_ui.subscriptions.router_);
if(cljs.core.truth_(temp__5753__auto__)){
var stop_f = temp__5753__auto__;
return (stop_f.cljs$core$IFn$_invoke$arity$0 ? stop_f.cljs$core$IFn$_invoke$arity$0() : stop_f.call(null));
} else {
return null;
}
});
bh_ui.subscriptions.start_router_BANG_ = (function bh_ui$subscriptions$start_router_BANG_(){
bh_ui.subscriptions.stop_router_BANG_();

return cljs.core.reset_BANG_(bh_ui.subscriptions.router_,taoensso.sente.start_client_chsk_router_BANG_(cljs.core.deref(bh_ui.subscriptions.ch_chsk),bh_ui.subscription_handlers.event_msg_handler));
});
bh_ui.subscriptions.start_BANG_ = (function bh_ui$subscriptions$start_BANG_(id){
bh_ui.subscriptions.create_client_BANG_(id);

return bh_ui.subscriptions.start_router_BANG_();
});

//# sourceMappingURL=bh_ui.subscriptions.js.map
