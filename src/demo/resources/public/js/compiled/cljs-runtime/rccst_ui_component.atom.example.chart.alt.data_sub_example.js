goog.provide('rccst_ui_component.atom.example.chart.alt.data_sub_example');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"rccst-ui-component.atom.example.chart.alt.data-sub-example",null,12,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rccst-ui-component.atom.example.chart.alt.data-sub-example"], null);
}),null)),null,691897015,null);
rccst_ui_component.atom.example.chart.alt.data_sub_example.config = (function rccst_ui_component$atom$example$chart$alt$data_sub_example$config(data){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"blackboard","blackboard",-1864070822),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"topic.sample-data","topic.sample-data",223380112),data], null),new cljs.core.Keyword(null,"container","container",-1736937707),""], null);
});
rccst_ui_component.atom.example.chart.alt.data_sub_example.data_update_example = (function rccst_ui_component$atom$example$chart$alt$data_sub_example$data_update_example(var_args){
var args__4870__auto__ = [];
var len__4864__auto___58696 = arguments.length;
var i__4865__auto___58697 = (0);
while(true){
if((i__4865__auto___58697 < len__4864__auto___58696)){
args__4870__auto__.push((arguments[i__4865__auto___58697]));

var G__58698 = (i__4865__auto___58697 + (1));
i__4865__auto___58697 = G__58698;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return rccst_ui_component.atom.example.chart.alt.data_sub_example.data_update_example.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(rccst_ui_component.atom.example.chart.alt.data_sub_example.data_update_example.cljs$core$IFn$_invoke$arity$variadic = (function (p__58685){
var map__58686 = p__58685;
var map__58686__$1 = cljs.core.__destructure_map(map__58686);
var params = map__58686__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58686__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var default_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58686__$1,new cljs.core.Keyword(null,"default-data","default-data",-1901322301));
var random_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58686__$1,new cljs.core.Keyword(null,"random-data","random-data",-1549112236));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58686__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var data_tools = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58686__$1,new cljs.core.Keyword(null,"data-tools","data-tools",2099087673));
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"rccst_ui_component/atom/example/chart/alt/data_sub_example.cljs",new cljs.core.Keyword(null,"line","line",212345235),29], null)),new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.chart-part","div.chart-part",1045862618),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"90%"], null)], null),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null),cljs.core.seq(params))], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"5px",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"30%"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rccst_ui_component.atom.example.chart.alt.show_data.show_data,data], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [data_tools,data,default_data,random_data], null)], null)], null)], null)], null);
}));

(rccst_ui_component.atom.example.chart.alt.data_sub_example.data_update_example.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(rccst_ui_component.atom.example.chart.alt.data_sub_example.data_update_example.cljs$lang$applyTo = (function (seq58684){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58684));
}));

rccst_ui_component.atom.example.chart.alt.data_sub_example.dummy_container = (function rccst_ui_component$atom$example$chart$alt$data_sub_example$dummy_container(var_args){
var args__4870__auto__ = [];
var len__4864__auto___58699 = arguments.length;
var i__4865__auto___58700 = (0);
while(true){
if((i__4865__auto___58700 < len__4864__auto___58699)){
args__4870__auto__.push((arguments[i__4865__auto___58700]));

var G__58701 = (i__4865__auto___58700 + (1));
i__4865__auto___58700 = G__58701;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return rccst_ui_component.atom.example.chart.alt.data_sub_example.dummy_container.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(rccst_ui_component.atom.example.chart.alt.data_sub_example.dummy_container.cljs$core$IFn$_invoke$arity$variadic = (function (component,default_data,random_data,p__58691){
var map__58692 = p__58691;
var map__58692__$1 = cljs.core.__destructure_map(map__58692);
var params = map__58692__$1;
var component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58692__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var container_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58692__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var id = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var input_params = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(params,new cljs.core.Keyword(null,"component-id","component-id",1551113783),ui_component.utils.helpers.path__GT_keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([component_id,"chart"], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"container-id","container-id",1274665684),component_id], 0));
return (function (){
if((cljs.core.deref(id) == null)){
cljs.core.reset_BANG_(id,component_id);

ui_component.utils.init_container_locals(cljs.core.deref(id),rccst_ui_component.atom.example.chart.alt.data_sub_example.config(default_data));

ui_component.utils.dispatch_local(cljs.core.deref(id),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"container","container",-1736937707)], null),container_id);
} else {
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rccst_ui_component.atom.example.chart.alt.data_sub_example.data_update_example,new cljs.core.Keyword(null,"component","component",1555936782),component], null),cljs.core.seq(input_params));
});
}));

(rccst_ui_component.atom.example.chart.alt.data_sub_example.dummy_container.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(rccst_ui_component.atom.example.chart.alt.data_sub_example.dummy_container.cljs$lang$applyTo = (function (seq58687){
var G__58688 = cljs.core.first(seq58687);
var seq58687__$1 = cljs.core.next(seq58687);
var G__58689 = cljs.core.first(seq58687__$1);
var seq58687__$2 = cljs.core.next(seq58687__$1);
var G__58690 = cljs.core.first(seq58687__$2);
var seq58687__$3 = cljs.core.next(seq58687__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58688,G__58689,G__58690,seq58687__$3);
}));

rccst_ui_component.atom.example.chart.alt.data_sub_example.example = (function rccst_ui_component$atom$example$chart$alt$data_sub_example$example(var_args){
var args__4870__auto__ = [];
var len__4864__auto___58702 = arguments.length;
var i__4865__auto___58703 = (0);
while(true){
if((i__4865__auto___58703 < len__4864__auto___58702)){
args__4870__auto__.push((arguments[i__4865__auto___58703]));

var G__58704 = (i__4865__auto___58703 + (1));
i__4865__auto___58703 = G__58704;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return rccst_ui_component.atom.example.chart.alt.data_sub_example.example.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(rccst_ui_component.atom.example.chart.alt.data_sub_example.example.cljs$core$IFn$_invoke$arity$variadic = (function (p__58694){
var map__58695 = p__58694;
var map__58695__$1 = cljs.core.__destructure_map(map__58695);
var params = map__58695__$1;
var container_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58695__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var sample_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58695__$1,new cljs.core.Keyword(null,"sample-data","sample-data",1646287982));
var default_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58695__$1,new cljs.core.Keyword(null,"default-data","default-data",-1901322301));
var random_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58695__$1,new cljs.core.Keyword(null,"random-data","random-data",-1549112236));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58695__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var input_params = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(params,new cljs.core.Keyword(null,"data","data",-232669377),sample_data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"component-id","component-id",1551113783),container_id,new cljs.core.Keyword(null,"container-id","container-id",1274665684),"",new cljs.core.Keyword(null,"component","component",1555936782),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(rccst_ui_component.atom.example.chart.alt.data_sub_example.dummy_container,component,default_data,random_data)], 0));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rccst_ui_component.atom.utils.component_example], null),cljs.core.seq(input_params));
}));

(rccst_ui_component.atom.example.chart.alt.data_sub_example.example.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(rccst_ui_component.atom.example.chart.alt.data_sub_example.example.cljs$lang$applyTo = (function (seq58693){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58693));
}));


//# sourceMappingURL=rccst_ui_component.atom.example.chart.alt.data_sub_example.js.map
