goog.provide('ui_component.atom.bhui.table');
ui_component.atom.bhui.table.sample_data = ui_component.utils.example_data.tabular_data;
ui_component.atom.bhui.table.sample_meta_data = ui_component.utils.example_data.meta_tabular_data;
ui_component.atom.bhui.table.sample_meta_coc_data = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ui_component.utils.example_data.meta_tabular_data,new cljs.core.Keyword(null,"c-o-c","c-o-c",-904294636),ui_component.utils.example_data.default_coc);
ui_component.atom.bhui.table.random_data = ui_component.utils.example_data.random_tabular_data;
ui_component.atom.bhui.table.random_data_meta = ui_component.utils.example_data.random_meta_tabular_data;
ui_component.atom.bhui.table.table_STAR_ = (function ui_component$atom$bhui$table$table_STAR_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59481 = arguments.length;
var i__4865__auto___59482 = (0);
while(true){
if((i__4865__auto___59482 < len__4864__auto___59481)){
args__4870__auto__.push((arguments[i__4865__auto___59482]));

var G__59483 = (i__4865__auto___59482 + (1));
i__4865__auto___59482 = G__59483;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return ui_component.atom.bhui.table.table_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(ui_component.atom.bhui.table.table_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (p__59439){
var map__59440 = p__59439;
var map__59440__$1 = cljs.core.__destructure_map(map__59440);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59440__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var max_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59440__$1,new cljs.core.Keyword(null,"max-rows","max-rows",-2131113613));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59440__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59440__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var cell_style_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59440__$1,new cljs.core.Keyword(null,"cell-style-fn","cell-style-fn",1050558136));
var on_click_row_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59440__$1,new cljs.core.Keyword(null,"on-click-row-fn","on-click-row-fn",787857205));
var row_line_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59440__$1,new cljs.core.Keyword(null,"row-line-color","row-line-color",1272901700));
if(cljs.core.empty_QMARK_(data)){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.alert_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/bhui/table.cljs",new cljs.core.Keyword(null,"line","line",212345235),25], null)),new cljs.core.Keyword(null,"alert-type","alert-type",405751817),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"heading","heading",-1312171873),"Waiting for data"], null);
} else {
var header = cljs.core.keys(cljs.core.first(data));
var body = data;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.table-container","div.table-container",-1574957621),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(function (){var or__4253__auto__ = width;
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
})(),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"scroll","scroll",971553779)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table.is-hoverable","table.table.is-hoverable",-732909642),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"sticky","sticky",-2121213869),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"darkslategray","darkslategray",348576839)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function ui_component$atom$bhui$table$iter__59441(s__59442){
return (new cljs.core.LazySeq(null,(function (){
var s__59442__$1 = s__59442;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__59442__$1);
if(temp__5753__auto__){
var s__59442__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__59442__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__59442__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__59444 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__59443 = (0);
while(true){
if((i__59443 < size__4651__auto__)){
var vec__59447 = cljs.core._nth(c__4650__auto__,i__59443);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59447,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59447,(1),null);
cljs.core.chunk_append(b__59444,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)));

var G__59484 = (i__59443 + (1));
i__59443 = G__59484;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59444),ui_component$atom$bhui$table$iter__59441(cljs.core.chunk_rest(s__59442__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59444),null);
}
} else {
var vec__59451 = cljs.core.first(s__59442__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59451,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59451,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)),ui_component$atom$bhui$table$iter__59441(cljs.core.rest(s__59442__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,header));
})())], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function ui_component$atom$bhui$table$iter__59454(s__59455){
return (new cljs.core.LazySeq(null,(function (){
var s__59455__$1 = s__59455;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__59455__$1);
if(temp__5753__auto__){
var s__59455__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__59455__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__59455__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__59457 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__59456 = (0);
while(true){
if((i__59456 < size__4651__auto__)){
var vec__59458 = cljs.core._nth(c__4650__auto__,i__59456);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59458,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59458,(1),null);
cljs.core.chunk_append(b__59457,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4652__auto__ = ((function (i__59456,vec__59458,idx,b,c__4650__auto__,size__4651__auto__,b__59457,s__59455__$2,temp__5753__auto__,header,body,map__59440,map__59440__$1,data,max_rows,width,height,cell_style_fn,on_click_row_fn,row_line_color){
return (function ui_component$atom$bhui$table$iter__59454_$_iter__59461(s__59462){
return (new cljs.core.LazySeq(null,((function (i__59456,vec__59458,idx,b,c__4650__auto__,size__4651__auto__,b__59457,s__59455__$2,temp__5753__auto__,header,body,map__59440,map__59440__$1,data,max_rows,width,height,cell_style_fn,on_click_row_fn,row_line_color){
return (function (){
var s__59462__$1 = s__59462;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__59462__$1);
if(temp__5753__auto____$1){
var s__59462__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__59462__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__59462__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__59464 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__59463 = (0);
while(true){
if((i__59463 < size__4651__auto____$1)){
var key = cljs.core._nth(c__4650__auto____$1,i__59463);
cljs.core.chunk_append(b__59464,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)));

var G__59485 = (i__59463 + (1));
i__59463 = G__59485;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59464),ui_component$atom$bhui$table$iter__59454_$_iter__59461(cljs.core.chunk_rest(s__59462__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59464),null);
}
} else {
var key = cljs.core.first(s__59462__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)),ui_component$atom$bhui$table$iter__59454_$_iter__59461(cljs.core.rest(s__59462__$2)));
}
} else {
return null;
}
break;
}
});})(i__59456,vec__59458,idx,b,c__4650__auto__,size__4651__auto__,b__59457,s__59455__$2,temp__5753__auto__,header,body,map__59440,map__59440__$1,data,max_rows,width,height,cell_style_fn,on_click_row_fn,row_line_color))
,null,null));
});})(i__59456,vec__59458,idx,b,c__4650__auto__,size__4651__auto__,b__59457,s__59455__$2,temp__5753__auto__,header,body,map__59440,map__59440__$1,data,max_rows,width,height,cell_style_fn,on_click_row_fn,row_line_color))
;
return iter__4652__auto__(header);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)));

var G__59487 = (i__59456 + (1));
i__59456 = G__59487;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59457),ui_component$atom$bhui$table$iter__59454(cljs.core.chunk_rest(s__59455__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59457),null);
}
} else {
var vec__59465 = cljs.core.first(s__59455__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59465,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59465,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4652__auto__ = ((function (vec__59465,idx,b,s__59455__$2,temp__5753__auto__,header,body,map__59440,map__59440__$1,data,max_rows,width,height,cell_style_fn,on_click_row_fn,row_line_color){
return (function ui_component$atom$bhui$table$iter__59454_$_iter__59468(s__59469){
return (new cljs.core.LazySeq(null,(function (){
var s__59469__$1 = s__59469;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__59469__$1);
if(temp__5753__auto____$1){
var s__59469__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__59469__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__59469__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__59471 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__59470 = (0);
while(true){
if((i__59470 < size__4651__auto__)){
var key = cljs.core._nth(c__4650__auto__,i__59470);
cljs.core.chunk_append(b__59471,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)));

var G__59488 = (i__59470 + (1));
i__59470 = G__59488;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59471),ui_component$atom$bhui$table$iter__59454_$_iter__59468(cljs.core.chunk_rest(s__59469__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59471),null);
}
} else {
var key = cljs.core.first(s__59469__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)),ui_component$atom$bhui$table$iter__59454_$_iter__59468(cljs.core.rest(s__59469__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__59465,idx,b,s__59455__$2,temp__5753__auto__,header,body,map__59440,map__59440__$1,data,max_rows,width,height,cell_style_fn,on_click_row_fn,row_line_color))
;
return iter__4652__auto__(header);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)),ui_component$atom$bhui$table$iter__59454(cljs.core.rest(s__59455__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,body));
})())], null)], null)], null);
}
}));

(ui_component.atom.bhui.table.table_STAR_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(ui_component.atom.bhui.table.table_STAR_.cljs$lang$applyTo = (function (seq59438){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59438));
}));

ui_component.atom.bhui.table.non_meta_table = (function ui_component$atom$bhui$table$non_meta_table(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59489 = arguments.length;
var i__4865__auto___59490 = (0);
while(true){
if((i__4865__auto___59490 < len__4864__auto___59489)){
args__4870__auto__.push((arguments[i__4865__auto___59490]));

var G__59491 = (i__4865__auto___59490 + (1));
i__4865__auto___59490 = G__59491;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return ui_component.atom.bhui.table.non_meta_table.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(ui_component.atom.bhui.table.non_meta_table.cljs$core$IFn$_invoke$arity$variadic = (function (p__59473){
var map__59474 = p__59473;
var map__59474__$1 = cljs.core.__destructure_map(map__59474);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59474__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var max_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59474__$1,new cljs.core.Keyword(null,"max-rows","max-rows",-2131113613));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59474__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59474__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var cell_style_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59474__$1,new cljs.core.Keyword(null,"cell-style-fn","cell-style-fn",1050558136));
var on_click_row_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59474__$1,new cljs.core.Keyword(null,"on-click-row-fn","on-click-row-fn",787857205));
var row_line_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59474__$1,new cljs.core.Keyword(null,"row-line-color","row-line-color",1272901700));
var d = ui_component.utils.helpers.resolve_value(data);
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.bhui.table.table_STAR_,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.deref(d),new cljs.core.Keyword(null,"max-rows","max-rows",-2131113613),max_rows,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"row-line-color","row-line-color",1272901700),row_line_color,new cljs.core.Keyword(null,"on-click-row","on-click-row",-383826673),on_click_row_fn,new cljs.core.Keyword(null,"cell-style-fn","cell-style-fn",1050558136),cell_style_fn], null);
}));

(ui_component.atom.bhui.table.non_meta_table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(ui_component.atom.bhui.table.non_meta_table.cljs$lang$applyTo = (function (seq59472){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59472));
}));

ui_component.atom.bhui.table.meta_table = (function ui_component$atom$bhui$table$meta_table(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59492 = arguments.length;
var i__4865__auto___59493 = (0);
while(true){
if((i__4865__auto___59493 < len__4864__auto___59492)){
args__4870__auto__.push((arguments[i__4865__auto___59493]));

var G__59494 = (i__4865__auto___59493 + (1));
i__4865__auto___59493 = G__59494;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return ui_component.atom.bhui.table.meta_table.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(ui_component.atom.bhui.table.meta_table.cljs$core$IFn$_invoke$arity$variadic = (function (p__59476){
var map__59477 = p__59476;
var map__59477__$1 = cljs.core.__destructure_map(map__59477);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59477__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var max_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59477__$1,new cljs.core.Keyword(null,"max-rows","max-rows",-2131113613));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59477__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59477__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var cell_style_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59477__$1,new cljs.core.Keyword(null,"cell-style-fn","cell-style-fn",1050558136));
var on_click_row_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59477__$1,new cljs.core.Keyword(null,"on-click-row-fn","on-click-row-fn",787857205));
var row_line_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59477__$1,new cljs.core.Keyword(null,"row-line-color","row-line-color",1272901700));
var d = ui_component.utils.helpers.resolve_value(data);
return (function (){
var coc_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card","div.card",-459317104),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(function (){var or__4253__auto__ = width;
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
})(),new cljs.core.Keyword(null,"margin","margin",-995903681),new cljs.core.Keyword(null,"auto","auto",-566279492)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-header","div.card-header",1547492121),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-header-title","div.card-header-title",1709257453),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/bhui/table.cljs",new cljs.core.Keyword(null,"line","line",212345235),82], null)),new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"between","between",1131099276),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"metadata","metadata",1799301597).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(d))),((cljs.core.seq(new cljs.core.Keyword(null,"c-o-c","c-o-c",-904294636).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(d))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.popover_anchor_wrapper,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/bhui/table.cljs",new cljs.core.Keyword(null,"line","line",212345235),88], null)),new cljs.core.Keyword(null,"showing?","showing?",2094921488),coc_QMARK_,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"below-center","below-center",-2126885397),new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi zmdi-badge-check",new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),"view chain-of-custody",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(coc_QMARK_,cljs.core.not);
})], null),new cljs.core.Keyword(null,"popover","popover",-1809582136),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.popover_content_wrapper,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/bhui/table.cljs",new cljs.core.Keyword(null,"line","line",212345235),95], null)),new cljs.core.Keyword(null,"title","title",636505583),"Chain-of-Custody",new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.bhui.table.table_STAR_,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"c-o-c","c-o-c",-904294636).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(d)),new cljs.core.Keyword(null,"width","width",-384071477),"400px",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"400px",new cljs.core.Keyword(null,"max-rows","max-rows",-2131113613),(3)], null)], null)], null)], null):null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-content","div.card-content",1464214949),new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.bhui.table.table_STAR_,new cljs.core.Keyword(null,"data","data",-232669377),(cljs.core.truth_(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(d)))?new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(d)):cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"max-rows","max-rows",-2131113613),max_rows,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"row-line-color","row-line-color",1272901700),row_line_color,new cljs.core.Keyword(null,"on-click-row","on-click-row",-383826673),on_click_row_fn,new cljs.core.Keyword(null,"cell-style-fn","cell-style-fn",1050558136),cell_style_fn], null)], null)], null);
});
}));

(ui_component.atom.bhui.table.meta_table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(ui_component.atom.bhui.table.meta_table.cljs$lang$applyTo = (function (seq59475){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59475));
}));

ui_component.atom.bhui.table.table = (function ui_component$atom$bhui$table$table(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59495 = arguments.length;
var i__4865__auto___59496 = (0);
while(true){
if((i__4865__auto___59496 < len__4864__auto___59495)){
args__4870__auto__.push((arguments[i__4865__auto___59496]));

var G__59497 = (i__4865__auto___59496 + (1));
i__4865__auto___59496 = G__59497;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return ui_component.atom.bhui.table.table.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(ui_component.atom.bhui.table.table.cljs$core$IFn$_invoke$arity$variadic = (function (p__59479){
var map__59480 = p__59479;
var map__59480__$1 = cljs.core.__destructure_map(map__59480);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59480__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var max_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59480__$1,new cljs.core.Keyword(null,"max-rows","max-rows",-2131113613));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59480__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59480__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var cell_style_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59480__$1,new cljs.core.Keyword(null,"cell-style-fn","cell-style-fn",1050558136));
var on_click_row_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59480__$1,new cljs.core.Keyword(null,"on-click-row-fn","on-click-row-fn",787857205));
var row_line_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59480__$1,new cljs.core.Keyword(null,"row-line-color","row-line-color",1272901700));
var d = ui_component.utils.helpers.resolve_value(data);
if(cljs.core.truth_(new cljs.core.Keyword(null,"metadata","metadata",1799301597).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(d)))){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.bhui.table.meta_table,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"max-rows","max-rows",-2131113613),max_rows,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"cell-style-fn","cell-style-fn",1050558136),cell_style_fn,new cljs.core.Keyword(null,"on-click-row-fn","on-click-row-fn",787857205),on_click_row_fn,new cljs.core.Keyword(null,"row-line-color","row-line-color",1272901700),row_line_color], null);
} else {
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.bhui.table.non_meta_table,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"max-rows","max-rows",-2131113613),max_rows,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"cell-style-fn","cell-style-fn",1050558136),cell_style_fn,new cljs.core.Keyword(null,"on-click-row-fn","on-click-row-fn",787857205),on_click_row_fn,new cljs.core.Keyword(null,"row-line-color","row-line-color",1272901700),row_line_color], null);
}
}));

(ui_component.atom.bhui.table.table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(ui_component.atom.bhui.table.table.cljs$lang$applyTo = (function (seq59478){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59478));
}));

ui_component.atom.bhui.table.meta_data = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("bhui","table","bhui/table",-563771762),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),ui_component.atom.bhui.table.table,new cljs.core.Keyword(null,"ports","ports",-1014790862),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("port","sink","port/sink",185875552)], null)], null)], null);
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-meta","register-meta",1726375773),ui_component.atom.bhui.table.meta_data], null));

//# sourceMappingURL=ui_component.atom.bhui.table.js.map
