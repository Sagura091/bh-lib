goog.provide('woolybear.ad.demo.src.catalog.utils');
woolybear.ad.demo.src.catalog.utils.code_block = (function woolybear$ad$demo.src.catalog$utils$code_block(code){
return cljs.core.into.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.code-block","textarea.code-block",-2008356768),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),code], null)], null));
});
woolybear.ad.demo.src.catalog.utils.lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
woolybear.ad.demo.src.catalog.utils.pp_vector = (function woolybear$ad$demo.src.catalog$utils$pp_vector(v,prefix){
return clojure.string.trimr(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,child){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(result),cljs.core.str.cljs$core$IFn$_invoke$arity$1((woolybear.ad.demo.src.catalog.utils.pps.cljs$core$IFn$_invoke$arity$2 ? woolybear.ad.demo.src.catalog.utils.pps.cljs$core$IFn$_invoke$arity$2(child,prefix) : woolybear.ad.demo.src.catalog.utils.pps.call(null,child,prefix)))," "].join('');
}),"",v));
});
woolybear.ad.demo.src.catalog.utils.pp_map = (function woolybear$ad$demo.src.catalog$utils$pp_map(m,prefix){
var short_prefix = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.butlast(prefix));
return clojure.string.trimr(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__50645){
var vec__50646 = p__50645;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50646,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50646,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(result),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((woolybear.ad.demo.src.catalog.utils.pps.cljs$core$IFn$_invoke$arity$2 ? woolybear.ad.demo.src.catalog.utils.pps.cljs$core$IFn$_invoke$arity$2(v,prefix) : woolybear.ad.demo.src.catalog.utils.pps.call(null,v,prefix))),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(short_prefix)].join('');
}),"",m));
});
woolybear.ad.demo.src.catalog.utils.pps = (function woolybear$ad$demo.src.catalog$utils$pps(var_args){
var G__50653 = arguments.length;
switch (G__50653) {
case 1:
return woolybear.ad.demo.src.catalog.utils.pps.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return woolybear.ad.demo.src.catalog.utils.pps.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(woolybear.ad.demo.src.catalog.utils.pps.cljs$core$IFn$_invoke$arity$1 = (function (src){
return woolybear.ad.demo.src.catalog.utils.pps.cljs$core$IFn$_invoke$arity$2(src,"");
}));

(woolybear.ad.demo.src.catalog.utils.pps.cljs$core$IFn$_invoke$arity$2 = (function (src,prefix){
if((src instanceof cljs.core.PersistentVector)){
return ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"[",woolybear.ad.demo.src.catalog.utils.pp_vector(src,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"  "].join('')),"]"].join('');
} else {
if((src instanceof cljs.core.PersistentArrayMap)){
return ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"{",woolybear.ad.demo.src.catalog.utils.pp_map(src,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"  "].join('')),"}"].join('');
} else {
if((src instanceof cljs.core.PersistentHashSet)){
return ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"#{",woolybear.ad.demo.src.catalog.utils.pp_vector(src,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"  "].join('')),"}"].join('');
} else {
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0));

}
}
}
}));

(woolybear.ad.demo.src.catalog.utils.pps.cljs$lang$maxFixedArity = 2);

woolybear.ad.demo.src.catalog.utils.demo = (function woolybear$ad$demo.src.catalog$utils$demo(var_args){
var args__4870__auto__ = [];
var len__4864__auto___50671 = arguments.length;
var i__4865__auto___50676 = (0);
while(true){
if((i__4865__auto___50676 < len__4864__auto___50671)){
args__4870__auto__.push((arguments[i__4865__auto___50676]));

var G__50677 = (i__4865__auto___50676 + (1));
i__4865__auto___50676 = G__50677;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return woolybear.ad.demo.src.catalog.utils.demo.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(woolybear.ad.demo.src.catalog.utils.demo.cljs$core$IFn$_invoke$arity$variadic = (function (name,children){
var vec__50660 = ((typeof cljs.core.first(children) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(children),cljs.core.rest(children)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,children], null));
var notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50660,(0),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50660,(1),null);
var vec__50663 = children__$1;
var component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50663,(0),null);
var src = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50663,(1),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.demo-container","div.demo-container",839349501),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.demo-name","div.demo-name",509127859),name], null),(cljs.core.truth_(notes)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_markdown,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),notes], null)], null):""),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.demo-display","div.demo-display",-13245258),component], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.containers.spoiler,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show-label","show-label",2070422077),"Show Code",new cljs.core.Keyword(null,"hide-label","hide-label",-92736657),"Hide Code"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.demo.src.catalog.utils.code_block,clojure.string.triml(woolybear.ad.demo.src.catalog.utils.pps.cljs$core$IFn$_invoke$arity$1(src))], null)], null)], null);
}));

(woolybear.ad.demo.src.catalog.utils.demo.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(woolybear.ad.demo.src.catalog.utils.demo.cljs$lang$applyTo = (function (seq50658){
var G__50659 = cljs.core.first(seq50658);
var seq50658__$1 = cljs.core.next(seq50658);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50659,seq50658__$1);
}));


//# sourceMappingURL=woolybear.ad.demo.src.catalog.utils.js.map
