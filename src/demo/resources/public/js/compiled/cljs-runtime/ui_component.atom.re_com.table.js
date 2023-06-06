goog.provide('ui_component.atom.re_com.table');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"ui-component.atom.re-com.table",null,9,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ui-component.table"], null);
}),null)),null,302140492,null);
ui_component.atom.re_com.table.table_column_headers = (function ui_component$atom$re_com$table$table_column_headers(data,rows,width,height){
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
ui_component.atom.re_com.table.table_STAR_ = (function ui_component$atom$re_com$table$table_STAR_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___50846 = arguments.length;
var i__4865__auto___50847 = (0);
while(true){
if((i__4865__auto___50847 < len__4864__auto___50846)){
args__4870__auto__.push((arguments[i__4865__auto___50847]));

var G__50848 = (i__4865__auto___50847 + (1));
i__4865__auto___50847 = G__50848;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return ui_component.atom.re_com.table.table_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(ui_component.atom.re_com.table.table_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (p__50835){
var map__50836 = p__50835;
var map__50836__$1 = cljs.core.__destructure_map(map__50836);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50836__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var max_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50836__$1,new cljs.core.Keyword(null,"max-rows","max-rows",-2131113613));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50836__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50836__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var cell_style_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50836__$1,new cljs.core.Keyword(null,"cell-style-fn","cell-style-fn",1050558136));
var on_click_row_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50836__$1,new cljs.core.Keyword(null,"on-click-row-fn","on-click-row-fn",787857205));
var row_line_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50836__$1,new cljs.core.Keyword(null,"row-line-color","row-line-color",1272901700));
if(cljs.core.empty_QMARK_(cljs.core.deref(data))){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.alert_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/re_com/table.cljs",new cljs.core.Keyword(null,"line","line",212345235),31], null)),new cljs.core.Keyword(null,"alert-type","alert-type",405751817),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"heading","heading",-1312171873),"Waiting for data"], null);
} else {
return new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.simple_v_table,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/re_com/table.cljs",new cljs.core.Keyword(null,"line","line",212345235),35], null)),new cljs.core.Keyword(null,"model","model",331153215),data,new cljs.core.Keyword(null,"columns","columns",1998437288),ui_component.atom.re_com.table.table_column_headers(cljs.core.deref(data),(5),(function (){var or__4253__auto__ = width;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (200);
}
})(),height),new cljs.core.Keyword(null,"max-rows","max-rows",-2131113613),(function (){var or__4253__auto__ = max_rows;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.count(cljs.core.deref(data));
}
})(),new cljs.core.Keyword(null,"table-row-line-color","table-row-line-color",680569135),(function (){var or__4253__auto__ = row_line_color;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "#00fff0";
}
})(),new cljs.core.Keyword(null,"on-click-row","on-click-row",-383826673),(function (){var or__4253__auto__ = on_click_row_fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (function (){
return cljs.core.List.EMPTY;
});
}
})(),new cljs.core.Keyword(null,"cell-style","cell-style",1087536089),(function (){var or__4253__auto__ = cell_style_fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (function (){
return cljs.core.List.EMPTY;
});
}
})(),new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"simple-wrapper","simple-wrapper",-507652041),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),false], null)], null)], null)], null);
}
}));

(ui_component.atom.re_com.table.table_STAR_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(ui_component.atom.re_com.table.table_STAR_.cljs$lang$applyTo = (function (seq50834){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50834));
}));

ui_component.atom.re_com.table.non_meta_table = (function ui_component$atom$re_com$table$non_meta_table(var_args){
var args__4870__auto__ = [];
var len__4864__auto___50853 = arguments.length;
var i__4865__auto___50854 = (0);
while(true){
if((i__4865__auto___50854 < len__4864__auto___50853)){
args__4870__auto__.push((arguments[i__4865__auto___50854]));

var G__50855 = (i__4865__auto___50854 + (1));
i__4865__auto___50854 = G__50855;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return ui_component.atom.re_com.table.non_meta_table.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(ui_component.atom.re_com.table.non_meta_table.cljs$core$IFn$_invoke$arity$variadic = (function (p__50838){
var map__50839 = p__50838;
var map__50839__$1 = cljs.core.__destructure_map(map__50839);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50839__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var max_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50839__$1,new cljs.core.Keyword(null,"max-rows","max-rows",-2131113613));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50839__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50839__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var cell_style_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50839__$1,new cljs.core.Keyword(null,"cell-style-fn","cell-style-fn",1050558136));
var on_click_row_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50839__$1,new cljs.core.Keyword(null,"on-click-row-fn","on-click-row-fn",787857205));
var row_line_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50839__$1,new cljs.core.Keyword(null,"row-line-color","row-line-color",1272901700));
var d = ui_component.utils.helpers.resolve_value(data);
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(function (){var or__4253__auto__ = width;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "300px";
}
})(),new cljs.core.Keyword(null,"height","height",1025178622),(function (){var or__4253__auto__ = height;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "250px";
}
})(),new cljs.core.Keyword(null,"margin","margin",-995903681),new cljs.core.Keyword(null,"auto","auto",-566279492)], null)], null),new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.re_com.table.table_STAR_,new cljs.core.Keyword(null,"data","data",-232669377),d,new cljs.core.Keyword(null,"max-rows","max-rows",-2131113613),max_rows,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"row-line-color","row-line-color",1272901700),(function (){var or__4253__auto__ = row_line_color;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "#00fff0";
}
})(),new cljs.core.Keyword(null,"on-click-row","on-click-row",-383826673),(function (){var or__4253__auto__ = on_click_row_fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (function (){
return cljs.core.List.EMPTY;
});
}
})(),new cljs.core.Keyword(null,"cell-style-fn","cell-style-fn",1050558136),(function (){var or__4253__auto__ = cell_style_fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (function (){
return cljs.core.List.EMPTY;
});
}
})()], null)], null);
});
}));

(ui_component.atom.re_com.table.non_meta_table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(ui_component.atom.re_com.table.non_meta_table.cljs$lang$applyTo = (function (seq50837){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50837));
}));

ui_component.atom.re_com.table.meta_table = (function ui_component$atom$re_com$table$meta_table(var_args){
var args__4870__auto__ = [];
var len__4864__auto___50856 = arguments.length;
var i__4865__auto___50857 = (0);
while(true){
if((i__4865__auto___50857 < len__4864__auto___50856)){
args__4870__auto__.push((arguments[i__4865__auto___50857]));

var G__50858 = (i__4865__auto___50857 + (1));
i__4865__auto___50857 = G__50858;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return ui_component.atom.re_com.table.meta_table.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(ui_component.atom.re_com.table.meta_table.cljs$core$IFn$_invoke$arity$variadic = (function (p__50841){
var map__50842 = p__50841;
var map__50842__$1 = cljs.core.__destructure_map(map__50842);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50842__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var max_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50842__$1,new cljs.core.Keyword(null,"max-rows","max-rows",-2131113613));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50842__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50842__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var cell_style_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50842__$1,new cljs.core.Keyword(null,"cell-style-fn","cell-style-fn",1050558136));
var on_click_row_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50842__$1,new cljs.core.Keyword(null,"on-click-row-fn","on-click-row-fn",787857205));
var row_line_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50842__$1,new cljs.core.Keyword(null,"row-line-color","row-line-color",1272901700));
var d = ui_component.utils.helpers.resolve_value(data);
var coc_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card","div.card",-459317104),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(function (){var or__4253__auto__ = width;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "90%";
}
})(),new cljs.core.Keyword(null,"height","height",1025178622),(function (){var or__4253__auto__ = height;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "100%";
}
})(),new cljs.core.Keyword(null,"margin","margin",-995903681),new cljs.core.Keyword(null,"auto","auto",-566279492)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/re_com/table.cljs",new cljs.core.Keyword(null,"line","line",212345235),73], null)),new cljs.core.Keyword(null,"gap","gap",80255254),"2px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.re_com.table.table_STAR_,new cljs.core.Keyword(null,"data","data",-232669377),ui_component.utils.helpers.resolve_value((cljs.core.truth_(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(d)))?new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(d)):cljs.core.PersistentVector.EMPTY)),new cljs.core.Keyword(null,"max-rows","max-rows",-2131113613),(function (){var or__4253__auto__ = max_rows;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.count(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(d)));
}
})(),new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"row-line-color","row-line-color",1272901700),(function (){var or__4253__auto__ = row_line_color;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "#00fff0";
}
})(),new cljs.core.Keyword(null,"on-click-row","on-click-row",-383826673),(function (){var or__4253__auto__ = on_click_row_fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (function (){
return cljs.core.List.EMPTY;
});
}
})(),new cljs.core.Keyword(null,"cell-style-fn","cell-style-fn",1050558136),(function (){var or__4253__auto__ = cell_style_fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (function (){
return cljs.core.List.EMPTY;
});
}
})()], null),((cljs.core.seq(new cljs.core.Keyword(null,"c-o-c","c-o-c",-904294636).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(d))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.popover_anchor_wrapper,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/re_com/table.cljs",new cljs.core.Keyword(null,"line","line",212345235),85], null)),new cljs.core.Keyword(null,"showing?","showing?",2094921488),coc_QMARK_,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"below-center","below-center",-2126885397),new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi zmdi-badge-check",new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),"view chain-of-custody",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(coc_QMARK_,cljs.core.not);
})], null),new cljs.core.Keyword(null,"popover","popover",-1809582136),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.popover_content_wrapper,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/re_com/table.cljs",new cljs.core.Keyword(null,"line","line",212345235),92], null)),new cljs.core.Keyword(null,"title","title",636505583),"Chain-of-Custody",new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.re_com.table.table_STAR_,new cljs.core.Keyword(null,"data","data",-232669377),ui_component.utils.helpers.resolve_value((cljs.core.truth_(new cljs.core.Keyword(null,"c-o-c","c-o-c",-904294636).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(d)))?new cljs.core.Keyword(null,"c-o-c","c-o-c",-904294636).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(d)):cljs.core.PersistentVector.EMPTY)),new cljs.core.Keyword(null,"max-rows","max-rows",-2131113613),(3)], null)], null)], null)], null):null)], null)], null)], null);
});
}));

(ui_component.atom.re_com.table.meta_table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(ui_component.atom.re_com.table.meta_table.cljs$lang$applyTo = (function (seq50840){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50840));
}));

ui_component.atom.re_com.table.table = (function ui_component$atom$re_com$table$table(var_args){
var args__4870__auto__ = [];
var len__4864__auto___50859 = arguments.length;
var i__4865__auto___50860 = (0);
while(true){
if((i__4865__auto___50860 < len__4864__auto___50859)){
args__4870__auto__.push((arguments[i__4865__auto___50860]));

var G__50861 = (i__4865__auto___50860 + (1));
i__4865__auto___50860 = G__50861;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return ui_component.atom.re_com.table.table.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(ui_component.atom.re_com.table.table.cljs$core$IFn$_invoke$arity$variadic = (function (p__50844){
var map__50845 = p__50844;
var map__50845__$1 = cljs.core.__destructure_map(map__50845);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50845__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var max_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50845__$1,new cljs.core.Keyword(null,"max-rows","max-rows",-2131113613));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50845__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50845__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var cell_style_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50845__$1,new cljs.core.Keyword(null,"cell-style-fn","cell-style-fn",1050558136));
var on_click_row_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50845__$1,new cljs.core.Keyword(null,"on-click-row-fn","on-click-row-fn",787857205));
var row_line_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50845__$1,new cljs.core.Keyword(null,"row-line-color","row-line-color",1272901700));
var d = ui_component.utils.helpers.resolve_value(data);
if(cljs.core.truth_(new cljs.core.Keyword(null,"metadata","metadata",1799301597).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(d)))){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.re_com.table.meta_table,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"max-rows","max-rows",-2131113613),max_rows,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"cell-style-fn","cell-style-fn",1050558136),cell_style_fn,new cljs.core.Keyword(null,"on-click-row-fn","on-click-row-fn",787857205),on_click_row_fn,new cljs.core.Keyword(null,"row-line-color","row-line-color",1272901700),row_line_color], null);
} else {
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.re_com.table.non_meta_table,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"max-rows","max-rows",-2131113613),max_rows,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"cell-style-fn","cell-style-fn",1050558136),cell_style_fn,new cljs.core.Keyword(null,"on-click-row-fn","on-click-row-fn",787857205),on_click_row_fn,new cljs.core.Keyword(null,"row-line-color","row-line-color",1272901700),row_line_color], null);
}
}));

(ui_component.atom.re_com.table.table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(ui_component.atom.re_com.table.table.cljs$lang$applyTo = (function (seq50843){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50843));
}));

ui_component.atom.re_com.table.meta_data = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rc","table","rc/table",-564939339),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),ui_component.atom.re_com.table.table,new cljs.core.Keyword(null,"ports","ports",-1014790862),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("port","sink","port/sink",185875552)], null)], null)], null);
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-meta","register-meta",1726375773),ui_component.atom.re_com.table.meta_data], null));

//# sourceMappingURL=ui_component.atom.re_com.table.js.map
