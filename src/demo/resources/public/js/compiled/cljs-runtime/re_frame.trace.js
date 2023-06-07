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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__46663){
var map__46664 = p__46663;
var map__46664__$1 = cljs.core.__destructure_map(map__46664);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46664__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46664__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46664__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46664__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__46667_46694 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__46668_46695 = null;
var count__46669_46696 = (0);
var i__46670_46697 = (0);
while(true){
if((i__46670_46697 < count__46669_46696)){
var vec__46681_46698 = chunk__46668_46695.cljs$core$IIndexed$_nth$arity$2(null,i__46670_46697);
var k_46699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46681_46698,(0),null);
var cb_46700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46681_46698,(1),null);
try{var G__46685_46701 = cljs.core.deref(re_frame.trace.traces);
(cb_46700.cljs$core$IFn$_invoke$arity$1 ? cb_46700.cljs$core$IFn$_invoke$arity$1(G__46685_46701) : cb_46700.call(null,G__46685_46701));
}catch (e46684){var e_46702 = e46684;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_46699,"while storing",cljs.core.deref(re_frame.trace.traces),e_46702], 0));
}

var G__46703 = seq__46667_46694;
var G__46704 = chunk__46668_46695;
var G__46705 = count__46669_46696;
var G__46706 = (i__46670_46697 + (1));
seq__46667_46694 = G__46703;
chunk__46668_46695 = G__46704;
count__46669_46696 = G__46705;
i__46670_46697 = G__46706;
continue;
} else {
var temp__5753__auto___46707 = cljs.core.seq(seq__46667_46694);
if(temp__5753__auto___46707){
var seq__46667_46708__$1 = temp__5753__auto___46707;
if(cljs.core.chunked_seq_QMARK_(seq__46667_46708__$1)){
var c__4679__auto___46709 = cljs.core.chunk_first(seq__46667_46708__$1);
var G__46710 = cljs.core.chunk_rest(seq__46667_46708__$1);
var G__46711 = c__4679__auto___46709;
var G__46712 = cljs.core.count(c__4679__auto___46709);
var G__46713 = (0);
seq__46667_46694 = G__46710;
chunk__46668_46695 = G__46711;
count__46669_46696 = G__46712;
i__46670_46697 = G__46713;
continue;
} else {
var vec__46686_46714 = cljs.core.first(seq__46667_46708__$1);
var k_46715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46686_46714,(0),null);
var cb_46716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46686_46714,(1),null);
try{var G__46690_46717 = cljs.core.deref(re_frame.trace.traces);
(cb_46716.cljs$core$IFn$_invoke$arity$1 ? cb_46716.cljs$core$IFn$_invoke$arity$1(G__46690_46717) : cb_46716.call(null,G__46690_46717));
}catch (e46689){var e_46718 = e46689;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_46715,"while storing",cljs.core.deref(re_frame.trace.traces),e_46718], 0));
}

var G__46719 = cljs.core.next(seq__46667_46708__$1);
var G__46720 = null;
var G__46721 = (0);
var G__46722 = (0);
seq__46667_46694 = G__46719;
chunk__46668_46695 = G__46720;
count__46669_46696 = G__46721;
i__46670_46697 = G__46722;
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
