goog.provide('ui_component.atom.diagram.diagram.dagre_support');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"ui-component.atom.diagram.diagram.dagre-support",null,7,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ui-component.atom.diagram.diagram.dagre-support"], null);
}),null)),null,-1109491245,null);
/**
 * copy the nodes and edges from Look to dagre, so we can use dagre layout function to put them
 *   onto the display without drawing over each other
 *   
 */
ui_component.atom.diagram.diagram.dagre_support.dagre_graph = (function ui_component$atom$diagram$diagram$dagre_support$dagre_graph(var_args){
var G__59050 = arguments.length;
switch (G__59050) {
case 2:
return ui_component.atom.diagram.diagram.dagre_support.dagre_graph.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ui_component.atom.diagram.diagram.dagre_support.dagre_graph.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(ui_component.atom.diagram.diagram.dagre_support.dagre_graph.cljs$core$IFn$_invoke$arity$2 = (function (nodes,edges){
var dagreGraph = (new shadow.js.shim.module$graphlib.Graph());
var nodeWidth = (172);
var nodeHeight = (36);
dagreGraph.setDefaultEdgeLabel(cljs.core.clj__GT_js(cljs.core.PersistentArrayMap.EMPTY));

dagreGraph.setGraph(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rankdir","rankdir",-2029540135),"tb"], null)));

cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (element){
return dagreGraph.setNode(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(element),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),nodeWidth,new cljs.core.Keyword(null,"height","height",1025178622),nodeHeight], null)));
}),nodes));

cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (element){
return dagreGraph.setEdge(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(element));
}),edges));

return dagreGraph;
}));

(ui_component.atom.diagram.diagram.dagre_support.dagre_graph.cljs$core$IFn$_invoke$arity$1 = (function (graph){
return ui_component.atom.diagram.diagram.dagre_support.dagre_graph.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(graph),new cljs.core.Keyword(null,"edges","edges",-694791395).cljs$core$IFn$_invoke$arity$1(graph));
}));

(ui_component.atom.diagram.diagram.dagre_support.dagre_graph.cljs$lang$maxFixedArity = 2);

/**
 * use dagre (see https://reactflow.dev/examples/layouting/) to perform an auto-layout of the nodes,
 *   which are then connected by the edges.
 *   
 */
ui_component.atom.diagram.diagram.dagre_support.build_layout = (function ui_component$atom$diagram$diagram$dagre_support$build_layout(var_args){
var G__59052 = arguments.length;
switch (G__59052) {
case 2:
return ui_component.atom.diagram.diagram.dagre_support.build_layout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ui_component.atom.diagram.diagram.dagre_support.build_layout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(ui_component.atom.diagram.diagram.dagre_support.build_layout.cljs$core$IFn$_invoke$arity$2 = (function (nodes,edges){
var dagreGraph = ui_component.atom.diagram.diagram.dagre_support.dagre_graph.cljs$core$IFn$_invoke$arity$2(nodes,edges);
var nodeWidth = (172);
var nodeHeight = (36);
shadow.js.shim.module$dagre.layout(dagreGraph);

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (element){
var dagreNode = dagreGraph.node(cljs.core.clj__GT_js(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(element)));
var x = (dagreNode.x - (nodeWidth / (2)));
var y = (dagreNode.y - (nodeHeight / (2)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(element,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"targetPosition","targetPosition",-1658945768),"top",new cljs.core.Keyword(null,"sourcePosition","sourcePosition",458626458),"bottom"], 0));
}),nodes)),new cljs.core.Keyword(null,"edges","edges",-694791395),edges], null);
return ret;
}));

(ui_component.atom.diagram.diagram.dagre_support.build_layout.cljs$core$IFn$_invoke$arity$1 = (function (graph){
return ui_component.atom.diagram.diagram.dagre_support.build_layout.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(graph),new cljs.core.Keyword(null,"edges","edges",-694791395).cljs$core$IFn$_invoke$arity$1(graph));
}));

(ui_component.atom.diagram.diagram.dagre_support.build_layout.cljs$lang$maxFixedArity = 2);

ui_component.atom.diagram.diagram.dagre_support.dump_dagre = (function ui_component$atom$diagram$diagram$dagre_support$dump_dagre(dagreGraph){
cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["node",cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(n)], 0));
}),dagreGraph.nodes()));

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["edge",cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(n)], 0));
}),dagreGraph.edges()));
});

//# sourceMappingURL=ui_component.atom.diagram.diagram.dagre_support.js.map
