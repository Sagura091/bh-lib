goog.provide('ui_component.molecule.composite.util.signals');
/**
 * this UI element is used in those cases where a widget definition tries to use a component impleentation
 *   that is NOT found in the registry. Since Reagent really does not like nil's as the component function, we
 *   need ot provide something useful to the user and, ultimately, the developer.
 */
ui_component.molecule.composite.util.signals.error_ui = (function ui_component$molecule$composite$util$signals$error_ui(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59097 = arguments.length;
var i__4865__auto___59098 = (0);
while(true){
if((i__4865__auto___59098 < len__4864__auto___59097)){
args__4870__auto__.push((arguments[i__4865__auto___59098]));

var G__59099 = (i__4865__auto___59098 + (1));
i__4865__auto___59098 = G__59099;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return ui_component.molecule.composite.util.signals.error_ui.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(ui_component.molecule.composite.util.signals.error_ui.cljs$core$IFn$_invoke$arity$variadic = (function (p__59062){
var map__59063 = p__59062;
var map__59063__$1 = cljs.core.__destructure_map(map__59063);
var m = map__59063__$1;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.alert_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/molecule/composite/util/signals.cljs",new cljs.core.Keyword(null,"line","line",212345235),21], null)),new cljs.core.Keyword(null,"alert-type","alert-type",405751817),new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/molecule/composite/util/signals.cljs",new cljs.core.Keyword(null,"line","line",212345235),23], null)),new cljs.core.Keyword(null,"gap","gap",80255254),"2px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Problem with the widget!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"This widget tried to use a UI component that was not in the 'registry'."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"5px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"This is the data passed into the component. It may help point to the offending code."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.line,new cljs.core.Keyword(null,"size","size",1098693007),"2px"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.containers.v_scroll_pane,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"4rem",new cljs.core.Keyword(null,"width","width",-384071477),"100px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.layout.text_block,cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.line,new cljs.core.Keyword(null,"size","size",1098693007),"2px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Please contact Tech Support."], null)], null)], null)], null);
}));

(ui_component.molecule.composite.util.signals.error_ui.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(ui_component.molecule.composite.util.signals.error_ui.cljs$lang$applyTo = (function (seq59061){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59061));
}));

ui_component.molecule.composite.util.signals.make_params = (function ui_component$molecule$composite$util$signals$make_params(configuration,node,direction,container_id){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__59064){
var vec__59065 = p__59064;
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59065,(0),null);
var ports = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59065,(1),null);
var vec__59068 = ports;
var source_port = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59068,(0),null);
var target_port = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59068,(1),null);
var target_type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1((function (){var G__59071 = new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(configuration);
return (target.cljs$core$IFn$_invoke$arity$1 ? target.cljs$core$IFn$_invoke$arity$1(G__59071) : target.call(null,G__59071));
})());
var remote = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1((function (){var G__59072 = new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(configuration);
return (target.cljs$core$IFn$_invoke$arity$1 ? target.cljs$core$IFn$_invoke$arity$1(G__59072) : target.call(null,G__59072));
})());
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"outputs","outputs",-1896513034))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([source_port,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("source","local","source/local",-582398745),target_type))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.utils.path__GT_keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([container_id,new cljs.core.Keyword(null,"blackboard","blackboard",-1864070822),target], 0))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","source","subs/source",-436939584),remote], null))]);
} else {
return cljs.core.PersistentArrayMap.createAsIfByAssoc([target_port,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("source","local","source/local",-582398745),target_type))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.utils.path__GT_keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([container_id,new cljs.core.Keyword(null,"blackboard","blackboard",-1864070822),target], 0))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","source","subs/source",-436939584),remote], null))]);
}
}),(function (){var G__59073 = (function (){var G__59074 = new cljs.core.Keyword(null,"denorm","denorm",1624103242).cljs$core$IFn$_invoke$arity$1(configuration);
return (node.cljs$core$IFn$_invoke$arity$1 ? node.cljs$core$IFn$_invoke$arity$1(G__59074) : node.call(null,G__59074));
})();
return (direction.cljs$core$IFn$_invoke$arity$1 ? direction.cljs$core$IFn$_invoke$arity$1(G__59073) : direction.call(null,G__59073));
})()));
});
if((typeof ui_component !== 'undefined') && (typeof ui_component.molecule !== 'undefined') && (typeof ui_component.molecule.composite !== 'undefined') && (typeof ui_component.molecule.composite.util !== 'undefined') && (typeof ui_component.molecule.composite.util.signals !== 'undefined') && (typeof ui_component.molecule.composite.util.signals.component__GT_ui !== 'undefined')){
} else {
ui_component.molecule.composite.util.signals.component__GT_ui = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__59075 = cljs.core.get_global_hierarchy;
return (fexpr__59075.cljs$core$IFn$_invoke$arity$0 ? fexpr__59075.cljs$core$IFn$_invoke$arity$0() : fexpr__59075.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("ui-component.molecule.composite.util.signals","component->ui"),(function (p__59076){
var map__59077 = p__59076;
var map__59077__$1 = cljs.core.__destructure_map(map__59077);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59077__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return type;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
ui_component.molecule.composite.util.signals.component__GT_ui.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("ui","component","ui/component",1555933050),(function (p__59078){
var map__59079 = p__59078;
var map__59079__$1 = cljs.core.__destructure_map(map__59079);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59079__$1,new cljs.core.Keyword(null,"node","node",581201198));
var registry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59079__$1,new cljs.core.Keyword(null,"registry","registry",1021159018));
var configuration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59079__$1,new cljs.core.Keyword(null,"configuration","configuration",1431842520));
var component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59079__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var container_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59079__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var ui_type = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1((function (){var G__59080 = new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(configuration);
return (node.cljs$core$IFn$_invoke$arity$1 ? node.cljs$core$IFn$_invoke$arity$1(G__59080) : node.call(null,G__59080));
})());
var ui_component__$1 = (((ui_type instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(ui_type.cljs$core$IFn$_invoke$arity$1(registry)):ui_type);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([node,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__4253__auto__ = ui_component__$1;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return ui_component.molecule.composite.util.signals.error_ui;
}
})(),new cljs.core.Keyword(null,"component-id","component-id",1551113783),component_id,new cljs.core.Keyword(null,"container-id","container-id",1274665684),container_id], null),cljs.core.seq(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui_component.molecule.composite.util.signals.make_params(configuration,node,new cljs.core.Keyword(null,"inputs","inputs",865803858),container_id),ui_component.molecule.composite.util.signals.make_params(configuration,node,new cljs.core.Keyword(null,"outputs","outputs",-1896513034),container_id)], 0))))]);
}));
ui_component.molecule.composite.util.signals.component__GT_ui.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("source","local","source/local",-582398745),(function (p__59081){
var map__59082 = p__59081;
var map__59082__$1 = cljs.core.__destructure_map(map__59082);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59082__$1,new cljs.core.Keyword(null,"node","node",581201198));
var meta_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59082__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var container_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59082__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
if(cljs.core.truth_(new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(meta_data))){
ui_component.utils.locals.dispatch_local(container_id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blackboard","blackboard",-1864070822),node], null),new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(meta_data));
} else {
}

ui_component.utils.locals.create_container_local_sub(container_id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blackboard","blackboard",-1864070822),node], null),new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(meta_data));

ui_component.utils.locals.create_container_local_event(container_id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blackboard","blackboard",-1864070822),node], null));

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.utils.path__GT_keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([container_id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blackboard","blackboard",-1864070822),node], null)], 0))], null);
}));
ui_component.molecule.composite.util.signals.component__GT_ui.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("source","remote","source/remote",-1682682981),(function (p__59083){
var map__59084 = p__59083;
var map__59084__$1 = cljs.core.__destructure_map(map__59084);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59084__$1,new cljs.core.Keyword(null,"node","node",581201198));
var meta_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59084__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var remote = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(meta_data);
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("events","subscribe-to","events/subscribe-to",547238664),cljs.core.PersistentHashSet.createAsIfByAssoc([remote])], null));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","source","subs/source",-436939584),remote], null);
}));
ui_component.molecule.composite.util.signals.component__GT_ui.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("source","fn","source/fn",1803568239),(function (p__59085){
var map__59086 = p__59085;
var map__59086__$1 = cljs.core.__destructure_map(map__59086);
var inputs = map__59086__$1;
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59086__$1,new cljs.core.Keyword(null,"node","node",581201198));
var configuration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59086__$1,new cljs.core.Keyword(null,"configuration","configuration",1431842520));
var container_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59086__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var fn_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1((function (){var G__59087 = new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(configuration);
return (node.cljs$core$IFn$_invoke$arity$1 ? node.cljs$core$IFn$_invoke$arity$1(G__59087) : node.call(null,G__59087));
})());
var actual_fn = (cljs.core.truth_(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(fn_name))?new cljs.core.Keyword(null,"function","function",-2127255473).cljs$core$IFn$_invoke$arity$1((function (){var G__59088 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data-registry","meta-data-registry",-1468091984)], null)));
return (fn_name.cljs$core$IFn$_invoke$arity$1 ? fn_name.cljs$core$IFn$_invoke$arity$1(G__59088) : fn_name.call(null,G__59088));
})()):fn_name);
var params = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container-id","container-id",1274665684),container_id], null),ui_component.molecule.composite.util.signals.make_params(configuration,node,new cljs.core.Keyword(null,"inputs","inputs",865803858),container_id),ui_component.molecule.composite.util.signals.make_params(configuration,node,new cljs.core.Keyword(null,"outputs","outputs",-1896513034),container_id)], 0));
return (actual_fn.cljs$core$IFn$_invoke$arity$1 ? actual_fn.cljs$core$IFn$_invoke$arity$1(params) : actual_fn.call(null,params));
}));
ui_component.molecule.composite.util.signals.process_components = (function ui_component$molecule$composite$util$signals$process_components(configuration,node_type,registry,container_id){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__59089){
var vec__59090 = p__59089;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59090,(0),null);
var meta_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59090,(1),null);
return ui_component.molecule.composite.util.signals.component__GT_ui.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"node","node",581201198),node,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(meta_data),new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157),meta_data,new cljs.core.Keyword(null,"configuration","configuration",1431842520),configuration,new cljs.core.Keyword(null,"registry","registry",1021159018),registry,new cljs.core.Keyword(null,"component-id","component-id",1551113783),ui_component.utils.path__GT_keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([container_id,node], 0)),new cljs.core.Keyword(null,"container-id","container-id",1274665684),container_id], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__59093){
var vec__59094 = p__59093;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59094,(0),null);
var meta_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59094,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(meta_data));
}),new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(configuration))));
});

//# sourceMappingURL=ui_component.molecule.composite.util.signals.js.map
