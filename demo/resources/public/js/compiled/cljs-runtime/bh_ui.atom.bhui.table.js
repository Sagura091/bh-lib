goog.provide('bh_ui.atom.bhui.table');
bh_ui.atom.bhui.table.sample_data = bh_ui.utils.example_data.tabular_data;
bh_ui.atom.bhui.table.sample_meta_data = bh_ui.utils.example_data.meta_tabular_data;
bh_ui.atom.bhui.table.sample_meta_coc_data = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bh_ui.utils.example_data.meta_tabular_data,new cljs.core.Keyword(null,"c-o-c","c-o-c",-904294636),bh_ui.utils.example_data.default_coc);
bh_ui.atom.bhui.table.random_data = bh_ui.utils.example_data.random_tabular_data;
bh_ui.atom.bhui.table.random_data_meta = bh_ui.utils.example_data.random_meta_tabular_data;
bh_ui.atom.bhui.table.table_STAR_ = (function bh_ui$atom$bhui$table$table_STAR_(var_args){
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
return bh_ui.atom.bhui.table.table_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(bh_ui.atom.bhui.table.table_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (p__59450){
var map__59451 = p__59450;
var map__59451__$1 = cljs.core.__destructure_map(map__59451);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59451__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var max_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59451__$1,new cljs.core.Keyword(null,"max-rows","max-rows",-2131113613));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59451__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59451__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var cell_style_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59451__$1,new cljs.core.Keyword(null,"cell-style-fn","cell-style-fn",1050558136));
var on_click_row_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59451__$1,new cljs.core.Keyword(null,"on-click-row-fn","on-click-row-fn",787857205));
var row_line_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59451__$1,new cljs.core.Keyword(null,"row-line-color","row-line-color",1272901700));
if(cljs.core.empty_QMARK_(data)){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.alert_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"bh_ui/atom/bhui/table.cljs",new cljs.core.Keyword(null,"line","line",212345235),25], null)),new cljs.core.Keyword(null,"alert-type","alert-type",405751817),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"heading","heading",-1312171873),"Waiting for data"], null);
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
})(),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"scroll","scroll",971553779)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table.is-hoverable","table.table.is-hoverable",-732909642),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"sticky","sticky",-2121213869),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"darkslategray","darkslategray",348576839)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function bh_ui$atom$bhui$table$iter__59452(s__59453){
return (new cljs.core.LazySeq(null,(function (){
var s__59453__$1 = s__59453;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__59453__$1);
if(temp__5753__auto__){
var s__59453__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__59453__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__59453__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__59455 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__59454 = (0);
while(true){
if((i__59454 < size__4651__auto__)){
var vec__59456 = cljs.core._nth(c__4650__auto__,i__59454);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59456,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59456,(1),null);
cljs.core.chunk_append(b__59455,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)));

var G__59493 = (i__59454 + (1));
i__59454 = G__59493;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59455),bh_ui$atom$bhui$table$iter__59452(cljs.core.chunk_rest(s__59453__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59455),null);
}
} else {
var vec__59459 = cljs.core.first(s__59453__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59459,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59459,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)),bh_ui$atom$bhui$table$iter__59452(cljs.core.rest(s__59453__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,header));
})())], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function bh_ui$atom$bhui$table$iter__59462(s__59463){
return (new cljs.core.LazySeq(null,(function (){
var s__59463__$1 = s__59463;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__59463__$1);
if(temp__5753__auto__){
var s__59463__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__59463__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__59463__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__59465 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__59464 = (0);
while(true){
if((i__59464 < size__4651__auto__)){
var vec__59466 = cljs.core._nth(c__4650__auto__,i__59464);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59466,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59466,(1),null);
cljs.core.chunk_append(b__59465,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4652__auto__ = ((function (i__59464,vec__59466,idx,b,c__4650__auto__,size__4651__auto__,b__59465,s__59463__$2,temp__5753__auto__,header,body,map__59451,map__59451__$1,data,max_rows,width,height,cell_style_fn,on_click_row_fn,row_line_color){
return (function bh_ui$atom$bhui$table$iter__59462_$_iter__59469(s__59470){
return (new cljs.core.LazySeq(null,((function (i__59464,vec__59466,idx,b,c__4650__auto__,size__4651__auto__,b__59465,s__59463__$2,temp__5753__auto__,header,body,map__59451,map__59451__$1,data,max_rows,width,height,cell_style_fn,on_click_row_fn,row_line_color){
return (function (){
var s__59470__$1 = s__59470;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__59470__$1);
if(temp__5753__auto____$1){
var s__59470__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__59470__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__59470__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__59472 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__59471 = (0);
while(true){
if((i__59471 < size__4651__auto____$1)){
var key = cljs.core._nth(c__4650__auto____$1,i__59471);
cljs.core.chunk_append(b__59472,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)));

var G__59494 = (i__59471 + (1));
i__59471 = G__59494;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59472),bh_ui$atom$bhui$table$iter__59462_$_iter__59469(cljs.core.chunk_rest(s__59470__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59472),null);
}
} else {
var key = cljs.core.first(s__59470__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)),bh_ui$atom$bhui$table$iter__59462_$_iter__59469(cljs.core.rest(s__59470__$2)));
}
} else {
return null;
}
break;
}
});})(i__59464,vec__59466,idx,b,c__4650__auto__,size__4651__auto__,b__59465,s__59463__$2,temp__5753__auto__,header,body,map__59451,map__59451__$1,data,max_rows,width,height,cell_style_fn,on_click_row_fn,row_line_color))
,null,null));
});})(i__59464,vec__59466,idx,b,c__4650__auto__,size__4651__auto__,b__59465,s__59463__$2,temp__5753__auto__,header,body,map__59451,map__59451__$1,data,max_rows,width,height,cell_style_fn,on_click_row_fn,row_line_color))
;
return iter__4652__auto__(header);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)));

var G__59507 = (i__59464 + (1));
i__59464 = G__59507;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59465),bh_ui$atom$bhui$table$iter__59462(cljs.core.chunk_rest(s__59463__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59465),null);
}
} else {
var vec__59473 = cljs.core.first(s__59463__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59473,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59473,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4652__auto__ = ((function (vec__59473,idx,b,s__59463__$2,temp__5753__auto__,header,body,map__59451,map__59451__$1,data,max_rows,width,height,cell_style_fn,on_click_row_fn,row_line_color){
return (function bh_ui$atom$bhui$table$iter__59462_$_iter__59476(s__59477){
return (new cljs.core.LazySeq(null,(function (){
var s__59477__$1 = s__59477;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__59477__$1);
if(temp__5753__auto____$1){
var s__59477__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__59477__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__59477__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__59479 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__59478 = (0);
while(true){
if((i__59478 < size__4651__auto__)){
var key = cljs.core._nth(c__4650__auto__,i__59478);
cljs.core.chunk_append(b__59479,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)));

var G__59515 = (i__59478 + (1));
i__59478 = G__59515;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59479),bh_ui$atom$bhui$table$iter__59462_$_iter__59476(cljs.core.chunk_rest(s__59477__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59479),null);
}
} else {
var key = cljs.core.first(s__59477__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)),bh_ui$atom$bhui$table$iter__59462_$_iter__59476(cljs.core.rest(s__59477__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__59473,idx,b,s__59463__$2,temp__5753__auto__,header,body,map__59451,map__59451__$1,data,max_rows,width,height,cell_style_fn,on_click_row_fn,row_line_color))
;
return iter__4652__auto__(header);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)),bh_ui$atom$bhui$table$iter__59462(cljs.core.rest(s__59463__$2)));
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

(bh_ui.atom.bhui.table.table_STAR_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bh_ui.atom.bhui.table.table_STAR_.cljs$lang$applyTo = (function (seq59445){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59445));
}));

bh_ui.atom.bhui.table.non_meta_table = (function bh_ui$atom$bhui$table$non_meta_table(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59516 = arguments.length;
var i__4865__auto___59517 = (0);
while(true){
if((i__4865__auto___59517 < len__4864__auto___59516)){
args__4870__auto__.push((arguments[i__4865__auto___59517]));

var G__59518 = (i__4865__auto___59517 + (1));
i__4865__auto___59517 = G__59518;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return bh_ui.atom.bhui.table.non_meta_table.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(bh_ui.atom.bhui.table.non_meta_table.cljs$core$IFn$_invoke$arity$variadic = (function (p__59481){
var map__59482 = p__59481;
var map__59482__$1 = cljs.core.__destructure_map(map__59482);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59482__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var max_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59482__$1,new cljs.core.Keyword(null,"max-rows","max-rows",-2131113613));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59482__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59482__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var cell_style_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59482__$1,new cljs.core.Keyword(null,"cell-style-fn","cell-style-fn",1050558136));
var on_click_row_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59482__$1,new cljs.core.Keyword(null,"on-click-row-fn","on-click-row-fn",787857205));
var row_line_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59482__$1,new cljs.core.Keyword(null,"row-line-color","row-line-color",1272901700));
var d = bh_ui.utils.helpers.resolve_value(data);
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.bhui.table.table_STAR_,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.deref(d),new cljs.core.Keyword(null,"max-rows","max-rows",-2131113613),max_rows,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"row-line-color","row-line-color",1272901700),row_line_color,new cljs.core.Keyword(null,"on-click-row","on-click-row",-383826673),on_click_row_fn,new cljs.core.Keyword(null,"cell-style-fn","cell-style-fn",1050558136),cell_style_fn], null);
}));

(bh_ui.atom.bhui.table.non_meta_table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bh_ui.atom.bhui.table.non_meta_table.cljs$lang$applyTo = (function (seq59480){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59480));
}));

bh_ui.atom.bhui.table.meta_table = (function bh_ui$atom$bhui$table$meta_table(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59522 = arguments.length;
var i__4865__auto___59523 = (0);
while(true){
if((i__4865__auto___59523 < len__4864__auto___59522)){
args__4870__auto__.push((arguments[i__4865__auto___59523]));

var G__59524 = (i__4865__auto___59523 + (1));
i__4865__auto___59523 = G__59524;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return bh_ui.atom.bhui.table.meta_table.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(bh_ui.atom.bhui.table.meta_table.cljs$core$IFn$_invoke$arity$variadic = (function (p__59484){
var map__59485 = p__59484;
var map__59485__$1 = cljs.core.__destructure_map(map__59485);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59485__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var max_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59485__$1,new cljs.core.Keyword(null,"max-rows","max-rows",-2131113613));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59485__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59485__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var cell_style_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59485__$1,new cljs.core.Keyword(null,"cell-style-fn","cell-style-fn",1050558136));
var on_click_row_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59485__$1,new cljs.core.Keyword(null,"on-click-row-fn","on-click-row-fn",787857205));
var row_line_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59485__$1,new cljs.core.Keyword(null,"row-line-color","row-line-color",1272901700));
var d = bh_ui.utils.helpers.resolve_value(data);
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
})(),new cljs.core.Keyword(null,"margin","margin",-995903681),new cljs.core.Keyword(null,"auto","auto",-566279492)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-header","div.card-header",1547492121),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-header-title","div.card-header-title",1709257453),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"bh_ui/atom/bhui/table.cljs",new cljs.core.Keyword(null,"line","line",212345235),82], null)),new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"between","between",1131099276),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"metadata","metadata",1799301597).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(d))),((cljs.core.seq(new cljs.core.Keyword(null,"c-o-c","c-o-c",-904294636).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(d))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.popover_anchor_wrapper,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"bh_ui/atom/bhui/table.cljs",new cljs.core.Keyword(null,"line","line",212345235),88], null)),new cljs.core.Keyword(null,"showing?","showing?",2094921488),coc_QMARK_,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"below-center","below-center",-2126885397),new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi zmdi-badge-check",new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),"view chain-of-custody",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(coc_QMARK_,cljs.core.not);
})], null),new cljs.core.Keyword(null,"popover","popover",-1809582136),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.popover_content_wrapper,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"bh_ui/atom/bhui/table.cljs",new cljs.core.Keyword(null,"line","line",212345235),95], null)),new cljs.core.Keyword(null,"title","title",636505583),"Chain-of-Custody",new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.bhui.table.table_STAR_,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"c-o-c","c-o-c",-904294636).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(d)),new cljs.core.Keyword(null,"width","width",-384071477),"400px",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"400px",new cljs.core.Keyword(null,"max-rows","max-rows",-2131113613),(3)], null)], null)], null)], null):null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-content","div.card-content",1464214949),new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.bhui.table.table_STAR_,new cljs.core.Keyword(null,"data","data",-232669377),(cljs.core.truth_(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(d)))?new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(d)):cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"max-rows","max-rows",-2131113613),max_rows,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"row-line-color","row-line-color",1272901700),row_line_color,new cljs.core.Keyword(null,"on-click-row","on-click-row",-383826673),on_click_row_fn,new cljs.core.Keyword(null,"cell-style-fn","cell-style-fn",1050558136),cell_style_fn], null)], null)], null);
});
}));

(bh_ui.atom.bhui.table.meta_table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bh_ui.atom.bhui.table.meta_table.cljs$lang$applyTo = (function (seq59483){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59483));
}));

bh_ui.atom.bhui.table.table = (function bh_ui$atom$bhui$table$table(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59537 = arguments.length;
var i__4865__auto___59538 = (0);
while(true){
if((i__4865__auto___59538 < len__4864__auto___59537)){
args__4870__auto__.push((arguments[i__4865__auto___59538]));

var G__59539 = (i__4865__auto___59538 + (1));
i__4865__auto___59538 = G__59539;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return bh_ui.atom.bhui.table.table.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(bh_ui.atom.bhui.table.table.cljs$core$IFn$_invoke$arity$variadic = (function (p__59487){
var map__59488 = p__59487;
var map__59488__$1 = cljs.core.__destructure_map(map__59488);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59488__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var max_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59488__$1,new cljs.core.Keyword(null,"max-rows","max-rows",-2131113613));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59488__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59488__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var cell_style_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59488__$1,new cljs.core.Keyword(null,"cell-style-fn","cell-style-fn",1050558136));
var on_click_row_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59488__$1,new cljs.core.Keyword(null,"on-click-row-fn","on-click-row-fn",787857205));
var row_line_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59488__$1,new cljs.core.Keyword(null,"row-line-color","row-line-color",1272901700));
var d = bh_ui.utils.helpers.resolve_value(data);
if(cljs.core.truth_(new cljs.core.Keyword(null,"metadata","metadata",1799301597).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(d)))){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.bhui.table.meta_table,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"max-rows","max-rows",-2131113613),max_rows,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"cell-style-fn","cell-style-fn",1050558136),cell_style_fn,new cljs.core.Keyword(null,"on-click-row-fn","on-click-row-fn",787857205),on_click_row_fn,new cljs.core.Keyword(null,"row-line-color","row-line-color",1272901700),row_line_color], null);
} else {
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.bhui.table.non_meta_table,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"max-rows","max-rows",-2131113613),max_rows,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"cell-style-fn","cell-style-fn",1050558136),cell_style_fn,new cljs.core.Keyword(null,"on-click-row-fn","on-click-row-fn",787857205),on_click_row_fn,new cljs.core.Keyword(null,"row-line-color","row-line-color",1272901700),row_line_color], null);
}
}));

(bh_ui.atom.bhui.table.table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bh_ui.atom.bhui.table.table.cljs$lang$applyTo = (function (seq59486){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59486));
}));

bh_ui.atom.bhui.table.meta_data = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("bhui","table","bhui/table",-563771762),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),bh_ui.atom.bhui.table.table,new cljs.core.Keyword(null,"ports","ports",-1014790862),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("port","sink","port/sink",185875552)], null)], null)], null);
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-meta","register-meta",1726375773),bh_ui.atom.bhui.table.meta_data], null));

//# sourceMappingURL=bh_ui.atom.bhui.table.js.map
