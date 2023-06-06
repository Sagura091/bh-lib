goog.provide('bh_ui.atom.layout.grid');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"bh-ui.atom.layout.grid",null,6,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bh-ui.atom.layout.grid"], null);
}),null)),null,-1316445939,null);
/**
 * use [react-grid-layout](https://github.com/react-grid-layout/react-grid-layout) to organize a bunch of children in a draggable grid
 * 
 *   ---
 * 
 *   Parameters are keyword identified as follows:
 * 
 *   | keyword     | type     | description            |
 *   |:------------|:--------:|:-----------------------|
 *   | `:id`       | string   | uniquely identify this particular grid, in case you have multiples |
 *   | `:children` | vector   | vector of hiccup that define each child to be placed into the grid |
 *   | `:layout`   | atom     | atom of layout 'records' that track where each child is drawn in the grid |
 *   | `:layoutFn` | function | function to update the layout atom when children are resized or move |
 *   | `:cols`     | atom     | atom wrapping an integer, which specifies the number of 'grid columns' |
 * 
 * > See also
 * >
 * > [react-grid-layout](https://github.com/react-grid-layout/react-grid-layout)
 * >
 * > [re-com](https://github.com/Day8/re-com)
 *   
 */
bh_ui.atom.layout.grid.grid = (function bh_ui$atom$layout$grid$grid(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59336 = arguments.length;
var i__4865__auto___59337 = (0);
while(true){
if((i__4865__auto___59337 < len__4864__auto___59336)){
args__4870__auto__.push((arguments[i__4865__auto___59337]));

var G__59338 = (i__4865__auto___59337 + (1));
i__4865__auto___59337 = G__59338;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return bh_ui.atom.layout.grid.grid.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(bh_ui.atom.layout.grid.grid.cljs$core$IFn$_invoke$arity$variadic = (function (p__59334){
var map__59335 = p__59334;
var map__59335__$1 = cljs.core.__destructure_map(map__59335);
var args = map__59335__$1;
var draggableCancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59335__$1,new cljs.core.Keyword(null,"draggableCancel","draggableCancel",-2044653413));
var rowHeight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59335__$1,new cljs.core.Keyword(null,"rowHeight","rowHeight",1730581244));
var layoutFn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59335__$1,new cljs.core.Keyword(null,"layoutFn","layoutFn",-2038593186));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59335__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var draggableHandle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59335__$1,new cljs.core.Keyword(null,"draggableHandle","draggableHandle",1358445442));
var widthFn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59335__$1,new cljs.core.Keyword(null,"widthFn","widthFn",-396716062));
var compactType = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59335__$1,new cljs.core.Keyword(null,"compactType","compactType",410136770));
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59335__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59335__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var isDraggable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59335__$1,new cljs.core.Keyword(null,"isDraggable","isDraggable",-181233715));
var isResizable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59335__$1,new cljs.core.Keyword(null,"isResizable","isResizable",1591995984));
var cols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59335__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59335__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_grid_layout,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"compactType","compactType",410136770),new cljs.core.Keyword(null,"draggableHandle","draggableHandle",1358445442),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"onWidthChange","onWidthChange",-2100247767),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"onLayoutChange","onLayoutChange",-320596147),new cljs.core.Keyword(null,"isDraggable","isDraggable",-181233715),new cljs.core.Keyword(null,"isResizable","isResizable",1591995984),new cljs.core.Keyword(null,"cols","cols",-1914801295),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"draggableCancel","draggableCancel",-2044653413),new cljs.core.Keyword(null,"rowHeight","rowHeight",1730581244)],[(function (){var or__4253__auto__ = compactType;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"vertical","vertical",718696748);
}
})(),(function (){var or__4253__auto__ = draggableHandle;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return ".grid-toolbar";
}
})(),layout,(function (){var or__4253__auto__ = widthFn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (function (){
return cljs.core.List.EMPTY;
});
}
})(),(function (){var or__4253__auto__ = width;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (600);
}
})(),(function (){var or__4253__auto__ = layoutFn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (function (){
return cljs.core.List.EMPTY;
});
}
})(),(function (){var or__4253__auto__ = isDraggable;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return true;
}
})(),(function (){var or__4253__auto__ = isResizable;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return true;
}
})(),(function (){var or__4253__auto__ = cols;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (12);
}
})(),id,(function (){var or__4253__auto__ = draggableCancel;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return ".grid-content";
}
})(),(function (){var or__4253__auto__ = rowHeight;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (25);
}
})()])], null),children);
}));

(bh_ui.atom.layout.grid.grid.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bh_ui.atom.layout.grid.grid.cljs$lang$applyTo = (function (seq59333){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59333));
}));


//# sourceMappingURL=bh_ui.atom.layout.grid.js.map
