goog.provide('bh_ui.atom.re_com.header_bar');
/**
 * creates a nice, simple header for the UI, displaying the app title, the server version number,
 *   the uuid returned by the server that is assigned to this user, and a button to log out of the
 *   server.
 * 
 *   > See also:
 *   >
 *   > [re-com](https://github.com/Day8/re-com)
 *   
 */
bh_ui.atom.re_com.header_bar.header_bar = (function bh_ui$atom$re_com$header_bar$header_bar(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59908 = arguments.length;
var i__4865__auto___59909 = (0);
while(true){
if((i__4865__auto___59909 < len__4864__auto___59908)){
args__4870__auto__.push((arguments[i__4865__auto___59909]));

var G__59910 = (i__4865__auto___59909 + (1));
i__4865__auto___59909 = G__59910;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return bh_ui.atom.re_com.header_bar.header_bar.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(bh_ui.atom.re_com.header_bar.header_bar.cljs$core$IFn$_invoke$arity$variadic = (function (p__59906){
var map__59907 = p__59906;
var map__59907__$1 = cljs.core.__destructure_map(map__59907);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59907__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"bh_ui/atom/re_com/header_bar.cljs",new cljs.core.Keyword(null,"line","line",212345235),16], null)),new cljs.core.Keyword(null,"width","width",-384071477),"90%",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"lightgray","lightgray",-845833379),new cljs.core.Keyword(null,"border","border",1444987323),"solid",new cljs.core.Keyword(null,"border-width","border-width",-1512605390),"5px",new cljs.core.Keyword(null,"border-color","border-color",-2059162761),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"between","between",1131099276),new cljs.core.Keyword(null,"children","children",-940561982),children], null);
}));

(bh_ui.atom.re_com.header_bar.header_bar.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bh_ui.atom.re_com.header_bar.header_bar.cljs$lang$applyTo = (function (seq59905){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59905));
}));


//# sourceMappingURL=bh_ui.atom.re_com.header_bar.js.map
