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
var G__22791__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__22791 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22792__i = 0, G__22792__a = new Array(arguments.length -  0);
while (G__22792__i < G__22792__a.length) {G__22792__a[G__22792__i] = arguments[G__22792__i + 0]; ++G__22792__i;}
  args = new cljs.core.IndexedSeq(G__22792__a,0,null);
} 
return G__22791__delegate.call(this,args);};
G__22791.cljs$lang$maxFixedArity = 0;
G__22791.cljs$lang$applyTo = (function (arglist__22793){
var args = cljs.core.seq(arglist__22793);
return G__22791__delegate(args);
});
G__22791.cljs$core$IFn$_invoke$arity$variadic = G__22791__delegate;
return G__22791;
})()
);

(o.error = (function() { 
var G__22794__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__22794 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22795__i = 0, G__22795__a = new Array(arguments.length -  0);
while (G__22795__i < G__22795__a.length) {G__22795__a[G__22795__i] = arguments[G__22795__i + 0]; ++G__22795__i;}
  args = new cljs.core.IndexedSeq(G__22795__a,0,null);
} 
return G__22794__delegate.call(this,args);};
G__22794.cljs$lang$maxFixedArity = 0;
G__22794.cljs$lang$applyTo = (function (arglist__22796){
var args = cljs.core.seq(arglist__22796);
return G__22794__delegate(args);
});
G__22794.cljs$core$IFn$_invoke$arity$variadic = G__22794__delegate;
return G__22794;
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
