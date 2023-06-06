goog.provide('bh_ui.data_source_handler');
if((typeof bh_ui !== 'undefined') && (typeof bh_ui.data_source_handler !== 'undefined') && (typeof bh_ui.data_source_handler._data_source_msg_handler !== 'undefined')){
} else {
bh_ui.data_source_handler._data_source_msg_handler = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__41852 = cljs.core.get_global_hierarchy;
return (fexpr__41852.cljs$core$IFn$_invoke$arity$0 ? fexpr__41852.cljs$core$IFn$_invoke$arity$0() : fexpr__41852.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("bh-ui.data-source-handler","-data-source-msg-handler"),(function (p__41854){
var vec__41855 = p__41854;
var seq__41856 = cljs.core.seq(vec__41855);
var first__41857 = cljs.core.first(seq__41856);
var seq__41856__$1 = cljs.core.next(seq__41856);
var evt = first__41857;
var _ = seq__41856__$1;
return evt;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
bh_ui.data_source_handler.data_source_msg_handler = (function bh_ui$data_source_handler$data_source_msg_handler(message){
return bh_ui.data_source_handler._data_source_msg_handler.cljs$core$IFn$_invoke$arity$1(message);
});
bh_ui.data_source_handler._data_source_msg_handler.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (message){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"bh-ui.data-source-handler",null,19,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unhandled -data-source-msg-handler event:",message], null);
}),null)),null,-2067113717,null);
}));
bh_ui.data_source_handler._data_source_msg_handler.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("some","broadcast","some/broadcast",1765715220),(function (p__41871){
var vec__41872 = p__41871;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41872,(0),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41872,(1),null);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.js.shim.module$events","update-counter","shadow.js.shim.module$events/update-counter",-1126422939),content], null));
}));
bh_ui.data_source_handler._data_source_msg_handler.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("publish","data-update","publish/data-update",-982660186),(function (p__41875){
var vec__41876 = p__41875;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41876,(0),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41876,(1),null);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.js.shim.module$events","data-update","shadow.js.shim.module$events/data-update",-1774709022),content], null));
}));

//# sourceMappingURL=bh_ui.data_source_handler.js.map
