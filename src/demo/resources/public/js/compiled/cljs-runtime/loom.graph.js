goog.provide('loom.graph');

/**
 * @interface
 */
loom.graph.Graph = function(){};

var loom$graph$Graph$nodes$dyn_82619 = (function (g){
var x__4550__auto__ = (((g == null))?null:g);
var m__4551__auto__ = (loom.graph.nodes[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(g) : m__4551__auto__.call(null,g));
} else {
var m__4549__auto__ = (loom.graph.nodes["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(g) : m__4549__auto__.call(null,g));
} else {
throw cljs.core.missing_protocol("Graph.nodes",g);
}
}
});
/**
 * Returns a collection of the nodes in graph g
 */
loom.graph.nodes = (function loom$graph$nodes(g){
if((((!((g == null)))) && ((!((g.loom$graph$Graph$nodes$arity$1 == null)))))){
return g.loom$graph$Graph$nodes$arity$1(g);
} else {
return loom$graph$Graph$nodes$dyn_82619(g);
}
});

var loom$graph$Graph$edges$dyn_82620 = (function (g){
var x__4550__auto__ = (((g == null))?null:g);
var m__4551__auto__ = (loom.graph.edges[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(g) : m__4551__auto__.call(null,g));
} else {
var m__4549__auto__ = (loom.graph.edges["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(g) : m__4549__auto__.call(null,g));
} else {
throw cljs.core.missing_protocol("Graph.edges",g);
}
}
});
/**
 * Edges in g. May return each edge twice in an undirected graph
 */
loom.graph.edges = (function loom$graph$edges(g){
if((((!((g == null)))) && ((!((g.loom$graph$Graph$edges$arity$1 == null)))))){
return g.loom$graph$Graph$edges$arity$1(g);
} else {
return loom$graph$Graph$edges$dyn_82620(g);
}
});

var loom$graph$Graph$has_node_QMARK_$dyn_82621 = (function (g,node){
var x__4550__auto__ = (((g == null))?null:g);
var m__4551__auto__ = (loom.graph.has_node_QMARK_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(g,node) : m__4551__auto__.call(null,g,node));
} else {
var m__4549__auto__ = (loom.graph.has_node_QMARK_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(g,node) : m__4549__auto__.call(null,g,node));
} else {
throw cljs.core.missing_protocol("Graph.has-node?",g);
}
}
});
/**
 * Returns true when node is in g
 */
loom.graph.has_node_QMARK_ = (function loom$graph$has_node_QMARK_(g,node){
if((((!((g == null)))) && ((!((g.loom$graph$Graph$has_node_QMARK_$arity$2 == null)))))){
return g.loom$graph$Graph$has_node_QMARK_$arity$2(g,node);
} else {
return loom$graph$Graph$has_node_QMARK_$dyn_82621(g,node);
}
});

var loom$graph$Graph$has_edge_QMARK_$dyn_82622 = (function (g,n1,n2){
var x__4550__auto__ = (((g == null))?null:g);
var m__4551__auto__ = (loom.graph.has_edge_QMARK_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(g,n1,n2) : m__4551__auto__.call(null,g,n1,n2));
} else {
var m__4549__auto__ = (loom.graph.has_edge_QMARK_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(g,n1,n2) : m__4549__auto__.call(null,g,n1,n2));
} else {
throw cljs.core.missing_protocol("Graph.has-edge?",g);
}
}
});
/**
 * Returns true when edge [n1 n2] is in g
 */
loom.graph.has_edge_QMARK_ = (function loom$graph$has_edge_QMARK_(g,n1,n2){
if((((!((g == null)))) && ((!((g.loom$graph$Graph$has_edge_QMARK_$arity$3 == null)))))){
return g.loom$graph$Graph$has_edge_QMARK_$arity$3(g,n1,n2);
} else {
return loom$graph$Graph$has_edge_QMARK_$dyn_82622(g,n1,n2);
}
});

var loom$graph$Graph$successors_STAR_$dyn_82623 = (function (g,node){
var x__4550__auto__ = (((g == null))?null:g);
var m__4551__auto__ = (loom.graph.successors_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(g,node) : m__4551__auto__.call(null,g,node));
} else {
var m__4549__auto__ = (loom.graph.successors_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(g,node) : m__4549__auto__.call(null,g,node));
} else {
throw cljs.core.missing_protocol("Graph.successors*",g);
}
}
});
/**
 * Returns direct successors of node
 */
loom.graph.successors_STAR_ = (function loom$graph$successors_STAR_(g,node){
if((((!((g == null)))) && ((!((g.loom$graph$Graph$successors_STAR_$arity$2 == null)))))){
return g.loom$graph$Graph$successors_STAR_$arity$2(g,node);
} else {
return loom$graph$Graph$successors_STAR_$dyn_82623(g,node);
}
});

var loom$graph$Graph$out_degree$dyn_82624 = (function (g,node){
var x__4550__auto__ = (((g == null))?null:g);
var m__4551__auto__ = (loom.graph.out_degree[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(g,node) : m__4551__auto__.call(null,g,node));
} else {
var m__4549__auto__ = (loom.graph.out_degree["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(g,node) : m__4549__auto__.call(null,g,node));
} else {
throw cljs.core.missing_protocol("Graph.out-degree",g);
}
}
});
/**
 * Returns the number of outgoing edges of node
 */
loom.graph.out_degree = (function loom$graph$out_degree(g,node){
if((((!((g == null)))) && ((!((g.loom$graph$Graph$out_degree$arity$2 == null)))))){
return g.loom$graph$Graph$out_degree$arity$2(g,node);
} else {
return loom$graph$Graph$out_degree$dyn_82624(g,node);
}
});

var loom$graph$Graph$out_edges$dyn_82625 = (function (g,node){
var x__4550__auto__ = (((g == null))?null:g);
var m__4551__auto__ = (loom.graph.out_edges[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(g,node) : m__4551__auto__.call(null,g,node));
} else {
var m__4549__auto__ = (loom.graph.out_edges["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(g,node) : m__4549__auto__.call(null,g,node));
} else {
throw cljs.core.missing_protocol("Graph.out-edges",g);
}
}
});
/**
 * Returns all the outgoing edges of node
 */
loom.graph.out_edges = (function loom$graph$out_edges(g,node){
if((((!((g == null)))) && ((!((g.loom$graph$Graph$out_edges$arity$2 == null)))))){
return g.loom$graph$Graph$out_edges$arity$2(g,node);
} else {
return loom$graph$Graph$out_edges$dyn_82625(g,node);
}
});


/**
 * @interface
 */
loom.graph.Digraph = function(){};

var loom$graph$Digraph$predecessors_STAR_$dyn_82626 = (function (g,node){
var x__4550__auto__ = (((g == null))?null:g);
var m__4551__auto__ = (loom.graph.predecessors_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(g,node) : m__4551__auto__.call(null,g,node));
} else {
var m__4549__auto__ = (loom.graph.predecessors_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(g,node) : m__4549__auto__.call(null,g,node));
} else {
throw cljs.core.missing_protocol("Digraph.predecessors*",g);
}
}
});
/**
 * Returns direct predecessors of node
 */
loom.graph.predecessors_STAR_ = (function loom$graph$predecessors_STAR_(g,node){
if((((!((g == null)))) && ((!((g.loom$graph$Digraph$predecessors_STAR_$arity$2 == null)))))){
return g.loom$graph$Digraph$predecessors_STAR_$arity$2(g,node);
} else {
return loom$graph$Digraph$predecessors_STAR_$dyn_82626(g,node);
}
});

var loom$graph$Digraph$in_degree$dyn_82627 = (function (g,node){
var x__4550__auto__ = (((g == null))?null:g);
var m__4551__auto__ = (loom.graph.in_degree[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(g,node) : m__4551__auto__.call(null,g,node));
} else {
var m__4549__auto__ = (loom.graph.in_degree["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(g,node) : m__4549__auto__.call(null,g,node));
} else {
throw cljs.core.missing_protocol("Digraph.in-degree",g);
}
}
});
/**
 * Returns the number of direct predecessors to node
 */
loom.graph.in_degree = (function loom$graph$in_degree(g,node){
if((((!((g == null)))) && ((!((g.loom$graph$Digraph$in_degree$arity$2 == null)))))){
return g.loom$graph$Digraph$in_degree$arity$2(g,node);
} else {
return loom$graph$Digraph$in_degree$dyn_82627(g,node);
}
});

var loom$graph$Digraph$in_edges$dyn_82628 = (function (g,node){
var x__4550__auto__ = (((g == null))?null:g);
var m__4551__auto__ = (loom.graph.in_edges[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(g,node) : m__4551__auto__.call(null,g,node));
} else {
var m__4549__auto__ = (loom.graph.in_edges["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(g,node) : m__4549__auto__.call(null,g,node));
} else {
throw cljs.core.missing_protocol("Digraph.in-edges",g);
}
}
});
/**
 * Returns all the incoming edges of node
 */
loom.graph.in_edges = (function loom$graph$in_edges(g,node){
if((((!((g == null)))) && ((!((g.loom$graph$Digraph$in_edges$arity$2 == null)))))){
return g.loom$graph$Digraph$in_edges$arity$2(g,node);
} else {
return loom$graph$Digraph$in_edges$dyn_82628(g,node);
}
});

var loom$graph$Digraph$transpose$dyn_82629 = (function (g){
var x__4550__auto__ = (((g == null))?null:g);
var m__4551__auto__ = (loom.graph.transpose[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(g) : m__4551__auto__.call(null,g));
} else {
var m__4549__auto__ = (loom.graph.transpose["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(g) : m__4549__auto__.call(null,g));
} else {
throw cljs.core.missing_protocol("Digraph.transpose",g);
}
}
});
/**
 * Returns a graph with all edges reversed
 */
loom.graph.transpose = (function loom$graph$transpose(g){
if((((!((g == null)))) && ((!((g.loom$graph$Digraph$transpose$arity$1 == null)))))){
return g.loom$graph$Digraph$transpose$arity$1(g);
} else {
return loom$graph$Digraph$transpose$dyn_82629(g);
}
});


/**
 * @interface
 */
loom.graph.WeightedGraph = function(){};

var loom$graph$WeightedGraph$weight_STAR_$dyn_82630 = (function() {
var G__82631 = null;
var G__82631__2 = (function (g,e){
var x__4550__auto__ = (((g == null))?null:g);
var m__4551__auto__ = (loom.graph.weight_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(g,e) : m__4551__auto__.call(null,g,e));
} else {
var m__4549__auto__ = (loom.graph.weight_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(g,e) : m__4549__auto__.call(null,g,e));
} else {
throw cljs.core.missing_protocol("WeightedGraph.weight*",g);
}
}
});
var G__82631__3 = (function (g,n1,n2){
var x__4550__auto__ = (((g == null))?null:g);
var m__4551__auto__ = (loom.graph.weight_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(g,n1,n2) : m__4551__auto__.call(null,g,n1,n2));
} else {
var m__4549__auto__ = (loom.graph.weight_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(g,n1,n2) : m__4549__auto__.call(null,g,n1,n2));
} else {
throw cljs.core.missing_protocol("WeightedGraph.weight*",g);
}
}
});
G__82631 = function(g,n1,n2){
switch(arguments.length){
case 2:
return G__82631__2.call(this,g,n1);
case 3:
return G__82631__3.call(this,g,n1,n2);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__82631.cljs$core$IFn$_invoke$arity$2 = G__82631__2;
G__82631.cljs$core$IFn$_invoke$arity$3 = G__82631__3;
return G__82631;
})()
;
/**
 * Returns the weight of edge e or edge [n1 n2]
 */
loom.graph.weight_STAR_ = (function loom$graph$weight_STAR_(var_args){
var G__82246 = arguments.length;
switch (G__82246) {
case 2:
return loom.graph.weight_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return loom.graph.weight_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(loom.graph.weight_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (g,e){
if((((!((g == null)))) && ((!((g.loom$graph$WeightedGraph$weight_STAR_$arity$2 == null)))))){
return g.loom$graph$WeightedGraph$weight_STAR_$arity$2(g,e);
} else {
return loom$graph$WeightedGraph$weight_STAR_$dyn_82630(g,e);
}
}));

(loom.graph.weight_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (g,n1,n2){
if((((!((g == null)))) && ((!((g.loom$graph$WeightedGraph$weight_STAR_$arity$3 == null)))))){
return g.loom$graph$WeightedGraph$weight_STAR_$arity$3(g,n1,n2);
} else {
return loom$graph$WeightedGraph$weight_STAR_$dyn_82630(g,n1,n2);
}
}));

(loom.graph.weight_STAR_.cljs$lang$maxFixedArity = 3);



/**
 * @interface
 */
loom.graph.EditableGraph = function(){};

var loom$graph$EditableGraph$add_nodes_STAR_$dyn_82633 = (function (g,nodes){
var x__4550__auto__ = (((g == null))?null:g);
var m__4551__auto__ = (loom.graph.add_nodes_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(g,nodes) : m__4551__auto__.call(null,g,nodes));
} else {
var m__4549__auto__ = (loom.graph.add_nodes_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(g,nodes) : m__4549__auto__.call(null,g,nodes));
} else {
throw cljs.core.missing_protocol("EditableGraph.add-nodes*",g);
}
}
});
/**
 * Add nodes to graph g. See add-nodes
 */
loom.graph.add_nodes_STAR_ = (function loom$graph$add_nodes_STAR_(g,nodes){
if((((!((g == null)))) && ((!((g.loom$graph$EditableGraph$add_nodes_STAR_$arity$2 == null)))))){
return g.loom$graph$EditableGraph$add_nodes_STAR_$arity$2(g,nodes);
} else {
return loom$graph$EditableGraph$add_nodes_STAR_$dyn_82633(g,nodes);
}
});

var loom$graph$EditableGraph$add_edges_STAR_$dyn_82634 = (function (g,edges){
var x__4550__auto__ = (((g == null))?null:g);
var m__4551__auto__ = (loom.graph.add_edges_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(g,edges) : m__4551__auto__.call(null,g,edges));
} else {
var m__4549__auto__ = (loom.graph.add_edges_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(g,edges) : m__4549__auto__.call(null,g,edges));
} else {
throw cljs.core.missing_protocol("EditableGraph.add-edges*",g);
}
}
});
/**
 * Add edges to graph g. See add-edges
 */
loom.graph.add_edges_STAR_ = (function loom$graph$add_edges_STAR_(g,edges){
if((((!((g == null)))) && ((!((g.loom$graph$EditableGraph$add_edges_STAR_$arity$2 == null)))))){
return g.loom$graph$EditableGraph$add_edges_STAR_$arity$2(g,edges);
} else {
return loom$graph$EditableGraph$add_edges_STAR_$dyn_82634(g,edges);
}
});

var loom$graph$EditableGraph$remove_nodes_STAR_$dyn_82635 = (function (g,nodes){
var x__4550__auto__ = (((g == null))?null:g);
var m__4551__auto__ = (loom.graph.remove_nodes_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(g,nodes) : m__4551__auto__.call(null,g,nodes));
} else {
var m__4549__auto__ = (loom.graph.remove_nodes_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(g,nodes) : m__4549__auto__.call(null,g,nodes));
} else {
throw cljs.core.missing_protocol("EditableGraph.remove-nodes*",g);
}
}
});
/**
 * Remove nodes from graph g. See remove-nodes
 */
loom.graph.remove_nodes_STAR_ = (function loom$graph$remove_nodes_STAR_(g,nodes){
if((((!((g == null)))) && ((!((g.loom$graph$EditableGraph$remove_nodes_STAR_$arity$2 == null)))))){
return g.loom$graph$EditableGraph$remove_nodes_STAR_$arity$2(g,nodes);
} else {
return loom$graph$EditableGraph$remove_nodes_STAR_$dyn_82635(g,nodes);
}
});

var loom$graph$EditableGraph$remove_edges_STAR_$dyn_82636 = (function (g,edges){
var x__4550__auto__ = (((g == null))?null:g);
var m__4551__auto__ = (loom.graph.remove_edges_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(g,edges) : m__4551__auto__.call(null,g,edges));
} else {
var m__4549__auto__ = (loom.graph.remove_edges_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(g,edges) : m__4549__auto__.call(null,g,edges));
} else {
throw cljs.core.missing_protocol("EditableGraph.remove-edges*",g);
}
}
});
/**
 * Removes edges from graph g. See remove-edges
 */
loom.graph.remove_edges_STAR_ = (function loom$graph$remove_edges_STAR_(g,edges){
if((((!((g == null)))) && ((!((g.loom$graph$EditableGraph$remove_edges_STAR_$arity$2 == null)))))){
return g.loom$graph$EditableGraph$remove_edges_STAR_$arity$2(g,edges);
} else {
return loom$graph$EditableGraph$remove_edges_STAR_$dyn_82636(g,edges);
}
});

var loom$graph$EditableGraph$remove_all$dyn_82637 = (function (g){
var x__4550__auto__ = (((g == null))?null:g);
var m__4551__auto__ = (loom.graph.remove_all[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(g) : m__4551__auto__.call(null,g));
} else {
var m__4549__auto__ = (loom.graph.remove_all["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(g) : m__4549__auto__.call(null,g));
} else {
throw cljs.core.missing_protocol("EditableGraph.remove-all",g);
}
}
});
/**
 * Removes all nodes and edges from graph g
 */
loom.graph.remove_all = (function loom$graph$remove_all(g){
if((((!((g == null)))) && ((!((g.loom$graph$EditableGraph$remove_all$arity$1 == null)))))){
return g.loom$graph$EditableGraph$remove_all$arity$1(g);
} else {
return loom$graph$EditableGraph$remove_all$dyn_82637(g);
}
});


/**
 * @interface
 */
loom.graph.Edge = function(){};

var loom$graph$Edge$src$dyn_82638 = (function (edge){
var x__4550__auto__ = (((edge == null))?null:edge);
var m__4551__auto__ = (loom.graph.src[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(edge) : m__4551__auto__.call(null,edge));
} else {
var m__4549__auto__ = (loom.graph.src["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(edge) : m__4549__auto__.call(null,edge));
} else {
throw cljs.core.missing_protocol("Edge.src",edge);
}
}
});
/**
 * Returns the source node of the edge
 */
loom.graph.src = (function loom$graph$src(edge){
if((((!((edge == null)))) && ((!((edge.loom$graph$Edge$src$arity$1 == null)))))){
return edge.loom$graph$Edge$src$arity$1(edge);
} else {
return loom$graph$Edge$src$dyn_82638(edge);
}
});

var loom$graph$Edge$dest$dyn_82639 = (function (edge){
var x__4550__auto__ = (((edge == null))?null:edge);
var m__4551__auto__ = (loom.graph.dest[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(edge) : m__4551__auto__.call(null,edge));
} else {
var m__4549__auto__ = (loom.graph.dest["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(edge) : m__4549__auto__.call(null,edge));
} else {
throw cljs.core.missing_protocol("Edge.dest",edge);
}
}
});
/**
 * Returns the dest node of the edge
 */
loom.graph.dest = (function loom$graph$dest(edge){
if((((!((edge == null)))) && ((!((edge.loom$graph$Edge$dest$arity$1 == null)))))){
return edge.loom$graph$Edge$dest$arity$1(edge);
} else {
return loom$graph$Edge$dest$dyn_82639(edge);
}
});

(cljs.core.PersistentVector.prototype.loom$graph$Edge$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.loom$graph$Edge$src$arity$1 = (function (edge){
var edge__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(edge__$1,(0));
}));

(cljs.core.PersistentVector.prototype.loom$graph$Edge$dest$arity$1 = (function (edge){
var edge__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(edge__$1,(1));
}));
(cljs.core.PersistentArrayMap.prototype.loom$graph$Edge$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.loom$graph$Edge$src$arity$1 = (function (edge){
var edge__$1 = this;
return new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(edge__$1);
}));

(cljs.core.PersistentArrayMap.prototype.loom$graph$Edge$dest$arity$1 = (function (edge){
var edge__$1 = this;
return new cljs.core.Keyword(null,"dest","dest",-34569477).cljs$core$IFn$_invoke$arity$1(edge__$1);
}));

(cljs.core.PersistentHashMap.prototype.loom$graph$Edge$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.loom$graph$Edge$src$arity$1 = (function (edge){
var edge__$1 = this;
return new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(edge__$1);
}));

(cljs.core.PersistentHashMap.prototype.loom$graph$Edge$dest$arity$1 = (function (edge){
var edge__$1 = this;
return new cljs.core.Keyword(null,"dest","dest",-34569477).cljs$core$IFn$_invoke$arity$1(edge__$1);
}));

(cljs.core.PersistentTreeMap.prototype.loom$graph$Edge$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentTreeMap.prototype.loom$graph$Edge$src$arity$1 = (function (edge){
var edge__$1 = this;
return new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(edge__$1);
}));

(cljs.core.PersistentTreeMap.prototype.loom$graph$Edge$dest$arity$1 = (function (edge){
var edge__$1 = this;
return new cljs.core.Keyword(null,"dest","dest",-34569477).cljs$core$IFn$_invoke$arity$1(edge__$1);
}));
/**
 * Returns direct successors of node
 */
loom.graph.successors = (function loom$graph$successors(var_args){
var G__82249 = arguments.length;
switch (G__82249) {
case 1:
return loom.graph.successors.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.graph.successors.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(loom.graph.successors.cljs$core$IFn$_invoke$arity$1 = (function (g){
return (function (p1__82247_SHARP_){
return loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g,p1__82247_SHARP_);
});
}));

(loom.graph.successors.cljs$core$IFn$_invoke$arity$2 = (function (g,node){
return loom.graph.successors_STAR_(g,node);
}));

(loom.graph.successors.cljs$lang$maxFixedArity = 2);

/**
 * Returns direct predecessors of node
 */
loom.graph.predecessors = (function loom$graph$predecessors(var_args){
var G__82252 = arguments.length;
switch (G__82252) {
case 1:
return loom.graph.predecessors.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(loom.graph.predecessors.cljs$core$IFn$_invoke$arity$1 = (function (g){
return (function (p1__82250_SHARP_){
return loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2(g,p1__82250_SHARP_);
});
}));

(loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2 = (function (g,node){
return loom.graph.predecessors_STAR_(g,node);
}));

(loom.graph.predecessors.cljs$lang$maxFixedArity = 2);

/**
 * Returns the weight of edge e or edge [n1 n2]
 */
loom.graph.weight = (function loom$graph$weight(var_args){
var G__82254 = arguments.length;
switch (G__82254) {
case 1:
return loom.graph.weight.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.graph.weight.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return loom.graph.weight.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(loom.graph.weight.cljs$core$IFn$_invoke$arity$1 = (function (g){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(loom.graph.weight,g);
}));

(loom.graph.weight.cljs$core$IFn$_invoke$arity$2 = (function (g,e){
return loom.graph.weight_STAR_(g,loom.graph.src(e),loom.graph.dest(e));
}));

(loom.graph.weight.cljs$core$IFn$_invoke$arity$3 = (function (g,n1,n2){
return loom.graph.weight_STAR_(g,n1,n2);
}));

(loom.graph.weight.cljs$lang$maxFixedArity = 3);

/**
 * Adds nodes to graph g. Nodes can be any type of object
 */
loom.graph.add_nodes = (function loom$graph$add_nodes(var_args){
var args__4870__auto__ = [];
var len__4864__auto___82643 = arguments.length;
var i__4865__auto___82644 = (0);
while(true){
if((i__4865__auto___82644 < len__4864__auto___82643)){
args__4870__auto__.push((arguments[i__4865__auto___82644]));

var G__82645 = (i__4865__auto___82644 + (1));
i__4865__auto___82644 = G__82645;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return loom.graph.add_nodes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(loom.graph.add_nodes.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.add_nodes_STAR_(g,nodes);
}));

(loom.graph.add_nodes.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(loom.graph.add_nodes.cljs$lang$applyTo = (function (seq82255){
var G__82256 = cljs.core.first(seq82255);
var seq82255__$1 = cljs.core.next(seq82255);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__82256,seq82255__$1);
}));

/**
 * Adds edges to graph g. For unweighted graphs, edges take the form [n1 n2].
 *   For weighted graphs, edges take the form [n1 n2 weight] or [n1 n2], the
 *   latter defaulting to a weight of 1
 */
loom.graph.add_edges = (function loom$graph$add_edges(var_args){
var args__4870__auto__ = [];
var len__4864__auto___82646 = arguments.length;
var i__4865__auto___82647 = (0);
while(true){
if((i__4865__auto___82647 < len__4864__auto___82646)){
args__4870__auto__.push((arguments[i__4865__auto___82647]));

var G__82648 = (i__4865__auto___82647 + (1));
i__4865__auto___82647 = G__82648;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return loom.graph.add_edges.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(loom.graph.add_edges.cljs$core$IFn$_invoke$arity$variadic = (function (g,edges){
return loom.graph.add_edges_STAR_(g,edges);
}));

(loom.graph.add_edges.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(loom.graph.add_edges.cljs$lang$applyTo = (function (seq82257){
var G__82258 = cljs.core.first(seq82257);
var seq82257__$1 = cljs.core.next(seq82257);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__82258,seq82257__$1);
}));

/**
 * Removes nodes from graph g
 */
loom.graph.remove_nodes = (function loom$graph$remove_nodes(var_args){
var args__4870__auto__ = [];
var len__4864__auto___82649 = arguments.length;
var i__4865__auto___82650 = (0);
while(true){
if((i__4865__auto___82650 < len__4864__auto___82649)){
args__4870__auto__.push((arguments[i__4865__auto___82650]));

var G__82651 = (i__4865__auto___82650 + (1));
i__4865__auto___82650 = G__82651;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return loom.graph.remove_nodes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(loom.graph.remove_nodes.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.remove_nodes_STAR_(g,nodes);
}));

(loom.graph.remove_nodes.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(loom.graph.remove_nodes.cljs$lang$applyTo = (function (seq82259){
var G__82260 = cljs.core.first(seq82259);
var seq82259__$1 = cljs.core.next(seq82259);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__82260,seq82259__$1);
}));

/**
 * Removes edges from graph g. Do not include weights
 */
loom.graph.remove_edges = (function loom$graph$remove_edges(var_args){
var args__4870__auto__ = [];
var len__4864__auto___82652 = arguments.length;
var i__4865__auto___82653 = (0);
while(true){
if((i__4865__auto___82653 < len__4864__auto___82652)){
args__4870__auto__.push((arguments[i__4865__auto___82653]));

var G__82654 = (i__4865__auto___82653 + (1));
i__4865__auto___82653 = G__82654;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return loom.graph.remove_edges.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(loom.graph.remove_edges.cljs$core$IFn$_invoke$arity$variadic = (function (g,edges){
return loom.graph.remove_edges_STAR_(g,edges);
}));

(loom.graph.remove_edges.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(loom.graph.remove_edges.cljs$lang$applyTo = (function (seq82261){
var G__82262 = cljs.core.first(seq82261);
var seq82261__$1 = cljs.core.next(seq82261);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__82262,seq82261__$1);
}));


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
loom.graph.BasicEditableGraph = (function (nodeset,adj,__meta,__extmap,__hash){
this.nodeset = nodeset;
this.adj = adj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(loom.graph.BasicEditableGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k82264,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__82268 = k82264;
var G__82268__$1 = (((G__82268 instanceof cljs.core.Keyword))?G__82268.fqn:null);
switch (G__82268__$1) {
case "nodeset":
return self__.nodeset;

break;
case "adj":
return self__.adj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k82264,else__4505__auto__);

}
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__82269){
var vec__82270 = p__82269;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82270,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82270,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#loom.graph.BasicEditableGraph{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null))], null),self__.__extmap));
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__82263){
var self__ = this;
var G__82263__$1 = this;
return (new cljs.core.RecordIter((0),G__82263__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,self__.__meta,self__.__extmap,self__.__hash));
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (446662859 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this82265,other82266){
var self__ = this;
var this82265__$1 = this;
return (((!((other82266 == null)))) && ((((this82265__$1.constructor === other82266.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82265__$1.nodeset,other82266.nodeset)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82265__$1.adj,other82266.adj)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82265__$1.__extmap,other82266.__extmap)))))))));
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k82264){
var self__ = this;
var this__4509__auto____$1 = this;
var G__82273 = k82264;
var G__82273__$1 = (((G__82273 instanceof cljs.core.Keyword))?G__82273.fqn:null);
switch (G__82273__$1) {
case "nodeset":
case "adj":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k82264);

}
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__82263){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__82274 = cljs.core.keyword_identical_QMARK_;
var expr__82275 = k__4511__auto__;
if(cljs.core.truth_((pred__82274.cljs$core$IFn$_invoke$arity$2 ? pred__82274.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__82275) : pred__82274.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__82275)))){
return (new loom.graph.BasicEditableGraph(G__82263,self__.adj,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__82274.cljs$core$IFn$_invoke$arity$2 ? pred__82274.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__82275) : pred__82274.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__82275)))){
return (new loom.graph.BasicEditableGraph(self__.nodeset,G__82263,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__82263),null));
}
}
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj,null))], null),self__.__extmap));
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__82263){
var self__ = this;
var this__4501__auto____$1 = this;
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,G__82263,self__.__extmap,self__.__hash));
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(loom.graph.BasicEditableGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null)], null);
}));

(loom.graph.BasicEditableGraph.cljs$lang$type = true);

(loom.graph.BasicEditableGraph.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"loom.graph/BasicEditableGraph",null,(1),null));
}));

(loom.graph.BasicEditableGraph.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"loom.graph/BasicEditableGraph");
}));

/**
 * Positional factory function for loom.graph/BasicEditableGraph.
 */
loom.graph.__GT_BasicEditableGraph = (function loom$graph$__GT_BasicEditableGraph(nodeset,adj){
return (new loom.graph.BasicEditableGraph(nodeset,adj,null,null,null));
});

/**
 * Factory function for loom.graph/BasicEditableGraph, taking a map of keywords to field values.
 */
loom.graph.map__GT_BasicEditableGraph = (function loom$graph$map__GT_BasicEditableGraph(G__82267){
var extmap__4542__auto__ = (function (){var G__82277 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__82267,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"adj","adj",-1344630196)], 0));
if(cljs.core.record_QMARK_(G__82267)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__82277);
} else {
return G__82277;
}
})();
return (new loom.graph.BasicEditableGraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__82267),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__82267),null,cljs.core.not_empty(extmap__4542__auto__),null));
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
loom.graph.BasicEditableDigraph = (function (nodeset,adj,in$,__meta,__extmap,__hash){
this.nodeset = nodeset;
this.adj = adj;
this.in$ = in$;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(loom.graph.BasicEditableDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k82279,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__82283 = k82279;
var G__82283__$1 = (((G__82283 instanceof cljs.core.Keyword))?G__82283.fqn:null);
switch (G__82283__$1) {
case "nodeset":
return self__.nodeset;

break;
case "adj":
return self__.adj;

break;
case "in":
return self__.in$;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k82279,else__4505__auto__);

}
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__82284){
var vec__82285 = p__82284;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82285,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82285,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#loom.graph.BasicEditableDigraph{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null))], null),self__.__extmap));
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__82278){
var self__ = this;
var G__82278__$1 = this;
return (new cljs.core.RecordIter((0),G__82278__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,self__.__extmap,self__.__hash));
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (324724442 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this82280,other82281){
var self__ = this;
var this82280__$1 = this;
return (((!((other82281 == null)))) && ((((this82280__$1.constructor === other82281.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82280__$1.nodeset,other82281.nodeset)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82280__$1.adj,other82281.adj)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82280__$1.in,other82281.in)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82280__$1.__extmap,other82281.__extmap)))))))))));
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k82279){
var self__ = this;
var this__4509__auto____$1 = this;
var G__82288 = k82279;
var G__82288__$1 = (((G__82288 instanceof cljs.core.Keyword))?G__82288.fqn:null);
switch (G__82288__$1) {
case "nodeset":
case "adj":
case "in":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k82279);

}
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__82278){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__82289 = cljs.core.keyword_identical_QMARK_;
var expr__82290 = k__4511__auto__;
if(cljs.core.truth_((pred__82289.cljs$core$IFn$_invoke$arity$2 ? pred__82289.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__82290) : pred__82289.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__82290)))){
return (new loom.graph.BasicEditableDigraph(G__82278,self__.adj,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__82289.cljs$core$IFn$_invoke$arity$2 ? pred__82289.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__82290) : pred__82289.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__82290)))){
return (new loom.graph.BasicEditableDigraph(self__.nodeset,G__82278,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__82289.cljs$core$IFn$_invoke$arity$2 ? pred__82289.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"in","in",-1531184865),expr__82290) : pred__82289.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),expr__82290)))){
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,G__82278,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__82278),null));
}
}
}
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$,null))], null),self__.__extmap));
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__82278){
var self__ = this;
var this__4501__auto____$1 = this;
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,G__82278,self__.__extmap,self__.__hash));
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(loom.graph.BasicEditableDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null),new cljs.core.Symbol(null,"in","in",109346662,null)], null);
}));

(loom.graph.BasicEditableDigraph.cljs$lang$type = true);

(loom.graph.BasicEditableDigraph.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"loom.graph/BasicEditableDigraph",null,(1),null));
}));

(loom.graph.BasicEditableDigraph.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"loom.graph/BasicEditableDigraph");
}));

/**
 * Positional factory function for loom.graph/BasicEditableDigraph.
 */
loom.graph.__GT_BasicEditableDigraph = (function loom$graph$__GT_BasicEditableDigraph(nodeset,adj,in$){
return (new loom.graph.BasicEditableDigraph(nodeset,adj,in$,null,null,null));
});

/**
 * Factory function for loom.graph/BasicEditableDigraph, taking a map of keywords to field values.
 */
loom.graph.map__GT_BasicEditableDigraph = (function loom$graph$map__GT_BasicEditableDigraph(G__82282){
var extmap__4542__auto__ = (function (){var G__82292 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__82282,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)], 0));
if(cljs.core.record_QMARK_(G__82282)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__82292);
} else {
return G__82292;
}
})();
return (new loom.graph.BasicEditableDigraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__82282),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__82282),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(G__82282),null,cljs.core.not_empty(extmap__4542__auto__),null));
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
loom.graph.BasicEditableWeightedGraph = (function (nodeset,adj,__meta,__extmap,__hash){
this.nodeset = nodeset;
this.adj = adj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k82294,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__82298 = k82294;
var G__82298__$1 = (((G__82298 instanceof cljs.core.Keyword))?G__82298.fqn:null);
switch (G__82298__$1) {
case "nodeset":
return self__.nodeset;

break;
case "adj":
return self__.adj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k82294,else__4505__auto__);

}
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__82299){
var vec__82300 = p__82299;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82300,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82300,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#loom.graph.BasicEditableWeightedGraph{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null))], null),self__.__extmap));
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__82293){
var self__ = this;
var G__82293__$1 = this;
return (new cljs.core.RecordIter((0),G__82293__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,self__.__meta,self__.__extmap,self__.__hash));
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-212297308 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this82295,other82296){
var self__ = this;
var this82295__$1 = this;
return (((!((other82296 == null)))) && ((((this82295__$1.constructor === other82296.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82295__$1.nodeset,other82296.nodeset)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82295__$1.adj,other82296.adj)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82295__$1.__extmap,other82296.__extmap)))))))));
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k82294){
var self__ = this;
var this__4509__auto____$1 = this;
var G__82303 = k82294;
var G__82303__$1 = (((G__82303 instanceof cljs.core.Keyword))?G__82303.fqn:null);
switch (G__82303__$1) {
case "nodeset":
case "adj":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k82294);

}
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__82293){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__82304 = cljs.core.keyword_identical_QMARK_;
var expr__82305 = k__4511__auto__;
if(cljs.core.truth_((pred__82304.cljs$core$IFn$_invoke$arity$2 ? pred__82304.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__82305) : pred__82304.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__82305)))){
return (new loom.graph.BasicEditableWeightedGraph(G__82293,self__.adj,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__82304.cljs$core$IFn$_invoke$arity$2 ? pred__82304.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__82305) : pred__82304.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__82305)))){
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,G__82293,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__82293),null));
}
}
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj,null))], null),self__.__extmap));
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__82293){
var self__ = this;
var this__4501__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,G__82293,self__.__extmap,self__.__hash));
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(loom.graph.BasicEditableWeightedGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null)], null);
}));

(loom.graph.BasicEditableWeightedGraph.cljs$lang$type = true);

(loom.graph.BasicEditableWeightedGraph.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"loom.graph/BasicEditableWeightedGraph",null,(1),null));
}));

(loom.graph.BasicEditableWeightedGraph.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"loom.graph/BasicEditableWeightedGraph");
}));

/**
 * Positional factory function for loom.graph/BasicEditableWeightedGraph.
 */
loom.graph.__GT_BasicEditableWeightedGraph = (function loom$graph$__GT_BasicEditableWeightedGraph(nodeset,adj){
return (new loom.graph.BasicEditableWeightedGraph(nodeset,adj,null,null,null));
});

/**
 * Factory function for loom.graph/BasicEditableWeightedGraph, taking a map of keywords to field values.
 */
loom.graph.map__GT_BasicEditableWeightedGraph = (function loom$graph$map__GT_BasicEditableWeightedGraph(G__82297){
var extmap__4542__auto__ = (function (){var G__82307 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__82297,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"adj","adj",-1344630196)], 0));
if(cljs.core.record_QMARK_(G__82297)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__82307);
} else {
return G__82307;
}
})();
return (new loom.graph.BasicEditableWeightedGraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__82297),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__82297),null,cljs.core.not_empty(extmap__4542__auto__),null));
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
loom.graph.BasicEditableWeightedDigraph = (function (nodeset,adj,in$,__meta,__extmap,__hash){
this.nodeset = nodeset;
this.adj = adj;
this.in$ = in$;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k82309,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__82313 = k82309;
var G__82313__$1 = (((G__82313 instanceof cljs.core.Keyword))?G__82313.fqn:null);
switch (G__82313__$1) {
case "nodeset":
return self__.nodeset;

break;
case "adj":
return self__.adj;

break;
case "in":
return self__.in$;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k82309,else__4505__auto__);

}
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__82314){
var vec__82315 = p__82314;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82315,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82315,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#loom.graph.BasicEditableWeightedDigraph{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null))], null),self__.__extmap));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__82308){
var self__ = this;
var G__82308__$1 = this;
return (new cljs.core.RecordIter((0),G__82308__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,self__.__extmap,self__.__hash));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1110931322 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this82310,other82311){
var self__ = this;
var this82310__$1 = this;
return (((!((other82311 == null)))) && ((((this82310__$1.constructor === other82311.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82310__$1.nodeset,other82311.nodeset)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82310__$1.adj,other82311.adj)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82310__$1.in,other82311.in)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82310__$1.__extmap,other82311.__extmap)))))))))));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k82309){
var self__ = this;
var this__4509__auto____$1 = this;
var G__82318 = k82309;
var G__82318__$1 = (((G__82318 instanceof cljs.core.Keyword))?G__82318.fqn:null);
switch (G__82318__$1) {
case "nodeset":
case "adj":
case "in":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k82309);

}
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__82308){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__82319 = cljs.core.keyword_identical_QMARK_;
var expr__82320 = k__4511__auto__;
if(cljs.core.truth_((pred__82319.cljs$core$IFn$_invoke$arity$2 ? pred__82319.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__82320) : pred__82319.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__82320)))){
return (new loom.graph.BasicEditableWeightedDigraph(G__82308,self__.adj,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__82319.cljs$core$IFn$_invoke$arity$2 ? pred__82319.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__82320) : pred__82319.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__82320)))){
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,G__82308,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__82319.cljs$core$IFn$_invoke$arity$2 ? pred__82319.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"in","in",-1531184865),expr__82320) : pred__82319.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),expr__82320)))){
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,G__82308,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__82308),null));
}
}
}
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$,null))], null),self__.__extmap));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__82308){
var self__ = this;
var this__4501__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,G__82308,self__.__extmap,self__.__hash));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(loom.graph.BasicEditableWeightedDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null),new cljs.core.Symbol(null,"in","in",109346662,null)], null);
}));

(loom.graph.BasicEditableWeightedDigraph.cljs$lang$type = true);

(loom.graph.BasicEditableWeightedDigraph.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"loom.graph/BasicEditableWeightedDigraph",null,(1),null));
}));

(loom.graph.BasicEditableWeightedDigraph.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"loom.graph/BasicEditableWeightedDigraph");
}));

/**
 * Positional factory function for loom.graph/BasicEditableWeightedDigraph.
 */
loom.graph.__GT_BasicEditableWeightedDigraph = (function loom$graph$__GT_BasicEditableWeightedDigraph(nodeset,adj,in$){
return (new loom.graph.BasicEditableWeightedDigraph(nodeset,adj,in$,null,null,null));
});

/**
 * Factory function for loom.graph/BasicEditableWeightedDigraph, taking a map of keywords to field values.
 */
loom.graph.map__GT_BasicEditableWeightedDigraph = (function loom$graph$map__GT_BasicEditableWeightedDigraph(G__82312){
var extmap__4542__auto__ = (function (){var G__82322 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__82312,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)], 0));
if(cljs.core.record_QMARK_(G__82312)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__82322);
} else {
return G__82322;
}
})();
return (new loom.graph.BasicEditableWeightedDigraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__82312),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__82312),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(G__82312),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

/**
 * Weight used when none is given for edges in weighted graphs
 */
loom.graph._STAR_default_weight_STAR_ = (1);
loom.graph.remove_adj_nodes = (function loom$graph$remove_adj_nodes(m,nodes,adjacents,remove_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,n){
if(cljs.core.truth_((m__$1.cljs$core$IFn$_invoke$arity$1 ? m__$1.cljs$core$IFn$_invoke$arity$1(n) : m__$1.call(null,n)))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null),(function (p1__82323_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(remove_fn,p1__82323_SHARP_,nodes);
}));
} else {
return m__$1;
}
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,m,nodes),adjacents);
});
(loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
return g__$1.nodeset;
}));

(loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
var iter__4652__auto__ = (function loom$graph$iter__82326(s__82327){
return (new cljs.core.LazySeq(null,(function (){
var s__82327__$1 = s__82327;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__82327__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var n1 = cljs.core.first(xs__6308__auto__);
var iterys__4648__auto__ = ((function (s__82327__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function loom$graph$iter__82326_$_iter__82328(s__82329){
return (new cljs.core.LazySeq(null,((function (s__82327__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function (){
var s__82329__$1 = s__82329;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__82329__$1);
if(temp__5753__auto____$1){
var s__82329__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__82329__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__82329__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__82331 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__82330 = (0);
while(true){
if((i__82330 < size__4651__auto__)){
var e = cljs.core._nth(c__4650__auto__,i__82330);
cljs.core.chunk_append(b__82331,e);

var G__82679 = (i__82330 + (1));
i__82330 = G__82679;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82331),loom$graph$iter__82326_$_iter__82328(cljs.core.chunk_rest(s__82329__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82331),null);
}
} else {
var e = cljs.core.first(s__82329__$2);
return cljs.core.cons(e,loom$graph$iter__82326_$_iter__82328(cljs.core.rest(s__82329__$2)));
}
} else {
return null;
}
break;
}
});})(s__82327__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1))
,null,null));
});})(s__82327__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(loom.graph.out_edges(g__$1,n1)));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,loom$graph$iter__82326(cljs.core.rest(s__82327__$1)));
} else {
var G__82680 = cljs.core.rest(s__82327__$1);
s__82327__$1 = G__82680;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(loom.graph.nodes(g__$1));
}));

(loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.contains_QMARK_(g__$1.nodeset,node);
}));

(loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null)),n2);
}));

(loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null)));
}));

(loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4652__auto__ = (function loom$graph$iter__82332(s__82333){
return (new cljs.core.LazySeq(null,(function (){
var s__82333__$1 = s__82333;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__82333__$1);
if(temp__5753__auto__){
var s__82333__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__82333__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__82333__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__82335 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__82334 = (0);
while(true){
if((i__82334 < size__4651__auto__)){
var n2 = cljs.core._nth(c__4650__auto__,i__82334);
cljs.core.chunk_append(b__82335,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__82681 = (i__82334 + (1));
i__82334 = G__82681;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82335),loom$graph$iter__82332(cljs.core.chunk_rest(s__82333__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82335),null);
}
} else {
var n2 = cljs.core.first(s__82333__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__82332(cljs.core.rest(s__82333__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
}));

(loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null));
}));

(loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$add_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g__$2,node){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,node);
}),g__$1,nodes);
}));

(loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$add_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g__$2,p__82336){
var vec__82337 = p__82336;
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82337,(0),null);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82337,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,n1,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n2], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),n1);
}),g__$1,edges);
}));

(loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$remove_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
var nbrs = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__82324_SHARP_){
return loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,p1__82324_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nodes], 0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(g__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),(function (p1__82325_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,p1__82325_SHARP_,nodes);
})),new cljs.core.Keyword(null,"adj","adj",-1344630196),loom.graph.remove_adj_nodes(g__$1.adj,nodes,nbrs,cljs.core.disj));
}));

(loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$remove_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g__$2,p__82340){
var vec__82341 = p__82340;
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82341,(0),null);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82341,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.disj,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n2], null),cljs.core.disj,n1);
}),g__$1,edges);
}));

(loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var g__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY], 0));
}));
(loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
return g__$1.nodeset;
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
var iter__4652__auto__ = (function loom$graph$iter__82347(s__82348){
return (new cljs.core.LazySeq(null,(function (){
var s__82348__$1 = s__82348;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__82348__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var n1 = cljs.core.first(xs__6308__auto__);
var iterys__4648__auto__ = ((function (s__82348__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function loom$graph$iter__82347_$_iter__82349(s__82350){
return (new cljs.core.LazySeq(null,((function (s__82348__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function (){
var s__82350__$1 = s__82350;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__82350__$1);
if(temp__5753__auto____$1){
var s__82350__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__82350__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__82350__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__82352 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__82351 = (0);
while(true){
if((i__82351 < size__4651__auto__)){
var e = cljs.core._nth(c__4650__auto__,i__82351);
cljs.core.chunk_append(b__82352,e);

var G__82686 = (i__82351 + (1));
i__82351 = G__82686;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82352),loom$graph$iter__82347_$_iter__82349(cljs.core.chunk_rest(s__82350__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82352),null);
}
} else {
var e = cljs.core.first(s__82350__$2);
return cljs.core.cons(e,loom$graph$iter__82347_$_iter__82349(cljs.core.rest(s__82350__$2)));
}
} else {
return null;
}
break;
}
});})(s__82348__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1))
,null,null));
});})(s__82348__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(loom.graph.out_edges(g__$1,n1)));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,loom$graph$iter__82347(cljs.core.rest(s__82348__$1)));
} else {
var G__82687 = cljs.core.rest(s__82348__$1);
s__82348__$1 = G__82687;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(loom.graph.nodes(g__$1));
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.contains_QMARK_(g__$1.nodeset,node);
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null)),n2);
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null)));
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4652__auto__ = (function loom$graph$iter__82353(s__82354){
return (new cljs.core.LazySeq(null,(function (){
var s__82354__$1 = s__82354;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__82354__$1);
if(temp__5753__auto__){
var s__82354__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__82354__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__82354__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__82356 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__82355 = (0);
while(true){
if((i__82355 < size__4651__auto__)){
var n2 = cljs.core._nth(c__4650__auto__,i__82355);
cljs.core.chunk_append(b__82356,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__82688 = (i__82355 + (1));
i__82355 = G__82688;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82356),loom$graph$iter__82353(cljs.core.chunk_rest(s__82354__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82356),null);
}
} else {
var n2 = cljs.core.first(s__82354__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__82353(cljs.core.rest(s__82354__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null));
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$add_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g__$2,node){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,node);
}),g__$1,nodes);
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$add_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g__$2,p__82357){
var vec__82358 = p__82357;
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82358,(0),null);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82358,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,n1,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),n2], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),n1);
}),g__$1,edges);
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$remove_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
var ins = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__82344_SHARP_){
return loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2(g__$1,p1__82344_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nodes], 0));
var outs = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__82345_SHARP_){
return loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,p1__82345_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nodes], 0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(g__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),(function (p1__82346_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,p1__82346_SHARP_,nodes);
})),new cljs.core.Keyword(null,"adj","adj",-1344630196),loom.graph.remove_adj_nodes(g__$1.adj,nodes,ins,cljs.core.disj)),new cljs.core.Keyword(null,"in","in",-1531184865),loom.graph.remove_adj_nodes(g__$1.in,nodes,outs,cljs.core.disj));
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$remove_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g__$2,p__82361){
var vec__82362 = p__82361;
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82362,(0),null);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82362,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.disj,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),n2], null),cljs.core.disj,n1);
}),g__$1,edges);
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var g__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.PersistentArrayMap.EMPTY], 0));
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$Digraph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.BasicEditableDigraph.prototype.loom$graph$Digraph$predecessors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),node], null));
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$Digraph$in_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),node], null)));
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$Digraph$in_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4652__auto__ = (function loom$graph$iter__82365(s__82366){
return (new cljs.core.LazySeq(null,(function (){
var s__82366__$1 = s__82366;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__82366__$1);
if(temp__5753__auto__){
var s__82366__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__82366__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__82366__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__82368 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__82367 = (0);
while(true){
if((i__82367 < size__4651__auto__)){
var n2 = cljs.core._nth(c__4650__auto__,i__82367);
cljs.core.chunk_append(b__82368,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null));

var G__82697 = (i__82367 + (1));
i__82367 = G__82697;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82368),loom$graph$iter__82365(cljs.core.chunk_rest(s__82366__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82368),null);
}
} else {
var n2 = cljs.core.first(s__82366__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null),loom$graph$iter__82365(cljs.core.rest(s__82366__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$Digraph$transpose$arity$1 = (function (g){
var g__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(g__$1,new cljs.core.Keyword(null,"adj","adj",-1344630196),g__$1.in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"in","in",-1531184865),g__$1.adj], 0));
}));
(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
return g__$1.nodeset;
}));

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
var iter__4652__auto__ = (function loom$graph$iter__82371(s__82372){
return (new cljs.core.LazySeq(null,(function (){
var s__82372__$1 = s__82372;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__82372__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var n1 = cljs.core.first(xs__6308__auto__);
var iterys__4648__auto__ = ((function (s__82372__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function loom$graph$iter__82371_$_iter__82373(s__82374){
return (new cljs.core.LazySeq(null,((function (s__82372__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function (){
var s__82374__$1 = s__82374;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__82374__$1);
if(temp__5753__auto____$1){
var s__82374__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__82374__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__82374__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__82376 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__82375 = (0);
while(true){
if((i__82375 < size__4651__auto__)){
var e = cljs.core._nth(c__4650__auto__,i__82375);
cljs.core.chunk_append(b__82376,e);

var G__82698 = (i__82375 + (1));
i__82375 = G__82698;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82376),loom$graph$iter__82371_$_iter__82373(cljs.core.chunk_rest(s__82374__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82376),null);
}
} else {
var e = cljs.core.first(s__82374__$2);
return cljs.core.cons(e,loom$graph$iter__82371_$_iter__82373(cljs.core.rest(s__82374__$2)));
}
} else {
return null;
}
break;
}
});})(s__82372__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1))
,null,null));
});})(s__82372__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(loom.graph.out_edges(g__$1,n1)));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,loom$graph$iter__82371(cljs.core.rest(s__82372__$1)));
} else {
var G__82699 = cljs.core.rest(s__82372__$1);
s__82372__$1 = G__82699;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(loom.graph.nodes(g__$1));
}));

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.contains_QMARK_(g__$1.nodeset,node);
}));

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null)),n2);
}));

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null)));
}));

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4652__auto__ = (function loom$graph$iter__82377(s__82378){
return (new cljs.core.LazySeq(null,(function (){
var s__82378__$1 = s__82378;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__82378__$1);
if(temp__5753__auto__){
var s__82378__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__82378__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__82378__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__82380 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__82379 = (0);
while(true){
if((i__82379 < size__4651__auto__)){
var n2 = cljs.core._nth(c__4650__auto__,i__82379);
cljs.core.chunk_append(b__82380,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__82700 = (i__82379 + (1));
i__82379 = G__82700;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82380),loom$graph$iter__82377(cljs.core.chunk_rest(s__82378__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82380),null);
}
} else {
var n2 = cljs.core.first(s__82378__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__82377(cljs.core.rest(s__82378__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
}));

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.keys(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null)));
}));

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$add_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g__$2,node){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,node);
}),g__$1,nodes);
}));

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$add_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g__$2,p__82381){
var vec__82382 = p__82381;
var seq__82383 = cljs.core.seq(vec__82382);
var first__82384 = cljs.core.first(seq__82383);
var seq__82383__$1 = cljs.core.next(seq__82383);
var n1 = first__82384;
var first__82384__$1 = cljs.core.first(seq__82383__$1);
var seq__82383__$2 = cljs.core.next(seq__82383__$1);
var n2 = first__82384__$1;
var vec__82385 = seq__82383__$2;
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82385,(0),null);
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,n1,n2),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1,n2], null),(function (){var or__4253__auto__ = w;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return loom.graph._STAR_default_weight_STAR_;
}
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n2,n1], null),(function (){var or__4253__auto__ = w;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return loom.graph._STAR_default_weight_STAR_;
}
})());
}),g__$1,edges);
}));

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$remove_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
var nbrs = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__82369_SHARP_){
return loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,p1__82369_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nodes], 0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(g__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),(function (p1__82370_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,p1__82370_SHARP_,nodes);
})),new cljs.core.Keyword(null,"adj","adj",-1344630196),loom.graph.remove_adj_nodes(g__$1.adj,nodes,nbrs,cljs.core.dissoc));
}));

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$remove_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g__$2,p__82388){
var vec__82389 = p__82388;
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82389,(0),null);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82389,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.dissoc,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n2], null),cljs.core.dissoc,n1);
}),g__$1,edges);
}));

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var g__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY], 0));
}));

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$WeightedGraph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$2 = (function (g,e){
var g__$1 = this;
return loom.graph.weight.cljs$core$IFn$_invoke$arity$3(g__$1,loom.graph.src(e),loom.graph.dest(e));
}));

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1,n2], null));
}));
(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
return g__$1.nodeset;
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
var iter__4652__auto__ = (function loom$graph$iter__82395(s__82396){
return (new cljs.core.LazySeq(null,(function (){
var s__82396__$1 = s__82396;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__82396__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var n1 = cljs.core.first(xs__6308__auto__);
var iterys__4648__auto__ = ((function (s__82396__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function loom$graph$iter__82395_$_iter__82397(s__82398){
return (new cljs.core.LazySeq(null,((function (s__82396__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function (){
var s__82398__$1 = s__82398;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__82398__$1);
if(temp__5753__auto____$1){
var s__82398__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__82398__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__82398__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__82400 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__82399 = (0);
while(true){
if((i__82399 < size__4651__auto__)){
var e = cljs.core._nth(c__4650__auto__,i__82399);
cljs.core.chunk_append(b__82400,e);

var G__82701 = (i__82399 + (1));
i__82399 = G__82701;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82400),loom$graph$iter__82395_$_iter__82397(cljs.core.chunk_rest(s__82398__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82400),null);
}
} else {
var e = cljs.core.first(s__82398__$2);
return cljs.core.cons(e,loom$graph$iter__82395_$_iter__82397(cljs.core.rest(s__82398__$2)));
}
} else {
return null;
}
break;
}
});})(s__82396__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1))
,null,null));
});})(s__82396__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(loom.graph.out_edges(g__$1,n1)));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,loom$graph$iter__82395(cljs.core.rest(s__82396__$1)));
} else {
var G__82702 = cljs.core.rest(s__82396__$1);
s__82396__$1 = G__82702;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(loom.graph.nodes(g__$1));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.contains_QMARK_(g__$1.nodeset,node);
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null)),n2);
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null)));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4652__auto__ = (function loom$graph$iter__82401(s__82402){
return (new cljs.core.LazySeq(null,(function (){
var s__82402__$1 = s__82402;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__82402__$1);
if(temp__5753__auto__){
var s__82402__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__82402__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__82402__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__82404 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__82403 = (0);
while(true){
if((i__82403 < size__4651__auto__)){
var n2 = cljs.core._nth(c__4650__auto__,i__82403);
cljs.core.chunk_append(b__82404,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__82703 = (i__82403 + (1));
i__82403 = G__82703;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82404),loom$graph$iter__82401(cljs.core.chunk_rest(s__82402__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82404),null);
}
} else {
var n2 = cljs.core.first(s__82402__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__82401(cljs.core.rest(s__82402__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.keys(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null)));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$add_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g__$2,node){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,node);
}),g__$1,nodes);
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$add_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g__$2,p__82405){
var vec__82406 = p__82405;
var seq__82407 = cljs.core.seq(vec__82406);
var first__82408 = cljs.core.first(seq__82407);
var seq__82407__$1 = cljs.core.next(seq__82407);
var n1 = first__82408;
var first__82408__$1 = cljs.core.first(seq__82407__$1);
var seq__82407__$2 = cljs.core.next(seq__82407__$1);
var n2 = first__82408__$1;
var vec__82409 = seq__82407__$2;
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82409,(0),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,n1,n2),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1,n2], null),(function (){var or__4253__auto__ = w;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return loom.graph._STAR_default_weight_STAR_;
}
})()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),n2], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),n1);
}),g__$1,edges);
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$remove_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
var ins = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__82392_SHARP_){
return loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2(g__$1,p1__82392_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nodes], 0));
var outs = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__82393_SHARP_){
return loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,p1__82393_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nodes], 0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(g__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),(function (p1__82394_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,p1__82394_SHARP_,nodes);
})),new cljs.core.Keyword(null,"adj","adj",-1344630196),loom.graph.remove_adj_nodes(g__$1.adj,nodes,ins,cljs.core.dissoc)),new cljs.core.Keyword(null,"in","in",-1531184865),loom.graph.remove_adj_nodes(g__$1.in,nodes,outs,cljs.core.disj));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$remove_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g__$2,p__82412){
var vec__82413 = p__82412;
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82413,(0),null);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82413,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.dissoc,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),n2], null),cljs.core.disj,n1);
}),g__$1,edges);
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var g__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.PersistentArrayMap.EMPTY], 0));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Digraph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Digraph$predecessors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),node], null));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Digraph$in_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),node], null)));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Digraph$in_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4652__auto__ = (function loom$graph$iter__82416(s__82417){
return (new cljs.core.LazySeq(null,(function (){
var s__82417__$1 = s__82417;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__82417__$1);
if(temp__5753__auto__){
var s__82417__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__82417__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__82417__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__82419 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__82418 = (0);
while(true){
if((i__82418 < size__4651__auto__)){
var n2 = cljs.core._nth(c__4650__auto__,i__82418);
cljs.core.chunk_append(b__82419,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null));

var G__82704 = (i__82418 + (1));
i__82418 = G__82704;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82419),loom$graph$iter__82416(cljs.core.chunk_rest(s__82417__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82419),null);
}
} else {
var n2 = cljs.core.first(s__82417__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null),loom$graph$iter__82416(cljs.core.rest(s__82417__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Digraph$transpose$arity$1 = (function (g){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (tg,p__82420){
var vec__82421 = p__82420;
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82421,(0),null);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82421,(1),null);
return loom.graph.add_edges_STAR_(tg,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,n1,loom.graph.weight.cljs$core$IFn$_invoke$arity$3(g__$1,n1,n2)], null)], null));
}),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(g__$1,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.PersistentArrayMap.EMPTY], 0)),loom.graph.edges(g__$1));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$WeightedGraph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$2 = (function (g,e){
var g__$1 = this;
return loom.graph.weight.cljs$core$IFn$_invoke$arity$3(g__$1,loom.graph.src(e),loom.graph.dest(e));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1,n2], null));
}));
loom.graph.call_or_return = (function loom$graph$call_or_return(var_args){
var args__4870__auto__ = [];
var len__4864__auto___82705 = arguments.length;
var i__4865__auto___82706 = (0);
while(true){
if((i__4865__auto___82706 < len__4864__auto___82705)){
args__4870__auto__.push((arguments[i__4865__auto___82706]));

var G__82707 = (i__4865__auto___82706 + (1));
i__4865__auto___82706 = G__82707;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.fn_QMARK_(f)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
} else {
return f;
}
}));

(loom.graph.call_or_return.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(loom.graph.call_or_return.cljs$lang$applyTo = (function (seq82424){
var G__82425 = cljs.core.first(seq82424);
var seq82424__$1 = cljs.core.next(seq82424);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__82425,seq82424__$1);
}));


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
loom.graph.FlyGraph = (function (fnodes,fedges,fsuccessors,start,__meta,__extmap,__hash){
this.fnodes = fnodes;
this.fedges = fedges;
this.fsuccessors = fsuccessors;
this.start = start;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(loom.graph.FlyGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(loom.graph.FlyGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k82427,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__82431 = k82427;
var G__82431__$1 = (((G__82431 instanceof cljs.core.Keyword))?G__82431.fqn:null);
switch (G__82431__$1) {
case "fnodes":
return self__.fnodes;

break;
case "fedges":
return self__.fedges;

break;
case "fsuccessors":
return self__.fsuccessors;

break;
case "start":
return self__.start;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k82427,else__4505__auto__);

}
}));

(loom.graph.FlyGraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__82432){
var vec__82433 = p__82432;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82433,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82433,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(loom.graph.FlyGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#loom.graph.FlyGraph{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
}));

(loom.graph.FlyGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__82426){
var self__ = this;
var G__82426__$1 = this;
return (new cljs.core.RecordIter((0),G__82426__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"start","start",-355208981)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(loom.graph.FlyGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(loom.graph.FlyGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,self__.__extmap,self__.__hash));
}));

(loom.graph.FlyGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(loom.graph.FlyGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1546683162 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(loom.graph.FlyGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this82428,other82429){
var self__ = this;
var this82428__$1 = this;
return (((!((other82429 == null)))) && ((((this82428__$1.constructor === other82429.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82428__$1.fnodes,other82429.fnodes)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82428__$1.fedges,other82429.fedges)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82428__$1.fsuccessors,other82429.fsuccessors)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82428__$1.start,other82429.start)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82428__$1.__extmap,other82429.__extmap)))))))))))));
}));

(loom.graph.FlyGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(loom.graph.FlyGraph.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k82427){
var self__ = this;
var this__4509__auto____$1 = this;
var G__82436 = k82427;
var G__82436__$1 = (((G__82436 instanceof cljs.core.Keyword))?G__82436.fqn:null);
switch (G__82436__$1) {
case "fnodes":
case "fedges":
case "fsuccessors":
case "start":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k82427);

}
}));

(loom.graph.FlyGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__82426){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__82437 = cljs.core.keyword_identical_QMARK_;
var expr__82438 = k__4511__auto__;
if(cljs.core.truth_((pred__82437.cljs$core$IFn$_invoke$arity$2 ? pred__82437.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__82438) : pred__82437.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__82438)))){
return (new loom.graph.FlyGraph(G__82426,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__82437.cljs$core$IFn$_invoke$arity$2 ? pred__82437.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__82438) : pred__82437.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__82438)))){
return (new loom.graph.FlyGraph(self__.fnodes,G__82426,self__.fsuccessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__82437.cljs$core$IFn$_invoke$arity$2 ? pred__82437.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__82438) : pred__82437.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__82438)))){
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,G__82426,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__82437.cljs$core$IFn$_invoke$arity$2 ? pred__82437.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start","start",-355208981),expr__82438) : pred__82437.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__82438)))){
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__82426,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__82426),null));
}
}
}
}
}));

(loom.graph.FlyGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start","start",-355208981),self__.start,null))], null),self__.__extmap));
}));

(loom.graph.FlyGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__82426){
var self__ = this;
var this__4501__auto____$1 = this;
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,G__82426,self__.__extmap,self__.__hash));
}));

(loom.graph.FlyGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(loom.graph.FlyGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
}));

(loom.graph.FlyGraph.cljs$lang$type = true);

(loom.graph.FlyGraph.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"loom.graph/FlyGraph",null,(1),null));
}));

(loom.graph.FlyGraph.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"loom.graph/FlyGraph");
}));

/**
 * Positional factory function for loom.graph/FlyGraph.
 */
loom.graph.__GT_FlyGraph = (function loom$graph$__GT_FlyGraph(fnodes,fedges,fsuccessors,start){
return (new loom.graph.FlyGraph(fnodes,fedges,fsuccessors,start,null,null,null));
});

/**
 * Factory function for loom.graph/FlyGraph, taking a map of keywords to field values.
 */
loom.graph.map__GT_FlyGraph = (function loom$graph$map__GT_FlyGraph(G__82430){
var extmap__4542__auto__ = (function (){var G__82440 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__82430,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"start","start",-355208981)], 0));
if(cljs.core.record_QMARK_(G__82430)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__82440);
} else {
return G__82440;
}
})();
return (new loom.graph.FlyGraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__82430),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__82430),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__82430),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__82430),null,cljs.core.not_empty(extmap__4542__auto__),null));
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
loom.graph.FlyDigraph = (function (fnodes,fedges,fsuccessors,fpredecessors,start,__meta,__extmap,__hash){
this.fnodes = fnodes;
this.fedges = fedges;
this.fsuccessors = fsuccessors;
this.fpredecessors = fpredecessors;
this.start = start;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(loom.graph.FlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(loom.graph.FlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k82442,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__82446 = k82442;
var G__82446__$1 = (((G__82446 instanceof cljs.core.Keyword))?G__82446.fqn:null);
switch (G__82446__$1) {
case "fnodes":
return self__.fnodes;

break;
case "fedges":
return self__.fedges;

break;
case "fsuccessors":
return self__.fsuccessors;

break;
case "fpredecessors":
return self__.fpredecessors;

break;
case "start":
return self__.start;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k82442,else__4505__auto__);

}
}));

(loom.graph.FlyDigraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__82447){
var vec__82448 = p__82447;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82448,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82448,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(loom.graph.FlyDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#loom.graph.FlyDigraph{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),self__.fpredecessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
}));

(loom.graph.FlyDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__82441){
var self__ = this;
var G__82441__$1 = this;
return (new cljs.core.RecordIter((0),G__82441__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"start","start",-355208981)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(loom.graph.FlyDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(loom.graph.FlyDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,self__.__hash));
}));

(loom.graph.FlyDigraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(loom.graph.FlyDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (1981361804 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(loom.graph.FlyDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this82443,other82444){
var self__ = this;
var this82443__$1 = this;
return (((!((other82444 == null)))) && ((((this82443__$1.constructor === other82444.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82443__$1.fnodes,other82444.fnodes)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82443__$1.fedges,other82444.fedges)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82443__$1.fsuccessors,other82444.fsuccessors)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82443__$1.fpredecessors,other82444.fpredecessors)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82443__$1.start,other82444.start)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82443__$1.__extmap,other82444.__extmap)))))))))))))));
}));

(loom.graph.FlyDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(loom.graph.FlyDigraph.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k82442){
var self__ = this;
var this__4509__auto____$1 = this;
var G__82451 = k82442;
var G__82451__$1 = (((G__82451 instanceof cljs.core.Keyword))?G__82451.fqn:null);
switch (G__82451__$1) {
case "fnodes":
case "fedges":
case "fsuccessors":
case "fpredecessors":
case "start":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k82442);

}
}));

(loom.graph.FlyDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__82441){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__82452 = cljs.core.keyword_identical_QMARK_;
var expr__82453 = k__4511__auto__;
if(cljs.core.truth_((pred__82452.cljs$core$IFn$_invoke$arity$2 ? pred__82452.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__82453) : pred__82452.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__82453)))){
return (new loom.graph.FlyDigraph(G__82441,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__82452.cljs$core$IFn$_invoke$arity$2 ? pred__82452.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__82453) : pred__82452.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__82453)))){
return (new loom.graph.FlyDigraph(self__.fnodes,G__82441,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__82452.cljs$core$IFn$_invoke$arity$2 ? pred__82452.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__82453) : pred__82452.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__82453)))){
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,G__82441,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__82452.cljs$core$IFn$_invoke$arity$2 ? pred__82452.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),expr__82453) : pred__82452.call(null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),expr__82453)))){
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__82441,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__82452.cljs$core$IFn$_invoke$arity$2 ? pred__82452.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start","start",-355208981),expr__82453) : pred__82452.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__82453)))){
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,G__82441,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__82441),null));
}
}
}
}
}
}));

(loom.graph.FlyDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),self__.fpredecessors,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start","start",-355208981),self__.start,null))], null),self__.__extmap));
}));

(loom.graph.FlyDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__82441){
var self__ = this;
var this__4501__auto____$1 = this;
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,G__82441,self__.__extmap,self__.__hash));
}));

(loom.graph.FlyDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(loom.graph.FlyDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"fpredecessors","fpredecessors",227702593,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
}));

(loom.graph.FlyDigraph.cljs$lang$type = true);

(loom.graph.FlyDigraph.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"loom.graph/FlyDigraph",null,(1),null));
}));

(loom.graph.FlyDigraph.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"loom.graph/FlyDigraph");
}));

/**
 * Positional factory function for loom.graph/FlyDigraph.
 */
loom.graph.__GT_FlyDigraph = (function loom$graph$__GT_FlyDigraph(fnodes,fedges,fsuccessors,fpredecessors,start){
return (new loom.graph.FlyDigraph(fnodes,fedges,fsuccessors,fpredecessors,start,null,null,null));
});

/**
 * Factory function for loom.graph/FlyDigraph, taking a map of keywords to field values.
 */
loom.graph.map__GT_FlyDigraph = (function loom$graph$map__GT_FlyDigraph(G__82445){
var extmap__4542__auto__ = (function (){var G__82455 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__82445,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"start","start",-355208981)], 0));
if(cljs.core.record_QMARK_(G__82445)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__82455);
} else {
return G__82455;
}
})();
return (new loom.graph.FlyDigraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__82445),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__82445),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__82445),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934).cljs$core$IFn$_invoke$arity$1(G__82445),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__82445),null,cljs.core.not_empty(extmap__4542__auto__),null));
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
loom.graph.WeightedFlyGraph = (function (fnodes,fedges,fsuccessors,fweight,start,__meta,__extmap,__hash){
this.fnodes = fnodes;
this.fedges = fedges;
this.fsuccessors = fsuccessors;
this.fweight = fweight;
this.start = start;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(loom.graph.WeightedFlyGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(loom.graph.WeightedFlyGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k82457,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__82461 = k82457;
var G__82461__$1 = (((G__82461 instanceof cljs.core.Keyword))?G__82461.fqn:null);
switch (G__82461__$1) {
case "fnodes":
return self__.fnodes;

break;
case "fedges":
return self__.fedges;

break;
case "fsuccessors":
return self__.fsuccessors;

break;
case "fweight":
return self__.fweight;

break;
case "start":
return self__.start;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k82457,else__4505__auto__);

}
}));

(loom.graph.WeightedFlyGraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__82462){
var vec__82463 = p__82462;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82463,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82463,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(loom.graph.WeightedFlyGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#loom.graph.WeightedFlyGraph{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fweight","fweight",1299924141),self__.fweight],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
}));

(loom.graph.WeightedFlyGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__82456){
var self__ = this;
var G__82456__$1 = this;
return (new cljs.core.RecordIter((0),G__82456__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(loom.graph.WeightedFlyGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(loom.graph.WeightedFlyGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,self__.__hash));
}));

(loom.graph.WeightedFlyGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(loom.graph.WeightedFlyGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1357917791 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(loom.graph.WeightedFlyGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this82458,other82459){
var self__ = this;
var this82458__$1 = this;
return (((!((other82459 == null)))) && ((((this82458__$1.constructor === other82459.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82458__$1.fnodes,other82459.fnodes)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82458__$1.fedges,other82459.fedges)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82458__$1.fsuccessors,other82459.fsuccessors)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82458__$1.fweight,other82459.fweight)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82458__$1.start,other82459.start)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82458__$1.__extmap,other82459.__extmap)))))))))))))));
}));

(loom.graph.WeightedFlyGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(loom.graph.WeightedFlyGraph.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k82457){
var self__ = this;
var this__4509__auto____$1 = this;
var G__82466 = k82457;
var G__82466__$1 = (((G__82466 instanceof cljs.core.Keyword))?G__82466.fqn:null);
switch (G__82466__$1) {
case "fnodes":
case "fedges":
case "fsuccessors":
case "fweight":
case "start":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k82457);

}
}));

(loom.graph.WeightedFlyGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__82456){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__82467 = cljs.core.keyword_identical_QMARK_;
var expr__82468 = k__4511__auto__;
if(cljs.core.truth_((pred__82467.cljs$core$IFn$_invoke$arity$2 ? pred__82467.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__82468) : pred__82467.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__82468)))){
return (new loom.graph.WeightedFlyGraph(G__82456,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__82467.cljs$core$IFn$_invoke$arity$2 ? pred__82467.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__82468) : pred__82467.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__82468)))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,G__82456,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__82467.cljs$core$IFn$_invoke$arity$2 ? pred__82467.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__82468) : pred__82467.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__82468)))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,G__82456,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__82467.cljs$core$IFn$_invoke$arity$2 ? pred__82467.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fweight","fweight",1299924141),expr__82468) : pred__82467.call(null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),expr__82468)))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__82456,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__82467.cljs$core$IFn$_invoke$arity$2 ? pred__82467.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start","start",-355208981),expr__82468) : pred__82467.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__82468)))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,G__82456,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__82456),null));
}
}
}
}
}
}));

(loom.graph.WeightedFlyGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fweight","fweight",1299924141),self__.fweight,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start","start",-355208981),self__.start,null))], null),self__.__extmap));
}));

(loom.graph.WeightedFlyGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__82456){
var self__ = this;
var this__4501__auto____$1 = this;
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,G__82456,self__.__extmap,self__.__hash));
}));

(loom.graph.WeightedFlyGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(loom.graph.WeightedFlyGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"fweight","fweight",-1354511628,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
}));

(loom.graph.WeightedFlyGraph.cljs$lang$type = true);

(loom.graph.WeightedFlyGraph.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"loom.graph/WeightedFlyGraph",null,(1),null));
}));

(loom.graph.WeightedFlyGraph.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"loom.graph/WeightedFlyGraph");
}));

/**
 * Positional factory function for loom.graph/WeightedFlyGraph.
 */
loom.graph.__GT_WeightedFlyGraph = (function loom$graph$__GT_WeightedFlyGraph(fnodes,fedges,fsuccessors,fweight,start){
return (new loom.graph.WeightedFlyGraph(fnodes,fedges,fsuccessors,fweight,start,null,null,null));
});

/**
 * Factory function for loom.graph/WeightedFlyGraph, taking a map of keywords to field values.
 */
loom.graph.map__GT_WeightedFlyGraph = (function loom$graph$map__GT_WeightedFlyGraph(G__82460){
var extmap__4542__auto__ = (function (){var G__82470 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__82460,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)], 0));
if(cljs.core.record_QMARK_(G__82460)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__82470);
} else {
return G__82470;
}
})();
return (new loom.graph.WeightedFlyGraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__82460),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__82460),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__82460),new cljs.core.Keyword(null,"fweight","fweight",1299924141).cljs$core$IFn$_invoke$arity$1(G__82460),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__82460),null,cljs.core.not_empty(extmap__4542__auto__),null));
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
loom.graph.WeightedFlyDigraph = (function (fnodes,fedges,fsuccessors,fpredecessors,fweight,start,__meta,__extmap,__hash){
this.fnodes = fnodes;
this.fedges = fedges;
this.fsuccessors = fsuccessors;
this.fpredecessors = fpredecessors;
this.fweight = fweight;
this.start = start;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(loom.graph.WeightedFlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k82472,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__82476 = k82472;
var G__82476__$1 = (((G__82476 instanceof cljs.core.Keyword))?G__82476.fqn:null);
switch (G__82476__$1) {
case "fnodes":
return self__.fnodes;

break;
case "fedges":
return self__.fedges;

break;
case "fsuccessors":
return self__.fsuccessors;

break;
case "fpredecessors":
return self__.fpredecessors;

break;
case "fweight":
return self__.fweight;

break;
case "start":
return self__.start;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k82472,else__4505__auto__);

}
}));

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__82477){
var vec__82478 = p__82477;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82478,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82478,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#loom.graph.WeightedFlyDigraph{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),self__.fpredecessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fweight","fweight",1299924141),self__.fweight],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
}));

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__82471){
var self__ = this;
var G__82471__$1 = this;
return (new cljs.core.RecordIter((0),G__82471__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,self__.__hash));
}));

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
}));

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (788097524 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this82473,other82474){
var self__ = this;
var this82473__$1 = this;
return (((!((other82474 == null)))) && ((((this82473__$1.constructor === other82474.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82473__$1.fnodes,other82474.fnodes)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82473__$1.fedges,other82474.fedges)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82473__$1.fsuccessors,other82474.fsuccessors)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82473__$1.fpredecessors,other82474.fpredecessors)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82473__$1.fweight,other82474.fweight)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82473__$1.start,other82474.start)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82473__$1.__extmap,other82474.__extmap)))))))))))))))));
}));

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k82472){
var self__ = this;
var this__4509__auto____$1 = this;
var G__82481 = k82472;
var G__82481__$1 = (((G__82481 instanceof cljs.core.Keyword))?G__82481.fqn:null);
switch (G__82481__$1) {
case "fnodes":
case "fedges":
case "fsuccessors":
case "fpredecessors":
case "fweight":
case "start":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k82472);

}
}));

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__82471){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__82482 = cljs.core.keyword_identical_QMARK_;
var expr__82483 = k__4511__auto__;
if(cljs.core.truth_((pred__82482.cljs$core$IFn$_invoke$arity$2 ? pred__82482.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__82483) : pred__82482.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__82483)))){
return (new loom.graph.WeightedFlyDigraph(G__82471,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__82482.cljs$core$IFn$_invoke$arity$2 ? pred__82482.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__82483) : pred__82482.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__82483)))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,G__82471,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__82482.cljs$core$IFn$_invoke$arity$2 ? pred__82482.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__82483) : pred__82482.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__82483)))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,G__82471,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__82482.cljs$core$IFn$_invoke$arity$2 ? pred__82482.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),expr__82483) : pred__82482.call(null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),expr__82483)))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__82471,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__82482.cljs$core$IFn$_invoke$arity$2 ? pred__82482.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fweight","fweight",1299924141),expr__82483) : pred__82482.call(null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),expr__82483)))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,G__82471,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__82482.cljs$core$IFn$_invoke$arity$2 ? pred__82482.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start","start",-355208981),expr__82483) : pred__82482.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__82483)))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,G__82471,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__82471),null));
}
}
}
}
}
}
}));

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),self__.fpredecessors,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fweight","fweight",1299924141),self__.fweight,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start","start",-355208981),self__.start,null))], null),self__.__extmap));
}));

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__82471){
var self__ = this;
var this__4501__auto____$1 = this;
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,G__82471,self__.__extmap,self__.__hash));
}));

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(loom.graph.WeightedFlyDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"fpredecessors","fpredecessors",227702593,null),new cljs.core.Symbol(null,"fweight","fweight",-1354511628,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
}));

(loom.graph.WeightedFlyDigraph.cljs$lang$type = true);

(loom.graph.WeightedFlyDigraph.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"loom.graph/WeightedFlyDigraph",null,(1),null));
}));

(loom.graph.WeightedFlyDigraph.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"loom.graph/WeightedFlyDigraph");
}));

/**
 * Positional factory function for loom.graph/WeightedFlyDigraph.
 */
loom.graph.__GT_WeightedFlyDigraph = (function loom$graph$__GT_WeightedFlyDigraph(fnodes,fedges,fsuccessors,fpredecessors,fweight,start){
return (new loom.graph.WeightedFlyDigraph(fnodes,fedges,fsuccessors,fpredecessors,fweight,start,null,null,null));
});

/**
 * Factory function for loom.graph/WeightedFlyDigraph, taking a map of keywords to field values.
 */
loom.graph.map__GT_WeightedFlyDigraph = (function loom$graph$map__GT_WeightedFlyDigraph(G__82475){
var extmap__4542__auto__ = (function (){var G__82485 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__82475,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)], 0));
if(cljs.core.record_QMARK_(G__82475)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__82485);
} else {
return G__82485;
}
})();
return (new loom.graph.WeightedFlyDigraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__82475),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__82475),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__82475),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934).cljs$core$IFn$_invoke$arity$1(G__82475),new cljs.core.Keyword(null,"fweight","fweight",1299924141).cljs$core$IFn$_invoke$arity$1(G__82475),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__82475),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

(loom.graph.FlyGraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.FlyGraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_((function (){var or__4253__auto__ = g__$1.fnodes;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.not(g__$1.start);
}
})())){
return loom.graph.call_or_return(g__$1.fnodes);
} else {
return loom.alg_generic.bf_traverse(loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g__$1),g__$1.start);
}
}));

(loom.graph.FlyGraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_(g__$1.fedges)){
return loom.graph.call_or_return(g__$1.fedges);
} else {
var iter__4652__auto__ = (function loom$graph$iter__82486(s__82487){
return (new cljs.core.LazySeq(null,(function (){
var s__82487__$1 = s__82487;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__82487__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var n = cljs.core.first(xs__6308__auto__);
var iterys__4648__auto__ = ((function (s__82487__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function loom$graph$iter__82486_$_iter__82488(s__82489){
return (new cljs.core.LazySeq(null,((function (s__82487__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function (){
var s__82489__$1 = s__82489;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__82489__$1);
if(temp__5753__auto____$1){
var s__82489__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__82489__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__82489__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__82491 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__82490 = (0);
while(true){
if((i__82490 < size__4651__auto__)){
var nbr = cljs.core._nth(c__4650__auto__,i__82490);
cljs.core.chunk_append(b__82491,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__82721 = (i__82490 + (1));
i__82490 = G__82721;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82491),loom$graph$iter__82486_$_iter__82488(cljs.core.chunk_rest(s__82489__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82491),null);
}
} else {
var nbr = cljs.core.first(s__82489__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__82486_$_iter__82488(cljs.core.rest(s__82489__$2)));
}
} else {
return null;
}
break;
}
});})(s__82487__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1))
,null,null));
});})(s__82487__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,n)));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,loom$graph$iter__82486(cljs.core.rest(s__82487__$1)));
} else {
var G__82722 = cljs.core.rest(s__82487__$1);
s__82487__$1 = G__82722;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(loom.graph.nodes(g__$1));
}
}));

(loom.graph.FlyGraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic(g__$1.fsuccessors,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node], 0));
}));

(loom.graph.FlyGraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
}));

(loom.graph.FlyGraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4652__auto__ = (function loom$graph$iter__82492(s__82493){
return (new cljs.core.LazySeq(null,(function (){
var s__82493__$1 = s__82493;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__82493__$1);
if(temp__5753__auto__){
var s__82493__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__82493__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__82493__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__82495 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__82494 = (0);
while(true){
if((i__82494 < size__4651__auto__)){
var n2 = cljs.core._nth(c__4650__auto__,i__82494);
cljs.core.chunk_append(b__82495,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__82724 = (i__82494 + (1));
i__82494 = G__82724;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82495),loom$graph$iter__82492(cljs.core.chunk_rest(s__82493__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82495),null);
}
} else {
var n2 = cljs.core.first(s__82493__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__82492(cljs.core.rest(s__82493__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
}));

(loom.graph.FlyGraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([node]),loom.graph.nodes(g__$1));
}));

(loom.graph.FlyGraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2], null)]),loom.graph.edges(g__$1));
}));
(loom.graph.FlyDigraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.FlyDigraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_((function (){var or__4253__auto__ = g__$1.fnodes;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.not(g__$1.start);
}
})())){
return loom.graph.call_or_return(g__$1.fnodes);
} else {
return loom.alg_generic.bf_traverse(loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g__$1),g__$1.start);
}
}));

(loom.graph.FlyDigraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_(g__$1.fedges)){
return loom.graph.call_or_return(g__$1.fedges);
} else {
var iter__4652__auto__ = (function loom$graph$iter__82496(s__82497){
return (new cljs.core.LazySeq(null,(function (){
var s__82497__$1 = s__82497;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__82497__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var n = cljs.core.first(xs__6308__auto__);
var iterys__4648__auto__ = ((function (s__82497__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function loom$graph$iter__82496_$_iter__82498(s__82499){
return (new cljs.core.LazySeq(null,((function (s__82497__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function (){
var s__82499__$1 = s__82499;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__82499__$1);
if(temp__5753__auto____$1){
var s__82499__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__82499__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__82499__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__82501 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__82500 = (0);
while(true){
if((i__82500 < size__4651__auto__)){
var nbr = cljs.core._nth(c__4650__auto__,i__82500);
cljs.core.chunk_append(b__82501,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__82727 = (i__82500 + (1));
i__82500 = G__82727;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82501),loom$graph$iter__82496_$_iter__82498(cljs.core.chunk_rest(s__82499__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82501),null);
}
} else {
var nbr = cljs.core.first(s__82499__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__82496_$_iter__82498(cljs.core.rest(s__82499__$2)));
}
} else {
return null;
}
break;
}
});})(s__82497__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1))
,null,null));
});})(s__82497__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,n)));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,loom$graph$iter__82496(cljs.core.rest(s__82497__$1)));
} else {
var G__82728 = cljs.core.rest(s__82497__$1);
s__82497__$1 = G__82728;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(loom.graph.nodes(g__$1));
}
}));

(loom.graph.FlyDigraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic(g__$1.fsuccessors,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node], 0));
}));

(loom.graph.FlyDigraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
}));

(loom.graph.FlyDigraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4652__auto__ = (function loom$graph$iter__82502(s__82503){
return (new cljs.core.LazySeq(null,(function (){
var s__82503__$1 = s__82503;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__82503__$1);
if(temp__5753__auto__){
var s__82503__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__82503__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__82503__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__82505 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__82504 = (0);
while(true){
if((i__82504 < size__4651__auto__)){
var n2 = cljs.core._nth(c__4650__auto__,i__82504);
cljs.core.chunk_append(b__82505,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__82729 = (i__82504 + (1));
i__82504 = G__82729;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82505),loom$graph$iter__82502(cljs.core.chunk_rest(s__82503__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82505),null);
}
} else {
var n2 = cljs.core.first(s__82503__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__82502(cljs.core.rest(s__82503__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
}));

(loom.graph.FlyDigraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([node]),loom.graph.nodes(g__$1));
}));

(loom.graph.FlyDigraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2], null)]),loom.graph.edges(g__$1));
}));

(loom.graph.FlyDigraph.prototype.loom$graph$Digraph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.FlyDigraph.prototype.loom$graph$Digraph$predecessors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic(g__$1.fpredecessors,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node], 0));
}));

(loom.graph.FlyDigraph.prototype.loom$graph$Digraph$in_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
}));

(loom.graph.FlyDigraph.prototype.loom$graph$Digraph$in_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4652__auto__ = (function loom$graph$iter__82506(s__82507){
return (new cljs.core.LazySeq(null,(function (){
var s__82507__$1 = s__82507;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__82507__$1);
if(temp__5753__auto__){
var s__82507__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__82507__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__82507__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__82509 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__82508 = (0);
while(true){
if((i__82508 < size__4651__auto__)){
var n2 = cljs.core._nth(c__4650__auto__,i__82508);
cljs.core.chunk_append(b__82509,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null));

var G__82730 = (i__82508 + (1));
i__82508 = G__82730;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82509),loom$graph$iter__82506(cljs.core.chunk_rest(s__82507__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82509),null);
}
} else {
var n2 = cljs.core.first(s__82507__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null),loom$graph$iter__82506(cljs.core.rest(s__82507__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
}));
(loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_((function (){var or__4253__auto__ = g__$1.fnodes;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.not(g__$1.start);
}
})())){
return loom.graph.call_or_return(g__$1.fnodes);
} else {
return loom.alg_generic.bf_traverse(loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g__$1),g__$1.start);
}
}));

(loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_(g__$1.fedges)){
return loom.graph.call_or_return(g__$1.fedges);
} else {
var iter__4652__auto__ = (function loom$graph$iter__82510(s__82511){
return (new cljs.core.LazySeq(null,(function (){
var s__82511__$1 = s__82511;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__82511__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var n = cljs.core.first(xs__6308__auto__);
var iterys__4648__auto__ = ((function (s__82511__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function loom$graph$iter__82510_$_iter__82512(s__82513){
return (new cljs.core.LazySeq(null,((function (s__82511__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function (){
var s__82513__$1 = s__82513;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__82513__$1);
if(temp__5753__auto____$1){
var s__82513__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__82513__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__82513__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__82515 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__82514 = (0);
while(true){
if((i__82514 < size__4651__auto__)){
var nbr = cljs.core._nth(c__4650__auto__,i__82514);
cljs.core.chunk_append(b__82515,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__82732 = (i__82514 + (1));
i__82514 = G__82732;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82515),loom$graph$iter__82510_$_iter__82512(cljs.core.chunk_rest(s__82513__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82515),null);
}
} else {
var nbr = cljs.core.first(s__82513__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__82510_$_iter__82512(cljs.core.rest(s__82513__$2)));
}
} else {
return null;
}
break;
}
});})(s__82511__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1))
,null,null));
});})(s__82511__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,n)));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,loom$graph$iter__82510(cljs.core.rest(s__82511__$1)));
} else {
var G__82733 = cljs.core.rest(s__82511__$1);
s__82511__$1 = G__82733;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(loom.graph.nodes(g__$1));
}
}));

(loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic(g__$1.fsuccessors,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node], 0));
}));

(loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
}));

(loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4652__auto__ = (function loom$graph$iter__82516(s__82517){
return (new cljs.core.LazySeq(null,(function (){
var s__82517__$1 = s__82517;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__82517__$1);
if(temp__5753__auto__){
var s__82517__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__82517__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__82517__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__82519 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__82518 = (0);
while(true){
if((i__82518 < size__4651__auto__)){
var n2 = cljs.core._nth(c__4650__auto__,i__82518);
cljs.core.chunk_append(b__82519,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__82734 = (i__82518 + (1));
i__82518 = G__82734;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82519),loom$graph$iter__82516(cljs.core.chunk_rest(s__82517__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82519),null);
}
} else {
var n2 = cljs.core.first(s__82517__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__82516(cljs.core.rest(s__82517__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
}));

(loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([node]),loom.graph.nodes(g__$1));
}));

(loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2], null)]),loom.graph.edges(g__$1));
}));

(loom.graph.WeightedFlyGraph.prototype.loom$graph$WeightedGraph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.WeightedFlyGraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$2 = (function (g,e){
var g__$1 = this;
return loom.graph.weight.cljs$core$IFn$_invoke$arity$3(g__$1,loom.graph.src(e),loom.graph.dest(e));
}));

(loom.graph.WeightedFlyGraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic(g__$1.fweight,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n1,n2], 0));
}));
(loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_((function (){var or__4253__auto__ = g__$1.fnodes;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.not(g__$1.start);
}
})())){
return loom.graph.call_or_return(g__$1.fnodes);
} else {
return loom.alg_generic.bf_traverse(loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g__$1),g__$1.start);
}
}));

(loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_(g__$1.fedges)){
return loom.graph.call_or_return(g__$1.fedges);
} else {
var iter__4652__auto__ = (function loom$graph$iter__82520(s__82521){
return (new cljs.core.LazySeq(null,(function (){
var s__82521__$1 = s__82521;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__82521__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var n = cljs.core.first(xs__6308__auto__);
var iterys__4648__auto__ = ((function (s__82521__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function loom$graph$iter__82520_$_iter__82522(s__82523){
return (new cljs.core.LazySeq(null,((function (s__82521__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function (){
var s__82523__$1 = s__82523;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__82523__$1);
if(temp__5753__auto____$1){
var s__82523__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__82523__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__82523__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__82525 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__82524 = (0);
while(true){
if((i__82524 < size__4651__auto__)){
var nbr = cljs.core._nth(c__4650__auto__,i__82524);
cljs.core.chunk_append(b__82525,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__82735 = (i__82524 + (1));
i__82524 = G__82735;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82525),loom$graph$iter__82520_$_iter__82522(cljs.core.chunk_rest(s__82523__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82525),null);
}
} else {
var nbr = cljs.core.first(s__82523__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__82520_$_iter__82522(cljs.core.rest(s__82523__$2)));
}
} else {
return null;
}
break;
}
});})(s__82521__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1))
,null,null));
});})(s__82521__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,n)));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,loom$graph$iter__82520(cljs.core.rest(s__82521__$1)));
} else {
var G__82736 = cljs.core.rest(s__82521__$1);
s__82521__$1 = G__82736;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(loom.graph.nodes(g__$1));
}
}));

(loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic(g__$1.fsuccessors,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node], 0));
}));

(loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
}));

(loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4652__auto__ = (function loom$graph$iter__82526(s__82527){
return (new cljs.core.LazySeq(null,(function (){
var s__82527__$1 = s__82527;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__82527__$1);
if(temp__5753__auto__){
var s__82527__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__82527__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__82527__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__82529 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__82528 = (0);
while(true){
if((i__82528 < size__4651__auto__)){
var n2 = cljs.core._nth(c__4650__auto__,i__82528);
cljs.core.chunk_append(b__82529,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__82737 = (i__82528 + (1));
i__82528 = G__82737;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82529),loom$graph$iter__82526(cljs.core.chunk_rest(s__82527__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82529),null);
}
} else {
var n2 = cljs.core.first(s__82527__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__82526(cljs.core.rest(s__82527__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
}));

(loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([node]),loom.graph.nodes(g__$1));
}));

(loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2], null)]),loom.graph.edges(g__$1));
}));

(loom.graph.WeightedFlyDigraph.prototype.loom$graph$Digraph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.WeightedFlyDigraph.prototype.loom$graph$Digraph$predecessors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic(g__$1.fpredecessors,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node], 0));
}));

(loom.graph.WeightedFlyDigraph.prototype.loom$graph$Digraph$in_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
}));

(loom.graph.WeightedFlyDigraph.prototype.loom$graph$Digraph$in_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4652__auto__ = (function loom$graph$iter__82530(s__82531){
return (new cljs.core.LazySeq(null,(function (){
var s__82531__$1 = s__82531;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__82531__$1);
if(temp__5753__auto__){
var s__82531__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__82531__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__82531__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__82533 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__82532 = (0);
while(true){
if((i__82532 < size__4651__auto__)){
var n2 = cljs.core._nth(c__4650__auto__,i__82532);
cljs.core.chunk_append(b__82533,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null));

var G__82738 = (i__82532 + (1));
i__82532 = G__82738;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82533),loom$graph$iter__82530(cljs.core.chunk_rest(s__82531__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82533),null);
}
} else {
var n2 = cljs.core.first(s__82531__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null),loom$graph$iter__82530(cljs.core.rest(s__82531__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
}));

(loom.graph.WeightedFlyDigraph.prototype.loom$graph$WeightedGraph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.WeightedFlyDigraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$2 = (function (g,e){
var g__$1 = this;
return loom.graph.weight.cljs$core$IFn$_invoke$arity$3(g__$1,loom.graph.src(e),loom.graph.dest(e));
}));

(loom.graph.WeightedFlyDigraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic(g__$1.fweight,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n1,n2], 0));
}));
/**
 * Returns a graph with only the given nodes
 */
loom.graph.subgraph = (function loom$graph$subgraph(g,ns){
return loom.graph.remove_nodes_STAR_(g,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(ns),loom.graph.nodes(g)));
});
/**
 * Adds a path of edges connecting the given nodes in order
 */
loom.graph.add_path = (function loom$graph$add_path(var_args){
var args__4870__auto__ = [];
var len__4864__auto___82739 = arguments.length;
var i__4865__auto___82740 = (0);
while(true){
if((i__4865__auto___82740 < len__4864__auto___82739)){
args__4870__auto__.push((arguments[i__4865__auto___82740]));

var G__82741 = (i__4865__auto___82740 + (1));
i__4865__auto___82740 = G__82741;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return loom.graph.add_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(loom.graph.add_path.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.add_edges_STAR_(g,cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),nodes));
}));

(loom.graph.add_path.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(loom.graph.add_path.cljs$lang$applyTo = (function (seq82534){
var G__82535 = cljs.core.first(seq82534);
var seq82534__$1 = cljs.core.next(seq82534);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__82535,seq82534__$1);
}));

/**
 * Adds a cycle of edges connecting the given nodes in order
 */
loom.graph.add_cycle = (function loom$graph$add_cycle(var_args){
var args__4870__auto__ = [];
var len__4864__auto___82751 = arguments.length;
var i__4865__auto___82752 = (0);
while(true){
if((i__4865__auto___82752 < len__4864__auto___82751)){
args__4870__auto__.push((arguments[i__4865__auto___82752]));

var G__82753 = (i__4865__auto___82752 + (1));
i__4865__auto___82752 = G__82753;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return loom.graph.add_cycle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(loom.graph.add_cycle.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.add_edges_STAR_(g,cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(nodes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(nodes)], null))));
}));

(loom.graph.add_cycle.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(loom.graph.add_cycle.cljs$lang$applyTo = (function (seq82536){
var G__82537 = cljs.core.first(seq82536);
var seq82536__$1 = cljs.core.next(seq82536);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__82537,seq82536__$1);
}));

/**
 * Returns true if g satisfies the Graph protocol
 */
loom.graph.graph_QMARK_ = (function loom$graph$graph_QMARK_(g){
if((!((g == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === g.loom$graph$Graph$)))){
return true;
} else {
if((!g.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(loom.graph.Graph,g);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(loom.graph.Graph,g);
}
});
/**
 * Returns true if g satisfies the Digraph protocol
 */
loom.graph.directed_QMARK_ = (function loom$graph$directed_QMARK_(g){
if((!((g == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === g.loom$graph$Digraph$)))){
return true;
} else {
if((!g.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(loom.graph.Digraph,g);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(loom.graph.Digraph,g);
}
});
/**
 * Returns true if g satisfies the WeightedGraph protocol
 */
loom.graph.weighted_QMARK_ = (function loom$graph$weighted_QMARK_(g){
if((!((g == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === g.loom$graph$WeightedGraph$)))){
return true;
} else {
if((!g.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(loom.graph.WeightedGraph,g);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(loom.graph.WeightedGraph,g);
}
});
/**
 * Returns true if g satisfies the EditableGraph protocol
 */
loom.graph.editable_QMARK_ = (function loom$graph$editable_QMARK_(g){
if((!((g == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === g.loom$graph$EditableGraph$)))){
return true;
} else {
if((!g.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(loom.graph.EditableGraph,g);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(loom.graph.EditableGraph,g);
}
});
/**
 * Builds up a graph (i.e. adds edges and nodes) from any combination of
 *   other graphs, adjacency maps, edges, or nodes.
 */
loom.graph.build_graph = (function loom$graph$build_graph(var_args){
var args__4870__auto__ = [];
var len__4864__auto___82754 = arguments.length;
var i__4865__auto___82755 = (0);
while(true){
if((i__4865__auto___82755 < len__4864__auto___82754)){
args__4870__auto__.push((arguments[i__4865__auto___82755]));

var G__82756 = (i__4865__auto___82755 + (1));
i__4865__auto___82755 = G__82756;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return loom.graph.build_graph.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(loom.graph.build_graph.cljs$core$IFn$_invoke$arity$variadic = (function (g,inits){
var build = (function loom$graph$build(g__$1,init){
if(loom.graph.graph_QMARK_(init)){
if(((loom.graph.weighted_QMARK_(g__$1)) && (loom.graph.weighted_QMARK_(init)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(loom.graph.add_edges,loom.graph.add_nodes_STAR_(g__$1,loom.graph.nodes(init)),(function (){var iter__4652__auto__ = (function loom$graph$build_$_iter__82578(s__82579){
return (new cljs.core.LazySeq(null,(function (){
var s__82579__$1 = s__82579;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__82579__$1);
if(temp__5753__auto__){
var s__82579__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__82579__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__82579__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__82581 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__82580 = (0);
while(true){
if((i__82580 < size__4651__auto__)){
var vec__82582 = cljs.core._nth(c__4650__auto__,i__82580);
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82582,(0),null);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82582,(1),null);
cljs.core.chunk_append(b__82581,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2,loom.graph.weight.cljs$core$IFn$_invoke$arity$3(init,n1,n2)], null));

var G__82757 = (i__82580 + (1));
i__82580 = G__82757;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82581),loom$graph$build_$_iter__82578(cljs.core.chunk_rest(s__82579__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82581),null);
}
} else {
var vec__82585 = cljs.core.first(s__82579__$2);
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82585,(0),null);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82585,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2,loom.graph.weight.cljs$core$IFn$_invoke$arity$3(init,n1,n2)], null),loom$graph$build_$_iter__82578(cljs.core.rest(s__82579__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(loom.graph.edges(init));
})()),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(g__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(init)], 0)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(loom.graph.add_edges_STAR_(loom.graph.add_nodes_STAR_(g__$1,loom.graph.nodes(init)),loom.graph.edges(init)),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(g__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(init)], 0)));
}
} else {
if(cljs.core.map_QMARK_(init)){
var es = ((cljs.core.map_QMARK_(cljs.core.val(cljs.core.first(init))))?(function (){var iter__4652__auto__ = (function loom$graph$build_$_iter__82588(s__82589){
return (new cljs.core.LazySeq(null,(function (){
var s__82589__$1 = s__82589;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__82589__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var vec__82594 = cljs.core.first(xs__6308__auto__);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82594,(0),null);
var nbrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82594,(1),null);
var iterys__4648__auto__ = ((function (s__82589__$1,vec__82594,n,nbrs,xs__6308__auto__,temp__5753__auto__){
return (function loom$graph$build_$_iter__82588_$_iter__82590(s__82591){
return (new cljs.core.LazySeq(null,((function (s__82589__$1,vec__82594,n,nbrs,xs__6308__auto__,temp__5753__auto__){
return (function (){
var s__82591__$1 = s__82591;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__82591__$1);
if(temp__5753__auto____$1){
var s__82591__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__82591__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__82591__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__82593 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__82592 = (0);
while(true){
if((i__82592 < size__4651__auto__)){
var vec__82597 = cljs.core._nth(c__4650__auto__,i__82592);
var nbr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82597,(0),null);
var wt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82597,(1),null);
cljs.core.chunk_append(b__82593,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr,wt], null));

var G__82758 = (i__82592 + (1));
i__82592 = G__82758;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82593),loom$graph$build_$_iter__82588_$_iter__82590(cljs.core.chunk_rest(s__82591__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82593),null);
}
} else {
var vec__82600 = cljs.core.first(s__82591__$2);
var nbr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82600,(0),null);
var wt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82600,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr,wt], null),loom$graph$build_$_iter__82588_$_iter__82590(cljs.core.rest(s__82591__$2)));
}
} else {
return null;
}
break;
}
});})(s__82589__$1,vec__82594,n,nbrs,xs__6308__auto__,temp__5753__auto__))
,null,null));
});})(s__82589__$1,vec__82594,n,nbrs,xs__6308__auto__,temp__5753__auto__))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(nbrs));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,loom$graph$build_$_iter__82588(cljs.core.rest(s__82589__$1)));
} else {
var G__82759 = cljs.core.rest(s__82589__$1);
s__82589__$1 = G__82759;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(init);
})():(function (){var iter__4652__auto__ = (function loom$graph$build_$_iter__82603(s__82604){
return (new cljs.core.LazySeq(null,(function (){
var s__82604__$1 = s__82604;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__82604__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var vec__82609 = cljs.core.first(xs__6308__auto__);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82609,(0),null);
var nbrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82609,(1),null);
var iterys__4648__auto__ = ((function (s__82604__$1,vec__82609,n,nbrs,xs__6308__auto__,temp__5753__auto__){
return (function loom$graph$build_$_iter__82603_$_iter__82605(s__82606){
return (new cljs.core.LazySeq(null,((function (s__82604__$1,vec__82609,n,nbrs,xs__6308__auto__,temp__5753__auto__){
return (function (){
var s__82606__$1 = s__82606;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__82606__$1);
if(temp__5753__auto____$1){
var s__82606__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__82606__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__82606__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__82608 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__82607 = (0);
while(true){
if((i__82607 < size__4651__auto__)){
var nbr = cljs.core._nth(c__4650__auto__,i__82607);
cljs.core.chunk_append(b__82608,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__82760 = (i__82607 + (1));
i__82607 = G__82760;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82608),loom$graph$build_$_iter__82603_$_iter__82605(cljs.core.chunk_rest(s__82606__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82608),null);
}
} else {
var nbr = cljs.core.first(s__82606__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$build_$_iter__82603_$_iter__82605(cljs.core.rest(s__82606__$2)));
}
} else {
return null;
}
break;
}
});})(s__82604__$1,vec__82609,n,nbrs,xs__6308__auto__,temp__5753__auto__))
,null,null));
});})(s__82604__$1,vec__82609,n,nbrs,xs__6308__auto__,temp__5753__auto__))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(nbrs));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,loom$graph$build_$_iter__82603(cljs.core.rest(s__82604__$1)));
} else {
var G__82761 = cljs.core.rest(s__82604__$1);
s__82604__$1 = G__82761;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(init);
})());
return loom.graph.add_edges_STAR_(loom.graph.add_nodes_STAR_(g__$1,cljs.core.keys(init)),es);
} else {
if(cljs.core.sequential_QMARK_(init)){
return loom.graph.add_edges.cljs$core$IFn$_invoke$arity$variadic(g__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([init], 0));
} else {
return loom.graph.add_nodes.cljs$core$IFn$_invoke$arity$variadic(g__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([init], 0));

}
}
}
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(build,g,inits);
}));

(loom.graph.build_graph.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(loom.graph.build_graph.cljs$lang$applyTo = (function (seq82542){
var G__82543 = cljs.core.first(seq82542);
var seq82542__$1 = cljs.core.next(seq82542);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__82543,seq82542__$1);
}));

/**
 * Creates an unweighted, undirected graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.graph = (function loom$graph$graph(var_args){
var args__4870__auto__ = [];
var len__4864__auto___82762 = arguments.length;
var i__4865__auto___82763 = (0);
while(true){
if((i__4865__auto___82763 < len__4864__auto___82762)){
args__4870__auto__.push((arguments[i__4865__auto___82763]));

var G__82764 = (i__4865__auto___82763 + (1));
i__4865__auto___82763 = G__82764;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return loom.graph.graph.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(loom.graph.graph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(loom.graph.build_graph,(new loom.graph.BasicEditableGraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
}));

(loom.graph.graph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(loom.graph.graph.cljs$lang$applyTo = (function (seq82612){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq82612));
}));

/**
 * Creates an unweighted, directed graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.digraph = (function loom$graph$digraph(var_args){
var args__4870__auto__ = [];
var len__4864__auto___82765 = arguments.length;
var i__4865__auto___82766 = (0);
while(true){
if((i__4865__auto___82766 < len__4864__auto___82765)){
args__4870__auto__.push((arguments[i__4865__auto___82766]));

var G__82767 = (i__4865__auto___82766 + (1));
i__4865__auto___82766 = G__82767;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return loom.graph.digraph.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(loom.graph.digraph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(loom.graph.build_graph,(new loom.graph.BasicEditableDigraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
}));

(loom.graph.digraph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(loom.graph.digraph.cljs$lang$applyTo = (function (seq82613){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq82613));
}));

/**
 * Creates an weighted, undirected graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.weighted_graph = (function loom$graph$weighted_graph(var_args){
var args__4870__auto__ = [];
var len__4864__auto___82768 = arguments.length;
var i__4865__auto___82769 = (0);
while(true){
if((i__4865__auto___82769 < len__4864__auto___82768)){
args__4870__auto__.push((arguments[i__4865__auto___82769]));

var G__82770 = (i__4865__auto___82769 + (1));
i__4865__auto___82769 = G__82770;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return loom.graph.weighted_graph.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(loom.graph.weighted_graph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(loom.graph.build_graph,(new loom.graph.BasicEditableWeightedGraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
}));

(loom.graph.weighted_graph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(loom.graph.weighted_graph.cljs$lang$applyTo = (function (seq82614){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq82614));
}));

/**
 * Creates an weighted, directed graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.weighted_digraph = (function loom$graph$weighted_digraph(var_args){
var args__4870__auto__ = [];
var len__4864__auto___82771 = arguments.length;
var i__4865__auto___82772 = (0);
while(true){
if((i__4865__auto___82772 < len__4864__auto___82771)){
args__4870__auto__.push((arguments[i__4865__auto___82772]));

var G__82773 = (i__4865__auto___82772 + (1));
i__4865__auto___82772 = G__82773;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return loom.graph.weighted_digraph.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(loom.graph.weighted_digraph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(loom.graph.build_graph,(new loom.graph.BasicEditableWeightedDigraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
}));

(loom.graph.weighted_digraph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(loom.graph.weighted_digraph.cljs$lang$applyTo = (function (seq82615){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq82615));
}));

/**
 * Creates a read-only, ad-hoc graph which uses the provided functions
 *   to return values for nodes, edges, etc. If any members are not functions,
 *   they will be returned as-is. Edges can be inferred if nodes and
 *   successors are provided. Nodes and edges can be inferred if successors and
 *   start are provided.
 */
loom.graph.fly_graph = (function loom$graph$fly_graph(var_args){
var args__4870__auto__ = [];
var len__4864__auto___82774 = arguments.length;
var i__4865__auto___82775 = (0);
while(true){
if((i__4865__auto___82775 < len__4864__auto___82774)){
args__4870__auto__.push((arguments[i__4865__auto___82775]));

var G__82776 = (i__4865__auto___82775 + (1));
i__4865__auto___82775 = G__82776;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return loom.graph.fly_graph.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(loom.graph.fly_graph.cljs$core$IFn$_invoke$arity$variadic = (function (p__82617){
var map__82618 = p__82617;
var map__82618__$1 = cljs.core.__destructure_map(map__82618);
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82618__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82618__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var successors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82618__$1,new cljs.core.Keyword(null,"successors","successors",-1239296414));
var predecessors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82618__$1,new cljs.core.Keyword(null,"predecessors","predecessors",229913357));
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82618__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82618__$1,new cljs.core.Keyword(null,"start","start",-355208981));
if(cljs.core.truth_((function (){var and__4251__auto__ = predecessors;
if(cljs.core.truth_(and__4251__auto__)){
return weight;
} else {
return and__4251__auto__;
}
})())){
return (new loom.graph.WeightedFlyDigraph(nodes,edges,successors,predecessors,weight,start,null,null,null));
} else {
if(cljs.core.truth_(predecessors)){
return (new loom.graph.FlyDigraph(nodes,edges,successors,predecessors,start,null,null,null));
} else {
if(cljs.core.truth_(weight)){
return (new loom.graph.WeightedFlyGraph(nodes,edges,successors,weight,start,null,null,null));
} else {
return (new loom.graph.FlyGraph(nodes,edges,successors,start,null,null,null));

}
}
}
}));

(loom.graph.fly_graph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(loom.graph.fly_graph.cljs$lang$applyTo = (function (seq82616){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq82616));
}));


//# sourceMappingURL=loom.graph.js.map
