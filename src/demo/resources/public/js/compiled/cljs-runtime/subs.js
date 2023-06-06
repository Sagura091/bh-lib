goog.provide('subs');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("subs","pub-sub-started?","subs/pub-sub-started?",1216162504),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"pub-sub-started?","pub-sub-started?",1238574313).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"containers","containers",-2127048083),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"containers","containers",-2127048083).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("subs","source","subs/source",-436939584),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__50620){
var vec__50621 = p__50620;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50621,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50621,(1),null);
var or__4253__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sources","sources",-321166424),id], null));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("subs","subscribed","subs/subscribed",1023233076),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__50624){
var vec__50625 = p__50624;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50625,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50625,(1),null);
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"subscribed","subscribed",1012088257).cljs$core$IFn$_invoke$arity$1(db),source);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("subs","subscribe-error","subs/subscribe-error",-89598636),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"subscribe-error","subscribe-error",-67975259).cljs$core$IFn$_invoke$arity$1(db);
})], 0));

//# sourceMappingURL=subs.js.map
