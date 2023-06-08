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
return cljs.core.cons(path,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__81628_SHARP_){
var G__81631 = preds;
var G__81632 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,p1__81628_SHARP_);
return (loom.alg_generic.paths.cljs$core$IFn$_invoke$arity$2 ? loom.alg_generic.paths.cljs$core$IFn$_invoke$arity$2(G__81631,G__81632) : loom.alg_generic.paths.call(null,G__81631,G__81632));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__81627_SHARP_){
return cljs.core.not_any_QMARK_((function (edge){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_node,p1__81627_SHARP_], null));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),path));
}),(preds.cljs$core$IFn$_invoke$arity$1 ? preds.cljs$core$IFn$_invoke$arity$1(this_node) : preds.call(null,this_node)))], 0)));
});
/**
 * Given a function and a starting node, returns all possible paths
 *   back to source. Cycles are not accounted for.
 */
loom.alg_generic.trace_paths = (function loom$alg_generic$trace_paths(preds,start){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__81633_SHARP_){
var G__81634 = cljs.core.peek(p1__81633_SHARP_);
return (preds.cljs$core$IFn$_invoke$arity$1 ? preds.cljs$core$IFn$_invoke$arity$1(G__81634) : preds.call(null,G__81634));
}),loom.alg_generic.paths(preds,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null)));
});
/**
 * Converts a map of the form {node predecessor} to a spanning tree of the
 *   form {node [successors]}
 */
loom.alg_generic.preds__GT_span = (function loom$alg_generic$preds__GT_span(preds){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (span,p__81636){
var vec__81639 = p__81636;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81639,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81639,(1),null);
if(cljs.core.truth_(p)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(span,p,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__81644 = p;
var G__81645 = cljs.core.PersistentVector.EMPTY;
return (span.cljs$core$IFn$_invoke$arity$2 ? span.cljs$core$IFn$_invoke$arity$2(G__81644,G__81645) : span.call(null,G__81644,G__81645));
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
var len__4864__auto___82008 = arguments.length;
var i__4865__auto___82009 = (0);
while(true){
if((i__4865__auto___82009 < len__4864__auto___82008)){
args__4870__auto__.push((arguments[i__4865__auto___82009]));

var G__82010 = (i__4865__auto___82009 + (1));
i__4865__auto___82009 = G__82010;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__81651){
var map__81652 = p__81651;
var map__81652__$1 = cljs.core.__destructure_map(map__81652);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__81652__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
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
(loom.alg_generic.pre_traverse.cljs$lang$applyTo = (function (seq81646){
var G__81647 = cljs.core.first(seq81646);
var seq81646__$1 = cljs.core.next(seq81646);
var G__81648 = cljs.core.first(seq81646__$1);
var seq81646__$2 = cljs.core.next(seq81646__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81647,G__81648,seq81646__$2);
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
var len__4864__auto___82011 = arguments.length;
var i__4865__auto___82012 = (0);
while(true){
if((i__4865__auto___82012 < len__4864__auto___82011)){
args__4870__auto__.push((arguments[i__4865__auto___82012]));

var G__82013 = (i__4865__auto___82012 + (1));
i__4865__auto___82012 = G__82013;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__81673){
var map__81674 = p__81673;
var map__81674__$1 = cljs.core.__destructure_map(map__81674);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__81674__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = (function loom$alg_generic$step(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1){
while(true){
var temp__5751__auto__ = cljs.core.first(nbrs);
if(cljs.core.truth_(temp__5751__auto__)){
var nbr = temp__5751__auto__;
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null),(new cljs.core.LazySeq(null,((function (successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5751__auto__,map__81674,map__81674__$1,seen){
return (function (){
var seen__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,start__$1);
if(cljs.core.truth_((seen__$2.cljs$core$IFn$_invoke$arity$1 ? seen__$2.cljs$core$IFn$_invoke$arity$1(nbr) : seen__$2.call(null,nbr)))){
return loom$alg_generic$step(successors__$1,start__$1,cljs.core.next(nbrs),stack,nbrstack,seen__$2);
} else {
return loom$alg_generic$step(successors__$1,nbr,(successors__$1.cljs$core$IFn$_invoke$arity$1 ? successors__$1.cljs$core$IFn$_invoke$arity$1(nbr) : successors__$1.call(null,nbr)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,start__$1),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nbrstack,cljs.core.next(nbrs)),seen__$2);
}
});})(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5751__auto__,map__81674,map__81674__$1,seen))
,null,null)));
} else {
var temp__5753__auto__ = cljs.core.peek(stack);
if(cljs.core.truth_(temp__5753__auto__)){
var parent = temp__5753__auto__;
var G__82014 = successors__$1;
var G__82015 = parent;
var G__82016 = cljs.core.peek(nbrstack);
var G__82017 = cljs.core.pop(stack);
var G__82018 = cljs.core.pop(nbrstack);
var G__82019 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,start__$1);
successors__$1 = G__82014;
start__$1 = G__82015;
nbrs = G__82016;
stack = G__82017;
nbrstack = G__82018;
seen__$1 = G__82019;
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
(loom.alg_generic.pre_edge_traverse.cljs$lang$applyTo = (function (seq81670){
var G__81671 = cljs.core.first(seq81670);
var seq81670__$1 = cljs.core.next(seq81670);
var G__81672 = cljs.core.first(seq81670__$1);
var seq81670__$2 = cljs.core.next(seq81670__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81671,G__81672,seq81670__$2);
}));

/**
 * Returns a depth-first spanning tree of the form {node [successors]}
 */
loom.alg_generic.pre_span = (function loom$alg_generic$pre_span(var_args){
var args__4870__auto__ = [];
var len__4864__auto___82020 = arguments.length;
var i__4865__auto___82021 = (0);
while(true){
if((i__4865__auto___82021 < len__4864__auto___82020)){
args__4870__auto__.push((arguments[i__4865__auto___82021]));

var G__82022 = (i__4865__auto___82021 + (1));
i__4865__auto___82021 = G__82022;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__81684){
var map__81685 = p__81684;
var map__81685__$1 = cljs.core.__destructure_map(map__81685);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__81685__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81685__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__82023 = seen__$2;
var G__82024 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(preds,u,v);
var G__82025 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,u);
seen__$1 = G__82023;
preds = G__82024;
stack = G__82025;
continue;
} else {
var G__82026 = seen__$2;
var G__82027 = preds;
var G__82028 = cljs.core.pop(stack);
seen__$1 = G__82026;
preds = G__82027;
stack = G__82028;
continue;
}
}
break;
}
}));

(loom.alg_generic.pre_span.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(loom.alg_generic.pre_span.cljs$lang$applyTo = (function (seq81681){
var G__81682 = cljs.core.first(seq81681);
var seq81681__$1 = cljs.core.next(seq81681);
var G__81683 = cljs.core.first(seq81681__$1);
var seq81681__$2 = cljs.core.next(seq81681__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81682,G__81683,seq81681__$2);
}));

/**
 * Traverses a graph depth-first postorder from start, successors
 *   being a function that returns adjacent nodes. Returns a vector
 */
loom.alg_generic.post_traverse = (function loom$alg_generic$post_traverse(var_args){
var args__4870__auto__ = [];
var len__4864__auto___82029 = arguments.length;
var i__4865__auto___82030 = (0);
while(true){
if((i__4865__auto___82030 < len__4864__auto___82029)){
args__4870__auto__.push((arguments[i__4865__auto___82030]));

var G__82031 = (i__4865__auto___82030 + (1));
i__4865__auto___82030 = G__82031;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__81689){
var map__81690 = p__81689;
var map__81690__$1 = cljs.core.__destructure_map(map__81690);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__81690__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81690__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__82032 = seen__$2;
var G__82033 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,v);
var G__82034 = cljs.core.pop(stack);
seen__$1 = G__82032;
result = G__82033;
stack = G__82034;
continue;
} else {
var G__82035 = seen__$2;
var G__82036 = result;
var G__82037 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.first(nbrs));
seen__$1 = G__82035;
result = G__82036;
stack = G__82037;
continue;
}
}
break;
}
}));

(loom.alg_generic.post_traverse.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(loom.alg_generic.post_traverse.cljs$lang$applyTo = (function (seq81686){
var G__81687 = cljs.core.first(seq81686);
var seq81686__$1 = cljs.core.next(seq81686);
var G__81688 = cljs.core.first(seq81686__$1);
var seq81686__$2 = cljs.core.next(seq81686__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81687,G__81688,seq81686__$2);
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
var len__4864__auto___82040 = arguments.length;
var i__4865__auto___82041 = (0);
while(true){
if((i__4865__auto___82041 < len__4864__auto___82040)){
args__4870__auto__.push((arguments[i__4865__auto___82041]));

var G__82042 = (i__4865__auto___82041 + (1));
i__4865__auto___82041 = G__82042;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__81694){
var map__81695 = p__81694;
var map__81695__$1 = cljs.core.__destructure_map(map__81695);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__81695__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81695__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__82043 = start__$1;
var G__82044 = cljs.core.next(nbrs);
var G__82045 = stack;
var G__82046 = nbrstack;
var G__82047 = seen__$2;
var G__82048 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__82043;
nbrs = G__82044;
stack = G__82045;
nbrstack = G__82046;
seen__$1 = G__82047;
edges = G__82048;
continue;
} else {
var G__82049 = nbr;
var G__82050 = (successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(nbr) : successors.call(null,nbr));
var G__82051 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,start__$1);
var G__82052 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nbrstack,cljs.core.next(nbrs));
var G__82053 = seen__$2;
var G__82054 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__82049;
nbrs = G__82050;
stack = G__82051;
nbrstack = G__82052;
seen__$1 = G__82053;
edges = G__82054;
continue;
}
} else {
var temp__5751__auto____$1 = cljs.core.peek(stack);
if(cljs.core.truth_(temp__5751__auto____$1)){
var parent = temp__5751__auto____$1;
var G__82055 = parent;
var G__82056 = cljs.core.peek(nbrstack);
var G__82057 = cljs.core.pop(stack);
var G__82058 = cljs.core.pop(nbrstack);
var G__82059 = seen__$2;
var G__82060 = edges;
start__$1 = G__82055;
nbrs = G__82056;
stack = G__82057;
nbrstack = G__82058;
seen__$1 = G__82059;
edges = G__82060;
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
(loom.alg_generic.post_edge_traverse.cljs$lang$applyTo = (function (seq81691){
var G__81692 = cljs.core.first(seq81691);
var seq81691__$1 = cljs.core.next(seq81691);
var G__81693 = cljs.core.first(seq81691__$1);
var seq81691__$2 = cljs.core.next(seq81691__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81692,G__81693,seq81691__$2);
}));

/**
 * Topological sort of a component of a (presumably) directed graph.
 *   Returns nil if the graph contains any cycles. See loom.alg/topsort
 *   for a complete topological sort
 */
loom.alg_generic.topsort_component = (function loom$alg_generic$topsort_component(var_args){
var G__81705 = arguments.length;
switch (G__81705) {
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
var G__82065 = seen__$2;
var G__82066 = explored__$1;
var G__82067 = result;
var G__82068 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.first(us));
seen__$1 = G__82065;
explored__$1 = G__82066;
result = G__82067;
stack = G__82068;
continue;
}
} else {
var G__82069 = seen__$2;
var G__82070 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(explored__$1,v);
var G__82071 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,v);
var G__82072 = cljs.core.pop(stack);
seen__$1 = G__82069;
explored__$1 = G__82070;
result = G__82071;
stack = G__82072;
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
var len__4864__auto___82074 = arguments.length;
var i__4865__auto___82075 = (0);
while(true){
if((i__4865__auto___82075 < len__4864__auto___82074)){
args__4870__auto__.push((arguments[i__4865__auto___82075]));

var G__82076 = (i__4865__auto___82075 + (1));
i__4865__auto___82075 = G__82076;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__81726){
var map__81727 = p__81726;
var map__81727__$1 = cljs.core.__destructure_map(map__81727);
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81727__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var when = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81727__$1,new cljs.core.Keyword(null,"when","when",-576417306));
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81727__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
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
var vec__81750 = temp__5753__auto__;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81750,(0),null);
var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81750,(1),null);
return cljs.core.cons((f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(node,preds,depth) : f__$1.call(null,node,preds,depth)),(new cljs.core.LazySeq(null,(function (){
var nbrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__81713_SHARP_){
var G__81755 = p1__81713_SHARP_;
var G__81756 = node;
var G__81757 = (depth + (1));
return (nbr_pred.cljs$core$IFn$_invoke$arity$3 ? nbr_pred.cljs$core$IFn$_invoke$arity$3(G__81755,G__81756,G__81757) : nbr_pred.call(null,G__81755,G__81756,G__81757));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__81712_SHARP_){
return cljs.core.contains_QMARK_(preds,p1__81712_SHARP_);
}),(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(node) : successors.call(null,node))));
return loom$alg_generic$step(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(queue),(function (){var iter__4652__auto__ = (function loom$alg_generic$step_$_iter__81759(s__81760){
return (new cljs.core.LazySeq(null,(function (){
var s__81760__$1 = s__81760;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__81760__$1);
if(temp__5753__auto____$1){
var s__81760__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__81760__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__81760__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__81762 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__81761 = (0);
while(true){
if((i__81761 < size__4651__auto__)){
var nbr = cljs.core._nth(c__4650__auto__,i__81761);
cljs.core.chunk_append(b__81762,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null));

var G__82077 = (i__81761 + (1));
i__81761 = G__82077;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__81762),loom$alg_generic$step_$_iter__81759(cljs.core.chunk_rest(s__81760__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__81762),null);
}
} else {
var nbr = cljs.core.first(s__81760__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null),loom$alg_generic$step_$_iter__81759(cljs.core.rest(s__81760__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(nbrs);
})()),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__81714_SHARP_,p2__81715_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__81714_SHARP_,p2__81715_SHARP_,node);
}),preds,nbrs));
}),null,null)));
} else {
return null;
}
});
return step(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(0)], null)),((cljs.core.map_QMARK_(seen))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(seen,start,null):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([start,null]),(function (){var iter__4652__auto__ = (function loom$alg_generic$iter__81770(s__81771){
return (new cljs.core.LazySeq(null,(function (){
var s__81771__$1 = s__81771;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__81771__$1);
if(temp__5753__auto__){
var s__81771__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__81771__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__81771__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__81773 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__81772 = (0);
while(true){
if((i__81772 < size__4651__auto__)){
var s = cljs.core._nth(c__4650__auto__,i__81772);
cljs.core.chunk_append(b__81773,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null));

var G__82078 = (i__81772 + (1));
i__81772 = G__82078;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__81773),loom$alg_generic$iter__81770(cljs.core.chunk_rest(s__81771__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__81773),null);
}
} else {
var s = cljs.core.first(s__81771__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null),loom$alg_generic$iter__81770(cljs.core.rest(s__81771__$2)));
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
(loom.alg_generic.bf_traverse.cljs$lang$applyTo = (function (seq81719){
var G__81720 = cljs.core.first(seq81719);
var seq81719__$1 = cljs.core.next(seq81719);
var G__81721 = cljs.core.first(seq81719__$1);
var seq81719__$2 = cljs.core.next(seq81719__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81720,G__81721,seq81719__$2);
}));

/**
 * Return a breadth-first spanning tree of the form {node
 *   [successors]}
 */
loom.alg_generic.bf_span = (function loom$alg_generic$bf_span(var_args){
var args__4870__auto__ = [];
var len__4864__auto___82080 = arguments.length;
var i__4865__auto___82081 = (0);
while(true){
if((i__4865__auto___82081 < len__4864__auto___82080)){
args__4870__auto__.push((arguments[i__4865__auto___82081]));

var G__82082 = (i__4865__auto___82081 + (1));
i__4865__auto___82081 = G__82082;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__81782){
var map__81783 = p__81782;
var map__81783__$1 = cljs.core.__destructure_map(map__81783);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81783__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
return loom.alg_generic.preds__GT_span(cljs.core.last(loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic(successors,start,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"f","f",-1597136552),(function (_,pm,___$1){
return pm;
}),new cljs.core.Keyword(null,"seen","seen",-518999789),seen], 0))));
}));

(loom.alg_generic.bf_span.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(loom.alg_generic.bf_span.cljs$lang$applyTo = (function (seq81779){
var G__81780 = cljs.core.first(seq81779);
var seq81779__$1 = cljs.core.next(seq81779);
var G__81781 = cljs.core.first(seq81779__$1);
var seq81779__$2 = cljs.core.next(seq81779__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81780,G__81781,seq81779__$2);
}));

/**
 * Returns a path from start to end with the fewest hops (i.e. irrespective
 *   of edge weights), successors being a function that returns adjacent nodes
 */
loom.alg_generic.bf_path = (function loom$alg_generic$bf_path(var_args){
var args__4870__auto__ = [];
var len__4864__auto___82086 = arguments.length;
var i__4865__auto___82087 = (0);
while(true){
if((i__4865__auto___82087 < len__4864__auto___82086)){
args__4870__auto__.push((arguments[i__4865__auto___82087]));

var G__82088 = (i__4865__auto___82087 + (1));
i__4865__auto___82087 = G__82088;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,end,p__81789){
var map__81790 = p__81789;
var map__81790__$1 = cljs.core.__destructure_map(map__81790);
var opts = map__81790__$1;
var opts__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector], null)], 0));
var temp__5753__auto__ = cljs.core.some((function (p__81794){
var vec__81796 = p__81794;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81796,(0),null);
var pm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81796,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81796,(2),null);
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
(loom.alg_generic.bf_path.cljs$lang$applyTo = (function (seq81784){
var G__81785 = cljs.core.first(seq81784);
var seq81784__$1 = cljs.core.next(seq81784);
var G__81786 = cljs.core.first(seq81784__$1);
var seq81784__$2 = cljs.core.next(seq81784__$1);
var G__81787 = cljs.core.first(seq81784__$2);
var seq81784__$3 = cljs.core.next(seq81784__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81785,G__81786,G__81787,seq81784__$3);
}));

/**
 * Returns a lazy-seq of the keys that exist in both m1 and m2
 */
loom.alg_generic.shared_keys = (function loom$alg_generic$shared_keys(m1,m2){
while(true){
if((cljs.core.count(m2) < cljs.core.count(m1))){
var G__82089 = m2;
var G__82090 = m1;
m1 = G__82089;
m2 = G__82090;
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
var iter__4652__auto__ = (function loom$alg_generic$reverse_edges_$_iter__81803(s__81804){
return (new cljs.core.LazySeq(null,(function (){
var s__81804__$1 = s__81804;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__81804__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var node = cljs.core.first(xs__6308__auto__);
var iterys__4648__auto__ = ((function (s__81804__$1,node,xs__6308__auto__,temp__5753__auto__){
return (function loom$alg_generic$reverse_edges_$_iter__81803_$_iter__81805(s__81806){
return (new cljs.core.LazySeq(null,((function (s__81804__$1,node,xs__6308__auto__,temp__5753__auto__){
return (function (){
var s__81806__$1 = s__81806;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__81806__$1);
if(temp__5753__auto____$1){
var s__81806__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__81806__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__81806__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__81808 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__81807 = (0);
while(true){
if((i__81807 < size__4651__auto__)){
var nbr = cljs.core._nth(c__4650__auto__,i__81807);
if((!(cljs.core.contains_QMARK_(coll,nbr)))){
cljs.core.chunk_append(b__81808,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null));

var G__82091 = (i__81807 + (1));
i__81807 = G__82091;
continue;
} else {
var G__82092 = (i__81807 + (1));
i__81807 = G__82092;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__81808),loom$alg_generic$reverse_edges_$_iter__81803_$_iter__81805(cljs.core.chunk_rest(s__81806__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__81808),null);
}
} else {
var nbr = cljs.core.first(s__81806__$2);
if((!(cljs.core.contains_QMARK_(coll,nbr)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null),loom$alg_generic$reverse_edges_$_iter__81803_$_iter__81805(cljs.core.rest(s__81806__$2)));
} else {
var G__82094 = cljs.core.rest(s__81806__$2);
s__81806__$1 = G__82094;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__81804__$1,node,xs__6308__auto__,temp__5753__auto__))
,null,null));
});})(s__81804__$1,node,xs__6308__auto__,temp__5753__auto__))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__((successor_fn.cljs$core$IFn$_invoke$arity$1 ? successor_fn.cljs$core$IFn$_invoke$arity$1(node) : successor_fn.call(null,node))));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,loom$alg_generic$reverse_edges_$_iter__81803(cljs.core.rest(s__81804__$1)));
} else {
var G__82095 = cljs.core.rest(s__81804__$1);
s__81804__$1 = G__82095;
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
var iter__4652__auto__ = (function loom$alg_generic$conj_paths_$_iter__81820(s__81821){
return (new cljs.core.LazySeq(null,(function (){
var s__81821__$1 = s__81821;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__81821__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var n = cljs.core.first(xs__6308__auto__);
var iterys__4648__auto__ = ((function (s__81821__$1,n,xs__6308__auto__,temp__5753__auto__){
return (function loom$alg_generic$conj_paths_$_iter__81820_$_iter__81822(s__81823){
return (new cljs.core.LazySeq(null,((function (s__81821__$1,n,xs__6308__auto__,temp__5753__auto__){
return (function (){
var s__81823__$1 = s__81823;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__81823__$1);
if(temp__5753__auto____$1){
var xs__6308__auto____$1 = temp__5753__auto____$1;
var from = cljs.core.first(xs__6308__auto____$1);
var iterys__4648__auto__ = ((function (s__81823__$1,s__81821__$1,from,xs__6308__auto____$1,temp__5753__auto____$1,n,xs__6308__auto__,temp__5753__auto__){
return (function loom$alg_generic$conj_paths_$_iter__81820_$_iter__81822_$_iter__81824(s__81825){
return (new cljs.core.LazySeq(null,((function (s__81823__$1,s__81821__$1,from,xs__6308__auto____$1,temp__5753__auto____$1,n,xs__6308__auto__,temp__5753__auto__){
return (function (){
var s__81825__$1 = s__81825;
while(true){
var temp__5753__auto____$2 = cljs.core.seq(s__81825__$1);
if(temp__5753__auto____$2){
var s__81825__$2 = temp__5753__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__81825__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__81825__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__81827 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__81826 = (0);
while(true){
if((i__81826 < size__4651__auto__)){
var to = cljs.core._nth(c__4650__auto__,i__81826);
cljs.core.chunk_append(b__81827,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(from,to)));

var G__82096 = (i__81826 + (1));
i__81826 = G__82096;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__81827),loom$alg_generic$conj_paths_$_iter__81820_$_iter__81822_$_iter__81824(cljs.core.chunk_rest(s__81825__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__81827),null);
}
} else {
var to = cljs.core.first(s__81825__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(from,to)),loom$alg_generic$conj_paths_$_iter__81820_$_iter__81822_$_iter__81824(cljs.core.rest(s__81825__$2)));
}
} else {
return null;
}
break;
}
});})(s__81823__$1,s__81821__$1,from,xs__6308__auto____$1,temp__5753__auto____$1,n,xs__6308__auto__,temp__5753__auto__))
,null,null));
});})(s__81823__$1,s__81821__$1,from,xs__6308__auto____$1,temp__5753__auto____$1,n,xs__6308__auto__,temp__5753__auto__))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,loom.alg_generic.trace_paths(to_map,n))));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,loom$alg_generic$conj_paths_$_iter__81820_$_iter__81822(cljs.core.rest(s__81823__$1)));
} else {
var G__82097 = cljs.core.rest(s__81823__$1);
s__81823__$1 = G__82097;
continue;
}
} else {
return null;
}
break;
}
});})(s__81821__$1,n,xs__6308__auto__,temp__5753__auto__))
,null,null));
});})(s__81821__$1,n,xs__6308__auto__,temp__5753__auto__))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse,loom.alg_generic.trace_paths(from_map,n))));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,loom$alg_generic$conj_paths_$_iter__81820(cljs.core.rest(s__81821__$1)));
} else {
var G__82098 = cljs.core.rest(s__81821__$1);
s__81821__$1 = G__82098;
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
return cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__81831_SHARP_){
return cljs.core.contains_QMARK_(coll,p1__81831_SHARP_);
}),q));
});
var map_set_pairs = (function (map,pairs){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (map__$1,p__81837){
var vec__81839 = p__81837;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81839,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81839,(1),null);
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
var G__82101 = outgoing__$1;
var G__82102 = incoming;
var G__82103 = q1__$1;
var G__82104 = q2;
outgoing = G__82101;
incoming = G__82102;
q1 = G__82103;
q2 = G__82104;
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
var G__82105 = outgoing;
var G__82106 = incoming__$1;
var G__82107 = q1;
var G__82108 = q2__$1;
outgoing = G__82105;
incoming = G__82106;
q1 = G__82107;
q2 = G__82108;
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
var G__81853 = arguments.length;
switch (G__81853) {
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
var step = (function loom$alg_generic$step(p__81870){
var vec__81871 = p__81870;
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81871,(0),null);
var pq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81871,(1),null);
var temp__5753__auto__ = cljs.core.first(pq);
if(cljs.core.truth_(temp__5753__auto__)){
var vec__81874 = temp__5753__auto__;
var dist_su = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81874,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81874,(1),null);
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81874,(2),null);
var fpq = vec__81874;
return cljs.core.cons((f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(u,state) : f.call(null,u,state)),(new cljs.core.LazySeq(null,(function (){
return loom$alg_generic$step(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__81877,v){
var vec__81878 = p__81877;
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81878,(0),null);
var pq__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81878,(1),null);
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (span,p__81887){
var vec__81888 = p__81887;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81888,(0),null);
var vec__81891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81888,(1),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81891,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81891,(1),null);
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
var temp__5751__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__81894){
var vec__81895 = p__81894;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81895,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81895,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(end,node);
}),loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3(successors,dist,start)));
if(cljs.core.truth_(temp__5751__auto__)){
var vec__81898 = temp__5751__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81898,(0),null);
var end_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81898,(1),null);
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
var len__4864__auto___82122 = arguments.length;
var i__4865__auto___82123 = (0);
while(true){
if((i__4865__auto___82123 < len__4864__auto___82122)){
args__4870__auto__.push((arguments[i__4865__auto___82123]));

var G__82124 = (i__4865__auto___82123 + (1));
i__4865__auto___82123 = G__82124;
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
var seq__81909_82125 = cljs.core.seq(cljs.core.rest(bitmaps));
var chunk__81916_82126 = null;
var count__81917_82127 = (0);
var i__81918_82128 = (0);
while(true){
if((i__81918_82128 < count__81917_82127)){
var bitmap_82129 = chunk__81916_82126.cljs$core$IIndexed$_nth$arity$2(null,i__81918_82128);
var seq__81919_82130 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.list,bitmap_82129));
var chunk__81921_82131 = null;
var count__81922_82132 = (0);
var i__81923_82133 = (0);
while(true){
if((i__81923_82133 < count__81922_82132)){
var vec__81963_82134 = chunk__81921_82131.cljs$core$IIndexed$_nth$arity$2(null,i__81923_82133);
var idx_82135 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81963_82134,(0),null);
var value_82136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81963_82134,(1),null);
var masked_value_82137 = (value_82136 | (new_bitmap[idx_82135]));
(new_bitmap[idx_82135] = masked_value_82137);


var G__82138 = seq__81919_82130;
var G__82139 = chunk__81921_82131;
var G__82140 = count__81922_82132;
var G__82141 = (i__81923_82133 + (1));
seq__81919_82130 = G__82138;
chunk__81921_82131 = G__82139;
count__81922_82132 = G__82140;
i__81923_82133 = G__82141;
continue;
} else {
var temp__5753__auto___82142 = cljs.core.seq(seq__81919_82130);
if(temp__5753__auto___82142){
var seq__81919_82143__$1 = temp__5753__auto___82142;
if(cljs.core.chunked_seq_QMARK_(seq__81919_82143__$1)){
var c__4679__auto___82144 = cljs.core.chunk_first(seq__81919_82143__$1);
var G__82145 = cljs.core.chunk_rest(seq__81919_82143__$1);
var G__82146 = c__4679__auto___82144;
var G__82147 = cljs.core.count(c__4679__auto___82144);
var G__82148 = (0);
seq__81919_82130 = G__82145;
chunk__81921_82131 = G__82146;
count__81922_82132 = G__82147;
i__81923_82133 = G__82148;
continue;
} else {
var vec__81966_82149 = cljs.core.first(seq__81919_82143__$1);
var idx_82150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81966_82149,(0),null);
var value_82151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81966_82149,(1),null);
var masked_value_82152 = (value_82151 | (new_bitmap[idx_82150]));
(new_bitmap[idx_82150] = masked_value_82152);


var G__82153 = cljs.core.next(seq__81919_82143__$1);
var G__82154 = null;
var G__82155 = (0);
var G__82156 = (0);
seq__81919_82130 = G__82153;
chunk__81921_82131 = G__82154;
count__81922_82132 = G__82155;
i__81923_82133 = G__82156;
continue;
}
} else {
}
}
break;
}

var G__82157 = seq__81909_82125;
var G__82158 = chunk__81916_82126;
var G__82159 = count__81917_82127;
var G__82160 = (i__81918_82128 + (1));
seq__81909_82125 = G__82157;
chunk__81916_82126 = G__82158;
count__81917_82127 = G__82159;
i__81918_82128 = G__82160;
continue;
} else {
var temp__5753__auto___82163 = cljs.core.seq(seq__81909_82125);
if(temp__5753__auto___82163){
var seq__81909_82164__$1 = temp__5753__auto___82163;
if(cljs.core.chunked_seq_QMARK_(seq__81909_82164__$1)){
var c__4679__auto___82165 = cljs.core.chunk_first(seq__81909_82164__$1);
var G__82166 = cljs.core.chunk_rest(seq__81909_82164__$1);
var G__82167 = c__4679__auto___82165;
var G__82168 = cljs.core.count(c__4679__auto___82165);
var G__82169 = (0);
seq__81909_82125 = G__82166;
chunk__81916_82126 = G__82167;
count__81917_82127 = G__82168;
i__81918_82128 = G__82169;
continue;
} else {
var bitmap_82170 = cljs.core.first(seq__81909_82164__$1);
var seq__81910_82171 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.list,bitmap_82170));
var chunk__81912_82172 = null;
var count__81913_82173 = (0);
var i__81914_82174 = (0);
while(true){
if((i__81914_82174 < count__81913_82173)){
var vec__81975_82175 = chunk__81912_82172.cljs$core$IIndexed$_nth$arity$2(null,i__81914_82174);
var idx_82176 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81975_82175,(0),null);
var value_82177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81975_82175,(1),null);
var masked_value_82178 = (value_82177 | (new_bitmap[idx_82176]));
(new_bitmap[idx_82176] = masked_value_82178);


var G__82179 = seq__81910_82171;
var G__82180 = chunk__81912_82172;
var G__82181 = count__81913_82173;
var G__82182 = (i__81914_82174 + (1));
seq__81910_82171 = G__82179;
chunk__81912_82172 = G__82180;
count__81913_82173 = G__82181;
i__81914_82174 = G__82182;
continue;
} else {
var temp__5753__auto___82183__$1 = cljs.core.seq(seq__81910_82171);
if(temp__5753__auto___82183__$1){
var seq__81910_82184__$1 = temp__5753__auto___82183__$1;
if(cljs.core.chunked_seq_QMARK_(seq__81910_82184__$1)){
var c__4679__auto___82185 = cljs.core.chunk_first(seq__81910_82184__$1);
var G__82186 = cljs.core.chunk_rest(seq__81910_82184__$1);
var G__82187 = c__4679__auto___82185;
var G__82188 = cljs.core.count(c__4679__auto___82185);
var G__82189 = (0);
seq__81910_82171 = G__82186;
chunk__81912_82172 = G__82187;
count__81913_82173 = G__82188;
i__81914_82174 = G__82189;
continue;
} else {
var vec__81978_82190 = cljs.core.first(seq__81910_82184__$1);
var idx_82191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81978_82190,(0),null);
var value_82192 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81978_82190,(1),null);
var masked_value_82194 = (value_82192 | (new_bitmap[idx_82191]));
(new_bitmap[idx_82191] = masked_value_82194);


var G__82195 = cljs.core.next(seq__81910_82184__$1);
var G__82196 = null;
var G__82197 = (0);
var G__82198 = (0);
seq__81910_82171 = G__82195;
chunk__81912_82172 = G__82196;
count__81913_82173 = G__82197;
i__81914_82174 = G__82198;
continue;
}
} else {
}
}
break;
}

var G__82199 = cljs.core.next(seq__81909_82164__$1);
var G__82200 = null;
var G__82201 = (0);
var G__82202 = (0);
seq__81909_82125 = G__82199;
chunk__81916_82126 = G__82200;
count__81917_82127 = G__82201;
i__81918_82128 = G__82202;
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
(loom.alg_generic.bm_or.cljs$lang$applyTo = (function (seq81905){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq81905));
}));

/**
 * Get the indicies of set bits in 'bitmap.
 */
loom.alg_generic.bm_get_indicies = (function loom$alg_generic$bm_get_indicies(bitmap){
var iter__4652__auto__ = (function loom$alg_generic$bm_get_indicies_$_iter__81981(s__81982){
return (new cljs.core.LazySeq(null,(function (){
var s__81982__$1 = s__81982;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__81982__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var chunk = cljs.core.first(xs__6308__auto__);
var iterys__4648__auto__ = ((function (s__81982__$1,chunk,xs__6308__auto__,temp__5753__auto__){
return (function loom$alg_generic$bm_get_indicies_$_iter__81981_$_iter__81983(s__81984){
return (new cljs.core.LazySeq(null,((function (s__81982__$1,chunk,xs__6308__auto__,temp__5753__auto__){
return (function (){
var s__81984__$1 = s__81984;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__81984__$1);
if(temp__5753__auto____$1){
var s__81984__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__81984__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__81984__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__81986 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__81985 = (0);
while(true){
if((i__81985 < size__4651__auto__)){
var offset = cljs.core._nth(c__4650__auto__,i__81985);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get(bitmap,idx))){
cljs.core.chunk_append(b__81986,idx);

var G__82205 = (i__81985 + (1));
i__81985 = G__82205;
continue;
} else {
var G__82206 = (i__81985 + (1));
i__81985 = G__82206;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__81986),loom$alg_generic$bm_get_indicies_$_iter__81981_$_iter__81983(cljs.core.chunk_rest(s__81984__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__81986),null);
}
} else {
var offset = cljs.core.first(s__81984__$2);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get(bitmap,idx))){
return cljs.core.cons(idx,loom$alg_generic$bm_get_indicies_$_iter__81981_$_iter__81983(cljs.core.rest(s__81984__$2)));
} else {
var G__82207 = cljs.core.rest(s__81984__$2);
s__81984__$1 = G__82207;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__81982__$1,chunk,xs__6308__auto__,temp__5753__auto__))
,null,null));
});})(s__81982__$1,chunk,xs__6308__auto__,temp__5753__auto__))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(loom.alg_generic.bits_per_long)));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,loom$alg_generic$bm_get_indicies_$_iter__81981(cljs.core.rest(s__81982__$1)));
} else {
var G__82210 = cljs.core.rest(s__81982__$1);
s__81982__$1 = G__82210;
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

(loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k81988,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__81992 = k81988;
var G__81992__$1 = (((G__81992 instanceof cljs.core.Keyword))?G__81992.fqn:null);
switch (G__81992__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k81988,else__4505__auto__);

}
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__81993){
var vec__81994 = p__81993;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81994,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81994,(1),null);
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

(loom.alg_generic.Ancestry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__81987){
var self__ = this;
var G__81987__$1 = this;
return (new cljs.core.RecordIter((0),G__81987__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(loom.alg_generic.Ancestry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this81989,other81990){
var self__ = this;
var this81989__$1 = this;
return (((!((other81990 == null)))) && ((((this81989__$1.constructor === other81990.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this81989__$1.node__GT_idx,other81990.node__GT_idx)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this81989__$1.idx__GT_node,other81990.idx__GT_node)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this81989__$1.bitmaps,other81990.bitmaps)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this81989__$1.__extmap,other81990.__extmap)))))))))));
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

(loom.alg_generic.Ancestry.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k81988){
var self__ = this;
var this__4509__auto____$1 = this;
var G__81997 = k81988;
var G__81997__$1 = (((G__81997 instanceof cljs.core.Keyword))?G__81997.fqn:null);
switch (G__81997__$1) {
case "node->idx":
case "idx->node":
case "bitmaps":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k81988);

}
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__81987){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__81998 = cljs.core.keyword_identical_QMARK_;
var expr__81999 = k__4511__auto__;
if(cljs.core.truth_((pred__81998.cljs$core$IFn$_invoke$arity$2 ? pred__81998.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"node->idx","node->idx",152705227),expr__81999) : pred__81998.call(null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),expr__81999)))){
return (new loom.alg_generic.Ancestry(G__81987,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__81998.cljs$core$IFn$_invoke$arity$2 ? pred__81998.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),expr__81999) : pred__81998.call(null,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),expr__81999)))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,G__81987,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__81998.cljs$core$IFn$_invoke$arity$2 ? pred__81998.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),expr__81999) : pred__81998.call(null,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),expr__81999)))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,G__81987,self__.__meta,self__.__extmap,null));
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__81987),null));
}
}
}
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps,null))], null),self__.__extmap));
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__81987){
var self__ = this;
var this__4501__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,G__81987,self__.__extmap,self__.__hash));
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
loom.alg_generic.map__GT_Ancestry = (function loom$alg_generic$map__GT_Ancestry(G__81991){
var extmap__4542__auto__ = (function (){var G__82001 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__81991,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], 0));
if(cljs.core.record_QMARK_(G__81991)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__82001);
} else {
return G__82001;
}
})();
return (new loom.alg_generic.Ancestry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(G__81991),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175).cljs$core$IFn$_invoke$arity$1(G__81991),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842).cljs$core$IFn$_invoke$arity$1(G__81991),null,cljs.core.not_empty(extmap__4542__auto__),null));
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
var len__4864__auto___82228 = arguments.length;
var i__4865__auto___82229 = (0);
while(true){
if((i__4865__auto___82229 < len__4864__auto___82228)){
args__4870__auto__.push((arguments[i__4865__auto___82229]));

var G__82230 = (i__4865__auto___82229 + (1));
i__4865__auto___82229 = G__82230;
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
var map__82005 = ancestry;
var map__82005__$1 = cljs.core.__destructure_map(map__82005);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82005__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82005__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82005__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
(loom.alg_generic.ancestry_add.cljs$lang$applyTo = (function (seq82002){
var G__82003 = cljs.core.first(seq82002);
var seq82002__$1 = cljs.core.next(seq82002);
var G__82004 = cljs.core.first(seq82002__$1);
var seq82002__$2 = cljs.core.next(seq82002__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__82003,G__82004,seq82002__$2);
}));

/**
 * Finds if the 'parenter node is an ancestor of 'childer node for the given
 *   'ancestry cache.
 */
loom.alg_generic.ancestor_QMARK_ = (function loom$alg_generic$ancestor_QMARK_(ancestry,childer,parenter){
var map__82006 = ancestry;
var map__82006__$1 = cljs.core.__destructure_map(map__82006);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82006__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82006__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
var map__82007 = ancestry;
var map__82007__$1 = cljs.core.__destructure_map(map__82007);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82007__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82007__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82007__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
