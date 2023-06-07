goog.provide('woolybear.ad.buttons');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("button","subscribe-to-disabled?","button/subscribe-to-disabled?",1073454061),new cljs.core.Keyword("ad","subscription","ad/subscription",1949020411),new cljs.core.Keyword("ad","subscription","ad/subscription",1949020411));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("button","on-click","button/on-click",1001181053),new cljs.core.Keyword("ad","event-dispatcher","ad/event-dispatcher",1643883990),new cljs.core.Keyword("ad","event-dispatcher","ad/event-dispatcher",1643883990));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("button","options","button/options",873575823),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("button","on-click","button/on-click",1001181053)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("button","subscribe-to-disabled?","button/subscribe-to-disabled?",1073454061),new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("button","on-click","button/on-click",1001181053)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("button","subscribe-to-disabled?","button/subscribe-to-disabled?",1073454061),new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__70525){
return cljs.core.map_QMARK_(G__70525);
}),(function (G__70525){
return cljs.core.contains_QMARK_(G__70525,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
})], null),(function (G__70525){
return ((cljs.core.map_QMARK_(G__70525)) && (cljs.core.contains_QMARK_(G__70525,new cljs.core.Keyword(null,"on-click","on-click",1632826543))));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subscribe-to-disabled?","subscribe-to-disabled?",-1843297485),new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843),new cljs.core.Keyword(null,"subscribe-to-classes","subscribe-to-classes",173193596)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("button","on-click","button/on-click",1001181053)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-click","on-click",1632826543)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("button","subscribe-to-disabled?","button/subscribe-to-disabled?",1073454061),new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"on-click","on-click",1632826543)))], null),null])));
/**
 * 
 *   A simple button component that fires a specified event when clicked.
 *   Note that the opts argument is mandatory, since you must specify an
 *   :on-click dispatcher. You can also pass a :subscribe-to-disabled? option
 *   to dynamically enable/disable the button at runtime, and either (or
 *   both) of the :extra-classes and :subscribe-to-classes options to set
 *   additional CSS classes on the button.
 *   
 */
woolybear.ad.buttons.button = (function woolybear$ad$buttons$button(var_args){
var args__4870__auto__ = [];
var len__4864__auto___70611 = arguments.length;
var i__4865__auto___70612 = (0);
while(true){
if((i__4865__auto___70612 < len__4864__auto___70611)){
args__4870__auto__.push((arguments[i__4865__auto___70612]));

var G__70613 = (i__4865__auto___70612 + (1));
i__4865__auto___70612 = G__70613;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return woolybear.ad.buttons.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(woolybear.ad.buttons.button.cljs$core$IFn$_invoke$arity$variadic = (function (opts,_){
var map__70548 = opts;
var map__70548__$1 = cljs.core.__destructure_map(map__70548);
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70548__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var subscribe_to_disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70548__$1,new cljs.core.Keyword(null,"subscribe-to-disabled?","subscribe-to-disabled?",-1843297485));
var extra_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70548__$1,new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843));
var subscribe_to_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70548__$1,new cljs.core.Keyword(null,"subscribe-to-classes","subscribe-to-classes",173193596));
var disabled_QMARK__sub = woolybear.ad.utils.subscribe_to(subscribe_to_disabled_QMARK_);
var classes_sub = woolybear.ad.utils.subscribe_to(subscribe_to_classes);
var click_dispatcher = woolybear.ad.utils.mk_dispatcher(on_click);
return (function() { 
var G__70614__delegate = function (___$1,children){
var disabled_QMARK_ = cljs.core.deref(disabled_QMARK__sub);
var dynamic_classes = cljs.core.deref(classes_sub);
var attrs = (function (){var G__70556 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),click_dispatcher,new cljs.core.Keyword(null,"class","class",-2030961996),woolybear.ad.utils.css__GT_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"wb-button","wb-button",-441506606),extra_classes,dynamic_classes], 0))], null);
if(cljs.core.truth_(disabled_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70556,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),"disabled");
} else {
return G__70556;
}
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),attrs], null),children);
};
var G__70614 = function (___$1,var_args){
var children = null;
if (arguments.length > 1) {
var G__70615__i = 0, G__70615__a = new Array(arguments.length -  1);
while (G__70615__i < G__70615__a.length) {G__70615__a[G__70615__i] = arguments[G__70615__i + 1]; ++G__70615__i;}
  children = new cljs.core.IndexedSeq(G__70615__a,0,null);
} 
return G__70614__delegate.call(this,___$1,children);};
G__70614.cljs$lang$maxFixedArity = 1;
G__70614.cljs$lang$applyTo = (function (arglist__70616){
var ___$1 = cljs.core.first(arglist__70616);
var children = cljs.core.rest(arglist__70616);
return G__70614__delegate(___$1,children);
});
G__70614.cljs$core$IFn$_invoke$arity$variadic = G__70614__delegate;
return G__70614;
})()
;
}));

(woolybear.ad.buttons.button.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(woolybear.ad.buttons.button.cljs$lang$applyTo = (function (seq70526){
var G__70527 = cljs.core.first(seq70526);
var seq70526__$1 = cljs.core.next(seq70526);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70527,seq70526__$1);
}));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("woolybear.ad.buttons","button","woolybear.ad.buttons/button",1188167706,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.Keyword("button","options","button/options",873575823),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.Keyword("button","options","button/options",873575823),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.Keyword(null,"children","children",-940561982)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("button","options","button/options",873575823),cljs.spec.alpha.rep_PLUS_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("button","options","button/options",873575823),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.Keyword("button","options","button/options",873575823),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_,null,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),null,null,null));
woolybear.ad.buttons.ok_button = (function woolybear$ad$buttons$ok_button(var_args){
var args__4870__auto__ = [];
var len__4864__auto___70617 = arguments.length;
var i__4865__auto___70618 = (0);
while(true){
if((i__4865__auto___70618 < len__4864__auto___70617)){
args__4870__auto__.push((arguments[i__4865__auto___70618]));

var G__70619 = (i__4865__auto___70618 + (1));
i__4865__auto___70618 = G__70619;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return woolybear.ad.buttons.ok_button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(woolybear.ad.buttons.ok_button.cljs$core$IFn$_invoke$arity$variadic = (function (opts,children){
var extra_classes = woolybear.ad.utils.css_PLUS_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"wb-ok-button","wb-ok-button",-25087973),null,new cljs.core.Keyword(null,"is-primary","is-primary",-1769000197),null], null), null)], 0));
var label = (function (){var or__4253__auto__ = children;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["OK"], null);
}
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.buttons.button,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843),extra_classes)], null),label);
}));

(woolybear.ad.buttons.ok_button.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(woolybear.ad.buttons.ok_button.cljs$lang$applyTo = (function (seq70557){
var G__70558 = cljs.core.first(seq70557);
var seq70557__$1 = cljs.core.next(seq70557);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70558,seq70557__$1);
}));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("woolybear.ad.buttons","ok-button","woolybear.ad.buttons/ok-button",1590387204,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.Keyword("button","options","button/options",873575823),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.Keyword("button","options","button/options",873575823),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.Keyword(null,"children","children",-940561982)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("button","options","button/options",873575823),cljs.spec.alpha.rep_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("button","options","button/options",873575823),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.Keyword("button","options","button/options",873575823),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_,null,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),null,null,null));
woolybear.ad.buttons.save_button = (function woolybear$ad$buttons$save_button(var_args){
var args__4870__auto__ = [];
var len__4864__auto___70620 = arguments.length;
var i__4865__auto___70621 = (0);
while(true){
if((i__4865__auto___70621 < len__4864__auto___70620)){
args__4870__auto__.push((arguments[i__4865__auto___70621]));

var G__70622 = (i__4865__auto___70621 + (1));
i__4865__auto___70621 = G__70622;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return woolybear.ad.buttons.save_button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(woolybear.ad.buttons.save_button.cljs$core$IFn$_invoke$arity$variadic = (function (opts,children){
var extra_classes = woolybear.ad.utils.css_PLUS_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"wb-save-button","wb-save-button",1886688443),null,new cljs.core.Keyword(null,"is-primary","is-primary",-1769000197),null], null), null)], 0));
var label = (function (){var or__4253__auto__ = children;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Save"], null);
}
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.buttons.button,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843),extra_classes)], null),label);
}));

(woolybear.ad.buttons.save_button.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(woolybear.ad.buttons.save_button.cljs$lang$applyTo = (function (seq70560){
var G__70561 = cljs.core.first(seq70560);
var seq70560__$1 = cljs.core.next(seq70560);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70561,seq70560__$1);
}));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("woolybear.ad.buttons","save-button","woolybear.ad.buttons/save-button",1428073543,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.Keyword("button","options","button/options",873575823),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.Keyword("button","options","button/options",873575823),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.Keyword(null,"children","children",-940561982)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("button","options","button/options",873575823),cljs.spec.alpha.rep_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("button","options","button/options",873575823),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.Keyword("button","options","button/options",873575823),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_,null,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),null,null,null));
woolybear.ad.buttons.delete_button = (function woolybear$ad$buttons$delete_button(var_args){
var args__4870__auto__ = [];
var len__4864__auto___70624 = arguments.length;
var i__4865__auto___70625 = (0);
while(true){
if((i__4865__auto___70625 < len__4864__auto___70624)){
args__4870__auto__.push((arguments[i__4865__auto___70625]));

var G__70626 = (i__4865__auto___70625 + (1));
i__4865__auto___70625 = G__70626;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return woolybear.ad.buttons.delete_button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(woolybear.ad.buttons.delete_button.cljs$core$IFn$_invoke$arity$variadic = (function (opts,children){
var extra_classes = woolybear.ad.utils.css_PLUS_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"is-danger","is-danger",-730494267),null,new cljs.core.Keyword(null,"wb-delete-button","wb-delete-button",-73703508),null], null), null)], 0));
var label = (function (){var or__4253__auto__ = children;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Delete"], null);
}
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.buttons.button,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843),extra_classes)], null),label);
}));

(woolybear.ad.buttons.delete_button.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(woolybear.ad.buttons.delete_button.cljs$lang$applyTo = (function (seq70567){
var G__70568 = cljs.core.first(seq70567);
var seq70567__$1 = cljs.core.next(seq70567);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70568,seq70567__$1);
}));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("woolybear.ad.buttons","delete-button","woolybear.ad.buttons/delete-button",1990296432,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.Keyword("button","options","button/options",873575823),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.Keyword("button","options","button/options",873575823),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.Keyword(null,"children","children",-940561982)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("button","options","button/options",873575823),cljs.spec.alpha.rep_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("button","options","button/options",873575823),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.Keyword("button","options","button/options",873575823),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_,null,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),null,null,null));
woolybear.ad.buttons.cancel_button = (function woolybear$ad$buttons$cancel_button(var_args){
var args__4870__auto__ = [];
var len__4864__auto___70634 = arguments.length;
var i__4865__auto___70635 = (0);
while(true){
if((i__4865__auto___70635 < len__4864__auto___70634)){
args__4870__auto__.push((arguments[i__4865__auto___70635]));

var G__70636 = (i__4865__auto___70635 + (1));
i__4865__auto___70635 = G__70636;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return woolybear.ad.buttons.cancel_button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(woolybear.ad.buttons.cancel_button.cljs$core$IFn$_invoke$arity$variadic = (function (opts,children){
var extra_classes = new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843).cljs$core$IFn$_invoke$arity$1(opts);
var extra_classes__$1 = woolybear.ad.utils.css_PLUS_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([extra_classes,new cljs.core.Keyword(null,"wb-cancel-button","wb-cancel-button",-861164105)], 0));
var label = (function (){var or__4253__auto__ = children;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cancel"], null);
}
})();
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843),extra_classes__$1);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.buttons.button,opts__$1], null),label);
}));

(woolybear.ad.buttons.cancel_button.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(woolybear.ad.buttons.cancel_button.cljs$lang$applyTo = (function (seq70573){
var G__70574 = cljs.core.first(seq70573);
var seq70573__$1 = cljs.core.next(seq70573);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70574,seq70573__$1);
}));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("woolybear.ad.buttons","cancel-button","woolybear.ad.buttons/cancel-button",1498143501,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.Keyword("button","options","button/options",873575823),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.Keyword("button","options","button/options",873575823),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.Keyword(null,"children","children",-940561982)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("button","options","button/options",873575823),cljs.spec.alpha.rep_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("button","options","button/options",873575823),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.Keyword("button","options","button/options",873575823),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_,null,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),null,null,null));
/**
 * Button with an X in it, for use as a close button
 */
woolybear.ad.buttons.close_button = (function woolybear$ad$buttons$close_button(opts){
var extra_classes = new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843).cljs$core$IFn$_invoke$arity$1(opts);
var extra_classes__$1 = woolybear.ad.utils.css_PLUS_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([extra_classes,new cljs.core.Keyword(null,"wb-close-button","wb-close-button",-787184140)], 0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.buttons.button,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843),extra_classes__$1),"\u2716\uFE0E"], null);
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("woolybear.ad.buttons","close-button","woolybear.ad.buttons/close-button",-798754876,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword("button","button-config","button/button-config",-1964629004)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword("button","button-config","button/button-config",-1964629004)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("button","button-config","button/button-config",-1964629004)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("button","button-config","button/button-config",-1964629004)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword("button","button-config","button/button-config",-1964629004)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_,null,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),null,null,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("tab-button","active?","tab-button/active?",2108029578),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("tab-button","panel-id","tab-button/panel-id",-528078203),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("tab-button","options","tab-button/options",606948439),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tab-button","panel-id","tab-button/panel-id",-528078203),new cljs.core.Keyword("tab-button","active?","tab-button/active?",2108029578)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("button","on-click","button/on-click",1001181053),new cljs.core.Keyword("button","subscribe-to-disabled?","button/subscribe-to-disabled?",1073454061),new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tab-button","panel-id","tab-button/panel-id",-528078203),new cljs.core.Keyword("tab-button","active?","tab-button/active?",2108029578)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("button","on-click","button/on-click",1001181053),new cljs.core.Keyword("button","subscribe-to-disabled?","button/subscribe-to-disabled?",1073454061),new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__70579){
return cljs.core.map_QMARK_(G__70579);
}),(function (G__70579){
return cljs.core.contains_QMARK_(G__70579,new cljs.core.Keyword(null,"panel-id","panel-id",2118466015));
}),(function (G__70579){
return cljs.core.contains_QMARK_(G__70579,new cljs.core.Keyword(null,"active?","active?",459499776));
})], null),(function (G__70579){
return ((cljs.core.map_QMARK_(G__70579)) && (((cljs.core.contains_QMARK_(G__70579,new cljs.core.Keyword(null,"panel-id","panel-id",2118466015))) && (cljs.core.contains_QMARK_(G__70579,new cljs.core.Keyword(null,"active?","active?",459499776))))));
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"subscribe-to-disabled?","subscribe-to-disabled?",-1843297485),new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843),new cljs.core.Keyword(null,"subscribe-to-classes","subscribe-to-classes",173193596)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tab-button","panel-id","tab-button/panel-id",-528078203),new cljs.core.Keyword("tab-button","active?","tab-button/active?",2108029578)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel-id","panel-id",2118466015),new cljs.core.Keyword(null,"active?","active?",459499776)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("button","on-click","button/on-click",1001181053),new cljs.core.Keyword("button","subscribe-to-disabled?","button/subscribe-to-disabled?",1073454061),new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"panel-id","panel-id",2118466015))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"active?","active?",459499776)))], null),null])));
/**
 * 
 *   A button intended for use as part of a tab bar or tab-panel. Takes all the same
 *   options as a regular button, plus a :panel-id keyword and an :active? option. Notice
 *   that :active? is a direct boolean value rather than a subscription. The assumption
 *   here is that each tab button will be part of a group of buttons managed by a
 *   parent container, and the parent container will take care of managing which tab
 *   button is active, using the :panel-id value to track which button is active.
 *   
 */
woolybear.ad.buttons.tab_button = (function woolybear$ad$buttons$tab_button(var_args){
var args__4870__auto__ = [];
var len__4864__auto___70637 = arguments.length;
var i__4865__auto___70638 = (0);
while(true){
if((i__4865__auto___70638 < len__4864__auto___70637)){
args__4870__auto__.push((arguments[i__4865__auto___70638]));

var G__70639 = (i__4865__auto___70638 + (1));
i__4865__auto___70638 = G__70639;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return woolybear.ad.buttons.tab_button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(woolybear.ad.buttons.tab_button.cljs$core$IFn$_invoke$arity$variadic = (function (opts,_){
var map__70584 = opts;
var map__70584__$1 = cljs.core.__destructure_map(map__70584);
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70584__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var subscribe_to_disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70584__$1,new cljs.core.Keyword(null,"subscribe-to-disabled?","subscribe-to-disabled?",-1843297485));
var extra_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70584__$1,new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843));
var subscribe_to_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70584__$1,new cljs.core.Keyword(null,"subscribe-to-classes","subscribe-to-classes",173193596));
var disabled_QMARK__sub = woolybear.ad.utils.subscribe_to(subscribe_to_disabled_QMARK_);
var classes_sub = woolybear.ad.utils.subscribe_to(subscribe_to_classes);
var click_dispatcher = woolybear.ad.utils.mk_dispatcher(on_click);
return (function() { 
var G__70661__delegate = function (p__70585,children){
var map__70586 = p__70585;
var map__70586__$1 = cljs.core.__destructure_map(map__70586);
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70586__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var disabled_QMARK_ = cljs.core.deref(disabled_QMARK__sub);
var dynamic_classes = cljs.core.deref(classes_sub);
var attrs = (function (){var G__70587 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),click_dispatcher,new cljs.core.Keyword(null,"class","class",-2030961996),woolybear.ad.utils.css__GT_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"wb-button","wb-button",-441506606),new cljs.core.Keyword(null,"wb-tab-button","wb-tab-button",-1075578352),(cljs.core.truth_(active_QMARK_)?new cljs.core.Keyword(null,"active","active",1895962068):null),new cljs.core.Keyword(null,"button","button",1456579943),extra_classes,dynamic_classes], 0))], null);
if(cljs.core.truth_(disabled_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70587,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),"disabled");
} else {
return G__70587;
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.level-item","div.level-item",-68610818),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),attrs], null),children)], null);
};
var G__70661 = function (p__70585,var_args){
var children = null;
if (arguments.length > 1) {
var G__70662__i = 0, G__70662__a = new Array(arguments.length -  1);
while (G__70662__i < G__70662__a.length) {G__70662__a[G__70662__i] = arguments[G__70662__i + 1]; ++G__70662__i;}
  children = new cljs.core.IndexedSeq(G__70662__a,0,null);
} 
return G__70661__delegate.call(this,p__70585,children);};
G__70661.cljs$lang$maxFixedArity = 1;
G__70661.cljs$lang$applyTo = (function (arglist__70663){
var p__70585 = cljs.core.first(arglist__70663);
var children = cljs.core.rest(arglist__70663);
return G__70661__delegate(p__70585,children);
});
G__70661.cljs$core$IFn$_invoke$arity$variadic = G__70661__delegate;
return G__70661;
})()
;
}));

(woolybear.ad.buttons.tab_button.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(woolybear.ad.buttons.tab_button.cljs$lang$applyTo = (function (seq70582){
var G__70583 = cljs.core.first(seq70582);
var seq70582__$1 = cljs.core.next(seq70582);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70583,seq70582__$1);
}));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("woolybear.ad.buttons","tab-button","woolybear.ad.buttons/tab-button",-435632506,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.Keyword("tab-button","options","tab-button/options",606948439),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.Keyword("tab-button","options","tab-button/options",606948439),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.Keyword(null,"children","children",-940561982)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tab-button","options","tab-button/options",606948439),cljs.spec.alpha.rep_PLUS_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tab-button","options","tab-button/options",606948439),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.Keyword("tab-button","options","tab-button/options",606948439),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_,null,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),null,null,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("toggle","on?","toggle/on?",794153486),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("toggle","subscribe-to-on?","toggle/subscribe-to-on?",-1463844433),new cljs.core.Keyword("ad","subscription","ad/subscription",1949020411),new cljs.core.Keyword("ad","subscription","ad/subscription",1949020411));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("toggle","class-for-on","toggle/class-for-on",1808462138),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("toggle","class-for-off","toggle/class-for-off",2022295034),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("toggle","on-click","toggle/on-click",1578088411),new cljs.core.Keyword("ad","event-dispatcher","ad/event-dispatcher",1643883990),new cljs.core.Keyword("ad","event-dispatcher","ad/event-dispatcher",1643883990));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("toggle","options","toggle/options",1387342253),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("toggle","on-click","toggle/on-click",1578088411)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("toggle","subscribe-to-on?","toggle/subscribe-to-on?",-1463844433),new cljs.core.Keyword("toggle","class-for-on","toggle/class-for-on",1808462138),new cljs.core.Keyword("toggle","class-for-off","toggle/class-for-off",2022295034)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("toggle","on-click","toggle/on-click",1578088411)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("toggle","subscribe-to-on?","toggle/subscribe-to-on?",-1463844433),new cljs.core.Keyword("toggle","class-for-on","toggle/class-for-on",1808462138),new cljs.core.Keyword("toggle","class-for-off","toggle/class-for-off",2022295034)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__70594){
return cljs.core.map_QMARK_(G__70594);
}),(function (G__70594){
return cljs.core.contains_QMARK_(G__70594,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
})], null),(function (G__70594){
return ((cljs.core.map_QMARK_(G__70594)) && (cljs.core.contains_QMARK_(G__70594,new cljs.core.Keyword(null,"on-click","on-click",1632826543))));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subscribe-to-on?","subscribe-to-on?",-142555941),new cljs.core.Keyword(null,"class-for-on","class-for-on",-1743540978),new cljs.core.Keyword(null,"class-for-off","class-for-off",902298318)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("toggle","on-click","toggle/on-click",1578088411)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-click","on-click",1632826543)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("toggle","subscribe-to-on?","toggle/subscribe-to-on?",-1463844433),new cljs.core.Keyword("toggle","class-for-on","toggle/class-for-on",1808462138),new cljs.core.Keyword("toggle","class-for-off","toggle/class-for-off",2022295034)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"on-click","on-click",1632826543)))], null),null])));
/**
 * 
 *   A button that has different appearances depending on whether it is "on" or "off".
 *   This is a wrapper component for the base button component that uses the value of :on?
 *   or :subscribe-to-on? in order to (possibly) add a CSS class to the :extra-classes option.
 *   If the button is :on?, adds the :class-for-on CSS class, otherwise adds the optional
 *   class-for-off CSS class, if any.
 *   
 */
woolybear.ad.buttons.toggle_button = (function woolybear$ad$buttons$toggle_button(var_args){
var args__4870__auto__ = [];
var len__4864__auto___70685 = arguments.length;
var i__4865__auto___70686 = (0);
while(true){
if((i__4865__auto___70686 < len__4864__auto___70685)){
args__4870__auto__.push((arguments[i__4865__auto___70686]));

var G__70687 = (i__4865__auto___70686 + (1));
i__4865__auto___70686 = G__70687;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return woolybear.ad.buttons.toggle_button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(woolybear.ad.buttons.toggle_button.cljs$core$IFn$_invoke$arity$variadic = (function (opts,_){
var map__70601 = opts;
var map__70601__$1 = cljs.core.__destructure_map(map__70601);
var subscribe_to_on_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70601__$1,new cljs.core.Keyword(null,"subscribe-to-on?","subscribe-to-on?",-142555941));
var subscribe_to_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70601__$1,new cljs.core.Keyword(null,"subscribe-to-classes","subscribe-to-classes",173193596));
var on_QMARK__sub = woolybear.ad.utils.subscribe_to(subscribe_to_on_QMARK_);
var classes_sub = woolybear.ad.utils.subscribe_to(subscribe_to_classes);
var button_classes_state = reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function() { 
var G__70688__delegate = function (opts__$1,children){
var map__70607 = opts__$1;
var map__70607__$1 = cljs.core.__destructure_map(map__70607);
var class_for_on = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70607__$1,new cljs.core.Keyword(null,"class-for-on","class-for-on",-1743540978));
var class_for_off = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70607__$1,new cljs.core.Keyword(null,"class-for-off","class-for-off",902298318));
var on_QMARK_ = cljs.core.deref(on_QMARK__sub);
var dynamic_classes = cljs.core.deref(classes_sub);
var button_classes = (cljs.core.truth_(on_QMARK_)?woolybear.ad.utils.css_PLUS_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dynamic_classes,cljs.core.PersistentHashSet.createAsIfByAssoc([class_for_on,new cljs.core.Keyword(null,"wb-toggle-button","wb-toggle-button",228773208)])], 0)):(((class_for_off == null))?woolybear.ad.utils.css_PLUS_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dynamic_classes,new cljs.core.Keyword(null,"wb-toggle-button","wb-toggle-button",228773208)], 0)):woolybear.ad.utils.css_PLUS_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dynamic_classes,cljs.core.PersistentHashSet.createAsIfByAssoc([class_for_off,new cljs.core.Keyword(null,"wb-toggle-button","wb-toggle-button",228773208)])], 0))
));
cljs.core.reset_BANG_(button_classes_state,button_classes);

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.buttons.button,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$1,new cljs.core.Keyword(null,"subscribe-to-classes","subscribe-to-classes",173193596),button_classes_state)], null),children);
};
var G__70688 = function (opts__$1,var_args){
var children = null;
if (arguments.length > 1) {
var G__70689__i = 0, G__70689__a = new Array(arguments.length -  1);
while (G__70689__i < G__70689__a.length) {G__70689__a[G__70689__i] = arguments[G__70689__i + 1]; ++G__70689__i;}
  children = new cljs.core.IndexedSeq(G__70689__a,0,null);
} 
return G__70688__delegate.call(this,opts__$1,children);};
G__70688.cljs$lang$maxFixedArity = 1;
G__70688.cljs$lang$applyTo = (function (arglist__70690){
var opts__$1 = cljs.core.first(arglist__70690);
var children = cljs.core.rest(arglist__70690);
return G__70688__delegate(opts__$1,children);
});
G__70688.cljs$core$IFn$_invoke$arity$variadic = G__70688__delegate;
return G__70688;
})()
;
}));

(woolybear.ad.buttons.toggle_button.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(woolybear.ad.buttons.toggle_button.cljs$lang$applyTo = (function (seq70595){
var G__70596 = cljs.core.first(seq70595);
var seq70595__$1 = cljs.core.next(seq70595);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70596,seq70595__$1);
}));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("woolybear.ad.buttons","toggle-button","woolybear.ad.buttons/toggle-button",2011481620,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.Keyword("toggle-button","options","toggle-button/options",-1544704714),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.Keyword("toggle-button","options","toggle-button/options",-1544704714),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.Keyword(null,"children","children",-940561982)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("toggle-button","options","toggle-button/options",-1544704714),cljs.spec.alpha.rep_PLUS_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("toggle-button","options","toggle-button/options",-1544704714),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.Keyword("toggle-button","options","toggle-button/options",-1544704714),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_,null,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),null,null,null));

//# sourceMappingURL=woolybear.ad.buttons.js.map
