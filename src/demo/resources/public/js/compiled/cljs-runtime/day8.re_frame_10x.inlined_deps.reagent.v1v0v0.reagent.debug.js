goog.provide('day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug');
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.has_console = (typeof console !== 'undefined');
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.tracking = false;
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.warnings !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.track_console !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__47325__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__47325 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47326__i = 0, G__47326__a = new Array(arguments.length -  0);
while (G__47326__i < G__47326__a.length) {G__47326__a[G__47326__i] = arguments[G__47326__i + 0]; ++G__47326__i;}
  args = new cljs.core.IndexedSeq(G__47326__a,0,null);
} 
return G__47325__delegate.call(this,args);};
G__47325.cljs$lang$maxFixedArity = 0;
G__47325.cljs$lang$applyTo = (function (arglist__47327){
var args = cljs.core.seq(arglist__47327);
return G__47325__delegate(args);
});
G__47325.cljs$core$IFn$_invoke$arity$variadic = G__47325__delegate;
return G__47325;
})()
);

(o.error = (function() { 
var G__47328__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__47328 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47329__i = 0, G__47329__a = new Array(arguments.length -  0);
while (G__47329__i < G__47329__a.length) {G__47329__a[G__47329__i] = arguments[G__47329__i + 0]; ++G__47329__i;}
  args = new cljs.core.IndexedSeq(G__47329__a,0,null);
} 
return G__47328__delegate.call(this,args);};
G__47328.cljs$lang$maxFixedArity = 0;
G__47328.cljs$lang$applyTo = (function (arglist__47330){
var args = cljs.core.seq(arglist__47330);
return G__47328__delegate(args);
});
G__47328.cljs$core$IFn$_invoke$arity$variadic = G__47328__delegate;
return G__47328;
})()
);

return o;
})();
}
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.track_warnings = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$debug$track_warnings(f){
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.tracking = true);

cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.warnings);
cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.warnings,null);

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.js.map
