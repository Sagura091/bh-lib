goog.provide('bh_ui.molecule.composite.util.ui');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"bh-ui.molecule.composite.util.ui",null,11,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bh-ui.molecule.composite.util.ui"], null);
}),null)),null,-1443862212,null);
bh_ui.molecule.composite.util.ui.handle_style = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"8px",new cljs.core.Keyword(null,"height","height",1025178622),"8px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"50%"], null);
bh_ui.molecule.composite.util.ui.default_node_style = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"padding","padding",1660304693),"3px",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"180px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"5px",new cljs.core.Keyword(null,"margin","margin",-995903681),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"black","black",1294279647)], null);
bh_ui.molecule.composite.util.ui.node_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("ui","component","ui/component",1555933050),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword("source","remote","source/remote",-1682682981),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"orange","orange",73816386),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"black","black",1294279647)], null),new cljs.core.Keyword("source","local","source/local",-582398745),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword("source","fn","source/fn",1803568239),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"pink","pink",393815864),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"black","black",1294279647)], null)], null);
/**
 * 
 * 
 *   NOTE: the inputs (values in the hash-map) are STRINGS!
 *   
 */
bh_ui.molecule.composite.util.ui.input_output_handles = (function bh_ui$molecule$composite$util$ui$input_output_handles(label,inputs,outputs){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,p__59100){
var vec__59101 = p__59100;
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59101,(0),null);
var ports = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59101,(1),null);
var vec__59104 = ports;
var source_port = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59104,(0),null);
var target_port = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59104,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_flow_renderer.Handle,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),target_port,new cljs.core.Keyword(null,"type","type",1174270348),"target",new cljs.core.Keyword(null,"position","position",-2011731912),"top",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bh_ui.molecule.composite.util.ui.handle_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"left","left",-399115937),((20) + ((10) * idx))], null)], 0))], null)], null);
}),inputs))),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,p__59107){
var vec__59108 = p__59107;
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59108,(0),null);
var ports = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59108,(1),null);
var vec__59111 = ports;
var source_port = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59111,(0),null);
var target_port = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59111,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_flow_renderer.Handle,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),source_port,new cljs.core.Keyword(null,"type","type",1174270348),"source",new cljs.core.Keyword(null,"position","position",-2011731912),"bottom",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bh_ui.molecule.composite.util.ui.handle_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"left","left",-399115937),((20) + ((10) * idx))], null)], 0))], null)], null);
}),outputs)))], null);
});
bh_ui.molecule.composite.util.ui.open_details = (function bh_ui$molecule$composite$util$ui$open_details(open_details_QMARK_,node){
return cljs.core.reset_BANG_(open_details_QMARK_,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(node));
});
/**
 * build a custom node for the flow diagram, this time for :ui/component, so
 *   green, since this is a 'view', and one Handle for each input (along the top)
 *   and output (along the bottom)
 *   
 */
bh_ui.molecule.composite.util.ui.custom_node = (function bh_ui$molecule$composite$util$ui$custom_node(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59152 = arguments.length;
var i__4865__auto___59153 = (0);
while(true){
if((i__4865__auto___59153 < len__4864__auto___59152)){
args__4870__auto__.push((arguments[i__4865__auto___59153]));

var G__59154 = (i__4865__auto___59153 + (1));
i__4865__auto___59153 = G__59154;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return bh_ui.molecule.composite.util.ui.custom_node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(bh_ui.molecule.composite.util.ui.custom_node.cljs$core$IFn$_invoke$arity$variadic = (function (node_type,open_details_QMARK_,d,extras_QMARK_){
var data = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(d);
var label = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data","label"], null));
var inputs = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data","inputs"], null));
var outputs = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data","outputs"], null));
var style = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bh_ui.molecule.composite.util.ui.default_node_style,(node_type.cljs$core$IFn$_invoke$arity$1 ? node_type.cljs$core$IFn$_invoke$arity$1(bh_ui.molecule.composite.util.ui.node_style) : node_type.call(null,bh_ui.molecule.composite.util.ui.node_style))], 0));
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return bh_ui.molecule.composite.util.ui.open_details(open_details_QMARK_,d);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),new cljs.core.Keyword(null,"center","center",-748944368)], null),style], 0))], null),label], null),bh_ui.molecule.composite.util.ui.input_output_handles(label,inputs,outputs)], null));
}));

(bh_ui.molecule.composite.util.ui.custom_node.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(bh_ui.molecule.composite.util.ui.custom_node.cljs$lang$applyTo = (function (seq59114){
var G__59115 = cljs.core.first(seq59114);
var seq59114__$1 = cljs.core.next(seq59114);
var G__59116 = cljs.core.first(seq59114__$1);
var seq59114__$2 = cljs.core.next(seq59114__$1);
var G__59117 = cljs.core.first(seq59114__$2);
var seq59114__$3 = cljs.core.next(seq59114__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59115,G__59116,G__59117,seq59114__$3);
}));

/**
 * convert the nodes, currently organized by Loom (https://github.com/aysylu/loom), into
 *   the format needed by react-flow (https://reactflow.dev)
 *   
 */
bh_ui.molecule.composite.util.ui.create_flow_node = (function bh_ui$molecule$composite$util$ui$create_flow_node(configuration,node_id){
var node_type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(configuration,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),node_id,new cljs.core.Keyword(null,"type","type",1174270348)], null));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_id),new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_type),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_id),new cljs.core.Keyword(null,"node-type","node-type",129492462),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_type),new cljs.core.Keyword(null,"inputs","inputs",865803858),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__59118){
var vec__59119 = p__59118;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59119,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59119,(1),null);
var vec__59122 = v;
var sp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59122,(0),null);
var tp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59122,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sp),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tp)], null)]);
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(configuration,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"denorm","denorm",1624103242),node_id,new cljs.core.Keyword(null,"inputs","inputs",865803858)], null)))),new cljs.core.Keyword(null,"outputs","outputs",-1896513034),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__59125){
var vec__59126 = p__59125;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59126,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59126,(1),null);
var vec__59129 = v;
var sp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59129,(0),null);
var tp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59129,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sp),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tp)], null)]);
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(configuration,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"denorm","denorm",1624103242),node_id,new cljs.core.Keyword(null,"outputs","outputs",-1896513034)], null))))], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)], null);
});
/**
 * convert the edges, currently organized by Loom (https://github.com/aysylu/loom), into
 *   the format needed by react-flow (https://reactflow.dev)
 *   
 */
bh_ui.molecule.composite.util.ui.create_flow_edge = (function bh_ui$molecule$composite$util$ui$create_flow_edge(configuration,idx,p__59132){
var vec__59133 = p__59132;
var node_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59133,(0),null);
var target_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59133,(1),null);
var edge = vec__59133;
var vec__59136 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(configuration,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"denorm","denorm",1624103242),node_id,new cljs.core.Keyword(null,"outputs","outputs",-1896513034),target_id], null));
var source_handle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59136,(0),null);
var target_handle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59136,(1),null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"targetHandle","targetHandle",-2045149050),new cljs.core.Keyword(null,"animated","animated",129318795),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"arrowHeadType","arrowHeadType",-286981391),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"sourceHandle","sourceHandle",718091129),new cljs.core.Keyword(null,"target","target",253001721)],[cljs.core.str.cljs$core$IFn$_invoke$arity$1(target_handle),false,cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_id),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"strokeWidth","strokeWidth",-2130848332),(1),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"black","black",1294279647)], null),"arrowclosed",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(source_handle),"->",cljs.core.str.cljs$core$IFn$_invoke$arity$1(target_handle)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(source_handle),cljs.core.str.cljs$core$IFn$_invoke$arity$1(target_id)]);
});
/**
 * pull out just the relevant information from the configuration, so it can be passed into Loom and
 *   the interconnected digraph can be built
 *   
 */
bh_ui.molecule.composite.util.ui.compute_edges = (function bh_ui$molecule$composite$util$ui$compute_edges(configuration){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__59139){
var vec__59140 = p__59139;
var entity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59140,(0),null);
var links = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59140,(1),null);
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__59143){
var vec__59144 = p__59143;
var source_port = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59144,(0),null);
var targets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59144,(1),null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__59147){
var vec__59148 = p__59147;
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59148,(0),null);
var target_port = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59148,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity,target], null);
}),targets);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([links], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(configuration)], 0)));
});
/**
 * take the Loom graph and turn it into what react-flow needs to draw it onto the display
 *   
 */
bh_ui.molecule.composite.util.ui.make_flow = (function bh_ui$molecule$composite$util$ui$make_flow(configuration){
var flow = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59151_SHARP_){
return bh_ui.molecule.composite.util.ui.create_flow_node(configuration,p1__59151_SHARP_);
}),new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(configuration)),new cljs.core.Keyword(null,"edges","edges",-694791395),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,node){
return bh_ui.molecule.composite.util.ui.create_flow_edge(configuration,idx,node);
}),new cljs.core.Keyword(null,"edges","edges",-694791395).cljs$core$IFn$_invoke$arity$1(configuration))], null);
return bh_ui.atom.diagram.diagram.dagre_support.build_layout.cljs$core$IFn$_invoke$arity$1(flow);
});
bh_ui.molecule.composite.util.ui.prep_environment = (function bh_ui$molecule$composite$util$ui$prep_environment(configuration,component_id,registry){
bh_ui.molecule.composite.util.signals.process_components(configuration,new cljs.core.Keyword("source","remote","source/remote",-1682682981),registry,component_id);

bh_ui.utils.locals.create_container_sub(component_id);

bh_ui.utils.locals.create_container_local_sub(component_id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blackboard","blackboard",-1864070822)], null),cljs.core.PersistentArrayMap.EMPTY);

bh_ui.molecule.composite.util.signals.process_components(configuration,new cljs.core.Keyword("source","local","source/local",-582398745),registry,component_id);

return bh_ui.molecule.composite.util.signals.process_components(configuration,new cljs.core.Keyword("source","fn","source/fn",1803568239),registry,component_id);
});

//# sourceMappingURL=bh_ui.molecule.composite.util.ui.js.map
