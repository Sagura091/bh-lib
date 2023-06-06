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
re_com.debug.__GT_attr = (function re_com$debug$__GT_attr(p__48568){
var map__48569 = p__48568;
var map__48569__$1 = cljs.core.__destructure_map(map__48569);
var args = map__48569__$1;
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48569__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48569__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354));
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
var map__48570 = src;
var map__48570__$1 = cljs.core.__destructure_map(map__48570);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48570__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48570__$1,new cljs.core.Keyword(null,"line","line",212345235));
var G__48574 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn,new cljs.core.Keyword(null,"data-rc","data-rc",1949262543),rc_component], null);
if(cljs.core.truth_(src)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48574,new cljs.core.Keyword(null,"data-rc-src","data-rc-src",-344701880),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''));
} else {
return G__48574;
}
}
});
re_com.debug.component_stack = (function re_com$debug$component_stack(var_args){
var G__48576 = arguments.length;
switch (G__48576) {
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

var seq__48583_48659 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__48580_SHARP_,p2__48579_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2__48579_SHARP_,new cljs.core.Keyword(null,"i","i",-1386841315),(p1__48580_SHARP_ + (1)));
}),stack));
var chunk__48584_48660 = null;
var count__48585_48661 = (0);
var i__48586_48662 = (0);
while(true){
if((i__48586_48662 < count__48585_48661)){
var map__48598_48663 = chunk__48584_48660.cljs$core$IIndexed$_nth$arity$2(null,i__48586_48662);
var map__48598_48664__$1 = cljs.core.__destructure_map(map__48598_48663);
var i_48665 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48598_48664__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var el_48666 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48598_48664__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var component_48667 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48598_48664__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src_48668 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48598_48664__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var args_48669 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48598_48664__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(component_48667)){
if(cljs.core.truth_(src_48668)){
var vec__48601_48670 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(src_48668,/:/);
var file_48671 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48601_48670,(0),null);
var line_48672 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48601_48670,(1),null);
if(cljs.core.truth_(args_48669)){
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_48665),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_48667)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_48671),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_48672),"%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",args_48669,el_48666);
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_48665),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_48667)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_48671),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_48672),"%c\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",el_48666);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_48665),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_48667)," ...]%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",args_48669,el_48666);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_48665),"%c ",re_com.debug.globe_icon," %o"].join(''),re_com.debug.index_style,"",el_48666);
}


var G__48676 = seq__48583_48659;
var G__48677 = chunk__48584_48660;
var G__48678 = count__48585_48661;
var G__48679 = (i__48586_48662 + (1));
seq__48583_48659 = G__48676;
chunk__48584_48660 = G__48677;
count__48585_48661 = G__48678;
i__48586_48662 = G__48679;
continue;
} else {
var temp__5753__auto___48680 = cljs.core.seq(seq__48583_48659);
if(temp__5753__auto___48680){
var seq__48583_48681__$1 = temp__5753__auto___48680;
if(cljs.core.chunked_seq_QMARK_(seq__48583_48681__$1)){
var c__4679__auto___48682 = cljs.core.chunk_first(seq__48583_48681__$1);
var G__48683 = cljs.core.chunk_rest(seq__48583_48681__$1);
var G__48684 = c__4679__auto___48682;
var G__48685 = cljs.core.count(c__4679__auto___48682);
var G__48686 = (0);
seq__48583_48659 = G__48683;
chunk__48584_48660 = G__48684;
count__48585_48661 = G__48685;
i__48586_48662 = G__48686;
continue;
} else {
var map__48604_48687 = cljs.core.first(seq__48583_48681__$1);
var map__48604_48688__$1 = cljs.core.__destructure_map(map__48604_48687);
var i_48689 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48604_48688__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var el_48690 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48604_48688__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var component_48691 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48604_48688__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src_48692 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48604_48688__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var args_48693 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48604_48688__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(component_48691)){
if(cljs.core.truth_(src_48692)){
var vec__48605_48694 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(src_48692,/:/);
var file_48695 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48605_48694,(0),null);
var line_48696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48605_48694,(1),null);
if(cljs.core.truth_(args_48693)){
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_48689),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_48691)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_48695),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_48696),"%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",args_48693,el_48690);
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_48689),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_48691)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_48695),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_48696),"%c\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",el_48690);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_48689),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_48691)," ...]%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",args_48693,el_48690);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_48689),"%c ",re_com.debug.globe_icon," %o"].join(''),re_com.debug.index_style,"",el_48690);
}


var G__48697 = cljs.core.next(seq__48583_48681__$1);
var G__48698 = null;
var G__48699 = (0);
var G__48700 = (0);
seq__48583_48659 = G__48697;
chunk__48584_48660 = G__48698;
count__48585_48661 = G__48699;
i__48586_48662 = G__48700;
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
var seq__48610 = cljs.core.seq(problems);
var chunk__48611 = null;
var count__48612 = (0);
var i__48613 = (0);
while(true){
if((i__48613 < count__48612)){
var map__48625 = chunk__48611.cljs$core$IIndexed$_nth$arity$2(null,i__48613);
var map__48625__$1 = cljs.core.__destructure_map(map__48625);
var problem = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48625__$1,new cljs.core.Keyword(null,"problem","problem",1168155148));
var arg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48625__$1,new cljs.core.Keyword(null,"arg-name","arg-name",6205923));
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48625__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48625__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var validate_fn_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48625__$1,new cljs.core.Keyword(null,"validate-fn-result","validate-fn-result",280916497));
var G__48626_48702 = problem;
var G__48626_48703__$1 = (((G__48626_48702 instanceof cljs.core.Keyword))?G__48626_48702.fqn:null);
switch (G__48626_48703__$1) {
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


var G__48708 = seq__48610;
var G__48709 = chunk__48611;
var G__48710 = count__48612;
var G__48711 = (i__48613 + (1));
seq__48610 = G__48708;
chunk__48611 = G__48709;
count__48612 = G__48710;
i__48613 = G__48711;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48610);
if(temp__5753__auto__){
var seq__48610__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48610__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__48610__$1);
var G__48712 = cljs.core.chunk_rest(seq__48610__$1);
var G__48713 = c__4679__auto__;
var G__48714 = cljs.core.count(c__4679__auto__);
var G__48715 = (0);
seq__48610 = G__48712;
chunk__48611 = G__48713;
count__48612 = G__48714;
i__48613 = G__48715;
continue;
} else {
var map__48627 = cljs.core.first(seq__48610__$1);
var map__48627__$1 = cljs.core.__destructure_map(map__48627);
var problem = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48627__$1,new cljs.core.Keyword(null,"problem","problem",1168155148));
var arg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48627__$1,new cljs.core.Keyword(null,"arg-name","arg-name",6205923));
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48627__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48627__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var validate_fn_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48627__$1,new cljs.core.Keyword(null,"validate-fn-result","validate-fn-result",280916497));
var G__48628_48716 = problem;
var G__48628_48717__$1 = (((G__48628_48716 instanceof cljs.core.Keyword))?G__48628_48716.fqn:null);
switch (G__48628_48717__$1) {
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


var G__48719 = cljs.core.next(seq__48610__$1);
var G__48720 = null;
var G__48721 = (0);
var G__48722 = (0);
seq__48610 = G__48719;
chunk__48611 = G__48720;
count__48612 = G__48721;
i__48613 = G__48722;
continue;
}
} else {
return null;
}
}
break;
}
});
re_com.debug.log_validate_args_error = (function re_com$debug$log_validate_args_error(element,problems,component_name,p__48629){
var map__48630 = p__48629;
var map__48630__$1 = cljs.core.__destructure_map(map__48630);
var src = map__48630__$1;
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48630__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48630__$1,new cljs.core.Keyword(null,"line","line",212345235));
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
var len__4864__auto___48723 = arguments.length;
var i__4865__auto___48724 = (0);
while(true){
if((i__4865__auto___48724 < len__4864__auto___48723)){
args__4870__auto__.push((arguments[i__4865__auto___48724]));

var G__48725 = (i__4865__auto___48724 + (1));
i__4865__auto___48724 = G__48725;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_com.debug.validate_args_error.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_com.debug.validate_args_error.cljs$core$IFn$_invoke$arity$variadic = (function (p__48636){
var map__48637 = p__48636;
var map__48637__$1 = cljs.core.__destructure_map(map__48637);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48637__$1,new cljs.core.Keyword(null,"problems","problems",2097327077));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48637__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48637__$1,new cljs.core.Keyword(null,"args","args",1315556576));
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
var G__48729__delegate = function (p__48644){
var map__48645 = p__48644;
var map__48645__$1 = cljs.core.__destructure_map(map__48645);
var problems__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48645__$1,new cljs.core.Keyword(null,"problems","problems",2097327077));
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48645__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var args__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48645__$1,new cljs.core.Keyword(null,"args","args",1315556576));
cljs.core.reset_BANG_(internal_problems,problems__$1);

cljs.core.reset_BANG_(internal_component,component__$1);

cljs.core.reset_BANG_(internal_args,args__$1);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.debug.__GT_attr(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(args__$1),new cljs.core.Keyword(null,"debug-as","debug-as",283322354),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),component__$1,new cljs.core.Keyword(null,"args","args",1315556576),args__$1], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn], null)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"re-com validation error. Look in the DevTools console.",new cljs.core.Keyword(null,"style","style",-496642736),re_com.debug.validate_args_problems_style()], null)], 0)),re_com.debug.collision_icon], null);
};
var G__48729 = function (var_args){
var p__48644 = null;
if (arguments.length > 0) {
var G__48730__i = 0, G__48730__a = new Array(arguments.length -  0);
while (G__48730__i < G__48730__a.length) {G__48730__a[G__48730__i] = arguments[G__48730__i + 0]; ++G__48730__i;}
  p__48644 = new cljs.core.IndexedSeq(G__48730__a,0,null);
} 
return G__48729__delegate.call(this,p__48644);};
G__48729.cljs$lang$maxFixedArity = 0;
G__48729.cljs$lang$applyTo = (function (arglist__48731){
var p__48644 = cljs.core.seq(arglist__48731);
return G__48729__delegate(p__48644);
});
G__48729.cljs$core$IFn$_invoke$arity$variadic = G__48729__delegate;
return G__48729;
})()
], null));
}));

(re_com.debug.validate_args_error.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.debug.validate_args_error.cljs$lang$applyTo = (function (seq48631){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48631));
}));

re_com.debug.stack_spy = (function re_com$debug$stack_spy(var_args){
var args__4870__auto__ = [];
var len__4864__auto___48733 = arguments.length;
var i__4865__auto___48734 = (0);
while(true){
if((i__4865__auto___48734 < len__4864__auto___48733)){
args__4870__auto__.push((arguments[i__4865__auto___48734]));

var G__48736 = (i__4865__auto___48734 + (1));
i__4865__auto___48734 = G__48736;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_com.debug.stack_spy.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_com.debug.stack_spy.cljs$core$IFn$_invoke$arity$variadic = (function (p__48648){
var map__48649 = p__48648;
var map__48649__$1 = cljs.core.__destructure_map(map__48649);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48649__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48649__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
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
var G__48737__delegate = function (p__48652){
var map__48653 = p__48652;
var map__48653__$1 = cljs.core.__destructure_map(map__48653);
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48653__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48653__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),re_com.debug.__GT_attr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),src__$1,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn], null)], null)),component__$1], null);
};
var G__48737 = function (var_args){
var p__48652 = null;
if (arguments.length > 0) {
var G__48738__i = 0, G__48738__a = new Array(arguments.length -  0);
while (G__48738__i < G__48738__a.length) {G__48738__a[G__48738__i] = arguments[G__48738__i + 0]; ++G__48738__i;}
  p__48652 = new cljs.core.IndexedSeq(G__48738__a,0,null);
} 
return G__48737__delegate.call(this,p__48652);};
G__48737.cljs$lang$maxFixedArity = 0;
G__48737.cljs$lang$applyTo = (function (arglist__48739){
var p__48652 = cljs.core.seq(arglist__48739);
return G__48737__delegate(p__48652);
});
G__48737.cljs$core$IFn$_invoke$arity$variadic = G__48737__delegate;
return G__48737;
})()
], null));
}));

(re_com.debug.stack_spy.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.debug.stack_spy.cljs$lang$applyTo = (function (seq48647){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48647));
}));


//# sourceMappingURL=re_com.debug.js.map
