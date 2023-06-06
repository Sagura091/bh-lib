goog.provide('demo.src.catalog.atom.example.re_com.plain_table');
demo.src.catalog.atom.example.re_com.plain_table.sample_data = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"tabular","tabular",1390021012),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583),"Tabular Data with Metadata",new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"uv","uv",-1197749379),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"pv","pv",55024340),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"kp","kp",358367104),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"amt","amt",-1785711538),new cljs.core.Keyword(null,"number","number",1570378438)], null)], null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Page A",new cljs.core.Keyword(null,"kp","kp",358367104),(2000),new cljs.core.Keyword(null,"uv","uv",-1197749379),(4000),new cljs.core.Keyword(null,"pv","pv",55024340),(2400),new cljs.core.Keyword(null,"amt","amt",-1785711538),(2400)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Page B",new cljs.core.Keyword(null,"kp","kp",358367104),(2000),new cljs.core.Keyword(null,"uv","uv",-1197749379),(3000),new cljs.core.Keyword(null,"pv","pv",55024340),(5598),new cljs.core.Keyword(null,"amt","amt",-1785711538),(2210)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Page C",new cljs.core.Keyword(null,"kp","kp",358367104),(2000),new cljs.core.Keyword(null,"uv","uv",-1197749379),(2000),new cljs.core.Keyword(null,"pv","pv",55024340),(9800),new cljs.core.Keyword(null,"amt","amt",-1785711538),(2290)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Page D",new cljs.core.Keyword(null,"kp","kp",358367104),(2000),new cljs.core.Keyword(null,"uv","uv",-1197749379),(2780),new cljs.core.Keyword(null,"pv","pv",55024340),(3908),new cljs.core.Keyword(null,"amt","amt",-1785711538),(2000)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Page E",new cljs.core.Keyword(null,"kp","kp",358367104),(2000),new cljs.core.Keyword(null,"uv","uv",-1197749379),(1890),new cljs.core.Keyword(null,"pv","pv",55024340),(4800),new cljs.core.Keyword(null,"amt","amt",-1785711538),(2181)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Page F",new cljs.core.Keyword(null,"kp","kp",358367104),(2000),new cljs.core.Keyword(null,"uv","uv",-1197749379),(2390),new cljs.core.Keyword(null,"pv","pv",55024340),(3800),new cljs.core.Keyword(null,"amt","amt",-1785711538),(2500)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Page G",new cljs.core.Keyword(null,"kp","kp",358367104),(2000),new cljs.core.Keyword(null,"uv","uv",-1197749379),(3490),new cljs.core.Keyword(null,"pv","pv",55024340),(4300),new cljs.core.Keyword(null,"amt","amt",-1785711538),(2100)], null)], null)], null);
if((typeof demo !== 'undefined') && (typeof demo.src !== 'undefined') && (typeof demo.src.catalog !== 'undefined') && (typeof demo.src.catalog.atom !== 'undefined') && (typeof demo.src.catalog.atom.example !== 'undefined') && (typeof demo.src.catalog.atom.example.re_com !== 'undefined') && (typeof demo.src.catalog.atom.example.re_com.plain_table !== 'undefined') && (typeof demo.src.catalog.atom.example.re_com.plain_table.data !== 'undefined')){
} else {
demo.src.catalog.atom.example.re_com.plain_table.data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(demo.src.catalog.atom.example.re_com.plain_table.sample_data);
}
demo.src.catalog.atom.example.re_com.plain_table.cell_styling_fn = (function demo$src$catalog$atom$example$re_com$plain_table$cell_styling_fn(p__59263,p__59264){
var map__59265 = p__59263;
var map__59265__$1 = cljs.core.__destructure_map(map__59265);
var row = map__59265__$1;
var amt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59265__$1,new cljs.core.Keyword(null,"amt","amt",-1785711538));
var uv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59265__$1,new cljs.core.Keyword(null,"uv","uv",-1197749379));
var pv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59265__$1,new cljs.core.Keyword(null,"pv","pv",55024340));
var map__59266 = p__59264;
var map__59266__$1 = cljs.core.__destructure_map(map__59266);
var column = map__59266__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59266__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"uv","uv",-1197749379),id)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),((((2000) > uv))?"#FF4136":((((((5000) > uv)) && ((uv > (2000)))))?"#FFDC00":((((((7500) > uv)) && ((uv > (5000)))))?"#01FF70":(((uv > (7500)))?"#2ECC40":null))))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pv","pv",55024340),id)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),((((2000) > pv))?"#FF4136":((((((5000) > pv)) && ((pv > (2000)))))?"#FFDC00":((((((7500) > pv)) && ((pv > (5000)))))?"#01FF70":(((pv > (7500)))?"#2ECC40":null))))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"amt","amt",-1785711538),id)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),((((2000) > amt))?"#FF4136":((((((5000) > amt)) && ((amt > (2000)))))?"#FFDC00":((((((7500) > amt)) && ((amt > (5000)))))?"#01FF70":(((amt > (7500)))?"#2ECC40":null))))], null);
} else {
return null;
}
}
}
});
demo.src.catalog.atom.example.re_com.plain_table.table_column_headers = (function demo$src$catalog$atom$example$re_com$plain_table$table_column_headers(data,rows,width,height){
var d = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.set,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keys,data));
var col_count = cljs.core.count(d);
var col_width = (function (){var x__4336__auto__ = (80);
var y__4337__auto__ = (((function (){var or__4253__auto__ = width;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (400);
}
})() / col_count) - (5));
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})();
var row_height = (function (){var x__4336__auto__ = (50);
var y__4337__auto__ = ((function (){var or__4253__auto__ = height;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (400);
}
})() / ((2) + (function (){var or__4253__auto__ = rows;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (5);
}
})()));
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),k,new cljs.core.Keyword(null,"header-label","header-label",765876429),cljs.core.name(k),new cljs.core.Keyword(null,"row-label-fn","row-label-fn",1457434308),k,new cljs.core.Keyword(null,"width","width",-384071477),col_width,new cljs.core.Keyword(null,"height","height",1025178622),row_height], null);
}),d));
});
demo.src.catalog.atom.example.re_com.plain_table.show = (function demo$src$catalog$atom$example$re_com$plain_table$show(data){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"demo/src/catalog/atom/example/re_com/plain_table.cljs",new cljs.core.Keyword(null,"line","line",212345235),59], null)),new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"3px",new cljs.core.Keyword(null,"background","background",-863952629),"#808080",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"5px 5px 5px 2px",new cljs.core.Keyword(null,"margin","margin",-995903681),"5px",new cljs.core.Keyword(null,"padding","padding",1660304693),"5px"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data))], null)], null)], null);
});
demo.src.catalog.atom.example.re_com.plain_table.data_tools = (function demo$src$catalog$atom$example$re_com$plain_table$data_tools(){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"demo/src/catalog/atom/example/re_com/plain_table.cljs",new cljs.core.Keyword(null,"line","line",212345235),70], null)),new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"3px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"5px 5px 5px 2px",new cljs.core.Keyword(null,"margin","margin",-995903681),"5px",new cljs.core.Keyword(null,"padding","padding",1660304693),"5px"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.h5","label.h5",-1383169958),"Input Data:"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(demo.src.catalog.atom.example.re_com.plain_table.data,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(demo.src.catalog.atom.example.re_com.plain_table.sample_data,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY));
}),new cljs.core.Keyword(null,"label","label",1718410804),"Empty"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(demo.src.catalog.atom.example.re_com.plain_table.data,demo.src.catalog.atom.example.re_com.plain_table.sample_data);
}),new cljs.core.Keyword(null,"label","label",1718410804),"Default"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(demo.src.catalog.atom.example.re_com.plain_table.data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),(0),new cljs.core.Keyword(null,"uv","uv",-1197749379)], null),(10000));
}),new cljs.core.Keyword(null,"label","label",1718410804),"A -> 10,000"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(demo.src.catalog.atom.example.re_com.plain_table.data,cljs.core.assoc,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(demo.src.catalog.atom.example.re_com.plain_table.data)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Page Q",new cljs.core.Keyword(null,"uv","uv",-1197749379),(1100),new cljs.core.Keyword(null,"pv","pv",55024340),(1100),new cljs.core.Keyword(null,"tv","tv",-1805207359),(1100),new cljs.core.Keyword(null,"amt","amt",-1785711538),(1100)], null)));
}),new cljs.core.Keyword(null,"label","label",1718410804),"Add 'Q'"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(demo.src.catalog.atom.example.re_com.plain_table.data,cljs.core.assoc,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(demo.src.catalog.atom.example.re_com.plain_table.data)))));
}),new cljs.core.Keyword(null,"label","label",1718410804),"Drop Last 2"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(demo.src.catalog.atom.example.re_com.plain_table.data,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.deref(demo.src.catalog.atom.example.re_com.plain_table.data),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.Keyword(null,"new-item","new-item",-1489242961)], null),new cljs.core.Keyword(null,"number","number",1570378438)),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,new cljs.core.Keyword(null,"new-item","new-item",-1489242961),cljs.core.rand_int((7000)));
}),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(demo.src.catalog.atom.example.re_com.plain_table.data))))));
}),new cljs.core.Keyword(null,"label","label",1718410804),"Add :new-item"], null)], null)], null);
});
demo.src.catalog.atom.example.re_com.plain_table.data_update_example = (function demo$src$catalog$atom$example$re_com$plain_table$data_update_example(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59324 = arguments.length;
var i__4865__auto___59325 = (0);
while(true){
if((i__4865__auto___59325 < len__4864__auto___59324)){
args__4870__auto__.push((arguments[i__4865__auto___59325]));

var G__59326 = (i__4865__auto___59325 + (1));
i__4865__auto___59325 = G__59326;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return demo.src.catalog.atom.example.re_com.plain_table.data_update_example.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(demo.src.catalog.atom.example.re_com.plain_table.data_update_example.cljs$core$IFn$_invoke$arity$variadic = (function (p__59286){
var map__59287 = p__59286;
var map__59287__$1 = cljs.core.__destructure_map(map__59287);
var params = map__59287__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59287__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var container_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59287__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59287__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
return (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"demo/src/catalog/atom/example/re_com/plain_table.cljs",new cljs.core.Keyword(null,"line","line",212345235),100], null)),new cljs.core.Keyword(null,"class","class",-2030961996),"data-update-example",new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.chart-part","div.chart-part",1045862618),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"90%"], null)], null),new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.simple_v_table,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"demo/src/catalog/atom/example/re_com/plain_table.cljs",new cljs.core.Keyword(null,"line","line",212345235),106], null)),new cljs.core.Keyword(null,"model","model",331153215),reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data))),new cljs.core.Keyword(null,"columns","columns",1998437288),demo.src.catalog.atom.example.re_com.plain_table.table_column_headers(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data)),(5),(200),(25)),new cljs.core.Keyword(null,"max-rows","max-rows",-2131113613),cljs.core.count(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data))),new cljs.core.Keyword(null,"table-row-line-color","table-row-line-color",680569135),"#00fff0",new cljs.core.Keyword(null,"cell-style","cell-style",1087536089),demo.src.catalog.atom.example.re_com.plain_table.cell_styling_fn,new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"simple-wrapper","simple-wrapper",-507652041),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),false], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.data-tools-part","div.data-tools-part",1281903232),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.src.catalog.atom.example.re_com.plain_table.show,data], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.src.catalog.atom.example.re_com.plain_table.data_tools], null)], null)], null)], null);
});
}));

(demo.src.catalog.atom.example.re_com.plain_table.data_update_example.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(demo.src.catalog.atom.example.re_com.plain_table.data_update_example.cljs$lang$applyTo = (function (seq59285){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59285));
}));

demo.src.catalog.atom.example.re_com.plain_table.example = (function demo$src$catalog$atom$example$re_com$plain_table$example(){
var G__59295 = "Raw Re-com Table (WIP)";
var G__59296 = "Trying to debug re-renders on data change\n\n> Looks like the component _may_ be broken...";
var G__59297 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.layout.centered,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843),new cljs.core.Keyword(null,"width-50","width-50",718512332)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.src.catalog.atom.example.re_com.plain_table.data_update_example,new cljs.core.Keyword(null,"data","data",-232669377),demo.src.catalog.atom.example.re_com.plain_table.data], null)], null);
return (woolybear.ad.utils.demo.cljs$core$IFn$_invoke$arity$3 ? woolybear.ad.utils.demo.cljs$core$IFn$_invoke$arity$3(G__59295,G__59296,G__59297) : woolybear.ad.utils.demo.call(null,G__59295,G__59296,G__59297));
});

//# sourceMappingURL=demo.src.catalog.atom.example.re_com.plain_table.js.map
