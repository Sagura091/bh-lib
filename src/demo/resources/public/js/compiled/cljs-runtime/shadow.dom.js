goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_60331 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_60331(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_60332 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_60332(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__59691 = coll;
var G__59692 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__59691,G__59692) : shadow.dom.lazy_native_coll_seq.call(null,G__59691,G__59692));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__59726 = arguments.length;
switch (G__59726) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__59728 = arguments.length;
switch (G__59728) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__59760 = arguments.length;
switch (G__59760) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__59765 = arguments.length;
switch (G__59765) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__59772 = arguments.length;
switch (G__59772) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__59794 = arguments.length;
switch (G__59794) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e59803){if((e59803 instanceof Object)){
var e = e59803;
return console.log("didnt support attachEvent",el,e);
} else {
throw e59803;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__59811 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__59812 = null;
var count__59813 = (0);
var i__59814 = (0);
while(true){
if((i__59814 < count__59813)){
var el = chunk__59812.cljs$core$IIndexed$_nth$arity$2(null,i__59814);
var handler_60348__$1 = ((function (seq__59811,chunk__59812,count__59813,i__59814,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__59811,chunk__59812,count__59813,i__59814,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_60348__$1);


var G__60349 = seq__59811;
var G__60350 = chunk__59812;
var G__60351 = count__59813;
var G__60352 = (i__59814 + (1));
seq__59811 = G__60349;
chunk__59812 = G__60350;
count__59813 = G__60351;
i__59814 = G__60352;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__59811);
if(temp__5753__auto__){
var seq__59811__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59811__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__59811__$1);
var G__60353 = cljs.core.chunk_rest(seq__59811__$1);
var G__60354 = c__4679__auto__;
var G__60355 = cljs.core.count(c__4679__auto__);
var G__60356 = (0);
seq__59811 = G__60353;
chunk__59812 = G__60354;
count__59813 = G__60355;
i__59814 = G__60356;
continue;
} else {
var el = cljs.core.first(seq__59811__$1);
var handler_60357__$1 = ((function (seq__59811,chunk__59812,count__59813,i__59814,el,seq__59811__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__59811,chunk__59812,count__59813,i__59814,el,seq__59811__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_60357__$1);


var G__60358 = cljs.core.next(seq__59811__$1);
var G__60359 = null;
var G__60360 = (0);
var G__60361 = (0);
seq__59811 = G__60358;
chunk__59812 = G__60359;
count__59813 = G__60360;
i__59814 = G__60361;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__59848 = arguments.length;
switch (G__59848) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__59857 = cljs.core.seq(events);
var chunk__59858 = null;
var count__59859 = (0);
var i__59860 = (0);
while(true){
if((i__59860 < count__59859)){
var vec__59869 = chunk__59858.cljs$core$IIndexed$_nth$arity$2(null,i__59860);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59869,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59869,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__60363 = seq__59857;
var G__60364 = chunk__59858;
var G__60365 = count__59859;
var G__60366 = (i__59860 + (1));
seq__59857 = G__60363;
chunk__59858 = G__60364;
count__59859 = G__60365;
i__59860 = G__60366;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__59857);
if(temp__5753__auto__){
var seq__59857__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59857__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__59857__$1);
var G__60370 = cljs.core.chunk_rest(seq__59857__$1);
var G__60371 = c__4679__auto__;
var G__60372 = cljs.core.count(c__4679__auto__);
var G__60373 = (0);
seq__59857 = G__60370;
chunk__59858 = G__60371;
count__59859 = G__60372;
i__59860 = G__60373;
continue;
} else {
var vec__59872 = cljs.core.first(seq__59857__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59872,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59872,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__60374 = cljs.core.next(seq__59857__$1);
var G__60375 = null;
var G__60376 = (0);
var G__60377 = (0);
seq__59857 = G__60374;
chunk__59858 = G__60375;
count__59859 = G__60376;
i__59860 = G__60377;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__59898 = cljs.core.seq(styles);
var chunk__59900 = null;
var count__59901 = (0);
var i__59902 = (0);
while(true){
if((i__59902 < count__59901)){
var vec__59914 = chunk__59900.cljs$core$IIndexed$_nth$arity$2(null,i__59902);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59914,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59914,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__60378 = seq__59898;
var G__60379 = chunk__59900;
var G__60380 = count__59901;
var G__60381 = (i__59902 + (1));
seq__59898 = G__60378;
chunk__59900 = G__60379;
count__59901 = G__60380;
i__59902 = G__60381;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__59898);
if(temp__5753__auto__){
var seq__59898__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59898__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__59898__$1);
var G__60385 = cljs.core.chunk_rest(seq__59898__$1);
var G__60386 = c__4679__auto__;
var G__60387 = cljs.core.count(c__4679__auto__);
var G__60388 = (0);
seq__59898 = G__60385;
chunk__59900 = G__60386;
count__59901 = G__60387;
i__59902 = G__60388;
continue;
} else {
var vec__59917 = cljs.core.first(seq__59898__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59917,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59917,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__60389 = cljs.core.next(seq__59898__$1);
var G__60390 = null;
var G__60391 = (0);
var G__60392 = (0);
seq__59898 = G__60389;
chunk__59900 = G__60390;
count__59901 = G__60391;
i__59902 = G__60392;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__59931_60393 = key;
var G__59931_60394__$1 = (((G__59931_60393 instanceof cljs.core.Keyword))?G__59931_60393.fqn:null);
switch (G__59931_60394__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_60396 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_60396,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_60396,"aria-");
}
})())){
el.setAttribute(ks_60396,value);
} else {
(el[ks_60396] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__59952){
var map__59953 = p__59952;
var map__59953__$1 = cljs.core.__destructure_map(map__59953);
var props = map__59953__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59953__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__59956 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59956,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59956,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59956,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__59961 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__59961,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__59961;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__59969 = arguments.length;
switch (G__59969) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__59998){
var vec__60000 = p__59998;
var seq__60001 = cljs.core.seq(vec__60000);
var first__60002 = cljs.core.first(seq__60001);
var seq__60001__$1 = cljs.core.next(seq__60001);
var nn = first__60002;
var first__60002__$1 = cljs.core.first(seq__60001__$1);
var seq__60001__$2 = cljs.core.next(seq__60001__$1);
var np = first__60002__$1;
var nc = seq__60001__$2;
var node = vec__60000;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__60003 = nn;
var G__60004 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__60003,G__60004) : create_fn.call(null,G__60003,G__60004));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__60005 = nn;
var G__60006 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__60005,G__60006) : create_fn.call(null,G__60005,G__60006));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__60007 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60007,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60007,(1),null);
var seq__60011_60403 = cljs.core.seq(node_children);
var chunk__60012_60404 = null;
var count__60013_60405 = (0);
var i__60014_60406 = (0);
while(true){
if((i__60014_60406 < count__60013_60405)){
var child_struct_60407 = chunk__60012_60404.cljs$core$IIndexed$_nth$arity$2(null,i__60014_60406);
var children_60408 = shadow.dom.dom_node(child_struct_60407);
if(cljs.core.seq_QMARK_(children_60408)){
var seq__60052_60409 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_60408));
var chunk__60054_60410 = null;
var count__60055_60411 = (0);
var i__60056_60412 = (0);
while(true){
if((i__60056_60412 < count__60055_60411)){
var child_60413 = chunk__60054_60410.cljs$core$IIndexed$_nth$arity$2(null,i__60056_60412);
if(cljs.core.truth_(child_60413)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_60413);


var G__60414 = seq__60052_60409;
var G__60415 = chunk__60054_60410;
var G__60416 = count__60055_60411;
var G__60417 = (i__60056_60412 + (1));
seq__60052_60409 = G__60414;
chunk__60054_60410 = G__60415;
count__60055_60411 = G__60416;
i__60056_60412 = G__60417;
continue;
} else {
var G__60418 = seq__60052_60409;
var G__60419 = chunk__60054_60410;
var G__60420 = count__60055_60411;
var G__60421 = (i__60056_60412 + (1));
seq__60052_60409 = G__60418;
chunk__60054_60410 = G__60419;
count__60055_60411 = G__60420;
i__60056_60412 = G__60421;
continue;
}
} else {
var temp__5753__auto___60422 = cljs.core.seq(seq__60052_60409);
if(temp__5753__auto___60422){
var seq__60052_60423__$1 = temp__5753__auto___60422;
if(cljs.core.chunked_seq_QMARK_(seq__60052_60423__$1)){
var c__4679__auto___60424 = cljs.core.chunk_first(seq__60052_60423__$1);
var G__60425 = cljs.core.chunk_rest(seq__60052_60423__$1);
var G__60426 = c__4679__auto___60424;
var G__60427 = cljs.core.count(c__4679__auto___60424);
var G__60428 = (0);
seq__60052_60409 = G__60425;
chunk__60054_60410 = G__60426;
count__60055_60411 = G__60427;
i__60056_60412 = G__60428;
continue;
} else {
var child_60429 = cljs.core.first(seq__60052_60423__$1);
if(cljs.core.truth_(child_60429)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_60429);


var G__60430 = cljs.core.next(seq__60052_60423__$1);
var G__60431 = null;
var G__60432 = (0);
var G__60433 = (0);
seq__60052_60409 = G__60430;
chunk__60054_60410 = G__60431;
count__60055_60411 = G__60432;
i__60056_60412 = G__60433;
continue;
} else {
var G__60434 = cljs.core.next(seq__60052_60423__$1);
var G__60435 = null;
var G__60436 = (0);
var G__60437 = (0);
seq__60052_60409 = G__60434;
chunk__60054_60410 = G__60435;
count__60055_60411 = G__60436;
i__60056_60412 = G__60437;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_60408);
}


var G__60439 = seq__60011_60403;
var G__60442 = chunk__60012_60404;
var G__60443 = count__60013_60405;
var G__60444 = (i__60014_60406 + (1));
seq__60011_60403 = G__60439;
chunk__60012_60404 = G__60442;
count__60013_60405 = G__60443;
i__60014_60406 = G__60444;
continue;
} else {
var temp__5753__auto___60445 = cljs.core.seq(seq__60011_60403);
if(temp__5753__auto___60445){
var seq__60011_60446__$1 = temp__5753__auto___60445;
if(cljs.core.chunked_seq_QMARK_(seq__60011_60446__$1)){
var c__4679__auto___60447 = cljs.core.chunk_first(seq__60011_60446__$1);
var G__60448 = cljs.core.chunk_rest(seq__60011_60446__$1);
var G__60449 = c__4679__auto___60447;
var G__60450 = cljs.core.count(c__4679__auto___60447);
var G__60451 = (0);
seq__60011_60403 = G__60448;
chunk__60012_60404 = G__60449;
count__60013_60405 = G__60450;
i__60014_60406 = G__60451;
continue;
} else {
var child_struct_60452 = cljs.core.first(seq__60011_60446__$1);
var children_60453 = shadow.dom.dom_node(child_struct_60452);
if(cljs.core.seq_QMARK_(children_60453)){
var seq__60086_60454 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_60453));
var chunk__60088_60455 = null;
var count__60089_60456 = (0);
var i__60090_60457 = (0);
while(true){
if((i__60090_60457 < count__60089_60456)){
var child_60458 = chunk__60088_60455.cljs$core$IIndexed$_nth$arity$2(null,i__60090_60457);
if(cljs.core.truth_(child_60458)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_60458);


var G__60459 = seq__60086_60454;
var G__60460 = chunk__60088_60455;
var G__60461 = count__60089_60456;
var G__60462 = (i__60090_60457 + (1));
seq__60086_60454 = G__60459;
chunk__60088_60455 = G__60460;
count__60089_60456 = G__60461;
i__60090_60457 = G__60462;
continue;
} else {
var G__60463 = seq__60086_60454;
var G__60464 = chunk__60088_60455;
var G__60465 = count__60089_60456;
var G__60466 = (i__60090_60457 + (1));
seq__60086_60454 = G__60463;
chunk__60088_60455 = G__60464;
count__60089_60456 = G__60465;
i__60090_60457 = G__60466;
continue;
}
} else {
var temp__5753__auto___60467__$1 = cljs.core.seq(seq__60086_60454);
if(temp__5753__auto___60467__$1){
var seq__60086_60468__$1 = temp__5753__auto___60467__$1;
if(cljs.core.chunked_seq_QMARK_(seq__60086_60468__$1)){
var c__4679__auto___60469 = cljs.core.chunk_first(seq__60086_60468__$1);
var G__60470 = cljs.core.chunk_rest(seq__60086_60468__$1);
var G__60471 = c__4679__auto___60469;
var G__60472 = cljs.core.count(c__4679__auto___60469);
var G__60473 = (0);
seq__60086_60454 = G__60470;
chunk__60088_60455 = G__60471;
count__60089_60456 = G__60472;
i__60090_60457 = G__60473;
continue;
} else {
var child_60474 = cljs.core.first(seq__60086_60468__$1);
if(cljs.core.truth_(child_60474)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_60474);


var G__60475 = cljs.core.next(seq__60086_60468__$1);
var G__60476 = null;
var G__60477 = (0);
var G__60478 = (0);
seq__60086_60454 = G__60475;
chunk__60088_60455 = G__60476;
count__60089_60456 = G__60477;
i__60090_60457 = G__60478;
continue;
} else {
var G__60479 = cljs.core.next(seq__60086_60468__$1);
var G__60480 = null;
var G__60481 = (0);
var G__60482 = (0);
seq__60086_60454 = G__60479;
chunk__60088_60455 = G__60480;
count__60089_60456 = G__60481;
i__60090_60457 = G__60482;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_60453);
}


var G__60483 = cljs.core.next(seq__60011_60446__$1);
var G__60484 = null;
var G__60485 = (0);
var G__60486 = (0);
seq__60011_60403 = G__60483;
chunk__60012_60404 = G__60484;
count__60013_60405 = G__60485;
i__60014_60406 = G__60486;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__60130 = cljs.core.seq(node);
var chunk__60131 = null;
var count__60132 = (0);
var i__60133 = (0);
while(true){
if((i__60133 < count__60132)){
var n = chunk__60131.cljs$core$IIndexed$_nth$arity$2(null,i__60133);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__60487 = seq__60130;
var G__60488 = chunk__60131;
var G__60489 = count__60132;
var G__60490 = (i__60133 + (1));
seq__60130 = G__60487;
chunk__60131 = G__60488;
count__60132 = G__60489;
i__60133 = G__60490;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__60130);
if(temp__5753__auto__){
var seq__60130__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60130__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__60130__$1);
var G__60491 = cljs.core.chunk_rest(seq__60130__$1);
var G__60492 = c__4679__auto__;
var G__60493 = cljs.core.count(c__4679__auto__);
var G__60494 = (0);
seq__60130 = G__60491;
chunk__60131 = G__60492;
count__60132 = G__60493;
i__60133 = G__60494;
continue;
} else {
var n = cljs.core.first(seq__60130__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__60495 = cljs.core.next(seq__60130__$1);
var G__60496 = null;
var G__60497 = (0);
var G__60498 = (0);
seq__60130 = G__60495;
chunk__60131 = G__60496;
count__60132 = G__60497;
i__60133 = G__60498;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__60153 = arguments.length;
switch (G__60153) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__60155 = arguments.length;
switch (G__60155) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__60170 = arguments.length;
switch (G__60170) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___60502 = arguments.length;
var i__4865__auto___60503 = (0);
while(true){
if((i__4865__auto___60503 < len__4864__auto___60502)){
args__4870__auto__.push((arguments[i__4865__auto___60503]));

var G__60504 = (i__4865__auto___60503 + (1));
i__4865__auto___60503 = G__60504;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__60172_60505 = cljs.core.seq(nodes);
var chunk__60173_60506 = null;
var count__60174_60507 = (0);
var i__60175_60508 = (0);
while(true){
if((i__60175_60508 < count__60174_60507)){
var node_60509 = chunk__60173_60506.cljs$core$IIndexed$_nth$arity$2(null,i__60175_60508);
fragment.appendChild(shadow.dom._to_dom(node_60509));


var G__60510 = seq__60172_60505;
var G__60511 = chunk__60173_60506;
var G__60512 = count__60174_60507;
var G__60513 = (i__60175_60508 + (1));
seq__60172_60505 = G__60510;
chunk__60173_60506 = G__60511;
count__60174_60507 = G__60512;
i__60175_60508 = G__60513;
continue;
} else {
var temp__5753__auto___60514 = cljs.core.seq(seq__60172_60505);
if(temp__5753__auto___60514){
var seq__60172_60515__$1 = temp__5753__auto___60514;
if(cljs.core.chunked_seq_QMARK_(seq__60172_60515__$1)){
var c__4679__auto___60516 = cljs.core.chunk_first(seq__60172_60515__$1);
var G__60517 = cljs.core.chunk_rest(seq__60172_60515__$1);
var G__60518 = c__4679__auto___60516;
var G__60519 = cljs.core.count(c__4679__auto___60516);
var G__60520 = (0);
seq__60172_60505 = G__60517;
chunk__60173_60506 = G__60518;
count__60174_60507 = G__60519;
i__60175_60508 = G__60520;
continue;
} else {
var node_60521 = cljs.core.first(seq__60172_60515__$1);
fragment.appendChild(shadow.dom._to_dom(node_60521));


var G__60522 = cljs.core.next(seq__60172_60515__$1);
var G__60523 = null;
var G__60524 = (0);
var G__60525 = (0);
seq__60172_60505 = G__60522;
chunk__60173_60506 = G__60523;
count__60174_60507 = G__60524;
i__60175_60508 = G__60525;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq60171){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60171));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__60176_60526 = cljs.core.seq(scripts);
var chunk__60177_60527 = null;
var count__60178_60528 = (0);
var i__60179_60529 = (0);
while(true){
if((i__60179_60529 < count__60178_60528)){
var vec__60186_60530 = chunk__60177_60527.cljs$core$IIndexed$_nth$arity$2(null,i__60179_60529);
var script_tag_60531 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60186_60530,(0),null);
var script_body_60532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60186_60530,(1),null);
eval(script_body_60532);


var G__60533 = seq__60176_60526;
var G__60534 = chunk__60177_60527;
var G__60535 = count__60178_60528;
var G__60536 = (i__60179_60529 + (1));
seq__60176_60526 = G__60533;
chunk__60177_60527 = G__60534;
count__60178_60528 = G__60535;
i__60179_60529 = G__60536;
continue;
} else {
var temp__5753__auto___60537 = cljs.core.seq(seq__60176_60526);
if(temp__5753__auto___60537){
var seq__60176_60538__$1 = temp__5753__auto___60537;
if(cljs.core.chunked_seq_QMARK_(seq__60176_60538__$1)){
var c__4679__auto___60539 = cljs.core.chunk_first(seq__60176_60538__$1);
var G__60540 = cljs.core.chunk_rest(seq__60176_60538__$1);
var G__60541 = c__4679__auto___60539;
var G__60542 = cljs.core.count(c__4679__auto___60539);
var G__60543 = (0);
seq__60176_60526 = G__60540;
chunk__60177_60527 = G__60541;
count__60178_60528 = G__60542;
i__60179_60529 = G__60543;
continue;
} else {
var vec__60189_60544 = cljs.core.first(seq__60176_60538__$1);
var script_tag_60545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60189_60544,(0),null);
var script_body_60546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60189_60544,(1),null);
eval(script_body_60546);


var G__60547 = cljs.core.next(seq__60176_60538__$1);
var G__60548 = null;
var G__60549 = (0);
var G__60550 = (0);
seq__60176_60526 = G__60547;
chunk__60177_60527 = G__60548;
count__60178_60528 = G__60549;
i__60179_60529 = G__60550;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__60192){
var vec__60193 = p__60192;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60193,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60193,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__60197 = arguments.length;
switch (G__60197) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__60198 = cljs.core.seq(style_keys);
var chunk__60199 = null;
var count__60200 = (0);
var i__60201 = (0);
while(true){
if((i__60201 < count__60200)){
var it = chunk__60199.cljs$core$IIndexed$_nth$arity$2(null,i__60201);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__60552 = seq__60198;
var G__60553 = chunk__60199;
var G__60554 = count__60200;
var G__60555 = (i__60201 + (1));
seq__60198 = G__60552;
chunk__60199 = G__60553;
count__60200 = G__60554;
i__60201 = G__60555;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__60198);
if(temp__5753__auto__){
var seq__60198__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60198__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__60198__$1);
var G__60556 = cljs.core.chunk_rest(seq__60198__$1);
var G__60557 = c__4679__auto__;
var G__60558 = cljs.core.count(c__4679__auto__);
var G__60559 = (0);
seq__60198 = G__60556;
chunk__60199 = G__60557;
count__60200 = G__60558;
i__60201 = G__60559;
continue;
} else {
var it = cljs.core.first(seq__60198__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__60560 = cljs.core.next(seq__60198__$1);
var G__60561 = null;
var G__60562 = (0);
var G__60563 = (0);
seq__60198 = G__60560;
chunk__60199 = G__60561;
count__60200 = G__60562;
i__60201 = G__60563;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k60203,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__60207 = k60203;
var G__60207__$1 = (((G__60207 instanceof cljs.core.Keyword))?G__60207.fqn:null);
switch (G__60207__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k60203,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__60208){
var vec__60209 = p__60208;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60209,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60209,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__60202){
var self__ = this;
var G__60202__$1 = this;
return (new cljs.core.RecordIter((0),G__60202__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this60204,other60205){
var self__ = this;
var this60204__$1 = this;
return (((!((other60205 == null)))) && ((((this60204__$1.constructor === other60205.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60204__$1.x,other60205.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60204__$1.y,other60205.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60204__$1.__extmap,other60205.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k60203){
var self__ = this;
var this__4509__auto____$1 = this;
var G__60212 = k60203;
var G__60212__$1 = (((G__60212 instanceof cljs.core.Keyword))?G__60212.fqn:null);
switch (G__60212__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k60203);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__60202){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__60213 = cljs.core.keyword_identical_QMARK_;
var expr__60214 = k__4511__auto__;
if(cljs.core.truth_((pred__60213.cljs$core$IFn$_invoke$arity$2 ? pred__60213.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__60214) : pred__60213.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__60214)))){
return (new shadow.dom.Coordinate(G__60202,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60213.cljs$core$IFn$_invoke$arity$2 ? pred__60213.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__60214) : pred__60213.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__60214)))){
return (new shadow.dom.Coordinate(self__.x,G__60202,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__60202),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__60202){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__60202,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__60206){
var extmap__4542__auto__ = (function (){var G__60216 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__60206,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__60206)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__60216);
} else {
return G__60216;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__60206),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__60206),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k60218,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__60222 = k60218;
var G__60222__$1 = (((G__60222 instanceof cljs.core.Keyword))?G__60222.fqn:null);
switch (G__60222__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k60218,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__60223){
var vec__60224 = p__60223;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60224,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60224,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__60217){
var self__ = this;
var G__60217__$1 = this;
return (new cljs.core.RecordIter((0),G__60217__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this60219,other60220){
var self__ = this;
var this60219__$1 = this;
return (((!((other60220 == null)))) && ((((this60219__$1.constructor === other60220.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60219__$1.w,other60220.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60219__$1.h,other60220.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60219__$1.__extmap,other60220.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k60218){
var self__ = this;
var this__4509__auto____$1 = this;
var G__60231 = k60218;
var G__60231__$1 = (((G__60231 instanceof cljs.core.Keyword))?G__60231.fqn:null);
switch (G__60231__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k60218);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__60217){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__60232 = cljs.core.keyword_identical_QMARK_;
var expr__60233 = k__4511__auto__;
if(cljs.core.truth_((pred__60232.cljs$core$IFn$_invoke$arity$2 ? pred__60232.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__60233) : pred__60232.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__60233)))){
return (new shadow.dom.Size(G__60217,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60232.cljs$core$IFn$_invoke$arity$2 ? pred__60232.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__60233) : pred__60232.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__60233)))){
return (new shadow.dom.Size(self__.w,G__60217,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__60217),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__60217){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__60217,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__60221){
var extmap__4542__auto__ = (function (){var G__60235 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__60221,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__60221)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__60235);
} else {
return G__60235;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__60221),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__60221),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__60571 = (i + (1));
var G__60572 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__60571;
ret = G__60572;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__60240){
var vec__60241 = p__60240;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60241,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60241,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__60245 = arguments.length;
switch (G__60245) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__60597 = ps;
var G__60598 = (i + (1));
el__$1 = G__60597;
i = G__60598;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__60248 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60248,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60248,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60248,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__60251_60626 = cljs.core.seq(props);
var chunk__60252_60627 = null;
var count__60253_60628 = (0);
var i__60254_60629 = (0);
while(true){
if((i__60254_60629 < count__60253_60628)){
var vec__60261_60630 = chunk__60252_60627.cljs$core$IIndexed$_nth$arity$2(null,i__60254_60629);
var k_60631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60261_60630,(0),null);
var v_60632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60261_60630,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_60631);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_60631),v_60632);


var G__60633 = seq__60251_60626;
var G__60634 = chunk__60252_60627;
var G__60635 = count__60253_60628;
var G__60636 = (i__60254_60629 + (1));
seq__60251_60626 = G__60633;
chunk__60252_60627 = G__60634;
count__60253_60628 = G__60635;
i__60254_60629 = G__60636;
continue;
} else {
var temp__5753__auto___60637 = cljs.core.seq(seq__60251_60626);
if(temp__5753__auto___60637){
var seq__60251_60638__$1 = temp__5753__auto___60637;
if(cljs.core.chunked_seq_QMARK_(seq__60251_60638__$1)){
var c__4679__auto___60639 = cljs.core.chunk_first(seq__60251_60638__$1);
var G__60640 = cljs.core.chunk_rest(seq__60251_60638__$1);
var G__60641 = c__4679__auto___60639;
var G__60642 = cljs.core.count(c__4679__auto___60639);
var G__60643 = (0);
seq__60251_60626 = G__60640;
chunk__60252_60627 = G__60641;
count__60253_60628 = G__60642;
i__60254_60629 = G__60643;
continue;
} else {
var vec__60264_60644 = cljs.core.first(seq__60251_60638__$1);
var k_60645 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60264_60644,(0),null);
var v_60646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60264_60644,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_60645);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_60645),v_60646);


var G__60647 = cljs.core.next(seq__60251_60638__$1);
var G__60648 = null;
var G__60649 = (0);
var G__60650 = (0);
seq__60251_60626 = G__60647;
chunk__60252_60627 = G__60648;
count__60253_60628 = G__60649;
i__60254_60629 = G__60650;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__60268 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60268,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60268,(1),null);
var seq__60271_60651 = cljs.core.seq(node_children);
var chunk__60273_60652 = null;
var count__60274_60653 = (0);
var i__60275_60654 = (0);
while(true){
if((i__60275_60654 < count__60274_60653)){
var child_struct_60655 = chunk__60273_60652.cljs$core$IIndexed$_nth$arity$2(null,i__60275_60654);
if((!((child_struct_60655 == null)))){
if(typeof child_struct_60655 === 'string'){
var text_60656 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_60656),child_struct_60655].join(''));
} else {
var children_60657 = shadow.dom.svg_node(child_struct_60655);
if(cljs.core.seq_QMARK_(children_60657)){
var seq__60293_60658 = cljs.core.seq(children_60657);
var chunk__60295_60659 = null;
var count__60296_60660 = (0);
var i__60297_60661 = (0);
while(true){
if((i__60297_60661 < count__60296_60660)){
var child_60662 = chunk__60295_60659.cljs$core$IIndexed$_nth$arity$2(null,i__60297_60661);
if(cljs.core.truth_(child_60662)){
node.appendChild(child_60662);


var G__60663 = seq__60293_60658;
var G__60664 = chunk__60295_60659;
var G__60665 = count__60296_60660;
var G__60666 = (i__60297_60661 + (1));
seq__60293_60658 = G__60663;
chunk__60295_60659 = G__60664;
count__60296_60660 = G__60665;
i__60297_60661 = G__60666;
continue;
} else {
var G__60667 = seq__60293_60658;
var G__60668 = chunk__60295_60659;
var G__60669 = count__60296_60660;
var G__60670 = (i__60297_60661 + (1));
seq__60293_60658 = G__60667;
chunk__60295_60659 = G__60668;
count__60296_60660 = G__60669;
i__60297_60661 = G__60670;
continue;
}
} else {
var temp__5753__auto___60671 = cljs.core.seq(seq__60293_60658);
if(temp__5753__auto___60671){
var seq__60293_60672__$1 = temp__5753__auto___60671;
if(cljs.core.chunked_seq_QMARK_(seq__60293_60672__$1)){
var c__4679__auto___60673 = cljs.core.chunk_first(seq__60293_60672__$1);
var G__60674 = cljs.core.chunk_rest(seq__60293_60672__$1);
var G__60675 = c__4679__auto___60673;
var G__60676 = cljs.core.count(c__4679__auto___60673);
var G__60677 = (0);
seq__60293_60658 = G__60674;
chunk__60295_60659 = G__60675;
count__60296_60660 = G__60676;
i__60297_60661 = G__60677;
continue;
} else {
var child_60678 = cljs.core.first(seq__60293_60672__$1);
if(cljs.core.truth_(child_60678)){
node.appendChild(child_60678);


var G__60679 = cljs.core.next(seq__60293_60672__$1);
var G__60680 = null;
var G__60681 = (0);
var G__60682 = (0);
seq__60293_60658 = G__60679;
chunk__60295_60659 = G__60680;
count__60296_60660 = G__60681;
i__60297_60661 = G__60682;
continue;
} else {
var G__60683 = cljs.core.next(seq__60293_60672__$1);
var G__60684 = null;
var G__60685 = (0);
var G__60686 = (0);
seq__60293_60658 = G__60683;
chunk__60295_60659 = G__60684;
count__60296_60660 = G__60685;
i__60297_60661 = G__60686;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_60657);
}
}


var G__60687 = seq__60271_60651;
var G__60688 = chunk__60273_60652;
var G__60689 = count__60274_60653;
var G__60690 = (i__60275_60654 + (1));
seq__60271_60651 = G__60687;
chunk__60273_60652 = G__60688;
count__60274_60653 = G__60689;
i__60275_60654 = G__60690;
continue;
} else {
var G__60691 = seq__60271_60651;
var G__60693 = chunk__60273_60652;
var G__60694 = count__60274_60653;
var G__60695 = (i__60275_60654 + (1));
seq__60271_60651 = G__60691;
chunk__60273_60652 = G__60693;
count__60274_60653 = G__60694;
i__60275_60654 = G__60695;
continue;
}
} else {
var temp__5753__auto___60699 = cljs.core.seq(seq__60271_60651);
if(temp__5753__auto___60699){
var seq__60271_60700__$1 = temp__5753__auto___60699;
if(cljs.core.chunked_seq_QMARK_(seq__60271_60700__$1)){
var c__4679__auto___60702 = cljs.core.chunk_first(seq__60271_60700__$1);
var G__60703 = cljs.core.chunk_rest(seq__60271_60700__$1);
var G__60704 = c__4679__auto___60702;
var G__60705 = cljs.core.count(c__4679__auto___60702);
var G__60706 = (0);
seq__60271_60651 = G__60703;
chunk__60273_60652 = G__60704;
count__60274_60653 = G__60705;
i__60275_60654 = G__60706;
continue;
} else {
var child_struct_60723 = cljs.core.first(seq__60271_60700__$1);
if((!((child_struct_60723 == null)))){
if(typeof child_struct_60723 === 'string'){
var text_60724 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_60724),child_struct_60723].join(''));
} else {
var children_60725 = shadow.dom.svg_node(child_struct_60723);
if(cljs.core.seq_QMARK_(children_60725)){
var seq__60303_60730 = cljs.core.seq(children_60725);
var chunk__60305_60731 = null;
var count__60306_60732 = (0);
var i__60307_60733 = (0);
while(true){
if((i__60307_60733 < count__60306_60732)){
var child_60735 = chunk__60305_60731.cljs$core$IIndexed$_nth$arity$2(null,i__60307_60733);
if(cljs.core.truth_(child_60735)){
node.appendChild(child_60735);


var G__60740 = seq__60303_60730;
var G__60741 = chunk__60305_60731;
var G__60742 = count__60306_60732;
var G__60743 = (i__60307_60733 + (1));
seq__60303_60730 = G__60740;
chunk__60305_60731 = G__60741;
count__60306_60732 = G__60742;
i__60307_60733 = G__60743;
continue;
} else {
var G__60747 = seq__60303_60730;
var G__60748 = chunk__60305_60731;
var G__60749 = count__60306_60732;
var G__60750 = (i__60307_60733 + (1));
seq__60303_60730 = G__60747;
chunk__60305_60731 = G__60748;
count__60306_60732 = G__60749;
i__60307_60733 = G__60750;
continue;
}
} else {
var temp__5753__auto___60760__$1 = cljs.core.seq(seq__60303_60730);
if(temp__5753__auto___60760__$1){
var seq__60303_60761__$1 = temp__5753__auto___60760__$1;
if(cljs.core.chunked_seq_QMARK_(seq__60303_60761__$1)){
var c__4679__auto___60764 = cljs.core.chunk_first(seq__60303_60761__$1);
var G__60765 = cljs.core.chunk_rest(seq__60303_60761__$1);
var G__60766 = c__4679__auto___60764;
var G__60767 = cljs.core.count(c__4679__auto___60764);
var G__60768 = (0);
seq__60303_60730 = G__60765;
chunk__60305_60731 = G__60766;
count__60306_60732 = G__60767;
i__60307_60733 = G__60768;
continue;
} else {
var child_60783 = cljs.core.first(seq__60303_60761__$1);
if(cljs.core.truth_(child_60783)){
node.appendChild(child_60783);


var G__60785 = cljs.core.next(seq__60303_60761__$1);
var G__60786 = null;
var G__60787 = (0);
var G__60788 = (0);
seq__60303_60730 = G__60785;
chunk__60305_60731 = G__60786;
count__60306_60732 = G__60787;
i__60307_60733 = G__60788;
continue;
} else {
var G__60789 = cljs.core.next(seq__60303_60761__$1);
var G__60790 = null;
var G__60791 = (0);
var G__60792 = (0);
seq__60303_60730 = G__60789;
chunk__60305_60731 = G__60790;
count__60306_60732 = G__60791;
i__60307_60733 = G__60792;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_60725);
}
}


var G__60793 = cljs.core.next(seq__60271_60700__$1);
var G__60794 = null;
var G__60795 = (0);
var G__60796 = (0);
seq__60271_60651 = G__60793;
chunk__60273_60652 = G__60794;
count__60274_60653 = G__60795;
i__60275_60654 = G__60796;
continue;
} else {
var G__60797 = cljs.core.next(seq__60271_60700__$1);
var G__60798 = null;
var G__60799 = (0);
var G__60800 = (0);
seq__60271_60651 = G__60797;
chunk__60273_60652 = G__60798;
count__60274_60653 = G__60799;
i__60275_60654 = G__60800;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___60801 = arguments.length;
var i__4865__auto___60802 = (0);
while(true){
if((i__4865__auto___60802 < len__4864__auto___60801)){
args__4870__auto__.push((arguments[i__4865__auto___60802]));

var G__60804 = (i__4865__auto___60802 + (1));
i__4865__auto___60802 = G__60804;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq60313){
var G__60314 = cljs.core.first(seq60313);
var seq60313__$1 = cljs.core.next(seq60313);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60314,seq60313__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__60316 = arguments.length;
switch (G__60316) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__58096__auto___60806 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58097__auto__ = (function (){var switch__57894__auto__ = (function (state_60321){
var state_val_60322 = (state_60321[(1)]);
if((state_val_60322 === (1))){
var state_60321__$1 = state_60321;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60321__$1,(2),once_or_cleanup);
} else {
if((state_val_60322 === (2))){
var inst_60318 = (state_60321[(2)]);
var inst_60319 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_60321__$1 = (function (){var statearr_60323 = state_60321;
(statearr_60323[(7)] = inst_60318);

return statearr_60323;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_60321__$1,inst_60319);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__57895__auto__ = null;
var shadow$dom$state_machine__57895__auto____0 = (function (){
var statearr_60324 = [null,null,null,null,null,null,null,null];
(statearr_60324[(0)] = shadow$dom$state_machine__57895__auto__);

(statearr_60324[(1)] = (1));

return statearr_60324;
});
var shadow$dom$state_machine__57895__auto____1 = (function (state_60321){
while(true){
var ret_value__57896__auto__ = (function (){try{while(true){
var result__57897__auto__ = switch__57894__auto__(state_60321);
if(cljs.core.keyword_identical_QMARK_(result__57897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57897__auto__;
}
break;
}
}catch (e60325){var ex__57898__auto__ = e60325;
var statearr_60326_60809 = state_60321;
(statearr_60326_60809[(2)] = ex__57898__auto__);


if(cljs.core.seq((state_60321[(4)]))){
var statearr_60327_60810 = state_60321;
(statearr_60327_60810[(1)] = cljs.core.first((state_60321[(4)])));

} else {
throw ex__57898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60811 = state_60321;
state_60321 = G__60811;
continue;
} else {
return ret_value__57896__auto__;
}
break;
}
});
shadow$dom$state_machine__57895__auto__ = function(state_60321){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__57895__auto____0.call(this);
case 1:
return shadow$dom$state_machine__57895__auto____1.call(this,state_60321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__57895__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__57895__auto____0;
shadow$dom$state_machine__57895__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__57895__auto____1;
return shadow$dom$state_machine__57895__auto__;
})()
})();
var state__58098__auto__ = (function (){var statearr_60329 = f__58097__auto__();
(statearr_60329[(6)] = c__58096__auto___60806);

return statearr_60329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58098__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
