goog.provide('woolybear.packs.tab_panel');
/**
 * 
 *   Set up the data map for a tab-panel/tab-bar combination.
 *   
 */
woolybear.packs.tab_panel.mk_tab_panel_data = (function woolybear$packs$tab_panel$mk_tab_panel_data(var_args){
var args__4870__auto__ = [];
var len__4864__auto___70989 = arguments.length;
var i__4865__auto___70990 = (0);
while(true){
if((i__4865__auto___70990 < len__4864__auto___70989)){
args__4870__auto__.push((arguments[i__4865__auto___70990]));

var G__70991 = (i__4865__auto___70990 + (1));
i__4865__auto___70990 = G__70991;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return woolybear.packs.tab_panel.mk_tab_panel_data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(woolybear.packs.tab_panel.mk_tab_panel_data.cljs$core$IFn$_invoke$arity$variadic = (function (path_in_db,p__70908){
var vec__70910 = p__70908;
var default_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70910,(0),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),default_value,new cljs.core.Keyword(null,"data-path","data-path",674802181),path_in_db], null);
}));

(woolybear.packs.tab_panel.mk_tab_panel_data.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(woolybear.packs.tab_panel.mk_tab_panel_data.cljs$lang$applyTo = (function (seq70903){
var G__70904 = cljs.core.first(seq70903);
var seq70903__$1 = cljs.core.next(seq70903);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70904,seq70903__$1);
}));

if(day8.re_frame.tracing.is_trace_enabled_QMARK_()){
woolybear.packs.tab_panel.tab_panel_on_click_handler = (function woolybear$packs$tab_panel$tab_panel_on_click_handler(db,p__70918){
var vec__70919 = p__70918;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70919,(0),null);
var data_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70919,(1),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70919,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"defn-traced*","defn-traced*",1189154228,null),new cljs.core.Symbol(null,"tab-panel-on-click-handler","tab-panel-on-click-handler",1708203365,null),"Given the data path to the component data for the tab panel,\n  and a new value, update the component data with the new value.",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"data-path","data-path",-1979633588,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"data-path","data-path",-1979633588,null),new cljs.core.Keyword(null,"value","value",305978217)),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null))));

var result__64397__auto__ = cljs.core.assoc_in((function (){var result__64397__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(2),new cljs.core.Keyword(null,"result","result",1415092211),result__64397__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__64397__auto__;
})(),(function (){var result__64397__auto__ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var result__64397__auto__ = data_path;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__64397__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"data-path","data-path",-1979633588,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__64397__auto__;
})(),new cljs.core.Keyword(null,"value","value",305978217));
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__64397__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"data-path","data-path",-1979633588,null),new cljs.core.Keyword(null,"value","value",305978217)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__64397__auto__;
})(),(function (){var result__64397__auto__ = new_value;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(6),new cljs.core.Keyword(null,"result","result",1415092211),result__64397__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__64397__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__64397__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"data-path","data-path",-1979633588,null),new cljs.core.Keyword(null,"value","value",305978217)),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__64397__auto__;
}catch (e70922){var e = e70922;
throw e;
}});
} else {
/**
 * Given the data path to the component data for the tab panel,
 *   and a new value, update the component data with the new value.
 */
woolybear.packs.tab_panel.tab_panel_on_click_handler = (function woolybear$packs$tab_panel$tab_panel_on_click_handler(db,p__70924){
var vec__70925 = p__70924;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70925,(0),null);
var data_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70925,(1),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70925,(2),null);
return cljs.core.assoc_in(db,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(data_path,new cljs.core.Keyword(null,"value","value",305978217)),new_value);
});
}
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("tab-panel","on-click","tab-panel/on-click",-1948665245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.tools.interceptors.throw_on_nil_db], null),woolybear.packs.tab_panel.tab_panel_on_click_handler);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("tab-bar","options","tab-bar/options",966523590),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","subscribe-to-component-data","ad/subscribe-to-component-data",1210013749)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","subscribe-to-component-data","ad/subscribe-to-component-data",1210013749)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__70928){
return cljs.core.map_QMARK_(G__70928);
}),(function (G__70928){
return cljs.core.contains_QMARK_(G__70928,new cljs.core.Keyword(null,"subscribe-to-component-data","subscribe-to-component-data",1209998418));
})], null),(function (G__70928){
return ((cljs.core.map_QMARK_(G__70928)) && (cljs.core.contains_QMARK_(G__70928,new cljs.core.Keyword(null,"subscribe-to-component-data","subscribe-to-component-data",1209998418))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843),new cljs.core.Keyword(null,"subscribe-to-classes","subscribe-to-classes",173193596)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","subscribe-to-component-data","ad/subscribe-to-component-data",1210013749)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subscribe-to-component-data","subscribe-to-component-data",1209998418)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"subscribe-to-component-data","subscribe-to-component-data",1209998418)))], null),null])));
/**
 * Used to map over the buttons in a tab bar, setting up the on-click dispatchers
 *   appropriately.
 */
woolybear.packs.tab_panel.prep_buttons = (function woolybear$packs$tab_panel$prep_buttons(data_path,child){
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(child),woolybear.ad.buttons.tab_button)))){
return child;
} else {
var vec__70938 = child;
var seq__70939 = cljs.core.seq(vec__70938);
var first__70940 = cljs.core.first(seq__70939);
var seq__70939__$1 = cljs.core.next(seq__70939);
var tag = first__70940;
var first__70940__$1 = cljs.core.first(seq__70939__$1);
var seq__70939__$2 = cljs.core.next(seq__70939__$1);
var opts = first__70940__$1;
var more = seq__70939__$2;
var _ = (((!(cljs.core.map_QMARK_(opts))))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Missing opts map on tab button",child)})():null);
var panel_id = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"panel-id","panel-id",2118466015).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Missing panel-id on tab button",child);
}
})();
var on_click = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(child);
var on_click__$1 = (cljs.core.truth_(on_click)?woolybear.ad.utils.append_to_dispatcher.cljs$core$IFn$_invoke$arity$variadic(on_click,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data_path,panel_id], 0)):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tab-panel","on-click","tab-panel/on-click",-1948665245),data_path,panel_id], null));
var on_click__$2 = woolybear.ad.utils.mk_dispatcher(on_click__$1);
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click__$2);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,opts__$1], null),more);
}
});
/**
 * 
 *   A component used with a tab-panel to display the row of tabs/buttons above
 *   the panel.
 *   
 */
woolybear.packs.tab_panel.tab_bar = (function woolybear$packs$tab_panel$tab_bar(var_args){
var args__4870__auto__ = [];
var len__4864__auto___70992 = arguments.length;
var i__4865__auto___70993 = (0);
while(true){
if((i__4865__auto___70993 < len__4864__auto___70992)){
args__4870__auto__.push((arguments[i__4865__auto___70993]));

var G__70994 = (i__4865__auto___70993 + (1));
i__4865__auto___70993 = G__70994;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return woolybear.packs.tab_panel.tab_bar.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(woolybear.packs.tab_panel.tab_bar.cljs$core$IFn$_invoke$arity$variadic = (function (opts,children){
var map__70947 = opts;
var map__70947__$1 = cljs.core.__destructure_map(map__70947);
var subscribe_to_component_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70947__$1,new cljs.core.Keyword(null,"subscribe-to-component-data","subscribe-to-component-data",1209998418));
var extra_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70947__$1,new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843));
var subscribe_to_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70947__$1,new cljs.core.Keyword(null,"subscribe-to-classes","subscribe-to-classes",173193596));
var data_sub = woolybear.ad.utils.subscribe_to(subscribe_to_component_data);
var data_path = new cljs.core.Keyword(null,"data-path","data-path",674802181).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data_sub));
var buttons = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(woolybear.packs.tab_panel.prep_buttons,data_path),children);
return (function() { 
var G__70995__delegate = function (_,___$1){
var data = cljs.core.deref(data_sub);
var current_panel_id = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(data);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.containers.bar,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843),woolybear.ad.utils.css_PLUS_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"wb-tab-bar","wb-tab-bar",1976933415),extra_classes], 0)),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261),subscribe_to_classes], null)], null),(function (){var iter__4652__auto__ = (function woolybear$packs$tab_panel$iter__70948(s__70949){
return (new cljs.core.LazySeq(null,(function (){
var s__70949__$1 = s__70949;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__70949__$1);
if(temp__5753__auto__){
var s__70949__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__70949__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__70949__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__70951 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__70950 = (0);
while(true){
if((i__70950 < size__4651__auto__)){
var button = cljs.core._nth(c__4650__auto__,i__70950);
var active_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_panel_id,woolybear.ad.utils.get_option(button,new cljs.core.Keyword(null,"panel-id","panel-id",2118466015)));
cljs.core.chunk_append(b__70951,((active_QMARK_)?woolybear.ad.utils.add_option(button,new cljs.core.Keyword(null,"active?","active?",459499776),true):button));

var G__70996 = (i__70950 + (1));
i__70950 = G__70996;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70951),woolybear$packs$tab_panel$iter__70948(cljs.core.chunk_rest(s__70949__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70951),null);
}
} else {
var button = cljs.core.first(s__70949__$2);
var active_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_panel_id,woolybear.ad.utils.get_option(button,new cljs.core.Keyword(null,"panel-id","panel-id",2118466015)));
return cljs.core.cons(((active_QMARK_)?woolybear.ad.utils.add_option(button,new cljs.core.Keyword(null,"active?","active?",459499776),true):button),woolybear$packs$tab_panel$iter__70948(cljs.core.rest(s__70949__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(buttons);
})());
};
var G__70995 = function (_,var_args){
var ___$1 = null;
if (arguments.length > 1) {
var G__70997__i = 0, G__70997__a = new Array(arguments.length -  1);
while (G__70997__i < G__70997__a.length) {G__70997__a[G__70997__i] = arguments[G__70997__i + 1]; ++G__70997__i;}
  ___$1 = new cljs.core.IndexedSeq(G__70997__a,0,null);
} 
return G__70995__delegate.call(this,_,___$1);};
G__70995.cljs$lang$maxFixedArity = 1;
G__70995.cljs$lang$applyTo = (function (arglist__70998){
var _ = cljs.core.first(arglist__70998);
var ___$1 = cljs.core.rest(arglist__70998);
return G__70995__delegate(_,___$1);
});
G__70995.cljs$core$IFn$_invoke$arity$variadic = G__70995__delegate;
return G__70995;
})()
;
}));

(woolybear.packs.tab_panel.tab_bar.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(woolybear.packs.tab_panel.tab_bar.cljs$lang$applyTo = (function (seq70944){
var G__70945 = cljs.core.first(seq70944);
var seq70944__$1 = cljs.core.next(seq70944);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70945,seq70944__$1);
}));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("woolybear.packs.tab-panel","tab-bar","woolybear.packs.tab-panel/tab-bar",1488145212,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword("tab-bar","options","tab-bar/options",966523590),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword("tab-bar","options","tab-bar/options",966523590),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"children","children",-940561982)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tab-bar","options","tab-bar/options",966523590),cljs.spec.alpha.rep_PLUS_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tab-bar","options","tab-bar/options",966523590),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword("tab-bar","options","tab-bar/options",966523590),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("tab-sub-panel","panel-id","tab-sub-panel/panel-id",-128634400),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("tab-sub-panel","options","tab-sub-panel/options",736117978),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tab-sub-panel","panel-id","tab-sub-panel/panel-id",-128634400)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tab-sub-panel","panel-id","tab-sub-panel/panel-id",-128634400)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__70962){
return cljs.core.map_QMARK_(G__70962);
}),(function (G__70962){
return cljs.core.contains_QMARK_(G__70962,new cljs.core.Keyword(null,"panel-id","panel-id",2118466015));
})], null),(function (G__70962){
return ((cljs.core.map_QMARK_(G__70962)) && (cljs.core.contains_QMARK_(G__70962,new cljs.core.Keyword(null,"panel-id","panel-id",2118466015))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843),new cljs.core.Keyword(null,"subscribe-to-classes","subscribe-to-classes",173193596)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tab-sub-panel","panel-id","tab-sub-panel/panel-id",-128634400)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel-id","panel-id",2118466015)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"panel-id","panel-id",2118466015)))], null),null])));
/**
 * 
 *   Child component to be used inside a tab-panel. The `opts` argument must contain
 *   a :panel-id key whose value is used to distinguish this sub-panel from other
 *   sub-panels in the same tab-panel. Also accepts the standard options for extra-events
 *   and subscribe-to-events.
 *   
 */
woolybear.packs.tab_panel.sub_panel = (function woolybear$packs$tab_panel$sub_panel(var_args){
var args__4870__auto__ = [];
var len__4864__auto___70999 = arguments.length;
var i__4865__auto___71000 = (0);
while(true){
if((i__4865__auto___71000 < len__4864__auto___70999)){
args__4870__auto__.push((arguments[i__4865__auto___71000]));

var G__71001 = (i__4865__auto___71000 + (1));
i__4865__auto___71000 = G__71001;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return woolybear.packs.tab_panel.sub_panel.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(woolybear.packs.tab_panel.sub_panel.cljs$core$IFn$_invoke$arity$variadic = (function (opts,_){
var map__70969 = opts;
var map__70969__$1 = cljs.core.__destructure_map(map__70969);
var extra_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70969__$1,new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843));
var subscribe_to_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70969__$1,new cljs.core.Keyword(null,"subscribe-to-classes","subscribe-to-classes",173193596));
var classes_sub = woolybear.ad.utils.subscribe_to(subscribe_to_classes);
return (function() { 
var G__71002__delegate = function (___$1,children){
var dynamic_classes = cljs.core.deref(classes_sub);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),woolybear.ad.utils.css__GT_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"wb-tab-sub-panel","wb-tab-sub-panel",-271049302),extra_classes,dynamic_classes], 0))], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.containers.v_scroll_pane,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),children)], null);
};
var G__71002 = function (___$1,var_args){
var children = null;
if (arguments.length > 1) {
var G__71003__i = 0, G__71003__a = new Array(arguments.length -  1);
while (G__71003__i < G__71003__a.length) {G__71003__a[G__71003__i] = arguments[G__71003__i + 1]; ++G__71003__i;}
  children = new cljs.core.IndexedSeq(G__71003__a,0,null);
} 
return G__71002__delegate.call(this,___$1,children);};
G__71002.cljs$lang$maxFixedArity = 1;
G__71002.cljs$lang$applyTo = (function (arglist__71004){
var ___$1 = cljs.core.first(arglist__71004);
var children = cljs.core.rest(arglist__71004);
return G__71002__delegate(___$1,children);
});
G__71002.cljs$core$IFn$_invoke$arity$variadic = G__71002__delegate;
return G__71002;
})()
;
}));

(woolybear.packs.tab_panel.sub_panel.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(woolybear.packs.tab_panel.sub_panel.cljs$lang$applyTo = (function (seq70967){
var G__70968 = cljs.core.first(seq70967);
var seq70967__$1 = cljs.core.next(seq70967);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70968,seq70967__$1);
}));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("woolybear.packs.tab-panel","sub-panel","woolybear.packs.tab-panel/sub-panel",226154615,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("tab-sub-panel","options","tab-sub-panel/options",736117978)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("tab-sub-panel","options","tab-sub-panel/options",736117978)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"children","children",-940561982)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.maybe_impl(new cljs.core.Keyword("tab-sub-panel","options","tab-sub-panel/options",736117978),new cljs.core.Keyword("tab-sub-panel","options","tab-sub-panel/options",736117978)),cljs.spec.alpha.rep_PLUS_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("tab-sub-panel","options","tab-sub-panel/options",736117978)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("tab-sub-panel","options","tab-sub-panel/options",736117978)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_,null,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),null,null,null));
/**
 * Internal reducing panel used to add sub-panels to a map keyed by :panel-id
 */
woolybear.packs.tab_panel.attach_subpanel = (function woolybear$packs$tab_panel$attach_subpanel(m,panel){
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(panel),woolybear.packs.tab_panel.sub_panel)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("All children of a tab-panel must be sub-panels",panel);
} else {
}

var temp__5751__auto__ = new cljs.core.Keyword(null,"panel-id","panel-id",2118466015).cljs$core$IFn$_invoke$arity$1(cljs.core.second(panel));
if(cljs.core.truth_(temp__5751__auto__)){
var id = temp__5751__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,id,panel);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Missing :panel-id in sub-panel",panel);
}
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("tab-panel","subscribe-to-selected-tab","tab-panel/subscribe-to-selected-tab",698167551),new cljs.core.Keyword("ad","subscription","ad/subscription",1949020411),new cljs.core.Keyword("ad","subscription","ad/subscription",1949020411));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("tab-panel","options","tab-panel/options",-1537521867),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tab-panel","subscribe-to-selected-tab","tab-panel/subscribe-to-selected-tab",698167551)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tab-panel","subscribe-to-selected-tab","tab-panel/subscribe-to-selected-tab",698167551)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__70984){
return cljs.core.map_QMARK_(G__70984);
}),(function (G__70984){
return cljs.core.contains_QMARK_(G__70984,new cljs.core.Keyword(null,"subscribe-to-selected-tab","subscribe-to-selected-tab",138020659));
})], null),(function (G__70984){
return ((cljs.core.map_QMARK_(G__70984)) && (cljs.core.contains_QMARK_(G__70984,new cljs.core.Keyword(null,"subscribe-to-selected-tab","subscribe-to-selected-tab",138020659))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843),new cljs.core.Keyword(null,"subscribe-to-classes","subscribe-to-classes",173193596)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tab-panel","subscribe-to-selected-tab","tab-panel/subscribe-to-selected-tab",698167551)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subscribe-to-selected-tab","subscribe-to-selected-tab",138020659)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"subscribe-to-selected-tab","subscribe-to-selected-tab",138020659)))], null),null])));
/**
 * 
 *   A panel component that contains multiple panels, only one of which is visible at any given
 *   time. Takes the standard :extra-classes and :subscribe-to-classes keys, plus a specific
 *   :subscribe-to-selected-tab key used to select the sub-panel to display. Each sub-panel must
 *   have a :panel-id key whose value is unique relative to other sub-panels in the same tab-panel.
 *   Setting the :subscribe-to-selected-tab subscription value to this :panel-id key will cause
 *   that sub-panel to be the one that is displayed in the tab panel.
 *   
 */
woolybear.packs.tab_panel.tab_panel = (function woolybear$packs$tab_panel$tab_panel(var_args){
var args__4870__auto__ = [];
var len__4864__auto___71018 = arguments.length;
var i__4865__auto___71019 = (0);
while(true){
if((i__4865__auto___71019 < len__4864__auto___71018)){
args__4870__auto__.push((arguments[i__4865__auto___71019]));

var G__71020 = (i__4865__auto___71019 + (1));
i__4865__auto___71019 = G__71020;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return woolybear.packs.tab_panel.tab_panel.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(woolybear.packs.tab_panel.tab_panel.cljs$core$IFn$_invoke$arity$variadic = (function (opts,children){
var map__70988 = opts;
var map__70988__$1 = cljs.core.__destructure_map(map__70988);
var extra_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70988__$1,new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843));
var subscribe_to_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70988__$1,new cljs.core.Keyword(null,"subscribe-to-classes","subscribe-to-classes",173193596));
var subscribe_to_selected_tab = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70988__$1,new cljs.core.Keyword(null,"subscribe-to-selected-tab","subscribe-to-selected-tab",138020659));
var classes_sub = woolybear.ad.utils.subscribe_to(subscribe_to_classes);
var selected_tab_sub = woolybear.ad.utils.subscribe_to(subscribe_to_selected_tab);
var panels = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(woolybear.packs.tab_panel.attach_subpanel,cljs.core.PersistentArrayMap.EMPTY,children);
return (function() { 
var G__71021__delegate = function (_,___$1){
var dynamic_classes = cljs.core.deref(classes_sub);
var selected_tab = (function (){var or__4253__auto__ = cljs.core.deref(selected_tab_sub);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.first(cljs.core.keys(panels));
}
})();
var current_panel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(panels,selected_tab);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),woolybear.ad.utils.css__GT_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"wb-tab-panel","wb-tab-panel",1995347855),new cljs.core.Keyword(null,"container","container",-1736937707),extra_classes,dynamic_classes], 0))], null),current_panel], null);
};
var G__71021 = function (_,var_args){
var ___$1 = null;
if (arguments.length > 1) {
var G__71022__i = 0, G__71022__a = new Array(arguments.length -  1);
while (G__71022__i < G__71022__a.length) {G__71022__a[G__71022__i] = arguments[G__71022__i + 1]; ++G__71022__i;}
  ___$1 = new cljs.core.IndexedSeq(G__71022__a,0,null);
} 
return G__71021__delegate.call(this,_,___$1);};
G__71021.cljs$lang$maxFixedArity = 1;
G__71021.cljs$lang$applyTo = (function (arglist__71023){
var _ = cljs.core.first(arglist__71023);
var ___$1 = cljs.core.rest(arglist__71023);
return G__71021__delegate(_,___$1);
});
G__71021.cljs$core$IFn$_invoke$arity$variadic = G__71021__delegate;
return G__71021;
})()
;
}));

(woolybear.packs.tab_panel.tab_panel.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(woolybear.packs.tab_panel.tab_panel.cljs$lang$applyTo = (function (seq70986){
var G__70987 = cljs.core.first(seq70986);
var seq70986__$1 = cljs.core.next(seq70986);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70987,seq70986__$1);
}));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("woolybear.packs.tab-panel","tab-panel","woolybear.packs.tab-panel/tab-panel",366944553,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("tab-panel","options","tab-panel/options",-1537521867)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("tab-panel","options","tab-panel/options",-1537521867)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"children","children",-940561982)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.maybe_impl(new cljs.core.Keyword("tab-panel","options","tab-panel/options",-1537521867),new cljs.core.Keyword("tab-panel","options","tab-panel/options",-1537521867)),cljs.spec.alpha.rep_PLUS_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("tab-panel","options","tab-panel/options",-1537521867)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("tab-panel","options","tab-panel/options",-1537521867)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_,null,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),null,null,null));

//# sourceMappingURL=woolybear.packs.tab_panel.js.map
