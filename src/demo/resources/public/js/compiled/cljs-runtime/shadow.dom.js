goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_42086 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_42086(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_42087 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_42087(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__41610 = coll;
var G__41611 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__41610,G__41611) : shadow.dom.lazy_native_coll_seq.call(null,G__41610,G__41611));
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
var G__41620 = arguments.length;
switch (G__41620) {
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
var G__41623 = arguments.length;
switch (G__41623) {
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
var G__41626 = arguments.length;
switch (G__41626) {
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
var G__41628 = arguments.length;
switch (G__41628) {
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
var G__41630 = arguments.length;
switch (G__41630) {
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
var G__41632 = arguments.length;
switch (G__41632) {
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
}catch (e41633){if((e41633 instanceof Object)){
var e = e41633;
return console.log("didnt support attachEvent",el,e);
} else {
throw e41633;

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
var seq__41634 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__41635 = null;
var count__41636 = (0);
var i__41637 = (0);
while(true){
if((i__41637 < count__41636)){
var el = chunk__41635.cljs$core$IIndexed$_nth$arity$2(null,i__41637);
var handler_42097__$1 = ((function (seq__41634,chunk__41635,count__41636,i__41637,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__41634,chunk__41635,count__41636,i__41637,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_42097__$1);


var G__42098 = seq__41634;
var G__42099 = chunk__41635;
var G__42100 = count__41636;
var G__42101 = (i__41637 + (1));
seq__41634 = G__42098;
chunk__41635 = G__42099;
count__41636 = G__42100;
i__41637 = G__42101;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__41634);
if(temp__5753__auto__){
var seq__41634__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41634__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__41634__$1);
var G__42102 = cljs.core.chunk_rest(seq__41634__$1);
var G__42103 = c__4679__auto__;
var G__42104 = cljs.core.count(c__4679__auto__);
var G__42105 = (0);
seq__41634 = G__42102;
chunk__41635 = G__42103;
count__41636 = G__42104;
i__41637 = G__42105;
continue;
} else {
var el = cljs.core.first(seq__41634__$1);
var handler_42106__$1 = ((function (seq__41634,chunk__41635,count__41636,i__41637,el,seq__41634__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__41634,chunk__41635,count__41636,i__41637,el,seq__41634__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_42106__$1);


var G__42107 = cljs.core.next(seq__41634__$1);
var G__42108 = null;
var G__42109 = (0);
var G__42110 = (0);
seq__41634 = G__42107;
chunk__41635 = G__42108;
count__41636 = G__42109;
i__41637 = G__42110;
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
var G__41641 = arguments.length;
switch (G__41641) {
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
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events__$1){
var seq__41643 = cljs.core.seq(events__$1);
var chunk__41644 = null;
var count__41645 = (0);
var i__41646 = (0);
while(true){
if((i__41646 < count__41645)){
var vec__41653 = chunk__41644.cljs$core$IIndexed$_nth$arity$2(null,i__41646);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41653,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41653,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__42112 = seq__41643;
var G__42113 = chunk__41644;
var G__42114 = count__41645;
var G__42115 = (i__41646 + (1));
seq__41643 = G__42112;
chunk__41644 = G__42113;
count__41645 = G__42114;
i__41646 = G__42115;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__41643);
if(temp__5753__auto__){
var seq__41643__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41643__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__41643__$1);
var G__42116 = cljs.core.chunk_rest(seq__41643__$1);
var G__42117 = c__4679__auto__;
var G__42118 = cljs.core.count(c__4679__auto__);
var G__42119 = (0);
seq__41643 = G__42116;
chunk__41644 = G__42117;
count__41645 = G__42118;
i__41646 = G__42119;
continue;
} else {
var vec__41656 = cljs.core.first(seq__41643__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41656,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41656,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__42120 = cljs.core.next(seq__41643__$1);
var G__42121 = null;
var G__42122 = (0);
var G__42123 = (0);
seq__41643 = G__42120;
chunk__41644 = G__42121;
count__41645 = G__42122;
i__41646 = G__42123;
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
var seq__41659 = cljs.core.seq(styles);
var chunk__41660 = null;
var count__41661 = (0);
var i__41662 = (0);
while(true){
if((i__41662 < count__41661)){
var vec__41669 = chunk__41660.cljs$core$IIndexed$_nth$arity$2(null,i__41662);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41669,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41669,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__42124 = seq__41659;
var G__42125 = chunk__41660;
var G__42126 = count__41661;
var G__42127 = (i__41662 + (1));
seq__41659 = G__42124;
chunk__41660 = G__42125;
count__41661 = G__42126;
i__41662 = G__42127;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__41659);
if(temp__5753__auto__){
var seq__41659__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41659__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__41659__$1);
var G__42128 = cljs.core.chunk_rest(seq__41659__$1);
var G__42129 = c__4679__auto__;
var G__42130 = cljs.core.count(c__4679__auto__);
var G__42131 = (0);
seq__41659 = G__42128;
chunk__41660 = G__42129;
count__41661 = G__42130;
i__41662 = G__42131;
continue;
} else {
var vec__41672 = cljs.core.first(seq__41659__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41672,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41672,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__42132 = cljs.core.next(seq__41659__$1);
var G__42133 = null;
var G__42134 = (0);
var G__42135 = (0);
seq__41659 = G__42132;
chunk__41660 = G__42133;
count__41661 = G__42134;
i__41662 = G__42135;
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
var G__41675_42136 = key;
var G__41675_42137__$1 = (((G__41675_42136 instanceof cljs.core.Keyword))?G__41675_42136.fqn:null);
switch (G__41675_42137__$1) {
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
var ks_42141 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_42141,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_42141,"aria-");
}
})())){
el.setAttribute(ks_42141,value);
} else {
(el[ks_42141] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__41677){
var map__41678 = p__41677;
var map__41678__$1 = cljs.core.__destructure_map(map__41678);
var props = map__41678__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41678__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__41679 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41679,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41679,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41679,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__41682 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__41682,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__41682;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__41684 = arguments.length;
switch (G__41684) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__41685){
var vec__41686 = p__41685;
var seq__41687 = cljs.core.seq(vec__41686);
var first__41688 = cljs.core.first(seq__41687);
var seq__41687__$1 = cljs.core.next(seq__41687);
var nn = first__41688;
var first__41688__$1 = cljs.core.first(seq__41687__$1);
var seq__41687__$2 = cljs.core.next(seq__41687__$1);
var np = first__41688__$1;
var nc = seq__41687__$2;
var node = vec__41686;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__41689 = nn;
var G__41690 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__41689,G__41690) : create_fn.call(null,G__41689,G__41690));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__41691 = nn;
var G__41692 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__41691,G__41692) : create_fn.call(null,G__41691,G__41692));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__41693 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41693,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41693,(1),null);
var seq__41696_42143 = cljs.core.seq(node_children);
var chunk__41697_42144 = null;
var count__41698_42145 = (0);
var i__41699_42146 = (0);
while(true){
if((i__41699_42146 < count__41698_42145)){
var child_struct_42147 = chunk__41697_42144.cljs$core$IIndexed$_nth$arity$2(null,i__41699_42146);
var children_42148 = shadow.dom.dom_node(child_struct_42147);
if(cljs.core.seq_QMARK_(children_42148)){
var seq__41722_42149 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_42148));
var chunk__41724_42150 = null;
var count__41725_42151 = (0);
var i__41726_42152 = (0);
while(true){
if((i__41726_42152 < count__41725_42151)){
var child_42153 = chunk__41724_42150.cljs$core$IIndexed$_nth$arity$2(null,i__41726_42152);
if(cljs.core.truth_(child_42153)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_42153);


var G__42154 = seq__41722_42149;
var G__42155 = chunk__41724_42150;
var G__42156 = count__41725_42151;
var G__42157 = (i__41726_42152 + (1));
seq__41722_42149 = G__42154;
chunk__41724_42150 = G__42155;
count__41725_42151 = G__42156;
i__41726_42152 = G__42157;
continue;
} else {
var G__42158 = seq__41722_42149;
var G__42159 = chunk__41724_42150;
var G__42160 = count__41725_42151;
var G__42161 = (i__41726_42152 + (1));
seq__41722_42149 = G__42158;
chunk__41724_42150 = G__42159;
count__41725_42151 = G__42160;
i__41726_42152 = G__42161;
continue;
}
} else {
var temp__5753__auto___42163 = cljs.core.seq(seq__41722_42149);
if(temp__5753__auto___42163){
var seq__41722_42164__$1 = temp__5753__auto___42163;
if(cljs.core.chunked_seq_QMARK_(seq__41722_42164__$1)){
var c__4679__auto___42165 = cljs.core.chunk_first(seq__41722_42164__$1);
var G__42166 = cljs.core.chunk_rest(seq__41722_42164__$1);
var G__42167 = c__4679__auto___42165;
var G__42168 = cljs.core.count(c__4679__auto___42165);
var G__42169 = (0);
seq__41722_42149 = G__42166;
chunk__41724_42150 = G__42167;
count__41725_42151 = G__42168;
i__41726_42152 = G__42169;
continue;
} else {
var child_42170 = cljs.core.first(seq__41722_42164__$1);
if(cljs.core.truth_(child_42170)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_42170);


var G__42171 = cljs.core.next(seq__41722_42164__$1);
var G__42172 = null;
var G__42173 = (0);
var G__42174 = (0);
seq__41722_42149 = G__42171;
chunk__41724_42150 = G__42172;
count__41725_42151 = G__42173;
i__41726_42152 = G__42174;
continue;
} else {
var G__42175 = cljs.core.next(seq__41722_42164__$1);
var G__42176 = null;
var G__42177 = (0);
var G__42178 = (0);
seq__41722_42149 = G__42175;
chunk__41724_42150 = G__42176;
count__41725_42151 = G__42177;
i__41726_42152 = G__42178;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_42148);
}


var G__42179 = seq__41696_42143;
var G__42180 = chunk__41697_42144;
var G__42181 = count__41698_42145;
var G__42182 = (i__41699_42146 + (1));
seq__41696_42143 = G__42179;
chunk__41697_42144 = G__42180;
count__41698_42145 = G__42181;
i__41699_42146 = G__42182;
continue;
} else {
var temp__5753__auto___42183 = cljs.core.seq(seq__41696_42143);
if(temp__5753__auto___42183){
var seq__41696_42184__$1 = temp__5753__auto___42183;
if(cljs.core.chunked_seq_QMARK_(seq__41696_42184__$1)){
var c__4679__auto___42185 = cljs.core.chunk_first(seq__41696_42184__$1);
var G__42187 = cljs.core.chunk_rest(seq__41696_42184__$1);
var G__42188 = c__4679__auto___42185;
var G__42189 = cljs.core.count(c__4679__auto___42185);
var G__42190 = (0);
seq__41696_42143 = G__42187;
chunk__41697_42144 = G__42188;
count__41698_42145 = G__42189;
i__41699_42146 = G__42190;
continue;
} else {
var child_struct_42191 = cljs.core.first(seq__41696_42184__$1);
var children_42192 = shadow.dom.dom_node(child_struct_42191);
if(cljs.core.seq_QMARK_(children_42192)){
var seq__41738_42194 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_42192));
var chunk__41740_42195 = null;
var count__41741_42196 = (0);
var i__41742_42197 = (0);
while(true){
if((i__41742_42197 < count__41741_42196)){
var child_42198 = chunk__41740_42195.cljs$core$IIndexed$_nth$arity$2(null,i__41742_42197);
if(cljs.core.truth_(child_42198)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_42198);


var G__42199 = seq__41738_42194;
var G__42200 = chunk__41740_42195;
var G__42201 = count__41741_42196;
var G__42202 = (i__41742_42197 + (1));
seq__41738_42194 = G__42199;
chunk__41740_42195 = G__42200;
count__41741_42196 = G__42201;
i__41742_42197 = G__42202;
continue;
} else {
var G__42203 = seq__41738_42194;
var G__42204 = chunk__41740_42195;
var G__42205 = count__41741_42196;
var G__42206 = (i__41742_42197 + (1));
seq__41738_42194 = G__42203;
chunk__41740_42195 = G__42204;
count__41741_42196 = G__42205;
i__41742_42197 = G__42206;
continue;
}
} else {
var temp__5753__auto___42207__$1 = cljs.core.seq(seq__41738_42194);
if(temp__5753__auto___42207__$1){
var seq__41738_42208__$1 = temp__5753__auto___42207__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41738_42208__$1)){
var c__4679__auto___42209 = cljs.core.chunk_first(seq__41738_42208__$1);
var G__42210 = cljs.core.chunk_rest(seq__41738_42208__$1);
var G__42211 = c__4679__auto___42209;
var G__42212 = cljs.core.count(c__4679__auto___42209);
var G__42213 = (0);
seq__41738_42194 = G__42210;
chunk__41740_42195 = G__42211;
count__41741_42196 = G__42212;
i__41742_42197 = G__42213;
continue;
} else {
var child_42214 = cljs.core.first(seq__41738_42208__$1);
if(cljs.core.truth_(child_42214)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_42214);


var G__42215 = cljs.core.next(seq__41738_42208__$1);
var G__42216 = null;
var G__42217 = (0);
var G__42218 = (0);
seq__41738_42194 = G__42215;
chunk__41740_42195 = G__42216;
count__41741_42196 = G__42217;
i__41742_42197 = G__42218;
continue;
} else {
var G__42219 = cljs.core.next(seq__41738_42208__$1);
var G__42220 = null;
var G__42221 = (0);
var G__42222 = (0);
seq__41738_42194 = G__42219;
chunk__41740_42195 = G__42220;
count__41741_42196 = G__42221;
i__41742_42197 = G__42222;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_42192);
}


var G__42223 = cljs.core.next(seq__41696_42184__$1);
var G__42224 = null;
var G__42225 = (0);
var G__42226 = (0);
seq__41696_42143 = G__42223;
chunk__41697_42144 = G__42224;
count__41698_42145 = G__42225;
i__41699_42146 = G__42226;
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
var seq__41754 = cljs.core.seq(node);
var chunk__41755 = null;
var count__41756 = (0);
var i__41757 = (0);
while(true){
if((i__41757 < count__41756)){
var n = chunk__41755.cljs$core$IIndexed$_nth$arity$2(null,i__41757);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__42228 = seq__41754;
var G__42229 = chunk__41755;
var G__42230 = count__41756;
var G__42231 = (i__41757 + (1));
seq__41754 = G__42228;
chunk__41755 = G__42229;
count__41756 = G__42230;
i__41757 = G__42231;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__41754);
if(temp__5753__auto__){
var seq__41754__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41754__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__41754__$1);
var G__42232 = cljs.core.chunk_rest(seq__41754__$1);
var G__42233 = c__4679__auto__;
var G__42234 = cljs.core.count(c__4679__auto__);
var G__42235 = (0);
seq__41754 = G__42232;
chunk__41755 = G__42233;
count__41756 = G__42234;
i__41757 = G__42235;
continue;
} else {
var n = cljs.core.first(seq__41754__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__42236 = cljs.core.next(seq__41754__$1);
var G__42237 = null;
var G__42238 = (0);
var G__42239 = (0);
seq__41754 = G__42236;
chunk__41755 = G__42237;
count__41756 = G__42238;
i__41757 = G__42239;
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
var G__41770 = arguments.length;
switch (G__41770) {
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
var G__41774 = arguments.length;
switch (G__41774) {
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
var G__41782 = arguments.length;
switch (G__41782) {
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
var len__4864__auto___42245 = arguments.length;
var i__4865__auto___42246 = (0);
while(true){
if((i__4865__auto___42246 < len__4864__auto___42245)){
args__4870__auto__.push((arguments[i__4865__auto___42246]));

var G__42247 = (i__4865__auto___42246 + (1));
i__4865__auto___42246 = G__42247;
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
var seq__41795_42254 = cljs.core.seq(nodes);
var chunk__41796_42255 = null;
var count__41797_42256 = (0);
var i__41798_42257 = (0);
while(true){
if((i__41798_42257 < count__41797_42256)){
var node_42258 = chunk__41796_42255.cljs$core$IIndexed$_nth$arity$2(null,i__41798_42257);
fragment.appendChild(shadow.dom._to_dom(node_42258));


var G__42259 = seq__41795_42254;
var G__42260 = chunk__41796_42255;
var G__42261 = count__41797_42256;
var G__42262 = (i__41798_42257 + (1));
seq__41795_42254 = G__42259;
chunk__41796_42255 = G__42260;
count__41797_42256 = G__42261;
i__41798_42257 = G__42262;
continue;
} else {
var temp__5753__auto___42263 = cljs.core.seq(seq__41795_42254);
if(temp__5753__auto___42263){
var seq__41795_42264__$1 = temp__5753__auto___42263;
if(cljs.core.chunked_seq_QMARK_(seq__41795_42264__$1)){
var c__4679__auto___42265 = cljs.core.chunk_first(seq__41795_42264__$1);
var G__42266 = cljs.core.chunk_rest(seq__41795_42264__$1);
var G__42267 = c__4679__auto___42265;
var G__42268 = cljs.core.count(c__4679__auto___42265);
var G__42269 = (0);
seq__41795_42254 = G__42266;
chunk__41796_42255 = G__42267;
count__41797_42256 = G__42268;
i__41798_42257 = G__42269;
continue;
} else {
var node_42270 = cljs.core.first(seq__41795_42264__$1);
fragment.appendChild(shadow.dom._to_dom(node_42270));


var G__42271 = cljs.core.next(seq__41795_42264__$1);
var G__42272 = null;
var G__42273 = (0);
var G__42274 = (0);
seq__41795_42254 = G__42271;
chunk__41796_42255 = G__42272;
count__41797_42256 = G__42273;
i__41798_42257 = G__42274;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq41793){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41793));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__41822_42279 = cljs.core.seq(scripts);
var chunk__41823_42280 = null;
var count__41824_42281 = (0);
var i__41825_42282 = (0);
while(true){
if((i__41825_42282 < count__41824_42281)){
var vec__41832_42283 = chunk__41823_42280.cljs$core$IIndexed$_nth$arity$2(null,i__41825_42282);
var script_tag_42284 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41832_42283,(0),null);
var script_body_42285 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41832_42283,(1),null);
eval(script_body_42285);


var G__42286 = seq__41822_42279;
var G__42287 = chunk__41823_42280;
var G__42288 = count__41824_42281;
var G__42289 = (i__41825_42282 + (1));
seq__41822_42279 = G__42286;
chunk__41823_42280 = G__42287;
count__41824_42281 = G__42288;
i__41825_42282 = G__42289;
continue;
} else {
var temp__5753__auto___42290 = cljs.core.seq(seq__41822_42279);
if(temp__5753__auto___42290){
var seq__41822_42291__$1 = temp__5753__auto___42290;
if(cljs.core.chunked_seq_QMARK_(seq__41822_42291__$1)){
var c__4679__auto___42292 = cljs.core.chunk_first(seq__41822_42291__$1);
var G__42293 = cljs.core.chunk_rest(seq__41822_42291__$1);
var G__42294 = c__4679__auto___42292;
var G__42295 = cljs.core.count(c__4679__auto___42292);
var G__42296 = (0);
seq__41822_42279 = G__42293;
chunk__41823_42280 = G__42294;
count__41824_42281 = G__42295;
i__41825_42282 = G__42296;
continue;
} else {
var vec__41835_42297 = cljs.core.first(seq__41822_42291__$1);
var script_tag_42298 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41835_42297,(0),null);
var script_body_42299 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41835_42297,(1),null);
eval(script_body_42299);


var G__42300 = cljs.core.next(seq__41822_42291__$1);
var G__42301 = null;
var G__42302 = (0);
var G__42303 = (0);
seq__41822_42279 = G__42300;
chunk__41823_42280 = G__42301;
count__41824_42281 = G__42302;
i__41825_42282 = G__42303;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__41838){
var vec__41839 = p__41838;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41839,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41839,(1),null);
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
var G__41863 = arguments.length;
switch (G__41863) {
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
var seq__41864 = cljs.core.seq(style_keys);
var chunk__41865 = null;
var count__41866 = (0);
var i__41867 = (0);
while(true){
if((i__41867 < count__41866)){
var it = chunk__41865.cljs$core$IIndexed$_nth$arity$2(null,i__41867);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__42315 = seq__41864;
var G__42316 = chunk__41865;
var G__42317 = count__41866;
var G__42318 = (i__41867 + (1));
seq__41864 = G__42315;
chunk__41865 = G__42316;
count__41866 = G__42317;
i__41867 = G__42318;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__41864);
if(temp__5753__auto__){
var seq__41864__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41864__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__41864__$1);
var G__42319 = cljs.core.chunk_rest(seq__41864__$1);
var G__42320 = c__4679__auto__;
var G__42321 = cljs.core.count(c__4679__auto__);
var G__42322 = (0);
seq__41864 = G__42319;
chunk__41865 = G__42320;
count__41866 = G__42321;
i__41867 = G__42322;
continue;
} else {
var it = cljs.core.first(seq__41864__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__42327 = cljs.core.next(seq__41864__$1);
var G__42328 = null;
var G__42329 = (0);
var G__42330 = (0);
seq__41864 = G__42327;
chunk__41865 = G__42328;
count__41866 = G__42329;
i__41867 = G__42330;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k41869,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__41873 = k41869;
var G__41873__$1 = (((G__41873 instanceof cljs.core.Keyword))?G__41873.fqn:null);
switch (G__41873__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k41869,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__41874){
var vec__41875 = p__41874;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41875,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41875,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41868){
var self__ = this;
var G__41868__$1 = this;
return (new cljs.core.RecordIter((0),G__41868__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this41870,other41871){
var self__ = this;
var this41870__$1 = this;
return (((!((other41871 == null)))) && ((((this41870__$1.constructor === other41871.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41870__$1.x,other41871.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41870__$1.y,other41871.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41870__$1.__extmap,other41871.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k41869){
var self__ = this;
var this__4509__auto____$1 = this;
var G__41879 = k41869;
var G__41879__$1 = (((G__41879 instanceof cljs.core.Keyword))?G__41879.fqn:null);
switch (G__41879__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k41869);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__41868){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__41880 = cljs.core.keyword_identical_QMARK_;
var expr__41881 = k__4511__auto__;
if(cljs.core.truth_((pred__41880.cljs$core$IFn$_invoke$arity$2 ? pred__41880.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__41881) : pred__41880.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__41881)))){
return (new shadow.dom.Coordinate(G__41868,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__41880.cljs$core$IFn$_invoke$arity$2 ? pred__41880.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__41881) : pred__41880.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__41881)))){
return (new shadow.dom.Coordinate(self__.x,G__41868,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__41868),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__41868){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__41868,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__41872){
var extmap__4542__auto__ = (function (){var G__41883 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__41872,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__41872)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__41883);
} else {
return G__41883;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__41872),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__41872),null,cljs.core.not_empty(extmap__4542__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k41890,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__41899 = k41890;
var G__41899__$1 = (((G__41899 instanceof cljs.core.Keyword))?G__41899.fqn:null);
switch (G__41899__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k41890,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__41900){
var vec__41901 = p__41900;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41901,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41901,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41889){
var self__ = this;
var G__41889__$1 = this;
return (new cljs.core.RecordIter((0),G__41889__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this41891,other41892){
var self__ = this;
var this41891__$1 = this;
return (((!((other41892 == null)))) && ((((this41891__$1.constructor === other41892.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41891__$1.w,other41892.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41891__$1.h,other41892.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41891__$1.__extmap,other41892.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k41890){
var self__ = this;
var this__4509__auto____$1 = this;
var G__41908 = k41890;
var G__41908__$1 = (((G__41908 instanceof cljs.core.Keyword))?G__41908.fqn:null);
switch (G__41908__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k41890);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__41889){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__41909 = cljs.core.keyword_identical_QMARK_;
var expr__41910 = k__4511__auto__;
if(cljs.core.truth_((pred__41909.cljs$core$IFn$_invoke$arity$2 ? pred__41909.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__41910) : pred__41909.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__41910)))){
return (new shadow.dom.Size(G__41889,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__41909.cljs$core$IFn$_invoke$arity$2 ? pred__41909.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__41910) : pred__41909.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__41910)))){
return (new shadow.dom.Size(self__.w,G__41889,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__41889),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__41889){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__41889,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__41893){
var extmap__4542__auto__ = (function (){var G__41913 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__41893,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__41893)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__41913);
} else {
return G__41913;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__41893),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__41893),null,cljs.core.not_empty(extmap__4542__auto__),null));
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
var G__42379 = (i + (1));
var G__42380 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__42379;
ret = G__42380;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__41921){
var vec__41922 = p__41921;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41922,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41922,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__41928 = arguments.length;
switch (G__41928) {
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
var G__42382 = ps;
var G__42383 = (i + (1));
el__$1 = G__42382;
i = G__42383;
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
var vec__41941 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41941,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41941,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41941,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__41946_42384 = cljs.core.seq(props);
var chunk__41947_42385 = null;
var count__41948_42386 = (0);
var i__41949_42387 = (0);
while(true){
if((i__41949_42387 < count__41948_42386)){
var vec__41962_42388 = chunk__41947_42385.cljs$core$IIndexed$_nth$arity$2(null,i__41949_42387);
var k_42389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41962_42388,(0),null);
var v_42390 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41962_42388,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_42389);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_42389),v_42390);


var G__42391 = seq__41946_42384;
var G__42392 = chunk__41947_42385;
var G__42393 = count__41948_42386;
var G__42394 = (i__41949_42387 + (1));
seq__41946_42384 = G__42391;
chunk__41947_42385 = G__42392;
count__41948_42386 = G__42393;
i__41949_42387 = G__42394;
continue;
} else {
var temp__5753__auto___42395 = cljs.core.seq(seq__41946_42384);
if(temp__5753__auto___42395){
var seq__41946_42396__$1 = temp__5753__auto___42395;
if(cljs.core.chunked_seq_QMARK_(seq__41946_42396__$1)){
var c__4679__auto___42397 = cljs.core.chunk_first(seq__41946_42396__$1);
var G__42398 = cljs.core.chunk_rest(seq__41946_42396__$1);
var G__42399 = c__4679__auto___42397;
var G__42400 = cljs.core.count(c__4679__auto___42397);
var G__42401 = (0);
seq__41946_42384 = G__42398;
chunk__41947_42385 = G__42399;
count__41948_42386 = G__42400;
i__41949_42387 = G__42401;
continue;
} else {
var vec__41969_42402 = cljs.core.first(seq__41946_42396__$1);
var k_42403 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41969_42402,(0),null);
var v_42404 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41969_42402,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_42403);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_42403),v_42404);


var G__42405 = cljs.core.next(seq__41946_42396__$1);
var G__42406 = null;
var G__42407 = (0);
var G__42408 = (0);
seq__41946_42384 = G__42405;
chunk__41947_42385 = G__42406;
count__41948_42386 = G__42407;
i__41949_42387 = G__42408;
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
var vec__41976 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41976,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41976,(1),null);
var seq__41980_42409 = cljs.core.seq(node_children);
var chunk__41982_42410 = null;
var count__41983_42411 = (0);
var i__41984_42412 = (0);
while(true){
if((i__41984_42412 < count__41983_42411)){
var child_struct_42413 = chunk__41982_42410.cljs$core$IIndexed$_nth$arity$2(null,i__41984_42412);
if((!((child_struct_42413 == null)))){
if(typeof child_struct_42413 === 'string'){
var text_42414 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_42414),child_struct_42413].join(''));
} else {
var children_42416 = shadow.dom.svg_node(child_struct_42413);
if(cljs.core.seq_QMARK_(children_42416)){
var seq__42009_42419 = cljs.core.seq(children_42416);
var chunk__42011_42420 = null;
var count__42012_42421 = (0);
var i__42013_42422 = (0);
while(true){
if((i__42013_42422 < count__42012_42421)){
var child_42423 = chunk__42011_42420.cljs$core$IIndexed$_nth$arity$2(null,i__42013_42422);
if(cljs.core.truth_(child_42423)){
node.appendChild(child_42423);


var G__42424 = seq__42009_42419;
var G__42425 = chunk__42011_42420;
var G__42426 = count__42012_42421;
var G__42427 = (i__42013_42422 + (1));
seq__42009_42419 = G__42424;
chunk__42011_42420 = G__42425;
count__42012_42421 = G__42426;
i__42013_42422 = G__42427;
continue;
} else {
var G__42428 = seq__42009_42419;
var G__42429 = chunk__42011_42420;
var G__42430 = count__42012_42421;
var G__42431 = (i__42013_42422 + (1));
seq__42009_42419 = G__42428;
chunk__42011_42420 = G__42429;
count__42012_42421 = G__42430;
i__42013_42422 = G__42431;
continue;
}
} else {
var temp__5753__auto___42432 = cljs.core.seq(seq__42009_42419);
if(temp__5753__auto___42432){
var seq__42009_42433__$1 = temp__5753__auto___42432;
if(cljs.core.chunked_seq_QMARK_(seq__42009_42433__$1)){
var c__4679__auto___42434 = cljs.core.chunk_first(seq__42009_42433__$1);
var G__42435 = cljs.core.chunk_rest(seq__42009_42433__$1);
var G__42436 = c__4679__auto___42434;
var G__42437 = cljs.core.count(c__4679__auto___42434);
var G__42438 = (0);
seq__42009_42419 = G__42435;
chunk__42011_42420 = G__42436;
count__42012_42421 = G__42437;
i__42013_42422 = G__42438;
continue;
} else {
var child_42439 = cljs.core.first(seq__42009_42433__$1);
if(cljs.core.truth_(child_42439)){
node.appendChild(child_42439);


var G__42440 = cljs.core.next(seq__42009_42433__$1);
var G__42441 = null;
var G__42442 = (0);
var G__42443 = (0);
seq__42009_42419 = G__42440;
chunk__42011_42420 = G__42441;
count__42012_42421 = G__42442;
i__42013_42422 = G__42443;
continue;
} else {
var G__42444 = cljs.core.next(seq__42009_42433__$1);
var G__42445 = null;
var G__42446 = (0);
var G__42447 = (0);
seq__42009_42419 = G__42444;
chunk__42011_42420 = G__42445;
count__42012_42421 = G__42446;
i__42013_42422 = G__42447;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_42416);
}
}


var G__42448 = seq__41980_42409;
var G__42449 = chunk__41982_42410;
var G__42450 = count__41983_42411;
var G__42451 = (i__41984_42412 + (1));
seq__41980_42409 = G__42448;
chunk__41982_42410 = G__42449;
count__41983_42411 = G__42450;
i__41984_42412 = G__42451;
continue;
} else {
var G__42452 = seq__41980_42409;
var G__42453 = chunk__41982_42410;
var G__42454 = count__41983_42411;
var G__42455 = (i__41984_42412 + (1));
seq__41980_42409 = G__42452;
chunk__41982_42410 = G__42453;
count__41983_42411 = G__42454;
i__41984_42412 = G__42455;
continue;
}
} else {
var temp__5753__auto___42456 = cljs.core.seq(seq__41980_42409);
if(temp__5753__auto___42456){
var seq__41980_42457__$1 = temp__5753__auto___42456;
if(cljs.core.chunked_seq_QMARK_(seq__41980_42457__$1)){
var c__4679__auto___42458 = cljs.core.chunk_first(seq__41980_42457__$1);
var G__42459 = cljs.core.chunk_rest(seq__41980_42457__$1);
var G__42460 = c__4679__auto___42458;
var G__42461 = cljs.core.count(c__4679__auto___42458);
var G__42462 = (0);
seq__41980_42409 = G__42459;
chunk__41982_42410 = G__42460;
count__41983_42411 = G__42461;
i__41984_42412 = G__42462;
continue;
} else {
var child_struct_42463 = cljs.core.first(seq__41980_42457__$1);
if((!((child_struct_42463 == null)))){
if(typeof child_struct_42463 === 'string'){
var text_42464 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_42464),child_struct_42463].join(''));
} else {
var children_42465 = shadow.dom.svg_node(child_struct_42463);
if(cljs.core.seq_QMARK_(children_42465)){
var seq__42015_42466 = cljs.core.seq(children_42465);
var chunk__42017_42467 = null;
var count__42018_42468 = (0);
var i__42019_42469 = (0);
while(true){
if((i__42019_42469 < count__42018_42468)){
var child_42470 = chunk__42017_42467.cljs$core$IIndexed$_nth$arity$2(null,i__42019_42469);
if(cljs.core.truth_(child_42470)){
node.appendChild(child_42470);


var G__42471 = seq__42015_42466;
var G__42472 = chunk__42017_42467;
var G__42473 = count__42018_42468;
var G__42474 = (i__42019_42469 + (1));
seq__42015_42466 = G__42471;
chunk__42017_42467 = G__42472;
count__42018_42468 = G__42473;
i__42019_42469 = G__42474;
continue;
} else {
var G__42475 = seq__42015_42466;
var G__42476 = chunk__42017_42467;
var G__42477 = count__42018_42468;
var G__42478 = (i__42019_42469 + (1));
seq__42015_42466 = G__42475;
chunk__42017_42467 = G__42476;
count__42018_42468 = G__42477;
i__42019_42469 = G__42478;
continue;
}
} else {
var temp__5753__auto___42479__$1 = cljs.core.seq(seq__42015_42466);
if(temp__5753__auto___42479__$1){
var seq__42015_42480__$1 = temp__5753__auto___42479__$1;
if(cljs.core.chunked_seq_QMARK_(seq__42015_42480__$1)){
var c__4679__auto___42481 = cljs.core.chunk_first(seq__42015_42480__$1);
var G__42482 = cljs.core.chunk_rest(seq__42015_42480__$1);
var G__42483 = c__4679__auto___42481;
var G__42484 = cljs.core.count(c__4679__auto___42481);
var G__42485 = (0);
seq__42015_42466 = G__42482;
chunk__42017_42467 = G__42483;
count__42018_42468 = G__42484;
i__42019_42469 = G__42485;
continue;
} else {
var child_42486 = cljs.core.first(seq__42015_42480__$1);
if(cljs.core.truth_(child_42486)){
node.appendChild(child_42486);


var G__42489 = cljs.core.next(seq__42015_42480__$1);
var G__42490 = null;
var G__42491 = (0);
var G__42492 = (0);
seq__42015_42466 = G__42489;
chunk__42017_42467 = G__42490;
count__42018_42468 = G__42491;
i__42019_42469 = G__42492;
continue;
} else {
var G__42493 = cljs.core.next(seq__42015_42480__$1);
var G__42494 = null;
var G__42495 = (0);
var G__42496 = (0);
seq__42015_42466 = G__42493;
chunk__42017_42467 = G__42494;
count__42018_42468 = G__42495;
i__42019_42469 = G__42496;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_42465);
}
}


var G__42499 = cljs.core.next(seq__41980_42457__$1);
var G__42500 = null;
var G__42501 = (0);
var G__42502 = (0);
seq__41980_42409 = G__42499;
chunk__41982_42410 = G__42500;
count__41983_42411 = G__42501;
i__41984_42412 = G__42502;
continue;
} else {
var G__42503 = cljs.core.next(seq__41980_42457__$1);
var G__42504 = null;
var G__42505 = (0);
var G__42506 = (0);
seq__41980_42409 = G__42503;
chunk__41982_42410 = G__42504;
count__41983_42411 = G__42505;
i__41984_42412 = G__42506;
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
var len__4864__auto___42509 = arguments.length;
var i__4865__auto___42510 = (0);
while(true){
if((i__4865__auto___42510 < len__4864__auto___42509)){
args__4870__auto__.push((arguments[i__4865__auto___42510]));

var G__42511 = (i__4865__auto___42510 + (1));
i__4865__auto___42510 = G__42511;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq42029){
var G__42030 = cljs.core.first(seq42029);
var seq42029__$1 = cljs.core.next(seq42029);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42030,seq42029__$1);
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
var G__42036 = arguments.length;
switch (G__42036) {
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
var c__41514__auto___42516 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41515__auto__ = (function (){var switch__41443__auto__ = (function (state_42073){
var state_val_42075 = (state_42073[(1)]);
if((state_val_42075 === (1))){
var state_42073__$1 = state_42073;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42073__$1,(2),once_or_cleanup);
} else {
if((state_val_42075 === (2))){
var inst_42063 = (state_42073[(2)]);
var inst_42068 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_42073__$1 = (function (){var statearr_42078 = state_42073;
(statearr_42078[(7)] = inst_42063);

return statearr_42078;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42073__$1,inst_42068);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__41444__auto__ = null;
var shadow$dom$state_machine__41444__auto____0 = (function (){
var statearr_42080 = [null,null,null,null,null,null,null,null];
(statearr_42080[(0)] = shadow$dom$state_machine__41444__auto__);

(statearr_42080[(1)] = (1));

return statearr_42080;
});
var shadow$dom$state_machine__41444__auto____1 = (function (state_42073){
while(true){
var ret_value__41445__auto__ = (function (){try{while(true){
var result__41446__auto__ = switch__41443__auto__(state_42073);
if(cljs.core.keyword_identical_QMARK_(result__41446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41446__auto__;
}
break;
}
}catch (e42081){var ex__41447__auto__ = e42081;
var statearr_42082_42521 = state_42073;
(statearr_42082_42521[(2)] = ex__41447__auto__);


if(cljs.core.seq((state_42073[(4)]))){
var statearr_42083_42523 = state_42073;
(statearr_42083_42523[(1)] = cljs.core.first((state_42073[(4)])));

} else {
throw ex__41447__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42524 = state_42073;
state_42073 = G__42524;
continue;
} else {
return ret_value__41445__auto__;
}
break;
}
});
shadow$dom$state_machine__41444__auto__ = function(state_42073){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__41444__auto____0.call(this);
case 1:
return shadow$dom$state_machine__41444__auto____1.call(this,state_42073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__41444__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__41444__auto____0;
shadow$dom$state_machine__41444__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__41444__auto____1;
return shadow$dom$state_machine__41444__auto__;
})()
})();
var state__41516__auto__ = (function (){var statearr_42084 = f__41515__auto__();
(statearr_42084[(6)] = c__41514__auto___42516);

return statearr_42084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41516__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
