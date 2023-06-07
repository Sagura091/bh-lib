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
re_com.debug.__GT_attr = (function re_com$debug$__GT_attr(p__71059){
var map__71060 = p__71059;
var map__71060__$1 = cljs.core.__destructure_map(map__71060);
var args = map__71060__$1;
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71060__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71060__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354));
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
var map__71061 = src;
var map__71061__$1 = cljs.core.__destructure_map(map__71061);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71061__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71061__$1,new cljs.core.Keyword(null,"line","line",212345235));
var G__71065 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn,new cljs.core.Keyword(null,"data-rc","data-rc",1949262543),rc_component], null);
if(cljs.core.truth_(src)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__71065,new cljs.core.Keyword(null,"data-rc-src","data-rc-src",-344701880),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''));
} else {
return G__71065;
}
}
});
re_com.debug.component_stack = (function re_com$debug$component_stack(var_args){
var G__71067 = arguments.length;
switch (G__71067) {
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

var seq__71070_71129 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__71069_SHARP_,p2__71068_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2__71068_SHARP_,new cljs.core.Keyword(null,"i","i",-1386841315),(p1__71069_SHARP_ + (1)));
}),stack));
var chunk__71071_71130 = null;
var count__71072_71131 = (0);
var i__71073_71132 = (0);
while(true){
if((i__71073_71132 < count__71072_71131)){
var map__71082_71133 = chunk__71071_71130.cljs$core$IIndexed$_nth$arity$2(null,i__71073_71132);
var map__71082_71134__$1 = cljs.core.__destructure_map(map__71082_71133);
var i_71135 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71082_71134__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var el_71136 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71082_71134__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var component_71137 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71082_71134__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src_71138 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71082_71134__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var args_71139 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71082_71134__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(component_71137)){
if(cljs.core.truth_(src_71138)){
var vec__71083_71140 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(src_71138,/:/);
var file_71141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71083_71140,(0),null);
var line_71142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71083_71140,(1),null);
if(cljs.core.truth_(args_71139)){
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_71135),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_71137)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_71141),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_71142),"%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",args_71139,el_71136);
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_71135),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_71137)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_71141),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_71142),"%c\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",el_71136);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_71135),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_71137)," ...]%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",args_71139,el_71136);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_71135),"%c ",re_com.debug.globe_icon," %o"].join(''),re_com.debug.index_style,"",el_71136);
}


var G__71143 = seq__71070_71129;
var G__71144 = chunk__71071_71130;
var G__71145 = count__71072_71131;
var G__71146 = (i__71073_71132 + (1));
seq__71070_71129 = G__71143;
chunk__71071_71130 = G__71144;
count__71072_71131 = G__71145;
i__71073_71132 = G__71146;
continue;
} else {
var temp__5753__auto___71147 = cljs.core.seq(seq__71070_71129);
if(temp__5753__auto___71147){
var seq__71070_71148__$1 = temp__5753__auto___71147;
if(cljs.core.chunked_seq_QMARK_(seq__71070_71148__$1)){
var c__4679__auto___71149 = cljs.core.chunk_first(seq__71070_71148__$1);
var G__71150 = cljs.core.chunk_rest(seq__71070_71148__$1);
var G__71151 = c__4679__auto___71149;
var G__71152 = cljs.core.count(c__4679__auto___71149);
var G__71153 = (0);
seq__71070_71129 = G__71150;
chunk__71071_71130 = G__71151;
count__71072_71131 = G__71152;
i__71073_71132 = G__71153;
continue;
} else {
var map__71086_71154 = cljs.core.first(seq__71070_71148__$1);
var map__71086_71155__$1 = cljs.core.__destructure_map(map__71086_71154);
var i_71156 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71086_71155__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var el_71157 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71086_71155__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var component_71158 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71086_71155__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src_71159 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71086_71155__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var args_71160 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71086_71155__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(component_71158)){
if(cljs.core.truth_(src_71159)){
var vec__71087_71161 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(src_71159,/:/);
var file_71162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71087_71161,(0),null);
var line_71163 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71087_71161,(1),null);
if(cljs.core.truth_(args_71160)){
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_71156),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_71158)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_71162),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_71163),"%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",args_71160,el_71157);
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_71156),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_71158)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_71162),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_71163),"%c\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",el_71157);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_71156),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_71158)," ...]%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",args_71160,el_71157);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_71156),"%c ",re_com.debug.globe_icon," %o"].join(''),re_com.debug.index_style,"",el_71157);
}


var G__71171 = cljs.core.next(seq__71070_71148__$1);
var G__71172 = null;
var G__71173 = (0);
var G__71174 = (0);
seq__71070_71129 = G__71171;
chunk__71071_71130 = G__71172;
count__71072_71131 = G__71173;
i__71073_71132 = G__71174;
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
var seq__71090 = cljs.core.seq(problems);
var chunk__71091 = null;
var count__71092 = (0);
var i__71093 = (0);
while(true){
if((i__71093 < count__71092)){
var map__71103 = chunk__71091.cljs$core$IIndexed$_nth$arity$2(null,i__71093);
var map__71103__$1 = cljs.core.__destructure_map(map__71103);
var problem = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71103__$1,new cljs.core.Keyword(null,"problem","problem",1168155148));
var arg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71103__$1,new cljs.core.Keyword(null,"arg-name","arg-name",6205923));
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71103__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71103__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var validate_fn_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71103__$1,new cljs.core.Keyword(null,"validate-fn-result","validate-fn-result",280916497));
var G__71104_71175 = problem;
var G__71104_71176__$1 = (((G__71104_71175 instanceof cljs.core.Keyword))?G__71104_71175.fqn:null);
switch (G__71104_71176__$1) {
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


var G__71178 = seq__71090;
var G__71179 = chunk__71091;
var G__71180 = count__71092;
var G__71181 = (i__71093 + (1));
seq__71090 = G__71178;
chunk__71091 = G__71179;
count__71092 = G__71180;
i__71093 = G__71181;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__71090);
if(temp__5753__auto__){
var seq__71090__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__71090__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__71090__$1);
var G__71182 = cljs.core.chunk_rest(seq__71090__$1);
var G__71183 = c__4679__auto__;
var G__71184 = cljs.core.count(c__4679__auto__);
var G__71185 = (0);
seq__71090 = G__71182;
chunk__71091 = G__71183;
count__71092 = G__71184;
i__71093 = G__71185;
continue;
} else {
var map__71107 = cljs.core.first(seq__71090__$1);
var map__71107__$1 = cljs.core.__destructure_map(map__71107);
var problem = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71107__$1,new cljs.core.Keyword(null,"problem","problem",1168155148));
var arg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71107__$1,new cljs.core.Keyword(null,"arg-name","arg-name",6205923));
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71107__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71107__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var validate_fn_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71107__$1,new cljs.core.Keyword(null,"validate-fn-result","validate-fn-result",280916497));
var G__71108_71186 = problem;
var G__71108_71187__$1 = (((G__71108_71186 instanceof cljs.core.Keyword))?G__71108_71186.fqn:null);
switch (G__71108_71187__$1) {
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


var G__71189 = cljs.core.next(seq__71090__$1);
var G__71190 = null;
var G__71191 = (0);
var G__71192 = (0);
seq__71090 = G__71189;
chunk__71091 = G__71190;
count__71092 = G__71191;
i__71093 = G__71192;
continue;
}
} else {
return null;
}
}
break;
}
});
re_com.debug.log_validate_args_error = (function re_com$debug$log_validate_args_error(element,problems,component_name,p__71109){
var map__71110 = p__71109;
var map__71110__$1 = cljs.core.__destructure_map(map__71110);
var src = map__71110__$1;
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71110__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71110__$1,new cljs.core.Keyword(null,"line","line",212345235));
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
var len__4864__auto___71193 = arguments.length;
var i__4865__auto___71194 = (0);
while(true){
if((i__4865__auto___71194 < len__4864__auto___71193)){
args__4870__auto__.push((arguments[i__4865__auto___71194]));

var G__71195 = (i__4865__auto___71194 + (1));
i__4865__auto___71194 = G__71195;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_com.debug.validate_args_error.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_com.debug.validate_args_error.cljs$core$IFn$_invoke$arity$variadic = (function (p__71112){
var map__71113 = p__71112;
var map__71113__$1 = cljs.core.__destructure_map(map__71113);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71113__$1,new cljs.core.Keyword(null,"problems","problems",2097327077));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71113__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71113__$1,new cljs.core.Keyword(null,"args","args",1315556576));
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
var G__71204__delegate = function (p__71114){
var map__71115 = p__71114;
var map__71115__$1 = cljs.core.__destructure_map(map__71115);
var problems__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71115__$1,new cljs.core.Keyword(null,"problems","problems",2097327077));
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71115__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var args__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71115__$1,new cljs.core.Keyword(null,"args","args",1315556576));
cljs.core.reset_BANG_(internal_problems,problems__$1);

cljs.core.reset_BANG_(internal_component,component__$1);

cljs.core.reset_BANG_(internal_args,args__$1);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.debug.__GT_attr(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(args__$1),new cljs.core.Keyword(null,"debug-as","debug-as",283322354),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),component__$1,new cljs.core.Keyword(null,"args","args",1315556576),args__$1], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn], null)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"re-com validation error. Look in the DevTools console.",new cljs.core.Keyword(null,"style","style",-496642736),re_com.debug.validate_args_problems_style()], null)], 0)),re_com.debug.collision_icon], null);
};
var G__71204 = function (var_args){
var p__71114 = null;
if (arguments.length > 0) {
var G__71207__i = 0, G__71207__a = new Array(arguments.length -  0);
while (G__71207__i < G__71207__a.length) {G__71207__a[G__71207__i] = arguments[G__71207__i + 0]; ++G__71207__i;}
  p__71114 = new cljs.core.IndexedSeq(G__71207__a,0,null);
} 
return G__71204__delegate.call(this,p__71114);};
G__71204.cljs$lang$maxFixedArity = 0;
G__71204.cljs$lang$applyTo = (function (arglist__71208){
var p__71114 = cljs.core.seq(arglist__71208);
return G__71204__delegate(p__71114);
});
G__71204.cljs$core$IFn$_invoke$arity$variadic = G__71204__delegate;
return G__71204;
})()
], null));
}));

(re_com.debug.validate_args_error.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.debug.validate_args_error.cljs$lang$applyTo = (function (seq71111){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71111));
}));

re_com.debug.stack_spy = (function re_com$debug$stack_spy(var_args){
var args__4870__auto__ = [];
var len__4864__auto___71210 = arguments.length;
var i__4865__auto___71211 = (0);
while(true){
if((i__4865__auto___71211 < len__4864__auto___71210)){
args__4870__auto__.push((arguments[i__4865__auto___71211]));

var G__71212 = (i__4865__auto___71211 + (1));
i__4865__auto___71211 = G__71212;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_com.debug.stack_spy.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_com.debug.stack_spy.cljs$core$IFn$_invoke$arity$variadic = (function (p__71118){
var map__71119 = p__71118;
var map__71119__$1 = cljs.core.__destructure_map(map__71119);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71119__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71119__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
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
var G__71215__delegate = function (p__71124){
var map__71125 = p__71124;
var map__71125__$1 = cljs.core.__destructure_map(map__71125);
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71125__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71125__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),re_com.debug.__GT_attr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),src__$1,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn], null)], null)),component__$1], null);
};
var G__71215 = function (var_args){
var p__71124 = null;
if (arguments.length > 0) {
var G__71216__i = 0, G__71216__a = new Array(arguments.length -  0);
while (G__71216__i < G__71216__a.length) {G__71216__a[G__71216__i] = arguments[G__71216__i + 0]; ++G__71216__i;}
  p__71124 = new cljs.core.IndexedSeq(G__71216__a,0,null);
} 
return G__71215__delegate.call(this,p__71124);};
G__71215.cljs$lang$maxFixedArity = 0;
G__71215.cljs$lang$applyTo = (function (arglist__71217){
var p__71124 = cljs.core.seq(arglist__71217);
return G__71215__delegate(p__71124);
});
G__71215.cljs$core$IFn$_invoke$arity$variadic = G__71215__delegate;
return G__71215;
})()
], null));
}));

(re_com.debug.stack_spy.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.debug.stack_spy.cljs$lang$applyTo = (function (seq71116){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71116));
}));


//# sourceMappingURL=re_com.debug.js.map
