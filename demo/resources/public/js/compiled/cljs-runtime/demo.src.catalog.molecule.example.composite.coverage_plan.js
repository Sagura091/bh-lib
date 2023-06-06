goog.provide('demo.src.catalog.molecule.example.composite.coverage_plan');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"demo.src.catalog.molecule.example.composite.coverage-plan",null,14,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["demo.src.catalog.molecule.example.composite.coverage-plan"], null);
}),null)),null,805884383,null);
demo.src.catalog.molecule.example.composite.coverage_plan.ww_example = (function demo$src$catalog$molecule$example$composite$coverage_plan$ww_example(){
var container_id = "coverage-plan-demo-ww";
var logged_in_QMARK_ = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","logged-in?","subs/logged-in?",-657991650)], null));
var pub_sub_started_QMARK_ = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bhui.subs","pub-sub-started?","bhui.subs/pub-sub-started?",820120372)], null));
if(cljs.core.not(cljs.core.deref(logged_in_QMARK_))){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("events","login","events/login",-731711928),"test-user","test-pwd"], null));
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
var G__61125 = "Coverage Plan using a Grid for layout (Worldwind globe) WIP";
var G__61126 = "This experiment uses a GRID to layout the various UI components that make up the 'composite'.\n          Constructs 'coverage-plan', drawing the layout from `:grid-layout` which provides X/Y/W/H for each\n          component on the widget's internal grid.";
var G__61127 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.layout.frame,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"min-height","min-height",398480837),"400px"], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.molecule.grid_container.component,new cljs.core.Keyword(null,"data","data",-232669377),reagent.core.atom.cljs$core$IFn$_invoke$arity$1(bh_ui.molecule.composite.coverage_plan.ui_definition),new cljs.core.Keyword(null,"component-id","component-id",1551113783),bh_ui.utils.helpers.path__GT_keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([container_id,"grid-widget"], 0)),new cljs.core.Keyword(null,"container-id","container-id",1274665684),container_id,new cljs.core.Keyword(null,"resizable","resizable",-2107060206),true,new cljs.core.Keyword(null,"tools","tools",-1241731990),true], null)], null)], null);
return (woolybear.ad.utils.demo.cljs$core$IFn$_invoke$arity$3 ? woolybear.ad.utils.demo.cljs$core$IFn$_invoke$arity$3(G__61125,G__61126,G__61127) : woolybear.ad.utils.demo.call(null,G__61125,G__61126,G__61127));
} else {
var G__61128 = "Coverage Plan";
var G__61130 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.alert_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"demo/src/catalog/molecule/example/composite/coverage_plan.cljs",new cljs.core.Keyword(null,"line","line",212345235),46], null)),new cljs.core.Keyword(null,"alert-type","alert-type",405751817),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"heading","heading",-1312171873),"Waiting for (demo) Log-in"], null);
return (woolybear.ad.utils.demo.cljs$core$IFn$_invoke$arity$2 ? woolybear.ad.utils.demo.cljs$core$IFn$_invoke$arity$2(G__61128,G__61130) : woolybear.ad.utils.demo.call(null,G__61128,G__61130));
}
});
});
demo.src.catalog.molecule.example.composite.coverage_plan.r_example = (function demo$src$catalog$molecule$example$composite$coverage_plan$r_example(){
var container_id = "coverage-plan-demo-r";
var logged_in_QMARK_ = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","logged-in?","subs/logged-in?",-657991650)], null));
var pub_sub_started_QMARK_ = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bhui.subs","pub-sub-started?","bhui.subs/pub-sub-started?",820120372)], null));
if(cljs.core.not(cljs.core.deref(logged_in_QMARK_))){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("events","login","events/login",-731711928),"test-user","test-pwd"], null));
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
var G__61140 = "Coverage Plan using a Grid for layout (Resium globe)";
var G__61141 = "This experiment uses a GRID to layout the various UI components that make up the 'composite'.  Constructs\n          'coverage-plan', drawing the layout from `:grid-layout` which provides X/Y/W/H for each component\n          on the widget's internal grid.\n\n> This example differs from the Worldwind version only by replacing the `:ww/globe` reference with `:r/globe`\n";
var G__61142 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.layout.frame,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"min-height","min-height",398480837),"400px"], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.molecule.grid_container.component,new cljs.core.Keyword(null,"data","data",-232669377),reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc_in(bh_ui.molecule.composite.coverage_plan.ui_definition,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.Keyword("ui","globe","ui/globe",662159849),new cljs.core.Keyword(null,"name","name",1843675177)], null),new cljs.core.Keyword("r","globe","r/globe",662172687))),new cljs.core.Keyword(null,"component-id","component-id",1551113783),bh_ui.utils.helpers.path__GT_keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([container_id,"grid-widget"], 0)),new cljs.core.Keyword(null,"container-id","container-id",1274665684),container_id,new cljs.core.Keyword(null,"resizable","resizable",-2107060206),true,new cljs.core.Keyword(null,"tools","tools",-1241731990),true], null)], null)], null);
return (woolybear.ad.utils.demo.cljs$core$IFn$_invoke$arity$3 ? woolybear.ad.utils.demo.cljs$core$IFn$_invoke$arity$3(G__61140,G__61141,G__61142) : woolybear.ad.utils.demo.call(null,G__61140,G__61141,G__61142));
} else {
var G__61143 = "Coverage Plan";
var G__61144 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.alert_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"demo/src/catalog/molecule/example/composite/coverage_plan.cljs",new cljs.core.Keyword(null,"line","line",212345235),85], null)),new cljs.core.Keyword(null,"alert-type","alert-type",405751817),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"heading","heading",-1312171873),"Waiting for (demo) Log-in"], null);
return (woolybear.ad.utils.demo.cljs$core$IFn$_invoke$arity$2 ? woolybear.ad.utils.demo.cljs$core$IFn$_invoke$arity$2(G__61143,G__61144) : woolybear.ad.utils.demo.call(null,G__61143,G__61144));
}
});
});
demo.src.catalog.molecule.example.composite.coverage_plan.twoD_example = (function demo$src$catalog$molecule$example$composite$coverage_plan$twoD_example(){
var container_id = "coverage-plan-demo-2D";
var logged_in_QMARK_ = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","logged-in?","subs/logged-in?",-657991650)], null));
var pub_sub_started_QMARK_ = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bhui.subs","pub-sub-started?","bhui.subs/pub-sub-started?",820120372)], null));
if(cljs.core.not(cljs.core.deref(logged_in_QMARK_))){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("events","login","events/login",-731711928),"test-user","test-pwd"], null));
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
var G__61156 = "Coverage Plan using a Grid for layout (Leaflet globe)";
var G__61157 = "This experiment uses a GRID to layout the various UI components that make up the 'composite'.  Constructs\n          'coverage-plan', drawing the layout from `:grid-layout` which provides X/Y/W/H for each component\n          on the widget's internal grid.\n\n> This example differs from the Worldwind version only by replacing the `:ww/globe` reference with `:l/globe`\n";
var G__61158 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.layout.frame,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"min-height","min-height",398480837),"400px"], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.molecule.grid_container.component,new cljs.core.Keyword(null,"data","data",-232669377),reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc_in(bh_ui.molecule.composite.coverage_plan.ui_definition,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.Keyword("ui","globe","ui/globe",662159849),new cljs.core.Keyword(null,"name","name",1843675177)], null),new cljs.core.Keyword("l","globe","l/globe",662172689))),new cljs.core.Keyword(null,"component-id","component-id",1551113783),bh_ui.utils.helpers.path__GT_keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([container_id,"grid-widget"], 0)),new cljs.core.Keyword(null,"container-id","container-id",1274665684),container_id,new cljs.core.Keyword(null,"resizable","resizable",-2107060206),true,new cljs.core.Keyword(null,"tools","tools",-1241731990),true], null)], null)], null);
return (woolybear.ad.utils.demo.cljs$core$IFn$_invoke$arity$3 ? woolybear.ad.utils.demo.cljs$core$IFn$_invoke$arity$3(G__61156,G__61157,G__61158) : woolybear.ad.utils.demo.call(null,G__61156,G__61157,G__61158));
} else {
var G__61159 = "Coverage Plan";
var G__61160 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.alert_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"demo/src/catalog/molecule/example/composite/coverage_plan.cljs",new cljs.core.Keyword(null,"line","line",212345235),124], null)),new cljs.core.Keyword(null,"alert-type","alert-type",405751817),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"heading","heading",-1312171873),"Waiting for (demo) Log-in"], null);
return (woolybear.ad.utils.demo.cljs$core$IFn$_invoke$arity$2 ? woolybear.ad.utils.demo.cljs$core$IFn$_invoke$arity$2(G__61159,G__61160) : woolybear.ad.utils.demo.call(null,G__61159,G__61160));
}
});
});

//# sourceMappingURL=demo.src.catalog.molecule.example.composite.coverage_plan.js.map
