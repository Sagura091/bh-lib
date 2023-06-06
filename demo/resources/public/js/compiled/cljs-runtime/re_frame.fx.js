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
var _STAR_current_trace_STAR__orig_val__26701 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__26702 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__26702);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___26817 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___26817)){
var new_db_26818 = temp__5753__auto___26817;
var fexpr__26708_26819 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__26708_26819.cljs$core$IFn$_invoke$arity$1 ? fexpr__26708_26819.cljs$core$IFn$_invoke$arity$1(new_db_26818) : fexpr__26708_26819.call(null,new_db_26818));
} else {
}

var seq__26709 = cljs.core.seq(effects_without_db);
var chunk__26710 = null;
var count__26711 = (0);
var i__26712 = (0);
while(true){
if((i__26712 < count__26711)){
var vec__26733 = chunk__26710.cljs$core$IIndexed$_nth$arity$2(null,i__26712);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26733,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26733,(1),null);
var temp__5751__auto___26820 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___26820)){
var effect_fn_26821 = temp__5751__auto___26820;
(effect_fn_26821.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26821.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26821.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__26822 = seq__26709;
var G__26823 = chunk__26710;
var G__26824 = count__26711;
var G__26825 = (i__26712 + (1));
seq__26709 = G__26822;
chunk__26710 = G__26823;
count__26711 = G__26824;
i__26712 = G__26825;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__26709);
if(temp__5753__auto__){
var seq__26709__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26709__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__26709__$1);
var G__26826 = cljs.core.chunk_rest(seq__26709__$1);
var G__26827 = c__4679__auto__;
var G__26828 = cljs.core.count(c__4679__auto__);
var G__26829 = (0);
seq__26709 = G__26826;
chunk__26710 = G__26827;
count__26711 = G__26828;
i__26712 = G__26829;
continue;
} else {
var vec__26745 = cljs.core.first(seq__26709__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26745,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26745,(1),null);
var temp__5751__auto___26830 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___26830)){
var effect_fn_26831 = temp__5751__auto___26830;
(effect_fn_26831.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26831.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26831.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__26832 = cljs.core.next(seq__26709__$1);
var G__26833 = null;
var G__26834 = (0);
var G__26835 = (0);
seq__26709 = G__26832;
chunk__26710 = G__26833;
count__26711 = G__26834;
i__26712 = G__26835;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__26414__auto___26836 = re_frame.interop.now();
var duration__26415__auto___26837 = (end__26414__auto___26836 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__26415__auto___26837,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__26414__auto___26836);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__26701);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___26838 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___26838)){
var new_db_26839 = temp__5753__auto___26838;
var fexpr__26755_26840 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__26755_26840.cljs$core$IFn$_invoke$arity$1 ? fexpr__26755_26840.cljs$core$IFn$_invoke$arity$1(new_db_26839) : fexpr__26755_26840.call(null,new_db_26839));
} else {
}

var seq__26756 = cljs.core.seq(effects_without_db);
var chunk__26757 = null;
var count__26758 = (0);
var i__26759 = (0);
while(true){
if((i__26759 < count__26758)){
var vec__26781 = chunk__26757.cljs$core$IIndexed$_nth$arity$2(null,i__26759);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26781,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26781,(1),null);
var temp__5751__auto___26841 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___26841)){
var effect_fn_26842 = temp__5751__auto___26841;
(effect_fn_26842.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26842.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26842.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__26843 = seq__26756;
var G__26844 = chunk__26757;
var G__26845 = count__26758;
var G__26846 = (i__26759 + (1));
seq__26756 = G__26843;
chunk__26757 = G__26844;
count__26758 = G__26845;
i__26759 = G__26846;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__26756);
if(temp__5753__auto__){
var seq__26756__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26756__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__26756__$1);
var G__26847 = cljs.core.chunk_rest(seq__26756__$1);
var G__26848 = c__4679__auto__;
var G__26849 = cljs.core.count(c__4679__auto__);
var G__26850 = (0);
seq__26756 = G__26847;
chunk__26757 = G__26848;
count__26758 = G__26849;
i__26759 = G__26850;
continue;
} else {
var vec__26784 = cljs.core.first(seq__26756__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26784,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26784,(1),null);
var temp__5751__auto___26851 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___26851)){
var effect_fn_26852 = temp__5751__auto___26851;
(effect_fn_26852.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26852.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26852.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__26853 = cljs.core.next(seq__26756__$1);
var G__26854 = null;
var G__26855 = (0);
var G__26856 = (0);
seq__26756 = G__26853;
chunk__26757 = G__26854;
count__26758 = G__26855;
i__26759 = G__26856;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__26787){
var map__26788 = p__26787;
var map__26788__$1 = cljs.core.__destructure_map(map__26788);
var effect = map__26788__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26788__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26788__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__26789 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__26790 = null;
var count__26791 = (0);
var i__26792 = (0);
while(true){
if((i__26792 < count__26791)){
var effect = chunk__26790.cljs$core$IIndexed$_nth$arity$2(null,i__26792);
re_frame.fx.dispatch_later(effect);


var G__26857 = seq__26789;
var G__26858 = chunk__26790;
var G__26859 = count__26791;
var G__26860 = (i__26792 + (1));
seq__26789 = G__26857;
chunk__26790 = G__26858;
count__26791 = G__26859;
i__26792 = G__26860;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__26789);
if(temp__5753__auto__){
var seq__26789__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26789__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__26789__$1);
var G__26861 = cljs.core.chunk_rest(seq__26789__$1);
var G__26862 = c__4679__auto__;
var G__26863 = cljs.core.count(c__4679__auto__);
var G__26864 = (0);
seq__26789 = G__26861;
chunk__26790 = G__26862;
count__26791 = G__26863;
i__26792 = G__26864;
continue;
} else {
var effect = cljs.core.first(seq__26789__$1);
re_frame.fx.dispatch_later(effect);


var G__26865 = cljs.core.next(seq__26789__$1);
var G__26866 = null;
var G__26867 = (0);
var G__26868 = (0);
seq__26789 = G__26865;
chunk__26790 = G__26866;
count__26791 = G__26867;
i__26792 = G__26868;
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
var seq__26793 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__26794 = null;
var count__26795 = (0);
var i__26796 = (0);
while(true){
if((i__26796 < count__26795)){
var vec__26803 = chunk__26794.cljs$core$IIndexed$_nth$arity$2(null,i__26796);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26803,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26803,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___26870 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___26870)){
var effect_fn_26871 = temp__5751__auto___26870;
(effect_fn_26871.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26871.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26871.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__26873 = seq__26793;
var G__26874 = chunk__26794;
var G__26875 = count__26795;
var G__26876 = (i__26796 + (1));
seq__26793 = G__26873;
chunk__26794 = G__26874;
count__26795 = G__26875;
i__26796 = G__26876;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__26793);
if(temp__5753__auto__){
var seq__26793__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26793__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__26793__$1);
var G__26877 = cljs.core.chunk_rest(seq__26793__$1);
var G__26878 = c__4679__auto__;
var G__26879 = cljs.core.count(c__4679__auto__);
var G__26880 = (0);
seq__26793 = G__26877;
chunk__26794 = G__26878;
count__26795 = G__26879;
i__26796 = G__26880;
continue;
} else {
var vec__26806 = cljs.core.first(seq__26793__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26806,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26806,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___26881 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___26881)){
var effect_fn_26882 = temp__5751__auto___26881;
(effect_fn_26882.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26882.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26882.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__26883 = cljs.core.next(seq__26793__$1);
var G__26884 = null;
var G__26885 = (0);
var G__26886 = (0);
seq__26793 = G__26883;
chunk__26794 = G__26884;
count__26795 = G__26885;
i__26796 = G__26886;
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
var seq__26809 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__26810 = null;
var count__26811 = (0);
var i__26812 = (0);
while(true){
if((i__26812 < count__26811)){
var event = chunk__26810.cljs$core$IIndexed$_nth$arity$2(null,i__26812);
re_frame.router.dispatch(event);


var G__26887 = seq__26809;
var G__26888 = chunk__26810;
var G__26889 = count__26811;
var G__26890 = (i__26812 + (1));
seq__26809 = G__26887;
chunk__26810 = G__26888;
count__26811 = G__26889;
i__26812 = G__26890;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__26809);
if(temp__5753__auto__){
var seq__26809__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26809__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__26809__$1);
var G__26891 = cljs.core.chunk_rest(seq__26809__$1);
var G__26892 = c__4679__auto__;
var G__26893 = cljs.core.count(c__4679__auto__);
var G__26894 = (0);
seq__26809 = G__26891;
chunk__26810 = G__26892;
count__26811 = G__26893;
i__26812 = G__26894;
continue;
} else {
var event = cljs.core.first(seq__26809__$1);
re_frame.router.dispatch(event);


var G__26895 = cljs.core.next(seq__26809__$1);
var G__26896 = null;
var G__26897 = (0);
var G__26898 = (0);
seq__26809 = G__26895;
chunk__26810 = G__26896;
count__26811 = G__26897;
i__26812 = G__26898;
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
var seq__26813 = cljs.core.seq(value);
var chunk__26814 = null;
var count__26815 = (0);
var i__26816 = (0);
while(true){
if((i__26816 < count__26815)){
var event = chunk__26814.cljs$core$IIndexed$_nth$arity$2(null,i__26816);
clear_event(event);


var G__26899 = seq__26813;
var G__26900 = chunk__26814;
var G__26901 = count__26815;
var G__26902 = (i__26816 + (1));
seq__26813 = G__26899;
chunk__26814 = G__26900;
count__26815 = G__26901;
i__26816 = G__26902;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__26813);
if(temp__5753__auto__){
var seq__26813__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26813__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__26813__$1);
var G__26903 = cljs.core.chunk_rest(seq__26813__$1);
var G__26904 = c__4679__auto__;
var G__26905 = cljs.core.count(c__4679__auto__);
var G__26906 = (0);
seq__26813 = G__26903;
chunk__26814 = G__26904;
count__26815 = G__26905;
i__26816 = G__26906;
continue;
} else {
var event = cljs.core.first(seq__26813__$1);
clear_event(event);


var G__26907 = cljs.core.next(seq__26813__$1);
var G__26908 = null;
var G__26909 = (0);
var G__26910 = (0);
seq__26813 = G__26907;
chunk__26814 = G__26908;
count__26815 = G__26909;
i__26816 = G__26910;
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
