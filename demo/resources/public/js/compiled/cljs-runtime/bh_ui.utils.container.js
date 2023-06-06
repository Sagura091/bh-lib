goog.provide('bh_ui.utils.container');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"bh-ui.utils.container",null,9,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bh-ui.utils.container"], null);
}),null)),null,-191840968,null);
bh_ui.utils.container.default_composite = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"blackboard","blackboard",-1864070822),cljs.core.PersistentArrayMap.EMPTY], null);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("events","init-container","events/init-container",257984028),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__51006){
var vec__51007 = p__51006;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51007,(0),null);
var container = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51007,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"container","container",-96406180,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"containers","containers",-2127048083),new cljs.core.Symbol(null,"container","container",-96406180,null)], null)),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),new cljs.core.Symbol(null,"db","db",-1661185010,null)),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"containers","containers",-2127048083),new cljs.core.Symbol(null,"container","container",-96406180,null)], null),new cljs.core.Symbol(null,"default-composite","default-composite",1587846458,null))))));

var result__38107__auto__ = (cljs.core.truth_((function (){var result__38107__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var result__38107__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__38107__auto__;
})(),(function (){var result__38107__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"containers","containers",-2127048083),(function (){var result__38107__auto__ = container;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(6),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"container","container",-96406180,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__38107__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"containers","containers",-2127048083),new cljs.core.Symbol(null,"container","container",-96406180,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__38107__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(2),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"containers","containers",-2127048083),new cljs.core.Symbol(null,"container","container",-96406180,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__38107__auto__;
})())?(function (){var result__38107__auto__ = (function (){var result__38107__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),3,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(8),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__38107__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(7),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__38107__auto__;
})():(function (){var result__38107__auto__ = (function (){var result__38107__auto__ = cljs.core.assoc_in((function (){var result__38107__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),4,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(11),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__38107__auto__;
})(),(function (){var result__38107__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"containers","containers",-2127048083),(function (){var result__38107__auto__ = container;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),3,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(14),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"container","container",-96406180,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__38107__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(12),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"containers","containers",-2127048083),new cljs.core.Symbol(null,"container","container",-96406180,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__38107__auto__;
})(),(function (){var result__38107__auto__ = bh_ui.utils.container.default_composite;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(15),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"default-composite","default-composite",1587846458,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__38107__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(10),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"containers","containers",-2127048083),new cljs.core.Symbol(null,"container","container",-96406180,null)], null),new cljs.core.Symbol(null,"default-composite","default-composite",1587846458,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__38107__auto__;
})();
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(9),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"containers","containers",-2127048083),new cljs.core.Symbol(null,"container","container",-96406180,null)], null),new cljs.core.Symbol(null,"default-composite","default-composite",1587846458,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__38107__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__38107__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"containers","containers",-2127048083),new cljs.core.Symbol(null,"container","container",-96406180,null)], null)),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),new cljs.core.Symbol(null,"db","db",-1661185010,null)),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"containers","containers",-2127048083),new cljs.core.Symbol(null,"container","container",-96406180,null)], null),new cljs.core.Symbol(null,"default-composite","default-composite",1587846458,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__38107__auto__;
}catch (e51010){var e = e51010;
throw e;
}}):(function (db,p__51011){
var vec__51012 = p__51011;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51012,(0),null);
var container = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51012,(1),null);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"containers","containers",-2127048083),container], null)))){
return db;
} else {
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"containers","containers",-2127048083),container], null),bh_ui.utils.container.default_composite);
}
})));
bh_ui.utils.container.init_container = (function bh_ui$utils$container$init_container(container_id){
var id = bh_ui.utils.helpers.path__GT_keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([container_id], 0));
var c = bh_ui.utils.helpers.path__GT_keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"containers","containers",-2127048083),container_id], 0));
var blackboard = bh_ui.utils.helpers.path__GT_keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([container_id,"blackboard"], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(c,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"containers","containers",-2127048083)], null),(function (containers,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(containers,id);
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(blackboard,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c], null),(function (w,p__51015){
var vec__51016 = p__51015;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51016,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51016,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(w,path);
})], 0));

return re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(blackboard,(function (bb,p__51019){
var vec__51020 = p__51019;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51020,(0),null);
var id__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51020,(1),null);
var component_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51020,(2),null);
var new_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51020,(3),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(bb,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"containers","containers",-2127048083),id__$1,new cljs.core.Keyword(null,"blackboard","blackboard",-1864070822)], null),cljs.core.assoc,component_path,new_val);
}));
});
bh_ui.utils.container.subscribe_to_container = (function bh_ui$utils$container$subscribe_to_container(container_id,p__51026){
var vec__51027 = p__51026;
var seq__51028 = cljs.core.seq(vec__51027);
var first__51029 = cljs.core.first(seq__51028);
var seq__51028__$1 = cljs.core.next(seq__51028);
var a = first__51029;
var more = seq__51028__$1;
var component_path = vec__51027;
var p = bh_ui.utils.locals.compute_container_path(container_id,a,more);
return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null));
});
/**
 * 
 * > NOTE: the re-frame event-handlers ***MUST*** be created beforehand, using [[init-container-locals]]
 * 
 *   ---
 * 
 *   - `container-id` : (string) name of the widget, typically a guid, but it can be any string you'd like
 *   - `component-path : (vector of keys [keywords or string]) the 'key' for the item that is being publised
 *   - `new-val` : (any) the new value to store at the given path
 * 
 *   `value-path` functions exactly like any other re-frame subscription, but relative to the
 *   `[:containers <component-id>]` in the overall `app-db`
 * 
 *   It is destructured as follows:
 * 
 *   | var        | type       | description                         |
 *   |:-----------|:----------:|:------------------------------------|
 *   | `a`        | keyword    | the (primary) value to subscribe to |
 *   | `& more`   | keyword(s) | any additional parts to the path    |
 * 
 * ---
 * 
 * #### EXAMPLES
 * 
 *   
 */
bh_ui.utils.container.publish_to_container = (function bh_ui$utils$container$publish_to_container(container_id,component_path,new_val){
var p = bh_ui.utils.helpers.path__GT_keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([container_id,"blackboard"], 0));
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,component_path,new_val], null));
});
/**
 * build the subscription needed to access all the container's configuration
 *   properties
 * 
 *   1. process-locals
 *   2. map over the result and call ui-utils/subscribe-to-container
 *   3. put the result into a hash-map
 *   
 */
bh_ui.utils.container.build_container_subs = (function bh_ui$utils$container$build_container_subs(container_id,local_config){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (path){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([path,bh_ui.utils.container.subscribe_to_container(container_id,path)]);
}),bh_ui.utils.locals.process_locals(cljs.core.PersistentVector.EMPTY,null,local_config)));
});
bh_ui.utils.container.override_subs = (function bh_ui$utils$container$override_subs(override_source,local_subs,subs){
var overrides = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (path){
var s = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(override_source,path);
if((!((s == null)))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([path,s]);
} else {
return null;
}
}),subs);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,local_subs,overrides);
});

//# sourceMappingURL=bh_ui.utils.container.js.map
