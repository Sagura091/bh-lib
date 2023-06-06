goog.provide('ui_component.tabbed_pane.utils');
ui_component.tabbed_pane.utils.init_tabbed_panel = (function ui_component$tabbed_pane$utils$init_tabbed_panel(base_id,initial_value){
var formal_id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(base_id);
var data_path = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [formal_id,new cljs.core.Keyword(null,"tab-panel","tab-panel",439413104)], null);
var config_id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(base_id,"config");
var data_id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(base_id,"data");
var db_id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("db",base_id);
var tab_id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(base_id,"tab-panel");
var value_id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(base_id,"value");
var init_db = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tab-panel","tab-panel",439413104),woolybear.packs.tab_panel.mk_tab_panel_data.cljs$core$IFn$_invoke$arity$variadic(data_path,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([initial_value], 0))], null);
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(db_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return (formal_id.cljs$core$IFn$_invoke$arity$1 ? formal_id.cljs$core$IFn$_invoke$arity$1(db) : formal_id.call(null,db));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(tab_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_id], null),(function (navbar){
return new cljs.core.Keyword(null,"tab-panel","tab-panel",439413104).cljs$core$IFn$_invoke$arity$1(navbar);
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(value_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tab_id], null),(function (tab_panel){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(tab_panel);
})], 0));

return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("events","init-locals","events/init-locals",-1987731373),formal_id,init_db], null));
});

//# sourceMappingURL=ui_component.tabbed_pane.utils.js.map
