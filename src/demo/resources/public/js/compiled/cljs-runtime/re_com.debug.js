goog.provide('re_com.debug');
goog.scope(function(){
  re_com.debug.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * Returns the interesting part of component-name
 */
re_com.debug.short_component_name = (function re_com$debug$short_component_name(component_name){
return clojure.string.replace(clojure.string.replace(cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(component_name,/\./)),/_render/,""),/_/,"-");
});
/**
 * Return a version of args which is stripped of uninteresting values, suitable for logging.
 */
re_com.debug.loggable_args = (function re_com$debug$loggable_args(args){
if(cljs.core.map_QMARK_(args)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.second),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(args,new cljs.core.Keyword(null,"src","src",-1651076051),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"panel-1","panel-1",998274139),new cljs.core.Keyword(null,"panel-2","panel-2",244198907),new cljs.core.Keyword(null,"debug-as","debug-as",283322354)], 0))));
} else {
return args;
}
});
re_com.debug.__GT_attr = (function re_com$debug$__GT_attr(p__48771){
var map__48772 = p__48771;
var map__48772__$1 = cljs.core.__destructure_map(map__48772);
var args = map__48772__$1;
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48772__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48772__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354));
if(cljs.core.not(re_com.config.debug_QMARK_)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var rc_component = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(debug_as);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component()));
}
})();
var rc_args = re_com.debug.loggable_args((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(debug_as);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return args;
}
})());
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
re_com.debug.goog$module$goog$object.set(el,"__rc-args",rc_args);
} else {
}

var temp__5753__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"ref","ref",1289896967)], null));
if(cljs.core.truth_(temp__5753__auto__)){
var user_ref_fn = temp__5753__auto__;
if(cljs.core.fn_QMARK_(user_ref_fn)){
return (user_ref_fn.cljs$core$IFn$_invoke$arity$1 ? user_ref_fn.cljs$core$IFn$_invoke$arity$1(el) : user_ref_fn.call(null,el));
} else {
return null;
}
} else {
return null;
}
});
var map__48773 = src;
var map__48773__$1 = cljs.core.__destructure_map(map__48773);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48773__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48773__$1,new cljs.core.Keyword(null,"line","line",212345235));
var G__48774 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn,new cljs.core.Keyword(null,"data-rc","data-rc",1949262543),rc_component], null);
if(cljs.core.truth_(src)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48774,new cljs.core.Keyword(null,"data-rc-src","data-rc-src",-344701880),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''));
} else {
return G__48774;
}
}
});
re_com.debug.component_stack = (function re_com$debug$component_stack(var_args){
var G__48779 = arguments.length;
switch (G__48779) {
case 1:
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1 = (function (el){
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,el);
}));

(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2 = (function (stack,el){
if(cljs.core.not(el)){
return stack;
} else {
var component = el.dataset.rc;
var parent = el.parentElement;
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("stack-spy",component))?stack:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"src","src",-1651076051),el.dataset.rcSrc,new cljs.core.Keyword(null,"component","component",1555936782),component,new cljs.core.Keyword(null,"args","args",1315556576),re_com.debug.goog$module$goog$object.get(el,"__rc-args")], null))),parent);
}
}));

(re_com.debug.component_stack.cljs$lang$maxFixedArity = 2);

re_com.debug.validate_args_problems_style = (function re_com$debug$validate_args_problems_style(){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"32px",new cljs.core.Keyword(null,"min-height","min-height",398480837),"32px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.4em",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"center",new cljs.core.Keyword(null,"background","background",-863952629),"#FF4136"], null);
});
re_com.debug.h1_style = "background: #FF4136; color: white; font-size: 1.4em; padding: 3px";
re_com.debug.h2_style = "background: #0074D9; color: white; padding: 0.25em";
re_com.debug.code_style = "font-family: monospace; font-weight: bold; background: #eee; color: #333; padding: 3px";
re_com.debug.error_style = "font-weight: bold";
re_com.debug.index_style = "font-weight: bold; font-size: 1.1em";
re_com.debug.collision_icon = "\uD83D\uDCA5";
re_com.debug.gear_icon = "\u2699\uFE0F";
re_com.debug.blue_book_icon = "\uD83D\uDCD8";
re_com.debug.confused_icon = "\uD83D\uDE15";
re_com.debug.globe_icon = "\uD83C\uDF10";
re_com.debug.log_component_stack = (function re_com$debug$log_component_stack(stack){
console.groupCollapsed("\u2022 %c Component stack (click me)",re_com.debug.h2_style);

var seq__48782_48878 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__48781_SHARP_,p2__48780_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2__48780_SHARP_,new cljs.core.Keyword(null,"i","i",-1386841315),(p1__48781_SHARP_ + (1)));
}),stack));
var chunk__48783_48879 = null;
var count__48784_48880 = (0);
var i__48785_48881 = (0);
while(true){
if((i__48785_48881 < count__48784_48880)){
var map__48796_48882 = chunk__48783_48879.cljs$core$IIndexed$_nth$arity$2(null,i__48785_48881);
var map__48796_48883__$1 = cljs.core.__destructure_map(map__48796_48882);
var i_48884 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48796_48883__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var el_48885 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48796_48883__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var component_48886 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48796_48883__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src_48887 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48796_48883__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var args_48888 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48796_48883__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(component_48886)){
if(cljs.core.truth_(src_48887)){
var vec__48797_48889 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(src_48887,/:/);
var file_48890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48797_48889,(0),null);
var line_48891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48797_48889,(1),null);
if(cljs.core.truth_(args_48888)){
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_48884),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_48886)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_48890),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_48891),"%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",args_48888,el_48885);
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_48884),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_48886)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_48890),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_48891),"%c\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",el_48885);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_48884),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_48886)," ...]%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",args_48888,el_48885);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_48884),"%c ",re_com.debug.globe_icon," %o"].join(''),re_com.debug.index_style,"",el_48885);
}


var G__48892 = seq__48782_48878;
var G__48893 = chunk__48783_48879;
var G__48894 = count__48784_48880;
var G__48895 = (i__48785_48881 + (1));
seq__48782_48878 = G__48892;
chunk__48783_48879 = G__48893;
count__48784_48880 = G__48894;
i__48785_48881 = G__48895;
continue;
} else {
var temp__5753__auto___48896 = cljs.core.seq(seq__48782_48878);
if(temp__5753__auto___48896){
var seq__48782_48897__$1 = temp__5753__auto___48896;
if(cljs.core.chunked_seq_QMARK_(seq__48782_48897__$1)){
var c__4679__auto___48898 = cljs.core.chunk_first(seq__48782_48897__$1);
var G__48899 = cljs.core.chunk_rest(seq__48782_48897__$1);
var G__48900 = c__4679__auto___48898;
var G__48901 = cljs.core.count(c__4679__auto___48898);
var G__48902 = (0);
seq__48782_48878 = G__48899;
chunk__48783_48879 = G__48900;
count__48784_48880 = G__48901;
i__48785_48881 = G__48902;
continue;
} else {
var map__48800_48903 = cljs.core.first(seq__48782_48897__$1);
var map__48800_48904__$1 = cljs.core.__destructure_map(map__48800_48903);
var i_48905 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48800_48904__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var el_48906 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48800_48904__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var component_48907 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48800_48904__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src_48908 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48800_48904__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var args_48909 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48800_48904__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(component_48907)){
if(cljs.core.truth_(src_48908)){
var vec__48801_48910 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(src_48908,/:/);
var file_48911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48801_48910,(0),null);
var line_48912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48801_48910,(1),null);
if(cljs.core.truth_(args_48909)){
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_48905),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_48907)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_48911),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_48912),"%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",args_48909,el_48906);
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_48905),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_48907)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_48911),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_48912),"%c\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",el_48906);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_48905),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_48907)," ...]%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",args_48909,el_48906);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_48905),"%c ",re_com.debug.globe_icon," %o"].join(''),re_com.debug.index_style,"",el_48906);
}


var G__48920 = cljs.core.next(seq__48782_48897__$1);
var G__48921 = null;
var G__48922 = (0);
var G__48923 = (0);
seq__48782_48878 = G__48920;
chunk__48783_48879 = G__48921;
count__48784_48880 = G__48922;
i__48785_48881 = G__48923;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
re_com.debug.log_validate_args_error_problems = (function re_com$debug$log_validate_args_error_problems(problems){
var seq__48807 = cljs.core.seq(problems);
var chunk__48808 = null;
var count__48809 = (0);
var i__48810 = (0);
while(true){
if((i__48810 < count__48809)){
var map__48823 = chunk__48808.cljs$core$IIndexed$_nth$arity$2(null,i__48810);
var map__48823__$1 = cljs.core.__destructure_map(map__48823);
var problem = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48823__$1,new cljs.core.Keyword(null,"problem","problem",1168155148));
var arg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48823__$1,new cljs.core.Keyword(null,"arg-name","arg-name",6205923));
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48823__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48823__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var validate_fn_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48823__$1,new cljs.core.Keyword(null,"validate-fn-result","validate-fn-result",280916497));
var G__48824_48925 = problem;
var G__48824_48926__$1 = (((G__48824_48925 instanceof cljs.core.Keyword))?G__48824_48925.fqn:null);
switch (G__48824_48926__$1) {
case "unknown":
console.log(["\u2022 %cUnknown parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "required":
console.log(["\u2022 %cMissing required parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn":
console.log(["\u2022 %cParameter %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),"%c expected %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(expected)),"%c but got %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual)].join(''),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn-map":
console.log(["\u2022 %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(validate_fn_result))].join(''),re_com.debug.error_style);

break;
default:
console.log("\u2022 ",re_com.debug.confused_icon," Unknown problem reported");

}


var G__48928 = seq__48807;
var G__48929 = chunk__48808;
var G__48930 = count__48809;
var G__48931 = (i__48810 + (1));
seq__48807 = G__48928;
chunk__48808 = G__48929;
count__48809 = G__48930;
i__48810 = G__48931;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48807);
if(temp__5753__auto__){
var seq__48807__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48807__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__48807__$1);
var G__48932 = cljs.core.chunk_rest(seq__48807__$1);
var G__48933 = c__4679__auto__;
var G__48934 = cljs.core.count(c__4679__auto__);
var G__48935 = (0);
seq__48807 = G__48932;
chunk__48808 = G__48933;
count__48809 = G__48934;
i__48810 = G__48935;
continue;
} else {
var map__48829 = cljs.core.first(seq__48807__$1);
var map__48829__$1 = cljs.core.__destructure_map(map__48829);
var problem = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48829__$1,new cljs.core.Keyword(null,"problem","problem",1168155148));
var arg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48829__$1,new cljs.core.Keyword(null,"arg-name","arg-name",6205923));
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48829__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48829__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var validate_fn_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48829__$1,new cljs.core.Keyword(null,"validate-fn-result","validate-fn-result",280916497));
var G__48830_48936 = problem;
var G__48830_48937__$1 = (((G__48830_48936 instanceof cljs.core.Keyword))?G__48830_48936.fqn:null);
switch (G__48830_48937__$1) {
case "unknown":
console.log(["\u2022 %cUnknown parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "required":
console.log(["\u2022 %cMissing required parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn":
console.log(["\u2022 %cParameter %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),"%c expected %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(expected)),"%c but got %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual)].join(''),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn-map":
console.log(["\u2022 %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(validate_fn_result))].join(''),re_com.debug.error_style);

break;
default:
console.log("\u2022 ",re_com.debug.confused_icon," Unknown problem reported");

}


var G__48939 = cljs.core.next(seq__48807__$1);
var G__48940 = null;
var G__48941 = (0);
var G__48942 = (0);
seq__48807 = G__48939;
chunk__48808 = G__48940;
count__48809 = G__48941;
i__48810 = G__48942;
continue;
}
} else {
return null;
}
}
break;
}
});
re_com.debug.log_validate_args_error = (function re_com$debug$log_validate_args_error(element,problems,component_name,p__48831){
var map__48832 = p__48831;
var map__48832__$1 = cljs.core.__destructure_map(map__48832);
var src = map__48832__$1;
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48832__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48832__$1,new cljs.core.Keyword(null,"line","line",212345235));
var source_url = (((!(cljs.core.empty_QMARK_(re_com.config.root_url_for_compiler_output))))?[re_com.config.root_url_for_compiler_output,cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):null);
console.group(["%c",re_com.debug.collision_icon," re-com validation error "].join(''),re_com.debug.h1_style);

if(cljs.core.truth_(src)){
if(cljs.core.truth_(source_url)){
console.log(["\u2022 ",re_com.debug.gear_icon,"%c[",re_com.debug.short_component_name(component_name)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),"%c see ",source_url].join(''),re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"");
} else {
console.log(["\u2022 ",re_com.debug.gear_icon,"%c[",re_com.debug.short_component_name(component_name)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''),re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style);

console.log(["\u2022 ",re_com.debug.blue_book_icon," Add %cre-com.config/root-url-for-compiler-output%c to your %c:closure-defines%c to enable clickable source urls"].join(''),re_com.debug.code_style,"",re_com.debug.code_style,"");
}
} else {
console.log(["\u2022 ",re_com.debug.gear_icon,"%c[",re_com.debug.short_component_name(component_name)," ...]"].join(''),re_com.debug.code_style);

console.log(["\u2022 ",re_com.debug.blue_book_icon," Learn how to add source coordinates to your components at https://re-com.day8.com.au/#/debug"].join(''));
}

re_com.debug.log_validate_args_error_problems(problems);

re_com.debug.log_component_stack(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(element)));

return console.groupEnd();
});
re_com.debug.validate_args_error = (function re_com$debug$validate_args_error(var_args){
var args__4870__auto__ = [];
var len__4864__auto___48943 = arguments.length;
var i__4865__auto___48944 = (0);
while(true){
if((i__4865__auto___48944 < len__4864__auto___48943)){
args__4870__auto__.push((arguments[i__4865__auto___48944]));

var G__48945 = (i__4865__auto___48944 + (1));
i__4865__auto___48944 = G__48945;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_com.debug.validate_args_error.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_com.debug.validate_args_error.cljs$core$IFn$_invoke$arity$variadic = (function (p__48841){
var map__48842 = p__48841;
var map__48842__$1 = cljs.core.__destructure_map(map__48842);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48842__$1,new cljs.core.Keyword(null,"problems","problems",2097327077));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48842__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48842__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var element = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
return cljs.core.reset_BANG_(element,el);
} else {
return null;
}
});
var internal_problems = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(problems);
var internal_component = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(component);
var internal_args = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(args);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"validate-args-error",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return re_com.debug.log_validate_args_error(element,cljs.core.deref(internal_problems),cljs.core.deref(internal_component),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(internal_args)));
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$,argv,old_state,snapshot){
return re_com.debug.log_validate_args_error(element,cljs.core.deref(internal_problems),cljs.core.deref(internal_component),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(internal_args)));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__48946__delegate = function (p__48845){
var map__48846 = p__48845;
var map__48846__$1 = cljs.core.__destructure_map(map__48846);
var problems__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48846__$1,new cljs.core.Keyword(null,"problems","problems",2097327077));
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48846__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var args__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48846__$1,new cljs.core.Keyword(null,"args","args",1315556576));
cljs.core.reset_BANG_(internal_problems,problems__$1);

cljs.core.reset_BANG_(internal_component,component__$1);

cljs.core.reset_BANG_(internal_args,args__$1);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.debug.__GT_attr(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(args__$1),new cljs.core.Keyword(null,"debug-as","debug-as",283322354),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),component__$1,new cljs.core.Keyword(null,"args","args",1315556576),args__$1], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn], null)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"re-com validation error. Look in the DevTools console.",new cljs.core.Keyword(null,"style","style",-496642736),re_com.debug.validate_args_problems_style()], null)], 0)),re_com.debug.collision_icon], null);
};
var G__48946 = function (var_args){
var p__48845 = null;
if (arguments.length > 0) {
var G__48947__i = 0, G__48947__a = new Array(arguments.length -  0);
while (G__48947__i < G__48947__a.length) {G__48947__a[G__48947__i] = arguments[G__48947__i + 0]; ++G__48947__i;}
  p__48845 = new cljs.core.IndexedSeq(G__48947__a,0,null);
} 
return G__48946__delegate.call(this,p__48845);};
G__48946.cljs$lang$maxFixedArity = 0;
G__48946.cljs$lang$applyTo = (function (arglist__48948){
var p__48845 = cljs.core.seq(arglist__48948);
return G__48946__delegate(p__48845);
});
G__48946.cljs$core$IFn$_invoke$arity$variadic = G__48946__delegate;
return G__48946;
})()
], null));
}));

(re_com.debug.validate_args_error.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.debug.validate_args_error.cljs$lang$applyTo = (function (seq48839){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48839));
}));

re_com.debug.stack_spy = (function re_com$debug$stack_spy(var_args){
var args__4870__auto__ = [];
var len__4864__auto___48949 = arguments.length;
var i__4865__auto___48950 = (0);
while(true){
if((i__4865__auto___48950 < len__4864__auto___48949)){
args__4870__auto__.push((arguments[i__4865__auto___48950]));

var G__48951 = (i__4865__auto___48950 + (1));
i__4865__auto___48950 = G__48951;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_com.debug.stack_spy.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_com.debug.stack_spy.cljs$core$IFn$_invoke$arity$variadic = (function (p__48860){
var map__48861 = p__48860;
var map__48861__$1 = cljs.core.__destructure_map(map__48861);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48861__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48861__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var element = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
return cljs.core.reset_BANG_(element,el);
} else {
return null;
}
});
var log_fn = (function (){
var el = cljs.core.deref(element);
if(cljs.core.truth_(el)){
var first_child = cljs.core.first(el.children);
console.group("%c[stack-spy ...]",re_com.debug.code_style);

re_com.debug.log_component_stack(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1(first_child));

return console.groupEnd();
} else {
return null;
}
});
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"stack-spy",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),log_fn,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),log_fn,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__48952__delegate = function (p__48862){
var map__48863 = p__48862;
var map__48863__$1 = cljs.core.__destructure_map(map__48863);
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48863__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48863__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),re_com.debug.__GT_attr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),src__$1,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn], null)], null)),component__$1], null);
};
var G__48952 = function (var_args){
var p__48862 = null;
if (arguments.length > 0) {
var G__48956__i = 0, G__48956__a = new Array(arguments.length -  0);
while (G__48956__i < G__48956__a.length) {G__48956__a[G__48956__i] = arguments[G__48956__i + 0]; ++G__48956__i;}
  p__48862 = new cljs.core.IndexedSeq(G__48956__a,0,null);
} 
return G__48952__delegate.call(this,p__48862);};
G__48952.cljs$lang$maxFixedArity = 0;
G__48952.cljs$lang$applyTo = (function (arglist__48958){
var p__48862 = cljs.core.seq(arglist__48958);
return G__48952__delegate(p__48862);
});
G__48952.cljs$core$IFn$_invoke$arity$variadic = G__48952__delegate;
return G__48952;
})()
], null));
}));

(re_com.debug.stack_spy.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.debug.stack_spy.cljs$lang$applyTo = (function (seq48847){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48847));
}));


//# sourceMappingURL=re_com.debug.js.map
