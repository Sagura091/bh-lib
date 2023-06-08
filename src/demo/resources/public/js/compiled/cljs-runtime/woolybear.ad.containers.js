goog.provide('woolybear.ad.containers');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("shy-block","options","shy-block/options",-1216057699),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","active?","ad/active?",459503187)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","active?","ad/active?",459503187)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__70673){
return cljs.core.map_QMARK_(G__70673);
}),(function (G__70673){
return cljs.core.contains_QMARK_(G__70673,new cljs.core.Keyword(null,"active?","active?",459499776));
})], null),(function (G__70673){
return ((cljs.core.map_QMARK_(G__70673)) && (cljs.core.contains_QMARK_(G__70673,new cljs.core.Keyword(null,"active?","active?",459499776))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843),new cljs.core.Keyword(null,"subscribe-to-classes","subscribe-to-classes",173193596)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","active?","ad/active?",459503187)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active?","active?",459499776)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"active?","active?",459499776)))], null),null])));
/**
 * A container that may or may not be visible, depending on the current value of
 *   its `active?` subscription. If you wish you can pass in extra CSS classes via
 *   the :extra-classes option. For extra classes that change dynamically at run-time,
 *   pass in :subscribe-to-classes instead.
 */
woolybear.ad.containers.shy_block = (function woolybear$ad$containers$shy_block(var_args){
var args__4870__auto__ = [];
var len__4864__auto___70795 = arguments.length;
var i__4865__auto___70796 = (0);
while(true){
if((i__4865__auto___70796 < len__4864__auto___70795)){
args__4870__auto__.push((arguments[i__4865__auto___70796]));

var G__70797 = (i__4865__auto___70796 + (1));
i__4865__auto___70796 = G__70797;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return woolybear.ad.containers.shy_block.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(woolybear.ad.containers.shy_block.cljs$core$IFn$_invoke$arity$variadic = (function (opts,_){
var map__70690 = opts;
var map__70690__$1 = cljs.core.__destructure_map(map__70690);
var extra_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70690__$1,new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843));
var subscribe_to_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70690__$1,new cljs.core.Keyword(null,"subscribe-to-classes","subscribe-to-classes",173193596));
var classes_sub = woolybear.ad.utils.subscribe_to(subscribe_to_classes);
return (function() { 
var G__70798__delegate = function (p__70692,children){
var map__70695 = p__70692;
var map__70695__$1 = cljs.core.__destructure_map(map__70695);
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70695__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var dynamic_classes = cljs.core.deref(classes_sub);
var vis_class = (cljs.core.truth_(active_QMARK_)?new cljs.core.Keyword(null,"visible","visible",-1024216805):new cljs.core.Keyword(null,"hidden","hidden",-312506092));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),woolybear.ad.utils.css__GT_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"wb-shy","wb-shy",679456788),vis_class,extra_classes,dynamic_classes], 0))], null)], null),children);
};
var G__70798 = function (p__70692,var_args){
var children = null;
if (arguments.length > 1) {
var G__70799__i = 0, G__70799__a = new Array(arguments.length -  1);
while (G__70799__i < G__70799__a.length) {G__70799__a[G__70799__i] = arguments[G__70799__i + 1]; ++G__70799__i;}
  children = new cljs.core.IndexedSeq(G__70799__a,0,null);
} 
return G__70798__delegate.call(this,p__70692,children);};
G__70798.cljs$lang$maxFixedArity = 1;
G__70798.cljs$lang$applyTo = (function (arglist__70800){
var p__70692 = cljs.core.first(arglist__70800);
var children = cljs.core.rest(arglist__70800);
return G__70798__delegate(p__70692,children);
});
G__70798.cljs$core$IFn$_invoke$arity$variadic = G__70798__delegate;
return G__70798;
})()
;
}));

(woolybear.ad.containers.shy_block.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(woolybear.ad.containers.shy_block.cljs$lang$applyTo = (function (seq70684){
var G__70685 = cljs.core.first(seq70684);
var seq70684__$1 = cljs.core.next(seq70684);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70685,seq70684__$1);
}));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("woolybear.ad.containers","shy-block","woolybear.ad.containers/shy-block",-1199089236,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("shy-block","options","shy-block/options",-1216057699)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("shy-block","options","shy-block/options",-1216057699)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"children","children",-940561982)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.maybe_impl(new cljs.core.Keyword("shy-block","options","shy-block/options",-1216057699),new cljs.core.Keyword("shy-block","options","shy-block/options",-1216057699)),cljs.spec.alpha.rep_PLUS_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("shy-block","options","shy-block/options",-1216057699)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("shy-block","options","shy-block/options",-1216057699)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_,null,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),null,null,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("scroll-pane-header","options","scroll-pane-header/options",700673903),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__70707){
return cljs.core.map_QMARK_(G__70707);
})], null),(function (G__70707){
return cljs.core.map_QMARK_(G__70707);
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
var len__4864__auto___70805 = arguments.length;
var i__4865__auto___70806 = (0);
while(true){
if((i__4865__auto___70806 < len__4864__auto___70805)){
args__4870__auto__.push((arguments[i__4865__auto___70806]));

var G__70807 = (i__4865__auto___70806 + (1));
i__4865__auto___70806 = G__70807;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return woolybear.ad.containers.scroll_pane_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(woolybear.ad.containers.scroll_pane_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__70713 = woolybear.ad.utils.extract_args(args);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70713,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70713,(1),null);
var map__70716 = opts;
var map__70716__$1 = cljs.core.__destructure_map(map__70716);
var extra_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70716__$1,new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843));
var subscribe_to_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70716__$1,new cljs.core.Keyword(null,"subscribe-to-classes","subscribe-to-classes",173193596));
var classes_sub = woolybear.ad.utils.subscribe_to(subscribe_to_classes);
return (function() { 
var G__70808__delegate = function (args__$1){
var vec__70717 = woolybear.ad.utils.extract_args(args__$1);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70717,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70717,(1),null);
var dynamic_classes = cljs.core.deref(classes_sub);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),woolybear.ad.utils.css__GT_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"wb-scroll-pane-header","wb-scroll-pane-header",967698655),extra_classes,dynamic_classes], 0))], null)], null),children);
};
var G__70808 = function (var_args){
var args__$1 = null;
if (arguments.length > 0) {
var G__70809__i = 0, G__70809__a = new Array(arguments.length -  0);
while (G__70809__i < G__70809__a.length) {G__70809__a[G__70809__i] = arguments[G__70809__i + 0]; ++G__70809__i;}
  args__$1 = new cljs.core.IndexedSeq(G__70809__a,0,null);
} 
return G__70808__delegate.call(this,args__$1);};
G__70808.cljs$lang$maxFixedArity = 0;
G__70808.cljs$lang$applyTo = (function (arglist__70810){
var args__$1 = cljs.core.seq(arglist__70810);
return G__70808__delegate(args__$1);
});
G__70808.cljs$core$IFn$_invoke$arity$variadic = G__70808__delegate;
return G__70808;
})()
;
}));

(woolybear.ad.containers.scroll_pane_header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(woolybear.ad.containers.scroll_pane_header.cljs$lang$applyTo = (function (seq70711){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70711));
}));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("woolybear.ad.containers","scroll-pane-header","woolybear.ad.containers/scroll-pane-header",936483755,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("scroll-pane-header","options","scroll-pane-header/options",700673903)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("scroll-pane-header","options","scroll-pane-header/options",700673903)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"children","children",-940561982)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.maybe_impl(new cljs.core.Keyword("scroll-pane-header","options","scroll-pane-header/options",700673903),new cljs.core.Keyword("scroll-pane-header","options","scroll-pane-header/options",700673903)),cljs.spec.alpha.rep_PLUS_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("scroll-pane-header","options","scroll-pane-header/options",700673903)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("scroll-pane-header","options","scroll-pane-header/options",700673903)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_,null,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),null,null,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("scroll-pane-footer","options","scroll-pane-footer/options",664084473),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__70721){
return cljs.core.map_QMARK_(G__70721);
})], null),(function (G__70721){
return cljs.core.map_QMARK_(G__70721);
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
var len__4864__auto___70811 = arguments.length;
var i__4865__auto___70812 = (0);
while(true){
if((i__4865__auto___70812 < len__4864__auto___70811)){
args__4870__auto__.push((arguments[i__4865__auto___70812]));

var G__70813 = (i__4865__auto___70812 + (1));
i__4865__auto___70812 = G__70813;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return woolybear.ad.containers.scroll_pane_footer.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(woolybear.ad.containers.scroll_pane_footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__70730 = woolybear.ad.utils.extract_args(args);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70730,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70730,(1),null);
var map__70733 = opts;
var map__70733__$1 = cljs.core.__destructure_map(map__70733);
var extra_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70733__$1,new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843));
var subscribe_to_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70733__$1,new cljs.core.Keyword(null,"subscribe-to-classes","subscribe-to-classes",173193596));
var classes_sub = woolybear.ad.utils.subscribe_to(subscribe_to_classes);
return (function() { 
var G__70814__delegate = function (args__$1){
var vec__70735 = woolybear.ad.utils.extract_args(args__$1);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70735,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70735,(1),null);
var dynamic_classes = cljs.core.deref(classes_sub);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),woolybear.ad.utils.css__GT_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"wb-scroll-pane-footer","wb-scroll-pane-footer",-531604422),extra_classes,dynamic_classes], 0))], null)], null),children);
};
var G__70814 = function (var_args){
var args__$1 = null;
if (arguments.length > 0) {
var G__70815__i = 0, G__70815__a = new Array(arguments.length -  0);
while (G__70815__i < G__70815__a.length) {G__70815__a[G__70815__i] = arguments[G__70815__i + 0]; ++G__70815__i;}
  args__$1 = new cljs.core.IndexedSeq(G__70815__a,0,null);
} 
return G__70814__delegate.call(this,args__$1);};
G__70814.cljs$lang$maxFixedArity = 0;
G__70814.cljs$lang$applyTo = (function (arglist__70816){
var args__$1 = cljs.core.seq(arglist__70816);
return G__70814__delegate(args__$1);
});
G__70814.cljs$core$IFn$_invoke$arity$variadic = G__70814__delegate;
return G__70814;
})()
;
}));

(woolybear.ad.containers.scroll_pane_footer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(woolybear.ad.containers.scroll_pane_footer.cljs$lang$applyTo = (function (seq70729){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70729));
}));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("woolybear.ad.containers","scroll-pane-footer","woolybear.ad.containers/scroll-pane-footer",981774813,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("scroll-pane-footer","options","scroll-pane-footer/options",664084473)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("scroll-pane-footer","options","scroll-pane-footer/options",664084473)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"children","children",-940561982)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.maybe_impl(new cljs.core.Keyword("scroll-pane-footer","options","scroll-pane-footer/options",664084473),new cljs.core.Keyword("scroll-pane-footer","options","scroll-pane-footer/options",664084473)),cljs.spec.alpha.rep_PLUS_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("scroll-pane-footer","options","scroll-pane-footer/options",664084473)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("scroll-pane-footer","options","scroll-pane-footer/options",664084473)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_,null,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),null,null,null));
/**
 * Given a child element, return :header if it is a scroll-pane-header, or
 *   :footer if it is a scroll-pane-footer, or :body if it is anything else.
 */
woolybear.ad.containers.get_header_footer_body_type = (function woolybear$ad$containers$get_header_footer_body_type(child){
var pred__70739 = cljs.core._EQ_;
var expr__70740 = cljs.core.first(child);
if(cljs.core.truth_((pred__70739.cljs$core$IFn$_invoke$arity$2 ? pred__70739.cljs$core$IFn$_invoke$arity$2(woolybear.ad.containers.scroll_pane_header,expr__70740) : pred__70739.call(null,woolybear.ad.containers.scroll_pane_header,expr__70740)))){
return new cljs.core.Keyword(null,"header","header",119441134);
} else {
if(cljs.core.truth_((pred__70739.cljs$core$IFn$_invoke$arity$2 ? pred__70739.cljs$core$IFn$_invoke$arity$2(woolybear.ad.containers.scroll_pane_footer,expr__70740) : pred__70739.call(null,woolybear.ad.containers.scroll_pane_footer,expr__70740)))){
return new cljs.core.Keyword(null,"footer","footer",1606445390);
} else {
return new cljs.core.Keyword(null,"body","body",-2049205669);
}
}
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("v-scroll-pane","height","v-scroll-pane/height",-266308499),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("v-scroll-pane","options","v-scroll-pane/options",1492874608),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("v-scroll-pane","height","v-scroll-pane/height",-266308499)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("v-scroll-pane","height","v-scroll-pane/height",-266308499)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__70742){
return cljs.core.map_QMARK_(G__70742);
}),(function (G__70742){
return cljs.core.contains_QMARK_(G__70742,new cljs.core.Keyword(null,"height","height",1025178622));
})], null),(function (G__70742){
return ((cljs.core.map_QMARK_(G__70742)) && (cljs.core.contains_QMARK_(G__70742,new cljs.core.Keyword(null,"height","height",1025178622))));
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
var len__4864__auto___70820 = arguments.length;
var i__4865__auto___70821 = (0);
while(true){
if((i__4865__auto___70821 < len__4864__auto___70820)){
args__4870__auto__.push((arguments[i__4865__auto___70821]));

var G__70822 = (i__4865__auto___70821 + (1));
i__4865__auto___70821 = G__70822;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return woolybear.ad.containers.v_scroll_pane.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(woolybear.ad.containers.v_scroll_pane.cljs$core$IFn$_invoke$arity$variadic = (function (opts,_){
var map__70753 = opts;
var map__70753__$1 = cljs.core.__destructure_map(map__70753);
var extra_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70753__$1,new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843));
var subscribe_to_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70753__$1,new cljs.core.Keyword(null,"subscribe-to-classes","subscribe-to-classes",173193596));
var classes_sub = woolybear.ad.utils.subscribe_to(subscribe_to_classes);
return (function() { 
var G__70823__delegate = function (p__70754,children){
var map__70755 = p__70754;
var map__70755__$1 = cljs.core.__destructure_map(map__70755);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70755__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var map__70756 = cljs.core.group_by(woolybear.ad.containers.get_header_footer_body_type,children);
var map__70756__$1 = cljs.core.__destructure_map(map__70756);
var header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70756__$1,new cljs.core.Keyword(null,"header","header",119441134));
var footer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70756__$1,new cljs.core.Keyword(null,"footer","footer",1606445390));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70756__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var dynamic_classes = cljs.core.deref(classes_sub);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),woolybear.ad.utils.css__GT_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"wb-v-scroll-pane-container","wb-v-scroll-pane-container",1342041549),extra_classes,dynamic_classes], 0))], null)], null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(header)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.wb-v-scroll-pane-header","div.wb-v-scroll-pane-header",-343792214)], null),header):null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.wb-v-scroll-pane-overflow","div.wb-v-scroll-pane-overflow",-2056719626),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),height], null)], null)], null),body),(cljs.core.truth_(footer)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.wb-v-scroll-pane-footer","div.wb-v-scroll-pane-footer",680198103)], null),footer):null)], null)));
};
var G__70823 = function (p__70754,var_args){
var children = null;
if (arguments.length > 1) {
var G__70824__i = 0, G__70824__a = new Array(arguments.length -  1);
while (G__70824__i < G__70824__a.length) {G__70824__a[G__70824__i] = arguments[G__70824__i + 1]; ++G__70824__i;}
  children = new cljs.core.IndexedSeq(G__70824__a,0,null);
} 
return G__70823__delegate.call(this,p__70754,children);};
G__70823.cljs$lang$maxFixedArity = 1;
G__70823.cljs$lang$applyTo = (function (arglist__70825){
var p__70754 = cljs.core.first(arglist__70825);
var children = cljs.core.rest(arglist__70825);
return G__70823__delegate(p__70754,children);
});
G__70823.cljs$core$IFn$_invoke$arity$variadic = G__70823__delegate;
return G__70823;
})()
;
}));

(woolybear.ad.containers.v_scroll_pane.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(woolybear.ad.containers.v_scroll_pane.cljs$lang$applyTo = (function (seq70750){
var G__70751 = cljs.core.first(seq70750);
var seq70750__$1 = cljs.core.next(seq70750);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70751,seq70750__$1);
}));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("woolybear.ad.containers","v-scroll-pane","woolybear.ad.containers/v-scroll-pane",44376562,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("v-scroll-pane","options","v-scroll-pane/options",1492874608)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("v-scroll-pane","options","v-scroll-pane/options",1492874608)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"children","children",-940561982)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.maybe_impl(new cljs.core.Keyword("v-scroll-pane","options","v-scroll-pane/options",1492874608),new cljs.core.Keyword("v-scroll-pane","options","v-scroll-pane/options",1492874608)),cljs.spec.alpha.rep_PLUS_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("v-scroll-pane","options","v-scroll-pane/options",1492874608)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("v-scroll-pane","options","v-scroll-pane/options",1492874608)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_,null,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),null,null,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("bar","options","bar/options",99805422),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__70762){
return cljs.core.map_QMARK_(G__70762);
})], null),(function (G__70762){
return cljs.core.map_QMARK_(G__70762);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843),new cljs.core.Keyword(null,"subscribe-to-classes","subscribe-to-classes",173193596)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])));
/**
 * 
 *   Generic bar component, suitable for use as a toolbar, button bar, etc.
 *   
 */
woolybear.ad.containers.bar = (function woolybear$ad$containers$bar(var_args){
var args__4870__auto__ = [];
var len__4864__auto___70826 = arguments.length;
var i__4865__auto___70827 = (0);
while(true){
if((i__4865__auto___70827 < len__4864__auto___70826)){
args__4870__auto__.push((arguments[i__4865__auto___70827]));

var G__70828 = (i__4865__auto___70827 + (1));
i__4865__auto___70827 = G__70828;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return woolybear.ad.containers.bar.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(woolybear.ad.containers.bar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__70768 = woolybear.ad.utils.extract_args(args);
var map__70771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70768,(0),null);
var map__70771__$1 = cljs.core.__destructure_map(map__70771);
var extra_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70771__$1,new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843));
var subscribe_to_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70771__$1,new cljs.core.Keyword(null,"subscribe-to-classes","subscribe-to-classes",173193596));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70768,(1),null);
var classes_sub = woolybear.ad.utils.subscribe_to(subscribe_to_classes);
return (function() { 
var G__70832__delegate = function (args__$1){
var vec__70772 = woolybear.ad.utils.extract_args(args__$1);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70772,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70772,(1),null);
var dynamic_classes = cljs.core.deref(classes_sub);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),woolybear.ad.utils.css__GT_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"wb-bar","wb-bar",1585512447),extra_classes,dynamic_classes], 0))], null)], null),children);
};
var G__70832 = function (var_args){
var args__$1 = null;
if (arguments.length > 0) {
var G__70834__i = 0, G__70834__a = new Array(arguments.length -  0);
while (G__70834__i < G__70834__a.length) {G__70834__a[G__70834__i] = arguments[G__70834__i + 0]; ++G__70834__i;}
  args__$1 = new cljs.core.IndexedSeq(G__70834__a,0,null);
} 
return G__70832__delegate.call(this,args__$1);};
G__70832.cljs$lang$maxFixedArity = 0;
G__70832.cljs$lang$applyTo = (function (arglist__70835){
var args__$1 = cljs.core.seq(arglist__70835);
return G__70832__delegate(args__$1);
});
G__70832.cljs$core$IFn$_invoke$arity$variadic = G__70832__delegate;
return G__70832;
})()
;
}));

(woolybear.ad.containers.bar.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(woolybear.ad.containers.bar.cljs$lang$applyTo = (function (seq70766){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70766));
}));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("woolybear.ad.containers","bar","woolybear.ad.containers/bar",1926213236,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("bar","options","bar/options",99805422)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("bar","options","bar/options",99805422)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"children","children",-940561982)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.maybe_impl(new cljs.core.Keyword("bar","options","bar/options",99805422),new cljs.core.Keyword("bar","options","bar/options",99805422)),cljs.spec.alpha.rep_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("bar","options","bar/options",99805422)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("bar","options","bar/options",99805422)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_,null,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),null,null,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("spoiler","show-label","spoiler/show-label",-259972993),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("spoiler","hide-label","spoiler/hide-label",1704977825),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("spoiler","options","spoiler/options",-1894027489),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spoiler","show-label","spoiler/show-label",-259972993),new cljs.core.Keyword("spoiler","hide-label","spoiler/hide-label",1704977825),new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spoiler","show-label","spoiler/show-label",-259972993),new cljs.core.Keyword("spoiler","hide-label","spoiler/hide-label",1704977825),new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__70780){
return cljs.core.map_QMARK_(G__70780);
})], null),(function (G__70780){
return cljs.core.map_QMARK_(G__70780);
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
var len__4864__auto___70840 = arguments.length;
var i__4865__auto___70841 = (0);
while(true){
if((i__4865__auto___70841 < len__4864__auto___70840)){
args__4870__auto__.push((arguments[i__4865__auto___70841]));

var G__70842 = (i__4865__auto___70841 + (1));
i__4865__auto___70841 = G__70842;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return woolybear.ad.containers.spoiler.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(woolybear.ad.containers.spoiler.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__70786 = woolybear.ad.utils.extract_args(args);
var map__70789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70786,(0),null);
var map__70789__$1 = cljs.core.__destructure_map(map__70789);
var show_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70789__$1,new cljs.core.Keyword(null,"show-label","show-label",2070422077));
var hide_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70789__$1,new cljs.core.Keyword(null,"hide-label","hide-label",-92736657));
var extra_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70789__$1,new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843));
var subscribe_to_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70789__$1,new cljs.core.Keyword(null,"subscribe-to-classes","subscribe-to-classes",173193596));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70786,(1),null);
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
var G__70843__delegate = function (args__$1){
var vec__70790 = woolybear.ad.utils.extract_args(args__$1);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70790,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70790,(1),null);
var visible_QMARK___$1 = cljs.core.deref(visible_QMARK_);
var button_label = (cljs.core.truth_(visible_QMARK___$1)?hide_label__$1:show_label__$1);
var dynamic_classes = cljs.core.deref(classes_sub);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.level","div.level",-1180372721),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),woolybear.ad.utils.css__GT_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"wb-spoiler","wb-spoiler",1252627874),extra_classes,dynamic_classes], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.level-item-left","div.level-item-left",-562340784),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),click_dispatcher], null),button_label], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.level-item","div.level-item",-68610818),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.containers.shy_block,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active?","active?",459499776),visible_QMARK___$1], null)], null),children)], null)], null);
};
var G__70843 = function (var_args){
var args__$1 = null;
if (arguments.length > 0) {
var G__70844__i = 0, G__70844__a = new Array(arguments.length -  0);
while (G__70844__i < G__70844__a.length) {G__70844__a[G__70844__i] = arguments[G__70844__i + 0]; ++G__70844__i;}
  args__$1 = new cljs.core.IndexedSeq(G__70844__a,0,null);
} 
return G__70843__delegate.call(this,args__$1);};
G__70843.cljs$lang$maxFixedArity = 0;
G__70843.cljs$lang$applyTo = (function (arglist__70845){
var args__$1 = cljs.core.seq(arglist__70845);
return G__70843__delegate(args__$1);
});
G__70843.cljs$core$IFn$_invoke$arity$variadic = G__70843__delegate;
return G__70843;
})()
;
}));

(woolybear.ad.containers.spoiler.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(woolybear.ad.containers.spoiler.cljs$lang$applyTo = (function (seq70784){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70784));
}));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("woolybear.ad.containers","spoiler","woolybear.ad.containers/spoiler",1466932119,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("spoiler","options","spoiler/options",-1894027489)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("spoiler","options","spoiler/options",-1894027489)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"children","children",-940561982)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.maybe_impl(new cljs.core.Keyword("spoiler","options","spoiler/options",-1894027489),new cljs.core.Keyword("spoiler","options","spoiler/options",-1894027489)),cljs.spec.alpha.rep_PLUS_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("spoiler","options","spoiler/options",-1894027489)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("spoiler","options","spoiler/options",-1894027489)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_,null,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),null,null,null));

//# sourceMappingURL=woolybear.ad.containers.js.map
