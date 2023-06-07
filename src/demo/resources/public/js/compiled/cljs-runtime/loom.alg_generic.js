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
return cljs.core.cons(path,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__81665_SHARP_){
var G__81666 = preds;
var G__81667 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,p1__81665_SHARP_);
return (loom.alg_generic.paths.cljs$core$IFn$_invoke$arity$2 ? loom.alg_generic.paths.cljs$core$IFn$_invoke$arity$2(G__81666,G__81667) : loom.alg_generic.paths.call(null,G__81666,G__81667));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__81664_SHARP_){
return cljs.core.not_any_QMARK_((function (edge){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_node,p1__81664_SHARP_], null));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),path));
}),(preds.cljs$core$IFn$_invoke$arity$1 ? preds.cljs$core$IFn$_invoke$arity$1(this_node) : preds.call(null,this_node)))], 0)));
});
/**
 * Given a function and a starting node, returns all possible paths
 *   back to source. Cycles are not accounted for.
 */
loom.alg_generic.trace_paths = (function loom$alg_generic$trace_paths(preds,start){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__81668_SHARP_){
var G__81669 = cljs.core.peek(p1__81668_SHARP_);
return (preds.cljs$core$IFn$_invoke$arity$1 ? preds.cljs$core$IFn$_invoke$arity$1(G__81669) : preds.call(null,G__81669));
}),loom.alg_generic.paths(preds,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null)));
});
/**
 * Converts a map of the form {node predecessor} to a spanning tree of the
 *   form {node [successors]}
 */
loom.alg_generic.preds__GT_span = (function loom$alg_generic$preds__GT_span(preds){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (span,p__81674){
var vec__81675 = p__81674;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81675,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81675,(1),null);
if(cljs.core.truth_(p)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(span,p,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__81678 = p;
var G__81679 = cljs.core.PersistentVector.EMPTY;
return (span.cljs$core$IFn$_invoke$arity$2 ? span.cljs$core$IFn$_invoke$arity$2(G__81678,G__81679) : span.call(null,G__81678,G__81679));
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
var len__4864__auto___82017 = arguments.length;
var i__4865__auto___82018 = (0);
while(true){
if((i__4865__auto___82018 < len__4864__auto___82017)){
args__4870__auto__.push((arguments[i__4865__auto___82018]));

var G__82019 = (i__4865__auto___82018 + (1));
i__4865__auto___82018 = G__82019;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__81683){
var map__81684 = p__81683;
var map__81684__$1 = cljs.core.__destructure_map(map__81684);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__81684__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
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
(loom.alg_generic.pre_traverse.cljs$lang$applyTo = (function (seq81680){
var G__81681 = cljs.core.first(seq81680);
var seq81680__$1 = cljs.core.next(seq81680);
var G__81682 = cljs.core.first(seq81680__$1);
var seq81680__$2 = cljs.core.next(seq81680__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81681,G__81682,seq81680__$2);
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
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__81688){
var map__81690 = p__81688;
var map__81690__$1 = cljs.core.__destructure_map(map__81690);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__81690__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = (function loom$alg_generic$step(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1){
while(true){
var temp__5751__auto__ = cljs.core.first(nbrs);
if(cljs.core.truth_(temp__5751__auto__)){
var nbr = temp__5751__auto__;
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null),(new cljs.core.LazySeq(null,((function (successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5751__auto__,map__81690,map__81690__$1,seen){
return (function (){
var seen__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,start__$1);
if(cljs.core.truth_((seen__$2.cljs$core$IFn$_invoke$arity$1 ? seen__$2.cljs$core$IFn$_invoke$arity$1(nbr) : seen__$2.call(null,nbr)))){
return loom$alg_generic$step(successors__$1,start__$1,cljs.core.next(nbrs),stack,nbrstack,seen__$2);
} else {
return loom$alg_generic$step(successors__$1,nbr,(successors__$1.cljs$core$IFn$_invoke$arity$1 ? successors__$1.cljs$core$IFn$_invoke$arity$1(nbr) : successors__$1.call(null,nbr)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,start__$1),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nbrstack,cljs.core.next(nbrs)),seen__$2);
}
});})(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5751__auto__,map__81690,map__81690__$1,seen))
,null,null)));
} else {
var temp__5753__auto__ = cljs.core.peek(stack);
if(cljs.core.truth_(temp__5753__auto__)){
var parent = temp__5753__auto__;
var G__82023 = successors__$1;
var G__82024 = parent;
var G__82025 = cljs.core.peek(nbrstack);
var G__82026 = cljs.core.pop(stack);
var G__82027 = cljs.core.pop(nbrstack);
var G__82028 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,start__$1);
successors__$1 = G__82023;
start__$1 = G__82024;
nbrs = G__82025;
stack = G__82026;
nbrstack = G__82027;
seen__$1 = G__82028;
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
(loom.alg_generic.pre_edge_traverse.cljs$lang$applyTo = (function (seq81685){
var G__81686 = cljs.core.first(seq81685);
var seq81685__$1 = cljs.core.next(seq81685);
var G__81687 = cljs.core.first(seq81685__$1);
var seq81685__$2 = cljs.core.next(seq81685__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81686,G__81687,seq81685__$2);
}));

/**
 * Returns a depth-first spanning tree of the form {node [successors]}
 */
loom.alg_generic.pre_span = (function loom$alg_generic$pre_span(var_args){
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
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__81715){
var map__81716 = p__81715;
var map__81716__$1 = cljs.core.__destructure_map(map__81716);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__81716__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81716__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__82032 = seen__$2;
var G__82033 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(preds,u,v);
var G__82034 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,u);
seen__$1 = G__82032;
preds = G__82033;
stack = G__82034;
continue;
} else {
var G__82035 = seen__$2;
var G__82036 = preds;
var G__82037 = cljs.core.pop(stack);
seen__$1 = G__82035;
preds = G__82036;
stack = G__82037;
continue;
}
}
break;
}
}));

(loom.alg_generic.pre_span.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(loom.alg_generic.pre_span.cljs$lang$applyTo = (function (seq81700){
var G__81701 = cljs.core.first(seq81700);
var seq81700__$1 = cljs.core.next(seq81700);
var G__81702 = cljs.core.first(seq81700__$1);
var seq81700__$2 = cljs.core.next(seq81700__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81701,G__81702,seq81700__$2);
}));

/**
 * Traverses a graph depth-first postorder from start, successors
 *   being a function that returns adjacent nodes. Returns a vector
 */
loom.alg_generic.post_traverse = (function loom$alg_generic$post_traverse(var_args){
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
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__81738){
var map__81739 = p__81738;
var map__81739__$1 = cljs.core.__destructure_map(map__81739);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__81739__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81739__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__82043 = seen__$2;
var G__82044 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,v);
var G__82045 = cljs.core.pop(stack);
seen__$1 = G__82043;
result = G__82044;
stack = G__82045;
continue;
} else {
var G__82046 = seen__$2;
var G__82047 = result;
var G__82048 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.first(nbrs));
seen__$1 = G__82046;
result = G__82047;
stack = G__82048;
continue;
}
}
break;
}
}));

(loom.alg_generic.post_traverse.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(loom.alg_generic.post_traverse.cljs$lang$applyTo = (function (seq81735){
var G__81736 = cljs.core.first(seq81735);
var seq81735__$1 = cljs.core.next(seq81735);
var G__81737 = cljs.core.first(seq81735__$1);
var seq81735__$2 = cljs.core.next(seq81735__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81736,G__81737,seq81735__$2);
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
var len__4864__auto___82049 = arguments.length;
var i__4865__auto___82050 = (0);
while(true){
if((i__4865__auto___82050 < len__4864__auto___82049)){
args__4870__auto__.push((arguments[i__4865__auto___82050]));

var G__82051 = (i__4865__auto___82050 + (1));
i__4865__auto___82050 = G__82051;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__81751){
var map__81752 = p__81751;
var map__81752__$1 = cljs.core.__destructure_map(map__81752);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__81752__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81752__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__82052 = start__$1;
var G__82053 = cljs.core.next(nbrs);
var G__82054 = stack;
var G__82055 = nbrstack;
var G__82056 = seen__$2;
var G__82057 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__82052;
nbrs = G__82053;
stack = G__82054;
nbrstack = G__82055;
seen__$1 = G__82056;
edges = G__82057;
continue;
} else {
var G__82058 = nbr;
var G__82059 = (successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(nbr) : successors.call(null,nbr));
var G__82060 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,start__$1);
var G__82061 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nbrstack,cljs.core.next(nbrs));
var G__82062 = seen__$2;
var G__82063 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__82058;
nbrs = G__82059;
stack = G__82060;
nbrstack = G__82061;
seen__$1 = G__82062;
edges = G__82063;
continue;
}
} else {
var temp__5751__auto____$1 = cljs.core.peek(stack);
if(cljs.core.truth_(temp__5751__auto____$1)){
var parent = temp__5751__auto____$1;
var G__82064 = parent;
var G__82065 = cljs.core.peek(nbrstack);
var G__82066 = cljs.core.pop(stack);
var G__82067 = cljs.core.pop(nbrstack);
var G__82068 = seen__$2;
var G__82069 = edges;
start__$1 = G__82064;
nbrs = G__82065;
stack = G__82066;
nbrstack = G__82067;
seen__$1 = G__82068;
edges = G__82069;
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
(loom.alg_generic.post_edge_traverse.cljs$lang$applyTo = (function (seq81740){
var G__81741 = cljs.core.first(seq81740);
var seq81740__$1 = cljs.core.next(seq81740);
var G__81742 = cljs.core.first(seq81740__$1);
var seq81740__$2 = cljs.core.next(seq81740__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81741,G__81742,seq81740__$2);
}));

/**
 * Topological sort of a component of a (presumably) directed graph.
 *   Returns nil if the graph contains any cycles. See loom.alg/topsort
 *   for a complete topological sort
 */
loom.alg_generic.topsort_component = (function loom$alg_generic$topsort_component(var_args){
var G__81754 = arguments.length;
switch (G__81754) {
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
var G__82071 = seen__$2;
var G__82072 = explored__$1;
var G__82073 = result;
var G__82074 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.first(us));
seen__$1 = G__82071;
explored__$1 = G__82072;
result = G__82073;
stack = G__82074;
continue;
}
} else {
var G__82075 = seen__$2;
var G__82076 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(explored__$1,v);
var G__82077 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,v);
var G__82078 = cljs.core.pop(stack);
seen__$1 = G__82075;
explored__$1 = G__82076;
result = G__82077;
stack = G__82078;
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
var len__4864__auto___82079 = arguments.length;
var i__4865__auto___82080 = (0);
while(true){
if((i__4865__auto___82080 < len__4864__auto___82079)){
args__4870__auto__.push((arguments[i__4865__auto___82080]));

var G__82083 = (i__4865__auto___82080 + (1));
i__4865__auto___82080 = G__82083;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__81770){
var map__81771 = p__81770;
var map__81771__$1 = cljs.core.__destructure_map(map__81771);
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81771__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var when = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81771__$1,new cljs.core.Keyword(null,"when","when",-576417306));
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81771__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
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
var vec__81786 = temp__5753__auto__;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81786,(0),null);
var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81786,(1),null);
return cljs.core.cons((f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(node,preds,depth) : f__$1.call(null,node,preds,depth)),(new cljs.core.LazySeq(null,(function (){
var nbrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__81764_SHARP_){
var G__81789 = p1__81764_SHARP_;
var G__81790 = node;
var G__81791 = (depth + (1));
return (nbr_pred.cljs$core$IFn$_invoke$arity$3 ? nbr_pred.cljs$core$IFn$_invoke$arity$3(G__81789,G__81790,G__81791) : nbr_pred.call(null,G__81789,G__81790,G__81791));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__81763_SHARP_){
return cljs.core.contains_QMARK_(preds,p1__81763_SHARP_);
}),(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(node) : successors.call(null,node))));
return loom$alg_generic$step(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(queue),(function (){var iter__4652__auto__ = (function loom$alg_generic$step_$_iter__81792(s__81793){
return (new cljs.core.LazySeq(null,(function (){
var s__81793__$1 = s__81793;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__81793__$1);
if(temp__5753__auto____$1){
var s__81793__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__81793__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__81793__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__81795 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__81794 = (0);
while(true){
if((i__81794 < size__4651__auto__)){
var nbr = cljs.core._nth(c__4650__auto__,i__81794);
cljs.core.chunk_append(b__81795,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null));

var G__82086 = (i__81794 + (1));
i__81794 = G__82086;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__81795),loom$alg_generic$step_$_iter__81792(cljs.core.chunk_rest(s__81793__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__81795),null);
}
} else {
var nbr = cljs.core.first(s__81793__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null),loom$alg_generic$step_$_iter__81792(cljs.core.rest(s__81793__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(nbrs);
})()),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__81765_SHARP_,p2__81766_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__81765_SHARP_,p2__81766_SHARP_,node);
}),preds,nbrs));
}),null,null)));
} else {
return null;
}
});
return step(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(0)], null)),((cljs.core.map_QMARK_(seen))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(seen,start,null):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([start,null]),(function (){var iter__4652__auto__ = (function loom$alg_generic$iter__81796(s__81797){
return (new cljs.core.LazySeq(null,(function (){
var s__81797__$1 = s__81797;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__81797__$1);
if(temp__5753__auto__){
var s__81797__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__81797__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__81797__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__81799 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__81798 = (0);
while(true){
if((i__81798 < size__4651__auto__)){
var s = cljs.core._nth(c__4650__auto__,i__81798);
cljs.core.chunk_append(b__81799,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null));

var G__82087 = (i__81798 + (1));
i__81798 = G__82087;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__81799),loom$alg_generic$iter__81796(cljs.core.chunk_rest(s__81797__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__81799),null);
}
} else {
var s = cljs.core.first(s__81797__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null),loom$alg_generic$iter__81796(cljs.core.rest(s__81797__$2)));
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
(loom.alg_generic.bf_traverse.cljs$lang$applyTo = (function (seq81767){
var G__81768 = cljs.core.first(seq81767);
var seq81767__$1 = cljs.core.next(seq81767);
var G__81769 = cljs.core.first(seq81767__$1);
var seq81767__$2 = cljs.core.next(seq81767__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81768,G__81769,seq81767__$2);
}));

/**
 * Return a breadth-first spanning tree of the form {node
 *   [successors]}
 */
loom.alg_generic.bf_span = (function loom$alg_generic$bf_span(var_args){
var args__4870__auto__ = [];
var len__4864__auto___82088 = arguments.length;
var i__4865__auto___82089 = (0);
while(true){
if((i__4865__auto___82089 < len__4864__auto___82088)){
args__4870__auto__.push((arguments[i__4865__auto___82089]));

var G__82090 = (i__4865__auto___82089 + (1));
i__4865__auto___82089 = G__82090;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__81817){
var map__81818 = p__81817;
var map__81818__$1 = cljs.core.__destructure_map(map__81818);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81818__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
return loom.alg_generic.preds__GT_span(cljs.core.last(loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic(successors,start,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"f","f",-1597136552),(function (_,pm,___$1){
return pm;
}),new cljs.core.Keyword(null,"seen","seen",-518999789),seen], 0))));
}));

(loom.alg_generic.bf_span.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(loom.alg_generic.bf_span.cljs$lang$applyTo = (function (seq81814){
var G__81815 = cljs.core.first(seq81814);
var seq81814__$1 = cljs.core.next(seq81814);
var G__81816 = cljs.core.first(seq81814__$1);
var seq81814__$2 = cljs.core.next(seq81814__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81815,G__81816,seq81814__$2);
}));

/**
 * Returns a path from start to end with the fewest hops (i.e. irrespective
 *   of edge weights), successors being a function that returns adjacent nodes
 */
loom.alg_generic.bf_path = (function loom$alg_generic$bf_path(var_args){
var args__4870__auto__ = [];
var len__4864__auto___82095 = arguments.length;
var i__4865__auto___82096 = (0);
while(true){
if((i__4865__auto___82096 < len__4864__auto___82095)){
args__4870__auto__.push((arguments[i__4865__auto___82096]));

var G__82097 = (i__4865__auto___82096 + (1));
i__4865__auto___82096 = G__82097;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,end,p__81823){
var map__81824 = p__81823;
var map__81824__$1 = cljs.core.__destructure_map(map__81824);
var opts = map__81824__$1;
var opts__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector], null)], 0));
var temp__5753__auto__ = cljs.core.some((function (p__81828){
var vec__81829 = p__81828;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81829,(0),null);
var pm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81829,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81829,(2),null);
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
(loom.alg_generic.bf_path.cljs$lang$applyTo = (function (seq81819){
var G__81820 = cljs.core.first(seq81819);
var seq81819__$1 = cljs.core.next(seq81819);
var G__81821 = cljs.core.first(seq81819__$1);
var seq81819__$2 = cljs.core.next(seq81819__$1);
var G__81822 = cljs.core.first(seq81819__$2);
var seq81819__$3 = cljs.core.next(seq81819__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81820,G__81821,G__81822,seq81819__$3);
}));

/**
 * Returns a lazy-seq of the keys that exist in both m1 and m2
 */
loom.alg_generic.shared_keys = (function loom$alg_generic$shared_keys(m1,m2){
while(true){
if((cljs.core.count(m2) < cljs.core.count(m1))){
var G__82098 = m2;
var G__82099 = m1;
m1 = G__82098;
m2 = G__82099;
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
var iter__4652__auto__ = (function loom$alg_generic$reverse_edges_$_iter__81840(s__81841){
return (new cljs.core.LazySeq(null,(function (){
var s__81841__$1 = s__81841;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__81841__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var node = cljs.core.first(xs__6308__auto__);
var iterys__4648__auto__ = ((function (s__81841__$1,node,xs__6308__auto__,temp__5753__auto__){
return (function loom$alg_generic$reverse_edges_$_iter__81840_$_iter__81842(s__81843){
return (new cljs.core.LazySeq(null,((function (s__81841__$1,node,xs__6308__auto__,temp__5753__auto__){
return (function (){
var s__81843__$1 = s__81843;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__81843__$1);
if(temp__5753__auto____$1){
var s__81843__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__81843__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__81843__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__81845 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__81844 = (0);
while(true){
if((i__81844 < size__4651__auto__)){
var nbr = cljs.core._nth(c__4650__auto__,i__81844);
if((!(cljs.core.contains_QMARK_(coll,nbr)))){
cljs.core.chunk_append(b__81845,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null));

var G__82100 = (i__81844 + (1));
i__81844 = G__82100;
continue;
} else {
var G__82101 = (i__81844 + (1));
i__81844 = G__82101;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__81845),loom$alg_generic$reverse_edges_$_iter__81840_$_iter__81842(cljs.core.chunk_rest(s__81843__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__81845),null);
}
} else {
var nbr = cljs.core.first(s__81843__$2);
if((!(cljs.core.contains_QMARK_(coll,nbr)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null),loom$alg_generic$reverse_edges_$_iter__81840_$_iter__81842(cljs.core.rest(s__81843__$2)));
} else {
var G__82103 = cljs.core.rest(s__81843__$2);
s__81843__$1 = G__82103;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__81841__$1,node,xs__6308__auto__,temp__5753__auto__))
,null,null));
});})(s__81841__$1,node,xs__6308__auto__,temp__5753__auto__))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__((successor_fn.cljs$core$IFn$_invoke$arity$1 ? successor_fn.cljs$core$IFn$_invoke$arity$1(node) : successor_fn.call(null,node))));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,loom$alg_generic$reverse_edges_$_iter__81840(cljs.core.rest(s__81841__$1)));
} else {
var G__82104 = cljs.core.rest(s__81841__$1);
s__81841__$1 = G__82104;
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
var iter__4652__auto__ = (function loom$alg_generic$conj_paths_$_iter__81851(s__81852){
return (new cljs.core.LazySeq(null,(function (){
var s__81852__$1 = s__81852;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__81852__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var n = cljs.core.first(xs__6308__auto__);
var iterys__4648__auto__ = ((function (s__81852__$1,n,xs__6308__auto__,temp__5753__auto__){
return (function loom$alg_generic$conj_paths_$_iter__81851_$_iter__81853(s__81854){
return (new cljs.core.LazySeq(null,((function (s__81852__$1,n,xs__6308__auto__,temp__5753__auto__){
return (function (){
var s__81854__$1 = s__81854;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__81854__$1);
if(temp__5753__auto____$1){
var xs__6308__auto____$1 = temp__5753__auto____$1;
var from = cljs.core.first(xs__6308__auto____$1);
var iterys__4648__auto__ = ((function (s__81854__$1,s__81852__$1,from,xs__6308__auto____$1,temp__5753__auto____$1,n,xs__6308__auto__,temp__5753__auto__){
return (function loom$alg_generic$conj_paths_$_iter__81851_$_iter__81853_$_iter__81855(s__81856){
return (new cljs.core.LazySeq(null,((function (s__81854__$1,s__81852__$1,from,xs__6308__auto____$1,temp__5753__auto____$1,n,xs__6308__auto__,temp__5753__auto__){
return (function (){
var s__81856__$1 = s__81856;
while(true){
var temp__5753__auto____$2 = cljs.core.seq(s__81856__$1);
if(temp__5753__auto____$2){
var s__81856__$2 = temp__5753__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__81856__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__81856__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__81858 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__81857 = (0);
while(true){
if((i__81857 < size__4651__auto__)){
var to = cljs.core._nth(c__4650__auto__,i__81857);
cljs.core.chunk_append(b__81858,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(from,to)));

var G__82105 = (i__81857 + (1));
i__81857 = G__82105;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__81858),loom$alg_generic$conj_paths_$_iter__81851_$_iter__81853_$_iter__81855(cljs.core.chunk_rest(s__81856__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__81858),null);
}
} else {
var to = cljs.core.first(s__81856__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(from,to)),loom$alg_generic$conj_paths_$_iter__81851_$_iter__81853_$_iter__81855(cljs.core.rest(s__81856__$2)));
}
} else {
return null;
}
break;
}
});})(s__81854__$1,s__81852__$1,from,xs__6308__auto____$1,temp__5753__auto____$1,n,xs__6308__auto__,temp__5753__auto__))
,null,null));
});})(s__81854__$1,s__81852__$1,from,xs__6308__auto____$1,temp__5753__auto____$1,n,xs__6308__auto__,temp__5753__auto__))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,loom.alg_generic.trace_paths(to_map,n))));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,loom$alg_generic$conj_paths_$_iter__81851_$_iter__81853(cljs.core.rest(s__81854__$1)));
} else {
var G__82106 = cljs.core.rest(s__81854__$1);
s__81854__$1 = G__82106;
continue;
}
} else {
return null;
}
break;
}
});})(s__81852__$1,n,xs__6308__auto__,temp__5753__auto__))
,null,null));
});})(s__81852__$1,n,xs__6308__auto__,temp__5753__auto__))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse,loom.alg_generic.trace_paths(from_map,n))));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,loom$alg_generic$conj_paths_$_iter__81851(cljs.core.rest(s__81852__$1)));
} else {
var G__82107 = cljs.core.rest(s__81852__$1);
s__81852__$1 = G__82107;
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
return cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__81859_SHARP_){
return cljs.core.contains_QMARK_(coll,p1__81859_SHARP_);
}),q));
});
var map_set_pairs = (function (map,pairs){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (map__$1,p__81866){
var vec__81867 = p__81866;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81867,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81867,(1),null);
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
var G__82117 = outgoing__$1;
var G__82118 = incoming;
var G__82119 = q1__$1;
var G__82120 = q2;
outgoing = G__82117;
incoming = G__82118;
q1 = G__82119;
q2 = G__82120;
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
var G__82121 = outgoing;
var G__82122 = incoming__$1;
var G__82123 = q1;
var G__82124 = q2__$1;
outgoing = G__82121;
incoming = G__82122;
q1 = G__82123;
q2 = G__82124;
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
var G__81873 = arguments.length;
switch (G__81873) {
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
var step = (function loom$alg_generic$step(p__81893){
var vec__81894 = p__81893;
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81894,(0),null);
var pq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81894,(1),null);
var temp__5753__auto__ = cljs.core.first(pq);
if(cljs.core.truth_(temp__5753__auto__)){
var vec__81897 = temp__5753__auto__;
var dist_su = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81897,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81897,(1),null);
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81897,(2),null);
var fpq = vec__81897;
return cljs.core.cons((f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(u,state) : f.call(null,u,state)),(new cljs.core.LazySeq(null,(function (){
return loom$alg_generic$step(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__81900,v){
var vec__81901 = p__81900;
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81901,(0),null);
var pq__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81901,(1),null);
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (span,p__81908){
var vec__81909 = p__81908;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81909,(0),null);
var vec__81912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81909,(1),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81912,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81912,(1),null);
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
var temp__5751__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__81915){
var vec__81916 = p__81915;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81916,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81916,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(end,node);
}),loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3(successors,dist,start)));
if(cljs.core.truth_(temp__5751__auto__)){
var vec__81919 = temp__5751__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81919,(0),null);
var end_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81919,(1),null);
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
var len__4864__auto___82129 = arguments.length;
var i__4865__auto___82130 = (0);
while(true){
if((i__4865__auto___82130 < len__4864__auto___82129)){
args__4870__auto__.push((arguments[i__4865__auto___82130]));

var G__82131 = (i__4865__auto___82130 + (1));
i__4865__auto___82130 = G__82131;
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
var seq__81926_82132 = cljs.core.seq(cljs.core.rest(bitmaps));
var chunk__81933_82133 = null;
var count__81934_82134 = (0);
var i__81935_82135 = (0);
while(true){
if((i__81935_82135 < count__81934_82134)){
var bitmap_82136 = chunk__81933_82133.cljs$core$IIndexed$_nth$arity$2(null,i__81935_82135);
var seq__81936_82137 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.list,bitmap_82136));
var chunk__81938_82138 = null;
var count__81939_82139 = (0);
var i__81940_82140 = (0);
while(true){
if((i__81940_82140 < count__81939_82139)){
var vec__81972_82141 = chunk__81938_82138.cljs$core$IIndexed$_nth$arity$2(null,i__81940_82140);
var idx_82142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81972_82141,(0),null);
var value_82143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81972_82141,(1),null);
var masked_value_82144 = (value_82143 | (new_bitmap[idx_82142]));
(new_bitmap[idx_82142] = masked_value_82144);


var G__82145 = seq__81936_82137;
var G__82146 = chunk__81938_82138;
var G__82147 = count__81939_82139;
var G__82148 = (i__81940_82140 + (1));
seq__81936_82137 = G__82145;
chunk__81938_82138 = G__82146;
count__81939_82139 = G__82147;
i__81940_82140 = G__82148;
continue;
} else {
var temp__5753__auto___82149 = cljs.core.seq(seq__81936_82137);
if(temp__5753__auto___82149){
var seq__81936_82150__$1 = temp__5753__auto___82149;
if(cljs.core.chunked_seq_QMARK_(seq__81936_82150__$1)){
var c__4679__auto___82151 = cljs.core.chunk_first(seq__81936_82150__$1);
var G__82153 = cljs.core.chunk_rest(seq__81936_82150__$1);
var G__82154 = c__4679__auto___82151;
var G__82155 = cljs.core.count(c__4679__auto___82151);
var G__82156 = (0);
seq__81936_82137 = G__82153;
chunk__81938_82138 = G__82154;
count__81939_82139 = G__82155;
i__81940_82140 = G__82156;
continue;
} else {
var vec__81975_82158 = cljs.core.first(seq__81936_82150__$1);
var idx_82159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81975_82158,(0),null);
var value_82160 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81975_82158,(1),null);
var masked_value_82161 = (value_82160 | (new_bitmap[idx_82159]));
(new_bitmap[idx_82159] = masked_value_82161);


var G__82162 = cljs.core.next(seq__81936_82150__$1);
var G__82163 = null;
var G__82164 = (0);
var G__82165 = (0);
seq__81936_82137 = G__82162;
chunk__81938_82138 = G__82163;
count__81939_82139 = G__82164;
i__81940_82140 = G__82165;
continue;
}
} else {
}
}
break;
}

var G__82166 = seq__81926_82132;
var G__82167 = chunk__81933_82133;
var G__82168 = count__81934_82134;
var G__82169 = (i__81935_82135 + (1));
seq__81926_82132 = G__82166;
chunk__81933_82133 = G__82167;
count__81934_82134 = G__82168;
i__81935_82135 = G__82169;
continue;
} else {
var temp__5753__auto___82170 = cljs.core.seq(seq__81926_82132);
if(temp__5753__auto___82170){
var seq__81926_82171__$1 = temp__5753__auto___82170;
if(cljs.core.chunked_seq_QMARK_(seq__81926_82171__$1)){
var c__4679__auto___82172 = cljs.core.chunk_first(seq__81926_82171__$1);
var G__82173 = cljs.core.chunk_rest(seq__81926_82171__$1);
var G__82174 = c__4679__auto___82172;
var G__82175 = cljs.core.count(c__4679__auto___82172);
var G__82176 = (0);
seq__81926_82132 = G__82173;
chunk__81933_82133 = G__82174;
count__81934_82134 = G__82175;
i__81935_82135 = G__82176;
continue;
} else {
var bitmap_82177 = cljs.core.first(seq__81926_82171__$1);
var seq__81927_82178 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.list,bitmap_82177));
var chunk__81929_82179 = null;
var count__81930_82180 = (0);
var i__81931_82181 = (0);
while(true){
if((i__81931_82181 < count__81930_82180)){
var vec__81984_82182 = chunk__81929_82179.cljs$core$IIndexed$_nth$arity$2(null,i__81931_82181);
var idx_82183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81984_82182,(0),null);
var value_82184 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81984_82182,(1),null);
var masked_value_82185 = (value_82184 | (new_bitmap[idx_82183]));
(new_bitmap[idx_82183] = masked_value_82185);


var G__82186 = seq__81927_82178;
var G__82187 = chunk__81929_82179;
var G__82188 = count__81930_82180;
var G__82189 = (i__81931_82181 + (1));
seq__81927_82178 = G__82186;
chunk__81929_82179 = G__82187;
count__81930_82180 = G__82188;
i__81931_82181 = G__82189;
continue;
} else {
var temp__5753__auto___82190__$1 = cljs.core.seq(seq__81927_82178);
if(temp__5753__auto___82190__$1){
var seq__81927_82191__$1 = temp__5753__auto___82190__$1;
if(cljs.core.chunked_seq_QMARK_(seq__81927_82191__$1)){
var c__4679__auto___82192 = cljs.core.chunk_first(seq__81927_82191__$1);
var G__82193 = cljs.core.chunk_rest(seq__81927_82191__$1);
var G__82194 = c__4679__auto___82192;
var G__82195 = cljs.core.count(c__4679__auto___82192);
var G__82196 = (0);
seq__81927_82178 = G__82193;
chunk__81929_82179 = G__82194;
count__81930_82180 = G__82195;
i__81931_82181 = G__82196;
continue;
} else {
var vec__81987_82197 = cljs.core.first(seq__81927_82191__$1);
var idx_82198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81987_82197,(0),null);
var value_82199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81987_82197,(1),null);
var masked_value_82200 = (value_82199 | (new_bitmap[idx_82198]));
(new_bitmap[idx_82198] = masked_value_82200);


var G__82201 = cljs.core.next(seq__81927_82191__$1);
var G__82202 = null;
var G__82203 = (0);
var G__82204 = (0);
seq__81927_82178 = G__82201;
chunk__81929_82179 = G__82202;
count__81930_82180 = G__82203;
i__81931_82181 = G__82204;
continue;
}
} else {
}
}
break;
}

var G__82205 = cljs.core.next(seq__81926_82171__$1);
var G__82206 = null;
var G__82207 = (0);
var G__82208 = (0);
seq__81926_82132 = G__82205;
chunk__81933_82133 = G__82206;
count__81934_82134 = G__82207;
i__81935_82135 = G__82208;
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
(loom.alg_generic.bm_or.cljs$lang$applyTo = (function (seq81925){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq81925));
}));

/**
 * Get the indicies of set bits in 'bitmap.
 */
loom.alg_generic.bm_get_indicies = (function loom$alg_generic$bm_get_indicies(bitmap){
var iter__4652__auto__ = (function loom$alg_generic$bm_get_indicies_$_iter__81990(s__81991){
return (new cljs.core.LazySeq(null,(function (){
var s__81991__$1 = s__81991;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__81991__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var chunk = cljs.core.first(xs__6308__auto__);
var iterys__4648__auto__ = ((function (s__81991__$1,chunk,xs__6308__auto__,temp__5753__auto__){
return (function loom$alg_generic$bm_get_indicies_$_iter__81990_$_iter__81992(s__81993){
return (new cljs.core.LazySeq(null,((function (s__81991__$1,chunk,xs__6308__auto__,temp__5753__auto__){
return (function (){
var s__81993__$1 = s__81993;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__81993__$1);
if(temp__5753__auto____$1){
var s__81993__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__81993__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__81993__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__81995 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__81994 = (0);
while(true){
if((i__81994 < size__4651__auto__)){
var offset = cljs.core._nth(c__4650__auto__,i__81994);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get(bitmap,idx))){
cljs.core.chunk_append(b__81995,idx);

var G__82212 = (i__81994 + (1));
i__81994 = G__82212;
continue;
} else {
var G__82213 = (i__81994 + (1));
i__81994 = G__82213;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__81995),loom$alg_generic$bm_get_indicies_$_iter__81990_$_iter__81992(cljs.core.chunk_rest(s__81993__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__81995),null);
}
} else {
var offset = cljs.core.first(s__81993__$2);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get(bitmap,idx))){
return cljs.core.cons(idx,loom$alg_generic$bm_get_indicies_$_iter__81990_$_iter__81992(cljs.core.rest(s__81993__$2)));
} else {
var G__82214 = cljs.core.rest(s__81993__$2);
s__81993__$1 = G__82214;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__81991__$1,chunk,xs__6308__auto__,temp__5753__auto__))
,null,null));
});})(s__81991__$1,chunk,xs__6308__auto__,temp__5753__auto__))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(loom.alg_generic.bits_per_long)));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,loom$alg_generic$bm_get_indicies_$_iter__81990(cljs.core.rest(s__81991__$1)));
} else {
var G__82215 = cljs.core.rest(s__81991__$1);
s__81991__$1 = G__82215;
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

(loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k81997,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__82001 = k81997;
var G__82001__$1 = (((G__82001 instanceof cljs.core.Keyword))?G__82001.fqn:null);
switch (G__82001__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k81997,else__4505__auto__);

}
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__82002){
var vec__82003 = p__82002;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82003,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82003,(1),null);
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

(loom.alg_generic.Ancestry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__81996){
var self__ = this;
var G__81996__$1 = this;
return (new cljs.core.RecordIter((0),G__81996__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(loom.alg_generic.Ancestry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this81998,other81999){
var self__ = this;
var this81998__$1 = this;
return (((!((other81999 == null)))) && ((((this81998__$1.constructor === other81999.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this81998__$1.node__GT_idx,other81999.node__GT_idx)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this81998__$1.idx__GT_node,other81999.idx__GT_node)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this81998__$1.bitmaps,other81999.bitmaps)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this81998__$1.__extmap,other81999.__extmap)))))))))));
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

(loom.alg_generic.Ancestry.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k81997){
var self__ = this;
var this__4509__auto____$1 = this;
var G__82006 = k81997;
var G__82006__$1 = (((G__82006 instanceof cljs.core.Keyword))?G__82006.fqn:null);
switch (G__82006__$1) {
case "node->idx":
case "idx->node":
case "bitmaps":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k81997);

}
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__81996){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__82007 = cljs.core.keyword_identical_QMARK_;
var expr__82008 = k__4511__auto__;
if(cljs.core.truth_((pred__82007.cljs$core$IFn$_invoke$arity$2 ? pred__82007.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"node->idx","node->idx",152705227),expr__82008) : pred__82007.call(null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),expr__82008)))){
return (new loom.alg_generic.Ancestry(G__81996,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__82007.cljs$core$IFn$_invoke$arity$2 ? pred__82007.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),expr__82008) : pred__82007.call(null,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),expr__82008)))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,G__81996,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__82007.cljs$core$IFn$_invoke$arity$2 ? pred__82007.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),expr__82008) : pred__82007.call(null,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),expr__82008)))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,G__81996,self__.__meta,self__.__extmap,null));
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__81996),null));
}
}
}
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps,null))], null),self__.__extmap));
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__81996){
var self__ = this;
var this__4501__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,G__81996,self__.__extmap,self__.__hash));
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
loom.alg_generic.map__GT_Ancestry = (function loom$alg_generic$map__GT_Ancestry(G__82000){
var extmap__4542__auto__ = (function (){var G__82010 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__82000,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], 0));
if(cljs.core.record_QMARK_(G__82000)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__82010);
} else {
return G__82010;
}
})();
return (new loom.alg_generic.Ancestry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(G__82000),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175).cljs$core$IFn$_invoke$arity$1(G__82000),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842).cljs$core$IFn$_invoke$arity$1(G__82000),null,cljs.core.not_empty(extmap__4542__auto__),null));
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
var len__4864__auto___82227 = arguments.length;
var i__4865__auto___82228 = (0);
while(true){
if((i__4865__auto___82228 < len__4864__auto___82227)){
args__4870__auto__.push((arguments[i__4865__auto___82228]));

var G__82231 = (i__4865__auto___82228 + (1));
i__4865__auto___82228 = G__82231;
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
var map__82014 = ancestry;
var map__82014__$1 = cljs.core.__destructure_map(map__82014);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82014__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82014__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82014__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
(loom.alg_generic.ancestry_add.cljs$lang$applyTo = (function (seq82011){
var G__82012 = cljs.core.first(seq82011);
var seq82011__$1 = cljs.core.next(seq82011);
var G__82013 = cljs.core.first(seq82011__$1);
var seq82011__$2 = cljs.core.next(seq82011__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__82012,G__82013,seq82011__$2);
}));

/**
 * Finds if the 'parenter node is an ancestor of 'childer node for the given
 *   'ancestry cache.
 */
loom.alg_generic.ancestor_QMARK_ = (function loom$alg_generic$ancestor_QMARK_(ancestry,childer,parenter){
var map__82015 = ancestry;
var map__82015__$1 = cljs.core.__destructure_map(map__82015);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82015__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82015__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
var map__82016 = ancestry;
var map__82016__$1 = cljs.core.__destructure_map(map__82016);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82016__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82016__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82016__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
