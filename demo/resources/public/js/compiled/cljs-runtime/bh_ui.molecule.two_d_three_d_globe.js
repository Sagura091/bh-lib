goog.provide('bh_ui.molecule.two_d_three_d_globe');
bh_ui.molecule.two_d_three_d_globe.sample_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
bh_ui.molecule.two_d_three_d_globe.source_code = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"2D/3D GLobe"], null);
bh_ui.molecule.two_d_three_d_globe.local_config = (function bh_ui$molecule$two_d_three_d_globe$local_config(data){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"two-d-three-d","two-d-three-d",1930101590),new cljs.core.Keyword(null,"2d","2d",1747322865)], null);
});
bh_ui.molecule.two_d_three_d_globe.config = (function bh_ui$molecule$two_d_three_d_globe$config(component_id,data){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bh_ui.utils.default_pub_sub,bh_ui.molecule.two_d_three_d_globe.local_config(data)], 0));
});
bh_ui.molecule.two_d_three_d_globe.three_d_view = (function bh_ui$molecule$two_d_three_d_globe$three_d_view(data,component_id,container_id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"3D view"], null);
});
bh_ui.molecule.two_d_three_d_globe.two_d_view = (function bh_ui$molecule$two_d_three_d_globe$two_d_view(data,component_id,container_id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"2D view"], null);
});
bh_ui.molecule.two_d_three_d_globe.component_panel = (function bh_ui$molecule$two_d_three_d_globe$component_panel(data,component_id,container_id){
var subscriptions = bh_ui.utils.build_subs(component_id,bh_ui.molecule.two_d_three_d_globe.local_config(data));
return (function (data__$1,component_id__$1,container_id__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button.is-info.is-outlined","button.button.is-info.is-outlined",430633056),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"right","right",-452581833)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"2d","2d",1747322865),bh_ui.utils.resolve_sub(subscriptions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"two-d-three-d","two-d-three-d",1930101590)], null)))){
return bh_ui.utils.dispatch_local(component_id__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"two-d-three-d","two-d-three-d",1930101590)], null),new cljs.core.Keyword(null,"3d","3d",-1024035737));
} else {
return bh_ui.utils.dispatch_local(component_id__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"two-d-three-d","two-d-three-d",1930101590)], null),new cljs.core.Keyword(null,"2d","2d",1747322865));
}
})], null),(function (){var pred__59921 = cljs.core._EQ_;
var expr__59922 = bh_ui.utils.resolve_sub(subscriptions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"two-d-three-d","two-d-three-d",1930101590)], null));
if(cljs.core.truth_((pred__59921.cljs$core$IFn$_invoke$arity$2 ? pred__59921.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"2d","2d",1747322865),expr__59922) : pred__59921.call(null,new cljs.core.Keyword(null,"2d","2d",1747322865),expr__59922)))){
return "to 3d";
} else {
if(cljs.core.truth_((pred__59921.cljs$core$IFn$_invoke$arity$2 ? pred__59921.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"3d","3d",-1024035737),expr__59922) : pred__59921.call(null,new cljs.core.Keyword(null,"3d","3d",-1024035737),expr__59922)))){
return "to 2d";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__59922)].join('')));
}
}
})()], null),(function (){var pred__59924 = cljs.core._EQ_;
var expr__59925 = bh_ui.utils.resolve_sub(subscriptions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"two-d-three-d","two-d-three-d",1930101590)], null));
if(cljs.core.truth_((pred__59924.cljs$core$IFn$_invoke$arity$2 ? pred__59924.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"3d","3d",-1024035737),expr__59925) : pred__59924.call(null,new cljs.core.Keyword(null,"3d","3d",-1024035737),expr__59925)))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.molecule.two_d_three_d_globe.three_d_view,data__$1,component_id__$1,container_id__$1], null);
} else {
if(cljs.core.truth_((pred__59924.cljs$core$IFn$_invoke$arity$2 ? pred__59924.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"2d","2d",1747322865),expr__59925) : pred__59924.call(null,new cljs.core.Keyword(null,"2d","2d",1747322865),expr__59925)))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.molecule.two_d_three_d_globe.two_d_view,data__$1,component_id__$1,container_id__$1], null);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__59925)].join('')));
}
}
})()], null);
});
});
bh_ui.molecule.two_d_three_d_globe.component = (function bh_ui$molecule$two_d_three_d_globe$component(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59930 = arguments.length;
var i__4865__auto___59931 = (0);
while(true){
if((i__4865__auto___59931 < len__4864__auto___59930)){
args__4870__auto__.push((arguments[i__4865__auto___59931]));

var G__59932 = (i__4865__auto___59931 + (1));
i__4865__auto___59931 = G__59932;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return bh_ui.molecule.two_d_three_d_globe.component.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(bh_ui.molecule.two_d_three_d_globe.component.cljs$core$IFn$_invoke$arity$variadic = (function (p__59928){
var map__59929 = p__59928;
var map__59929__$1 = cljs.core.__destructure_map(map__59929);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59929__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59929__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var container_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59929__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var id = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function (){
if((cljs.core.deref(id) == null)){
cljs.core.reset_BANG_(id,component_id);

bh_ui.utils.init_container_locals(cljs.core.deref(id),bh_ui.molecule.two_d_three_d_globe.config(cljs.core.deref(id),data));

bh_ui.utils.dispatch_local(cljs.core.deref(id),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"container","container",-1736937707)], null),container_id);
} else {
}

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.molecule.two_d_three_d_globe.component_panel,data,cljs.core.deref(id),container_id], null);
});
}));

(bh_ui.molecule.two_d_three_d_globe.component.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bh_ui.molecule.two_d_three_d_globe.component.cljs$lang$applyTo = (function (seq59927){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59927));
}));


//# sourceMappingURL=bh_ui.molecule.two_d_three_d_globe.js.map
