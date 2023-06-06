goog.provide('bh_ui.organism.ui_grid');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"bh-ui.organism.ui-grid",null,8,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bh-ui.organism.ui-grid"], null);
}),null)),null,-1263793842,null);
bh_ui.organism.ui_grid.make_widget = (function bh_ui$organism$ui_grid$make_widget(p__61262){
var vec__61263 = p__61262;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61263,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61263,(1),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61263,(2),null);
var bk_color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61263,(3),null);
var txt_color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61263,(4),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.widget-parent","div.widget-parent",-1678750537),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid-toolbar.title-wrapper.move-cursor","div.grid-toolbar.title-wrapper.move-cursor",178678859),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background-color","background-color",570434026),bk_color,new cljs.core.Keyword(null,"color","color",1011675173),txt_color,new cljs.core.Keyword(null,"padding","padding",1660304693),"5px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"bold","bold",-116809535),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.1em"], null)], null),title], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.widget.widget-content","div.widget.widget-content",1955173914),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"90%",new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"stretch","stretch",-1888837380),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628)], null),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (p1__61261_SHARP_){
return p1__61261_SHARP_.stopPropagation();
})], null),content], null)], null);
});
bh_ui.organism.ui_grid.update_layout_sub = (function bh_ui$organism$ui_grid$update_layout_sub(layout,updated_layout){
return bh_ui.utils.helpers.handle_change_path(layout,cljs.core.PersistentVector.EMPTY,updated_layout);
});
bh_ui.organism.ui_grid.update_layout_ratom = (function bh_ui$organism$ui_grid$update_layout_ratom(layout,updated_layout){
return cljs.core.reset_BANG_(layout,updated_layout);
});
bh_ui.organism.ui_grid.update_layout = (function bh_ui$organism$ui_grid$update_layout(layout,updated_layout){
if((layout instanceof cljs.core.Keyword)){
return bh_ui.organism.ui_grid.update_layout_sub(layout,updated_layout);
} else {
if(((cljs.core.coll_QMARK_(layout)) && (((cljs.core.seq(layout)) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,layout)))))){
return bh_ui.organism.ui_grid.update_layout_sub(layout,updated_layout);
} else {
if((((layout instanceof reagent.ratom.RAtom)) || ((layout instanceof cljs.core.Atom)))){
return bh_ui.organism.ui_grid.update_layout_ratom(layout,updated_layout);
} else {
return cljs.core.List.EMPTY;

}
}
}
});
bh_ui.organism.ui_grid.on_layout_change = (function bh_ui$organism$ui_grid$on_layout_change(layout,new_layout){
var n_l = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(new_layout,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var fst = cljs.core.first(n_l);
if(((cljs.core.seq(n_l)) && (((((1) <= cljs.core.count(n_l))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"i","i",-1386841315).cljs$core$IFn$_invoke$arity$1(fst),"null")))))){
var cooked = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__61266_SHARP_){
return cljs.core.zipmap(cljs.core.list(new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)),p1__61266_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], 0)),n_l));
return bh_ui.organism.ui_grid.update_layout(layout,cooked);
} else {
return null;
}
});
bh_ui.organism.ui_grid.component = (function bh_ui$organism$ui_grid$component(var_args){
var args__4870__auto__ = [];
var len__4864__auto___61270 = arguments.length;
var i__4865__auto___61271 = (0);
while(true){
if((i__4865__auto___61271 < len__4864__auto___61270)){
args__4870__auto__.push((arguments[i__4865__auto___61271]));

var G__61272 = (i__4865__auto___61271 + (1));
i__4865__auto___61271 = G__61272;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return bh_ui.organism.ui_grid.component.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(bh_ui.organism.ui_grid.component.cljs$core$IFn$_invoke$arity$variadic = (function (p__61268){
var map__61269 = p__61268;
var map__61269__$1 = cljs.core.__destructure_map(map__61269);
var widgets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61269__$1,new cljs.core.Keyword(null,"widgets","widgets",-159098978));
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61269__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
var container_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61269__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var r_widgets = bh_ui.utils.helpers.resolve_value(widgets);
var r_layout = bh_ui.utils.helpers.resolve_value(layout);
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.layout.responsive_grid.grid,new cljs.core.Keyword(null,"id","id",-1388402092),container_id,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(bh_ui.organism.ui_grid.make_widget,cljs.core.deref(r_widgets))),new cljs.core.Keyword(null,"cols","cols",-1914801295),(20),new cljs.core.Keyword(null,"layoutFn","layoutFn",-2038593186),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bh_ui.organism.ui_grid.on_layout_change,layout),new cljs.core.Keyword(null,"layout","layout",-2120940921),cljs.core.deref(r_layout)], null);
});
}));

(bh_ui.organism.ui_grid.component.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bh_ui.organism.ui_grid.component.cljs$lang$applyTo = (function (seq61267){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61267));
}));


//# sourceMappingURL=bh_ui.organism.ui_grid.js.map
