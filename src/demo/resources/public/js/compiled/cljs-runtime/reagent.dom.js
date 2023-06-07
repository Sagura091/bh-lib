goog.provide('reagent.dom');
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return shadow.js.shim.module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__43512 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__43513 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__43513);

try{return shadow.js.shim.module$react_dom.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__43514 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__43515 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__43515);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__43514);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__43512);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__43517 = arguments.length;
switch (G__43517) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__43524 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43524,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43524,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return shadow.js.shim.module$react_dom.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__43527_43550 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__43528_43551 = null;
var count__43529_43552 = (0);
var i__43530_43553 = (0);
while(true){
if((i__43530_43553 < count__43529_43552)){
var vec__43539_43554 = chunk__43528_43551.cljs$core$IIndexed$_nth$arity$2(null,i__43530_43553);
var container_43555 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43539_43554,(0),null);
var comp_43556 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43539_43554,(1),null);
reagent.dom.re_render_component(comp_43556,container_43555);


var G__43557 = seq__43527_43550;
var G__43558 = chunk__43528_43551;
var G__43559 = count__43529_43552;
var G__43560 = (i__43530_43553 + (1));
seq__43527_43550 = G__43557;
chunk__43528_43551 = G__43558;
count__43529_43552 = G__43559;
i__43530_43553 = G__43560;
continue;
} else {
var temp__5753__auto___43561 = cljs.core.seq(seq__43527_43550);
if(temp__5753__auto___43561){
var seq__43527_43562__$1 = temp__5753__auto___43561;
if(cljs.core.chunked_seq_QMARK_(seq__43527_43562__$1)){
var c__4679__auto___43563 = cljs.core.chunk_first(seq__43527_43562__$1);
var G__43564 = cljs.core.chunk_rest(seq__43527_43562__$1);
var G__43565 = c__4679__auto___43563;
var G__43566 = cljs.core.count(c__4679__auto___43563);
var G__43567 = (0);
seq__43527_43550 = G__43564;
chunk__43528_43551 = G__43565;
count__43529_43552 = G__43566;
i__43530_43553 = G__43567;
continue;
} else {
var vec__43544_43568 = cljs.core.first(seq__43527_43562__$1);
var container_43569 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43544_43568,(0),null);
var comp_43570 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43544_43568,(1),null);
reagent.dom.re_render_component(comp_43570,container_43569);


var G__43571 = cljs.core.next(seq__43527_43562__$1);
var G__43572 = null;
var G__43573 = (0);
var G__43574 = (0);
seq__43527_43550 = G__43571;
chunk__43528_43551 = G__43572;
count__43529_43552 = G__43573;
i__43530_43553 = G__43574;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
