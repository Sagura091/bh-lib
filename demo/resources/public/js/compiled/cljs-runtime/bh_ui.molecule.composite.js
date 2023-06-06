goog.provide('bh_ui.molecule.composite');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"bh-ui.molecule.composite",null,46,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bh-ui.molecule.composite"], null);
}),null)),null,-1602260600,null);
bh_ui.molecule.composite.component_needs = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("ui","component","ui/component",1555933050),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"id","id",-1388402092)], null),new cljs.core.Keyword("source","remote","source/remote",-1682682981),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"id","id",-1388402092)], null),new cljs.core.Keyword("source","local","source/local",-582398745),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"choices","choices",1385611597),cljs.core.PersistentHashSet.createAsIfByAssoc(["",(0),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY])], null)], null),new cljs.core.Keyword("source","fn","source/fn",1803568239),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"ports","ports",-1014790862),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("port","sink","port/sink",185875552),null,new cljs.core.Keyword("port","source","port/source",-436771986),null,new cljs.core.Keyword("port","source-sink","port/source-sink",2080195151),null], null), null)], null)], null)], null);
bh_ui.molecule.composite.source_code = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"composite","composite",1383412557,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Symbol("component","ui-definition","component/ui-definition",124733849,null),new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"container.component","container.component",-294271035),new cljs.core.Keyword(null,"container-id","container-id",1274665684),new cljs.core.Keyword(null,"container","container",-1736937707)], null);
bh_ui.molecule.composite.config = (function bh_ui$molecule$composite$config(full_config){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"blackboard","blackboard",-1864070822),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"defs","defs",1398449717),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),full_config,new cljs.core.Keyword(null,"dag","dag",192648922),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open-details","open-details",-1001750138),""], null)], null)], null),new cljs.core.Keyword(null,"container","container",-1736937707),""], null);
});
/**
 * show the text definition of the composed UI
 *   
 */
bh_ui.molecule.composite.definition_panel = (function bh_ui$molecule$composite$definition_panel(var_args){
var args__4870__auto__ = [];
var len__4864__auto___61064 = arguments.length;
var i__4865__auto___61065 = (0);
while(true){
if((i__4865__auto___61065 < len__4864__auto___61064)){
args__4870__auto__.push((arguments[i__4865__auto___61065]));

var G__61066 = (i__4865__auto___61065 + (1));
i__4865__auto___61065 = G__61066;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return bh_ui.molecule.composite.definition_panel.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(bh_ui.molecule.composite.definition_panel.cljs$core$IFn$_invoke$arity$variadic = (function (p__61048){
var map__61050 = p__61048;
var map__61050__$1 = cljs.core.__destructure_map(map__61050);
var configuration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61050__$1,new cljs.core.Keyword(null,"configuration","configuration",1431842520));
var components = new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(configuration);
var links = new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(configuration);
var layout = new cljs.core.Keyword(null,"grid-layout","grid-layout",-227324382).cljs$core$IFn$_invoke$arity$1(configuration);
return (function() { 
var G__61068__delegate = function (p__61051){
var map__61052 = p__61051;
var map__61052__$1 = cljs.core.__destructure_map(map__61052);
var configuration__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61052__$1,new cljs.core.Keyword(null,"configuration","configuration",1431842520));
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"bh_ui/molecule/composite.cljs",new cljs.core.Keyword(null,"line","line",212345235),83], null)),new cljs.core.Keyword(null,"width","width",-384071477),"70%",new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Components"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.containers.v_scroll_pane,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"10em"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.layout.text_block,cljs.core.str.cljs$core$IFn$_invoke$arity$1(components)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Links"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.containers.v_scroll_pane,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"10em"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.layout.text_block,cljs.core.str.cljs$core$IFn$_invoke$arity$1(links)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Layout"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.containers.v_scroll_pane,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"10em"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.layout.text_block,cljs.core.str.cljs$core$IFn$_invoke$arity$1(layout)], null)], null)], null)], null);
};
var G__61068 = function (var_args){
var p__61051 = null;
if (arguments.length > 0) {
var G__61069__i = 0, G__61069__a = new Array(arguments.length -  0);
while (G__61069__i < G__61069__a.length) {G__61069__a[G__61069__i] = arguments[G__61069__i + 0]; ++G__61069__i;}
  p__61051 = new cljs.core.IndexedSeq(G__61069__a,0,null);
} 
return G__61068__delegate.call(this,p__61051);};
G__61068.cljs$lang$maxFixedArity = 0;
G__61068.cljs$lang$applyTo = (function (arglist__61070){
var p__61051 = cljs.core.seq(arglist__61070);
return G__61068__delegate(p__61051);
});
G__61068.cljs$core$IFn$_invoke$arity$variadic = G__61068__delegate;
return G__61068;
})()
;
}));

(bh_ui.molecule.composite.definition_panel.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bh_ui.molecule.composite.definition_panel.cljs$lang$applyTo = (function (seq61047){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61047));
}));

/**
 * show the DAG, built form the configuration passed into the component, in a panel
 *   (beside the actual UI)
 *   
 */
bh_ui.molecule.composite.dag_panel = (function bh_ui$molecule$composite$dag_panel(var_args){
var args__4870__auto__ = [];
var len__4864__auto___61071 = arguments.length;
var i__4865__auto___61072 = (0);
while(true){
if((i__4865__auto___61072 < len__4864__auto___61071)){
args__4870__auto__.push((arguments[i__4865__auto___61072]));

var G__61073 = (i__4865__auto___61072 + (1));
i__4865__auto___61072 = G__61073;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return bh_ui.molecule.composite.dag_panel.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(bh_ui.molecule.composite.dag_panel.cljs$core$IFn$_invoke$arity$variadic = (function (p__61056){
var map__61057 = p__61056;
var map__61057__$1 = cljs.core.__destructure_map(map__61057);
var configuration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61057__$1,new cljs.core.Keyword(null,"configuration","configuration",1431842520));
var component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61057__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var container_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61057__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var ui = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61057__$1,new cljs.core.Keyword(null,"ui","ui",-469653645));
var flow = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(bh_ui.molecule.composite.util.ui.make_flow(configuration));
var node_types = new cljs.core.PersistentArrayMap(null, 4, [":ui/component",cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bh_ui.molecule.composite.util.ui.custom_node,new cljs.core.Keyword("ui","component","ui/component",1555933050)),":source/remote",cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bh_ui.molecule.composite.util.ui.custom_node,new cljs.core.Keyword("source","remote","source/remote",-1682682981)),":source/local",cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bh_ui.molecule.composite.util.ui.custom_node,new cljs.core.Keyword("source","local","source/local",-582398745)),":source/fn",cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bh_ui.molecule.composite.util.ui.custom_node,new cljs.core.Keyword("source","fn","source/fn",1803568239))], null);
var minimap_styles = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nodeStrokeColor","nodeStrokeColor",-1770697926),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(bh_ui.atom.diagram.diagram.composite_dag_support.custom_minimap_node_color,bh_ui.atom.diagram.diagram.composite_dag_support.default_color_pallet,bh_ui.atom.diagram.editable_digraph.color_white),new cljs.core.Keyword(null,"node-color","node-color",1768149103),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(bh_ui.atom.diagram.diagram.composite_dag_support.custom_minimap_node_color,bh_ui.atom.diagram.diagram.composite_dag_support.default_color_pallet,bh_ui.atom.diagram.editable_digraph.color_black),new cljs.core.Keyword(null,"nodeBorderRadius","nodeBorderRadius",-2058128295),(5)], null);
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.diagram.editable_digraph.component,new cljs.core.Keyword(null,"component-id","component-id",1551113783),component_id,new cljs.core.Keyword(null,"data","data",-232669377),flow,new cljs.core.Keyword(null,"node-types","node-types",1539943342),node_types,new cljs.core.Keyword(null,"tool-types","tool-types",1018386515),bh_ui.atom.diagram.diagram.composite_dag_support.default_tool_types,new cljs.core.Keyword(null,"minimap-styles","minimap-styles",2078942134),minimap_styles], null);
}));

(bh_ui.molecule.composite.dag_panel.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bh_ui.molecule.composite.dag_panel.cljs$lang$applyTo = (function (seq61054){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61054));
}));


//# sourceMappingURL=bh_ui.molecule.composite.js.map
