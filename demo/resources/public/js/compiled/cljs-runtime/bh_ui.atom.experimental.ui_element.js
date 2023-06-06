goog.provide('bh_ui.atom.experimental.ui_element');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"bh-ui.atom.experimental.ui-element",null,14,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bh-ui.atom.experimental.ui-element"], null);
}),null)),null,-1956379204,null);
bh_ui.atom.experimental.ui_element.config_panel = (function bh_ui$atom$experimental$ui_element$config_panel(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59288 = arguments.length;
var i__4865__auto___59289 = (0);
while(true){
if((i__4865__auto___59289 < len__4864__auto___59288)){
args__4870__auto__.push((arguments[i__4865__auto___59289]));

var G__59290 = (i__4865__auto___59289 + (1));
i__4865__auto___59289 = G__59290;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return bh_ui.atom.experimental.ui_element.config_panel.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(bh_ui.atom.experimental.ui_element.config_panel.cljs$core$IFn$_invoke$arity$variadic = (function (p__59251){
var map__59252 = p__59251;
var map__59252__$1 = cljs.core.__destructure_map(map__59252);
var params = map__59252__$1;
var config_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59252__$1,new cljs.core.Keyword(null,"config-data","config-data",1933573865));
var c = bh_ui.utils.helpers.resolve_value(config_data);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card","div.card",-459317104),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__59253){
var vec__59254 = p__59253;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59254,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59254,(1),null);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.re_com.labeled_field.labeled_field,cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),v], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null));
}),cljs.core.deref(c))], null);
}));

(bh_ui.atom.experimental.ui_element.config_panel.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bh_ui.atom.experimental.ui_element.config_panel.cljs$lang$applyTo = (function (seq59250){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59250));
}));

bh_ui.atom.experimental.ui_element.selectable_table = (function bh_ui$atom$experimental$ui_element$selectable_table(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59291 = arguments.length;
var i__4865__auto___59292 = (0);
while(true){
if((i__4865__auto___59292 < len__4864__auto___59291)){
args__4870__auto__.push((arguments[i__4865__auto___59292]));

var G__59293 = (i__4865__auto___59292 + (1));
i__4865__auto___59292 = G__59293;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return bh_ui.atom.experimental.ui_element.selectable_table.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(bh_ui.atom.experimental.ui_element.selectable_table.cljs$core$IFn$_invoke$arity$variadic = (function (p__59258){
var map__59259 = p__59258;
var map__59259__$1 = cljs.core.__destructure_map(map__59259);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59259__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59259__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
var source = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(data);
var clicked = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
return (function() { 
var G__59294__delegate = function (p__59260){
var map__59261 = p__59260;
var map__59261__$1 = cljs.core.__destructure_map(map__59261);
var data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59261__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var selection__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59261__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
var component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59261__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var container_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59261__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card","div.card",-459317104),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"300px",new cljs.core.Keyword(null,"height","height",1025178622),"200px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),"Selectable Table"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"200px",new cljs.core.Keyword(null,"margin","margin",-995903681),new cljs.core.Keyword(null,"auto","auto",-566279492)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.re_com.labeled_field.labeled_field,"data",cljs.core.deref(source)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button","button.button",1464242525),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(clicked,cljs.core.inc);

return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(selection__$1,cljs.core.deref(clicked)));
})], null),"Click!"], null)], null)], null);
};
var G__59294 = function (var_args){
var p__59260 = null;
if (arguments.length > 0) {
var G__59298__i = 0, G__59298__a = new Array(arguments.length -  0);
while (G__59298__i < G__59298__a.length) {G__59298__a[G__59298__i] = arguments[G__59298__i + 0]; ++G__59298__i;}
  p__59260 = new cljs.core.IndexedSeq(G__59298__a,0,null);
} 
return G__59294__delegate.call(this,p__59260);};
G__59294.cljs$lang$maxFixedArity = 0;
G__59294.cljs$lang$applyTo = (function (arglist__59299){
var p__59260 = cljs.core.seq(arglist__59299);
return G__59294__delegate(p__59260);
});
G__59294.cljs$core$IFn$_invoke$arity$variadic = G__59294__delegate;
return G__59294;
})()
;
}));

(bh_ui.atom.experimental.ui_element.selectable_table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bh_ui.atom.experimental.ui_element.selectable_table.cljs$lang$applyTo = (function (seq59257){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59257));
}));

bh_ui.atom.experimental.ui_element.three_d_globe = (function bh_ui$atom$experimental$ui_element$three_d_globe(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59300 = arguments.length;
var i__4865__auto___59301 = (0);
while(true){
if((i__4865__auto___59301 < len__4864__auto___59300)){
args__4870__auto__.push((arguments[i__4865__auto___59301]));

var G__59302 = (i__4865__auto___59301 + (1));
i__4865__auto___59301 = G__59302;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return bh_ui.atom.experimental.ui_element.three_d_globe.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(bh_ui.atom.experimental.ui_element.three_d_globe.cljs$core$IFn$_invoke$arity$variadic = (function (p__59267){
var map__59268 = p__59267;
var map__59268__$1 = cljs.core.__destructure_map(map__59268);
var layers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59268__$1,new cljs.core.Keyword(null,"layers","layers",1944875032));
var current_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59268__$1,new cljs.core.Keyword(null,"current-time","current-time",-1609407134));
var component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59268__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var container_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59268__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var l = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(layers);
var t = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(current_time);
return (function() { 
var G__59303__delegate = function (p__59269){
var map__59270 = p__59269;
var map__59270__$1 = cljs.core.__destructure_map(map__59270);
var layers__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59270__$1,new cljs.core.Keyword(null,"layers","layers",1944875032));
var current_time__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59270__$1,new cljs.core.Keyword(null,"current-time","current-time",-1609407134));
var component_id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59270__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var container_id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59270__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card","div.card",-459317104),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"500px",new cljs.core.Keyword(null,"height","height",1025178622),"500px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),"3D Globe Table"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"200px",new cljs.core.Keyword(null,"margin","margin",-995903681),new cljs.core.Keyword(null,"auto","auto",-566279492)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_textarea,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"bh_ui/atom/experimental/ui_element.cljs",new cljs.core.Keyword(null,"line","line",212345235),60], null)),new cljs.core.Keyword(null,"model","model",331153215),reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(l))),new cljs.core.Keyword(null,"rows","rows",850049680),(5),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.List.EMPTY;
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.re_com.labeled_field.labeled_field,"Current Time",cljs.core.deref(t)], null)], null)], null);
};
var G__59303 = function (var_args){
var p__59269 = null;
if (arguments.length > 0) {
var G__59304__i = 0, G__59304__a = new Array(arguments.length -  0);
while (G__59304__i < G__59304__a.length) {G__59304__a[G__59304__i] = arguments[G__59304__i + 0]; ++G__59304__i;}
  p__59269 = new cljs.core.IndexedSeq(G__59304__a,0,null);
} 
return G__59303__delegate.call(this,p__59269);};
G__59303.cljs$lang$maxFixedArity = 0;
G__59303.cljs$lang$applyTo = (function (arglist__59305){
var p__59269 = cljs.core.seq(arglist__59305);
return G__59303__delegate(p__59269);
});
G__59303.cljs$core$IFn$_invoke$arity$variadic = G__59303__delegate;
return G__59303;
})()
;
}));

(bh_ui.atom.experimental.ui_element.three_d_globe.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bh_ui.atom.experimental.ui_element.three_d_globe.cljs$lang$applyTo = (function (seq59262){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59262));
}));

bh_ui.atom.experimental.ui_element.slider = (function bh_ui$atom$experimental$ui_element$slider(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59306 = arguments.length;
var i__4865__auto___59307 = (0);
while(true){
if((i__4865__auto___59307 < len__4864__auto___59306)){
args__4870__auto__.push((arguments[i__4865__auto___59307]));

var G__59308 = (i__4865__auto___59307 + (1));
i__4865__auto___59307 = G__59308;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return bh_ui.atom.experimental.ui_element.slider.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(bh_ui.atom.experimental.ui_element.slider.cljs$core$IFn$_invoke$arity$variadic = (function (p__59273){
var map__59274 = p__59273;
var map__59274__$1 = cljs.core.__destructure_map(map__59274);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59274__$1,new cljs.core.Keyword(null,"value","value",305978217));
var range = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59274__$1,new cljs.core.Keyword(null,"range","range",1639692286));
var v = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(value);
var r = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(range);
return (function() { 
var G__59309__delegate = function (p__59275){
var map__59276 = p__59275;
var map__59276__$1 = cljs.core.__destructure_map(map__59276);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59276__$1,new cljs.core.Keyword(null,"value","value",305978217));
var range__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59276__$1,new cljs.core.Keyword(null,"range","range",1639692286));
var vec__59277 = cljs.core.deref(r);
var min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59277,(0),null);
var max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59277,(1),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card","div.card",-459317104),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"300px",new cljs.core.Keyword(null,"height","height",1025178622),"100px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),"Slider"], null),new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.slider,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"bh_ui/atom/experimental/ui_element.cljs",new cljs.core.Keyword(null,"line","line",212345235),79], null)),new cljs.core.Keyword(null,"model","model",331153215),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(v)),new cljs.core.Keyword(null,"min","min",444991522),min,new cljs.core.Keyword(null,"max","max",61366548),max,new cljs.core.Keyword(null,"width","width",-384071477),"90%",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),new cljs.core.Keyword(null,"auto","auto",-566279492)], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__59271_SHARP_){
return re_frame.core.dispatch_sync(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(value__$1,p1__59271_SHARP_));
}),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),false], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"200px",new cljs.core.Keyword(null,"margin","margin",-995903681),new cljs.core.Keyword(null,"auto","auto",-566279492)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.re_com.labeled_field.labeled_field,"Value",cljs.core.deref(v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.re_com.labeled_field.labeled_field,"Range",cljs.core.deref(r)], null)], null)], null);
};
var G__59309 = function (var_args){
var p__59275 = null;
if (arguments.length > 0) {
var G__59313__i = 0, G__59313__a = new Array(arguments.length -  0);
while (G__59313__i < G__59313__a.length) {G__59313__a[G__59313__i] = arguments[G__59313__i + 0]; ++G__59313__i;}
  p__59275 = new cljs.core.IndexedSeq(G__59313__a,0,null);
} 
return G__59309__delegate.call(this,p__59275);};
G__59309.cljs$lang$maxFixedArity = 0;
G__59309.cljs$lang$applyTo = (function (arglist__59314){
var p__59275 = cljs.core.seq(arglist__59314);
return G__59309__delegate(p__59275);
});
G__59309.cljs$core$IFn$_invoke$arity$variadic = G__59309__delegate;
return G__59309;
})()
;
}));

(bh_ui.atom.experimental.ui_element.slider.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bh_ui.atom.experimental.ui_element.slider.cljs$lang$applyTo = (function (seq59272){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59272));
}));

bh_ui.atom.experimental.ui_element.label = (function bh_ui$atom$experimental$ui_element$label(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59315 = arguments.length;
var i__4865__auto___59316 = (0);
while(true){
if((i__4865__auto___59316 < len__4864__auto___59315)){
args__4870__auto__.push((arguments[i__4865__auto___59316]));

var G__59317 = (i__4865__auto___59316 + (1));
i__4865__auto___59316 = G__59317;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return bh_ui.atom.experimental.ui_element.label.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(bh_ui.atom.experimental.ui_element.label.cljs$core$IFn$_invoke$arity$variadic = (function (p__59281){
var map__59282 = p__59281;
var map__59282__$1 = cljs.core.__destructure_map(map__59282);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59282__$1,new cljs.core.Keyword(null,"value","value",305978217));
var v = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(value);
return (function() { 
var G__59318__delegate = function (p__59283){
var map__59284 = p__59283;
var map__59284__$1 = cljs.core.__destructure_map(map__59284);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59284__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card","div.card",-459317104),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"300px",new cljs.core.Keyword(null,"height","height",1025178622),"100px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),"Label"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"200px",new cljs.core.Keyword(null,"margin","margin",-995903681),new cljs.core.Keyword(null,"auto","auto",-566279492)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.re_com.labeled_field.labeled_field,"Value",cljs.core.deref(v)], null)], null)], null);
};
var G__59318 = function (var_args){
var p__59283 = null;
if (arguments.length > 0) {
var G__59319__i = 0, G__59319__a = new Array(arguments.length -  0);
while (G__59319__i < G__59319__a.length) {G__59319__a[G__59319__i] = arguments[G__59319__i + 0]; ++G__59319__i;}
  p__59283 = new cljs.core.IndexedSeq(G__59319__a,0,null);
} 
return G__59318__delegate.call(this,p__59283);};
G__59318.cljs$lang$maxFixedArity = 0;
G__59318.cljs$lang$applyTo = (function (arglist__59320){
var p__59283 = cljs.core.seq(arglist__59320);
return G__59318__delegate(p__59283);
});
G__59318.cljs$core$IFn$_invoke$arity$variadic = G__59318__delegate;
return G__59318;
})()
;
}));

(bh_ui.atom.experimental.ui_element.label.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bh_ui.atom.experimental.ui_element.label.cljs$lang$applyTo = (function (seq59280){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59280));
}));

bh_ui.atom.experimental.ui_element.meta_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("stunt","config-panel","stunt/config-panel",-1199107162),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),bh_ui.atom.experimental.ui_element.config_panel,new cljs.core.Keyword(null,"ports","ports",-1014790862),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"config-data","config-data",1933573865),new cljs.core.Keyword("port","source-sink","port/source-sink",2080195151)], null)], null),new cljs.core.Keyword("stunt","selectable-table","stunt/selectable-table",-1815356551),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),bh_ui.atom.experimental.ui_element.selectable_table,new cljs.core.Keyword(null,"ports","ports",-1014790862),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("port","source-sink","port/source-sink",2080195151),new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword("port","source","port/source",-436771986)], null)], null),new cljs.core.Keyword("stunt","globe","stunt/globe",909297031),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),bh_ui.atom.experimental.ui_element.three_d_globe,new cljs.core.Keyword(null,"ports","ports",-1014790862),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"layers","layers",1944875032),new cljs.core.Keyword("port","sink","port/sink",185875552),new cljs.core.Keyword(null,"current-time","current-time",-1609407134),new cljs.core.Keyword("port","sink","port/sink",185875552)], null)], null),new cljs.core.Keyword("stunt","label","stunt/label",-1779052758),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),bh_ui.atom.experimental.ui_element.label,new cljs.core.Keyword(null,"ports","ports",-1014790862),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("port","sink","port/sink",185875552)], null)], null),new cljs.core.Keyword("stunt","slider","stunt/slider",-532106171),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),bh_ui.atom.experimental.ui_element.slider,new cljs.core.Keyword(null,"ports","ports",-1014790862),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("port","source-sink","port/source-sink",2080195151),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword("port","sink","port/sink",185875552)], null)], null)], null);
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-meta","register-meta",1726375773),bh_ui.atom.experimental.ui_element.meta_data], null));

//# sourceMappingURL=bh_ui.atom.experimental.ui_element.js.map
