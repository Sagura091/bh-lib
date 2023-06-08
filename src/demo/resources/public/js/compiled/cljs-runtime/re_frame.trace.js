goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__46667){
var map__46668 = p__46667;
var map__46668__$1 = cljs.core.__destructure_map(map__46668);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46668__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46668__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46668__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46668__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4253__auto__ = child_of;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__46669_46696 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__46670_46697 = null;
var count__46671_46698 = (0);
var i__46672_46699 = (0);
while(true){
if((i__46672_46699 < count__46671_46698)){
var vec__46683_46700 = chunk__46670_46697.cljs$core$IIndexed$_nth$arity$2(null,i__46672_46699);
var k_46701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46683_46700,(0),null);
var cb_46702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46683_46700,(1),null);
try{var G__46687_46703 = cljs.core.deref(re_frame.trace.traces);
(cb_46702.cljs$core$IFn$_invoke$arity$1 ? cb_46702.cljs$core$IFn$_invoke$arity$1(G__46687_46703) : cb_46702.call(null,G__46687_46703));
}catch (e46686){var e_46704 = e46686;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_46701,"while storing",cljs.core.deref(re_frame.trace.traces),e_46704], 0));
}

var G__46705 = seq__46669_46696;
var G__46706 = chunk__46670_46697;
var G__46707 = count__46671_46698;
var G__46708 = (i__46672_46699 + (1));
seq__46669_46696 = G__46705;
chunk__46670_46697 = G__46706;
count__46671_46698 = G__46707;
i__46672_46699 = G__46708;
continue;
} else {
var temp__5753__auto___46709 = cljs.core.seq(seq__46669_46696);
if(temp__5753__auto___46709){
var seq__46669_46710__$1 = temp__5753__auto___46709;
if(cljs.core.chunked_seq_QMARK_(seq__46669_46710__$1)){
var c__4679__auto___46711 = cljs.core.chunk_first(seq__46669_46710__$1);
var G__46712 = cljs.core.chunk_rest(seq__46669_46710__$1);
var G__46713 = c__4679__auto___46711;
var G__46714 = cljs.core.count(c__4679__auto___46711);
var G__46715 = (0);
seq__46669_46696 = G__46712;
chunk__46670_46697 = G__46713;
count__46671_46698 = G__46714;
i__46672_46699 = G__46715;
continue;
} else {
var vec__46688_46716 = cljs.core.first(seq__46669_46710__$1);
var k_46717 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46688_46716,(0),null);
var cb_46718 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46688_46716,(1),null);
try{var G__46692_46719 = cljs.core.deref(re_frame.trace.traces);
(cb_46718.cljs$core$IFn$_invoke$arity$1 ? cb_46718.cljs$core$IFn$_invoke$arity$1(G__46692_46719) : cb_46718.call(null,G__46692_46719));
}catch (e46691){var e_46720 = e46691;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_46717,"while storing",cljs.core.deref(re_frame.trace.traces),e_46720], 0));
}

var G__46721 = cljs.core.next(seq__46669_46710__$1);
var G__46722 = null;
var G__46723 = (0);
var G__46724 = (0);
seq__46669_46696 = G__46721;
chunk__46670_46697 = G__46722;
count__46671_46698 = G__46723;
i__46672_46699 = G__46724;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
