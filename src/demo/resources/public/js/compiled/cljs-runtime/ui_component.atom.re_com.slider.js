goog.provide('ui_component.atom.re_com.slider');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"ui-component.atom.re-com.slider",null,8,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ui-component.atom.re-com.slider"], null);
}),null)),null,-84360809,null);
ui_component.atom.re_com.slider.slider = (function ui_component$atom$re_com$slider$slider(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59771 = arguments.length;
var i__4865__auto___59772 = (0);
while(true){
if((i__4865__auto___59772 < len__4864__auto___59771)){
args__4870__auto__.push((arguments[i__4865__auto___59772]));

var G__59773 = (i__4865__auto___59772 + (1));
i__4865__auto___59772 = G__59773;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return ui_component.atom.re_com.slider.slider.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(ui_component.atom.re_com.slider.slider.cljs$core$IFn$_invoke$arity$variadic = (function (p__59766){
var map__59767 = p__59766;
var map__59767__$1 = cljs.core.__destructure_map(map__59767);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59767__$1,new cljs.core.Keyword(null,"value","value",305978217));
var range = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59767__$1,new cljs.core.Keyword(null,"range","range",1639692286));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59767__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59767__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var vec__59768 = cljs.core.deref(ui_component.utils.helpers.resolve_value(range));
var min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59768,(0),null);
var max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59768,(1),null);
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/re_com/slider.cljs",new cljs.core.Keyword(null,"line","line",212345235),17], null)),new cljs.core.Keyword(null,"gap","gap",80255254),"2px",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.slider,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"ui_component/atom/re_com/slider.cljs",new cljs.core.Keyword(null,"line","line",212345235),20], null)),new cljs.core.Keyword(null,"model","model",331153215),ui_component.utils.helpers.resolve_value(value),new cljs.core.Keyword(null,"min","min",444991522),min,new cljs.core.Keyword(null,"max","max",61366548),max,new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrapper","wrapper",-969103524),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"90%"], null)], null)], null),new cljs.core.Keyword(null,"width","width",-384071477),(function (){var or__4253__auto__ = width;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "100%";
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__59764_SHARP_){
return ui_component.utils.helpers.handle_change(value,parseInt(p1__59764_SHARP_));
}),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),(function (){var or__4253__auto__ = disabled_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return false;
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.deref(ui_component.utils.helpers.resolve_value(value))], null)], null)], null);
}));

(ui_component.atom.re_com.slider.slider.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(ui_component.atom.re_com.slider.slider.cljs$lang$applyTo = (function (seq59765){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59765));
}));

ui_component.atom.re_com.slider.meta_data = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rc","slider","rc/slider",-472665328),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),ui_component.atom.re_com.slider.slider,new cljs.core.Keyword(null,"ports","ports",-1014790862),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("port","source-sink","port/source-sink",2080195151),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword("port","sink","port/sink",185875552)], null)], null)], null);
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-meta","register-meta",1726375773),ui_component.atom.re_com.slider.meta_data], null));

//# sourceMappingURL=ui_component.atom.re_com.slider.js.map
