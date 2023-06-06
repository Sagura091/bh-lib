goog.provide('ui_component.molecule.composite');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"ui-component.molecule.composite",null,46,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ui-component.molecule.composite"], null);
}),null)),null,-563084327,null);
ui_component.molecule.composite.component_needs = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("ui","component","ui/component",1555933050),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"id","id",-1388402092)], null),new cljs.core.Keyword("source","remote","source/remote",-1682682981),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"id","id",-1388402092)], null),new cljs.core.Keyword("source","local","source/local",-582398745),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"choices","choices",1385611597),cljs.core.PersistentHashSet.createAsIfByAssoc(["",(0),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY])], null)], null),new cljs.core.Keyword("source","fn","source/fn",1803568239),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"ports","ports",-1014790862),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("port","sink","port/sink",185875552),null,new cljs.core.Keyword("port","source","port/source",-436771986),null,new cljs.core.Keyword("port","source-sink","port/source-sink",2080195151),null], null), null)], null)], null)], null);
ui_component.molecule.composite.source_code = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"composite","composite",1383412557,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Symbol("component","ui-definition","component/ui-definition",124733849,null),new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"container.component","container.component",-294271035),new cljs.core.Keyword(null,"container-id","container-id",1274665684),new cljs.core.Keyword(null,"container","container",-1736937707)], null);
ui_component.molecule.composite.config = (function ui_component$molecule$composite$config(full_config){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"blackboard","blackboard",-1864070822),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"defs","defs",1398449717),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),full_config,new cljs.core.Keyword(null,"dag","dag",192648922),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open-details","open-details",-1001750138),""], null)], null)], null),new cljs.core.Keyword(null,"container","container",-1736937707),""], null);
});
/**
 * show the text definition of the composed UI
 *   
 */
ui_component.molecule.composite.definition_panel = (function ui_component$molecule$composite$definition_panel(var_args){
var args__4870__auto__ = [];
var len__4864__auto___60964 = arguments.length;
var i__4865__auto___60965 = (0);
while(true){
if((i__4865__auto___60965 < len__4864__auto___60964)){
args__4870__auto__.push((arguments[i__4865__auto___60965]));

var G__60966 = (i__4865__auto___60965 + (1));
i__4865__auto___60965 = G__60966;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return ui_component.molecule.composite.definition_panel.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(ui_component.molecule.composite.definition_panel.cljs$core$IFn$_invoke$arity$variadic = (function (p__60950){
var map__60951 = p__60950;
var map__60951__$1 = cljs.core.__destructure_map(map__60951);
var configuration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60951__$1,new cljs.core.Keyword(null,"configuration","configuration",1431842520));
var components = new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(configuration);
var links = new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(configuration);
var layout = new cljs.core.Keyword(null,"grid-layout","grid-layout",-227324382).cljs$core$IFn$_invoke$arity$1(configuration);
return (function() { 
var G__60967__delegate = function (p__60952){
var map__60953 = p__60952;
var map__60953__$1 = cljs.core.__destructure_map(map__60953);
var configuration__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60953__$1,new cljs.core.Keyword(null,"configuration","configuration",1431842520));
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/molecule/composite.cljs",new cljs.core.Keyword(null,"line","line",212345235),83], null)),new cljs.core.Keyword(null,"width","width",-384071477),"70%",new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Components"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.containers.v_scroll_pane,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"10em"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.layout.text_block,cljs.core.str.cljs$core$IFn$_invoke$arity$1(components)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Links"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.containers.v_scroll_pane,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"10em"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.layout.text_block,cljs.core.str.cljs$core$IFn$_invoke$arity$1(links)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Layout"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.containers.v_scroll_pane,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"10em"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.layout.text_block,cljs.core.str.cljs$core$IFn$_invoke$arity$1(layout)], null)], null)], null)], null);
};
var G__60967 = function (var_args){
var p__60952 = null;
if (arguments.length > 0) {
var G__60968__i = 0, G__60968__a = new Array(arguments.length -  0);
while (G__60968__i < G__60968__a.length) {G__60968__a[G__60968__i] = arguments[G__60968__i + 0]; ++G__60968__i;}
  p__60952 = new cljs.core.IndexedSeq(G__60968__a,0,null);
} 
return G__60967__delegate.call(this,p__60952);};
G__60967.cljs$lang$maxFixedArity = 0;
G__60967.cljs$lang$applyTo = (function (arglist__60969){
var p__60952 = cljs.core.seq(arglist__60969);
return G__60967__delegate(p__60952);
});
G__60967.cljs$core$IFn$_invoke$arity$variadic = G__60967__delegate;
return G__60967;
})()
;
}));

(ui_component.molecule.composite.definition_panel.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(ui_component.molecule.composite.definition_panel.cljs$lang$applyTo = (function (seq60948){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60948));
}));

/**
 * show the DAG, built form the configuration passed into the component, in a panel
 *   (beside the actual UI)
 *   
 */
ui_component.molecule.composite.dag_panel = (function ui_component$molecule$composite$dag_panel(var_args){
var args__4870__auto__ = [];
var len__4864__auto___60970 = arguments.length;
var i__4865__auto___60971 = (0);
while(true){
if((i__4865__auto___60971 < len__4864__auto___60970)){
args__4870__auto__.push((arguments[i__4865__auto___60971]));

var G__60972 = (i__4865__auto___60971 + (1));
i__4865__auto___60971 = G__60972;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return ui_component.molecule.composite.dag_panel.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(ui_component.molecule.composite.dag_panel.cljs$core$IFn$_invoke$arity$variadic = (function (p__60957){
var map__60958 = p__60957;
var map__60958__$1 = cljs.core.__destructure_map(map__60958);
var configuration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60958__$1,new cljs.core.Keyword(null,"configuration","configuration",1431842520));
var component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60958__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var container_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60958__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var ui = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60958__$1,new cljs.core.Keyword(null,"ui","ui",-469653645));
var flow = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(ui_component.molecule.composite.util.ui.make_flow(configuration));
var node_types = new cljs.core.PersistentArrayMap(null, 4, [":ui/component",cljs.core.partial.cljs$core$IFn$_invoke$arity$2(ui_component.molecule.composite.util.ui.custom_node,new cljs.core.Keyword("ui","component","ui/component",1555933050)),":source/remote",cljs.core.partial.cljs$core$IFn$_invoke$arity$2(ui_component.molecule.composite.util.ui.custom_node,new cljs.core.Keyword("source","remote","source/remote",-1682682981)),":source/local",cljs.core.partial.cljs$core$IFn$_invoke$arity$2(ui_component.molecule.composite.util.ui.custom_node,new cljs.core.Keyword("source","local","source/local",-582398745)),":source/fn",cljs.core.partial.cljs$core$IFn$_invoke$arity$2(ui_component.molecule.composite.util.ui.custom_node,new cljs.core.Keyword("source","fn","source/fn",1803568239))], null);
var minimap_styles = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nodeStrokeColor","nodeStrokeColor",-1770697926),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(ui_component.atom.diagram.diagram.composite_dag_support.custom_minimap_node_color,ui_component.atom.diagram.diagram.composite_dag_support.default_color_pallet,ui_component.atom.diagram.editable_digraph.color_white),new cljs.core.Keyword(null,"node-color","node-color",1768149103),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(ui_component.atom.diagram.diagram.composite_dag_support.custom_minimap_node_color,ui_component.atom.diagram.diagram.composite_dag_support.default_color_pallet,ui_component.atom.diagram.editable_digraph.color_black),new cljs.core.Keyword(null,"nodeBorderRadius","nodeBorderRadius",-2058128295),(5)], null);
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.diagram.editable_digraph.component,new cljs.core.Keyword(null,"component-id","component-id",1551113783),component_id,new cljs.core.Keyword(null,"data","data",-232669377),flow,new cljs.core.Keyword(null,"node-types","node-types",1539943342),node_types,new cljs.core.Keyword(null,"tool-types","tool-types",1018386515),ui_component.atom.diagram.diagram.composite_dag_support.default_tool_types,new cljs.core.Keyword(null,"minimap-styles","minimap-styles",2078942134),minimap_styles], null);
}));

(ui_component.molecule.composite.dag_panel.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(ui_component.molecule.composite.dag_panel.cljs$lang$applyTo = (function (seq60955){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60955));
}));


//# sourceMappingURL=ui_component.molecule.composite.js.map
