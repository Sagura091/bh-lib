goog.provide('bh_ui.utils.helpers');
bh_ui.utils.helpers.config_tab_panel = (function bh_ui$utils$helpers$config_tab_panel(component_id){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tab-panel","tab-panel",439413104),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(component_id,"config"),new cljs.core.Keyword(null,"data-path","data-path",674802181),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"containers","containers",-2127048083),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(component_id),new cljs.core.Keyword(null,"tab-panel","tab-panel",439413104)], null)], null)], null);
});
bh_ui.utils.helpers.component_id = (function bh_ui$utils$helpers$component_id(){
return cljs_uuid_utils.core.uuid_string(cljs_uuid_utils.core.make_random_uuid());
});
bh_ui.utils.helpers.chart_config = (function bh_ui$utils$helpers$chart_config(p__50699,data_panel,config_panel){
var vec__50700 = p__50699;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50700,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50700,(1),null);
var panel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50700,(2),null);
var tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50700,(3),null);
var data_or_config = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [config,"config"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [data,"data"], null)], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.chart-config","div.chart-config",-1461132065),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.bhui.navbar.navbar,data_or_config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [panel], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.scroller,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"bh_ui/utils/helpers.cljs",new cljs.core.Keyword(null,"line","line",212345235),28], null)),new cljs.core.Keyword(null,"v-scroll","v-scroll",-1842185668),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"height","height",1025178622),"95%",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.packs.tab_panel.tab_panel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843),new cljs.core.Keyword(null,"is-fluid","is-fluid",1776512135),new cljs.core.Keyword(null,"subscribe-to-selected-tab","subscribe-to-selected-tab",138020659),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tab], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.packs.tab_panel.sub_panel,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"panel-id","panel-id",2118466015),config], null),config_panel], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.packs.tab_panel.sub_panel,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"panel-id","panel-id",2118466015),data], null),data_panel], null)], null)], null)], null);
});
bh_ui.utils.helpers.path__GT_string = (function bh_ui$utils$helpers$path__GT_string(var_args){
var args__4870__auto__ = [];
var len__4864__auto___50721 = arguments.length;
var i__4865__auto___50722 = (0);
while(true){
if((i__4865__auto___50722 < len__4864__auto___50721)){
args__4870__auto__.push((arguments[i__4865__auto___50722]));

var G__50723 = (i__4865__auto___50722 + (1));
i__4865__auto___50722 = G__50723;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return bh_ui.utils.helpers.path__GT_string.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(bh_ui.utils.helpers.path__GT_string.cljs$core$IFn$_invoke$arity$variadic = (function (path){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50705_SHARP_){
return clojure.string.replace(p1__50705_SHARP_,/ /,"-");
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50704_SHARP_){
return clojure.string.replace(p1__50704_SHARP_,/\//,".");
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50703_SHARP_){
return clojure.string.replace(p1__50703_SHARP_,/:/,"");
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(path)))))));
}));

(bh_ui.utils.helpers.path__GT_string.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bh_ui.utils.helpers.path__GT_string.cljs$lang$applyTo = (function (seq50706){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50706));
}));

bh_ui.utils.helpers.path__GT_keyword = (function bh_ui$utils$helpers$path__GT_keyword(var_args){
var args__4870__auto__ = [];
var len__4864__auto___50724 = arguments.length;
var i__4865__auto___50725 = (0);
while(true){
if((i__4865__auto___50725 < len__4864__auto___50724)){
args__4870__auto__.push((arguments[i__4865__auto___50725]));

var G__50726 = (i__4865__auto___50725 + (1));
i__4865__auto___50725 = G__50726;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return bh_ui.utils.helpers.path__GT_keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(bh_ui.utils.helpers.path__GT_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (path){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(bh_ui.utils.helpers.path__GT_string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0)));
}));

(bh_ui.utils.helpers.path__GT_keyword.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bh_ui.utils.helpers.path__GT_keyword.cljs$lang$applyTo = (function (seq50707){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50707));
}));

bh_ui.utils.helpers.string__GT_keyword = (function bh_ui$utils$helpers$string__GT_keyword(s){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),/:/,""));
});
/**
 * resolve a subscription.
 * 
 *   there are 2 types if subscriptions: REMOTE and LOCAL
 * 
 *   REMOTE subscriptions are designed to reach across the network and query data from the Server, while
 *   LOCAL subscriptions are designed to reach into the Re-frame 'APP-DB' at a certain path
 *   
 */
bh_ui.utils.helpers.resolve_subscription = (function bh_ui$utils$helpers$resolve_subscription(subs,opts){
var vec__50708 = subs;
var seq__50709 = cljs.core.seq(vec__50708);
var first__50710 = cljs.core.first(seq__50709);
var seq__50709__$1 = cljs.core.next(seq__50709);
var target = first__50710;
var _ = seq__50709__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target,new cljs.core.Keyword("bhui.subs","source","bhui.subs/source",487568684))){
return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,subs,opts));
} else {
return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.utils.helpers.path__GT_keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subs], 0))], null),opts));
}
});
bh_ui.utils.helpers.resolve_value = (function bh_ui$utils$helpers$resolve_value(var_args){
var args__4870__auto__ = [];
var len__4864__auto___50727 = arguments.length;
var i__4865__auto___50728 = (0);
while(true){
if((i__4865__auto___50728 < len__4864__auto___50727)){
args__4870__auto__.push((arguments[i__4865__auto___50728]));

var G__50729 = (i__4865__auto___50728 + (1));
i__4865__auto___50728 = G__50729;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return bh_ui.utils.helpers.resolve_value.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(bh_ui.utils.helpers.resolve_value.cljs$core$IFn$_invoke$arity$variadic = (function (value,opts){
var ret = (((value instanceof cljs.core.Keyword))?re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.utils.helpers.path__GT_keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))], null),opts)):((((cljs.core.coll_QMARK_(value)) && ((((!(cljs.core.empty_QMARK_(value)))) && (cljs.core.every_QMARK_((function (){var or__4253__auto__ = cljs.core.keyword_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.string_QMARK_;
}
})(),value))))))?bh_ui.utils.helpers.resolve_subscription(value,opts):(((value instanceof reagent.ratom.RAtom))?value:(((value instanceof reagent.ratom.Reaction))?value:(((value instanceof cljs.core.Atom))?value:reagent.core.atom.cljs$core$IFn$_invoke$arity$1(value)
)))));
return ret;
}));

(bh_ui.utils.helpers.resolve_value.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bh_ui.utils.helpers.resolve_value.cljs$lang$applyTo = (function (seq50711){
var G__50712 = cljs.core.first(seq50711);
var seq50711__$1 = cljs.core.next(seq50711);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50712,seq50711__$1);
}));

bh_ui.utils.helpers.handle_change = (function bh_ui$utils$helpers$handle_change(value,new_value){
if(((cljs.core.coll_QMARK_(value)) || ((((value instanceof cljs.core.Keyword)) || (typeof value === 'string'))))){
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(value,new_value));
} else {
if((value instanceof reagent.ratom.RAtom)){
return cljs.core.reset_BANG_(value,new_value);
} else {
if((value instanceof cljs.core.Atom)){
return cljs.core.reset_BANG_(value,new_value);
} else {
return cljs.core.List.EMPTY;

}
}
}
});
bh_ui.utils.helpers.handle_change_path = (function bh_ui$utils$helpers$handle_change_path(value,path,new_value){
if(((cljs.core.coll_QMARK_(value)) || ((((value instanceof cljs.core.Keyword)) || (typeof value === 'string'))))){
var update_event = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.utils.helpers.path__GT_keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value,path], 0))], null),new_value);
return re_frame.core.dispatch(update_event);
} else {
if((value instanceof reagent.ratom.RAtom)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(value,cljs.core.assoc_in,path,new_value);
} else {
if((value instanceof cljs.core.Atom)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(value,cljs.core.assoc_in,path,new_value);
} else {
return cljs.core.List.EMPTY;

}
}
}
});

//# sourceMappingURL=bh_ui.utils.helpers.js.map
