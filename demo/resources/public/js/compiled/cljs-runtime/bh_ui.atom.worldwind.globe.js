goog.provide('bh_ui.atom.worldwind.globe');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"bh-ui.atom.worldwind.globe",null,22,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bh-ui.atom.worldwind.globe"], null);
}),null)),null,-2066305418,null);
bh_ui.atom.worldwind.globe.DEFAULT_BACKGROUND_COLOR = "rgb(36,74,101)";
bh_ui.atom.worldwind.globe.sample_data = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword("shape","polygon","shape/polygon",107018784),new cljs.core.Keyword(null,"id","id",-1388402092),"square",new cljs.core.Keyword(null,"locations","locations",-435476560),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [30.0,-130.0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [30.0,-100.0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,-100.0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,-130.0], null)], null),new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),0.3], null),new cljs.core.Keyword(null,"outline-color","outline-color",-804747875),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(1)], null),new cljs.core.Keyword(null,"width","width",-384071477),(2)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword("shape","polygon","shape/polygon",107018784),new cljs.core.Keyword(null,"id","id",-1388402092),"5-sided",new cljs.core.Keyword(null,"locations","locations",-435476560),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(37),-115.0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [32.0,-115.0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [33.0,-107.0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [31.0,-102.0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [35.0,-102.0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [37.0,-115.0], null)], null),new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),0.6], null),new cljs.core.Keyword(null,"outline-color","outline-color",-804747875),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(1)], null),new cljs.core.Keyword(null,"width","width",-384071477),(2)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword("shape","polyline","shape/polyline",-1907093095),new cljs.core.Keyword(null,"id","id",-1388402092),"line1",new cljs.core.Keyword(null,"locations","locations",-435476560),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(35),(-75)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(35),(-125)], null)], null),new cljs.core.Keyword(null,"outline-color","outline-color",-804747875),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(0),1.0], null),new cljs.core.Keyword(null,"width","width",-384071477),(5)], null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword("shape","circle","shape/circle",1944831915),new cljs.core.Keyword(null,"id","id",-1388402092),"circle",new cljs.core.Keyword(null,"location","location",1815599388),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [28.538336,-81.379234], null),new cljs.core.Keyword(null,"radius","radius",-2073122258),(1000000),new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0),0.5], null),new cljs.core.Keyword(null,"outline-color","outline-color",-804747875),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1)], null),new cljs.core.Keyword(null,"width","width",-384071477),(2),new cljs.core.Keyword(null,"height","height",1025178622),(2)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword("shape","polyline","shape/polyline",-1907093095),new cljs.core.Keyword(null,"id","id",-1388402092),"line2",new cljs.core.Keyword(null,"locations","locations",-435476560),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(22),(-55)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(45),(-105)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(36),-125.7], null)], null),new cljs.core.Keyword(null,"outline-color","outline-color",-804747875),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),0.5,0.78,1.0], null),new cljs.core.Keyword(null,"width","width",-384071477),(5)], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword("shape","label","shape/label",-1779986991),new cljs.core.Keyword(null,"id","id",-1388402092),"orlando",new cljs.core.Keyword(null,"location","location",1815599388),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [28.538336,-81.379234], null),new cljs.core.Keyword(null,"label","label",1718410804),"Orlando",new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),0.9,0.0,1.0], null),new cljs.core.Keyword(null,"outline-color","outline-color",-804747875),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),0.9,0.0,1.0], null),new cljs.core.Keyword(null,"width","width",-384071477),(1)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword("shape","image","shape/image",-487971145),new cljs.core.Keyword(null,"id","id",-1388402092),"image-15",new cljs.core.Keyword(null,"url","url",276297046),"data/a.png",new cljs.core.Keyword(null,"bounding-box","bounding-box",201336205),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [22.074653,33.344622,-95.433292,-82.723547], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword("shape","image","shape/image",-487971145),new cljs.core.Keyword(null,"id","id",-1388402092),bh_ui.utils.helpers.component_id(),new cljs.core.Keyword(null,"url","url",276297046),"images/lightning/Lightning3png.png",new cljs.core.Keyword(null,"bounding-box","bounding-box",201336205),bh_ui.utils.bounding_box.make_bounding_box(-26.076,-85.876,0.5)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword("shape","image","shape/image",-487971145),new cljs.core.Keyword(null,"id","id",-1388402092),bh_ui.utils.helpers.component_id(),new cljs.core.Keyword(null,"url","url",276297046),"images/lightning/Lightning3png.png",new cljs.core.Keyword(null,"bounding-box","bounding-box",201336205),bh_ui.utils.bounding_box.make_bounding_box(-25.9087,-84.9876,0.5)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword("shape","image","shape/image",-487971145),new cljs.core.Keyword(null,"id","id",-1388402092),bh_ui.utils.helpers.component_id(),new cljs.core.Keyword(null,"url","url",276297046),"images/lightning/Lightning3png.png",new cljs.core.Keyword(null,"bounding-box","bounding-box",201336205),bh_ui.utils.bounding_box.make_bounding_box(-25.0987,-86.09,0.5)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword("shape","image","shape/image",-487971145),new cljs.core.Keyword(null,"id","id",-1388402092),bh_ui.utils.helpers.component_id(),new cljs.core.Keyword(null,"url","url",276297046),"images/lightning/Lightning3png.png",new cljs.core.Keyword(null,"bounding-box","bounding-box",201336205),bh_ui.utils.bounding_box.make_bounding_box((-26),(-85),0.5)], null)], null);
bh_ui.atom.worldwind.globe.base_layers = (function bh_ui$atom$worldwind$globe$base_layers(globe_id){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(globe_id)," Blue Marble"].join(''),new cljs.core.Keyword(null,"layer","layer",-1601820589),bh_ui.atom.worldwind.globe.layer.blue_marble.blue_marble([cljs.core.str.cljs$core$IFn$_invoke$arity$1(globe_id)," Blue Marble"].join('')),new cljs.core.Keyword(null,"z","z",-789527183),(0)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(globe_id)," Night"].join(''),new cljs.core.Keyword(null,"layer","layer",-1601820589),bh_ui.atom.worldwind.globe.layer.night.night([cljs.core.str.cljs$core$IFn$_invoke$arity$1(globe_id)," Night"].join('')),new cljs.core.Keyword(null,"z","z",-789527183),(1)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(globe_id)," Compass"].join(''),new cljs.core.Keyword(null,"layer","layer",-1601820589),bh_ui.atom.worldwind.globe.layer.compass.compass([cljs.core.str.cljs$core$IFn$_invoke$arity$1(globe_id)," Compass"].join('')),new cljs.core.Keyword(null,"z","z",-789527183),(1)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(globe_id)," Star Field"].join(''),new cljs.core.Keyword(null,"layer","layer",-1601820589),bh_ui.atom.worldwind.globe.layer.star_field.star_field([cljs.core.str.cljs$core$IFn$_invoke$arity$1(globe_id)," Star Field"].join('')),new cljs.core.Keyword(null,"z","z",-789527183),(1)], null)], null);
});
bh_ui.atom.worldwind.globe.globe_STAR_ = (function bh_ui$atom$worldwind$globe$globe_STAR_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59633 = arguments.length;
var i__4865__auto___59634 = (0);
while(true){
if((i__4865__auto___59634 < len__4864__auto___59633)){
args__4870__auto__.push((arguments[i__4865__auto___59634]));

var G__59635 = (i__4865__auto___59634 + (1));
i__4865__auto___59634 = G__59635;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return bh_ui.atom.worldwind.globe.globe_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(bh_ui.atom.worldwind.globe.globe_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
var state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),children], null));
var dom_node = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display-name","display-name",694513143),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"constructor","constructor",-1953928811),(function (this$,props__$1,children__$1){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,new cljs.core.Keyword(null,"wwd","wwd",-1108399084),cljs.core.List.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"canvasId","canvasId",-2110847084),(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(reagent.core.props(this$));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return ["canvas_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(Date.now())].join('');
}
})(),new cljs.core.Keyword(null,"id","id",-1388402092),(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(reagent.core.props(this$));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return ["canvas_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(Date.now())].join('');
}
})(),new cljs.core.Keyword(null,"isValid","isValid",-315930355),false,new cljs.core.Keyword(null,"isDropArmed","isDropArmed",-1480520064),false,new cljs.core.Keyword(null,"projection","projection",-412523042),(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"projection","projection",-412523042).cljs$core$IFn$_invoke$arity$1(reagent.core.props(this$));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(bh_ui.atom.worldwind.globe.projection.projections,(0));
}
})(),new cljs.core.Keyword(null,"layers","layers",1944875032),reagent.core.children(this$)], 0));
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(bh_ui.atom.worldwind.globe.react_support.component_did_mount,dom_node,state),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(bh_ui.atom.worldwind.globe.react_support.component_did_update,dom_node,state),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__59636__delegate = function (props__$1,children__$1){
cljs.core.deref(dom_node);

var cursor = (cljs.core.truth_(new cljs.core.Keyword(null,"isDropArmed","isDropArmed",-1480520064).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))?"crosshair":"default");
var backgroundColor = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return bh_ui.atom.worldwind.globe.DEFAULT_BACKGROUND_COLOR;
}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"canvasId","canvasId",-2110847084).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))], null)], 0)),"Your browser does not support HTML5 Canvas."], null);
};
var G__59636 = function (props__$1,var_args){
var children__$1 = null;
if (arguments.length > 1) {
var G__59640__i = 0, G__59640__a = new Array(arguments.length -  1);
while (G__59640__i < G__59640__a.length) {G__59640__a[G__59640__i] = arguments[G__59640__i + 1]; ++G__59640__i;}
  children__$1 = new cljs.core.IndexedSeq(G__59640__a,0,null);
} 
return G__59636__delegate.call(this,props__$1,children__$1);};
G__59636.cljs$lang$maxFixedArity = 1;
G__59636.cljs$lang$applyTo = (function (arglist__59641){
var props__$1 = cljs.core.first(arglist__59641);
var children__$1 = cljs.core.rest(arglist__59641);
return G__59636__delegate(props__$1,children__$1);
});
G__59636.cljs$core$IFn$_invoke$arity$variadic = G__59636__delegate;
return G__59636;
})()
], null));
}));

(bh_ui.atom.worldwind.globe.globe_STAR_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bh_ui.atom.worldwind.globe.globe_STAR_.cljs$lang$applyTo = (function (seq59622){
var G__59623 = cljs.core.first(seq59622);
var seq59622__$1 = cljs.core.next(seq59622);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59623,seq59622__$1);
}));

bh_ui.atom.worldwind.globe.globe_inter = (function bh_ui$atom$worldwind$globe$globe_inter(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59646 = arguments.length;
var i__4865__auto___59647 = (0);
while(true){
if((i__4865__auto___59647 < len__4864__auto___59646)){
args__4870__auto__.push((arguments[i__4865__auto___59647]));

var G__59648 = (i__4865__auto___59647 + (1));
i__4865__auto___59647 = G__59648;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return bh_ui.atom.worldwind.globe.globe_inter.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(bh_ui.atom.worldwind.globe.globe_inter.cljs$core$IFn$_invoke$arity$variadic = (function (p__59625){
var map__59626 = p__59625;
var map__59626__$1 = cljs.core.__destructure_map(map__59626);
var shapes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59626__$1,new cljs.core.Keyword(null,"shapes","shapes",1897594879));
var current_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59626__$1,new cljs.core.Keyword(null,"current-time","current-time",-1609407134));
var component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59626__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var shape_layers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(bh_ui.atom.worldwind.globe.shape.make_shape,shapes));
var all_layer = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,bh_ui.atom.worldwind.globe.base_layers(component_id),shape_layers);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.worldwind.globe.globe_STAR_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),component_id,new cljs.core.Keyword(null,"time","time",1385887882),cljs_time.coerce.to_date(current_time),new cljs.core.Keyword(null,"projection","projection",-412523042),"3D",new cljs.core.Keyword(null,"min-max","min-max",-1415739170),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"black","black",1294279647),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"3px",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),all_layer], null);
}));

(bh_ui.atom.worldwind.globe.globe_inter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bh_ui.atom.worldwind.globe.globe_inter.cljs$lang$applyTo = (function (seq59624){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59624));
}));

bh_ui.atom.worldwind.globe.globe = (function bh_ui$atom$worldwind$globe$globe(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59652 = arguments.length;
var i__4865__auto___59653 = (0);
while(true){
if((i__4865__auto___59653 < len__4864__auto___59652)){
args__4870__auto__.push((arguments[i__4865__auto___59653]));

var G__59654 = (i__4865__auto___59653 + (1));
i__4865__auto___59653 = G__59654;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return bh_ui.atom.worldwind.globe.globe.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(bh_ui.atom.worldwind.globe.globe.cljs$core$IFn$_invoke$arity$variadic = (function (p__59628){
var map__59629 = p__59628;
var map__59629__$1 = cljs.core.__destructure_map(map__59629);
var shapes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59629__$1,new cljs.core.Keyword(null,"shapes","shapes",1897594879));
var current_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59629__$1,new cljs.core.Keyword(null,"current-time","current-time",-1609407134));
var component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59629__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var container_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59629__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var s = bh_ui.utils.helpers.resolve_value(shapes);
var t = bh_ui.utils.helpers.resolve_value(current_time);
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.worldwind.globe.globe_inter,new cljs.core.Keyword(null,"shapes","shapes",1897594879),cljs.core.deref(s),new cljs.core.Keyword(null,"current-time","current-time",-1609407134),(function (){var or__4253__auto__ = cljs.core.deref(t);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs_time.core.now();
}
})(),new cljs.core.Keyword(null,"component-id","component-id",1551113783),component_id,new cljs.core.Keyword(null,"container-id","container-id",1274665684),container_id], null);
});
}));

(bh_ui.atom.worldwind.globe.globe.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bh_ui.atom.worldwind.globe.globe.cljs$lang$applyTo = (function (seq59627){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59627));
}));

bh_ui.atom.worldwind.globe.meta_data = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ww","globe","ww/globe",662160797),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"bh-ui","bh-ui",-571160375),new cljs.core.Keyword(null,"component","component",1555936782),bh_ui.atom.worldwind.globe.globe,new cljs.core.Keyword(null,"ports","ports",-1014790862),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shapes","shapes",1897594879),new cljs.core.Keyword("port","sink","port/sink",185875552),new cljs.core.Keyword(null,"current-time","current-time",-1609407134),new cljs.core.Keyword("port","sink","port/sink",185875552)], null)], null)], null);
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-meta","register-meta",1726375773),bh_ui.atom.worldwind.globe.meta_data], null));

//# sourceMappingURL=bh_ui.atom.worldwind.globe.js.map
