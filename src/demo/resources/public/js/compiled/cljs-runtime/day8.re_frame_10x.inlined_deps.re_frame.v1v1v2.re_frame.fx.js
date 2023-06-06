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
var _STAR_current_trace_STAR__orig_val__25741 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__25742 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__25742);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___25855 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___25855)){
var new_db_25856 = temp__5753__auto___25855;
var fexpr__25744_25860 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__25744_25860.cljs$core$IFn$_invoke$arity$1 ? fexpr__25744_25860.cljs$core$IFn$_invoke$arity$1(new_db_25856) : fexpr__25744_25860.call(null,new_db_25856));
} else {
}

var seq__25747 = cljs.core.seq(effects_without_db);
var chunk__25748 = null;
var count__25749 = (0);
var i__25750 = (0);
while(true){
if((i__25750 < count__25749)){
var vec__25786 = chunk__25748.cljs$core$IIndexed$_nth$arity$2(null,i__25750);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25786,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25786,(1),null);
var temp__5751__auto___25861 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___25861)){
var effect_fn_25862 = temp__5751__auto___25861;
(effect_fn_25862.cljs$core$IFn$_invoke$arity$1 ? effect_fn_25862.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_25862.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__25863 = seq__25747;
var G__25864 = chunk__25748;
var G__25865 = count__25749;
var G__25866 = (i__25750 + (1));
seq__25747 = G__25863;
chunk__25748 = G__25864;
count__25749 = G__25865;
i__25750 = G__25866;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__25747);
if(temp__5753__auto__){
var seq__25747__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25747__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__25747__$1);
var G__25867 = cljs.core.chunk_rest(seq__25747__$1);
var G__25868 = c__4679__auto__;
var G__25869 = cljs.core.count(c__4679__auto__);
var G__25870 = (0);
seq__25747 = G__25867;
chunk__25748 = G__25868;
count__25749 = G__25869;
i__25750 = G__25870;
continue;
} else {
var vec__25789 = cljs.core.first(seq__25747__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25789,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25789,(1),null);
var temp__5751__auto___25871 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___25871)){
var effect_fn_25872 = temp__5751__auto___25871;
(effect_fn_25872.cljs$core$IFn$_invoke$arity$1 ? effect_fn_25872.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_25872.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__25873 = cljs.core.next(seq__25747__$1);
var G__25874 = null;
var G__25875 = (0);
var G__25876 = (0);
seq__25747 = G__25873;
chunk__25748 = G__25874;
count__25749 = G__25875;
i__25750 = G__25876;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__25436__auto___25877 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__25437__auto___25878 = (end__25436__auto___25877 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__25437__auto___25878,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__25436__auto___25877);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__25741);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___25879 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___25879)){
var new_db_25880 = temp__5753__auto___25879;
var fexpr__25792_25881 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__25792_25881.cljs$core$IFn$_invoke$arity$1 ? fexpr__25792_25881.cljs$core$IFn$_invoke$arity$1(new_db_25880) : fexpr__25792_25881.call(null,new_db_25880));
} else {
}

var seq__25793 = cljs.core.seq(effects_without_db);
var chunk__25794 = null;
var count__25795 = (0);
var i__25796 = (0);
while(true){
if((i__25796 < count__25795)){
var vec__25803 = chunk__25794.cljs$core$IIndexed$_nth$arity$2(null,i__25796);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25803,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25803,(1),null);
var temp__5751__auto___25883 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___25883)){
var effect_fn_25884 = temp__5751__auto___25883;
(effect_fn_25884.cljs$core$IFn$_invoke$arity$1 ? effect_fn_25884.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_25884.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__25886 = seq__25793;
var G__25887 = chunk__25794;
var G__25888 = count__25795;
var G__25889 = (i__25796 + (1));
seq__25793 = G__25886;
chunk__25794 = G__25887;
count__25795 = G__25888;
i__25796 = G__25889;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__25793);
if(temp__5753__auto__){
var seq__25793__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25793__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__25793__$1);
var G__25890 = cljs.core.chunk_rest(seq__25793__$1);
var G__25891 = c__4679__auto__;
var G__25892 = cljs.core.count(c__4679__auto__);
var G__25893 = (0);
seq__25793 = G__25890;
chunk__25794 = G__25891;
count__25795 = G__25892;
i__25796 = G__25893;
continue;
} else {
var vec__25806 = cljs.core.first(seq__25793__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25806,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25806,(1),null);
var temp__5751__auto___25894 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___25894)){
var effect_fn_25895 = temp__5751__auto___25894;
(effect_fn_25895.cljs$core$IFn$_invoke$arity$1 ? effect_fn_25895.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_25895.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__25905 = cljs.core.next(seq__25793__$1);
var G__25906 = null;
var G__25907 = (0);
var G__25908 = (0);
seq__25793 = G__25905;
chunk__25794 = G__25906;
count__25795 = G__25907;
i__25796 = G__25908;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$dispatch_later(p__25809){
var map__25810 = p__25809;
var map__25810__$1 = cljs.core.__destructure_map(map__25810);
var effect = map__25810__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25810__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25810__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__25811 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__25812 = null;
var count__25813 = (0);
var i__25814 = (0);
while(true){
if((i__25814 < count__25813)){
var effect = chunk__25812.cljs$core$IIndexed$_nth$arity$2(null,i__25814);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__25915 = seq__25811;
var G__25916 = chunk__25812;
var G__25917 = count__25813;
var G__25918 = (i__25814 + (1));
seq__25811 = G__25915;
chunk__25812 = G__25916;
count__25813 = G__25917;
i__25814 = G__25918;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__25811);
if(temp__5753__auto__){
var seq__25811__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25811__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__25811__$1);
var G__25919 = cljs.core.chunk_rest(seq__25811__$1);
var G__25920 = c__4679__auto__;
var G__25921 = cljs.core.count(c__4679__auto__);
var G__25922 = (0);
seq__25811 = G__25919;
chunk__25812 = G__25920;
count__25813 = G__25921;
i__25814 = G__25922;
continue;
} else {
var effect = cljs.core.first(seq__25811__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__25923 = cljs.core.next(seq__25811__$1);
var G__25924 = null;
var G__25925 = (0);
var G__25926 = (0);
seq__25811 = G__25923;
chunk__25812 = G__25924;
count__25813 = G__25925;
i__25814 = G__25926;
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
var seq__25816 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__25817 = null;
var count__25818 = (0);
var i__25819 = (0);
while(true){
if((i__25819 < count__25818)){
var vec__25827 = chunk__25817.cljs$core$IIndexed$_nth$arity$2(null,i__25819);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25827,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25827,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___25927 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___25927)){
var effect_fn_25928 = temp__5751__auto___25927;
(effect_fn_25928.cljs$core$IFn$_invoke$arity$1 ? effect_fn_25928.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_25928.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__25929 = seq__25816;
var G__25930 = chunk__25817;
var G__25931 = count__25818;
var G__25932 = (i__25819 + (1));
seq__25816 = G__25929;
chunk__25817 = G__25930;
count__25818 = G__25931;
i__25819 = G__25932;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__25816);
if(temp__5753__auto__){
var seq__25816__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25816__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__25816__$1);
var G__25933 = cljs.core.chunk_rest(seq__25816__$1);
var G__25934 = c__4679__auto__;
var G__25935 = cljs.core.count(c__4679__auto__);
var G__25936 = (0);
seq__25816 = G__25933;
chunk__25817 = G__25934;
count__25818 = G__25935;
i__25819 = G__25936;
continue;
} else {
var vec__25830 = cljs.core.first(seq__25816__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25830,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25830,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___25937 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___25937)){
var effect_fn_25938 = temp__5751__auto___25937;
(effect_fn_25938.cljs$core$IFn$_invoke$arity$1 ? effect_fn_25938.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_25938.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__25939 = cljs.core.next(seq__25816__$1);
var G__25940 = null;
var G__25941 = (0);
var G__25942 = (0);
seq__25816 = G__25939;
chunk__25817 = G__25940;
count__25818 = G__25941;
i__25819 = G__25942;
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
var seq__25835 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__25836 = null;
var count__25837 = (0);
var i__25838 = (0);
while(true){
if((i__25838 < count__25837)){
var event = chunk__25836.cljs$core$IIndexed$_nth$arity$2(null,i__25838);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__25947 = seq__25835;
var G__25948 = chunk__25836;
var G__25949 = count__25837;
var G__25950 = (i__25838 + (1));
seq__25835 = G__25947;
chunk__25836 = G__25948;
count__25837 = G__25949;
i__25838 = G__25950;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__25835);
if(temp__5753__auto__){
var seq__25835__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25835__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__25835__$1);
var G__25951 = cljs.core.chunk_rest(seq__25835__$1);
var G__25952 = c__4679__auto__;
var G__25953 = cljs.core.count(c__4679__auto__);
var G__25954 = (0);
seq__25835 = G__25951;
chunk__25836 = G__25952;
count__25837 = G__25953;
i__25838 = G__25954;
continue;
} else {
var event = cljs.core.first(seq__25835__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__25955 = cljs.core.next(seq__25835__$1);
var G__25956 = null;
var G__25957 = (0);
var G__25958 = (0);
seq__25835 = G__25955;
chunk__25836 = G__25956;
count__25837 = G__25957;
i__25838 = G__25958;
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
var seq__25844 = cljs.core.seq(value);
var chunk__25845 = null;
var count__25846 = (0);
var i__25847 = (0);
while(true){
if((i__25847 < count__25846)){
var event = chunk__25845.cljs$core$IIndexed$_nth$arity$2(null,i__25847);
clear_event(event);


var G__25959 = seq__25844;
var G__25960 = chunk__25845;
var G__25961 = count__25846;
var G__25962 = (i__25847 + (1));
seq__25844 = G__25959;
chunk__25845 = G__25960;
count__25846 = G__25961;
i__25847 = G__25962;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__25844);
if(temp__5753__auto__){
var seq__25844__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25844__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__25844__$1);
var G__25963 = cljs.core.chunk_rest(seq__25844__$1);
var G__25964 = c__4679__auto__;
var G__25965 = cljs.core.count(c__4679__auto__);
var G__25966 = (0);
seq__25844 = G__25963;
chunk__25845 = G__25964;
count__25846 = G__25965;
i__25847 = G__25966;
continue;
} else {
var event = cljs.core.first(seq__25844__$1);
clear_event(event);


var G__25967 = cljs.core.next(seq__25844__$1);
var G__25968 = null;
var G__25969 = (0);
var G__25970 = (0);
seq__25844 = G__25967;
chunk__25845 = G__25968;
count__25846 = G__25969;
i__25847 = G__25970;
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
