goog.provide('bh_ui.events');
bh_ui.events.default_header = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"format","format",-1306924766),(ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.transit_request_format.call(null)),new cljs.core.Keyword(null,"response-format","response-format",1664465322),(ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.transit_response_format.call(null)),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["x-csrf-token",bh_ui.csrf._QMARK_csrf_token], null)], null);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bh-ui.events","data-update","bh-ui.events/data-update",-968055353),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__47033){
var vec__47034 = p__47033;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47034,(0),null);
var map__47037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47034,(1),null);
var map__47037__$1 = cljs.core.__destructure_map(map__47037);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47037__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47037__$1,new cljs.core.Keyword(null,"value","value",305978217));
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null)], null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.Symbol(null,"id","id",252129435,null)], null),new cljs.core.Symbol(null,"value","value",1946509744,null))));

var result__38107__auto__ = cljs.core.assoc_in((function (){var result__38107__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(2),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__38107__auto__;
})(),(function (){var result__38107__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sources","sources",-321166424),(function (){var result__38107__auto__ = id;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(5),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__38107__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.Symbol(null,"id","id",252129435,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__38107__auto__;
})(),(function (){var result__38107__auto__ = value;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(6),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__38107__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.Symbol(null,"id","id",252129435,null)], null),new cljs.core.Symbol(null,"value","value",1946509744,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__38107__auto__;
}catch (e47047){var e = e47047;
throw e;
}}):(function (db,p__47108){
var vec__47110 = p__47108;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47110,(0),null);
var map__47113 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47110,(1),null);
var map__47113__$1 = cljs.core.__destructure_map(map__47113);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47113__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47113__$1,new cljs.core.Keyword(null,"value","value",305978217));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sources","sources",-321166424),id], null),value);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bh-ui.events","init-locals","bh-ui.events/init-locals",1230096386),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__47116){
var vec__47117 = p__47116;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47117,(0),null);
var container = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47117,(1),null);
var init_vals = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47117,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"container","container",-96406180,null),new cljs.core.Symbol(null,"init-vals","init-vals",709014861,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"container","container",-96406180,null)),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),new cljs.core.Symbol(null,"db","db",-1661185010,null)),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"container","container",-96406180,null),new cljs.core.Symbol(null,"init-vals","init-vals",709014861,null))))));

var result__38107__auto__ = (cljs.core.truth_((function (){var result__38107__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var result__38107__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__38107__auto__;
})(),(function (){var result__38107__auto__ = container;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"container","container",-96406180,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__38107__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(2),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"container","container",-96406180,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__38107__auto__;
})())?(function (){var result__38107__auto__ = (function (){var result__38107__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),3,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(6),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__38107__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(5),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__38107__auto__;
})():(function (){var result__38107__auto__ = (function (){var result__38107__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__38107__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),4,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(9),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__38107__auto__;
})(),(function (){var result__38107__auto__ = container;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),3,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(10),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"container","container",-96406180,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__38107__auto__;
})(),(function (){var result__38107__auto__ = init_vals;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(11),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"init-vals","init-vals",709014861,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__38107__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(8),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"container","container",-96406180,null),new cljs.core.Symbol(null,"init-vals","init-vals",709014861,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__38107__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(7),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"container","container",-96406180,null),new cljs.core.Symbol(null,"init-vals","init-vals",709014861,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__38107__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"container","container",-96406180,null)),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),new cljs.core.Symbol(null,"db","db",-1661185010,null)),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"container","container",-96406180,null),new cljs.core.Symbol(null,"init-vals","init-vals",709014861,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__38107__auto__;
}catch (e47132){var e = e47132;
throw e;
}}):(function (db,p__47172){
var vec__47174 = p__47172;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47174,(0),null);
var container = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47174,(1),null);
var init_vals = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47174,(2),null);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,container))){
return db;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,container,init_vals);
}
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bh-ui.events","good-subscribe-result","bh-ui.events/good-subscribe-result",-2118615417),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__47183){
var vec__47184 = p__47183;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47184,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47184,(1),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47184,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"result","result",-1239343558,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current","current",552492924,null),cljs.core.list(new cljs.core.Keyword(null,"subscribed","subscribed",1012088257),new cljs.core.Symbol(null,"db","db",-1661185010,null))], null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"subscribed","subscribed",1012088257),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.Symbol(null,"source","source",1206599988,null))),new cljs.core.Keyword(null,"subscribe-error","subscribe-error",-67975259),""))));

var result__38107__auto__ = (function (){var current = (function (){var result__38107__auto__ = new cljs.core.Keyword(null,"subscribed","subscribed",1012088257).cljs$core$IFn$_invoke$arity$1((function (){var result__38107__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(5),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__38107__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword(null,"subscribed","subscribed",1012088257),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__38107__auto__;
})();
var result__38107__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((function (){var result__38107__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),3,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(7),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__38107__auto__;
})(),new cljs.core.Keyword(null,"subscribed","subscribed",1012088257),(function (){var result__38107__auto__ = cljs.core.set((function (){var result__38107__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$3((function (){var result__38107__auto__ = cljs.core.conj;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(11),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__38107__auto__;
})(),(function (){var result__38107__auto__ = current;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(12),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__38107__auto__;
})(),(function (){var result__38107__auto__ = source;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(13),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__38107__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(10),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.Symbol(null,"source","source",1206599988,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__38107__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(9),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.Symbol(null,"source","source",1206599988,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__38107__auto__;
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"subscribe-error","subscribe-error",-67975259),""], 0));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(6),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"subscribed","subscribed",1012088257),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.Symbol(null,"source","source",1206599988,null))),new cljs.core.Keyword(null,"subscribe-error","subscribe-error",-67975259),""),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__38107__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current","current",552492924,null),cljs.core.list(new cljs.core.Keyword(null,"subscribed","subscribed",1012088257),new cljs.core.Symbol(null,"db","db",-1661185010,null))], null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"subscribed","subscribed",1012088257),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.Symbol(null,"source","source",1206599988,null))),new cljs.core.Keyword(null,"subscribe-error","subscribe-error",-67975259),"")),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__38107__auto__;
}catch (e47242){var e = e47242;
throw e;
}}):(function (db,p__47249){
var vec__47251 = p__47249;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47251,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47251,(1),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47251,(2),null);
var current = new cljs.core.Keyword(null,"subscribed","subscribed",1012088257).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"subscribed","subscribed",1012088257),cljs.core.set(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,current,source)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"subscribe-error","subscribe-error",-67975259),""], 0));
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bh-ui.events","bad-subscribe-result","bh-ui.events/bad-subscribe-result",155192832),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__47260){
var vec__47261 = p__47260;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47261,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47261,(1),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47261,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"result","result",-1239343558,null)], null)], null),cljs.core.list(new cljs.core.Symbol("log","info","log/info",1323354801,null),"::bad-subscribe-result",new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"result","result",-1239343558,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"subscribe-error","subscribe-error",-67975259),new cljs.core.Symbol(null,"result","result",-1239343558,null))));

var result__38107__auto___47414 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"bh-ui.events",null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["::bad-subscribe-result",(function (){var result__38107__auto___47414 = source;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto___47414,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__38107__auto___47414;
})(),(function (){var result__38107__auto___47414 = result;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto___47414,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__38107__auto___47414;
})()], null);
}),null)),null,2104086493,null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto___47414,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("log","info","log/info",1323354801,null),"::bad-subscribe-result",new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"result","result",-1239343558,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));


var result__38107__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__38107__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(2),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__38107__auto__;
})(),new cljs.core.Keyword(null,"subscribe-error","subscribe-error",-67975259),(function (){var result__38107__auto__ = result;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__38107__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"subscribe-error","subscribe-error",-67975259),new cljs.core.Symbol(null,"result","result",-1239343558,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__38107__auto__;
}catch (e47275){var e = e47275;
throw e;
}}):(function (db,p__47305){
var vec__47307 = p__47305;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47307,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47307,(1),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47307,(2),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"bh-ui.events",null,50,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["::bad-subscribe-result",source,result], null);
}),null)),null,1202420585,null);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"subscribe-error","subscribe-error",-67975259),result);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bh-ui.events","subscribe-to","bh-ui.events/subscribe-to",1619622707),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__47319,p__47320){
var map__47321 = p__47319;
var map__47321__$1 = cljs.core.__destructure_map(map__47321);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47321__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47322 = p__47320;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47322,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47322,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"source","source",1206599988,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"user-id","user-id",1433709236,null),cljs.core.list(new cljs.core.Keyword(null,"user-id","user-id",-206822291),new cljs.core.Symbol(null,"db","db",-1661185010,null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol(null,"default-header","default-header",-277631459,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),"/subscribe/data-source",new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),new cljs.core.Symbol(null,"user-id","user-id",1433709236,null),new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574),new cljs.core.Symbol(null,"source","source",1206599988,null)], null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bh-ui.events","good-subscribe-result","bh-ui.events/good-subscribe-result",-2118615417),new cljs.core.Symbol(null,"source","source",1206599988,null)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bh-ui.events","bad-subscribe-result","bh-ui.events/bad-subscribe-result",155192832),new cljs.core.Symbol(null,"source","source",1206599988,null)], null)], null))], null))));

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
})(),(function (){var result__38107__auto__ = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),"/subscribe/data-source",new cljs.core.Keyword(null,"params","params",710516235),(function (){var result__38107__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),(function (){var result__38107__auto__ = user_id;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(18),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"user-id","user-id",1433709236,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__38107__auto__;
})(),new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574),(function (){var result__38107__auto__ = source;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(20),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__38107__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(16),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),new cljs.core.Symbol(null,"user-id","user-id",1433709236,null),new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574),new cljs.core.Symbol(null,"source","source",1206599988,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__38107__auto__;
})(),new cljs.core.Keyword(null,"on-success","on-success",1786904109),(function (){var result__38107__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bh-ui.events","good-subscribe-result","bh-ui.events/good-subscribe-result",-2118615417),(function (){var result__38107__auto__ = source;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),3,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(24),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__38107__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(22),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bh-ui.events","good-subscribe-result","bh-ui.events/good-subscribe-result",-2118615417),new cljs.core.Symbol(null,"source","source",1206599988,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__38107__auto__;
})(),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),(function (){var result__38107__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bh-ui.events","bad-subscribe-result","bh-ui.events/bad-subscribe-result",155192832),(function (){var result__38107__auto__ = source;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),4,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(28),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__38107__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(26),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bh-ui.events","bad-subscribe-result","bh-ui.events/bad-subscribe-result",155192832),new cljs.core.Symbol(null,"source","source",1206599988,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__38107__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(10),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),"/subscribe/data-source",new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),new cljs.core.Symbol(null,"user-id","user-id",1433709236,null),new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574),new cljs.core.Symbol(null,"source","source",1206599988,null)], null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bh-ui.events","good-subscribe-result","bh-ui.events/good-subscribe-result",-2118615417),new cljs.core.Symbol(null,"source","source",1206599988,null)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bh-ui.events","bad-subscribe-result","bh-ui.events/bad-subscribe-result",155192832),new cljs.core.Symbol(null,"source","source",1206599988,null)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__38107__auto__;
})()], 0));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(8),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol(null,"default-header","default-header",-277631459,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),"/subscribe/data-source",new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),new cljs.core.Symbol(null,"user-id","user-id",1433709236,null),new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574),new cljs.core.Symbol(null,"source","source",1206599988,null)], null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bh-ui.events","good-subscribe-result","bh-ui.events/good-subscribe-result",-2118615417),new cljs.core.Symbol(null,"source","source",1206599988,null)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bh-ui.events","bad-subscribe-result","bh-ui.events/bad-subscribe-result",155192832),new cljs.core.Symbol(null,"source","source",1206599988,null)], null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__38107__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(6),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol(null,"default-header","default-header",-277631459,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),"/subscribe/data-source",new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),new cljs.core.Symbol(null,"user-id","user-id",1433709236,null),new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574),new cljs.core.Symbol(null,"source","source",1206599988,null)], null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bh-ui.events","good-subscribe-result","bh-ui.events/good-subscribe-result",-2118615417),new cljs.core.Symbol(null,"source","source",1206599988,null)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bh-ui.events","bad-subscribe-result","bh-ui.events/bad-subscribe-result",155192832),new cljs.core.Symbol(null,"source","source",1206599988,null)], null)], null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__38107__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"user-id","user-id",1433709236,null),cljs.core.list(new cljs.core.Keyword(null,"user-id","user-id",-206822291),new cljs.core.Symbol(null,"db","db",-1661185010,null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol(null,"default-header","default-header",-277631459,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),"/subscribe/data-source",new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),new cljs.core.Symbol(null,"user-id","user-id",1433709236,null),new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574),new cljs.core.Symbol(null,"source","source",1206599988,null)], null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bh-ui.events","good-subscribe-result","bh-ui.events/good-subscribe-result",-2118615417),new cljs.core.Symbol(null,"source","source",1206599988,null)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bh-ui.events","bad-subscribe-result","bh-ui.events/bad-subscribe-result",155192832),new cljs.core.Symbol(null,"source","source",1206599988,null)], null)], null))], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__38107__auto__;
}catch (e47373){var e = e47373;
throw e;
}}):(function (p__47389,p__47390){
var map__47391 = p__47389;
var map__47391__$1 = cljs.core.__destructure_map(map__47391);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47391__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47392 = p__47390;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47392,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47392,(1),null);
var user_id = new cljs.core.Keyword(null,"user-id","user-id",-206822291).cljs$core$IFn$_invoke$arity$1(db);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bh_ui.events.default_header,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),"/subscribe/data-source",new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),user_id,new cljs.core.Keyword(null,"data-sources","data-sources",-1621871574),source], null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bh-ui.events","good-subscribe-result","bh-ui.events/good-subscribe-result",-2118615417),source], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bh-ui.events","bad-subscribe-result","bh-ui.events/bad-subscribe-result",155192832),source], null)], null)], 0))], null);
})));

//# sourceMappingURL=bh_ui.events.js.map
