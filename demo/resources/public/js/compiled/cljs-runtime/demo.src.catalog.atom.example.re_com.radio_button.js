goog.provide('demo.src.catalog.atom.example.re_com.radio_button');
demo.src.catalog.atom.example.re_com.radio_button.component = (function demo$src$catalog$atom$example$re_com$radio_button$component(disabled_QMARK_,color){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function demo$src$catalog$atom$example$re_com$radio_button$component_$_iter__59825(s__59826){
return (new cljs.core.LazySeq(null,(function (){
var s__59826__$1 = s__59826;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__59826__$1);
if(temp__5753__auto__){
var s__59826__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__59826__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__59826__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__59828 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__59827 = (0);
while(true){
if((i__59827 < size__4651__auto__)){
var c = cljs.core._nth(c__4650__auto__,i__59827);
cljs.core.chunk_append(b__59828,cljs.core.with_meta(new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.radio_button,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"demo/src/catalog/atom/example/re_com/radio_button.cljs",new cljs.core.Keyword(null,"line","line",212345235),10], null)),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"label","label",1718410804),c,new cljs.core.Keyword(null,"value","value",305978217),c,new cljs.core.Keyword(null,"model","model",331153215),color,new cljs.core.Keyword(null,"label-style","label-style",-1703650121),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,cljs.core.deref(color)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),c,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null):null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__59827,c,c__4650__auto__,size__4651__auto__,b__59828,s__59826__$2,temp__5753__auto__){
return (function (p1__59824_SHARP_){
return cljs.core.reset_BANG_(color,p1__59824_SHARP_);
});})(i__59827,c,c__4650__auto__,size__4651__auto__,b__59828,s__59826__$2,temp__5753__auto__))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),c], null)));

var G__59834 = (i__59827 + (1));
i__59827 = G__59834;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59828),demo$src$catalog$atom$example$re_com$radio_button$component_$_iter__59825(cljs.core.chunk_rest(s__59826__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59828),null);
}
} else {
var c = cljs.core.first(s__59826__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.radio_button,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"demo/src/catalog/atom/example/re_com/radio_button.cljs",new cljs.core.Keyword(null,"line","line",212345235),10], null)),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"label","label",1718410804),c,new cljs.core.Keyword(null,"value","value",305978217),c,new cljs.core.Keyword(null,"model","model",331153215),color,new cljs.core.Keyword(null,"label-style","label-style",-1703650121),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,cljs.core.deref(color)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),c,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null):null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (c,s__59826__$2,temp__5753__auto__){
return (function (p1__59824_SHARP_){
return cljs.core.reset_BANG_(color,p1__59824_SHARP_);
});})(c,s__59826__$2,temp__5753__auto__))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),c], null)),demo$src$catalog$atom$example$re_com$radio_button$component_$_iter__59825(cljs.core.rest(s__59826__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red","green","blue"], null));
})());
});
demo.src.catalog.atom.example.re_com.radio_button.config_panel = (function demo$src$catalog$atom$example$re_com$radio_button$config_panel(disabled_QMARK_){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"demo/src/catalog/atom/example/re_com/radio_button.cljs",new cljs.core.Keyword(null,"line","line",212345235),21], null)),new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"150px",new cljs.core.Keyword(null,"padding","padding",1660304693),"15px",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"1px solid #DDD",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#f7f7f7"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"demo/src/catalog/atom/example/re_com/radio_button.cljs",new cljs.core.Keyword(null,"line","line",212345235),27], null)),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079),new cljs.core.Keyword(null,"label","label",1718410804),"Interactive Parameters",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0"], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.checkbox,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"demo/src/catalog/atom/example/re_com/radio_button.cljs",new cljs.core.Keyword(null,"line","line",212345235),28], null)),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":disabled?"], null),new cljs.core.Keyword(null,"model","model",331153215),disabled_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (val){
return cljs.core.reset_BANG_(disabled_QMARK_,val);
})], null)], null)], null);
});
demo.src.catalog.atom.example.re_com.radio_button.sample_data = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),false,new cljs.core.Keyword(null,"color","color",1011675173),"green"], null);
demo.src.catalog.atom.example.re_com.radio_button.example = (function demo$src$catalog$atom$example$re_com$radio_button$example(){
var disabled_QMARK_ = reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(false);
var color = reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1("green");
return (function (){
var G__59832 = "Radio Button";
var G__59833 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"demo/src/catalog/atom/example/re_com/radio_button.cljs",new cljs.core.Keyword(null,"line","line",212345235),45], null)),new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.src.catalog.atom.example.re_com.radio_button.config_panel(disabled_QMARK_),demo.src.catalog.atom.example.re_com.radio_button.component(disabled_QMARK_,color)], null)], null);
return (woolybear.ad.utils.demo.cljs$core$IFn$_invoke$arity$2 ? woolybear.ad.utils.demo.cljs$core$IFn$_invoke$arity$2(G__59832,G__59833) : woolybear.ad.utils.demo.call(null,G__59832,G__59833));
});
});

//# sourceMappingURL=demo.src.catalog.atom.example.re_com.radio_button.js.map
