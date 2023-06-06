goog.provide('bh_ui.atom.astrouxds.radio_button');
bh_ui.atom.astrouxds.radio_button.radio_button = (function bh_ui$atom$astrouxds$radio_button$radio_button(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$$astrouxds$react.RuxRadioGroup,cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function bh_ui$atom$astrouxds$radio_button$radio_button_$_iter__50801(s__50802){
return (new cljs.core.LazySeq(null,(function (){
var s__50802__$1 = s__50802;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__50802__$1);
if(temp__5753__auto__){
var s__50802__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50802__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__50802__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__50804 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__50803 = (0);
while(true){
if((i__50803 < size__4651__auto__)){
var v = cljs.core._nth(c__4650__auto__,i__50803);
cljs.core.chunk_append(b__50804,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$$astrouxds$react.RuxRadio,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),v], null),v], null));

var G__50805 = (i__50803 + (1));
i__50803 = G__50805;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50804),bh_ui$atom$astrouxds$radio_button$radio_button_$_iter__50801(cljs.core.chunk_rest(s__50802__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50804),null);
}
} else {
var v = cljs.core.first(s__50802__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$$astrouxds$react.RuxRadio,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),v], null),v], null),bh_ui$atom$astrouxds$radio_button$radio_button_$_iter__50801(cljs.core.rest(s__50802__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(data);
})())], null);
});

//# sourceMappingURL=bh_ui.atom.astrouxds.radio_button.js.map
