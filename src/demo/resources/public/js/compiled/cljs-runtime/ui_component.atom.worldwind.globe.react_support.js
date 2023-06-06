goog.provide('ui_component.atom.worldwind.globe.react_support');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"ui-component.atom.worldwind.globe.react-support",null,14,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ui-component.atom.worldwind.globe.react-support"], null);
}),null)),null,1694803433,null);
ui_component.atom.worldwind.globe.react_support.find_in_children = (function ui_component$atom$worldwind$globe$react_support$find_in_children(children,idx){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__59569_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__59569_SHARP_),idx);
}),children));
});
ui_component.atom.worldwind.globe.react_support.update_children = (function ui_component$atom$worldwind$globe$react_support$update_children(this$,new_children,old_children){
var new_keys = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new_children));
var old_keys = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),old_children));
var added = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(new_keys,old_keys);
var removed = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(old_keys,new_keys);
if(cljs.core.truth_(removed)){
cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59570_SHARP_){
return ui_component.atom.worldwind.globe.layer.removeLayer(this$,p1__59570_SHARP_);
}),removed));

this$.wwd.redraw();
} else {
}

if(cljs.core.truth_(added)){
cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function ui_component$atom$worldwind$globe$react_support$update_children_$_iter__59572(s__59573){
return (new cljs.core.LazySeq(null,(function (){
var s__59573__$1 = s__59573;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__59573__$1);
if(temp__5753__auto__){
var s__59573__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__59573__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__59573__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__59575 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__59574 = (0);
while(true){
if((i__59574 < size__4651__auto__)){
var map__59576 = cljs.core._nth(c__4650__auto__,i__59574);
var map__59576__$1 = cljs.core.__destructure_map(map__59576);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59576__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var layer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59576__$1,new cljs.core.Keyword(null,"layer","layer",-1601820589));
var z = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59576__$1,new cljs.core.Keyword(null,"z","z",-789527183));
cljs.core.chunk_append(b__59575,ui_component.atom.worldwind.globe.layer.addLayer(this$,z,layer));

var G__59599 = (i__59574 + (1));
i__59574 = G__59599;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59575),ui_component$atom$worldwind$globe$react_support$update_children_$_iter__59572(cljs.core.chunk_rest(s__59573__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59575),null);
}
} else {
var map__59577 = cljs.core.first(s__59573__$2);
var map__59577__$1 = cljs.core.__destructure_map(map__59577);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59577__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var layer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59577__$1,new cljs.core.Keyword(null,"layer","layer",-1601820589));
var z = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59577__$1,new cljs.core.Keyword(null,"z","z",-789527183));
return cljs.core.cons(ui_component.atom.worldwind.globe.layer.addLayer(this$,z,layer),ui_component$atom$worldwind$globe$react_support$update_children_$_iter__59572(cljs.core.rest(s__59573__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59571_SHARP_){
return ui_component.atom.worldwind.globe.react_support.find_in_children(new_children,p1__59571_SHARP_);
}),added));
})());

return this$.wwd.redraw();
} else {
return null;
}
});
ui_component.atom.worldwind.globe.react_support.component_did_mount = (function ui_component$atom$worldwind$globe$react_support$component_did_mount(dom_node,state,this$){
var node_59600 = reagent.dom.dom_node(this$);
cljs.core.reset_BANG_(dom_node,node_59600);

var canvasId = cljs.core.deref(dom_node).id;
var props = reagent.core.props(this$);
(this$.wwd = (new shadow.js.shim.module$worldwindjs.WorldWindow(canvasId)));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"wwd","wwd",-1108399084),this$.wwd);

(this$.roundGlobe = this$.wwd.globe);

if(cljs.core.truth_(new cljs.core.Keyword(null,"projection","projection",-412523042).cljs$core$IFn$_invoke$arity$1(props))){
ui_component.atom.worldwind.globe.projection.change_projection(this$,new cljs.core.Keyword(null,"projection","projection",-412523042).cljs$core$IFn$_invoke$arity$1(props));
} else {
}

cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function ui_component$atom$worldwind$globe$react_support$component_did_mount_$_iter__59587(s__59588){
return (new cljs.core.LazySeq(null,(function (){
var s__59588__$1 = s__59588;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__59588__$1);
if(temp__5753__auto__){
var s__59588__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__59588__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__59588__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__59590 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__59589 = (0);
while(true){
if((i__59589 < size__4651__auto__)){
var map__59591 = cljs.core._nth(c__4650__auto__,i__59589);
var map__59591__$1 = cljs.core.__destructure_map(map__59591);
var layer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59591__$1,new cljs.core.Keyword(null,"layer","layer",-1601820589));
var z = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59591__$1,new cljs.core.Keyword(null,"z","z",-789527183));
cljs.core.chunk_append(b__59590,ui_component.atom.worldwind.globe.layer.addLayer(this$,z,layer));

var G__59601 = (i__59589 + (1));
i__59589 = G__59601;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59590),ui_component$atom$worldwind$globe$react_support$component_did_mount_$_iter__59587(cljs.core.chunk_rest(s__59588__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59590),null);
}
} else {
var map__59592 = cljs.core.first(s__59588__$2);
var map__59592__$1 = cljs.core.__destructure_map(map__59592);
var layer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59592__$1,new cljs.core.Keyword(null,"layer","layer",-1601820589));
var z = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59592__$1,new cljs.core.Keyword(null,"z","z",-789527183));
return cljs.core.cons(ui_component.atom.worldwind.globe.layer.addLayer(this$,z,layer),ui_component$atom$worldwind$globe$react_support$component_did_mount_$_iter__59587(cljs.core.rest(s__59588__$2)));
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
ui_component.atom.worldwind.globe.layer.addLayer(this$,(-1),ui_component.atom.worldwind.globe.layer.controls.controls(this$,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(canvasId)," Controls"].join('')));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"min-max","min-max",-1415739170).cljs$core$IFn$_invoke$arity$1(props))){
ui_component.atom.worldwind.globe.layer.addLayer(this$,(-1),ui_component.atom.worldwind.globe.layer.coordinates.coordinates(this$,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(canvasId)," Coordinates"].join('')));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(props))){
ui_component.atom.worldwind.globe.globe_time.change_time(this$,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(props));
} else {
}

return this$.wwd.redraw();
});
ui_component.atom.worldwind.globe.react_support.component_did_update = (function ui_component$atom$worldwind$globe$react_support$component_did_update(dom_node,state,this$,old_argv){
var vec__59593 = reagent.core.argv(this$);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59593,(0),null);
var new_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59593,(1),null);
var new_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59593,(2),null);
var vec__59596 = old_argv;
var old_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59596,(0),null);
var old_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59596,(1),null);
var old_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59596,(2),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"projection","projection",-412523042).cljs$core$IFn$_invoke$arity$1(old_props),new cljs.core.Keyword(null,"projection","projection",-412523042).cljs$core$IFn$_invoke$arity$1(new_props))){
ui_component.atom.worldwind.globe.projection.change_projection(this$,new cljs.core.Keyword(null,"projection","projection",-412523042).cljs$core$IFn$_invoke$arity$1(new_props));
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(old_props),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(new_props))){
ui_component.atom.worldwind.globe.globe_time.change_time(this$,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(new_props));
} else {
}

ui_component.atom.worldwind.globe.react_support.update_children(this$,new_children,old_children);

return this$.wwd.redraw();
});

//# sourceMappingURL=ui_component.atom.worldwind.globe.react_support.js.map
