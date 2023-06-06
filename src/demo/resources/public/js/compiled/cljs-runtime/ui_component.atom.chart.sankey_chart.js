goog.provide('ui_component.atom.chart.sankey_chart');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"ui-component.atom.chart.sankey-chart",null,15,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ui-component.atom.chart.sankey-chart-2"], null);
}),null)),null,-1612383345,null);
/**
 * the Sankey Chart works best with "directed acyclic graph data" so we return the dag-data from utils
 */
ui_component.atom.chart.sankey_chart.sample_data = ui_component.utils.example_data.dag_data;
ui_component.atom.chart.sankey_chart.sample_config_data = ui_component.utils.example_data.dag_config_data;
ui_component.atom.chart.sankey_chart.local_config = (function ui_component$atom$chart$sankey_chart$local_config(data){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"curve","curve",-569677866),0.5], null),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"include","include",153360230),true], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,p__58977){
var map__58978 = p__58977;
var map__58978__$1 = cljs.core.__destructure_map(map__58978);
var all = map__58978__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58978__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([name,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),all,new cljs.core.Keyword(null,"include","include",153360230),true,new cljs.core.Keyword(null,"fill","fill",883462889),ui_component.utils.color.get_color(idx),new cljs.core.Keyword(null,"stroke","stroke",1741823555),ui_component.utils.color.get_color(idx)], null)]);
}),new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data))))], 0));
});
ui_component.atom.chart.sankey_chart.config = (function ui_component$atom$chart$sankey_chart$config(component_id,data){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui_component.utils.default_pub_sub,ui_component.atom.chart.sankey_chart.local_config(data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tab-panel","tab-panel",439413104),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(component_id,"config"),new cljs.core.Keyword(null,"data-path","data-path",674802181),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"containers","containers",-2127048083),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(component_id),new cljs.core.Keyword(null,"tab-panel","tab-panel",439413104)], null)], null)], null)], 0));
});
ui_component.atom.chart.sankey_chart.color_config = (function ui_component$atom$chart$sankey_chart$color_config(component_id,label,path,position){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/chart/sankey_chart.cljs",new cljs.core.Keyword(null,"line","line",212345235),52], null)),new cljs.core.Keyword(null,"gap","gap",80255254),"5px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),label], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.line,new cljs.core.Keyword(null,"size","size",1098693007),"2px"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.chart.utils.color_config,component_id,":fill",cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"fill","fill",883462889)),position], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.chart.utils.color_config,component_id,":stroke",cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"stroke","stroke",1741823555)),position], null)], null)], null);
});
ui_component.atom.chart.sankey_chart.make_config = (function ui_component$atom$chart$sankey_chart$make_config(component_id,data){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,p__58979){
var map__58980 = p__58979;
var map__58980__$1 = cljs.core.__destructure_map(map__58980);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58980__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.chart.sankey_chart.color_config,component_id,name,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null),new cljs.core.Keyword(null,"below-right","below-right",1598040732)], null);
}),new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data))));
});
ui_component.atom.chart.sankey_chart.config_panel = (function ui_component$atom$chart$sankey_chart$config_panel(data,component_id){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/chart/sankey_chart.cljs",new cljs.core.Keyword(null,"line","line",212345235),73], null)),new cljs.core.Keyword(null,"gap","gap",80255254),"5px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.chart.utils.tooltip,component_id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.line,new cljs.core.Keyword(null,"size","size",1098693007),"2px"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/chart/sankey_chart.cljs",new cljs.core.Keyword(null,"line","line",212345235),77], null)),new cljs.core.Keyword(null,"gap","gap",80255254),"5px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.chart.utils.text_config,component_id,":curve",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.Keyword(null,"curve","curve",-569677866)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.chart.utils.slider_config,component_id,(0),(1),0.1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.Keyword(null,"curve","curve",-569677866)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.line,new cljs.core.Keyword(null,"size","size",1098693007),"2px"], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/chart/sankey_chart.cljs",new cljs.core.Keyword(null,"line","line",212345235),82], null)),new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"style","style",-496642736),ui_component.utils.h_wrap,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),ui_component.atom.chart.sankey_chart.make_config(component_id,data)], null)], null)], null);
});
ui_component.atom.chart.sankey_chart.source_code = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Symbol(null,"Sankey","Sankey",145041044,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"linkCurvature","linkCurvature",333597135),new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.Keyword(null,"iterations","iterations",-1402710890),new cljs.core.Keyword(null,"nodeWidth","nodeWidth",-77846596),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"nodePadding","nodePadding",-670819265),new cljs.core.Keyword(null,"margin","margin",-995903681),new cljs.core.Keyword(null,"data","data",-232669377)],[(500),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"complex-node","complex-node",198264858,null),(500),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"fill","fill",-1770972880,null))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"curve","curve",1070853661,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"stroke","stroke",-912612214,null))], null),(64),(10),(400),(60),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),(20),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(20),new cljs.core.Keyword(null,"left","left",-399115937),(20),new cljs.core.Keyword(null,"right","right",-452581833),(20)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"data","data",1407862150,null))]),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"tooltip?","tooltip?",997778373,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Symbol(null,"Tooltip","Tooltip",2066429262,null)], null))], null);
/**
 * build the reagent/react components (as hiccup) needed to draw the `node` parts (rectangles)
 *   and labels of the diagram.
 * 
 *   ---
 * 
 *   - containerWidth : (number) with of the container, used to determine if the label should be to the left or right of the rectangle
 *   - fill : (color) color to fill the rectangle
 *   - stroke : (color) color to use as the outline (stroke) of the rectangle
 *   - props : (has-map) additional props sent to the reagent/react component by the diagram itself
 * 
 * > See [here](https://cljdoc.org/d/reagent/reagent/1.1.0/doc/tutorials/react-features#hooks)
 * > for details on how the Reagent/React interop work for this
 */
ui_component.atom.chart.sankey_chart.complex_node = (function ui_component$atom$chart$sankey_chart$complex_node(subscriptions__$1,containerWidth,props){
var map__58989 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(props);
var map__58989__$1 = cljs.core.__destructure_map(map__58989);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58989__$1,"x");
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58989__$1,"y");
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58989__$1,"width");
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58989__$1,"height");
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58989__$1,"index");
var map__58990 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58989__$1,"payload");
var map__58990__$1 = cljs.core.__destructure_map(map__58990);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58990__$1,"name");
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58990__$1,"value");
var isOut = (containerWidth < (((x + width) + (30)) + (6)));
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$recharts.Layer,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["CustomNode$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$recharts.Rectangle,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"fill","fill",883462889),ui_component.utils.resolve_sub(subscriptions__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.Keyword(null,"fill","fill",883462889)], null)),new cljs.core.Keyword(null,"stroke","stroke",1741823555),ui_component.utils.resolve_sub(subscriptions__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.Keyword(null,"stroke","stroke",1741823555)], null))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"textAnchor","textAnchor",-917689429),((isOut)?"end":"start"),new cljs.core.Keyword(null,"x","x",2099068185),((isOut)?(x - (6)):((x + width) + (6))),new cljs.core.Keyword(null,"y","y",-1757859776),(y + (height / (2))),new cljs.core.Keyword(null,"fontSize","fontSize",919623033),(14),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#333"], null),name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"textAnchor","textAnchor",-917689429),((isOut)?"end":"start"),new cljs.core.Keyword(null,"x","x",2099068185),((isOut)?(x - (6)):((x + width) + (6))),new cljs.core.Keyword(null,"y","y",-1757859776),((y + (13)) + (height / (2))),new cljs.core.Keyword(null,"fontSize","fontSize",919623033),(12),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#333",new cljs.core.Keyword(null,"strokeOpacity","strokeOpacity",-565583263),0.5], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"k"].join('')], null)], null));
});
ui_component.atom.chart.sankey_chart.make_svg_string = (function ui_component$atom$chart$sankey_chart$make_svg_string(sourceX,targetX,sourceY,targetY,sourceControlX,targetControlX,linkWidth){
return ["M",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sourceX),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((sourceY + (linkWidth / (2)))),"C",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sourceControlX),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((sourceY + (linkWidth / (2)))),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(targetControlX),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((targetY + (linkWidth / (2)))),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(targetX),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((targetY + (linkWidth / (2)))),"L",cljs.core.str.cljs$core$IFn$_invoke$arity$1(targetX),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((targetY - (linkWidth / (2)))),", ","C",cljs.core.str.cljs$core$IFn$_invoke$arity$1(targetControlX),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((targetY - (linkWidth / (2)))),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sourceControlX),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((sourceY - (linkWidth / (2)))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sourceX),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((sourceY - (linkWidth / (2)))),"Z"].join('');
});
ui_component.atom.chart.sankey_chart.color_source__GT_white = (function ui_component$atom$chart$sankey_chart$color_source__GT_white(subscriptions__$1,index,payload){
var color_from = ui_component.utils.resolve_sub(subscriptions__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(payload,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"name","name",1843675177)], null)),new cljs.core.Keyword(null,"fill","fill",883462889)], null));
var c_from = ui_component.utils.color.rgba_map__GT_js_function(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ui_component.utils.color.hex__GT_rgba(color_from),new cljs.core.Keyword(null,"a","a",-2123407586),0.5));
var c_to = ui_component.utils.color.rgba_map__GT_js_function(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ui_component.utils.color.hex__GT_rgba(color_from),new cljs.core.Keyword(null,"a","a",-2123407586),0.05));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linearGradient","linearGradient",1711964727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),["linkGradient$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stop","stop",-2140911342),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"offset","offset",296498311),"0%",new cljs.core.Keyword(null,"stopColor","stopColor",265518586),c_from], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stop","stop",-2140911342),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"offset","offset",296498311),"100%",new cljs.core.Keyword(null,"stopColor","stopColor",265518586),c_to], null)], null)], null)], null);
});
ui_component.atom.chart.sankey_chart.color_white__GT_target = (function ui_component$atom$chart$sankey_chart$color_white__GT_target(subscriptions__$1,index,payload){
var color_to = ui_component.utils.resolve_sub(subscriptions__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(payload,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"name","name",1843675177)], null)),new cljs.core.Keyword(null,"fill","fill",883462889)], null));
var c_from = ui_component.utils.color.rgba_map__GT_js_function(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ui_component.utils.color.hex__GT_rgba(color_to),new cljs.core.Keyword(null,"a","a",-2123407586),0.05));
var c_to = ui_component.utils.color.rgba_map__GT_js_function(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ui_component.utils.color.hex__GT_rgba(color_to),new cljs.core.Keyword(null,"a","a",-2123407586),0.5));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linearGradient","linearGradient",1711964727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),["linkGradient$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stop","stop",-2140911342),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"offset","offset",296498311),"0%",new cljs.core.Keyword(null,"stopColor","stopColor",265518586),c_from], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stop","stop",-2140911342),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"offset","offset",296498311),"100%",new cljs.core.Keyword(null,"stopColor","stopColor",265518586),c_to], null)], null)], null)], null);
});
ui_component.atom.chart.sankey_chart.color_source__GT_target = (function ui_component$atom$chart$sankey_chart$color_source__GT_target(subscriptions__$1,index,payload){
var color_from = ui_component.utils.resolve_sub(subscriptions__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(payload,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"name","name",1843675177)], null)),new cljs.core.Keyword(null,"fill","fill",883462889)], null));
var color_to = ui_component.utils.resolve_sub(subscriptions__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(payload,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"name","name",1843675177)], null)),new cljs.core.Keyword(null,"fill","fill",883462889)], null));
var c_from = ui_component.utils.color.rgba_map__GT_js_function(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ui_component.utils.color.hex__GT_rgba(color_from),new cljs.core.Keyword(null,"a","a",-2123407586),0.5));
var c_mid = ui_component.utils.color.rgba_map__GT_js_function(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ui_component.utils.color.hex__GT_rgba(color_from),new cljs.core.Keyword(null,"a","a",-2123407586),0.2));
var c_to = ui_component.utils.color.rgba_map__GT_js_function(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ui_component.utils.color.hex__GT_rgba(color_to),new cljs.core.Keyword(null,"a","a",-2123407586),0.3));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linearGradient","linearGradient",1711964727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),["linkGradient$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stop","stop",-2140911342),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"offset","offset",296498311),"0%",new cljs.core.Keyword(null,"stopColor","stopColor",265518586),c_from], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stop","stop",-2140911342),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"offset","offset",296498311),"30%",new cljs.core.Keyword(null,"stopColor","stopColor",265518586),c_mid], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stop","stop",-2140911342),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"offset","offset",296498311),"100%",new cljs.core.Keyword(null,"stopColor","stopColor",265518586),c_to], null)], null)], null)], null);
});
ui_component.atom.chart.sankey_chart.complex_link = (function ui_component$atom$chart$sankey_chart$complex_link(subscriptions__$1,link_color_fn,props){
var map__58993 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var map__58993__$1 = cljs.core.__destructure_map(map__58993);
var sourceControlX = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58993__$1,new cljs.core.Keyword(null,"sourceControlX","sourceControlX",-58506982));
var linkWidth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58993__$1,new cljs.core.Keyword(null,"linkWidth","linkWidth",1417891194));
var sourceX = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58993__$1,new cljs.core.Keyword(null,"sourceX","sourceX",1711314656));
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58993__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58993__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var targetY = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58993__$1,new cljs.core.Keyword(null,"targetY","targetY",-333568504));
var targetControlX = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58993__$1,new cljs.core.Keyword(null,"targetControlX","targetControlX",-599126934));
var sourceY = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58993__$1,new cljs.core.Keyword(null,"sourceY","sourceY",125954731));
var targetX = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58993__$1,new cljs.core.Keyword(null,"targetX","targetX",1235875596));
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$recharts.Layer,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["CustomLink$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('')], null),(link_color_fn.cljs$core$IFn$_invoke$arity$3 ? link_color_fn.cljs$core$IFn$_invoke$arity$3(subscriptions__$1,index,payload) : link_color_fn.call(null,subscriptions__$1,index,payload)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"d","d",1972142424),ui_component.atom.chart.sankey_chart.make_svg_string(sourceX,targetX,sourceY,targetY,sourceControlX,targetControlX,linkWidth),new cljs.core.Keyword(null,"fill","fill",883462889),["url(#linkGradient$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index),")"].join(''),new cljs.core.Keyword(null,"strokeWidth","strokeWidth",-2130848332),(0)], null)], null)], null));
});
ui_component.atom.chart.sankey_chart.__GT_sankey = (function ui_component$atom$chart$sankey_chart$__GT_sankey(data){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(data))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"links","links",-654507394),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58996){
var map__58998 = p__58996;
var map__58998__$1 = cljs.core.__destructure_map(map__58998);
var link = map__58998__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58998__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58998__$1,new cljs.core.Keyword(null,"target","target",253001721));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(link,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__58994_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__58994_SHARP_),source);
}),new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(data)))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__58995_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__58995_SHARP_),target);
}),new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(data))))], 0));
}),new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(data))], 0));
});
ui_component.atom.chart.sankey_chart.component_STAR_ = (function ui_component$atom$chart$sankey_chart$component_STAR_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59024 = arguments.length;
var i__4865__auto___59025 = (0);
while(true){
if((i__4865__auto___59025 < len__4864__auto___59024)){
args__4870__auto__.push((arguments[i__4865__auto___59025]));

var G__59026 = (i__4865__auto___59025 + (1));
i__4865__auto___59025 = G__59026;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return ui_component.atom.chart.sankey_chart.component_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(ui_component.atom.chart.sankey_chart.component_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (p__59004){
var map__59005 = p__59004;
var map__59005__$1 = cljs.core.__destructure_map(map__59005);
var params = map__59005__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59005__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59005__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var link_color_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59005__$1,new cljs.core.Keyword(null,"link-color-fn","link-color-fn",1429712433));
var subscriptions__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59005__$1,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776));
var tooltip_QMARK_ = ui_component.utils.resolve_sub(subscriptions__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.Keyword(null,"include","include",153360230)], null));
var curve = ui_component.utils.resolve_sub(subscriptions__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.Keyword(null,"curve","curve",-569677866)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ui_component.utils.subscribe_local(component_id,cljs.core.PersistentVector.EMPTY))),(0),(10)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$recharts.ResponsiveContainer,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$recharts.Sankey,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"node","node",581201198),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(ui_component.atom.chart.sankey_chart.complex_node,subscriptions__$1,(700)),new cljs.core.Keyword(null,"data","data",-232669377),ui_component.atom.chart.sankey_chart.__GT_sankey(data),new cljs.core.Keyword(null,"margin","margin",-995903681),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),(20),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(20),new cljs.core.Keyword(null,"left","left",-399115937),(20),new cljs.core.Keyword(null,"right","right",-452581833),(20)], null),new cljs.core.Keyword(null,"nodeWidth","nodeWidth",-77846596),(10),new cljs.core.Keyword(null,"nodePadding","nodePadding",-670819265),(60),new cljs.core.Keyword(null,"linkCurvature","linkCurvature",333597135),curve,new cljs.core.Keyword(null,"iterations","iterations",-1402710890),(64),new cljs.core.Keyword(null,"link","link",-1769163468),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(ui_component.atom.chart.sankey_chart.complex_link,subscriptions__$1,(function (){var or__4253__auto__ = link_color_fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return ui_component.atom.chart.sankey_chart.color_source__GT_white;
}
})())], null),(cljs.core.truth_(tooltip_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$recharts.Tooltip], null):null)], null)], null)], null);
}));

(ui_component.atom.chart.sankey_chart.component_STAR_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(ui_component.atom.chart.sankey_chart.component_STAR_.cljs$lang$applyTo = (function (seq59001){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59001));
}));

ui_component.atom.chart.sankey_chart.component = (function ui_component$atom$chart$sankey_chart$component(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59027 = arguments.length;
var i__4865__auto___59028 = (0);
while(true){
if((i__4865__auto___59028 < len__4864__auto___59027)){
args__4870__auto__.push((arguments[i__4865__auto___59028]));

var G__59029 = (i__4865__auto___59028 + (1));
i__4865__auto___59028 = G__59029;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return ui_component.atom.chart.sankey_chart.component.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(ui_component.atom.chart.sankey_chart.component.cljs$core$IFn$_invoke$arity$variadic = (function (p__59009){
var map__59010 = p__59009;
var map__59010__$1 = cljs.core.__destructure_map(map__59010);
var params = map__59010__$1;
var component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59010__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var input_params = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(params,new cljs.core.Keyword(null,"component-panel","component-panel",-744929766),ui_component.atom.chart.wrapper_2.component_panel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"config","config",994861415),ui_component.atom.chart.sankey_chart.config,new cljs.core.Keyword(null,"local-config","local-config",-2015662519),ui_component.atom.chart.sankey_chart.local_config,new cljs.core.Keyword(null,"component*","component*",1963849553),ui_component.atom.chart.sankey_chart.component_STAR_], 0));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.chart.wrapper_2.base_chart], null),input_params);
}));

(ui_component.atom.chart.sankey_chart.component.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(ui_component.atom.chart.sankey_chart.component.cljs$lang$applyTo = (function (seq59008){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59008));
}));

ui_component.atom.chart.sankey_chart.meta_data = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rechart","sankey","rechart/sankey",362569135),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),ui_component.atom.chart.sankey_chart.component,new cljs.core.Keyword(null,"ports","ports",-1014790862),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("port","sink","port/sink",185875552),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword("port","sink","port/sink",185875552)], null)], null)], null);
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-meta","register-meta",1726375773),ui_component.atom.chart.sankey_chart.meta_data], null));

//# sourceMappingURL=ui_component.atom.chart.sankey_chart.js.map
