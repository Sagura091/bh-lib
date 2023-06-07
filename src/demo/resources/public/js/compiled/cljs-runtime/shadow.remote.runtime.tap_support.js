goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__61688,p__61689){
var map__61690 = p__61688;
var map__61690__$1 = cljs.core.__destructure_map(map__61690);
var svc = map__61690__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61690__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61690__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61690__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__61691 = p__61689;
var map__61691__$1 = cljs.core.__destructure_map(map__61691);
var msg = map__61691__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61691__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61691__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61691__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61691__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__61695,p__61696){
var map__61697 = p__61695;
var map__61697__$1 = cljs.core.__destructure_map(map__61697);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61697__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__61698 = p__61696;
var map__61698__$1 = cljs.core.__destructure_map(map__61698);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61698__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__61699,p__61700){
var map__61701 = p__61699;
var map__61701__$1 = cljs.core.__destructure_map(map__61701);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61701__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61701__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__61702 = p__61700;
var map__61702__$1 = cljs.core.__destructure_map(map__61702);
var msg = map__61702__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61702__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__61709,tid){
var map__61710 = p__61709;
var map__61710__$1 = cljs.core.__destructure_map(map__61710);
var svc = map__61710__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61710__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__61715 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__61716 = null;
var count__61717 = (0);
var i__61718 = (0);
while(true){
if((i__61718 < count__61717)){
var vec__61730 = chunk__61716.cljs$core$IIndexed$_nth$arity$2(null,i__61718);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61730,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61730,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__61745 = seq__61715;
var G__61746 = chunk__61716;
var G__61747 = count__61717;
var G__61748 = (i__61718 + (1));
seq__61715 = G__61745;
chunk__61716 = G__61746;
count__61717 = G__61747;
i__61718 = G__61748;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__61715);
if(temp__5753__auto__){
var seq__61715__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61715__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__61715__$1);
var G__61749 = cljs.core.chunk_rest(seq__61715__$1);
var G__61750 = c__4679__auto__;
var G__61751 = cljs.core.count(c__4679__auto__);
var G__61752 = (0);
seq__61715 = G__61749;
chunk__61716 = G__61750;
count__61717 = G__61751;
i__61718 = G__61752;
continue;
} else {
var vec__61733 = cljs.core.first(seq__61715__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61733,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61733,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__61753 = cljs.core.next(seq__61715__$1);
var G__61754 = null;
var G__61755 = (0);
var G__61756 = (0);
seq__61715 = G__61753;
chunk__61716 = G__61754;
count__61717 = G__61755;
i__61718 = G__61756;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__61711_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__61711_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__61712_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__61712_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__61713_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__61713_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__61714_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__61714_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__61736){
var map__61737 = p__61736;
var map__61737__$1 = cljs.core.__destructure_map(map__61737);
var svc = map__61737__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61737__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61737__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
