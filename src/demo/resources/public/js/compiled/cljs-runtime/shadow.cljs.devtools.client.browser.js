goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___44286 = arguments.length;
var i__4865__auto___44287 = (0);
while(true){
if((i__4865__auto___44287 < len__4864__auto___44286)){
args__4870__auto__.push((arguments[i__4865__auto___44287]));

var G__44288 = (i__4865__auto___44287 + (1));
i__4865__auto___44287 = G__44288;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq43792){
var G__43793 = cljs.core.first(seq43792);
var seq43792__$1 = cljs.core.next(seq43792);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43793,seq43792__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__43794 = cljs.core.seq(sources);
var chunk__43795 = null;
var count__43796 = (0);
var i__43797 = (0);
while(true){
if((i__43797 < count__43796)){
var map__43802 = chunk__43795.cljs$core$IIndexed$_nth$arity$2(null,i__43797);
var map__43802__$1 = cljs.core.__destructure_map(map__43802);
var src = map__43802__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43802__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43802__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43802__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43802__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e43803){var e_44290 = e43803;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_44290);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_44290.message)].join('')));
}

var G__44291 = seq__43794;
var G__44292 = chunk__43795;
var G__44293 = count__43796;
var G__44294 = (i__43797 + (1));
seq__43794 = G__44291;
chunk__43795 = G__44292;
count__43796 = G__44293;
i__43797 = G__44294;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__43794);
if(temp__5753__auto__){
var seq__43794__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43794__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__43794__$1);
var G__44295 = cljs.core.chunk_rest(seq__43794__$1);
var G__44296 = c__4679__auto__;
var G__44297 = cljs.core.count(c__4679__auto__);
var G__44298 = (0);
seq__43794 = G__44295;
chunk__43795 = G__44296;
count__43796 = G__44297;
i__43797 = G__44298;
continue;
} else {
var map__43804 = cljs.core.first(seq__43794__$1);
var map__43804__$1 = cljs.core.__destructure_map(map__43804);
var src = map__43804__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43804__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43804__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43804__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43804__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e43805){var e_44299 = e43805;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_44299);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_44299.message)].join('')));
}

var G__44300 = cljs.core.next(seq__43794__$1);
var G__44301 = null;
var G__44302 = (0);
var G__44303 = (0);
seq__43794 = G__44300;
chunk__43795 = G__44301;
count__43796 = G__44302;
i__43797 = G__44303;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__43806 = cljs.core.seq(js_requires);
var chunk__43807 = null;
var count__43808 = (0);
var i__43809 = (0);
while(true){
if((i__43809 < count__43808)){
var js_ns = chunk__43807.cljs$core$IIndexed$_nth$arity$2(null,i__43809);
var require_str_44304 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_44304);


var G__44307 = seq__43806;
var G__44308 = chunk__43807;
var G__44309 = count__43808;
var G__44310 = (i__43809 + (1));
seq__43806 = G__44307;
chunk__43807 = G__44308;
count__43808 = G__44309;
i__43809 = G__44310;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__43806);
if(temp__5753__auto__){
var seq__43806__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43806__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__43806__$1);
var G__44312 = cljs.core.chunk_rest(seq__43806__$1);
var G__44313 = c__4679__auto__;
var G__44314 = cljs.core.count(c__4679__auto__);
var G__44315 = (0);
seq__43806 = G__44312;
chunk__43807 = G__44313;
count__43808 = G__44314;
i__43809 = G__44315;
continue;
} else {
var js_ns = cljs.core.first(seq__43806__$1);
var require_str_44316 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_44316);


var G__44317 = cljs.core.next(seq__43806__$1);
var G__44318 = null;
var G__44319 = (0);
var G__44320 = (0);
seq__43806 = G__44317;
chunk__43807 = G__44318;
count__43808 = G__44319;
i__43809 = G__44320;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__43811){
var map__43812 = p__43811;
var map__43812__$1 = cljs.core.__destructure_map(map__43812);
var msg = map__43812__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43812__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43812__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__43815(s__43816){
return (new cljs.core.LazySeq(null,(function (){
var s__43816__$1 = s__43816;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__43816__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__43821 = cljs.core.first(xs__6308__auto__);
var map__43821__$1 = cljs.core.__destructure_map(map__43821);
var src = map__43821__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43821__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43821__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__43816__$1,map__43821,map__43821__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__43812,map__43812__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__43815_$_iter__43817(s__43818){
return (new cljs.core.LazySeq(null,((function (s__43816__$1,map__43821,map__43821__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__43812,map__43812__$1,msg,info,reload_info){
return (function (){
var s__43818__$1 = s__43818;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__43818__$1);
if(temp__5753__auto____$1){
var s__43818__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__43818__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__43818__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__43820 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__43819 = (0);
while(true){
if((i__43819 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__43819);
cljs.core.chunk_append(b__43820,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__44321 = (i__43819 + (1));
i__43819 = G__44321;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43820),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__43815_$_iter__43817(cljs.core.chunk_rest(s__43818__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43820),null);
}
} else {
var warning = cljs.core.first(s__43818__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__43815_$_iter__43817(cljs.core.rest(s__43818__$2)));
}
} else {
return null;
}
break;
}
});})(s__43816__$1,map__43821,map__43821__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__43812,map__43812__$1,msg,info,reload_info))
,null,null));
});})(s__43816__$1,map__43821,map__43821__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__43812,map__43812__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__43815(cljs.core.rest(s__43816__$1)));
} else {
var G__44322 = cljs.core.rest(s__43816__$1);
s__43816__$1 = G__44322;
continue;
}
} else {
var G__44323 = cljs.core.rest(s__43816__$1);
s__43816__$1 = G__44323;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__43826_44324 = cljs.core.seq(warnings);
var chunk__43827_44325 = null;
var count__43828_44326 = (0);
var i__43829_44327 = (0);
while(true){
if((i__43829_44327 < count__43828_44326)){
var map__43834_44328 = chunk__43827_44325.cljs$core$IIndexed$_nth$arity$2(null,i__43829_44327);
var map__43834_44329__$1 = cljs.core.__destructure_map(map__43834_44328);
var w_44330 = map__43834_44329__$1;
var msg_44331__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43834_44329__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_44332 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43834_44329__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_44333 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43834_44329__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_44334 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43834_44329__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_44334)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_44332),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_44333),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_44331__$1)].join(''));


var G__44335 = seq__43826_44324;
var G__44336 = chunk__43827_44325;
var G__44337 = count__43828_44326;
var G__44338 = (i__43829_44327 + (1));
seq__43826_44324 = G__44335;
chunk__43827_44325 = G__44336;
count__43828_44326 = G__44337;
i__43829_44327 = G__44338;
continue;
} else {
var temp__5753__auto___44339 = cljs.core.seq(seq__43826_44324);
if(temp__5753__auto___44339){
var seq__43826_44340__$1 = temp__5753__auto___44339;
if(cljs.core.chunked_seq_QMARK_(seq__43826_44340__$1)){
var c__4679__auto___44341 = cljs.core.chunk_first(seq__43826_44340__$1);
var G__44342 = cljs.core.chunk_rest(seq__43826_44340__$1);
var G__44343 = c__4679__auto___44341;
var G__44344 = cljs.core.count(c__4679__auto___44341);
var G__44345 = (0);
seq__43826_44324 = G__44342;
chunk__43827_44325 = G__44343;
count__43828_44326 = G__44344;
i__43829_44327 = G__44345;
continue;
} else {
var map__43835_44346 = cljs.core.first(seq__43826_44340__$1);
var map__43835_44347__$1 = cljs.core.__destructure_map(map__43835_44346);
var w_44348 = map__43835_44347__$1;
var msg_44349__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43835_44347__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_44350 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43835_44347__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_44351 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43835_44347__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_44352 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43835_44347__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_44352)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_44350),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_44351),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_44349__$1)].join(''));


var G__44354 = cljs.core.next(seq__43826_44340__$1);
var G__44355 = null;
var G__44356 = (0);
var G__44357 = (0);
seq__43826_44324 = G__44354;
chunk__43827_44325 = G__44355;
count__43828_44326 = G__44356;
i__43829_44327 = G__44357;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__43810_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__43810_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__43836){
var map__43837 = p__43836;
var map__43837__$1 = cljs.core.__destructure_map(map__43837);
var msg = map__43837__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43837__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43837__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__43838 = cljs.core.seq(updates);
var chunk__43840 = null;
var count__43841 = (0);
var i__43842 = (0);
while(true){
if((i__43842 < count__43841)){
var path = chunk__43840.cljs$core$IIndexed$_nth$arity$2(null,i__43842);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__44038_44358 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__44042_44359 = null;
var count__44043_44360 = (0);
var i__44044_44361 = (0);
while(true){
if((i__44044_44361 < count__44043_44360)){
var node_44362 = chunk__44042_44359.cljs$core$IIndexed$_nth$arity$2(null,i__44044_44361);
if(cljs.core.not(node_44362.shadow$old)){
var path_match_44363 = shadow.cljs.devtools.client.browser.match_paths(node_44362.getAttribute("href"),path);
if(cljs.core.truth_(path_match_44363)){
var new_link_44364 = (function (){var G__44093 = node_44362.cloneNode(true);
G__44093.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_44363),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__44093;
})();
(node_44362.shadow$old = true);

(new_link_44364.onload = ((function (seq__44038_44358,chunk__44042_44359,count__44043_44360,i__44044_44361,seq__43838,chunk__43840,count__43841,i__43842,new_link_44364,path_match_44363,node_44362,path,map__43837,map__43837__$1,msg,updates,reload_info){
return (function (e){
var seq__44096_44365 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__44098_44366 = null;
var count__44099_44367 = (0);
var i__44100_44368 = (0);
while(true){
if((i__44100_44368 < count__44099_44367)){
var map__44107_44371 = chunk__44098_44366.cljs$core$IIndexed$_nth$arity$2(null,i__44100_44368);
var map__44107_44372__$1 = cljs.core.__destructure_map(map__44107_44371);
var task_44373 = map__44107_44372__$1;
var fn_str_44374 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44107_44372__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44375 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44107_44372__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44376 = goog.getObjectByName(fn_str_44374,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44375)].join(''));

(fn_obj_44376.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44376.cljs$core$IFn$_invoke$arity$2(path,new_link_44364) : fn_obj_44376.call(null,path,new_link_44364));


var G__44377 = seq__44096_44365;
var G__44378 = chunk__44098_44366;
var G__44379 = count__44099_44367;
var G__44380 = (i__44100_44368 + (1));
seq__44096_44365 = G__44377;
chunk__44098_44366 = G__44378;
count__44099_44367 = G__44379;
i__44100_44368 = G__44380;
continue;
} else {
var temp__5753__auto___44381 = cljs.core.seq(seq__44096_44365);
if(temp__5753__auto___44381){
var seq__44096_44382__$1 = temp__5753__auto___44381;
if(cljs.core.chunked_seq_QMARK_(seq__44096_44382__$1)){
var c__4679__auto___44383 = cljs.core.chunk_first(seq__44096_44382__$1);
var G__44384 = cljs.core.chunk_rest(seq__44096_44382__$1);
var G__44385 = c__4679__auto___44383;
var G__44386 = cljs.core.count(c__4679__auto___44383);
var G__44387 = (0);
seq__44096_44365 = G__44384;
chunk__44098_44366 = G__44385;
count__44099_44367 = G__44386;
i__44100_44368 = G__44387;
continue;
} else {
var map__44110_44388 = cljs.core.first(seq__44096_44382__$1);
var map__44110_44389__$1 = cljs.core.__destructure_map(map__44110_44388);
var task_44390 = map__44110_44389__$1;
var fn_str_44391 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44110_44389__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44392 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44110_44389__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44393 = goog.getObjectByName(fn_str_44391,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44392)].join(''));

(fn_obj_44393.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44393.cljs$core$IFn$_invoke$arity$2(path,new_link_44364) : fn_obj_44393.call(null,path,new_link_44364));


var G__44394 = cljs.core.next(seq__44096_44382__$1);
var G__44395 = null;
var G__44396 = (0);
var G__44397 = (0);
seq__44096_44365 = G__44394;
chunk__44098_44366 = G__44395;
count__44099_44367 = G__44396;
i__44100_44368 = G__44397;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_44362);
});})(seq__44038_44358,chunk__44042_44359,count__44043_44360,i__44044_44361,seq__43838,chunk__43840,count__43841,i__43842,new_link_44364,path_match_44363,node_44362,path,map__43837,map__43837__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_44363], 0));

goog.dom.insertSiblingAfter(new_link_44364,node_44362);


var G__44400 = seq__44038_44358;
var G__44401 = chunk__44042_44359;
var G__44402 = count__44043_44360;
var G__44403 = (i__44044_44361 + (1));
seq__44038_44358 = G__44400;
chunk__44042_44359 = G__44401;
count__44043_44360 = G__44402;
i__44044_44361 = G__44403;
continue;
} else {
var G__44404 = seq__44038_44358;
var G__44405 = chunk__44042_44359;
var G__44406 = count__44043_44360;
var G__44407 = (i__44044_44361 + (1));
seq__44038_44358 = G__44404;
chunk__44042_44359 = G__44405;
count__44043_44360 = G__44406;
i__44044_44361 = G__44407;
continue;
}
} else {
var G__44408 = seq__44038_44358;
var G__44409 = chunk__44042_44359;
var G__44410 = count__44043_44360;
var G__44411 = (i__44044_44361 + (1));
seq__44038_44358 = G__44408;
chunk__44042_44359 = G__44409;
count__44043_44360 = G__44410;
i__44044_44361 = G__44411;
continue;
}
} else {
var temp__5753__auto___44412 = cljs.core.seq(seq__44038_44358);
if(temp__5753__auto___44412){
var seq__44038_44413__$1 = temp__5753__auto___44412;
if(cljs.core.chunked_seq_QMARK_(seq__44038_44413__$1)){
var c__4679__auto___44414 = cljs.core.chunk_first(seq__44038_44413__$1);
var G__44415 = cljs.core.chunk_rest(seq__44038_44413__$1);
var G__44416 = c__4679__auto___44414;
var G__44417 = cljs.core.count(c__4679__auto___44414);
var G__44418 = (0);
seq__44038_44358 = G__44415;
chunk__44042_44359 = G__44416;
count__44043_44360 = G__44417;
i__44044_44361 = G__44418;
continue;
} else {
var node_44419 = cljs.core.first(seq__44038_44413__$1);
if(cljs.core.not(node_44419.shadow$old)){
var path_match_44420 = shadow.cljs.devtools.client.browser.match_paths(node_44419.getAttribute("href"),path);
if(cljs.core.truth_(path_match_44420)){
var new_link_44421 = (function (){var G__44120 = node_44419.cloneNode(true);
G__44120.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_44420),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__44120;
})();
(node_44419.shadow$old = true);

(new_link_44421.onload = ((function (seq__44038_44358,chunk__44042_44359,count__44043_44360,i__44044_44361,seq__43838,chunk__43840,count__43841,i__43842,new_link_44421,path_match_44420,node_44419,seq__44038_44413__$1,temp__5753__auto___44412,path,map__43837,map__43837__$1,msg,updates,reload_info){
return (function (e){
var seq__44121_44422 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__44123_44423 = null;
var count__44124_44424 = (0);
var i__44125_44425 = (0);
while(true){
if((i__44125_44425 < count__44124_44424)){
var map__44135_44426 = chunk__44123_44423.cljs$core$IIndexed$_nth$arity$2(null,i__44125_44425);
var map__44135_44427__$1 = cljs.core.__destructure_map(map__44135_44426);
var task_44428 = map__44135_44427__$1;
var fn_str_44429 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44135_44427__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44430 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44135_44427__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44432 = goog.getObjectByName(fn_str_44429,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44430)].join(''));

(fn_obj_44432.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44432.cljs$core$IFn$_invoke$arity$2(path,new_link_44421) : fn_obj_44432.call(null,path,new_link_44421));


var G__44433 = seq__44121_44422;
var G__44434 = chunk__44123_44423;
var G__44435 = count__44124_44424;
var G__44436 = (i__44125_44425 + (1));
seq__44121_44422 = G__44433;
chunk__44123_44423 = G__44434;
count__44124_44424 = G__44435;
i__44125_44425 = G__44436;
continue;
} else {
var temp__5753__auto___44437__$1 = cljs.core.seq(seq__44121_44422);
if(temp__5753__auto___44437__$1){
var seq__44121_44438__$1 = temp__5753__auto___44437__$1;
if(cljs.core.chunked_seq_QMARK_(seq__44121_44438__$1)){
var c__4679__auto___44439 = cljs.core.chunk_first(seq__44121_44438__$1);
var G__44440 = cljs.core.chunk_rest(seq__44121_44438__$1);
var G__44441 = c__4679__auto___44439;
var G__44442 = cljs.core.count(c__4679__auto___44439);
var G__44443 = (0);
seq__44121_44422 = G__44440;
chunk__44123_44423 = G__44441;
count__44124_44424 = G__44442;
i__44125_44425 = G__44443;
continue;
} else {
var map__44138_44444 = cljs.core.first(seq__44121_44438__$1);
var map__44138_44445__$1 = cljs.core.__destructure_map(map__44138_44444);
var task_44446 = map__44138_44445__$1;
var fn_str_44447 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44138_44445__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44448 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44138_44445__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44449 = goog.getObjectByName(fn_str_44447,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44448)].join(''));

(fn_obj_44449.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44449.cljs$core$IFn$_invoke$arity$2(path,new_link_44421) : fn_obj_44449.call(null,path,new_link_44421));


var G__44451 = cljs.core.next(seq__44121_44438__$1);
var G__44452 = null;
var G__44453 = (0);
var G__44454 = (0);
seq__44121_44422 = G__44451;
chunk__44123_44423 = G__44452;
count__44124_44424 = G__44453;
i__44125_44425 = G__44454;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_44419);
});})(seq__44038_44358,chunk__44042_44359,count__44043_44360,i__44044_44361,seq__43838,chunk__43840,count__43841,i__43842,new_link_44421,path_match_44420,node_44419,seq__44038_44413__$1,temp__5753__auto___44412,path,map__43837,map__43837__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_44420], 0));

goog.dom.insertSiblingAfter(new_link_44421,node_44419);


var G__44455 = cljs.core.next(seq__44038_44413__$1);
var G__44456 = null;
var G__44457 = (0);
var G__44458 = (0);
seq__44038_44358 = G__44455;
chunk__44042_44359 = G__44456;
count__44043_44360 = G__44457;
i__44044_44361 = G__44458;
continue;
} else {
var G__44459 = cljs.core.next(seq__44038_44413__$1);
var G__44460 = null;
var G__44461 = (0);
var G__44462 = (0);
seq__44038_44358 = G__44459;
chunk__44042_44359 = G__44460;
count__44043_44360 = G__44461;
i__44044_44361 = G__44462;
continue;
}
} else {
var G__44463 = cljs.core.next(seq__44038_44413__$1);
var G__44464 = null;
var G__44465 = (0);
var G__44466 = (0);
seq__44038_44358 = G__44463;
chunk__44042_44359 = G__44464;
count__44043_44360 = G__44465;
i__44044_44361 = G__44466;
continue;
}
}
} else {
}
}
break;
}


var G__44467 = seq__43838;
var G__44468 = chunk__43840;
var G__44469 = count__43841;
var G__44470 = (i__43842 + (1));
seq__43838 = G__44467;
chunk__43840 = G__44468;
count__43841 = G__44469;
i__43842 = G__44470;
continue;
} else {
var G__44471 = seq__43838;
var G__44472 = chunk__43840;
var G__44473 = count__43841;
var G__44474 = (i__43842 + (1));
seq__43838 = G__44471;
chunk__43840 = G__44472;
count__43841 = G__44473;
i__43842 = G__44474;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__43838);
if(temp__5753__auto__){
var seq__43838__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43838__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__43838__$1);
var G__44475 = cljs.core.chunk_rest(seq__43838__$1);
var G__44476 = c__4679__auto__;
var G__44477 = cljs.core.count(c__4679__auto__);
var G__44478 = (0);
seq__43838 = G__44475;
chunk__43840 = G__44476;
count__43841 = G__44477;
i__43842 = G__44478;
continue;
} else {
var path = cljs.core.first(seq__43838__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__44142_44479 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__44146_44480 = null;
var count__44147_44481 = (0);
var i__44148_44482 = (0);
while(true){
if((i__44148_44482 < count__44147_44481)){
var node_44483 = chunk__44146_44480.cljs$core$IIndexed$_nth$arity$2(null,i__44148_44482);
if(cljs.core.not(node_44483.shadow$old)){
var path_match_44484 = shadow.cljs.devtools.client.browser.match_paths(node_44483.getAttribute("href"),path);
if(cljs.core.truth_(path_match_44484)){
var new_link_44485 = (function (){var G__44200 = node_44483.cloneNode(true);
G__44200.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_44484),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__44200;
})();
(node_44483.shadow$old = true);

(new_link_44485.onload = ((function (seq__44142_44479,chunk__44146_44480,count__44147_44481,i__44148_44482,seq__43838,chunk__43840,count__43841,i__43842,new_link_44485,path_match_44484,node_44483,path,seq__43838__$1,temp__5753__auto__,map__43837,map__43837__$1,msg,updates,reload_info){
return (function (e){
var seq__44207_44486 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__44209_44487 = null;
var count__44210_44488 = (0);
var i__44211_44489 = (0);
while(true){
if((i__44211_44489 < count__44210_44488)){
var map__44218_44490 = chunk__44209_44487.cljs$core$IIndexed$_nth$arity$2(null,i__44211_44489);
var map__44218_44491__$1 = cljs.core.__destructure_map(map__44218_44490);
var task_44492 = map__44218_44491__$1;
var fn_str_44493 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44218_44491__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44494 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44218_44491__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44495 = goog.getObjectByName(fn_str_44493,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44494)].join(''));

(fn_obj_44495.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44495.cljs$core$IFn$_invoke$arity$2(path,new_link_44485) : fn_obj_44495.call(null,path,new_link_44485));


var G__44498 = seq__44207_44486;
var G__44499 = chunk__44209_44487;
var G__44500 = count__44210_44488;
var G__44501 = (i__44211_44489 + (1));
seq__44207_44486 = G__44498;
chunk__44209_44487 = G__44499;
count__44210_44488 = G__44500;
i__44211_44489 = G__44501;
continue;
} else {
var temp__5753__auto___44502__$1 = cljs.core.seq(seq__44207_44486);
if(temp__5753__auto___44502__$1){
var seq__44207_44503__$1 = temp__5753__auto___44502__$1;
if(cljs.core.chunked_seq_QMARK_(seq__44207_44503__$1)){
var c__4679__auto___44504 = cljs.core.chunk_first(seq__44207_44503__$1);
var G__44505 = cljs.core.chunk_rest(seq__44207_44503__$1);
var G__44506 = c__4679__auto___44504;
var G__44507 = cljs.core.count(c__4679__auto___44504);
var G__44508 = (0);
seq__44207_44486 = G__44505;
chunk__44209_44487 = G__44506;
count__44210_44488 = G__44507;
i__44211_44489 = G__44508;
continue;
} else {
var map__44221_44509 = cljs.core.first(seq__44207_44503__$1);
var map__44221_44510__$1 = cljs.core.__destructure_map(map__44221_44509);
var task_44511 = map__44221_44510__$1;
var fn_str_44512 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44221_44510__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44513 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44221_44510__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44514 = goog.getObjectByName(fn_str_44512,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44513)].join(''));

(fn_obj_44514.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44514.cljs$core$IFn$_invoke$arity$2(path,new_link_44485) : fn_obj_44514.call(null,path,new_link_44485));


var G__44515 = cljs.core.next(seq__44207_44503__$1);
var G__44516 = null;
var G__44517 = (0);
var G__44518 = (0);
seq__44207_44486 = G__44515;
chunk__44209_44487 = G__44516;
count__44210_44488 = G__44517;
i__44211_44489 = G__44518;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_44483);
});})(seq__44142_44479,chunk__44146_44480,count__44147_44481,i__44148_44482,seq__43838,chunk__43840,count__43841,i__43842,new_link_44485,path_match_44484,node_44483,path,seq__43838__$1,temp__5753__auto__,map__43837,map__43837__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_44484], 0));

goog.dom.insertSiblingAfter(new_link_44485,node_44483);


var G__44519 = seq__44142_44479;
var G__44520 = chunk__44146_44480;
var G__44521 = count__44147_44481;
var G__44522 = (i__44148_44482 + (1));
seq__44142_44479 = G__44519;
chunk__44146_44480 = G__44520;
count__44147_44481 = G__44521;
i__44148_44482 = G__44522;
continue;
} else {
var G__44523 = seq__44142_44479;
var G__44524 = chunk__44146_44480;
var G__44525 = count__44147_44481;
var G__44526 = (i__44148_44482 + (1));
seq__44142_44479 = G__44523;
chunk__44146_44480 = G__44524;
count__44147_44481 = G__44525;
i__44148_44482 = G__44526;
continue;
}
} else {
var G__44527 = seq__44142_44479;
var G__44528 = chunk__44146_44480;
var G__44529 = count__44147_44481;
var G__44530 = (i__44148_44482 + (1));
seq__44142_44479 = G__44527;
chunk__44146_44480 = G__44528;
count__44147_44481 = G__44529;
i__44148_44482 = G__44530;
continue;
}
} else {
var temp__5753__auto___44531__$1 = cljs.core.seq(seq__44142_44479);
if(temp__5753__auto___44531__$1){
var seq__44142_44532__$1 = temp__5753__auto___44531__$1;
if(cljs.core.chunked_seq_QMARK_(seq__44142_44532__$1)){
var c__4679__auto___44533 = cljs.core.chunk_first(seq__44142_44532__$1);
var G__44534 = cljs.core.chunk_rest(seq__44142_44532__$1);
var G__44535 = c__4679__auto___44533;
var G__44536 = cljs.core.count(c__4679__auto___44533);
var G__44537 = (0);
seq__44142_44479 = G__44534;
chunk__44146_44480 = G__44535;
count__44147_44481 = G__44536;
i__44148_44482 = G__44537;
continue;
} else {
var node_44540 = cljs.core.first(seq__44142_44532__$1);
if(cljs.core.not(node_44540.shadow$old)){
var path_match_44541 = shadow.cljs.devtools.client.browser.match_paths(node_44540.getAttribute("href"),path);
if(cljs.core.truth_(path_match_44541)){
var new_link_44542 = (function (){var G__44225 = node_44540.cloneNode(true);
G__44225.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_44541),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__44225;
})();
(node_44540.shadow$old = true);

(new_link_44542.onload = ((function (seq__44142_44479,chunk__44146_44480,count__44147_44481,i__44148_44482,seq__43838,chunk__43840,count__43841,i__43842,new_link_44542,path_match_44541,node_44540,seq__44142_44532__$1,temp__5753__auto___44531__$1,path,seq__43838__$1,temp__5753__auto__,map__43837,map__43837__$1,msg,updates,reload_info){
return (function (e){
var seq__44228_44543 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__44230_44544 = null;
var count__44231_44545 = (0);
var i__44232_44546 = (0);
while(true){
if((i__44232_44546 < count__44231_44545)){
var map__44240_44547 = chunk__44230_44544.cljs$core$IIndexed$_nth$arity$2(null,i__44232_44546);
var map__44240_44548__$1 = cljs.core.__destructure_map(map__44240_44547);
var task_44549 = map__44240_44548__$1;
var fn_str_44550 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44240_44548__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44551 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44240_44548__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44552 = goog.getObjectByName(fn_str_44550,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44551)].join(''));

(fn_obj_44552.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44552.cljs$core$IFn$_invoke$arity$2(path,new_link_44542) : fn_obj_44552.call(null,path,new_link_44542));


var G__44553 = seq__44228_44543;
var G__44554 = chunk__44230_44544;
var G__44555 = count__44231_44545;
var G__44556 = (i__44232_44546 + (1));
seq__44228_44543 = G__44553;
chunk__44230_44544 = G__44554;
count__44231_44545 = G__44555;
i__44232_44546 = G__44556;
continue;
} else {
var temp__5753__auto___44557__$2 = cljs.core.seq(seq__44228_44543);
if(temp__5753__auto___44557__$2){
var seq__44228_44558__$1 = temp__5753__auto___44557__$2;
if(cljs.core.chunked_seq_QMARK_(seq__44228_44558__$1)){
var c__4679__auto___44559 = cljs.core.chunk_first(seq__44228_44558__$1);
var G__44560 = cljs.core.chunk_rest(seq__44228_44558__$1);
var G__44561 = c__4679__auto___44559;
var G__44562 = cljs.core.count(c__4679__auto___44559);
var G__44563 = (0);
seq__44228_44543 = G__44560;
chunk__44230_44544 = G__44561;
count__44231_44545 = G__44562;
i__44232_44546 = G__44563;
continue;
} else {
var map__44241_44564 = cljs.core.first(seq__44228_44558__$1);
var map__44241_44565__$1 = cljs.core.__destructure_map(map__44241_44564);
var task_44566 = map__44241_44565__$1;
var fn_str_44567 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44241_44565__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44568 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44241_44565__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44569 = goog.getObjectByName(fn_str_44567,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44568)].join(''));

(fn_obj_44569.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44569.cljs$core$IFn$_invoke$arity$2(path,new_link_44542) : fn_obj_44569.call(null,path,new_link_44542));


var G__44571 = cljs.core.next(seq__44228_44558__$1);
var G__44572 = null;
var G__44573 = (0);
var G__44574 = (0);
seq__44228_44543 = G__44571;
chunk__44230_44544 = G__44572;
count__44231_44545 = G__44573;
i__44232_44546 = G__44574;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_44540);
});})(seq__44142_44479,chunk__44146_44480,count__44147_44481,i__44148_44482,seq__43838,chunk__43840,count__43841,i__43842,new_link_44542,path_match_44541,node_44540,seq__44142_44532__$1,temp__5753__auto___44531__$1,path,seq__43838__$1,temp__5753__auto__,map__43837,map__43837__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_44541], 0));

goog.dom.insertSiblingAfter(new_link_44542,node_44540);


var G__44576 = cljs.core.next(seq__44142_44532__$1);
var G__44577 = null;
var G__44578 = (0);
var G__44579 = (0);
seq__44142_44479 = G__44576;
chunk__44146_44480 = G__44577;
count__44147_44481 = G__44578;
i__44148_44482 = G__44579;
continue;
} else {
var G__44580 = cljs.core.next(seq__44142_44532__$1);
var G__44581 = null;
var G__44582 = (0);
var G__44583 = (0);
seq__44142_44479 = G__44580;
chunk__44146_44480 = G__44581;
count__44147_44481 = G__44582;
i__44148_44482 = G__44583;
continue;
}
} else {
var G__44584 = cljs.core.next(seq__44142_44532__$1);
var G__44585 = null;
var G__44586 = (0);
var G__44587 = (0);
seq__44142_44479 = G__44584;
chunk__44146_44480 = G__44585;
count__44147_44481 = G__44586;
i__44148_44482 = G__44587;
continue;
}
}
} else {
}
}
break;
}


var G__44588 = cljs.core.next(seq__43838__$1);
var G__44589 = null;
var G__44590 = (0);
var G__44591 = (0);
seq__43838 = G__44588;
chunk__43840 = G__44589;
count__43841 = G__44590;
i__43842 = G__44591;
continue;
} else {
var G__44592 = cljs.core.next(seq__43838__$1);
var G__44593 = null;
var G__44594 = (0);
var G__44595 = (0);
seq__43838 = G__44592;
chunk__43840 = G__44593;
count__43841 = G__44594;
i__43842 = G__44595;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__44246){
var map__44250 = p__44246;
var map__44250__$1 = cljs.core.__destructure_map(map__44250);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44250__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__44254){
var map__44255 = p__44254;
var map__44255__$1 = cljs.core.__destructure_map(map__44255);
var _ = map__44255__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44255__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__44256,done,error){
var map__44257 = p__44256;
var map__44257__$1 = cljs.core.__destructure_map(map__44257);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44257__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__44261,done,error){
var map__44262 = p__44261;
var map__44262__$1 = cljs.core.__destructure_map(map__44262);
var msg = map__44262__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44262__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44262__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44262__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__44263){
var map__44264 = p__44263;
var map__44264__$1 = cljs.core.__destructure_map(map__44264);
var src = map__44264__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44264__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__44265 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__44265) : done.call(null,G__44265));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__44269){
var map__44270 = p__44269;
var map__44270__$1 = cljs.core.__destructure_map(map__44270);
var msg__$1 = map__44270__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44270__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e44271){var ex = e44271;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__44272){
var map__44273 = p__44272;
var map__44273__$1 = cljs.core.__destructure_map(map__44273);
var env = map__44273__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44273__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__44280){
var map__44281 = p__44280;
var map__44281__$1 = cljs.core.__destructure_map(map__44281);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44281__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44281__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__44282){
var map__44283 = p__44282;
var map__44283__$1 = cljs.core.__destructure_map(map__44283);
var svc = map__44283__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44283__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
