goog.provide('bh_ui.atom.worldwind.globe.react_support');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"bh-ui.atom.worldwind.globe.react-support",null,14,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bh-ui.atom.worldwind.globe.react-support"], null);
}),null)),null,175026660,null);
bh_ui.atom.worldwind.globe.react_support.find_in_children = (function bh_ui$atom$worldwind$globe$react_support$find_in_children(children,idx){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__59589_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__59589_SHARP_),idx);
}),children));
});
bh_ui.atom.worldwind.globe.react_support.update_children = (function bh_ui$atom$worldwind$globe$react_support$update_children(this$,new_children,old_children){
var new_keys = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new_children));
var old_keys = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),old_children));
var added = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(new_keys,old_keys);
var removed = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(old_keys,new_keys);
if(cljs.core.truth_(removed)){
cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59590_SHARP_){
return bh_ui.atom.worldwind.globe.layer.removeLayer(this$,p1__59590_SHARP_);
}),removed));

this$.wwd.redraw();
} else {
}

if(cljs.core.truth_(added)){
cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function bh_ui$atom$worldwind$globe$react_support$update_children_$_iter__59592(s__59593){
return (new cljs.core.LazySeq(null,(function (){
var s__59593__$1 = s__59593;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__59593__$1);
if(temp__5753__auto__){
var s__59593__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__59593__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__59593__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__59595 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__59594 = (0);
while(true){
if((i__59594 < size__4651__auto__)){
var map__59596 = cljs.core._nth(c__4650__auto__,i__59594);
var map__59596__$1 = cljs.core.__destructure_map(map__59596);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59596__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var layer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59596__$1,new cljs.core.Keyword(null,"layer","layer",-1601820589));
var z = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59596__$1,new cljs.core.Keyword(null,"z","z",-789527183));
cljs.core.chunk_append(b__59595,bh_ui.atom.worldwind.globe.layer.addLayer(this$,z,layer));

var G__59616 = (i__59594 + (1));
i__59594 = G__59616;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59595),bh_ui$atom$worldwind$globe$react_support$update_children_$_iter__59592(cljs.core.chunk_rest(s__59593__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59595),null);
}
} else {
var map__59597 = cljs.core.first(s__59593__$2);
var map__59597__$1 = cljs.core.__destructure_map(map__59597);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59597__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var layer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59597__$1,new cljs.core.Keyword(null,"layer","layer",-1601820589));
var z = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59597__$1,new cljs.core.Keyword(null,"z","z",-789527183));
return cljs.core.cons(bh_ui.atom.worldwind.globe.layer.addLayer(this$,z,layer),bh_ui$atom$worldwind$globe$react_support$update_children_$_iter__59592(cljs.core.rest(s__59593__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59591_SHARP_){
return bh_ui.atom.worldwind.globe.react_support.find_in_children(new_children,p1__59591_SHARP_);
}),added));
})());

return this$.wwd.redraw();
} else {
return null;
}
});
bh_ui.atom.worldwind.globe.react_support.component_did_mount = (function bh_ui$atom$worldwind$globe$react_support$component_did_mount(dom_node,state,this$){
var node_59617 = reagent.dom.dom_node(this$);
cljs.core.reset_BANG_(dom_node,node_59617);

var canvasId = cljs.core.deref(dom_node).id;
var props = reagent.core.props(this$);
(this$.wwd = (new shadow.js.shim.module$worldwindjs.WorldWindow(canvasId)));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"wwd","wwd",-1108399084),this$.wwd);

(this$.roundGlobe = this$.wwd.globe);

if(cljs.core.truth_(new cljs.core.Keyword(null,"projection","projection",-412523042).cljs$core$IFn$_invoke$arity$1(props))){
bh_ui.atom.worldwind.globe.projection.change_projection(this$,new cljs.core.Keyword(null,"projection","projection",-412523042).cljs$core$IFn$_invoke$arity$1(props));
} else {
}

cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function bh_ui$atom$worldwind$globe$react_support$component_did_mount_$_iter__59598(s__59599){
return (new cljs.core.LazySeq(null,(function (){
var s__59599__$1 = s__59599;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__59599__$1);
if(temp__5753__auto__){
var s__59599__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__59599__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__59599__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__59601 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__59600 = (0);
while(true){
if((i__59600 < size__4651__auto__)){
var map__59602 = cljs.core._nth(c__4650__auto__,i__59600);
var map__59602__$1 = cljs.core.__destructure_map(map__59602);
var layer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59602__$1,new cljs.core.Keyword(null,"layer","layer",-1601820589));
var z = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59602__$1,new cljs.core.Keyword(null,"z","z",-789527183));
cljs.core.chunk_append(b__59601,bh_ui.atom.worldwind.globe.layer.addLayer(this$,z,layer));

var G__59621 = (i__59600 + (1));
i__59600 = G__59621;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59601),bh_ui$atom$worldwind$globe$react_support$component_did_mount_$_iter__59598(cljs.core.chunk_rest(s__59599__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59601),null);
}
} else {
var map__59603 = cljs.core.first(s__59599__$2);
var map__59603__$1 = cljs.core.__destructure_map(map__59603);
var layer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59603__$1,new cljs.core.Keyword(null,"layer","layer",-1601820589));
var z = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59603__$1,new cljs.core.Keyword(null,"z","z",-789527183));
return cljs.core.cons(bh_ui.atom.worldwind.globe.layer.addLayer(this$,z,layer),bh_ui$atom$worldwind$globe$react_support$component_did_mount_$_iter__59598(cljs.core.rest(s__59599__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.first(reagent.core.children(this$)));
})());

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"min-max","min-max",-1415739170).cljs$core$IFn$_invoke$arity$1(props))){
bh_ui.atom.worldwind.globe.layer.addLayer(this$,(-1),bh_ui.atom.worldwind.globe.layer.controls.controls(this$,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(canvasId)," Controls"].join('')));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"min-max","min-max",-1415739170).cljs$core$IFn$_invoke$arity$1(props))){
bh_ui.atom.worldwind.globe.layer.addLayer(this$,(-1),bh_ui.atom.worldwind.globe.layer.coordinates.coordinates(this$,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(canvasId)," Coordinates"].join('')));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(props))){
bh_ui.atom.worldwind.globe.globe_time.change_time(this$,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(props));
} else {
}

return this$.wwd.redraw();
});
bh_ui.atom.worldwind.globe.react_support.component_did_update = (function bh_ui$atom$worldwind$globe$react_support$component_did_update(dom_node,state,this$,old_argv){
var vec__59608 = reagent.core.argv(this$);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59608,(0),null);
var new_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59608,(1),null);
var new_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59608,(2),null);
var vec__59611 = old_argv;
var old_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59611,(0),null);
var old_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59611,(1),null);
var old_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59611,(2),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"projection","projection",-412523042).cljs$core$IFn$_invoke$arity$1(old_props),new cljs.core.Keyword(null,"projection","projection",-412523042).cljs$core$IFn$_invoke$arity$1(new_props))){
bh_ui.atom.worldwind.globe.projection.change_projection(this$,new cljs.core.Keyword(null,"projection","projection",-412523042).cljs$core$IFn$_invoke$arity$1(new_props));
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(old_props),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(new_props))){
bh_ui.atom.worldwind.globe.globe_time.change_time(this$,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(new_props));
} else {
}

bh_ui.atom.worldwind.globe.react_support.update_children(this$,new_children,old_children);

return this$.wwd.redraw();
});

//# sourceMappingURL=bh_ui.atom.worldwind.globe.react_support.js.map
