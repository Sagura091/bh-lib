goog.provide('ui_component.atom.re_com.labeled_field');
/**
 * creates a pair of UI elements: a label and some textual content, on a single horizontal line
 * 
 *   ---
 * - label : (string) what to label this element
 * - content : (any, converted to string) the actual value to show
 * 
 *   > See also:
 *   >
 *   > [re-com](https://github.com/Day8/re-com)
 *   
 */
ui_component.atom.re_com.labeled_field.labeled_field = (function ui_component$atom$re_com$labeled_field$labeled_field(label,content){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"5px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"10%"], null),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level4","level4",1467985519),new cljs.core.Keyword(null,"label","label",1718410804),label], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/re_com/labeled_field.cljs",new cljs.core.Keyword(null,"line","line",212345235),22], null)),new cljs.core.Keyword(null,"width","width",-384071477),"90%",new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.List.EMPTY;
}),new cljs.core.Keyword(null,"model","model",331153215),cljs.core.str.cljs$core$IFn$_invoke$arity$1(content)], null)], null)], null);
});
/**
 * creates a pair of UI elements: a label and some textual content, on a horizontal line, but with the content
 *   presented in a (possibly multi-line) control that thte user can resize
 * 
 *   ---
 *   - label : (string) what to label this element
 *   - content : (any, converted to string) the actual value to show
 * 
 *   > See also:
 *   >
 *   > [re-com](https://github.com/Day8/re-com)
 *   
 */
ui_component.atom.re_com.labeled_field.labeled_area = (function ui_component$atom$re_com$labeled_field$labeled_area(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59269 = arguments.length;
var i__4865__auto___59270 = (0);
while(true){
if((i__4865__auto___59270 < len__4864__auto___59269)){
args__4870__auto__.push((arguments[i__4865__auto___59270]));

var G__59271 = (i__4865__auto___59270 + (1));
i__4865__auto___59270 = G__59271;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return ui_component.atom.re_com.labeled_field.labeled_area.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(ui_component.atom.re_com.labeled_field.labeled_area.cljs$core$IFn$_invoke$arity$variadic = (function (label,content,p__59265){
var vec__59266 = p__59265;
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59266,(0),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"5px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level4","level4",1467985519),new cljs.core.Keyword(null,"label","label",1718410804),label], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_textarea,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/re_com/labeled_field.cljs",new cljs.core.Keyword(null,"line","line",212345235),45], null)),new cljs.core.Keyword(null,"rows","rows",850049680),(function (){var or__4253__auto__ = rows;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})(),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.List.EMPTY;
}),new cljs.core.Keyword(null,"model","model",331153215),cljs.core.str.cljs$core$IFn$_invoke$arity$1(content)], null)], null)], null);
}));

(ui_component.atom.re_com.labeled_field.labeled_area.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(ui_component.atom.re_com.labeled_field.labeled_area.cljs$lang$applyTo = (function (seq59262){
var G__59263 = cljs.core.first(seq59262);
var seq59262__$1 = cljs.core.next(seq59262);
var G__59264 = cljs.core.first(seq59262__$1);
var seq59262__$2 = cljs.core.next(seq59262__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59263,G__59264,seq59262__$2);
}));


//# sourceMappingURL=ui_component.atom.re_com.labeled_field.js.map
