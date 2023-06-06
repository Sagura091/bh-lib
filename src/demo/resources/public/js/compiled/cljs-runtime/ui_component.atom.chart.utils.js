goog.provide('ui_component.atom.chart.utils');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"ui-component.atom.chart.utils",null,20,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ui-component.atom.chart.utils"], null);
}),null)),null,-1179649508,null);
/**
 * this need some REALLY GOOD documentation!
 */
ui_component.atom.chart.utils.init_config_panel = (function ui_component$atom$chart$utils$init_config_panel(base_id){
var formal_id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(base_id);
var data_path = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [formal_id,new cljs.core.Keyword(null,"tab-panel","tab-panel",439413104)], null);
var config_id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(base_id,"config");
var data_id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(base_id,"data");
var db_id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("db",base_id);
var tab_id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(base_id,"tab-panel");
var value_id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(base_id,"value");
var init_db = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tab-panel","tab-panel",439413104),woolybear.packs.tab_panel.mk_tab_panel_data.cljs$core$IFn$_invoke$arity$variadic(data_path,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config_id], 0))], null);
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(db_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return (formal_id.cljs$core$IFn$_invoke$arity$1 ? formal_id.cljs$core$IFn$_invoke$arity$1(db) : formal_id.call(null,db));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(tab_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_id], null),(function (navbar){
return new cljs.core.Keyword(null,"tab-panel","tab-panel",439413104).cljs$core$IFn$_invoke$arity$1(navbar);
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(value_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tab_id], null),(function (tab_panel){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(tab_panel);
})], 0));

return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("events","init-locals","events/init-locals",-1987731373),formal_id,init_db], null));
});
ui_component.atom.chart.utils.dummy_data_panel = (function ui_component$atom$chart$utils$dummy_data_panel(data){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"a dummy data panel"], null);
});
/**
 * provides a simple tabular component (via `ui-component.table`) to show the data presented
 *   in the Chart.
 * 
 * > Note: `table` uses the keys of the first hash-map in `@data` as the header label for the columns
 * 
 *   ---
 * 
 *   - data : (atom) vector of content hash-maps.
 */
ui_component.atom.chart.utils.tabular_data_panel = (function ui_component$atom$chart$utils$tabular_data_panel(data){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.re_com.table.table,new cljs.core.Keyword(null,"width","width",-384071477),(500),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.deref(data),new cljs.core.Keyword(null,"max-rows","max-rows",-2131113613),(5)], null);
});
/**
 * provides a simple tabular component (via `ui-component.table`) to show the data presented
 *   in the Chart.
 * 
 * > Note: `table` uses the keys of the first hash-map in `@data` as the header label for the columns
 * 
 *   ---
 * 
 *   - data : (atom) atom wrapping data with metadata included
 */
ui_component.atom.chart.utils.meta_tabular_data_panel = (function ui_component$atom$chart$utils$meta_tabular_data_panel(data){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.re_com.table.meta_table,new cljs.core.Keyword(null,"width","width",-384071477),(500),new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"max-rows","max-rows",-2131113613),(5)], null);
});
/**
 * provides a UI component to show the DAG data presented in the Chart.
 * 
 * > Note: `table` uses the keys of the first hash-map in `@data` as the header label for the columns
 * 
 *   ---
 * 
 *   - data : (atom) vector of content hash-maps.
 */
ui_component.atom.chart.utils.dag_data_panel = (function ui_component$atom$chart$utils$dag_data_panel(data){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"DAG data will be shown here"], null);
});
/**
 * provides a UI component to show the hierarchical data presented in the Chart.
 * 
 *   ---
 * 
 *   - data : (atom) data to show/edit
 */
ui_component.atom.chart.utils.hierarchy_data_panel = (function ui_component$atom$chart$utils$hierarchy_data_panel(data){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"hierarchical data will be shown here"], null);
});
ui_component.atom.chart.utils.btns_style = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"20px",new cljs.core.Keyword(null,"padding","padding",1660304693),"6px 8px"], null);
ui_component.atom.chart.utils.x_axis_btns = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"label","label",1718410804),":bottom"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"label","label",1718410804),":top"], null)], null);
ui_component.atom.chart.utils.y_axis_btns = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"label","label",1718410804),":left"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"label","label",1718410804),":right"], null)], null);
ui_component.atom.chart.utils.default_config = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"isAnimationActive","isAnimationActive",441882911),true,new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"include","include",153360230),true,new cljs.core.Keyword(null,"strokeDasharray","strokeDasharray",1664678421),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dash","dash",23821356),"3",new cljs.core.Keyword(null,"space","space",348133475),"3"], null),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#a9a9a9"], null),new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"include","include",153360230),true,new cljs.core.Keyword(null,"dataKey","dataKey",-334896751),"",new cljs.core.Keyword(null,"orientation","orientation",623557579),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"scale","scale",-230427353),"auto"], null),new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"include","include",153360230),true,new cljs.core.Keyword(null,"dataKey","dataKey",-334896751),"",new cljs.core.Keyword(null,"orientation","orientation",623557579),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"scale","scale",-230427353),"auto"], null),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"include","include",153360230),true], null),new cljs.core.Keyword(null,"legend","legend",-1027192245),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"include","include",153360230),true,new cljs.core.Keyword(null,"layout","layout",-2120940921),"horizontal",new cljs.core.Keyword(null,"align","align",1964212802),"center",new cljs.core.Keyword(null,"verticalAlign","verticalAlign",465597462),"bottom"], null)], null);
ui_component.atom.chart.utils.subscription_error = (function ui_component$atom$chart$utils$subscription_error(label,path){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"ui-component.atom.chart.utils",null,169,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)," - error"].join('')], null);
}),null)),null,-1219116380,null);

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);
});
ui_component.atom.chart.utils.column_picker = (function ui_component$atom$chart$utils$column_picker(data,component_id,label,path){
var model = ui_component.utils.subscribe_local(component_id,path);
return (function (){
if(cljs.core.truth_(model)){
var headings = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.set,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keys,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(data),new cljs.core.Keyword(null,"data","data",-232669377))));
var btns = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (h){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),h,new cljs.core.Keyword(null,"label","label",1718410804),h], null);
}),headings);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/chart/utils.cljs",new cljs.core.Keyword(null,"line","line",212345235),180], null)),new cljs.core.Keyword(null,"gap","gap",80255254),"5px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/chart/utils.cljs",new cljs.core.Keyword(null,"line","line",212345235),182], null)),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),label], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.horizontal_bar_tabs,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/chart/utils.cljs",new cljs.core.Keyword(null,"line","line",212345235),184], null)),new cljs.core.Keyword(null,"model","model",331153215),cljs.core.deref(model),new cljs.core.Keyword(null,"tabs","tabs",-779855354),btns,new cljs.core.Keyword(null,"style","style",-496642736),ui_component.atom.chart.utils.btns_style,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__51103_SHARP_){
return ui_component.utils.dispatch_local(component_id,path,p1__51103_SHARP_);
})], null)], null)], null);
} else {
return ui_component.atom.chart.utils.subscription_error(label,path);
}
});
});
ui_component.atom.chart.utils.multi_button = (function ui_component$atom$chart$utils$multi_button(data,component_id,path,item){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"ui-component.atom.chart.utils",null,193,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["multi-button",item], null);
}),null)),null,-1638930760,null);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.str.cljs$core$IFn$_invoke$arity$1(item)], null);
});
ui_component.atom.chart.utils.multi_bar_tabs = (function ui_component$atom$chart$utils$multi_bar_tabs(var_args){
var args__4870__auto__ = [];
var len__4864__auto___51236 = arguments.length;
var i__4865__auto___51237 = (0);
while(true){
if((i__4865__auto___51237 < len__4864__auto___51236)){
args__4870__auto__.push((arguments[i__4865__auto___51237]));

var G__51238 = (i__4865__auto___51237 + (1));
i__4865__auto___51237 = G__51238;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return ui_component.atom.chart.utils.multi_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(ui_component.atom.chart.utils.multi_bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__51107){
var map__51108 = p__51107;
var map__51108__$1 = cljs.core.__destructure_map(map__51108);
var args = map__51108__$1;
var validate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51108__$1,new cljs.core.Keyword(null,"validate?","validate?",356227962));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51108__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51108__$1,new cljs.core.Keyword(null,"model","model",331153215));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51108__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51108__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var btns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51108__$1,new cljs.core.Keyword(null,"btns","btns",-116236379));
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51108__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var tooltip_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51108__$1,new cljs.core.Keyword(null,"tooltip-fn","tooltip-fn",-1552927731),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058));
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51108__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51108__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51108__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var vertical_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51108__$1,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444));
var tooltip_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51108__$1,new cljs.core.Keyword(null,"tooltip-position","tooltip-position",936197013));
var showing = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function() { 
var G__51239__delegate = function (p__51109){
var map__51110 = p__51109;
var map__51110__$1 = cljs.core.__destructure_map(map__51110);
var model__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51110__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51110__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var chosen = re_com.util.deref_or_value(model__$1);
var btns__$1 = re_com.util.deref_or_value(btns);
var _ = (cljs.core.truth_((function (){var or__4253__auto__ = cljs.core.not(validate_QMARK_);
if(or__4253__auto__){
return or__4253__auto__;
} else {
return cljs.core.not_empty(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__51104_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(chosen,(id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(p1__51104_SHARP_) : id_fn.call(null,p1__51104_SHARP_)));
}),tabs));
}
})())?null:(function(){throw (new Error(["Assert failed: ","model not found in tabs vector","\n","(or (not validate?) (not-empty (filter (fn* [p1__51104#] (= chosen (id-fn p1__51104#))) tabs)))"].join('')))})());
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"ui-component.atom.chart.utils",null,208,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["multi-bar-tabs",model__$1,"//",chosen,"//",btns__$1], null);
}),null)),null,-1034701228,null);

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["noselect btn-group",(cljs.core.truth_(vertical_QMARK_)?"-vertical":null)," rc-tabs ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wrapper","wrapper",-969103524),new cljs.core.Keyword(null,"style","style",-496642736)], null))], 0))], null),re_com.debug.__GT_attr(args),attr], 0))], null),(function (){var iter__4652__auto__ = (function ui_component$atom$chart$utils$iter__51111(s__51112){
return (new cljs.core.LazySeq(null,(function (){
var s__51112__$1 = s__51112;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__51112__$1);
if(temp__5753__auto__){
var s__51112__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51112__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__51112__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__51114 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__51113 = (0);
while(true){
if((i__51113 < size__4651__auto__)){
var t = cljs.core._nth(c__4650__auto__,i__51113);
cljs.core.chunk_append(b__51114,(function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var tooltip = (cljs.core.truth_(tooltip_fn)?(tooltip_fn.cljs$core$IFn$_invoke$arity$1 ? tooltip_fn.cljs$core$IFn$_invoke$arity$1(t) : tooltip_fn.call(null,t)):null);
var selected_QMARK_ = cljs.core.contains_QMARK_(chosen,id);
var the_button = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),new cljs.core.Keyword(null,"class","class",-2030961996),["btn btn-default ",((selected_QMARK_)?"active ":null),"rc-tabs-btn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (i__51113,id,label,tooltip,selected_QMARK_,t,c__4650__auto__,size__4651__auto__,b__51114,s__51112__$2,temp__5753__auto__,chosen,btns__$1,_,map__51110,map__51110__$1,model__$1,tabs,showing,map__51108,map__51108__$1,args,validate_QMARK_,on_change,model,attr,label_fn,btns,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(i__51113,id,label,tooltip,selected_QMARK_,t,c__4650__auto__,size__4651__auto__,b__51114,s__51112__$2,temp__5753__auto__,chosen,btns__$1,_,map__51110,map__51110__$1,model__$1,tabs,showing,map__51108,map__51108__$1,args,validate_QMARK_,on_change,model,attr,label_fn,btns,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
:null)], null),(cljs.core.truth_(tooltip)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__51113,id,label,tooltip,selected_QMARK_,t,c__4650__auto__,size__4651__auto__,b__51114,s__51112__$2,temp__5753__auto__,chosen,btns__$1,_,map__51110,map__51110__$1,model__$1,tabs,showing,map__51108,map__51108__$1,args,validate_QMARK_,on_change,model,attr,label_fn,btns,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (event){
cljs.core.reset_BANG_(showing,id);

return null;
});})(i__51113,id,label,tooltip,selected_QMARK_,t,c__4650__auto__,size__4651__auto__,b__51114,s__51112__$2,temp__5753__auto__,chosen,btns__$1,_,map__51110,map__51110__$1,model__$1,tabs,showing,map__51108,map__51108__$1,args,validate_QMARK_,on_change,model,attr,label_fn,btns,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),((function (i__51113,id,label,tooltip,selected_QMARK_,t,c__4650__auto__,size__4651__auto__,b__51114,s__51112__$2,temp__5753__auto__,chosen,btns__$1,_,map__51110,map__51110__$1,model__$1,tabs,showing,map__51108,map__51108__$1,args,validate_QMARK_,on_change,model,attr,label_fn,btns,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (event){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(showing,((function (i__51113,id,label,tooltip,selected_QMARK_,t,c__4650__auto__,size__4651__auto__,b__51114,s__51112__$2,temp__5753__auto__,chosen,btns__$1,_,map__51110,map__51110__$1,model__$1,tabs,showing,map__51108,map__51108__$1,args,validate_QMARK_,on_change,model,attr,label_fn,btns,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (p1__51105_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,p1__51105_SHARP_)){
return null;
} else {
return p1__51105_SHARP_;
}
});})(i__51113,id,label,tooltip,selected_QMARK_,t,c__4650__auto__,size__4651__auto__,b__51114,s__51112__$2,temp__5753__auto__,chosen,btns__$1,_,map__51110,map__51110__$1,model__$1,tabs,showing,map__51108,map__51108__$1,args,validate_QMARK_,on_change,model,attr,label_fn,btns,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
);

return null;
});})(i__51113,id,label,tooltip,selected_QMARK_,t,c__4650__auto__,size__4651__auto__,b__51114,s__51112__$2,temp__5753__auto__,chosen,btns__$1,_,map__51110,map__51110__$1,model__$1,tabs,showing,map__51108,map__51108__$1,args,validate_QMARK_,on_change,model,attr,label_fn,btns,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
], null):null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))], 0)),label], null);
if(cljs.core.truth_(tooltip)){
return new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.popover_tooltip,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/chart/utils.cljs",new cljs.core.Keyword(null,"line","line",212345235),236], null)),new cljs.core.Keyword(null,"label","label",1718410804),tooltip,new cljs.core.Keyword(null,"position","position",-2011731912),(function (){var or__4253__auto__ = tooltip_position;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"below-center","below-center",-2126885397);
}
})(),new cljs.core.Keyword(null,"showing?","showing?",2094921488),reagent.core.track(((function (i__51113,id,label,tooltip,selected_QMARK_,the_button,t,c__4650__auto__,size__4651__auto__,b__51114,s__51112__$2,temp__5753__auto__,chosen,btns__$1,_,map__51110,map__51110__$1,model__$1,tabs,showing,map__51108,map__51108__$1,args,validate_QMARK_,on_change,model,attr,label_fn,btns,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.deref(showing));
});})(i__51113,id,label,tooltip,selected_QMARK_,the_button,t,c__4650__auto__,size__4651__auto__,b__51114,s__51112__$2,temp__5753__auto__,chosen,btns__$1,_,map__51110,map__51110__$1,model__$1,tabs,showing,map__51108,map__51108__$1,args,validate_QMARK_,on_change,model,attr,label_fn,btns,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
),new cljs.core.Keyword(null,"anchor","anchor",1549638489),the_button,new cljs.core.Keyword(null,"class","class",-2030961996),["rc-tabs-tooltip ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.Keyword(null,"style","style",-496642736)], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))], null);
} else {
return the_button;
}
})());

var G__51255 = (i__51113 + (1));
i__51113 = G__51255;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51114),ui_component$atom$chart$utils$iter__51111(cljs.core.chunk_rest(s__51112__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51114),null);
}
} else {
var t = cljs.core.first(s__51112__$2);
return cljs.core.cons((function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var tooltip = (cljs.core.truth_(tooltip_fn)?(tooltip_fn.cljs$core$IFn$_invoke$arity$1 ? tooltip_fn.cljs$core$IFn$_invoke$arity$1(t) : tooltip_fn.call(null,t)):null);
var selected_QMARK_ = cljs.core.contains_QMARK_(chosen,id);
var the_button = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),new cljs.core.Keyword(null,"class","class",-2030961996),["btn btn-default ",((selected_QMARK_)?"active ":null),"rc-tabs-btn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (id,label,tooltip,selected_QMARK_,t,s__51112__$2,temp__5753__auto__,chosen,btns__$1,_,map__51110,map__51110__$1,model__$1,tabs,showing,map__51108,map__51108__$1,args,validate_QMARK_,on_change,model,attr,label_fn,btns,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(id,label,tooltip,selected_QMARK_,t,s__51112__$2,temp__5753__auto__,chosen,btns__$1,_,map__51110,map__51110__$1,model__$1,tabs,showing,map__51108,map__51108__$1,args,validate_QMARK_,on_change,model,attr,label_fn,btns,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
:null)], null),(cljs.core.truth_(tooltip)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (id,label,tooltip,selected_QMARK_,t,s__51112__$2,temp__5753__auto__,chosen,btns__$1,_,map__51110,map__51110__$1,model__$1,tabs,showing,map__51108,map__51108__$1,args,validate_QMARK_,on_change,model,attr,label_fn,btns,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (event){
cljs.core.reset_BANG_(showing,id);

return null;
});})(id,label,tooltip,selected_QMARK_,t,s__51112__$2,temp__5753__auto__,chosen,btns__$1,_,map__51110,map__51110__$1,model__$1,tabs,showing,map__51108,map__51108__$1,args,validate_QMARK_,on_change,model,attr,label_fn,btns,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),((function (id,label,tooltip,selected_QMARK_,t,s__51112__$2,temp__5753__auto__,chosen,btns__$1,_,map__51110,map__51110__$1,model__$1,tabs,showing,map__51108,map__51108__$1,args,validate_QMARK_,on_change,model,attr,label_fn,btns,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (event){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(showing,(function (p1__51105_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,p1__51105_SHARP_)){
return null;
} else {
return p1__51105_SHARP_;
}
}));

return null;
});})(id,label,tooltip,selected_QMARK_,t,s__51112__$2,temp__5753__auto__,chosen,btns__$1,_,map__51110,map__51110__$1,model__$1,tabs,showing,map__51108,map__51108__$1,args,validate_QMARK_,on_change,model,attr,label_fn,btns,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
], null):null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))], 0)),label], null);
if(cljs.core.truth_(tooltip)){
return new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.popover_tooltip,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/chart/utils.cljs",new cljs.core.Keyword(null,"line","line",212345235),236], null)),new cljs.core.Keyword(null,"label","label",1718410804),tooltip,new cljs.core.Keyword(null,"position","position",-2011731912),(function (){var or__4253__auto__ = tooltip_position;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"below-center","below-center",-2126885397);
}
})(),new cljs.core.Keyword(null,"showing?","showing?",2094921488),reagent.core.track(((function (id,label,tooltip,selected_QMARK_,the_button,t,s__51112__$2,temp__5753__auto__,chosen,btns__$1,_,map__51110,map__51110__$1,model__$1,tabs,showing,map__51108,map__51108__$1,args,validate_QMARK_,on_change,model,attr,label_fn,btns,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.deref(showing));
});})(id,label,tooltip,selected_QMARK_,the_button,t,s__51112__$2,temp__5753__auto__,chosen,btns__$1,_,map__51110,map__51110__$1,model__$1,tabs,showing,map__51108,map__51108__$1,args,validate_QMARK_,on_change,model,attr,label_fn,btns,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
),new cljs.core.Keyword(null,"anchor","anchor",1549638489),the_button,new cljs.core.Keyword(null,"class","class",-2030961996),["rc-tabs-tooltip ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.Keyword(null,"style","style",-496642736)], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))], null);
} else {
return the_button;
}
})(),ui_component$atom$chart$utils$iter__51111(cljs.core.rest(s__51112__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(btns__$1);
})());
};
var G__51239 = function (var_args){
var p__51109 = null;
if (arguments.length > 0) {
var G__51258__i = 0, G__51258__a = new Array(arguments.length -  0);
while (G__51258__i < G__51258__a.length) {G__51258__a[G__51258__i] = arguments[G__51258__i + 0]; ++G__51258__i;}
  p__51109 = new cljs.core.IndexedSeq(G__51258__a,0,null);
} 
return G__51239__delegate.call(this,p__51109);};
G__51239.cljs$lang$maxFixedArity = 0;
G__51239.cljs$lang$applyTo = (function (arglist__51259){
var p__51109 = cljs.core.seq(arglist__51259);
return G__51239__delegate(p__51109);
});
G__51239.cljs$core$IFn$_invoke$arity$variadic = G__51239__delegate;
return G__51239;
})()
;
}));

(ui_component.atom.chart.utils.multi_bar_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(ui_component.atom.chart.utils.multi_bar_tabs.cljs$lang$applyTo = (function (seq51106){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51106));
}));

ui_component.atom.chart.utils.column_multi_picker = (function ui_component$atom$chart$utils$column_multi_picker(data,component_id,label,path){
var model = ui_component.utils.subscribe_local(component_id,path);
return (function (){
if(cljs.core.truth_(model)){
var headings = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.set,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keys,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(data),new cljs.core.Keyword(null,"data","data",-232669377))));
var btns = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (h){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),h,new cljs.core.Keyword(null,"label","label",1718410804),h], null);
}),headings);
var as_set = cljs.core.set(cljs.core.deref(model));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/chart/utils.cljs",new cljs.core.Keyword(null,"line","line",212345235),256], null)),new cljs.core.Keyword(null,"gap","gap",80255254),"5px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/chart/utils.cljs",new cljs.core.Keyword(null,"line","line",212345235),258], null)),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),label], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.chart.utils.multi_bar_tabs,new cljs.core.Keyword(null,"model","model",331153215),reagent.core.atom.cljs$core$IFn$_invoke$arity$1(as_set),new cljs.core.Keyword(null,"btns","btns",-116236379),btns], null)], null)], null);
} else {
return ui_component.atom.chart.utils.subscription_error(label,path);
}
});
});
/**
 * lets the user turn on/of some component of the Chart
 * 
 *   ---
 * 
 *   - config : (atom) holds a hash-map of the actual configuration properties see [[config]].
 *   - label : (string) tell the user which subcomponent this control is manipulating
 *   - path : (vector) path into `config` where the subcomponent 'inclusion' value is stored
 *   
 */
ui_component.atom.chart.utils.boolean_config = (function ui_component$atom$chart$utils$boolean_config(config,label,path){
var checked_QMARK_ = ui_component.utils.subscribe_local(config,path);
return (function (){
if(cljs.core.truth_(checked_QMARK_)){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.checkbox,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/chart/utils.cljs",new cljs.core.Keyword(null,"line","line",212345235),279], null)),new cljs.core.Keyword(null,"label","label",1718410804),((((typeof label === 'string') && (cljs.core.empty_QMARK_(label))))?"":new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/chart/utils.cljs",new cljs.core.Keyword(null,"line","line",212345235),282], null)),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),label], null)], null)
),new cljs.core.Keyword(null,"model","model",331153215),cljs.core.deref(checked_QMARK_),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__51118_SHARP_){
return ui_component.utils.dispatch_local(config,path,p1__51118_SHARP_);
})], null);
} else {
return ui_component.atom.chart.utils.subscription_error(label,path);
}
});
});
ui_component.atom.chart.utils.slider_config = (function ui_component$atom$chart$utils$slider_config(var_args){
var G__51121 = arguments.length;
switch (G__51121) {
case 5:
return ui_component.atom.chart.utils.slider_config.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 4:
return ui_component.atom.chart.utils.slider_config.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(ui_component.atom.chart.utils.slider_config.cljs$core$IFn$_invoke$arity$5 = (function (component_id,min,max,step,path){
var model = ui_component.utils.subscribe_local(component_id,path);
return (function (){
if(cljs.core.truth_((function (){var and__4251__auto__ = model;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.deref(model);
} else {
return and__4251__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.slider,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/chart/utils.cljs",new cljs.core.Keyword(null,"line","line",212345235),298], null)),new cljs.core.Keyword(null,"model","model",331153215),cljs.core.deref(model),new cljs.core.Keyword(null,"width","width",-384071477),"100px",new cljs.core.Keyword(null,"min","min",444991522),min,new cljs.core.Keyword(null,"max","max",61366548),max,new cljs.core.Keyword(null,"step","step",1288888124),step,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__51119_SHARP_){
return ui_component.utils.dispatch_local(component_id,path,p1__51119_SHARP_);
})], null);
} else {
return ui_component.atom.chart.utils.subscription_error("slider",path);
}
});
}));

(ui_component.atom.chart.utils.slider_config.cljs$core$IFn$_invoke$arity$4 = (function (component_id,min,max,path){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.chart.utils.slider_config,component_id,min,max,(1),path], null);
}));

(ui_component.atom.chart.utils.slider_config.cljs$lang$maxFixedArity = 5);

ui_component.atom.chart.utils.text_config = (function ui_component$atom$chart$utils$text_config(component_id,label,path){
var model = ui_component.utils.subscribe_local(component_id,path);
return (function (){
if(cljs.core.truth_(model)){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/chart/utils.cljs",new cljs.core.Keyword(null,"line","line",212345235),313], null)),new cljs.core.Keyword(null,"gap","gap",80255254),"5px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/chart/utils.cljs",new cljs.core.Keyword(null,"line","line",212345235),315], null)),new cljs.core.Keyword(null,"label","label",1718410804),label], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/chart/utils.cljs",new cljs.core.Keyword(null,"line","line",212345235),316], null)),new cljs.core.Keyword(null,"model","model",331153215),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(model)),new cljs.core.Keyword(null,"width","width",-384071477),"50px",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__51122_SHARP_){
return ui_component.utils.dispatch_local(component_id,path,p1__51122_SHARP_);
})], null)], null)], null);
} else {
return ui_component.atom.chart.utils.subscription_error(label,path);
}
});
});
/**
 * reconstitutes the 2-part string value required by `:strokeDasharray` from the
 *   2 values in the [[config]] atom.
 * 
 *   ---
 * 
 *   - dash
 *   - space
 *   
 */
ui_component.atom.chart.utils.strokeDasharray = (function ui_component$atom$chart$utils$strokeDasharray(var_args){
var args__4870__auto__ = [];
var len__4864__auto___51337 = arguments.length;
var i__4865__auto___51342 = (0);
while(true){
if((i__4865__auto___51342 < len__4864__auto___51337)){
args__4870__auto__.push((arguments[i__4865__auto___51342]));

var G__51343 = (i__4865__auto___51342 + (1));
i__4865__auto___51342 = G__51343;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return ui_component.atom.chart.utils.strokeDasharray.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(ui_component.atom.chart.utils.strokeDasharray.cljs$core$IFn$_invoke$arity$variadic = (function (dash,space){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(dash)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(space))].join('');
}));

(ui_component.atom.chart.utils.strokeDasharray.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ui_component.atom.chart.utils.strokeDasharray.cljs$lang$applyTo = (function (seq51123){
var G__51124 = cljs.core.first(seq51123);
var seq51123__$1 = cljs.core.next(seq51123);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51124,seq51123__$1);
}));

/**
 * provides the user with 2 sliders to control the 2 parts of the `:strokeDasharray`
 *   property of a chart's [`CartesianGrid`](https://recharts.org/en-US/api/CartesianGrid)
 * 
 *   ---
 * 
 *   - config : (atom) holds a hash-map of the actual configuration properties see [[config]].
 *   - label : (string) tell the user which axis this control is manipulating
 *   - min : (integer) minimum value for the slider
 *   - max : (integer) maximum value for the slider
 *   - path : (vector) path into `config` where the :strokeDasharray is stored
 *   
 */
ui_component.atom.chart.utils.dashArray_config = (function ui_component$atom$chart$utils$dashArray_config(component_id,label,min,max,path){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/chart/utils.cljs",new cljs.core.Keyword(null,"line","line",212345235),350], null)),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/chart/utils.cljs",new cljs.core.Keyword(null,"line","line",212345235),351], null)),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),label], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/chart/utils.cljs",new cljs.core.Keyword(null,"line","line",212345235),352], null)),new cljs.core.Keyword(null,"gap","gap",80255254),"5px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.chart.utils.slider_config,component_id,min,max,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"dash","dash",23821356))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.chart.utils.slider_config,component_id,min,max,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"space","space",348133475))], null)], null)], null)], null)], null);
});
/**
 * provides a multi-button control for setting a property fro a set of mutually-exclusive options
 * 
 *   ---
 * 
 *   - component-id : (string/keyword) unique ID for this component
 *   - btns : (vector) define the button(s) that set the value(s).
 * 
 *   | key       | description                                                          |
 *   |:----------|:---------------------------------------------------------------------|
 *   | `:id`     | the value to set when the use click the corresponding button control |
 *   | `:label`  | the label to put on the button                                       |
 * 
 * 
 *   - label : (string) tell the user what property is being manipulated
 *   - path : (vector) path into `config` for the correct property
 * 
 *   
 */
ui_component.atom.chart.utils.enumerated_config = (function ui_component$atom$chart$utils$enumerated_config(component_id,btns,label,path){
var model = ui_component.utils.subscribe_local(component_id,path);
return (function (){
if(cljs.core.truth_(model)){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/chart/utils.cljs",new cljs.core.Keyword(null,"line","line",212345235),381], null)),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/chart/utils.cljs",new cljs.core.Keyword(null,"line","line",212345235),382], null)),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),label], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.horizontal_bar_tabs,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/chart/utils.cljs",new cljs.core.Keyword(null,"line","line",212345235),384], null)),new cljs.core.Keyword(null,"model","model",331153215),cljs.core.deref(model),new cljs.core.Keyword(null,"tabs","tabs",-779855354),btns,new cljs.core.Keyword(null,"style","style",-496642736),ui_component.atom.chart.utils.btns_style,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__51127_SHARP_){
return ui_component.utils.dispatch_local(component_id,path,p1__51127_SHARP_);
})], null)], null)], null);
} else {
return ui_component.atom.chart.utils.subscription_error(label,path);
}
});
});
/**
 * lets the user configure the orientation of an axis. Which axis is defined by the arguments.
 * 
 *   ---
 * 
 *   - component-id : (string/keyword) unique ID for this component
 *   - btns : (vector) define the button that set the value(s).
 * 
 *   | key       | description                                                          |
 *   |:----------|:---------------------------------------------------------------------|
 *   | `:id`     | the value to set when the use click the corresponding button control |
 *   | `:label`  | the label to put on the button                                       |
 * 
 *   Each axis support a different set of possible orientations:
 * 
 *   | axis      | allowed orientations   |
 *   |:----------|:-----------------------|
 *   | X Axis    | `:top`  `:bottom`     |
 *   | Y Axis    | `:left`  `:right`     |
 * 
 *   - label : (string) tell the user which axis this control is manipulating
 *   - path : (vector) path into `config` where the orientation for the correct axis is stored
 *   
 */
ui_component.atom.chart.utils.orientation_config = (function ui_component$atom$chart$utils$orientation_config(component_id,btns,label,path){
return ui_component.atom.chart.utils.enumerated_config(component_id,btns,label,path);
});
/**
 * lets the user change the scale of an 'axis'. Which axis is defined by the arguments.
 *   Supports only:
 * 
 *  `auto`  `linear`  `pow`  `sqrt`  `log`
 * 
 *   scale types. Recharts supports many more. See [here](https://recharts.org/en-US/api/XAxis#scale)
 * 
 *   ---
 * 
 *   - component-id : id for the component.
 *   - label : (string) tell the user which axis this control is manipulating
 *   - path : (vector) path into `config` where the scale for the correct axis is stored
 *   
 */
ui_component.atom.chart.utils.scale_config = (function ui_component$atom$chart$utils$scale_config(component_id,label,path){
var btns = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"auto",new cljs.core.Keyword(null,"label","label",1718410804),"auto"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"linear",new cljs.core.Keyword(null,"label","label",1718410804),"linear"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"pow",new cljs.core.Keyword(null,"label","label",1718410804),"pow"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"sqrt",new cljs.core.Keyword(null,"label","label",1718410804),"sqrt"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"log",new cljs.core.Keyword(null,"label","label",1718410804),"log"], null)], null);
return ui_component.atom.chart.utils.enumerated_config(component_id,btns,label,path);
});
/**
 * lets the user change the layout of a 'legend'.
 *   Supports:
 * 
 *  `horizontal`  &  `linear`
 * 
 *   ---
 * 
 *   - component-id : id of the component
 *   - path : (vector) path into `config` where the scale for the layout is stored
 *   
 */
ui_component.atom.chart.utils.layout_config = (function ui_component$atom$chart$utils$layout_config(component_id,path){
var btns = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"horizontal",new cljs.core.Keyword(null,"label","label",1718410804),"horizontal"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"vertical",new cljs.core.Keyword(null,"label","label",1718410804),"vertical"], null)], null);
return ui_component.atom.chart.utils.enumerated_config(component_id,btns,":layout",path);
});
/**
 * lets the user change the alignment of a 'legend'.
 *   Supports:
 * 
 *  `left`  `center`  `right`
 * 
 *   ---
 * 
 *   - component-id : id of the component
 *   - path : (vector) path into `config` where the scale for the layout is stored
 *   
 */
ui_component.atom.chart.utils.align_config = (function ui_component$atom$chart$utils$align_config(component_id,path){
var btns = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"left",new cljs.core.Keyword(null,"label","label",1718410804),"left"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"center",new cljs.core.Keyword(null,"label","label",1718410804),"center"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"right",new cljs.core.Keyword(null,"label","label",1718410804),"right"], null)], null);
return ui_component.atom.chart.utils.enumerated_config(component_id,btns,":align",path);
});
/**
 * lets the user change the vertical alignment of a 'legend'.
 *   Supports:
 * 
 *  `top`  `middle`  `bottom`
 * 
 *   ---
 * 
 *   - component-id : id of the component
 *   - path : (vector) path into `config` where the scale for the layout is stored
 *   
 */
ui_component.atom.chart.utils.verticalAlign_config = (function ui_component$atom$chart$utils$verticalAlign_config(component_id,path){
var btns = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"top",new cljs.core.Keyword(null,"label","label",1718410804),"top"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"middle",new cljs.core.Keyword(null,"label","label",1718410804),"middle"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"bottom",new cljs.core.Keyword(null,"label","label",1718410804),"bottom"], null)], null);
return ui_component.atom.chart.utils.enumerated_config(component_id,btns,":verticalAlign",path);
});
ui_component.atom.chart.utils.color_config = (function ui_component$atom$chart$utils$color_config(var_args){
var args__4870__auto__ = [];
var len__4864__auto___51358 = arguments.length;
var i__4865__auto___51359 = (0);
while(true){
if((i__4865__auto___51359 < len__4864__auto___51358)){
args__4870__auto__.push((arguments[i__4865__auto___51359]));

var G__51360 = (i__4865__auto___51359 + (1));
i__4865__auto___51359 = G__51360;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return ui_component.atom.chart.utils.color_config.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(ui_component.atom.chart.utils.color_config.cljs$core$IFn$_invoke$arity$variadic = (function (config_data,label,path,p__51139){
var vec__51140 = p__51139;
var position = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51140,(0),null);
var d = ui_component.utils.helpers.resolve_value(config_data);
var showing_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var p = (function (){var or__4253__auto__ = position;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"right-center","right-center",2147253074);
}
})();
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.popover_anchor_wrapper,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/chart/utils.cljs",new cljs.core.Keyword(null,"line","line",212345235),504], null)),new cljs.core.Keyword(null,"showing?","showing?",2094921488),cljs.core.deref(showing_QMARK_),new cljs.core.Keyword(null,"position","position",-2011731912),p,new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/chart/utils.cljs",new cljs.core.Keyword(null,"line","line",212345235),507], null)),new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(d),path),new cljs.core.Keyword(null,"color","color",1011675173),ui_component.utils.color.best_text_color(ui_component.utils.color.hex__GT_rgba(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(d),path)))], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(showing_QMARK_,cljs.core.not);
})], null),new cljs.core.Keyword(null,"popover","popover",-1809582136),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.popover_content_wrapper,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/chart/utils.cljs",new cljs.core.Keyword(null,"line","line",212345235),513], null)),new cljs.core.Keyword(null,"close-button?","close-button?",-1030817687),false,new cljs.core.Keyword(null,"no-clip?","no-clip?",-188884951),false,new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_colorful.HexColorPicker,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(d),path),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__51130_SHARP_){
return ui_component.utils.helpers.handle_change_path(config_data,path,p1__51130_SHARP_);
})], null)], null)], null)], null);
});
}));

(ui_component.atom.chart.utils.color_config.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(ui_component.atom.chart.utils.color_config.cljs$lang$applyTo = (function (seq51131){
var G__51132 = cljs.core.first(seq51131);
var seq51131__$1 = cljs.core.next(seq51131);
var G__51133 = cljs.core.first(seq51131__$1);
var seq51131__$2 = cljs.core.next(seq51131__$1);
var G__51134 = cljs.core.first(seq51131__$2);
var seq51131__$3 = cljs.core.next(seq51131__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51132,G__51133,G__51134,seq51131__$3);
}));

ui_component.atom.chart.utils.color_config_text = (function ui_component$atom$chart$utils$color_config_text(var_args){
var args__4870__auto__ = [];
var len__4864__auto___51361 = arguments.length;
var i__4865__auto___51362 = (0);
while(true){
if((i__4865__auto___51362 < len__4864__auto___51361)){
args__4870__auto__.push((arguments[i__4865__auto___51362]));

var G__51363 = (i__4865__auto___51362 + (1));
i__4865__auto___51362 = G__51363;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return ui_component.atom.chart.utils.color_config_text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(ui_component.atom.chart.utils.color_config_text.cljs$core$IFn$_invoke$arity$variadic = (function (component_id,label,path,p__51172){
var vec__51173 = p__51172;
var position = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51173,(0),null);
var model = ui_component.utils.subscribe_local(component_id,path);
return (function (){
if(cljs.core.truth_(model)){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/chart/utils.cljs",new cljs.core.Keyword(null,"line","line",212345235),526], null)),new cljs.core.Keyword(null,"gap","gap",80255254),"5px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.chart.utils.color_config,component_id,label,path,position,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/chart/utils.cljs",new cljs.core.Keyword(null,"line","line",212345235),529], null)),new cljs.core.Keyword(null,"width","width",-384071477),"100px",new cljs.core.Keyword(null,"model","model",331153215),cljs.core.deref(model),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__51147_SHARP_){
return ui_component.utils.dispatch_local(component_id,path,p1__51147_SHARP_);
})], null)], null)], null)], null);
} else {
return ui_component.atom.chart.utils.subscription_error(label,path);
}
});
}));

(ui_component.atom.chart.utils.color_config_text.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(ui_component.atom.chart.utils.color_config_text.cljs$lang$applyTo = (function (seq51149){
var G__51151 = cljs.core.first(seq51149);
var seq51149__$1 = cljs.core.next(seq51149);
var G__51152 = cljs.core.first(seq51149__$1);
var seq51149__$2 = cljs.core.next(seq51149__$1);
var G__51153 = cljs.core.first(seq51149__$2);
var seq51149__$3 = cljs.core.next(seq51149__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51151,G__51152,G__51153,seq51149__$3);
}));

ui_component.atom.chart.utils.isAnimationActive = (function ui_component$atom$chart$utils$isAnimationActive(component_id){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.chart.utils.boolean_config,component_id,":isAnimationActive",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"isAnimationActive","isAnimationActive",441882911)], null)], null);
});
ui_component.atom.chart.utils.grid = (function ui_component$atom$chart$utils$grid(component_id){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/chart/utils.cljs",new cljs.core.Keyword(null,"line","line",212345235),553], null)),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.chart.utils.boolean_config,component_id,":grid",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"include","include",153360230)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.chart.utils.dashArray_config,component_id,":strokeDasharray",(1),(10),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"strokeDasharray","strokeDasharray",1664678421)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.chart.utils.color_config_text,component_id,":stroke",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"stroke","stroke",1741823555)], null)], null)], null)], null);
});
ui_component.atom.chart.utils.x_axis = (function ui_component$atom$chart$utils$x_axis(data,component_id){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/chart/utils.cljs",new cljs.core.Keyword(null,"line","line",212345235),561], null)),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.chart.utils.boolean_config,component_id,":x-axis",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253),new cljs.core.Keyword(null,"include","include",153360230)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.chart.utils.column_picker,data,component_id,":dataKey",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253),new cljs.core.Keyword(null,"dataKey","dataKey",-334896751)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.chart.utils.orientation_config,component_id,ui_component.atom.chart.utils.x_axis_btns,":orientation",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253),new cljs.core.Keyword(null,"orientation","orientation",623557579)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.chart.utils.scale_config,component_id,":scale",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253),new cljs.core.Keyword(null,"scale","scale",-230427353)], null)], null)], null)], null);
});
ui_component.atom.chart.utils.y_axis = (function ui_component$atom$chart$utils$y_axis(data,component_id){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/chart/utils.cljs",new cljs.core.Keyword(null,"line","line",212345235),569], null)),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.chart.utils.boolean_config,component_id,":y-axis",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434),new cljs.core.Keyword(null,"include","include",153360230)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.chart.utils.column_picker,data,component_id,":dataKey",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434),new cljs.core.Keyword(null,"dataKey","dataKey",-334896751)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.chart.utils.orientation_config,component_id,ui_component.atom.chart.utils.y_axis_btns,":orientation",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434),new cljs.core.Keyword(null,"orientation","orientation",623557579)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.chart.utils.scale_config,component_id,":scale",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434),new cljs.core.Keyword(null,"scale","scale",-230427353)], null)], null)], null)], null);
});
ui_component.atom.chart.utils.tooltip = (function ui_component$atom$chart$utils$tooltip(component_id){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.chart.utils.boolean_config,component_id,":tooltip",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.Keyword(null,"include","include",153360230)], null)], null);
});
ui_component.atom.chart.utils.legend = (function ui_component$atom$chart$utils$legend(component_id){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/chart/utils.cljs",new cljs.core.Keyword(null,"line","line",212345235),581], null)),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.chart.utils.boolean_config,component_id,":legend",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"legend","legend",-1027192245),new cljs.core.Keyword(null,"include","include",153360230)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.chart.utils.layout_config,component_id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"legend","legend",-1027192245),new cljs.core.Keyword(null,"layout","layout",-2120940921)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.chart.utils.align_config,component_id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"legend","legend",-1027192245),new cljs.core.Keyword(null,"align","align",1964212802)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.chart.utils.verticalAlign_config,component_id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"legend","legend",-1027192245),new cljs.core.Keyword(null,"verticalAlign","verticalAlign",465597462)], null)], null)], null)], null);
});
ui_component.atom.chart.utils.option = (function ui_component$atom$chart$utils$option(component_id,label,path_root){
var chosen_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path_root,new cljs.core.Keyword(null,"chosen","chosen",-1422409985));
var keys_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path_root,new cljs.core.Keyword(null,"keys","keys",1068423698));
var chosen = ui_component.utils.subscribe_local(component_id,chosen_path);
var keys = ui_component.utils.subscribe_local(component_id,keys_path);
var btns = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),k,new cljs.core.Keyword(null,"label","label",1718410804),k], null);
}),cljs.core.deref(keys));
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/chart/utils.cljs",new cljs.core.Keyword(null,"line","line",212345235),600], null)),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/chart/utils.cljs",new cljs.core.Keyword(null,"line","line",212345235),601], null)),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),label], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.horizontal_bar_tabs,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/chart/utils.cljs",new cljs.core.Keyword(null,"line","line",212345235),603], null)),new cljs.core.Keyword(null,"model","model",331153215),cljs.core.deref(chosen),new cljs.core.Keyword(null,"tabs","tabs",-779855354),btns,new cljs.core.Keyword(null,"style","style",-496642736),ui_component.atom.chart.utils.btns_style,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__51181_SHARP_){
return ui_component.utils.dispatch_local(component_id,chosen_path,p1__51181_SHARP_);
})], null)], null)], null);
});
});
ui_component.atom.chart.utils.standard_chart_config = (function ui_component$atom$chart$utils$standard_chart_config(data,component_id){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.chart.utils.isAnimationActive,component_id], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.line,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/chart/utils.cljs",new cljs.core.Keyword(null,"line","line",212345235),624], null)),new cljs.core.Keyword(null,"size","size",1098693007),"2px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.chart.utils.grid,component_id], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.line,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/chart/utils.cljs",new cljs.core.Keyword(null,"line","line",212345235),626], null)),new cljs.core.Keyword(null,"size","size",1098693007),"2px"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.chart.utils.x_axis,data,component_id], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.line,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/chart/utils.cljs",new cljs.core.Keyword(null,"line","line",212345235),628], null)),new cljs.core.Keyword(null,"size","size",1098693007),"2px"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.chart.utils.y_axis,data,component_id], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.line,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/chart/utils.cljs",new cljs.core.Keyword(null,"line","line",212345235),630], null)),new cljs.core.Keyword(null,"size","size",1098693007),"2px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.chart.utils.tooltip,component_id], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.line,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/chart/utils.cljs",new cljs.core.Keyword(null,"line","line",212345235),632], null)),new cljs.core.Keyword(null,"size","size",1098693007),"2px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.chart.utils.legend,component_id], null)], null);
});
ui_component.atom.chart.utils.non_gridded_chart_config = (function ui_component$atom$chart$utils$non_gridded_chart_config(data,component_id){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.chart.utils.isAnimationActive,component_id], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.line,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/chart/utils.cljs",new cljs.core.Keyword(null,"line","line",212345235),639], null)),new cljs.core.Keyword(null,"size","size",1098693007),"2px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.chart.utils.tooltip,component_id], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.line,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/chart/utils.cljs",new cljs.core.Keyword(null,"line","line",212345235),641], null)),new cljs.core.Keyword(null,"size","size",1098693007),"2px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.chart.utils.legend,component_id], null)], null);
});
ui_component.atom.chart.utils.override = (function ui_component$atom$chart$utils$override(s,ui,tag){
if(((cljs.core.seq(ui)) && ((((!(cljs.core.empty_QMARK_(ui)))) && (cljs.core.contains_QMARK_(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.keys(ui)),tag)))))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(ui,tag);
} else {
return s;
}
});
ui_component.atom.chart.utils.chart_grid = (function ui_component$atom$chart$utils$chart_grid(component_id,ui){
var grid_QMARK_ = ui_component.utils.subscribe_local(component_id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"include","include",153360230)], null));
var grid_dash = ui_component.utils.subscribe_local(component_id,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"strokeDasharray","strokeDasharray",1664678421),new cljs.core.Keyword(null,"dash","dash",23821356)], null));
var grid_space = ui_component.utils.subscribe_local(component_id,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"strokeDasharray","strokeDasharray",1664678421),new cljs.core.Keyword(null,"space","space",348133475)], null));
var grid_stroke = ui_component.utils.subscribe_local(component_id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"stroke","stroke",1741823555)], null));
if(cljs.core.truth_(ui_component.atom.chart.utils.override(cljs.core.deref(grid_QMARK_),ui,new cljs.core.Keyword(null,"grid","grid",402978600)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$recharts.CartesianGrid,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"strokeDasharray","strokeDasharray",1664678421),ui_component.atom.chart.utils.strokeDasharray.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(grid_dash),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(grid_space)], 0)),new cljs.core.Keyword(null,"stroke","stroke",1741823555),cljs.core.deref(grid_stroke)], null)], null);
} else {
return null;
}
});
ui_component.atom.chart.utils.standard_chart_components = (function ui_component$atom$chart$utils$standard_chart_components(component_id,ui){
var grid_QMARK_ = ui_component.utils.subscribe_local(component_id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"include","include",153360230)], null));
var grid_dash = ui_component.utils.subscribe_local(component_id,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"strokeDasharray","strokeDasharray",1664678421),new cljs.core.Keyword(null,"dash","dash",23821356)], null));
var grid_space = ui_component.utils.subscribe_local(component_id,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"strokeDasharray","strokeDasharray",1664678421),new cljs.core.Keyword(null,"space","space",348133475)], null));
var grid_stroke = ui_component.utils.subscribe_local(component_id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"stroke","stroke",1741823555)], null));
var x_axis_QMARK_ = ui_component.utils.subscribe_local(component_id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253),new cljs.core.Keyword(null,"include","include",153360230)], null));
var x_axis_dataKey = ui_component.utils.subscribe_local(component_id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253),new cljs.core.Keyword(null,"dataKey","dataKey",-334896751)], null));
var x_axis_orientation = ui_component.utils.subscribe_local(component_id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253),new cljs.core.Keyword(null,"orientation","orientation",623557579)], null));
var x_axis_scale = ui_component.utils.subscribe_local(component_id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253),new cljs.core.Keyword(null,"scale","scale",-230427353)], null));
var y_axis_QMARK_ = ui_component.utils.subscribe_local(component_id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434),new cljs.core.Keyword(null,"include","include",153360230)], null));
var y_axis_dataKey = ui_component.utils.subscribe_local(component_id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434),new cljs.core.Keyword(null,"dataKey","dataKey",-334896751)], null));
var y_axis_orientation = ui_component.utils.subscribe_local(component_id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434),new cljs.core.Keyword(null,"orientation","orientation",623557579)], null));
var y_axis_scale = ui_component.utils.subscribe_local(component_id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434),new cljs.core.Keyword(null,"scale","scale",-230427353)], null));
var tooltip_QMARK_ = ui_component.utils.subscribe_local(component_id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.Keyword(null,"include","include",153360230)], null));
var legend_QMARK_ = ui_component.utils.subscribe_local(component_id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"legend","legend",-1027192245),new cljs.core.Keyword(null,"include","include",153360230)], null));
var legend_layout = ui_component.utils.subscribe_local(component_id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"legend","legend",-1027192245),new cljs.core.Keyword(null,"layout","layout",-2120940921)], null));
var legend_align = ui_component.utils.subscribe_local(component_id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"legend","legend",-1027192245),new cljs.core.Keyword(null,"align","align",1964212802)], null));
var legend_verticalAlign = ui_component.utils.subscribe_local(component_id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"legend","legend",-1027192245),new cljs.core.Keyword(null,"verticalAlign","verticalAlign",465597462)], null));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(cljs.core.truth_(ui_component.atom.chart.utils.override(cljs.core.deref(grid_QMARK_),ui,new cljs.core.Keyword(null,"grid","grid",402978600)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$recharts.CartesianGrid,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"strokeDasharray","strokeDasharray",1664678421),ui_component.atom.chart.utils.strokeDasharray.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(grid_dash),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(grid_space)], 0)),new cljs.core.Keyword(null,"stroke","stroke",1741823555),cljs.core.deref(grid_stroke)], null)], null):null),(cljs.core.truth_(ui_component.atom.chart.utils.override(cljs.core.deref(x_axis_QMARK_),ui,new cljs.core.Keyword(null,"x-axis","x-axis",-1736373253)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$recharts.XAxis,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dataKey","dataKey",-334896751),cljs.core.deref(x_axis_dataKey),new cljs.core.Keyword(null,"orientation","orientation",623557579),cljs.core.deref(x_axis_orientation),new cljs.core.Keyword(null,"scale","scale",-230427353),cljs.core.deref(x_axis_scale)], null)], null):null),(cljs.core.truth_(ui_component.atom.chart.utils.override(cljs.core.deref(y_axis_QMARK_),ui,new cljs.core.Keyword(null,"y-axis","y-axis",-1055729434)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$recharts.YAxis,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dataKey","dataKey",-334896751),cljs.core.deref(y_axis_dataKey),new cljs.core.Keyword(null,"orientation","orientation",623557579),cljs.core.deref(y_axis_orientation),new cljs.core.Keyword(null,"scale","scale",-230427353),cljs.core.deref(y_axis_scale)], null)], null):null),(cljs.core.truth_(ui_component.atom.chart.utils.override(cljs.core.deref(tooltip_QMARK_),ui,new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$recharts.Tooltip], null):null),(cljs.core.truth_(ui_component.atom.chart.utils.override(cljs.core.deref(legend_QMARK_),ui,new cljs.core.Keyword(null,"legend","legend",-1027192245)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$recharts.Legend,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"layout","layout",-2120940921),cljs.core.deref(legend_layout),new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.deref(legend_align),new cljs.core.Keyword(null,"verticalAlign","verticalAlign",465597462),cljs.core.deref(legend_verticalAlign)], null)], null):null)], null);
});
ui_component.atom.chart.utils.non_gridded_chart_components = (function ui_component$atom$chart$utils$non_gridded_chart_components(component_id,ui){
var tooltip_QMARK_ = ui_component.utils.subscribe_local(component_id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.Keyword(null,"include","include",153360230)], null));
var legend_QMARK_ = ui_component.utils.subscribe_local(component_id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"legend","legend",-1027192245),new cljs.core.Keyword(null,"include","include",153360230)], null));
var legend_layout = ui_component.utils.subscribe_local(component_id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"legend","legend",-1027192245),new cljs.core.Keyword(null,"layout","layout",-2120940921)], null));
var legend_align = ui_component.utils.subscribe_local(component_id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"legend","legend",-1027192245),new cljs.core.Keyword(null,"align","align",1964212802)], null));
var legend_verticalAlign = ui_component.utils.subscribe_local(component_id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"legend","legend",-1027192245),new cljs.core.Keyword(null,"verticalAlign","verticalAlign",465597462)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(cljs.core.truth_(ui_component.atom.chart.utils.override(cljs.core.deref(tooltip_QMARK_),ui,new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$recharts.Tooltip], null):null),(cljs.core.truth_(ui_component.atom.chart.utils.override(cljs.core.deref(legend_QMARK_),ui,new cljs.core.Keyword(null,"legend","legend",-1027192245)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$recharts.Legend,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"layout","layout",-2120940921),cljs.core.deref(legend_layout),new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.deref(legend_align),new cljs.core.Keyword(null,"verticalAlign","verticalAlign",465597462),cljs.core.deref(legend_verticalAlign)], null)], null):null)], null);
});

//# sourceMappingURL=ui_component.atom.chart.utils.js.map
