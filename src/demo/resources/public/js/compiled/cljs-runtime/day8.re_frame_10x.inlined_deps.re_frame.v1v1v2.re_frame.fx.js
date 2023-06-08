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
var _STAR_current_trace_STAR__orig_val__48305 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__48306 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__48306);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___48414 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___48414)){
var new_db_48415 = temp__5753__auto___48414;
var fexpr__48313_48416 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__48313_48416.cljs$core$IFn$_invoke$arity$1 ? fexpr__48313_48416.cljs$core$IFn$_invoke$arity$1(new_db_48415) : fexpr__48313_48416.call(null,new_db_48415));
} else {
}

var seq__48314 = cljs.core.seq(effects_without_db);
var chunk__48315 = null;
var count__48316 = (0);
var i__48317 = (0);
while(true){
if((i__48317 < count__48316)){
var vec__48327 = chunk__48315.cljs$core$IIndexed$_nth$arity$2(null,i__48317);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48327,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48327,(1),null);
var temp__5751__auto___48417 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___48417)){
var effect_fn_48418 = temp__5751__auto___48417;
(effect_fn_48418.cljs$core$IFn$_invoke$arity$1 ? effect_fn_48418.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_48418.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__48419 = seq__48314;
var G__48420 = chunk__48315;
var G__48421 = count__48316;
var G__48422 = (i__48317 + (1));
seq__48314 = G__48419;
chunk__48315 = G__48420;
count__48316 = G__48421;
i__48317 = G__48422;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48314);
if(temp__5753__auto__){
var seq__48314__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48314__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__48314__$1);
var G__48423 = cljs.core.chunk_rest(seq__48314__$1);
var G__48424 = c__4679__auto__;
var G__48425 = cljs.core.count(c__4679__auto__);
var G__48426 = (0);
seq__48314 = G__48423;
chunk__48315 = G__48424;
count__48316 = G__48425;
i__48317 = G__48426;
continue;
} else {
var vec__48343 = cljs.core.first(seq__48314__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48343,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48343,(1),null);
var temp__5751__auto___48427 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___48427)){
var effect_fn_48428 = temp__5751__auto___48427;
(effect_fn_48428.cljs$core$IFn$_invoke$arity$1 ? effect_fn_48428.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_48428.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__48429 = cljs.core.next(seq__48314__$1);
var G__48430 = null;
var G__48431 = (0);
var G__48432 = (0);
seq__48314 = G__48429;
chunk__48315 = G__48430;
count__48316 = G__48431;
i__48317 = G__48432;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__48003__auto___48433 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__48004__auto___48434 = (end__48003__auto___48433 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__48004__auto___48434,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__48003__auto___48433);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__48305);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___48435 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___48435)){
var new_db_48436 = temp__5753__auto___48435;
var fexpr__48350_48437 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__48350_48437.cljs$core$IFn$_invoke$arity$1 ? fexpr__48350_48437.cljs$core$IFn$_invoke$arity$1(new_db_48436) : fexpr__48350_48437.call(null,new_db_48436));
} else {
}

var seq__48351 = cljs.core.seq(effects_without_db);
var chunk__48352 = null;
var count__48353 = (0);
var i__48354 = (0);
while(true){
if((i__48354 < count__48353)){
var vec__48366 = chunk__48352.cljs$core$IIndexed$_nth$arity$2(null,i__48354);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48366,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48366,(1),null);
var temp__5751__auto___48438 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___48438)){
var effect_fn_48439 = temp__5751__auto___48438;
(effect_fn_48439.cljs$core$IFn$_invoke$arity$1 ? effect_fn_48439.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_48439.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__48442 = seq__48351;
var G__48443 = chunk__48352;
var G__48444 = count__48353;
var G__48445 = (i__48354 + (1));
seq__48351 = G__48442;
chunk__48352 = G__48443;
count__48353 = G__48444;
i__48354 = G__48445;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48351);
if(temp__5753__auto__){
var seq__48351__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48351__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__48351__$1);
var G__48446 = cljs.core.chunk_rest(seq__48351__$1);
var G__48447 = c__4679__auto__;
var G__48448 = cljs.core.count(c__4679__auto__);
var G__48449 = (0);
seq__48351 = G__48446;
chunk__48352 = G__48447;
count__48353 = G__48448;
i__48354 = G__48449;
continue;
} else {
var vec__48372 = cljs.core.first(seq__48351__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48372,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48372,(1),null);
var temp__5751__auto___48450 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___48450)){
var effect_fn_48451 = temp__5751__auto___48450;
(effect_fn_48451.cljs$core$IFn$_invoke$arity$1 ? effect_fn_48451.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_48451.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__48452 = cljs.core.next(seq__48351__$1);
var G__48453 = null;
var G__48454 = (0);
var G__48455 = (0);
seq__48351 = G__48452;
chunk__48352 = G__48453;
count__48353 = G__48454;
i__48354 = G__48455;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$dispatch_later(p__48379){
var map__48380 = p__48379;
var map__48380__$1 = cljs.core.__destructure_map(map__48380);
var effect = map__48380__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48380__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48380__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__48384 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__48385 = null;
var count__48386 = (0);
var i__48387 = (0);
while(true){
if((i__48387 < count__48386)){
var effect = chunk__48385.cljs$core$IIndexed$_nth$arity$2(null,i__48387);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__48456 = seq__48384;
var G__48457 = chunk__48385;
var G__48458 = count__48386;
var G__48459 = (i__48387 + (1));
seq__48384 = G__48456;
chunk__48385 = G__48457;
count__48386 = G__48458;
i__48387 = G__48459;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48384);
if(temp__5753__auto__){
var seq__48384__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48384__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__48384__$1);
var G__48460 = cljs.core.chunk_rest(seq__48384__$1);
var G__48461 = c__4679__auto__;
var G__48462 = cljs.core.count(c__4679__auto__);
var G__48463 = (0);
seq__48384 = G__48460;
chunk__48385 = G__48461;
count__48386 = G__48462;
i__48387 = G__48463;
continue;
} else {
var effect = cljs.core.first(seq__48384__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__48464 = cljs.core.next(seq__48384__$1);
var G__48465 = null;
var G__48466 = (0);
var G__48467 = (0);
seq__48384 = G__48464;
chunk__48385 = G__48465;
count__48386 = G__48466;
i__48387 = G__48467;
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
var seq__48388 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__48389 = null;
var count__48390 = (0);
var i__48391 = (0);
while(true){
if((i__48391 < count__48390)){
var vec__48398 = chunk__48389.cljs$core$IIndexed$_nth$arity$2(null,i__48391);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48398,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48398,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___48469 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___48469)){
var effect_fn_48470 = temp__5751__auto___48469;
(effect_fn_48470.cljs$core$IFn$_invoke$arity$1 ? effect_fn_48470.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_48470.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__48471 = seq__48388;
var G__48472 = chunk__48389;
var G__48473 = count__48390;
var G__48474 = (i__48391 + (1));
seq__48388 = G__48471;
chunk__48389 = G__48472;
count__48390 = G__48473;
i__48391 = G__48474;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48388);
if(temp__5753__auto__){
var seq__48388__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48388__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__48388__$1);
var G__48475 = cljs.core.chunk_rest(seq__48388__$1);
var G__48476 = c__4679__auto__;
var G__48477 = cljs.core.count(c__4679__auto__);
var G__48478 = (0);
seq__48388 = G__48475;
chunk__48389 = G__48476;
count__48390 = G__48477;
i__48391 = G__48478;
continue;
} else {
var vec__48401 = cljs.core.first(seq__48388__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48401,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48401,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___48479 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___48479)){
var effect_fn_48480 = temp__5751__auto___48479;
(effect_fn_48480.cljs$core$IFn$_invoke$arity$1 ? effect_fn_48480.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_48480.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__48481 = cljs.core.next(seq__48388__$1);
var G__48482 = null;
var G__48483 = (0);
var G__48484 = (0);
seq__48388 = G__48481;
chunk__48389 = G__48482;
count__48390 = G__48483;
i__48391 = G__48484;
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
var seq__48404 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__48405 = null;
var count__48406 = (0);
var i__48407 = (0);
while(true){
if((i__48407 < count__48406)){
var event = chunk__48405.cljs$core$IIndexed$_nth$arity$2(null,i__48407);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__48485 = seq__48404;
var G__48486 = chunk__48405;
var G__48487 = count__48406;
var G__48488 = (i__48407 + (1));
seq__48404 = G__48485;
chunk__48405 = G__48486;
count__48406 = G__48487;
i__48407 = G__48488;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48404);
if(temp__5753__auto__){
var seq__48404__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48404__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__48404__$1);
var G__48489 = cljs.core.chunk_rest(seq__48404__$1);
var G__48490 = c__4679__auto__;
var G__48491 = cljs.core.count(c__4679__auto__);
var G__48492 = (0);
seq__48404 = G__48489;
chunk__48405 = G__48490;
count__48406 = G__48491;
i__48407 = G__48492;
continue;
} else {
var event = cljs.core.first(seq__48404__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__48493 = cljs.core.next(seq__48404__$1);
var G__48494 = null;
var G__48495 = (0);
var G__48496 = (0);
seq__48404 = G__48493;
chunk__48405 = G__48494;
count__48406 = G__48495;
i__48407 = G__48496;
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
var seq__48408 = cljs.core.seq(value);
var chunk__48409 = null;
var count__48410 = (0);
var i__48411 = (0);
while(true){
if((i__48411 < count__48410)){
var event = chunk__48409.cljs$core$IIndexed$_nth$arity$2(null,i__48411);
clear_event(event);


var G__48497 = seq__48408;
var G__48498 = chunk__48409;
var G__48499 = count__48410;
var G__48500 = (i__48411 + (1));
seq__48408 = G__48497;
chunk__48409 = G__48498;
count__48410 = G__48499;
i__48411 = G__48500;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48408);
if(temp__5753__auto__){
var seq__48408__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48408__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__48408__$1);
var G__48501 = cljs.core.chunk_rest(seq__48408__$1);
var G__48502 = c__4679__auto__;
var G__48503 = cljs.core.count(c__4679__auto__);
var G__48504 = (0);
seq__48408 = G__48501;
chunk__48409 = G__48502;
count__48410 = G__48503;
i__48411 = G__48504;
continue;
} else {
var event = cljs.core.first(seq__48408__$1);
clear_event(event);


var G__48505 = cljs.core.next(seq__48408__$1);
var G__48506 = null;
var G__48507 = (0);
var G__48508 = (0);
seq__48408 = G__48505;
chunk__48409 = G__48506;
count__48410 = G__48507;
i__48411 = G__48508;
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
