goog.provide('ui_component.atom.chart.scatter_chart');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"ui-component.atom.chart.scatter-chart",null,14,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ui-component.atom.chart.scatter-chart"], null);
}),null)),null,652652344,null);
ui_component.atom.chart.scatter_chart.sample_data = ui_component.utils.example_data.meta_tabular_data;
ui_component.atom.chart.scatter_chart.sample_config_data = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui_component.utils.example_data.tabular_row_config_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Page-A","Page-A",-2057230759),new cljs.core.Keyword(null,"Page-B","Page-B",1537850197),new cljs.core.Keyword(null,"Page-C","Page-C",936090875),new cljs.core.Keyword(null,"Page-D","Page-D",1607032085),new cljs.core.Keyword(null,"Page-E","Page-E",-1648101785),new cljs.core.Keyword(null,"Page-F","Page-F",-803621022),new cljs.core.Keyword(null,"Page-G","Page-G",887572193)], null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"uv","uv",-1197749379),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"pv","pv",55024340),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.Keyword(null,"amt","amt",-1785711538)], null)], null)], 0));
ui_component.atom.chart.scatter_chart.random_data = ui_component.utils.example_data.random_meta_positive_tabular_data;
ui_component.atom.chart.scatter_chart.local_config = (function ui_component$atom$chart$scatter_chart$local_config(data){
var d = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data));
var fields = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),new cljs.core.Keyword(null,"fields","fields",-1932066230)], null));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (m){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),m,new cljs.core.Keyword(null,"chosen","chosen",-1422409985),cljs.core.first(m)], null)], null);
})(cljs.core.keys(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__58981){
var vec__58982 = p__58981;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58982,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58982,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"string","string",-1989541586),v);
}),fields))),(function (m){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"keys","keys",1068423698),m,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,(0)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,(1)),new cljs.core.Keyword(null,"z","z",-789527183),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,(2))], null)], null);
})(cljs.core.keys(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__58985){
var vec__58986 = p__58985;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58986,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58986,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"number","number",1570378438),v);
}),fields))),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,entry){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([ui_component.utils.path__GT_keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(entry)], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(entry),new cljs.core.Keyword(null,"include","include",153360230),true,new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cycle(ui_component.utils.color.default_stroke_fill_colors),idx)], null)]);
}),d))], 0));
});
/**
 * constructs the configuration panel for the chart's configurable properties. This is specific to
 *   this being a line-chart component (see [[local-config]]).
 * 
 *   Merges together the configuration needed for:
 * 
 *   1. line charts
 *   2. pub/sub between components of a container
 *   3. `default-config` for all Rechart-based types
 *   4. the `tab-panel` for view/edit configuration properties and data
 *   5. sets properties of the default-config (local config properties are just set inside [[local-config]])
 *   6. sets meta-data for properties this component publishes (`:pub`) or subscribes (`:sub`)
 * 
 *   ---
 * 
 *   - component-id : (string) unique id of the chart
 *   
 */
ui_component.atom.chart.scatter_chart.config = (function ui_component$atom$chart$scatter_chart$config(component_id,data){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui_component.utils.default_pub_sub,ui_component.atom.chart.utils.default_config,ui_component.utils.config_tab_panel(component_id),ui_component.atom.chart.scatter_chart.local_config(data)], 0));
});
ui_component.atom.chart.scatter_chart.cell_config = (function ui_component$atom$chart$scatter_chart$cell_config(component_id,label,path,position){
var p = ui_component.utils.path__GT_keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"5px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.chart.utils.boolean_config,component_id,"",cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null),new cljs.core.Keyword(null,"include","include",153360230))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.chart.utils.color_config_text,component_id,label,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null),new cljs.core.Keyword(null,"color","color",1011675173)),new cljs.core.Keyword(null,"right-above","right-above",832458485)], null)], null)], null);
});
ui_component.atom.chart.scatter_chart.make_cell_config = (function ui_component$atom$chart$scatter_chart$make_cell_config(component_id,data){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,p__58991){
var map__58992 = p__58991;
var map__58992__$1 = cljs.core.__destructure_map(map__58992);
var item = map__58992__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58992__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.chart.scatter_chart.cell_config,component_id,name,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null),new cljs.core.Keyword(null,"above-right","above-right",791010942)], null);
}),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data))));
});
ui_component.atom.chart.scatter_chart.config_panel = (function ui_component$atom$chart$scatter_chart$config_panel(data,component_id){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/chart/scatter_chart.cljs",new cljs.core.Keyword(null,"line","line",212345235),96], null)),new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"width","width",-384071477),"400px",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"15px",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"1px solid #DDD",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#f7f7f7"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.chart.utils.non_gridded_chart_config,cljs.core.deref(data),component_id], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.line,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/chart/scatter_chart.cljs",new cljs.core.Keyword(null,"line","line",212345235),103], null)),new cljs.core.Keyword(null,"size","size",1098693007),"2px"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.chart.utils.option,component_id,":name",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.line,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/chart/scatter_chart.cljs",new cljs.core.Keyword(null,"line","line",212345235),105], null)),new cljs.core.Keyword(null,"size","size",1098693007),"2px"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.chart.utils.column_picker,data,component_id,":x",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.Keyword(null,"x","x",2099068185)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.chart.utils.column_picker,data,component_id,":y",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.Keyword(null,"y","y",-1757859776)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.chart.utils.column_picker,data,component_id,":z",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.Keyword(null,"z","z",-789527183)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.line,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/chart/scatter_chart.cljs",new cljs.core.Keyword(null,"line","line",212345235),109], null)),new cljs.core.Keyword(null,"size","size",1098693007),"2px"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/chart/scatter_chart.cljs",new cljs.core.Keyword(null,"line","line",212345235),110], null)),new cljs.core.Keyword(null,"gap","gap",80255254),"5px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/chart/scatter_chart.cljs",new cljs.core.Keyword(null,"line","line",212345235),112], null)),new cljs.core.Keyword(null,"label","label",1718410804),"Colors"], null),ui_component.atom.chart.scatter_chart.make_cell_config(component_id,data)], null)], null)], null)], null);
});
ui_component.atom.chart.scatter_chart.source_code = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,">",">",-555517146),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","shadow.js.shim.module$recharts.ScatterChart","js/shadow.js.shim.module$recharts.ScatterChart",1690945810,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("ui-component.atom.chart.utils","chart-grid","ui-component.atom.chart.utils/chart-grid",291576604,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("ui-component.atom.chart.scatter-chart","component-id","ui-component.atom.chart.scatter-chart/component-id",2115375106,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,">",">",-555517146),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","shadow.js.shim.module$recharts.Tooltip","js/shadow.js.shim.module$recharts.Tooltip",851314679,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,">",">",-555517146),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","shadow.js.shim.module$recharts.XAxis","js/shadow.js.shim.module$recharts.XAxis",-1370662122,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"type","type",1174270348),null,(1),null)),(new cljs.core.List(null,"number",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"dataKey","dataKey",-334896751),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","name","cljs.core/name",-260873443,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("ui-component.atom.chart.scatter-chart","x","ui-component.atom.chart.scatter-chart/x",516929524,null),null,(1),null))))),null,(1),null))], 0))))),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,">",">",-555517146),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","shadow.js.shim.module$recharts.YAxis","js/shadow.js.shim.module$recharts.YAxis",1828681173,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"type","type",1174270348),null,(1),null)),(new cljs.core.List(null,"number",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"dataKey","dataKey",-334896751),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","name","cljs.core/name",-260873443,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("ui-component.atom.chart.scatter-chart","y","ui-component.atom.chart.scatter-chart/y",963382067,null),null,(1),null))))),null,(1),null))], 0))))),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,">",">",-555517146),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","shadow.js.shim.module$recharts.ZAxis","js/shadow.js.shim.module$recharts.ZAxis",-804544525,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"type","type",1174270348),null,(1),null)),(new cljs.core.List(null,"number",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"dataKey","dataKey",-334896751),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","name","cljs.core/name",-260873443,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("ui-component.atom.chart.scatter-chart","z","ui-component.atom.chart.scatter-chart/z",1926444588,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"range","range",1639692286),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("ui-component.atom.chart.scatter-chart","get-range-across-fields","ui-component.atom.chart.scatter-chart/get-range-across-fields",-1536207287,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("ui-component.atom.chart.scatter-chart","data","ui-component.atom.chart.scatter-chart/data",320123386,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("ui-component.atom.chart.scatter-chart","z","ui-component.atom.chart.scatter-chart/z",1926444588,null),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,">",">",-555517146),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","shadow.js.shim.module$recharts.Scatter","js/shadow.js.shim.module$recharts.Scatter",-1542459666,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"name","name",1843675177),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","name","cljs.core/name",-260873443,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"fill","fill",883462889),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("ui-component.utils","resolve-sub","ui-component.utils/resolve-sub",-1085440986,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("ui-component.atom.chart.scatter-chart","subscriptions","ui-component.atom.chart.scatter-chart/subscriptions",-331451061,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","name","cljs.core/name",-260873443,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"color","color",1011675173),null,(1),null)))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("ui-component.utils.color","get-color","ui-component.utils.color/get-color",2116382426,null),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"data","data",-232669377),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("ui-component.atom.chart.scatter-chart","item","ui-component.atom.chart.scatter-chart/item",817829445,null),null,(1),null)))))),null,(1),null))], 0))))),null,(1),null))], 0))))),null,(1),null))], 0))))),null,(1),null))], 0)))));
ui_component.atom.chart.scatter_chart.make_scatter = (function ui_component$atom$chart$scatter_chart$make_scatter(data,subscriptions__$1){
var ret = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58997){
var map__58999 = p__58997;
var map__58999__$1 = cljs.core.__destructure_map(map__58999);
var item = map__58999__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58999__$1,new cljs.core.Keyword(null,"name","name",1843675177));
if(cljs.core.truth_(ui_component.utils.resolve_sub(subscriptions__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.Keyword(null,"include","include",153360230)], null)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$recharts.Scatter,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"fill","fill",883462889),(function (){var or__4253__auto__ = ui_component.utils.resolve_sub(subscriptions__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.Keyword(null,"color","color",1011675173)], null));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return ui_component.utils.color.get_color((0));
}
})(),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null)], null)], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
}),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(data))));
return ret;
});
ui_component.atom.chart.scatter_chart.get_range_across_fields = (function ui_component$atom$chart$scatter_chart$get_range_across_fields(data,column){
var all_values = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59000_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__59000_SHARP_,column);
}),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(data)));
var domainMax = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,all_values);
var domainMin = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,all_values);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [domainMin,domainMax], null);
});
/**
 * the chart to draw, taking cues from the settings of the configuration panel
 * 
 *   ---
 * 
 *   - data : (atom) any data shown by the component's ui
 *   - component-id : (string) unique identifier for this specific widget instance
 *   
 */
ui_component.atom.chart.scatter_chart.component_STAR_ = (function ui_component$atom$chart$scatter_chart$component_STAR_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59016 = arguments.length;
var i__4865__auto___59017 = (0);
while(true){
if((i__4865__auto___59017 < len__4864__auto___59016)){
args__4870__auto__.push((arguments[i__4865__auto___59017]));

var G__59018 = (i__4865__auto___59017 + (1));
i__4865__auto___59017 = G__59018;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return ui_component.atom.chart.scatter_chart.component_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(ui_component.atom.chart.scatter_chart.component_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (p__59006){
var map__59007 = p__59006;
var map__59007__$1 = cljs.core.__destructure_map(map__59007);
var params = map__59007__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59007__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59007__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var container_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59007__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var subscriptions__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59007__$1,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776));
var isAnimationActive_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59007__$1,new cljs.core.Keyword(null,"isAnimationActive?","isAnimationActive?",-1020610123));
var x = ui_component.utils.resolve_sub(subscriptions__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.Keyword(null,"x","x",2099068185)], null));
var y = ui_component.utils.resolve_sub(subscriptions__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.Keyword(null,"y","y",-1757859776)], null));
var z = ui_component.utils.resolve_sub(subscriptions__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.Keyword(null,"z","z",-789527183)], null));
var domain = cljs.core.List.EMPTY;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$recharts.ResponsiveContainer,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$recharts.ScatterChart,ui_component.atom.chart.utils.chart_grid(component_id,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$recharts.Tooltip], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$recharts.XAxis,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"dataKey","dataKey",-334896751),cljs.core.name(x)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$recharts.YAxis,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"dataKey","dataKey",-334896751),cljs.core.name(y)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$recharts.ZAxis,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"dataKey","dataKey",-334896751),cljs.core.name(z),new cljs.core.Keyword(null,"range","range",1639692286),ui_component.atom.chart.scatter_chart.get_range_across_fields(data,z)], null)], null),ui_component.atom.chart.scatter_chart.make_scatter(data,subscriptions__$1)], null)], null);
}));

(ui_component.atom.chart.scatter_chart.component_STAR_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(ui_component.atom.chart.scatter_chart.component_STAR_.cljs$lang$applyTo = (function (seq59003){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59003));
}));

ui_component.atom.chart.scatter_chart.component = (function ui_component$atom$chart$scatter_chart$component(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59020 = arguments.length;
var i__4865__auto___59021 = (0);
while(true){
if((i__4865__auto___59021 < len__4864__auto___59020)){
args__4870__auto__.push((arguments[i__4865__auto___59021]));

var G__59022 = (i__4865__auto___59021 + (1));
i__4865__auto___59021 = G__59022;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return ui_component.atom.chart.scatter_chart.component.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(ui_component.atom.chart.scatter_chart.component.cljs$core$IFn$_invoke$arity$variadic = (function (p__59012){
var map__59013 = p__59012;
var map__59013__$1 = cljs.core.__destructure_map(map__59013);
var params = map__59013__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59013__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var config_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59013__$1,new cljs.core.Keyword(null,"config-data","config-data",1933573865));
var component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59013__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var container_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59013__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var data_panel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59013__$1,new cljs.core.Keyword(null,"data-panel","data-panel",198148393));
var config_panel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59013__$1,new cljs.core.Keyword(null,"config-panel","config-panel",-1307835748));
return new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.chart.wrapper_2.base_chart,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"config-data","config-data",1933573865),config_data,new cljs.core.Keyword(null,"component-id","component-id",1551113783),component_id,new cljs.core.Keyword(null,"container-id","container-id",1274665684),container_id,new cljs.core.Keyword(null,"component*","component*",1963849553),ui_component.atom.chart.scatter_chart.component_STAR_,new cljs.core.Keyword(null,"component-panel","component-panel",-744929766),ui_component.atom.chart.wrapper_2.component_panel,new cljs.core.Keyword(null,"data-panel","data-panel",198148393),data_panel,new cljs.core.Keyword(null,"config-panel","config-panel",-1307835748),config_panel,new cljs.core.Keyword(null,"config","config",994861415),ui_component.atom.chart.scatter_chart.config,new cljs.core.Keyword(null,"local-config","local-config",-2015662519),ui_component.atom.chart.scatter_chart.local_config], null);
}));

(ui_component.atom.chart.scatter_chart.component.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(ui_component.atom.chart.scatter_chart.component.cljs$lang$applyTo = (function (seq59011){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59011));
}));

ui_component.atom.chart.scatter_chart.meta_data = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rechart","scatter","rechart/scatter",-557837222),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),ui_component.atom.chart.scatter_chart.component,new cljs.core.Keyword(null,"ports","ports",-1014790862),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("port","sink","port/sink",185875552),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword("port","sink","port/sink",185875552)], null)], null)], null);
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-meta","register-meta",1726375773),ui_component.atom.chart.scatter_chart.meta_data], null));

//# sourceMappingURL=ui_component.atom.chart.scatter_chart.js.map
