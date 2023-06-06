goog.provide('data_source_handler');
if((typeof data_source_handler !== 'undefined') && (typeof data_source_handler._data_source_msg_handler !== 'undefined')){
} else {
data_source_handler._data_source_msg_handler = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__47075 = cljs.core.get_global_hierarchy;
return (fexpr__47075.cljs$core$IFn$_invoke$arity$0 ? fexpr__47075.cljs$core$IFn$_invoke$arity$0() : fexpr__47075.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("data-source-handler","-data-source-msg-handler"),(function (p__47076){
var vec__47077 = p__47076;
var seq__47078 = cljs.core.seq(vec__47077);
var first__47079 = cljs.core.first(seq__47078);
var seq__47078__$1 = cljs.core.next(seq__47078);
var evt = first__47079;
var _ = seq__47078__$1;
return evt;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
data_source_handler.data_source_msg_handler = (function data_source_handler$data_source_msg_handler(message){
return data_source_handler._data_source_msg_handler.cljs$core$IFn$_invoke$arity$1(message);
});
data_source_handler._data_source_msg_handler.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (message){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"data-source-handler",null,19,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unhandled -data-source-msg-handler event:",message], null);
}),null)),null,-1282765196,null);
}));
data_source_handler._data_source_msg_handler.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("some","broadcast","some/broadcast",1765715220),(function (p__47085){
var vec__47086 = p__47085;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47086,(0),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47086,(1),null);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("events","update-counter","events/update-counter",-1396371029),content], null));
}));
data_source_handler._data_source_msg_handler.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("publish","data-update","publish/data-update",-982660186),(function (p__47089){
var vec__47090 = p__47089;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47090,(0),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47090,(1),null);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("events","data-update","events/data-update",-2040459364),content], null));
}));

//# sourceMappingURL=data_source_handler.js.map
