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
return cljs.core.cons((coll[idx]),(function (){var G__59702 = coll;
var G__59703 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__59702,G__59703) : shadow.dom.lazy_native_coll_seq.call(null,G__59702,G__59703));
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
var G__59742 = arguments.length;
switch (G__59742) {
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
var G__59755 = arguments.length;
switch (G__59755) {
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
var G__59764 = arguments.length;
switch (G__59764) {
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
var G__59770 = arguments.length;
switch (G__59770) {
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
var G__59786 = arguments.length;
switch (G__59786) {
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
var G__59807 = arguments.length;
switch (G__59807) {
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
}catch (e59822){if((e59822 instanceof Object)){
var e = e59822;
return console.log("didnt support attachEvent",el,e);
} else {
throw e59822;

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
var seq__59836 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__59837 = null;
var count__59838 = (0);
var i__59839 = (0);
while(true){
if((i__59839 < count__59838)){
var el = chunk__59837.cljs$core$IIndexed$_nth$arity$2(null,i__59839);
var handler_60337__$1 = ((function (seq__59836,chunk__59837,count__59838,i__59839,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__59836,chunk__59837,count__59838,i__59839,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_60337__$1);


var G__60338 = seq__59836;
var G__60339 = chunk__59837;
var G__60340 = count__59838;
var G__60341 = (i__59839 + (1));
seq__59836 = G__60338;
chunk__59837 = G__60339;
count__59838 = G__60340;
i__59839 = G__60341;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__59836);
if(temp__5753__auto__){
var seq__59836__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59836__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__59836__$1);
var G__60342 = cljs.core.chunk_rest(seq__59836__$1);
var G__60343 = c__4679__auto__;
var G__60344 = cljs.core.count(c__4679__auto__);
var G__60345 = (0);
seq__59836 = G__60342;
chunk__59837 = G__60343;
count__59838 = G__60344;
i__59839 = G__60345;
continue;
} else {
var el = cljs.core.first(seq__59836__$1);
var handler_60346__$1 = ((function (seq__59836,chunk__59837,count__59838,i__59839,el,seq__59836__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__59836,chunk__59837,count__59838,i__59839,el,seq__59836__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_60346__$1);


var G__60347 = cljs.core.next(seq__59836__$1);
var G__60348 = null;
var G__60349 = (0);
var G__60350 = (0);
seq__59836 = G__60347;
chunk__59837 = G__60348;
count__59838 = G__60349;
i__59839 = G__60350;
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
var G__59851 = arguments.length;
switch (G__59851) {
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
var seq__59868 = cljs.core.seq(events);
var chunk__59869 = null;
var count__59870 = (0);
var i__59871 = (0);
while(true){
if((i__59871 < count__59870)){
var vec__59893 = chunk__59869.cljs$core$IIndexed$_nth$arity$2(null,i__59871);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59893,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59893,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__60352 = seq__59868;
var G__60353 = chunk__59869;
var G__60354 = count__59870;
var G__60355 = (i__59871 + (1));
seq__59868 = G__60352;
chunk__59869 = G__60353;
count__59870 = G__60354;
i__59871 = G__60355;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__59868);
if(temp__5753__auto__){
var seq__59868__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59868__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__59868__$1);
var G__60356 = cljs.core.chunk_rest(seq__59868__$1);
var G__60357 = c__4679__auto__;
var G__60358 = cljs.core.count(c__4679__auto__);
var G__60359 = (0);
seq__59868 = G__60356;
chunk__59869 = G__60357;
count__59870 = G__60358;
i__59871 = G__60359;
continue;
} else {
var vec__59900 = cljs.core.first(seq__59868__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59900,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59900,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__60360 = cljs.core.next(seq__59868__$1);
var G__60361 = null;
var G__60362 = (0);
var G__60363 = (0);
seq__59868 = G__60360;
chunk__59869 = G__60361;
count__59870 = G__60362;
i__59871 = G__60363;
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
var seq__59906 = cljs.core.seq(styles);
var chunk__59907 = null;
var count__59908 = (0);
var i__59909 = (0);
while(true){
if((i__59909 < count__59908)){
var vec__59918 = chunk__59907.cljs$core$IIndexed$_nth$arity$2(null,i__59909);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59918,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59918,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__60364 = seq__59906;
var G__60365 = chunk__59907;
var G__60366 = count__59908;
var G__60367 = (i__59909 + (1));
seq__59906 = G__60364;
chunk__59907 = G__60365;
count__59908 = G__60366;
i__59909 = G__60367;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__59906);
if(temp__5753__auto__){
var seq__59906__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59906__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__59906__$1);
var G__60368 = cljs.core.chunk_rest(seq__59906__$1);
var G__60369 = c__4679__auto__;
var G__60370 = cljs.core.count(c__4679__auto__);
var G__60371 = (0);
seq__59906 = G__60368;
chunk__59907 = G__60369;
count__59908 = G__60370;
i__59909 = G__60371;
continue;
} else {
var vec__59926 = cljs.core.first(seq__59906__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59926,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59926,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__60372 = cljs.core.next(seq__59906__$1);
var G__60373 = null;
var G__60374 = (0);
var G__60375 = (0);
seq__59906 = G__60372;
chunk__59907 = G__60373;
count__59908 = G__60374;
i__59909 = G__60375;
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
var G__59937_60377 = key;
var G__59937_60378__$1 = (((G__59937_60377 instanceof cljs.core.Keyword))?G__59937_60377.fqn:null);
switch (G__59937_60378__$1) {
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
var ks_60381 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_60381,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_60381,"aria-");
}
})())){
el.setAttribute(ks_60381,value);
} else {
(el[ks_60381] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__59973){
var map__59974 = p__59973;
var map__59974__$1 = cljs.core.__destructure_map(map__59974);
var props = map__59974__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59974__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__59977 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59977,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59977,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59977,(2),null);
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
var G__59994 = arguments.length;
switch (G__59994) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__60009){
var vec__60011 = p__60009;
var seq__60012 = cljs.core.seq(vec__60011);
var first__60013 = cljs.core.first(seq__60012);
var seq__60012__$1 = cljs.core.next(seq__60012);
var nn = first__60013;
var first__60013__$1 = cljs.core.first(seq__60012__$1);
var seq__60012__$2 = cljs.core.next(seq__60012__$1);
var np = first__60013__$1;
var nc = seq__60012__$2;
var node = vec__60011;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__60020 = nn;
var G__60021 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__60020,G__60021) : create_fn.call(null,G__60020,G__60021));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__60022 = nn;
var G__60023 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__60022,G__60023) : create_fn.call(null,G__60022,G__60023));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__60027 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60027,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60027,(1),null);
var seq__60030_60385 = cljs.core.seq(node_children);
var chunk__60031_60386 = null;
var count__60032_60387 = (0);
var i__60033_60388 = (0);
while(true){
if((i__60033_60388 < count__60032_60387)){
var child_struct_60389 = chunk__60031_60386.cljs$core$IIndexed$_nth$arity$2(null,i__60033_60388);
var children_60390 = shadow.dom.dom_node(child_struct_60389);
if(cljs.core.seq_QMARK_(children_60390)){
var seq__60069_60392 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_60390));
var chunk__60071_60393 = null;
var count__60072_60394 = (0);
var i__60073_60395 = (0);
while(true){
if((i__60073_60395 < count__60072_60394)){
var child_60399 = chunk__60071_60393.cljs$core$IIndexed$_nth$arity$2(null,i__60073_60395);
if(cljs.core.truth_(child_60399)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_60399);


var G__60400 = seq__60069_60392;
var G__60401 = chunk__60071_60393;
var G__60402 = count__60072_60394;
var G__60403 = (i__60073_60395 + (1));
seq__60069_60392 = G__60400;
chunk__60071_60393 = G__60401;
count__60072_60394 = G__60402;
i__60073_60395 = G__60403;
continue;
} else {
var G__60404 = seq__60069_60392;
var G__60405 = chunk__60071_60393;
var G__60406 = count__60072_60394;
var G__60407 = (i__60073_60395 + (1));
seq__60069_60392 = G__60404;
chunk__60071_60393 = G__60405;
count__60072_60394 = G__60406;
i__60073_60395 = G__60407;
continue;
}
} else {
var temp__5753__auto___60408 = cljs.core.seq(seq__60069_60392);
if(temp__5753__auto___60408){
var seq__60069_60412__$1 = temp__5753__auto___60408;
if(cljs.core.chunked_seq_QMARK_(seq__60069_60412__$1)){
var c__4679__auto___60413 = cljs.core.chunk_first(seq__60069_60412__$1);
var G__60414 = cljs.core.chunk_rest(seq__60069_60412__$1);
var G__60415 = c__4679__auto___60413;
var G__60416 = cljs.core.count(c__4679__auto___60413);
var G__60417 = (0);
seq__60069_60392 = G__60414;
chunk__60071_60393 = G__60415;
count__60072_60394 = G__60416;
i__60073_60395 = G__60417;
continue;
} else {
var child_60418 = cljs.core.first(seq__60069_60412__$1);
if(cljs.core.truth_(child_60418)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_60418);


var G__60419 = cljs.core.next(seq__60069_60412__$1);
var G__60420 = null;
var G__60421 = (0);
var G__60422 = (0);
seq__60069_60392 = G__60419;
chunk__60071_60393 = G__60420;
count__60072_60394 = G__60421;
i__60073_60395 = G__60422;
continue;
} else {
var G__60423 = cljs.core.next(seq__60069_60412__$1);
var G__60424 = null;
var G__60425 = (0);
var G__60426 = (0);
seq__60069_60392 = G__60423;
chunk__60071_60393 = G__60424;
count__60072_60394 = G__60425;
i__60073_60395 = G__60426;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_60390);
}


var G__60427 = seq__60030_60385;
var G__60428 = chunk__60031_60386;
var G__60429 = count__60032_60387;
var G__60430 = (i__60033_60388 + (1));
seq__60030_60385 = G__60427;
chunk__60031_60386 = G__60428;
count__60032_60387 = G__60429;
i__60033_60388 = G__60430;
continue;
} else {
var temp__5753__auto___60431 = cljs.core.seq(seq__60030_60385);
if(temp__5753__auto___60431){
var seq__60030_60432__$1 = temp__5753__auto___60431;
if(cljs.core.chunked_seq_QMARK_(seq__60030_60432__$1)){
var c__4679__auto___60433 = cljs.core.chunk_first(seq__60030_60432__$1);
var G__60434 = cljs.core.chunk_rest(seq__60030_60432__$1);
var G__60435 = c__4679__auto___60433;
var G__60436 = cljs.core.count(c__4679__auto___60433);
var G__60437 = (0);
seq__60030_60385 = G__60434;
chunk__60031_60386 = G__60435;
count__60032_60387 = G__60436;
i__60033_60388 = G__60437;
continue;
} else {
var child_struct_60438 = cljs.core.first(seq__60030_60432__$1);
var children_60439 = shadow.dom.dom_node(child_struct_60438);
if(cljs.core.seq_QMARK_(children_60439)){
var seq__60096_60440 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_60439));
var chunk__60098_60441 = null;
var count__60099_60442 = (0);
var i__60100_60443 = (0);
while(true){
if((i__60100_60443 < count__60099_60442)){
var child_60444 = chunk__60098_60441.cljs$core$IIndexed$_nth$arity$2(null,i__60100_60443);
if(cljs.core.truth_(child_60444)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_60444);


var G__60445 = seq__60096_60440;
var G__60446 = chunk__60098_60441;
var G__60447 = count__60099_60442;
var G__60448 = (i__60100_60443 + (1));
seq__60096_60440 = G__60445;
chunk__60098_60441 = G__60446;
count__60099_60442 = G__60447;
i__60100_60443 = G__60448;
continue;
} else {
var G__60449 = seq__60096_60440;
var G__60450 = chunk__60098_60441;
var G__60451 = count__60099_60442;
var G__60452 = (i__60100_60443 + (1));
seq__60096_60440 = G__60449;
chunk__60098_60441 = G__60450;
count__60099_60442 = G__60451;
i__60100_60443 = G__60452;
continue;
}
} else {
var temp__5753__auto___60453__$1 = cljs.core.seq(seq__60096_60440);
if(temp__5753__auto___60453__$1){
var seq__60096_60454__$1 = temp__5753__auto___60453__$1;
if(cljs.core.chunked_seq_QMARK_(seq__60096_60454__$1)){
var c__4679__auto___60455 = cljs.core.chunk_first(seq__60096_60454__$1);
var G__60456 = cljs.core.chunk_rest(seq__60096_60454__$1);
var G__60457 = c__4679__auto___60455;
var G__60458 = cljs.core.count(c__4679__auto___60455);
var G__60459 = (0);
seq__60096_60440 = G__60456;
chunk__60098_60441 = G__60457;
count__60099_60442 = G__60458;
i__60100_60443 = G__60459;
continue;
} else {
var child_60460 = cljs.core.first(seq__60096_60454__$1);
if(cljs.core.truth_(child_60460)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_60460);


var G__60461 = cljs.core.next(seq__60096_60454__$1);
var G__60462 = null;
var G__60463 = (0);
var G__60464 = (0);
seq__60096_60440 = G__60461;
chunk__60098_60441 = G__60462;
count__60099_60442 = G__60463;
i__60100_60443 = G__60464;
continue;
} else {
var G__60465 = cljs.core.next(seq__60096_60454__$1);
var G__60466 = null;
var G__60467 = (0);
var G__60468 = (0);
seq__60096_60440 = G__60465;
chunk__60098_60441 = G__60466;
count__60099_60442 = G__60467;
i__60100_60443 = G__60468;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_60439);
}


var G__60472 = cljs.core.next(seq__60030_60432__$1);
var G__60473 = null;
var G__60474 = (0);
var G__60475 = (0);
seq__60030_60385 = G__60472;
chunk__60031_60386 = G__60473;
count__60032_60387 = G__60474;
i__60033_60388 = G__60475;
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
var seq__60138 = cljs.core.seq(node);
var chunk__60139 = null;
var count__60140 = (0);
var i__60141 = (0);
while(true){
if((i__60141 < count__60140)){
var n = chunk__60139.cljs$core$IIndexed$_nth$arity$2(null,i__60141);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__60479 = seq__60138;
var G__60480 = chunk__60139;
var G__60481 = count__60140;
var G__60482 = (i__60141 + (1));
seq__60138 = G__60479;
chunk__60139 = G__60480;
count__60140 = G__60481;
i__60141 = G__60482;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__60138);
if(temp__5753__auto__){
var seq__60138__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60138__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__60138__$1);
var G__60483 = cljs.core.chunk_rest(seq__60138__$1);
var G__60484 = c__4679__auto__;
var G__60485 = cljs.core.count(c__4679__auto__);
var G__60486 = (0);
seq__60138 = G__60483;
chunk__60139 = G__60484;
count__60140 = G__60485;
i__60141 = G__60486;
continue;
} else {
var n = cljs.core.first(seq__60138__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__60487 = cljs.core.next(seq__60138__$1);
var G__60488 = null;
var G__60489 = (0);
var G__60490 = (0);
seq__60138 = G__60487;
chunk__60139 = G__60488;
count__60140 = G__60489;
i__60141 = G__60490;
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
var G__60163 = arguments.length;
switch (G__60163) {
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
var len__4864__auto___60497 = arguments.length;
var i__4865__auto___60498 = (0);
while(true){
if((i__4865__auto___60498 < len__4864__auto___60497)){
args__4870__auto__.push((arguments[i__4865__auto___60498]));

var G__60499 = (i__4865__auto___60498 + (1));
i__4865__auto___60498 = G__60499;
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
var seq__60172_60500 = cljs.core.seq(nodes);
var chunk__60173_60501 = null;
var count__60174_60502 = (0);
var i__60175_60503 = (0);
while(true){
if((i__60175_60503 < count__60174_60502)){
var node_60504 = chunk__60173_60501.cljs$core$IIndexed$_nth$arity$2(null,i__60175_60503);
fragment.appendChild(shadow.dom._to_dom(node_60504));


var G__60505 = seq__60172_60500;
var G__60506 = chunk__60173_60501;
var G__60507 = count__60174_60502;
var G__60508 = (i__60175_60503 + (1));
seq__60172_60500 = G__60505;
chunk__60173_60501 = G__60506;
count__60174_60502 = G__60507;
i__60175_60503 = G__60508;
continue;
} else {
var temp__5753__auto___60509 = cljs.core.seq(seq__60172_60500);
if(temp__5753__auto___60509){
var seq__60172_60510__$1 = temp__5753__auto___60509;
if(cljs.core.chunked_seq_QMARK_(seq__60172_60510__$1)){
var c__4679__auto___60511 = cljs.core.chunk_first(seq__60172_60510__$1);
var G__60512 = cljs.core.chunk_rest(seq__60172_60510__$1);
var G__60513 = c__4679__auto___60511;
var G__60514 = cljs.core.count(c__4679__auto___60511);
var G__60515 = (0);
seq__60172_60500 = G__60512;
chunk__60173_60501 = G__60513;
count__60174_60502 = G__60514;
i__60175_60503 = G__60515;
continue;
} else {
var node_60516 = cljs.core.first(seq__60172_60510__$1);
fragment.appendChild(shadow.dom._to_dom(node_60516));


var G__60517 = cljs.core.next(seq__60172_60510__$1);
var G__60518 = null;
var G__60519 = (0);
var G__60520 = (0);
seq__60172_60500 = G__60517;
chunk__60173_60501 = G__60518;
count__60174_60502 = G__60519;
i__60175_60503 = G__60520;
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
var seq__60176_60521 = cljs.core.seq(scripts);
var chunk__60177_60522 = null;
var count__60178_60523 = (0);
var i__60179_60524 = (0);
while(true){
if((i__60179_60524 < count__60178_60523)){
var vec__60186_60526 = chunk__60177_60522.cljs$core$IIndexed$_nth$arity$2(null,i__60179_60524);
var script_tag_60527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60186_60526,(0),null);
var script_body_60528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60186_60526,(1),null);
eval(script_body_60528);


var G__60529 = seq__60176_60521;
var G__60530 = chunk__60177_60522;
var G__60531 = count__60178_60523;
var G__60532 = (i__60179_60524 + (1));
seq__60176_60521 = G__60529;
chunk__60177_60522 = G__60530;
count__60178_60523 = G__60531;
i__60179_60524 = G__60532;
continue;
} else {
var temp__5753__auto___60533 = cljs.core.seq(seq__60176_60521);
if(temp__5753__auto___60533){
var seq__60176_60534__$1 = temp__5753__auto___60533;
if(cljs.core.chunked_seq_QMARK_(seq__60176_60534__$1)){
var c__4679__auto___60536 = cljs.core.chunk_first(seq__60176_60534__$1);
var G__60537 = cljs.core.chunk_rest(seq__60176_60534__$1);
var G__60538 = c__4679__auto___60536;
var G__60539 = cljs.core.count(c__4679__auto___60536);
var G__60540 = (0);
seq__60176_60521 = G__60537;
chunk__60177_60522 = G__60538;
count__60178_60523 = G__60539;
i__60179_60524 = G__60540;
continue;
} else {
var vec__60189_60541 = cljs.core.first(seq__60176_60534__$1);
var script_tag_60542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60189_60541,(0),null);
var script_body_60543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60189_60541,(1),null);
eval(script_body_60543);


var G__60544 = cljs.core.next(seq__60176_60534__$1);
var G__60545 = null;
var G__60546 = (0);
var G__60547 = (0);
seq__60176_60521 = G__60544;
chunk__60177_60522 = G__60545;
count__60178_60523 = G__60546;
i__60179_60524 = G__60547;
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


var G__60554 = seq__60198;
var G__60555 = chunk__60199;
var G__60556 = count__60200;
var G__60557 = (i__60201 + (1));
seq__60198 = G__60554;
chunk__60199 = G__60555;
count__60200 = G__60556;
i__60201 = G__60557;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__60198);
if(temp__5753__auto__){
var seq__60198__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60198__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__60198__$1);
var G__60558 = cljs.core.chunk_rest(seq__60198__$1);
var G__60559 = c__4679__auto__;
var G__60560 = cljs.core.count(c__4679__auto__);
var G__60561 = (0);
seq__60198 = G__60558;
chunk__60199 = G__60559;
count__60200 = G__60560;
i__60201 = G__60561;
continue;
} else {
var it = cljs.core.first(seq__60198__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__60562 = cljs.core.next(seq__60198__$1);
var G__60563 = null;
var G__60564 = (0);
var G__60565 = (0);
seq__60198 = G__60562;
chunk__60199 = G__60563;
count__60200 = G__60564;
i__60201 = G__60565;
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
var G__60573 = (i + (1));
var G__60574 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__60573;
ret = G__60574;
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
var G__60577 = ps;
var G__60578 = (i + (1));
el__$1 = G__60577;
i = G__60578;
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

var seq__60249_60581 = cljs.core.seq(props);
var chunk__60250_60582 = null;
var count__60251_60583 = (0);
var i__60252_60584 = (0);
while(true){
if((i__60252_60584 < count__60251_60583)){
var vec__60259_60585 = chunk__60250_60582.cljs$core$IIndexed$_nth$arity$2(null,i__60252_60584);
var k_60586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60259_60585,(0),null);
var v_60587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60259_60585,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_60586);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_60586),v_60587);


var G__60588 = seq__60249_60581;
var G__60589 = chunk__60250_60582;
var G__60590 = count__60251_60583;
var G__60591 = (i__60252_60584 + (1));
seq__60249_60581 = G__60588;
chunk__60250_60582 = G__60589;
count__60251_60583 = G__60590;
i__60252_60584 = G__60591;
continue;
} else {
var temp__5753__auto___60592 = cljs.core.seq(seq__60249_60581);
if(temp__5753__auto___60592){
var seq__60249_60593__$1 = temp__5753__auto___60592;
if(cljs.core.chunked_seq_QMARK_(seq__60249_60593__$1)){
var c__4679__auto___60594 = cljs.core.chunk_first(seq__60249_60593__$1);
var G__60595 = cljs.core.chunk_rest(seq__60249_60593__$1);
var G__60596 = c__4679__auto___60594;
var G__60597 = cljs.core.count(c__4679__auto___60594);
var G__60598 = (0);
seq__60249_60581 = G__60595;
chunk__60250_60582 = G__60596;
count__60251_60583 = G__60597;
i__60252_60584 = G__60598;
continue;
} else {
var vec__60262_60599 = cljs.core.first(seq__60249_60593__$1);
var k_60600 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60262_60599,(0),null);
var v_60601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60262_60599,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_60600);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_60600),v_60601);


var G__60602 = cljs.core.next(seq__60249_60593__$1);
var G__60603 = null;
var G__60604 = (0);
var G__60605 = (0);
seq__60249_60581 = G__60602;
chunk__60250_60582 = G__60603;
count__60251_60583 = G__60604;
i__60252_60584 = G__60605;
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
var seq__60269_60606 = cljs.core.seq(node_children);
var chunk__60271_60607 = null;
var count__60272_60608 = (0);
var i__60273_60609 = (0);
while(true){
if((i__60273_60609 < count__60272_60608)){
var child_struct_60610 = chunk__60271_60607.cljs$core$IIndexed$_nth$arity$2(null,i__60273_60609);
if((!((child_struct_60610 == null)))){
if(typeof child_struct_60610 === 'string'){
var text_60611 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_60611),child_struct_60610].join(''));
} else {
var children_60612 = shadow.dom.svg_node(child_struct_60610);
if(cljs.core.seq_QMARK_(children_60612)){
var seq__60289_60614 = cljs.core.seq(children_60612);
var chunk__60291_60615 = null;
var count__60292_60616 = (0);
var i__60293_60617 = (0);
while(true){
if((i__60293_60617 < count__60292_60616)){
var child_60618 = chunk__60291_60615.cljs$core$IIndexed$_nth$arity$2(null,i__60293_60617);
if(cljs.core.truth_(child_60618)){
node.appendChild(child_60618);


var G__60619 = seq__60289_60614;
var G__60620 = chunk__60291_60615;
var G__60621 = count__60292_60616;
var G__60622 = (i__60293_60617 + (1));
seq__60289_60614 = G__60619;
chunk__60291_60615 = G__60620;
count__60292_60616 = G__60621;
i__60293_60617 = G__60622;
continue;
} else {
var G__60623 = seq__60289_60614;
var G__60624 = chunk__60291_60615;
var G__60625 = count__60292_60616;
var G__60626 = (i__60293_60617 + (1));
seq__60289_60614 = G__60623;
chunk__60291_60615 = G__60624;
count__60292_60616 = G__60625;
i__60293_60617 = G__60626;
continue;
}
} else {
var temp__5753__auto___60627 = cljs.core.seq(seq__60289_60614);
if(temp__5753__auto___60627){
var seq__60289_60628__$1 = temp__5753__auto___60627;
if(cljs.core.chunked_seq_QMARK_(seq__60289_60628__$1)){
var c__4679__auto___60629 = cljs.core.chunk_first(seq__60289_60628__$1);
var G__60630 = cljs.core.chunk_rest(seq__60289_60628__$1);
var G__60631 = c__4679__auto___60629;
var G__60632 = cljs.core.count(c__4679__auto___60629);
var G__60633 = (0);
seq__60289_60614 = G__60630;
chunk__60291_60615 = G__60631;
count__60292_60616 = G__60632;
i__60293_60617 = G__60633;
continue;
} else {
var child_60634 = cljs.core.first(seq__60289_60628__$1);
if(cljs.core.truth_(child_60634)){
node.appendChild(child_60634);


var G__60635 = cljs.core.next(seq__60289_60628__$1);
var G__60636 = null;
var G__60637 = (0);
var G__60638 = (0);
seq__60289_60614 = G__60635;
chunk__60291_60615 = G__60636;
count__60292_60616 = G__60637;
i__60293_60617 = G__60638;
continue;
} else {
var G__60639 = cljs.core.next(seq__60289_60628__$1);
var G__60640 = null;
var G__60641 = (0);
var G__60642 = (0);
seq__60289_60614 = G__60639;
chunk__60291_60615 = G__60640;
count__60292_60616 = G__60641;
i__60293_60617 = G__60642;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_60612);
}
}


var G__60643 = seq__60269_60606;
var G__60644 = chunk__60271_60607;
var G__60645 = count__60272_60608;
var G__60646 = (i__60273_60609 + (1));
seq__60269_60606 = G__60643;
chunk__60271_60607 = G__60644;
count__60272_60608 = G__60645;
i__60273_60609 = G__60646;
continue;
} else {
var G__60647 = seq__60269_60606;
var G__60648 = chunk__60271_60607;
var G__60649 = count__60272_60608;
var G__60650 = (i__60273_60609 + (1));
seq__60269_60606 = G__60647;
chunk__60271_60607 = G__60648;
count__60272_60608 = G__60649;
i__60273_60609 = G__60650;
continue;
}
} else {
var temp__5753__auto___60651 = cljs.core.seq(seq__60269_60606);
if(temp__5753__auto___60651){
var seq__60269_60652__$1 = temp__5753__auto___60651;
if(cljs.core.chunked_seq_QMARK_(seq__60269_60652__$1)){
var c__4679__auto___60653 = cljs.core.chunk_first(seq__60269_60652__$1);
var G__60654 = cljs.core.chunk_rest(seq__60269_60652__$1);
var G__60655 = c__4679__auto___60653;
var G__60656 = cljs.core.count(c__4679__auto___60653);
var G__60657 = (0);
seq__60269_60606 = G__60654;
chunk__60271_60607 = G__60655;
count__60272_60608 = G__60656;
i__60273_60609 = G__60657;
continue;
} else {
var child_struct_60658 = cljs.core.first(seq__60269_60652__$1);
if((!((child_struct_60658 == null)))){
if(typeof child_struct_60658 === 'string'){
var text_60659 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_60659),child_struct_60658].join(''));
} else {
var children_60660 = shadow.dom.svg_node(child_struct_60658);
if(cljs.core.seq_QMARK_(children_60660)){
var seq__60295_60661 = cljs.core.seq(children_60660);
var chunk__60297_60662 = null;
var count__60298_60663 = (0);
var i__60299_60664 = (0);
while(true){
if((i__60299_60664 < count__60298_60663)){
var child_60665 = chunk__60297_60662.cljs$core$IIndexed$_nth$arity$2(null,i__60299_60664);
if(cljs.core.truth_(child_60665)){
node.appendChild(child_60665);


var G__60666 = seq__60295_60661;
var G__60667 = chunk__60297_60662;
var G__60668 = count__60298_60663;
var G__60669 = (i__60299_60664 + (1));
seq__60295_60661 = G__60666;
chunk__60297_60662 = G__60667;
count__60298_60663 = G__60668;
i__60299_60664 = G__60669;
continue;
} else {
var G__60670 = seq__60295_60661;
var G__60671 = chunk__60297_60662;
var G__60672 = count__60298_60663;
var G__60673 = (i__60299_60664 + (1));
seq__60295_60661 = G__60670;
chunk__60297_60662 = G__60671;
count__60298_60663 = G__60672;
i__60299_60664 = G__60673;
continue;
}
} else {
var temp__5753__auto___60674__$1 = cljs.core.seq(seq__60295_60661);
if(temp__5753__auto___60674__$1){
var seq__60295_60675__$1 = temp__5753__auto___60674__$1;
if(cljs.core.chunked_seq_QMARK_(seq__60295_60675__$1)){
var c__4679__auto___60676 = cljs.core.chunk_first(seq__60295_60675__$1);
var G__60677 = cljs.core.chunk_rest(seq__60295_60675__$1);
var G__60678 = c__4679__auto___60676;
var G__60679 = cljs.core.count(c__4679__auto___60676);
var G__60680 = (0);
seq__60295_60661 = G__60677;
chunk__60297_60662 = G__60678;
count__60298_60663 = G__60679;
i__60299_60664 = G__60680;
continue;
} else {
var child_60682 = cljs.core.first(seq__60295_60675__$1);
if(cljs.core.truth_(child_60682)){
node.appendChild(child_60682);


var G__60684 = cljs.core.next(seq__60295_60675__$1);
var G__60685 = null;
var G__60686 = (0);
var G__60687 = (0);
seq__60295_60661 = G__60684;
chunk__60297_60662 = G__60685;
count__60298_60663 = G__60686;
i__60299_60664 = G__60687;
continue;
} else {
var G__60688 = cljs.core.next(seq__60295_60675__$1);
var G__60689 = null;
var G__60690 = (0);
var G__60691 = (0);
seq__60295_60661 = G__60688;
chunk__60297_60662 = G__60689;
count__60298_60663 = G__60690;
i__60299_60664 = G__60691;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_60660);
}
}


var G__60692 = cljs.core.next(seq__60269_60652__$1);
var G__60693 = null;
var G__60694 = (0);
var G__60695 = (0);
seq__60269_60606 = G__60692;
chunk__60271_60607 = G__60693;
count__60272_60608 = G__60694;
i__60273_60609 = G__60695;
continue;
} else {
var G__60696 = cljs.core.next(seq__60269_60652__$1);
var G__60697 = null;
var G__60698 = (0);
var G__60699 = (0);
seq__60269_60606 = G__60696;
chunk__60271_60607 = G__60697;
count__60272_60608 = G__60698;
i__60273_60609 = G__60699;
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
var len__4864__auto___60704 = arguments.length;
var i__4865__auto___60705 = (0);
while(true){
if((i__4865__auto___60705 < len__4864__auto___60704)){
args__4870__auto__.push((arguments[i__4865__auto___60705]));

var G__60706 = (i__4865__auto___60705 + (1));
i__4865__auto___60705 = G__60706;
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
var c__58096__auto___60708 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58097__auto__ = (function (){var switch__57968__auto__ = (function (state_60317){
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
var statearr_60322_60709 = state_60317;
(statearr_60322_60709[(2)] = ex__57972__auto__);


if(cljs.core.seq((state_60317[(4)]))){
var statearr_60323_60714 = state_60317;
(statearr_60323_60714[(1)] = cljs.core.first((state_60317[(4)])));

} else {
throw ex__57972__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57970__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60717 = state_60317;
state_60317 = G__60717;
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
var state__58098__auto__ = (function (){var statearr_60324 = f__58097__auto__();
(statearr_60324[(6)] = c__58096__auto___60708);

return statearr_60324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58098__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
