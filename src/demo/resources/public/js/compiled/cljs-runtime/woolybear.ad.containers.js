goog.provide('woolybear.ad.containers');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("shy-block","options","shy-block/options",-1216057699),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","active?","ad/active?",459503187)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","active?","ad/active?",459503187)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__48520){
return cljs.core.map_QMARK_(G__48520);
}),(function (G__48520){
return cljs.core.contains_QMARK_(G__48520,new cljs.core.Keyword(null,"active?","active?",459499776));
})], null),(function (G__48520){
return ((cljs.core.map_QMARK_(G__48520)) && (cljs.core.contains_QMARK_(G__48520,new cljs.core.Keyword(null,"active?","active?",459499776))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843),new cljs.core.Keyword(null,"subscribe-to-classes","subscribe-to-classes",173193596)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","active?","ad/active?",459503187)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active?","active?",459499776)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"active?","active?",459499776)))], null),null])));
/**
 * A container that may or may not be visible, depending on the current value of
 *   its `active?` subscription. If you wish you can pass in extra CSS classes via
 *   the :extra-classes option. For extra classes that change dynamically at run-time,
 *   pass in :subscribe-to-classes instead.
 */
woolybear.ad.containers.shy_block = (function woolybear$ad$containers$shy_block(var_args){
var args__4870__auto__ = [];
var len__4864__auto___48609 = arguments.length;
var i__4865__auto___48610 = (0);
while(true){
if((i__4865__auto___48610 < len__4864__auto___48609)){
args__4870__auto__.push((arguments[i__4865__auto___48610]));

var G__48611 = (i__4865__auto___48610 + (1));
i__4865__auto___48610 = G__48611;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return woolybear.ad.containers.shy_block.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(woolybear.ad.containers.shy_block.cljs$core$IFn$_invoke$arity$variadic = (function (opts,_){
var map__48527 = opts;
var map__48527__$1 = cljs.core.__destructure_map(map__48527);
var extra_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48527__$1,new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843));
var subscribe_to_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48527__$1,new cljs.core.Keyword(null,"subscribe-to-classes","subscribe-to-classes",173193596));
var classes_sub = woolybear.ad.utils.subscribe_to(subscribe_to_classes);
return (function() { 
var G__48612__delegate = function (p__48528,children){
var map__48529 = p__48528;
var map__48529__$1 = cljs.core.__destructure_map(map__48529);
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48529__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var dynamic_classes = cljs.core.deref(classes_sub);
var vis_class = (cljs.core.truth_(active_QMARK_)?new cljs.core.Keyword(null,"visible","visible",-1024216805):new cljs.core.Keyword(null,"hidden","hidden",-312506092));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),woolybear.ad.utils.css__GT_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"wb-shy","wb-shy",679456788),vis_class,extra_classes,dynamic_classes], 0))], null)], null),children);
};
var G__48612 = function (p__48528,var_args){
var children = null;
if (arguments.length > 1) {
var G__48613__i = 0, G__48613__a = new Array(arguments.length -  1);
while (G__48613__i < G__48613__a.length) {G__48613__a[G__48613__i] = arguments[G__48613__i + 1]; ++G__48613__i;}
  children = new cljs.core.IndexedSeq(G__48613__a,0,null);
} 
return G__48612__delegate.call(this,p__48528,children);};
G__48612.cljs$lang$maxFixedArity = 1;
G__48612.cljs$lang$applyTo = (function (arglist__48614){
var p__48528 = cljs.core.first(arglist__48614);
var children = cljs.core.rest(arglist__48614);
return G__48612__delegate(p__48528,children);
});
G__48612.cljs$core$IFn$_invoke$arity$variadic = G__48612__delegate;
return G__48612;
})()
;
}));

(woolybear.ad.containers.shy_block.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(woolybear.ad.containers.shy_block.cljs$lang$applyTo = (function (seq48525){
var G__48526 = cljs.core.first(seq48525);
var seq48525__$1 = cljs.core.next(seq48525);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48526,seq48525__$1);
}));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("woolybear.ad.containers","shy-block","woolybear.ad.containers/shy-block",-1199089236,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("shy-block","options","shy-block/options",-1216057699)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("shy-block","options","shy-block/options",-1216057699)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"children","children",-940561982)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.maybe_impl(new cljs.core.Keyword("shy-block","options","shy-block/options",-1216057699),new cljs.core.Keyword("shy-block","options","shy-block/options",-1216057699)),cljs.spec.alpha.rep_PLUS_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("shy-block","options","shy-block/options",-1216057699)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("shy-block","options","shy-block/options",-1216057699)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_,null,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),null,null,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("scroll-pane-header","options","scroll-pane-header/options",700673903),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__48534){
return cljs.core.map_QMARK_(G__48534);
})], null),(function (G__48534){
return cljs.core.map_QMARK_(G__48534);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843),new cljs.core.Keyword(null,"subscribe-to-classes","subscribe-to-classes",173193596)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])));
/**
 * A component with no bottom margin. If a scroll-pane-header is passed in as
 *   a top-level child of a v-scroll-pane, it will remain fixed in place at the
 *   top while the other components scroll beneath it. Accepts an optional opts
 *   map as the first argument, with the following options:
 * 
 *   * :extra-classes        - static CSS classes to apply to the footer
 *   * :subscribe-to-classes - subscription to dynamic CSS classes to apply at runtime.
 *   
 */
woolybear.ad.containers.scroll_pane_header = (function woolybear$ad$containers$scroll_pane_header(var_args){
var args__4870__auto__ = [];
var len__4864__auto___48615 = arguments.length;
var i__4865__auto___48616 = (0);
while(true){
if((i__4865__auto___48616 < len__4864__auto___48615)){
args__4870__auto__.push((arguments[i__4865__auto___48616]));

var G__48617 = (i__4865__auto___48616 + (1));
i__4865__auto___48616 = G__48617;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return woolybear.ad.containers.scroll_pane_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(woolybear.ad.containers.scroll_pane_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__48544 = woolybear.ad.utils.extract_args(args);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48544,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48544,(1),null);
var map__48547 = opts;
var map__48547__$1 = cljs.core.__destructure_map(map__48547);
var extra_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48547__$1,new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843));
var subscribe_to_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48547__$1,new cljs.core.Keyword(null,"subscribe-to-classes","subscribe-to-classes",173193596));
var classes_sub = woolybear.ad.utils.subscribe_to(subscribe_to_classes);
return (function() { 
var G__48620__delegate = function (args__$1){
var vec__48548 = woolybear.ad.utils.extract_args(args__$1);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48548,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48548,(1),null);
var dynamic_classes = cljs.core.deref(classes_sub);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),woolybear.ad.utils.css__GT_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"wb-scroll-pane-header","wb-scroll-pane-header",967698655),extra_classes,dynamic_classes], 0))], null)], null),children);
};
var G__48620 = function (var_args){
var args__$1 = null;
if (arguments.length > 0) {
var G__48621__i = 0, G__48621__a = new Array(arguments.length -  0);
while (G__48621__i < G__48621__a.length) {G__48621__a[G__48621__i] = arguments[G__48621__i + 0]; ++G__48621__i;}
  args__$1 = new cljs.core.IndexedSeq(G__48621__a,0,null);
} 
return G__48620__delegate.call(this,args__$1);};
G__48620.cljs$lang$maxFixedArity = 0;
G__48620.cljs$lang$applyTo = (function (arglist__48622){
var args__$1 = cljs.core.seq(arglist__48622);
return G__48620__delegate(args__$1);
});
G__48620.cljs$core$IFn$_invoke$arity$variadic = G__48620__delegate;
return G__48620;
})()
;
}));

(woolybear.ad.containers.scroll_pane_header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(woolybear.ad.containers.scroll_pane_header.cljs$lang$applyTo = (function (seq48541){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48541));
}));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("woolybear.ad.containers","scroll-pane-header","woolybear.ad.containers/scroll-pane-header",936483755,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("scroll-pane-header","options","scroll-pane-header/options",700673903)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("scroll-pane-header","options","scroll-pane-header/options",700673903)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"children","children",-940561982)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.maybe_impl(new cljs.core.Keyword("scroll-pane-header","options","scroll-pane-header/options",700673903),new cljs.core.Keyword("scroll-pane-header","options","scroll-pane-header/options",700673903)),cljs.spec.alpha.rep_PLUS_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("scroll-pane-header","options","scroll-pane-header/options",700673903)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("scroll-pane-header","options","scroll-pane-header/options",700673903)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_,null,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),null,null,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("scroll-pane-footer","options","scroll-pane-footer/options",664084473),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__48551){
return cljs.core.map_QMARK_(G__48551);
})], null),(function (G__48551){
return cljs.core.map_QMARK_(G__48551);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843),new cljs.core.Keyword(null,"subscribe-to-classes","subscribe-to-classes",173193596)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])));
/**
 * A component with no top margin. If a scroll-pane-footer is passed in as
 *   a top-level child of a v-scroll-pane, it will remain fixed in place at the
 *   bottom while the other components scroll above it. Accepts an optional opts
 *   map as the first argument, with the following options:
 * 
 *   * :extra-classes        - static CSS classes to apply to the footer
 *   * :subscribe-to-classes - subscription to dynamic CSS classes to apply at runtime.
 *   
 */
woolybear.ad.containers.scroll_pane_footer = (function woolybear$ad$containers$scroll_pane_footer(var_args){
var args__4870__auto__ = [];
var len__4864__auto___48631 = arguments.length;
var i__4865__auto___48632 = (0);
while(true){
if((i__4865__auto___48632 < len__4864__auto___48631)){
args__4870__auto__.push((arguments[i__4865__auto___48632]));

var G__48633 = (i__4865__auto___48632 + (1));
i__4865__auto___48632 = G__48633;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return woolybear.ad.containers.scroll_pane_footer.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(woolybear.ad.containers.scroll_pane_footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__48553 = woolybear.ad.utils.extract_args(args);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48553,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48553,(1),null);
var map__48556 = opts;
var map__48556__$1 = cljs.core.__destructure_map(map__48556);
var extra_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48556__$1,new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843));
var subscribe_to_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48556__$1,new cljs.core.Keyword(null,"subscribe-to-classes","subscribe-to-classes",173193596));
var classes_sub = woolybear.ad.utils.subscribe_to(subscribe_to_classes);
return (function() { 
var G__48634__delegate = function (args__$1){
var vec__48557 = woolybear.ad.utils.extract_args(args__$1);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48557,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48557,(1),null);
var dynamic_classes = cljs.core.deref(classes_sub);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),woolybear.ad.utils.css__GT_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"wb-scroll-pane-footer","wb-scroll-pane-footer",-531604422),extra_classes,dynamic_classes], 0))], null)], null),children);
};
var G__48634 = function (var_args){
var args__$1 = null;
if (arguments.length > 0) {
var G__48635__i = 0, G__48635__a = new Array(arguments.length -  0);
while (G__48635__i < G__48635__a.length) {G__48635__a[G__48635__i] = arguments[G__48635__i + 0]; ++G__48635__i;}
  args__$1 = new cljs.core.IndexedSeq(G__48635__a,0,null);
} 
return G__48634__delegate.call(this,args__$1);};
G__48634.cljs$lang$maxFixedArity = 0;
G__48634.cljs$lang$applyTo = (function (arglist__48636){
var args__$1 = cljs.core.seq(arglist__48636);
return G__48634__delegate(args__$1);
});
G__48634.cljs$core$IFn$_invoke$arity$variadic = G__48634__delegate;
return G__48634;
})()
;
}));

(woolybear.ad.containers.scroll_pane_footer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(woolybear.ad.containers.scroll_pane_footer.cljs$lang$applyTo = (function (seq48552){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48552));
}));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("woolybear.ad.containers","scroll-pane-footer","woolybear.ad.containers/scroll-pane-footer",981774813,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("scroll-pane-footer","options","scroll-pane-footer/options",664084473)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("scroll-pane-footer","options","scroll-pane-footer/options",664084473)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"children","children",-940561982)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.maybe_impl(new cljs.core.Keyword("scroll-pane-footer","options","scroll-pane-footer/options",664084473),new cljs.core.Keyword("scroll-pane-footer","options","scroll-pane-footer/options",664084473)),cljs.spec.alpha.rep_PLUS_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("scroll-pane-footer","options","scroll-pane-footer/options",664084473)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("scroll-pane-footer","options","scroll-pane-footer/options",664084473)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_,null,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),null,null,null));
/**
 * Given a child element, return :header if it is a scroll-pane-header, or
 *   :footer if it is a scroll-pane-footer, or :body if it is anything else.
 */
woolybear.ad.containers.get_header_footer_body_type = (function woolybear$ad$containers$get_header_footer_body_type(child){
var pred__48561 = cljs.core._EQ_;
var expr__48562 = cljs.core.first(child);
if(cljs.core.truth_((pred__48561.cljs$core$IFn$_invoke$arity$2 ? pred__48561.cljs$core$IFn$_invoke$arity$2(woolybear.ad.containers.scroll_pane_header,expr__48562) : pred__48561.call(null,woolybear.ad.containers.scroll_pane_header,expr__48562)))){
return new cljs.core.Keyword(null,"header","header",119441134);
} else {
if(cljs.core.truth_((pred__48561.cljs$core$IFn$_invoke$arity$2 ? pred__48561.cljs$core$IFn$_invoke$arity$2(woolybear.ad.containers.scroll_pane_footer,expr__48562) : pred__48561.call(null,woolybear.ad.containers.scroll_pane_footer,expr__48562)))){
return new cljs.core.Keyword(null,"footer","footer",1606445390);
} else {
return new cljs.core.Keyword(null,"body","body",-2049205669);
}
}
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("v-scroll-pane","height","v-scroll-pane/height",-266308499),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("v-scroll-pane","options","v-scroll-pane/options",1492874608),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("v-scroll-pane","height","v-scroll-pane/height",-266308499)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("v-scroll-pane","height","v-scroll-pane/height",-266308499)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__48567){
return cljs.core.map_QMARK_(G__48567);
}),(function (G__48567){
return cljs.core.contains_QMARK_(G__48567,new cljs.core.Keyword(null,"height","height",1025178622));
})], null),(function (G__48567){
return ((cljs.core.map_QMARK_(G__48567)) && (cljs.core.contains_QMARK_(G__48567,new cljs.core.Keyword(null,"height","height",1025178622))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843),new cljs.core.Keyword(null,"subscribe-to-classes","subscribe-to-classes",173193596)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("v-scroll-pane","height","v-scroll-pane/height",-266308499)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"height","height",1025178622)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"height","height",1025178622)))], null),null])));
/**
 * A component that sets overflow-y to auto so that if its contents exceed the
 *   component height, a scrollbar will appear. If any of the child elements are
 *   scroll-pane-header elements, and are not nested inside any other child elements,
 *   they will be placed at the top, above the scrolling portion. Any scroll-pane-footer
 *   child elements are similarly locked to the bottom of the scroll area. Requires an
 *   options map as the first argument, with the following options. The :height option
 *   is required and the others are optional.
 * 
 *   * :height (required)    - standard CSS height value (e.g. 60vh)
 *   * :extra-classes        - static CSS classes to apply to the footer
 *   * :subscribe-to-classes - subscription to dynamic CSS classes to apply at runtime.
 *   
 */
woolybear.ad.containers.v_scroll_pane = (function woolybear$ad$containers$v_scroll_pane(var_args){
var args__4870__auto__ = [];
var len__4864__auto___48638 = arguments.length;
var i__4865__auto___48639 = (0);
while(true){
if((i__4865__auto___48639 < len__4864__auto___48638)){
args__4870__auto__.push((arguments[i__4865__auto___48639]));

var G__48640 = (i__4865__auto___48639 + (1));
i__4865__auto___48639 = G__48640;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return woolybear.ad.containers.v_scroll_pane.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(woolybear.ad.containers.v_scroll_pane.cljs$core$IFn$_invoke$arity$variadic = (function (opts,_){
var map__48574 = opts;
var map__48574__$1 = cljs.core.__destructure_map(map__48574);
var extra_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48574__$1,new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843));
var subscribe_to_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48574__$1,new cljs.core.Keyword(null,"subscribe-to-classes","subscribe-to-classes",173193596));
var classes_sub = woolybear.ad.utils.subscribe_to(subscribe_to_classes);
return (function() { 
var G__48641__delegate = function (p__48575,children){
var map__48576 = p__48575;
var map__48576__$1 = cljs.core.__destructure_map(map__48576);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48576__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var map__48577 = cljs.core.group_by(woolybear.ad.containers.get_header_footer_body_type,children);
var map__48577__$1 = cljs.core.__destructure_map(map__48577);
var header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48577__$1,new cljs.core.Keyword(null,"header","header",119441134));
var footer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48577__$1,new cljs.core.Keyword(null,"footer","footer",1606445390));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48577__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var dynamic_classes = cljs.core.deref(classes_sub);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),woolybear.ad.utils.css__GT_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"wb-v-scroll-pane-container","wb-v-scroll-pane-container",1342041549),extra_classes,dynamic_classes], 0))], null)], null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(header)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.wb-v-scroll-pane-header","div.wb-v-scroll-pane-header",-343792214)], null),header):null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.wb-v-scroll-pane-overflow","div.wb-v-scroll-pane-overflow",-2056719626),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),height], null)], null)], null),body),(cljs.core.truth_(footer)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.wb-v-scroll-pane-footer","div.wb-v-scroll-pane-footer",680198103)], null),footer):null)], null)));
};
var G__48641 = function (p__48575,var_args){
var children = null;
if (arguments.length > 1) {
var G__48642__i = 0, G__48642__a = new Array(arguments.length -  1);
while (G__48642__i < G__48642__a.length) {G__48642__a[G__48642__i] = arguments[G__48642__i + 1]; ++G__48642__i;}
  children = new cljs.core.IndexedSeq(G__48642__a,0,null);
} 
return G__48641__delegate.call(this,p__48575,children);};
G__48641.cljs$lang$maxFixedArity = 1;
G__48641.cljs$lang$applyTo = (function (arglist__48643){
var p__48575 = cljs.core.first(arglist__48643);
var children = cljs.core.rest(arglist__48643);
return G__48641__delegate(p__48575,children);
});
G__48641.cljs$core$IFn$_invoke$arity$variadic = G__48641__delegate;
return G__48641;
})()
;
}));

(woolybear.ad.containers.v_scroll_pane.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(woolybear.ad.containers.v_scroll_pane.cljs$lang$applyTo = (function (seq48572){
var G__48573 = cljs.core.first(seq48572);
var seq48572__$1 = cljs.core.next(seq48572);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48573,seq48572__$1);
}));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("woolybear.ad.containers","v-scroll-pane","woolybear.ad.containers/v-scroll-pane",44376562,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("v-scroll-pane","options","v-scroll-pane/options",1492874608)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("v-scroll-pane","options","v-scroll-pane/options",1492874608)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"children","children",-940561982)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.maybe_impl(new cljs.core.Keyword("v-scroll-pane","options","v-scroll-pane/options",1492874608),new cljs.core.Keyword("v-scroll-pane","options","v-scroll-pane/options",1492874608)),cljs.spec.alpha.rep_PLUS_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("v-scroll-pane","options","v-scroll-pane/options",1492874608)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("v-scroll-pane","options","v-scroll-pane/options",1492874608)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_,null,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),null,null,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("bar","options","bar/options",99805422),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__48578){
return cljs.core.map_QMARK_(G__48578);
})], null),(function (G__48578){
return cljs.core.map_QMARK_(G__48578);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843),new cljs.core.Keyword(null,"subscribe-to-classes","subscribe-to-classes",173193596)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])));
/**
 * 
 *   Generic bar component, suitable for use as a toolbar, button bar, etc.
 *   
 */
woolybear.ad.containers.bar = (function woolybear$ad$containers$bar(var_args){
var args__4870__auto__ = [];
var len__4864__auto___48652 = arguments.length;
var i__4865__auto___48653 = (0);
while(true){
if((i__4865__auto___48653 < len__4864__auto___48652)){
args__4870__auto__.push((arguments[i__4865__auto___48653]));

var G__48654 = (i__4865__auto___48653 + (1));
i__4865__auto___48653 = G__48654;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return woolybear.ad.containers.bar.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(woolybear.ad.containers.bar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__48584 = woolybear.ad.utils.extract_args(args);
var map__48587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48584,(0),null);
var map__48587__$1 = cljs.core.__destructure_map(map__48587);
var extra_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48587__$1,new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843));
var subscribe_to_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48587__$1,new cljs.core.Keyword(null,"subscribe-to-classes","subscribe-to-classes",173193596));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48584,(1),null);
var classes_sub = woolybear.ad.utils.subscribe_to(subscribe_to_classes);
return (function() { 
var G__48655__delegate = function (args__$1){
var vec__48591 = woolybear.ad.utils.extract_args(args__$1);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48591,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48591,(1),null);
var dynamic_classes = cljs.core.deref(classes_sub);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),woolybear.ad.utils.css__GT_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"wb-bar","wb-bar",1585512447),extra_classes,dynamic_classes], 0))], null)], null),children);
};
var G__48655 = function (var_args){
var args__$1 = null;
if (arguments.length > 0) {
var G__48656__i = 0, G__48656__a = new Array(arguments.length -  0);
while (G__48656__i < G__48656__a.length) {G__48656__a[G__48656__i] = arguments[G__48656__i + 0]; ++G__48656__i;}
  args__$1 = new cljs.core.IndexedSeq(G__48656__a,0,null);
} 
return G__48655__delegate.call(this,args__$1);};
G__48655.cljs$lang$maxFixedArity = 0;
G__48655.cljs$lang$applyTo = (function (arglist__48657){
var args__$1 = cljs.core.seq(arglist__48657);
return G__48655__delegate(args__$1);
});
G__48655.cljs$core$IFn$_invoke$arity$variadic = G__48655__delegate;
return G__48655;
})()
;
}));

(woolybear.ad.containers.bar.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(woolybear.ad.containers.bar.cljs$lang$applyTo = (function (seq48579){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48579));
}));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("woolybear.ad.containers","bar","woolybear.ad.containers/bar",1926213236,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("bar","options","bar/options",99805422)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("bar","options","bar/options",99805422)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"children","children",-940561982)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.maybe_impl(new cljs.core.Keyword("bar","options","bar/options",99805422),new cljs.core.Keyword("bar","options","bar/options",99805422)),cljs.spec.alpha.rep_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("bar","options","bar/options",99805422)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("bar","options","bar/options",99805422)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_,null,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),null,null,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("spoiler","show-label","spoiler/show-label",-259972993),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("spoiler","hide-label","spoiler/hide-label",1704977825),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("spoiler","options","spoiler/options",-1894027489),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spoiler","show-label","spoiler/show-label",-259972993),new cljs.core.Keyword("spoiler","hide-label","spoiler/hide-label",1704977825),new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spoiler","show-label","spoiler/show-label",-259972993),new cljs.core.Keyword("spoiler","hide-label","spoiler/hide-label",1704977825),new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__48600){
return cljs.core.map_QMARK_(G__48600);
})], null),(function (G__48600){
return cljs.core.map_QMARK_(G__48600);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-label","show-label",2070422077),new cljs.core.Keyword(null,"hide-label","hide-label",-92736657),new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843),new cljs.core.Keyword(null,"subscribe-to-classes","subscribe-to-classes",173193596)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spoiler","show-label","spoiler/show-label",-259972993),new cljs.core.Keyword("spoiler","hide-label","spoiler/hide-label",1704977825),new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])));
/**
 * 
 *   A component with a show-hide button and other content. When the button is clicked,
 *   it toggles the visibility of the other contents. Supports the following options:
 * 
 *   * :show-label - Button label when contents hidden, default 'Show'
 *   * :hide-label - Button label when contents shown, default 'Hide'
 *   * :extra-classes, :subscribe-to-classes - Standard CSS options
 * 
 *   NOTE: stores the show/hide state internally, and not in the app-db.
 *   
 */
woolybear.ad.containers.spoiler = (function woolybear$ad$containers$spoiler(var_args){
var args__4870__auto__ = [];
var len__4864__auto___48663 = arguments.length;
var i__4865__auto___48664 = (0);
while(true){
if((i__4865__auto___48664 < len__4864__auto___48663)){
args__4870__auto__.push((arguments[i__4865__auto___48664]));

var G__48665 = (i__4865__auto___48664 + (1));
i__4865__auto___48664 = G__48665;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return woolybear.ad.containers.spoiler.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(woolybear.ad.containers.spoiler.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__48602 = woolybear.ad.utils.extract_args(args);
var map__48605 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48602,(0),null);
var map__48605__$1 = cljs.core.__destructure_map(map__48605);
var show_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48605__$1,new cljs.core.Keyword(null,"show-label","show-label",2070422077));
var hide_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48605__$1,new cljs.core.Keyword(null,"hide-label","hide-label",-92736657));
var extra_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48605__$1,new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843));
var subscribe_to_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48605__$1,new cljs.core.Keyword(null,"subscribe-to-classes","subscribe-to-classes",173193596));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48602,(1),null);
var visible_QMARK_ = reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(false);
var show_label__$1 = (function (){var or__4253__auto__ = show_label;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Symbol(null,"Show'","Show'",-1856772769,null);
}
})();
var hide_label__$1 = (function (){var or__4253__auto__ = hide_label;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Symbol(null,"Hide'","Hide'",-91898342,null);
}
})();
var classes_sub = woolybear.ad.utils.subscribe_to(subscribe_to_classes);
var click_dispatcher = (function (___$1){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(visible_QMARK_,cljs.core.not);
});
return (function() { 
var G__48666__delegate = function (args__$1){
var vec__48606 = woolybear.ad.utils.extract_args(args__$1);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48606,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48606,(1),null);
var visible_QMARK___$1 = cljs.core.deref(visible_QMARK_);
var button_label = (cljs.core.truth_(visible_QMARK___$1)?hide_label__$1:show_label__$1);
var dynamic_classes = cljs.core.deref(classes_sub);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.level","div.level",-1180372721),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),woolybear.ad.utils.css__GT_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"wb-spoiler","wb-spoiler",1252627874),extra_classes,dynamic_classes], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.level-item-left","div.level-item-left",-562340784),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),click_dispatcher], null),button_label], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.level-item","div.level-item",-68610818),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.containers.shy_block,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active?","active?",459499776),visible_QMARK___$1], null)], null),children)], null)], null);
};
var G__48666 = function (var_args){
var args__$1 = null;
if (arguments.length > 0) {
var G__48667__i = 0, G__48667__a = new Array(arguments.length -  0);
while (G__48667__i < G__48667__a.length) {G__48667__a[G__48667__i] = arguments[G__48667__i + 0]; ++G__48667__i;}
  args__$1 = new cljs.core.IndexedSeq(G__48667__a,0,null);
} 
return G__48666__delegate.call(this,args__$1);};
G__48666.cljs$lang$maxFixedArity = 0;
G__48666.cljs$lang$applyTo = (function (arglist__48668){
var args__$1 = cljs.core.seq(arglist__48668);
return G__48666__delegate(args__$1);
});
G__48666.cljs$core$IFn$_invoke$arity$variadic = G__48666__delegate;
return G__48666;
})()
;
}));

(woolybear.ad.containers.spoiler.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(woolybear.ad.containers.spoiler.cljs$lang$applyTo = (function (seq48601){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48601));
}));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("woolybear.ad.containers","spoiler","woolybear.ad.containers/spoiler",1466932119,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("spoiler","options","spoiler/options",-1894027489)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("spoiler","options","spoiler/options",-1894027489)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"children","children",-940561982)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.maybe_impl(new cljs.core.Keyword("spoiler","options","spoiler/options",-1894027489),new cljs.core.Keyword("spoiler","options","spoiler/options",-1894027489)),cljs.spec.alpha.rep_PLUS_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("spoiler","options","spoiler/options",-1894027489)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("spoiler","options","spoiler/options",-1894027489)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_,null,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),null,null,null));

//# sourceMappingURL=woolybear.ad.containers.js.map
