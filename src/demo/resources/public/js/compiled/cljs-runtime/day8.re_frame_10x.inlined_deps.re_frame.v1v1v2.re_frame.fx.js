goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v1v1v2.re-frame.registrar/kinds kind)"));
}
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__48291 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__48292 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__48292);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___48412 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___48412)){
var new_db_48413 = temp__5753__auto___48412;
var fexpr__48296_48414 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__48296_48414.cljs$core$IFn$_invoke$arity$1 ? fexpr__48296_48414.cljs$core$IFn$_invoke$arity$1(new_db_48413) : fexpr__48296_48414.call(null,new_db_48413));
} else {
}

var seq__48298 = cljs.core.seq(effects_without_db);
var chunk__48299 = null;
var count__48300 = (0);
var i__48301 = (0);
while(true){
if((i__48301 < count__48300)){
var vec__48321 = chunk__48299.cljs$core$IIndexed$_nth$arity$2(null,i__48301);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48321,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48321,(1),null);
var temp__5751__auto___48415 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___48415)){
var effect_fn_48416 = temp__5751__auto___48415;
(effect_fn_48416.cljs$core$IFn$_invoke$arity$1 ? effect_fn_48416.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_48416.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__48417 = seq__48298;
var G__48418 = chunk__48299;
var G__48419 = count__48300;
var G__48420 = (i__48301 + (1));
seq__48298 = G__48417;
chunk__48299 = G__48418;
count__48300 = G__48419;
i__48301 = G__48420;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48298);
if(temp__5753__auto__){
var seq__48298__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48298__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__48298__$1);
var G__48421 = cljs.core.chunk_rest(seq__48298__$1);
var G__48422 = c__4679__auto__;
var G__48423 = cljs.core.count(c__4679__auto__);
var G__48424 = (0);
seq__48298 = G__48421;
chunk__48299 = G__48422;
count__48300 = G__48423;
i__48301 = G__48424;
continue;
} else {
var vec__48329 = cljs.core.first(seq__48298__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48329,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48329,(1),null);
var temp__5751__auto___48425 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___48425)){
var effect_fn_48426 = temp__5751__auto___48425;
(effect_fn_48426.cljs$core$IFn$_invoke$arity$1 ? effect_fn_48426.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_48426.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__48427 = cljs.core.next(seq__48298__$1);
var G__48428 = null;
var G__48429 = (0);
var G__48430 = (0);
seq__48298 = G__48427;
chunk__48299 = G__48428;
count__48300 = G__48429;
i__48301 = G__48430;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__48009__auto___48431 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__48010__auto___48432 = (end__48009__auto___48431 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__48010__auto___48432,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__48009__auto___48431);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__48291);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___48433 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___48433)){
var new_db_48434 = temp__5753__auto___48433;
var fexpr__48340_48435 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__48340_48435.cljs$core$IFn$_invoke$arity$1 ? fexpr__48340_48435.cljs$core$IFn$_invoke$arity$1(new_db_48434) : fexpr__48340_48435.call(null,new_db_48434));
} else {
}

var seq__48341 = cljs.core.seq(effects_without_db);
var chunk__48342 = null;
var count__48343 = (0);
var i__48344 = (0);
while(true){
if((i__48344 < count__48343)){
var vec__48351 = chunk__48342.cljs$core$IIndexed$_nth$arity$2(null,i__48344);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48351,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48351,(1),null);
var temp__5751__auto___48436 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___48436)){
var effect_fn_48437 = temp__5751__auto___48436;
(effect_fn_48437.cljs$core$IFn$_invoke$arity$1 ? effect_fn_48437.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_48437.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__48438 = seq__48341;
var G__48439 = chunk__48342;
var G__48440 = count__48343;
var G__48441 = (i__48344 + (1));
seq__48341 = G__48438;
chunk__48342 = G__48439;
count__48343 = G__48440;
i__48344 = G__48441;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48341);
if(temp__5753__auto__){
var seq__48341__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48341__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__48341__$1);
var G__48442 = cljs.core.chunk_rest(seq__48341__$1);
var G__48443 = c__4679__auto__;
var G__48444 = cljs.core.count(c__4679__auto__);
var G__48445 = (0);
seq__48341 = G__48442;
chunk__48342 = G__48443;
count__48343 = G__48444;
i__48344 = G__48445;
continue;
} else {
var vec__48360 = cljs.core.first(seq__48341__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48360,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48360,(1),null);
var temp__5751__auto___48446 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___48446)){
var effect_fn_48447 = temp__5751__auto___48446;
(effect_fn_48447.cljs$core$IFn$_invoke$arity$1 ? effect_fn_48447.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_48447.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__48448 = cljs.core.next(seq__48341__$1);
var G__48449 = null;
var G__48450 = (0);
var G__48451 = (0);
seq__48341 = G__48448;
chunk__48342 = G__48449;
count__48343 = G__48450;
i__48344 = G__48451;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$dispatch_later(p__48367){
var map__48368 = p__48367;
var map__48368__$1 = cljs.core.__destructure_map(map__48368);
var effect = map__48368__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48368__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48368__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.set_timeout_BANG_((function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(dispatch);
}),ms);
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(value);
} else {
var seq__48369 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__48370 = null;
var count__48371 = (0);
var i__48372 = (0);
while(true){
if((i__48372 < count__48371)){
var effect = chunk__48370.cljs$core$IIndexed$_nth$arity$2(null,i__48372);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__48452 = seq__48369;
var G__48453 = chunk__48370;
var G__48454 = count__48371;
var G__48455 = (i__48372 + (1));
seq__48369 = G__48452;
chunk__48370 = G__48453;
count__48371 = G__48454;
i__48372 = G__48455;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48369);
if(temp__5753__auto__){
var seq__48369__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48369__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__48369__$1);
var G__48456 = cljs.core.chunk_rest(seq__48369__$1);
var G__48457 = c__4679__auto__;
var G__48458 = cljs.core.count(c__4679__auto__);
var G__48459 = (0);
seq__48369 = G__48456;
chunk__48370 = G__48457;
count__48371 = G__48458;
i__48372 = G__48459;
continue;
} else {
var effect = cljs.core.first(seq__48369__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__48460 = cljs.core.next(seq__48369__$1);
var G__48461 = null;
var G__48462 = (0);
var G__48463 = (0);
seq__48369 = G__48460;
chunk__48370 = G__48461;
count__48371 = G__48462;
i__48372 = G__48463;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__48376 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__48377 = null;
var count__48378 = (0);
var i__48379 = (0);
while(true){
if((i__48379 < count__48378)){
var vec__48389 = chunk__48377.cljs$core$IIndexed$_nth$arity$2(null,i__48379);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48389,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48389,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___48464 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___48464)){
var effect_fn_48465 = temp__5751__auto___48464;
(effect_fn_48465.cljs$core$IFn$_invoke$arity$1 ? effect_fn_48465.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_48465.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__48466 = seq__48376;
var G__48467 = chunk__48377;
var G__48468 = count__48378;
var G__48469 = (i__48379 + (1));
seq__48376 = G__48466;
chunk__48377 = G__48467;
count__48378 = G__48468;
i__48379 = G__48469;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48376);
if(temp__5753__auto__){
var seq__48376__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48376__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__48376__$1);
var G__48470 = cljs.core.chunk_rest(seq__48376__$1);
var G__48471 = c__4679__auto__;
var G__48472 = cljs.core.count(c__4679__auto__);
var G__48473 = (0);
seq__48376 = G__48470;
chunk__48377 = G__48471;
count__48378 = G__48472;
i__48379 = G__48473;
continue;
} else {
var vec__48394 = cljs.core.first(seq__48376__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48394,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48394,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___48474 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___48474)){
var effect_fn_48475 = temp__5751__auto___48474;
(effect_fn_48475.cljs$core$IFn$_invoke$arity$1 ? effect_fn_48475.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_48475.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__48476 = cljs.core.next(seq__48376__$1);
var G__48477 = null;
var G__48478 = (0);
var G__48479 = (0);
seq__48376 = G__48476;
chunk__48377 = G__48477;
count__48378 = G__48478;
i__48379 = G__48479;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__48401 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__48402 = null;
var count__48403 = (0);
var i__48404 = (0);
while(true){
if((i__48404 < count__48403)){
var event = chunk__48402.cljs$core$IIndexed$_nth$arity$2(null,i__48404);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__48480 = seq__48401;
var G__48481 = chunk__48402;
var G__48482 = count__48403;
var G__48483 = (i__48404 + (1));
seq__48401 = G__48480;
chunk__48402 = G__48481;
count__48403 = G__48482;
i__48404 = G__48483;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48401);
if(temp__5753__auto__){
var seq__48401__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48401__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__48401__$1);
var G__48484 = cljs.core.chunk_rest(seq__48401__$1);
var G__48485 = c__4679__auto__;
var G__48486 = cljs.core.count(c__4679__auto__);
var G__48487 = (0);
seq__48401 = G__48484;
chunk__48402 = G__48485;
count__48403 = G__48486;
i__48404 = G__48487;
continue;
} else {
var event = cljs.core.first(seq__48401__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__48488 = cljs.core.next(seq__48401__$1);
var G__48489 = null;
var G__48490 = (0);
var G__48491 = (0);
seq__48401 = G__48488;
chunk__48402 = G__48489;
count__48403 = G__48490;
i__48404 = G__48491;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__48405 = cljs.core.seq(value);
var chunk__48406 = null;
var count__48407 = (0);
var i__48408 = (0);
while(true){
if((i__48408 < count__48407)){
var event = chunk__48406.cljs$core$IIndexed$_nth$arity$2(null,i__48408);
clear_event(event);


var G__48492 = seq__48405;
var G__48493 = chunk__48406;
var G__48494 = count__48407;
var G__48495 = (i__48408 + (1));
seq__48405 = G__48492;
chunk__48406 = G__48493;
count__48407 = G__48494;
i__48408 = G__48495;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48405);
if(temp__5753__auto__){
var seq__48405__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48405__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__48405__$1);
var G__48496 = cljs.core.chunk_rest(seq__48405__$1);
var G__48497 = c__4679__auto__;
var G__48498 = cljs.core.count(c__4679__auto__);
var G__48499 = (0);
seq__48405 = G__48496;
chunk__48406 = G__48497;
count__48407 = G__48498;
i__48408 = G__48499;
continue;
} else {
var event = cljs.core.first(seq__48405__$1);
clear_event(event);


var G__48500 = cljs.core.next(seq__48405__$1);
var G__48501 = null;
var G__48502 = (0);
var G__48503 = (0);
seq__48405 = G__48500;
chunk__48406 = G__48501;
count__48407 = G__48502;
i__48408 = G__48503;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.js.map
