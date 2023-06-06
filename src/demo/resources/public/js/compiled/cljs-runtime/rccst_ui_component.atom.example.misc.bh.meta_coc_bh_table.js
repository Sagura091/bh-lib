goog.provide('rccst_ui_component.atom.example.misc.bh.meta_coc_bh_table');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"rccst-ui-component.atom.example.misc.bh.meta-coc-bh-table",null,12,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rccst-ui-component.atom.example.misc.meta-coc-bh-table"], null);
}),null)),null,-1457649121,null);
if((typeof rccst_ui_component !== 'undefined') && (typeof rccst_ui_component.atom !== 'undefined') && (typeof rccst_ui_component.atom.example !== 'undefined') && (typeof rccst_ui_component.atom.example.misc !== 'undefined') && (typeof rccst_ui_component.atom.example.misc.bh !== 'undefined') && (typeof rccst_ui_component.atom.example.misc.bh.meta_coc_bh_table !== 'undefined') && (typeof rccst_ui_component.atom.example.misc.bh.meta_coc_bh_table.data !== 'undefined')){
} else {
rccst_ui_component.atom.example.misc.bh.meta_coc_bh_table.data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(ui_component.atom.bhui.table.sample_meta_coc_data);
}
rccst_ui_component.atom.example.misc.bh.meta_coc_bh_table.data_tools = (function rccst_ui_component$atom$example$misc$bh$meta_coc_bh_table$data_tools(){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"rccst_ui_component/atom/example/misc/bh/meta_coc_bh_table.cljs",new cljs.core.Keyword(null,"line","line",212345235),19], null)),new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"3px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"5px 5px 5px 2px",new cljs.core.Keyword(null,"margin","margin",-995903681),"5px",new cljs.core.Keyword(null,"padding","padding",1660304693),"5px"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.h5","label.h5",-1383169958),"Input Data:"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(rccst_ui_component.atom.example.misc.bh.meta_coc_bh_table.data,cljs.core.PersistentVector.EMPTY);
}),new cljs.core.Keyword(null,"label","label",1718410804),"Empty"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(rccst_ui_component.atom.example.misc.bh.meta_coc_bh_table.data,ui_component.atom.bhui.table.sample_meta_coc_data);
}),new cljs.core.Keyword(null,"label","label",1718410804),"Default"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(rccst_ui_component.atom.example.misc.bh.meta_coc_bh_table.data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),(0),new cljs.core.Keyword(null,"uv","uv",-1197749379)], null),(10000));
}),new cljs.core.Keyword(null,"label","label",1718410804),"A -> 10,000"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(rccst_ui_component.atom.example.misc.bh.meta_coc_bh_table.data,cljs.core.assoc,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(rccst_ui_component.atom.example.misc.bh.meta_coc_bh_table.data)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Page Q",new cljs.core.Keyword(null,"uv","uv",-1197749379),(1100),new cljs.core.Keyword(null,"pv","pv",55024340),(1100),new cljs.core.Keyword(null,"tv","tv",-1805207359),(1100),new cljs.core.Keyword(null,"amt","amt",-1785711538),(1100)], null)));
}),new cljs.core.Keyword(null,"label","label",1718410804),"Add 'Q'"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(rccst_ui_component.atom.example.misc.bh.meta_coc_bh_table.data,cljs.core.assoc,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(rccst_ui_component.atom.example.misc.bh.meta_coc_bh_table.data)))));
}),new cljs.core.Keyword(null,"label","label",1718410804),"Drop Last 2"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(rccst_ui_component.atom.example.misc.bh.meta_coc_bh_table.data,cljs.core.assoc,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,new cljs.core.Keyword(null,"new-item","new-item",-1489242961),(1750));
}),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(rccst_ui_component.atom.example.misc.bh.meta_coc_bh_table.data)))));
}),new cljs.core.Keyword(null,"label","label",1718410804),"Add :new-item"], null)], null)], null);
});
rccst_ui_component.atom.example.misc.bh.meta_coc_bh_table.data_update_example = (function rccst_ui_component$atom$example$misc$bh$meta_coc_bh_table$data_update_example(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59512 = arguments.length;
var i__4865__auto___59513 = (0);
while(true){
if((i__4865__auto___59513 < len__4864__auto___59512)){
args__4870__auto__.push((arguments[i__4865__auto___59513]));

var G__59514 = (i__4865__auto___59513 + (1));
i__4865__auto___59513 = G__59514;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return rccst_ui_component.atom.example.misc.bh.meta_coc_bh_table.data_update_example.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(rccst_ui_component.atom.example.misc.bh.meta_coc_bh_table.data_update_example.cljs$core$IFn$_invoke$arity$variadic = (function (p__59510){
var map__59511 = p__59510;
var map__59511__$1 = cljs.core.__destructure_map(map__59511);
var params = map__59511__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59511__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var container_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59511__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59511__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var d = ui_component.utils.helpers.resolve_value(data);
return (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"rccst_ui_component/atom/example/misc/bh/meta_coc_bh_table.cljs",new cljs.core.Keyword(null,"line","line",212345235),46], null)),new cljs.core.Keyword(null,"class","class",-2030961996),"data-update-example",new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.chart-part","div.chart-part",1045862618),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"90%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.bhui.table.table,new cljs.core.Keyword(null,"data","data",-232669377),d], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.data-tools-part","div.data-tools-part",1281903232),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rccst_ui_component.atom.example.misc.bh.meta_coc_bh_table.data_tools], null)], null)], null)], null);
});
}));

(rccst_ui_component.atom.example.misc.bh.meta_coc_bh_table.data_update_example.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(rccst_ui_component.atom.example.misc.bh.meta_coc_bh_table.data_update_example.cljs$lang$applyTo = (function (seq59509){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59509));
}));

rccst_ui_component.atom.example.misc.bh.meta_coc_bh_table.example = (function rccst_ui_component$atom$example$misc$bh$meta_coc_bh_table$example(){
var component_id = "table-with-meta-and-coc-demo";
return woolybear.ad.demo.src.catalog.utils.demo.cljs$core$IFn$_invoke$arity$variadic("Basic Table with meta-data, showing available Chain-of-Custody data",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Table using HTML tags\n\n> And with Chain-of-Custody!!\n\n> Feel free to use the controls at the bottom to change the data and see how the Table responds.",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.layout.centered,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843),new cljs.core.Keyword(null,"width-50","width-50",718512332)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rccst_ui_component.atom.example.misc.bh.meta_coc_bh_table.data_update_example,new cljs.core.Keyword(null,"data","data",-232669377),rccst_ui_component.atom.example.misc.bh.meta_coc_bh_table.data], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("table","table","table/table",1267492441,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Symbol("table","sample-meta-coc-data","table/sample-meta-coc-data",1178175994,null)], null)], 0));
});

//# sourceMappingURL=rccst_ui_component.atom.example.misc.bh.meta_coc_bh_table.js.map
