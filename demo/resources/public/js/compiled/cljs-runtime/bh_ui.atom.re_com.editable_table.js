goog.provide('bh_ui.atom.re_com.editable_table');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"bh-ui.atom.re-com.editable-table",null,10,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bh-ui.atom.re-com.editable-table"], null);
}),null)),null,-1668261261,null);
bh_ui.atom.re_com.editable_table.sample_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(bh_ui.utils.example_data.tabular_data);
bh_ui.atom.re_com.editable_table.meta_sample_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(bh_ui.utils.example_data.meta_tabular_data);
bh_ui.atom.re_com.editable_table.meta_coc_sample_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bh_ui.utils.example_data.meta_tabular_data,new cljs.core.Keyword(null,"c-o-c","c-o-c",-904294636),bh_ui.utils.example_data.default_coc));
bh_ui.atom.re_com.editable_table.cell_click = (function bh_ui$atom$re_com$editable_table$cell_click(p__59663,p__59664,k,v){
var vec__59665 = p__59663;
var dataset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59665,(0),null);
var editing_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59665,(1),null);
var editing_cell_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59665,(2),null);
var vec__59668 = p__59664;
var rowidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59668,(0),null);
var colidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59668,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),colidx)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),rowidx)))){
return cljs.core.reset_BANG_(dataset,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(v,cljs.core.deref(dataset))));
} else {
cljs.core.reset_BANG_(editing_cell,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"row","row",-570139521),rowidx,new cljs.core.Keyword(null,"col","col",-1959363084),colidx,k,v]));

return cljs.core.reset_BANG_(editing_cell_content,cljs.core.str.cljs$core$IFn$_invoke$arity$1(v));
}
});
bh_ui.atom.re_com.editable_table.edit_comp = (function bh_ui$atom$re_com$editable_table$edit_comp(p__59672){
var vec__59673 = p__59672;
var dataset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59673,(0),null);
var editing_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59673,(1),null);
var editing_cell_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59673,(2),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#editable","div#editable",-729102294),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle",new cljs.core.Keyword(null,"width","width",-384071477),re_com.util.px((195)),new cljs.core.Keyword(null,"height","height",1025178622),re_com.util.px((30))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#input","div#input",1774221019),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null)], null),new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"bh_ui/atom/re_com/editable_table.cljs",new cljs.core.Keyword(null,"line","line",212345235),35], null)),new cljs.core.Keyword(null,"model","model",331153215),editing_cell_content,new cljs.core.Keyword(null,"width","width",-384071477),re_com.util.px((135)),new cljs.core.Keyword(null,"height","height",1025178622),re_com.util.px((25)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align-items","align-items",-267946462),"bottom"], null),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__59671_SHARP_){
return cljs.core.reset_BANG_(editing_cell_content,p1__59671_SHARP_);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#check","div#check",1401953909),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle",new cljs.core.Keyword(null,"padding","padding",1660304693),re_com.util.px((2))], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"bh_ui/atom/re_com/editable_table.cljs",new cljs.core.Keyword(null,"line","line",212345235),47], null)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block"], null),new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-check",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"smaller","smaller",-1619801498),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dataset,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(editing_cell)),cljs.core.key(cljs.core.last(cljs.core.deref(editing_cell)))], null),cljs.core.deref(editing_cell_content));

cljs.core.reset_BANG_(editing_cell,null);

return cljs.core.reset_BANG_(editing_cell_content,null);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#cancel","div#cancel",-242852823),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle",new cljs.core.Keyword(null,"padding","padding",1660304693),re_com.util.px((2))], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"bh_ui/atom/re_com/editable_table.cljs",new cljs.core.Keyword(null,"line","line",212345235),61], null)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block"], null),new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-delete",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"smaller","smaller",-1619801498),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(editing_cell_content,null);

return cljs.core.reset_BANG_(editing_cell,null);
})], null)], null)], null);
});
bh_ui.atom.re_com.editable_table.span_with_border = (function bh_ui$atom$re_com$editable_table$span_with_border(p__59676){
var map__59677 = p__59676;
var map__59677__$1 = cljs.core.__destructure_map(map__59677);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59677__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var dataset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59677__$1,new cljs.core.Keyword(null,"dataset","dataset",1159262238));
var colname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59677__$1,new cljs.core.Keyword(null,"colname","colname",-7746977));
var colidx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59677__$1,new cljs.core.Keyword(null,"colidx","colidx",962889478));
var font_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59677__$1,new cljs.core.Keyword(null,"font-size","font-size",-1847940346));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59677__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59677__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var background = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59677__$1,new cljs.core.Keyword(null,"background","background",-863952629));
var rowidx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59677__$1,new cljs.core.Keyword(null,"rowidx","rowidx",-936343819));
var editing_cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59677__$1,new cljs.core.Keyword(null,"editing-cell","editing-cell",-518528619));
var editing_cell_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59677__$1,new cljs.core.Keyword(null,"editing-cell-content","editing-cell-content",1836955672));
var is_editing_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(editing_cell)),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(editing_cell))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rowidx,colidx], null)));
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.deref(is_editing_QMARK_);
if(cljs.core.truth_(and__4251__auto__)){
return (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(colidx,(-1))));
} else {
return and__4251__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.re_com.editable_table.edit_comp,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dataset,editing_cell,editing_cell_content], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"text-overflow","text-overflow",-1022366814),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622)],["ellipsis","black","center","middle","nowrap",font_size,"hidden",background,re_com.util.px(width),"pointer","inline-block","static","solid grey 2px","2px",re_com.util.px(height)]),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return bh_ui.atom.re_com.editable_table.cell_click(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dataset,editing_cell,editing_cell_content], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rowidx,colidx], null),colname,name);
})], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)], null);
}
});
bh_ui.atom.re_com.editable_table.build_header = (function bh_ui$atom$re_com$editable_table$build_header(p__59682,height,vals){
var vec__59683 = p__59682;
var dataset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59683,(0),null);
var editing_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59683,(1),null);
var editing_cell_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59683,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"headers",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,v){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.re_com.editable_table.span_with_border,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"colidx","colidx",962889478),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"editing-cell","editing-cell",-518528619),new cljs.core.Keyword(null,"rowidx","rowidx",-936343819),new cljs.core.Keyword(null,"editing-cell-content","editing-cell-content",1836955672),new cljs.core.Keyword(null,"dataset","dataset",1159262238),new cljs.core.Keyword(null,"height","height",1025178622)],[(-1),(20),v,(195),"#60A0D8",editing_cell,(-1),editing_cell_content,dataset,height])], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx], null)], null));
}),vals))], null);
});
bh_ui.atom.re_com.editable_table.build_row = (function bh_ui$atom$re_com$editable_table$build_row(p__59690,row_height,row_index,row){
var vec__59691 = p__59690;
var dataset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59691,(0),null);
var editing_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59691,(1),null);
var editing_cell_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59691,(2),null);
var values = cljs.core.vals(row);
var ks = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.keys(row));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["row",cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_index)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,v){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.re_com.editable_table.span_with_border,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"colidx","colidx",962889478),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"editing-cell","editing-cell",-518528619),new cljs.core.Keyword(null,"rowidx","rowidx",-936343819),new cljs.core.Keyword(null,"editing-cell-content","editing-cell-content",1836955672),new cljs.core.Keyword(null,"dataset","dataset",1159262238),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"colname","colname",-7746977)],[idx,(14),v,(195),"#ffffff",editing_cell,row_index,editing_cell_content,dataset,row_height,cljs.core.get.cljs$core$IFn$_invoke$arity$2(ks,idx)])], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_index,idx,cljs.core.get.cljs$core$IFn$_invoke$arity$2(ks,idx)], null)], null));
}),values))], null);
});
bh_ui.atom.re_com.editable_table.table_STAR_ = (function bh_ui$atom$re_com$editable_table$table_STAR_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59722 = arguments.length;
var i__4865__auto___59723 = (0);
while(true){
if((i__4865__auto___59723 < len__4864__auto___59722)){
args__4870__auto__.push((arguments[i__4865__auto___59723]));

var G__59724 = (i__4865__auto___59723 + (1));
i__4865__auto___59723 = G__59724;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return bh_ui.atom.re_com.editable_table.table_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(bh_ui.atom.re_com.editable_table.table_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (p__59697){
var map__59698 = p__59697;
var map__59698__$1 = cljs.core.__destructure_map(map__59698);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59698__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59698__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59698__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var max_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59698__$1,new cljs.core.Keyword(null,"max-rows","max-rows",-2131113613));
var dataset = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59694_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__59700){
var vec__59701 = p__59700;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59701,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59701,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([k,cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)]);
}),p1__59694_SHARP_));
}),cljs.core.deref(data))));
var editing_cell = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var editing_cell_content = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var light_blue = "#d860a0";
var blue = "#60A0D8";
var gold = "#d89860";
var green = "#60d898";
var white = "#ffffff";
var fib_ratio = 0.618;
var unit_50 = (50);
var unit_31 = Math.round((unit_50 * fib_ratio));
var num_rows = (function (){var or__4253__auto__ = max_rows;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (5);
}
})();
var row_height = unit_31;
var total_row_height = (num_rows * row_height);
var width_of_main_row_content = Math.round((total_row_height / fib_ratio));
return (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_table,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"bh_ui/atom/re_com/editable_table.cljs",new cljs.core.Keyword(null,"line","line",212345235),181], null)),new cljs.core.Keyword(null,"model","model",331153215),dataset,new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"inherit",new cljs.core.Keyword(null,"row-renderer","row-renderer",314053346),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(bh_ui.atom.re_com.editable_table.build_row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dataset,editing_cell,editing_cell_content], null),row_height),new cljs.core.Keyword(null,"row-content-width","row-content-width",-1986261648),(1000),new cljs.core.Keyword(null,"row-height","row-height",527360749),row_height,new cljs.core.Keyword(null,"max-row-viewport-height","max-row-viewport-height",2061202688),total_row_height,new cljs.core.Keyword(null,"column-header-renderer","column-header-renderer",-1886265578),(function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.re_com.editable_table.build_header,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dataset,editing_cell,editing_cell_content], null),(row_height + (10)),cljs.core.into.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(data),(0))))], null);
}),new cljs.core.Keyword(null,"column-header-height","column-header-height",-1680092558),(40)], null);
});
}));

(bh_ui.atom.re_com.editable_table.table_STAR_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bh_ui.atom.re_com.editable_table.table_STAR_.cljs$lang$applyTo = (function (seq59695){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59695));
}));

bh_ui.atom.re_com.editable_table.non_meta_table = (function bh_ui$atom$re_com$editable_table$non_meta_table(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59729 = arguments.length;
var i__4865__auto___59730 = (0);
while(true){
if((i__4865__auto___59730 < len__4864__auto___59729)){
args__4870__auto__.push((arguments[i__4865__auto___59730]));

var G__59731 = (i__4865__auto___59730 + (1));
i__4865__auto___59730 = G__59731;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return bh_ui.atom.re_com.editable_table.non_meta_table.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(bh_ui.atom.re_com.editable_table.non_meta_table.cljs$core$IFn$_invoke$arity$variadic = (function (p__59708){
var map__59709 = p__59708;
var map__59709__$1 = cljs.core.__destructure_map(map__59709);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59709__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var max_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59709__$1,new cljs.core.Keyword(null,"max-rows","max-rows",-2131113613));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59709__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59709__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var cell_style_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59709__$1,new cljs.core.Keyword(null,"cell-style-fn","cell-style-fn",1050558136));
var on_click_row_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59709__$1,new cljs.core.Keyword(null,"on-click-row-fn","on-click-row-fn",787857205));
var row_line_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59709__$1,new cljs.core.Keyword(null,"row-line-color","row-line-color",1272901700));
var d = bh_ui.utils.helpers.resolve_value(data);
return (function (){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.re_com.editable_table.table_STAR_,new cljs.core.Keyword(null,"data","data",-232669377),d,new cljs.core.Keyword(null,"max-rows","max-rows",-2131113613),max_rows,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"row-line-color","row-line-color",1272901700),row_line_color,new cljs.core.Keyword(null,"on-click-row","on-click-row",-383826673),on_click_row_fn,new cljs.core.Keyword(null,"cell-style-fn","cell-style-fn",1050558136),cell_style_fn], null);
});
}));

(bh_ui.atom.re_com.editable_table.non_meta_table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bh_ui.atom.re_com.editable_table.non_meta_table.cljs$lang$applyTo = (function (seq59707){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59707));
}));

bh_ui.atom.re_com.editable_table.meta_table = (function bh_ui$atom$re_com$editable_table$meta_table(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59732 = arguments.length;
var i__4865__auto___59733 = (0);
while(true){
if((i__4865__auto___59733 < len__4864__auto___59732)){
args__4870__auto__.push((arguments[i__4865__auto___59733]));

var G__59734 = (i__4865__auto___59733 + (1));
i__4865__auto___59733 = G__59734;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return bh_ui.atom.re_com.editable_table.meta_table.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(bh_ui.atom.re_com.editable_table.meta_table.cljs$core$IFn$_invoke$arity$variadic = (function (p__59712){
var map__59713 = p__59712;
var map__59713__$1 = cljs.core.__destructure_map(map__59713);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59713__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var max_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59713__$1,new cljs.core.Keyword(null,"max-rows","max-rows",-2131113613));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59713__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59713__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var cell_style_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59713__$1,new cljs.core.Keyword(null,"cell-style-fn","cell-style-fn",1050558136));
var on_click_row_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59713__$1,new cljs.core.Keyword(null,"on-click-row-fn","on-click-row-fn",787857205));
var row_line_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59713__$1,new cljs.core.Keyword(null,"row-line-color","row-line-color",1272901700));
var d = bh_ui.utils.helpers.resolve_value(data);
return (function (){
var coc_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card","div.card",-459317104),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(function (){var or__4253__auto__ = width;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "100%";
}
})(),new cljs.core.Keyword(null,"height","height",1025178622),(function (){var or__4253__auto__ = height;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "100%";
}
})(),new cljs.core.Keyword(null,"margin","margin",-995903681),new cljs.core.Keyword(null,"auto","auto",-566279492)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"metadata","metadata",1799301597).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(d)))], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"bh_ui/atom/re_com/editable_table.cljs",new cljs.core.Keyword(null,"line","line",212345235),239], null)),new cljs.core.Keyword(null,"gap","gap",80255254),"2px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.re_com.editable_table.table_STAR_,new cljs.core.Keyword(null,"data","data",-232669377),bh_ui.utils.helpers.resolve_value((cljs.core.truth_(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(d)))?new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(d)):cljs.core.PersistentVector.EMPTY)),new cljs.core.Keyword(null,"max-rows","max-rows",-2131113613),max_rows,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"row-line-color","row-line-color",1272901700),row_line_color,new cljs.core.Keyword(null,"on-click-row","on-click-row",-383826673),on_click_row_fn,new cljs.core.Keyword(null,"cell-style-fn","cell-style-fn",1050558136),cell_style_fn], null),((cljs.core.seq(new cljs.core.Keyword(null,"c-o-c","c-o-c",-904294636).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(d))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.popover_anchor_wrapper,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"bh_ui/atom/re_com/editable_table.cljs",new cljs.core.Keyword(null,"line","line",212345235),251], null)),new cljs.core.Keyword(null,"showing?","showing?",2094921488),coc_QMARK_,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"below-center","below-center",-2126885397),new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi zmdi-badge-check",new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),"view chain-of-custody",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(coc_QMARK_,cljs.core.not);
})], null),new cljs.core.Keyword(null,"popover","popover",-1809582136),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.popover_content_wrapper,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"bh_ui/atom/re_com/editable_table.cljs",new cljs.core.Keyword(null,"line","line",212345235),258], null)),new cljs.core.Keyword(null,"title","title",636505583),"Chain-of-Custody",new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.re_com.editable_table.table_STAR_,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"c-o-c","c-o-c",-904294636).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(d)),new cljs.core.Keyword(null,"width","width",-384071477),"400px",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"400px",new cljs.core.Keyword(null,"max-rows","max-rows",-2131113613),(3)], null)], null)], null)], null):null)], null)], null)], null);
});
}));

(bh_ui.atom.re_com.editable_table.meta_table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bh_ui.atom.re_com.editable_table.meta_table.cljs$lang$applyTo = (function (seq59711){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59711));
}));

bh_ui.atom.re_com.editable_table.table = (function bh_ui$atom$re_com$editable_table$table(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59739 = arguments.length;
var i__4865__auto___59740 = (0);
while(true){
if((i__4865__auto___59740 < len__4864__auto___59739)){
args__4870__auto__.push((arguments[i__4865__auto___59740]));

var G__59741 = (i__4865__auto___59740 + (1));
i__4865__auto___59740 = G__59741;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return bh_ui.atom.re_com.editable_table.table.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(bh_ui.atom.re_com.editable_table.table.cljs$core$IFn$_invoke$arity$variadic = (function (p__59715){
var map__59716 = p__59715;
var map__59716__$1 = cljs.core.__destructure_map(map__59716);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59716__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var max_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59716__$1,new cljs.core.Keyword(null,"max-rows","max-rows",-2131113613));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59716__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59716__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var cell_style_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59716__$1,new cljs.core.Keyword(null,"cell-style-fn","cell-style-fn",1050558136));
var on_click_row_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59716__$1,new cljs.core.Keyword(null,"on-click-row-fn","on-click-row-fn",787857205));
var row_line_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59716__$1,new cljs.core.Keyword(null,"row-line-color","row-line-color",1272901700));
var d = bh_ui.utils.helpers.resolve_value(data);
if(cljs.core.truth_(new cljs.core.Keyword(null,"metadata","metadata",1799301597).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(d)))){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.re_com.editable_table.meta_table,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"max-rows","max-rows",-2131113613),max_rows,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"cell-style-fn","cell-style-fn",1050558136),cell_style_fn,new cljs.core.Keyword(null,"on-click-row-fn","on-click-row-fn",787857205),on_click_row_fn,new cljs.core.Keyword(null,"row-line-color","row-line-color",1272901700),row_line_color], null);
} else {
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.re_com.editable_table.non_meta_table,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"max-rows","max-rows",-2131113613),max_rows,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"cell-style-fn","cell-style-fn",1050558136),cell_style_fn,new cljs.core.Keyword(null,"on-click-row-fn","on-click-row-fn",787857205),on_click_row_fn,new cljs.core.Keyword(null,"row-line-color","row-line-color",1272901700),row_line_color], null);
}
}));

(bh_ui.atom.re_com.editable_table.table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bh_ui.atom.re_com.editable_table.table.cljs$lang$applyTo = (function (seq59714){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59714));
}));


//# sourceMappingURL=bh_ui.atom.re_com.editable_table.js.map
