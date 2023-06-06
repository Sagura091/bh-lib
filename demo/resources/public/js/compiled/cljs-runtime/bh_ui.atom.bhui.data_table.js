goog.provide('bh_ui.atom.bhui.data_table');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"bh-ui.atom.bhui.data-table",null,9,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bh-ui.atom.bhui.data-table"], null);
}),null)),null,-1548612129,null);
bh_ui.atom.bhui.data_table.sample_data = bh_ui.utils.example_data.tabular_data;
bh_ui.atom.bhui.data_table.sample_data_2 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["string 1","string 2","string 3"], null);
bh_ui.atom.bhui.data_table.make_row_cell = (function bh_ui$atom$bhui$data_table$make_row_cell(data,columnId){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$fixed_data_table_2.Column,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"header","header",119441134),(function (){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$fixed_data_table_2.DataCell,cljs.core.name(columnId)], null));
}),new cljs.core.Keyword(null,"columnKey","columnKey",-249078693),cljs.core.name(columnId),new cljs.core.Keyword(null,"cell","cell",764245084),(function (x){
var map__59604 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var map__59604__$1 = cljs.core.__destructure_map(map__59604);
var all = map__59604__$1;
var rowIndex = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59604__$1,new cljs.core.Keyword(null,"rowIndex","rowIndex",-821650233));
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$fixed_data_table_2.DataCell,(function (){var G__59605 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data,rowIndex);
return (columnId.cljs$core$IFn$_invoke$arity$1 ? columnId.cljs$core$IFn$_invoke$arity$1(G__59605) : columnId.call(null,G__59605));
})()], null));
}),new cljs.core.Keyword(null,"width","width",-384071477),(200)], null)], null);
});
bh_ui.atom.bhui.data_table.table = (function bh_ui$atom$bhui$data_table$table(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59618 = arguments.length;
var i__4865__auto___59619 = (0);
while(true){
if((i__4865__auto___59619 < len__4864__auto___59618)){
args__4870__auto__.push((arguments[i__4865__auto___59619]));

var G__59620 = (i__4865__auto___59619 + (1));
i__4865__auto___59619 = G__59620;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return bh_ui.atom.bhui.data_table.table.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(bh_ui.atom.bhui.data_table.table.cljs$core$IFn$_invoke$arity$variadic = (function (p__59614){
var map__59615 = p__59614;
var map__59615__$1 = cljs.core.__destructure_map(map__59615);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59615__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var config_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59615__$1,new cljs.core.Keyword(null,"config-data","config-data",1933573865));
var d = bh_ui.utils.helpers.resolve_value(data);
var c = bh_ui.utils.helpers.resolve_value(config_data);
var columns = cljs.core.keys(cljs.core.first(cljs.core.deref(d)));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$fixed_data_table_2.Table,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"rowHeight","rowHeight",1730581244),(30),new cljs.core.Keyword(null,"rowsCount","rowsCount",1296562463),cljs.core.count(cljs.core.deref(d)),new cljs.core.Keyword(null,"width","width",-384071477),(500),new cljs.core.Keyword(null,"height","height",1025178622),(500),new cljs.core.Keyword(null,"headerHeight","headerHeight",402252973),(50)], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59606_SHARP_){
return bh_ui.atom.bhui.data_table.make_row_cell(cljs.core.deref(d),p1__59606_SHARP_);
}),columns)));
}));

(bh_ui.atom.bhui.data_table.table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bh_ui.atom.bhui.data_table.table.cljs$lang$applyTo = (function (seq59607){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59607));
}));


//# sourceMappingURL=bh_ui.atom.bhui.data_table.js.map
