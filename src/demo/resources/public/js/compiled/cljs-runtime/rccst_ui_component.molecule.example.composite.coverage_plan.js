goog.provide('rccst_ui_component.molecule.example.composite.coverage_plan');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"rccst-ui-component.molecule.example.composite.coverage-plan",null,14,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rccst-ui-component.molecule.example.composite.coverage-plan"], null);
}),null)),null,-1600239712,null);
rccst_ui_component.molecule.example.composite.coverage_plan.ww_example = (function rccst_ui_component$molecule$example$composite$coverage_plan$ww_example(){
var container_id = "coverage-plan-demo-ww";
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
return woolybear.ad.demo.src.catalog.utils.demo.cljs$core$IFn$_invoke$arity$variadic("Coverage Plan using a Grid for layout (Worldwind globe) WIP",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["This experiment uses a GRID to layout the various UI components that make up the 'composite'.\n          Constructs 'coverage-plan', drawing the layout from `:grid-layout` which provides X/Y/W/H for each\n          component on the widget's internal grid.",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.layout.frame,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"min-height","min-height",398480837),"400px"], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.molecule.grid_container.component,new cljs.core.Keyword(null,"data","data",-232669377),reagent.core.atom.cljs$core$IFn$_invoke$arity$1(ui_component.molecule.composite.coverage_plan.ui_definition),new cljs.core.Keyword(null,"component-id","component-id",1551113783),ui_component.utils.helpers.path__GT_keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([container_id,"grid-widget"], 0)),new cljs.core.Keyword(null,"container-id","container-id",1274665684),container_id,new cljs.core.Keyword(null,"resizable","resizable",-2107060206),true,new cljs.core.Keyword(null,"tools","tools",-1241731990),true], null)], null)], null)], 0));
} else {
return woolybear.ad.demo.src.catalog.utils.demo.cljs$core$IFn$_invoke$arity$variadic("Coverage Plan",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.alert_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"rccst_ui_component/molecule/example/composite/coverage_plan.cljs",new cljs.core.Keyword(null,"line","line",212345235),46], null)),new cljs.core.Keyword(null,"alert-type","alert-type",405751817),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"heading","heading",-1312171873),"Waiting for (demo) Log-in"], null)], 0));
}
});
});
rccst_ui_component.molecule.example.composite.coverage_plan.r_example = (function rccst_ui_component$molecule$example$composite$coverage_plan$r_example(){
var container_id = "coverage-plan-demo-r";
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
return woolybear.ad.demo.src.catalog.utils.demo.cljs$core$IFn$_invoke$arity$variadic("Coverage Plan using a Grid for layout (Resium globe)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["This experiment uses a GRID to layout the various UI components that make up the 'composite'.  Constructs\n          'coverage-plan', drawing the layout from `:grid-layout` which provides X/Y/W/H for each component\n          on the widget's internal grid.\n\n> This example differs from the Worldwind version only by replacing the `:ww/globe` reference with `:r/globe`\n",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.layout.frame,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"min-height","min-height",398480837),"400px"], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.molecule.grid_container.component,new cljs.core.Keyword(null,"data","data",-232669377),reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc_in(ui_component.molecule.composite.coverage_plan.ui_definition,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.Keyword("ui","globe","ui/globe",662159849),new cljs.core.Keyword(null,"name","name",1843675177)], null),new cljs.core.Keyword("r","globe","r/globe",662172687))),new cljs.core.Keyword(null,"component-id","component-id",1551113783),ui_component.utils.helpers.path__GT_keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([container_id,"grid-widget"], 0)),new cljs.core.Keyword(null,"container-id","container-id",1274665684),container_id,new cljs.core.Keyword(null,"resizable","resizable",-2107060206),true,new cljs.core.Keyword(null,"tools","tools",-1241731990),true], null)], null)], null)], 0));
} else {
return woolybear.ad.demo.src.catalog.utils.demo.cljs$core$IFn$_invoke$arity$variadic("Coverage Plan",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.alert_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"rccst_ui_component/molecule/example/composite/coverage_plan.cljs",new cljs.core.Keyword(null,"line","line",212345235),85], null)),new cljs.core.Keyword(null,"alert-type","alert-type",405751817),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"heading","heading",-1312171873),"Waiting for (demo) Log-in"], null)], 0));
}
});
});
rccst_ui_component.molecule.example.composite.coverage_plan.twoD_example = (function rccst_ui_component$molecule$example$composite$coverage_plan$twoD_example(){
var container_id = "coverage-plan-demo-2D";
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
return woolybear.ad.demo.src.catalog.utils.demo.cljs$core$IFn$_invoke$arity$variadic("Coverage Plan using a Grid for layout (Leaflet globe)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["This experiment uses a GRID to layout the various UI components that make up the 'composite'.  Constructs\n          'coverage-plan', drawing the layout from `:grid-layout` which provides X/Y/W/H for each component\n          on the widget's internal grid.\n\n> This example differs from the Worldwind version only by replacing the `:ww/globe` reference with `:l/globe`\n",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.layout.frame,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"min-height","min-height",398480837),"400px"], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.molecule.grid_container.component,new cljs.core.Keyword(null,"data","data",-232669377),reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc_in(ui_component.molecule.composite.coverage_plan.ui_definition,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.Keyword("ui","globe","ui/globe",662159849),new cljs.core.Keyword(null,"name","name",1843675177)], null),new cljs.core.Keyword("l","globe","l/globe",662172689))),new cljs.core.Keyword(null,"component-id","component-id",1551113783),ui_component.utils.helpers.path__GT_keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([container_id,"grid-widget"], 0)),new cljs.core.Keyword(null,"container-id","container-id",1274665684),container_id,new cljs.core.Keyword(null,"resizable","resizable",-2107060206),true,new cljs.core.Keyword(null,"tools","tools",-1241731990),true], null)], null)], null)], 0));
} else {
return woolybear.ad.demo.src.catalog.utils.demo.cljs$core$IFn$_invoke$arity$variadic("Coverage Plan",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.alert_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"rccst_ui_component/molecule/example/composite/coverage_plan.cljs",new cljs.core.Keyword(null,"line","line",212345235),124], null)),new cljs.core.Keyword(null,"alert-type","alert-type",405751817),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"heading","heading",-1312171873),"Waiting for (demo) Log-in"], null)], 0));
}
});
});

//# sourceMappingURL=rccst_ui_component.molecule.example.composite.coverage_plan.js.map
