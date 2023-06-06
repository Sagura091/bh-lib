goog.provide('ui_component.atom.astrouxds.button');
ui_component.atom.astrouxds.button.button = (function ui_component$atom$astrouxds$button$button(var_args){
var args__4870__auto__ = [];
var len__4864__auto___50865 = arguments.length;
var i__4865__auto___50866 = (0);
while(true){
if((i__4865__auto___50866 < len__4864__auto___50865)){
args__4870__auto__.push((arguments[i__4865__auto___50866]));

var G__50867 = (i__4865__auto___50866 + (1));
i__4865__auto___50866 = G__50867;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return ui_component.atom.astrouxds.button.button.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(ui_component.atom.astrouxds.button.button.cljs$core$IFn$_invoke$arity$variadic = (function (p__50863){
var map__50864 = p__50863;
var map__50864__$1 = cljs.core.__destructure_map(map__50864);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50864__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50864__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50864__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
if((!((new cljs.core.Keyword(null,"icon","icon",1679606541) == null)))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$$astrouxds$react.RuxButton,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),size,new cljs.core.Keyword(null,"icon","icon",1679606541),icon], null),label], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$$astrouxds$react.RuxButton,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),size], null),label], null);
}
}));

(ui_component.atom.astrouxds.button.button.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(ui_component.atom.astrouxds.button.button.cljs$lang$applyTo = (function (seq50862){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50862));
}));


//# sourceMappingURL=ui_component.atom.astrouxds.button.js.map
