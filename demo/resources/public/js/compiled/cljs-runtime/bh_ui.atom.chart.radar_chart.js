goog.provide('bh_ui.atom.chart.radar_chart');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"bh-ui.atom.chart.radar-chart",null,19,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bh-ui.atom.chart.radar-chart"], null);
}),null)),null,-1445988887,null);
bh_ui.atom.chart.radar_chart.source_code = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Symbol(null,"RadarChart","RadarChart",2096534809,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(400),new cljs.core.Keyword(null,"height","height",1025178622),(400),new cljs.core.Keyword(null,"outerRadius","outerRadius",1915551407),"75%",new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"data","data",1407862150,null))], null),cljs.core.list(new cljs.core.Symbol("utils","non-gridded-chart-components","utils/non-gridded-chart-components",-1319259187,null),new cljs.core.Symbol(null,"component-id","component-id",-1103321986,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Symbol(null,"PolarGrid","PolarGrid",-1010412177,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Symbol(null,"PolarAngleAxis","PolarAngleAxis",-2031645012,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dataKey","dataKey",-334896751),new cljs.core.Keyword(null,"subject","subject",-1411880451)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Symbol(null,"PolarRadiusAxis","PolarRadiusAxis",-2023155210,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"angle","angle",1622094254),"30",new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(150)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Symbol(null,"Radar","Radar",161778311,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Mark",new cljs.core.Keyword(null,"dataKey","dataKey",-334896751),new cljs.core.Keyword(null,"A","A",-1688942394),new cljs.core.Keyword(null,"fill","fill",883462889),"#8884d8",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#8884d8",new cljs.core.Keyword(null,"fillOpacity","fillOpacity",619211981),0.5], null)], null)], null);
bh_ui.atom.chart.radar_chart.sample_data = bh_ui.utils.example_data.meta_tabular_data;
bh_ui.atom.chart.radar_chart.sample_config_data = bh_ui.utils.example_data.tabular_column_config_data;
bh_ui.atom.chart.radar_chart.random_data = bh_ui.utils.example_data.random_meta_positive_tabular_data;
bh_ui.atom.chart.radar_chart.get_range_across_fields = (function bh_ui$atom$chart$radar_chart$get_range_across_fields(data){
var source_data = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
var all_values = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,a){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58878_SHARP_){
return (a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(p1__58878_SHARP_) : a.call(null,p1__58878_SHARP_));
}),source_data);
}),cljs.core.keys(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__58879){
var vec__58880 = p__58879;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58880,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58880,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"number","number",1570378438),v);
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),new cljs.core.Keyword(null,"fields","fields",-1932066230)], null)))))));
var domainMax = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,all_values);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),domainMax], null)], null);
});
bh_ui.atom.chart.radar_chart.get_field_range = (function bh_ui$atom$chart$radar_chart$get_field_range(field,data){
var source_data = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
var domainMin = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58883_SHARP_){
return (field.cljs$core$IFn$_invoke$arity$1 ? field.cljs$core$IFn$_invoke$arity$1(p1__58883_SHARP_) : field.call(null,p1__58883_SHARP_));
}),source_data));
var domainMax = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58884_SHARP_){
return (field.cljs$core$IFn$_invoke$arity$1 ? field.cljs$core$IFn$_invoke$arity$1(p1__58884_SHARP_) : field.call(null,p1__58884_SHARP_));
}),source_data));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(domainMin,domainMax)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),domainMax], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [domainMin,domainMax], null)], null);
}
});
bh_ui.atom.chart.radar_chart.domain_range = (function bh_ui$atom$chart$radar_chart$domain_range(data){
var domainField = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),new cljs.core.Keyword(null,"domain","domain",1847214937)], null));
if((domainField == null)){
return bh_ui.atom.chart.radar_chart.get_range_across_fields(data);
} else {
return bh_ui.atom.chart.radar_chart.get_field_range(domainField,data);
}
});
/**
 * provides both the definition and the initial default values for various properties that
 *   allow user to customize the visualization of the chart.
 * 
 *   ---
 * 
 * - data : (atom) atom containing the data and metadata for this chart
 * 
 * > See Also:
 * >
 * > [Recharts/line-chart](https://recharts.org/en-US/api/LineChart)
 * > [tabular-data]()
 *   
 */
bh_ui.atom.chart.radar_chart.local_config = (function bh_ui$atom$chart$radar_chart$local_config(data){
var ret = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bh_ui.atom.chart.radar_chart.domain_range(data),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,a){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([a,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"include","include",153360230),true,new cljs.core.Keyword(null,"name","name",1843675177),a,new cljs.core.Keyword(null,"fill","fill",883462889),bh_ui.utils.color.get_color(idx),new cljs.core.Keyword(null,"stroke","stroke",1741823555),bh_ui.utils.color.get_color(idx),new cljs.core.Keyword(null,"fillOpacity","fillOpacity",619211981),0.6], null)]);
}),cljs.core.keys(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__58885){
var vec__58886 = p__58885;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58886,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58886,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"number","number",1570378438),v);
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),new cljs.core.Keyword(null,"fields","fields",-1932066230)], null))))))], 0));
return ret;
});
/**
 * constructs the configuration panel for the chart's configurable properties. This is specific to
 *   this being a radar-chart component (see [[local-config]]).
 * 
 *   Merges together the configuration needed for:
 * 
 *   1. radar charts
 *   2. pub/sub between components of a container
 *   3. `default-config` for all Rechart-based types
 *   4. the `tab-panel` for view/edit configuration properties and data
 *   5. sets properties of the default-config (local config properties are just set inside [[local-config]])
 *   6. sets meta-data for properties this component publishes (`:pub`) or subscribes (`:sub`)
 * 
 *   ---
 * 
 *   - component-id : (string) unique id of the chart
 *   - data : (atom) metadata wrapped data  to display
 *   
 */
bh_ui.atom.chart.radar_chart.config = (function bh_ui$atom$chart$radar_chart$config(component_id,data){
return cljs.core.assoc_in(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bh_ui.utils.default_pub_sub,bh_ui.atom.chart.utils.default_config,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tab-panel","tab-panel",439413104),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(component_id,"config"),new cljs.core.Keyword(null,"data-path","data-path",674802181),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"containers","containers",-2127048083),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(component_id),new cljs.core.Keyword(null,"tab-panel","tab-panel",439413104)], null)], null)], null),bh_ui.atom.chart.radar_chart.local_config(data)], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fullMark","fullMark",1847253534),new cljs.core.Keyword(null,"include","include",153360230)], null),false);
});
bh_ui.atom.chart.radar_chart.radar_config = (function bh_ui$atom$chart$radar_chart$radar_config(component_id,label,path,position){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"bh_ui/atom/chart/radar_chart.cljs",new cljs.core.Keyword(null,"line","line",212345235),132], null)),new cljs.core.Keyword(null,"gap","gap",80255254),"5px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.chart.utils.boolean_config,component_id,label,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"include","include",153360230))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.chart.utils.color_config,component_id,":fill",cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"fill","fill",883462889)),position], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.chart.utils.color_config,component_id,":stroke",cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"stroke","stroke",1741823555)),position], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.chart.utils.slider_config,component_id,(0),(1),0.1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"fillOpacity","fillOpacity",619211981))], null)], null)], null);
});
bh_ui.atom.chart.radar_chart.make_radar_config = (function bh_ui$atom$chart$radar_chart$make_radar_config(component_id,data){
var ret = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,a){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.chart.radar_chart.radar_config,component_id,a,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null),new cljs.core.Keyword(null,"below-right","below-right",1598040732)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["radar-config-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)].join('')], null));
}),cljs.core.keys(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__58889){
var vec__58890 = p__58889;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58890,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58890,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"number","number",1570378438),v);
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),new cljs.core.Keyword(null,"fields","fields",-1932066230)], null))))));
return ret;
});
/**
 * the panel of configuration controls
 * 
 *   ---
 * 
 *   - data : (atom) data to display (may be used by the standard configuration components for thins like axes, etc.
 *   - config : (atom) holds all the configuration settings made by the user
 *   
 */
bh_ui.atom.chart.radar_chart.config_panel = (function bh_ui$atom$chart$radar_chart$config_panel(data,component_id){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"bh_ui/atom/chart/radar_chart.cljs",new cljs.core.Keyword(null,"line","line",212345235),164], null)),new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"15px",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"1px solid #DDD",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#f7f7f7"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"bh_ui/atom/chart/radar_chart.cljs",new cljs.core.Keyword(null,"line","line",212345235),173], null)),new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"style","style",-496642736),bh_ui.utils.h_wrap,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),bh_ui.atom.chart.radar_chart.make_radar_config(component_id,data)], null)], null)], null);
});
bh_ui.atom.chart.radar_chart.make_radar_display = (function bh_ui$atom$chart$radar_chart$make_radar_display(data,subscriptions,isAnimationActive_QMARK_){
var ret = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (a){
if(cljs.core.truth_(bh_ui.utils.resolve_sub(subscriptions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,new cljs.core.Keyword(null,"include","include",153360230)], null)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$recharts.Radar,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),bh_ui.utils.resolve_sub(subscriptions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,new cljs.core.Keyword(null,"name","name",1843675177)], null)),new cljs.core.Keyword(null,"dataKey","dataKey",-334896751),a,new cljs.core.Keyword(null,"fill","fill",883462889),bh_ui.utils.resolve_sub(subscriptions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,new cljs.core.Keyword(null,"fill","fill",883462889)], null)),new cljs.core.Keyword(null,"stroke","stroke",1741823555),bh_ui.utils.resolve_sub(subscriptions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,new cljs.core.Keyword(null,"stroke","stroke",1741823555)], null)),new cljs.core.Keyword(null,"fillOpacity","fillOpacity",619211981),bh_ui.utils.resolve_sub(subscriptions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,new cljs.core.Keyword(null,"fillOpacity","fillOpacity",619211981)], null))], null)], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
}),cljs.core.keys(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__58893){
var vec__58894 = p__58893;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58894,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58894,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"number","number",1570378438),v);
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),new cljs.core.Keyword(null,"fields","fields",-1932066230)], null)))))));
return ret;
});
/**
 * the chart to draw, taking cues from the settings of the configuration panel
 * 
 *   ---
 * 
 *   - data : (atom) any data used by the component's ui
 *   - component-id : (string) unique identifier for this specific widget
 *   
 */
bh_ui.atom.chart.radar_chart.component_STAR_ = (function bh_ui$atom$chart$radar_chart$component_STAR_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___58907 = arguments.length;
var i__4865__auto___58908 = (0);
while(true){
if((i__4865__auto___58908 < len__4864__auto___58907)){
args__4870__auto__.push((arguments[i__4865__auto___58908]));

var G__58909 = (i__4865__auto___58908 + (1));
i__4865__auto___58908 = G__58909;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return bh_ui.atom.chart.radar_chart.component_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(bh_ui.atom.chart.radar_chart.component_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (p__58898){
var map__58899 = p__58898;
var map__58899__$1 = cljs.core.__destructure_map(map__58899);
var params = map__58899__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58899__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58899__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var container_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58899__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var subscriptions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58899__$1,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776));
var isAnimationActive_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58899__$1,new cljs.core.Keyword(null,"isAnimationActive?","isAnimationActive?",-1020610123));
var d = ((cljs.core.empty_QMARK_(data))?cljs.core.PersistentVector.EMPTY:cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.Keyword(null,"data","data",-232669377)));
var domain = bh_ui.utils.resolve_sub(subscriptions,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$recharts.ResponsiveContainer,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$recharts.RadarChart,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$recharts.PolarGrid], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$recharts.PolarAngleAxis,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dataKey","dataKey",-334896751),new cljs.core.Keyword(null,"name","name",1843675177)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$recharts.PolarRadiusAxis,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"angle","angle",1622094254),(60),new cljs.core.Keyword(null,"domain","domain",1847214937),(function (){var or__4253__auto__ = domain;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10000)], null);
}
})()], null)], null),bh_ui.atom.chart.radar_chart.make_radar_display(data,subscriptions,isAnimationActive_QMARK_)], null)], null);
}));

(bh_ui.atom.chart.radar_chart.component_STAR_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bh_ui.atom.chart.radar_chart.component_STAR_.cljs$lang$applyTo = (function (seq58897){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58897));
}));

bh_ui.atom.chart.radar_chart.component = (function bh_ui$atom$chart$radar_chart$component(var_args){
var args__4870__auto__ = [];
var len__4864__auto___58910 = arguments.length;
var i__4865__auto___58911 = (0);
while(true){
if((i__4865__auto___58911 < len__4864__auto___58910)){
args__4870__auto__.push((arguments[i__4865__auto___58911]));

var G__58912 = (i__4865__auto___58911 + (1));
i__4865__auto___58911 = G__58912;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return bh_ui.atom.chart.radar_chart.component.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(bh_ui.atom.chart.radar_chart.component.cljs$core$IFn$_invoke$arity$variadic = (function (p__58901){
var map__58902 = p__58901;
var map__58902__$1 = cljs.core.__destructure_map(map__58902);
var params = map__58902__$1;
var component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58902__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var input_params = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(params,new cljs.core.Keyword(null,"component*","component*",1963849553),bh_ui.atom.chart.radar_chart.component_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"component-panel","component-panel",-744929766),bh_ui.atom.chart.wrapper_2.component_panel,new cljs.core.Keyword(null,"config","config",994861415),bh_ui.atom.chart.radar_chart.config,new cljs.core.Keyword(null,"local-config","local-config",-2015662519),bh_ui.atom.chart.radar_chart.local_config], 0));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.chart.wrapper_2.base_chart], null),cljs.core.seq(input_params));
}));

(bh_ui.atom.chart.radar_chart.component.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bh_ui.atom.chart.radar_chart.component.cljs$lang$applyTo = (function (seq58900){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58900));
}));

bh_ui.atom.chart.radar_chart.meta_data = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rechart","radar","rechart/radar",1889158575),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),bh_ui.atom.chart.radar_chart.component,new cljs.core.Keyword(null,"ports","ports",-1014790862),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("port","sink","port/sink",185875552),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword("port","sink","port/sink",185875552)], null)], null)], null);
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-meta","register-meta",1726375773),bh_ui.atom.chart.radar_chart.meta_data], null));

//# sourceMappingURL=bh_ui.atom.chart.radar_chart.js.map
