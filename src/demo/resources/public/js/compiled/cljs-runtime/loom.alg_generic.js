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
return cljs.core.cons(path,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__51686_SHARP_){
var G__51687 = preds;
var G__51688 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,p1__51686_SHARP_);
return (loom.alg_generic.paths.cljs$core$IFn$_invoke$arity$2 ? loom.alg_generic.paths.cljs$core$IFn$_invoke$arity$2(G__51687,G__51688) : loom.alg_generic.paths.call(null,G__51687,G__51688));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__51685_SHARP_){
return cljs.core.not_any_QMARK_((function (edge){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_node,p1__51685_SHARP_], null));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),path));
}),(preds.cljs$core$IFn$_invoke$arity$1 ? preds.cljs$core$IFn$_invoke$arity$1(this_node) : preds.call(null,this_node)))], 0)));
});
/**
 * Given a function and a starting node, returns all possible paths
 *   back to source. Cycles are not accounted for.
 */
loom.alg_generic.trace_paths = (function loom$alg_generic$trace_paths(preds,start){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__51689_SHARP_){
var G__51690 = cljs.core.peek(p1__51689_SHARP_);
return (preds.cljs$core$IFn$_invoke$arity$1 ? preds.cljs$core$IFn$_invoke$arity$1(G__51690) : preds.call(null,G__51690));
}),loom.alg_generic.paths(preds,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null)));
});
/**
 * Converts a map of the form {node predecessor} to a spanning tree of the
 *   form {node [successors]}
 */
loom.alg_generic.preds__GT_span = (function loom$alg_generic$preds__GT_span(preds){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (span,p__51691){
var vec__51692 = p__51691;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51692,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51692,(1),null);
if(cljs.core.truth_(p)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(span,p,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__51695 = p;
var G__51696 = cljs.core.PersistentVector.EMPTY;
return (span.cljs$core$IFn$_invoke$arity$2 ? span.cljs$core$IFn$_invoke$arity$2(G__51695,G__51696) : span.call(null,G__51695,G__51696));
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
var len__4864__auto___51927 = arguments.length;
var i__4865__auto___51928 = (0);
while(true){
if((i__4865__auto___51928 < len__4864__auto___51927)){
args__4870__auto__.push((arguments[i__4865__auto___51928]));

var G__51929 = (i__4865__auto___51928 + (1));
i__4865__auto___51928 = G__51929;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__51700){
var map__51701 = p__51700;
var map__51701__$1 = cljs.core.__destructure_map(map__51701);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51701__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
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
(loom.alg_generic.pre_traverse.cljs$lang$applyTo = (function (seq51697){
var G__51698 = cljs.core.first(seq51697);
var seq51697__$1 = cljs.core.next(seq51697);
var G__51699 = cljs.core.first(seq51697__$1);
var seq51697__$2 = cljs.core.next(seq51697__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51698,G__51699,seq51697__$2);
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
var len__4864__auto___51933 = arguments.length;
var i__4865__auto___51934 = (0);
while(true){
if((i__4865__auto___51934 < len__4864__auto___51933)){
args__4870__auto__.push((arguments[i__4865__auto___51934]));

var G__51935 = (i__4865__auto___51934 + (1));
i__4865__auto___51934 = G__51935;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__51705){
var map__51706 = p__51705;
var map__51706__$1 = cljs.core.__destructure_map(map__51706);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51706__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = (function loom$alg_generic$step(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1){
while(true){
var temp__5751__auto__ = cljs.core.first(nbrs);
if(cljs.core.truth_(temp__5751__auto__)){
var nbr = temp__5751__auto__;
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null),(new cljs.core.LazySeq(null,((function (successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5751__auto__,map__51706,map__51706__$1,seen){
return (function (){
var seen__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,start__$1);
if(cljs.core.truth_((seen__$2.cljs$core$IFn$_invoke$arity$1 ? seen__$2.cljs$core$IFn$_invoke$arity$1(nbr) : seen__$2.call(null,nbr)))){
return loom$alg_generic$step(successors__$1,start__$1,cljs.core.next(nbrs),stack,nbrstack,seen__$2);
} else {
return loom$alg_generic$step(successors__$1,nbr,(successors__$1.cljs$core$IFn$_invoke$arity$1 ? successors__$1.cljs$core$IFn$_invoke$arity$1(nbr) : successors__$1.call(null,nbr)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,start__$1),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nbrstack,cljs.core.next(nbrs)),seen__$2);
}
});})(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5751__auto__,map__51706,map__51706__$1,seen))
,null,null)));
} else {
var temp__5753__auto__ = cljs.core.peek(stack);
if(cljs.core.truth_(temp__5753__auto__)){
var parent = temp__5753__auto__;
var G__51937 = successors__$1;
var G__51938 = parent;
var G__51939 = cljs.core.peek(nbrstack);
var G__51940 = cljs.core.pop(stack);
var G__51941 = cljs.core.pop(nbrstack);
var G__51942 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,start__$1);
successors__$1 = G__51937;
start__$1 = G__51938;
nbrs = G__51939;
stack = G__51940;
nbrstack = G__51941;
seen__$1 = G__51942;
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
(loom.alg_generic.pre_edge_traverse.cljs$lang$applyTo = (function (seq51702){
var G__51703 = cljs.core.first(seq51702);
var seq51702__$1 = cljs.core.next(seq51702);
var G__51704 = cljs.core.first(seq51702__$1);
var seq51702__$2 = cljs.core.next(seq51702__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51703,G__51704,seq51702__$2);
}));

/**
 * Returns a depth-first spanning tree of the form {node [successors]}
 */
loom.alg_generic.pre_span = (function loom$alg_generic$pre_span(var_args){
var args__4870__auto__ = [];
var len__4864__auto___51945 = arguments.length;
var i__4865__auto___51946 = (0);
while(true){
if((i__4865__auto___51946 < len__4864__auto___51945)){
args__4870__auto__.push((arguments[i__4865__auto___51946]));

var G__51947 = (i__4865__auto___51946 + (1));
i__4865__auto___51946 = G__51947;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__51710){
var map__51711 = p__51710;
var map__51711__$1 = cljs.core.__destructure_map(map__51711);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51711__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51711__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__51948 = seen__$2;
var G__51949 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(preds,u,v);
var G__51950 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,u);
seen__$1 = G__51948;
preds = G__51949;
stack = G__51950;
continue;
} else {
var G__51951 = seen__$2;
var G__51952 = preds;
var G__51953 = cljs.core.pop(stack);
seen__$1 = G__51951;
preds = G__51952;
stack = G__51953;
continue;
}
}
break;
}
}));

(loom.alg_generic.pre_span.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(loom.alg_generic.pre_span.cljs$lang$applyTo = (function (seq51707){
var G__51708 = cljs.core.first(seq51707);
var seq51707__$1 = cljs.core.next(seq51707);
var G__51709 = cljs.core.first(seq51707__$1);
var seq51707__$2 = cljs.core.next(seq51707__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51708,G__51709,seq51707__$2);
}));

/**
 * Traverses a graph depth-first postorder from start, successors
 *   being a function that returns adjacent nodes. Returns a vector
 */
loom.alg_generic.post_traverse = (function loom$alg_generic$post_traverse(var_args){
var args__4870__auto__ = [];
var len__4864__auto___51954 = arguments.length;
var i__4865__auto___51955 = (0);
while(true){
if((i__4865__auto___51955 < len__4864__auto___51954)){
args__4870__auto__.push((arguments[i__4865__auto___51955]));

var G__51956 = (i__4865__auto___51955 + (1));
i__4865__auto___51955 = G__51956;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__51715){
var map__51716 = p__51715;
var map__51716__$1 = cljs.core.__destructure_map(map__51716);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51716__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51716__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__51960 = seen__$2;
var G__51961 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,v);
var G__51962 = cljs.core.pop(stack);
seen__$1 = G__51960;
result = G__51961;
stack = G__51962;
continue;
} else {
var G__51963 = seen__$2;
var G__51964 = result;
var G__51965 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.first(nbrs));
seen__$1 = G__51963;
result = G__51964;
stack = G__51965;
continue;
}
}
break;
}
}));

(loom.alg_generic.post_traverse.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(loom.alg_generic.post_traverse.cljs$lang$applyTo = (function (seq51712){
var G__51713 = cljs.core.first(seq51712);
var seq51712__$1 = cljs.core.next(seq51712);
var G__51714 = cljs.core.first(seq51712__$1);
var seq51712__$2 = cljs.core.next(seq51712__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51713,G__51714,seq51712__$2);
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
var len__4864__auto___51967 = arguments.length;
var i__4865__auto___51968 = (0);
while(true){
if((i__4865__auto___51968 < len__4864__auto___51967)){
args__4870__auto__.push((arguments[i__4865__auto___51968]));

var G__51969 = (i__4865__auto___51968 + (1));
i__4865__auto___51968 = G__51969;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__51720){
var map__51721 = p__51720;
var map__51721__$1 = cljs.core.__destructure_map(map__51721);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51721__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51721__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__51970 = start__$1;
var G__51971 = cljs.core.next(nbrs);
var G__51972 = stack;
var G__51973 = nbrstack;
var G__51974 = seen__$2;
var G__51975 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__51970;
nbrs = G__51971;
stack = G__51972;
nbrstack = G__51973;
seen__$1 = G__51974;
edges = G__51975;
continue;
} else {
var G__51976 = nbr;
var G__51977 = (successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(nbr) : successors.call(null,nbr));
var G__51978 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,start__$1);
var G__51979 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nbrstack,cljs.core.next(nbrs));
var G__51980 = seen__$2;
var G__51981 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__51976;
nbrs = G__51977;
stack = G__51978;
nbrstack = G__51979;
seen__$1 = G__51980;
edges = G__51981;
continue;
}
} else {
var temp__5751__auto____$1 = cljs.core.peek(stack);
if(cljs.core.truth_(temp__5751__auto____$1)){
var parent = temp__5751__auto____$1;
var G__51982 = parent;
var G__51983 = cljs.core.peek(nbrstack);
var G__51984 = cljs.core.pop(stack);
var G__51985 = cljs.core.pop(nbrstack);
var G__51986 = seen__$2;
var G__51987 = edges;
start__$1 = G__51982;
nbrs = G__51983;
stack = G__51984;
nbrstack = G__51985;
seen__$1 = G__51986;
edges = G__51987;
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
(loom.alg_generic.post_edge_traverse.cljs$lang$applyTo = (function (seq51717){
var G__51718 = cljs.core.first(seq51717);
var seq51717__$1 = cljs.core.next(seq51717);
var G__51719 = cljs.core.first(seq51717__$1);
var seq51717__$2 = cljs.core.next(seq51717__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51718,G__51719,seq51717__$2);
}));

/**
 * Topological sort of a component of a (presumably) directed graph.
 *   Returns nil if the graph contains any cycles. See loom.alg/topsort
 *   for a complete topological sort
 */
loom.alg_generic.topsort_component = (function loom$alg_generic$topsort_component(var_args){
var G__51723 = arguments.length;
switch (G__51723) {
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
var G__51990 = seen__$2;
var G__51991 = explored__$1;
var G__51992 = result;
var G__51993 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.first(us));
seen__$1 = G__51990;
explored__$1 = G__51991;
result = G__51992;
stack = G__51993;
continue;
}
} else {
var G__51994 = seen__$2;
var G__51995 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(explored__$1,v);
var G__51996 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,v);
var G__51997 = cljs.core.pop(stack);
seen__$1 = G__51994;
explored__$1 = G__51995;
result = G__51996;
stack = G__51997;
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
var len__4864__auto___51998 = arguments.length;
var i__4865__auto___51999 = (0);
while(true){
if((i__4865__auto___51999 < len__4864__auto___51998)){
args__4870__auto__.push((arguments[i__4865__auto___51999]));

var G__52002 = (i__4865__auto___51999 + (1));
i__4865__auto___51999 = G__52002;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__51731){
var map__51732 = p__51731;
var map__51732__$1 = cljs.core.__destructure_map(map__51732);
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51732__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var when = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51732__$1,new cljs.core.Keyword(null,"when","when",-576417306));
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51732__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
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
var vec__51743 = temp__5753__auto__;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51743,(0),null);
var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51743,(1),null);
return cljs.core.cons((f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(node,preds,depth) : f__$1.call(null,node,preds,depth)),(new cljs.core.LazySeq(null,(function (){
var nbrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__51725_SHARP_){
var G__51746 = p1__51725_SHARP_;
var G__51747 = node;
var G__51748 = (depth + (1));
return (nbr_pred.cljs$core$IFn$_invoke$arity$3 ? nbr_pred.cljs$core$IFn$_invoke$arity$3(G__51746,G__51747,G__51748) : nbr_pred.call(null,G__51746,G__51747,G__51748));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__51724_SHARP_){
return cljs.core.contains_QMARK_(preds,p1__51724_SHARP_);
}),(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(node) : successors.call(null,node))));
return loom$alg_generic$step(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(queue),(function (){var iter__4652__auto__ = (function loom$alg_generic$step_$_iter__51749(s__51750){
return (new cljs.core.LazySeq(null,(function (){
var s__51750__$1 = s__51750;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__51750__$1);
if(temp__5753__auto____$1){
var s__51750__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51750__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__51750__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__51752 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__51751 = (0);
while(true){
if((i__51751 < size__4651__auto__)){
var nbr = cljs.core._nth(c__4650__auto__,i__51751);
cljs.core.chunk_append(b__51752,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null));

var G__52013 = (i__51751 + (1));
i__51751 = G__52013;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51752),loom$alg_generic$step_$_iter__51749(cljs.core.chunk_rest(s__51750__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51752),null);
}
} else {
var nbr = cljs.core.first(s__51750__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null),loom$alg_generic$step_$_iter__51749(cljs.core.rest(s__51750__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(nbrs);
})()),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__51726_SHARP_,p2__51727_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__51726_SHARP_,p2__51727_SHARP_,node);
}),preds,nbrs));
}),null,null)));
} else {
return null;
}
});
return step(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(0)], null)),((cljs.core.map_QMARK_(seen))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(seen,start,null):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([start,null]),(function (){var iter__4652__auto__ = (function loom$alg_generic$iter__51753(s__51754){
return (new cljs.core.LazySeq(null,(function (){
var s__51754__$1 = s__51754;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__51754__$1);
if(temp__5753__auto__){
var s__51754__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51754__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__51754__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__51756 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__51755 = (0);
while(true){
if((i__51755 < size__4651__auto__)){
var s = cljs.core._nth(c__4650__auto__,i__51755);
cljs.core.chunk_append(b__51756,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null));

var G__52018 = (i__51755 + (1));
i__51755 = G__52018;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51756),loom$alg_generic$iter__51753(cljs.core.chunk_rest(s__51754__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51756),null);
}
} else {
var s = cljs.core.first(s__51754__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null),loom$alg_generic$iter__51753(cljs.core.rest(s__51754__$2)));
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
(loom.alg_generic.bf_traverse.cljs$lang$applyTo = (function (seq51728){
var G__51729 = cljs.core.first(seq51728);
var seq51728__$1 = cljs.core.next(seq51728);
var G__51730 = cljs.core.first(seq51728__$1);
var seq51728__$2 = cljs.core.next(seq51728__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51729,G__51730,seq51728__$2);
}));

/**
 * Return a breadth-first spanning tree of the form {node
 *   [successors]}
 */
loom.alg_generic.bf_span = (function loom$alg_generic$bf_span(var_args){
var args__4870__auto__ = [];
var len__4864__auto___52022 = arguments.length;
var i__4865__auto___52023 = (0);
while(true){
if((i__4865__auto___52023 < len__4864__auto___52022)){
args__4870__auto__.push((arguments[i__4865__auto___52023]));

var G__52024 = (i__4865__auto___52023 + (1));
i__4865__auto___52023 = G__52024;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__51760){
var map__51761 = p__51760;
var map__51761__$1 = cljs.core.__destructure_map(map__51761);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51761__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
return loom.alg_generic.preds__GT_span(cljs.core.last(loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic(successors,start,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"f","f",-1597136552),(function (_,pm,___$1){
return pm;
}),new cljs.core.Keyword(null,"seen","seen",-518999789),seen], 0))));
}));

(loom.alg_generic.bf_span.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(loom.alg_generic.bf_span.cljs$lang$applyTo = (function (seq51757){
var G__51758 = cljs.core.first(seq51757);
var seq51757__$1 = cljs.core.next(seq51757);
var G__51759 = cljs.core.first(seq51757__$1);
var seq51757__$2 = cljs.core.next(seq51757__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51758,G__51759,seq51757__$2);
}));

/**
 * Returns a path from start to end with the fewest hops (i.e. irrespective
 *   of edge weights), successors being a function that returns adjacent nodes
 */
loom.alg_generic.bf_path = (function loom$alg_generic$bf_path(var_args){
var args__4870__auto__ = [];
var len__4864__auto___52025 = arguments.length;
var i__4865__auto___52026 = (0);
while(true){
if((i__4865__auto___52026 < len__4864__auto___52025)){
args__4870__auto__.push((arguments[i__4865__auto___52026]));

var G__52027 = (i__4865__auto___52026 + (1));
i__4865__auto___52026 = G__52027;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,end,p__51766){
var map__51767 = p__51766;
var map__51767__$1 = cljs.core.__destructure_map(map__51767);
var opts = map__51767__$1;
var opts__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector], null)], 0));
var temp__5753__auto__ = cljs.core.some((function (p__51768){
var vec__51769 = p__51768;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51769,(0),null);
var pm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51769,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51769,(2),null);
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
(loom.alg_generic.bf_path.cljs$lang$applyTo = (function (seq51762){
var G__51763 = cljs.core.first(seq51762);
var seq51762__$1 = cljs.core.next(seq51762);
var G__51764 = cljs.core.first(seq51762__$1);
var seq51762__$2 = cljs.core.next(seq51762__$1);
var G__51765 = cljs.core.first(seq51762__$2);
var seq51762__$3 = cljs.core.next(seq51762__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51763,G__51764,G__51765,seq51762__$3);
}));

/**
 * Returns a lazy-seq of the keys that exist in both m1 and m2
 */
loom.alg_generic.shared_keys = (function loom$alg_generic$shared_keys(m1,m2){
while(true){
if((cljs.core.count(m2) < cljs.core.count(m1))){
var G__52030 = m2;
var G__52031 = m1;
m1 = G__52030;
m2 = G__52031;
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
var iter__4652__auto__ = (function loom$alg_generic$reverse_edges_$_iter__51773(s__51774){
return (new cljs.core.LazySeq(null,(function (){
var s__51774__$1 = s__51774;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__51774__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var node = cljs.core.first(xs__6308__auto__);
var iterys__4648__auto__ = ((function (s__51774__$1,node,xs__6308__auto__,temp__5753__auto__){
return (function loom$alg_generic$reverse_edges_$_iter__51773_$_iter__51775(s__51776){
return (new cljs.core.LazySeq(null,((function (s__51774__$1,node,xs__6308__auto__,temp__5753__auto__){
return (function (){
var s__51776__$1 = s__51776;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__51776__$1);
if(temp__5753__auto____$1){
var s__51776__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51776__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__51776__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__51778 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__51777 = (0);
while(true){
if((i__51777 < size__4651__auto__)){
var nbr = cljs.core._nth(c__4650__auto__,i__51777);
if((!(cljs.core.contains_QMARK_(coll,nbr)))){
cljs.core.chunk_append(b__51778,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null));

var G__52032 = (i__51777 + (1));
i__51777 = G__52032;
continue;
} else {
var G__52033 = (i__51777 + (1));
i__51777 = G__52033;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51778),loom$alg_generic$reverse_edges_$_iter__51773_$_iter__51775(cljs.core.chunk_rest(s__51776__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51778),null);
}
} else {
var nbr = cljs.core.first(s__51776__$2);
if((!(cljs.core.contains_QMARK_(coll,nbr)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null),loom$alg_generic$reverse_edges_$_iter__51773_$_iter__51775(cljs.core.rest(s__51776__$2)));
} else {
var G__52036 = cljs.core.rest(s__51776__$2);
s__51776__$1 = G__52036;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__51774__$1,node,xs__6308__auto__,temp__5753__auto__))
,null,null));
});})(s__51774__$1,node,xs__6308__auto__,temp__5753__auto__))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__((successor_fn.cljs$core$IFn$_invoke$arity$1 ? successor_fn.cljs$core$IFn$_invoke$arity$1(node) : successor_fn.call(null,node))));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,loom$alg_generic$reverse_edges_$_iter__51773(cljs.core.rest(s__51774__$1)));
} else {
var G__52040 = cljs.core.rest(s__51774__$1);
s__51774__$1 = G__52040;
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
var iter__4652__auto__ = (function loom$alg_generic$conj_paths_$_iter__51779(s__51780){
return (new cljs.core.LazySeq(null,(function (){
var s__51780__$1 = s__51780;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__51780__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var n = cljs.core.first(xs__6308__auto__);
var iterys__4648__auto__ = ((function (s__51780__$1,n,xs__6308__auto__,temp__5753__auto__){
return (function loom$alg_generic$conj_paths_$_iter__51779_$_iter__51781(s__51782){
return (new cljs.core.LazySeq(null,((function (s__51780__$1,n,xs__6308__auto__,temp__5753__auto__){
return (function (){
var s__51782__$1 = s__51782;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__51782__$1);
if(temp__5753__auto____$1){
var xs__6308__auto____$1 = temp__5753__auto____$1;
var from = cljs.core.first(xs__6308__auto____$1);
var iterys__4648__auto__ = ((function (s__51782__$1,s__51780__$1,from,xs__6308__auto____$1,temp__5753__auto____$1,n,xs__6308__auto__,temp__5753__auto__){
return (function loom$alg_generic$conj_paths_$_iter__51779_$_iter__51781_$_iter__51783(s__51784){
return (new cljs.core.LazySeq(null,((function (s__51782__$1,s__51780__$1,from,xs__6308__auto____$1,temp__5753__auto____$1,n,xs__6308__auto__,temp__5753__auto__){
return (function (){
var s__51784__$1 = s__51784;
while(true){
var temp__5753__auto____$2 = cljs.core.seq(s__51784__$1);
if(temp__5753__auto____$2){
var s__51784__$2 = temp__5753__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__51784__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__51784__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__51786 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__51785 = (0);
while(true){
if((i__51785 < size__4651__auto__)){
var to = cljs.core._nth(c__4650__auto__,i__51785);
cljs.core.chunk_append(b__51786,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(from,to)));

var G__52052 = (i__51785 + (1));
i__51785 = G__52052;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51786),loom$alg_generic$conj_paths_$_iter__51779_$_iter__51781_$_iter__51783(cljs.core.chunk_rest(s__51784__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51786),null);
}
} else {
var to = cljs.core.first(s__51784__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(from,to)),loom$alg_generic$conj_paths_$_iter__51779_$_iter__51781_$_iter__51783(cljs.core.rest(s__51784__$2)));
}
} else {
return null;
}
break;
}
});})(s__51782__$1,s__51780__$1,from,xs__6308__auto____$1,temp__5753__auto____$1,n,xs__6308__auto__,temp__5753__auto__))
,null,null));
});})(s__51782__$1,s__51780__$1,from,xs__6308__auto____$1,temp__5753__auto____$1,n,xs__6308__auto__,temp__5753__auto__))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,loom.alg_generic.trace_paths(to_map,n))));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,loom$alg_generic$conj_paths_$_iter__51779_$_iter__51781(cljs.core.rest(s__51782__$1)));
} else {
var G__52055 = cljs.core.rest(s__51782__$1);
s__51782__$1 = G__52055;
continue;
}
} else {
return null;
}
break;
}
});})(s__51780__$1,n,xs__6308__auto__,temp__5753__auto__))
,null,null));
});})(s__51780__$1,n,xs__6308__auto__,temp__5753__auto__))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse,loom.alg_generic.trace_paths(from_map,n))));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,loom$alg_generic$conj_paths_$_iter__51779(cljs.core.rest(s__51780__$1)));
} else {
var G__52056 = cljs.core.rest(s__51780__$1);
s__51780__$1 = G__52056;
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
return cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__51787_SHARP_){
return cljs.core.contains_QMARK_(coll,p1__51787_SHARP_);
}),q));
});
var map_set_pairs = (function (map,pairs){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (map__$1,p__51788){
var vec__51789 = p__51788;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51789,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51789,(1),null);
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
var G__52059 = outgoing__$1;
var G__52060 = incoming;
var G__52061 = q1__$1;
var G__52062 = q2;
outgoing = G__52059;
incoming = G__52060;
q1 = G__52061;
q2 = G__52062;
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
var G__52063 = outgoing;
var G__52064 = incoming__$1;
var G__52065 = q1;
var G__52066 = q2__$1;
outgoing = G__52063;
incoming = G__52064;
q1 = G__52065;
q2 = G__52066;
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
var G__51795 = arguments.length;
switch (G__51795) {
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
var step = (function loom$alg_generic$step(p__51807){
var vec__51808 = p__51807;
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51808,(0),null);
var pq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51808,(1),null);
var temp__5753__auto__ = cljs.core.first(pq);
if(cljs.core.truth_(temp__5753__auto__)){
var vec__51811 = temp__5753__auto__;
var dist_su = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51811,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51811,(1),null);
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51811,(2),null);
var fpq = vec__51811;
return cljs.core.cons((f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(u,state) : f.call(null,u,state)),(new cljs.core.LazySeq(null,(function (){
return loom$alg_generic$step(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__51814,v){
var vec__51815 = p__51814;
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51815,(0),null);
var pq__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51815,(1),null);
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (span,p__51818){
var vec__51819 = p__51818;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51819,(0),null);
var vec__51822 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51819,(1),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51822,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51822,(1),null);
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
var temp__5751__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__51825){
var vec__51826 = p__51825;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51826,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51826,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(end,node);
}),loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3(successors,dist,start)));
if(cljs.core.truth_(temp__5751__auto__)){
var vec__51829 = temp__5751__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51829,(0),null);
var end_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51829,(1),null);
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
var len__4864__auto___52068 = arguments.length;
var i__4865__auto___52069 = (0);
while(true){
if((i__4865__auto___52069 < len__4864__auto___52068)){
args__4870__auto__.push((arguments[i__4865__auto___52069]));

var G__52070 = (i__4865__auto___52069 + (1));
i__4865__auto___52069 = G__52070;
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
var seq__51836_52071 = cljs.core.seq(cljs.core.rest(bitmaps));
var chunk__51843_52072 = null;
var count__51844_52073 = (0);
var i__51845_52074 = (0);
while(true){
if((i__51845_52074 < count__51844_52073)){
var bitmap_52075 = chunk__51843_52072.cljs$core$IIndexed$_nth$arity$2(null,i__51845_52074);
var seq__51846_52076 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.list,bitmap_52075));
var chunk__51848_52077 = null;
var count__51849_52078 = (0);
var i__51850_52079 = (0);
while(true){
if((i__51850_52079 < count__51849_52078)){
var vec__51882_52080 = chunk__51848_52077.cljs$core$IIndexed$_nth$arity$2(null,i__51850_52079);
var idx_52081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51882_52080,(0),null);
var value_52082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51882_52080,(1),null);
var masked_value_52083 = (value_52082 | (new_bitmap[idx_52081]));
(new_bitmap[idx_52081] = masked_value_52083);


var G__52084 = seq__51846_52076;
var G__52085 = chunk__51848_52077;
var G__52086 = count__51849_52078;
var G__52087 = (i__51850_52079 + (1));
seq__51846_52076 = G__52084;
chunk__51848_52077 = G__52085;
count__51849_52078 = G__52086;
i__51850_52079 = G__52087;
continue;
} else {
var temp__5753__auto___52088 = cljs.core.seq(seq__51846_52076);
if(temp__5753__auto___52088){
var seq__51846_52089__$1 = temp__5753__auto___52088;
if(cljs.core.chunked_seq_QMARK_(seq__51846_52089__$1)){
var c__4679__auto___52090 = cljs.core.chunk_first(seq__51846_52089__$1);
var G__52091 = cljs.core.chunk_rest(seq__51846_52089__$1);
var G__52092 = c__4679__auto___52090;
var G__52093 = cljs.core.count(c__4679__auto___52090);
var G__52094 = (0);
seq__51846_52076 = G__52091;
chunk__51848_52077 = G__52092;
count__51849_52078 = G__52093;
i__51850_52079 = G__52094;
continue;
} else {
var vec__51885_52095 = cljs.core.first(seq__51846_52089__$1);
var idx_52096 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51885_52095,(0),null);
var value_52097 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51885_52095,(1),null);
var masked_value_52098 = (value_52097 | (new_bitmap[idx_52096]));
(new_bitmap[idx_52096] = masked_value_52098);


var G__52099 = cljs.core.next(seq__51846_52089__$1);
var G__52100 = null;
var G__52101 = (0);
var G__52102 = (0);
seq__51846_52076 = G__52099;
chunk__51848_52077 = G__52100;
count__51849_52078 = G__52101;
i__51850_52079 = G__52102;
continue;
}
} else {
}
}
break;
}

var G__52103 = seq__51836_52071;
var G__52104 = chunk__51843_52072;
var G__52105 = count__51844_52073;
var G__52106 = (i__51845_52074 + (1));
seq__51836_52071 = G__52103;
chunk__51843_52072 = G__52104;
count__51844_52073 = G__52105;
i__51845_52074 = G__52106;
continue;
} else {
var temp__5753__auto___52107 = cljs.core.seq(seq__51836_52071);
if(temp__5753__auto___52107){
var seq__51836_52108__$1 = temp__5753__auto___52107;
if(cljs.core.chunked_seq_QMARK_(seq__51836_52108__$1)){
var c__4679__auto___52109 = cljs.core.chunk_first(seq__51836_52108__$1);
var G__52110 = cljs.core.chunk_rest(seq__51836_52108__$1);
var G__52111 = c__4679__auto___52109;
var G__52112 = cljs.core.count(c__4679__auto___52109);
var G__52113 = (0);
seq__51836_52071 = G__52110;
chunk__51843_52072 = G__52111;
count__51844_52073 = G__52112;
i__51845_52074 = G__52113;
continue;
} else {
var bitmap_52114 = cljs.core.first(seq__51836_52108__$1);
var seq__51837_52115 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.list,bitmap_52114));
var chunk__51839_52116 = null;
var count__51840_52117 = (0);
var i__51841_52118 = (0);
while(true){
if((i__51841_52118 < count__51840_52117)){
var vec__51894_52119 = chunk__51839_52116.cljs$core$IIndexed$_nth$arity$2(null,i__51841_52118);
var idx_52120 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51894_52119,(0),null);
var value_52121 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51894_52119,(1),null);
var masked_value_52122 = (value_52121 | (new_bitmap[idx_52120]));
(new_bitmap[idx_52120] = masked_value_52122);


var G__52123 = seq__51837_52115;
var G__52124 = chunk__51839_52116;
var G__52125 = count__51840_52117;
var G__52126 = (i__51841_52118 + (1));
seq__51837_52115 = G__52123;
chunk__51839_52116 = G__52124;
count__51840_52117 = G__52125;
i__51841_52118 = G__52126;
continue;
} else {
var temp__5753__auto___52127__$1 = cljs.core.seq(seq__51837_52115);
if(temp__5753__auto___52127__$1){
var seq__51837_52128__$1 = temp__5753__auto___52127__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51837_52128__$1)){
var c__4679__auto___52129 = cljs.core.chunk_first(seq__51837_52128__$1);
var G__52130 = cljs.core.chunk_rest(seq__51837_52128__$1);
var G__52131 = c__4679__auto___52129;
var G__52132 = cljs.core.count(c__4679__auto___52129);
var G__52133 = (0);
seq__51837_52115 = G__52130;
chunk__51839_52116 = G__52131;
count__51840_52117 = G__52132;
i__51841_52118 = G__52133;
continue;
} else {
var vec__51897_52134 = cljs.core.first(seq__51837_52128__$1);
var idx_52135 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51897_52134,(0),null);
var value_52136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51897_52134,(1),null);
var masked_value_52137 = (value_52136 | (new_bitmap[idx_52135]));
(new_bitmap[idx_52135] = masked_value_52137);


var G__52138 = cljs.core.next(seq__51837_52128__$1);
var G__52139 = null;
var G__52140 = (0);
var G__52141 = (0);
seq__51837_52115 = G__52138;
chunk__51839_52116 = G__52139;
count__51840_52117 = G__52140;
i__51841_52118 = G__52141;
continue;
}
} else {
}
}
break;
}

var G__52142 = cljs.core.next(seq__51836_52108__$1);
var G__52143 = null;
var G__52144 = (0);
var G__52145 = (0);
seq__51836_52071 = G__52142;
chunk__51843_52072 = G__52143;
count__51844_52073 = G__52144;
i__51845_52074 = G__52145;
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
(loom.alg_generic.bm_or.cljs$lang$applyTo = (function (seq51835){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51835));
}));

/**
 * Get the indicies of set bits in 'bitmap.
 */
loom.alg_generic.bm_get_indicies = (function loom$alg_generic$bm_get_indicies(bitmap){
var iter__4652__auto__ = (function loom$alg_generic$bm_get_indicies_$_iter__51900(s__51901){
return (new cljs.core.LazySeq(null,(function (){
var s__51901__$1 = s__51901;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__51901__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var chunk = cljs.core.first(xs__6308__auto__);
var iterys__4648__auto__ = ((function (s__51901__$1,chunk,xs__6308__auto__,temp__5753__auto__){
return (function loom$alg_generic$bm_get_indicies_$_iter__51900_$_iter__51902(s__51903){
return (new cljs.core.LazySeq(null,((function (s__51901__$1,chunk,xs__6308__auto__,temp__5753__auto__){
return (function (){
var s__51903__$1 = s__51903;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__51903__$1);
if(temp__5753__auto____$1){
var s__51903__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51903__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__51903__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__51905 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__51904 = (0);
while(true){
if((i__51904 < size__4651__auto__)){
var offset = cljs.core._nth(c__4650__auto__,i__51904);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get(bitmap,idx))){
cljs.core.chunk_append(b__51905,idx);

var G__52146 = (i__51904 + (1));
i__51904 = G__52146;
continue;
} else {
var G__52147 = (i__51904 + (1));
i__51904 = G__52147;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51905),loom$alg_generic$bm_get_indicies_$_iter__51900_$_iter__51902(cljs.core.chunk_rest(s__51903__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51905),null);
}
} else {
var offset = cljs.core.first(s__51903__$2);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get(bitmap,idx))){
return cljs.core.cons(idx,loom$alg_generic$bm_get_indicies_$_iter__51900_$_iter__51902(cljs.core.rest(s__51903__$2)));
} else {
var G__52148 = cljs.core.rest(s__51903__$2);
s__51903__$1 = G__52148;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__51901__$1,chunk,xs__6308__auto__,temp__5753__auto__))
,null,null));
});})(s__51901__$1,chunk,xs__6308__auto__,temp__5753__auto__))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(loom.alg_generic.bits_per_long)));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,loom$alg_generic$bm_get_indicies_$_iter__51900(cljs.core.rest(s__51901__$1)));
} else {
var G__52149 = cljs.core.rest(s__51901__$1);
s__51901__$1 = G__52149;
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

(loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k51907,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__51911 = k51907;
var G__51911__$1 = (((G__51911 instanceof cljs.core.Keyword))?G__51911.fqn:null);
switch (G__51911__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51907,else__4505__auto__);

}
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__51912){
var vec__51913 = p__51912;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51913,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51913,(1),null);
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

(loom.alg_generic.Ancestry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51906){
var self__ = this;
var G__51906__$1 = this;
return (new cljs.core.RecordIter((0),G__51906__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(loom.alg_generic.Ancestry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51908,other51909){
var self__ = this;
var this51908__$1 = this;
return (((!((other51909 == null)))) && ((((this51908__$1.constructor === other51909.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51908__$1.node__GT_idx,other51909.node__GT_idx)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51908__$1.idx__GT_node,other51909.idx__GT_node)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51908__$1.bitmaps,other51909.bitmaps)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51908__$1.__extmap,other51909.__extmap)))))))))));
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

(loom.alg_generic.Ancestry.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k51907){
var self__ = this;
var this__4509__auto____$1 = this;
var G__51916 = k51907;
var G__51916__$1 = (((G__51916 instanceof cljs.core.Keyword))?G__51916.fqn:null);
switch (G__51916__$1) {
case "node->idx":
case "idx->node":
case "bitmaps":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k51907);

}
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__51906){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__51917 = cljs.core.keyword_identical_QMARK_;
var expr__51918 = k__4511__auto__;
if(cljs.core.truth_((pred__51917.cljs$core$IFn$_invoke$arity$2 ? pred__51917.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"node->idx","node->idx",152705227),expr__51918) : pred__51917.call(null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),expr__51918)))){
return (new loom.alg_generic.Ancestry(G__51906,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51917.cljs$core$IFn$_invoke$arity$2 ? pred__51917.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),expr__51918) : pred__51917.call(null,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),expr__51918)))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,G__51906,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51917.cljs$core$IFn$_invoke$arity$2 ? pred__51917.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),expr__51918) : pred__51917.call(null,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),expr__51918)))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,G__51906,self__.__meta,self__.__extmap,null));
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__51906),null));
}
}
}
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps,null))], null),self__.__extmap));
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__51906){
var self__ = this;
var this__4501__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,G__51906,self__.__extmap,self__.__hash));
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
loom.alg_generic.map__GT_Ancestry = (function loom$alg_generic$map__GT_Ancestry(G__51910){
var extmap__4542__auto__ = (function (){var G__51920 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__51910,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], 0));
if(cljs.core.record_QMARK_(G__51910)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__51920);
} else {
return G__51920;
}
})();
return (new loom.alg_generic.Ancestry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(G__51910),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175).cljs$core$IFn$_invoke$arity$1(G__51910),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842).cljs$core$IFn$_invoke$arity$1(G__51910),null,cljs.core.not_empty(extmap__4542__auto__),null));
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
var len__4864__auto___52152 = arguments.length;
var i__4865__auto___52153 = (0);
while(true){
if((i__4865__auto___52153 < len__4864__auto___52152)){
args__4870__auto__.push((arguments[i__4865__auto___52153]));

var G__52154 = (i__4865__auto___52153 + (1));
i__4865__auto___52153 = G__52154;
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
var map__51924 = ancestry;
var map__51924__$1 = cljs.core.__destructure_map(map__51924);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51924__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51924__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51924__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
(loom.alg_generic.ancestry_add.cljs$lang$applyTo = (function (seq51921){
var G__51922 = cljs.core.first(seq51921);
var seq51921__$1 = cljs.core.next(seq51921);
var G__51923 = cljs.core.first(seq51921__$1);
var seq51921__$2 = cljs.core.next(seq51921__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51922,G__51923,seq51921__$2);
}));

/**
 * Finds if the 'parenter node is an ancestor of 'childer node for the given
 *   'ancestry cache.
 */
loom.alg_generic.ancestor_QMARK_ = (function loom$alg_generic$ancestor_QMARK_(ancestry,childer,parenter){
var map__51925 = ancestry;
var map__51925__$1 = cljs.core.__destructure_map(map__51925);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51925__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51925__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
var map__51926 = ancestry;
var map__51926__$1 = cljs.core.__destructure_map(map__51926);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51926__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51926__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51926__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
