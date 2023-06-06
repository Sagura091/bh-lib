goog.provide('ui_component.atom.experimental.ui_element');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"ui-component.atom.experimental.ui-element",null,14,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ui-component.atom.experimental.ui-element"], null);
}),null)),null,-1251082551,null);
ui_component.atom.experimental.ui_element.config_panel = (function ui_component$atom$experimental$ui_element$config_panel(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59307 = arguments.length;
var i__4865__auto___59308 = (0);
while(true){
if((i__4865__auto___59308 < len__4864__auto___59307)){
args__4870__auto__.push((arguments[i__4865__auto___59308]));

var G__59309 = (i__4865__auto___59308 + (1));
i__4865__auto___59308 = G__59309;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return ui_component.atom.experimental.ui_element.config_panel.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(ui_component.atom.experimental.ui_element.config_panel.cljs$core$IFn$_invoke$arity$variadic = (function (p__59273){
var map__59274 = p__59273;
var map__59274__$1 = cljs.core.__destructure_map(map__59274);
var params = map__59274__$1;
var config_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59274__$1,new cljs.core.Keyword(null,"config-data","config-data",1933573865));
var c = ui_component.utils.helpers.resolve_value(config_data);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card","div.card",-459317104),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__59275){
var vec__59276 = p__59275;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59276,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59276,(1),null);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.re_com.labeled_field.labeled_field,cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),v], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null));
}),cljs.core.deref(c))], null);
}));

(ui_component.atom.experimental.ui_element.config_panel.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(ui_component.atom.experimental.ui_element.config_panel.cljs$lang$applyTo = (function (seq59272){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59272));
}));

ui_component.atom.experimental.ui_element.selectable_table = (function ui_component$atom$experimental$ui_element$selectable_table(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59310 = arguments.length;
var i__4865__auto___59311 = (0);
while(true){
if((i__4865__auto___59311 < len__4864__auto___59310)){
args__4870__auto__.push((arguments[i__4865__auto___59311]));

var G__59312 = (i__4865__auto___59311 + (1));
i__4865__auto___59311 = G__59312;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return ui_component.atom.experimental.ui_element.selectable_table.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(ui_component.atom.experimental.ui_element.selectable_table.cljs$core$IFn$_invoke$arity$variadic = (function (p__59280){
var map__59281 = p__59280;
var map__59281__$1 = cljs.core.__destructure_map(map__59281);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59281__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59281__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
var source = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(data);
var clicked = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
return (function() { 
var G__59313__delegate = function (p__59282){
var map__59283 = p__59282;
var map__59283__$1 = cljs.core.__destructure_map(map__59283);
var data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59283__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var selection__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59283__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
var component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59283__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var container_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59283__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card","div.card",-459317104),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"300px",new cljs.core.Keyword(null,"height","height",1025178622),"200px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),"Selectable Table"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"200px",new cljs.core.Keyword(null,"margin","margin",-995903681),new cljs.core.Keyword(null,"auto","auto",-566279492)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.re_com.labeled_field.labeled_field,"data",cljs.core.deref(source)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button","button.button",1464242525),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(clicked,cljs.core.inc);

return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(selection__$1,cljs.core.deref(clicked)));
})], null),"Click!"], null)], null)], null);
};
var G__59313 = function (var_args){
var p__59282 = null;
if (arguments.length > 0) {
var G__59314__i = 0, G__59314__a = new Array(arguments.length -  0);
while (G__59314__i < G__59314__a.length) {G__59314__a[G__59314__i] = arguments[G__59314__i + 0]; ++G__59314__i;}
  p__59282 = new cljs.core.IndexedSeq(G__59314__a,0,null);
} 
return G__59313__delegate.call(this,p__59282);};
G__59313.cljs$lang$maxFixedArity = 0;
G__59313.cljs$lang$applyTo = (function (arglist__59315){
var p__59282 = cljs.core.seq(arglist__59315);
return G__59313__delegate(p__59282);
});
G__59313.cljs$core$IFn$_invoke$arity$variadic = G__59313__delegate;
return G__59313;
})()
;
}));

(ui_component.atom.experimental.ui_element.selectable_table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(ui_component.atom.experimental.ui_element.selectable_table.cljs$lang$applyTo = (function (seq59279){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59279));
}));

ui_component.atom.experimental.ui_element.three_d_globe = (function ui_component$atom$experimental$ui_element$three_d_globe(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59316 = arguments.length;
var i__4865__auto___59317 = (0);
while(true){
if((i__4865__auto___59317 < len__4864__auto___59316)){
args__4870__auto__.push((arguments[i__4865__auto___59317]));

var G__59318 = (i__4865__auto___59317 + (1));
i__4865__auto___59317 = G__59318;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return ui_component.atom.experimental.ui_element.three_d_globe.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(ui_component.atom.experimental.ui_element.three_d_globe.cljs$core$IFn$_invoke$arity$variadic = (function (p__59285){
var map__59286 = p__59285;
var map__59286__$1 = cljs.core.__destructure_map(map__59286);
var layers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59286__$1,new cljs.core.Keyword(null,"layers","layers",1944875032));
var current_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59286__$1,new cljs.core.Keyword(null,"current-time","current-time",-1609407134));
var component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59286__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var container_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59286__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var l = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(layers);
var t = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(current_time);
return (function() { 
var G__59319__delegate = function (p__59287){
var map__59288 = p__59287;
var map__59288__$1 = cljs.core.__destructure_map(map__59288);
var layers__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59288__$1,new cljs.core.Keyword(null,"layers","layers",1944875032));
var current_time__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59288__$1,new cljs.core.Keyword(null,"current-time","current-time",-1609407134));
var component_id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59288__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var container_id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59288__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card","div.card",-459317104),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"500px",new cljs.core.Keyword(null,"height","height",1025178622),"500px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),"3D Globe Table"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"200px",new cljs.core.Keyword(null,"margin","margin",-995903681),new cljs.core.Keyword(null,"auto","auto",-566279492)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_textarea,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/experimental/ui_element.cljs",new cljs.core.Keyword(null,"line","line",212345235),60], null)),new cljs.core.Keyword(null,"model","model",331153215),reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(l))),new cljs.core.Keyword(null,"rows","rows",850049680),(5),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.List.EMPTY;
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.re_com.labeled_field.labeled_field,"Current Time",cljs.core.deref(t)], null)], null)], null);
};
var G__59319 = function (var_args){
var p__59287 = null;
if (arguments.length > 0) {
var G__59320__i = 0, G__59320__a = new Array(arguments.length -  0);
while (G__59320__i < G__59320__a.length) {G__59320__a[G__59320__i] = arguments[G__59320__i + 0]; ++G__59320__i;}
  p__59287 = new cljs.core.IndexedSeq(G__59320__a,0,null);
} 
return G__59319__delegate.call(this,p__59287);};
G__59319.cljs$lang$maxFixedArity = 0;
G__59319.cljs$lang$applyTo = (function (arglist__59321){
var p__59287 = cljs.core.seq(arglist__59321);
return G__59319__delegate(p__59287);
});
G__59319.cljs$core$IFn$_invoke$arity$variadic = G__59319__delegate;
return G__59319;
})()
;
}));

(ui_component.atom.experimental.ui_element.three_d_globe.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(ui_component.atom.experimental.ui_element.three_d_globe.cljs$lang$applyTo = (function (seq59284){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59284));
}));

ui_component.atom.experimental.ui_element.slider = (function ui_component$atom$experimental$ui_element$slider(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59322 = arguments.length;
var i__4865__auto___59323 = (0);
while(true){
if((i__4865__auto___59323 < len__4864__auto___59322)){
args__4870__auto__.push((arguments[i__4865__auto___59323]));

var G__59324 = (i__4865__auto___59323 + (1));
i__4865__auto___59323 = G__59324;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return ui_component.atom.experimental.ui_element.slider.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(ui_component.atom.experimental.ui_element.slider.cljs$core$IFn$_invoke$arity$variadic = (function (p__59291){
var map__59292 = p__59291;
var map__59292__$1 = cljs.core.__destructure_map(map__59292);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59292__$1,new cljs.core.Keyword(null,"value","value",305978217));
var range = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59292__$1,new cljs.core.Keyword(null,"range","range",1639692286));
var v = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(value);
var r = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(range);
return (function() { 
var G__59325__delegate = function (p__59293){
var map__59294 = p__59293;
var map__59294__$1 = cljs.core.__destructure_map(map__59294);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59294__$1,new cljs.core.Keyword(null,"value","value",305978217));
var range__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59294__$1,new cljs.core.Keyword(null,"range","range",1639692286));
var vec__59295 = cljs.core.deref(r);
var min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59295,(0),null);
var max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59295,(1),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card","div.card",-459317104),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"300px",new cljs.core.Keyword(null,"height","height",1025178622),"100px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),"Slider"], null),new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.slider,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/experimental/ui_element.cljs",new cljs.core.Keyword(null,"line","line",212345235),79], null)),new cljs.core.Keyword(null,"model","model",331153215),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(v)),new cljs.core.Keyword(null,"min","min",444991522),min,new cljs.core.Keyword(null,"max","max",61366548),max,new cljs.core.Keyword(null,"width","width",-384071477),"90%",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),new cljs.core.Keyword(null,"auto","auto",-566279492)], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__59289_SHARP_){
return re_frame.core.dispatch_sync(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(value__$1,p1__59289_SHARP_));
}),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),false], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"200px",new cljs.core.Keyword(null,"margin","margin",-995903681),new cljs.core.Keyword(null,"auto","auto",-566279492)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.re_com.labeled_field.labeled_field,"Value",cljs.core.deref(v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.re_com.labeled_field.labeled_field,"Range",cljs.core.deref(r)], null)], null)], null);
};
var G__59325 = function (var_args){
var p__59293 = null;
if (arguments.length > 0) {
var G__59326__i = 0, G__59326__a = new Array(arguments.length -  0);
while (G__59326__i < G__59326__a.length) {G__59326__a[G__59326__i] = arguments[G__59326__i + 0]; ++G__59326__i;}
  p__59293 = new cljs.core.IndexedSeq(G__59326__a,0,null);
} 
return G__59325__delegate.call(this,p__59293);};
G__59325.cljs$lang$maxFixedArity = 0;
G__59325.cljs$lang$applyTo = (function (arglist__59327){
var p__59293 = cljs.core.seq(arglist__59327);
return G__59325__delegate(p__59293);
});
G__59325.cljs$core$IFn$_invoke$arity$variadic = G__59325__delegate;
return G__59325;
})()
;
}));

(ui_component.atom.experimental.ui_element.slider.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(ui_component.atom.experimental.ui_element.slider.cljs$lang$applyTo = (function (seq59290){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59290));
}));

ui_component.atom.experimental.ui_element.label = (function ui_component$atom$experimental$ui_element$label(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59328 = arguments.length;
var i__4865__auto___59329 = (0);
while(true){
if((i__4865__auto___59329 < len__4864__auto___59328)){
args__4870__auto__.push((arguments[i__4865__auto___59329]));

var G__59330 = (i__4865__auto___59329 + (1));
i__4865__auto___59329 = G__59330;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return ui_component.atom.experimental.ui_element.label.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(ui_component.atom.experimental.ui_element.label.cljs$core$IFn$_invoke$arity$variadic = (function (p__59299){
var map__59300 = p__59299;
var map__59300__$1 = cljs.core.__destructure_map(map__59300);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59300__$1,new cljs.core.Keyword(null,"value","value",305978217));
var v = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(value);
return (function() { 
var G__59331__delegate = function (p__59301){
var map__59302 = p__59301;
var map__59302__$1 = cljs.core.__destructure_map(map__59302);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59302__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card","div.card",-459317104),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"300px",new cljs.core.Keyword(null,"height","height",1025178622),"100px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),"Label"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"200px",new cljs.core.Keyword(null,"margin","margin",-995903681),new cljs.core.Keyword(null,"auto","auto",-566279492)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.re_com.labeled_field.labeled_field,"Value",cljs.core.deref(v)], null)], null)], null);
};
var G__59331 = function (var_args){
var p__59301 = null;
if (arguments.length > 0) {
var G__59332__i = 0, G__59332__a = new Array(arguments.length -  0);
while (G__59332__i < G__59332__a.length) {G__59332__a[G__59332__i] = arguments[G__59332__i + 0]; ++G__59332__i;}
  p__59301 = new cljs.core.IndexedSeq(G__59332__a,0,null);
} 
return G__59331__delegate.call(this,p__59301);};
G__59331.cljs$lang$maxFixedArity = 0;
G__59331.cljs$lang$applyTo = (function (arglist__59333){
var p__59301 = cljs.core.seq(arglist__59333);
return G__59331__delegate(p__59301);
});
G__59331.cljs$core$IFn$_invoke$arity$variadic = G__59331__delegate;
return G__59331;
})()
;
}));

(ui_component.atom.experimental.ui_element.label.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(ui_component.atom.experimental.ui_element.label.cljs$lang$applyTo = (function (seq59298){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59298));
}));

ui_component.atom.experimental.ui_element.meta_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("stunt","config-panel","stunt/config-panel",-1199107162),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),ui_component.atom.experimental.ui_element.config_panel,new cljs.core.Keyword(null,"ports","ports",-1014790862),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"config-data","config-data",1933573865),new cljs.core.Keyword("port","source-sink","port/source-sink",2080195151)], null)], null),new cljs.core.Keyword("stunt","selectable-table","stunt/selectable-table",-1815356551),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),ui_component.atom.experimental.ui_element.selectable_table,new cljs.core.Keyword(null,"ports","ports",-1014790862),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("port","source-sink","port/source-sink",2080195151),new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword("port","source","port/source",-436771986)], null)], null),new cljs.core.Keyword("stunt","globe","stunt/globe",909297031),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),ui_component.atom.experimental.ui_element.three_d_globe,new cljs.core.Keyword(null,"ports","ports",-1014790862),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"layers","layers",1944875032),new cljs.core.Keyword("port","sink","port/sink",185875552),new cljs.core.Keyword(null,"current-time","current-time",-1609407134),new cljs.core.Keyword("port","sink","port/sink",185875552)], null)], null),new cljs.core.Keyword("stunt","label","stunt/label",-1779052758),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),ui_component.atom.experimental.ui_element.label,new cljs.core.Keyword(null,"ports","ports",-1014790862),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("port","sink","port/sink",185875552)], null)], null),new cljs.core.Keyword("stunt","slider","stunt/slider",-532106171),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),ui_component.atom.experimental.ui_element.slider,new cljs.core.Keyword(null,"ports","ports",-1014790862),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("port","source-sink","port/source-sink",2080195151),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword("port","sink","port/sink",185875552)], null)], null)], null);
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-meta","register-meta",1726375773),ui_component.atom.experimental.ui_element.meta_data], null));

//# sourceMappingURL=ui_component.atom.experimental.ui_element.js.map
