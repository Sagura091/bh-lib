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
var G__42884__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__42884 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42885__i = 0, G__42885__a = new Array(arguments.length -  0);
while (G__42885__i < G__42885__a.length) {G__42885__a[G__42885__i] = arguments[G__42885__i + 0]; ++G__42885__i;}
  args = new cljs.core.IndexedSeq(G__42885__a,0,null);
} 
return G__42884__delegate.call(this,args);};
G__42884.cljs$lang$maxFixedArity = 0;
G__42884.cljs$lang$applyTo = (function (arglist__42886){
var args = cljs.core.seq(arglist__42886);
return G__42884__delegate(args);
});
G__42884.cljs$core$IFn$_invoke$arity$variadic = G__42884__delegate;
return G__42884;
})()
);

(o.error = (function() { 
var G__42887__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__42887 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42888__i = 0, G__42888__a = new Array(arguments.length -  0);
while (G__42888__i < G__42888__a.length) {G__42888__a[G__42888__i] = arguments[G__42888__i + 0]; ++G__42888__i;}
  args = new cljs.core.IndexedSeq(G__42888__a,0,null);
} 
return G__42887__delegate.call(this,args);};
G__42887.cljs$lang$maxFixedArity = 0;
G__42887.cljs$lang$applyTo = (function (arglist__42889){
var args = cljs.core.seq(arglist__42889);
return G__42887__delegate(args);
});
G__42887.cljs$core$IFn$_invoke$arity$variadic = G__42887__delegate;
return G__42887;
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
