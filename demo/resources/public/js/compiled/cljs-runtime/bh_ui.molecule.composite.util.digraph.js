goog.provide('bh_ui.molecule.composite.util.digraph');
bh_ui.molecule.composite.util.digraph.expand_components = (function bh_ui$molecule$composite$util$digraph$expand_components(data,registry){
var components = new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(data);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"components","components",-1073188942),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__60989){
var vec__60990 = p__60989;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60990,(0),null);
var meta_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60990,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([id,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(meta_data,new cljs.core.Keyword(null,"ports","ports",-1014790862),(function (){var pred__60993 = cljs.core._EQ_;
var expr__60994 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_((pred__60993.cljs$core$IFn$_invoke$arity$2 ? pred__60993.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("ui","component","ui/component",1555933050),expr__60994) : pred__60993.call(null,new cljs.core.Keyword("ui","component","ui/component",1555933050),expr__60994)))){
return new cljs.core.Keyword(null,"ports","ports",-1014790862).cljs$core$IFn$_invoke$arity$1((function (){var G__60998 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1((id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(components) : id.call(null,components)));
return (registry.cljs$core$IFn$_invoke$arity$1 ? registry.cljs$core$IFn$_invoke$arity$1(G__60998) : registry.call(null,G__60998));
})());
} else {
if(cljs.core.truth_((pred__60993.cljs$core$IFn$_invoke$arity$2 ? pred__60993.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("source","remote","source/remote",-1682682981),expr__60994) : pred__60993.call(null,new cljs.core.Keyword("source","remote","source/remote",-1682682981),expr__60994)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("port","pub-sub","port/pub-sub",676623309),new cljs.core.Keyword(null,"data","data",-232669377)], null);
} else {
if(cljs.core.truth_((pred__60993.cljs$core$IFn$_invoke$arity$2 ? pred__60993.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("source","local","source/local",-582398745),expr__60994) : pred__60993.call(null,new cljs.core.Keyword("source","local","source/local",-582398745),expr__60994)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("port","pub-sub","port/pub-sub",676623309),new cljs.core.Keyword(null,"data","data",-232669377)], null);
} else {
if(cljs.core.truth_((pred__60993.cljs$core$IFn$_invoke$arity$2 ? pred__60993.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("source","fn","source/fn",1803568239),expr__60994) : pred__60993.call(null,new cljs.core.Keyword("source","fn","source/fn",1803568239),expr__60994)))){
return new cljs.core.Keyword(null,"ports","ports",-1014790862).cljs$core$IFn$_invoke$arity$1(meta_data);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__60994)].join('')));
}
}
}
}
})())]);
}),new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(data)));
});
bh_ui.molecule.composite.util.digraph.get_predecessor_name = (function bh_ui$molecule$composite$util$digraph$get_predecessor_name(links,graph,source,target){
return cljs.core.first(cljs.core.keys(cljs.core.first(cljs.core.vals(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__61002){
var vec__61003 = p__61002;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61003,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61003,(1),null);
return ((cljs.core.contains_QMARK_(loom.graph.predecessors_STAR_(graph,source),s)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,target)));
}),links)))));
});
bh_ui.molecule.composite.util.digraph.get_successor_name = (function bh_ui$molecule$composite$util$digraph$get_successor_name(links,graph,source,target){
return cljs.core.first(cljs.core.vals(cljs.core.first(cljs.core.vals(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__61010){
var vec__61012 = p__61010;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61012,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61012,(1),null);
return cljs.core.contains_QMARK_(loom.graph.successors_STAR_(graph,source),target);
}),(source.cljs$core$IFn$_invoke$arity$1 ? source.cljs$core$IFn$_invoke$arity$1(links) : source.call(null,links)))))));
});
/**
 * get all the inputs to the given node (these are 'predecessors')
 * 
 *   we grab the node's predecessors, and format the data correctly:
 * 
 *   {<source> [<node's-port> <source's-port>]
 * <source> [<node's-port> <source's-port>]}
 * 
 * 
 *   WORK-IN-PROGRESS
 *   
 */
bh_ui.molecule.composite.util.digraph.get_inputs = (function bh_ui$molecule$composite$util$digraph$get_inputs(links,graph,node){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__61016){
var vec__61018 = p__61016;
var source_port = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61018,(0),null);
var targets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61018,(1),null);
var target_port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(targets,node);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [source_port,target_port], null)]);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(links,p)));
}),loom.graph.predecessors_STAR_(graph,node)));
});
bh_ui.molecule.composite.util.digraph.get_outputs = (function bh_ui$molecule$composite$util$digraph$get_outputs(links,node){

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__61026){
var vec__61029 = p__61026;
var node_port = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61029,(0),null);
var target_meta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61029,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__61035){
var vec__61036 = p__61035;
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61036,(0),null);
var target_port = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61036,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([target,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_port,target_port], null)]);
}),target_meta));
}),(node.cljs$core$IFn$_invoke$arity$1 ? node.cljs$core$IFn$_invoke$arity$1(links) : node.call(null,links))));
});
/**
 * denormalize the links between components by mixing in additional information bout the
 *   ports at both ends of the inter-connection:
 * 
 *   {<node> {:inputs  {<source> [<node's-port> <source's-port>]
 *                   <source> [<node's-port> <source's-port>]}
 *         :outputs {<target> [<node's-port> <target's-port>]
 *                   <target> [<node's-port> <target's-port>]}
 *         :params  {<source> [<node's-port> <source's-port>]
 *                   <source> [<node's-port> <source's-port>]
 *                   <target> [<node's-port> <target's-port>]
 *                   <target> [<node's-port> <target's-port>]}}
 * 
 *   WORK-IN-PROGRESS
 *   
 */
bh_ui.molecule.composite.util.digraph.denorm_components = (function bh_ui$molecule$composite$util$digraph$denorm_components(graph,links,nodes){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (node){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([node,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"inputs","inputs",865803858),bh_ui.molecule.composite.util.digraph.get_inputs(links,graph,node),new cljs.core.Keyword(null,"outputs","outputs",-1896513034),bh_ui.molecule.composite.util.digraph.get_outputs(links,node),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY], null)]);
}),nodes));
});

//# sourceMappingURL=bh_ui.molecule.composite.util.digraph.js.map
