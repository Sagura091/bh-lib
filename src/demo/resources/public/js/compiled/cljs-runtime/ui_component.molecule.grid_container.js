goog.provide('ui_component.molecule.grid_container');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"ui-component.molecule.grid-container",null,17,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ui-component.molecule.grid-container"], null);
}),null)),null,621073516,null);
/**
 * set up the local config keys, specifically we want the :layout key, so we can
 *   track updates to the layout should the user drag/resize any of the internal
 *   components.
 * 
 *   the component-panel will subscribe to this 'local' using (locals/subscribe-local ...) and
 *   dispatch updates (via on-layout-update) using (locals/dispatch-local ...)
 *   
 */
ui_component.molecule.grid_container.config = (function ui_component$molecule$grid_container$config(full_config){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"blackboard","blackboard",-1864070822),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"defs","defs",1398449717),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),full_config,new cljs.core.Keyword(null,"dag","dag",192648922),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open-details","open-details",-1001750138),""], null)], null)], null),new cljs.core.Keyword(null,"container","container",-1736937707),"",new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"grid-layout","grid-layout",-227324382).cljs$core$IFn$_invoke$arity$1(full_config)], null);
});
ui_component.molecule.grid_container.wrap_component = (function ui_component$molecule$grid_container$wrap_component(p__60980){
var vec__60981 = p__60980;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60981,(0),null);
var component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60981,(1),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60981,(2),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.widget-parent","div.widget-parent",-1678750537),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid-toolbar.title-wrapper.move-cursor","div.grid-toolbar.title-wrapper.move-cursor",178678859),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"1.5em"], null)], null),(function (){var or__4253__auto__ = label;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.name(id);
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.widget.widget-content","div.widget.widget-content",1955173914),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"90%",new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"stretch","stretch",-1888837380),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628)], null),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (p1__60977_SHARP_){
return p1__60977_SHARP_.stopPropagation();
})], null),component], null)], null);
});
/**
 * 
 *   ---
 * 
 *   - width : (number) new width of the container
 *   - margin : (vector) margin [left? right?]
 *   - cols : (number) number of columns
 *   - padding : (vector) padding [left? right?]
 *   
 */
ui_component.molecule.grid_container.on_width_update = (function ui_component$molecule$grid_container$on_width_update(width,margin,cols,padding){
return cljs.core.List.EMPTY;
});
ui_component.molecule.grid_container.on_layout_change = (function ui_component$molecule$grid_container$on_layout_change(component_id,new_layout,all_layouts){
var new_layout_STAR_ = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(new_layout,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var all_layouts_STAR_ = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(all_layouts,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var fst = cljs.core.first(new_layout_STAR_);
if((((!(cljs.core.empty_QMARK_(new_layout_STAR_)))) && (((((1) <= cljs.core.count(new_layout_STAR_))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"i","i",-1386841315).cljs$core$IFn$_invoke$arity$1(fst),"null")))))){
var cooked = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60985_SHARP_){
return cljs.core.zipmap(cljs.core.list(new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"static","static",1214358571)),p1__60985_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"static","static",1214358571)], 0)),new_layout_STAR_));
return ui_component.utils.locals.dispatch_local(component_id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921)], null),cooked);
} else {
return null;
}
});
ui_component.molecule.grid_container.toggle_editable = (function ui_component$molecule$grid_container$toggle_editable(orig_value){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60989_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__60989_SHARP_,new cljs.core.Keyword(null,"static","static",1214358571),cljs.core.not(new cljs.core.Keyword(null,"static","static",1214358571).cljs$core$IFn$_invoke$arity$1(p1__60989_SHARP_)));
}),orig_value);
});
ui_component.molecule.grid_container.component_panel = (function ui_component$molecule$grid_container$component_panel(var_args){
var args__4870__auto__ = [];
var len__4864__auto___61016 = arguments.length;
var i__4865__auto___61017 = (0);
while(true){
if((i__4865__auto___61017 < len__4864__auto___61016)){
args__4870__auto__.push((arguments[i__4865__auto___61017]));

var G__61018 = (i__4865__auto___61017 + (1));
i__4865__auto___61017 = G__61018;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return ui_component.molecule.grid_container.component_panel.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(ui_component.molecule.grid_container.component_panel.cljs$core$IFn$_invoke$arity$variadic = (function (p__60997){
var map__60998 = p__60997;
var map__60998__$1 = cljs.core.__destructure_map(map__60998);
var params = map__60998__$1;
var configuration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60998__$1,new cljs.core.Keyword(null,"configuration","configuration",1431842520));
var component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60998__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var resizable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60998__$1,new cljs.core.Keyword(null,"resizable","resizable",-2107060206));
var layout = ui_component.utils.locals.subscribe_local(component_id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921)], null));
var component_lookup = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,ui_component.molecule.composite.util.signals.process_components(configuration,new cljs.core.Keyword("ui","component","ui/component",1555933050),cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data-registry","meta-data-registry",-1468091984)], null))),component_id));
var composed_ui = cljs.core.map.cljs$core$IFn$_invoke$arity$2(ui_component.molecule.grid_container.wrap_component,component_lookup);
var open_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/molecule/grid_container.cljs",new cljs.core.Keyword(null,"line","line",212345235),120], null)),new cljs.core.Keyword(null,"gap","gap",80255254),"2px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(resizable)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.re_com.configure_toggle.configure_toggle,open_QMARK_,(function (){
return ui_component.utils.locals.apply_local(component_id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921)], null),ui_component.molecule.grid_container.toggle_editable);
})], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid-container","div.grid-container",-1126502510),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.layout.responsive_grid.grid,new cljs.core.Keyword(null,"id","id",-1388402092),component_id,new cljs.core.Keyword(null,"class","class",-2030961996),"layout",new cljs.core.Keyword(null,"children","children",-940561982),composed_ui,new cljs.core.Keyword(null,"layout","layout",-2120940921),cljs.core.deref(layout),new cljs.core.Keyword(null,"cols","cols",-1914801295),(20),new cljs.core.Keyword(null,"width","width",-384071477),(1200),new cljs.core.Keyword(null,"rowHeight","rowHeight",1730581244),(25),new cljs.core.Keyword(null,"layoutFn","layoutFn",-2038593186),(function (p1__60990_SHARP_,p2__60991_SHARP_){
return ui_component.molecule.grid_container.on_layout_change(component_id,p1__60990_SHARP_,p2__60991_SHARP_);
}),new cljs.core.Keyword(null,"widthFn","widthFn",-396716062),(function (p1__60992_SHARP_,p2__60993_SHARP_,p3__60994_SHARP_,p4__60995_SHARP_){
return ui_component.molecule.grid_container.on_width_update(p1__60992_SHARP_,p2__60993_SHARP_,p3__60994_SHARP_,p4__60995_SHARP_);
})], null)], null)], null)], null);
});
}));

(ui_component.molecule.grid_container.component_panel.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(ui_component.molecule.grid_container.component_panel.cljs$lang$applyTo = (function (seq60996){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60996));
}));

ui_component.molecule.grid_container.component = (function ui_component$molecule$grid_container$component(var_args){
var args__4870__auto__ = [];
var len__4864__auto___61019 = arguments.length;
var i__4865__auto___61020 = (0);
while(true){
if((i__4865__auto___61020 < len__4864__auto___61019)){
args__4870__auto__.push((arguments[i__4865__auto___61020]));

var G__61021 = (i__4865__auto___61020 + (1));
i__4865__auto___61020 = G__61021;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return ui_component.molecule.grid_container.component.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(ui_component.molecule.grid_container.component.cljs$core$IFn$_invoke$arity$variadic = (function (p__61005){
var map__61006 = p__61005;
var map__61006__$1 = cljs.core.__destructure_map(map__61006);
var params = map__61006__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61006__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61006__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var container_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61006__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var resizable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61006__$1,new cljs.core.Keyword(null,"resizable","resizable",-2107060206));
var tools = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61006__$1,new cljs.core.Keyword(null,"tools","tools",-1241731990));
var id = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var configuration = cljs.core.deref(data);
var graph = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(loom.graph.digraph,ui_component.molecule.composite.util.ui.compute_edges(configuration));
var comp_or_dag_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"component","component",1555936782));
var partial_config = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(configuration,new cljs.core.Keyword(null,"denorm","denorm",1624103242),ui_component.molecule.composite.util.digraph.denorm_components(graph,new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(configuration),loom.graph.nodes(graph)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(configuration))),new cljs.core.Keyword(null,"edges","edges",-694791395),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,loom.graph.edges(graph))], 0));
var full_config = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(partial_config,new cljs.core.Keyword(null,"graph","graph",1558099509),graph);
return (function (){
if((cljs.core.deref(id) == null)){
cljs.core.reset_BANG_(id,component_id);

ui_component.utils.init_container_locals(cljs.core.deref(id),ui_component.molecule.grid_container.config(partial_config));

ui_component.utils.dispatch_local(cljs.core.deref(id),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"container","container",-1736937707)], null),container_id);

ui_component.molecule.composite.util.ui.prep_environment(partial_config,cljs.core.deref(id),cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data-registry","meta-data-registry",-1468091984)], null))));
} else {
}

var buttons = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),"Widget view",new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"zmdi zmdi-view-compact"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"dag","dag",192648922),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),"Event model view",new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"zmdi zmdi-share"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"definition","definition",-1198729982),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),"Text view",new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"zmdi zmdi-format-subject"], null)], null)], null)], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.box","div.box",2023391427),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"background","background",-863952629),"#faeee8"], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/molecule/grid_container.cljs",new cljs.core.Keyword(null,"line","line",212345235),167], null)),new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"gap","gap",80255254),"5px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(tools)?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/molecule/grid_container.cljs",new cljs.core.Keyword(null,"line","line",212345235),172], null)),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.horizontal_bar_tabs,new cljs.core.Keyword(null,"model","model",331153215),comp_or_dag_QMARK_,new cljs.core.Keyword(null,"tabs","tabs",-779855354),buttons,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__61002_SHARP_){
return cljs.core.reset_BANG_(comp_or_dag_QMARK_,p1__61002_SHARP_);
})], null)], null)], null):null),(function (){var pred__61011 = cljs.core._EQ_;
var expr__61012 = cljs.core.deref(comp_or_dag_QMARK_);
if(cljs.core.truth_((pred__61011.cljs$core$IFn$_invoke$arity$2 ? pred__61011.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dag","dag",192648922),expr__61012) : pred__61011.call(null,new cljs.core.Keyword(null,"dag","dag",192648922),expr__61012)))){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.molecule.composite.dag_panel,new cljs.core.Keyword(null,"configuration","configuration",1431842520),full_config,new cljs.core.Keyword(null,"component-id","component-id",1551113783),cljs.core.deref(id),new cljs.core.Keyword(null,"container-id","container-id",1274665684),container_id], null);
} else {
if(cljs.core.truth_((pred__61011.cljs$core$IFn$_invoke$arity$2 ? pred__61011.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"component","component",1555936782),expr__61012) : pred__61011.call(null,new cljs.core.Keyword(null,"component","component",1555936782),expr__61012)))){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.molecule.grid_container.component_panel,new cljs.core.Keyword(null,"configuration","configuration",1431842520),full_config,new cljs.core.Keyword(null,"component-id","component-id",1551113783),cljs.core.deref(id),new cljs.core.Keyword(null,"container-id","container-id",1274665684),container_id,new cljs.core.Keyword(null,"resizable","resizable",-2107060206),resizable], null);
} else {
if(cljs.core.truth_((pred__61011.cljs$core$IFn$_invoke$arity$2 ? pred__61011.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"definition","definition",-1198729982),expr__61012) : pred__61011.call(null,new cljs.core.Keyword(null,"definition","definition",-1198729982),expr__61012)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.molecule.composite.definition_panel,new cljs.core.Keyword(null,"configuration","configuration",1431842520),configuration], null);
} else {
if(cljs.core.truth_((pred__61011.cljs$core$IFn$_invoke$arity$2 ? pred__61011.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),expr__61012) : pred__61011.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),expr__61012)))){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.alert_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/molecule/grid_container.cljs",new cljs.core.Keyword(null,"line","line",212345235),190], null)),new cljs.core.Keyword(null,"alert-type","alert-type",405751817),new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.Keyword(null,"body","body",-2049205669),"There is a problem with this component."], null);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__61012)].join('')));
}
}
}
}
})()], null)], null)], null);
});
}));

(ui_component.molecule.grid_container.component.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(ui_component.molecule.grid_container.component.cljs$lang$applyTo = (function (seq61003){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61003));
}));


//# sourceMappingURL=ui_component.molecule.grid_container.js.map
