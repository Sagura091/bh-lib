goog.provide('bh_ui.atom.diagram.editable_digraph');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"bh-ui.atom.diagram.editable-digraph",null,20,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bh-ui.atom.diagram.editable-digraph"], null);
}),null)),null,-2115219264,null);
bh_ui.atom.diagram.editable_digraph.sample_data = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),":ui/targets",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),":ui/targets",new cljs.core.Keyword(null,"inputs","inputs",865803858),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"outputs","outputs",-1896513034),cljs.core.PersistentVector.EMPTY], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(100)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),":topic/target-data",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),":topic/target-data",new cljs.core.Keyword(null,"inputs","inputs",865803858),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"outputs","outputs",-1896513034),cljs.core.PersistentVector.EMPTY], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),":topic/selected-targets",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),":topic/selected-targets",new cljs.core.Keyword(null,"inputs","inputs",865803858),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"outputs","outputs",-1896513034),cljs.core.PersistentVector.EMPTY], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(200)], null)], null)], null),new cljs.core.Keyword(null,"edges","edges",-694791395),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"target-data->targets",new cljs.core.Keyword(null,"source","source",-433931539),":topic/target-data",new cljs.core.Keyword(null,"target","target",253001721),":ui/targets",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"strokeWidth","strokeWidth",-2130848332),(2),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"orange","orange",73816386)], null),new cljs.core.Keyword(null,"markerEnd","markerEnd",-1727198190),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),shadow.js.shim.module$react_flow_renderer.MarkerType.Arrow], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"targets->selected-targets",new cljs.core.Keyword(null,"source","source",-433931539),":ui/targets",new cljs.core.Keyword(null,"target","target",253001721),":topic/selected-targets",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"strokeWidth","strokeWidth",-2130848332),(2),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"blue","blue",-622100620)], null),new cljs.core.Keyword(null,"markerEnd","markerEnd",-1727198190),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),shadow.js.shim.module$react_flow_renderer.MarkerType.ArrowClosed], null)], null)], null)], null);
bh_ui.atom.diagram.editable_digraph.sample_data_3 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"1 ",new cljs.core.Keyword(null,"type","type",1174270348),"input",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"input"], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"2 ",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"node 2 "], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"2a ",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"node 2a "], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"2b ",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"node 2b "], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"2c ",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"node 2c "], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"2d ",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"node 2d "], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"3 ",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"node 3 "], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"4 ",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"node 4 "], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"5 ",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"node 5 "], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"6 ",new cljs.core.Keyword(null,"type","type",1174270348),"output",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"output"], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"7 ",new cljs.core.Keyword(null,"type","type",1174270348),"output",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"output"], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)], null)], null),new cljs.core.Keyword(null,"edges","edges",-694791395),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"e12",new cljs.core.Keyword(null,"source","source",-433931539),"1 ",new cljs.core.Keyword(null,"target","target",253001721),"2 ",new cljs.core.Keyword(null,"type","type",1174270348),"smoothstep",new cljs.core.Keyword(null,"animated","animated",129318795),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"e13",new cljs.core.Keyword(null,"source","source",-433931539),"1 ",new cljs.core.Keyword(null,"target","target",253001721),"3 ",new cljs.core.Keyword(null,"type","type",1174270348),"smoothstep",new cljs.core.Keyword(null,"animated","animated",129318795),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"e22a",new cljs.core.Keyword(null,"source","source",-433931539),"2 ",new cljs.core.Keyword(null,"target","target",253001721),"2a ",new cljs.core.Keyword(null,"type","type",1174270348),"smoothstep",new cljs.core.Keyword(null,"animated","animated",129318795),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"e22b",new cljs.core.Keyword(null,"source","source",-433931539),"2 ",new cljs.core.Keyword(null,"target","target",253001721),"2b ",new cljs.core.Keyword(null,"type","type",1174270348),"smoothstep",new cljs.core.Keyword(null,"animated","animated",129318795),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"e22c",new cljs.core.Keyword(null,"source","source",-433931539),"2 ",new cljs.core.Keyword(null,"target","target",253001721),"2c ",new cljs.core.Keyword(null,"type","type",1174270348),"smoothstep",new cljs.core.Keyword(null,"animated","animated",129318795),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"e2c2d",new cljs.core.Keyword(null,"source","source",-433931539),"2c ",new cljs.core.Keyword(null,"target","target",253001721),"2d ",new cljs.core.Keyword(null,"type","type",1174270348),"smoothstep",new cljs.core.Keyword(null,"animated","animated",129318795),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"e45",new cljs.core.Keyword(null,"source","source",-433931539),"4 ",new cljs.core.Keyword(null,"target","target",253001721),"5 ",new cljs.core.Keyword(null,"type","type",1174270348),"smoothstep",new cljs.core.Keyword(null,"animated","animated",129318795),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"e56",new cljs.core.Keyword(null,"source","source",-433931539),"5 ",new cljs.core.Keyword(null,"target","target",253001721),"6 ",new cljs.core.Keyword(null,"type","type",1174270348),"smoothstep",new cljs.core.Keyword(null,"animated","animated",129318795),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"e57",new cljs.core.Keyword(null,"source","source",-433931539),"5 ",new cljs.core.Keyword(null,"target","target",253001721),"7 ",new cljs.core.Keyword(null,"type","type",1174270348),"smoothstep",new cljs.core.Keyword(null,"animated","animated",129318795),true], null)], null)], null);
bh_ui.atom.diagram.editable_digraph.source_code = cljs.core.PersistentVector.EMPTY;
bh_ui.atom.diagram.editable_digraph.handle_style = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"8px",new cljs.core.Keyword(null,"height","height",1025178622),"8px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"50%"], null);
bh_ui.atom.diagram.editable_digraph.default_node_style = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"padding","padding",1660304693),"3px",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"180px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"5px",new cljs.core.Keyword(null,"margin","margin",-995903681),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"black","black",1294279647)], null);
bh_ui.atom.diagram.editable_digraph.node_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("ui","component","ui/component",1555933050),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword("source","remote","source/remote",-1682682981),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"orange","orange",73816386),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"black","black",1294279647)], null),new cljs.core.Keyword("source","local","source/local",-582398745),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword("source","fn","source/fn",1803568239),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"pink","pink",393815864),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"black","black",1294279647)], null)], null);
bh_ui.atom.diagram.editable_digraph.source_panel = (function bh_ui$atom$diagram$editable_digraph$source_panel(){
return null;
});
/**
 * 
 *     NOTE: the inputs (values in the hash-map) are STRINGS!
 *     
 */
bh_ui.atom.diagram.editable_digraph.input_handles = (function bh_ui$atom$diagram$editable_digraph$input_handles(label,inputs,position){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,p__59159){
var vec__59160 = p__59159;
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59160,(0),null);
var ports = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59160,(1),null);
var vec__59163 = ports;
var source_port = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59163,(0),null);
var target_port = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59163,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_flow_renderer.Handle,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),target_port,new cljs.core.Keyword(null,"type","type",1174270348),"target",new cljs.core.Keyword(null,"position","position",-2011731912),position,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bh_ui.atom.diagram.editable_digraph.handle_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"left","left",-399115937),((20) + ((10) * idx))], null)], 0))], null)], null);
}),inputs)))], null);
});
/**
 * 
 *     NOTE: the inputs (values in the hash-map) are STRINGS!
 *     
 */
bh_ui.atom.diagram.editable_digraph.output_handles = (function bh_ui$atom$diagram$editable_digraph$output_handles(label,outputs,position){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,p__59166){
var vec__59167 = p__59166;
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59167,(0),null);
var ports = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59167,(1),null);
var vec__59170 = ports;
var source_port = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59170,(0),null);
var target_port = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59170,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_flow_renderer.Handle,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),source_port,new cljs.core.Keyword(null,"type","type",1174270348),"source",new cljs.core.Keyword(null,"position","position",-2011731912),position,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bh_ui.atom.diagram.editable_digraph.handle_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"right","right",-452581833),((20) + ((10) * idx))], null)], 0))], null)], null);
}),outputs)))], null);
});
bh_ui.atom.diagram.editable_digraph.apply_handles = (function bh_ui$atom$diagram$editable_digraph$apply_handles(label,inputs,outputs,input_position,output_position){
var i = cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p__59173){
var vec__59174 = p__59173;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59174,(0),null);
var vec__59177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59174,(1),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59177,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59177,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,s,d], null);
}),cljs.core.into.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY),inputs);
var o = cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p__59180){
var vec__59181 = p__59180;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59181,(0),null);
var vec__59184 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59181,(1),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59184,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59184,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,s,d], null);
}),cljs.core.into.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY),outputs);
var in_out = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(i,o);
var in_only = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(i,o),in_out);
var out_only = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(o,i),in_out);
bh_ui.atom.diagram.editable_digraph.input_handles(label,in_out,input_position);

bh_ui.atom.diagram.editable_digraph.input_handles(label,in_only,input_position);

return bh_ui.atom.diagram.editable_digraph.output_handles(label,out_only,output_position);
});
bh_ui.atom.diagram.editable_digraph.color_black = "#000000";
bh_ui.atom.diagram.editable_digraph.color_white = "#ffffff";
bh_ui.atom.diagram.editable_digraph.on_drag_start = (function bh_ui$atom$diagram$editable_digraph$on_drag_start(node_type,event){
event.dataTransfer.setData("editable-flow",node_type);

return (event.dataTransfer.effectAllowed = "move");
});
bh_ui.atom.diagram.editable_digraph.on_drag_over = (function bh_ui$atom$diagram$editable_digraph$on_drag_over(event){
event.preventDefault();

return (event.dataTransfer.dropEffect = "move");
});
bh_ui.atom.diagram.editable_digraph.on_drop = (function bh_ui$atom$diagram$editable_digraph$on_drop(component_id,reactFlowInstance,set_nodes_fn,wrapper,event){
event.preventDefault();

var node_type = event.dataTransfer.getData("editable-flow");
var x = event.clientX;
var y = event.clientY;
var reactFlowBounds = cljs.core.deref(wrapper).getBoundingClientRect();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(node_type,"undefined")){
var new_id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_type),"-new"].join('');
var position = (function (){var G__59191 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(x - reactFlowBounds.left),new cljs.core.Keyword(null,"y","y",-1757859776),(y - reactFlowBounds.top)], null));
var fexpr__59190 = cljs.core.deref(reactFlowInstance).project;
return (fexpr__59190.cljs$core$IFn$_invoke$arity$1 ? fexpr__59190.cljs$core$IFn$_invoke$arity$1(G__59191) : fexpr__59190.call(null,G__59191));
})();
var new_node = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new_id,new cljs.core.Keyword(null,"type","type",1174270348),node_type,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new_id,new cljs.core.Keyword(null,"inputs","inputs",865803858),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"outputs","outputs",-1896513034),cljs.core.PersistentVector.EMPTY], null),new cljs.core.Keyword(null,"position","position",-2011731912),position], null);
var G__59192 = (function (nds){
return nds.concat(cljs.core.clj__GT_js(new_node));
});
return (set_nodes_fn.cljs$core$IFn$_invoke$arity$1 ? set_nodes_fn.cljs$core$IFn$_invoke$arity$1(G__59192) : set_nodes_fn.call(null,G__59192));
} else {
return null;
}
});
bh_ui.atom.diagram.editable_digraph.make_draggable_node = (function bh_ui$atom$diagram$editable_digraph$make_draggable_node(p__59194){
var vec__59195 = p__59194;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59195,(0),null);
var map__59198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59195,(1),null);
var map__59198__$1 = cljs.core.__destructure_map(map__59198);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59198__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59198__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59198__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var text_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59198__$1,new cljs.core.Keyword(null,"text-color","text-color",1728708298));
var node = vec__59195;
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.draggable","div.draggable",-249226727),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),new cljs.core.Keyword(null,"height","height",1025178622)],[new cljs.core.Keyword(null,"center","center",-748944368),text_color,"150px",color,new cljs.core.Keyword(null,"grab","grab",-31757349),"2px",new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"flex","flex",-1425124628),"3px","5px","50px"]),new cljs.core.Keyword(null,"onDragStart","onDragStart",-2108300997),(function (p1__59193_SHARP_){
return bh_ui.atom.diagram.editable_digraph.on_drag_start(type,p1__59193_SHARP_);
}),new cljs.core.Keyword(null,"draggable","draggable",1676206163),true], null),label], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),label], null));
});
bh_ui.atom.diagram.editable_digraph.details_panel = (function bh_ui$atom$diagram$editable_digraph$details_panel(components,component_id,node){
var details = cljs.core.get.cljs$core$IFn$_invoke$arity$2(node,"data");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.molecule.composite.util.node_config_ui.make_config_panel,details], null);
});
bh_ui.atom.diagram.editable_digraph.tool_panel = (function bh_ui$atom$diagram$editable_digraph$tool_panel(open_details_QMARK_,components,component_id,tool_types){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#tool-panel","div#tool-panel",1621560191),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),"20%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"5px",new cljs.core.Keyword(null,"padding","padding",1660304693),"15px 10px",new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"5px 5px 5px #888888"], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"bh_ui/atom/diagram/editable_digraph.cljs",new cljs.core.Keyword(null,"line","line",212345235),217], null)),new cljs.core.Keyword(null,"gap","gap",80255254),"2px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"bh_ui/atom/diagram/editable_digraph.cljs",new cljs.core.Keyword(null,"line","line",212345235),219], null)),new cljs.core.Keyword(null,"gap","gap",80255254),"2px",new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(bh_ui.atom.diagram.editable_digraph.make_draggable_node,tool_types))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.line,new cljs.core.Keyword(null,"size","size",1098693007),"2px"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"20%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.molecule.composite.util.node_config_ui.make_config_panel,cljs.core.deref(open_details_QMARK_)], null)], null)], null)], null)], null);
});
bh_ui.atom.diagram.editable_digraph.flow_STAR_ = (function bh_ui$atom$diagram$editable_digraph$flow_STAR_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59219 = arguments.length;
var i__4865__auto___59220 = (0);
while(true){
if((i__4865__auto___59220 < len__4864__auto___59219)){
args__4870__auto__.push((arguments[i__4865__auto___59220]));

var G__59221 = (i__4865__auto___59220 + (1));
i__4865__auto___59220 = G__59221;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return bh_ui.atom.diagram.editable_digraph.flow_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(bh_ui.atom.diagram.editable_digraph.flow_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (p__59200){
var map__59201 = p__59200;
var map__59201__$1 = cljs.core.__destructure_map(map__59201);
var params = map__59201__$1;
var zoom_on_scroll = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59201__$1,new cljs.core.Keyword(null,"zoom-on-scroll","zoom-on-scroll",-1018757347));
var edges = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59201__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var on_change_nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59201__$1,new cljs.core.Keyword(null,"on-change-nodes","on-change-nodes",1794690531));
var flowInstance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59201__$1,new cljs.core.Keyword(null,"flowInstance","flowInstance",-856699256));
var edge_types = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59201__$1,new cljs.core.Keyword(null,"edge-types","edge-types",1188284328));
var on_change_edges = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59201__$1,new cljs.core.Keyword(null,"on-change-edges","on-change-edges",-1237562934));
var on_drop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59201__$1,new cljs.core.Keyword(null,"on-drop","on-drop",1867868491));
var node_types = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59201__$1,new cljs.core.Keyword(null,"node-types","node-types",1539943342));
var connectFn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59201__$1,new cljs.core.Keyword(null,"connectFn","connectFn",-1166539665));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59201__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var minimap_styles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59201__$1,new cljs.core.Keyword(null,"minimap-styles","minimap-styles",2078942134));
var component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59201__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var on_drag_over = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59201__$1,new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408));
var preventScrolling = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59201__$1,new cljs.core.Keyword(null,"preventScrolling","preventScrolling",1085718552));
var params__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.merge,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"onInit","onInit",-1084118839),new cljs.core.Keyword(null,"attributionPosition","attributionPosition",1921870),new cljs.core.Keyword(null,"onConnect","onConnect",1368560850),new cljs.core.Keyword(null,"zoomOnScroll","zoomOnScroll",-319961486),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"onDragOver","onDragOver",2061423187),new cljs.core.Keyword(null,"onEdgesChange","onEdgesChange",-2123010635),new cljs.core.Keyword(null,"preventScrolling","preventScrolling",1085718552),new cljs.core.Keyword(null,"onNodesChange","onNodesChange",-1833517479),new cljs.core.Keyword(null,"onDrop","onDrop",41220475),new cljs.core.Keyword(null,"fitView","fitView",-1756122627),new cljs.core.Keyword(null,"edges","edges",-694791395)],[(function (generatedFlowInstance){
return cljs.core.reset_BANG_(flowInstance,generatedFlowInstance);
}),"bottom-left",(function (){var or__4253__auto__ = connectFn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (function (){
return cljs.core.List.EMPTY;
});
}
})(),(function (){var or__4253__auto__ = zoom_on_scroll;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return false;
}
})(),nodes,(function (){var or__4253__auto__ = on_drag_over;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (function (){
return cljs.core.List.EMPTY;
});
}
})(),on_change_edges,(function (){var or__4253__auto__ = preventScrolling;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return false;
}
})(),on_change_nodes,(function (){var or__4253__auto__ = on_drop;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (function (){
return cljs.core.List.EMPTY;
});
}
})(),true,edges]),(cljs.core.truth_(node_types)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node-types","node-types",1539943342),node_types], null):null),(cljs.core.truth_(edge_types)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"edge-types","edge-types",1188284328),edge_types], null):null));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_flow_renderer.default,params__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_flow_renderer.MiniMap,(cljs.core.truth_(minimap_styles)?minimap_styles:cljs.core.PersistentArrayMap.EMPTY)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_flow_renderer.Background], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_flow_renderer.Controls], null)], null);
}));

(bh_ui.atom.diagram.editable_digraph.flow_STAR_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bh_ui.atom.diagram.editable_digraph.flow_STAR_.cljs$lang$applyTo = (function (seq59199){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59199));
}));

bh_ui.atom.diagram.editable_digraph.editable_flow = (function bh_ui$atom$diagram$editable_digraph$editable_flow(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59222 = arguments.length;
var i__4865__auto___59223 = (0);
while(true){
if((i__4865__auto___59223 < len__4864__auto___59222)){
args__4870__auto__.push((arguments[i__4865__auto___59223]));

var G__59224 = (i__4865__auto___59223 + (1));
i__4865__auto___59223 = G__59224;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return bh_ui.atom.diagram.editable_digraph.editable_flow.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(bh_ui.atom.diagram.editable_digraph.editable_flow.cljs$core$IFn$_invoke$arity$variadic = (function (p__59203){
var map__59204 = p__59203;
var map__59204__$1 = cljs.core.__destructure_map(map__59204);
var params = map__59204__$1;
var zoom_on_scroll = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59204__$1,new cljs.core.Keyword(null,"zoom-on-scroll","zoom-on-scroll",-1018757347));
var edges = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59204__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var flowInstance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59204__$1,new cljs.core.Keyword(null,"flowInstance","flowInstance",-856699256));
var edge_types = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59204__$1,new cljs.core.Keyword(null,"edge-types","edge-types",1188284328));
var on_drop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59204__$1,new cljs.core.Keyword(null,"on-drop","on-drop",1867868491));
var node_types = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59204__$1,new cljs.core.Keyword(null,"node-types","node-types",1539943342));
var connectFn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59204__$1,new cljs.core.Keyword(null,"connectFn","connectFn",-1166539665));
var force_layout_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59204__$1,new cljs.core.Keyword(null,"force-layout?","force-layout?",714323314));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59204__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var minimap_styles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59204__$1,new cljs.core.Keyword(null,"minimap-styles","minimap-styles",2078942134));
var component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59204__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var on_drag_over = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59204__$1,new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408));
var preventScrolling = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59204__$1,new cljs.core.Keyword(null,"preventScrolling","preventScrolling",1085718552));
var map__59205 = (cljs.core.truth_(force_layout_QMARK_)?bh_ui.atom.diagram.diagram.dagre_support.build_layout.cljs$core$IFn$_invoke$arity$2(nodes,edges):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nodes,new cljs.core.Keyword(null,"edges","edges",-694791395),edges], null));
var map__59205__$1 = cljs.core.__destructure_map(map__59205);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59205__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59205__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var vec__59206 = shadow.js.shim.module$react_flow_renderer.useNodesState(cljs.core.clj__GT_js(n));
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59206,(0),null);
var set_nodes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59206,(1),null);
var on_change_nodes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59206,(2),null);
var vec__59209 = shadow.js.shim.module$react_flow_renderer.useEdgesState(cljs.core.clj__GT_js(e));
var es = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59209,(0),null);
var set_edges = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59209,(1),null);
var on_change_edges = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59209,(2),null);
var _BANG_wrapper = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_flow_renderer.ReactFlowProvider,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#wrapper","div#wrapper",220024300),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"800px",new cljs.core.Keyword(null,"height","height",1025178622),"700px"], null),new cljs.core.Keyword(null,"ref","ref",1289896967),(function (el){
return cljs.core.reset_BANG_(_BANG_wrapper,el);
})], null),new cljs.core.PersistentVector(null, 29, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.diagram.editable_digraph.flow_STAR_,new cljs.core.Keyword(null,"component-id","component-id",1551113783),component_id,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),ns,new cljs.core.Keyword(null,"edges","edges",-694791395),es,new cljs.core.Keyword(null,"on-change-nodes","on-change-nodes",1794690531),on_change_nodes,new cljs.core.Keyword(null,"on-change-edges","on-change-edges",-1237562934),on_change_edges,new cljs.core.Keyword(null,"node-types","node-types",1539943342),node_types,new cljs.core.Keyword(null,"edge-types","edge-types",1188284328),edge_types,new cljs.core.Keyword(null,"minimap-styles","minimap-styles",2078942134),minimap_styles,new cljs.core.Keyword(null,"connectFn","connectFn",-1166539665),connectFn,new cljs.core.Keyword(null,"zoom-on-scroll","zoom-on-scroll",-1018757347),zoom_on_scroll,new cljs.core.Keyword(null,"preventScrolling","preventScrolling",1085718552),preventScrolling,new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(on_drop,component_id,flowInstance,set_nodes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_BANG_wrapper], 0)),new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),on_drag_over,new cljs.core.Keyword(null,"flowInstance","flowInstance",-856699256),flowInstance], null)], null)], null);
}));

(bh_ui.atom.diagram.editable_digraph.editable_flow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bh_ui.atom.diagram.editable_digraph.editable_flow.cljs$lang$applyTo = (function (seq59202){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59202));
}));

bh_ui.atom.diagram.editable_digraph.component = (function bh_ui$atom$diagram$editable_digraph$component(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59225 = arguments.length;
var i__4865__auto___59226 = (0);
while(true){
if((i__4865__auto___59226 < len__4864__auto___59225)){
args__4870__auto__.push((arguments[i__4865__auto___59226]));

var G__59227 = (i__4865__auto___59226 + (1));
i__4865__auto___59226 = G__59227;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return bh_ui.atom.diagram.editable_digraph.component.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(bh_ui.atom.diagram.editable_digraph.component.cljs$core$IFn$_invoke$arity$variadic = (function (p__59213){
var map__59214 = p__59213;
var map__59214__$1 = cljs.core.__destructure_map(map__59214);
var zoom_on_scroll = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59214__$1,new cljs.core.Keyword(null,"zoom-on-scroll","zoom-on-scroll",-1018757347));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59214__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var edge_types = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59214__$1,new cljs.core.Keyword(null,"edge-types","edge-types",1188284328));
var node_types = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59214__$1,new cljs.core.Keyword(null,"node-types","node-types",1539943342));
var connectFn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59214__$1,new cljs.core.Keyword(null,"connectFn","connectFn",-1166539665));
var force_layout_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59214__$1,new cljs.core.Keyword(null,"force-layout?","force-layout?",714323314));
var tool_types = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59214__$1,new cljs.core.Keyword(null,"tool-types","tool-types",1018386515));
var container_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59214__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var minimap_styles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59214__$1,new cljs.core.Keyword(null,"minimap-styles","minimap-styles",2078942134));
var component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59214__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var preventScrolling = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59214__$1,new cljs.core.Keyword(null,"preventScrolling","preventScrolling",1085718552));
var d = bh_ui.utils.helpers.resolve_value(data);
var open_details_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var n_types = cljs.core.clj__GT_js(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__59215){
var vec__59216 = p__59215;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59216,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59216,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([k,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(v,open_details_QMARK_)]);
}),node_types)));
var flowInstance = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"bh_ui/atom/diagram/editable_digraph.cljs",new cljs.core.Keyword(null,"line","line",212345235),313], null)),new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.diagram.editable_digraph.tool_panel,open_details_QMARK_,new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(d)),component_id,tool_types], null),new cljs.core.PersistentVector(null, 28, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),bh_ui.atom.diagram.editable_digraph.editable_flow,new cljs.core.Keyword(null,"component-id","component-id",1551113783),component_id,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(d)),new cljs.core.Keyword(null,"edges","edges",-694791395),new cljs.core.Keyword(null,"edges","edges",-694791395).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(d)),new cljs.core.Keyword(null,"node-types","node-types",1539943342),n_types,new cljs.core.Keyword(null,"edge-types","edge-types",1188284328),edge_types,new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),bh_ui.atom.diagram.editable_digraph.on_drop,new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),bh_ui.atom.diagram.editable_digraph.on_drag_over,new cljs.core.Keyword(null,"minimap-styles","minimap-styles",2078942134),(function (){var or__4253__auto__ = minimap_styles;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.Keyword(null,"connectFn","connectFn",-1166539665),connectFn,new cljs.core.Keyword(null,"zoom-on-scroll","zoom-on-scroll",-1018757347),zoom_on_scroll,new cljs.core.Keyword(null,"preventScrolling","preventScrolling",1085718552),preventScrolling,new cljs.core.Keyword(null,"flowInstance","flowInstance",-856699256),flowInstance,new cljs.core.Keyword(null,"force-layout?","force-layout?",714323314),force_layout_QMARK_], null)], null)], null);
});
}));

(bh_ui.atom.diagram.editable_digraph.component.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bh_ui.atom.diagram.editable_digraph.component.cljs$lang$applyTo = (function (seq59212){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59212));
}));


//# sourceMappingURL=bh_ui.atom.diagram.editable_digraph.js.map
