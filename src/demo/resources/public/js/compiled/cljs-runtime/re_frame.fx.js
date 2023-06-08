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
var _STAR_current_trace_STAR__orig_val__46937 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__46938 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__46938);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___47050 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___47050)){
var new_db_47051 = temp__5753__auto___47050;
var fexpr__46944_47052 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__46944_47052.cljs$core$IFn$_invoke$arity$1 ? fexpr__46944_47052.cljs$core$IFn$_invoke$arity$1(new_db_47051) : fexpr__46944_47052.call(null,new_db_47051));
} else {
}

var seq__46945 = cljs.core.seq(effects_without_db);
var chunk__46946 = null;
var count__46947 = (0);
var i__46948 = (0);
while(true){
if((i__46948 < count__46947)){
var vec__46962 = chunk__46946.cljs$core$IIndexed$_nth$arity$2(null,i__46948);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46962,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46962,(1),null);
var temp__5751__auto___47053 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___47053)){
var effect_fn_47054 = temp__5751__auto___47053;
(effect_fn_47054.cljs$core$IFn$_invoke$arity$1 ? effect_fn_47054.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_47054.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__47055 = seq__46945;
var G__47056 = chunk__46946;
var G__47057 = count__46947;
var G__47058 = (i__46948 + (1));
seq__46945 = G__47055;
chunk__46946 = G__47056;
count__46947 = G__47057;
i__46948 = G__47058;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46945);
if(temp__5753__auto__){
var seq__46945__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46945__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__46945__$1);
var G__47059 = cljs.core.chunk_rest(seq__46945__$1);
var G__47060 = c__4679__auto__;
var G__47061 = cljs.core.count(c__4679__auto__);
var G__47062 = (0);
seq__46945 = G__47059;
chunk__46946 = G__47060;
count__46947 = G__47061;
i__46948 = G__47062;
continue;
} else {
var vec__46968 = cljs.core.first(seq__46945__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46968,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46968,(1),null);
var temp__5751__auto___47063 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___47063)){
var effect_fn_47064 = temp__5751__auto___47063;
(effect_fn_47064.cljs$core$IFn$_invoke$arity$1 ? effect_fn_47064.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_47064.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__47065 = cljs.core.next(seq__46945__$1);
var G__47066 = null;
var G__47067 = (0);
var G__47068 = (0);
seq__46945 = G__47065;
chunk__46946 = G__47066;
count__46947 = G__47067;
i__46948 = G__47068;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__46647__auto___47069 = re_frame.interop.now();
var duration__46648__auto___47070 = (end__46647__auto___47069 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__46648__auto___47070,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__46647__auto___47069);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__46937);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___47071 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___47071)){
var new_db_47072 = temp__5753__auto___47071;
var fexpr__46984_47073 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__46984_47073.cljs$core$IFn$_invoke$arity$1 ? fexpr__46984_47073.cljs$core$IFn$_invoke$arity$1(new_db_47072) : fexpr__46984_47073.call(null,new_db_47072));
} else {
}

var seq__46985 = cljs.core.seq(effects_without_db);
var chunk__46986 = null;
var count__46987 = (0);
var i__46988 = (0);
while(true){
if((i__46988 < count__46987)){
var vec__46995 = chunk__46986.cljs$core$IIndexed$_nth$arity$2(null,i__46988);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46995,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46995,(1),null);
var temp__5751__auto___47074 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___47074)){
var effect_fn_47075 = temp__5751__auto___47074;
(effect_fn_47075.cljs$core$IFn$_invoke$arity$1 ? effect_fn_47075.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_47075.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__47076 = seq__46985;
var G__47077 = chunk__46986;
var G__47078 = count__46987;
var G__47079 = (i__46988 + (1));
seq__46985 = G__47076;
chunk__46986 = G__47077;
count__46987 = G__47078;
i__46988 = G__47079;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46985);
if(temp__5753__auto__){
var seq__46985__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46985__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__46985__$1);
var G__47080 = cljs.core.chunk_rest(seq__46985__$1);
var G__47081 = c__4679__auto__;
var G__47082 = cljs.core.count(c__4679__auto__);
var G__47083 = (0);
seq__46985 = G__47080;
chunk__46986 = G__47081;
count__46987 = G__47082;
i__46988 = G__47083;
continue;
} else {
var vec__47002 = cljs.core.first(seq__46985__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47002,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47002,(1),null);
var temp__5751__auto___47084 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___47084)){
var effect_fn_47085 = temp__5751__auto___47084;
(effect_fn_47085.cljs$core$IFn$_invoke$arity$1 ? effect_fn_47085.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_47085.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__47086 = cljs.core.next(seq__46985__$1);
var G__47087 = null;
var G__47088 = (0);
var G__47089 = (0);
seq__46985 = G__47086;
chunk__46986 = G__47087;
count__46987 = G__47088;
i__46988 = G__47089;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__47008){
var map__47009 = p__47008;
var map__47009__$1 = cljs.core.__destructure_map(map__47009);
var effect = map__47009__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47009__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47009__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__47013 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__47014 = null;
var count__47015 = (0);
var i__47016 = (0);
while(true){
if((i__47016 < count__47015)){
var effect = chunk__47014.cljs$core$IIndexed$_nth$arity$2(null,i__47016);
re_frame.fx.dispatch_later(effect);


var G__47090 = seq__47013;
var G__47091 = chunk__47014;
var G__47092 = count__47015;
var G__47093 = (i__47016 + (1));
seq__47013 = G__47090;
chunk__47014 = G__47091;
count__47015 = G__47092;
i__47016 = G__47093;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47013);
if(temp__5753__auto__){
var seq__47013__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47013__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__47013__$1);
var G__47094 = cljs.core.chunk_rest(seq__47013__$1);
var G__47095 = c__4679__auto__;
var G__47096 = cljs.core.count(c__4679__auto__);
var G__47097 = (0);
seq__47013 = G__47094;
chunk__47014 = G__47095;
count__47015 = G__47096;
i__47016 = G__47097;
continue;
} else {
var effect = cljs.core.first(seq__47013__$1);
re_frame.fx.dispatch_later(effect);


var G__47098 = cljs.core.next(seq__47013__$1);
var G__47099 = null;
var G__47100 = (0);
var G__47101 = (0);
seq__47013 = G__47098;
chunk__47014 = G__47099;
count__47015 = G__47100;
i__47016 = G__47101;
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
var seq__47026 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__47027 = null;
var count__47028 = (0);
var i__47029 = (0);
while(true){
if((i__47029 < count__47028)){
var vec__47036 = chunk__47027.cljs$core$IIndexed$_nth$arity$2(null,i__47029);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47036,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47036,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___47102 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___47102)){
var effect_fn_47103 = temp__5751__auto___47102;
(effect_fn_47103.cljs$core$IFn$_invoke$arity$1 ? effect_fn_47103.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_47103.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__47104 = seq__47026;
var G__47105 = chunk__47027;
var G__47106 = count__47028;
var G__47107 = (i__47029 + (1));
seq__47026 = G__47104;
chunk__47027 = G__47105;
count__47028 = G__47106;
i__47029 = G__47107;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47026);
if(temp__5753__auto__){
var seq__47026__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47026__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__47026__$1);
var G__47108 = cljs.core.chunk_rest(seq__47026__$1);
var G__47109 = c__4679__auto__;
var G__47110 = cljs.core.count(c__4679__auto__);
var G__47111 = (0);
seq__47026 = G__47108;
chunk__47027 = G__47109;
count__47028 = G__47110;
i__47029 = G__47111;
continue;
} else {
var vec__47039 = cljs.core.first(seq__47026__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47039,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47039,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___47112 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___47112)){
var effect_fn_47113 = temp__5751__auto___47112;
(effect_fn_47113.cljs$core$IFn$_invoke$arity$1 ? effect_fn_47113.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_47113.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__47114 = cljs.core.next(seq__47026__$1);
var G__47115 = null;
var G__47116 = (0);
var G__47117 = (0);
seq__47026 = G__47114;
chunk__47027 = G__47115;
count__47028 = G__47116;
i__47029 = G__47117;
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
var seq__47042 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__47043 = null;
var count__47044 = (0);
var i__47045 = (0);
while(true){
if((i__47045 < count__47044)){
var event = chunk__47043.cljs$core$IIndexed$_nth$arity$2(null,i__47045);
re_frame.router.dispatch(event);


var G__47118 = seq__47042;
var G__47119 = chunk__47043;
var G__47120 = count__47044;
var G__47121 = (i__47045 + (1));
seq__47042 = G__47118;
chunk__47043 = G__47119;
count__47044 = G__47120;
i__47045 = G__47121;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47042);
if(temp__5753__auto__){
var seq__47042__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47042__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__47042__$1);
var G__47122 = cljs.core.chunk_rest(seq__47042__$1);
var G__47123 = c__4679__auto__;
var G__47124 = cljs.core.count(c__4679__auto__);
var G__47125 = (0);
seq__47042 = G__47122;
chunk__47043 = G__47123;
count__47044 = G__47124;
i__47045 = G__47125;
continue;
} else {
var event = cljs.core.first(seq__47042__$1);
re_frame.router.dispatch(event);


var G__47126 = cljs.core.next(seq__47042__$1);
var G__47127 = null;
var G__47128 = (0);
var G__47129 = (0);
seq__47042 = G__47126;
chunk__47043 = G__47127;
count__47044 = G__47128;
i__47045 = G__47129;
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
var seq__47046 = cljs.core.seq(value);
var chunk__47047 = null;
var count__47048 = (0);
var i__47049 = (0);
while(true){
if((i__47049 < count__47048)){
var event = chunk__47047.cljs$core$IIndexed$_nth$arity$2(null,i__47049);
clear_event(event);


var G__47130 = seq__47046;
var G__47131 = chunk__47047;
var G__47132 = count__47048;
var G__47133 = (i__47049 + (1));
seq__47046 = G__47130;
chunk__47047 = G__47131;
count__47048 = G__47132;
i__47049 = G__47133;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47046);
if(temp__5753__auto__){
var seq__47046__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47046__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__47046__$1);
var G__47134 = cljs.core.chunk_rest(seq__47046__$1);
var G__47135 = c__4679__auto__;
var G__47136 = cljs.core.count(c__4679__auto__);
var G__47137 = (0);
seq__47046 = G__47134;
chunk__47047 = G__47135;
count__47048 = G__47136;
i__47049 = G__47137;
continue;
} else {
var event = cljs.core.first(seq__47046__$1);
clear_event(event);


var G__47138 = cljs.core.next(seq__47046__$1);
var G__47139 = null;
var G__47140 = (0);
var G__47141 = (0);
seq__47046 = G__47138;
chunk__47047 = G__47139;
count__47048 = G__47140;
i__47049 = G__47141;
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
