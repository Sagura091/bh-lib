goog.provide('loom.alg_generic');
/**
 * Using a map of nodes-to-preds, traces a node's family tree back to the
 *   source. Cycles are not accounted for.
 */
loom.alg_generic.trace_path = (function loom$alg_generic$trace_path(preds,node){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(preds,node));
});
/**
 * Returns a lazy seq of all non-looping path vectors starting with
 *   [<start-node>]
 */
loom.alg_generic.paths = (function loom$alg_generic$paths(preds,path){
var this_node = cljs.core.peek(path);
return cljs.core.cons(path,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__59965_SHARP_){
var G__59966 = preds;
var G__59967 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,p1__59965_SHARP_);
return (loom.alg_generic.paths.cljs$core$IFn$_invoke$arity$2 ? loom.alg_generic.paths.cljs$core$IFn$_invoke$arity$2(G__59966,G__59967) : loom.alg_generic.paths.call(null,G__59966,G__59967));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__59964_SHARP_){
return cljs.core.not_any_QMARK_((function (edge){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_node,p1__59964_SHARP_], null));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),path));
}),(preds.cljs$core$IFn$_invoke$arity$1 ? preds.cljs$core$IFn$_invoke$arity$1(this_node) : preds.call(null,this_node)))], 0)));
});
/**
 * Given a function and a starting node, returns all possible paths
 *   back to source. Cycles are not accounted for.
 */
loom.alg_generic.trace_paths = (function loom$alg_generic$trace_paths(preds,start){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__59971_SHARP_){
var G__59972 = cljs.core.peek(p1__59971_SHARP_);
return (preds.cljs$core$IFn$_invoke$arity$1 ? preds.cljs$core$IFn$_invoke$arity$1(G__59972) : preds.call(null,G__59972));
}),loom.alg_generic.paths(preds,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null)));
});
/**
 * Converts a map of the form {node predecessor} to a spanning tree of the
 *   form {node [successors]}
 */
loom.alg_generic.preds__GT_span = (function loom$alg_generic$preds__GT_span(preds){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (span,p__59979){
var vec__59980 = p__59979;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59980,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59980,(1),null);
if(cljs.core.truth_(p)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(span,p,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__59983 = p;
var G__59984 = cljs.core.PersistentVector.EMPTY;
return (span.cljs$core$IFn$_invoke$arity$2 ? span.cljs$core$IFn$_invoke$arity$2(G__59983,G__59984) : span.call(null,G__59983,G__59984));
})(),n));
} else {
return span;
}
}),cljs.core.PersistentArrayMap.EMPTY,preds);
});
/**
 * Traverses a graph depth-first preorder from start, successors being
 *   a function that returns direct successors for the node. Returns a
 *   lazy seq of nodes.
 */
loom.alg_generic.pre_traverse = (function loom$alg_generic$pre_traverse(var_args){
var args__4870__auto__ = [];
var len__4864__auto___60376 = arguments.length;
var i__4865__auto___60377 = (0);
while(true){
if((i__4865__auto___60377 < len__4864__auto___60376)){
args__4870__auto__.push((arguments[i__4865__auto___60377]));

var G__60378 = (i__4865__auto___60377 + (1));
i__4865__auto___60377 = G__60378;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__59988){
var map__59989 = p__59988;
var map__59989__$1 = cljs.core.__destructure_map(map__59989);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__59989__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = (function loom$alg_generic$step(stack,seen__$1){
var temp__5753__auto__ = cljs.core.peek(stack);
if(cljs.core.truth_(temp__5753__auto__)){
var node = temp__5753__auto__;
if(cljs.core.contains_QMARK_(seen__$1,node)){
return loom$alg_generic$step(cljs.core.pop(stack),seen__$1);
} else {
var seen__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,node);
var nbrs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(seen__$2,(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(node) : successors.call(null,node)));
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons(node,loom$alg_generic$step(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(stack),nbrs),seen__$2));
}),null,null));
}
} else {
return null;
}
});
return step(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null),seen);
}));

(loom.alg_generic.pre_traverse.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(loom.alg_generic.pre_traverse.cljs$lang$applyTo = (function (seq59985){
var G__59986 = cljs.core.first(seq59985);
var seq59985__$1 = cljs.core.next(seq59985);
var G__59987 = cljs.core.first(seq59985__$1);
var seq59985__$2 = cljs.core.next(seq59985__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59986,G__59987,seq59985__$2);
}));

/**
 * Traverses a graph depth-first preorder from start, successors being
 *   a function that returns direct successors for the node. Returns a
 *   lazy seq of edges, each edge being a vector [source-node dest-node].
 *   Note that for undirected graphs each edge will be returned twice,
 *   once for each direction.
 */
loom.alg_generic.pre_edge_traverse = (function loom$alg_generic$pre_edge_traverse(var_args){
var args__4870__auto__ = [];
var len__4864__auto___60381 = arguments.length;
var i__4865__auto___60382 = (0);
while(true){
if((i__4865__auto___60382 < len__4864__auto___60381)){
args__4870__auto__.push((arguments[i__4865__auto___60382]));

var G__60383 = (i__4865__auto___60382 + (1));
i__4865__auto___60382 = G__60383;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__60011){
var map__60012 = p__60011;
var map__60012__$1 = cljs.core.__destructure_map(map__60012);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60012__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = (function loom$alg_generic$step(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1){
while(true){
var temp__5751__auto__ = cljs.core.first(nbrs);
if(cljs.core.truth_(temp__5751__auto__)){
var nbr = temp__5751__auto__;
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null),(new cljs.core.LazySeq(null,((function (successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5751__auto__,map__60012,map__60012__$1,seen){
return (function (){
var seen__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,start__$1);
if(cljs.core.truth_((seen__$2.cljs$core$IFn$_invoke$arity$1 ? seen__$2.cljs$core$IFn$_invoke$arity$1(nbr) : seen__$2.call(null,nbr)))){
return loom$alg_generic$step(successors__$1,start__$1,cljs.core.next(nbrs),stack,nbrstack,seen__$2);
} else {
return loom$alg_generic$step(successors__$1,nbr,(successors__$1.cljs$core$IFn$_invoke$arity$1 ? successors__$1.cljs$core$IFn$_invoke$arity$1(nbr) : successors__$1.call(null,nbr)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,start__$1),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nbrstack,cljs.core.next(nbrs)),seen__$2);
}
});})(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5751__auto__,map__60012,map__60012__$1,seen))
,null,null)));
} else {
var temp__5753__auto__ = cljs.core.peek(stack);
if(cljs.core.truth_(temp__5753__auto__)){
var parent = temp__5753__auto__;
var G__60384 = successors__$1;
var G__60385 = parent;
var G__60386 = cljs.core.peek(nbrstack);
var G__60387 = cljs.core.pop(stack);
var G__60388 = cljs.core.pop(nbrstack);
var G__60389 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,start__$1);
successors__$1 = G__60384;
start__$1 = G__60385;
nbrs = G__60386;
stack = G__60387;
nbrstack = G__60388;
seen__$1 = G__60389;
continue;
} else {
return null;
}
}
break;
}
});
if(cljs.core.truth_((seen.cljs$core$IFn$_invoke$arity$1 ? seen.cljs$core$IFn$_invoke$arity$1(start) : seen.call(null,start)))){
return null;
} else {
return step(successors,start,(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(start) : successors.call(null,start)),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,start));
}
}));

(loom.alg_generic.pre_edge_traverse.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(loom.alg_generic.pre_edge_traverse.cljs$lang$applyTo = (function (seq59999){
var G__60000 = cljs.core.first(seq59999);
var seq59999__$1 = cljs.core.next(seq59999);
var G__60001 = cljs.core.first(seq59999__$1);
var seq59999__$2 = cljs.core.next(seq59999__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60000,G__60001,seq59999__$2);
}));

/**
 * Returns a depth-first spanning tree of the form {node [successors]}
 */
loom.alg_generic.pre_span = (function loom$alg_generic$pre_span(var_args){
var args__4870__auto__ = [];
var len__4864__auto___60391 = arguments.length;
var i__4865__auto___60392 = (0);
while(true){
if((i__4865__auto___60392 < len__4864__auto___60391)){
args__4870__auto__.push((arguments[i__4865__auto___60392]));

var G__60393 = (i__4865__auto___60392 + (1));
i__4865__auto___60392 = G__60393;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__60028){
var map__60030 = p__60028;
var map__60030__$1 = cljs.core.__destructure_map(map__60030);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60030__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60030__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
var seen__$1 = seen;
var preds = cljs.core.PersistentArrayMap.createAsIfByAssoc([start,null]);
var stack = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null);
while(true){
if(cljs.core.empty_QMARK_(stack)){
if(cljs.core.truth_(return_seen)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loom.alg_generic.preds__GT_span(preds),seen__$1], null);
} else {
return loom.alg_generic.preds__GT_span(preds);
}
} else {
var v = cljs.core.peek(stack);
var seen__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,v);
var temp__5751__auto__ = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(seen__$2,(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(v) : successors.call(null,v))));
if(cljs.core.truth_(temp__5751__auto__)){
var u = temp__5751__auto__;
var G__60395 = seen__$2;
var G__60396 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(preds,u,v);
var G__60397 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,u);
seen__$1 = G__60395;
preds = G__60396;
stack = G__60397;
continue;
} else {
var G__60398 = seen__$2;
var G__60399 = preds;
var G__60400 = cljs.core.pop(stack);
seen__$1 = G__60398;
preds = G__60399;
stack = G__60400;
continue;
}
}
break;
}
}));

(loom.alg_generic.pre_span.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(loom.alg_generic.pre_span.cljs$lang$applyTo = (function (seq60023){
var G__60024 = cljs.core.first(seq60023);
var seq60023__$1 = cljs.core.next(seq60023);
var G__60025 = cljs.core.first(seq60023__$1);
var seq60023__$2 = cljs.core.next(seq60023__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60024,G__60025,seq60023__$2);
}));

/**
 * Traverses a graph depth-first postorder from start, successors
 *   being a function that returns adjacent nodes. Returns a vector
 */
loom.alg_generic.post_traverse = (function loom$alg_generic$post_traverse(var_args){
var args__4870__auto__ = [];
var len__4864__auto___60401 = arguments.length;
var i__4865__auto___60402 = (0);
while(true){
if((i__4865__auto___60402 < len__4864__auto___60401)){
args__4870__auto__.push((arguments[i__4865__auto___60402]));

var G__60403 = (i__4865__auto___60402 + (1));
i__4865__auto___60402 = G__60403;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__60041){
var map__60042 = p__60041;
var map__60042__$1 = cljs.core.__destructure_map(map__60042);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60042__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60042__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
var seen__$1 = seen;
var result = cljs.core.PersistentVector.EMPTY;
var stack = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null);
while(true){
if(cljs.core.empty_QMARK_(stack)){
if(cljs.core.truth_(return_seen)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,seen__$1], null);
} else {
return result;
}
} else {
var v = cljs.core.peek(stack);
var seen__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,v);
var nbrs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(seen__$2,(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(v) : successors.call(null,v)));
if(cljs.core.empty_QMARK_(nbrs)){
var G__60405 = seen__$2;
var G__60406 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,v);
var G__60407 = cljs.core.pop(stack);
seen__$1 = G__60405;
result = G__60406;
stack = G__60407;
continue;
} else {
var G__60408 = seen__$2;
var G__60409 = result;
var G__60410 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.first(nbrs));
seen__$1 = G__60408;
result = G__60409;
stack = G__60410;
continue;
}
}
break;
}
}));

(loom.alg_generic.post_traverse.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(loom.alg_generic.post_traverse.cljs$lang$applyTo = (function (seq60034){
var G__60035 = cljs.core.first(seq60034);
var seq60034__$1 = cljs.core.next(seq60034);
var G__60036 = cljs.core.first(seq60034__$1);
var seq60034__$2 = cljs.core.next(seq60034__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60035,G__60036,seq60034__$2);
}));

/**
 * Traverses a graph depth-first postorder from start, successors being
 *   a function that returns direct successors for the node. Returns a
 *   seq of edges, each edge being a vector [source-node dest-node].
 *   Note that for undirected graphs each edge will be returned twice,
 *   once for each direction.
 */
loom.alg_generic.post_edge_traverse = (function loom$alg_generic$post_edge_traverse(var_args){
var args__4870__auto__ = [];
var len__4864__auto___60411 = arguments.length;
var i__4865__auto___60412 = (0);
while(true){
if((i__4865__auto___60412 < len__4864__auto___60411)){
args__4870__auto__.push((arguments[i__4865__auto___60412]));

var G__60413 = (i__4865__auto___60412 + (1));
i__4865__auto___60412 = G__60413;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__60052){
var map__60053 = p__60052;
var map__60053__$1 = cljs.core.__destructure_map(map__60053);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60053__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60053__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
if(cljs.core.truth_((seen.cljs$core$IFn$_invoke$arity$1 ? seen.cljs$core$IFn$_invoke$arity$1(start) : seen.call(null,start)))){
if(cljs.core.truth_(return_seen)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,seen], null);
} else {
return null;
}
} else {
var start__$1 = start;
var nbrs = (successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(start__$1) : successors.call(null,start__$1));
var stack = cljs.core.PersistentVector.EMPTY;
var nbrstack = cljs.core.PersistentVector.EMPTY;
var seen__$1 = seen;
var edges = cljs.core.List.EMPTY;
while(true){
var seen__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,start__$1);
var temp__5751__auto__ = cljs.core.first(nbrs);
if(cljs.core.truth_(temp__5751__auto__)){
var nbr = temp__5751__auto__;
if(cljs.core.truth_((seen__$2.cljs$core$IFn$_invoke$arity$1 ? seen__$2.cljs$core$IFn$_invoke$arity$1(nbr) : seen__$2.call(null,nbr)))){
var G__60414 = start__$1;
var G__60415 = cljs.core.next(nbrs);
var G__60416 = stack;
var G__60417 = nbrstack;
var G__60418 = seen__$2;
var G__60419 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__60414;
nbrs = G__60415;
stack = G__60416;
nbrstack = G__60417;
seen__$1 = G__60418;
edges = G__60419;
continue;
} else {
var G__60420 = nbr;
var G__60421 = (successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(nbr) : successors.call(null,nbr));
var G__60422 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,start__$1);
var G__60423 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nbrstack,cljs.core.next(nbrs));
var G__60424 = seen__$2;
var G__60425 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__60420;
nbrs = G__60421;
stack = G__60422;
nbrstack = G__60423;
seen__$1 = G__60424;
edges = G__60425;
continue;
}
} else {
var temp__5751__auto____$1 = cljs.core.peek(stack);
if(cljs.core.truth_(temp__5751__auto____$1)){
var parent = temp__5751__auto____$1;
var G__60426 = parent;
var G__60427 = cljs.core.peek(nbrstack);
var G__60428 = cljs.core.pop(stack);
var G__60429 = cljs.core.pop(nbrstack);
var G__60430 = seen__$2;
var G__60431 = edges;
start__$1 = G__60426;
nbrs = G__60427;
stack = G__60428;
nbrstack = G__60429;
seen__$1 = G__60430;
edges = G__60431;
continue;
} else {
if(cljs.core.truth_(return_seen)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [edges,seen__$2], null);
} else {
return edges;
}
}
}
break;
}
}
}));

(loom.alg_generic.post_edge_traverse.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(loom.alg_generic.post_edge_traverse.cljs$lang$applyTo = (function (seq60049){
var G__60050 = cljs.core.first(seq60049);
var seq60049__$1 = cljs.core.next(seq60049);
var G__60051 = cljs.core.first(seq60049__$1);
var seq60049__$2 = cljs.core.next(seq60049__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60050,G__60051,seq60049__$2);
}));

/**
 * Topological sort of a component of a (presumably) directed graph.
 *   Returns nil if the graph contains any cycles. See loom.alg/topsort
 *   for a complete topological sort
 */
loom.alg_generic.topsort_component = (function loom$alg_generic$topsort_component(var_args){
var G__60061 = arguments.length;
switch (G__60061) {
case 2:
return loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$2 = (function (successors,start){
return loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$4(successors,start,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY);
}));

(loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$4 = (function (successors,start,seen,explored){
var seen__$1 = seen;
var explored__$1 = explored;
var result = cljs.core.List.EMPTY;
var stack = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null);
while(true){
if(cljs.core.empty_QMARK_(stack)){
return result;
} else {
var v = cljs.core.peek(stack);
var seen__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,v);
var us = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(explored__$1,(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(v) : successors.call(null,v)));
if(cljs.core.seq(us)){
if(cljs.core.truth_(cljs.core.some(seen__$2,us))){
return null;
} else {
var G__60434 = seen__$2;
var G__60435 = explored__$1;
var G__60436 = result;
var G__60437 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.first(us));
seen__$1 = G__60434;
explored__$1 = G__60435;
result = G__60436;
stack = G__60437;
continue;
}
} else {
var G__60438 = seen__$2;
var G__60439 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(explored__$1,v);
var G__60440 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,v);
var G__60441 = cljs.core.pop(stack);
seen__$1 = G__60438;
explored__$1 = G__60439;
result = G__60440;
stack = G__60441;
continue;
}
}
break;
}
}));

(loom.alg_generic.topsort_component.cljs$lang$maxFixedArity = 4);

/**
 * Traverses a graph breadth-first from start, successors being a
 *   function that returns adjacent nodes. When :f is provided, returns a
 *   lazy seq of (f node predecessor-map depth) for each node traversed.
 *   Otherwise, returns a lazy seq of the nodes. When :when is provided,
 *   filters successors with (f neighbor predecessor depth).
 */
loom.alg_generic.bf_traverse = (function loom$alg_generic$bf_traverse(var_args){
var args__4870__auto__ = [];
var len__4864__auto___60442 = arguments.length;
var i__4865__auto___60443 = (0);
while(true){
if((i__4865__auto___60443 < len__4864__auto___60442)){
args__4870__auto__.push((arguments[i__4865__auto___60443]));

var G__60444 = (i__4865__auto___60443 + (1));
i__4865__auto___60443 = G__60444;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__60082){
var map__60083 = p__60082;
var map__60083__$1 = cljs.core.__destructure_map(map__60083);
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60083__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var when = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60083__$1,new cljs.core.Keyword(null,"when","when",-576417306));
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60083__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
var f__$1 = (function (){var or__4253__auto__ = f;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (function (n,p,d){
return n;
});
}
})();
var nbr_pred = (function (){var or__4253__auto__ = when;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.constantly(true);
}
})();
var step = (function loom$alg_generic$step(queue,preds){
var temp__5753__auto__ = cljs.core.peek(queue);
if(cljs.core.truth_(temp__5753__auto__)){
var vec__60118 = temp__5753__auto__;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60118,(0),null);
var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60118,(1),null);
return cljs.core.cons((f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(node,preds,depth) : f__$1.call(null,node,preds,depth)),(new cljs.core.LazySeq(null,(function (){
var nbrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__60074_SHARP_){
var G__60121 = p1__60074_SHARP_;
var G__60122 = node;
var G__60123 = (depth + (1));
return (nbr_pred.cljs$core$IFn$_invoke$arity$3 ? nbr_pred.cljs$core$IFn$_invoke$arity$3(G__60121,G__60122,G__60123) : nbr_pred.call(null,G__60121,G__60122,G__60123));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__60073_SHARP_){
return cljs.core.contains_QMARK_(preds,p1__60073_SHARP_);
}),(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(node) : successors.call(null,node))));
return loom$alg_generic$step(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(queue),(function (){var iter__4652__auto__ = (function loom$alg_generic$step_$_iter__60124(s__60125){
return (new cljs.core.LazySeq(null,(function (){
var s__60125__$1 = s__60125;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__60125__$1);
if(temp__5753__auto____$1){
var s__60125__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__60125__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__60125__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__60127 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__60126 = (0);
while(true){
if((i__60126 < size__4651__auto__)){
var nbr = cljs.core._nth(c__4650__auto__,i__60126);
cljs.core.chunk_append(b__60127,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null));

var G__60445 = (i__60126 + (1));
i__60126 = G__60445;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60127),loom$alg_generic$step_$_iter__60124(cljs.core.chunk_rest(s__60125__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60127),null);
}
} else {
var nbr = cljs.core.first(s__60125__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null),loom$alg_generic$step_$_iter__60124(cljs.core.rest(s__60125__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(nbrs);
})()),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__60075_SHARP_,p2__60076_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__60075_SHARP_,p2__60076_SHARP_,node);
}),preds,nbrs));
}),null,null)));
} else {
return null;
}
});
return step(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(0)], null)),((cljs.core.map_QMARK_(seen))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(seen,start,null):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([start,null]),(function (){var iter__4652__auto__ = (function loom$alg_generic$iter__60135(s__60136){
return (new cljs.core.LazySeq(null,(function (){
var s__60136__$1 = s__60136;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__60136__$1);
if(temp__5753__auto__){
var s__60136__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60136__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__60136__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__60138 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__60137 = (0);
while(true){
if((i__60137 < size__4651__auto__)){
var s = cljs.core._nth(c__4650__auto__,i__60137);
cljs.core.chunk_append(b__60138,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null));

var G__60446 = (i__60137 + (1));
i__60137 = G__60446;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60138),loom$alg_generic$iter__60135(cljs.core.chunk_rest(s__60136__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60138),null);
}
} else {
var s = cljs.core.first(s__60136__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null),loom$alg_generic$iter__60135(cljs.core.rest(s__60136__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(seen);
})())));
}));

(loom.alg_generic.bf_traverse.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(loom.alg_generic.bf_traverse.cljs$lang$applyTo = (function (seq60077){
var G__60078 = cljs.core.first(seq60077);
var seq60077__$1 = cljs.core.next(seq60077);
var G__60079 = cljs.core.first(seq60077__$1);
var seq60077__$2 = cljs.core.next(seq60077__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60078,G__60079,seq60077__$2);
}));

/**
 * Return a breadth-first spanning tree of the form {node
 *   [successors]}
 */
loom.alg_generic.bf_span = (function loom$alg_generic$bf_span(var_args){
var args__4870__auto__ = [];
var len__4864__auto___60447 = arguments.length;
var i__4865__auto___60448 = (0);
while(true){
if((i__4865__auto___60448 < len__4864__auto___60447)){
args__4870__auto__.push((arguments[i__4865__auto___60448]));

var G__60449 = (i__4865__auto___60448 + (1));
i__4865__auto___60448 = G__60449;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__60150){
var map__60151 = p__60150;
var map__60151__$1 = cljs.core.__destructure_map(map__60151);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60151__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
return loom.alg_generic.preds__GT_span(cljs.core.last(loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic(successors,start,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"f","f",-1597136552),(function (_,pm,___$1){
return pm;
}),new cljs.core.Keyword(null,"seen","seen",-518999789),seen], 0))));
}));

(loom.alg_generic.bf_span.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(loom.alg_generic.bf_span.cljs$lang$applyTo = (function (seq60146){
var G__60147 = cljs.core.first(seq60146);
var seq60146__$1 = cljs.core.next(seq60146);
var G__60148 = cljs.core.first(seq60146__$1);
var seq60146__$2 = cljs.core.next(seq60146__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60147,G__60148,seq60146__$2);
}));

/**
 * Returns a path from start to end with the fewest hops (i.e. irrespective
 *   of edge weights), successors being a function that returns adjacent nodes
 */
loom.alg_generic.bf_path = (function loom$alg_generic$bf_path(var_args){
var args__4870__auto__ = [];
var len__4864__auto___60450 = arguments.length;
var i__4865__auto___60451 = (0);
while(true){
if((i__4865__auto___60451 < len__4864__auto___60450)){
args__4870__auto__.push((arguments[i__4865__auto___60451]));

var G__60452 = (i__4865__auto___60451 + (1));
i__4865__auto___60451 = G__60452;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,end,p__60156){
var map__60157 = p__60156;
var map__60157__$1 = cljs.core.__destructure_map(map__60157);
var opts = map__60157__$1;
var opts__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector], null)], 0));
var temp__5753__auto__ = cljs.core.some((function (p__60158){
var vec__60160 = p__60158;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60160,(0),null);
var pm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60160,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60160,(2),null);
if(cljs.core.truth_((pm.cljs$core$IFn$_invoke$arity$1 ? pm.cljs$core$IFn$_invoke$arity$1(end) : pm.call(null,end)))){
return pm;
} else {
return null;
}
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$4(loom.alg_generic.bf_traverse,successors,start,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,opts__$1)));
if(cljs.core.truth_(temp__5753__auto__)){
var preds = temp__5753__auto__;
return cljs.core.reverse(loom.alg_generic.trace_path(preds,end));
} else {
return null;
}
}));

(loom.alg_generic.bf_path.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(loom.alg_generic.bf_path.cljs$lang$applyTo = (function (seq60152){
var G__60153 = cljs.core.first(seq60152);
var seq60152__$1 = cljs.core.next(seq60152);
var G__60154 = cljs.core.first(seq60152__$1);
var seq60152__$2 = cljs.core.next(seq60152__$1);
var G__60155 = cljs.core.first(seq60152__$2);
var seq60152__$3 = cljs.core.next(seq60152__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60153,G__60154,G__60155,seq60152__$3);
}));

/**
 * Returns a lazy-seq of the keys that exist in both m1 and m2
 */
loom.alg_generic.shared_keys = (function loom$alg_generic$shared_keys(m1,m2){
while(true){
if((cljs.core.count(m2) < cljs.core.count(m1))){
var G__60456 = m2;
var G__60457 = m1;
m1 = G__60456;
m2 = G__60457;
continue;
} else {
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,m2),cljs.core.keys(m1));
}
break;
}
});
loom.alg_generic.bf_path_bi = (function loom$alg_generic$bf_path_bi(outgoing,predecessors,start,end){
throw (new Error("Unsupported operation `bf-path-bi`"));
});
loom.alg_generic.reverse_edges = (function loom$alg_generic$reverse_edges(successor_fn,nodes,coll){
var iter__4652__auto__ = (function loom$alg_generic$reverse_edges_$_iter__60171(s__60172){
return (new cljs.core.LazySeq(null,(function (){
var s__60172__$1 = s__60172;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__60172__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var node = cljs.core.first(xs__6308__auto__);
var iterys__4648__auto__ = ((function (s__60172__$1,node,xs__6308__auto__,temp__5753__auto__){
return (function loom$alg_generic$reverse_edges_$_iter__60171_$_iter__60173(s__60174){
return (new cljs.core.LazySeq(null,((function (s__60172__$1,node,xs__6308__auto__,temp__5753__auto__){
return (function (){
var s__60174__$1 = s__60174;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__60174__$1);
if(temp__5753__auto____$1){
var s__60174__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__60174__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__60174__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__60176 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__60175 = (0);
while(true){
if((i__60175 < size__4651__auto__)){
var nbr = cljs.core._nth(c__4650__auto__,i__60175);
if((!(cljs.core.contains_QMARK_(coll,nbr)))){
cljs.core.chunk_append(b__60176,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null));

var G__60459 = (i__60175 + (1));
i__60175 = G__60459;
continue;
} else {
var G__60460 = (i__60175 + (1));
i__60175 = G__60460;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60176),loom$alg_generic$reverse_edges_$_iter__60171_$_iter__60173(cljs.core.chunk_rest(s__60174__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60176),null);
}
} else {
var nbr = cljs.core.first(s__60174__$2);
if((!(cljs.core.contains_QMARK_(coll,nbr)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null),loom$alg_generic$reverse_edges_$_iter__60171_$_iter__60173(cljs.core.rest(s__60174__$2)));
} else {
var G__60461 = cljs.core.rest(s__60174__$2);
s__60174__$1 = G__60461;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__60172__$1,node,xs__6308__auto__,temp__5753__auto__))
,null,null));
});})(s__60172__$1,node,xs__6308__auto__,temp__5753__auto__))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__((successor_fn.cljs$core$IFn$_invoke$arity$1 ? successor_fn.cljs$core$IFn$_invoke$arity$1(node) : successor_fn.call(null,node))));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,loom$alg_generic$reverse_edges_$_iter__60171(cljs.core.rest(s__60172__$1)));
} else {
var G__60462 = cljs.core.rest(s__60172__$1);
s__60172__$1 = G__60462;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(nodes);
});
loom.alg_generic.conj_paths = (function loom$alg_generic$conj_paths(from_map,to_map,matches){
var iter__4652__auto__ = (function loom$alg_generic$conj_paths_$_iter__60188(s__60189){
return (new cljs.core.LazySeq(null,(function (){
var s__60189__$1 = s__60189;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__60189__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var n = cljs.core.first(xs__6308__auto__);
var iterys__4648__auto__ = ((function (s__60189__$1,n,xs__6308__auto__,temp__5753__auto__){
return (function loom$alg_generic$conj_paths_$_iter__60188_$_iter__60190(s__60191){
return (new cljs.core.LazySeq(null,((function (s__60189__$1,n,xs__6308__auto__,temp__5753__auto__){
return (function (){
var s__60191__$1 = s__60191;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__60191__$1);
if(temp__5753__auto____$1){
var xs__6308__auto____$1 = temp__5753__auto____$1;
var from = cljs.core.first(xs__6308__auto____$1);
var iterys__4648__auto__ = ((function (s__60191__$1,s__60189__$1,from,xs__6308__auto____$1,temp__5753__auto____$1,n,xs__6308__auto__,temp__5753__auto__){
return (function loom$alg_generic$conj_paths_$_iter__60188_$_iter__60190_$_iter__60192(s__60193){
return (new cljs.core.LazySeq(null,((function (s__60191__$1,s__60189__$1,from,xs__6308__auto____$1,temp__5753__auto____$1,n,xs__6308__auto__,temp__5753__auto__){
return (function (){
var s__60193__$1 = s__60193;
while(true){
var temp__5753__auto____$2 = cljs.core.seq(s__60193__$1);
if(temp__5753__auto____$2){
var s__60193__$2 = temp__5753__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__60193__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__60193__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__60195 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__60194 = (0);
while(true){
if((i__60194 < size__4651__auto__)){
var to = cljs.core._nth(c__4650__auto__,i__60194);
cljs.core.chunk_append(b__60195,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(from,to)));

var G__60463 = (i__60194 + (1));
i__60194 = G__60463;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60195),loom$alg_generic$conj_paths_$_iter__60188_$_iter__60190_$_iter__60192(cljs.core.chunk_rest(s__60193__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60195),null);
}
} else {
var to = cljs.core.first(s__60193__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(from,to)),loom$alg_generic$conj_paths_$_iter__60188_$_iter__60190_$_iter__60192(cljs.core.rest(s__60193__$2)));
}
} else {
return null;
}
break;
}
});})(s__60191__$1,s__60189__$1,from,xs__6308__auto____$1,temp__5753__auto____$1,n,xs__6308__auto__,temp__5753__auto__))
,null,null));
});})(s__60191__$1,s__60189__$1,from,xs__6308__auto____$1,temp__5753__auto____$1,n,xs__6308__auto__,temp__5753__auto__))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,loom.alg_generic.trace_paths(to_map,n))));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,loom$alg_generic$conj_paths_$_iter__60188_$_iter__60190(cljs.core.rest(s__60191__$1)));
} else {
var G__60464 = cljs.core.rest(s__60191__$1);
s__60191__$1 = G__60464;
continue;
}
} else {
return null;
}
break;
}
});})(s__60189__$1,n,xs__6308__auto__,temp__5753__auto__))
,null,null));
});})(s__60189__$1,n,xs__6308__auto__,temp__5753__auto__))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse,loom.alg_generic.trace_paths(from_map,n))));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,loom$alg_generic$conj_paths_$_iter__60188(cljs.core.rest(s__60189__$1)));
} else {
var G__60466 = cljs.core.rest(s__60189__$1);
s__60189__$1 = G__60466;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(matches);
});
/**
 * Using a bidirectional breadth-first search, returns all shortest
 *   paths from start to end; predecessors is called on end and each
 *   preceding node, successors is called on start, etc.
 */
loom.alg_generic.bf_paths_bi = (function loom$alg_generic$bf_paths_bi(successors,predecessors,start,end){
var find_succs = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(loom.alg_generic.reverse_edges,successors);
var find_preds = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(loom.alg_generic.reverse_edges,predecessors);
var overlaps = (function (coll,q){
return cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__60197_SHARP_){
return cljs.core.contains_QMARK_(coll,p1__60197_SHARP_);
}),q));
});
var map_set_pairs = (function (map,pairs){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (map__$1,p__60206){
var vec__60207 = p__60206;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60207,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60207,(1),null);
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(map__$1,key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__$1,key,cljs.core.PersistentHashSet.EMPTY),val));
}),cljs.core.transient$(map),pairs));
});
var outgoing = cljs.core.PersistentArrayMap.createAsIfByAssoc([start,null]);
var incoming = cljs.core.PersistentArrayMap.createAsIfByAssoc([end,null]);
var q1 = (new cljs.core.List(null,start,null,(1),null));
var q2 = (new cljs.core.List(null,end,null,(1),null));
while(true){
if(((cljs.core.seq(q1)) && (cljs.core.seq(q2)))){
if((cljs.core.count(q1) <= cljs.core.count(q2))){
var pairs = find_succs(q1,outgoing);
var outgoing__$1 = map_set_pairs(outgoing,pairs);
var q1__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var temp__5751__auto__ = overlaps(incoming,q1__$1);
if(temp__5751__auto__){
var all = temp__5751__auto__;
return loom.alg_generic.conj_paths(outgoing__$1,incoming,cljs.core.set(all));
} else {
var G__60467 = outgoing__$1;
var G__60468 = incoming;
var G__60469 = q1__$1;
var G__60470 = q2;
outgoing = G__60467;
incoming = G__60468;
q1 = G__60469;
q2 = G__60470;
continue;
}
} else {
var pairs = find_preds(q2,incoming);
var incoming__$1 = map_set_pairs(incoming,pairs);
var q2__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var temp__5751__auto__ = overlaps(outgoing,q2__$1);
if(temp__5751__auto__){
var all = temp__5751__auto__;
return loom.alg_generic.conj_paths(outgoing,incoming__$1,cljs.core.set(all));
} else {
var G__60471 = outgoing;
var G__60472 = incoming__$1;
var G__60473 = q1;
var G__60474 = q2__$1;
outgoing = G__60471;
incoming = G__60472;
q1 = G__60473;
q2 = G__60474;
continue;
}
}
} else {
return null;
}
break;
}
});
/**
 * Returns a lazy-seq of [current-node state] where state is a map in the
 *   format {node [distance predecessor]}. When f is provided, returns
 *   a lazy-seq of (f node state) for each node
 */
loom.alg_generic.dijkstra_traverse = (function loom$alg_generic$dijkstra_traverse(var_args){
var G__60222 = arguments.length;
switch (G__60222) {
case 3:
return loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3 = (function (successors,dist,start){
return loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$4(successors,dist,start,cljs.core.vector);
}));

(loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$4 = (function (successors,dist,start,f){
var step = (function loom$alg_generic$step(p__60238){
var vec__60239 = p__60238;
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60239,(0),null);
var pq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60239,(1),null);
var temp__5753__auto__ = cljs.core.first(pq);
if(cljs.core.truth_(temp__5753__auto__)){
var vec__60242 = temp__5753__auto__;
var dist_su = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60242,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60242,(1),null);
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60242,(2),null);
var fpq = vec__60242;
return cljs.core.cons((f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(u,state) : f.call(null,u,state)),(new cljs.core.LazySeq(null,(function (){
return loom$alg_generic$step(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__60246,v){
var vec__60248 = p__60246;
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60248,(0),null);
var pq__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60248,(1),null);
var dist_suv = (dist_su + (dist.cljs$core$IFn$_invoke$arity$2 ? dist.cljs$core$IFn$_invoke$arity$2(u,v) : dist.call(null,u,v)));
var dist_sv = cljs.core.first((state__$1.cljs$core$IFn$_invoke$arity$1 ? state__$1.cljs$core$IFn$_invoke$arity$1(v) : state__$1.call(null,v)));
if(cljs.core.truth_((function (){var and__4251__auto__ = dist_sv;
if(cljs.core.truth_(and__4251__auto__)){
return (dist_suv >= dist_sv);
} else {
return and__4251__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__$1,pq__$1], null);
} else {
var pq__$2 = (cljs.core.truth_(dist_sv)?cljs.core.disj.cljs$core$IFn$_invoke$arity$2(pq__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dist_sv,cljs.core.hash(v),v], null)):pq__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,v,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dist_suv,u], null)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pq__$2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dist_suv,cljs.core.hash(v),v], null))], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(pq,fpq)], null),(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(u) : successors.call(null,u))));
}),null,null)));
} else {
return null;
}
});
return step(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([start,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),null], null)]),cljs.core.sorted_set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.hash(start),start], null)], 0))], null));
}));

(loom.alg_generic.dijkstra_traverse.cljs$lang$maxFixedArity = 4);

/**
 * Finds all shortest distances from start, where successors and dist
 *   are functions called as (successors node) and (dist node1 node2).
 *   Returns a map in the format {node {successor distance}}
 */
loom.alg_generic.dijkstra_span = (function loom$alg_generic$dijkstra_span(successors,dist,start){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (span,p__60255){
var vec__60256 = p__60255;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60256,(0),null);
var vec__60259 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60256,(1),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60259,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60259,(1),null);
if(cljs.core.truth_(p)){
return cljs.core.assoc_in(span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,n], null),d);
} else {
return span;
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.second(cljs.core.last(loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3(successors,dist,start))));
});
/**
 * Finds the shortest path from start to end, where successors and dist
 *   are functions called as (successors node) and (dist node1 node2).
 *   Returns a vector: [path distance]
 */
loom.alg_generic.dijkstra_path_dist = (function loom$alg_generic$dijkstra_path_dist(successors,dist,start,end){
var temp__5751__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__60262){
var vec__60263 = p__60262;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60263,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60263,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(end,node);
}),loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3(successors,dist,start)));
if(cljs.core.truth_(temp__5751__auto__)){
var vec__60266 = temp__5751__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60266,(0),null);
var end_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60266,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reverse(loom.alg_generic.trace_path(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.second,end_state),end)),cljs.core.first((end_state.cljs$core$IFn$_invoke$arity$1 ? end_state.cljs$core$IFn$_invoke$arity$1(end) : end_state.call(null,end)))], null);
} else {
return null;
}
});
/**
 * Finds the shortest path from start to end, where successors and dist
 *   are functions called as (successors node) and (dist node1 node2)
 */
loom.alg_generic.dijkstra_path = (function loom$alg_generic$dijkstra_path(successors,dist,start,end){
return cljs.core.first(loom.alg_generic.dijkstra_path_dist(successors,dist,start,end));
});
loom.alg_generic.bits_per_long = cljs.core.long$((32));
/**
 * Returns the number of longs required to store bits count bits in a bitmap.
 */
loom.alg_generic.bm_longs = (function loom$alg_generic$bm_longs(bits){
return cljs.core.long$(Math.ceil((bits / loom.alg_generic.bits_per_long)));
});
/**
 * Create new empty bitmap.
 */
loom.alg_generic.bm_new = (function loom$alg_generic$bm_new(){
return cljs.core.long_array.cljs$core$IFn$_invoke$arity$1((1));
});
loom.alg_generic.bm_copy = (function loom$alg_generic$bm_copy(bm,size){
return bm.slice((0),size);
});
/**
 * Set boolean state of bit in 'bitmap at 'idx to true.
 */
loom.alg_generic.bm_set = (function loom$alg_generic$bm_set(bitmap,idx){
var size = (function (){var x__4336__auto__ = cljs.core.count(bitmap);
var y__4337__auto__ = loom.alg_generic.bm_longs((idx + (1)));
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})();
var new_bitmap = loom.alg_generic.bm_copy(bitmap,size);
var chunk = cljs.core.quot(idx,loom.alg_generic.bits_per_long);
var offset = cljs.core.mod(idx,loom.alg_generic.bits_per_long);
var mask = ((0) | (1 << offset));
var value = (new_bitmap[chunk]);
var new_value = (value | mask);
(new_bitmap[chunk] = new_value);

return new_bitmap;
});
/**
 * Get boolean state of bit in 'bitmap at 'idx.
 */
loom.alg_generic.bm_get = (function loom$alg_generic$bm_get(bitmap,idx){
if((loom.alg_generic.bm_longs((idx + (1))) <= cljs.core.count(bitmap))){
var chunk = cljs.core.quot(idx,loom.alg_generic.bits_per_long);
var offset = cljs.core.mod(idx,loom.alg_generic.bits_per_long);
var mask = ((0) | (1 << offset));
var value = (bitmap[chunk]);
var masked_value = (value & mask);
return (!((masked_value === (0))));
} else {
return null;
}
});
/**
 * Logically OR 'bitmaps together.
 */
loom.alg_generic.bm_or = (function loom$alg_generic$bm_or(var_args){
var args__4870__auto__ = [];
var len__4864__auto___60488 = arguments.length;
var i__4865__auto___60489 = (0);
while(true){
if((i__4865__auto___60489 < len__4864__auto___60488)){
args__4870__auto__.push((arguments[i__4865__auto___60489]));

var G__60490 = (i__4865__auto___60489 + (1));
i__4865__auto___60489 = G__60490;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return loom.alg_generic.bm_or.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(loom.alg_generic.bm_or.cljs$core$IFn$_invoke$arity$variadic = (function (bitmaps){
if(cljs.core.empty_QMARK_(bitmaps)){
return loom.alg_generic.bm_new();
} else {
var size = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,bitmaps));
var new_bitmap = loom.alg_generic.bm_copy(cljs.core.first(bitmaps),size);
var seq__60277_60491 = cljs.core.seq(cljs.core.rest(bitmaps));
var chunk__60284_60492 = null;
var count__60285_60493 = (0);
var i__60286_60494 = (0);
while(true){
if((i__60286_60494 < count__60285_60493)){
var bitmap_60495 = chunk__60284_60492.cljs$core$IIndexed$_nth$arity$2(null,i__60286_60494);
var seq__60287_60496 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.list,bitmap_60495));
var chunk__60289_60497 = null;
var count__60290_60498 = (0);
var i__60291_60499 = (0);
while(true){
if((i__60291_60499 < count__60290_60498)){
var vec__60331_60500 = chunk__60289_60497.cljs$core$IIndexed$_nth$arity$2(null,i__60291_60499);
var idx_60501 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60331_60500,(0),null);
var value_60502 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60331_60500,(1),null);
var masked_value_60503 = (value_60502 | (new_bitmap[idx_60501]));
(new_bitmap[idx_60501] = masked_value_60503);


var G__60504 = seq__60287_60496;
var G__60505 = chunk__60289_60497;
var G__60506 = count__60290_60498;
var G__60507 = (i__60291_60499 + (1));
seq__60287_60496 = G__60504;
chunk__60289_60497 = G__60505;
count__60290_60498 = G__60506;
i__60291_60499 = G__60507;
continue;
} else {
var temp__5753__auto___60509 = cljs.core.seq(seq__60287_60496);
if(temp__5753__auto___60509){
var seq__60287_60511__$1 = temp__5753__auto___60509;
if(cljs.core.chunked_seq_QMARK_(seq__60287_60511__$1)){
var c__4679__auto___60512 = cljs.core.chunk_first(seq__60287_60511__$1);
var G__60513 = cljs.core.chunk_rest(seq__60287_60511__$1);
var G__60514 = c__4679__auto___60512;
var G__60515 = cljs.core.count(c__4679__auto___60512);
var G__60516 = (0);
seq__60287_60496 = G__60513;
chunk__60289_60497 = G__60514;
count__60290_60498 = G__60515;
i__60291_60499 = G__60516;
continue;
} else {
var vec__60334_60517 = cljs.core.first(seq__60287_60511__$1);
var idx_60518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60334_60517,(0),null);
var value_60519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60334_60517,(1),null);
var masked_value_60520 = (value_60519 | (new_bitmap[idx_60518]));
(new_bitmap[idx_60518] = masked_value_60520);


var G__60521 = cljs.core.next(seq__60287_60511__$1);
var G__60522 = null;
var G__60523 = (0);
var G__60524 = (0);
seq__60287_60496 = G__60521;
chunk__60289_60497 = G__60522;
count__60290_60498 = G__60523;
i__60291_60499 = G__60524;
continue;
}
} else {
}
}
break;
}

var G__60525 = seq__60277_60491;
var G__60526 = chunk__60284_60492;
var G__60527 = count__60285_60493;
var G__60528 = (i__60286_60494 + (1));
seq__60277_60491 = G__60525;
chunk__60284_60492 = G__60526;
count__60285_60493 = G__60527;
i__60286_60494 = G__60528;
continue;
} else {
var temp__5753__auto___60529 = cljs.core.seq(seq__60277_60491);
if(temp__5753__auto___60529){
var seq__60277_60530__$1 = temp__5753__auto___60529;
if(cljs.core.chunked_seq_QMARK_(seq__60277_60530__$1)){
var c__4679__auto___60531 = cljs.core.chunk_first(seq__60277_60530__$1);
var G__60532 = cljs.core.chunk_rest(seq__60277_60530__$1);
var G__60533 = c__4679__auto___60531;
var G__60534 = cljs.core.count(c__4679__auto___60531);
var G__60535 = (0);
seq__60277_60491 = G__60532;
chunk__60284_60492 = G__60533;
count__60285_60493 = G__60534;
i__60286_60494 = G__60535;
continue;
} else {
var bitmap_60536 = cljs.core.first(seq__60277_60530__$1);
var seq__60278_60537 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.list,bitmap_60536));
var chunk__60280_60538 = null;
var count__60281_60539 = (0);
var i__60282_60540 = (0);
while(true){
if((i__60282_60540 < count__60281_60539)){
var vec__60343_60541 = chunk__60280_60538.cljs$core$IIndexed$_nth$arity$2(null,i__60282_60540);
var idx_60542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60343_60541,(0),null);
var value_60543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60343_60541,(1),null);
var masked_value_60544 = (value_60543 | (new_bitmap[idx_60542]));
(new_bitmap[idx_60542] = masked_value_60544);


var G__60545 = seq__60278_60537;
var G__60546 = chunk__60280_60538;
var G__60547 = count__60281_60539;
var G__60548 = (i__60282_60540 + (1));
seq__60278_60537 = G__60545;
chunk__60280_60538 = G__60546;
count__60281_60539 = G__60547;
i__60282_60540 = G__60548;
continue;
} else {
var temp__5753__auto___60549__$1 = cljs.core.seq(seq__60278_60537);
if(temp__5753__auto___60549__$1){
var seq__60278_60550__$1 = temp__5753__auto___60549__$1;
if(cljs.core.chunked_seq_QMARK_(seq__60278_60550__$1)){
var c__4679__auto___60551 = cljs.core.chunk_first(seq__60278_60550__$1);
var G__60554 = cljs.core.chunk_rest(seq__60278_60550__$1);
var G__60555 = c__4679__auto___60551;
var G__60556 = cljs.core.count(c__4679__auto___60551);
var G__60557 = (0);
seq__60278_60537 = G__60554;
chunk__60280_60538 = G__60555;
count__60281_60539 = G__60556;
i__60282_60540 = G__60557;
continue;
} else {
var vec__60346_60558 = cljs.core.first(seq__60278_60550__$1);
var idx_60559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60346_60558,(0),null);
var value_60560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60346_60558,(1),null);
var masked_value_60561 = (value_60560 | (new_bitmap[idx_60559]));
(new_bitmap[idx_60559] = masked_value_60561);


var G__60562 = cljs.core.next(seq__60278_60550__$1);
var G__60563 = null;
var G__60564 = (0);
var G__60565 = (0);
seq__60278_60537 = G__60562;
chunk__60280_60538 = G__60563;
count__60281_60539 = G__60564;
i__60282_60540 = G__60565;
continue;
}
} else {
}
}
break;
}

var G__60566 = cljs.core.next(seq__60277_60530__$1);
var G__60567 = null;
var G__60568 = (0);
var G__60569 = (0);
seq__60277_60491 = G__60566;
chunk__60284_60492 = G__60567;
count__60285_60493 = G__60568;
i__60286_60494 = G__60569;
continue;
}
} else {
}
}
break;
}

return new_bitmap;
}
}));

(loom.alg_generic.bm_or.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(loom.alg_generic.bm_or.cljs$lang$applyTo = (function (seq60273){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60273));
}));

/**
 * Get the indicies of set bits in 'bitmap.
 */
loom.alg_generic.bm_get_indicies = (function loom$alg_generic$bm_get_indicies(bitmap){
var iter__4652__auto__ = (function loom$alg_generic$bm_get_indicies_$_iter__60349(s__60350){
return (new cljs.core.LazySeq(null,(function (){
var s__60350__$1 = s__60350;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__60350__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var chunk = cljs.core.first(xs__6308__auto__);
var iterys__4648__auto__ = ((function (s__60350__$1,chunk,xs__6308__auto__,temp__5753__auto__){
return (function loom$alg_generic$bm_get_indicies_$_iter__60349_$_iter__60351(s__60352){
return (new cljs.core.LazySeq(null,((function (s__60350__$1,chunk,xs__6308__auto__,temp__5753__auto__){
return (function (){
var s__60352__$1 = s__60352;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__60352__$1);
if(temp__5753__auto____$1){
var s__60352__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__60352__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__60352__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__60354 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__60353 = (0);
while(true){
if((i__60353 < size__4651__auto__)){
var offset = cljs.core._nth(c__4650__auto__,i__60353);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get(bitmap,idx))){
cljs.core.chunk_append(b__60354,idx);

var G__60571 = (i__60353 + (1));
i__60353 = G__60571;
continue;
} else {
var G__60572 = (i__60353 + (1));
i__60353 = G__60572;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60354),loom$alg_generic$bm_get_indicies_$_iter__60349_$_iter__60351(cljs.core.chunk_rest(s__60352__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60354),null);
}
} else {
var offset = cljs.core.first(s__60352__$2);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get(bitmap,idx))){
return cljs.core.cons(idx,loom$alg_generic$bm_get_indicies_$_iter__60349_$_iter__60351(cljs.core.rest(s__60352__$2)));
} else {
var G__60573 = cljs.core.rest(s__60352__$2);
s__60352__$1 = G__60573;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__60350__$1,chunk,xs__6308__auto__,temp__5753__auto__))
,null,null));
});})(s__60350__$1,chunk,xs__6308__auto__,temp__5753__auto__))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(loom.alg_generic.bits_per_long)));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,loom$alg_generic$bm_get_indicies_$_iter__60349(cljs.core.rest(s__60350__$1)));
} else {
var G__60576 = cljs.core.rest(s__60350__$1);
s__60350__$1 = G__60576;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(bitmap)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
loom.alg_generic.Ancestry = (function (node__GT_idx,idx__GT_node,bitmaps,__meta,__extmap,__hash){
this.node__GT_idx = node__GT_idx;
this.idx__GT_node = idx__GT_node;
this.bitmaps = bitmaps;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k60356,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__60360 = k60356;
var G__60360__$1 = (((G__60360 instanceof cljs.core.Keyword))?G__60360.fqn:null);
switch (G__60360__$1) {
case "node->idx":
return self__.node__GT_idx;

break;
case "idx->node":
return self__.idx__GT_node;

break;
case "bitmaps":
return self__.bitmaps;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k60356,else__4505__auto__);

}
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__60361){
var vec__60362 = p__60361;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60362,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60362,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#loom.alg-generic.Ancestry{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps],null))], null),self__.__extmap));
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__60355){
var self__ = this;
var G__60355__$1 = this;
return (new cljs.core.RecordIter((0),G__60355__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,self__.__hash));
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1116202445 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this60357,other60358){
var self__ = this;
var this60357__$1 = this;
return (((!((other60358 == null)))) && ((((this60357__$1.constructor === other60358.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60357__$1.node__GT_idx,other60358.node__GT_idx)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60357__$1.idx__GT_node,other60358.idx__GT_node)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60357__$1.bitmaps,other60358.bitmaps)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60357__$1.__extmap,other60358.__extmap)))))))))));
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),null,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k60356){
var self__ = this;
var this__4509__auto____$1 = this;
var G__60365 = k60356;
var G__60365__$1 = (((G__60365 instanceof cljs.core.Keyword))?G__60365.fqn:null);
switch (G__60365__$1) {
case "node->idx":
case "idx->node":
case "bitmaps":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k60356);

}
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__60355){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__60366 = cljs.core.keyword_identical_QMARK_;
var expr__60367 = k__4511__auto__;
if(cljs.core.truth_((pred__60366.cljs$core$IFn$_invoke$arity$2 ? pred__60366.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"node->idx","node->idx",152705227),expr__60367) : pred__60366.call(null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),expr__60367)))){
return (new loom.alg_generic.Ancestry(G__60355,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60366.cljs$core$IFn$_invoke$arity$2 ? pred__60366.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),expr__60367) : pred__60366.call(null,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),expr__60367)))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,G__60355,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60366.cljs$core$IFn$_invoke$arity$2 ? pred__60366.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),expr__60367) : pred__60366.call(null,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),expr__60367)))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,G__60355,self__.__meta,self__.__extmap,null));
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__60355),null));
}
}
}
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps,null))], null),self__.__extmap));
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__60355){
var self__ = this;
var this__4501__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,G__60355,self__.__extmap,self__.__hash));
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(loom.alg_generic.Ancestry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"node->idx","node->idx",1793236754,null),new cljs.core.Symbol(null,"idx->node","idx->node",-842528594,null),new cljs.core.Symbol(null,"bitmaps","bitmaps",-1506736927,null)], null);
}));

(loom.alg_generic.Ancestry.cljs$lang$type = true);

(loom.alg_generic.Ancestry.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"loom.alg-generic/Ancestry",null,(1),null));
}));

(loom.alg_generic.Ancestry.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"loom.alg-generic/Ancestry");
}));

/**
 * Positional factory function for loom.alg-generic/Ancestry.
 */
loom.alg_generic.__GT_Ancestry = (function loom$alg_generic$__GT_Ancestry(node__GT_idx,idx__GT_node,bitmaps){
return (new loom.alg_generic.Ancestry(node__GT_idx,idx__GT_node,bitmaps,null,null,null));
});

/**
 * Factory function for loom.alg-generic/Ancestry, taking a map of keywords to field values.
 */
loom.alg_generic.map__GT_Ancestry = (function loom$alg_generic$map__GT_Ancestry(G__60359){
var extmap__4542__auto__ = (function (){var G__60369 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__60359,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], 0));
if(cljs.core.record_QMARK_(G__60359)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__60369);
} else {
return G__60369;
}
})();
return (new loom.alg_generic.Ancestry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(G__60359),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175).cljs$core$IFn$_invoke$arity$1(G__60359),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842).cljs$core$IFn$_invoke$arity$1(G__60359),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

/**
 * Create a new, empty Ancestry cache.
 */
loom.alg_generic.ancestry_new = (function loom$alg_generic$ancestry_new(){
return loom.alg_generic.__GT_Ancestry(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY);
});
/**
 * Finds if a 'node is contained in the 'ancestry cache.
 */
loom.alg_generic.ancestry_contains_QMARK_ = (function loom$alg_generic$ancestry_contains_QMARK_(ancestry,node){
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(ancestry),node);
});
/**
 * Adds a 'node and its 'parents associations to the 'ancestry cache.
 */
loom.alg_generic.ancestry_add = (function loom$alg_generic$ancestry_add(var_args){
var args__4870__auto__ = [];
var len__4864__auto___60586 = arguments.length;
var i__4865__auto___60587 = (0);
while(true){
if((i__4865__auto___60587 < len__4864__auto___60586)){
args__4870__auto__.push((arguments[i__4865__auto___60587]));

var G__60588 = (i__4865__auto___60587 + (1));
i__4865__auto___60587 = G__60588;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.ancestry_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(loom.alg_generic.ancestry_add.cljs$core$IFn$_invoke$arity$variadic = (function (ancestry,node,parents){
if(loom.alg_generic.ancestry_contains_QMARK_(ancestry,node)){
return ancestry;
} else {
var map__60373 = ancestry;
var map__60373__$1 = cljs.core.__destructure_map(map__60373);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60373__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60373__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60373__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
var nid = cljs.core.count(node__GT_idx);
var node__GT_idx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node__GT_idx,node,nid);
var idx__GT_node__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(idx__GT_node,nid,node);
var pidxs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(node__GT_idx__$1,parents);
var new_bitmap = ((cljs.core.empty_QMARK_(pidxs))?loom.alg_generic.bm_new():cljs.core.apply.cljs$core$IFn$_invoke$arity$2(loom.alg_generic.bm_or,cljs.core.map.cljs$core$IFn$_invoke$arity$2(bitmaps,pidxs)));
var new_bitmap__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(loom.alg_generic.bm_set,new_bitmap,pidxs);
var bitmaps__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bitmaps,new_bitmap__$1);
return loom.alg_generic.__GT_Ancestry(node__GT_idx__$1,idx__GT_node__$1,bitmaps__$1);
}
}));

(loom.alg_generic.ancestry_add.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(loom.alg_generic.ancestry_add.cljs$lang$applyTo = (function (seq60370){
var G__60371 = cljs.core.first(seq60370);
var seq60370__$1 = cljs.core.next(seq60370);
var G__60372 = cljs.core.first(seq60370__$1);
var seq60370__$2 = cljs.core.next(seq60370__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60371,G__60372,seq60370__$2);
}));

/**
 * Finds if the 'parenter node is an ancestor of 'childer node for the given
 *   'ancestry cache.
 */
loom.alg_generic.ancestor_QMARK_ = (function loom$alg_generic$ancestor_QMARK_(ancestry,childer,parenter){
var map__60374 = ancestry;
var map__60374__$1 = cljs.core.__destructure_map(map__60374);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60374__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60374__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
var cidx = (node__GT_idx.cljs$core$IFn$_invoke$arity$1 ? node__GT_idx.cljs$core$IFn$_invoke$arity$1(childer) : node__GT_idx.call(null,childer));
var pidx = (node__GT_idx.cljs$core$IFn$_invoke$arity$1 ? node__GT_idx.cljs$core$IFn$_invoke$arity$1(parenter) : node__GT_idx.call(null,parenter));
return cljs.core.boolean$((cljs.core.truth_((function (){var and__4251__auto__ = cidx;
if(cljs.core.truth_(and__4251__auto__)){
return pidx;
} else {
return and__4251__auto__;
}
})())?loom.alg_generic.bm_get(cljs.core.get.cljs$core$IFn$_invoke$arity$2(bitmaps,cidx),pidx):null));
});
/**
 * Returns all of the ancestors of 'child node.
 */
loom.alg_generic.ancestors = (function loom$alg_generic$ancestors(ancestry,child){
var map__60375 = ancestry;
var map__60375__$1 = cljs.core.__destructure_map(map__60375);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60375__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60375__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60375__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
var cidx = (node__GT_idx.cljs$core$IFn$_invoke$arity$1 ? node__GT_idx.cljs$core$IFn$_invoke$arity$1(child) : node__GT_idx.call(null,child));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(idx__GT_node,loom.alg_generic.bm_get_indicies(cljs.core.get.cljs$core$IFn$_invoke$arity$2(bitmaps,cidx)));
});
/**
 * Returns all of the nodes in an 'ancestry.
 */
loom.alg_generic.ancestry_nodes = (function loom$alg_generic$ancestry_nodes(ancestry){
return cljs.core.keys(new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(ancestry));
});

//# sourceMappingURL=loom.alg_generic.js.map
