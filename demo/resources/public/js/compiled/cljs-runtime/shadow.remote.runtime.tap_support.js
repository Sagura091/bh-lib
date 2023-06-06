goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__61387,p__61388){
var map__61389 = p__61387;
var map__61389__$1 = cljs.core.__destructure_map(map__61389);
var svc = map__61389__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61389__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61389__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61389__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__61390 = p__61388;
var map__61390__$1 = cljs.core.__destructure_map(map__61390);
var msg = map__61390__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61390__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61390__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61390__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61390__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__61393,p__61394){
var map__61395 = p__61393;
var map__61395__$1 = cljs.core.__destructure_map(map__61395);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61395__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__61396 = p__61394;
var map__61396__$1 = cljs.core.__destructure_map(map__61396);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61396__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__61398,p__61399){
var map__61400 = p__61398;
var map__61400__$1 = cljs.core.__destructure_map(map__61400);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61400__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61400__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__61401 = p__61399;
var map__61401__$1 = cljs.core.__destructure_map(map__61401);
var msg = map__61401__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61401__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__61402,tid){
var map__61403 = p__61402;
var map__61403__$1 = cljs.core.__destructure_map(map__61403);
var svc = map__61403__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61403__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__61409 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__61410 = null;
var count__61411 = (0);
var i__61412 = (0);
while(true){
if((i__61412 < count__61411)){
var vec__61420 = chunk__61410.cljs$core$IIndexed$_nth$arity$2(null,i__61412);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61420,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61420,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__61432 = seq__61409;
var G__61433 = chunk__61410;
var G__61434 = count__61411;
var G__61435 = (i__61412 + (1));
seq__61409 = G__61432;
chunk__61410 = G__61433;
count__61411 = G__61434;
i__61412 = G__61435;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__61409);
if(temp__5753__auto__){
var seq__61409__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61409__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__61409__$1);
var G__61436 = cljs.core.chunk_rest(seq__61409__$1);
var G__61437 = c__4679__auto__;
var G__61438 = cljs.core.count(c__4679__auto__);
var G__61439 = (0);
seq__61409 = G__61436;
chunk__61410 = G__61437;
count__61411 = G__61438;
i__61412 = G__61439;
continue;
} else {
var vec__61424 = cljs.core.first(seq__61409__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61424,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61424,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__61440 = cljs.core.next(seq__61409__$1);
var G__61441 = null;
var G__61442 = (0);
var G__61443 = (0);
seq__61409 = G__61440;
chunk__61410 = G__61441;
count__61411 = G__61442;
i__61412 = G__61443;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__61405_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__61405_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__61406_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__61406_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__61407_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__61407_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__61408_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__61408_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__61430){
var map__61431 = p__61430;
var map__61431__$1 = cljs.core.__destructure_map(map__61431);
var svc = map__61431__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61431__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61431__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
