goog.provide('bh_ui.atom.chart.colored_pie_chart');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"bh-ui.atom.chart.colored-pie-chart",null,14,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bh-ui.atom.chart.colored-pie-chart"], null);
}),null)),null,-1305179820,null);
bh_ui.atom.chart.colored_pie_chart.source_code = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Symbol(null,"PieChart","PieChart",-609327508,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),true], null),cljs.core.list(new cljs.core.Symbol("utils","override","utils/override",-1387223664,null),true,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"label","label",1718410804)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Symbol(null,"Pie","Pie",961925976,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"dataKey","dataKey",-334896751),cljs.core.list(new cljs.core.Symbol("ui-utils","resolve-sub","ui-utils/resolve-sub",1403080913,null),new cljs.core.Symbol(null,"subscriptions","subscriptions",-1403485993,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"chosen","chosen",-1422409985)], null)),new cljs.core.Keyword(null,"nameKey","nameKey",-1197590299),cljs.core.list(new cljs.core.Symbol("ui-utils","resolve-sub","ui-utils/resolve-sub",1403080913,null),new cljs.core.Symbol(null,"subscriptions","subscriptions",-1403485993,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"chosen","chosen",-1422409985)], null)),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Symbol(null,"included","included",637744051,null),new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.list(new cljs.core.Symbol("utils","override","utils/override",-1387223664,null),true,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"label","label",1718410804)),new cljs.core.Keyword(null,"isAnimationActive","isAnimationActive",441882911),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"isAnimationActive?","isAnimationActive?",619921404,null))], null),cljs.core.list(new cljs.core.Symbol(null,"make-cells","make-cells",-1578782418,null),new cljs.core.Symbol(null,"d","d",-682293345,null),new cljs.core.Symbol(null,"subscriptions","subscriptions",-1403485993,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Symbol(null,"Legend","Legend",55842973,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Symbol(null,"Tooltip","Tooltip",2066429262,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Symbol(null,"custom-tooltip","custom-tooltip",-243436742,null)], null)], null)], null);
bh_ui.atom.chart.colored_pie_chart.sample_data = bh_ui.utils.example_data.meta_tabular_data;
bh_ui.atom.chart.colored_pie_chart.sample_config_data = bh_ui.utils.example_data.tabular_row_config_data;
bh_ui.atom.chart.colored_pie_chart.random_data = bh_ui.utils.example_data.random_meta_positive_tabular_data;
bh_ui.atom.chart.colored_pie_chart.local_config = (function bh_ui$atom$chart$colored_pie_chart$local_config(data){
var d = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(data),new cljs.core.Keyword(null,"data","data",-232669377));
var fields = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),new cljs.core.Keyword(null,"fields","fields",-1932066230)], null));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (m){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),m,new cljs.core.Keyword(null,"chosen","chosen",-1422409985),cljs.core.first(m)], null)], null);
})(cljs.core.keys(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__58741){
var vec__58742 = p__58741;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58742,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58742,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"string","string",-1989541586),v);
}),fields))),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,entry){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([bh_ui.utils.path__GT_keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(entry)], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(entry),new cljs.core.Keyword(null,"include","include",153360230),true,new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cycle(bh_ui.utils.color.default_stroke_fill_colors),idx)], null)]);
}),d)),(function (m){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),m,new cljs.core.Keyword(null,"chosen","chosen",-1422409985),cljs.core.first(m)], null)], null);
})(cljs.core.keys(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__58745){
var vec__58746 = p__58745;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58746,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58746,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"number","number",1570378438),v);
}),fields)))], 0));
});
bh_ui.atom.chart.colored_pie_chart.config = (function bh_ui$atom$chart$colored_pie_chart$config(component_id,data){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bh_ui.utils.default_pub_sub,bh_ui.atom.chart.utils.default_config,bh_ui.utils.config_tab_panel(component_id),bh_ui.atom.chart.colored_pie_chart.local_config(data)], 0));
});
bh_ui.atom.chart.colored_pie_chart.cell_config = (function bh_ui$atom$chart$colored_pie_chart$cell_config(component_id,label,path,position){
var p = bh_ui.utils.path__GT_keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"5px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.chart.utils.boolean_config,component_id,"",cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null),new cljs.core.Keyword(null,"include","include",153360230))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.chart.utils.color_config_text,component_id,label,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null),new cljs.core.Keyword(null,"color","color",1011675173)),new cljs.core.Keyword(null,"right-above","right-above",832458485)], null)], null)], null);
});
bh_ui.atom.chart.colored_pie_chart.make_cell_config = (function bh_ui$atom$chart$colored_pie_chart$make_cell_config(component_id,data){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,p__58752){
var map__58753 = p__58752;
var map__58753__$1 = cljs.core.__destructure_map(map__58753);
var item = map__58753__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58753__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.chart.colored_pie_chart.cell_config,component_id,name,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null),new cljs.core.Keyword(null,"above-right","above-right",791010942)], null);
}),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data))));
});
bh_ui.atom.chart.colored_pie_chart.config_panel = (function bh_ui$atom$chart$colored_pie_chart$config_panel(data,component_id){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"bh_ui/atom/chart/colored_pie_chart.cljs",new cljs.core.Keyword(null,"line","line",212345235),93], null)),new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"width","width",-384071477),"400px",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"15px",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"1px solid #DDD",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#f7f7f7"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.chart.utils.non_gridded_chart_config,cljs.core.deref(data),component_id], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.line,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"bh_ui/atom/chart/colored_pie_chart.cljs",new cljs.core.Keyword(null,"line","line",212345235),100], null)),new cljs.core.Keyword(null,"size","size",1098693007),"2px"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.chart.utils.option,component_id,":name",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.line,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"bh_ui/atom/chart/colored_pie_chart.cljs",new cljs.core.Keyword(null,"line","line",212345235),102], null)),new cljs.core.Keyword(null,"size","size",1098693007),"2px"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.chart.utils.column_picker,data,component_id,":value",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"chosen","chosen",-1422409985)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"bh_ui/atom/chart/colored_pie_chart.cljs",new cljs.core.Keyword(null,"line","line",212345235),104], null)),new cljs.core.Keyword(null,"gap","gap",80255254),"5px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"bh_ui/atom/chart/colored_pie_chart.cljs",new cljs.core.Keyword(null,"line","line",212345235),106], null)),new cljs.core.Keyword(null,"label","label",1718410804),"Pie Colors"], null),bh_ui.atom.chart.colored_pie_chart.make_cell_config(component_id,data)], null)], null)], null)], null);
});
bh_ui.atom.chart.colored_pie_chart.make_cells = (function bh_ui$atom$chart$colored_pie_chart$make_cells(data,subscriptions){
var ret = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,p__58757){
var map__58758 = p__58757;
var map__58758__$1 = cljs.core.__destructure_map(map__58758);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58758__$1,new cljs.core.Keyword(null,"name","name",1843675177));
if(cljs.core.truth_(bh_ui.utils.resolve_sub(subscriptions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.Keyword(null,"include","include",153360230)], null)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$recharts.Cell,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["cell-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),new cljs.core.Keyword(null,"fill","fill",883462889),(function (){var or__4253__auto__ = bh_ui.utils.resolve_sub(subscriptions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.Keyword(null,"color","color",1011675173)], null));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return bh_ui.utils.color.get_color((0));
}
})()], null)], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
}),data)));
return ret;
});
bh_ui.atom.chart.colored_pie_chart.included_cells = (function bh_ui$atom$chart$colored_pie_chart$included_cells(data,subscriptions){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__58759){
var map__58760 = p__58759;
var map__58760__$1 = cljs.core.__destructure_map(map__58760);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58760__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return bh_ui.utils.resolve_sub(subscriptions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.Keyword(null,"include","include",153360230)], null));
}),data));
});
bh_ui.atom.chart.colored_pie_chart.custom_tooltip = (function bh_ui$atom$chart$colored_pie_chart$custom_tooltip(tooltip_map){
var map__58761 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(tooltip_map,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var map__58761__$1 = cljs.core.__destructure_map(map__58761);
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58761__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
var vec__58762 = payload;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58762,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58762,(1),null);
var p_p = new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(p);
var dataKey = new cljs.core.Keyword(null,"dataKey","dataKey",-334896751).cljs$core$IFn$_invoke$arity$1(p);
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p_p);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(p_p,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(dataKey));
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background","background",-863952629),"rgba(255, 255, 255, 0.8)",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"3px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"5px 5px 5px 2px",new cljs.core.Keyword(null,"margin","margin",-995903681),"5px",new cljs.core.Keyword(null,"padding","padding",1660304693),"5px"], null),new cljs.core.Keyword(null,"gap","gap",80255254),"2px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.has-text-centered.has-text-weight-bold","p.has-text-centered.has-text-weight-bold",1518964012),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.line,new cljs.core.Keyword(null,"size","size",1098693007),"1px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.has-text-centered","p.has-text-centered",2065546509),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(dataKey)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)].join('')], null)], null)], null));
});
bh_ui.atom.chart.colored_pie_chart.component_STAR_ = (function bh_ui$atom$chart$colored_pie_chart$component_STAR_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___58771 = arguments.length;
var i__4865__auto___58772 = (0);
while(true){
if((i__4865__auto___58772 < len__4864__auto___58771)){
args__4870__auto__.push((arguments[i__4865__auto___58772]));

var G__58773 = (i__4865__auto___58772 + (1));
i__4865__auto___58772 = G__58773;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return bh_ui.atom.chart.colored_pie_chart.component_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(bh_ui.atom.chart.colored_pie_chart.component_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (p__58766){
var map__58767 = p__58766;
var map__58767__$1 = cljs.core.__destructure_map(map__58767);
var params = map__58767__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58767__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58767__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var container_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58767__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var subscriptions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58767__$1,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776));
var isAnimationActive_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58767__$1,new cljs.core.Keyword(null,"isAnimationActive?","isAnimationActive?",-1020610123));
var d = ((cljs.core.empty_QMARK_(data))?cljs.core.PersistentVector.EMPTY:cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.Keyword(null,"data","data",-232669377)));
var included = bh_ui.atom.chart.colored_pie_chart.included_cells(d,subscriptions);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$recharts.ResponsiveContainer,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$recharts.PieChart,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),true], null),bh_ui.atom.chart.utils.override(true,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"label","label",1718410804)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$recharts.Pie,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"dataKey","dataKey",-334896751),bh_ui.utils.resolve_sub(subscriptions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"chosen","chosen",-1422409985)], null)),new cljs.core.Keyword(null,"nameKey","nameKey",-1197590299),bh_ui.utils.resolve_sub(subscriptions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"chosen","chosen",-1422409985)], null)),new cljs.core.Keyword(null,"data","data",-232669377),included,new cljs.core.Keyword(null,"label","label",1718410804),bh_ui.atom.chart.utils.override(true,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"label","label",1718410804)),new cljs.core.Keyword(null,"isAnimationActive","isAnimationActive",441882911),cljs.core.deref(isAnimationActive_QMARK_)], null),bh_ui.atom.chart.colored_pie_chart.make_cells(d,subscriptions)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$recharts.Legend], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$recharts.Tooltip,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),bh_ui.atom.chart.colored_pie_chart.custom_tooltip], null)], null)], null)], null);
}));

(bh_ui.atom.chart.colored_pie_chart.component_STAR_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bh_ui.atom.chart.colored_pie_chart.component_STAR_.cljs$lang$applyTo = (function (seq58765){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58765));
}));

bh_ui.atom.chart.colored_pie_chart.component = (function bh_ui$atom$chart$colored_pie_chart$component(var_args){
var args__4870__auto__ = [];
var len__4864__auto___58774 = arguments.length;
var i__4865__auto___58775 = (0);
while(true){
if((i__4865__auto___58775 < len__4864__auto___58774)){
args__4870__auto__.push((arguments[i__4865__auto___58775]));

var G__58776 = (i__4865__auto___58775 + (1));
i__4865__auto___58775 = G__58776;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return bh_ui.atom.chart.colored_pie_chart.component.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(bh_ui.atom.chart.colored_pie_chart.component.cljs$core$IFn$_invoke$arity$variadic = (function (p__58769){
var map__58770 = p__58769;
var map__58770__$1 = cljs.core.__destructure_map(map__58770);
var params = map__58770__$1;
var component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58770__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var input_params = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(params,new cljs.core.Keyword(null,"component*","component*",1963849553),bh_ui.atom.chart.colored_pie_chart.component_STAR_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"component-panel","component-panel",-744929766),bh_ui.atom.chart.wrapper_2.component_panel,new cljs.core.Keyword(null,"config","config",994861415),bh_ui.atom.chart.colored_pie_chart.config,new cljs.core.Keyword(null,"local-config","local-config",-2015662519),bh_ui.atom.chart.colored_pie_chart.local_config], 0));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.chart.wrapper_2.base_chart], null),cljs.core.seq(input_params));
}));

(bh_ui.atom.chart.colored_pie_chart.component.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bh_ui.atom.chart.colored_pie_chart.component.cljs$lang$applyTo = (function (seq58768){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58768));
}));

bh_ui.atom.chart.colored_pie_chart.meta_data = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rechart","colored-pie","rechart/colored-pie",417373840),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),bh_ui.atom.chart.colored_pie_chart.component,new cljs.core.Keyword(null,"ports","ports",-1014790862),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("port","sink","port/sink",185875552),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword("port","sink","port/sink",185875552)], null)], null)], null);
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-meta","register-meta",1726375773),bh_ui.atom.chart.colored_pie_chart.meta_data], null));

//# sourceMappingURL=bh_ui.atom.chart.colored_pie_chart.js.map
