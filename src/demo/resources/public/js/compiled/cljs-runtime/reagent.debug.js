goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__42883__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__42883 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42884__i = 0, G__42884__a = new Array(arguments.length -  0);
while (G__42884__i < G__42884__a.length) {G__42884__a[G__42884__i] = arguments[G__42884__i + 0]; ++G__42884__i;}
  args = new cljs.core.IndexedSeq(G__42884__a,0,null);
} 
return G__42883__delegate.call(this,args);};
G__42883.cljs$lang$maxFixedArity = 0;
G__42883.cljs$lang$applyTo = (function (arglist__42885){
var args = cljs.core.seq(arglist__42885);
return G__42883__delegate(args);
});
G__42883.cljs$core$IFn$_invoke$arity$variadic = G__42883__delegate;
return G__42883;
})()
);

(o.error = (function() { 
var G__42886__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__42886 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42887__i = 0, G__42887__a = new Array(arguments.length -  0);
while (G__42887__i < G__42887__a.length) {G__42887__a[G__42887__i] = arguments[G__42887__i + 0]; ++G__42887__i;}
  args = new cljs.core.IndexedSeq(G__42887__a,0,null);
} 
return G__42886__delegate.call(this,args);};
G__42886.cljs$lang$maxFixedArity = 0;
G__42886.cljs$lang$applyTo = (function (arglist__42888){
var args = cljs.core.seq(arglist__42888);
return G__42886__delegate(args);
});
G__42886.cljs$core$IFn$_invoke$arity$variadic = G__42886__delegate;
return G__42886;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
