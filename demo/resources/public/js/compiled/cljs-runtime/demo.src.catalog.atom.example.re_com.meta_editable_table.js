goog.provide('demo.src.catalog.atom.example.re_com.meta_editable_table');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"demo.src.catalog.atom.example.re-com.meta-editable-table",null,8,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["demo.src.catalog.atom.example.re-com.meta-editable-table"], null);
}),null)),null,1526524820,null);
if((typeof demo !== 'undefined') && (typeof demo.src !== 'undefined') && (typeof demo.src.catalog !== 'undefined') && (typeof demo.src.catalog.atom !== 'undefined') && (typeof demo.src.catalog.atom.example !== 'undefined') && (typeof demo.src.catalog.atom.example.re_com !== 'undefined') && (typeof demo.src.catalog.atom.example.re_com.meta_editable_table !== 'undefined') && (typeof demo.src.catalog.atom.example.re_com.meta_editable_table.data !== 'undefined')){
} else {
demo.src.catalog.atom.example.re_com.meta_editable_table.data = bh_ui.atom.re_com.editable_table.meta_sample_data;
}
demo.src.catalog.atom.example.re_com.meta_editable_table.cell_styling_fn = (function demo$src$catalog$atom$example$re_com$meta_editable_table$cell_styling_fn(p__59794,p__59795){
var map__59796 = p__59794;
var map__59796__$1 = cljs.core.__destructure_map(map__59796);
var row = map__59796__$1;
var amt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59796__$1,new cljs.core.Keyword(null,"amt","amt",-1785711538));
var uv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59796__$1,new cljs.core.Keyword(null,"uv","uv",-1197749379));
var pv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59796__$1,new cljs.core.Keyword(null,"pv","pv",55024340));
var map__59797 = p__59795;
var map__59797__$1 = cljs.core.__destructure_map(map__59797);
var column = map__59797__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59797__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
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
demo.src.catalog.atom.example.re_com.meta_editable_table.example = (function demo$src$catalog$atom$example$re_com$meta_editable_table$example(){
var G__59798 = "Editable Table (with Metadata)";
var G__59799 = "We're using the `v-table` from [Re-com](https://github.com/Day8/re-com)\n\n> This example has data ***with*** metadata!";
var G__59800 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.layout.centered,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.re_com.editable_table.table,new cljs.core.Keyword(null,"data","data",-232669377),demo.src.catalog.atom.example.re_com.meta_editable_table.data,new cljs.core.Keyword(null,"max-rows","max-rows",-2131113613),(5),new cljs.core.Keyword(null,"on-click-row","on-click-row",-383826673),(function (){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"demo.src.catalog.atom.example.re-com.meta-editable-table",null,48,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["on-click-row"], null);
}),null)),null,-2133562019,null);
}),new cljs.core.Keyword(null,"cell-style","cell-style",1087536089),demo.src.catalog.atom.example.re_com.meta_editable_table.cell_styling_fn], null)], null);
var G__59801 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("layout","centered","layout/centered",24685628,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843),new cljs.core.Keyword(null,"width-50","width-50",718512332)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("table","table","table/table",1267492441,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Keyword(null,"max-rows","max-rows",-2131113613),(5),new cljs.core.Keyword(null,"on-click-row","on-click-row",-383826673),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("log","info","log/info",1323354801,null),"on-click-row")),new cljs.core.Keyword(null,"cell-style","cell-style",1087536089),new cljs.core.Symbol(null,"cell-styling-fn","cell-styling-fn",1879136292,null)], null)], null);
return (woolybear.ad.utils.demo.cljs$core$IFn$_invoke$arity$4 ? woolybear.ad.utils.demo.cljs$core$IFn$_invoke$arity$4(G__59798,G__59799,G__59800,G__59801) : woolybear.ad.utils.demo.call(null,G__59798,G__59799,G__59800,G__59801));
});

//# sourceMappingURL=demo.src.catalog.atom.example.re_com.meta_editable_table.js.map
