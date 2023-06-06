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
var _STAR_current_trace_STAR__orig_val__28059 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__28060 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__28060);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___28180 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___28180)){
var new_db_28181 = temp__5753__auto___28180;
var fexpr__28065_28182 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__28065_28182.cljs$core$IFn$_invoke$arity$1 ? fexpr__28065_28182.cljs$core$IFn$_invoke$arity$1(new_db_28181) : fexpr__28065_28182.call(null,new_db_28181));
} else {
}

var seq__28066 = cljs.core.seq(effects_without_db);
var chunk__28067 = null;
var count__28068 = (0);
var i__28069 = (0);
while(true){
if((i__28069 < count__28068)){
var vec__28088 = chunk__28067.cljs$core$IIndexed$_nth$arity$2(null,i__28069);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28088,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28088,(1),null);
var temp__5751__auto___28183 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___28183)){
var effect_fn_28184 = temp__5751__auto___28183;
(effect_fn_28184.cljs$core$IFn$_invoke$arity$1 ? effect_fn_28184.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_28184.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__28185 = seq__28066;
var G__28186 = chunk__28067;
var G__28187 = count__28068;
var G__28188 = (i__28069 + (1));
seq__28066 = G__28185;
chunk__28067 = G__28186;
count__28068 = G__28187;
i__28069 = G__28188;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__28066);
if(temp__5753__auto__){
var seq__28066__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28066__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__28066__$1);
var G__28189 = cljs.core.chunk_rest(seq__28066__$1);
var G__28190 = c__4679__auto__;
var G__28191 = cljs.core.count(c__4679__auto__);
var G__28192 = (0);
seq__28066 = G__28189;
chunk__28067 = G__28190;
count__28068 = G__28191;
i__28069 = G__28192;
continue;
} else {
var vec__28093 = cljs.core.first(seq__28066__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28093,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28093,(1),null);
var temp__5751__auto___28193 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___28193)){
var effect_fn_28194 = temp__5751__auto___28193;
(effect_fn_28194.cljs$core$IFn$_invoke$arity$1 ? effect_fn_28194.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_28194.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__28195 = cljs.core.next(seq__28066__$1);
var G__28196 = null;
var G__28197 = (0);
var G__28198 = (0);
seq__28066 = G__28195;
chunk__28067 = G__28196;
count__28068 = G__28197;
i__28069 = G__28198;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__27776__auto___28199 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__27777__auto___28200 = (end__27776__auto___28199 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__27777__auto___28200,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__27776__auto___28199);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__28059);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___28201 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___28201)){
var new_db_28202 = temp__5753__auto___28201;
var fexpr__28097_28203 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__28097_28203.cljs$core$IFn$_invoke$arity$1 ? fexpr__28097_28203.cljs$core$IFn$_invoke$arity$1(new_db_28202) : fexpr__28097_28203.call(null,new_db_28202));
} else {
}

var seq__28099 = cljs.core.seq(effects_without_db);
var chunk__28100 = null;
var count__28101 = (0);
var i__28102 = (0);
while(true){
if((i__28102 < count__28101)){
var vec__28119 = chunk__28100.cljs$core$IIndexed$_nth$arity$2(null,i__28102);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28119,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28119,(1),null);
var temp__5751__auto___28204 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___28204)){
var effect_fn_28205 = temp__5751__auto___28204;
(effect_fn_28205.cljs$core$IFn$_invoke$arity$1 ? effect_fn_28205.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_28205.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__28206 = seq__28099;
var G__28207 = chunk__28100;
var G__28208 = count__28101;
var G__28209 = (i__28102 + (1));
seq__28099 = G__28206;
chunk__28100 = G__28207;
count__28101 = G__28208;
i__28102 = G__28209;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__28099);
if(temp__5753__auto__){
var seq__28099__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28099__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__28099__$1);
var G__28210 = cljs.core.chunk_rest(seq__28099__$1);
var G__28211 = c__4679__auto__;
var G__28212 = cljs.core.count(c__4679__auto__);
var G__28213 = (0);
seq__28099 = G__28210;
chunk__28100 = G__28211;
count__28101 = G__28212;
i__28102 = G__28213;
continue;
} else {
var vec__28136 = cljs.core.first(seq__28099__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28136,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28136,(1),null);
var temp__5751__auto___28214 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___28214)){
var effect_fn_28215 = temp__5751__auto___28214;
(effect_fn_28215.cljs$core$IFn$_invoke$arity$1 ? effect_fn_28215.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_28215.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__28216 = cljs.core.next(seq__28099__$1);
var G__28217 = null;
var G__28218 = (0);
var G__28219 = (0);
seq__28099 = G__28216;
chunk__28100 = G__28217;
count__28101 = G__28218;
i__28102 = G__28219;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$dispatch_later(p__28140){
var map__28141 = p__28140;
var map__28141__$1 = cljs.core.__destructure_map(map__28141);
var effect = map__28141__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28141__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28141__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__28145 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__28146 = null;
var count__28147 = (0);
var i__28148 = (0);
while(true){
if((i__28148 < count__28147)){
var effect = chunk__28146.cljs$core$IIndexed$_nth$arity$2(null,i__28148);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__28220 = seq__28145;
var G__28221 = chunk__28146;
var G__28222 = count__28147;
var G__28223 = (i__28148 + (1));
seq__28145 = G__28220;
chunk__28146 = G__28221;
count__28147 = G__28222;
i__28148 = G__28223;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__28145);
if(temp__5753__auto__){
var seq__28145__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28145__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__28145__$1);
var G__28224 = cljs.core.chunk_rest(seq__28145__$1);
var G__28225 = c__4679__auto__;
var G__28226 = cljs.core.count(c__4679__auto__);
var G__28227 = (0);
seq__28145 = G__28224;
chunk__28146 = G__28225;
count__28147 = G__28226;
i__28148 = G__28227;
continue;
} else {
var effect = cljs.core.first(seq__28145__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__28228 = cljs.core.next(seq__28145__$1);
var G__28229 = null;
var G__28230 = (0);
var G__28231 = (0);
seq__28145 = G__28228;
chunk__28146 = G__28229;
count__28147 = G__28230;
i__28148 = G__28231;
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
var seq__28155 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__28156 = null;
var count__28157 = (0);
var i__28158 = (0);
while(true){
if((i__28158 < count__28157)){
var vec__28165 = chunk__28156.cljs$core$IIndexed$_nth$arity$2(null,i__28158);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28165,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28165,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___28232 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___28232)){
var effect_fn_28233 = temp__5751__auto___28232;
(effect_fn_28233.cljs$core$IFn$_invoke$arity$1 ? effect_fn_28233.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_28233.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__28235 = seq__28155;
var G__28236 = chunk__28156;
var G__28237 = count__28157;
var G__28238 = (i__28158 + (1));
seq__28155 = G__28235;
chunk__28156 = G__28236;
count__28157 = G__28237;
i__28158 = G__28238;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__28155);
if(temp__5753__auto__){
var seq__28155__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28155__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__28155__$1);
var G__28240 = cljs.core.chunk_rest(seq__28155__$1);
var G__28241 = c__4679__auto__;
var G__28242 = cljs.core.count(c__4679__auto__);
var G__28243 = (0);
seq__28155 = G__28240;
chunk__28156 = G__28241;
count__28157 = G__28242;
i__28158 = G__28243;
continue;
} else {
var vec__28168 = cljs.core.first(seq__28155__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28168,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28168,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___28244 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___28244)){
var effect_fn_28245 = temp__5751__auto___28244;
(effect_fn_28245.cljs$core$IFn$_invoke$arity$1 ? effect_fn_28245.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_28245.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__28246 = cljs.core.next(seq__28155__$1);
var G__28247 = null;
var G__28248 = (0);
var G__28249 = (0);
seq__28155 = G__28246;
chunk__28156 = G__28247;
count__28157 = G__28248;
i__28158 = G__28249;
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
var seq__28171 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__28172 = null;
var count__28173 = (0);
var i__28174 = (0);
while(true){
if((i__28174 < count__28173)){
var event = chunk__28172.cljs$core$IIndexed$_nth$arity$2(null,i__28174);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__28250 = seq__28171;
var G__28251 = chunk__28172;
var G__28252 = count__28173;
var G__28253 = (i__28174 + (1));
seq__28171 = G__28250;
chunk__28172 = G__28251;
count__28173 = G__28252;
i__28174 = G__28253;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__28171);
if(temp__5753__auto__){
var seq__28171__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28171__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__28171__$1);
var G__28254 = cljs.core.chunk_rest(seq__28171__$1);
var G__28255 = c__4679__auto__;
var G__28256 = cljs.core.count(c__4679__auto__);
var G__28257 = (0);
seq__28171 = G__28254;
chunk__28172 = G__28255;
count__28173 = G__28256;
i__28174 = G__28257;
continue;
} else {
var event = cljs.core.first(seq__28171__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__28258 = cljs.core.next(seq__28171__$1);
var G__28259 = null;
var G__28260 = (0);
var G__28261 = (0);
seq__28171 = G__28258;
chunk__28172 = G__28259;
count__28173 = G__28260;
i__28174 = G__28261;
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
var seq__28175 = cljs.core.seq(value);
var chunk__28176 = null;
var count__28177 = (0);
var i__28178 = (0);
while(true){
if((i__28178 < count__28177)){
var event = chunk__28176.cljs$core$IIndexed$_nth$arity$2(null,i__28178);
clear_event(event);


var G__28262 = seq__28175;
var G__28263 = chunk__28176;
var G__28264 = count__28177;
var G__28265 = (i__28178 + (1));
seq__28175 = G__28262;
chunk__28176 = G__28263;
count__28177 = G__28264;
i__28178 = G__28265;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__28175);
if(temp__5753__auto__){
var seq__28175__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28175__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__28175__$1);
var G__28266 = cljs.core.chunk_rest(seq__28175__$1);
var G__28267 = c__4679__auto__;
var G__28268 = cljs.core.count(c__4679__auto__);
var G__28269 = (0);
seq__28175 = G__28266;
chunk__28176 = G__28267;
count__28177 = G__28268;
i__28178 = G__28269;
continue;
} else {
var event = cljs.core.first(seq__28175__$1);
clear_event(event);


var G__28270 = cljs.core.next(seq__28175__$1);
var G__28271 = null;
var G__28272 = (0);
var G__28273 = (0);
seq__28175 = G__28270;
chunk__28176 = G__28271;
count__28177 = G__28272;
i__28178 = G__28273;
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
