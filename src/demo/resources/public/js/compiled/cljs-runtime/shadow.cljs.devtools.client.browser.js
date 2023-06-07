goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62418 = arguments.length;
var i__4865__auto___62419 = (0);
while(true){
if((i__4865__auto___62419 < len__4864__auto___62418)){
args__4870__auto__.push((arguments[i__4865__auto___62419]));

var G__62420 = (i__4865__auto___62419 + (1));
i__4865__auto___62419 = G__62420;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq62008){
var G__62009 = cljs.core.first(seq62008);
var seq62008__$1 = cljs.core.next(seq62008);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62009,seq62008__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__62012 = cljs.core.seq(sources);
var chunk__62013 = null;
var count__62014 = (0);
var i__62015 = (0);
while(true){
if((i__62015 < count__62014)){
var map__62025 = chunk__62013.cljs$core$IIndexed$_nth$arity$2(null,i__62015);
var map__62025__$1 = cljs.core.__destructure_map(map__62025);
var src = map__62025__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62025__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62025__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62025__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62025__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e62026){var e_62428 = e62026;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_62428);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_62428.message)].join('')));
}

var G__62429 = seq__62012;
var G__62430 = chunk__62013;
var G__62431 = count__62014;
var G__62432 = (i__62015 + (1));
seq__62012 = G__62429;
chunk__62013 = G__62430;
count__62014 = G__62431;
i__62015 = G__62432;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__62012);
if(temp__5753__auto__){
var seq__62012__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62012__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__62012__$1);
var G__62433 = cljs.core.chunk_rest(seq__62012__$1);
var G__62434 = c__4679__auto__;
var G__62435 = cljs.core.count(c__4679__auto__);
var G__62436 = (0);
seq__62012 = G__62433;
chunk__62013 = G__62434;
count__62014 = G__62435;
i__62015 = G__62436;
continue;
} else {
var map__62027 = cljs.core.first(seq__62012__$1);
var map__62027__$1 = cljs.core.__destructure_map(map__62027);
var src = map__62027__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62027__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62027__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62027__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62027__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e62028){var e_62437 = e62028;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_62437);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_62437.message)].join('')));
}

var G__62438 = cljs.core.next(seq__62012__$1);
var G__62439 = null;
var G__62440 = (0);
var G__62441 = (0);
seq__62012 = G__62438;
chunk__62013 = G__62439;
count__62014 = G__62440;
i__62015 = G__62441;
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
var seq__62033 = cljs.core.seq(js_requires);
var chunk__62034 = null;
var count__62035 = (0);
var i__62036 = (0);
while(true){
if((i__62036 < count__62035)){
var js_ns = chunk__62034.cljs$core$IIndexed$_nth$arity$2(null,i__62036);
var require_str_62442 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_62442);


var G__62443 = seq__62033;
var G__62444 = chunk__62034;
var G__62445 = count__62035;
var G__62446 = (i__62036 + (1));
seq__62033 = G__62443;
chunk__62034 = G__62444;
count__62035 = G__62445;
i__62036 = G__62446;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__62033);
if(temp__5753__auto__){
var seq__62033__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62033__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__62033__$1);
var G__62447 = cljs.core.chunk_rest(seq__62033__$1);
var G__62448 = c__4679__auto__;
var G__62449 = cljs.core.count(c__4679__auto__);
var G__62450 = (0);
seq__62033 = G__62447;
chunk__62034 = G__62448;
count__62035 = G__62449;
i__62036 = G__62450;
continue;
} else {
var js_ns = cljs.core.first(seq__62033__$1);
var require_str_62451 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_62451);


var G__62454 = cljs.core.next(seq__62033__$1);
var G__62455 = null;
var G__62456 = (0);
var G__62457 = (0);
seq__62033 = G__62454;
chunk__62034 = G__62455;
count__62035 = G__62456;
i__62036 = G__62457;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__62039){
var map__62040 = p__62039;
var map__62040__$1 = cljs.core.__destructure_map(map__62040);
var msg = map__62040__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62040__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62040__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__62041(s__62042){
return (new cljs.core.LazySeq(null,(function (){
var s__62042__$1 = s__62042;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__62042__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__62047 = cljs.core.first(xs__6308__auto__);
var map__62047__$1 = cljs.core.__destructure_map(map__62047);
var src = map__62047__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62047__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62047__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__62042__$1,map__62047,map__62047__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__62040,map__62040__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__62041_$_iter__62043(s__62044){
return (new cljs.core.LazySeq(null,((function (s__62042__$1,map__62047,map__62047__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__62040,map__62040__$1,msg,info,reload_info){
return (function (){
var s__62044__$1 = s__62044;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__62044__$1);
if(temp__5753__auto____$1){
var s__62044__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__62044__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__62044__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__62046 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__62045 = (0);
while(true){
if((i__62045 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__62045);
cljs.core.chunk_append(b__62046,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__62458 = (i__62045 + (1));
i__62045 = G__62458;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62046),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__62041_$_iter__62043(cljs.core.chunk_rest(s__62044__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62046),null);
}
} else {
var warning = cljs.core.first(s__62044__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__62041_$_iter__62043(cljs.core.rest(s__62044__$2)));
}
} else {
return null;
}
break;
}
});})(s__62042__$1,map__62047,map__62047__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__62040,map__62040__$1,msg,info,reload_info))
,null,null));
});})(s__62042__$1,map__62047,map__62047__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__62040,map__62040__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__62041(cljs.core.rest(s__62042__$1)));
} else {
var G__62468 = cljs.core.rest(s__62042__$1);
s__62042__$1 = G__62468;
continue;
}
} else {
var G__62469 = cljs.core.rest(s__62042__$1);
s__62042__$1 = G__62469;
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
var seq__62053_62470 = cljs.core.seq(warnings);
var chunk__62054_62471 = null;
var count__62055_62472 = (0);
var i__62056_62473 = (0);
while(true){
if((i__62056_62473 < count__62055_62472)){
var map__62063_62474 = chunk__62054_62471.cljs$core$IIndexed$_nth$arity$2(null,i__62056_62473);
var map__62063_62475__$1 = cljs.core.__destructure_map(map__62063_62474);
var w_62476 = map__62063_62475__$1;
var msg_62477__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62063_62475__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_62478 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62063_62475__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_62479 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62063_62475__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_62480 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62063_62475__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_62480)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_62478),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_62479),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_62477__$1)].join(''));


var G__62481 = seq__62053_62470;
var G__62482 = chunk__62054_62471;
var G__62483 = count__62055_62472;
var G__62484 = (i__62056_62473 + (1));
seq__62053_62470 = G__62481;
chunk__62054_62471 = G__62482;
count__62055_62472 = G__62483;
i__62056_62473 = G__62484;
continue;
} else {
var temp__5753__auto___62485 = cljs.core.seq(seq__62053_62470);
if(temp__5753__auto___62485){
var seq__62053_62486__$1 = temp__5753__auto___62485;
if(cljs.core.chunked_seq_QMARK_(seq__62053_62486__$1)){
var c__4679__auto___62487 = cljs.core.chunk_first(seq__62053_62486__$1);
var G__62488 = cljs.core.chunk_rest(seq__62053_62486__$1);
var G__62489 = c__4679__auto___62487;
var G__62490 = cljs.core.count(c__4679__auto___62487);
var G__62491 = (0);
seq__62053_62470 = G__62488;
chunk__62054_62471 = G__62489;
count__62055_62472 = G__62490;
i__62056_62473 = G__62491;
continue;
} else {
var map__62064_62492 = cljs.core.first(seq__62053_62486__$1);
var map__62064_62493__$1 = cljs.core.__destructure_map(map__62064_62492);
var w_62494 = map__62064_62493__$1;
var msg_62495__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62064_62493__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_62496 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62064_62493__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_62497 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62064_62493__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_62498 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62064_62493__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_62498)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_62496),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_62497),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_62495__$1)].join(''));


var G__62499 = cljs.core.next(seq__62053_62486__$1);
var G__62500 = null;
var G__62501 = (0);
var G__62502 = (0);
seq__62053_62470 = G__62499;
chunk__62054_62471 = G__62500;
count__62055_62472 = G__62501;
i__62056_62473 = G__62502;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__62038_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__62038_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
var seq__62254_62503 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__62258_62504 = null;
var count__62259_62505 = (0);
var i__62260_62506 = (0);
while(true){
if((i__62260_62506 < count__62259_62505)){
var node_62507 = chunk__62258_62504.cljs$core$IIndexed$_nth$arity$2(null,i__62260_62506);
if(cljs.core.not(node_62507.shadow$old)){
var path_match_62508 = shadow.cljs.devtools.client.browser.match_paths(node_62507.getAttribute("href"),path);
if(cljs.core.truth_(path_match_62508)){
var new_link_62509 = (function (){var G__62290 = node_62507.cloneNode(true);
G__62290.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_62508),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__62290;
})();
(node_62507.shadow$old = true);

(new_link_62509.onload = ((function (seq__62254_62503,chunk__62258_62504,count__62259_62505,i__62260_62506,seq__62067,chunk__62069,count__62070,i__62071,new_link_62509,path_match_62508,node_62507,path,map__62066,map__62066__$1,msg,updates,reload_info){
return (function (e){
var seq__62291_62510 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__62293_62511 = null;
var count__62294_62512 = (0);
var i__62295_62513 = (0);
while(true){
if((i__62295_62513 < count__62294_62512)){
var map__62300_62514 = chunk__62293_62511.cljs$core$IIndexed$_nth$arity$2(null,i__62295_62513);
var map__62300_62515__$1 = cljs.core.__destructure_map(map__62300_62514);
var task_62516 = map__62300_62515__$1;
var fn_str_62517 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62300_62515__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_62518 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62300_62515__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_62519 = goog.getObjectByName(fn_str_62517,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_62518)].join(''));

(fn_obj_62519.cljs$core$IFn$_invoke$arity$2 ? fn_obj_62519.cljs$core$IFn$_invoke$arity$2(path,new_link_62509) : fn_obj_62519.call(null,path,new_link_62509));


var G__62520 = seq__62291_62510;
var G__62521 = chunk__62293_62511;
var G__62522 = count__62294_62512;
var G__62523 = (i__62295_62513 + (1));
seq__62291_62510 = G__62520;
chunk__62293_62511 = G__62521;
count__62294_62512 = G__62522;
i__62295_62513 = G__62523;
continue;
} else {
var temp__5753__auto___62524 = cljs.core.seq(seq__62291_62510);
if(temp__5753__auto___62524){
var seq__62291_62525__$1 = temp__5753__auto___62524;
if(cljs.core.chunked_seq_QMARK_(seq__62291_62525__$1)){
var c__4679__auto___62526 = cljs.core.chunk_first(seq__62291_62525__$1);
var G__62527 = cljs.core.chunk_rest(seq__62291_62525__$1);
var G__62528 = c__4679__auto___62526;
var G__62529 = cljs.core.count(c__4679__auto___62526);
var G__62530 = (0);
seq__62291_62510 = G__62527;
chunk__62293_62511 = G__62528;
count__62294_62512 = G__62529;
i__62295_62513 = G__62530;
continue;
} else {
var map__62301_62531 = cljs.core.first(seq__62291_62525__$1);
var map__62301_62532__$1 = cljs.core.__destructure_map(map__62301_62531);
var task_62533 = map__62301_62532__$1;
var fn_str_62534 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62301_62532__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_62535 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62301_62532__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_62536 = goog.getObjectByName(fn_str_62534,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_62535)].join(''));

(fn_obj_62536.cljs$core$IFn$_invoke$arity$2 ? fn_obj_62536.cljs$core$IFn$_invoke$arity$2(path,new_link_62509) : fn_obj_62536.call(null,path,new_link_62509));


var G__62537 = cljs.core.next(seq__62291_62525__$1);
var G__62538 = null;
var G__62539 = (0);
var G__62540 = (0);
seq__62291_62510 = G__62537;
chunk__62293_62511 = G__62538;
count__62294_62512 = G__62539;
i__62295_62513 = G__62540;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_62507);
});})(seq__62254_62503,chunk__62258_62504,count__62259_62505,i__62260_62506,seq__62067,chunk__62069,count__62070,i__62071,new_link_62509,path_match_62508,node_62507,path,map__62066,map__62066__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_62508], 0));

goog.dom.insertSiblingAfter(new_link_62509,node_62507);


var G__62541 = seq__62254_62503;
var G__62542 = chunk__62258_62504;
var G__62543 = count__62259_62505;
var G__62544 = (i__62260_62506 + (1));
seq__62254_62503 = G__62541;
chunk__62258_62504 = G__62542;
count__62259_62505 = G__62543;
i__62260_62506 = G__62544;
continue;
} else {
var G__62545 = seq__62254_62503;
var G__62546 = chunk__62258_62504;
var G__62547 = count__62259_62505;
var G__62548 = (i__62260_62506 + (1));
seq__62254_62503 = G__62545;
chunk__62258_62504 = G__62546;
count__62259_62505 = G__62547;
i__62260_62506 = G__62548;
continue;
}
} else {
var G__62549 = seq__62254_62503;
var G__62550 = chunk__62258_62504;
var G__62551 = count__62259_62505;
var G__62552 = (i__62260_62506 + (1));
seq__62254_62503 = G__62549;
chunk__62258_62504 = G__62550;
count__62259_62505 = G__62551;
i__62260_62506 = G__62552;
continue;
}
} else {
var temp__5753__auto___62553 = cljs.core.seq(seq__62254_62503);
if(temp__5753__auto___62553){
var seq__62254_62554__$1 = temp__5753__auto___62553;
if(cljs.core.chunked_seq_QMARK_(seq__62254_62554__$1)){
var c__4679__auto___62555 = cljs.core.chunk_first(seq__62254_62554__$1);
var G__62556 = cljs.core.chunk_rest(seq__62254_62554__$1);
var G__62557 = c__4679__auto___62555;
var G__62558 = cljs.core.count(c__4679__auto___62555);
var G__62559 = (0);
seq__62254_62503 = G__62556;
chunk__62258_62504 = G__62557;
count__62259_62505 = G__62558;
i__62260_62506 = G__62559;
continue;
} else {
var node_62560 = cljs.core.first(seq__62254_62554__$1);
if(cljs.core.not(node_62560.shadow$old)){
var path_match_62561 = shadow.cljs.devtools.client.browser.match_paths(node_62560.getAttribute("href"),path);
if(cljs.core.truth_(path_match_62561)){
var new_link_62562 = (function (){var G__62304 = node_62560.cloneNode(true);
G__62304.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_62561),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__62304;
})();
(node_62560.shadow$old = true);

(new_link_62562.onload = ((function (seq__62254_62503,chunk__62258_62504,count__62259_62505,i__62260_62506,seq__62067,chunk__62069,count__62070,i__62071,new_link_62562,path_match_62561,node_62560,seq__62254_62554__$1,temp__5753__auto___62553,path,map__62066,map__62066__$1,msg,updates,reload_info){
return (function (e){
var seq__62306_62563 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__62308_62564 = null;
var count__62309_62565 = (0);
var i__62310_62566 = (0);
while(true){
if((i__62310_62566 < count__62309_62565)){
var map__62318_62567 = chunk__62308_62564.cljs$core$IIndexed$_nth$arity$2(null,i__62310_62566);
var map__62318_62568__$1 = cljs.core.__destructure_map(map__62318_62567);
var task_62569 = map__62318_62568__$1;
var fn_str_62570 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62318_62568__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_62571 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62318_62568__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_62572 = goog.getObjectByName(fn_str_62570,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_62571)].join(''));

(fn_obj_62572.cljs$core$IFn$_invoke$arity$2 ? fn_obj_62572.cljs$core$IFn$_invoke$arity$2(path,new_link_62562) : fn_obj_62572.call(null,path,new_link_62562));


var G__62573 = seq__62306_62563;
var G__62574 = chunk__62308_62564;
var G__62575 = count__62309_62565;
var G__62576 = (i__62310_62566 + (1));
seq__62306_62563 = G__62573;
chunk__62308_62564 = G__62574;
count__62309_62565 = G__62575;
i__62310_62566 = G__62576;
continue;
} else {
var temp__5753__auto___62577__$1 = cljs.core.seq(seq__62306_62563);
if(temp__5753__auto___62577__$1){
var seq__62306_62578__$1 = temp__5753__auto___62577__$1;
if(cljs.core.chunked_seq_QMARK_(seq__62306_62578__$1)){
var c__4679__auto___62579 = cljs.core.chunk_first(seq__62306_62578__$1);
var G__62580 = cljs.core.chunk_rest(seq__62306_62578__$1);
var G__62581 = c__4679__auto___62579;
var G__62582 = cljs.core.count(c__4679__auto___62579);
var G__62583 = (0);
seq__62306_62563 = G__62580;
chunk__62308_62564 = G__62581;
count__62309_62565 = G__62582;
i__62310_62566 = G__62583;
continue;
} else {
var map__62319_62584 = cljs.core.first(seq__62306_62578__$1);
var map__62319_62585__$1 = cljs.core.__destructure_map(map__62319_62584);
var task_62586 = map__62319_62585__$1;
var fn_str_62587 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62319_62585__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_62588 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62319_62585__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_62589 = goog.getObjectByName(fn_str_62587,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_62588)].join(''));

(fn_obj_62589.cljs$core$IFn$_invoke$arity$2 ? fn_obj_62589.cljs$core$IFn$_invoke$arity$2(path,new_link_62562) : fn_obj_62589.call(null,path,new_link_62562));


var G__62590 = cljs.core.next(seq__62306_62578__$1);
var G__62591 = null;
var G__62592 = (0);
var G__62593 = (0);
seq__62306_62563 = G__62590;
chunk__62308_62564 = G__62591;
count__62309_62565 = G__62592;
i__62310_62566 = G__62593;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_62560);
});})(seq__62254_62503,chunk__62258_62504,count__62259_62505,i__62260_62506,seq__62067,chunk__62069,count__62070,i__62071,new_link_62562,path_match_62561,node_62560,seq__62254_62554__$1,temp__5753__auto___62553,path,map__62066,map__62066__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_62561], 0));

goog.dom.insertSiblingAfter(new_link_62562,node_62560);


var G__62596 = cljs.core.next(seq__62254_62554__$1);
var G__62597 = null;
var G__62598 = (0);
var G__62599 = (0);
seq__62254_62503 = G__62596;
chunk__62258_62504 = G__62597;
count__62259_62505 = G__62598;
i__62260_62506 = G__62599;
continue;
} else {
var G__62600 = cljs.core.next(seq__62254_62554__$1);
var G__62601 = null;
var G__62602 = (0);
var G__62603 = (0);
seq__62254_62503 = G__62600;
chunk__62258_62504 = G__62601;
count__62259_62505 = G__62602;
i__62260_62506 = G__62603;
continue;
}
} else {
var G__62604 = cljs.core.next(seq__62254_62554__$1);
var G__62605 = null;
var G__62606 = (0);
var G__62607 = (0);
seq__62254_62503 = G__62604;
chunk__62258_62504 = G__62605;
count__62259_62505 = G__62606;
i__62260_62506 = G__62607;
continue;
}
}
} else {
}
}
break;
}


var G__62608 = seq__62067;
var G__62609 = chunk__62069;
var G__62610 = count__62070;
var G__62611 = (i__62071 + (1));
seq__62067 = G__62608;
chunk__62069 = G__62609;
count__62070 = G__62610;
i__62071 = G__62611;
continue;
} else {
var G__62612 = seq__62067;
var G__62613 = chunk__62069;
var G__62614 = count__62070;
var G__62615 = (i__62071 + (1));
seq__62067 = G__62612;
chunk__62069 = G__62613;
count__62070 = G__62614;
i__62071 = G__62615;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__62067);
if(temp__5753__auto__){
var seq__62067__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62067__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__62067__$1);
var G__62616 = cljs.core.chunk_rest(seq__62067__$1);
var G__62617 = c__4679__auto__;
var G__62618 = cljs.core.count(c__4679__auto__);
var G__62619 = (0);
seq__62067 = G__62616;
chunk__62069 = G__62617;
count__62070 = G__62618;
i__62071 = G__62619;
continue;
} else {
var path = cljs.core.first(seq__62067__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__62320_62620 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__62324_62621 = null;
var count__62325_62622 = (0);
var i__62326_62623 = (0);
while(true){
if((i__62326_62623 < count__62325_62622)){
var node_62624 = chunk__62324_62621.cljs$core$IIndexed$_nth$arity$2(null,i__62326_62623);
if(cljs.core.not(node_62624.shadow$old)){
var path_match_62625 = shadow.cljs.devtools.client.browser.match_paths(node_62624.getAttribute("href"),path);
if(cljs.core.truth_(path_match_62625)){
var new_link_62626 = (function (){var G__62373 = node_62624.cloneNode(true);
G__62373.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_62625),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__62373;
})();
(node_62624.shadow$old = true);

(new_link_62626.onload = ((function (seq__62320_62620,chunk__62324_62621,count__62325_62622,i__62326_62623,seq__62067,chunk__62069,count__62070,i__62071,new_link_62626,path_match_62625,node_62624,path,seq__62067__$1,temp__5753__auto__,map__62066,map__62066__$1,msg,updates,reload_info){
return (function (e){
var seq__62374_62627 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__62376_62628 = null;
var count__62377_62629 = (0);
var i__62378_62630 = (0);
while(true){
if((i__62378_62630 < count__62377_62629)){
var map__62382_62631 = chunk__62376_62628.cljs$core$IIndexed$_nth$arity$2(null,i__62378_62630);
var map__62382_62632__$1 = cljs.core.__destructure_map(map__62382_62631);
var task_62633 = map__62382_62632__$1;
var fn_str_62634 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62382_62632__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_62635 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62382_62632__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_62636 = goog.getObjectByName(fn_str_62634,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_62635)].join(''));

(fn_obj_62636.cljs$core$IFn$_invoke$arity$2 ? fn_obj_62636.cljs$core$IFn$_invoke$arity$2(path,new_link_62626) : fn_obj_62636.call(null,path,new_link_62626));


var G__62637 = seq__62374_62627;
var G__62638 = chunk__62376_62628;
var G__62639 = count__62377_62629;
var G__62640 = (i__62378_62630 + (1));
seq__62374_62627 = G__62637;
chunk__62376_62628 = G__62638;
count__62377_62629 = G__62639;
i__62378_62630 = G__62640;
continue;
} else {
var temp__5753__auto___62641__$1 = cljs.core.seq(seq__62374_62627);
if(temp__5753__auto___62641__$1){
var seq__62374_62642__$1 = temp__5753__auto___62641__$1;
if(cljs.core.chunked_seq_QMARK_(seq__62374_62642__$1)){
var c__4679__auto___62643 = cljs.core.chunk_first(seq__62374_62642__$1);
var G__62644 = cljs.core.chunk_rest(seq__62374_62642__$1);
var G__62645 = c__4679__auto___62643;
var G__62646 = cljs.core.count(c__4679__auto___62643);
var G__62647 = (0);
seq__62374_62627 = G__62644;
chunk__62376_62628 = G__62645;
count__62377_62629 = G__62646;
i__62378_62630 = G__62647;
continue;
} else {
var map__62383_62648 = cljs.core.first(seq__62374_62642__$1);
var map__62383_62649__$1 = cljs.core.__destructure_map(map__62383_62648);
var task_62650 = map__62383_62649__$1;
var fn_str_62651 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62383_62649__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_62652 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62383_62649__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_62653 = goog.getObjectByName(fn_str_62651,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_62652)].join(''));

(fn_obj_62653.cljs$core$IFn$_invoke$arity$2 ? fn_obj_62653.cljs$core$IFn$_invoke$arity$2(path,new_link_62626) : fn_obj_62653.call(null,path,new_link_62626));


var G__62654 = cljs.core.next(seq__62374_62642__$1);
var G__62655 = null;
var G__62656 = (0);
var G__62657 = (0);
seq__62374_62627 = G__62654;
chunk__62376_62628 = G__62655;
count__62377_62629 = G__62656;
i__62378_62630 = G__62657;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_62624);
});})(seq__62320_62620,chunk__62324_62621,count__62325_62622,i__62326_62623,seq__62067,chunk__62069,count__62070,i__62071,new_link_62626,path_match_62625,node_62624,path,seq__62067__$1,temp__5753__auto__,map__62066,map__62066__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_62625], 0));

goog.dom.insertSiblingAfter(new_link_62626,node_62624);


var G__62658 = seq__62320_62620;
var G__62659 = chunk__62324_62621;
var G__62660 = count__62325_62622;
var G__62661 = (i__62326_62623 + (1));
seq__62320_62620 = G__62658;
chunk__62324_62621 = G__62659;
count__62325_62622 = G__62660;
i__62326_62623 = G__62661;
continue;
} else {
var G__62662 = seq__62320_62620;
var G__62663 = chunk__62324_62621;
var G__62664 = count__62325_62622;
var G__62665 = (i__62326_62623 + (1));
seq__62320_62620 = G__62662;
chunk__62324_62621 = G__62663;
count__62325_62622 = G__62664;
i__62326_62623 = G__62665;
continue;
}
} else {
var G__62668 = seq__62320_62620;
var G__62669 = chunk__62324_62621;
var G__62670 = count__62325_62622;
var G__62671 = (i__62326_62623 + (1));
seq__62320_62620 = G__62668;
chunk__62324_62621 = G__62669;
count__62325_62622 = G__62670;
i__62326_62623 = G__62671;
continue;
}
} else {
var temp__5753__auto___62672__$1 = cljs.core.seq(seq__62320_62620);
if(temp__5753__auto___62672__$1){
var seq__62320_62673__$1 = temp__5753__auto___62672__$1;
if(cljs.core.chunked_seq_QMARK_(seq__62320_62673__$1)){
var c__4679__auto___62674 = cljs.core.chunk_first(seq__62320_62673__$1);
var G__62675 = cljs.core.chunk_rest(seq__62320_62673__$1);
var G__62676 = c__4679__auto___62674;
var G__62677 = cljs.core.count(c__4679__auto___62674);
var G__62678 = (0);
seq__62320_62620 = G__62675;
chunk__62324_62621 = G__62676;
count__62325_62622 = G__62677;
i__62326_62623 = G__62678;
continue;
} else {
var node_62679 = cljs.core.first(seq__62320_62673__$1);
if(cljs.core.not(node_62679.shadow$old)){
var path_match_62680 = shadow.cljs.devtools.client.browser.match_paths(node_62679.getAttribute("href"),path);
if(cljs.core.truth_(path_match_62680)){
var new_link_62681 = (function (){var G__62384 = node_62679.cloneNode(true);
G__62384.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_62680),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__62384;
})();
(node_62679.shadow$old = true);

(new_link_62681.onload = ((function (seq__62320_62620,chunk__62324_62621,count__62325_62622,i__62326_62623,seq__62067,chunk__62069,count__62070,i__62071,new_link_62681,path_match_62680,node_62679,seq__62320_62673__$1,temp__5753__auto___62672__$1,path,seq__62067__$1,temp__5753__auto__,map__62066,map__62066__$1,msg,updates,reload_info){
return (function (e){
var seq__62385_62682 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__62387_62683 = null;
var count__62388_62684 = (0);
var i__62389_62685 = (0);
while(true){
if((i__62389_62685 < count__62388_62684)){
var map__62393_62686 = chunk__62387_62683.cljs$core$IIndexed$_nth$arity$2(null,i__62389_62685);
var map__62393_62687__$1 = cljs.core.__destructure_map(map__62393_62686);
var task_62688 = map__62393_62687__$1;
var fn_str_62689 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62393_62687__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_62690 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62393_62687__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_62691 = goog.getObjectByName(fn_str_62689,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_62690)].join(''));

(fn_obj_62691.cljs$core$IFn$_invoke$arity$2 ? fn_obj_62691.cljs$core$IFn$_invoke$arity$2(path,new_link_62681) : fn_obj_62691.call(null,path,new_link_62681));


var G__62692 = seq__62385_62682;
var G__62693 = chunk__62387_62683;
var G__62694 = count__62388_62684;
var G__62695 = (i__62389_62685 + (1));
seq__62385_62682 = G__62692;
chunk__62387_62683 = G__62693;
count__62388_62684 = G__62694;
i__62389_62685 = G__62695;
continue;
} else {
var temp__5753__auto___62696__$2 = cljs.core.seq(seq__62385_62682);
if(temp__5753__auto___62696__$2){
var seq__62385_62697__$1 = temp__5753__auto___62696__$2;
if(cljs.core.chunked_seq_QMARK_(seq__62385_62697__$1)){
var c__4679__auto___62698 = cljs.core.chunk_first(seq__62385_62697__$1);
var G__62699 = cljs.core.chunk_rest(seq__62385_62697__$1);
var G__62700 = c__4679__auto___62698;
var G__62701 = cljs.core.count(c__4679__auto___62698);
var G__62702 = (0);
seq__62385_62682 = G__62699;
chunk__62387_62683 = G__62700;
count__62388_62684 = G__62701;
i__62389_62685 = G__62702;
continue;
} else {
var map__62394_62703 = cljs.core.first(seq__62385_62697__$1);
var map__62394_62704__$1 = cljs.core.__destructure_map(map__62394_62703);
var task_62705 = map__62394_62704__$1;
var fn_str_62706 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62394_62704__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_62707 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62394_62704__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_62708 = goog.getObjectByName(fn_str_62706,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_62707)].join(''));

(fn_obj_62708.cljs$core$IFn$_invoke$arity$2 ? fn_obj_62708.cljs$core$IFn$_invoke$arity$2(path,new_link_62681) : fn_obj_62708.call(null,path,new_link_62681));


var G__62709 = cljs.core.next(seq__62385_62697__$1);
var G__62710 = null;
var G__62711 = (0);
var G__62712 = (0);
seq__62385_62682 = G__62709;
chunk__62387_62683 = G__62710;
count__62388_62684 = G__62711;
i__62389_62685 = G__62712;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_62679);
});})(seq__62320_62620,chunk__62324_62621,count__62325_62622,i__62326_62623,seq__62067,chunk__62069,count__62070,i__62071,new_link_62681,path_match_62680,node_62679,seq__62320_62673__$1,temp__5753__auto___62672__$1,path,seq__62067__$1,temp__5753__auto__,map__62066,map__62066__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_62680], 0));

goog.dom.insertSiblingAfter(new_link_62681,node_62679);


var G__62713 = cljs.core.next(seq__62320_62673__$1);
var G__62714 = null;
var G__62715 = (0);
var G__62716 = (0);
seq__62320_62620 = G__62713;
chunk__62324_62621 = G__62714;
count__62325_62622 = G__62715;
i__62326_62623 = G__62716;
continue;
} else {
var G__62717 = cljs.core.next(seq__62320_62673__$1);
var G__62718 = null;
var G__62719 = (0);
var G__62720 = (0);
seq__62320_62620 = G__62717;
chunk__62324_62621 = G__62718;
count__62325_62622 = G__62719;
i__62326_62623 = G__62720;
continue;
}
} else {
var G__62721 = cljs.core.next(seq__62320_62673__$1);
var G__62722 = null;
var G__62723 = (0);
var G__62724 = (0);
seq__62320_62620 = G__62721;
chunk__62324_62621 = G__62722;
count__62325_62622 = G__62723;
i__62326_62623 = G__62724;
continue;
}
}
} else {
}
}
break;
}


var G__62725 = cljs.core.next(seq__62067__$1);
var G__62726 = null;
var G__62727 = (0);
var G__62728 = (0);
seq__62067 = G__62725;
chunk__62069 = G__62726;
count__62070 = G__62727;
i__62071 = G__62728;
continue;
} else {
var G__62729 = cljs.core.next(seq__62067__$1);
var G__62730 = null;
var G__62731 = (0);
var G__62732 = (0);
seq__62067 = G__62729;
chunk__62069 = G__62730;
count__62070 = G__62731;
i__62071 = G__62732;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__62395){
var map__62396 = p__62395;
var map__62396__$1 = cljs.core.__destructure_map(map__62396);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62396__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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
var map__62410 = p__62406;
var map__62410__$1 = cljs.core.__destructure_map(map__62410);
var msg__$1 = map__62410__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62410__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e62411){var ex = e62411;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__62412){
var map__62413 = p__62412;
var map__62413__$1 = cljs.core.__destructure_map(map__62413);
var env = map__62413__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62413__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__62414){
var map__62415 = p__62414;
var map__62415__$1 = cljs.core.__destructure_map(map__62415);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62415__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62415__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__62416){
var map__62417 = p__62416;
var map__62417__$1 = cljs.core.__destructure_map(map__62417);
var svc = map__62417__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62417__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
