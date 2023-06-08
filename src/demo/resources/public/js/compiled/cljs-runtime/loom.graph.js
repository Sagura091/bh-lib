goog.provide('loom.graph');

/**
 * @interface
 */
loom.graph.Graph = function(){};

var loom$graph$Graph$nodes$dyn_82610 = (function (g){
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
return loom$graph$Graph$nodes$dyn_82610(g);
}
});

var loom$graph$Graph$edges$dyn_82611 = (function (g){
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
return loom$graph$Graph$edges$dyn_82611(g);
}
});

var loom$graph$Graph$has_node_QMARK_$dyn_82612 = (function (g,node){
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
return loom$graph$Graph$has_node_QMARK_$dyn_82612(g,node);
}
});

var loom$graph$Graph$has_edge_QMARK_$dyn_82613 = (function (g,n1,n2){
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
return loom$graph$Graph$has_edge_QMARK_$dyn_82613(g,n1,n2);
}
});

var loom$graph$Graph$successors_STAR_$dyn_82614 = (function (g,node){
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
return loom$graph$Graph$successors_STAR_$dyn_82614(g,node);
}
});

var loom$graph$Graph$out_degree$dyn_82615 = (function (g,node){
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
return loom$graph$Graph$out_degree$dyn_82615(g,node);
}
});

var loom$graph$Graph$out_edges$dyn_82616 = (function (g,node){
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
return loom$graph$Graph$out_edges$dyn_82616(g,node);
}
});


/**
 * @interface
 */
loom.graph.Digraph = function(){};

var loom$graph$Digraph$predecessors_STAR_$dyn_82617 = (function (g,node){
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
return loom$graph$Digraph$predecessors_STAR_$dyn_82617(g,node);
}
});

var loom$graph$Digraph$in_degree$dyn_82618 = (function (g,node){
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
return loom$graph$Digraph$in_degree$dyn_82618(g,node);
}
});

var loom$graph$Digraph$in_edges$dyn_82619 = (function (g,node){
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
return loom$graph$Digraph$in_edges$dyn_82619(g,node);
}
});

var loom$graph$Digraph$transpose$dyn_82620 = (function (g){
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
return loom$graph$Digraph$transpose$dyn_82620(g);
}
});


/**
 * @interface
 */
loom.graph.WeightedGraph = function(){};

var loom$graph$WeightedGraph$weight_STAR_$dyn_82621 = (function() {
var G__82622 = null;
var G__82622__2 = (function (g,e){
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
var G__82622__3 = (function (g,n1,n2){
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
G__82622 = function(g,n1,n2){
switch(arguments.length){
case 2:
return G__82622__2.call(this,g,n1);
case 3:
return G__82622__3.call(this,g,n1,n2);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__82622.cljs$core$IFn$_invoke$arity$2 = G__82622__2;
G__82622.cljs$core$IFn$_invoke$arity$3 = G__82622__3;
return G__82622;
})()
;
/**
 * Returns the weight of edge e or edge [n1 n2]
 */
loom.graph.weight_STAR_ = (function loom$graph$weight_STAR_(var_args){
var G__82237 = arguments.length;
switch (G__82237) {
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
return loom$graph$WeightedGraph$weight_STAR_$dyn_82621(g,e);
}
}));

(loom.graph.weight_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (g,n1,n2){
if((((!((g == null)))) && ((!((g.loom$graph$WeightedGraph$weight_STAR_$arity$3 == null)))))){
return g.loom$graph$WeightedGraph$weight_STAR_$arity$3(g,n1,n2);
} else {
return loom$graph$WeightedGraph$weight_STAR_$dyn_82621(g,n1,n2);
}
}));

(loom.graph.weight_STAR_.cljs$lang$maxFixedArity = 3);



/**
 * @interface
 */
loom.graph.EditableGraph = function(){};

var loom$graph$EditableGraph$add_nodes_STAR_$dyn_82624 = (function (g,nodes){
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
return loom$graph$EditableGraph$add_nodes_STAR_$dyn_82624(g,nodes);
}
});

var loom$graph$EditableGraph$add_edges_STAR_$dyn_82625 = (function (g,edges){
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
return loom$graph$EditableGraph$add_edges_STAR_$dyn_82625(g,edges);
}
});

var loom$graph$EditableGraph$remove_nodes_STAR_$dyn_82627 = (function (g,nodes){
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
return loom$graph$EditableGraph$remove_nodes_STAR_$dyn_82627(g,nodes);
}
});

var loom$graph$EditableGraph$remove_edges_STAR_$dyn_82634 = (function (g,edges){
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
return loom$graph$EditableGraph$remove_edges_STAR_$dyn_82634(g,edges);
}
});

var loom$graph$EditableGraph$remove_all$dyn_82636 = (function (g){
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
return loom$graph$EditableGraph$remove_all$dyn_82636(g);
}
});


/**
 * @interface
 */
loom.graph.Edge = function(){};

var loom$graph$Edge$src$dyn_82637 = (function (edge){
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
return loom$graph$Edge$src$dyn_82637(edge);
}
});

var loom$graph$Edge$dest$dyn_82638 = (function (edge){
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
return loom$graph$Edge$dest$dyn_82638(edge);
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
var G__82240 = arguments.length;
switch (G__82240) {
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
return (function (p1__82238_SHARP_){
return loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g,p1__82238_SHARP_);
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
var G__82243 = arguments.length;
switch (G__82243) {
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
return (function (p1__82241_SHARP_){
return loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2(g,p1__82241_SHARP_);
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
var G__82245 = arguments.length;
switch (G__82245) {
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
var len__4864__auto___82647 = arguments.length;
var i__4865__auto___82648 = (0);
while(true){
if((i__4865__auto___82648 < len__4864__auto___82647)){
args__4870__auto__.push((arguments[i__4865__auto___82648]));

var G__82649 = (i__4865__auto___82648 + (1));
i__4865__auto___82648 = G__82649;
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
(loom.graph.add_nodes.cljs$lang$applyTo = (function (seq82246){
var G__82247 = cljs.core.first(seq82246);
var seq82246__$1 = cljs.core.next(seq82246);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__82247,seq82246__$1);
}));

/**
 * Adds edges to graph g. For unweighted graphs, edges take the form [n1 n2].
 *   For weighted graphs, edges take the form [n1 n2 weight] or [n1 n2], the
 *   latter defaulting to a weight of 1
 */
loom.graph.add_edges = (function loom$graph$add_edges(var_args){
var args__4870__auto__ = [];
var len__4864__auto___82653 = arguments.length;
var i__4865__auto___82654 = (0);
while(true){
if((i__4865__auto___82654 < len__4864__auto___82653)){
args__4870__auto__.push((arguments[i__4865__auto___82654]));

var G__82655 = (i__4865__auto___82654 + (1));
i__4865__auto___82654 = G__82655;
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
(loom.graph.add_edges.cljs$lang$applyTo = (function (seq82248){
var G__82249 = cljs.core.first(seq82248);
var seq82248__$1 = cljs.core.next(seq82248);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__82249,seq82248__$1);
}));

/**
 * Removes nodes from graph g
 */
loom.graph.remove_nodes = (function loom$graph$remove_nodes(var_args){
var args__4870__auto__ = [];
var len__4864__auto___82656 = arguments.length;
var i__4865__auto___82657 = (0);
while(true){
if((i__4865__auto___82657 < len__4864__auto___82656)){
args__4870__auto__.push((arguments[i__4865__auto___82657]));

var G__82658 = (i__4865__auto___82657 + (1));
i__4865__auto___82657 = G__82658;
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
(loom.graph.remove_nodes.cljs$lang$applyTo = (function (seq82250){
var G__82251 = cljs.core.first(seq82250);
var seq82250__$1 = cljs.core.next(seq82250);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__82251,seq82250__$1);
}));

/**
 * Removes edges from graph g. Do not include weights
 */
loom.graph.remove_edges = (function loom$graph$remove_edges(var_args){
var args__4870__auto__ = [];
var len__4864__auto___82659 = arguments.length;
var i__4865__auto___82660 = (0);
while(true){
if((i__4865__auto___82660 < len__4864__auto___82659)){
args__4870__auto__.push((arguments[i__4865__auto___82660]));

var G__82661 = (i__4865__auto___82660 + (1));
i__4865__auto___82660 = G__82661;
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
(loom.graph.remove_edges.cljs$lang$applyTo = (function (seq82252){
var G__82253 = cljs.core.first(seq82252);
var seq82252__$1 = cljs.core.next(seq82252);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__82253,seq82252__$1);
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

(loom.graph.BasicEditableGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k82255,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__82259 = k82255;
var G__82259__$1 = (((G__82259 instanceof cljs.core.Keyword))?G__82259.fqn:null);
switch (G__82259__$1) {
case "nodeset":
return self__.nodeset;

break;
case "adj":
return self__.adj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k82255,else__4505__auto__);

}
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__82260){
var vec__82261 = p__82260;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82261,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82261,(1),null);
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

(loom.graph.BasicEditableGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__82254){
var self__ = this;
var G__82254__$1 = this;
return (new cljs.core.RecordIter((0),G__82254__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(loom.graph.BasicEditableGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this82256,other82257){
var self__ = this;
var this82256__$1 = this;
return (((!((other82257 == null)))) && ((((this82256__$1.constructor === other82257.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82256__$1.nodeset,other82257.nodeset)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82256__$1.adj,other82257.adj)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82256__$1.__extmap,other82257.__extmap)))))))));
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

(loom.graph.BasicEditableGraph.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k82255){
var self__ = this;
var this__4509__auto____$1 = this;
var G__82264 = k82255;
var G__82264__$1 = (((G__82264 instanceof cljs.core.Keyword))?G__82264.fqn:null);
switch (G__82264__$1) {
case "nodeset":
case "adj":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k82255);

}
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__82254){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__82265 = cljs.core.keyword_identical_QMARK_;
var expr__82266 = k__4511__auto__;
if(cljs.core.truth_((pred__82265.cljs$core$IFn$_invoke$arity$2 ? pred__82265.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__82266) : pred__82265.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__82266)))){
return (new loom.graph.BasicEditableGraph(G__82254,self__.adj,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__82265.cljs$core$IFn$_invoke$arity$2 ? pred__82265.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__82266) : pred__82265.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__82266)))){
return (new loom.graph.BasicEditableGraph(self__.nodeset,G__82254,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__82254),null));
}
}
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj,null))], null),self__.__extmap));
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__82254){
var self__ = this;
var this__4501__auto____$1 = this;
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,G__82254,self__.__extmap,self__.__hash));
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
loom.graph.map__GT_BasicEditableGraph = (function loom$graph$map__GT_BasicEditableGraph(G__82258){
var extmap__4542__auto__ = (function (){var G__82268 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__82258,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"adj","adj",-1344630196)], 0));
if(cljs.core.record_QMARK_(G__82258)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__82268);
} else {
return G__82268;
}
})();
return (new loom.graph.BasicEditableGraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__82258),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__82258),null,cljs.core.not_empty(extmap__4542__auto__),null));
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

(loom.graph.BasicEditableDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k82270,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__82274 = k82270;
var G__82274__$1 = (((G__82274 instanceof cljs.core.Keyword))?G__82274.fqn:null);
switch (G__82274__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k82270,else__4505__auto__);

}
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__82275){
var vec__82276 = p__82275;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82276,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82276,(1),null);
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

(loom.graph.BasicEditableDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__82269){
var self__ = this;
var G__82269__$1 = this;
return (new cljs.core.RecordIter((0),G__82269__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(loom.graph.BasicEditableDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this82271,other82272){
var self__ = this;
var this82271__$1 = this;
return (((!((other82272 == null)))) && ((((this82271__$1.constructor === other82272.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82271__$1.nodeset,other82272.nodeset)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82271__$1.adj,other82272.adj)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82271__$1.in,other82272.in)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82271__$1.__extmap,other82272.__extmap)))))))))));
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

(loom.graph.BasicEditableDigraph.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k82270){
var self__ = this;
var this__4509__auto____$1 = this;
var G__82279 = k82270;
var G__82279__$1 = (((G__82279 instanceof cljs.core.Keyword))?G__82279.fqn:null);
switch (G__82279__$1) {
case "nodeset":
case "adj":
case "in":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k82270);

}
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__82269){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__82280 = cljs.core.keyword_identical_QMARK_;
var expr__82281 = k__4511__auto__;
if(cljs.core.truth_((pred__82280.cljs$core$IFn$_invoke$arity$2 ? pred__82280.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__82281) : pred__82280.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__82281)))){
return (new loom.graph.BasicEditableDigraph(G__82269,self__.adj,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__82280.cljs$core$IFn$_invoke$arity$2 ? pred__82280.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__82281) : pred__82280.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__82281)))){
return (new loom.graph.BasicEditableDigraph(self__.nodeset,G__82269,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__82280.cljs$core$IFn$_invoke$arity$2 ? pred__82280.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"in","in",-1531184865),expr__82281) : pred__82280.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),expr__82281)))){
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,G__82269,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__82269),null));
}
}
}
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$,null))], null),self__.__extmap));
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__82269){
var self__ = this;
var this__4501__auto____$1 = this;
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,G__82269,self__.__extmap,self__.__hash));
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
loom.graph.map__GT_BasicEditableDigraph = (function loom$graph$map__GT_BasicEditableDigraph(G__82273){
var extmap__4542__auto__ = (function (){var G__82283 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__82273,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)], 0));
if(cljs.core.record_QMARK_(G__82273)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__82283);
} else {
return G__82283;
}
})();
return (new loom.graph.BasicEditableDigraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__82273),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__82273),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(G__82273),null,cljs.core.not_empty(extmap__4542__auto__),null));
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

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k82285,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__82289 = k82285;
var G__82289__$1 = (((G__82289 instanceof cljs.core.Keyword))?G__82289.fqn:null);
switch (G__82289__$1) {
case "nodeset":
return self__.nodeset;

break;
case "adj":
return self__.adj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k82285,else__4505__auto__);

}
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__82290){
var vec__82291 = p__82290;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82291,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82291,(1),null);
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

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__82284){
var self__ = this;
var G__82284__$1 = this;
return (new cljs.core.RecordIter((0),G__82284__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this82286,other82287){
var self__ = this;
var this82286__$1 = this;
return (((!((other82287 == null)))) && ((((this82286__$1.constructor === other82287.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82286__$1.nodeset,other82287.nodeset)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82286__$1.adj,other82287.adj)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82286__$1.__extmap,other82287.__extmap)))))))));
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

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k82285){
var self__ = this;
var this__4509__auto____$1 = this;
var G__82294 = k82285;
var G__82294__$1 = (((G__82294 instanceof cljs.core.Keyword))?G__82294.fqn:null);
switch (G__82294__$1) {
case "nodeset":
case "adj":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k82285);

}
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__82284){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__82295 = cljs.core.keyword_identical_QMARK_;
var expr__82296 = k__4511__auto__;
if(cljs.core.truth_((pred__82295.cljs$core$IFn$_invoke$arity$2 ? pred__82295.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__82296) : pred__82295.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__82296)))){
return (new loom.graph.BasicEditableWeightedGraph(G__82284,self__.adj,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__82295.cljs$core$IFn$_invoke$arity$2 ? pred__82295.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__82296) : pred__82295.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__82296)))){
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,G__82284,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__82284),null));
}
}
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj,null))], null),self__.__extmap));
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__82284){
var self__ = this;
var this__4501__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,G__82284,self__.__extmap,self__.__hash));
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
loom.graph.map__GT_BasicEditableWeightedGraph = (function loom$graph$map__GT_BasicEditableWeightedGraph(G__82288){
var extmap__4542__auto__ = (function (){var G__82298 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__82288,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"adj","adj",-1344630196)], 0));
if(cljs.core.record_QMARK_(G__82288)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__82298);
} else {
return G__82298;
}
})();
return (new loom.graph.BasicEditableWeightedGraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__82288),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__82288),null,cljs.core.not_empty(extmap__4542__auto__),null));
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

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k82300,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__82304 = k82300;
var G__82304__$1 = (((G__82304 instanceof cljs.core.Keyword))?G__82304.fqn:null);
switch (G__82304__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k82300,else__4505__auto__);

}
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__82305){
var vec__82306 = p__82305;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82306,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82306,(1),null);
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

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__82299){
var self__ = this;
var G__82299__$1 = this;
return (new cljs.core.RecordIter((0),G__82299__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this82301,other82302){
var self__ = this;
var this82301__$1 = this;
return (((!((other82302 == null)))) && ((((this82301__$1.constructor === other82302.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82301__$1.nodeset,other82302.nodeset)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82301__$1.adj,other82302.adj)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82301__$1.in,other82302.in)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82301__$1.__extmap,other82302.__extmap)))))))))));
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

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k82300){
var self__ = this;
var this__4509__auto____$1 = this;
var G__82309 = k82300;
var G__82309__$1 = (((G__82309 instanceof cljs.core.Keyword))?G__82309.fqn:null);
switch (G__82309__$1) {
case "nodeset":
case "adj":
case "in":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k82300);

}
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__82299){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__82310 = cljs.core.keyword_identical_QMARK_;
var expr__82311 = k__4511__auto__;
if(cljs.core.truth_((pred__82310.cljs$core$IFn$_invoke$arity$2 ? pred__82310.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__82311) : pred__82310.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__82311)))){
return (new loom.graph.BasicEditableWeightedDigraph(G__82299,self__.adj,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__82310.cljs$core$IFn$_invoke$arity$2 ? pred__82310.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__82311) : pred__82310.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__82311)))){
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,G__82299,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__82310.cljs$core$IFn$_invoke$arity$2 ? pred__82310.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"in","in",-1531184865),expr__82311) : pred__82310.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),expr__82311)))){
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,G__82299,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__82299),null));
}
}
}
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$,null))], null),self__.__extmap));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__82299){
var self__ = this;
var this__4501__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,G__82299,self__.__extmap,self__.__hash));
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
loom.graph.map__GT_BasicEditableWeightedDigraph = (function loom$graph$map__GT_BasicEditableWeightedDigraph(G__82303){
var extmap__4542__auto__ = (function (){var G__82313 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__82303,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)], 0));
if(cljs.core.record_QMARK_(G__82303)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__82313);
} else {
return G__82313;
}
})();
return (new loom.graph.BasicEditableWeightedDigraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__82303),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__82303),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(G__82303),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

/**
 * Weight used when none is given for edges in weighted graphs
 */
loom.graph._STAR_default_weight_STAR_ = (1);
loom.graph.remove_adj_nodes = (function loom$graph$remove_adj_nodes(m,nodes,adjacents,remove_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,n){
if(cljs.core.truth_((m__$1.cljs$core$IFn$_invoke$arity$1 ? m__$1.cljs$core$IFn$_invoke$arity$1(n) : m__$1.call(null,n)))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null),(function (p1__82314_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(remove_fn,p1__82314_SHARP_,nodes);
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
var iter__4652__auto__ = (function loom$graph$iter__82317(s__82318){
return (new cljs.core.LazySeq(null,(function (){
var s__82318__$1 = s__82318;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__82318__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var n1 = cljs.core.first(xs__6308__auto__);
var iterys__4648__auto__ = ((function (s__82318__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function loom$graph$iter__82317_$_iter__82319(s__82320){
return (new cljs.core.LazySeq(null,((function (s__82318__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function (){
var s__82320__$1 = s__82320;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__82320__$1);
if(temp__5753__auto____$1){
var s__82320__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__82320__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__82320__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__82322 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__82321 = (0);
while(true){
if((i__82321 < size__4651__auto__)){
var e = cljs.core._nth(c__4650__auto__,i__82321);
cljs.core.chunk_append(b__82322,e);

var G__82682 = (i__82321 + (1));
i__82321 = G__82682;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82322),loom$graph$iter__82317_$_iter__82319(cljs.core.chunk_rest(s__82320__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82322),null);
}
} else {
var e = cljs.core.first(s__82320__$2);
return cljs.core.cons(e,loom$graph$iter__82317_$_iter__82319(cljs.core.rest(s__82320__$2)));
}
} else {
return null;
}
break;
}
});})(s__82318__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1))
,null,null));
});})(s__82318__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(loom.graph.out_edges(g__$1,n1)));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,loom$graph$iter__82317(cljs.core.rest(s__82318__$1)));
} else {
var G__82683 = cljs.core.rest(s__82318__$1);
s__82318__$1 = G__82683;
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
var iter__4652__auto__ = (function loom$graph$iter__82323(s__82324){
return (new cljs.core.LazySeq(null,(function (){
var s__82324__$1 = s__82324;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__82324__$1);
if(temp__5753__auto__){
var s__82324__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__82324__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__82324__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__82326 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__82325 = (0);
while(true){
if((i__82325 < size__4651__auto__)){
var n2 = cljs.core._nth(c__4650__auto__,i__82325);
cljs.core.chunk_append(b__82326,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__82684 = (i__82325 + (1));
i__82325 = G__82684;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82326),loom$graph$iter__82323(cljs.core.chunk_rest(s__82324__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82326),null);
}
} else {
var n2 = cljs.core.first(s__82324__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__82323(cljs.core.rest(s__82324__$2)));
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g__$2,p__82327){
var vec__82328 = p__82327;
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82328,(0),null);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82328,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,n1,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n2], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),n1);
}),g__$1,edges);
}));

(loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$remove_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
var nbrs = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__82315_SHARP_){
return loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,p1__82315_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nodes], 0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(g__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),(function (p1__82316_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,p1__82316_SHARP_,nodes);
})),new cljs.core.Keyword(null,"adj","adj",-1344630196),loom.graph.remove_adj_nodes(g__$1.adj,nodes,nbrs,cljs.core.disj));
}));

(loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$remove_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g__$2,p__82331){
var vec__82332 = p__82331;
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82332,(0),null);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82332,(1),null);
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
var iter__4652__auto__ = (function loom$graph$iter__82338(s__82339){
return (new cljs.core.LazySeq(null,(function (){
var s__82339__$1 = s__82339;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__82339__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var n1 = cljs.core.first(xs__6308__auto__);
var iterys__4648__auto__ = ((function (s__82339__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function loom$graph$iter__82338_$_iter__82340(s__82341){
return (new cljs.core.LazySeq(null,((function (s__82339__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function (){
var s__82341__$1 = s__82341;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__82341__$1);
if(temp__5753__auto____$1){
var s__82341__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__82341__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__82341__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__82343 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__82342 = (0);
while(true){
if((i__82342 < size__4651__auto__)){
var e = cljs.core._nth(c__4650__auto__,i__82342);
cljs.core.chunk_append(b__82343,e);

var G__82685 = (i__82342 + (1));
i__82342 = G__82685;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82343),loom$graph$iter__82338_$_iter__82340(cljs.core.chunk_rest(s__82341__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82343),null);
}
} else {
var e = cljs.core.first(s__82341__$2);
return cljs.core.cons(e,loom$graph$iter__82338_$_iter__82340(cljs.core.rest(s__82341__$2)));
}
} else {
return null;
}
break;
}
});})(s__82339__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1))
,null,null));
});})(s__82339__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(loom.graph.out_edges(g__$1,n1)));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,loom$graph$iter__82338(cljs.core.rest(s__82339__$1)));
} else {
var G__82686 = cljs.core.rest(s__82339__$1);
s__82339__$1 = G__82686;
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
var iter__4652__auto__ = (function loom$graph$iter__82344(s__82345){
return (new cljs.core.LazySeq(null,(function (){
var s__82345__$1 = s__82345;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__82345__$1);
if(temp__5753__auto__){
var s__82345__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__82345__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__82345__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__82347 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__82346 = (0);
while(true){
if((i__82346 < size__4651__auto__)){
var n2 = cljs.core._nth(c__4650__auto__,i__82346);
cljs.core.chunk_append(b__82347,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__82687 = (i__82346 + (1));
i__82346 = G__82687;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82347),loom$graph$iter__82344(cljs.core.chunk_rest(s__82345__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82347),null);
}
} else {
var n2 = cljs.core.first(s__82345__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__82344(cljs.core.rest(s__82345__$2)));
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g__$2,p__82348){
var vec__82349 = p__82348;
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82349,(0),null);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82349,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,n1,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),n2], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),n1);
}),g__$1,edges);
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$remove_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
var ins = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__82335_SHARP_){
return loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2(g__$1,p1__82335_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nodes], 0));
var outs = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__82336_SHARP_){
return loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,p1__82336_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nodes], 0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(g__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),(function (p1__82337_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,p1__82337_SHARP_,nodes);
})),new cljs.core.Keyword(null,"adj","adj",-1344630196),loom.graph.remove_adj_nodes(g__$1.adj,nodes,ins,cljs.core.disj)),new cljs.core.Keyword(null,"in","in",-1531184865),loom.graph.remove_adj_nodes(g__$1.in,nodes,outs,cljs.core.disj));
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$remove_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g__$2,p__82352){
var vec__82353 = p__82352;
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82353,(0),null);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82353,(1),null);
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
var iter__4652__auto__ = (function loom$graph$iter__82356(s__82357){
return (new cljs.core.LazySeq(null,(function (){
var s__82357__$1 = s__82357;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__82357__$1);
if(temp__5753__auto__){
var s__82357__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__82357__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__82357__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__82359 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__82358 = (0);
while(true){
if((i__82358 < size__4651__auto__)){
var n2 = cljs.core._nth(c__4650__auto__,i__82358);
cljs.core.chunk_append(b__82359,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null));

var G__82688 = (i__82358 + (1));
i__82358 = G__82688;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82359),loom$graph$iter__82356(cljs.core.chunk_rest(s__82357__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82359),null);
}
} else {
var n2 = cljs.core.first(s__82357__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null),loom$graph$iter__82356(cljs.core.rest(s__82357__$2)));
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
var iter__4652__auto__ = (function loom$graph$iter__82362(s__82363){
return (new cljs.core.LazySeq(null,(function (){
var s__82363__$1 = s__82363;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__82363__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var n1 = cljs.core.first(xs__6308__auto__);
var iterys__4648__auto__ = ((function (s__82363__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function loom$graph$iter__82362_$_iter__82364(s__82365){
return (new cljs.core.LazySeq(null,((function (s__82363__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function (){
var s__82365__$1 = s__82365;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__82365__$1);
if(temp__5753__auto____$1){
var s__82365__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__82365__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__82365__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__82367 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__82366 = (0);
while(true){
if((i__82366 < size__4651__auto__)){
var e = cljs.core._nth(c__4650__auto__,i__82366);
cljs.core.chunk_append(b__82367,e);

var G__82689 = (i__82366 + (1));
i__82366 = G__82689;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82367),loom$graph$iter__82362_$_iter__82364(cljs.core.chunk_rest(s__82365__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82367),null);
}
} else {
var e = cljs.core.first(s__82365__$2);
return cljs.core.cons(e,loom$graph$iter__82362_$_iter__82364(cljs.core.rest(s__82365__$2)));
}
} else {
return null;
}
break;
}
});})(s__82363__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1))
,null,null));
});})(s__82363__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(loom.graph.out_edges(g__$1,n1)));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,loom$graph$iter__82362(cljs.core.rest(s__82363__$1)));
} else {
var G__82690 = cljs.core.rest(s__82363__$1);
s__82363__$1 = G__82690;
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
var iter__4652__auto__ = (function loom$graph$iter__82368(s__82369){
return (new cljs.core.LazySeq(null,(function (){
var s__82369__$1 = s__82369;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__82369__$1);
if(temp__5753__auto__){
var s__82369__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__82369__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__82369__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__82371 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__82370 = (0);
while(true){
if((i__82370 < size__4651__auto__)){
var n2 = cljs.core._nth(c__4650__auto__,i__82370);
cljs.core.chunk_append(b__82371,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__82691 = (i__82370 + (1));
i__82370 = G__82691;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82371),loom$graph$iter__82368(cljs.core.chunk_rest(s__82369__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82371),null);
}
} else {
var n2 = cljs.core.first(s__82369__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__82368(cljs.core.rest(s__82369__$2)));
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g__$2,p__82372){
var vec__82373 = p__82372;
var seq__82374 = cljs.core.seq(vec__82373);
var first__82375 = cljs.core.first(seq__82374);
var seq__82374__$1 = cljs.core.next(seq__82374);
var n1 = first__82375;
var first__82375__$1 = cljs.core.first(seq__82374__$1);
var seq__82374__$2 = cljs.core.next(seq__82374__$1);
var n2 = first__82375__$1;
var vec__82376 = seq__82374__$2;
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82376,(0),null);
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
var nbrs = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__82360_SHARP_){
return loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,p1__82360_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nodes], 0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(g__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),(function (p1__82361_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,p1__82361_SHARP_,nodes);
})),new cljs.core.Keyword(null,"adj","adj",-1344630196),loom.graph.remove_adj_nodes(g__$1.adj,nodes,nbrs,cljs.core.dissoc));
}));

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$remove_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g__$2,p__82379){
var vec__82380 = p__82379;
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82380,(0),null);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82380,(1),null);
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
var iter__4652__auto__ = (function loom$graph$iter__82386(s__82387){
return (new cljs.core.LazySeq(null,(function (){
var s__82387__$1 = s__82387;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__82387__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var n1 = cljs.core.first(xs__6308__auto__);
var iterys__4648__auto__ = ((function (s__82387__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function loom$graph$iter__82386_$_iter__82388(s__82389){
return (new cljs.core.LazySeq(null,((function (s__82387__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function (){
var s__82389__$1 = s__82389;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__82389__$1);
if(temp__5753__auto____$1){
var s__82389__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__82389__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__82389__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__82391 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__82390 = (0);
while(true){
if((i__82390 < size__4651__auto__)){
var e = cljs.core._nth(c__4650__auto__,i__82390);
cljs.core.chunk_append(b__82391,e);

var G__82692 = (i__82390 + (1));
i__82390 = G__82692;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82391),loom$graph$iter__82386_$_iter__82388(cljs.core.chunk_rest(s__82389__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82391),null);
}
} else {
var e = cljs.core.first(s__82389__$2);
return cljs.core.cons(e,loom$graph$iter__82386_$_iter__82388(cljs.core.rest(s__82389__$2)));
}
} else {
return null;
}
break;
}
});})(s__82387__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1))
,null,null));
});})(s__82387__$1,n1,xs__6308__auto__,temp__5753__auto__,g__$1))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(loom.graph.out_edges(g__$1,n1)));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,loom$graph$iter__82386(cljs.core.rest(s__82387__$1)));
} else {
var G__82693 = cljs.core.rest(s__82387__$1);
s__82387__$1 = G__82693;
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
var iter__4652__auto__ = (function loom$graph$iter__82392(s__82393){
return (new cljs.core.LazySeq(null,(function (){
var s__82393__$1 = s__82393;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__82393__$1);
if(temp__5753__auto__){
var s__82393__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__82393__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__82393__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__82395 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__82394 = (0);
while(true){
if((i__82394 < size__4651__auto__)){
var n2 = cljs.core._nth(c__4650__auto__,i__82394);
cljs.core.chunk_append(b__82395,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__82694 = (i__82394 + (1));
i__82394 = G__82694;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82395),loom$graph$iter__82392(cljs.core.chunk_rest(s__82393__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82395),null);
}
} else {
var n2 = cljs.core.first(s__82393__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__82392(cljs.core.rest(s__82393__$2)));
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g__$2,p__82396){
var vec__82397 = p__82396;
var seq__82398 = cljs.core.seq(vec__82397);
var first__82399 = cljs.core.first(seq__82398);
var seq__82398__$1 = cljs.core.next(seq__82398);
var n1 = first__82399;
var first__82399__$1 = cljs.core.first(seq__82398__$1);
var seq__82398__$2 = cljs.core.next(seq__82398__$1);
var n2 = first__82399__$1;
var vec__82400 = seq__82398__$2;
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82400,(0),null);
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
var ins = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__82383_SHARP_){
return loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2(g__$1,p1__82383_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nodes], 0));
var outs = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__82384_SHARP_){
return loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,p1__82384_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nodes], 0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(g__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),(function (p1__82385_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,p1__82385_SHARP_,nodes);
})),new cljs.core.Keyword(null,"adj","adj",-1344630196),loom.graph.remove_adj_nodes(g__$1.adj,nodes,ins,cljs.core.dissoc)),new cljs.core.Keyword(null,"in","in",-1531184865),loom.graph.remove_adj_nodes(g__$1.in,nodes,outs,cljs.core.disj));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$remove_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g__$2,p__82403){
var vec__82404 = p__82403;
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82404,(0),null);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82404,(1),null);
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
var iter__4652__auto__ = (function loom$graph$iter__82407(s__82408){
return (new cljs.core.LazySeq(null,(function (){
var s__82408__$1 = s__82408;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__82408__$1);
if(temp__5753__auto__){
var s__82408__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__82408__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__82408__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__82410 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__82409 = (0);
while(true){
if((i__82409 < size__4651__auto__)){
var n2 = cljs.core._nth(c__4650__auto__,i__82409);
cljs.core.chunk_append(b__82410,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null));

var G__82695 = (i__82409 + (1));
i__82409 = G__82695;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82410),loom$graph$iter__82407(cljs.core.chunk_rest(s__82408__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82410),null);
}
} else {
var n2 = cljs.core.first(s__82408__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null),loom$graph$iter__82407(cljs.core.rest(s__82408__$2)));
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (tg,p__82411){
var vec__82412 = p__82411;
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82412,(0),null);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82412,(1),null);
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
var len__4864__auto___82696 = arguments.length;
var i__4865__auto___82697 = (0);
while(true){
if((i__4865__auto___82697 < len__4864__auto___82696)){
args__4870__auto__.push((arguments[i__4865__auto___82697]));

var G__82698 = (i__4865__auto___82697 + (1));
i__4865__auto___82697 = G__82698;
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
(loom.graph.call_or_return.cljs$lang$applyTo = (function (seq82415){
var G__82416 = cljs.core.first(seq82415);
var seq82415__$1 = cljs.core.next(seq82415);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__82416,seq82415__$1);
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

(loom.graph.FlyGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k82418,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__82422 = k82418;
var G__82422__$1 = (((G__82422 instanceof cljs.core.Keyword))?G__82422.fqn:null);
switch (G__82422__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k82418,else__4505__auto__);

}
}));

(loom.graph.FlyGraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__82423){
var vec__82424 = p__82423;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82424,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82424,(1),null);
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

(loom.graph.FlyGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__82417){
var self__ = this;
var G__82417__$1 = this;
return (new cljs.core.RecordIter((0),G__82417__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"start","start",-355208981)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(loom.graph.FlyGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this82419,other82420){
var self__ = this;
var this82419__$1 = this;
return (((!((other82420 == null)))) && ((((this82419__$1.constructor === other82420.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82419__$1.fnodes,other82420.fnodes)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82419__$1.fedges,other82420.fedges)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82419__$1.fsuccessors,other82420.fsuccessors)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82419__$1.start,other82420.start)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82419__$1.__extmap,other82420.__extmap)))))))))))));
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

(loom.graph.FlyGraph.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k82418){
var self__ = this;
var this__4509__auto____$1 = this;
var G__82427 = k82418;
var G__82427__$1 = (((G__82427 instanceof cljs.core.Keyword))?G__82427.fqn:null);
switch (G__82427__$1) {
case "fnodes":
case "fedges":
case "fsuccessors":
case "start":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k82418);

}
}));

(loom.graph.FlyGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__82417){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__82428 = cljs.core.keyword_identical_QMARK_;
var expr__82429 = k__4511__auto__;
if(cljs.core.truth_((pred__82428.cljs$core$IFn$_invoke$arity$2 ? pred__82428.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__82429) : pred__82428.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__82429)))){
return (new loom.graph.FlyGraph(G__82417,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__82428.cljs$core$IFn$_invoke$arity$2 ? pred__82428.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__82429) : pred__82428.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__82429)))){
return (new loom.graph.FlyGraph(self__.fnodes,G__82417,self__.fsuccessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__82428.cljs$core$IFn$_invoke$arity$2 ? pred__82428.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__82429) : pred__82428.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__82429)))){
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,G__82417,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__82428.cljs$core$IFn$_invoke$arity$2 ? pred__82428.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start","start",-355208981),expr__82429) : pred__82428.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__82429)))){
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__82417,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__82417),null));
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

(loom.graph.FlyGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__82417){
var self__ = this;
var this__4501__auto____$1 = this;
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,G__82417,self__.__extmap,self__.__hash));
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
loom.graph.map__GT_FlyGraph = (function loom$graph$map__GT_FlyGraph(G__82421){
var extmap__4542__auto__ = (function (){var G__82431 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__82421,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"start","start",-355208981)], 0));
if(cljs.core.record_QMARK_(G__82421)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__82431);
} else {
return G__82431;
}
})();
return (new loom.graph.FlyGraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__82421),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__82421),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__82421),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__82421),null,cljs.core.not_empty(extmap__4542__auto__),null));
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

(loom.graph.FlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k82433,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__82437 = k82433;
var G__82437__$1 = (((G__82437 instanceof cljs.core.Keyword))?G__82437.fqn:null);
switch (G__82437__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k82433,else__4505__auto__);

}
}));

(loom.graph.FlyDigraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__82438){
var vec__82439 = p__82438;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82439,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82439,(1),null);
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

(loom.graph.FlyDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__82432){
var self__ = this;
var G__82432__$1 = this;
return (new cljs.core.RecordIter((0),G__82432__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"start","start",-355208981)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(loom.graph.FlyDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this82434,other82435){
var self__ = this;
var this82434__$1 = this;
return (((!((other82435 == null)))) && ((((this82434__$1.constructor === other82435.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82434__$1.fnodes,other82435.fnodes)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82434__$1.fedges,other82435.fedges)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82434__$1.fsuccessors,other82435.fsuccessors)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82434__$1.fpredecessors,other82435.fpredecessors)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82434__$1.start,other82435.start)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82434__$1.__extmap,other82435.__extmap)))))))))))))));
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

(loom.graph.FlyDigraph.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k82433){
var self__ = this;
var this__4509__auto____$1 = this;
var G__82442 = k82433;
var G__82442__$1 = (((G__82442 instanceof cljs.core.Keyword))?G__82442.fqn:null);
switch (G__82442__$1) {
case "fnodes":
case "fedges":
case "fsuccessors":
case "fpredecessors":
case "start":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k82433);

}
}));

(loom.graph.FlyDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__82432){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__82443 = cljs.core.keyword_identical_QMARK_;
var expr__82444 = k__4511__auto__;
if(cljs.core.truth_((pred__82443.cljs$core$IFn$_invoke$arity$2 ? pred__82443.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__82444) : pred__82443.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__82444)))){
return (new loom.graph.FlyDigraph(G__82432,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__82443.cljs$core$IFn$_invoke$arity$2 ? pred__82443.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__82444) : pred__82443.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__82444)))){
return (new loom.graph.FlyDigraph(self__.fnodes,G__82432,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__82443.cljs$core$IFn$_invoke$arity$2 ? pred__82443.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__82444) : pred__82443.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__82444)))){
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,G__82432,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__82443.cljs$core$IFn$_invoke$arity$2 ? pred__82443.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),expr__82444) : pred__82443.call(null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),expr__82444)))){
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__82432,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__82443.cljs$core$IFn$_invoke$arity$2 ? pred__82443.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start","start",-355208981),expr__82444) : pred__82443.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__82444)))){
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,G__82432,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__82432),null));
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

(loom.graph.FlyDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__82432){
var self__ = this;
var this__4501__auto____$1 = this;
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,G__82432,self__.__extmap,self__.__hash));
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
loom.graph.map__GT_FlyDigraph = (function loom$graph$map__GT_FlyDigraph(G__82436){
var extmap__4542__auto__ = (function (){var G__82446 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__82436,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"start","start",-355208981)], 0));
if(cljs.core.record_QMARK_(G__82436)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__82446);
} else {
return G__82446;
}
})();
return (new loom.graph.FlyDigraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__82436),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__82436),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__82436),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934).cljs$core$IFn$_invoke$arity$1(G__82436),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__82436),null,cljs.core.not_empty(extmap__4542__auto__),null));
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

(loom.graph.WeightedFlyGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k82448,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__82452 = k82448;
var G__82452__$1 = (((G__82452 instanceof cljs.core.Keyword))?G__82452.fqn:null);
switch (G__82452__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k82448,else__4505__auto__);

}
}));

(loom.graph.WeightedFlyGraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__82453){
var vec__82454 = p__82453;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82454,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82454,(1),null);
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

(loom.graph.WeightedFlyGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__82447){
var self__ = this;
var G__82447__$1 = this;
return (new cljs.core.RecordIter((0),G__82447__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(loom.graph.WeightedFlyGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this82449,other82450){
var self__ = this;
var this82449__$1 = this;
return (((!((other82450 == null)))) && ((((this82449__$1.constructor === other82450.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82449__$1.fnodes,other82450.fnodes)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82449__$1.fedges,other82450.fedges)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82449__$1.fsuccessors,other82450.fsuccessors)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82449__$1.fweight,other82450.fweight)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82449__$1.start,other82450.start)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82449__$1.__extmap,other82450.__extmap)))))))))))))));
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

(loom.graph.WeightedFlyGraph.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k82448){
var self__ = this;
var this__4509__auto____$1 = this;
var G__82457 = k82448;
var G__82457__$1 = (((G__82457 instanceof cljs.core.Keyword))?G__82457.fqn:null);
switch (G__82457__$1) {
case "fnodes":
case "fedges":
case "fsuccessors":
case "fweight":
case "start":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k82448);

}
}));

(loom.graph.WeightedFlyGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__82447){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__82458 = cljs.core.keyword_identical_QMARK_;
var expr__82459 = k__4511__auto__;
if(cljs.core.truth_((pred__82458.cljs$core$IFn$_invoke$arity$2 ? pred__82458.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__82459) : pred__82458.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__82459)))){
return (new loom.graph.WeightedFlyGraph(G__82447,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__82458.cljs$core$IFn$_invoke$arity$2 ? pred__82458.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__82459) : pred__82458.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__82459)))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,G__82447,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__82458.cljs$core$IFn$_invoke$arity$2 ? pred__82458.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__82459) : pred__82458.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__82459)))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,G__82447,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__82458.cljs$core$IFn$_invoke$arity$2 ? pred__82458.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fweight","fweight",1299924141),expr__82459) : pred__82458.call(null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),expr__82459)))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__82447,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__82458.cljs$core$IFn$_invoke$arity$2 ? pred__82458.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start","start",-355208981),expr__82459) : pred__82458.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__82459)))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,G__82447,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__82447),null));
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

(loom.graph.WeightedFlyGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__82447){
var self__ = this;
var this__4501__auto____$1 = this;
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,G__82447,self__.__extmap,self__.__hash));
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
loom.graph.map__GT_WeightedFlyGraph = (function loom$graph$map__GT_WeightedFlyGraph(G__82451){
var extmap__4542__auto__ = (function (){var G__82461 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__82451,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)], 0));
if(cljs.core.record_QMARK_(G__82451)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__82461);
} else {
return G__82461;
}
})();
return (new loom.graph.WeightedFlyGraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__82451),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__82451),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__82451),new cljs.core.Keyword(null,"fweight","fweight",1299924141).cljs$core$IFn$_invoke$arity$1(G__82451),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__82451),null,cljs.core.not_empty(extmap__4542__auto__),null));
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

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k82463,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__82467 = k82463;
var G__82467__$1 = (((G__82467 instanceof cljs.core.Keyword))?G__82467.fqn:null);
switch (G__82467__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k82463,else__4505__auto__);

}
}));

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__82468){
var vec__82469 = p__82468;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82469,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82469,(1),null);
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

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__82462){
var self__ = this;
var G__82462__$1 = this;
return (new cljs.core.RecordIter((0),G__82462__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this82464,other82465){
var self__ = this;
var this82464__$1 = this;
return (((!((other82465 == null)))) && ((((this82464__$1.constructor === other82465.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82464__$1.fnodes,other82465.fnodes)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82464__$1.fedges,other82465.fedges)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82464__$1.fsuccessors,other82465.fsuccessors)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82464__$1.fpredecessors,other82465.fpredecessors)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82464__$1.fweight,other82465.fweight)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82464__$1.start,other82465.start)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this82464__$1.__extmap,other82465.__extmap)))))))))))))))));
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

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k82463){
var self__ = this;
var this__4509__auto____$1 = this;
var G__82472 = k82463;
var G__82472__$1 = (((G__82472 instanceof cljs.core.Keyword))?G__82472.fqn:null);
switch (G__82472__$1) {
case "fnodes":
case "fedges":
case "fsuccessors":
case "fpredecessors":
case "fweight":
case "start":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k82463);

}
}));

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__82462){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__82473 = cljs.core.keyword_identical_QMARK_;
var expr__82474 = k__4511__auto__;
if(cljs.core.truth_((pred__82473.cljs$core$IFn$_invoke$arity$2 ? pred__82473.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__82474) : pred__82473.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__82474)))){
return (new loom.graph.WeightedFlyDigraph(G__82462,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__82473.cljs$core$IFn$_invoke$arity$2 ? pred__82473.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__82474) : pred__82473.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__82474)))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,G__82462,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__82473.cljs$core$IFn$_invoke$arity$2 ? pred__82473.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__82474) : pred__82473.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__82474)))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,G__82462,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__82473.cljs$core$IFn$_invoke$arity$2 ? pred__82473.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),expr__82474) : pred__82473.call(null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),expr__82474)))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__82462,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__82473.cljs$core$IFn$_invoke$arity$2 ? pred__82473.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fweight","fweight",1299924141),expr__82474) : pred__82473.call(null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),expr__82474)))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,G__82462,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__82473.cljs$core$IFn$_invoke$arity$2 ? pred__82473.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start","start",-355208981),expr__82474) : pred__82473.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__82474)))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,G__82462,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__82462),null));
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

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__82462){
var self__ = this;
var this__4501__auto____$1 = this;
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,G__82462,self__.__extmap,self__.__hash));
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
loom.graph.map__GT_WeightedFlyDigraph = (function loom$graph$map__GT_WeightedFlyDigraph(G__82466){
var extmap__4542__auto__ = (function (){var G__82476 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__82466,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)], 0));
if(cljs.core.record_QMARK_(G__82466)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__82476);
} else {
return G__82476;
}
})();
return (new loom.graph.WeightedFlyDigraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__82466),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__82466),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__82466),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934).cljs$core$IFn$_invoke$arity$1(G__82466),new cljs.core.Keyword(null,"fweight","fweight",1299924141).cljs$core$IFn$_invoke$arity$1(G__82466),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__82466),null,cljs.core.not_empty(extmap__4542__auto__),null));
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
var iter__4652__auto__ = (function loom$graph$iter__82477(s__82478){
return (new cljs.core.LazySeq(null,(function (){
var s__82478__$1 = s__82478;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__82478__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var n = cljs.core.first(xs__6308__auto__);
var iterys__4648__auto__ = ((function (s__82478__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function loom$graph$iter__82477_$_iter__82479(s__82480){
return (new cljs.core.LazySeq(null,((function (s__82478__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function (){
var s__82480__$1 = s__82480;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__82480__$1);
if(temp__5753__auto____$1){
var s__82480__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__82480__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__82480__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__82482 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__82481 = (0);
while(true){
if((i__82481 < size__4651__auto__)){
var nbr = cljs.core._nth(c__4650__auto__,i__82481);
cljs.core.chunk_append(b__82482,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__82716 = (i__82481 + (1));
i__82481 = G__82716;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82482),loom$graph$iter__82477_$_iter__82479(cljs.core.chunk_rest(s__82480__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82482),null);
}
} else {
var nbr = cljs.core.first(s__82480__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__82477_$_iter__82479(cljs.core.rest(s__82480__$2)));
}
} else {
return null;
}
break;
}
});})(s__82478__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1))
,null,null));
});})(s__82478__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,n)));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,loom$graph$iter__82477(cljs.core.rest(s__82478__$1)));
} else {
var G__82717 = cljs.core.rest(s__82478__$1);
s__82478__$1 = G__82717;
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
var iter__4652__auto__ = (function loom$graph$iter__82483(s__82484){
return (new cljs.core.LazySeq(null,(function (){
var s__82484__$1 = s__82484;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__82484__$1);
if(temp__5753__auto__){
var s__82484__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__82484__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__82484__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__82486 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__82485 = (0);
while(true){
if((i__82485 < size__4651__auto__)){
var n2 = cljs.core._nth(c__4650__auto__,i__82485);
cljs.core.chunk_append(b__82486,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__82721 = (i__82485 + (1));
i__82485 = G__82721;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82486),loom$graph$iter__82483(cljs.core.chunk_rest(s__82484__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82486),null);
}
} else {
var n2 = cljs.core.first(s__82484__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__82483(cljs.core.rest(s__82484__$2)));
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
var iter__4652__auto__ = (function loom$graph$iter__82487(s__82488){
return (new cljs.core.LazySeq(null,(function (){
var s__82488__$1 = s__82488;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__82488__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var n = cljs.core.first(xs__6308__auto__);
var iterys__4648__auto__ = ((function (s__82488__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function loom$graph$iter__82487_$_iter__82489(s__82490){
return (new cljs.core.LazySeq(null,((function (s__82488__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function (){
var s__82490__$1 = s__82490;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__82490__$1);
if(temp__5753__auto____$1){
var s__82490__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__82490__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__82490__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__82492 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__82491 = (0);
while(true){
if((i__82491 < size__4651__auto__)){
var nbr = cljs.core._nth(c__4650__auto__,i__82491);
cljs.core.chunk_append(b__82492,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__82728 = (i__82491 + (1));
i__82491 = G__82728;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82492),loom$graph$iter__82487_$_iter__82489(cljs.core.chunk_rest(s__82490__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82492),null);
}
} else {
var nbr = cljs.core.first(s__82490__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__82487_$_iter__82489(cljs.core.rest(s__82490__$2)));
}
} else {
return null;
}
break;
}
});})(s__82488__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1))
,null,null));
});})(s__82488__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,n)));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,loom$graph$iter__82487(cljs.core.rest(s__82488__$1)));
} else {
var G__82729 = cljs.core.rest(s__82488__$1);
s__82488__$1 = G__82729;
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
var iter__4652__auto__ = (function loom$graph$iter__82493(s__82494){
return (new cljs.core.LazySeq(null,(function (){
var s__82494__$1 = s__82494;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__82494__$1);
if(temp__5753__auto__){
var s__82494__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__82494__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__82494__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__82496 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__82495 = (0);
while(true){
if((i__82495 < size__4651__auto__)){
var n2 = cljs.core._nth(c__4650__auto__,i__82495);
cljs.core.chunk_append(b__82496,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__82730 = (i__82495 + (1));
i__82495 = G__82730;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82496),loom$graph$iter__82493(cljs.core.chunk_rest(s__82494__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82496),null);
}
} else {
var n2 = cljs.core.first(s__82494__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__82493(cljs.core.rest(s__82494__$2)));
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
var iter__4652__auto__ = (function loom$graph$iter__82497(s__82498){
return (new cljs.core.LazySeq(null,(function (){
var s__82498__$1 = s__82498;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__82498__$1);
if(temp__5753__auto__){
var s__82498__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__82498__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__82498__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__82500 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__82499 = (0);
while(true){
if((i__82499 < size__4651__auto__)){
var n2 = cljs.core._nth(c__4650__auto__,i__82499);
cljs.core.chunk_append(b__82500,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null));

var G__82731 = (i__82499 + (1));
i__82499 = G__82731;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82500),loom$graph$iter__82497(cljs.core.chunk_rest(s__82498__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82500),null);
}
} else {
var n2 = cljs.core.first(s__82498__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null),loom$graph$iter__82497(cljs.core.rest(s__82498__$2)));
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
var iter__4652__auto__ = (function loom$graph$iter__82501(s__82502){
return (new cljs.core.LazySeq(null,(function (){
var s__82502__$1 = s__82502;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__82502__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var n = cljs.core.first(xs__6308__auto__);
var iterys__4648__auto__ = ((function (s__82502__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function loom$graph$iter__82501_$_iter__82503(s__82504){
return (new cljs.core.LazySeq(null,((function (s__82502__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function (){
var s__82504__$1 = s__82504;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__82504__$1);
if(temp__5753__auto____$1){
var s__82504__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__82504__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__82504__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__82506 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__82505 = (0);
while(true){
if((i__82505 < size__4651__auto__)){
var nbr = cljs.core._nth(c__4650__auto__,i__82505);
cljs.core.chunk_append(b__82506,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__82732 = (i__82505 + (1));
i__82505 = G__82732;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82506),loom$graph$iter__82501_$_iter__82503(cljs.core.chunk_rest(s__82504__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82506),null);
}
} else {
var nbr = cljs.core.first(s__82504__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__82501_$_iter__82503(cljs.core.rest(s__82504__$2)));
}
} else {
return null;
}
break;
}
});})(s__82502__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1))
,null,null));
});})(s__82502__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,n)));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,loom$graph$iter__82501(cljs.core.rest(s__82502__$1)));
} else {
var G__82733 = cljs.core.rest(s__82502__$1);
s__82502__$1 = G__82733;
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
var iter__4652__auto__ = (function loom$graph$iter__82507(s__82508){
return (new cljs.core.LazySeq(null,(function (){
var s__82508__$1 = s__82508;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__82508__$1);
if(temp__5753__auto__){
var s__82508__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__82508__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__82508__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__82510 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__82509 = (0);
while(true){
if((i__82509 < size__4651__auto__)){
var n2 = cljs.core._nth(c__4650__auto__,i__82509);
cljs.core.chunk_append(b__82510,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__82734 = (i__82509 + (1));
i__82509 = G__82734;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82510),loom$graph$iter__82507(cljs.core.chunk_rest(s__82508__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82510),null);
}
} else {
var n2 = cljs.core.first(s__82508__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__82507(cljs.core.rest(s__82508__$2)));
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
var iter__4652__auto__ = (function loom$graph$iter__82511(s__82512){
return (new cljs.core.LazySeq(null,(function (){
var s__82512__$1 = s__82512;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__82512__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var n = cljs.core.first(xs__6308__auto__);
var iterys__4648__auto__ = ((function (s__82512__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function loom$graph$iter__82511_$_iter__82513(s__82514){
return (new cljs.core.LazySeq(null,((function (s__82512__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1){
return (function (){
var s__82514__$1 = s__82514;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__82514__$1);
if(temp__5753__auto____$1){
var s__82514__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__82514__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__82514__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__82516 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__82515 = (0);
while(true){
if((i__82515 < size__4651__auto__)){
var nbr = cljs.core._nth(c__4650__auto__,i__82515);
cljs.core.chunk_append(b__82516,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__82735 = (i__82515 + (1));
i__82515 = G__82735;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82516),loom$graph$iter__82511_$_iter__82513(cljs.core.chunk_rest(s__82514__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82516),null);
}
} else {
var nbr = cljs.core.first(s__82514__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__82511_$_iter__82513(cljs.core.rest(s__82514__$2)));
}
} else {
return null;
}
break;
}
});})(s__82512__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1))
,null,null));
});})(s__82512__$1,n,xs__6308__auto__,temp__5753__auto__,g__$1))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,n)));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,loom$graph$iter__82511(cljs.core.rest(s__82512__$1)));
} else {
var G__82736 = cljs.core.rest(s__82512__$1);
s__82512__$1 = G__82736;
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
var iter__4652__auto__ = (function loom$graph$iter__82517(s__82518){
return (new cljs.core.LazySeq(null,(function (){
var s__82518__$1 = s__82518;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__82518__$1);
if(temp__5753__auto__){
var s__82518__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__82518__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__82518__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__82520 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__82519 = (0);
while(true){
if((i__82519 < size__4651__auto__)){
var n2 = cljs.core._nth(c__4650__auto__,i__82519);
cljs.core.chunk_append(b__82520,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__82737 = (i__82519 + (1));
i__82519 = G__82737;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82520),loom$graph$iter__82517(cljs.core.chunk_rest(s__82518__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82520),null);
}
} else {
var n2 = cljs.core.first(s__82518__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__82517(cljs.core.rest(s__82518__$2)));
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
var iter__4652__auto__ = (function loom$graph$iter__82521(s__82522){
return (new cljs.core.LazySeq(null,(function (){
var s__82522__$1 = s__82522;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__82522__$1);
if(temp__5753__auto__){
var s__82522__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__82522__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__82522__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__82524 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__82523 = (0);
while(true){
if((i__82523 < size__4651__auto__)){
var n2 = cljs.core._nth(c__4650__auto__,i__82523);
cljs.core.chunk_append(b__82524,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null));

var G__82738 = (i__82523 + (1));
i__82523 = G__82738;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82524),loom$graph$iter__82521(cljs.core.chunk_rest(s__82522__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82524),null);
}
} else {
var n2 = cljs.core.first(s__82522__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null),loom$graph$iter__82521(cljs.core.rest(s__82522__$2)));
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
(loom.graph.add_path.cljs$lang$applyTo = (function (seq82525){
var G__82526 = cljs.core.first(seq82525);
var seq82525__$1 = cljs.core.next(seq82525);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__82526,seq82525__$1);
}));

/**
 * Adds a cycle of edges connecting the given nodes in order
 */
loom.graph.add_cycle = (function loom$graph$add_cycle(var_args){
var args__4870__auto__ = [];
var len__4864__auto___82742 = arguments.length;
var i__4865__auto___82743 = (0);
while(true){
if((i__4865__auto___82743 < len__4864__auto___82742)){
args__4870__auto__.push((arguments[i__4865__auto___82743]));

var G__82744 = (i__4865__auto___82743 + (1));
i__4865__auto___82743 = G__82744;
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
(loom.graph.add_cycle.cljs$lang$applyTo = (function (seq82527){
var G__82528 = cljs.core.first(seq82527);
var seq82527__$1 = cljs.core.next(seq82527);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__82528,seq82527__$1);
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
var len__4864__auto___82745 = arguments.length;
var i__4865__auto___82746 = (0);
while(true){
if((i__4865__auto___82746 < len__4864__auto___82745)){
args__4870__auto__.push((arguments[i__4865__auto___82746]));

var G__82747 = (i__4865__auto___82746 + (1));
i__4865__auto___82746 = G__82747;
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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(loom.graph.add_edges,loom.graph.add_nodes_STAR_(g__$1,loom.graph.nodes(init)),(function (){var iter__4652__auto__ = (function loom$graph$build_$_iter__82569(s__82570){
return (new cljs.core.LazySeq(null,(function (){
var s__82570__$1 = s__82570;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__82570__$1);
if(temp__5753__auto__){
var s__82570__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__82570__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__82570__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__82572 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__82571 = (0);
while(true){
if((i__82571 < size__4651__auto__)){
var vec__82573 = cljs.core._nth(c__4650__auto__,i__82571);
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82573,(0),null);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82573,(1),null);
cljs.core.chunk_append(b__82572,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2,loom.graph.weight.cljs$core$IFn$_invoke$arity$3(init,n1,n2)], null));

var G__82748 = (i__82571 + (1));
i__82571 = G__82748;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82572),loom$graph$build_$_iter__82569(cljs.core.chunk_rest(s__82570__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82572),null);
}
} else {
var vec__82576 = cljs.core.first(s__82570__$2);
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82576,(0),null);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82576,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2,loom.graph.weight.cljs$core$IFn$_invoke$arity$3(init,n1,n2)], null),loom$graph$build_$_iter__82569(cljs.core.rest(s__82570__$2)));
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
var es = ((cljs.core.map_QMARK_(cljs.core.val(cljs.core.first(init))))?(function (){var iter__4652__auto__ = (function loom$graph$build_$_iter__82579(s__82580){
return (new cljs.core.LazySeq(null,(function (){
var s__82580__$1 = s__82580;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__82580__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var vec__82585 = cljs.core.first(xs__6308__auto__);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82585,(0),null);
var nbrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82585,(1),null);
var iterys__4648__auto__ = ((function (s__82580__$1,vec__82585,n,nbrs,xs__6308__auto__,temp__5753__auto__){
return (function loom$graph$build_$_iter__82579_$_iter__82581(s__82582){
return (new cljs.core.LazySeq(null,((function (s__82580__$1,vec__82585,n,nbrs,xs__6308__auto__,temp__5753__auto__){
return (function (){
var s__82582__$1 = s__82582;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__82582__$1);
if(temp__5753__auto____$1){
var s__82582__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__82582__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__82582__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__82584 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__82583 = (0);
while(true){
if((i__82583 < size__4651__auto__)){
var vec__82588 = cljs.core._nth(c__4650__auto__,i__82583);
var nbr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82588,(0),null);
var wt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82588,(1),null);
cljs.core.chunk_append(b__82584,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr,wt], null));

var G__82749 = (i__82583 + (1));
i__82583 = G__82749;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82584),loom$graph$build_$_iter__82579_$_iter__82581(cljs.core.chunk_rest(s__82582__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82584),null);
}
} else {
var vec__82591 = cljs.core.first(s__82582__$2);
var nbr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82591,(0),null);
var wt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82591,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr,wt], null),loom$graph$build_$_iter__82579_$_iter__82581(cljs.core.rest(s__82582__$2)));
}
} else {
return null;
}
break;
}
});})(s__82580__$1,vec__82585,n,nbrs,xs__6308__auto__,temp__5753__auto__))
,null,null));
});})(s__82580__$1,vec__82585,n,nbrs,xs__6308__auto__,temp__5753__auto__))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(nbrs));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,loom$graph$build_$_iter__82579(cljs.core.rest(s__82580__$1)));
} else {
var G__82750 = cljs.core.rest(s__82580__$1);
s__82580__$1 = G__82750;
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
})():(function (){var iter__4652__auto__ = (function loom$graph$build_$_iter__82594(s__82595){
return (new cljs.core.LazySeq(null,(function (){
var s__82595__$1 = s__82595;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__82595__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var vec__82600 = cljs.core.first(xs__6308__auto__);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82600,(0),null);
var nbrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82600,(1),null);
var iterys__4648__auto__ = ((function (s__82595__$1,vec__82600,n,nbrs,xs__6308__auto__,temp__5753__auto__){
return (function loom$graph$build_$_iter__82594_$_iter__82596(s__82597){
return (new cljs.core.LazySeq(null,((function (s__82595__$1,vec__82600,n,nbrs,xs__6308__auto__,temp__5753__auto__){
return (function (){
var s__82597__$1 = s__82597;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__82597__$1);
if(temp__5753__auto____$1){
var s__82597__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__82597__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__82597__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__82599 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__82598 = (0);
while(true){
if((i__82598 < size__4651__auto__)){
var nbr = cljs.core._nth(c__4650__auto__,i__82598);
cljs.core.chunk_append(b__82599,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__82751 = (i__82598 + (1));
i__82598 = G__82751;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82599),loom$graph$build_$_iter__82594_$_iter__82596(cljs.core.chunk_rest(s__82597__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82599),null);
}
} else {
var nbr = cljs.core.first(s__82597__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$build_$_iter__82594_$_iter__82596(cljs.core.rest(s__82597__$2)));
}
} else {
return null;
}
break;
}
});})(s__82595__$1,vec__82600,n,nbrs,xs__6308__auto__,temp__5753__auto__))
,null,null));
});})(s__82595__$1,vec__82600,n,nbrs,xs__6308__auto__,temp__5753__auto__))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(nbrs));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,loom$graph$build_$_iter__82594(cljs.core.rest(s__82595__$1)));
} else {
var G__82752 = cljs.core.rest(s__82595__$1);
s__82595__$1 = G__82752;
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
(loom.graph.build_graph.cljs$lang$applyTo = (function (seq82533){
var G__82534 = cljs.core.first(seq82533);
var seq82533__$1 = cljs.core.next(seq82533);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__82534,seq82533__$1);
}));

/**
 * Creates an unweighted, undirected graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.graph = (function loom$graph$graph(var_args){
var args__4870__auto__ = [];
var len__4864__auto___82753 = arguments.length;
var i__4865__auto___82754 = (0);
while(true){
if((i__4865__auto___82754 < len__4864__auto___82753)){
args__4870__auto__.push((arguments[i__4865__auto___82754]));

var G__82755 = (i__4865__auto___82754 + (1));
i__4865__auto___82754 = G__82755;
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
(loom.graph.graph.cljs$lang$applyTo = (function (seq82603){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq82603));
}));

/**
 * Creates an unweighted, directed graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.digraph = (function loom$graph$digraph(var_args){
var args__4870__auto__ = [];
var len__4864__auto___82756 = arguments.length;
var i__4865__auto___82757 = (0);
while(true){
if((i__4865__auto___82757 < len__4864__auto___82756)){
args__4870__auto__.push((arguments[i__4865__auto___82757]));

var G__82758 = (i__4865__auto___82757 + (1));
i__4865__auto___82757 = G__82758;
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
(loom.graph.digraph.cljs$lang$applyTo = (function (seq82604){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq82604));
}));

/**
 * Creates an weighted, undirected graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.weighted_graph = (function loom$graph$weighted_graph(var_args){
var args__4870__auto__ = [];
var len__4864__auto___82759 = arguments.length;
var i__4865__auto___82760 = (0);
while(true){
if((i__4865__auto___82760 < len__4864__auto___82759)){
args__4870__auto__.push((arguments[i__4865__auto___82760]));

var G__82761 = (i__4865__auto___82760 + (1));
i__4865__auto___82760 = G__82761;
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
(loom.graph.weighted_graph.cljs$lang$applyTo = (function (seq82605){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq82605));
}));

/**
 * Creates an weighted, directed graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.weighted_digraph = (function loom$graph$weighted_digraph(var_args){
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
return loom.graph.weighted_digraph.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(loom.graph.weighted_digraph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(loom.graph.build_graph,(new loom.graph.BasicEditableWeightedDigraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
}));

(loom.graph.weighted_digraph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(loom.graph.weighted_digraph.cljs$lang$applyTo = (function (seq82606){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq82606));
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
return loom.graph.fly_graph.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(loom.graph.fly_graph.cljs$core$IFn$_invoke$arity$variadic = (function (p__82608){
var map__82609 = p__82608;
var map__82609__$1 = cljs.core.__destructure_map(map__82609);
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82609__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82609__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var successors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82609__$1,new cljs.core.Keyword(null,"successors","successors",-1239296414));
var predecessors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82609__$1,new cljs.core.Keyword(null,"predecessors","predecessors",229913357));
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82609__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82609__$1,new cljs.core.Keyword(null,"start","start",-355208981));
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
(loom.graph.fly_graph.cljs$lang$applyTo = (function (seq82607){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq82607));
}));


//# sourceMappingURL=loom.graph.js.map
