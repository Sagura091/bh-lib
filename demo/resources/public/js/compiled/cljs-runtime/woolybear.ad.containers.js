goog.provide('woolybear.ad.containers');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("shy-block","options","shy-block/options",-1216057699),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","active?","ad/active?",459503187)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","active?","ad/active?",459503187)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__47936){
return cljs.core.map_QMARK_(G__47936);
}),(function (G__47936){
return cljs.core.contains_QMARK_(G__47936,new cljs.core.Keyword(null,"active?","active?",459499776));
})], null),(function (G__47936){
return ((cljs.core.map_QMARK_(G__47936)) && (cljs.core.contains_QMARK_(G__47936,new cljs.core.Keyword(null,"active?","active?",459499776))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843),new cljs.core.Keyword(null,"subscribe-to-classes","subscribe-to-classes",173193596)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","active?","ad/active?",459503187)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active?","active?",459499776)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"active?","active?",459499776)))], null),null])));
/**
 * A container that may or may not be visible, depending on the current value of
 *   its `active?` subscription. If you wish you can pass in extra CSS classes via
 *   the :extra-classes option. For extra classes that change dynamically at run-time,
 *   pass in :subscribe-to-classes instead.
 */
woolybear.ad.containers.shy_block = (function woolybear$ad$containers$shy_block(var_args){
var args__4870__auto__ = [];
var len__4864__auto___48333 = arguments.length;
var i__4865__auto___48334 = (0);
while(true){
if((i__4865__auto___48334 < len__4864__auto___48333)){
args__4870__auto__.push((arguments[i__4865__auto___48334]));

var G__48335 = (i__4865__auto___48334 + (1));
i__4865__auto___48334 = G__48335;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return woolybear.ad.containers.shy_block.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(woolybear.ad.containers.shy_block.cljs$core$IFn$_invoke$arity$variadic = (function (opts,_){
var map__47980 = opts;
var map__47980__$1 = cljs.core.__destructure_map(map__47980);
var extra_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47980__$1,new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843));
var subscribe_to_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47980__$1,new cljs.core.Keyword(null,"subscribe-to-classes","subscribe-to-classes",173193596));
var classes_sub = woolybear.ad.utils.subscribe_to(subscribe_to_classes);
return (function() { 
var G__48338__delegate = function (p__47982,children){
var map__47983 = p__47982;
var map__47983__$1 = cljs.core.__destructure_map(map__47983);
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47983__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var dynamic_classes = cljs.core.deref(classes_sub);
var vis_class = (cljs.core.truth_(active_QMARK_)?new cljs.core.Keyword(null,"visible","visible",-1024216805):new cljs.core.Keyword(null,"hidden","hidden",-312506092));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),woolybear.ad.utils.css__GT_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"wb-shy","wb-shy",679456788),vis_class,extra_classes,dynamic_classes], 0))], null)], null),children);
};
var G__48338 = function (p__47982,var_args){
var children = null;
if (arguments.length > 1) {
var G__48339__i = 0, G__48339__a = new Array(arguments.length -  1);
while (G__48339__i < G__48339__a.length) {G__48339__a[G__48339__i] = arguments[G__48339__i + 1]; ++G__48339__i;}
  children = new cljs.core.IndexedSeq(G__48339__a,0,null);
} 
return G__48338__delegate.call(this,p__47982,children);};
G__48338.cljs$lang$maxFixedArity = 1;
G__48338.cljs$lang$applyTo = (function (arglist__48340){
var p__47982 = cljs.core.first(arglist__48340);
var children = cljs.core.rest(arglist__48340);
return G__48338__delegate(p__47982,children);
});
G__48338.cljs$core$IFn$_invoke$arity$variadic = G__48338__delegate;
return G__48338;
})()
;
}));

(woolybear.ad.containers.shy_block.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(woolybear.ad.containers.shy_block.cljs$lang$applyTo = (function (seq47965){
var G__47966 = cljs.core.first(seq47965);
var seq47965__$1 = cljs.core.next(seq47965);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47966,seq47965__$1);
}));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("woolybear.ad.containers","shy-block","woolybear.ad.containers/shy-block",-1199089236,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("shy-block","options","shy-block/options",-1216057699)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("shy-block","options","shy-block/options",-1216057699)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"children","children",-940561982)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.maybe_impl(new cljs.core.Keyword("shy-block","options","shy-block/options",-1216057699),new cljs.core.Keyword("shy-block","options","shy-block/options",-1216057699)),cljs.spec.alpha.rep_PLUS_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("shy-block","options","shy-block/options",-1216057699)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("shy-block","options","shy-block/options",-1216057699)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_,null,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),null,null,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("scroll-pane-header","options","scroll-pane-header/options",700673903),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__48010){
return cljs.core.map_QMARK_(G__48010);
})], null),(function (G__48010){
return cljs.core.map_QMARK_(G__48010);
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
var len__4864__auto___48347 = arguments.length;
var i__4865__auto___48348 = (0);
while(true){
if((i__4865__auto___48348 < len__4864__auto___48347)){
args__4870__auto__.push((arguments[i__4865__auto___48348]));

var G__48349 = (i__4865__auto___48348 + (1));
i__4865__auto___48348 = G__48349;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return woolybear.ad.containers.scroll_pane_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(woolybear.ad.containers.scroll_pane_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__48044 = woolybear.ad.utils.extract_args(args);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48044,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48044,(1),null);
var map__48047 = opts;
var map__48047__$1 = cljs.core.__destructure_map(map__48047);
var extra_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48047__$1,new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843));
var subscribe_to_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48047__$1,new cljs.core.Keyword(null,"subscribe-to-classes","subscribe-to-classes",173193596));
var classes_sub = woolybear.ad.utils.subscribe_to(subscribe_to_classes);
return (function() { 
var G__48351__delegate = function (args__$1){
var vec__48053 = woolybear.ad.utils.extract_args(args__$1);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48053,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48053,(1),null);
var dynamic_classes = cljs.core.deref(classes_sub);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),woolybear.ad.utils.css__GT_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"wb-scroll-pane-header","wb-scroll-pane-header",967698655),extra_classes,dynamic_classes], 0))], null)], null),children);
};
var G__48351 = function (var_args){
var args__$1 = null;
if (arguments.length > 0) {
var G__48352__i = 0, G__48352__a = new Array(arguments.length -  0);
while (G__48352__i < G__48352__a.length) {G__48352__a[G__48352__i] = arguments[G__48352__i + 0]; ++G__48352__i;}
  args__$1 = new cljs.core.IndexedSeq(G__48352__a,0,null);
} 
return G__48351__delegate.call(this,args__$1);};
G__48351.cljs$lang$maxFixedArity = 0;
G__48351.cljs$lang$applyTo = (function (arglist__48353){
var args__$1 = cljs.core.seq(arglist__48353);
return G__48351__delegate(args__$1);
});
G__48351.cljs$core$IFn$_invoke$arity$variadic = G__48351__delegate;
return G__48351;
})()
;
}));

(woolybear.ad.containers.scroll_pane_header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(woolybear.ad.containers.scroll_pane_header.cljs$lang$applyTo = (function (seq48023){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48023));
}));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("woolybear.ad.containers","scroll-pane-header","woolybear.ad.containers/scroll-pane-header",936483755,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("scroll-pane-header","options","scroll-pane-header/options",700673903)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("scroll-pane-header","options","scroll-pane-header/options",700673903)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"children","children",-940561982)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.maybe_impl(new cljs.core.Keyword("scroll-pane-header","options","scroll-pane-header/options",700673903),new cljs.core.Keyword("scroll-pane-header","options","scroll-pane-header/options",700673903)),cljs.spec.alpha.rep_PLUS_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("scroll-pane-header","options","scroll-pane-header/options",700673903)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("scroll-pane-header","options","scroll-pane-header/options",700673903)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_,null,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),null,null,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("scroll-pane-footer","options","scroll-pane-footer/options",664084473),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__48080){
return cljs.core.map_QMARK_(G__48080);
})], null),(function (G__48080){
return cljs.core.map_QMARK_(G__48080);
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
var len__4864__auto___48358 = arguments.length;
var i__4865__auto___48359 = (0);
while(true){
if((i__4865__auto___48359 < len__4864__auto___48358)){
args__4870__auto__.push((arguments[i__4865__auto___48359]));

var G__48360 = (i__4865__auto___48359 + (1));
i__4865__auto___48359 = G__48360;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return woolybear.ad.containers.scroll_pane_footer.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(woolybear.ad.containers.scroll_pane_footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__48175 = woolybear.ad.utils.extract_args(args);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48175,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48175,(1),null);
var map__48178 = opts;
var map__48178__$1 = cljs.core.__destructure_map(map__48178);
var extra_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48178__$1,new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843));
var subscribe_to_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48178__$1,new cljs.core.Keyword(null,"subscribe-to-classes","subscribe-to-classes",173193596));
var classes_sub = woolybear.ad.utils.subscribe_to(subscribe_to_classes);
return (function() { 
var G__48362__delegate = function (args__$1){
var vec__48181 = woolybear.ad.utils.extract_args(args__$1);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48181,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48181,(1),null);
var dynamic_classes = cljs.core.deref(classes_sub);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),woolybear.ad.utils.css__GT_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"wb-scroll-pane-footer","wb-scroll-pane-footer",-531604422),extra_classes,dynamic_classes], 0))], null)], null),children);
};
var G__48362 = function (var_args){
var args__$1 = null;
if (arguments.length > 0) {
var G__48363__i = 0, G__48363__a = new Array(arguments.length -  0);
while (G__48363__i < G__48363__a.length) {G__48363__a[G__48363__i] = arguments[G__48363__i + 0]; ++G__48363__i;}
  args__$1 = new cljs.core.IndexedSeq(G__48363__a,0,null);
} 
return G__48362__delegate.call(this,args__$1);};
G__48362.cljs$lang$maxFixedArity = 0;
G__48362.cljs$lang$applyTo = (function (arglist__48364){
var args__$1 = cljs.core.seq(arglist__48364);
return G__48362__delegate(args__$1);
});
G__48362.cljs$core$IFn$_invoke$arity$variadic = G__48362__delegate;
return G__48362;
})()
;
}));

(woolybear.ad.containers.scroll_pane_footer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(woolybear.ad.containers.scroll_pane_footer.cljs$lang$applyTo = (function (seq48163){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48163));
}));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("woolybear.ad.containers","scroll-pane-footer","woolybear.ad.containers/scroll-pane-footer",981774813,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("scroll-pane-footer","options","scroll-pane-footer/options",664084473)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("scroll-pane-footer","options","scroll-pane-footer/options",664084473)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"children","children",-940561982)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.maybe_impl(new cljs.core.Keyword("scroll-pane-footer","options","scroll-pane-footer/options",664084473),new cljs.core.Keyword("scroll-pane-footer","options","scroll-pane-footer/options",664084473)),cljs.spec.alpha.rep_PLUS_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("scroll-pane-footer","options","scroll-pane-footer/options",664084473)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("scroll-pane-footer","options","scroll-pane-footer/options",664084473)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_,null,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),null,null,null));
/**
 * Given a child element, return :header if it is a scroll-pane-header, or
 *   :footer if it is a scroll-pane-footer, or :body if it is anything else.
 */
woolybear.ad.containers.get_header_footer_body_type = (function woolybear$ad$containers$get_header_footer_body_type(child){
var pred__48193 = cljs.core._EQ_;
var expr__48194 = cljs.core.first(child);
if(cljs.core.truth_((pred__48193.cljs$core$IFn$_invoke$arity$2 ? pred__48193.cljs$core$IFn$_invoke$arity$2(woolybear.ad.containers.scroll_pane_header,expr__48194) : pred__48193.call(null,woolybear.ad.containers.scroll_pane_header,expr__48194)))){
return new cljs.core.Keyword(null,"header","header",119441134);
} else {
if(cljs.core.truth_((pred__48193.cljs$core$IFn$_invoke$arity$2 ? pred__48193.cljs$core$IFn$_invoke$arity$2(woolybear.ad.containers.scroll_pane_footer,expr__48194) : pred__48193.call(null,woolybear.ad.containers.scroll_pane_footer,expr__48194)))){
return new cljs.core.Keyword(null,"footer","footer",1606445390);
} else {
return new cljs.core.Keyword(null,"body","body",-2049205669);
}
}
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("v-scroll-pane","height","v-scroll-pane/height",-266308499),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("v-scroll-pane","options","v-scroll-pane/options",1492874608),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("v-scroll-pane","height","v-scroll-pane/height",-266308499)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("v-scroll-pane","height","v-scroll-pane/height",-266308499)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__48198){
return cljs.core.map_QMARK_(G__48198);
}),(function (G__48198){
return cljs.core.contains_QMARK_(G__48198,new cljs.core.Keyword(null,"height","height",1025178622));
})], null),(function (G__48198){
return ((cljs.core.map_QMARK_(G__48198)) && (cljs.core.contains_QMARK_(G__48198,new cljs.core.Keyword(null,"height","height",1025178622))));
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
var len__4864__auto___48366 = arguments.length;
var i__4865__auto___48367 = (0);
while(true){
if((i__4865__auto___48367 < len__4864__auto___48366)){
args__4870__auto__.push((arguments[i__4865__auto___48367]));

var G__48368 = (i__4865__auto___48367 + (1));
i__4865__auto___48367 = G__48368;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return woolybear.ad.containers.v_scroll_pane.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(woolybear.ad.containers.v_scroll_pane.cljs$core$IFn$_invoke$arity$variadic = (function (opts,_){
var map__48228 = opts;
var map__48228__$1 = cljs.core.__destructure_map(map__48228);
var extra_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48228__$1,new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843));
var subscribe_to_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48228__$1,new cljs.core.Keyword(null,"subscribe-to-classes","subscribe-to-classes",173193596));
var classes_sub = woolybear.ad.utils.subscribe_to(subscribe_to_classes);
return (function() { 
var G__48369__delegate = function (p__48229,children){
var map__48231 = p__48229;
var map__48231__$1 = cljs.core.__destructure_map(map__48231);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48231__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var map__48233 = cljs.core.group_by(woolybear.ad.containers.get_header_footer_body_type,children);
var map__48233__$1 = cljs.core.__destructure_map(map__48233);
var header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48233__$1,new cljs.core.Keyword(null,"header","header",119441134));
var footer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48233__$1,new cljs.core.Keyword(null,"footer","footer",1606445390));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48233__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var dynamic_classes = cljs.core.deref(classes_sub);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),woolybear.ad.utils.css__GT_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"wb-v-scroll-pane-container","wb-v-scroll-pane-container",1342041549),extra_classes,dynamic_classes], 0))], null)], null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(header)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.wb-v-scroll-pane-header","div.wb-v-scroll-pane-header",-343792214)], null),header):null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.wb-v-scroll-pane-overflow","div.wb-v-scroll-pane-overflow",-2056719626),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),height], null)], null)], null),body),(cljs.core.truth_(footer)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.wb-v-scroll-pane-footer","div.wb-v-scroll-pane-footer",680198103)], null),footer):null)], null)));
};
var G__48369 = function (p__48229,var_args){
var children = null;
if (arguments.length > 1) {
var G__48370__i = 0, G__48370__a = new Array(arguments.length -  1);
while (G__48370__i < G__48370__a.length) {G__48370__a[G__48370__i] = arguments[G__48370__i + 1]; ++G__48370__i;}
  children = new cljs.core.IndexedSeq(G__48370__a,0,null);
} 
return G__48369__delegate.call(this,p__48229,children);};
G__48369.cljs$lang$maxFixedArity = 1;
G__48369.cljs$lang$applyTo = (function (arglist__48371){
var p__48229 = cljs.core.first(arglist__48371);
var children = cljs.core.rest(arglist__48371);
return G__48369__delegate(p__48229,children);
});
G__48369.cljs$core$IFn$_invoke$arity$variadic = G__48369__delegate;
return G__48369;
})()
;
}));

(woolybear.ad.containers.v_scroll_pane.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(woolybear.ad.containers.v_scroll_pane.cljs$lang$applyTo = (function (seq48216){
var G__48218 = cljs.core.first(seq48216);
var seq48216__$1 = cljs.core.next(seq48216);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48218,seq48216__$1);
}));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("woolybear.ad.containers","v-scroll-pane","woolybear.ad.containers/v-scroll-pane",44376562,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("v-scroll-pane","options","v-scroll-pane/options",1492874608)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("v-scroll-pane","options","v-scroll-pane/options",1492874608)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"children","children",-940561982)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.maybe_impl(new cljs.core.Keyword("v-scroll-pane","options","v-scroll-pane/options",1492874608),new cljs.core.Keyword("v-scroll-pane","options","v-scroll-pane/options",1492874608)),cljs.spec.alpha.rep_PLUS_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("v-scroll-pane","options","v-scroll-pane/options",1492874608)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("v-scroll-pane","options","v-scroll-pane/options",1492874608)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_,null,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),null,null,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("bar","options","bar/options",99805422),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__48251){
return cljs.core.map_QMARK_(G__48251);
})], null),(function (G__48251){
return cljs.core.map_QMARK_(G__48251);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843),new cljs.core.Keyword(null,"subscribe-to-classes","subscribe-to-classes",173193596)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])));
/**
 * 
 *   Generic bar component, suitable for use as a toolbar, button bar, etc.
 *   
 */
woolybear.ad.containers.bar = (function woolybear$ad$containers$bar(var_args){
var args__4870__auto__ = [];
var len__4864__auto___48384 = arguments.length;
var i__4865__auto___48385 = (0);
while(true){
if((i__4865__auto___48385 < len__4864__auto___48384)){
args__4870__auto__.push((arguments[i__4865__auto___48385]));

var G__48386 = (i__4865__auto___48385 + (1));
i__4865__auto___48385 = G__48386;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return woolybear.ad.containers.bar.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(woolybear.ad.containers.bar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__48271 = woolybear.ad.utils.extract_args(args);
var map__48274 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48271,(0),null);
var map__48274__$1 = cljs.core.__destructure_map(map__48274);
var extra_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48274__$1,new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843));
var subscribe_to_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48274__$1,new cljs.core.Keyword(null,"subscribe-to-classes","subscribe-to-classes",173193596));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48271,(1),null);
var classes_sub = woolybear.ad.utils.subscribe_to(subscribe_to_classes);
return (function() { 
var G__48387__delegate = function (args__$1){
var vec__48279 = woolybear.ad.utils.extract_args(args__$1);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48279,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48279,(1),null);
var dynamic_classes = cljs.core.deref(classes_sub);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),woolybear.ad.utils.css__GT_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"wb-bar","wb-bar",1585512447),extra_classes,dynamic_classes], 0))], null)], null),children);
};
var G__48387 = function (var_args){
var args__$1 = null;
if (arguments.length > 0) {
var G__48388__i = 0, G__48388__a = new Array(arguments.length -  0);
while (G__48388__i < G__48388__a.length) {G__48388__a[G__48388__i] = arguments[G__48388__i + 0]; ++G__48388__i;}
  args__$1 = new cljs.core.IndexedSeq(G__48388__a,0,null);
} 
return G__48387__delegate.call(this,args__$1);};
G__48387.cljs$lang$maxFixedArity = 0;
G__48387.cljs$lang$applyTo = (function (arglist__48389){
var args__$1 = cljs.core.seq(arglist__48389);
return G__48387__delegate(args__$1);
});
G__48387.cljs$core$IFn$_invoke$arity$variadic = G__48387__delegate;
return G__48387;
})()
;
}));

(woolybear.ad.containers.bar.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(woolybear.ad.containers.bar.cljs$lang$applyTo = (function (seq48268){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48268));
}));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("woolybear.ad.containers","bar","woolybear.ad.containers/bar",1926213236,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("bar","options","bar/options",99805422)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("bar","options","bar/options",99805422)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"children","children",-940561982)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.maybe_impl(new cljs.core.Keyword("bar","options","bar/options",99805422),new cljs.core.Keyword("bar","options","bar/options",99805422)),cljs.spec.alpha.rep_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("bar","options","bar/options",99805422)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("bar","options","bar/options",99805422)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_,null,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),null,null,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("spoiler","show-label","spoiler/show-label",-259972993),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("spoiler","hide-label","spoiler/hide-label",1704977825),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("spoiler","options","spoiler/options",-1894027489),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spoiler","show-label","spoiler/show-label",-259972993),new cljs.core.Keyword("spoiler","hide-label","spoiler/hide-label",1704977825),new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spoiler","show-label","spoiler/show-label",-259972993),new cljs.core.Keyword("spoiler","hide-label","spoiler/hide-label",1704977825),new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__48297){
return cljs.core.map_QMARK_(G__48297);
})], null),(function (G__48297){
return cljs.core.map_QMARK_(G__48297);
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
var len__4864__auto___48390 = arguments.length;
var i__4865__auto___48391 = (0);
while(true){
if((i__4865__auto___48391 < len__4864__auto___48390)){
args__4870__auto__.push((arguments[i__4865__auto___48391]));

var G__48392 = (i__4865__auto___48391 + (1));
i__4865__auto___48391 = G__48392;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return woolybear.ad.containers.spoiler.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(woolybear.ad.containers.spoiler.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__48305 = woolybear.ad.utils.extract_args(args);
var map__48308 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48305,(0),null);
var map__48308__$1 = cljs.core.__destructure_map(map__48308);
var show_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48308__$1,new cljs.core.Keyword(null,"show-label","show-label",2070422077));
var hide_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48308__$1,new cljs.core.Keyword(null,"hide-label","hide-label",-92736657));
var extra_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48308__$1,new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843));
var subscribe_to_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48308__$1,new cljs.core.Keyword(null,"subscribe-to-classes","subscribe-to-classes",173193596));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48305,(1),null);
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
var G__48393__delegate = function (args__$1){
var vec__48309 = woolybear.ad.utils.extract_args(args__$1);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48309,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48309,(1),null);
var visible_QMARK___$1 = cljs.core.deref(visible_QMARK_);
var button_label = (cljs.core.truth_(visible_QMARK___$1)?hide_label__$1:show_label__$1);
var dynamic_classes = cljs.core.deref(classes_sub);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.level","div.level",-1180372721),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),woolybear.ad.utils.css__GT_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"wb-spoiler","wb-spoiler",1252627874),extra_classes,dynamic_classes], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.level-item-left","div.level-item-left",-562340784),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),click_dispatcher], null),button_label], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.level-item","div.level-item",-68610818),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.containers.shy_block,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active?","active?",459499776),visible_QMARK___$1], null)], null),children)], null)], null);
};
var G__48393 = function (var_args){
var args__$1 = null;
if (arguments.length > 0) {
var G__48394__i = 0, G__48394__a = new Array(arguments.length -  0);
while (G__48394__i < G__48394__a.length) {G__48394__a[G__48394__i] = arguments[G__48394__i + 0]; ++G__48394__i;}
  args__$1 = new cljs.core.IndexedSeq(G__48394__a,0,null);
} 
return G__48393__delegate.call(this,args__$1);};
G__48393.cljs$lang$maxFixedArity = 0;
G__48393.cljs$lang$applyTo = (function (arglist__48395){
var args__$1 = cljs.core.seq(arglist__48395);
return G__48393__delegate(args__$1);
});
G__48393.cljs$core$IFn$_invoke$arity$variadic = G__48393__delegate;
return G__48393;
})()
;
}));

(woolybear.ad.containers.spoiler.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(woolybear.ad.containers.spoiler.cljs$lang$applyTo = (function (seq48303){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48303));
}));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("woolybear.ad.containers","spoiler","woolybear.ad.containers/spoiler",1466932119,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("spoiler","options","spoiler/options",-1894027489)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("spoiler","options","spoiler/options",-1894027489)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"children","children",-940561982)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.maybe_impl(new cljs.core.Keyword("spoiler","options","spoiler/options",-1894027489),new cljs.core.Keyword("spoiler","options","spoiler/options",-1894027489)),cljs.spec.alpha.rep_PLUS_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("spoiler","options","spoiler/options",-1894027489)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Keyword("spoiler","options","spoiler/options",-1894027489)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_,null,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),null,null,null));

//# sourceMappingURL=woolybear.ad.containers.js.map
