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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__24094){
var map__24095 = p__24094;
var map__24095__$1 = cljs.core.__destructure_map(map__24095);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24095__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24095__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24095__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24095__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__24096_24123 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__24097_24124 = null;
var count__24098_24125 = (0);
var i__24099_24126 = (0);
while(true){
if((i__24099_24126 < count__24098_24125)){
var vec__24110_24127 = chunk__24097_24124.cljs$core$IIndexed$_nth$arity$2(null,i__24099_24126);
var k_24128 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24110_24127,(0),null);
var cb_24129 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24110_24127,(1),null);
try{var G__24114_24130 = cljs.core.deref(re_frame.trace.traces);
(cb_24129.cljs$core$IFn$_invoke$arity$1 ? cb_24129.cljs$core$IFn$_invoke$arity$1(G__24114_24130) : cb_24129.call(null,G__24114_24130));
}catch (e24113){var e_24131 = e24113;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_24128,"while storing",cljs.core.deref(re_frame.trace.traces),e_24131], 0));
}

var G__24132 = seq__24096_24123;
var G__24133 = chunk__24097_24124;
var G__24134 = count__24098_24125;
var G__24135 = (i__24099_24126 + (1));
seq__24096_24123 = G__24132;
chunk__24097_24124 = G__24133;
count__24098_24125 = G__24134;
i__24099_24126 = G__24135;
continue;
} else {
var temp__5753__auto___24136 = cljs.core.seq(seq__24096_24123);
if(temp__5753__auto___24136){
var seq__24096_24137__$1 = temp__5753__auto___24136;
if(cljs.core.chunked_seq_QMARK_(seq__24096_24137__$1)){
var c__4679__auto___24138 = cljs.core.chunk_first(seq__24096_24137__$1);
var G__24139 = cljs.core.chunk_rest(seq__24096_24137__$1);
var G__24140 = c__4679__auto___24138;
var G__24141 = cljs.core.count(c__4679__auto___24138);
var G__24142 = (0);
seq__24096_24123 = G__24139;
chunk__24097_24124 = G__24140;
count__24098_24125 = G__24141;
i__24099_24126 = G__24142;
continue;
} else {
var vec__24115_24143 = cljs.core.first(seq__24096_24137__$1);
var k_24144 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24115_24143,(0),null);
var cb_24145 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24115_24143,(1),null);
try{var G__24119_24146 = cljs.core.deref(re_frame.trace.traces);
(cb_24145.cljs$core$IFn$_invoke$arity$1 ? cb_24145.cljs$core$IFn$_invoke$arity$1(G__24119_24146) : cb_24145.call(null,G__24119_24146));
}catch (e24118){var e_24147 = e24118;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_24144,"while storing",cljs.core.deref(re_frame.trace.traces),e_24147], 0));
}

var G__24148 = cljs.core.next(seq__24096_24137__$1);
var G__24149 = null;
var G__24150 = (0);
var G__24151 = (0);
seq__24096_24123 = G__24148;
chunk__24097_24124 = G__24149;
count__24098_24125 = G__24150;
i__24099_24126 = G__24151;
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
