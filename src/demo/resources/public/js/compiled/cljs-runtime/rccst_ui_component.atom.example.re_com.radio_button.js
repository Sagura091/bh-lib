goog.provide('rccst_ui_component.atom.example.re_com.radio_button');
rccst_ui_component.atom.example.re_com.radio_button.component = (function rccst_ui_component$atom$example$re_com$radio_button$component(disabled_QMARK_,color){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function rccst_ui_component$atom$example$re_com$radio_button$component_$_iter__59759(s__59760){
return (new cljs.core.LazySeq(null,(function (){
var s__59760__$1 = s__59760;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__59760__$1);
if(temp__5753__auto__){
var s__59760__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__59760__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__59760__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__59762 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__59761 = (0);
while(true){
if((i__59761 < size__4651__auto__)){
var c = cljs.core._nth(c__4650__auto__,i__59761);
cljs.core.chunk_append(b__59762,cljs.core.with_meta(new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.radio_button,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"rccst_ui_component/atom/example/re_com/radio_button.cljs",new cljs.core.Keyword(null,"line","line",212345235),10], null)),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"label","label",1718410804),c,new cljs.core.Keyword(null,"value","value",305978217),c,new cljs.core.Keyword(null,"model","model",331153215),color,new cljs.core.Keyword(null,"label-style","label-style",-1703650121),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,cljs.core.deref(color)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),c,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null):null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__59761,c,c__4650__auto__,size__4651__auto__,b__59762,s__59760__$2,temp__5753__auto__){
return (function (p1__59758_SHARP_){
return cljs.core.reset_BANG_(color,p1__59758_SHARP_);
});})(i__59761,c,c__4650__auto__,size__4651__auto__,b__59762,s__59760__$2,temp__5753__auto__))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),c], null)));

var G__59763 = (i__59761 + (1));
i__59761 = G__59763;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59762),rccst_ui_component$atom$example$re_com$radio_button$component_$_iter__59759(cljs.core.chunk_rest(s__59760__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59762),null);
}
} else {
var c = cljs.core.first(s__59760__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.radio_button,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"rccst_ui_component/atom/example/re_com/radio_button.cljs",new cljs.core.Keyword(null,"line","line",212345235),10], null)),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"label","label",1718410804),c,new cljs.core.Keyword(null,"value","value",305978217),c,new cljs.core.Keyword(null,"model","model",331153215),color,new cljs.core.Keyword(null,"label-style","label-style",-1703650121),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,cljs.core.deref(color)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),c,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null):null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (c,s__59760__$2,temp__5753__auto__){
return (function (p1__59758_SHARP_){
return cljs.core.reset_BANG_(color,p1__59758_SHARP_);
});})(c,s__59760__$2,temp__5753__auto__))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),c], null)),rccst_ui_component$atom$example$re_com$radio_button$component_$_iter__59759(cljs.core.rest(s__59760__$2)));
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
rccst_ui_component.atom.example.re_com.radio_button.config_panel = (function rccst_ui_component$atom$example$re_com$radio_button$config_panel(disabled_QMARK_){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"rccst_ui_component/atom/example/re_com/radio_button.cljs",new cljs.core.Keyword(null,"line","line",212345235),21], null)),new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"150px",new cljs.core.Keyword(null,"padding","padding",1660304693),"15px",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"1px solid #DDD",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#f7f7f7"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"rccst_ui_component/atom/example/re_com/radio_button.cljs",new cljs.core.Keyword(null,"line","line",212345235),27], null)),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079),new cljs.core.Keyword(null,"label","label",1718410804),"Interactive Parameters",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0"], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.checkbox,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"rccst_ui_component/atom/example/re_com/radio_button.cljs",new cljs.core.Keyword(null,"line","line",212345235),28], null)),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":disabled?"], null),new cljs.core.Keyword(null,"model","model",331153215),disabled_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (val){
return cljs.core.reset_BANG_(disabled_QMARK_,val);
})], null)], null)], null);
});
rccst_ui_component.atom.example.re_com.radio_button.sample_data = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),false,new cljs.core.Keyword(null,"color","color",1011675173),"green"], null);
rccst_ui_component.atom.example.re_com.radio_button.example = (function rccst_ui_component$atom$example$re_com$radio_button$example(){
var disabled_QMARK_ = reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(false);
var color = reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1("green");
return (function (){
return woolybear.ad.demo.src.catalog.utils.demo.cljs$core$IFn$_invoke$arity$variadic("Radio Button",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"rccst_ui_component/atom/example/re_com/radio_button.cljs",new cljs.core.Keyword(null,"line","line",212345235),45], null)),new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rccst_ui_component.atom.example.re_com.radio_button.config_panel(disabled_QMARK_),rccst_ui_component.atom.example.re_com.radio_button.component(disabled_QMARK_,color)], null)], null)], 0));
});
});

//# sourceMappingURL=rccst_ui_component.atom.example.re_com.radio_button.js.map
