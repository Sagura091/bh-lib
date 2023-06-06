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
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__41706,res){
var map__41707 = p__41706;
var map__41707__$1 = cljs.core.__destructure_map(map__41707);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41707__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41707__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__41708 = res;
var G__41708__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41708,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__41708);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41708__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__41708__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__41716 = arguments.length;
switch (G__41716) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__41717,msg,handlers,timeout_after_ms){
var map__41718 = p__41717;
var map__41718__$1 = cljs.core.__destructure_map(map__41718);
var runtime = map__41718__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41718__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___41799 = arguments.length;
var i__4865__auto___41800 = (0);
while(true){
if((i__4865__auto___41800 < len__4864__auto___41799)){
args__4870__auto__.push((arguments[i__4865__auto___41800]));

var G__41801 = (i__4865__auto___41800 + (1));
i__4865__auto___41800 = G__41801;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__41728,ev,args){
var map__41729 = p__41728;
var map__41729__$1 = cljs.core.__destructure_map(map__41729);
var runtime = map__41729__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41729__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__41730 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__41733 = null;
var count__41734 = (0);
var i__41735 = (0);
while(true){
if((i__41735 < count__41734)){
var ext = chunk__41733.cljs$core$IIndexed$_nth$arity$2(null,i__41735);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__41802 = seq__41730;
var G__41803 = chunk__41733;
var G__41804 = count__41734;
var G__41805 = (i__41735 + (1));
seq__41730 = G__41802;
chunk__41733 = G__41803;
count__41734 = G__41804;
i__41735 = G__41805;
continue;
} else {
var G__41806 = seq__41730;
var G__41807 = chunk__41733;
var G__41808 = count__41734;
var G__41809 = (i__41735 + (1));
seq__41730 = G__41806;
chunk__41733 = G__41807;
count__41734 = G__41808;
i__41735 = G__41809;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__41730);
if(temp__5753__auto__){
var seq__41730__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41730__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__41730__$1);
var G__41810 = cljs.core.chunk_rest(seq__41730__$1);
var G__41811 = c__4679__auto__;
var G__41812 = cljs.core.count(c__4679__auto__);
var G__41813 = (0);
seq__41730 = G__41810;
chunk__41733 = G__41811;
count__41734 = G__41812;
i__41735 = G__41813;
continue;
} else {
var ext = cljs.core.first(seq__41730__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__41814 = cljs.core.next(seq__41730__$1);
var G__41815 = null;
var G__41816 = (0);
var G__41817 = (0);
seq__41730 = G__41814;
chunk__41733 = G__41815;
count__41734 = G__41816;
i__41735 = G__41817;
continue;
} else {
var G__41818 = cljs.core.next(seq__41730__$1);
var G__41819 = null;
var G__41820 = (0);
var G__41821 = (0);
seq__41730 = G__41818;
chunk__41733 = G__41819;
count__41734 = G__41820;
i__41735 = G__41821;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq41719){
var G__41720 = cljs.core.first(seq41719);
var seq41719__$1 = cljs.core.next(seq41719);
var G__41721 = cljs.core.first(seq41719__$1);
var seq41719__$2 = cljs.core.next(seq41719__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41720,G__41721,seq41719__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__41744,p__41745){
var map__41746 = p__41744;
var map__41746__$1 = cljs.core.__destructure_map(map__41746);
var runtime = map__41746__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41746__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__41747 = p__41745;
var map__41747__$1 = cljs.core.__destructure_map(map__41747);
var msg = map__41747__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41747__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__41748 = cljs.core.deref(state_ref);
var map__41748__$1 = cljs.core.__destructure_map(map__41748);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41748__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41748__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__41749){
var map__41750 = p__41749;
var map__41750__$1 = cljs.core.__destructure_map(map__41750);
var runtime = map__41750__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41750__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4253__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__41751,msg){
var map__41752 = p__41751;
var map__41752__$1 = cljs.core.__destructure_map(map__41752);
var runtime = map__41752__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41752__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__41758,key,p__41759){
var map__41760 = p__41758;
var map__41760__$1 = cljs.core.__destructure_map(map__41760);
var state = map__41760__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41760__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__41761 = p__41759;
var map__41761__$1 = cljs.core.__destructure_map(map__41761);
var spec = map__41761__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41761__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__41762,key,spec){
var map__41763 = p__41762;
var map__41763__$1 = cljs.core.__destructure_map(map__41763);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41763__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__41764_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__41764_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__41765_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__41765_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__41766_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__41766_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__41767_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__41767_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__41768_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__41768_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__41772,key){
var map__41773 = p__41772;
var map__41773__$1 = cljs.core.__destructure_map(map__41773);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41773__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__41775,msg){
var map__41776 = p__41775;
var map__41776__$1 = cljs.core.__destructure_map(map__41776);
var runtime = map__41776__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41776__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__41777,p__41778){
var map__41779 = p__41777;
var map__41779__$1 = cljs.core.__destructure_map(map__41779);
var runtime = map__41779__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41779__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__41780 = p__41778;
var map__41780__$1 = cljs.core.__destructure_map(map__41780);
var msg = map__41780__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41780__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41780__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__41783 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__41785 = null;
var count__41786 = (0);
var i__41787 = (0);
while(true){
if((i__41787 < count__41786)){
var map__41791 = chunk__41785.cljs$core$IIndexed$_nth$arity$2(null,i__41787);
var map__41791__$1 = cljs.core.__destructure_map(map__41791);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41791__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__41842 = seq__41783;
var G__41843 = chunk__41785;
var G__41844 = count__41786;
var G__41845 = (i__41787 + (1));
seq__41783 = G__41842;
chunk__41785 = G__41843;
count__41786 = G__41844;
i__41787 = G__41845;
continue;
} else {
var G__41846 = seq__41783;
var G__41847 = chunk__41785;
var G__41848 = count__41786;
var G__41849 = (i__41787 + (1));
seq__41783 = G__41846;
chunk__41785 = G__41847;
count__41786 = G__41848;
i__41787 = G__41849;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__41783);
if(temp__5753__auto__){
var seq__41783__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41783__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__41783__$1);
var G__41850 = cljs.core.chunk_rest(seq__41783__$1);
var G__41851 = c__4679__auto__;
var G__41852 = cljs.core.count(c__4679__auto__);
var G__41853 = (0);
seq__41783 = G__41850;
chunk__41785 = G__41851;
count__41786 = G__41852;
i__41787 = G__41853;
continue;
} else {
var map__41792 = cljs.core.first(seq__41783__$1);
var map__41792__$1 = cljs.core.__destructure_map(map__41792);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41792__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__41854 = cljs.core.next(seq__41783__$1);
var G__41855 = null;
var G__41856 = (0);
var G__41857 = (0);
seq__41783 = G__41854;
chunk__41785 = G__41855;
count__41786 = G__41856;
i__41787 = G__41857;
continue;
} else {
var G__41858 = cljs.core.next(seq__41783__$1);
var G__41859 = null;
var G__41860 = (0);
var G__41861 = (0);
seq__41783 = G__41858;
chunk__41785 = G__41859;
count__41786 = G__41860;
i__41787 = G__41861;
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
