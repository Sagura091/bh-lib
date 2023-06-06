goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_60329 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_60329(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_60330 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_60330(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__59736 = coll;
var G__59737 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__59736,G__59737) : shadow.dom.lazy_native_coll_seq.call(null,G__59736,G__59737));
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
var G__59760 = arguments.length;
switch (G__59760) {
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
var G__59762 = arguments.length;
switch (G__59762) {
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
var G__59766 = arguments.length;
switch (G__59766) {
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
var G__59818 = arguments.length;
switch (G__59818) {
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
var G__59831 = arguments.length;
switch (G__59831) {
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
var G__59833 = arguments.length;
switch (G__59833) {
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
}catch (e59836){if((e59836 instanceof Object)){
var e = e59836;
return console.log("didnt support attachEvent",el,e);
} else {
throw e59836;

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
var seq__59846 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__59847 = null;
var count__59848 = (0);
var i__59849 = (0);
while(true){
if((i__59849 < count__59848)){
var el = chunk__59847.cljs$core$IIndexed$_nth$arity$2(null,i__59849);
var handler_60337__$1 = ((function (seq__59846,chunk__59847,count__59848,i__59849,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__59846,chunk__59847,count__59848,i__59849,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_60337__$1);


var G__60338 = seq__59846;
var G__60339 = chunk__59847;
var G__60340 = count__59848;
var G__60341 = (i__59849 + (1));
seq__59846 = G__60338;
chunk__59847 = G__60339;
count__59848 = G__60340;
i__59849 = G__60341;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__59846);
if(temp__5753__auto__){
var seq__59846__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59846__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__59846__$1);
var G__60342 = cljs.core.chunk_rest(seq__59846__$1);
var G__60343 = c__4679__auto__;
var G__60344 = cljs.core.count(c__4679__auto__);
var G__60345 = (0);
seq__59846 = G__60342;
chunk__59847 = G__60343;
count__59848 = G__60344;
i__59849 = G__60345;
continue;
} else {
var el = cljs.core.first(seq__59846__$1);
var handler_60346__$1 = ((function (seq__59846,chunk__59847,count__59848,i__59849,el,seq__59846__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__59846,chunk__59847,count__59848,i__59849,el,seq__59846__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_60346__$1);


var G__60347 = cljs.core.next(seq__59846__$1);
var G__60348 = null;
var G__60349 = (0);
var G__60350 = (0);
seq__59846 = G__60347;
chunk__59847 = G__60348;
count__59848 = G__60349;
i__59849 = G__60350;
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
var G__59870 = arguments.length;
switch (G__59870) {
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
var seq__59886 = cljs.core.seq(events);
var chunk__59887 = null;
var count__59888 = (0);
var i__59889 = (0);
while(true){
if((i__59889 < count__59888)){
var vec__59896 = chunk__59887.cljs$core$IIndexed$_nth$arity$2(null,i__59889);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59896,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59896,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__60352 = seq__59886;
var G__60353 = chunk__59887;
var G__60354 = count__59888;
var G__60355 = (i__59889 + (1));
seq__59886 = G__60352;
chunk__59887 = G__60353;
count__59888 = G__60354;
i__59889 = G__60355;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__59886);
if(temp__5753__auto__){
var seq__59886__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59886__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__59886__$1);
var G__60356 = cljs.core.chunk_rest(seq__59886__$1);
var G__60357 = c__4679__auto__;
var G__60358 = cljs.core.count(c__4679__auto__);
var G__60359 = (0);
seq__59886 = G__60356;
chunk__59887 = G__60357;
count__59888 = G__60358;
i__59889 = G__60359;
continue;
} else {
var vec__59900 = cljs.core.first(seq__59886__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59900,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59900,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__60360 = cljs.core.next(seq__59886__$1);
var G__60361 = null;
var G__60362 = (0);
var G__60363 = (0);
seq__59886 = G__60360;
chunk__59887 = G__60361;
count__59888 = G__60362;
i__59889 = G__60363;
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
var seq__59908 = cljs.core.seq(styles);
var chunk__59909 = null;
var count__59910 = (0);
var i__59911 = (0);
while(true){
if((i__59911 < count__59910)){
var vec__59926 = chunk__59909.cljs$core$IIndexed$_nth$arity$2(null,i__59911);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59926,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59926,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__60364 = seq__59908;
var G__60365 = chunk__59909;
var G__60366 = count__59910;
var G__60367 = (i__59911 + (1));
seq__59908 = G__60364;
chunk__59909 = G__60365;
count__59910 = G__60366;
i__59911 = G__60367;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__59908);
if(temp__5753__auto__){
var seq__59908__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59908__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__59908__$1);
var G__60368 = cljs.core.chunk_rest(seq__59908__$1);
var G__60369 = c__4679__auto__;
var G__60370 = cljs.core.count(c__4679__auto__);
var G__60371 = (0);
seq__59908 = G__60368;
chunk__59909 = G__60369;
count__59910 = G__60370;
i__59911 = G__60371;
continue;
} else {
var vec__59935 = cljs.core.first(seq__59908__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59935,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59935,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__60372 = cljs.core.next(seq__59908__$1);
var G__60373 = null;
var G__60374 = (0);
var G__60375 = (0);
seq__59908 = G__60372;
chunk__59909 = G__60373;
count__59910 = G__60374;
i__59911 = G__60375;
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
var G__59943_60376 = key;
var G__59943_60377__$1 = (((G__59943_60376 instanceof cljs.core.Keyword))?G__59943_60376.fqn:null);
switch (G__59943_60377__$1) {
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
var ks_60379 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_60379,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_60379,"aria-");
}
})())){
el.setAttribute(ks_60379,value);
} else {
(el[ks_60379] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__59978){
var map__59979 = p__59978;
var map__59979__$1 = cljs.core.__destructure_map(map__59979);
var props = map__59979__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59979__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__59980 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59980,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59980,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59980,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__59983 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__59983,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__59983;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__59985 = arguments.length;
switch (G__59985) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__59994){
var vec__59996 = p__59994;
var seq__59997 = cljs.core.seq(vec__59996);
var first__59998 = cljs.core.first(seq__59997);
var seq__59997__$1 = cljs.core.next(seq__59997);
var nn = first__59998;
var first__59998__$1 = cljs.core.first(seq__59997__$1);
var seq__59997__$2 = cljs.core.next(seq__59997__$1);
var np = first__59998__$1;
var nc = seq__59997__$2;
var node = vec__59996;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__60002 = nn;
var G__60003 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__60002,G__60003) : create_fn.call(null,G__60002,G__60003));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__60009 = nn;
var G__60010 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__60009,G__60010) : create_fn.call(null,G__60009,G__60010));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__60014 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60014,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60014,(1),null);
var seq__60019_60383 = cljs.core.seq(node_children);
var chunk__60020_60384 = null;
var count__60021_60385 = (0);
var i__60022_60386 = (0);
while(true){
if((i__60022_60386 < count__60021_60385)){
var child_struct_60387 = chunk__60020_60384.cljs$core$IIndexed$_nth$arity$2(null,i__60022_60386);
var children_60388 = shadow.dom.dom_node(child_struct_60387);
if(cljs.core.seq_QMARK_(children_60388)){
var seq__60091_60389 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_60388));
var chunk__60093_60390 = null;
var count__60094_60391 = (0);
var i__60095_60392 = (0);
while(true){
if((i__60095_60392 < count__60094_60391)){
var child_60393 = chunk__60093_60390.cljs$core$IIndexed$_nth$arity$2(null,i__60095_60392);
if(cljs.core.truth_(child_60393)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_60393);


var G__60394 = seq__60091_60389;
var G__60395 = chunk__60093_60390;
var G__60396 = count__60094_60391;
var G__60397 = (i__60095_60392 + (1));
seq__60091_60389 = G__60394;
chunk__60093_60390 = G__60395;
count__60094_60391 = G__60396;
i__60095_60392 = G__60397;
continue;
} else {
var G__60398 = seq__60091_60389;
var G__60399 = chunk__60093_60390;
var G__60400 = count__60094_60391;
var G__60401 = (i__60095_60392 + (1));
seq__60091_60389 = G__60398;
chunk__60093_60390 = G__60399;
count__60094_60391 = G__60400;
i__60095_60392 = G__60401;
continue;
}
} else {
var temp__5753__auto___60402 = cljs.core.seq(seq__60091_60389);
if(temp__5753__auto___60402){
var seq__60091_60403__$1 = temp__5753__auto___60402;
if(cljs.core.chunked_seq_QMARK_(seq__60091_60403__$1)){
var c__4679__auto___60404 = cljs.core.chunk_first(seq__60091_60403__$1);
var G__60405 = cljs.core.chunk_rest(seq__60091_60403__$1);
var G__60406 = c__4679__auto___60404;
var G__60407 = cljs.core.count(c__4679__auto___60404);
var G__60408 = (0);
seq__60091_60389 = G__60405;
chunk__60093_60390 = G__60406;
count__60094_60391 = G__60407;
i__60095_60392 = G__60408;
continue;
} else {
var child_60409 = cljs.core.first(seq__60091_60403__$1);
if(cljs.core.truth_(child_60409)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_60409);


var G__60410 = cljs.core.next(seq__60091_60403__$1);
var G__60411 = null;
var G__60412 = (0);
var G__60413 = (0);
seq__60091_60389 = G__60410;
chunk__60093_60390 = G__60411;
count__60094_60391 = G__60412;
i__60095_60392 = G__60413;
continue;
} else {
var G__60414 = cljs.core.next(seq__60091_60403__$1);
var G__60415 = null;
var G__60416 = (0);
var G__60417 = (0);
seq__60091_60389 = G__60414;
chunk__60093_60390 = G__60415;
count__60094_60391 = G__60416;
i__60095_60392 = G__60417;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_60388);
}


var G__60418 = seq__60019_60383;
var G__60419 = chunk__60020_60384;
var G__60420 = count__60021_60385;
var G__60421 = (i__60022_60386 + (1));
seq__60019_60383 = G__60418;
chunk__60020_60384 = G__60419;
count__60021_60385 = G__60420;
i__60022_60386 = G__60421;
continue;
} else {
var temp__5753__auto___60422 = cljs.core.seq(seq__60019_60383);
if(temp__5753__auto___60422){
var seq__60019_60423__$1 = temp__5753__auto___60422;
if(cljs.core.chunked_seq_QMARK_(seq__60019_60423__$1)){
var c__4679__auto___60424 = cljs.core.chunk_first(seq__60019_60423__$1);
var G__60425 = cljs.core.chunk_rest(seq__60019_60423__$1);
var G__60426 = c__4679__auto___60424;
var G__60427 = cljs.core.count(c__4679__auto___60424);
var G__60428 = (0);
seq__60019_60383 = G__60425;
chunk__60020_60384 = G__60426;
count__60021_60385 = G__60427;
i__60022_60386 = G__60428;
continue;
} else {
var child_struct_60429 = cljs.core.first(seq__60019_60423__$1);
var children_60430 = shadow.dom.dom_node(child_struct_60429);
if(cljs.core.seq_QMARK_(children_60430)){
var seq__60114_60431 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_60430));
var chunk__60116_60432 = null;
var count__60117_60433 = (0);
var i__60118_60434 = (0);
while(true){
if((i__60118_60434 < count__60117_60433)){
var child_60435 = chunk__60116_60432.cljs$core$IIndexed$_nth$arity$2(null,i__60118_60434);
if(cljs.core.truth_(child_60435)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_60435);


var G__60436 = seq__60114_60431;
var G__60437 = chunk__60116_60432;
var G__60438 = count__60117_60433;
var G__60439 = (i__60118_60434 + (1));
seq__60114_60431 = G__60436;
chunk__60116_60432 = G__60437;
count__60117_60433 = G__60438;
i__60118_60434 = G__60439;
continue;
} else {
var G__60440 = seq__60114_60431;
var G__60441 = chunk__60116_60432;
var G__60442 = count__60117_60433;
var G__60443 = (i__60118_60434 + (1));
seq__60114_60431 = G__60440;
chunk__60116_60432 = G__60441;
count__60117_60433 = G__60442;
i__60118_60434 = G__60443;
continue;
}
} else {
var temp__5753__auto___60444__$1 = cljs.core.seq(seq__60114_60431);
if(temp__5753__auto___60444__$1){
var seq__60114_60445__$1 = temp__5753__auto___60444__$1;
if(cljs.core.chunked_seq_QMARK_(seq__60114_60445__$1)){
var c__4679__auto___60446 = cljs.core.chunk_first(seq__60114_60445__$1);
var G__60447 = cljs.core.chunk_rest(seq__60114_60445__$1);
var G__60448 = c__4679__auto___60446;
var G__60449 = cljs.core.count(c__4679__auto___60446);
var G__60450 = (0);
seq__60114_60431 = G__60447;
chunk__60116_60432 = G__60448;
count__60117_60433 = G__60449;
i__60118_60434 = G__60450;
continue;
} else {
var child_60451 = cljs.core.first(seq__60114_60445__$1);
if(cljs.core.truth_(child_60451)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_60451);


var G__60452 = cljs.core.next(seq__60114_60445__$1);
var G__60453 = null;
var G__60454 = (0);
var G__60455 = (0);
seq__60114_60431 = G__60452;
chunk__60116_60432 = G__60453;
count__60117_60433 = G__60454;
i__60118_60434 = G__60455;
continue;
} else {
var G__60456 = cljs.core.next(seq__60114_60445__$1);
var G__60457 = null;
var G__60458 = (0);
var G__60459 = (0);
seq__60114_60431 = G__60456;
chunk__60116_60432 = G__60457;
count__60117_60433 = G__60458;
i__60118_60434 = G__60459;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_60430);
}


var G__60460 = cljs.core.next(seq__60019_60423__$1);
var G__60461 = null;
var G__60462 = (0);
var G__60463 = (0);
seq__60019_60383 = G__60460;
chunk__60020_60384 = G__60461;
count__60021_60385 = G__60462;
i__60022_60386 = G__60463;
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
var seq__60161 = cljs.core.seq(node);
var chunk__60162 = null;
var count__60163 = (0);
var i__60164 = (0);
while(true){
if((i__60164 < count__60163)){
var n = chunk__60162.cljs$core$IIndexed$_nth$arity$2(null,i__60164);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__60470 = seq__60161;
var G__60471 = chunk__60162;
var G__60472 = count__60163;
var G__60473 = (i__60164 + (1));
seq__60161 = G__60470;
chunk__60162 = G__60471;
count__60163 = G__60472;
i__60164 = G__60473;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__60161);
if(temp__5753__auto__){
var seq__60161__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60161__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__60161__$1);
var G__60474 = cljs.core.chunk_rest(seq__60161__$1);
var G__60475 = c__4679__auto__;
var G__60476 = cljs.core.count(c__4679__auto__);
var G__60477 = (0);
seq__60161 = G__60474;
chunk__60162 = G__60475;
count__60163 = G__60476;
i__60164 = G__60477;
continue;
} else {
var n = cljs.core.first(seq__60161__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__60481 = cljs.core.next(seq__60161__$1);
var G__60482 = null;
var G__60483 = (0);
var G__60484 = (0);
seq__60161 = G__60481;
chunk__60162 = G__60482;
count__60163 = G__60483;
i__60164 = G__60484;
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
var G__60166 = arguments.length;
switch (G__60166) {
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
var G__60168 = arguments.length;
switch (G__60168) {
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
var len__4864__auto___60494 = arguments.length;
var i__4865__auto___60495 = (0);
while(true){
if((i__4865__auto___60495 < len__4864__auto___60494)){
args__4870__auto__.push((arguments[i__4865__auto___60495]));

var G__60496 = (i__4865__auto___60495 + (1));
i__4865__auto___60495 = G__60496;
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
var seq__60172_60497 = cljs.core.seq(nodes);
var chunk__60173_60498 = null;
var count__60174_60499 = (0);
var i__60175_60500 = (0);
while(true){
if((i__60175_60500 < count__60174_60499)){
var node_60501 = chunk__60173_60498.cljs$core$IIndexed$_nth$arity$2(null,i__60175_60500);
fragment.appendChild(shadow.dom._to_dom(node_60501));


var G__60502 = seq__60172_60497;
var G__60503 = chunk__60173_60498;
var G__60504 = count__60174_60499;
var G__60505 = (i__60175_60500 + (1));
seq__60172_60497 = G__60502;
chunk__60173_60498 = G__60503;
count__60174_60499 = G__60504;
i__60175_60500 = G__60505;
continue;
} else {
var temp__5753__auto___60506 = cljs.core.seq(seq__60172_60497);
if(temp__5753__auto___60506){
var seq__60172_60507__$1 = temp__5753__auto___60506;
if(cljs.core.chunked_seq_QMARK_(seq__60172_60507__$1)){
var c__4679__auto___60508 = cljs.core.chunk_first(seq__60172_60507__$1);
var G__60509 = cljs.core.chunk_rest(seq__60172_60507__$1);
var G__60510 = c__4679__auto___60508;
var G__60511 = cljs.core.count(c__4679__auto___60508);
var G__60512 = (0);
seq__60172_60497 = G__60509;
chunk__60173_60498 = G__60510;
count__60174_60499 = G__60511;
i__60175_60500 = G__60512;
continue;
} else {
var node_60513 = cljs.core.first(seq__60172_60507__$1);
fragment.appendChild(shadow.dom._to_dom(node_60513));


var G__60514 = cljs.core.next(seq__60172_60507__$1);
var G__60515 = null;
var G__60516 = (0);
var G__60517 = (0);
seq__60172_60497 = G__60514;
chunk__60173_60498 = G__60515;
count__60174_60499 = G__60516;
i__60175_60500 = G__60517;
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
var seq__60176_60518 = cljs.core.seq(scripts);
var chunk__60177_60519 = null;
var count__60178_60520 = (0);
var i__60179_60521 = (0);
while(true){
if((i__60179_60521 < count__60178_60520)){
var vec__60186_60522 = chunk__60177_60519.cljs$core$IIndexed$_nth$arity$2(null,i__60179_60521);
var script_tag_60523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60186_60522,(0),null);
var script_body_60524 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60186_60522,(1),null);
eval(script_body_60524);


var G__60528 = seq__60176_60518;
var G__60529 = chunk__60177_60519;
var G__60530 = count__60178_60520;
var G__60531 = (i__60179_60521 + (1));
seq__60176_60518 = G__60528;
chunk__60177_60519 = G__60529;
count__60178_60520 = G__60530;
i__60179_60521 = G__60531;
continue;
} else {
var temp__5753__auto___60532 = cljs.core.seq(seq__60176_60518);
if(temp__5753__auto___60532){
var seq__60176_60533__$1 = temp__5753__auto___60532;
if(cljs.core.chunked_seq_QMARK_(seq__60176_60533__$1)){
var c__4679__auto___60534 = cljs.core.chunk_first(seq__60176_60533__$1);
var G__60535 = cljs.core.chunk_rest(seq__60176_60533__$1);
var G__60536 = c__4679__auto___60534;
var G__60537 = cljs.core.count(c__4679__auto___60534);
var G__60538 = (0);
seq__60176_60518 = G__60535;
chunk__60177_60519 = G__60536;
count__60178_60520 = G__60537;
i__60179_60521 = G__60538;
continue;
} else {
var vec__60189_60539 = cljs.core.first(seq__60176_60533__$1);
var script_tag_60540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60189_60539,(0),null);
var script_body_60541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60189_60539,(1),null);
eval(script_body_60541);


var G__60542 = cljs.core.next(seq__60176_60533__$1);
var G__60543 = null;
var G__60544 = (0);
var G__60545 = (0);
seq__60176_60518 = G__60542;
chunk__60177_60519 = G__60543;
count__60178_60520 = G__60544;
i__60179_60521 = G__60545;
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


var G__60547 = seq__60198;
var G__60548 = chunk__60199;
var G__60549 = count__60200;
var G__60550 = (i__60201 + (1));
seq__60198 = G__60547;
chunk__60199 = G__60548;
count__60200 = G__60549;
i__60201 = G__60550;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__60198);
if(temp__5753__auto__){
var seq__60198__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60198__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__60198__$1);
var G__60551 = cljs.core.chunk_rest(seq__60198__$1);
var G__60552 = c__4679__auto__;
var G__60553 = cljs.core.count(c__4679__auto__);
var G__60554 = (0);
seq__60198 = G__60551;
chunk__60199 = G__60552;
count__60200 = G__60553;
i__60201 = G__60554;
continue;
} else {
var it = cljs.core.first(seq__60198__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__60555 = cljs.core.next(seq__60198__$1);
var G__60556 = null;
var G__60557 = (0);
var G__60558 = (0);
seq__60198 = G__60555;
chunk__60199 = G__60556;
count__60200 = G__60557;
i__60201 = G__60558;
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
var G__60227 = k60218;
var G__60227__$1 = (((G__60227 instanceof cljs.core.Keyword))?G__60227.fqn:null);
switch (G__60227__$1) {
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
var pred__60228 = cljs.core.keyword_identical_QMARK_;
var expr__60229 = k__4511__auto__;
if(cljs.core.truth_((pred__60228.cljs$core$IFn$_invoke$arity$2 ? pred__60228.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__60229) : pred__60228.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__60229)))){
return (new shadow.dom.Size(G__60217,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60228.cljs$core$IFn$_invoke$arity$2 ? pred__60228.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__60229) : pred__60228.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__60229)))){
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
var extmap__4542__auto__ = (function (){var G__60231 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__60221,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__60221)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__60231);
} else {
return G__60231;
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
var G__60570 = (i + (1));
var G__60571 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__60570;
ret = G__60571;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__60236){
var vec__60237 = p__60236;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60237,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60237,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__60241 = arguments.length;
switch (G__60241) {
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
var G__60573 = ps;
var G__60574 = (i + (1));
el__$1 = G__60573;
i = G__60574;
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
var vec__60246 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60246,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60246,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60246,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__60249_60575 = cljs.core.seq(props);
var chunk__60250_60576 = null;
var count__60251_60577 = (0);
var i__60252_60578 = (0);
while(true){
if((i__60252_60578 < count__60251_60577)){
var vec__60259_60579 = chunk__60250_60576.cljs$core$IIndexed$_nth$arity$2(null,i__60252_60578);
var k_60580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60259_60579,(0),null);
var v_60581 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60259_60579,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_60580);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_60580),v_60581);


var G__60582 = seq__60249_60575;
var G__60583 = chunk__60250_60576;
var G__60584 = count__60251_60577;
var G__60585 = (i__60252_60578 + (1));
seq__60249_60575 = G__60582;
chunk__60250_60576 = G__60583;
count__60251_60577 = G__60584;
i__60252_60578 = G__60585;
continue;
} else {
var temp__5753__auto___60586 = cljs.core.seq(seq__60249_60575);
if(temp__5753__auto___60586){
var seq__60249_60587__$1 = temp__5753__auto___60586;
if(cljs.core.chunked_seq_QMARK_(seq__60249_60587__$1)){
var c__4679__auto___60588 = cljs.core.chunk_first(seq__60249_60587__$1);
var G__60589 = cljs.core.chunk_rest(seq__60249_60587__$1);
var G__60590 = c__4679__auto___60588;
var G__60591 = cljs.core.count(c__4679__auto___60588);
var G__60592 = (0);
seq__60249_60575 = G__60589;
chunk__60250_60576 = G__60590;
count__60251_60577 = G__60591;
i__60252_60578 = G__60592;
continue;
} else {
var vec__60262_60593 = cljs.core.first(seq__60249_60587__$1);
var k_60594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60262_60593,(0),null);
var v_60595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60262_60593,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_60594);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_60594),v_60595);


var G__60596 = cljs.core.next(seq__60249_60587__$1);
var G__60597 = null;
var G__60598 = (0);
var G__60599 = (0);
seq__60249_60575 = G__60596;
chunk__60250_60576 = G__60597;
count__60251_60577 = G__60598;
i__60252_60578 = G__60599;
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
var vec__60266 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60266,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60266,(1),null);
var seq__60269_60601 = cljs.core.seq(node_children);
var chunk__60271_60602 = null;
var count__60272_60603 = (0);
var i__60273_60604 = (0);
while(true){
if((i__60273_60604 < count__60272_60603)){
var child_struct_60605 = chunk__60271_60602.cljs$core$IIndexed$_nth$arity$2(null,i__60273_60604);
if((!((child_struct_60605 == null)))){
if(typeof child_struct_60605 === 'string'){
var text_60606 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_60606),child_struct_60605].join(''));
} else {
var children_60607 = shadow.dom.svg_node(child_struct_60605);
if(cljs.core.seq_QMARK_(children_60607)){
var seq__60289_60608 = cljs.core.seq(children_60607);
var chunk__60291_60609 = null;
var count__60292_60610 = (0);
var i__60293_60611 = (0);
while(true){
if((i__60293_60611 < count__60292_60610)){
var child_60612 = chunk__60291_60609.cljs$core$IIndexed$_nth$arity$2(null,i__60293_60611);
if(cljs.core.truth_(child_60612)){
node.appendChild(child_60612);


var G__60613 = seq__60289_60608;
var G__60614 = chunk__60291_60609;
var G__60615 = count__60292_60610;
var G__60616 = (i__60293_60611 + (1));
seq__60289_60608 = G__60613;
chunk__60291_60609 = G__60614;
count__60292_60610 = G__60615;
i__60293_60611 = G__60616;
continue;
} else {
var G__60617 = seq__60289_60608;
var G__60618 = chunk__60291_60609;
var G__60619 = count__60292_60610;
var G__60620 = (i__60293_60611 + (1));
seq__60289_60608 = G__60617;
chunk__60291_60609 = G__60618;
count__60292_60610 = G__60619;
i__60293_60611 = G__60620;
continue;
}
} else {
var temp__5753__auto___60621 = cljs.core.seq(seq__60289_60608);
if(temp__5753__auto___60621){
var seq__60289_60622__$1 = temp__5753__auto___60621;
if(cljs.core.chunked_seq_QMARK_(seq__60289_60622__$1)){
var c__4679__auto___60623 = cljs.core.chunk_first(seq__60289_60622__$1);
var G__60624 = cljs.core.chunk_rest(seq__60289_60622__$1);
var G__60625 = c__4679__auto___60623;
var G__60626 = cljs.core.count(c__4679__auto___60623);
var G__60627 = (0);
seq__60289_60608 = G__60624;
chunk__60291_60609 = G__60625;
count__60292_60610 = G__60626;
i__60293_60611 = G__60627;
continue;
} else {
var child_60628 = cljs.core.first(seq__60289_60622__$1);
if(cljs.core.truth_(child_60628)){
node.appendChild(child_60628);


var G__60629 = cljs.core.next(seq__60289_60622__$1);
var G__60630 = null;
var G__60631 = (0);
var G__60632 = (0);
seq__60289_60608 = G__60629;
chunk__60291_60609 = G__60630;
count__60292_60610 = G__60631;
i__60293_60611 = G__60632;
continue;
} else {
var G__60633 = cljs.core.next(seq__60289_60622__$1);
var G__60634 = null;
var G__60635 = (0);
var G__60636 = (0);
seq__60289_60608 = G__60633;
chunk__60291_60609 = G__60634;
count__60292_60610 = G__60635;
i__60293_60611 = G__60636;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_60607);
}
}


var G__60637 = seq__60269_60601;
var G__60638 = chunk__60271_60602;
var G__60639 = count__60272_60603;
var G__60640 = (i__60273_60604 + (1));
seq__60269_60601 = G__60637;
chunk__60271_60602 = G__60638;
count__60272_60603 = G__60639;
i__60273_60604 = G__60640;
continue;
} else {
var G__60641 = seq__60269_60601;
var G__60642 = chunk__60271_60602;
var G__60643 = count__60272_60603;
var G__60644 = (i__60273_60604 + (1));
seq__60269_60601 = G__60641;
chunk__60271_60602 = G__60642;
count__60272_60603 = G__60643;
i__60273_60604 = G__60644;
continue;
}
} else {
var temp__5753__auto___60646 = cljs.core.seq(seq__60269_60601);
if(temp__5753__auto___60646){
var seq__60269_60647__$1 = temp__5753__auto___60646;
if(cljs.core.chunked_seq_QMARK_(seq__60269_60647__$1)){
var c__4679__auto___60648 = cljs.core.chunk_first(seq__60269_60647__$1);
var G__60649 = cljs.core.chunk_rest(seq__60269_60647__$1);
var G__60650 = c__4679__auto___60648;
var G__60651 = cljs.core.count(c__4679__auto___60648);
var G__60652 = (0);
seq__60269_60601 = G__60649;
chunk__60271_60602 = G__60650;
count__60272_60603 = G__60651;
i__60273_60604 = G__60652;
continue;
} else {
var child_struct_60653 = cljs.core.first(seq__60269_60647__$1);
if((!((child_struct_60653 == null)))){
if(typeof child_struct_60653 === 'string'){
var text_60654 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_60654),child_struct_60653].join(''));
} else {
var children_60655 = shadow.dom.svg_node(child_struct_60653);
if(cljs.core.seq_QMARK_(children_60655)){
var seq__60299_60656 = cljs.core.seq(children_60655);
var chunk__60301_60657 = null;
var count__60302_60658 = (0);
var i__60303_60659 = (0);
while(true){
if((i__60303_60659 < count__60302_60658)){
var child_60661 = chunk__60301_60657.cljs$core$IIndexed$_nth$arity$2(null,i__60303_60659);
if(cljs.core.truth_(child_60661)){
node.appendChild(child_60661);


var G__60662 = seq__60299_60656;
var G__60663 = chunk__60301_60657;
var G__60664 = count__60302_60658;
var G__60665 = (i__60303_60659 + (1));
seq__60299_60656 = G__60662;
chunk__60301_60657 = G__60663;
count__60302_60658 = G__60664;
i__60303_60659 = G__60665;
continue;
} else {
var G__60666 = seq__60299_60656;
var G__60667 = chunk__60301_60657;
var G__60668 = count__60302_60658;
var G__60669 = (i__60303_60659 + (1));
seq__60299_60656 = G__60666;
chunk__60301_60657 = G__60667;
count__60302_60658 = G__60668;
i__60303_60659 = G__60669;
continue;
}
} else {
var temp__5753__auto___60670__$1 = cljs.core.seq(seq__60299_60656);
if(temp__5753__auto___60670__$1){
var seq__60299_60671__$1 = temp__5753__auto___60670__$1;
if(cljs.core.chunked_seq_QMARK_(seq__60299_60671__$1)){
var c__4679__auto___60672 = cljs.core.chunk_first(seq__60299_60671__$1);
var G__60673 = cljs.core.chunk_rest(seq__60299_60671__$1);
var G__60674 = c__4679__auto___60672;
var G__60675 = cljs.core.count(c__4679__auto___60672);
var G__60676 = (0);
seq__60299_60656 = G__60673;
chunk__60301_60657 = G__60674;
count__60302_60658 = G__60675;
i__60303_60659 = G__60676;
continue;
} else {
var child_60677 = cljs.core.first(seq__60299_60671__$1);
if(cljs.core.truth_(child_60677)){
node.appendChild(child_60677);


var G__60678 = cljs.core.next(seq__60299_60671__$1);
var G__60679 = null;
var G__60680 = (0);
var G__60681 = (0);
seq__60299_60656 = G__60678;
chunk__60301_60657 = G__60679;
count__60302_60658 = G__60680;
i__60303_60659 = G__60681;
continue;
} else {
var G__60682 = cljs.core.next(seq__60299_60671__$1);
var G__60683 = null;
var G__60684 = (0);
var G__60685 = (0);
seq__60299_60656 = G__60682;
chunk__60301_60657 = G__60683;
count__60302_60658 = G__60684;
i__60303_60659 = G__60685;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_60655);
}
}


var G__60686 = cljs.core.next(seq__60269_60647__$1);
var G__60687 = null;
var G__60688 = (0);
var G__60689 = (0);
seq__60269_60601 = G__60686;
chunk__60271_60602 = G__60687;
count__60272_60603 = G__60688;
i__60273_60604 = G__60689;
continue;
} else {
var G__60690 = cljs.core.next(seq__60269_60647__$1);
var G__60691 = null;
var G__60692 = (0);
var G__60693 = (0);
seq__60269_60601 = G__60690;
chunk__60271_60602 = G__60691;
count__60272_60603 = G__60692;
i__60273_60604 = G__60693;
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
var len__4864__auto___60695 = arguments.length;
var i__4865__auto___60696 = (0);
while(true){
if((i__4865__auto___60696 < len__4864__auto___60695)){
args__4870__auto__.push((arguments[i__4865__auto___60696]));

var G__60697 = (i__4865__auto___60696 + (1));
i__4865__auto___60696 = G__60697;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq60305){
var G__60306 = cljs.core.first(seq60305);
var seq60305__$1 = cljs.core.next(seq60305);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60306,seq60305__$1);
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
var G__60308 = arguments.length;
switch (G__60308) {
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
var c__58101__auto___60699 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58102__auto__ = (function (){var switch__57968__auto__ = (function (state_60317){
var state_val_60318 = (state_60317[(1)]);
if((state_val_60318 === (1))){
var state_60317__$1 = state_60317;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60317__$1,(2),once_or_cleanup);
} else {
if((state_val_60318 === (2))){
var inst_60314 = (state_60317[(2)]);
var inst_60315 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_60317__$1 = (function (){var statearr_60319 = state_60317;
(statearr_60319[(7)] = inst_60314);

return statearr_60319;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_60317__$1,inst_60315);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__57969__auto__ = null;
var shadow$dom$state_machine__57969__auto____0 = (function (){
var statearr_60320 = [null,null,null,null,null,null,null,null];
(statearr_60320[(0)] = shadow$dom$state_machine__57969__auto__);

(statearr_60320[(1)] = (1));

return statearr_60320;
});
var shadow$dom$state_machine__57969__auto____1 = (function (state_60317){
while(true){
var ret_value__57970__auto__ = (function (){try{while(true){
var result__57971__auto__ = switch__57968__auto__(state_60317);
if(cljs.core.keyword_identical_QMARK_(result__57971__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57971__auto__;
}
break;
}
}catch (e60321){var ex__57972__auto__ = e60321;
var statearr_60322_60700 = state_60317;
(statearr_60322_60700[(2)] = ex__57972__auto__);


if(cljs.core.seq((state_60317[(4)]))){
var statearr_60323_60701 = state_60317;
(statearr_60323_60701[(1)] = cljs.core.first((state_60317[(4)])));

} else {
throw ex__57972__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60702 = state_60317;
state_60317 = G__60702;
continue;
} else {
return ret_value__57970__auto__;
}
break;
}
});
shadow$dom$state_machine__57969__auto__ = function(state_60317){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__57969__auto____0.call(this);
case 1:
return shadow$dom$state_machine__57969__auto____1.call(this,state_60317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__57969__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__57969__auto____0;
shadow$dom$state_machine__57969__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__57969__auto____1;
return shadow$dom$state_machine__57969__auto__;
})()
})();
var state__58103__auto__ = (function (){var statearr_60324 = f__58102__auto__();
(statearr_60324[(6)] = c__58101__auto___60699);

return statearr_60324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58103__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
