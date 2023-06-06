goog.provide('demo.src.catalog.atom.example.misc.bh.meta_bh_table');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"demo.src.catalog.atom.example.misc.bh.meta-bh-table",null,12,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["demo.src.catalog.atom.example.misc.meta-bh-table"], null);
}),null)),null,-1055020707,null);
if((typeof demo !== 'undefined') && (typeof demo.src !== 'undefined') && (typeof demo.src.catalog !== 'undefined') && (typeof demo.src.catalog.atom !== 'undefined') && (typeof demo.src.catalog.atom.example !== 'undefined') && (typeof demo.src.catalog.atom.example.misc !== 'undefined') && (typeof demo.src.catalog.atom.example.misc.bh !== 'undefined') && (typeof demo.src.catalog.atom.example.misc.bh.meta_bh_table !== 'undefined') && (typeof demo.src.catalog.atom.example.misc.bh.meta_bh_table.data !== 'undefined')){
} else {
demo.src.catalog.atom.example.misc.bh.meta_bh_table.data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(bh_ui.atom.bhui.table.sample_meta_data);
}
demo.src.catalog.atom.example.misc.bh.meta_bh_table.data_tools = (function demo$src$catalog$atom$example$misc$bh$meta_bh_table$data_tools(){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"demo/src/catalog/atom/example/misc/bh/meta_bh_table.cljs",new cljs.core.Keyword(null,"line","line",212345235),19], null)),new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"3px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"5px 5px 5px 2px",new cljs.core.Keyword(null,"margin","margin",-995903681),"5px",new cljs.core.Keyword(null,"padding","padding",1660304693),"5px"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.h5","label.h5",-1383169958),"Input Data:"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
cljs.core.reset_BANG_(demo.src.catalog.atom.example.misc.bh.meta_bh_table.data,cljs.core.PersistentVector.EMPTY);

return null;
}),new cljs.core.Keyword(null,"label","label",1718410804),"Empty"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(demo.src.catalog.atom.example.misc.bh.meta_bh_table.data,bh_ui.atom.bhui.table.sample_meta_data);
}),new cljs.core.Keyword(null,"label","label",1718410804),"Default"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(demo.src.catalog.atom.example.misc.bh.meta_bh_table.data,(bh_ui.atom.bhui.table.random_data_meta.cljs$core$IFn$_invoke$arity$0 ? bh_ui.atom.bhui.table.random_data_meta.cljs$core$IFn$_invoke$arity$0() : bh_ui.atom.bhui.table.random_data_meta.call(null)));
}),new cljs.core.Keyword(null,"label","label",1718410804),"Random"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(demo.src.catalog.atom.example.misc.bh.meta_bh_table.data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),(0),new cljs.core.Keyword(null,"uv","uv",-1197749379)], null),(10000));
}),new cljs.core.Keyword(null,"label","label",1718410804),"A -> 10,000"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(demo.src.catalog.atom.example.misc.bh.meta_bh_table.data,cljs.core.assoc,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(demo.src.catalog.atom.example.misc.bh.meta_bh_table.data)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Page Q",new cljs.core.Keyword(null,"uv","uv",-1197749379),(1100),new cljs.core.Keyword(null,"pv","pv",55024340),(1100),new cljs.core.Keyword(null,"tv","tv",-1805207359),(1100),new cljs.core.Keyword(null,"amt","amt",-1785711538),(1100)], null)));
}),new cljs.core.Keyword(null,"label","label",1718410804),"Add 'Q'"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(demo.src.catalog.atom.example.misc.bh.meta_bh_table.data,cljs.core.assoc,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(demo.src.catalog.atom.example.misc.bh.meta_bh_table.data)))));
}),new cljs.core.Keyword(null,"label","label",1718410804),"Drop Last 2"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(demo.src.catalog.atom.example.misc.bh.meta_bh_table.data,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.deref(demo.src.catalog.atom.example.misc.bh.meta_bh_table.data),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.Keyword(null,"new-item","new-item",-1489242961)], null),new cljs.core.Keyword(null,"number","number",1570378438)),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,new cljs.core.Keyword(null,"new-item","new-item",-1489242961),cljs.core.rand_int((7000)));
}),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(demo.src.catalog.atom.example.misc.bh.meta_bh_table.data))))));
}),new cljs.core.Keyword(null,"label","label",1718410804),"Add :new-item"], null)], null)], null);
});
demo.src.catalog.atom.example.misc.bh.meta_bh_table.data_update_example = (function demo$src$catalog$atom$example$misc$bh$meta_bh_table$data_update_example(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59548 = arguments.length;
var i__4865__auto___59549 = (0);
while(true){
if((i__4865__auto___59549 < len__4864__auto___59548)){
args__4870__auto__.push((arguments[i__4865__auto___59549]));

var G__59550 = (i__4865__auto___59549 + (1));
i__4865__auto___59549 = G__59550;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return demo.src.catalog.atom.example.misc.bh.meta_bh_table.data_update_example.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(demo.src.catalog.atom.example.misc.bh.meta_bh_table.data_update_example.cljs$core$IFn$_invoke$arity$variadic = (function (p__59505){
var map__59506 = p__59505;
var map__59506__$1 = cljs.core.__destructure_map(map__59506);
var params = map__59506__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59506__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var container_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59506__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59506__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var d = bh_ui.utils.helpers.resolve_value(data);
return (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"demo/src/catalog/atom/example/misc/bh/meta_bh_table.cljs",new cljs.core.Keyword(null,"line","line",212345235),49], null)),new cljs.core.Keyword(null,"class","class",-2030961996),"data-update-example",new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.chart-part","div.chart-part",1045862618),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"90%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.bhui.table.table,new cljs.core.Keyword(null,"data","data",-232669377),d], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.data-tools-part","div.data-tools-part",1281903232),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.src.catalog.atom.example.misc.bh.meta_bh_table.data_tools], null)], null)], null)], null);
});
}));

(demo.src.catalog.atom.example.misc.bh.meta_bh_table.data_update_example.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(demo.src.catalog.atom.example.misc.bh.meta_bh_table.data_update_example.cljs$lang$applyTo = (function (seq59498){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59498));
}));

demo.src.catalog.atom.example.misc.bh.meta_bh_table.example = (function demo$src$catalog$atom$example$misc$bh$meta_bh_table$example(){
var component_id = "table-with-meta-demo";
var G__59527 = "Basic Table with meta-data";
var G__59528 = "Table using HTML tags. Data is provided in a ratom.\n\nNow with meta-data!\n\n> This example also takes advantage of the component's ability to present data that it gets\n> from it's parent either\n> directly, via a Clojure [atom](https://clojure.org/reference/atoms), or via a\n> re-frame [subscription](https://day8.github.io/re-frame/subscriptions/) to state held\n> by the parent (container).\n\n> Feel free to use the controls at the bottom to change the data and see how the Table responds.";
var G__59529 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.layout.centered,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843),new cljs.core.Keyword(null,"width-50","width-50",718512332)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.src.catalog.atom.example.misc.bh.meta_bh_table.data_update_example,new cljs.core.Keyword(null,"data","data",-232669377),demo.src.catalog.atom.example.misc.bh.meta_bh_table.data], null)], null);
var G__59530 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("table","table","table/table",1267492441,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Symbol("table","sample-meta-data","table/sample-meta-data",-2018103256,null)], null);
return (woolybear.ad.utils.demo.cljs$core$IFn$_invoke$arity$4 ? woolybear.ad.utils.demo.cljs$core$IFn$_invoke$arity$4(G__59527,G__59528,G__59529,G__59530) : woolybear.ad.utils.demo.call(null,G__59527,G__59528,G__59529,G__59530));
});

//# sourceMappingURL=demo.src.catalog.atom.example.misc.bh.meta_bh_table.js.map
