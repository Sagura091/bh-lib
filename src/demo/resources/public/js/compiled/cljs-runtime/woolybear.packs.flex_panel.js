goog.provide('woolybear.packs.flex_panel');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("db","page-height","db/page-height",1988558148),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"page-height","page-height",1988560834).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
woolybear.packs.flex_panel.get_js_page_height = (function woolybear$packs$flex_panel$get_js_page_height(){
return document.documentElement.clientHeight;
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","recalculate-page-height","db/recalculate-page-height",268978852),(function (db,_){
var h = woolybear.packs.flex_panel.get_js_page_height();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"page-height","page-height",1988560834),h);
}));
/**
 * 
 *   A utility component used to build flex-top and flex-bottom. Uses an on-size-change
 *   callback fn provided by the parent to report its height back to the parent container.
 *   
 */
woolybear.packs.flex_panel.flex_fixed = (function woolybear$packs$flex_panel$flex_fixed(var_args){
var args__4870__auto__ = [];
var len__4864__auto___71029 = arguments.length;
var i__4865__auto___71030 = (0);
while(true){
if((i__4865__auto___71030 < len__4864__auto___71029)){
args__4870__auto__.push((arguments[i__4865__auto___71030]));

var G__71031 = (i__4865__auto___71030 + (1));
i__4865__auto___71030 = G__71031;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return woolybear.packs.flex_panel.flex_fixed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(woolybear.packs.flex_panel.flex_fixed.cljs$core$IFn$_invoke$arity$variadic = (function (type_class,args){
var vec__70851 = woolybear.ad.utils.extract_args(args);
var map__70854 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70851,(0),null);
var map__70854__$1 = cljs.core.__destructure_map(map__70854);
var extra_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70854__$1,new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843));
var subscribe_to_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70854__$1,new cljs.core.Keyword(null,"subscribe-to-classes","subscribe-to-classes",173193596));
var on_size_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70854__$1,new cljs.core.Keyword(null,"on-size-change","on-size-change",1856967578));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70851,(1),null);
var classes_sub = woolybear.ad.utils.subscribe_to(subscribe_to_classes);
var size_change_handler = (function (comp){
var G__70855 = reagent.dom.dom_node(comp).offsetHeight;
return (on_size_change.cljs$core$IFn$_invoke$arity$1 ? on_size_change.cljs$core$IFn$_invoke$arity$1(G__70855) : on_size_change.call(null,G__70855));
});
var render_fn = (function() { 
var G__71032__delegate = function (args__$1){
var vec__70867 = woolybear.ad.utils.extract_args(args__$1);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70867,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70867,(1),null);
var dynamic_classes = cljs.core.deref(classes_sub);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),woolybear.ad.utils.css__GT_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_class,extra_classes,dynamic_classes], 0))], null)], null),children);
};
var G__71032 = function (var_args){
var args__$1 = null;
if (arguments.length > 0) {
var G__71033__i = 0, G__71033__a = new Array(arguments.length -  0);
while (G__71033__i < G__71033__a.length) {G__71033__a[G__71033__i] = arguments[G__71033__i + 0]; ++G__71033__i;}
  args__$1 = new cljs.core.IndexedSeq(G__71033__a,0,null);
} 
return G__71032__delegate.call(this,args__$1);};
G__71032.cljs$lang$maxFixedArity = 0;
G__71032.cljs$lang$applyTo = (function (arglist__71034){
var args__$1 = cljs.core.seq(arglist__71034);
return G__71032__delegate(args__$1);
});
G__71032.cljs$core$IFn$_invoke$arity$variadic = G__71032__delegate;
return G__71032;
})()
;
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"flex-top",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),size_change_handler,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),size_change_handler,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),render_fn], null));
}));

(woolybear.packs.flex_panel.flex_fixed.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(woolybear.packs.flex_panel.flex_fixed.cljs$lang$applyTo = (function (seq70842){
var G__70843 = cljs.core.first(seq70842);
var seq70842__$1 = cljs.core.next(seq70842);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70843,seq70842__$1);
}));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("woolybear.packs.flex-panel","flex-fixed","woolybear.packs.flex-panel/flex-fixed",274982326,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"children","children",-940561982)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__70895){
return cljs.core.map_QMARK_(G__70895);
})], null),(function (G__70895){
return cljs.core.map_QMARK_(G__70895);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843),new cljs.core.Keyword(null,"subscribe-to-classes","subscribe-to-classes",173193596)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])),cljs.spec.alpha.rep_PLUS_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_,null,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),null,null,null));
/**
 * 
 *   A container to be used inside a flex-panel. Sticks to the top of the panel and
 *   subtracts its own height from the height of the height of the flexible part of
 *   the flex panel so that the flex panel fits neatly inside its enclosing space.
 *   
 */
woolybear.packs.flex_panel.flex_top = (function woolybear$packs$flex_panel$flex_top(var_args){
var args__4870__auto__ = [];
var len__4864__auto___71035 = arguments.length;
var i__4865__auto___71036 = (0);
while(true){
if((i__4865__auto___71036 < len__4864__auto___71035)){
args__4870__auto__.push((arguments[i__4865__auto___71036]));

var G__71037 = (i__4865__auto___71036 + (1));
i__4865__auto___71036 = G__71037;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return woolybear.packs.flex_panel.flex_top.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(woolybear.packs.flex_panel.flex_top.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(woolybear.packs.flex_panel.flex_fixed,new cljs.core.Keyword(null,"wb-flex-top","wb-flex-top",-1806744474),args);
}));

(woolybear.packs.flex_panel.flex_top.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(woolybear.packs.flex_panel.flex_top.cljs$lang$applyTo = (function (seq70896){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70896));
}));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("woolybear.packs.flex-panel","flex-top","woolybear.packs.flex-panel/flex-top",1375203753,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"children","children",-940561982)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__70923){
return cljs.core.map_QMARK_(G__70923);
})], null),(function (G__70923){
return cljs.core.map_QMARK_(G__70923);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843),new cljs.core.Keyword(null,"subscribe-to-classes","subscribe-to-classes",173193596)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])),cljs.spec.alpha.rep_PLUS_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_,null,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),null,null,null));
/**
 * 
 *   A container to be used inside a flex-panel. Sticks to the bottom of the panel and
 *   subtracts its own height from the height of the height of the flexible part of
 *   the flex panel so that the flex panel fits neatly inside its enclosing space.
 *   
 */
woolybear.packs.flex_panel.flex_bottom = (function woolybear$packs$flex_panel$flex_bottom(var_args){
var args__4870__auto__ = [];
var len__4864__auto___71038 = arguments.length;
var i__4865__auto___71039 = (0);
while(true){
if((i__4865__auto___71039 < len__4864__auto___71038)){
args__4870__auto__.push((arguments[i__4865__auto___71039]));

var G__71040 = (i__4865__auto___71039 + (1));
i__4865__auto___71039 = G__71040;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return woolybear.packs.flex_panel.flex_bottom.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(woolybear.packs.flex_panel.flex_bottom.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(woolybear.packs.flex_panel.flex_fixed,new cljs.core.Keyword(null,"wb-flex-bottom","wb-flex-bottom",95597012),args);
}));

(woolybear.packs.flex_panel.flex_bottom.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(woolybear.packs.flex_panel.flex_bottom.cljs$lang$applyTo = (function (seq70946){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70946));
}));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("woolybear.packs.flex-panel","flex-bottom","woolybear.packs.flex-panel/flex-bottom",1898479503,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"children","children",-940561982)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__70952){
return cljs.core.map_QMARK_(G__70952);
})], null),(function (G__70952){
return cljs.core.map_QMARK_(G__70952);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843),new cljs.core.Keyword(null,"subscribe-to-classes","subscribe-to-classes",173193596)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])),cljs.spec.alpha.rep_PLUS_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_,null,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),null,null,null));
/**
 * 
 *   The 'flexible' part of a flex-panel. The height of the flex-content component is managed
 *   by the parent flex-panel, so that it is always equal to the height of the enclosing
 *   container, minus the height(s) any flex-top and/or flex-bottom components in the same
 *   flex panel.
 *   
 */
woolybear.packs.flex_panel.flex_content = (function woolybear$packs$flex_panel$flex_content(var_args){
var args__4870__auto__ = [];
var len__4864__auto___71041 = arguments.length;
var i__4865__auto___71042 = (0);
while(true){
if((i__4865__auto___71042 < len__4864__auto___71041)){
args__4870__auto__.push((arguments[i__4865__auto___71042]));

var G__71043 = (i__4865__auto___71042 + (1));
i__4865__auto___71042 = G__71043;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return woolybear.packs.flex_panel.flex_content.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(woolybear.packs.flex_panel.flex_content.cljs$core$IFn$_invoke$arity$variadic = (function (opts,children){
var map__70981 = opts;
var map__70981__$1 = cljs.core.__destructure_map(map__70981);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70981__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.containers.v_scroll_pane,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),height], null)], null),children);
}));

(woolybear.packs.flex_panel.flex_content.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(woolybear.packs.flex_panel.flex_content.cljs$lang$applyTo = (function (seq70970){
var G__70971 = cljs.core.first(seq70970);
var seq70970__$1 = cljs.core.next(seq70970);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70971,seq70970__$1);
}));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("woolybear.packs.flex-panel","flex-content","woolybear.packs.flex-panel/flex-content",1276048259,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"children","children",-940561982)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__70985){
return cljs.core.map_QMARK_(G__70985);
})], null),(function (G__70985){
return cljs.core.map_QMARK_(G__70985);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843),new cljs.core.Keyword(null,"subscribe-to-classes","subscribe-to-classes",173193596)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])),cljs.spec.alpha.rep_PLUS_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_,null,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),null,null,null));
/**
 * Given a child element, return :flex-top if it is a flex-top, :flex-bottom if it is a
 *   flex-bottom, or :other if it is anything else.
 */
woolybear.packs.flex_panel.flex_type = (function woolybear$packs$flex_panel$flex_type(child){
var pred__71005 = cljs.core._EQ_;
var expr__71006 = cljs.core.first(child);
if(cljs.core.truth_((pred__71005.cljs$core$IFn$_invoke$arity$2 ? pred__71005.cljs$core$IFn$_invoke$arity$2(woolybear.packs.flex_panel.flex_top,expr__71006) : pred__71005.call(null,woolybear.packs.flex_panel.flex_top,expr__71006)))){
return new cljs.core.Keyword(null,"flex-top","flex-top",1837710000);
} else {
if(cljs.core.truth_((pred__71005.cljs$core$IFn$_invoke$arity$2 ? pred__71005.cljs$core$IFn$_invoke$arity$2(woolybear.packs.flex_panel.flex_bottom,expr__71006) : pred__71005.call(null,woolybear.packs.flex_panel.flex_bottom,expr__71006)))){
return new cljs.core.Keyword(null,"flex-bottom","flex-bottom",-1765685502);
} else {
return new cljs.core.Keyword(null,"other","other",995793544);
}
}
});
/**
 * Search a list of children and pull out the first instance of flex-top or flex-bottom,
 *   properly prepared for use in a flex panel.
 */
woolybear.packs.flex_panel.get_fixed_child = (function woolybear$packs$flex_panel$get_fixed_child(children,target_component_type,height_atom){
var targets = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__71008_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target_component_type,woolybear.packs.flex_panel.flex_type(p1__71008_SHARP_));
}),children);
var target = cljs.core.first(targets);
if(cljs.core.truth_(target)){
return woolybear.ad.utils.add_option(target,new cljs.core.Keyword(null,"on-size-change","on-size-change",1856967578),(function (h){
return cljs.core.reset_BANG_(height_atom,h);
}));
} else {
return null;
}
});
/**
 * 
 *   A container that creates a flexible, autosizing panel to fill the entire height of the
 *   viewport, reserving space for any enclosed flex-top and/or flex-bottom components.
 *   Takes a :height option, specified in standard CSS units (180px, 50vh, 8rem, etc). Also
 *   takes the standard :extra-classes and :subscribe-to-classes options.
 * 
 *   NOTE: You can have both a flex-top and flex-bottom as a child element, but not more
 *   than one of each.
 *   
 */
woolybear.packs.flex_panel.flex_panel = (function woolybear$packs$flex_panel$flex_panel(var_args){
var args__4870__auto__ = [];
var len__4864__auto___71044 = arguments.length;
var i__4865__auto___71045 = (0);
while(true){
if((i__4865__auto___71045 < len__4864__auto___71044)){
args__4870__auto__.push((arguments[i__4865__auto___71045]));

var G__71046 = (i__4865__auto___71045 + (1));
i__4865__auto___71045 = G__71046;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return woolybear.packs.flex_panel.flex_panel.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(woolybear.packs.flex_panel.flex_panel.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__71011 = woolybear.ad.utils.extract_args(args);
var map__71014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71011,(0),null);
var map__71014__$1 = cljs.core.__destructure_map(map__71014);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71014__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var extra_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71014__$1,new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843));
var subscribe_to_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71014__$1,new cljs.core.Keyword(null,"subscribe-to-classes","subscribe-to-classes",173193596));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71011,(1),null);
var classes_sub = woolybear.ad.utils.subscribe_to(subscribe_to_classes);
var page_height = woolybear.ad.utils.subscribe_to(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","page-height","db/page-height",1988558148)], null));
var flex_height_adjustment = reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1((0));
var flex_top_height = reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1((0));
var flex_bottom_height = reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1((0));
var resize_handler = (function (e){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","recalculate-page-height","db/recalculate-page-height",268978852)], null));
});
var did_mount_handler = (function (comp){
var page_height_71047__$1 = woolybear.packs.flex_panel.get_js_page_height();
var comp_height_71048 = reagent.dom.dom_node(comp).offsetHeight;
cljs.core.reset_BANG_(flex_height_adjustment,(page_height_71047__$1 - comp_height_71048));

window.addEventListener("resize",resize_handler);

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","recalculate-page-height","db/recalculate-page-height",268978852)], null));
});
var remove_resize_handler = (function (e){
return window.removeEventListener("resize",resize_handler);
});
var render_fn = (function() { 
var G__71049__delegate = function (args__$1){
var vec__71015 = woolybear.ad.utils.extract_args(args__$1);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71015,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71015,(1),null);
var flex_contents = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__71009_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"other","other",995793544),woolybear.packs.flex_panel.flex_type(p1__71009_SHARP_));
}),children);
var the_flex_top = woolybear.packs.flex_panel.get_fixed_child(children,new cljs.core.Keyword(null,"flex-top","flex-top",1837710000),flex_top_height);
var the_flex_bottom = woolybear.packs.flex_panel.get_fixed_child(children,new cljs.core.Keyword(null,"flex-bottom","flex-bottom",-1765685502),flex_bottom_height);
var dynamic_classes = cljs.core.deref(classes_sub);
var panel_height = (cljs.core.deref(page_height) - cljs.core.deref(flex_height_adjustment));
var content_height = (panel_height - (cljs.core.deref(flex_top_height) + cljs.core.deref(flex_bottom_height)));
var content_height__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(content_height),"px"].join('');
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),height], null),new cljs.core.Keyword(null,"class","class",-2030961996),woolybear.ad.utils.css__GT_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"wb-flex-panel","wb-flex-panel",-553891984),extra_classes,dynamic_classes], 0))], null),the_flex_top,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.packs.flex_panel.flex_content,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),content_height__$1,new cljs.core.Keyword(null,"date-content-height","date-content-height",55258984),content_height__$1], null)], null),flex_contents),the_flex_bottom], null);
};
var G__71049 = function (var_args){
var args__$1 = null;
if (arguments.length > 0) {
var G__71050__i = 0, G__71050__a = new Array(arguments.length -  0);
while (G__71050__i < G__71050__a.length) {G__71050__a[G__71050__i] = arguments[G__71050__i + 0]; ++G__71050__i;}
  args__$1 = new cljs.core.IndexedSeq(G__71050__a,0,null);
} 
return G__71049__delegate.call(this,args__$1);};
G__71049.cljs$lang$maxFixedArity = 0;
G__71049.cljs$lang$applyTo = (function (arglist__71051){
var args__$1 = cljs.core.seq(arglist__71051);
return G__71049__delegate(args__$1);
});
G__71049.cljs$core$IFn$_invoke$arity$variadic = G__71049__delegate;
return G__71049;
})()
;
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"flex-panel",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),did_mount_handler,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),remove_resize_handler,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),render_fn], null));
}));

(woolybear.packs.flex_panel.flex_panel.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(woolybear.packs.flex_panel.flex_panel.cljs$lang$applyTo = (function (seq71010){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71010));
}));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("woolybear.packs.flex-panel","flex-panel","woolybear.packs.flex-panel/flex-panel",907540095,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"children","children",-940561982)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__71028){
return cljs.core.map_QMARK_(G__71028);
})], null),(function (G__71028){
return cljs.core.map_QMARK_(G__71028);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843),new cljs.core.Keyword(null,"subscribe-to-classes","subscribe-to-classes",173193596)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])),cljs.spec.alpha.rep_PLUS_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_,null,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),null,null,null));

//# sourceMappingURL=woolybear.packs.flex_panel.js.map
