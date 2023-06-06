goog.provide('demo.src.catalog.molecule.example.composite.with_fn_example');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"demo.src.catalog.molecule.example.composite.with-fn-example",null,15,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["demo.src.catalog.molecule.example.composite.with-fn-example"], null);
}),null)),null,-1840190764,null);
demo.src.catalog.molecule.example.composite.with_fn_example.data_tools = (function demo$src$catalog$molecule$example$composite$with_fn_example$data_tools(data){
var old_data = bh_ui.utils.subscribe_local(data,cljs.core.PersistentVector.EMPTY);
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"demo/src/catalog/molecule/example/composite/with_fn_example.cljs",new cljs.core.Keyword(null,"line","line",212345235),24], null)),new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"3px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"5px 5px 5px 2px",new cljs.core.Keyword(null,"margin","margin",-995903681),"5px",new cljs.core.Keyword(null,"padding","padding",1660304693),"5px"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.h5","label.h5",-1383169958),"Input Data:"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return bh_ui.utils.helpers.handle_change_path(data,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
}),new cljs.core.Keyword(null,"label","label",1718410804),"Empty"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return bh_ui.utils.helpers.handle_change_path(data,cljs.core.PersistentVector.EMPTY,bh_ui.molecule.composite.with_fn.sample_data);
}),new cljs.core.Keyword(null,"label","label",1718410804),"Default"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return bh_ui.utils.helpers.handle_change_path(data,cljs.core.PersistentVector.EMPTY,cljs.core.assoc_in(cljs.core.deref(old_data),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),(0),new cljs.core.Keyword(null,"uv","uv",-1197749379)], null),(10000)));
}),new cljs.core.Keyword(null,"label","label",1718410804),"A -> 10000"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return bh_ui.utils.helpers.handle_change_path(data,cljs.core.PersistentVector.EMPTY,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(old_data),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(old_data)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Page Q",new cljs.core.Keyword(null,"uv","uv",-1197749379),(1100),new cljs.core.Keyword(null,"pv","pv",55024340),(1100),new cljs.core.Keyword(null,"tv","tv",-1805207359),(1100),new cljs.core.Keyword(null,"amt","amt",-1785711538),(1100)], null))));
}),new cljs.core.Keyword(null,"label","label",1718410804),"Add 'Q'"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return bh_ui.utils.helpers.handle_change_path(data,cljs.core.PersistentVector.EMPTY,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(old_data),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(old_data))))));
}),new cljs.core.Keyword(null,"label","label",1718410804),"Drop Last 2"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return bh_ui.utils.helpers.handle_change_path(data,cljs.core.PersistentVector.EMPTY,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.deref(old_data),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.Keyword(null,"new-item","new-item",-1489242961)], null),new cljs.core.Keyword(null,"number","number",1570378438)),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,new cljs.core.Keyword(null,"new-item","new-item",-1489242961),cljs.core.rand_int((7000)));
}),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(old_data))))));
}),new cljs.core.Keyword(null,"label","label",1718410804),"Add :new-item"], null)], null)], null);
});
});
demo.src.catalog.molecule.example.composite.with_fn_example.data_config_update_example = (function demo$src$catalog$molecule$example$composite$with_fn_example$data_config_update_example(var_args){
var args__4870__auto__ = [];
var len__4864__auto___61241 = arguments.length;
var i__4865__auto___61242 = (0);
while(true){
if((i__4865__auto___61242 < len__4864__auto___61241)){
args__4870__auto__.push((arguments[i__4865__auto___61242]));

var G__61243 = (i__4865__auto___61242 + (1));
i__4865__auto___61242 = G__61243;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return demo.src.catalog.molecule.example.composite.with_fn_example.data_config_update_example.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(demo.src.catalog.molecule.example.composite.with_fn_example.data_config_update_example.cljs$core$IFn$_invoke$arity$variadic = (function (p__61230){
var map__61231 = p__61230;
var map__61231__$1 = cljs.core.__destructure_map(map__61231);
var params = map__61231__$1;
var widget = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61231__$1,new cljs.core.Keyword(null,"widget","widget",-853968943));
var component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61231__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"demo/src/catalog/molecule/example/composite/with_fn_example.cljs",new cljs.core.Keyword(null,"line","line",212345235),65], null)),new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.chart-part","div.chart-part",1045862618),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),widget], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"demo/src/catalog/molecule/example/composite/with_fn_example.cljs",new cljs.core.Keyword(null,"line","line",212345235),72], null)),new cljs.core.Keyword(null,"gap","gap",80255254),"8px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.src.catalog.molecule.example.composite.with_fn_example.data_tools,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [component_id,new cljs.core.Keyword(null,"blackboard","blackboard",-1864070822),new cljs.core.Keyword(null,"topic.data","topic.data",-1953025437)], null)], null)], null)], null)], null)], null);
}));

(demo.src.catalog.molecule.example.composite.with_fn_example.data_config_update_example.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(demo.src.catalog.molecule.example.composite.with_fn_example.data_config_update_example.cljs$lang$applyTo = (function (seq61226){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61226));
}));

demo.src.catalog.molecule.example.composite.with_fn_example.example = (function demo$src$catalog$molecule$example$composite$with_fn_example$example(){
var container_id = "chart-with-fn";
var component_id = bh_ui.utils.helpers.path__GT_keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([container_id,"widget"], 0));
return (function (){
var G__61234 = "A Multiple Charts in a Widget (with 'computed' data)";
var G__61235 = "This example provides a 'widget' (collection of UI Components) organized into a digraph (Event Model) that\n          describes the flow of data from sources (remote or local) into and out-of the UI.\n\nHere, we show the original data in the line chart while the pie chart shows the result of `(:uv * :pv) / 1000`\n\n";
var G__61236 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.layout.frame,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"min-height","min-height",398480837),"400px"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.src.catalog.molecule.example.composite.with_fn_example.data_config_update_example,new cljs.core.Keyword(null,"widget","widget",-853968943),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.molecule.grid_container.component,new cljs.core.Keyword(null,"data","data",-232669377),reagent.core.atom.cljs$core$IFn$_invoke$arity$1(bh_ui.molecule.composite.with_fn.ui_definition),new cljs.core.Keyword(null,"component-id","component-id",1551113783),component_id,new cljs.core.Keyword(null,"resizable","resizable",-2107060206),true,new cljs.core.Keyword(null,"tools","tools",-1241731990),true], null),new cljs.core.Keyword(null,"component-id","component-id",1551113783),component_id], null)], null)], null);
var G__61237 = bh_ui.molecule.composite.with_fn.source_code;
return (woolybear.ad.utils.demo.cljs$core$IFn$_invoke$arity$4 ? woolybear.ad.utils.demo.cljs$core$IFn$_invoke$arity$4(G__61234,G__61235,G__61236,G__61237) : woolybear.ad.utils.demo.call(null,G__61234,G__61235,G__61236,G__61237));
});
});

//# sourceMappingURL=demo.src.catalog.molecule.example.composite.with_fn_example.js.map
