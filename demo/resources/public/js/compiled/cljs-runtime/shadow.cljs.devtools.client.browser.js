goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62415 = arguments.length;
var i__4865__auto___62416 = (0);
while(true){
if((i__4865__auto___62416 < len__4864__auto___62415)){
args__4870__auto__.push((arguments[i__4865__auto___62416]));

var G__62417 = (i__4865__auto___62416 + (1));
i__4865__auto___62416 = G__62417;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq62014){
var G__62015 = cljs.core.first(seq62014);
var seq62014__$1 = cljs.core.next(seq62014);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62015,seq62014__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__62021 = cljs.core.seq(sources);
var chunk__62022 = null;
var count__62023 = (0);
var i__62024 = (0);
while(true){
if((i__62024 < count__62023)){
var map__62032 = chunk__62022.cljs$core$IIndexed$_nth$arity$2(null,i__62024);
var map__62032__$1 = cljs.core.__destructure_map(map__62032);
var src = map__62032__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62032__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62032__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62032__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62032__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e62033){var e_62418 = e62033;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_62418);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_62418.message)].join('')));
}

var G__62419 = seq__62021;
var G__62420 = chunk__62022;
var G__62421 = count__62023;
var G__62422 = (i__62024 + (1));
seq__62021 = G__62419;
chunk__62022 = G__62420;
count__62023 = G__62421;
i__62024 = G__62422;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__62021);
if(temp__5753__auto__){
var seq__62021__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62021__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__62021__$1);
var G__62423 = cljs.core.chunk_rest(seq__62021__$1);
var G__62424 = c__4679__auto__;
var G__62425 = cljs.core.count(c__4679__auto__);
var G__62426 = (0);
seq__62021 = G__62423;
chunk__62022 = G__62424;
count__62023 = G__62425;
i__62024 = G__62426;
continue;
} else {
var map__62034 = cljs.core.first(seq__62021__$1);
var map__62034__$1 = cljs.core.__destructure_map(map__62034);
var src = map__62034__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62034__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62034__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62034__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62034__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e62035){var e_62427 = e62035;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_62427);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_62427.message)].join('')));
}

var G__62428 = cljs.core.next(seq__62021__$1);
var G__62429 = null;
var G__62430 = (0);
var G__62431 = (0);
seq__62021 = G__62428;
chunk__62022 = G__62429;
count__62023 = G__62430;
i__62024 = G__62431;
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
var seq__62036 = cljs.core.seq(js_requires);
var chunk__62037 = null;
var count__62038 = (0);
var i__62039 = (0);
while(true){
if((i__62039 < count__62038)){
var js_ns = chunk__62037.cljs$core$IIndexed$_nth$arity$2(null,i__62039);
var require_str_62432 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_62432);


var G__62433 = seq__62036;
var G__62434 = chunk__62037;
var G__62435 = count__62038;
var G__62436 = (i__62039 + (1));
seq__62036 = G__62433;
chunk__62037 = G__62434;
count__62038 = G__62435;
i__62039 = G__62436;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__62036);
if(temp__5753__auto__){
var seq__62036__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62036__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__62036__$1);
var G__62437 = cljs.core.chunk_rest(seq__62036__$1);
var G__62438 = c__4679__auto__;
var G__62439 = cljs.core.count(c__4679__auto__);
var G__62440 = (0);
seq__62036 = G__62437;
chunk__62037 = G__62438;
count__62038 = G__62439;
i__62039 = G__62440;
continue;
} else {
var js_ns = cljs.core.first(seq__62036__$1);
var require_str_62441 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_62441);


var G__62442 = cljs.core.next(seq__62036__$1);
var G__62443 = null;
var G__62444 = (0);
var G__62445 = (0);
seq__62036 = G__62442;
chunk__62037 = G__62443;
count__62038 = G__62444;
i__62039 = G__62445;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__62041){
var map__62042 = p__62041;
var map__62042__$1 = cljs.core.__destructure_map(map__62042);
var msg = map__62042__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62042__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62042__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__62043(s__62044){
return (new cljs.core.LazySeq(null,(function (){
var s__62044__$1 = s__62044;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__62044__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__62049 = cljs.core.first(xs__6308__auto__);
var map__62049__$1 = cljs.core.__destructure_map(map__62049);
var src = map__62049__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62049__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62049__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__62044__$1,map__62049,map__62049__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__62042,map__62042__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__62043_$_iter__62045(s__62046){
return (new cljs.core.LazySeq(null,((function (s__62044__$1,map__62049,map__62049__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__62042,map__62042__$1,msg,info,reload_info){
return (function (){
var s__62046__$1 = s__62046;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__62046__$1);
if(temp__5753__auto____$1){
var s__62046__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__62046__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__62046__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__62048 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__62047 = (0);
while(true){
if((i__62047 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__62047);
cljs.core.chunk_append(b__62048,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__62446 = (i__62047 + (1));
i__62047 = G__62446;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62048),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__62043_$_iter__62045(cljs.core.chunk_rest(s__62046__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62048),null);
}
} else {
var warning = cljs.core.first(s__62046__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__62043_$_iter__62045(cljs.core.rest(s__62046__$2)));
}
} else {
return null;
}
break;
}
});})(s__62044__$1,map__62049,map__62049__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__62042,map__62042__$1,msg,info,reload_info))
,null,null));
});})(s__62044__$1,map__62049,map__62049__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__62042,map__62042__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__62043(cljs.core.rest(s__62044__$1)));
} else {
var G__62447 = cljs.core.rest(s__62044__$1);
s__62044__$1 = G__62447;
continue;
}
} else {
var G__62448 = cljs.core.rest(s__62044__$1);
s__62044__$1 = G__62448;
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
var seq__62050_62449 = cljs.core.seq(warnings);
var chunk__62051_62450 = null;
var count__62052_62451 = (0);
var i__62053_62452 = (0);
while(true){
if((i__62053_62452 < count__62052_62451)){
var map__62056_62453 = chunk__62051_62450.cljs$core$IIndexed$_nth$arity$2(null,i__62053_62452);
var map__62056_62454__$1 = cljs.core.__destructure_map(map__62056_62453);
var w_62455 = map__62056_62454__$1;
var msg_62456__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62056_62454__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_62457 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62056_62454__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_62458 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62056_62454__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_62459 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62056_62454__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_62459)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_62457),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_62458),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_62456__$1)].join(''));


var G__62460 = seq__62050_62449;
var G__62461 = chunk__62051_62450;
var G__62462 = count__62052_62451;
var G__62463 = (i__62053_62452 + (1));
seq__62050_62449 = G__62460;
chunk__62051_62450 = G__62461;
count__62052_62451 = G__62462;
i__62053_62452 = G__62463;
continue;
} else {
var temp__5753__auto___62464 = cljs.core.seq(seq__62050_62449);
if(temp__5753__auto___62464){
var seq__62050_62465__$1 = temp__5753__auto___62464;
if(cljs.core.chunked_seq_QMARK_(seq__62050_62465__$1)){
var c__4679__auto___62466 = cljs.core.chunk_first(seq__62050_62465__$1);
var G__62467 = cljs.core.chunk_rest(seq__62050_62465__$1);
var G__62468 = c__4679__auto___62466;
var G__62469 = cljs.core.count(c__4679__auto___62466);
var G__62470 = (0);
seq__62050_62449 = G__62467;
chunk__62051_62450 = G__62468;
count__62052_62451 = G__62469;
i__62053_62452 = G__62470;
continue;
} else {
var map__62060_62471 = cljs.core.first(seq__62050_62465__$1);
var map__62060_62472__$1 = cljs.core.__destructure_map(map__62060_62471);
var w_62473 = map__62060_62472__$1;
var msg_62474__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62060_62472__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_62475 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62060_62472__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_62476 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62060_62472__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_62477 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62060_62472__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_62477)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_62475),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_62476),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_62474__$1)].join(''));


var G__62478 = cljs.core.next(seq__62050_62465__$1);
var G__62479 = null;
var G__62480 = (0);
var G__62481 = (0);
seq__62050_62449 = G__62478;
chunk__62051_62450 = G__62479;
count__62052_62451 = G__62480;
i__62053_62452 = G__62481;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__62040_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__62040_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__62065){
var map__62066 = p__62065;
var map__62066__$1 = cljs.core.__destructure_map(map__62066);
var msg = map__62066__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62066__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62066__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__62067 = cljs.core.seq(updates);
var chunk__62069 = null;
var count__62070 = (0);
var i__62071 = (0);
while(true){
if((i__62071 < count__62070)){
var path = chunk__62069.cljs$core$IIndexed$_nth$arity$2(null,i__62071);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__62244_62482 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__62248_62483 = null;
var count__62249_62484 = (0);
var i__62250_62485 = (0);
while(true){
if((i__62250_62485 < count__62249_62484)){
var node_62486 = chunk__62248_62483.cljs$core$IIndexed$_nth$arity$2(null,i__62250_62485);
if(cljs.core.not(node_62486.shadow$old)){
var path_match_62487 = shadow.cljs.devtools.client.browser.match_paths(node_62486.getAttribute("href"),path);
if(cljs.core.truth_(path_match_62487)){
var new_link_62488 = (function (){var G__62286 = node_62486.cloneNode(true);
G__62286.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_62487),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__62286;
})();
(node_62486.shadow$old = true);

(new_link_62488.onload = ((function (seq__62244_62482,chunk__62248_62483,count__62249_62484,i__62250_62485,seq__62067,chunk__62069,count__62070,i__62071,new_link_62488,path_match_62487,node_62486,path,map__62066,map__62066__$1,msg,updates,reload_info){
return (function (e){
var seq__62287_62489 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__62289_62490 = null;
var count__62290_62491 = (0);
var i__62291_62492 = (0);
while(true){
if((i__62291_62492 < count__62290_62491)){
var map__62299_62493 = chunk__62289_62490.cljs$core$IIndexed$_nth$arity$2(null,i__62291_62492);
var map__62299_62494__$1 = cljs.core.__destructure_map(map__62299_62493);
var task_62495 = map__62299_62494__$1;
var fn_str_62496 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62299_62494__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_62497 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62299_62494__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_62498 = goog.getObjectByName(fn_str_62496,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_62497)].join(''));

(fn_obj_62498.cljs$core$IFn$_invoke$arity$2 ? fn_obj_62498.cljs$core$IFn$_invoke$arity$2(path,new_link_62488) : fn_obj_62498.call(null,path,new_link_62488));


var G__62499 = seq__62287_62489;
var G__62500 = chunk__62289_62490;
var G__62501 = count__62290_62491;
var G__62502 = (i__62291_62492 + (1));
seq__62287_62489 = G__62499;
chunk__62289_62490 = G__62500;
count__62290_62491 = G__62501;
i__62291_62492 = G__62502;
continue;
} else {
var temp__5753__auto___62503 = cljs.core.seq(seq__62287_62489);
if(temp__5753__auto___62503){
var seq__62287_62504__$1 = temp__5753__auto___62503;
if(cljs.core.chunked_seq_QMARK_(seq__62287_62504__$1)){
var c__4679__auto___62505 = cljs.core.chunk_first(seq__62287_62504__$1);
var G__62506 = cljs.core.chunk_rest(seq__62287_62504__$1);
var G__62507 = c__4679__auto___62505;
var G__62508 = cljs.core.count(c__4679__auto___62505);
var G__62509 = (0);
seq__62287_62489 = G__62506;
chunk__62289_62490 = G__62507;
count__62290_62491 = G__62508;
i__62291_62492 = G__62509;
continue;
} else {
var map__62300_62510 = cljs.core.first(seq__62287_62504__$1);
var map__62300_62511__$1 = cljs.core.__destructure_map(map__62300_62510);
var task_62512 = map__62300_62511__$1;
var fn_str_62513 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62300_62511__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_62514 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62300_62511__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_62515 = goog.getObjectByName(fn_str_62513,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_62514)].join(''));

(fn_obj_62515.cljs$core$IFn$_invoke$arity$2 ? fn_obj_62515.cljs$core$IFn$_invoke$arity$2(path,new_link_62488) : fn_obj_62515.call(null,path,new_link_62488));


var G__62516 = cljs.core.next(seq__62287_62504__$1);
var G__62517 = null;
var G__62518 = (0);
var G__62519 = (0);
seq__62287_62489 = G__62516;
chunk__62289_62490 = G__62517;
count__62290_62491 = G__62518;
i__62291_62492 = G__62519;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_62486);
});})(seq__62244_62482,chunk__62248_62483,count__62249_62484,i__62250_62485,seq__62067,chunk__62069,count__62070,i__62071,new_link_62488,path_match_62487,node_62486,path,map__62066,map__62066__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_62487], 0));

goog.dom.insertSiblingAfter(new_link_62488,node_62486);


var G__62520 = seq__62244_62482;
var G__62521 = chunk__62248_62483;
var G__62522 = count__62249_62484;
var G__62523 = (i__62250_62485 + (1));
seq__62244_62482 = G__62520;
chunk__62248_62483 = G__62521;
count__62249_62484 = G__62522;
i__62250_62485 = G__62523;
continue;
} else {
var G__62524 = seq__62244_62482;
var G__62525 = chunk__62248_62483;
var G__62526 = count__62249_62484;
var G__62527 = (i__62250_62485 + (1));
seq__62244_62482 = G__62524;
chunk__62248_62483 = G__62525;
count__62249_62484 = G__62526;
i__62250_62485 = G__62527;
continue;
}
} else {
var G__62528 = seq__62244_62482;
var G__62529 = chunk__62248_62483;
var G__62530 = count__62249_62484;
var G__62531 = (i__62250_62485 + (1));
seq__62244_62482 = G__62528;
chunk__62248_62483 = G__62529;
count__62249_62484 = G__62530;
i__62250_62485 = G__62531;
continue;
}
} else {
var temp__5753__auto___62532 = cljs.core.seq(seq__62244_62482);
if(temp__5753__auto___62532){
var seq__62244_62533__$1 = temp__5753__auto___62532;
if(cljs.core.chunked_seq_QMARK_(seq__62244_62533__$1)){
var c__4679__auto___62534 = cljs.core.chunk_first(seq__62244_62533__$1);
var G__62535 = cljs.core.chunk_rest(seq__62244_62533__$1);
var G__62536 = c__4679__auto___62534;
var G__62537 = cljs.core.count(c__4679__auto___62534);
var G__62538 = (0);
seq__62244_62482 = G__62535;
chunk__62248_62483 = G__62536;
count__62249_62484 = G__62537;
i__62250_62485 = G__62538;
continue;
} else {
var node_62539 = cljs.core.first(seq__62244_62533__$1);
if(cljs.core.not(node_62539.shadow$old)){
var path_match_62540 = shadow.cljs.devtools.client.browser.match_paths(node_62539.getAttribute("href"),path);
if(cljs.core.truth_(path_match_62540)){
var new_link_62541 = (function (){var G__62301 = node_62539.cloneNode(true);
G__62301.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_62540),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__62301;
})();
(node_62539.shadow$old = true);

(new_link_62541.onload = ((function (seq__62244_62482,chunk__62248_62483,count__62249_62484,i__62250_62485,seq__62067,chunk__62069,count__62070,i__62071,new_link_62541,path_match_62540,node_62539,seq__62244_62533__$1,temp__5753__auto___62532,path,map__62066,map__62066__$1,msg,updates,reload_info){
return (function (e){
var seq__62303_62542 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__62305_62543 = null;
var count__62306_62544 = (0);
var i__62307_62545 = (0);
while(true){
if((i__62307_62545 < count__62306_62544)){
var map__62312_62546 = chunk__62305_62543.cljs$core$IIndexed$_nth$arity$2(null,i__62307_62545);
var map__62312_62547__$1 = cljs.core.__destructure_map(map__62312_62546);
var task_62548 = map__62312_62547__$1;
var fn_str_62549 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62312_62547__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_62550 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62312_62547__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_62551 = goog.getObjectByName(fn_str_62549,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_62550)].join(''));

(fn_obj_62551.cljs$core$IFn$_invoke$arity$2 ? fn_obj_62551.cljs$core$IFn$_invoke$arity$2(path,new_link_62541) : fn_obj_62551.call(null,path,new_link_62541));


var G__62552 = seq__62303_62542;
var G__62553 = chunk__62305_62543;
var G__62554 = count__62306_62544;
var G__62555 = (i__62307_62545 + (1));
seq__62303_62542 = G__62552;
chunk__62305_62543 = G__62553;
count__62306_62544 = G__62554;
i__62307_62545 = G__62555;
continue;
} else {
var temp__5753__auto___62556__$1 = cljs.core.seq(seq__62303_62542);
if(temp__5753__auto___62556__$1){
var seq__62303_62557__$1 = temp__5753__auto___62556__$1;
if(cljs.core.chunked_seq_QMARK_(seq__62303_62557__$1)){
var c__4679__auto___62558 = cljs.core.chunk_first(seq__62303_62557__$1);
var G__62562 = cljs.core.chunk_rest(seq__62303_62557__$1);
var G__62563 = c__4679__auto___62558;
var G__62564 = cljs.core.count(c__4679__auto___62558);
var G__62565 = (0);
seq__62303_62542 = G__62562;
chunk__62305_62543 = G__62563;
count__62306_62544 = G__62564;
i__62307_62545 = G__62565;
continue;
} else {
var map__62315_62566 = cljs.core.first(seq__62303_62557__$1);
var map__62315_62567__$1 = cljs.core.__destructure_map(map__62315_62566);
var task_62568 = map__62315_62567__$1;
var fn_str_62569 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62315_62567__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_62570 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62315_62567__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_62571 = goog.getObjectByName(fn_str_62569,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_62570)].join(''));

(fn_obj_62571.cljs$core$IFn$_invoke$arity$2 ? fn_obj_62571.cljs$core$IFn$_invoke$arity$2(path,new_link_62541) : fn_obj_62571.call(null,path,new_link_62541));


var G__62572 = cljs.core.next(seq__62303_62557__$1);
var G__62573 = null;
var G__62574 = (0);
var G__62575 = (0);
seq__62303_62542 = G__62572;
chunk__62305_62543 = G__62573;
count__62306_62544 = G__62574;
i__62307_62545 = G__62575;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_62539);
});})(seq__62244_62482,chunk__62248_62483,count__62249_62484,i__62250_62485,seq__62067,chunk__62069,count__62070,i__62071,new_link_62541,path_match_62540,node_62539,seq__62244_62533__$1,temp__5753__auto___62532,path,map__62066,map__62066__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_62540], 0));

goog.dom.insertSiblingAfter(new_link_62541,node_62539);


var G__62576 = cljs.core.next(seq__62244_62533__$1);
var G__62577 = null;
var G__62578 = (0);
var G__62579 = (0);
seq__62244_62482 = G__62576;
chunk__62248_62483 = G__62577;
count__62249_62484 = G__62578;
i__62250_62485 = G__62579;
continue;
} else {
var G__62580 = cljs.core.next(seq__62244_62533__$1);
var G__62581 = null;
var G__62582 = (0);
var G__62583 = (0);
seq__62244_62482 = G__62580;
chunk__62248_62483 = G__62581;
count__62249_62484 = G__62582;
i__62250_62485 = G__62583;
continue;
}
} else {
var G__62584 = cljs.core.next(seq__62244_62533__$1);
var G__62585 = null;
var G__62586 = (0);
var G__62587 = (0);
seq__62244_62482 = G__62584;
chunk__62248_62483 = G__62585;
count__62249_62484 = G__62586;
i__62250_62485 = G__62587;
continue;
}
}
} else {
}
}
break;
}


var G__62588 = seq__62067;
var G__62589 = chunk__62069;
var G__62590 = count__62070;
var G__62591 = (i__62071 + (1));
seq__62067 = G__62588;
chunk__62069 = G__62589;
count__62070 = G__62590;
i__62071 = G__62591;
continue;
} else {
var G__62592 = seq__62067;
var G__62593 = chunk__62069;
var G__62594 = count__62070;
var G__62595 = (i__62071 + (1));
seq__62067 = G__62592;
chunk__62069 = G__62593;
count__62070 = G__62594;
i__62071 = G__62595;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__62067);
if(temp__5753__auto__){
var seq__62067__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62067__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__62067__$1);
var G__62596 = cljs.core.chunk_rest(seq__62067__$1);
var G__62597 = c__4679__auto__;
var G__62598 = cljs.core.count(c__4679__auto__);
var G__62599 = (0);
seq__62067 = G__62596;
chunk__62069 = G__62597;
count__62070 = G__62598;
i__62071 = G__62599;
continue;
} else {
var path = cljs.core.first(seq__62067__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__62320_62600 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__62324_62601 = null;
var count__62325_62602 = (0);
var i__62326_62603 = (0);
while(true){
if((i__62326_62603 < count__62325_62602)){
var node_62604 = chunk__62324_62601.cljs$core$IIndexed$_nth$arity$2(null,i__62326_62603);
if(cljs.core.not(node_62604.shadow$old)){
var path_match_62605 = shadow.cljs.devtools.client.browser.match_paths(node_62604.getAttribute("href"),path);
if(cljs.core.truth_(path_match_62605)){
var new_link_62606 = (function (){var G__62368 = node_62604.cloneNode(true);
G__62368.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_62605),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__62368;
})();
(node_62604.shadow$old = true);

(new_link_62606.onload = ((function (seq__62320_62600,chunk__62324_62601,count__62325_62602,i__62326_62603,seq__62067,chunk__62069,count__62070,i__62071,new_link_62606,path_match_62605,node_62604,path,seq__62067__$1,temp__5753__auto__,map__62066,map__62066__$1,msg,updates,reload_info){
return (function (e){
var seq__62369_62607 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__62371_62608 = null;
var count__62372_62609 = (0);
var i__62373_62610 = (0);
while(true){
if((i__62373_62610 < count__62372_62609)){
var map__62377_62611 = chunk__62371_62608.cljs$core$IIndexed$_nth$arity$2(null,i__62373_62610);
var map__62377_62612__$1 = cljs.core.__destructure_map(map__62377_62611);
var task_62613 = map__62377_62612__$1;
var fn_str_62614 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62377_62612__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_62615 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62377_62612__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_62616 = goog.getObjectByName(fn_str_62614,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_62615)].join(''));

(fn_obj_62616.cljs$core$IFn$_invoke$arity$2 ? fn_obj_62616.cljs$core$IFn$_invoke$arity$2(path,new_link_62606) : fn_obj_62616.call(null,path,new_link_62606));


var G__62617 = seq__62369_62607;
var G__62618 = chunk__62371_62608;
var G__62619 = count__62372_62609;
var G__62620 = (i__62373_62610 + (1));
seq__62369_62607 = G__62617;
chunk__62371_62608 = G__62618;
count__62372_62609 = G__62619;
i__62373_62610 = G__62620;
continue;
} else {
var temp__5753__auto___62621__$1 = cljs.core.seq(seq__62369_62607);
if(temp__5753__auto___62621__$1){
var seq__62369_62622__$1 = temp__5753__auto___62621__$1;
if(cljs.core.chunked_seq_QMARK_(seq__62369_62622__$1)){
var c__4679__auto___62623 = cljs.core.chunk_first(seq__62369_62622__$1);
var G__62624 = cljs.core.chunk_rest(seq__62369_62622__$1);
var G__62625 = c__4679__auto___62623;
var G__62626 = cljs.core.count(c__4679__auto___62623);
var G__62627 = (0);
seq__62369_62607 = G__62624;
chunk__62371_62608 = G__62625;
count__62372_62609 = G__62626;
i__62373_62610 = G__62627;
continue;
} else {
var map__62379_62628 = cljs.core.first(seq__62369_62622__$1);
var map__62379_62629__$1 = cljs.core.__destructure_map(map__62379_62628);
var task_62630 = map__62379_62629__$1;
var fn_str_62631 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62379_62629__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_62632 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62379_62629__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_62633 = goog.getObjectByName(fn_str_62631,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_62632)].join(''));

(fn_obj_62633.cljs$core$IFn$_invoke$arity$2 ? fn_obj_62633.cljs$core$IFn$_invoke$arity$2(path,new_link_62606) : fn_obj_62633.call(null,path,new_link_62606));


var G__62634 = cljs.core.next(seq__62369_62622__$1);
var G__62635 = null;
var G__62636 = (0);
var G__62637 = (0);
seq__62369_62607 = G__62634;
chunk__62371_62608 = G__62635;
count__62372_62609 = G__62636;
i__62373_62610 = G__62637;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_62604);
});})(seq__62320_62600,chunk__62324_62601,count__62325_62602,i__62326_62603,seq__62067,chunk__62069,count__62070,i__62071,new_link_62606,path_match_62605,node_62604,path,seq__62067__$1,temp__5753__auto__,map__62066,map__62066__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_62605], 0));

goog.dom.insertSiblingAfter(new_link_62606,node_62604);


var G__62639 = seq__62320_62600;
var G__62640 = chunk__62324_62601;
var G__62641 = count__62325_62602;
var G__62642 = (i__62326_62603 + (1));
seq__62320_62600 = G__62639;
chunk__62324_62601 = G__62640;
count__62325_62602 = G__62641;
i__62326_62603 = G__62642;
continue;
} else {
var G__62643 = seq__62320_62600;
var G__62644 = chunk__62324_62601;
var G__62645 = count__62325_62602;
var G__62646 = (i__62326_62603 + (1));
seq__62320_62600 = G__62643;
chunk__62324_62601 = G__62644;
count__62325_62602 = G__62645;
i__62326_62603 = G__62646;
continue;
}
} else {
var G__62647 = seq__62320_62600;
var G__62648 = chunk__62324_62601;
var G__62649 = count__62325_62602;
var G__62650 = (i__62326_62603 + (1));
seq__62320_62600 = G__62647;
chunk__62324_62601 = G__62648;
count__62325_62602 = G__62649;
i__62326_62603 = G__62650;
continue;
}
} else {
var temp__5753__auto___62653__$1 = cljs.core.seq(seq__62320_62600);
if(temp__5753__auto___62653__$1){
var seq__62320_62654__$1 = temp__5753__auto___62653__$1;
if(cljs.core.chunked_seq_QMARK_(seq__62320_62654__$1)){
var c__4679__auto___62655 = cljs.core.chunk_first(seq__62320_62654__$1);
var G__62656 = cljs.core.chunk_rest(seq__62320_62654__$1);
var G__62657 = c__4679__auto___62655;
var G__62658 = cljs.core.count(c__4679__auto___62655);
var G__62659 = (0);
seq__62320_62600 = G__62656;
chunk__62324_62601 = G__62657;
count__62325_62602 = G__62658;
i__62326_62603 = G__62659;
continue;
} else {
var node_62660 = cljs.core.first(seq__62320_62654__$1);
if(cljs.core.not(node_62660.shadow$old)){
var path_match_62661 = shadow.cljs.devtools.client.browser.match_paths(node_62660.getAttribute("href"),path);
if(cljs.core.truth_(path_match_62661)){
var new_link_62662 = (function (){var G__62380 = node_62660.cloneNode(true);
G__62380.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_62661),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__62380;
})();
(node_62660.shadow$old = true);

(new_link_62662.onload = ((function (seq__62320_62600,chunk__62324_62601,count__62325_62602,i__62326_62603,seq__62067,chunk__62069,count__62070,i__62071,new_link_62662,path_match_62661,node_62660,seq__62320_62654__$1,temp__5753__auto___62653__$1,path,seq__62067__$1,temp__5753__auto__,map__62066,map__62066__$1,msg,updates,reload_info){
return (function (e){
var seq__62381_62663 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__62383_62664 = null;
var count__62384_62665 = (0);
var i__62385_62666 = (0);
while(true){
if((i__62385_62666 < count__62384_62665)){
var map__62389_62668 = chunk__62383_62664.cljs$core$IIndexed$_nth$arity$2(null,i__62385_62666);
var map__62389_62669__$1 = cljs.core.__destructure_map(map__62389_62668);
var task_62670 = map__62389_62669__$1;
var fn_str_62671 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62389_62669__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_62672 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62389_62669__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_62680 = goog.getObjectByName(fn_str_62671,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_62672)].join(''));

(fn_obj_62680.cljs$core$IFn$_invoke$arity$2 ? fn_obj_62680.cljs$core$IFn$_invoke$arity$2(path,new_link_62662) : fn_obj_62680.call(null,path,new_link_62662));


var G__62682 = seq__62381_62663;
var G__62683 = chunk__62383_62664;
var G__62685 = count__62384_62665;
var G__62686 = (i__62385_62666 + (1));
seq__62381_62663 = G__62682;
chunk__62383_62664 = G__62683;
count__62384_62665 = G__62685;
i__62385_62666 = G__62686;
continue;
} else {
var temp__5753__auto___62687__$2 = cljs.core.seq(seq__62381_62663);
if(temp__5753__auto___62687__$2){
var seq__62381_62688__$1 = temp__5753__auto___62687__$2;
if(cljs.core.chunked_seq_QMARK_(seq__62381_62688__$1)){
var c__4679__auto___62689 = cljs.core.chunk_first(seq__62381_62688__$1);
var G__62690 = cljs.core.chunk_rest(seq__62381_62688__$1);
var G__62691 = c__4679__auto___62689;
var G__62692 = cljs.core.count(c__4679__auto___62689);
var G__62693 = (0);
seq__62381_62663 = G__62690;
chunk__62383_62664 = G__62691;
count__62384_62665 = G__62692;
i__62385_62666 = G__62693;
continue;
} else {
var map__62391_62694 = cljs.core.first(seq__62381_62688__$1);
var map__62391_62695__$1 = cljs.core.__destructure_map(map__62391_62694);
var task_62696 = map__62391_62695__$1;
var fn_str_62697 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62391_62695__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_62698 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62391_62695__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_62699 = goog.getObjectByName(fn_str_62697,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_62698)].join(''));

(fn_obj_62699.cljs$core$IFn$_invoke$arity$2 ? fn_obj_62699.cljs$core$IFn$_invoke$arity$2(path,new_link_62662) : fn_obj_62699.call(null,path,new_link_62662));


var G__62700 = cljs.core.next(seq__62381_62688__$1);
var G__62701 = null;
var G__62702 = (0);
var G__62703 = (0);
seq__62381_62663 = G__62700;
chunk__62383_62664 = G__62701;
count__62384_62665 = G__62702;
i__62385_62666 = G__62703;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_62660);
});})(seq__62320_62600,chunk__62324_62601,count__62325_62602,i__62326_62603,seq__62067,chunk__62069,count__62070,i__62071,new_link_62662,path_match_62661,node_62660,seq__62320_62654__$1,temp__5753__auto___62653__$1,path,seq__62067__$1,temp__5753__auto__,map__62066,map__62066__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_62661], 0));

goog.dom.insertSiblingAfter(new_link_62662,node_62660);


var G__62704 = cljs.core.next(seq__62320_62654__$1);
var G__62705 = null;
var G__62706 = (0);
var G__62707 = (0);
seq__62320_62600 = G__62704;
chunk__62324_62601 = G__62705;
count__62325_62602 = G__62706;
i__62326_62603 = G__62707;
continue;
} else {
var G__62708 = cljs.core.next(seq__62320_62654__$1);
var G__62709 = null;
var G__62710 = (0);
var G__62711 = (0);
seq__62320_62600 = G__62708;
chunk__62324_62601 = G__62709;
count__62325_62602 = G__62710;
i__62326_62603 = G__62711;
continue;
}
} else {
var G__62712 = cljs.core.next(seq__62320_62654__$1);
var G__62713 = null;
var G__62714 = (0);
var G__62715 = (0);
seq__62320_62600 = G__62712;
chunk__62324_62601 = G__62713;
count__62325_62602 = G__62714;
i__62326_62603 = G__62715;
continue;
}
}
} else {
}
}
break;
}


var G__62716 = cljs.core.next(seq__62067__$1);
var G__62717 = null;
var G__62718 = (0);
var G__62719 = (0);
seq__62067 = G__62716;
chunk__62069 = G__62717;
count__62070 = G__62718;
i__62071 = G__62719;
continue;
} else {
var G__62720 = cljs.core.next(seq__62067__$1);
var G__62721 = null;
var G__62722 = (0);
var G__62723 = (0);
seq__62067 = G__62720;
chunk__62069 = G__62721;
count__62070 = G__62722;
i__62071 = G__62723;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__62393){
var map__62394 = p__62393;
var map__62394__$1 = cljs.core.__destructure_map(map__62394);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62394__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__62397){
var map__62398 = p__62397;
var map__62398__$1 = cljs.core.__destructure_map(map__62398);
var _ = map__62398__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62398__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__62399,done,error){
var map__62400 = p__62399;
var map__62400__$1 = cljs.core.__destructure_map(map__62400);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62400__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__62401,done,error){
var map__62402 = p__62401;
var map__62402__$1 = cljs.core.__destructure_map(map__62402);
var msg = map__62402__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62402__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62402__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62402__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__62403){
var map__62404 = p__62403;
var map__62404__$1 = cljs.core.__destructure_map(map__62404);
var src = map__62404__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62404__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__62405 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__62405) : done.call(null,G__62405));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__62406){
var map__62407 = p__62406;
var map__62407__$1 = cljs.core.__destructure_map(map__62407);
var msg__$1 = map__62407__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62407__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e62408){var ex = e62408;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__62409){
var map__62410 = p__62409;
var map__62410__$1 = cljs.core.__destructure_map(map__62410);
var env = map__62410__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62410__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__62411){
var map__62412 = p__62411;
var map__62412__$1 = cljs.core.__destructure_map(map__62412);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62412__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62412__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__62413){
var map__62414 = p__62413;
var map__62414__$1 = cljs.core.__destructure_map(map__62414);
var svc = map__62414__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62414__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
