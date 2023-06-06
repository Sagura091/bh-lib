goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__24348 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24349 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24349);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___24452 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___24452)){
var new_db_24453 = temp__5753__auto___24452;
var fexpr__24356_24454 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24356_24454.cljs$core$IFn$_invoke$arity$1 ? fexpr__24356_24454.cljs$core$IFn$_invoke$arity$1(new_db_24453) : fexpr__24356_24454.call(null,new_db_24453));
} else {
}

var seq__24357 = cljs.core.seq(effects_without_db);
var chunk__24358 = null;
var count__24359 = (0);
var i__24360 = (0);
while(true){
if((i__24360 < count__24359)){
var vec__24369 = chunk__24358.cljs$core$IIndexed$_nth$arity$2(null,i__24360);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24369,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24369,(1),null);
var temp__5751__auto___24455 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___24455)){
var effect_fn_24456 = temp__5751__auto___24455;
(effect_fn_24456.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24456.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24456.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__24457 = seq__24357;
var G__24458 = chunk__24358;
var G__24459 = count__24359;
var G__24460 = (i__24360 + (1));
seq__24357 = G__24457;
chunk__24358 = G__24458;
count__24359 = G__24459;
i__24360 = G__24460;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__24357);
if(temp__5753__auto__){
var seq__24357__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24357__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__24357__$1);
var G__24461 = cljs.core.chunk_rest(seq__24357__$1);
var G__24462 = c__4679__auto__;
var G__24463 = cljs.core.count(c__4679__auto__);
var G__24464 = (0);
seq__24357 = G__24461;
chunk__24358 = G__24462;
count__24359 = G__24463;
i__24360 = G__24464;
continue;
} else {
var vec__24385 = cljs.core.first(seq__24357__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24385,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24385,(1),null);
var temp__5751__auto___24465 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___24465)){
var effect_fn_24466 = temp__5751__auto___24465;
(effect_fn_24466.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24466.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24466.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__24467 = cljs.core.next(seq__24357__$1);
var G__24468 = null;
var G__24469 = (0);
var G__24470 = (0);
seq__24357 = G__24467;
chunk__24358 = G__24468;
count__24359 = G__24469;
i__24360 = G__24470;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__24074__auto___24471 = re_frame.interop.now();
var duration__24075__auto___24472 = (end__24074__auto___24471 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__24075__auto___24472,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__24074__auto___24471);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24348);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___24473 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___24473)){
var new_db_24474 = temp__5753__auto___24473;
var fexpr__24388_24475 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24388_24475.cljs$core$IFn$_invoke$arity$1 ? fexpr__24388_24475.cljs$core$IFn$_invoke$arity$1(new_db_24474) : fexpr__24388_24475.call(null,new_db_24474));
} else {
}

var seq__24389 = cljs.core.seq(effects_without_db);
var chunk__24390 = null;
var count__24391 = (0);
var i__24392 = (0);
while(true){
if((i__24392 < count__24391)){
var vec__24399 = chunk__24390.cljs$core$IIndexed$_nth$arity$2(null,i__24392);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24399,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24399,(1),null);
var temp__5751__auto___24476 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___24476)){
var effect_fn_24477 = temp__5751__auto___24476;
(effect_fn_24477.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24477.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24477.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__24478 = seq__24389;
var G__24479 = chunk__24390;
var G__24480 = count__24391;
var G__24481 = (i__24392 + (1));
seq__24389 = G__24478;
chunk__24390 = G__24479;
count__24391 = G__24480;
i__24392 = G__24481;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__24389);
if(temp__5753__auto__){
var seq__24389__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24389__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__24389__$1);
var G__24482 = cljs.core.chunk_rest(seq__24389__$1);
var G__24483 = c__4679__auto__;
var G__24484 = cljs.core.count(c__4679__auto__);
var G__24485 = (0);
seq__24389 = G__24482;
chunk__24390 = G__24483;
count__24391 = G__24484;
i__24392 = G__24485;
continue;
} else {
var vec__24405 = cljs.core.first(seq__24389__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24405,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24405,(1),null);
var temp__5751__auto___24486 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___24486)){
var effect_fn_24487 = temp__5751__auto___24486;
(effect_fn_24487.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24487.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24487.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__24488 = cljs.core.next(seq__24389__$1);
var G__24489 = null;
var G__24490 = (0);
var G__24491 = (0);
seq__24389 = G__24488;
chunk__24390 = G__24489;
count__24391 = G__24490;
i__24392 = G__24491;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__24411){
var map__24412 = p__24411;
var map__24412__$1 = cljs.core.__destructure_map(map__24412);
var effect = map__24412__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24412__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24412__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__24413 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24414 = null;
var count__24415 = (0);
var i__24416 = (0);
while(true){
if((i__24416 < count__24415)){
var effect = chunk__24414.cljs$core$IIndexed$_nth$arity$2(null,i__24416);
re_frame.fx.dispatch_later(effect);


var G__24492 = seq__24413;
var G__24493 = chunk__24414;
var G__24494 = count__24415;
var G__24495 = (i__24416 + (1));
seq__24413 = G__24492;
chunk__24414 = G__24493;
count__24415 = G__24494;
i__24416 = G__24495;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__24413);
if(temp__5753__auto__){
var seq__24413__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24413__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__24413__$1);
var G__24496 = cljs.core.chunk_rest(seq__24413__$1);
var G__24497 = c__4679__auto__;
var G__24498 = cljs.core.count(c__4679__auto__);
var G__24499 = (0);
seq__24413 = G__24496;
chunk__24414 = G__24497;
count__24415 = G__24498;
i__24416 = G__24499;
continue;
} else {
var effect = cljs.core.first(seq__24413__$1);
re_frame.fx.dispatch_later(effect);


var G__24500 = cljs.core.next(seq__24413__$1);
var G__24501 = null;
var G__24502 = (0);
var G__24503 = (0);
seq__24413 = G__24500;
chunk__24414 = G__24501;
count__24415 = G__24502;
i__24416 = G__24503;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__24417 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__24418 = null;
var count__24419 = (0);
var i__24420 = (0);
while(true){
if((i__24420 < count__24419)){
var vec__24433 = chunk__24418.cljs$core$IIndexed$_nth$arity$2(null,i__24420);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24433,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24433,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___24504 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___24504)){
var effect_fn_24505 = temp__5751__auto___24504;
(effect_fn_24505.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24505.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24505.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24506 = seq__24417;
var G__24507 = chunk__24418;
var G__24508 = count__24419;
var G__24509 = (i__24420 + (1));
seq__24417 = G__24506;
chunk__24418 = G__24507;
count__24419 = G__24508;
i__24420 = G__24509;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__24417);
if(temp__5753__auto__){
var seq__24417__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24417__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__24417__$1);
var G__24510 = cljs.core.chunk_rest(seq__24417__$1);
var G__24511 = c__4679__auto__;
var G__24512 = cljs.core.count(c__4679__auto__);
var G__24513 = (0);
seq__24417 = G__24510;
chunk__24418 = G__24511;
count__24419 = G__24512;
i__24420 = G__24513;
continue;
} else {
var vec__24438 = cljs.core.first(seq__24417__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24438,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24438,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___24514 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___24514)){
var effect_fn_24515 = temp__5751__auto___24514;
(effect_fn_24515.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24515.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24515.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24516 = cljs.core.next(seq__24417__$1);
var G__24517 = null;
var G__24518 = (0);
var G__24519 = (0);
seq__24417 = G__24516;
chunk__24418 = G__24517;
count__24419 = G__24518;
i__24420 = G__24519;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__24443 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24444 = null;
var count__24445 = (0);
var i__24446 = (0);
while(true){
if((i__24446 < count__24445)){
var event = chunk__24444.cljs$core$IIndexed$_nth$arity$2(null,i__24446);
re_frame.router.dispatch(event);


var G__24522 = seq__24443;
var G__24523 = chunk__24444;
var G__24524 = count__24445;
var G__24525 = (i__24446 + (1));
seq__24443 = G__24522;
chunk__24444 = G__24523;
count__24445 = G__24524;
i__24446 = G__24525;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__24443);
if(temp__5753__auto__){
var seq__24443__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24443__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__24443__$1);
var G__24526 = cljs.core.chunk_rest(seq__24443__$1);
var G__24527 = c__4679__auto__;
var G__24528 = cljs.core.count(c__4679__auto__);
var G__24529 = (0);
seq__24443 = G__24526;
chunk__24444 = G__24527;
count__24445 = G__24528;
i__24446 = G__24529;
continue;
} else {
var event = cljs.core.first(seq__24443__$1);
re_frame.router.dispatch(event);


var G__24533 = cljs.core.next(seq__24443__$1);
var G__24534 = null;
var G__24535 = (0);
var G__24536 = (0);
seq__24443 = G__24533;
chunk__24444 = G__24534;
count__24445 = G__24535;
i__24446 = G__24536;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__24447 = cljs.core.seq(value);
var chunk__24448 = null;
var count__24449 = (0);
var i__24450 = (0);
while(true){
if((i__24450 < count__24449)){
var event = chunk__24448.cljs$core$IIndexed$_nth$arity$2(null,i__24450);
clear_event(event);


var G__24537 = seq__24447;
var G__24538 = chunk__24448;
var G__24539 = count__24449;
var G__24540 = (i__24450 + (1));
seq__24447 = G__24537;
chunk__24448 = G__24538;
count__24449 = G__24539;
i__24450 = G__24540;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__24447);
if(temp__5753__auto__){
var seq__24447__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24447__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__24447__$1);
var G__24541 = cljs.core.chunk_rest(seq__24447__$1);
var G__24542 = c__4679__auto__;
var G__24543 = cljs.core.count(c__4679__auto__);
var G__24544 = (0);
seq__24447 = G__24541;
chunk__24448 = G__24542;
count__24449 = G__24543;
i__24450 = G__24544;
continue;
} else {
var event = cljs.core.first(seq__24447__$1);
clear_event(event);


var G__24545 = cljs.core.next(seq__24447__$1);
var G__24546 = null;
var G__24547 = (0);
var G__24548 = (0);
seq__24447 = G__24545;
chunk__24448 = G__24546;
count__24449 = G__24547;
i__24450 = G__24548;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
