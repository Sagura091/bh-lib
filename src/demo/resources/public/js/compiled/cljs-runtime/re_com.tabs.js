goog.provide('re_com.tabs');
re_com.tabs.horizontal_tabs_parts_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"wrapper","wrapper",-969103524),new cljs.core.Keyword(null,"level","level",1290497552),(0),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-tabs",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:ul]",new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Only ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null)," is supported in ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":parts :wrapper"], null),". Otherwise, use top level ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":attr"], null)," arguments."], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"level","level",1290497552),(1),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-tab",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:li]"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.Keyword(null,"level","level",1290497552),(2),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-tab-anchor",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:a]",new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Only ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":attr"], null)," are supported in ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":parts :anchor"], null),". Otherwise, use top level ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null)," argument."], null)], null)], null):null);
re_com.tabs.horizontal_tabs_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),re_com.tabs.horizontal_tabs_parts_desc)):null);
re_com.tabs.horizontal_tabs_args_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"unique-id | r/atom",new cljs.core.Keyword(null,"description","description",-1428560544),"the unique identifier of the currently selected tab"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"vector of tabs | r/atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.vector_of_maps_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"one element in the vector for each tab. Typically, each element is a map with :id and :label keys"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"unique-id -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"called when user alters the selection. Passed the unique identifier of the selection"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type","type",1174270348),"tab -> anything",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":tabs"], null),", returns its unique identifier (aka id)"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"type","type",1174270348),"tab -> string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":tabs"], null),", returns its displayable label"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated (applies to the outer container)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"CSS styles to add or override (aplies to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bold","span.bold",636457745),"each individual tab"], null)," rather than the container)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed (applies to the outer container)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.parts_QMARK_(re_com.tabs.horizontal_tabs_parts),new cljs.core.Keyword(null,"description","description",-1428560544),"See Parts section below."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Used in dev builds to assist with debugging. Source code coordinates map containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":file"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":line"], null),". See 'Debugging'."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debug-as","debug-as",283322354),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Used in dev builds to assist with debugging, when one component is used implement another component, and we want the implementation component to masquerade as the original component in debug output, such as component stacks. A map optionally containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":component"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":args"], null),"."], null)], null)], null):null);
re_com.tabs.horizontal_tabs = (function re_com$tabs$horizontal_tabs(var_args){
var args__4870__auto__ = [];
var len__4864__auto___72783 = arguments.length;
var i__4865__auto___72784 = (0);
while(true){
if((i__4865__auto___72784 < len__4864__auto___72783)){
args__4870__auto__.push((arguments[i__4865__auto___72784]));

var G__72785 = (i__4865__auto___72784 + (1));
i__4865__auto___72784 = G__72785;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_com.tabs.horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_com.tabs.horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__72718){
var map__72719 = p__72718;
var map__72719__$1 = cljs.core.__destructure_map(map__72719);
var args = map__72719__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72719__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72719__$1,new cljs.core.Keyword(null,"model","model",331153215));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72719__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__72719__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72719__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72719__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__72719__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72719__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72719__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var or__4253__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.tabs.horizontal_tabs_args_desc),args));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var current = re_com.util.deref_or_value(model);
var tabs__$1 = re_com.util.deref_or_value(tabs);
var _ = (cljs.core.truth_(cljs.core.not_empty(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__72716_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,(id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(p1__72716_SHARP_) : id_fn.call(null,p1__72716_SHARP_)));
}),tabs__$1)))?null:(function(){throw (new Error(["Assert failed: ","model not found in tabs vector","\n","(not-empty (filter (fn* [p1__72716#] (= current (id-fn p1__72716#))) tabs))"].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["nav nav-tabs noselect rc-tabs ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wrapper","wrapper",-969103524),new cljs.core.Keyword(null,"style","style",-496642736)], null))], 0))], null),re_com.debug.__GT_attr(args),attr], 0)),(function (){var iter__4652__auto__ = (function re_com$tabs$iter__72720(s__72721){
return (new cljs.core.LazySeq(null,(function (){
var s__72721__$1 = s__72721;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__72721__$1);
if(temp__5753__auto__){
var s__72721__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__72721__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__72721__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__72723 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__72722 = (0);
while(true){
if((i__72722 < size__4651__auto__)){
var t = cljs.core._nth(c__4650__auto__,i__72722);
cljs.core.chunk_append(b__72723,(function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),[((selected_QMARK_)?"active rc-tab ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"style","style",-496642736)], null)),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-tab-anchor ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (i__72722,id,label,selected_QMARK_,t,c__4650__auto__,size__4651__auto__,b__72723,s__72721__$2,temp__5753__auto__,current,tabs__$1,_,or__4253__auto__,map__72719,map__72719__$1,args,on_change,model,attr,label_fn,tabs,parts,id_fn,style,class$){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(i__72722,id,label,selected_QMARK_,t,c__4650__auto__,size__4651__auto__,b__72723,s__72721__$2,temp__5753__auto__,current,tabs__$1,_,or__4253__auto__,map__72719,map__72719__$1,args,on_change,model,attr,label_fn,tabs,parts,id_fn,style,class$))
:null)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))], 0)),label], null)], null);
})());

var G__72786 = (i__72722 + (1));
i__72722 = G__72786;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__72723),re_com$tabs$iter__72720(cljs.core.chunk_rest(s__72721__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__72723),null);
}
} else {
var t = cljs.core.first(s__72721__$2);
return cljs.core.cons((function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),[((selected_QMARK_)?"active rc-tab ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"style","style",-496642736)], null)),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-tab-anchor ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__72721__$2,temp__5753__auto__,current,tabs__$1,_,or__4253__auto__,map__72719,map__72719__$1,args,on_change,model,attr,label_fn,tabs,parts,id_fn,style,class$){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(id,label,selected_QMARK_,t,s__72721__$2,temp__5753__auto__,current,tabs__$1,_,or__4253__auto__,map__72719,map__72719__$1,args,on_change,model,attr,label_fn,tabs,parts,id_fn,style,class$))
:null)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))], 0)),label], null)], null);
})(),re_com$tabs$iter__72720(cljs.core.rest(s__72721__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(tabs__$1);
})()], null);
}
}));

(re_com.tabs.horizontal_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tabs.horizontal_tabs.cljs$lang$applyTo = (function (seq72717){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq72717));
}));

re_com.tabs.bar_tabs_parts_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"wrapper","wrapper",-969103524),new cljs.core.Keyword(null,"level","level",1290497552),(0),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-tabs",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:div]",new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Only ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null)," is supported in ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":parts :wrapper"], null),". Otherwise, use top level ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":attr"], null)," arguments."], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.Keyword(null,"level","level",1290497552),(1),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-tabs-tooltip",new cljs.core.Keyword(null,"impl","impl",1677848700),"[popover-tooltip]"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"level","level",1290497552),(2),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-tabs-btn",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:button]",new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Only ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":attr"], null)," are supported in ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":parts :anchor"], null),". Otherwise, use top level ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null)," argument."], null)], null)], null):null);
re_com.tabs.bar_tabs_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),re_com.tabs.horizontal_tabs_parts_desc)):null);
re_com.tabs.bar_tabs_args_desc = ((re_com.config.include_args_desc_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__72725_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__72725_SHARP_));
}),re_com.tabs.horizontal_tabs_args_desc)),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tooltip-fn","tooltip-fn",-1552927731),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.Keyword(null,"type","type",1174270348),"tab -> string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"[horizontal-bar-tabs only] given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":tabs"], null),", returns its tooltip"], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tooltip-position","tooltip-position",936197013),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"below-center","below-center",-2126885397),new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.position_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"[horizontal-bar-tabs only] relative to this anchor. One of ",re_com.validate.position_options_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"validate?","validate?",356227962),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Validate ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":model"], null)," against ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":tabs"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.parts_QMARK_(re_com.tabs.bar_tabs_parts),new cljs.core.Keyword(null,"description","description",-1428560544),"See Parts section below."], null)], 0)):null);
re_com.tabs.bar_tabs = (function re_com$tabs$bar_tabs(var_args){
var args__4870__auto__ = [];
var len__4864__auto___72789 = arguments.length;
var i__4865__auto___72790 = (0);
while(true){
if((i__4865__auto___72790 < len__4864__auto___72789)){
args__4870__auto__.push((arguments[i__4865__auto___72790]));

var G__72791 = (i__4865__auto___72790 + (1));
i__4865__auto___72790 = G__72791;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__72732){
var map__72733 = p__72732;
var map__72733__$1 = cljs.core.__destructure_map(map__72733);
var args = map__72733__$1;
var validate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72733__$1,new cljs.core.Keyword(null,"validate?","validate?",356227962));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72733__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72733__$1,new cljs.core.Keyword(null,"model","model",331153215));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72733__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72733__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263));
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72733__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72733__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var tooltip_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72733__$1,new cljs.core.Keyword(null,"tooltip-fn","tooltip-fn",-1552927731));
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72733__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72733__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72733__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var vertical_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72733__$1,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444));
var tooltip_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72733__$1,new cljs.core.Keyword(null,"tooltip-position","tooltip-position",936197013));
var showing = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function() { 
var G__72792__delegate = function (p__72734){
var map__72735 = p__72734;
var map__72735__$1 = cljs.core.__destructure_map(map__72735);
var model__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72735__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72735__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var current = re_com.util.deref_or_value(model__$1);
var tabs__$2 = re_com.util.deref_or_value(tabs__$1);
var _ = (cljs.core.truth_((function (){var or__4253__auto__ = cljs.core.not(validate_QMARK_);
if(or__4253__auto__){
return or__4253__auto__;
} else {
return cljs.core.not_empty(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__72726_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,(id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(p1__72726_SHARP_) : id_fn.call(null,p1__72726_SHARP_)));
}),tabs__$2));
}
})())?null:(function(){throw (new Error(["Assert failed: ","model not found in tabs vector","\n","(or (not validate?) (not-empty (filter (fn* [p1__72726#] (= current (id-fn p1__72726#))) tabs)))"].join('')))})());
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["noselect btn-group",(cljs.core.truth_(vertical_QMARK_)?"-vertical":null)," rc-tabs ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wrapper","wrapper",-969103524),new cljs.core.Keyword(null,"style","style",-496642736)], null))], 0))], null),re_com.debug.__GT_attr(args),attr], 0))], null),(function (){var iter__4652__auto__ = (function re_com$tabs$iter__72737(s__72738){
return (new cljs.core.LazySeq(null,(function (){
var s__72738__$1 = s__72738;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__72738__$1);
if(temp__5753__auto__){
var s__72738__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__72738__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__72738__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__72740 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__72739 = (0);
while(true){
if((i__72739 < size__4651__auto__)){
var t = cljs.core._nth(c__4650__auto__,i__72739);
cljs.core.chunk_append(b__72740,(function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var tooltip = (cljs.core.truth_(tooltip_fn)?(tooltip_fn.cljs$core$IFn$_invoke$arity$1 ? tooltip_fn.cljs$core$IFn$_invoke$arity$1(t) : tooltip_fn.call(null,t)):null);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
var the_button = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),new cljs.core.Keyword(null,"class","class",-2030961996),["btn btn-default ",((selected_QMARK_)?"active ":null),"rc-tabs-btn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (i__72739,id,label,tooltip,selected_QMARK_,t,c__4650__auto__,size__4651__auto__,b__72740,s__72738__$2,temp__5753__auto__,current,tabs__$2,_,map__72735,map__72735__$1,model__$1,tabs__$1,showing,map__72733,map__72733__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(i__72739,id,label,tooltip,selected_QMARK_,t,c__4650__auto__,size__4651__auto__,b__72740,s__72738__$2,temp__5753__auto__,current,tabs__$2,_,map__72735,map__72735__$1,model__$1,tabs__$1,showing,map__72733,map__72733__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
:null)], null),(cljs.core.truth_(tooltip)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__72739,id,label,tooltip,selected_QMARK_,t,c__4650__auto__,size__4651__auto__,b__72740,s__72738__$2,temp__5753__auto__,current,tabs__$2,_,map__72735,map__72735__$1,model__$1,tabs__$1,showing,map__72733,map__72733__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (event){
cljs.core.reset_BANG_(showing,id);

return null;
});})(i__72739,id,label,tooltip,selected_QMARK_,t,c__4650__auto__,size__4651__auto__,b__72740,s__72738__$2,temp__5753__auto__,current,tabs__$2,_,map__72735,map__72735__$1,model__$1,tabs__$1,showing,map__72733,map__72733__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),((function (i__72739,id,label,tooltip,selected_QMARK_,t,c__4650__auto__,size__4651__auto__,b__72740,s__72738__$2,temp__5753__auto__,current,tabs__$2,_,map__72735,map__72735__$1,model__$1,tabs__$1,showing,map__72733,map__72733__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (event){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(showing,((function (i__72739,id,label,tooltip,selected_QMARK_,t,c__4650__auto__,size__4651__auto__,b__72740,s__72738__$2,temp__5753__auto__,current,tabs__$2,_,map__72735,map__72735__$1,model__$1,tabs__$1,showing,map__72733,map__72733__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (p1__72727_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,p1__72727_SHARP_)){
return null;
} else {
return p1__72727_SHARP_;
}
});})(i__72739,id,label,tooltip,selected_QMARK_,t,c__4650__auto__,size__4651__auto__,b__72740,s__72738__$2,temp__5753__auto__,current,tabs__$2,_,map__72735,map__72735__$1,model__$1,tabs__$1,showing,map__72733,map__72733__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
);

return null;
});})(i__72739,id,label,tooltip,selected_QMARK_,t,c__4650__auto__,size__4651__auto__,b__72740,s__72738__$2,temp__5753__auto__,current,tabs__$2,_,map__72735,map__72735__$1,model__$1,tabs__$1,showing,map__72733,map__72733__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
], null):null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))], 0)),label], null);
if(cljs.core.truth_(tooltip)){
return new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_tooltip,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/tabs.cljs",new cljs.core.Keyword(null,"line","line",212345235),141], null)),new cljs.core.Keyword(null,"label","label",1718410804),tooltip,new cljs.core.Keyword(null,"position","position",-2011731912),(function (){var or__4253__auto__ = tooltip_position;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"below-center","below-center",-2126885397);
}
})(),new cljs.core.Keyword(null,"showing?","showing?",2094921488),reagent.core.track(((function (i__72739,id,label,tooltip,selected_QMARK_,the_button,t,c__4650__auto__,size__4651__auto__,b__72740,s__72738__$2,temp__5753__auto__,current,tabs__$2,_,map__72735,map__72735__$1,model__$1,tabs__$1,showing,map__72733,map__72733__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.deref(showing));
});})(i__72739,id,label,tooltip,selected_QMARK_,the_button,t,c__4650__auto__,size__4651__auto__,b__72740,s__72738__$2,temp__5753__auto__,current,tabs__$2,_,map__72735,map__72735__$1,model__$1,tabs__$1,showing,map__72733,map__72733__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
),new cljs.core.Keyword(null,"anchor","anchor",1549638489),the_button,new cljs.core.Keyword(null,"class","class",-2030961996),["rc-tabs-tooltip ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.Keyword(null,"style","style",-496642736)], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))], null);
} else {
return the_button;
}
})());

var G__72793 = (i__72739 + (1));
i__72739 = G__72793;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__72740),re_com$tabs$iter__72737(cljs.core.chunk_rest(s__72738__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__72740),null);
}
} else {
var t = cljs.core.first(s__72738__$2);
return cljs.core.cons((function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var tooltip = (cljs.core.truth_(tooltip_fn)?(tooltip_fn.cljs$core$IFn$_invoke$arity$1 ? tooltip_fn.cljs$core$IFn$_invoke$arity$1(t) : tooltip_fn.call(null,t)):null);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
var the_button = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),new cljs.core.Keyword(null,"class","class",-2030961996),["btn btn-default ",((selected_QMARK_)?"active ":null),"rc-tabs-btn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (id,label,tooltip,selected_QMARK_,t,s__72738__$2,temp__5753__auto__,current,tabs__$2,_,map__72735,map__72735__$1,model__$1,tabs__$1,showing,map__72733,map__72733__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(id,label,tooltip,selected_QMARK_,t,s__72738__$2,temp__5753__auto__,current,tabs__$2,_,map__72735,map__72735__$1,model__$1,tabs__$1,showing,map__72733,map__72733__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
:null)], null),(cljs.core.truth_(tooltip)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (id,label,tooltip,selected_QMARK_,t,s__72738__$2,temp__5753__auto__,current,tabs__$2,_,map__72735,map__72735__$1,model__$1,tabs__$1,showing,map__72733,map__72733__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (event){
cljs.core.reset_BANG_(showing,id);

return null;
});})(id,label,tooltip,selected_QMARK_,t,s__72738__$2,temp__5753__auto__,current,tabs__$2,_,map__72735,map__72735__$1,model__$1,tabs__$1,showing,map__72733,map__72733__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),((function (id,label,tooltip,selected_QMARK_,t,s__72738__$2,temp__5753__auto__,current,tabs__$2,_,map__72735,map__72735__$1,model__$1,tabs__$1,showing,map__72733,map__72733__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (event){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(showing,(function (p1__72727_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,p1__72727_SHARP_)){
return null;
} else {
return p1__72727_SHARP_;
}
}));

return null;
});})(id,label,tooltip,selected_QMARK_,t,s__72738__$2,temp__5753__auto__,current,tabs__$2,_,map__72735,map__72735__$1,model__$1,tabs__$1,showing,map__72733,map__72733__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
], null):null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))], 0)),label], null);
if(cljs.core.truth_(tooltip)){
return new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_tooltip,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/tabs.cljs",new cljs.core.Keyword(null,"line","line",212345235),141], null)),new cljs.core.Keyword(null,"label","label",1718410804),tooltip,new cljs.core.Keyword(null,"position","position",-2011731912),(function (){var or__4253__auto__ = tooltip_position;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"below-center","below-center",-2126885397);
}
})(),new cljs.core.Keyword(null,"showing?","showing?",2094921488),reagent.core.track(((function (id,label,tooltip,selected_QMARK_,the_button,t,s__72738__$2,temp__5753__auto__,current,tabs__$2,_,map__72735,map__72735__$1,model__$1,tabs__$1,showing,map__72733,map__72733__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.deref(showing));
});})(id,label,tooltip,selected_QMARK_,the_button,t,s__72738__$2,temp__5753__auto__,current,tabs__$2,_,map__72735,map__72735__$1,model__$1,tabs__$1,showing,map__72733,map__72733__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
),new cljs.core.Keyword(null,"anchor","anchor",1549638489),the_button,new cljs.core.Keyword(null,"class","class",-2030961996),["rc-tabs-tooltip ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.Keyword(null,"style","style",-496642736)], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))], null);
} else {
return the_button;
}
})(),re_com$tabs$iter__72737(cljs.core.rest(s__72738__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(tabs__$2);
})());
};
var G__72792 = function (var_args){
var p__72734 = null;
if (arguments.length > 0) {
var G__72796__i = 0, G__72796__a = new Array(arguments.length -  0);
while (G__72796__i < G__72796__a.length) {G__72796__a[G__72796__i] = arguments[G__72796__i + 0]; ++G__72796__i;}
  p__72734 = new cljs.core.IndexedSeq(G__72796__a,0,null);
} 
return G__72792__delegate.call(this,p__72734);};
G__72792.cljs$lang$maxFixedArity = 0;
G__72792.cljs$lang$applyTo = (function (arglist__72797){
var p__72734 = cljs.core.seq(arglist__72797);
return G__72792__delegate(p__72734);
});
G__72792.cljs$core$IFn$_invoke$arity$variadic = G__72792__delegate;
return G__72792;
})()
;
}));

(re_com.tabs.bar_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tabs.bar_tabs.cljs$lang$applyTo = (function (seq72728){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq72728));
}));

re_com.tabs.horizontal_bar_tabs = (function re_com$tabs$horizontal_bar_tabs(var_args){
var args__4870__auto__ = [];
var len__4864__auto___72798 = arguments.length;
var i__4865__auto___72799 = (0);
while(true){
if((i__4865__auto___72799 < len__4864__auto___72798)){
args__4870__auto__.push((arguments[i__4865__auto___72799]));

var G__72800 = (i__4865__auto___72799 + (1));
i__4865__auto___72799 = G__72800;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_com.tabs.horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_com.tabs.horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__72745){
var map__72746 = p__72745;
var map__72746__$1 = cljs.core.__destructure_map(map__72746);
var args = map__72746__$1;
var validate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72746__$1,new cljs.core.Keyword(null,"validate?","validate?",356227962));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72746__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72746__$1,new cljs.core.Keyword(null,"model","model",331153215));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72746__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__72746__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72746__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72746__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var tooltip_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__72746__$1,new cljs.core.Keyword(null,"tooltip-fn","tooltip-fn",-1552927731),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058));
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72746__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__72746__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72746__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72746__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72746__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tooltip_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72746__$1,new cljs.core.Keyword(null,"tooltip-position","tooltip-position",936197013));
var or__4253__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.tabs.bar_tabs_args_desc),args));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"tooltip-fn","tooltip-fn",-1552927731),tooltip_fn,new cljs.core.Keyword(null,"tooltip-position","tooltip-position",936197013),tooltip_position,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),false,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"attr","attr",-604132353),attr,new cljs.core.Keyword(null,"parts","parts",849007691),parts,new cljs.core.Keyword(null,"src","src",-1651076051),src,new cljs.core.Keyword(null,"debug-as","debug-as",283322354),debug_as,new cljs.core.Keyword(null,"validate?","validate?",356227962),validate_QMARK_], 0));
}
}));

(re_com.tabs.horizontal_bar_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tabs.horizontal_bar_tabs.cljs$lang$applyTo = (function (seq72744){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq72744));
}));

re_com.tabs.vertical_bar_tabs = (function re_com$tabs$vertical_bar_tabs(var_args){
var args__4870__auto__ = [];
var len__4864__auto___72801 = arguments.length;
var i__4865__auto___72802 = (0);
while(true){
if((i__4865__auto___72802 < len__4864__auto___72801)){
args__4870__auto__.push((arguments[i__4865__auto___72802]));

var G__72803 = (i__4865__auto___72802 + (1));
i__4865__auto___72802 = G__72803;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_com.tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_com.tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__72748){
var map__72749 = p__72748;
var map__72749__$1 = cljs.core.__destructure_map(map__72749);
var args = map__72749__$1;
var validate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72749__$1,new cljs.core.Keyword(null,"validate?","validate?",356227962));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72749__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72749__$1,new cljs.core.Keyword(null,"model","model",331153215));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72749__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__72749__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72749__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72749__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72749__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__72749__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72749__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72749__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72749__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var or__4253__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.tabs.bar_tabs_args_desc),args));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),true,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"attr","attr",-604132353),attr,new cljs.core.Keyword(null,"parts","parts",849007691),parts,new cljs.core.Keyword(null,"src","src",-1651076051),src,new cljs.core.Keyword(null,"debug-as","debug-as",283322354),debug_as,new cljs.core.Keyword(null,"validate?","validate?",356227962),validate_QMARK_], 0));
}
}));

(re_com.tabs.vertical_bar_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tabs.vertical_bar_tabs.cljs$lang$applyTo = (function (seq72747){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq72747));
}));

re_com.tabs.pill_tabs_parts_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"wrapper","wrapper",-969103524),new cljs.core.Keyword(null,"level","level",1290497552),(0),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-tabs",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:ul]",new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Only ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null)," is supported in ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":parts :wrapper"], null),". Otherwise, use top level ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":attr"], null)," arguments."], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"level","level",1290497552),(1),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-tabs-pill",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:li]"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.Keyword(null,"level","level",1290497552),(2),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-tabs-anchor",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:a]",new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Only ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":attr"], null)," are supported in ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":parts :anchor"], null),". Otherwise, use top level ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null)," argument."], null)], null)], null):null);
re_com.tabs.pill_tabs_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),re_com.tabs.horizontal_tabs_parts_desc)):null);
re_com.tabs.pill_tabs_args_desc = ((re_com.config.include_args_desc_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__72750_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__72750_SHARP_));
}),re_com.tabs.horizontal_tabs_args_desc)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.parts_QMARK_(re_com.tabs.pill_tabs_parts),new cljs.core.Keyword(null,"description","description",-1428560544),"See Parts section below."], null)):null);
re_com.tabs.pill_tabs = (function re_com$tabs$pill_tabs(var_args){
var args__4870__auto__ = [];
var len__4864__auto___72805 = arguments.length;
var i__4865__auto___72806 = (0);
while(true){
if((i__4865__auto___72806 < len__4864__auto___72805)){
args__4870__auto__.push((arguments[i__4865__auto___72806]));

var G__72807 = (i__4865__auto___72806 + (1));
i__4865__auto___72806 = G__72807;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__72753){
var map__72754 = p__72753;
var map__72754__$1 = cljs.core.__destructure_map(map__72754);
var args = map__72754__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72754__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72754__$1,new cljs.core.Keyword(null,"model","model",331153215));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72754__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72754__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263));
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72754__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72754__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72754__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72754__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72754__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72754__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var vertical_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72754__$1,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444));
var current = re_com.util.deref_or_value(model);
var tabs__$1 = re_com.util.deref_or_value(tabs);
var _ = (cljs.core.truth_(cljs.core.not_empty(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__72751_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,(id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(p1__72751_SHARP_) : id_fn.call(null,p1__72751_SHARP_)));
}),tabs__$1)))?null:(function(){throw (new Error(["Assert failed: ","model not found in tabs vector","\n","(not-empty (filter (fn* [p1__72751#] (= current (id-fn p1__72751#))) tabs))"].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-tabs noselect nav nav-pills",(cljs.core.truth_(vertical_QMARK_)?" nav-stacked":null)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wrapper","wrapper",-969103524),new cljs.core.Keyword(null,"style","style",-496642736)], null))], 0)),new cljs.core.Keyword(null,"role","role",-736691072),"tabslist"], null),re_com.debug.__GT_attr(args),attr], 0)),(function (){var iter__4652__auto__ = (function re_com$tabs$iter__72755(s__72756){
return (new cljs.core.LazySeq(null,(function (){
var s__72756__$1 = s__72756;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__72756__$1);
if(temp__5753__auto__){
var s__72756__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__72756__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__72756__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__72758 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__72757 = (0);
while(true){
if((i__72757 < size__4651__auto__)){
var t = cljs.core._nth(c__4650__auto__,i__72757);
cljs.core.chunk_append(b__72758,(function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-tabs-pill ",((selected_QMARK_)?"active ":""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"style","style",-496642736)], null)),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-tabs-anchor ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (i__72757,id,label,selected_QMARK_,t,c__4650__auto__,size__4651__auto__,b__72758,s__72756__$2,temp__5753__auto__,current,tabs__$1,_,map__72754,map__72754__$1,args,on_change,model,attr,label_fn,tabs,parts,src,id_fn,style,class$,vertical_QMARK_){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(i__72757,id,label,selected_QMARK_,t,c__4650__auto__,size__4651__auto__,b__72758,s__72756__$2,temp__5753__auto__,current,tabs__$1,_,map__72754,map__72754__$1,args,on_change,model,attr,label_fn,tabs,parts,src,id_fn,style,class$,vertical_QMARK_))
:null)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))], 0)),label], null)], null);
})());

var G__72812 = (i__72757 + (1));
i__72757 = G__72812;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__72758),re_com$tabs$iter__72755(cljs.core.chunk_rest(s__72756__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__72758),null);
}
} else {
var t = cljs.core.first(s__72756__$2);
return cljs.core.cons((function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-tabs-pill ",((selected_QMARK_)?"active ":""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"style","style",-496642736)], null)),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-tabs-anchor ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__72756__$2,temp__5753__auto__,current,tabs__$1,_,map__72754,map__72754__$1,args,on_change,model,attr,label_fn,tabs,parts,src,id_fn,style,class$,vertical_QMARK_){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(id,label,selected_QMARK_,t,s__72756__$2,temp__5753__auto__,current,tabs__$1,_,map__72754,map__72754__$1,args,on_change,model,attr,label_fn,tabs,parts,src,id_fn,style,class$,vertical_QMARK_))
:null)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))], 0)),label], null)], null);
})(),re_com$tabs$iter__72755(cljs.core.rest(s__72756__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(tabs__$1);
})()], null);
}));

(re_com.tabs.pill_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tabs.pill_tabs.cljs$lang$applyTo = (function (seq72752){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq72752));
}));

re_com.tabs.horizontal_pill_tabs = (function re_com$tabs$horizontal_pill_tabs(var_args){
var args__4870__auto__ = [];
var len__4864__auto___72813 = arguments.length;
var i__4865__auto___72814 = (0);
while(true){
if((i__4865__auto___72814 < len__4864__auto___72813)){
args__4870__auto__.push((arguments[i__4865__auto___72814]));

var G__72815 = (i__4865__auto___72814 + (1));
i__4865__auto___72814 = G__72815;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_com.tabs.horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_com.tabs.horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__72771){
var map__72772 = p__72771;
var map__72772__$1 = cljs.core.__destructure_map(map__72772);
var args = map__72772__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72772__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72772__$1,new cljs.core.Keyword(null,"model","model",331153215));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72772__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__72772__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72772__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72772__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72772__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__72772__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72772__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72772__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72772__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var or__4253__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.tabs.pill_tabs_args_desc),args));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),false,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"attr","attr",-604132353),attr,new cljs.core.Keyword(null,"parts","parts",849007691),parts,new cljs.core.Keyword(null,"src","src",-1651076051),src,new cljs.core.Keyword(null,"debug-as","debug-as",283322354),debug_as], 0));
}
}));

(re_com.tabs.horizontal_pill_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tabs.horizontal_pill_tabs.cljs$lang$applyTo = (function (seq72768){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq72768));
}));

re_com.tabs.vertical_pill_tabs = (function re_com$tabs$vertical_pill_tabs(var_args){
var args__4870__auto__ = [];
var len__4864__auto___72818 = arguments.length;
var i__4865__auto___72819 = (0);
while(true){
if((i__4865__auto___72819 < len__4864__auto___72818)){
args__4870__auto__.push((arguments[i__4865__auto___72819]));

var G__72820 = (i__4865__auto___72819 + (1));
i__4865__auto___72819 = G__72820;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_com.tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_com.tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__72777){
var map__72778 = p__72777;
var map__72778__$1 = cljs.core.__destructure_map(map__72778);
var args = map__72778__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72778__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72778__$1,new cljs.core.Keyword(null,"model","model",331153215));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72778__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__72778__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72778__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72778__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72778__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__72778__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72778__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72778__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72778__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var or__4253__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.tabs.pill_tabs_args_desc),args));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),true,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"attr","attr",-604132353),attr,new cljs.core.Keyword(null,"parts","parts",849007691),parts,new cljs.core.Keyword(null,"src","src",-1651076051),src,new cljs.core.Keyword(null,"debug-as","debug-as",283322354),debug_as], 0));
}
}));

(re_com.tabs.vertical_pill_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tabs.vertical_pill_tabs.cljs$lang$applyTo = (function (seq72776){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq72776));
}));


//# sourceMappingURL=re_com.tabs.js.map
