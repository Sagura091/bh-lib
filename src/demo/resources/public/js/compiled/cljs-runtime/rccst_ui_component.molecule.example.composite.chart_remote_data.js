goog.provide('rccst_ui_component.molecule.example.composite.chart_remote_data');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"rccst-ui-component.molecule.example.composite.chart-remote-data",null,13,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rccst-ui-component.molecule.example.composite.chart-remote-data"], null);
}),null)),null,-1520017226,null);
rccst_ui_component.molecule.example.composite.chart_remote_data.example = (function rccst_ui_component$molecule$example$composite$chart_remote_data$example(){
var container_id = "chart-remote-data-demo";
var logged_in_QMARK_ = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","logged-in?","subs/logged-in?",-1271717695)], null));
var pub_sub_started_QMARK_ = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bhui.subs","pub-sub-started?","bhui.subs/pub-sub-started?",820120372)], null));
if(cljs.core.not(cljs.core.deref(logged_in_QMARK_))){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("events","login","events/login",1745111835),"test-user","test-pwd"], null));
} else {
}

return (function (){
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.deref(logged_in_QMARK_);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.deref(pub_sub_started_QMARK_);
} else {
return and__4251__auto__;
}
})())){
return woolybear.ad.demo.src.catalog.utils.demo.cljs$core$IFn$_invoke$arity$variadic("Bar chart of remote data",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["This example shows a Bar Chart displaying data via a subscription to the Server",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.layout.frame,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"min-height","min-height",398480837),"400px"], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.molecule.grid_container.component,new cljs.core.Keyword(null,"data","data",-232669377),reagent.core.atom.cljs$core$IFn$_invoke$arity$1(ui_component.molecule.composite.chart_remote_data.ui_definition),new cljs.core.Keyword(null,"component-id","component-id",1551113783),ui_component.utils.helpers.path__GT_keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([container_id,"widget"], 0)),new cljs.core.Keyword(null,"resizable","resizable",-2107060206),true,new cljs.core.Keyword(null,"tools","tools",-1241731990),true], null)], null)], null),ui_component.molecule.composite.chart_remote_data.source_code], 0));
} else {
return woolybear.ad.demo.src.catalog.utils.demo.cljs$core$IFn$_invoke$arity$variadic("Bar chart of remote data",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.alert_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"rccst_ui_component/molecule/example/composite/chart_remote_data.cljs",new cljs.core.Keyword(null,"line","line",212345235),43], null)),new cljs.core.Keyword(null,"alert-type","alert-type",405751817),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"heading","heading",-1312171873),"Waiting for (demo) Log-in"], null),ui_component.molecule.composite.chart_remote_data.source_code], 0));
}
});
});

//# sourceMappingURL=rccst_ui_component.molecule.example.composite.chart_remote_data.js.map
