goog.provide('ui_component.atom.layout.responsive_grid');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"ui-component.atom.layout.responsive-grid",null,6,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ui-component.atom.layout.responsive-grid"], null);
}),null)),null,-1067845158,null);
ui_component.atom.layout.responsive_grid.ResponsiveGridLayout = (new shadow.js.shim.module$react_grid_layout.WidthProvider(shadow.js.shim.module$react_grid_layout.Responsive));
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
ui_component.atom.layout.responsive_grid.grid = (function ui_component$atom$layout$responsive_grid$grid(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59923 = arguments.length;
var i__4865__auto___59924 = (0);
while(true){
if((i__4865__auto___59924 < len__4864__auto___59923)){
args__4870__auto__.push((arguments[i__4865__auto___59924]));

var G__59925 = (i__4865__auto___59924 + (1));
i__4865__auto___59924 = G__59925;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return ui_component.atom.layout.responsive_grid.grid.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(ui_component.atom.layout.responsive_grid.grid.cljs$core$IFn$_invoke$arity$variadic = (function (p__59907){
var map__59908 = p__59907;
var map__59908__$1 = cljs.core.__destructure_map(map__59908);
var args = map__59908__$1;
var draggableCancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59908__$1,new cljs.core.Keyword(null,"draggableCancel","draggableCancel",-2044653413));
var rowHeight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59908__$1,new cljs.core.Keyword(null,"rowHeight","rowHeight",1730581244));
var layoutFn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59908__$1,new cljs.core.Keyword(null,"layoutFn","layoutFn",-2038593186));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59908__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var draggableHandle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59908__$1,new cljs.core.Keyword(null,"draggableHandle","draggableHandle",1358445442));
var widthFn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59908__$1,new cljs.core.Keyword(null,"widthFn","widthFn",-396716062));
var compactType = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59908__$1,new cljs.core.Keyword(null,"compactType","compactType",410136770));
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59908__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59908__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var isDraggable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59908__$1,new cljs.core.Keyword(null,"isDraggable","isDraggable",-181233715));
var isResizable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59908__$1,new cljs.core.Keyword(null,"isResizable","isResizable",1591995984));
var cols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59908__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59908__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var l = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lg","lg",-80787836),layout,new cljs.core.Keyword(null,"md","md",707286655),layout,new cljs.core.Keyword(null,"sm","sm",-1402575065),layout], null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),ui_component.atom.layout.responsive_grid.ResponsiveGridLayout,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"compactType","compactType",410136770),new cljs.core.Keyword(null,"draggableHandle","draggableHandle",1358445442),new cljs.core.Keyword(null,"onWidthChange","onWidthChange",-2100247767),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"onLayoutChange","onLayoutChange",-320596147),new cljs.core.Keyword(null,"isDraggable","isDraggable",-181233715),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"isResizable","isResizable",1591995984),new cljs.core.Keyword(null,"cols","cols",-1914801295),new cljs.core.Keyword(null,"layouts","layouts",11991539),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"draggableCancel","draggableCancel",-2044653413),new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739),new cljs.core.Keyword(null,"rowHeight","rowHeight",1730581244)],[(function (){var or__4253__auto__ = compactType;
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
})(),(function (){var or__4253__auto__ = widthFn;
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
return (1200);
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
})(),"layout",(function (){var or__4253__auto__ = isResizable;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return true;
}
})(),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lg","lg",-80787836),(20),new cljs.core.Keyword(null,"md","md",707286655),(20),new cljs.core.Keyword(null,"sm","sm",-1402575065),(20),new cljs.core.Keyword(null,"xs","xs",649443341),(20),new cljs.core.Keyword(null,"xxs","xxs",-16722349),(20)], null),l,id,(function (){var or__4253__auto__ = draggableCancel;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return ".grid-content";
}
})(),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lg","lg",-80787836),(1000),new cljs.core.Keyword(null,"md","md",707286655),(800),new cljs.core.Keyword(null,"sm","sm",-1402575065),(500),new cljs.core.Keyword(null,"xs","xs",649443341),(480),new cljs.core.Keyword(null,"xxs","xxs",-16722349),(0)], null),(function (){var or__4253__auto__ = rowHeight;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (25);
}
})()])], null),children);
}));

(ui_component.atom.layout.responsive_grid.grid.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(ui_component.atom.layout.responsive_grid.grid.cljs$lang$applyTo = (function (seq59906){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59906));
}));


//# sourceMappingURL=ui_component.atom.layout.responsive_grid.js.map
