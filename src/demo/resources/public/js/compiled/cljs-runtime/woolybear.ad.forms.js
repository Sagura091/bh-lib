goog.provide('woolybear.ad.forms');
/**
 * 
 *   Simple red asterisk for adding to form field labels to mark the corresponding form
 *   field as required. Takes no options.
 *   
 */
woolybear.ad.forms.required_mark = (function woolybear$ad$forms$required_mark(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.is-required-mark","span.is-required-mark",1506632974),"*"], null);
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("label","required?","label/required?",-1050802346),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("label","for","label/for",-1506140507),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("label","options","label/options",466672077),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261),new cljs.core.Keyword("label","required?","label/required?",-1050802346)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261),new cljs.core.Keyword("label","required?","label/required?",-1050802346)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__73036){
return cljs.core.map_QMARK_(G__73036);
})], null),(function (G__73036){
return cljs.core.map_QMARK_(G__73036);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843),new cljs.core.Keyword(null,"subscribe-to-classes","subscribe-to-classes",173193596),new cljs.core.Keyword(null,"required?","required?",-872514462)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261),new cljs.core.Keyword("label","required?","label/required?",-1050802346)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])));
/**
 * 
 *   Simple label component for use with form fields. Supports the standard :extra-classes and
 *   :subscribe-to-classes options, plus an optional :required? option that, if present and
 *   truthy, will add a red asterisk to the label. You can also pass in a :for option containing
 *   the DOM ID of the element that the label describes.
 *   
 */
woolybear.ad.forms.label = (function woolybear$ad$forms$label(var_args){
var args__4870__auto__ = [];
var len__4864__auto___73121 = arguments.length;
var i__4865__auto___73126 = (0);
while(true){
if((i__4865__auto___73126 < len__4864__auto___73121)){
args__4870__auto__.push((arguments[i__4865__auto___73126]));

var G__73127 = (i__4865__auto___73126 + (1));
i__4865__auto___73126 = G__73127;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return woolybear.ad.forms.label.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(woolybear.ad.forms.label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__73038 = woolybear.ad.utils.extract_args(args);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73038,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73038,(1),null);
var map__73041 = opts;
var map__73041__$1 = cljs.core.__destructure_map(map__73041);
var extra_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73041__$1,new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843));
var subscribe_to_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73041__$1,new cljs.core.Keyword(null,"subscribe-to-classes","subscribe-to-classes",173193596));
var required_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73041__$1,new cljs.core.Keyword(null,"required?","required?",-872514462));
var for$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73041__$1,new cljs.core.Keyword(null,"for","for",-1323786319));
var classes_sub = woolybear.ad.utils.subscribe_to(subscribe_to_classes);
return (function() { 
var G__73128__delegate = function (args__$1){
var vec__73042 = woolybear.ad.utils.extract_args(args__$1);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73042,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73042,(1),null);
var dynamic_classes = cljs.core.deref(classes_sub);
var attribs = (function (){var G__73045 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),woolybear.ad.utils.css__GT_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"wb-label","wb-label",1022938550),extra_classes,dynamic_classes], 0))], null);
if(cljs.core.truth_(for$)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__73045,new cljs.core.Keyword(null,"for","for",-1323786319),for$);
} else {
return G__73045;
}
})();
var G__73046 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),attribs], null),children);
if(cljs.core.truth_(required_QMARK_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__73046,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.forms.required_mark], null));
} else {
return G__73046;
}
};
var G__73128 = function (var_args){
var args__$1 = null;
if (arguments.length > 0) {
var G__73129__i = 0, G__73129__a = new Array(arguments.length -  0);
while (G__73129__i < G__73129__a.length) {G__73129__a[G__73129__i] = arguments[G__73129__i + 0]; ++G__73129__i;}
  args__$1 = new cljs.core.IndexedSeq(G__73129__a,0,null);
} 
return G__73128__delegate.call(this,args__$1);};
G__73128.cljs$lang$maxFixedArity = 0;
G__73128.cljs$lang$applyTo = (function (arglist__73130){
var args__$1 = cljs.core.seq(arglist__73130);
return G__73128__delegate(args__$1);
});
G__73128.cljs$core$IFn$_invoke$arity$variadic = G__73128__delegate;
return G__73128;
})()
;
}));

(woolybear.ad.forms.label.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(woolybear.ad.forms.label.cljs$lang$applyTo = (function (seq73037){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq73037));
}));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("woolybear.ad.forms","label","woolybear.ad.forms/label",746671665,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword("label","options","label/options",466672077),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword("label","options","label/options",466672077),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"children","children",-940561982)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("label","options","label/options",466672077),cljs.spec.alpha.rep_PLUS_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("label","options","label/options",466672077),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword("label","options","label/options",466672077),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_,null,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),null,null,null));
/**
 * 
 *   Generates the internal fields used by self-aware form field components. Takes a vector
 *   of keywords to be used by `assoc-in` or `update-in` to update the value in the app-db.
 *   The optional second value is the default value to set the field value to. Returns a map
 *   of appropriate values to be added to the app-db in the appropriate location.
 *   
 */
woolybear.ad.forms.mk_field_data = (function woolybear$ad$forms$mk_field_data(var_args){
var G__73048 = arguments.length;
switch (G__73048) {
case 1:
return woolybear.ad.forms.mk_field_data.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return woolybear.ad.forms.mk_field_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(woolybear.ad.forms.mk_field_data.cljs$core$IFn$_invoke$arity$1 = (function (path){
return woolybear.ad.forms.mk_field_data.cljs$core$IFn$_invoke$arity$2(path,null);
}));

(woolybear.ad.forms.mk_field_data.cljs$core$IFn$_invoke$arity$2 = (function (path,default$){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),default$,new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"visited?","visited?",1255772609),false,new cljs.core.Keyword(null,"active?","active?",459499776),false,new cljs.core.Keyword(null,"original-value","original-value",-1784606036),default$], null);
}));

(woolybear.ad.forms.mk_field_data.cljs$lang$maxFixedArity = 2);

cljs.spec.alpha.def_impl(new cljs.core.Symbol("woolybear.ad.forms","mk-field-data","woolybear.ad.forms/mk-field-data",-958529973,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword("ad","component-path","ad/component-path",-1014950826)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword("ad","component-path","ad/component-path",-1014950826)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","component-path","ad/component-path",-1014950826)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","component-path","ad/component-path",-1014950826)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword("ad","component-path","ad/component-path",-1014950826)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_,null,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),null,null,null));
/**
 * Given a component-data-path and a map with the keys :on-enter-key, :on-escape-key, and :on-change,
 *   return a map with each of those keys mapped to a dispatcher function suitable for use in text-input,
 *   select-input, and so on. Note that this us used for select-input as well as text-input, so we need
 *   to check for the :multiple? option in the on-change handler.
 */
woolybear.ad.forms.mk_dispatchers = (function woolybear$ad$forms$mk_dispatchers(var_args){
var G__73050 = arguments.length;
switch (G__73050) {
case 2:
return woolybear.ad.forms.mk_dispatchers.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return woolybear.ad.forms.mk_dispatchers.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(woolybear.ad.forms.mk_dispatchers.cljs$core$IFn$_invoke$arity$2 = (function (component_data_path,opts){
return woolybear.ad.forms.mk_dispatchers.cljs$core$IFn$_invoke$arity$3(component_data_path,opts,new cljs.core.Keyword("form-field","change","form-field/change",1888513737));
}));

(woolybear.ad.forms.mk_dispatchers.cljs$core$IFn$_invoke$arity$3 = (function (component_data_path,p__73051,dispatch_key){
var map__73052 = p__73051;
var map__73052__$1 = cljs.core.__destructure_map(map__73052);
var on_enter_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73052__$1,new cljs.core.Keyword(null,"on-enter-key","on-enter-key",214547631));
var on_escape_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73052__$1,new cljs.core.Keyword(null,"on-escape-key","on-escape-key",72099853));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73052__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var path = component_data_path;
var on_key_dispatchers = (function (){var G__73053 = cljs.core.PersistentArrayMap.EMPTY;
var G__73053__$1 = (cljs.core.truth_(on_enter_key)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__73053,"Enter",woolybear.ad.utils.append_to_dispatcher.cljs$core$IFn$_invoke$arity$variadic(on_enter_key,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0))):G__73053);
if(cljs.core.truth_(on_escape_key)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__73053__$1,"Escape",woolybear.ad.utils.append_to_dispatcher.cljs$core$IFn$_invoke$arity$variadic(on_escape_key,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0)));
} else {
return G__73053__$1;
}
})();
var on_key_down_dispatcher = ((cljs.core.seq(on_key_dispatchers))?woolybear.ad.utils.mk_keydown_dispatcher(on_key_dispatchers):null);
var blur_dispatcher = woolybear.ad.utils.mk_dispatcher(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("form-field","blur","form-field/blur",653591812),component_data_path], null));
var change_dispatcher_STAR_ = (cljs.core.truth_(on_change)?woolybear.ad.utils.mk_dispatcher(woolybear.ad.utils.append_to_dispatcher.cljs$core$IFn$_invoke$arity$variadic(on_change,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([component_data_path], 0))):null);
var change_dispatcher = (cljs.core.truth_(change_dispatcher_STAR_)?(function (e){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dispatch_key,component_data_path,woolybear.ad.utils.js_event_val(e)], null));

return (change_dispatcher_STAR_.cljs$core$IFn$_invoke$arity$1 ? change_dispatcher_STAR_.cljs$core$IFn$_invoke$arity$1(e) : change_dispatcher_STAR_.call(null,e));
}):(function (e){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dispatch_key,component_data_path,woolybear.ad.utils.js_event_val(e)], null));
}));
var G__73054 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),change_dispatcher,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),blur_dispatcher], null);
if(cljs.core.truth_(on_key_down_dispatcher)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__73054,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),on_key_down_dispatcher);
} else {
return G__73054;
}
}));

(woolybear.ad.forms.mk_dispatchers.cljs$lang$maxFixedArity = 3);

cljs.spec.alpha.def_impl(new cljs.core.Symbol("woolybear.ad.forms","mk-dispatchers","woolybear.ad.forms/mk-dispatchers",-1709842777,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"dispatchers","dispatchers",1387968599),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("input","on-enter-key","input/on-enter-key",312812529),new cljs.core.Keyword("input","on-escape-key","input/on-escape-key",172413755),new cljs.core.Keyword("input","on-change","input/on-change",-1503460079)], null)),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"dispatchers","dispatchers",1387968599),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("input","on-enter-key","input/on-enter-key",312812529),new cljs.core.Keyword("input","on-escape-key","input/on-escape-key",172413755),new cljs.core.Keyword("input","on-change","input/on-change",-1503460079)], null)),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"dispatchers","dispatchers",1387968599),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vector_QMARK_,cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("input","on-enter-key","input/on-enter-key",312812529),new cljs.core.Keyword("input","on-escape-key","input/on-escape-key",172413755),new cljs.core.Keyword("input","on-change","input/on-change",-1503460079)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__73055){
return cljs.core.map_QMARK_(G__73055);
})], null),(function (G__73055){
return cljs.core.map_QMARK_(G__73055);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-enter-key","on-enter-key",214547631),new cljs.core.Keyword(null,"on-escape-key","on-escape-key",72099853),new cljs.core.Keyword(null,"on-change","on-change",-732046149)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("input","on-enter-key","input/on-enter-key",312812529),new cljs.core.Keyword("input","on-escape-key","input/on-escape-key",172413755),new cljs.core.Keyword("input","on-change","input/on-change",-1503460079)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])),cljs.spec.alpha.maybe_impl(cljs.core.keyword_QMARK_,new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("input","on-enter-key","input/on-enter-key",312812529),new cljs.core.Keyword("input","on-escape-key","input/on-escape-key",172413755),new cljs.core.Keyword("input","on-change","input/on-change",-1503460079)], null)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"dispatchers","dispatchers",1387968599),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("input","on-enter-key","input/on-enter-key",312812529),new cljs.core.Keyword("input","on-escape-key","input/on-escape-key",172413755),new cljs.core.Keyword("input","on-change","input/on-change",-1503460079)], null)),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_,null,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),null,null,null));
/**
 * Handler function for :form-field/init event. The event should be dispatched with
 *   two additional arguments: the path to the component, and the default value, if any.
 */
woolybear.ad.forms.handle_form_field_init = (function woolybear$ad$forms$handle_form_field_init(db,p__73056){
var vec__73057 = p__73056;
var seq__73058 = cljs.core.seq(vec__73057);
var first__73059 = cljs.core.first(seq__73058);
var seq__73058__$1 = cljs.core.next(seq__73058);
var _ = first__73059;
var first__73059__$1 = cljs.core.first(seq__73058__$1);
var seq__73058__$2 = cljs.core.next(seq__73058__$1);
var path = first__73059__$1;
var vec__73060 = seq__73058__$2;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73060,(0),null);
return cljs.core.assoc_in(db,path,woolybear.ad.forms.mk_field_data.cljs$core$IFn$_invoke$arity$2(path,default$));
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("form-field","init","form-field/init",-581366549),woolybear.ad.forms.handle_form_field_init);
/**
 * Handler function for :form-field/focus event. Updates the :visited? and :active?
 *   keys in the field data map. Takes the path to the component to update.
 */
woolybear.ad.forms.handle_form_field_focus = (function woolybear$ad$forms$handle_form_field_focus(db,p__73063){
var vec__73064 = p__73063;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73064,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73064,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$variadic(db,path,cljs.core.assoc,new cljs.core.Keyword(null,"visited?","visited?",1255772609),true,new cljs.core.Keyword(null,"active?","active?",459499776),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0));
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("form-field","focus","form-field/focus",-1008335014),woolybear.ad.forms.handle_form_field_focus);
/**
 * Handler function for the :form-field/blur event. Updates the :active? key in the
 *   field data map. Takes the path to the component to update.
 */
woolybear.ad.forms.handle_form_field_blur = (function woolybear$ad$forms$handle_form_field_blur(db,p__73067){
var vec__73068 = p__73067;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73068,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73068,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$variadic(db,path,cljs.core.assoc,new cljs.core.Keyword(null,"active?","active?",459499776),false,new cljs.core.Keyword(null,"visited?","visited?",1255772609),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0));
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("form-field","blur","form-field/blur",653591812),woolybear.ad.forms.handle_form_field_blur);
/**
 * Handler function for the :form-field/change event. Updates the :value key in the
 *   field data map. Takes the path to the component to update, and the new value for
 *   the field.
 */
woolybear.ad.forms.handle_form_field_change = (function woolybear$ad$forms$handle_form_field_change(db,p__73071){
var vec__73072 = p__73071;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73072,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73072,(1),null);
var new_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73072,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(db,path,cljs.core.assoc,new cljs.core.Keyword(null,"value","value",305978217),new_val);
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("form-field","change","form-field/change",1888513737),woolybear.ad.forms.handle_form_field_change);
/**
 * Handler function for the :multi-select/change event. Updates the :value key in
 *   the field data map, allowing for multiple selections. Takes the path to the component
 *   to update, and the new value to toggle in or out of the set of selected options.
 */
woolybear.ad.forms.handle_multi_select_change = (function woolybear$ad$forms$handle_multi_select_change(db,p__73075){
var vec__73076 = p__73075;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73076,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73076,(1),null);
var change_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73076,(2),null);
if(cljs.core.seq(change_val)){
var current_selection = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,path)));
var new_selection = (cljs.core.truth_((current_selection.cljs$core$IFn$_invoke$arity$1 ? current_selection.cljs$core$IFn$_invoke$arity$1(change_val) : current_selection.call(null,change_val)))?cljs.core.disj.cljs$core$IFn$_invoke$arity$2(current_selection,change_val):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_selection,change_val));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(db,path,cljs.core.assoc,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,new_selection));
} else {
return db;
}
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("multi-select","change","multi-select/change",-105444950),woolybear.ad.forms.handle_multi_select_change);
/**
 * Handler function for the :checkbox/change event. Toggles the boolean value
 *   of the :value key in the component data.
 */
woolybear.ad.forms.handle_checkbox_change = (function woolybear$ad$forms$handle_checkbox_change(db,p__73079){
var vec__73080 = p__73079;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73080,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73080,(1),null);
var value_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"value","value",305978217));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,value_path,cljs.core.not);
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("checkbox","change","checkbox/change",1373006811),woolybear.ad.forms.handle_checkbox_change);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("error","msg","error/msg",-1549923468),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("error","class","error/class",-1934234468),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"warning","warning",-1685650671),"null",new cljs.core.Keyword(null,"info","info",-317069002),"null",new cljs.core.Keyword(null,"error","error",-978969032),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"info","info",-317069002),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("form-field","error","form-field/error",2129198917),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","msg","error/msg",-1549923468)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","class","error/class",-1934234468)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","msg","error/msg",-1549923468)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","class","error/class",-1934234468)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__73083){
return cljs.core.map_QMARK_(G__73083);
}),(function (G__73083){
return cljs.core.contains_QMARK_(G__73083,new cljs.core.Keyword(null,"msg","msg",-1386103444));
})], null),(function (G__73083){
return ((cljs.core.map_QMARK_(G__73083)) && (cljs.core.contains_QMARK_(G__73083,new cljs.core.Keyword(null,"msg","msg",-1386103444))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","msg","error/msg",-1549923468)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"msg","msg",-1386103444)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","class","error/class",-1934234468)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"msg","msg",-1386103444)))], null),null])));
/**
 * 
 *   Given a list of validation errors, in the form of maps with :msg and :class keys,
 *   display a suitably-formatted list of error messages.
 *   
 */
woolybear.ad.forms.errors_list = (function woolybear$ad$forms$errors_list(errors){
if(cljs.core.seq(errors)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.wb-errors","div.wb-errors",1121129490)], null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (err){
var classes = woolybear.ad.utils.css__GT_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"wb-error","wb-error",-2127037072),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(err)], 0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),classes], null),new cljs.core.Keyword(null,"msg","msg",-1386103444).cljs$core$IFn$_invoke$arity$1(err)], null);
}),errors));
} else {
return null;
}
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("woolybear.ad.forms","errors-list","woolybear.ad.forms/errors-list",-465428445,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("form-field","error","form-field/error",2129198917))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("form-field","error","form-field/error",2129198917))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("form-field","error","form-field/error",2129198917),new cljs.core.Keyword("form-field","error","form-field/error",2129198917),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__73084){
return cljs.core.coll_QMARK_(G__73084);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("form-field","error","form-field/error",2129198917))], null),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("form-field","error","form-field/error",2129198917))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("form-field","error","form-field/error",2129198917))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_,null,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),null,null,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("input","id","input/id",-1287388534),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("input","name","input/name",1609508871),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("input","type","input/type",1543186790),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"password","password",417022471),"null",new cljs.core.Keyword(null,"text","text",-1790561697),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"password","password",417022471),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("input","default","input/default",-1887398606),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("input","placeholder","input/placeholder",-1010562193),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("input","subscribe-to-disabled?","input/subscribe-to-disabled?",-1742410907),new cljs.core.Keyword("ad","subscription","ad/subscription",1949020411),new cljs.core.Keyword("ad","subscription","ad/subscription",1949020411));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("input","subscribe-to-errors","input/subscribe-to-errors",275750475),new cljs.core.Keyword("ad","subscription","ad/subscription",1949020411),new cljs.core.Keyword("ad","subscription","ad/subscription",1949020411));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("input","on-change","input/on-change",-1503460079),new cljs.core.Keyword("ad","event-dispatcher","ad/event-dispatcher",1643883990),new cljs.core.Keyword("ad","event-dispatcher","ad/event-dispatcher",1643883990));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("input","on-enter-key","input/on-enter-key",312812529),new cljs.core.Keyword("ad","event-dispatcher","ad/event-dispatcher",1643883990),new cljs.core.Keyword("ad","event-dispatcher","ad/event-dispatcher",1643883990));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("input","on-escape-key","input/on-escape-key",172413755),new cljs.core.Keyword("ad","event-dispatcher","ad/event-dispatcher",1643883990),new cljs.core.Keyword("ad","event-dispatcher","ad/event-dispatcher",1643883990));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("input","autofocus?","input/autofocus?",1464810361),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("input","component-data-path","input/component-data-path",3812157),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.keyword_QMARK_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__73085){
return cljs.core.vector_QMARK_(G__73085);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("input","options","input/options",469009719),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","subscribe-to-component-data","ad/subscribe-to-component-data",1210013749),new cljs.core.Keyword("input","component-data-path","input/component-data-path",3812157)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("input","id","input/id",-1287388534),new cljs.core.Keyword("input","name","input/name",1609508871),new cljs.core.Keyword("input","type","input/type",1543186790),new cljs.core.Keyword("input","default","input/default",-1887398606),new cljs.core.Keyword("input","subscribe-to-disabled?","input/subscribe-to-disabled?",-1742410907),new cljs.core.Keyword("input","placeholder","input/placeholder",-1010562193),new cljs.core.Keyword("input","subscribe-to-errors","input/subscribe-to-errors",275750475),new cljs.core.Keyword("input","on-change","input/on-change",-1503460079),new cljs.core.Keyword("input","on-enter-key","input/on-enter-key",312812529),new cljs.core.Keyword("input","on-escape-key","input/on-escape-key",172413755),new cljs.core.Keyword("input","autofocus?","input/autofocus?",1464810361),new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","subscribe-to-component-data","ad/subscribe-to-component-data",1210013749),new cljs.core.Keyword("input","component-data-path","input/component-data-path",3812157)], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("input","id","input/id",-1287388534),new cljs.core.Keyword("input","name","input/name",1609508871),new cljs.core.Keyword("input","type","input/type",1543186790),new cljs.core.Keyword("input","default","input/default",-1887398606),new cljs.core.Keyword("input","subscribe-to-disabled?","input/subscribe-to-disabled?",-1742410907),new cljs.core.Keyword("input","placeholder","input/placeholder",-1010562193),new cljs.core.Keyword("input","subscribe-to-errors","input/subscribe-to-errors",275750475),new cljs.core.Keyword("input","on-change","input/on-change",-1503460079),new cljs.core.Keyword("input","on-enter-key","input/on-enter-key",312812529),new cljs.core.Keyword("input","on-escape-key","input/on-escape-key",172413755),new cljs.core.Keyword("input","autofocus?","input/autofocus?",1464810361),new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__73086){
return cljs.core.map_QMARK_(G__73086);
}),(function (G__73086){
return cljs.core.contains_QMARK_(G__73086,new cljs.core.Keyword(null,"subscribe-to-component-data","subscribe-to-component-data",1209998418));
}),(function (G__73086){
return cljs.core.contains_QMARK_(G__73086,new cljs.core.Keyword(null,"component-data-path","component-data-path",171824011));
})], null),(function (G__73086){
return ((cljs.core.map_QMARK_(G__73086)) && (((cljs.core.contains_QMARK_(G__73086,new cljs.core.Keyword(null,"subscribe-to-component-data","subscribe-to-component-data",1209998418))) && (cljs.core.contains_QMARK_(G__73086,new cljs.core.Keyword(null,"component-data-path","component-data-path",171824011))))));
}),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"subscribe-to-disabled?","subscribe-to-disabled?",-1843297485),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"subscribe-to-errors","subscribe-to-errors",-365210095),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"on-enter-key","on-enter-key",214547631),new cljs.core.Keyword(null,"on-escape-key","on-escape-key",72099853),new cljs.core.Keyword(null,"autofocus?","autofocus?",1363866447),new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843),new cljs.core.Keyword(null,"subscribe-to-classes","subscribe-to-classes",173193596)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ad","subscribe-to-component-data","ad/subscribe-to-component-data",1210013749),new cljs.core.Keyword("input","component-data-path","input/component-data-path",3812157)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subscribe-to-component-data","subscribe-to-component-data",1209998418),new cljs.core.Keyword(null,"component-data-path","component-data-path",171824011)], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("input","id","input/id",-1287388534),new cljs.core.Keyword("input","name","input/name",1609508871),new cljs.core.Keyword("input","type","input/type",1543186790),new cljs.core.Keyword("input","default","input/default",-1887398606),new cljs.core.Keyword("input","subscribe-to-disabled?","input/subscribe-to-disabled?",-1742410907),new cljs.core.Keyword("input","placeholder","input/placeholder",-1010562193),new cljs.core.Keyword("input","subscribe-to-errors","input/subscribe-to-errors",275750475),new cljs.core.Keyword("input","on-change","input/on-change",-1503460079),new cljs.core.Keyword("input","on-enter-key","input/on-enter-key",312812529),new cljs.core.Keyword("input","on-escape-key","input/on-escape-key",172413755),new cljs.core.Keyword("input","autofocus?","input/autofocus?",1464810361),new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"subscribe-to-component-data","subscribe-to-component-data",1209998418))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"component-data-path","component-data-path",171824011)))], null),null])));
/**
 * Utility function just to keep text-input from getting too big. Builds the component
 *   attributes map given the options.
 */
woolybear.ad.forms.get_text_input_attribs = (function woolybear$ad$forms$get_text_input_attribs(opts){
var map__73087 = opts;
var map__73087__$1 = cljs.core.__destructure_map(map__73087);
var component_data_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73087__$1,new cljs.core.Keyword(null,"component-data-path","component-data-path",171824011));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73087__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73087__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73087__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73087__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var autofocus_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73087__$1,new cljs.core.Keyword(null,"autofocus?","autofocus?",1363866447));
var type__$1 = (function (){var or__4253__auto__ = type;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"text","text",-1790561697);
}
})();
var dispatchers = woolybear.ad.forms.mk_dispatchers.cljs$core$IFn$_invoke$arity$2(component_data_path,opts);
var G__73088 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dispatchers,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),type__$1], null)], 0));
var G__73088__$1 = (cljs.core.truth_(id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__73088,new cljs.core.Keyword(null,"id","id",-1388402092),id):G__73088);
var G__73088__$2 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__73088__$1,new cljs.core.Keyword(null,"name","name",1843675177),name):G__73088__$1);
var G__73088__$3 = (cljs.core.truth_(placeholder)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__73088__$2,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder):G__73088__$2);
if(cljs.core.truth_(autofocus_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__73088__$3,new cljs.core.Keyword(null,"autofocus","autofocus",-712814732),autofocus_QMARK_);
} else {
return G__73088__$3;
}
});
/**
 * 
 *   Text-input field component. Includes built-in functionality for updating its
 *   its field data in response to user interaction. Takes a single `opts` argument,
 *   which should be a map of option keys and values. Accepts the standard extra-classes
 *   and subscribe-to-classes options, as well as the following options:
 * 
 *  * :id  A string to be used as the DOM ID for this field
 *  * :name The `name` attribute for this field
 *  * :type Either :text or :password, default :text
 *  * :default Default value for the field.
 *  * :subscribe-to-disabled? Subscription to a boolean value that returns true if the field should be disabled.
 *  * :placeholder A placeholder string to display in the field when empty
 *  * :subscribe-to-errors A validation subscription returning any error messages to display below the field.
 *  * :on-change An event dispatcher to dispatch when the user changes the value of the input
 *               Note that the text-input automatically updates app-db when the value changes; the on-change
 *               dispatcher here is for any *additional* events you wish to fire when the value changes.
 *  * :on-enter-key An event dispatcher to dispatch when the user hits Enter in this field
 *  * :on-escape-key An event dispatcher to dispatch when the user hits Escape in this field
 *  * :autofocus? If present, and true, sets the `autofocus` attribute on this field
 *  * :component-data-path Path to field data in app-db
 * 
 *   Text inputs have two required options: :component-data-path and :subscribe-to-component-data.
 *   The :component-data-path must be a vector of keywords, suitable for use with assoc-in and update-in,
 *   defining where the component data for this field lives in the app-db. The subscribe-to-component-data
 *   option must be a subscription returning this data.
 *   
 */
woolybear.ad.forms.text_input = (function woolybear$ad$forms$text_input(opts){
var map__73089 = opts;
var map__73089__$1 = cljs.core.__destructure_map(map__73089);
var subscribe_to_component_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73089__$1,new cljs.core.Keyword(null,"subscribe-to-component-data","subscribe-to-component-data",1209998418));
var component_data_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73089__$1,new cljs.core.Keyword(null,"component-data-path","component-data-path",171824011));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73089__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var subscribe_to_disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73089__$1,new cljs.core.Keyword(null,"subscribe-to-disabled?","subscribe-to-disabled?",-1843297485));
var subscribe_to_errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73089__$1,new cljs.core.Keyword(null,"subscribe-to-errors","subscribe-to-errors",-365210095));
var extra_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73089__$1,new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843));
var subscribe_to_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73089__$1,new cljs.core.Keyword(null,"subscribe-to-classes","subscribe-to-classes",173193596));
var component_data_sub = woolybear.ad.utils.subscribe_to(subscribe_to_component_data);
var disabled_QMARK__sub = woolybear.ad.utils.subscribe_to(subscribe_to_disabled_QMARK_);
var errors_sub = woolybear.ad.utils.subscribe_to(subscribe_to_errors);
var classes_sub = woolybear.ad.utils.subscribe_to(subscribe_to_classes);
var attribs = woolybear.ad.forms.get_text_input_attribs(opts);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("form-field","init","form-field/init",-581366549),component_data_path,default$], null));

return (function (_){
var map__73090 = cljs.core.deref(component_data_sub);
var map__73090__$1 = cljs.core.__destructure_map(map__73090);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73090__$1,new cljs.core.Keyword(null,"value","value",305978217));
var dynamic_classes = cljs.core.deref(classes_sub);
var disabled_QMARK_ = cljs.core.deref(disabled_QMARK__sub);
var errors = cljs.core.deref(errors_sub);
var attribs__$1 = (function (){var G__73091 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(attribs,new cljs.core.Keyword(null,"class","class",-2030961996),woolybear.ad.utils.css__GT_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"wb-text-input","wb-text-input",813980666),extra_classes,dynamic_classes], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"value","value",305978217),value], 0));
if(cljs.core.truth_(disabled_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__73091,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),"disabled");
} else {
return G__73091;
}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control","div.control",1957951243),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),attribs__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.forms.errors_list,errors], null)], null);
});
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("woolybear.ad.forms","text-input","woolybear.ad.forms/text-input",-1306235738,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword("input","options","input/options",469009719)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword("input","options","input/options",469009719)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("input","options","input/options",469009719)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("input","options","input/options",469009719)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword("input","options","input/options",469009719)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_,null,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),null,null,null));
/**
 * 
 *   A component to group together an input field and a label. Accepts standard :extra-classes and
 *   :subscribe-to-classes options.
 *   
 */
woolybear.ad.forms.field_group = (function woolybear$ad$forms$field_group(var_args){
var args__4870__auto__ = [];
var len__4864__auto___73165 = arguments.length;
var i__4865__auto___73166 = (0);
while(true){
if((i__4865__auto___73166 < len__4864__auto___73165)){
args__4870__auto__.push((arguments[i__4865__auto___73166]));

var G__73167 = (i__4865__auto___73166 + (1));
i__4865__auto___73166 = G__73167;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return woolybear.ad.forms.field_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(woolybear.ad.forms.field_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__73093 = woolybear.ad.utils.extract_args(args);
var map__73096 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73093,(0),null);
var map__73096__$1 = cljs.core.__destructure_map(map__73096);
var extra_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73096__$1,new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843));
var subscribe_to_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73096__$1,new cljs.core.Keyword(null,"subscribe-to-classes","subscribe-to-classes",173193596));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73093,(1),null);
var classes_sub = woolybear.ad.utils.subscribe_to(subscribe_to_classes);
return (function() { 
var G__73168__delegate = function (args__$1){
var vec__73097 = woolybear.ad.utils.extract_args(args__$1);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73097,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73097,(1),null);
var dynamic_classes = cljs.core.deref(classes_sub);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),woolybear.ad.utils.css__GT_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"wb-field-group","wb-field-group",-1208826879),extra_classes,dynamic_classes], 0))], null)], null),children);
};
var G__73168 = function (var_args){
var args__$1 = null;
if (arguments.length > 0) {
var G__73169__i = 0, G__73169__a = new Array(arguments.length -  0);
while (G__73169__i < G__73169__a.length) {G__73169__a[G__73169__i] = arguments[G__73169__i + 0]; ++G__73169__i;}
  args__$1 = new cljs.core.IndexedSeq(G__73169__a,0,null);
} 
return G__73168__delegate.call(this,args__$1);};
G__73168.cljs$lang$maxFixedArity = 0;
G__73168.cljs$lang$applyTo = (function (arglist__73170){
var args__$1 = cljs.core.seq(arglist__73170);
return G__73168__delegate(args__$1);
});
G__73168.cljs$core$IFn$_invoke$arity$variadic = G__73168__delegate;
return G__73168;
})()
;
}));

(woolybear.ad.forms.field_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(woolybear.ad.forms.field_group.cljs$lang$applyTo = (function (seq73092){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq73092));
}));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("woolybear.ad.forms","field-group","woolybear.ad.forms/field-group",250449627,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword("label","options","label/options",466672077),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword("label","options","label/options",466672077),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"children","children",-940561982)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("label","options","label/options",466672077),cljs.spec.alpha.rep_PLUS_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("label","options","label/options",466672077),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword("label","options","label/options",466672077),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_,null,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),null,null,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("select","subscribe-to-option-items","select/subscribe-to-option-items",1746231442),new cljs.core.Keyword("ad","subscription","ad/subscription",1949020411),new cljs.core.Keyword("ad","subscription","ad/subscription",1949020411));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("select","none-value","select/none-value",640920874),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("select","multiple?","select/multiple?",-657787511),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("select","size","select/size",394028171),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),cljs.core.int_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("select","get-label-fn","select/get-label-fn",-1168793689),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("select","get-value-fn","select/get-value-fn",1454281625),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("select","options","select/options",1341173733),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("select","subscribe-to-option-items","select/subscribe-to-option-items",1746231442),new cljs.core.Keyword("ad","subscribe-to-component-data","ad/subscribe-to-component-data",1210013749),new cljs.core.Keyword("input","component-data-path","input/component-data-path",3812157)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("input","id","input/id",-1287388534),new cljs.core.Keyword("input","name","input/name",1609508871),new cljs.core.Keyword("input","default","input/default",-1887398606),new cljs.core.Keyword("input","autofocus?","input/autofocus?",1464810361),new cljs.core.Keyword("input","subscribe-to-disabled?","input/subscribe-to-disabled?",-1742410907),new cljs.core.Keyword("input","subscribe-to-errors","input/subscribe-to-errors",275750475),new cljs.core.Keyword("input","on-change","input/on-change",-1503460079),new cljs.core.Keyword("input","on-enter-key","input/on-enter-key",312812529),new cljs.core.Keyword("input","on-escape-key","input/on-escape-key",172413755),new cljs.core.Keyword("select","none-value","select/none-value",640920874),new cljs.core.Keyword("select","multiple?","select/multiple?",-657787511),new cljs.core.Keyword("select","size","select/size",394028171),new cljs.core.Keyword("select","get-label-fn","select/get-label-fn",-1168793689),new cljs.core.Keyword("select","get-value-fn","select/get-value-fn",1454281625),new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("select","subscribe-to-option-items","select/subscribe-to-option-items",1746231442),new cljs.core.Keyword("ad","subscribe-to-component-data","ad/subscribe-to-component-data",1210013749),new cljs.core.Keyword("input","component-data-path","input/component-data-path",3812157)], null),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("input","id","input/id",-1287388534),new cljs.core.Keyword("input","name","input/name",1609508871),new cljs.core.Keyword("input","default","input/default",-1887398606),new cljs.core.Keyword("input","autofocus?","input/autofocus?",1464810361),new cljs.core.Keyword("input","subscribe-to-disabled?","input/subscribe-to-disabled?",-1742410907),new cljs.core.Keyword("input","subscribe-to-errors","input/subscribe-to-errors",275750475),new cljs.core.Keyword("input","on-change","input/on-change",-1503460079),new cljs.core.Keyword("input","on-enter-key","input/on-enter-key",312812529),new cljs.core.Keyword("input","on-escape-key","input/on-escape-key",172413755),new cljs.core.Keyword("select","none-value","select/none-value",640920874),new cljs.core.Keyword("select","multiple?","select/multiple?",-657787511),new cljs.core.Keyword("select","size","select/size",394028171),new cljs.core.Keyword("select","get-label-fn","select/get-label-fn",-1168793689),new cljs.core.Keyword("select","get-value-fn","select/get-value-fn",1454281625),new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null),null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__73100){
return cljs.core.map_QMARK_(G__73100);
}),(function (G__73100){
return cljs.core.contains_QMARK_(G__73100,new cljs.core.Keyword(null,"subscribe-to-option-items","subscribe-to-option-items",1578380694));
}),(function (G__73100){
return cljs.core.contains_QMARK_(G__73100,new cljs.core.Keyword(null,"subscribe-to-component-data","subscribe-to-component-data",1209998418));
}),(function (G__73100){
return cljs.core.contains_QMARK_(G__73100,new cljs.core.Keyword(null,"component-data-path","component-data-path",171824011));
})], null),(function (G__73100){
return ((cljs.core.map_QMARK_(G__73100)) && (((cljs.core.contains_QMARK_(G__73100,new cljs.core.Keyword(null,"subscribe-to-option-items","subscribe-to-option-items",1578380694))) && (((cljs.core.contains_QMARK_(G__73100,new cljs.core.Keyword(null,"subscribe-to-component-data","subscribe-to-component-data",1209998418))) && (cljs.core.contains_QMARK_(G__73100,new cljs.core.Keyword(null,"component-data-path","component-data-path",171824011))))))));
}),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"autofocus?","autofocus?",1363866447),new cljs.core.Keyword(null,"subscribe-to-disabled?","subscribe-to-disabled?",-1843297485),new cljs.core.Keyword(null,"subscribe-to-errors","subscribe-to-errors",-365210095),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"on-enter-key","on-enter-key",214547631),new cljs.core.Keyword(null,"on-escape-key","on-escape-key",72099853),new cljs.core.Keyword(null,"none-value","none-value",-332079050),new cljs.core.Keyword(null,"multiple?","multiple?",-490002283),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"get-label-fn","get-label-fn",1951828635),new cljs.core.Keyword(null,"get-value-fn","get-value-fn",11487397),new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843),new cljs.core.Keyword(null,"subscribe-to-classes","subscribe-to-classes",173193596)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("select","subscribe-to-option-items","select/subscribe-to-option-items",1746231442),new cljs.core.Keyword("ad","subscribe-to-component-data","ad/subscribe-to-component-data",1210013749),new cljs.core.Keyword("input","component-data-path","input/component-data-path",3812157)], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subscribe-to-option-items","subscribe-to-option-items",1578380694),new cljs.core.Keyword(null,"subscribe-to-component-data","subscribe-to-component-data",1209998418),new cljs.core.Keyword(null,"component-data-path","component-data-path",171824011)], null),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("input","id","input/id",-1287388534),new cljs.core.Keyword("input","name","input/name",1609508871),new cljs.core.Keyword("input","default","input/default",-1887398606),new cljs.core.Keyword("input","autofocus?","input/autofocus?",1464810361),new cljs.core.Keyword("input","subscribe-to-disabled?","input/subscribe-to-disabled?",-1742410907),new cljs.core.Keyword("input","subscribe-to-errors","input/subscribe-to-errors",275750475),new cljs.core.Keyword("input","on-change","input/on-change",-1503460079),new cljs.core.Keyword("input","on-enter-key","input/on-enter-key",312812529),new cljs.core.Keyword("input","on-escape-key","input/on-escape-key",172413755),new cljs.core.Keyword("select","none-value","select/none-value",640920874),new cljs.core.Keyword("select","multiple?","select/multiple?",-657787511),new cljs.core.Keyword("select","size","select/size",394028171),new cljs.core.Keyword("select","get-label-fn","select/get-label-fn",-1168793689),new cljs.core.Keyword("select","get-value-fn","select/get-value-fn",1454281625),new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"subscribe-to-option-items","subscribe-to-option-items",1578380694))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"subscribe-to-component-data","subscribe-to-component-data",1209998418))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"component-data-path","component-data-path",171824011)))], null),null])));
woolybear.ad.forms.get_select_input_attribs = (function woolybear$ad$forms$get_select_input_attribs(opts){
var map__73101 = opts;
var map__73101__$1 = cljs.core.__destructure_map(map__73101);
var component_data_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73101__$1,new cljs.core.Keyword(null,"component-data-path","component-data-path",171824011));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73101__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73101__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var autofocus_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73101__$1,new cljs.core.Keyword(null,"autofocus?","autofocus?",1363866447));
var multiple_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73101__$1,new cljs.core.Keyword(null,"multiple?","multiple?",-490002283));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73101__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var dispatchers = (cljs.core.truth_(multiple_QMARK_)?woolybear.ad.forms.mk_dispatchers.cljs$core$IFn$_invoke$arity$3(component_data_path,opts,new cljs.core.Keyword("multi-select","change","multi-select/change",-105444950)):woolybear.ad.forms.mk_dispatchers.cljs$core$IFn$_invoke$arity$2(component_data_path,opts));
var G__73102 = dispatchers;
var G__73102__$1 = (cljs.core.truth_(id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__73102,new cljs.core.Keyword(null,"id","id",-1388402092),id):G__73102);
var G__73102__$2 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__73102__$1,new cljs.core.Keyword(null,"name","name",1843675177),name):G__73102__$1);
var G__73102__$3 = (cljs.core.truth_(autofocus_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__73102__$2,new cljs.core.Keyword(null,"autofocus","autofocus",-712814732),autofocus_QMARK_):G__73102__$2);
var G__73102__$4 = (cljs.core.truth_(multiple_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__73102__$3,new cljs.core.Keyword(null,"multiple","multiple",1244445549),true):G__73102__$3);
if(cljs.core.truth_(size)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__73102__$4,new cljs.core.Keyword(null,"size","size",1098693007),size);
} else {
return G__73102__$4;
}
});
/**
 * 
 *   A drop-down/select-menu component for use in forms. Options to display in the select input are
 *   passed in via the :subscribe-to-option-items key in the opts argument. If you wish to specify a
 *   "none" selection to display at the top of the select list, pass it in via the :none-value key.
 *   As a self-referential input component, select input requires the component-data-path option and
 *   the subscribe-to-component-data subscription, as with the text-input component. The value of the
 *   :component-data-path must be a vector of keywords, suitable for use with assoc-in and update-in,
 *   defining where the component data for this field lives in the app-db. The subscribe-to-component-data
 *   option must be a subscription returning this data.
 * 
 *   The select-input component supports the standard :extra-classes and :subscribe-to-classes options,
 *   as well as the following:
 * 
 *  * :id The DOM ID for this element (e.g. for use with [label] components)
 *  * :name The form field name attribute for this component
 *  * :default A default value for the select
 *  * :autofocus? If present and true, sets the "autofocus" attribute
 *  * :subscribe-to-disabled? Subscription returning true if this component should be disabled
 *  * :multiple? If present and true, enables multiple selections (e.g. checklist)
 *  * :size If present, sets the "size" attribute on the select element
 *  * :on-change An event dispatcher to dispatch when the user changes the value of the input
 *               Note that select-input automatically updates app-db when the value changes; the
 *               on-change handler is for any *additional* events you wish to fire when the value changes.
 *  * :on-enter-key An event dispatcher to dispatch when the user hits Enter in this field
 *  * :on-escape-key An event dispatcher to dispatch when the user hits Escape in this field
 *  * :get-label-fn (See below)
 *  * :get-value-fn (See below)
 * 
 *   The option-items list returned by :subscribe-to-option-items can be in any format as long as you
 *   provide values for the keys :get-label-fn and/or get-value-fn. For each item in the option-items
 *   list, a label will be generated by calling the get-label-fn with the option item as an argument.
 *   Default action is to use the value of the :label key in the option item if there is one, or to
 *   use the entire option item, in string form. The default value is to return the entire option item.
 *   
 */
woolybear.ad.forms.select_input = (function woolybear$ad$forms$select_input(opts){
var map__73103 = opts;
var map__73103__$1 = cljs.core.__destructure_map(map__73103);
var get_label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73103__$1,new cljs.core.Keyword(null,"get-label-fn","get-label-fn",1951828635));
var subscribe_to_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73103__$1,new cljs.core.Keyword(null,"subscribe-to-classes","subscribe-to-classes",173193596));
var extra_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73103__$1,new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843));
var get_value_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73103__$1,new cljs.core.Keyword(null,"get-value-fn","get-value-fn",11487397));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73103__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var component_data_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73103__$1,new cljs.core.Keyword(null,"component-data-path","component-data-path",171824011));
var subscribe_to_errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73103__$1,new cljs.core.Keyword(null,"subscribe-to-errors","subscribe-to-errors",-365210095));
var subscribe_to_component_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73103__$1,new cljs.core.Keyword(null,"subscribe-to-component-data","subscribe-to-component-data",1209998418));
var subscribe_to_disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73103__$1,new cljs.core.Keyword(null,"subscribe-to-disabled?","subscribe-to-disabled?",-1843297485));
var multiple_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73103__$1,new cljs.core.Keyword(null,"multiple?","multiple?",-490002283));
var none_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73103__$1,new cljs.core.Keyword(null,"none-value","none-value",-332079050));
var subscribe_to_option_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73103__$1,new cljs.core.Keyword(null,"subscribe-to-option-items","subscribe-to-option-items",1578380694));
var classes_sub = woolybear.ad.utils.subscribe_to(subscribe_to_classes);
var option_items_sub = woolybear.ad.utils.subscribe_to(subscribe_to_option_items);
var disabled_QMARK__sub = woolybear.ad.utils.subscribe_to(subscribe_to_disabled_QMARK_);
var component_data_sub = woolybear.ad.utils.subscribe_to(subscribe_to_component_data);
var errors_sub = woolybear.ad.utils.subscribe_to(subscribe_to_errors);
var default$__$1 = (function (){var or__4253__auto__ = default$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.truth_(multiple_QMARK_)){
return cljs.core.PersistentVector.EMPTY;
} else {
return "";
}
}
})();
var get_label_fn__$1 = ((cljs.core.fn_QMARK_(get_label_fn))?get_label_fn:(function (item){
var or__4253__auto__ = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(item);
}
}));
var get_value_fn__$1 = ((cljs.core.fn_QMARK_(get_value_fn))?get_value_fn:cljs.core.str);
var attribs = woolybear.ad.forms.get_select_input_attribs(opts);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("form-field","init","form-field/init",-581366549),component_data_path,default$__$1], null));

return (function (_){
var map__73104 = cljs.core.deref(component_data_sub);
var map__73104__$1 = cljs.core.__destructure_map(map__73104);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73104__$1,new cljs.core.Keyword(null,"value","value",305978217));
var value__$1 = (function (){var or__4253__auto__ = value;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.truth_(multiple_QMARK_)){
return cljs.core.PersistentVector.EMPTY;
} else {
return "";
}
}
})();
var dynamic_classes = cljs.core.deref(classes_sub);
var option_items = cljs.core.deref(option_items_sub);
var disabled_QMARK_ = cljs.core.deref(disabled_QMARK__sub);
var errors = cljs.core.deref(errors_sub);
var children = (cljs.core.truth_(none_value)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),""], null),none_value], null)], null):cljs.core.PersistentVector.EMPTY);
var children__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(children,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(get_value_fn__$1.cljs$core$IFn$_invoke$arity$1 ? get_value_fn__$1.cljs$core$IFn$_invoke$arity$1(item) : get_value_fn__$1.call(null,item))], null),(get_label_fn__$1.cljs$core$IFn$_invoke$arity$1 ? get_label_fn__$1.cljs$core$IFn$_invoke$arity$1(item) : get_label_fn__$1.call(null,item))], null);
}),option_items));
var attribs__$1 = (function (){var G__73105 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(attribs,new cljs.core.Keyword(null,"class","class",-2030961996),woolybear.ad.utils.css__GT_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"wb-select","wb-select",1607580891),(cljs.core.truth_(multiple_QMARK_)?new cljs.core.Keyword(null,"is-multiple","is-multiple",850426321):null),extra_classes,dynamic_classes], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"value","value",305978217),value__$1], 0));
if(cljs.core.truth_(disabled_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__73105,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),"disabled");
} else {
return G__73105;
}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control","div.control",1957951243),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.select","div.select",1512138448),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),woolybear.ad.utils.css__GT_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(multiple_QMARK_)?new cljs.core.Keyword(null,"is-multiple","is-multiple",850426321):null)], 0))], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),attribs__$1], null),children__$1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.forms.errors_list,errors], null)], null);
});
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("woolybear.ad.forms","select-input","woolybear.ad.forms/select-input",232088301,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword("select","options","select/options",1341173733)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword("select","options","select/options",1341173733)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("select","options","select/options",1341173733)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("select","options","select/options",1341173733)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword("select","options","select/options",1341173733)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_,null,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),null,null,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("checkbox","options","checkbox/options",1632979230),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("input","component-data-path","input/component-data-path",3812157),new cljs.core.Keyword("ad","subscribe-to-component-data","ad/subscribe-to-component-data",1210013749)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("input","default","input/default",-1887398606),new cljs.core.Keyword("input","id","input/id",-1287388534),new cljs.core.Keyword("input","name","input/name",1609508871),new cljs.core.Keyword("input","on-change","input/on-change",-1503460079),new cljs.core.Keyword("input","subscribe-to-disabled?","input/subscribe-to-disabled?",-1742410907),new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("input","component-data-path","input/component-data-path",3812157),new cljs.core.Keyword("ad","subscribe-to-component-data","ad/subscribe-to-component-data",1210013749)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("input","default","input/default",-1887398606),new cljs.core.Keyword("input","id","input/id",-1287388534),new cljs.core.Keyword("input","name","input/name",1609508871),new cljs.core.Keyword("input","on-change","input/on-change",-1503460079),new cljs.core.Keyword("input","subscribe-to-disabled?","input/subscribe-to-disabled?",-1742410907),new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__73106){
return cljs.core.map_QMARK_(G__73106);
}),(function (G__73106){
return cljs.core.contains_QMARK_(G__73106,new cljs.core.Keyword(null,"component-data-path","component-data-path",171824011));
}),(function (G__73106){
return cljs.core.contains_QMARK_(G__73106,new cljs.core.Keyword(null,"subscribe-to-component-data","subscribe-to-component-data",1209998418));
})], null),(function (G__73106){
return ((cljs.core.map_QMARK_(G__73106)) && (((cljs.core.contains_QMARK_(G__73106,new cljs.core.Keyword(null,"component-data-path","component-data-path",171824011))) && (cljs.core.contains_QMARK_(G__73106,new cljs.core.Keyword(null,"subscribe-to-component-data","subscribe-to-component-data",1209998418))))));
}),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"subscribe-to-disabled?","subscribe-to-disabled?",-1843297485),new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843),new cljs.core.Keyword(null,"subscribe-to-classes","subscribe-to-classes",173193596)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("input","component-data-path","input/component-data-path",3812157),new cljs.core.Keyword("ad","subscribe-to-component-data","ad/subscribe-to-component-data",1210013749)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-data-path","component-data-path",171824011),new cljs.core.Keyword(null,"subscribe-to-component-data","subscribe-to-component-data",1209998418)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("input","default","input/default",-1887398606),new cljs.core.Keyword("input","id","input/id",-1287388534),new cljs.core.Keyword("input","name","input/name",1609508871),new cljs.core.Keyword("input","on-change","input/on-change",-1503460079),new cljs.core.Keyword("input","subscribe-to-disabled?","input/subscribe-to-disabled?",-1742410907),new cljs.core.Keyword("ad","extra-classes","ad/extra-classes",-630830756),new cljs.core.Keyword("ad","subscribe-to-classes","ad/subscribe-to-classes",173180261)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"component-data-path","component-data-path",171824011))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"subscribe-to-component-data","subscribe-to-component-data",1209998418)))], null),null])));
/**
 * 
 *   Standard checkbox component, takes standard options :component-data-path, :subscribe-to-component-data,
 *   :default, :id, :name, :on-change, :subscribe-to-disabled? :extra-classes, and :subscribe-to-classes.
 *   
 */
woolybear.ad.forms.checkbox = (function woolybear$ad$forms$checkbox(var_args){
var args__4870__auto__ = [];
var len__4864__auto___73179 = arguments.length;
var i__4865__auto___73180 = (0);
while(true){
if((i__4865__auto___73180 < len__4864__auto___73179)){
args__4870__auto__.push((arguments[i__4865__auto___73180]));

var G__73181 = (i__4865__auto___73180 + (1));
i__4865__auto___73180 = G__73181;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return woolybear.ad.forms.checkbox.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(woolybear.ad.forms.checkbox.cljs$core$IFn$_invoke$arity$variadic = (function (opts,children){
var map__73109 = opts;
var map__73109__$1 = cljs.core.__destructure_map(map__73109);
var component_data_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73109__$1,new cljs.core.Keyword(null,"component-data-path","component-data-path",171824011));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73109__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var subscribe_to_component_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73109__$1,new cljs.core.Keyword(null,"subscribe-to-component-data","subscribe-to-component-data",1209998418));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73109__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73109__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var subscribe_to_disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73109__$1,new cljs.core.Keyword(null,"subscribe-to-disabled?","subscribe-to-disabled?",-1843297485));
var extra_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73109__$1,new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843));
var subscribe_to_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73109__$1,new cljs.core.Keyword(null,"subscribe-to-classes","subscribe-to-classes",173193596));
var component_data_sub = woolybear.ad.utils.subscribe_to(subscribe_to_component_data);
var classes_sub = woolybear.ad.utils.subscribe_to(subscribe_to_classes);
var disabled_QMARK__sub = woolybear.ad.utils.subscribe_to(subscribe_to_disabled_QMARK_);
var dispatchers = woolybear.ad.forms.mk_dispatchers.cljs$core$IFn$_invoke$arity$3(component_data_path,opts,new cljs.core.Keyword("checkbox","change","checkbox/change",1373006811));
var attribs = (function (){var G__73110 = dispatchers;
var G__73110__$1 = (cljs.core.truth_(id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__73110,new cljs.core.Keyword(null,"id","id",-1388402092),id):G__73110);
if(cljs.core.truth_(name)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__73110__$1,new cljs.core.Keyword(null,"name","name",1843675177),name);
} else {
return G__73110__$1;
}
})();
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("form-field","init","form-field/init",-581366549),component_data_path,default$], null));

return (function (_){
var map__73111 = cljs.core.deref(component_data_sub);
var map__73111__$1 = cljs.core.__destructure_map(map__73111);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73111__$1,new cljs.core.Keyword(null,"value","value",305978217));
var disabled_QMARK_ = cljs.core.deref(disabled_QMARK__sub);
var dynamic_classes = cljs.core.deref(classes_sub);
var attribs__$1 = (function (){var G__73112 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(attribs,new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),value], 0));
if(cljs.core.truth_(disabled_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__73112,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),"disabled");
} else {
return G__73112;
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.control","span.control",320671593),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),woolybear.ad.utils.css__GT_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"wb-checkbox","wb-checkbox",1459821006),(cljs.core.truth_(disabled_QMARK_)?new cljs.core.Keyword(null,"disabled","disabled",-1529784218):null),extra_classes,dynamic_classes], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),attribs__$1], null)], null),children)], null);
});
}));

(woolybear.ad.forms.checkbox.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(woolybear.ad.forms.checkbox.cljs$lang$applyTo = (function (seq73107){
var G__73108 = cljs.core.first(seq73107);
var seq73107__$1 = cljs.core.next(seq73107);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73108,seq73107__$1);
}));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("woolybear.ad.forms","checkbox","woolybear.ad.forms/checkbox",-1516441504,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword("checkbox","options","checkbox/options",1632979230)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword("checkbox","options","checkbox/options",1632979230)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("checkbox","options","checkbox/options",1632979230)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("checkbox","options","checkbox/options",1632979230)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword("checkbox","options","checkbox/options",1632979230)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_,null,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),null,null,null));

//# sourceMappingURL=woolybear.ad.forms.js.map
