goog.provide('ui_component.molecule.composite.coverage_plan');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"ui-component.molecule.composite.coverage-plan",null,20,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ui-component.molecule.composite.coverage-plan"], null);
}),null)),null,771652512,null);
ui_component.molecule.composite.coverage_plan.dummy_targets = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["severe-hd",null,"alpha-hd",null,"fire-hd",null,"fire-ir",null,"bravo-img",null], null), null);
ui_component.molecule.composite.coverage_plan.dummy_satellites = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, ["abi-meso-11",null,"abi-meso-4",null,"viirs-5",null,"abi-meso-2",null,"avhhr-6",null,"abi-meso-10",null], null), null);
/**
 * registers the subscription for the entity defined by 'layers'. processing from
 *   inputs to the output is performed by 'some-computation'
 * 
 *   this function assumes that the caller provides fully-qualified signal vectors, so the CALLER
 *   is responsible for building the keyword (using path->keyword)
 * 
 *   - targets : (vector of keywords) the subscription signal for the target data
 *   - satellites : (vector of keywords) the subscription signal for the 'selected' satellite data
 *   - coverages : (vector of keywords) the subscription signal for the coverage data
 * 
 *   builds and registers the subscription provided by 'layers'
 * 
 *   
 */
ui_component.molecule.composite.coverage_plan.fn_coverage = (function ui_component$molecule$composite$coverage_plan$fn_coverage(p__59940){
var map__59941 = p__59940;
var map__59941__$1 = cljs.core.__destructure_map(map__59941);
var targets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59941__$1,new cljs.core.Keyword(null,"targets","targets",2014963406));
var satellites = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59941__$1,new cljs.core.Keyword(null,"satellites","satellites",644765266));
var selected_targets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59941__$1,new cljs.core.Keyword(null,"selected-targets","selected-targets",-690772853));
var selected_satellites = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59941__$1,new cljs.core.Keyword(null,"selected-satellites","selected-satellites",715173862));
var coverages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59941__$1,new cljs.core.Keyword(null,"coverages","coverages",-1688311362));
var current_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59941__$1,new cljs.core.Keyword(null,"current-time","current-time",-1609407134));
var shapes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59941__$1,new cljs.core.Keyword(null,"shapes","shapes",1897594879));
return re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(shapes),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),targets,new cljs.core.Keyword(null,"<-","<-",760412998),satellites,new cljs.core.Keyword(null,"<-","<-",760412998),selected_targets,new cljs.core.Keyword(null,"<-","<-",760412998),selected_satellites,new cljs.core.Keyword(null,"<-","<-",760412998),coverages,new cljs.core.Keyword(null,"<-","<-",760412998),current_time,(function (p__59947,_){
var vec__59948 = p__59947;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59948,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59948,(1),null);
var s_t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59948,(2),null);
var s_s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59948,(3),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59948,(4),null);
var ct = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59948,(5),null);
var filtered_coverages = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__59938_SHARP_){
return cljs.core.contains_QMARK_(s_s,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__59938_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coverage","coverage",1606292651),new cljs.core.Keyword(null,"sensor","sensor",-106555009)], null)));
}),ui_component.molecule.composite.coverage_plan.support.cook_coverages(s,s_s,c,ct));
var cvg = ((cljs.core.seq(filtered_coverages))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(ui_component.molecule.composite.coverage_plan.support.make_coverage_shape,filtered_coverages):cljs.core.PersistentVector.EMPTY);
var trg = ((cljs.core.seq(t))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(ui_component.molecule.composite.coverage_plan.support.make_target_shape,ui_component.molecule.composite.coverage_plan.support.cook_targets(t,s_t,ct)):cljs.core.PersistentVector.EMPTY);
var ret = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cvg,trg);
return ret;
})], 0));
});
/**
 * registers the subscription for the entity defined by 'selected'. processing from
 *   inputs to output is performed by 'some-computation'
 * 
 *   - data : (vector of keywords) the subscription signal for the input data
 *   - container-id : (string) name of the container holding the blackboard
 * 
 *   builds and registers the subscription :<container>/blackboard.<selected>
 *   
 */
ui_component.molecule.composite.coverage_plan.fn_range = (function ui_component$molecule$composite$coverage_plan$fn_range(p__59956){
var map__59957 = p__59956;
var map__59957__$1 = cljs.core.__destructure_map(map__59957);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59957__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var range = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59957__$1,new cljs.core.Keyword(null,"range","range",1639692286));
return re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(range),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),data,(function (d,_){
var times = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(d)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,times),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,times)], null);
})], 0));
});
ui_component.molecule.composite.coverage_plan.fn_current_time = (function ui_component$molecule$composite$coverage_plan$fn_current_time(p__59961){
var map__59962 = p__59961;
var map__59962__$1 = cljs.core.__destructure_map(map__59962);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59962__$1,new cljs.core.Keyword(null,"value","value",305978217));
var current_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59962__$1,new cljs.core.Keyword(null,"current-time","current-time",-1609407134));
return re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(current_time),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),value,(function (v,_){
return cljs_time.coerce.to_date(cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.now(),cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1(v)));
})], 0));
});
ui_component.molecule.composite.coverage_plan.fn_color_targets = (function ui_component$molecule$composite$coverage_plan$fn_color_targets(p__59964){
var map__59965 = p__59964;
var map__59965__$1 = cljs.core.__destructure_map(map__59965);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59965__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var colored = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59965__$1,new cljs.core.Keyword(null,"colored","colored",-1421800355));
var next_target_color = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
var vec__59968 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(cljs.core.first(colored)),/.blackboard./);
var component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59968,(0),null);
var topic = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59968,(1),null);
var path = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(component),".blackboard"].join(''))], null);
return re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(colored),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),data,new cljs.core.Keyword(null,"<-","<-",760412998),path,(function (p__59971,_){
var vec__59972 = p__59971;
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59972,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59972,(1),null);
var cnt = cljs.core.count(ui_component.molecule.composite.coverage_plan.support.sensor_color_pallet);
var last_target_data = (function (){var fexpr__59975 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(topic);
return (fexpr__59975.cljs$core$IFn$_invoke$arity$1 ? fexpr__59975.cljs$core$IFn$_invoke$arity$1(p) : fexpr__59975.call(null,p));
})();
var assigned = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"color","color",1011675173)),last_target_data);
var assigned_set = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,assigned));
var ret = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (t){
if(cljs.core.contains_QMARK_(assigned_set,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(t))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(t,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__59963_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__59963_SHARP_));
}),last_target_data))));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(t,new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ui_component.molecule.composite.coverage_plan.support.sensor_color_pallet,cljs.core.mod(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(next_target_color,cljs.core.inc),cnt)));
}
}),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(d)));
ui_component.utils.helpers.handle_change_path(path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [topic], null),ret);

return ret;
})], 0));
});
ui_component.molecule.composite.coverage_plan.fn_color_satellites = (function ui_component$molecule$composite$coverage_plan$fn_color_satellites(p__59977){
var map__59978 = p__59977;
var map__59978__$1 = cljs.core.__destructure_map(map__59978);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59978__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var colored = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59978__$1,new cljs.core.Keyword(null,"colored","colored",-1421800355));
var next_sat_color = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
var vec__59979 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(cljs.core.first(colored)),/.blackboard./);
var component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59979,(0),null);
var topic = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59979,(1),null);
var path = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(component),".blackboard"].join(''))], null);
return re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(colored),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),data,new cljs.core.Keyword(null,"<-","<-",760412998),path,(function (p__59982,_){
var vec__59983 = p__59982;
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59983,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59983,(1),null);
var cnt = cljs.core.count(ui_component.molecule.composite.coverage_plan.support.sensor_color_pallet);
var last_sat_data = (function (){var fexpr__59991 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(topic);
return (fexpr__59991.cljs$core$IFn$_invoke$arity$1 ? fexpr__59991.cljs$core$IFn$_invoke$arity$1(p) : fexpr__59991.call(null,p));
})();
var assigned = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sensor_id","sensor_id",-874553719),new cljs.core.Keyword(null,"color","color",1011675173)),last_sat_data);
var assigned_set = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,assigned));
var ret = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (t){
if(cljs.core.contains_QMARK_(assigned_set,new cljs.core.Keyword(null,"sensor_id","sensor_id",-874553719).cljs$core$IFn$_invoke$arity$1(t))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(t,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__59976_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sensor_id","sensor_id",-874553719).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"sensor_id","sensor_id",-874553719).cljs$core$IFn$_invoke$arity$1(p1__59976_SHARP_));
}),last_sat_data))));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(t,new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ui_component.molecule.composite.coverage_plan.support.sensor_color_pallet,cljs.core.mod(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(next_sat_color,cljs.core.inc),cnt)));
}
}),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(d)));
ui_component.utils.helpers.handle_change_path(path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [topic], null),ret);

return ret;
})], 0));
});
ui_component.molecule.composite.coverage_plan.fn_filtered_targets = (function ui_component$molecule$composite$coverage_plan$fn_filtered_targets(p__59993){
var map__59994 = p__59993;
var map__59994__$1 = cljs.core.__destructure_map(map__59994);
var params = map__59994__$1;
var targets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59994__$1,new cljs.core.Keyword(null,"targets","targets",2014963406));
var filter_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59994__$1,new cljs.core.Keyword(null,"filter-value","filter-value",1426358354));
var filtered_targets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59994__$1,new cljs.core.Keyword(null,"filtered-targets","filtered-targets",607680618));
return re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(filtered_targets),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),targets,new cljs.core.Keyword(null,"<-","<-",760412998),filter_value,(function (p__59995,_){
var vec__59999 = p__59995;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59999,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59999,(1),null);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__59992_SHARP_){
return cljs.core.re_find(cljs.core.re_pattern(["(?i)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join('')),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__59992_SHARP_));
}),t);
})], 0));
});
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-meta","register-meta",1726375773),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("coverage-plan","fn-coverage","coverage-plan/fn-coverage",-2031902762),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"function","function",-2127255473),ui_component.molecule.composite.coverage_plan.fn_coverage,new cljs.core.Keyword(null,"ports","ports",-1014790862),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"targets","targets",2014963406),new cljs.core.Keyword("port","sink","port/sink",185875552),new cljs.core.Keyword(null,"satellites","satellites",644765266),new cljs.core.Keyword("port","sink","port/sink",185875552),new cljs.core.Keyword(null,"selected-targets","selected-targets",-690772853),new cljs.core.Keyword("port","sink","port/sink",185875552),new cljs.core.Keyword(null,"selected-satellites","selected-satellites",715173862),new cljs.core.Keyword("port","sink","port/sink",185875552),new cljs.core.Keyword(null,"coverages","coverages",-1688311362),new cljs.core.Keyword("port","sink","port/sink",185875552),new cljs.core.Keyword(null,"current-time","current-time",-1609407134),new cljs.core.Keyword("port","sink","port/sink",185875552),new cljs.core.Keyword(null,"shapes","shapes",1897594879),new cljs.core.Keyword("port","source","port/source",-436771986)], null)], null),new cljs.core.Keyword("coverage-plan","fn-range","coverage-plan/fn-range",-1002702043),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"function","function",-2127255473),ui_component.molecule.composite.coverage_plan.fn_range,new cljs.core.Keyword(null,"ports","ports",-1014790862),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("port","sink","port/sink",185875552),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword("port","source","port/source",-436771986)], null)], null),new cljs.core.Keyword("coverage-plan","fn-current-time","coverage-plan/fn-current-time",1237933400),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"function","function",-2127255473),ui_component.molecule.composite.coverage_plan.fn_current_time,new cljs.core.Keyword(null,"ports","ports",-1014790862),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("port","sink","port/sink",185875552),new cljs.core.Keyword(null,"current-time","current-time",-1609407134),new cljs.core.Keyword("port","source","port/source",-436771986)], null)], null),new cljs.core.Keyword("coverage-plan","fn-color-targets","coverage-plan/fn-color-targets",-894491049),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"function","function",-2127255473),ui_component.molecule.composite.coverage_plan.fn_color_targets,new cljs.core.Keyword(null,"ports","ports",-1014790862),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("port","sink","port/sink",185875552),new cljs.core.Keyword(null,"colored","colored",-1421800355),new cljs.core.Keyword("port","source","port/source",-436771986)], null)], null),new cljs.core.Keyword("coverage-plan","fn-color-satellites","coverage-plan/fn-color-satellites",357039258),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"function","function",-2127255473),ui_component.molecule.composite.coverage_plan.fn_color_satellites,new cljs.core.Keyword(null,"ports","ports",-1014790862),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("port","sink","port/sink",185875552),new cljs.core.Keyword(null,"colored","colored",-1421800355),new cljs.core.Keyword("port","source","port/source",-436771986)], null)], null),new cljs.core.Keyword("coverage-plan","fn-filtered-targets","coverage-plan/fn-filtered-targets",-2037258317),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"function","function",-2127255473),ui_component.molecule.composite.coverage_plan.fn_filtered_targets,new cljs.core.Keyword(null,"ports","ports",-1014790862),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"targets","targets",2014963406),new cljs.core.Keyword("port","sink","port/sink",185875552),new cljs.core.Keyword(null,"filter-value","filter-value",1426358354),new cljs.core.Keyword("port","sink","port/sink",185875552),new cljs.core.Keyword(null,"filtered-targets","filtered-targets",607680618),new cljs.core.Keyword("port","source","port/source",-436771986)], null)], null)], null)], null));
ui_component.molecule.composite.coverage_plan.update_color = (function ui_component$molecule$composite$coverage_plan$update_color(data,id,id_key,color_type,new_color){
var path = (function (p__60007){
var vec__60008 = p__60007;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60008,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60008,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,new cljs.core.Keyword(null,"blackboard","blackboard",-1864070822),p], null);
})((function (p1__60002_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,p1__60002_SHARP_);
})(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(cljs.core.first(data)),/.blackboard./)));
var orig_data = ui_component.utils.helpers.resolve_value(data);
var target = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__60003_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((id_key.cljs$core$IFn$_invoke$arity$1 ? id_key.cljs$core$IFn$_invoke$arity$1(p1__60003_SHARP_) : id_key.call(null,p1__60003_SHARP_)),id);
}),cljs.core.deref(orig_data)));
var kept = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__60004_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((id_key.cljs$core$IFn$_invoke$arity$1 ? id_key.cljs$core$IFn$_invoke$arity$1(p1__60004_SHARP_) : id_key.call(null,p1__60004_SHARP_)),id);
}),cljs.core.deref(orig_data));
var new_data = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(kept,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(target,new cljs.core.Keyword(null,"color","color",1011675173),(function (){var G__60011 = color_type;
var G__60011__$1 = (((G__60011 instanceof cljs.core.Keyword))?G__60011.fqn:null);
switch (G__60011__$1) {
case "hex":
return ui_component.utils.color.match_colors_hex(new_color);

break;
case "rgba":
return ui_component.utils.color.match_colors_rgba(new_color);

break;
default:
return ui_component.utils.color.match_colors_hex(new_color);

}
})()));
return ui_component.utils.helpers.handle_change_path(path,cljs.core.PersistentVector.EMPTY,new_data);
});
ui_component.molecule.composite.coverage_plan.toggle_selection = (function ui_component$molecule$composite$coverage_plan$toggle_selection(resolved_selection,selection_path,id){
var s_ids = (function (){var or__4253__auto__ = resolved_selection;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_(resolved_selection,id)){
return ui_component.utils.helpers.handle_change_path(selection_path,cljs.core.PersistentVector.EMPTY,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(s_ids,id));
} else {
return ui_component.utils.helpers.handle_change_path(selection_path,cljs.core.PersistentVector.EMPTY,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(s_ids,id));
}
});
ui_component.molecule.composite.coverage_plan.display_checkbox = (function ui_component$molecule$composite$coverage_plan$display_checkbox(id,name,under_consideration,toggle_fn){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.is-narrow","td.is-narrow",-1610019919),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
(toggle_fn.cljs$core$IFn$_invoke$arity$0 ? toggle_fn.cljs$core$IFn$_invoke$arity$0() : toggle_fn.call(null));

return null;
})], null),((cljs.core.contains_QMARK_(under_consideration,id))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon.has-text-success.is-small","span.icon.has-text-success.is-small",-2106137091),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-check","i.fas.fa-check",-403092737)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon.has-text-success.is-small","span.icon.has-text-success.is-small",-2106137091),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.far.fa-square","i.far.fa-square",1079796146)], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["check-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null));
});
ui_component.molecule.composite.coverage_plan.display_symbol = (function ui_component$molecule$composite$coverage_plan$display_symbol(data,update_colors,name,p__60017){
var vec__60027 = p__60017;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60027,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60027,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60027,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60027,(3),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60027,(4),null);
var showing_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var d = ui_component.utils.helpers.resolve_value(data);
return (function (data__$1,update_colors__$1,name__$1,p__60032){
var vec__60033 = p__60032;
var ___$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60033,(0),null);
var ___$5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60033,(1),null);
var ___$6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60033,(2),null);
var ___$7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60033,(3),null);
var color__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60033,(4),null);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.popover_anchor_wrapper,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/molecule/composite/coverage_plan.cljs",new cljs.core.Keyword(null,"line","line",212345235),310], null)),new cljs.core.Keyword(null,"showing?","showing?",2094921488),cljs.core.deref(showing_QMARK_),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"below-right","below-right",1598040732),new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon.has-text-success.is-small","span.icon.has-text-success.is-small",-2106137091),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-circle","i.fas.fa-circle",-163893018),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),color__$1], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(showing_QMARK_,cljs.core.not);
})], null)], null)], null),new cljs.core.Keyword(null,"popover","popover",-1809582136),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.popover_content_wrapper,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/molecule/composite/coverage_plan.cljs",new cljs.core.Keyword(null,"line","line",212345235),319], null)),new cljs.core.Keyword(null,"close-button?","close-button?",-1030817687),false,new cljs.core.Keyword(null,"no-clip?","no-clip?",-188884951),false,new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.bhui.color_picker.hex_color_picker,new cljs.core.Keyword(null,"color","color",1011675173),color__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (x){
return ui_component.molecule.composite.coverage_plan.update_color(update_colors__$1,name__$1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"hex","hex",41691346),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(x));
})], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["symb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$1)].join('')], null));
});
});
ui_component.molecule.composite.coverage_plan.display_edit_control = (function ui_component$molecule$composite$coverage_plan$display_edit_control(name){
var is_editing = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function (){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(cljs.core.deref(is_editing))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"ui-component.molecule.composite.coverage-plan",null,334,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SAVE",name], null);
}),null)),null,24892185,null);

return cljs.core.reset_BANG_(is_editing,false);
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"ui-component.molecule.composite.coverage-plan",null,337,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["EDIT",name], null);
}),null)),null,1882314900,null);

return cljs.core.reset_BANG_(is_editing,true);
}
})], null),(cljs.core.truth_(cljs.core.deref(is_editing))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon.has-text-success.is-small","span.icon.has-text-success.is-small",-2106137091),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.far.fa-save","i.far.fa-save",-173859034)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon.has-text-info.is-small","span.icon.has-text-info.is-small",-1707601143),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.far.fa-edit","i.far.fa-edit",481724936)], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["edit-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')], null));
});
});
ui_component.molecule.composite.coverage_plan.display_delete_control = (function ui_component$molecule$composite$coverage_plan$display_delete_control(name){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return null;
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon.has-text-danger.is-small","span.icon.has-text-danger.is-small",1503700607),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.far.fa-trash-alt","i.far.fa-trash-alt",1008774098)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["delete-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')], null));
});
ui_component.molecule.composite.coverage_plan.display_color = (function ui_component$molecule$composite$coverage_plan$display_color(data,name,p__60046){
var vec__60047 = p__60046;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60047,(0),null);
var js_color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60047,(1),null);
var rgba_color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60047,(2),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60047,(3),null);
var icon_color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60047,(4),null);
var showing_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var d = ui_component.utils.helpers.resolve_value(data);
return (function (data__$1,name__$1,p__60056){
var vec__60061 = p__60056;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60061,(0),null);
var js_color__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60061,(1),null);
var vec__60064 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60061,(2),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60064,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60064,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60064,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60064,(3),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60061,(3),null);
var icon_color__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60061,(4),null);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"transparent","transparent",-2073609949),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),"1px",new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"width","width",-384071477),(100)], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.popover_anchor_wrapper,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/molecule/composite/coverage_plan.cljs",new cljs.core.Keyword(null,"line","line",212345235),369], null)),new cljs.core.Keyword(null,"showing?","showing?",2094921488),cljs.core.deref(showing_QMARK_),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"below-right","below-right",1598040732),new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"5px 10px 5px 10px",new cljs.core.Keyword(null,"background-color","background-color",570434026),(function (){var or__4253__auto__ = js_color__$1;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"green","green",-945526839);
}
})()], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(showing_QMARK_,cljs.core.not);
})], null),name__$1], null),new cljs.core.Keyword(null,"popover","popover",-1809582136),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.popover_content_wrapper,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/molecule/composite/coverage_plan.cljs",new cljs.core.Keyword(null,"line","line",212345235),376], null)),new cljs.core.Keyword(null,"close-button?","close-button?",-1030817687),false,new cljs.core.Keyword(null,"no-clip?","no-clip?",-188884951),false,new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.bhui.color_picker.rgba_color_picker,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"g","g",1738089905),g,new cljs.core.Keyword(null,"b","b",1482224470),b,new cljs.core.Keyword(null,"a","a",-2123407586),a], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (x){
return ui_component.molecule.composite.coverage_plan.update_color(data__$1,name__$1,new cljs.core.Keyword(null,"sensor_id","sensor_id",-874553719),new cljs.core.Keyword(null,"rgba","rgba",-2032958718),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
})], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["color-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$1)].join('')], null));
});
});
ui_component.molecule.composite.coverage_plan.display_text = (function ui_component$molecule$composite$coverage_plan$display_text(cell){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cell], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["target-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cell)].join('')], null));
});
ui_component.molecule.composite.coverage_plan.column_types = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("column","boolean","column/boolean",987309358),ui_component.molecule.composite.coverage_plan.display_checkbox,new cljs.core.Keyword("column","colored-cell","column/colored-cell",594375342),ui_component.molecule.composite.coverage_plan.display_color,new cljs.core.Keyword("column","colored-icon","column/colored-icon",1719721024),ui_component.molecule.composite.coverage_plan.display_symbol,new cljs.core.Keyword("column","delete","column/delete",1196553854),ui_component.molecule.composite.coverage_plan.display_delete_control,new cljs.core.Keyword("column","edit","column/edit",1298588804),ui_component.molecule.composite.coverage_plan.display_edit_control,new cljs.core.Keyword("column","text","column/text",-1233041483),ui_component.molecule.composite.coverage_plan.display_text,new cljs.core.Keyword("column","status","column/status",1487753593),(function (){
return cljs.core.List.EMPTY;
})], null);
ui_component.molecule.composite.coverage_plan.target_row_def = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("column","key","column/key",341580563),new cljs.core.Keyword(null,"include","include",153360230),new cljs.core.Keyword("column","label","column/label",925043590),"Include?",new cljs.core.Keyword("column","type","column/type",-1262576654),new cljs.core.Keyword("cell","boolean","cell/boolean",-1916168454)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("column","key","column/key",341580563),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword("column","label","column/label",925043590),"Symbol",new cljs.core.Keyword("column","type","column/type",-1262576654),new cljs.core.Keyword("cell","colored-icon","cell/colored-icon",393293484),new cljs.core.Keyword("column","icon","column/icon",-1285802173),new cljs.core.Keyword(null,"i.fas.fa-circle","i.fas.fa-circle",-163893018)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("column","key","column/key",341580563),new cljs.core.Keyword(null,"aoi","aoi",274308290),new cljs.core.Keyword("column","label","column/label",925043590),"AoI",new cljs.core.Keyword("column","type","column/type",-1262576654),new cljs.core.Keyword("cell","text","cell/text",-1785691783)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("column","key","column/key",341580563),new cljs.core.Keyword(null,"edit","edit",-1641834166),new cljs.core.Keyword("column","label","column/label",925043590),"",new cljs.core.Keyword("column","type","column/type",-1262576654),new cljs.core.Keyword("cell","edit-toggle","cell/edit-toggle",-499275624)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("column","key","column/key",341580563),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword("column","label","column/label",925043590),"",new cljs.core.Keyword("column","type","column/type",-1262576654),new cljs.core.Keyword("cell","delete-toggle","cell/delete-toggle",773011373)], null)], null),new cljs.core.Keyword(null,"unique-key","unique-key",-1207824983),new cljs.core.Keyword(null,"name","name",1843675177)], null);
ui_component.molecule.composite.coverage_plan.satellite_row_def = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("column","key","column/key",341580563),new cljs.core.Keyword(null,"include","include",153360230),new cljs.core.Keyword("column","label","column/label",925043590),"Include?",new cljs.core.Keyword("column","type","column/type",-1262576654),new cljs.core.Keyword("cell","boolean","cell/boolean",-1916168454)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("column","key","column/key",341580563),new cljs.core.Keyword(null,"sensor_id","sensor_id",-874553719),new cljs.core.Keyword("column","label","column/label",925043590),"Sensor/Color",new cljs.core.Keyword("column","type","column/type",-1262576654),new cljs.core.Keyword("cell","colored-cell","cell/colored-cell",-1803777926)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("column","key","column/key",341580563),new cljs.core.Keyword(null,"platform_id","platform_id",888051396),new cljs.core.Keyword("column","label","column/label",925043590),"Platform",new cljs.core.Keyword("column","type","column/type",-1262576654),new cljs.core.Keyword("cell","text","cell/text",-1785691783)], null)], null),new cljs.core.Keyword(null,"unique-key","unique-key",-1207824983),new cljs.core.Keyword(null,"sensor_id","sensor_id",-874553719)], null);
ui_component.molecule.composite.coverage_plan.column_header_cell = (function ui_component$molecule$composite$coverage_plan$column_header_cell(column){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.Keyword("column","label","column/label",925043590).cljs$core$IFn$_invoke$arity$1(column)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("column","label","column/label",925043590).cljs$core$IFn$_invoke$arity$1(column)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int((1000)))].join('')], null));
});
ui_component.molecule.composite.coverage_plan.target_table = (function ui_component$molecule$composite$coverage_plan$target_table(var_args){
var args__4870__auto__ = [];
var len__4864__auto___60150 = arguments.length;
var i__4865__auto___60151 = (0);
while(true){
if((i__4865__auto___60151 < len__4864__auto___60150)){
args__4870__auto__.push((arguments[i__4865__auto___60151]));

var G__60152 = (i__4865__auto___60151 + (1));
i__4865__auto___60151 = G__60152;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return ui_component.molecule.composite.coverage_plan.target_table.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(ui_component.molecule.composite.coverage_plan.target_table.cljs$core$IFn$_invoke$arity$variadic = (function (p__60075){
var map__60076 = p__60075;
var map__60076__$1 = cljs.core.__destructure_map(map__60076);
var params = map__60076__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60076__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60076__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
var colors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60076__$1,new cljs.core.Keyword(null,"colors","colors",1157174732));
var component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60076__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var container_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60076__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var d = ui_component.utils.helpers.resolve_value(data);
var s = ui_component.utils.helpers.resolve_value(selection);
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.table-container","div.table-container",-1574957621),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"nowrap","nowrap",457264988),new cljs.core.Keyword(null,"border","border",1444987323),"1px outset gray"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table","table.table",-538258781),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"sticky","sticky",-2121213869),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"lightgray","lightgray",-845833379)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(ui_component.molecule.composite.coverage_plan.column_header_cell,new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(ui_component.molecule.composite.coverage_plan.target_row_def)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function ui_component$molecule$composite$coverage_plan$iter__60079(s__60080){
return (new cljs.core.LazySeq(null,(function (){
var s__60080__$1 = s__60080;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__60080__$1);
if(temp__5753__auto__){
var s__60080__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60080__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__60080__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__60082 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__60081 = (0);
while(true){
if((i__60081 < size__4651__auto__)){
var map__60083 = cljs.core._nth(c__4650__auto__,i__60081);
var map__60083__$1 = cljs.core.__destructure_map(map__60083);
var target = map__60083__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60083__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var cells = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60083__$1,new cljs.core.Keyword(null,"cells","cells",-985166822));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60083__$1,new cljs.core.Keyword(null,"color","color",1011675173));
cljs.core.chunk_append(b__60082,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.molecule.composite.coverage_plan.display_checkbox,name,name,cljs.core.deref(s),((function (i__60081,map__60083,map__60083__$1,target,name,cells,color,c__4650__auto__,size__4651__auto__,b__60082,s__60080__$2,temp__5753__auto__,d,s,map__60076,map__60076__$1,params,data,selection,colors,component_id,container_id){
return (function (){
return ui_component.molecule.composite.coverage_plan.toggle_selection(cljs.core.deref(s),selection,name);
});})(i__60081,map__60083,map__60083__$1,target,name,cells,color,c__4650__auto__,size__4651__auto__,b__60082,s__60080__$2,temp__5753__auto__,d,s,map__60076,map__60076__$1,params,data,selection,colors,component_id,container_id))
], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.molecule.composite.coverage_plan.display_symbol,data,colors,name,color], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.molecule.composite.coverage_plan.display_text,name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.molecule.composite.coverage_plan.display_edit_control,name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.molecule.composite.coverage_plan.display_delete_control,name], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),name], null))));

var G__60160 = (i__60081 + (1));
i__60081 = G__60160;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60082),ui_component$molecule$composite$coverage_plan$iter__60079(cljs.core.chunk_rest(s__60080__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60082),null);
}
} else {
var map__60088 = cljs.core.first(s__60080__$2);
var map__60088__$1 = cljs.core.__destructure_map(map__60088);
var target = map__60088__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60088__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var cells = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60088__$1,new cljs.core.Keyword(null,"cells","cells",-985166822));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60088__$1,new cljs.core.Keyword(null,"color","color",1011675173));
return cljs.core.cons(cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.molecule.composite.coverage_plan.display_checkbox,name,name,cljs.core.deref(s),((function (map__60088,map__60088__$1,target,name,cells,color,s__60080__$2,temp__5753__auto__,d,s,map__60076,map__60076__$1,params,data,selection,colors,component_id,container_id){
return (function (){
return ui_component.molecule.composite.coverage_plan.toggle_selection(cljs.core.deref(s),selection,name);
});})(map__60088,map__60088__$1,target,name,cells,color,s__60080__$2,temp__5753__auto__,d,s,map__60076,map__60076__$1,params,data,selection,colors,component_id,container_id))
], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.molecule.composite.coverage_plan.display_symbol,data,colors,name,color], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.molecule.composite.coverage_plan.display_text,name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.molecule.composite.coverage_plan.display_edit_control,name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.molecule.composite.coverage_plan.display_delete_control,name], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),name], null))),ui_component$molecule$composite$coverage_plan$iter__60079(cljs.core.rest(s__60080__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.deref(d));
})())], null)], null)], null);
});
}));

(ui_component.molecule.composite.coverage_plan.target_table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(ui_component.molecule.composite.coverage_plan.target_table.cljs$lang$applyTo = (function (seq60071){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60071));
}));

ui_component.molecule.composite.coverage_plan.satellite_table = (function ui_component$molecule$composite$coverage_plan$satellite_table(var_args){
var args__4870__auto__ = [];
var len__4864__auto___60161 = arguments.length;
var i__4865__auto___60162 = (0);
while(true){
if((i__4865__auto___60162 < len__4864__auto___60161)){
args__4870__auto__.push((arguments[i__4865__auto___60162]));

var G__60163 = (i__4865__auto___60162 + (1));
i__4865__auto___60162 = G__60163;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return ui_component.molecule.composite.coverage_plan.satellite_table.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(ui_component.molecule.composite.coverage_plan.satellite_table.cljs$core$IFn$_invoke$arity$variadic = (function (p__60096){
var map__60097 = p__60096;
var map__60097__$1 = cljs.core.__destructure_map(map__60097);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60097__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60097__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
var component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60097__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var container_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60097__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var d = ui_component.utils.helpers.resolve_value(data);
var s = ui_component.utils.helpers.resolve_value(selection);
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.table-container","div.table-container",-1574957621),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"nowrap","nowrap",457264988),new cljs.core.Keyword(null,"border","border",1444987323),"1px outset gray"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table","table.table",-538258781),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"sticky","sticky",-2121213869),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"lightgray","lightgray",-845833379)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(ui_component.molecule.composite.coverage_plan.column_header_cell,new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(ui_component.molecule.composite.coverage_plan.satellite_row_def)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function ui_component$molecule$composite$coverage_plan$iter__60098(s__60099){
return (new cljs.core.LazySeq(null,(function (){
var s__60099__$1 = s__60099;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__60099__$1);
if(temp__5753__auto__){
var s__60099__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60099__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__60099__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__60101 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__60100 = (0);
while(true){
if((i__60100 < size__4651__auto__)){
var map__60103 = cljs.core._nth(c__4650__auto__,i__60100);
var map__60103__$1 = cljs.core.__destructure_map(map__60103);
var platform = map__60103__$1;
var platform_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60103__$1,new cljs.core.Keyword(null,"platform_id","platform_id",888051396));
var sensor_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60103__$1,new cljs.core.Keyword(null,"sensor_id","sensor_id",-874553719));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60103__$1,new cljs.core.Keyword(null,"color","color",1011675173));
cljs.core.chunk_append(b__60101,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.molecule.composite.coverage_plan.display_checkbox,sensor_id,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(platform_id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sensor_id)].join(''),cljs.core.deref(s),((function (i__60100,map__60103,map__60103__$1,platform,platform_id,sensor_id,color,c__4650__auto__,size__4651__auto__,b__60101,s__60099__$2,temp__5753__auto__,d,s,map__60097,map__60097__$1,data,selection,component_id,container_id){
return (function (){
return ui_component.molecule.composite.coverage_plan.toggle_selection(cljs.core.deref(s),selection,sensor_id);
});})(i__60100,map__60103,map__60103__$1,platform,platform_id,sensor_id,color,c__4650__auto__,size__4651__auto__,b__60101,s__60099__$2,temp__5753__auto__,d,s,map__60097,map__60097__$1,data,selection,component_id,container_id))
], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.molecule.composite.coverage_plan.display_color,data,sensor_id,color], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.molecule.composite.coverage_plan.display_text,platform_id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["satellite-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(platform_id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sensor_id)].join('')], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),sensor_id], null))));

var G__60168 = (i__60100 + (1));
i__60100 = G__60168;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60101),ui_component$molecule$composite$coverage_plan$iter__60098(cljs.core.chunk_rest(s__60099__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60101),null);
}
} else {
var map__60104 = cljs.core.first(s__60099__$2);
var map__60104__$1 = cljs.core.__destructure_map(map__60104);
var platform = map__60104__$1;
var platform_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60104__$1,new cljs.core.Keyword(null,"platform_id","platform_id",888051396));
var sensor_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60104__$1,new cljs.core.Keyword(null,"sensor_id","sensor_id",-874553719));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60104__$1,new cljs.core.Keyword(null,"color","color",1011675173));
return cljs.core.cons(cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.molecule.composite.coverage_plan.display_checkbox,sensor_id,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(platform_id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sensor_id)].join(''),cljs.core.deref(s),((function (map__60104,map__60104__$1,platform,platform_id,sensor_id,color,s__60099__$2,temp__5753__auto__,d,s,map__60097,map__60097__$1,data,selection,component_id,container_id){
return (function (){
return ui_component.molecule.composite.coverage_plan.toggle_selection(cljs.core.deref(s),selection,sensor_id);
});})(map__60104,map__60104__$1,platform,platform_id,sensor_id,color,s__60099__$2,temp__5753__auto__,d,s,map__60097,map__60097__$1,data,selection,component_id,container_id))
], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.molecule.composite.coverage_plan.display_color,data,sensor_id,color], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.molecule.composite.coverage_plan.display_text,platform_id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["satellite-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(platform_id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sensor_id)].join('')], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),sensor_id], null))),ui_component$molecule$composite$coverage_plan$iter__60098(cljs.core.rest(s__60099__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.deref(d));
})())], null)], null)], null);
});
}));

(ui_component.molecule.composite.coverage_plan.satellite_table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(ui_component.molecule.composite.coverage_plan.satellite_table.cljs$lang$applyTo = (function (seq60091){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60091));
}));

ui_component.molecule.composite.coverage_plan.target_filter_input = (function ui_component$molecule$composite$coverage_plan$target_filter_input(var_args){
var args__4870__auto__ = [];
var len__4864__auto___60169 = arguments.length;
var i__4865__auto___60170 = (0);
while(true){
if((i__4865__auto___60170 < len__4864__auto___60169)){
args__4870__auto__.push((arguments[i__4865__auto___60170]));

var G__60171 = (i__4865__auto___60170 + (1));
i__4865__auto___60170 = G__60171;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return ui_component.molecule.composite.coverage_plan.target_filter_input.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(ui_component.molecule.composite.coverage_plan.target_filter_input.cljs$core$IFn$_invoke$arity$variadic = (function (p__60113){
var map__60114 = p__60113;
var map__60114__$1 = cljs.core.__destructure_map(map__60114);
var params = map__60114__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60114__$1,new cljs.core.Keyword(null,"value","value",305978217));
var component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60114__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var container_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60114__$1,new cljs.core.Keyword(null,"container-id","container-id",1274665684));
var v = ui_component.utils.helpers.resolve_value(value);
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/molecule/composite/coverage_plan.cljs",new cljs.core.Keyword(null,"line","line",212345235),491], null)),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/molecule/composite/coverage_plan.cljs",new cljs.core.Keyword(null,"line","line",212345235),493], null)),new cljs.core.Keyword(null,"model","model",331153215),cljs.core.deref(v),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"enter text to filter targets",new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__60111_SHARP_){
return ui_component.utils.helpers.handle_change_path(value,cljs.core.PersistentVector.EMPTY,p1__60111_SHARP_);
})], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_circle_icon_button,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/molecule/composite/coverage_plan.cljs",new cljs.core.Keyword(null,"line","line",212345235),498], null)),new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-close-circle-o",new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),"Click to clear",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"smaller","smaller",-1619801498),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return ui_component.utils.helpers.handle_change_path(value,cljs.core.PersistentVector.EMPTY,"");
})], null)], null)], null);
});
}));

(ui_component.molecule.composite.coverage_plan.target_filter_input.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(ui_component.molecule.composite.coverage_plan.target_filter_input.cljs$lang$applyTo = (function (seq60112){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60112));
}));

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-meta","register-meta",1726375773),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("coverage-plan","target-table","coverage-plan/target-table",-1251817376),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),ui_component.molecule.composite.coverage_plan.target_table,new cljs.core.Keyword(null,"ports","ports",-1014790862),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("port","sink","port/sink",185875552),new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword("port","sink","port/sink",185875552),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.Keyword("port","sink","port/sink",185875552)], null)], null),new cljs.core.Keyword("coverage-plan","satellite-table","coverage-plan/satellite-table",-1707574284),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),ui_component.molecule.composite.coverage_plan.satellite_table,new cljs.core.Keyword(null,"ports","ports",-1014790862),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("port","sink","port/sink",185875552),new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword("port","sink","port/sink",185875552)], null)], null),new cljs.core.Keyword("coverage-plan","target-filter-input","coverage-plan/target-filter-input",-1384508719),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),ui_component.molecule.composite.coverage_plan.target_filter_input,new cljs.core.Keyword(null,"ports","ports",-1014790862),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("port","sink","port/sink",185875552)], null)], null)], null)], null));
ui_component.molecule.composite.coverage_plan.ui_definition = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),"Coverage Plan",new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"coverage-plan","coverage-plan",1610309410),new cljs.core.Keyword(null,"components","components",-1073188942),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("fn","color-satellites","fn/color-satellites",4040416),new cljs.core.Keyword("fn","range","fn/range",1639687878),new cljs.core.Keyword("fn","color-targets","fn/color-targets",1781471240),new cljs.core.Keyword("ui","globe","ui/globe",662159849),new cljs.core.Keyword("fn","current-time","fn/current-time",-1609426870),new cljs.core.Keyword("topic","coverage-data","topic/coverage-data",-1135942580),new cljs.core.Keyword("topic","shapes","topic/shapes",1941073518),new cljs.core.Keyword("ui","satellites","ui/satellites",644761326),new cljs.core.Keyword("fn","filtered-targets","fn/filtered-targets",607677746),new cljs.core.Keyword("topic","current-time","topic/current-time",-1385473869),new cljs.core.Keyword("fn","coverage","fn/coverage",1606312179),new cljs.core.Keyword("ui","target-filter","ui/target-filter",-1134503245),new cljs.core.Keyword("topic","time-range","topic/time-range",-1416674186),new cljs.core.Keyword("ui","time-slider","ui/time-slider",1457793558),new cljs.core.Keyword("topic","target-data","topic/target-data",608952982),new cljs.core.Keyword("topic","satellite-data","topic/satellite-data",1567677753),new cljs.core.Keyword("topic","colored-targets","topic/colored-targets",712290201),new cljs.core.Keyword("ui","targets","ui/targets",2014972954),new cljs.core.Keyword("topic","selected-targets","topic/selected-targets",-814966566),new cljs.core.Keyword("topic","target-filter","topic/target-filter",-1226302694),new cljs.core.Keyword("topic","filtered-targets","topic/filtered-targets",740371771),new cljs.core.Keyword("topic","selected-satellites","topic/selected-satellites",571857531),new cljs.core.Keyword("topic","colored-satellites","topic/colored-satellites",-541750627),new cljs.core.Keyword("topic","current-slider","topic/current-slider",2085085278),new cljs.core.Keyword("ui","current-time","ui/current-time",-1609428482)],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("source","fn","source/fn",1803568239),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("coverage-plan","fn-color-satellites","coverage-plan/fn-color-satellites",357039258)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("source","fn","source/fn",1803568239),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("coverage-plan","fn-range","coverage-plan/fn-range",-1002702043)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("source","fn","source/fn",1803568239),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("coverage-plan","fn-color-targets","coverage-plan/fn-color-targets",-894491049)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("ui","component","ui/component",1555933050),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("ww","globe","ww/globe",662160797)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("source","fn","source/fn",1803568239),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("coverage-plan","fn-current-time","coverage-plan/fn-current-time",1237933400)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("source","remote","source/remote",-1682682981),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("source","coverages","source/coverages",1317982675)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("source","local","source/local",-582398745),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"shapes","shapes",1897594879)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("ui","component","ui/component",1555933050),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("coverage-plan","satellite-table","coverage-plan/satellite-table",-1707574284),new cljs.core.Keyword(null,"label","label",1718410804),"Platforms"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("source","fn","source/fn",1803568239),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("coverage-plan","fn-filtered-targets","coverage-plan/fn-filtered-targets",-2037258317)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("source","local","source/local",-582398745),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"current-time","current-time",-1609407134),new cljs.core.Keyword(null,"default","default",-1987822328),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("source","fn","source/fn",1803568239),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("coverage-plan","fn-coverage","coverage-plan/fn-coverage",-2031902762)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("ui","component","ui/component",1555933050),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("coverage-plan","target-filter-input","coverage-plan/target-filter-input",-1384508719),new cljs.core.Keyword(null,"label","label",1718410804),"Filter:"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("source","local","source/local",-582398745),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"time-range","time-range",-1510444251)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("ui","component","ui/component",1555933050),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("rc","slider","rc/slider",-472665328)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("source","remote","source/remote",-1682682981),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("source","targets","source/targets",613052067)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("source","remote","source/remote",-1682682981),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("source","satellites","source/satellites",1639853687)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("source","local","source/local",-582398745),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"colored-targets","colored-targets",600791688),new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("target","include","target/include",-995851061),new cljs.core.Keyword("target","symbol","target/symbol",-1164224105),new cljs.core.Keyword("target","name","target/name",577421760)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("ui","component","ui/component",1555933050),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("coverage-plan","target-table","coverage-plan/target-table",-1251817376),new cljs.core.Keyword(null,"label","label",1718410804),"Targets",new cljs.core.Keyword(null,"config-data","config-data",1933573865),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("column","key","column/key",341580563),new cljs.core.Keyword(null,"include","include",153360230),new cljs.core.Keyword("column","label","column/label",925043590),"Include?",new cljs.core.Keyword("column","type","column/type",-1262576654),new cljs.core.Keyword("cell","boolean","cell/boolean",-1916168454)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("column","key","column/key",341580563),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword("column","label","column/label",925043590),"Symbol",new cljs.core.Keyword("column","type","column/type",-1262576654),new cljs.core.Keyword("cell","colored-icon","cell/colored-icon",393293484),new cljs.core.Keyword("column","icon","column/icon",-1285802173),new cljs.core.Keyword(null,"i.fas.fa-circle","i.fas.fa-circle",-163893018)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("column","key","column/key",341580563),new cljs.core.Keyword(null,"aoi","aoi",274308290),new cljs.core.Keyword("column","label","column/label",925043590),"AoI",new cljs.core.Keyword("column","type","column/type",-1262576654),new cljs.core.Keyword("cell","text","cell/text",-1785691783)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("column","key","column/key",341580563),new cljs.core.Keyword(null,"edit","edit",-1641834166),new cljs.core.Keyword("column","label","column/label",925043590),"",new cljs.core.Keyword("column","type","column/type",-1262576654),new cljs.core.Keyword("cell","edit-toggle","cell/edit-toggle",-499275624)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("column","key","column/key",341580563),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword("column","label","column/label",925043590),"",new cljs.core.Keyword("column","type","column/type",-1262576654),new cljs.core.Keyword("cell","delete-toggle","cell/delete-toggle",773011373)], null)], null),new cljs.core.Keyword(null,"unique-key","unique-key",-1207824983),new cljs.core.Keyword(null,"name","name",1843675177)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("source","local","source/local",-582398745),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"selected-targets","selected-targets",-690772853),new cljs.core.Keyword(null,"default","default",-1987822328),ui_component.molecule.composite.coverage_plan.dummy_targets], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("source","local","source/local",-582398745),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"target-filter","target-filter",-1134499833),new cljs.core.Keyword(null,"default","default",-1987822328),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("source","local","source/local",-582398745),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"filtered-targets","filtered-targets",607680618)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("source","local","source/local",-582398745),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"selected-satellites","selected-satellites",715173862),new cljs.core.Keyword(null,"default","default",-1987822328),ui_component.molecule.composite.coverage_plan.dummy_satellites], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("source","local","source/local",-582398745),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"colored-satellites","colored-satellites",-436427024)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("source","local","source/local",-582398745),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"current-slider","current-slider",1974510925),new cljs.core.Keyword(null,"default","default",-1987822328),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("ui","component","ui/component",1555933050),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("rc","label-md","rc/label-md",-2143926688)], null)]),new cljs.core.Keyword(null,"links","links",-654507394),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("fn","color-satellites","fn/color-satellites",4040416),new cljs.core.Keyword("fn","range","fn/range",1639687878),new cljs.core.Keyword("fn","color-targets","fn/color-targets",1781471240),new cljs.core.Keyword("fn","current-time","fn/current-time",-1609426870),new cljs.core.Keyword("topic","coverage-data","topic/coverage-data",-1135942580),new cljs.core.Keyword("topic","shapes","topic/shapes",1941073518),new cljs.core.Keyword("ui","satellites","ui/satellites",644761326),new cljs.core.Keyword("fn","filtered-targets","fn/filtered-targets",607677746),new cljs.core.Keyword("topic","current-time","topic/current-time",-1385473869),new cljs.core.Keyword("fn","coverage","fn/coverage",1606312179),new cljs.core.Keyword("ui","target-filter","ui/target-filter",-1134503245),new cljs.core.Keyword("topic","time-range","topic/time-range",-1416674186),new cljs.core.Keyword("ui","time-slider","ui/time-slider",1457793558),new cljs.core.Keyword("topic","target-data","topic/target-data",608952982),new cljs.core.Keyword("topic","satellite-data","topic/satellite-data",1567677753),new cljs.core.Keyword("topic","colored-targets","topic/colored-targets",712290201),new cljs.core.Keyword("ui","targets","ui/targets",2014972954),new cljs.core.Keyword("topic","selected-targets","topic/selected-targets",-814966566),new cljs.core.Keyword("topic","target-filter","topic/target-filter",-1226302694),new cljs.core.Keyword("topic","filtered-targets","topic/filtered-targets",740371771),new cljs.core.Keyword("topic","selected-satellites","topic/selected-satellites",571857531),new cljs.core.Keyword("topic","colored-satellites","topic/colored-satellites",-541750627),new cljs.core.Keyword("topic","current-slider","topic/current-slider",2085085278)],[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colored","colored",-1421800355),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("topic","colored-satellites","topic/colored-satellites",-541750627),new cljs.core.Keyword(null,"data","data",-232669377)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("topic","time-range","topic/time-range",-1416674186),new cljs.core.Keyword(null,"data","data",-232669377)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colored","colored",-1421800355),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("topic","colored-targets","topic/colored-targets",712290201),new cljs.core.Keyword(null,"data","data",-232669377)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-time","current-time",-1609407134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("topic","current-time","topic/current-time",-1385473869),new cljs.core.Keyword(null,"data","data",-232669377)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fn","coverage","fn/coverage",1606312179),new cljs.core.Keyword(null,"coverages","coverages",-1688311362),new cljs.core.Keyword("fn","range","fn/range",1639687878),new cljs.core.Keyword(null,"data","data",-232669377)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","globe","ui/globe",662159849),new cljs.core.Keyword(null,"shapes","shapes",1897594879)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("topic","selected-satellites","topic/selected-satellites",571857531),new cljs.core.Keyword(null,"data","data",-232669377)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filtered-targets","filtered-targets",607680618),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("topic","filtered-targets","topic/filtered-targets",740371771),new cljs.core.Keyword(null,"data","data",-232669377)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ui","current-time","ui/current-time",-1609428482),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("ui","globe","ui/globe",662159849),new cljs.core.Keyword(null,"current-time","current-time",-1609407134)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"shapes","shapes",1897594879),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("topic","shapes","topic/shapes",1941073518),new cljs.core.Keyword(null,"data","data",-232669377)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("topic","target-filter","topic/target-filter",-1226302694),new cljs.core.Keyword(null,"data","data",-232669377)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","time-slider","ui/time-slider",1457793558),new cljs.core.Keyword(null,"range","range",1639692286)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("topic","current-slider","topic/current-slider",2085085278),new cljs.core.Keyword(null,"data","data",-232669377)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fn","color-targets","fn/color-targets",1781471240),new cljs.core.Keyword(null,"data","data",-232669377)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fn","color-satellites","fn/color-satellites",4040416),new cljs.core.Keyword(null,"data","data",-232669377)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fn","filtered-targets","fn/filtered-targets",607677746),new cljs.core.Keyword(null,"targets","targets",2014963406)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("topic","selected-targets","topic/selected-targets",-814966566),new cljs.core.Keyword(null,"data","data",-232669377)], null),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("topic","colored-targets","topic/colored-targets",712290201),new cljs.core.Keyword(null,"data","data",-232669377)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ui","targets","ui/targets",2014972954),new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword("fn","coverage","fn/coverage",1606312179),new cljs.core.Keyword(null,"selected-targets","selected-targets",-690772853)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ui","target-filter","ui/target-filter",-1134503245),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("fn","filtered-targets","fn/filtered-targets",607677746),new cljs.core.Keyword(null,"filter-value","filter-value",1426358354)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ui","targets","ui/targets",2014972954),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("fn","coverage","fn/coverage",1606312179),new cljs.core.Keyword(null,"targets","targets",2014963406)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ui","satellites","ui/satellites",644761326),new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword("fn","coverage","fn/coverage",1606312179),new cljs.core.Keyword(null,"selected-satellites","selected-satellites",715173862)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ui","satellites","ui/satellites",644761326),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("fn","coverage","fn/coverage",1606312179),new cljs.core.Keyword(null,"satellites","satellites",644765266)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fn","current-time","fn/current-time",-1609426870),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("ui","time-slider","ui/time-slider",1457793558),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("fn","coverage","fn/coverage",1606312179),new cljs.core.Keyword(null,"current-time","current-time",-1609407134)], null)], null)]),new cljs.core.Keyword(null,"grid-layout","grid-layout",-227324382),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword("ui","target-filter","ui/target-filter",-1134503245),new cljs.core.Keyword(null,"x","x",2099068185),(5),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"w","w",354169001),(4),new cljs.core.Keyword(null,"h","h",1109658740),(2),new cljs.core.Keyword(null,"static","static",1214358571),true], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword("ui","targets","ui/targets",2014972954),new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(2),new cljs.core.Keyword(null,"w","w",354169001),(9),new cljs.core.Keyword(null,"h","h",1109658740),(7),new cljs.core.Keyword(null,"static","static",1214358571),true], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword("ui","satellites","ui/satellites",644761326),new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(9),new cljs.core.Keyword(null,"w","w",354169001),(9),new cljs.core.Keyword(null,"h","h",1109658740),(8),new cljs.core.Keyword(null,"static","static",1214358571),true], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword("ui","time-slider","ui/time-slider",1457793558),new cljs.core.Keyword(null,"x","x",2099068185),(2),new cljs.core.Keyword(null,"y","y",-1757859776),(17),new cljs.core.Keyword(null,"w","w",354169001),(6),new cljs.core.Keyword(null,"h","h",1109658740),(2),new cljs.core.Keyword(null,"static","static",1214358571),true], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword("ui","globe","ui/globe",662159849),new cljs.core.Keyword(null,"x","x",2099068185),(9),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"w","w",354169001),(11),new cljs.core.Keyword(null,"h","h",1109658740),(17),new cljs.core.Keyword(null,"static","static",1214358571),true], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword("ui","current-time","ui/current-time",-1609428482),new cljs.core.Keyword(null,"x","x",2099068185),(9),new cljs.core.Keyword(null,"y","y",-1757859776),(17),new cljs.core.Keyword(null,"w","w",354169001),(8),new cljs.core.Keyword(null,"h","h",1109658740),(2),new cljs.core.Keyword(null,"static","static",1214358571),true], null)], null)], null);

//# sourceMappingURL=ui_component.molecule.composite.coverage_plan.js.map
