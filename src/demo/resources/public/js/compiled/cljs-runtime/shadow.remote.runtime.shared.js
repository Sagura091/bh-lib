goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__60905,res){
var map__60906 = p__60905;
var map__60906__$1 = cljs.core.__destructure_map(map__60906);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60906__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60906__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__60907 = res;
var G__60907__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60907,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__60907);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60907__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__60907__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__60909 = arguments.length;
switch (G__60909) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__60910,msg,handlers,timeout_after_ms){
var map__60911 = p__60910;
var map__60911__$1 = cljs.core.__destructure_map(map__60911);
var runtime = map__60911__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60911__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___61056 = arguments.length;
var i__4865__auto___61057 = (0);
while(true){
if((i__4865__auto___61057 < len__4864__auto___61056)){
args__4870__auto__.push((arguments[i__4865__auto___61057]));

var G__61058 = (i__4865__auto___61057 + (1));
i__4865__auto___61057 = G__61058;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__60918,ev,args){
var map__60919 = p__60918;
var map__60919__$1 = cljs.core.__destructure_map(map__60919);
var runtime = map__60919__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60919__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__60920 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60924 = null;
var count__60925 = (0);
var i__60926 = (0);
while(true){
if((i__60926 < count__60925)){
var ext = chunk__60924.cljs$core$IIndexed$_nth$arity$2(null,i__60926);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__61060 = seq__60920;
var G__61061 = chunk__60924;
var G__61062 = count__60925;
var G__61063 = (i__60926 + (1));
seq__60920 = G__61060;
chunk__60924 = G__61061;
count__60925 = G__61062;
i__60926 = G__61063;
continue;
} else {
var G__61064 = seq__60920;
var G__61065 = chunk__60924;
var G__61066 = count__60925;
var G__61067 = (i__60926 + (1));
seq__60920 = G__61064;
chunk__60924 = G__61065;
count__60925 = G__61066;
i__60926 = G__61067;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__60920);
if(temp__5753__auto__){
var seq__60920__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60920__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__60920__$1);
var G__61068 = cljs.core.chunk_rest(seq__60920__$1);
var G__61069 = c__4679__auto__;
var G__61070 = cljs.core.count(c__4679__auto__);
var G__61071 = (0);
seq__60920 = G__61068;
chunk__60924 = G__61069;
count__60925 = G__61070;
i__60926 = G__61071;
continue;
} else {
var ext = cljs.core.first(seq__60920__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__61072 = cljs.core.next(seq__60920__$1);
var G__61073 = null;
var G__61074 = (0);
var G__61075 = (0);
seq__60920 = G__61072;
chunk__60924 = G__61073;
count__60925 = G__61074;
i__60926 = G__61075;
continue;
} else {
var G__61076 = cljs.core.next(seq__60920__$1);
var G__61077 = null;
var G__61078 = (0);
var G__61079 = (0);
seq__60920 = G__61076;
chunk__60924 = G__61077;
count__60925 = G__61078;
i__60926 = G__61079;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq60913){
var G__60914 = cljs.core.first(seq60913);
var seq60913__$1 = cljs.core.next(seq60913);
var G__60915 = cljs.core.first(seq60913__$1);
var seq60913__$2 = cljs.core.next(seq60913__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60914,G__60915,seq60913__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__60934,p__60935){
var map__60936 = p__60934;
var map__60936__$1 = cljs.core.__destructure_map(map__60936);
var runtime = map__60936__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60936__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60937 = p__60935;
var map__60937__$1 = cljs.core.__destructure_map(map__60937);
var msg = map__60937__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60937__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__60938 = cljs.core.deref(state_ref);
var map__60938__$1 = cljs.core.__destructure_map(map__60938);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60938__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60938__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__60939){
var map__60940 = p__60939;
var map__60940__$1 = cljs.core.__destructure_map(map__60940);
var runtime = map__60940__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60940__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4253__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__60949,msg){
var map__60950 = p__60949;
var map__60950__$1 = cljs.core.__destructure_map(map__60950);
var runtime = map__60950__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60950__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__60963,key,p__60964){
var map__60968 = p__60963;
var map__60968__$1 = cljs.core.__destructure_map(map__60968);
var state = map__60968__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60968__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__60969 = p__60964;
var map__60969__$1 = cljs.core.__destructure_map(map__60969);
var spec = map__60969__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60969__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__60981,key,spec){
var map__60982 = p__60981;
var map__60982__$1 = cljs.core.__destructure_map(map__60982);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60982__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__60983_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__60983_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__60985_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__60985_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__60986_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__60986_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__60987_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__60987_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__60988_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__60988_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__61005,key){
var map__61006 = p__61005;
var map__61006__$1 = cljs.core.__destructure_map(map__61006);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61006__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__61011,msg){
var map__61012 = p__61011;
var map__61012__$1 = cljs.core.__destructure_map(map__61012);
var runtime = map__61012__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61012__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__61014,p__61015){
var map__61016 = p__61014;
var map__61016__$1 = cljs.core.__destructure_map(map__61016);
var runtime = map__61016__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61016__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__61017 = p__61015;
var map__61017__$1 = cljs.core.__destructure_map(map__61017);
var msg = map__61017__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61017__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61017__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__61020 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__61022 = null;
var count__61023 = (0);
var i__61024 = (0);
while(true){
if((i__61024 < count__61023)){
var map__61034 = chunk__61022.cljs$core$IIndexed$_nth$arity$2(null,i__61024);
var map__61034__$1 = cljs.core.__destructure_map(map__61034);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61034__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__61096 = seq__61020;
var G__61097 = chunk__61022;
var G__61098 = count__61023;
var G__61099 = (i__61024 + (1));
seq__61020 = G__61096;
chunk__61022 = G__61097;
count__61023 = G__61098;
i__61024 = G__61099;
continue;
} else {
var G__61100 = seq__61020;
var G__61101 = chunk__61022;
var G__61102 = count__61023;
var G__61103 = (i__61024 + (1));
seq__61020 = G__61100;
chunk__61022 = G__61101;
count__61023 = G__61102;
i__61024 = G__61103;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__61020);
if(temp__5753__auto__){
var seq__61020__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61020__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__61020__$1);
var G__61104 = cljs.core.chunk_rest(seq__61020__$1);
var G__61105 = c__4679__auto__;
var G__61106 = cljs.core.count(c__4679__auto__);
var G__61107 = (0);
seq__61020 = G__61104;
chunk__61022 = G__61105;
count__61023 = G__61106;
i__61024 = G__61107;
continue;
} else {
var map__61045 = cljs.core.first(seq__61020__$1);
var map__61045__$1 = cljs.core.__destructure_map(map__61045);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61045__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__61108 = cljs.core.next(seq__61020__$1);
var G__61109 = null;
var G__61110 = (0);
var G__61111 = (0);
seq__61020 = G__61108;
chunk__61022 = G__61109;
count__61023 = G__61110;
i__61024 = G__61111;
continue;
} else {
var G__61113 = cljs.core.next(seq__61020__$1);
var G__61114 = null;
var G__61115 = (0);
var G__61116 = (0);
seq__61020 = G__61113;
chunk__61022 = G__61114;
count__61023 = G__61115;
i__61024 = G__61116;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
