goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62472 = arguments.length;
var i__4865__auto___62473 = (0);
while(true){
if((i__4865__auto___62473 < len__4864__auto___62472)){
args__4870__auto__.push((arguments[i__4865__auto___62473]));

var G__62474 = (i__4865__auto___62473 + (1));
i__4865__auto___62473 = G__62474;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq62020){
var G__62021 = cljs.core.first(seq62020);
var seq62020__$1 = cljs.core.next(seq62020);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62021,seq62020__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__62026 = cljs.core.seq(sources);
var chunk__62027 = null;
var count__62028 = (0);
var i__62029 = (0);
while(true){
if((i__62029 < count__62028)){
var map__62039 = chunk__62027.cljs$core$IIndexed$_nth$arity$2(null,i__62029);
var map__62039__$1 = cljs.core.__destructure_map(map__62039);
var src = map__62039__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62039__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62039__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62039__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62039__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e62040){var e_62475 = e62040;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_62475);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_62475.message)].join('')));
}

var G__62476 = seq__62026;
var G__62477 = chunk__62027;
var G__62478 = count__62028;
var G__62479 = (i__62029 + (1));
seq__62026 = G__62476;
chunk__62027 = G__62477;
count__62028 = G__62478;
i__62029 = G__62479;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__62026);
if(temp__5753__auto__){
var seq__62026__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62026__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__62026__$1);
var G__62480 = cljs.core.chunk_rest(seq__62026__$1);
var G__62481 = c__4679__auto__;
var G__62482 = cljs.core.count(c__4679__auto__);
var G__62483 = (0);
seq__62026 = G__62480;
chunk__62027 = G__62481;
count__62028 = G__62482;
i__62029 = G__62483;
continue;
} else {
var map__62041 = cljs.core.first(seq__62026__$1);
var map__62041__$1 = cljs.core.__destructure_map(map__62041);
var src = map__62041__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62041__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62041__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62041__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62041__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e62042){var e_62485 = e62042;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_62485);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_62485.message)].join('')));
}

var G__62486 = cljs.core.next(seq__62026__$1);
var G__62487 = null;
var G__62488 = (0);
var G__62489 = (0);
seq__62026 = G__62486;
chunk__62027 = G__62487;
count__62028 = G__62488;
i__62029 = G__62489;
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
var seq__62043 = cljs.core.seq(js_requires);
var chunk__62044 = null;
var count__62045 = (0);
var i__62046 = (0);
while(true){
if((i__62046 < count__62045)){
var js_ns = chunk__62044.cljs$core$IIndexed$_nth$arity$2(null,i__62046);
var require_str_62490 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_62490);


var G__62491 = seq__62043;
var G__62492 = chunk__62044;
var G__62493 = count__62045;
var G__62494 = (i__62046 + (1));
seq__62043 = G__62491;
chunk__62044 = G__62492;
count__62045 = G__62493;
i__62046 = G__62494;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__62043);
if(temp__5753__auto__){
var seq__62043__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62043__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__62043__$1);
var G__62495 = cljs.core.chunk_rest(seq__62043__$1);
var G__62496 = c__4679__auto__;
var G__62497 = cljs.core.count(c__4679__auto__);
var G__62498 = (0);
seq__62043 = G__62495;
chunk__62044 = G__62496;
count__62045 = G__62497;
i__62046 = G__62498;
continue;
} else {
var js_ns = cljs.core.first(seq__62043__$1);
var require_str_62499 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_62499);


var G__62500 = cljs.core.next(seq__62043__$1);
var G__62501 = null;
var G__62502 = (0);
var G__62503 = (0);
seq__62043 = G__62500;
chunk__62044 = G__62501;
count__62045 = G__62502;
i__62046 = G__62503;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__62048){
var map__62049 = p__62048;
var map__62049__$1 = cljs.core.__destructure_map(map__62049);
var msg = map__62049__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62049__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62049__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__62050(s__62051){
return (new cljs.core.LazySeq(null,(function (){
var s__62051__$1 = s__62051;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__62051__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__62056 = cljs.core.first(xs__6308__auto__);
var map__62056__$1 = cljs.core.__destructure_map(map__62056);
var src = map__62056__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62056__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62056__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__62051__$1,map__62056,map__62056__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__62049,map__62049__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__62050_$_iter__62052(s__62053){
return (new cljs.core.LazySeq(null,((function (s__62051__$1,map__62056,map__62056__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__62049,map__62049__$1,msg,info,reload_info){
return (function (){
var s__62053__$1 = s__62053;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__62053__$1);
if(temp__5753__auto____$1){
var s__62053__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__62053__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__62053__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__62055 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__62054 = (0);
while(true){
if((i__62054 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__62054);
cljs.core.chunk_append(b__62055,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__62506 = (i__62054 + (1));
i__62054 = G__62506;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62055),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__62050_$_iter__62052(cljs.core.chunk_rest(s__62053__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62055),null);
}
} else {
var warning = cljs.core.first(s__62053__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__62050_$_iter__62052(cljs.core.rest(s__62053__$2)));
}
} else {
return null;
}
break;
}
});})(s__62051__$1,map__62056,map__62056__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__62049,map__62049__$1,msg,info,reload_info))
,null,null));
});})(s__62051__$1,map__62056,map__62056__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__62049,map__62049__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__62050(cljs.core.rest(s__62051__$1)));
} else {
var G__62507 = cljs.core.rest(s__62051__$1);
s__62051__$1 = G__62507;
continue;
}
} else {
var G__62508 = cljs.core.rest(s__62051__$1);
s__62051__$1 = G__62508;
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
var seq__62061_62509 = cljs.core.seq(warnings);
var chunk__62062_62510 = null;
var count__62063_62511 = (0);
var i__62064_62512 = (0);
while(true){
if((i__62064_62512 < count__62063_62511)){
var map__62069_62513 = chunk__62062_62510.cljs$core$IIndexed$_nth$arity$2(null,i__62064_62512);
var map__62069_62514__$1 = cljs.core.__destructure_map(map__62069_62513);
var w_62515 = map__62069_62514__$1;
var msg_62516__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62069_62514__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_62517 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62069_62514__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_62518 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62069_62514__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_62519 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62069_62514__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_62519)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_62517),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_62518),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_62516__$1)].join(''));


var G__62520 = seq__62061_62509;
var G__62521 = chunk__62062_62510;
var G__62522 = count__62063_62511;
var G__62523 = (i__62064_62512 + (1));
seq__62061_62509 = G__62520;
chunk__62062_62510 = G__62521;
count__62063_62511 = G__62522;
i__62064_62512 = G__62523;
continue;
} else {
var temp__5753__auto___62524 = cljs.core.seq(seq__62061_62509);
if(temp__5753__auto___62524){
var seq__62061_62525__$1 = temp__5753__auto___62524;
if(cljs.core.chunked_seq_QMARK_(seq__62061_62525__$1)){
var c__4679__auto___62526 = cljs.core.chunk_first(seq__62061_62525__$1);
var G__62527 = cljs.core.chunk_rest(seq__62061_62525__$1);
var G__62528 = c__4679__auto___62526;
var G__62529 = cljs.core.count(c__4679__auto___62526);
var G__62530 = (0);
seq__62061_62509 = G__62527;
chunk__62062_62510 = G__62528;
count__62063_62511 = G__62529;
i__62064_62512 = G__62530;
continue;
} else {
var map__62074_62531 = cljs.core.first(seq__62061_62525__$1);
var map__62074_62532__$1 = cljs.core.__destructure_map(map__62074_62531);
var w_62533 = map__62074_62532__$1;
var msg_62534__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62074_62532__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_62535 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62074_62532__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_62536 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62074_62532__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_62537 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62074_62532__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_62537)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_62535),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_62536),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_62534__$1)].join(''));


var G__62538 = cljs.core.next(seq__62061_62525__$1);
var G__62539 = null;
var G__62540 = (0);
var G__62541 = (0);
seq__62061_62509 = G__62538;
chunk__62062_62510 = G__62539;
count__62063_62511 = G__62540;
i__62064_62512 = G__62541;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__62047_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__62047_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__62079){
var map__62080 = p__62079;
var map__62080__$1 = cljs.core.__destructure_map(map__62080);
var msg = map__62080__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62080__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62080__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__62083 = cljs.core.seq(updates);
var chunk__62085 = null;
var count__62086 = (0);
var i__62087 = (0);
while(true){
if((i__62087 < count__62086)){
var path = chunk__62085.cljs$core$IIndexed$_nth$arity$2(null,i__62087);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__62258_62544 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__62262_62545 = null;
var count__62263_62546 = (0);
var i__62264_62547 = (0);
while(true){
if((i__62264_62547 < count__62263_62546)){
var node_62548 = chunk__62262_62545.cljs$core$IIndexed$_nth$arity$2(null,i__62264_62547);
if(cljs.core.not(node_62548.shadow$old)){
var path_match_62549 = shadow.cljs.devtools.client.browser.match_paths(node_62548.getAttribute("href"),path);
if(cljs.core.truth_(path_match_62549)){
var new_link_62550 = (function (){var G__62314 = node_62548.cloneNode(true);
G__62314.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_62549),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__62314;
})();
(node_62548.shadow$old = true);

(new_link_62550.onload = ((function (seq__62258_62544,chunk__62262_62545,count__62263_62546,i__62264_62547,seq__62083,chunk__62085,count__62086,i__62087,new_link_62550,path_match_62549,node_62548,path,map__62080,map__62080__$1,msg,updates,reload_info){
return (function (e){
var seq__62315_62551 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__62317_62552 = null;
var count__62318_62553 = (0);
var i__62319_62554 = (0);
while(true){
if((i__62319_62554 < count__62318_62553)){
var map__62324_62555 = chunk__62317_62552.cljs$core$IIndexed$_nth$arity$2(null,i__62319_62554);
var map__62324_62556__$1 = cljs.core.__destructure_map(map__62324_62555);
var task_62557 = map__62324_62556__$1;
var fn_str_62558 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62324_62556__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_62559 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62324_62556__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_62560 = goog.getObjectByName(fn_str_62558,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_62559)].join(''));

(fn_obj_62560.cljs$core$IFn$_invoke$arity$2 ? fn_obj_62560.cljs$core$IFn$_invoke$arity$2(path,new_link_62550) : fn_obj_62560.call(null,path,new_link_62550));


var G__62561 = seq__62315_62551;
var G__62562 = chunk__62317_62552;
var G__62563 = count__62318_62553;
var G__62564 = (i__62319_62554 + (1));
seq__62315_62551 = G__62561;
chunk__62317_62552 = G__62562;
count__62318_62553 = G__62563;
i__62319_62554 = G__62564;
continue;
} else {
var temp__5753__auto___62565 = cljs.core.seq(seq__62315_62551);
if(temp__5753__auto___62565){
var seq__62315_62566__$1 = temp__5753__auto___62565;
if(cljs.core.chunked_seq_QMARK_(seq__62315_62566__$1)){
var c__4679__auto___62567 = cljs.core.chunk_first(seq__62315_62566__$1);
var G__62568 = cljs.core.chunk_rest(seq__62315_62566__$1);
var G__62569 = c__4679__auto___62567;
var G__62570 = cljs.core.count(c__4679__auto___62567);
var G__62571 = (0);
seq__62315_62551 = G__62568;
chunk__62317_62552 = G__62569;
count__62318_62553 = G__62570;
i__62319_62554 = G__62571;
continue;
} else {
var map__62325_62572 = cljs.core.first(seq__62315_62566__$1);
var map__62325_62573__$1 = cljs.core.__destructure_map(map__62325_62572);
var task_62574 = map__62325_62573__$1;
var fn_str_62575 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62325_62573__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_62576 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62325_62573__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_62577 = goog.getObjectByName(fn_str_62575,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_62576)].join(''));

(fn_obj_62577.cljs$core$IFn$_invoke$arity$2 ? fn_obj_62577.cljs$core$IFn$_invoke$arity$2(path,new_link_62550) : fn_obj_62577.call(null,path,new_link_62550));


var G__62578 = cljs.core.next(seq__62315_62566__$1);
var G__62579 = null;
var G__62580 = (0);
var G__62581 = (0);
seq__62315_62551 = G__62578;
chunk__62317_62552 = G__62579;
count__62318_62553 = G__62580;
i__62319_62554 = G__62581;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_62548);
});})(seq__62258_62544,chunk__62262_62545,count__62263_62546,i__62264_62547,seq__62083,chunk__62085,count__62086,i__62087,new_link_62550,path_match_62549,node_62548,path,map__62080,map__62080__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_62549], 0));

goog.dom.insertSiblingAfter(new_link_62550,node_62548);


var G__62582 = seq__62258_62544;
var G__62583 = chunk__62262_62545;
var G__62584 = count__62263_62546;
var G__62585 = (i__62264_62547 + (1));
seq__62258_62544 = G__62582;
chunk__62262_62545 = G__62583;
count__62263_62546 = G__62584;
i__62264_62547 = G__62585;
continue;
} else {
var G__62586 = seq__62258_62544;
var G__62587 = chunk__62262_62545;
var G__62588 = count__62263_62546;
var G__62589 = (i__62264_62547 + (1));
seq__62258_62544 = G__62586;
chunk__62262_62545 = G__62587;
count__62263_62546 = G__62588;
i__62264_62547 = G__62589;
continue;
}
} else {
var G__62590 = seq__62258_62544;
var G__62591 = chunk__62262_62545;
var G__62592 = count__62263_62546;
var G__62593 = (i__62264_62547 + (1));
seq__62258_62544 = G__62590;
chunk__62262_62545 = G__62591;
count__62263_62546 = G__62592;
i__62264_62547 = G__62593;
continue;
}
} else {
var temp__5753__auto___62594 = cljs.core.seq(seq__62258_62544);
if(temp__5753__auto___62594){
var seq__62258_62595__$1 = temp__5753__auto___62594;
if(cljs.core.chunked_seq_QMARK_(seq__62258_62595__$1)){
var c__4679__auto___62596 = cljs.core.chunk_first(seq__62258_62595__$1);
var G__62597 = cljs.core.chunk_rest(seq__62258_62595__$1);
var G__62598 = c__4679__auto___62596;
var G__62599 = cljs.core.count(c__4679__auto___62596);
var G__62600 = (0);
seq__62258_62544 = G__62597;
chunk__62262_62545 = G__62598;
count__62263_62546 = G__62599;
i__62264_62547 = G__62600;
continue;
} else {
var node_62601 = cljs.core.first(seq__62258_62595__$1);
if(cljs.core.not(node_62601.shadow$old)){
var path_match_62602 = shadow.cljs.devtools.client.browser.match_paths(node_62601.getAttribute("href"),path);
if(cljs.core.truth_(path_match_62602)){
var new_link_62603 = (function (){var G__62330 = node_62601.cloneNode(true);
G__62330.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_62602),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__62330;
})();
(node_62601.shadow$old = true);

(new_link_62603.onload = ((function (seq__62258_62544,chunk__62262_62545,count__62263_62546,i__62264_62547,seq__62083,chunk__62085,count__62086,i__62087,new_link_62603,path_match_62602,node_62601,seq__62258_62595__$1,temp__5753__auto___62594,path,map__62080,map__62080__$1,msg,updates,reload_info){
return (function (e){
var seq__62331_62605 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__62333_62606 = null;
var count__62334_62607 = (0);
var i__62335_62608 = (0);
while(true){
if((i__62335_62608 < count__62334_62607)){
var map__62339_62609 = chunk__62333_62606.cljs$core$IIndexed$_nth$arity$2(null,i__62335_62608);
var map__62339_62610__$1 = cljs.core.__destructure_map(map__62339_62609);
var task_62611 = map__62339_62610__$1;
var fn_str_62612 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62339_62610__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_62613 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62339_62610__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_62614 = goog.getObjectByName(fn_str_62612,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_62613)].join(''));

(fn_obj_62614.cljs$core$IFn$_invoke$arity$2 ? fn_obj_62614.cljs$core$IFn$_invoke$arity$2(path,new_link_62603) : fn_obj_62614.call(null,path,new_link_62603));


var G__62615 = seq__62331_62605;
var G__62616 = chunk__62333_62606;
var G__62617 = count__62334_62607;
var G__62618 = (i__62335_62608 + (1));
seq__62331_62605 = G__62615;
chunk__62333_62606 = G__62616;
count__62334_62607 = G__62617;
i__62335_62608 = G__62618;
continue;
} else {
var temp__5753__auto___62619__$1 = cljs.core.seq(seq__62331_62605);
if(temp__5753__auto___62619__$1){
var seq__62331_62620__$1 = temp__5753__auto___62619__$1;
if(cljs.core.chunked_seq_QMARK_(seq__62331_62620__$1)){
var c__4679__auto___62621 = cljs.core.chunk_first(seq__62331_62620__$1);
var G__62622 = cljs.core.chunk_rest(seq__62331_62620__$1);
var G__62623 = c__4679__auto___62621;
var G__62624 = cljs.core.count(c__4679__auto___62621);
var G__62625 = (0);
seq__62331_62605 = G__62622;
chunk__62333_62606 = G__62623;
count__62334_62607 = G__62624;
i__62335_62608 = G__62625;
continue;
} else {
var map__62340_62626 = cljs.core.first(seq__62331_62620__$1);
var map__62340_62627__$1 = cljs.core.__destructure_map(map__62340_62626);
var task_62628 = map__62340_62627__$1;
var fn_str_62629 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62340_62627__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_62630 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62340_62627__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_62631 = goog.getObjectByName(fn_str_62629,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_62630)].join(''));

(fn_obj_62631.cljs$core$IFn$_invoke$arity$2 ? fn_obj_62631.cljs$core$IFn$_invoke$arity$2(path,new_link_62603) : fn_obj_62631.call(null,path,new_link_62603));


var G__62632 = cljs.core.next(seq__62331_62620__$1);
var G__62633 = null;
var G__62634 = (0);
var G__62635 = (0);
seq__62331_62605 = G__62632;
chunk__62333_62606 = G__62633;
count__62334_62607 = G__62634;
i__62335_62608 = G__62635;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_62601);
});})(seq__62258_62544,chunk__62262_62545,count__62263_62546,i__62264_62547,seq__62083,chunk__62085,count__62086,i__62087,new_link_62603,path_match_62602,node_62601,seq__62258_62595__$1,temp__5753__auto___62594,path,map__62080,map__62080__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_62602], 0));

goog.dom.insertSiblingAfter(new_link_62603,node_62601);


var G__62636 = cljs.core.next(seq__62258_62595__$1);
var G__62637 = null;
var G__62638 = (0);
var G__62639 = (0);
seq__62258_62544 = G__62636;
chunk__62262_62545 = G__62637;
count__62263_62546 = G__62638;
i__62264_62547 = G__62639;
continue;
} else {
var G__62642 = cljs.core.next(seq__62258_62595__$1);
var G__62643 = null;
var G__62644 = (0);
var G__62645 = (0);
seq__62258_62544 = G__62642;
chunk__62262_62545 = G__62643;
count__62263_62546 = G__62644;
i__62264_62547 = G__62645;
continue;
}
} else {
var G__62646 = cljs.core.next(seq__62258_62595__$1);
var G__62647 = null;
var G__62648 = (0);
var G__62649 = (0);
seq__62258_62544 = G__62646;
chunk__62262_62545 = G__62647;
count__62263_62546 = G__62648;
i__62264_62547 = G__62649;
continue;
}
}
} else {
}
}
break;
}


var G__62650 = seq__62083;
var G__62651 = chunk__62085;
var G__62652 = count__62086;
var G__62653 = (i__62087 + (1));
seq__62083 = G__62650;
chunk__62085 = G__62651;
count__62086 = G__62652;
i__62087 = G__62653;
continue;
} else {
var G__62654 = seq__62083;
var G__62655 = chunk__62085;
var G__62656 = count__62086;
var G__62657 = (i__62087 + (1));
seq__62083 = G__62654;
chunk__62085 = G__62655;
count__62086 = G__62656;
i__62087 = G__62657;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__62083);
if(temp__5753__auto__){
var seq__62083__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62083__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__62083__$1);
var G__62658 = cljs.core.chunk_rest(seq__62083__$1);
var G__62659 = c__4679__auto__;
var G__62660 = cljs.core.count(c__4679__auto__);
var G__62661 = (0);
seq__62083 = G__62658;
chunk__62085 = G__62659;
count__62086 = G__62660;
i__62087 = G__62661;
continue;
} else {
var path = cljs.core.first(seq__62083__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__62341_62662 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__62345_62663 = null;
var count__62346_62664 = (0);
var i__62347_62665 = (0);
while(true){
if((i__62347_62665 < count__62346_62664)){
var node_62666 = chunk__62345_62663.cljs$core$IIndexed$_nth$arity$2(null,i__62347_62665);
if(cljs.core.not(node_62666.shadow$old)){
var path_match_62667 = shadow.cljs.devtools.client.browser.match_paths(node_62666.getAttribute("href"),path);
if(cljs.core.truth_(path_match_62667)){
var new_link_62668 = (function (){var G__62385 = node_62666.cloneNode(true);
G__62385.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_62667),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__62385;
})();
(node_62666.shadow$old = true);

(new_link_62668.onload = ((function (seq__62341_62662,chunk__62345_62663,count__62346_62664,i__62347_62665,seq__62083,chunk__62085,count__62086,i__62087,new_link_62668,path_match_62667,node_62666,path,seq__62083__$1,temp__5753__auto__,map__62080,map__62080__$1,msg,updates,reload_info){
return (function (e){
var seq__62388_62669 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__62390_62670 = null;
var count__62391_62671 = (0);
var i__62392_62672 = (0);
while(true){
if((i__62392_62672 < count__62391_62671)){
var map__62403_62673 = chunk__62390_62670.cljs$core$IIndexed$_nth$arity$2(null,i__62392_62672);
var map__62403_62674__$1 = cljs.core.__destructure_map(map__62403_62673);
var task_62675 = map__62403_62674__$1;
var fn_str_62676 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62403_62674__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_62677 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62403_62674__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_62678 = goog.getObjectByName(fn_str_62676,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_62677)].join(''));

(fn_obj_62678.cljs$core$IFn$_invoke$arity$2 ? fn_obj_62678.cljs$core$IFn$_invoke$arity$2(path,new_link_62668) : fn_obj_62678.call(null,path,new_link_62668));


var G__62679 = seq__62388_62669;
var G__62680 = chunk__62390_62670;
var G__62681 = count__62391_62671;
var G__62682 = (i__62392_62672 + (1));
seq__62388_62669 = G__62679;
chunk__62390_62670 = G__62680;
count__62391_62671 = G__62681;
i__62392_62672 = G__62682;
continue;
} else {
var temp__5753__auto___62683__$1 = cljs.core.seq(seq__62388_62669);
if(temp__5753__auto___62683__$1){
var seq__62388_62684__$1 = temp__5753__auto___62683__$1;
if(cljs.core.chunked_seq_QMARK_(seq__62388_62684__$1)){
var c__4679__auto___62685 = cljs.core.chunk_first(seq__62388_62684__$1);
var G__62686 = cljs.core.chunk_rest(seq__62388_62684__$1);
var G__62687 = c__4679__auto___62685;
var G__62688 = cljs.core.count(c__4679__auto___62685);
var G__62689 = (0);
seq__62388_62669 = G__62686;
chunk__62390_62670 = G__62687;
count__62391_62671 = G__62688;
i__62392_62672 = G__62689;
continue;
} else {
var map__62408_62690 = cljs.core.first(seq__62388_62684__$1);
var map__62408_62691__$1 = cljs.core.__destructure_map(map__62408_62690);
var task_62692 = map__62408_62691__$1;
var fn_str_62693 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62408_62691__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_62694 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62408_62691__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_62695 = goog.getObjectByName(fn_str_62693,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_62694)].join(''));

(fn_obj_62695.cljs$core$IFn$_invoke$arity$2 ? fn_obj_62695.cljs$core$IFn$_invoke$arity$2(path,new_link_62668) : fn_obj_62695.call(null,path,new_link_62668));


var G__62696 = cljs.core.next(seq__62388_62684__$1);
var G__62697 = null;
var G__62698 = (0);
var G__62699 = (0);
seq__62388_62669 = G__62696;
chunk__62390_62670 = G__62697;
count__62391_62671 = G__62698;
i__62392_62672 = G__62699;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_62666);
});})(seq__62341_62662,chunk__62345_62663,count__62346_62664,i__62347_62665,seq__62083,chunk__62085,count__62086,i__62087,new_link_62668,path_match_62667,node_62666,path,seq__62083__$1,temp__5753__auto__,map__62080,map__62080__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_62667], 0));

goog.dom.insertSiblingAfter(new_link_62668,node_62666);


var G__62700 = seq__62341_62662;
var G__62701 = chunk__62345_62663;
var G__62702 = count__62346_62664;
var G__62703 = (i__62347_62665 + (1));
seq__62341_62662 = G__62700;
chunk__62345_62663 = G__62701;
count__62346_62664 = G__62702;
i__62347_62665 = G__62703;
continue;
} else {
var G__62704 = seq__62341_62662;
var G__62705 = chunk__62345_62663;
var G__62706 = count__62346_62664;
var G__62707 = (i__62347_62665 + (1));
seq__62341_62662 = G__62704;
chunk__62345_62663 = G__62705;
count__62346_62664 = G__62706;
i__62347_62665 = G__62707;
continue;
}
} else {
var G__62708 = seq__62341_62662;
var G__62709 = chunk__62345_62663;
var G__62710 = count__62346_62664;
var G__62711 = (i__62347_62665 + (1));
seq__62341_62662 = G__62708;
chunk__62345_62663 = G__62709;
count__62346_62664 = G__62710;
i__62347_62665 = G__62711;
continue;
}
} else {
var temp__5753__auto___62712__$1 = cljs.core.seq(seq__62341_62662);
if(temp__5753__auto___62712__$1){
var seq__62341_62713__$1 = temp__5753__auto___62712__$1;
if(cljs.core.chunked_seq_QMARK_(seq__62341_62713__$1)){
var c__4679__auto___62714 = cljs.core.chunk_first(seq__62341_62713__$1);
var G__62715 = cljs.core.chunk_rest(seq__62341_62713__$1);
var G__62716 = c__4679__auto___62714;
var G__62717 = cljs.core.count(c__4679__auto___62714);
var G__62718 = (0);
seq__62341_62662 = G__62715;
chunk__62345_62663 = G__62716;
count__62346_62664 = G__62717;
i__62347_62665 = G__62718;
continue;
} else {
var node_62719 = cljs.core.first(seq__62341_62713__$1);
if(cljs.core.not(node_62719.shadow$old)){
var path_match_62720 = shadow.cljs.devtools.client.browser.match_paths(node_62719.getAttribute("href"),path);
if(cljs.core.truth_(path_match_62720)){
var new_link_62721 = (function (){var G__62410 = node_62719.cloneNode(true);
G__62410.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_62720),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__62410;
})();
(node_62719.shadow$old = true);

(new_link_62721.onload = ((function (seq__62341_62662,chunk__62345_62663,count__62346_62664,i__62347_62665,seq__62083,chunk__62085,count__62086,i__62087,new_link_62721,path_match_62720,node_62719,seq__62341_62713__$1,temp__5753__auto___62712__$1,path,seq__62083__$1,temp__5753__auto__,map__62080,map__62080__$1,msg,updates,reload_info){
return (function (e){
var seq__62411_62722 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__62413_62723 = null;
var count__62414_62724 = (0);
var i__62415_62725 = (0);
while(true){
if((i__62415_62725 < count__62414_62724)){
var map__62425_62726 = chunk__62413_62723.cljs$core$IIndexed$_nth$arity$2(null,i__62415_62725);
var map__62425_62727__$1 = cljs.core.__destructure_map(map__62425_62726);
var task_62728 = map__62425_62727__$1;
var fn_str_62729 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62425_62727__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_62730 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62425_62727__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_62731 = goog.getObjectByName(fn_str_62729,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_62730)].join(''));

(fn_obj_62731.cljs$core$IFn$_invoke$arity$2 ? fn_obj_62731.cljs$core$IFn$_invoke$arity$2(path,new_link_62721) : fn_obj_62731.call(null,path,new_link_62721));


var G__62732 = seq__62411_62722;
var G__62733 = chunk__62413_62723;
var G__62734 = count__62414_62724;
var G__62735 = (i__62415_62725 + (1));
seq__62411_62722 = G__62732;
chunk__62413_62723 = G__62733;
count__62414_62724 = G__62734;
i__62415_62725 = G__62735;
continue;
} else {
var temp__5753__auto___62736__$2 = cljs.core.seq(seq__62411_62722);
if(temp__5753__auto___62736__$2){
var seq__62411_62737__$1 = temp__5753__auto___62736__$2;
if(cljs.core.chunked_seq_QMARK_(seq__62411_62737__$1)){
var c__4679__auto___62738 = cljs.core.chunk_first(seq__62411_62737__$1);
var G__62739 = cljs.core.chunk_rest(seq__62411_62737__$1);
var G__62740 = c__4679__auto___62738;
var G__62741 = cljs.core.count(c__4679__auto___62738);
var G__62742 = (0);
seq__62411_62722 = G__62739;
chunk__62413_62723 = G__62740;
count__62414_62724 = G__62741;
i__62415_62725 = G__62742;
continue;
} else {
var map__62429_62743 = cljs.core.first(seq__62411_62737__$1);
var map__62429_62744__$1 = cljs.core.__destructure_map(map__62429_62743);
var task_62745 = map__62429_62744__$1;
var fn_str_62746 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62429_62744__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_62747 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62429_62744__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_62749 = goog.getObjectByName(fn_str_62746,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_62747)].join(''));

(fn_obj_62749.cljs$core$IFn$_invoke$arity$2 ? fn_obj_62749.cljs$core$IFn$_invoke$arity$2(path,new_link_62721) : fn_obj_62749.call(null,path,new_link_62721));


var G__62750 = cljs.core.next(seq__62411_62737__$1);
var G__62751 = null;
var G__62752 = (0);
var G__62753 = (0);
seq__62411_62722 = G__62750;
chunk__62413_62723 = G__62751;
count__62414_62724 = G__62752;
i__62415_62725 = G__62753;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_62719);
});})(seq__62341_62662,chunk__62345_62663,count__62346_62664,i__62347_62665,seq__62083,chunk__62085,count__62086,i__62087,new_link_62721,path_match_62720,node_62719,seq__62341_62713__$1,temp__5753__auto___62712__$1,path,seq__62083__$1,temp__5753__auto__,map__62080,map__62080__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_62720], 0));

goog.dom.insertSiblingAfter(new_link_62721,node_62719);


var G__62757 = cljs.core.next(seq__62341_62713__$1);
var G__62758 = null;
var G__62759 = (0);
var G__62760 = (0);
seq__62341_62662 = G__62757;
chunk__62345_62663 = G__62758;
count__62346_62664 = G__62759;
i__62347_62665 = G__62760;
continue;
} else {
var G__62761 = cljs.core.next(seq__62341_62713__$1);
var G__62762 = null;
var G__62763 = (0);
var G__62764 = (0);
seq__62341_62662 = G__62761;
chunk__62345_62663 = G__62762;
count__62346_62664 = G__62763;
i__62347_62665 = G__62764;
continue;
}
} else {
var G__62765 = cljs.core.next(seq__62341_62713__$1);
var G__62766 = null;
var G__62767 = (0);
var G__62768 = (0);
seq__62341_62662 = G__62765;
chunk__62345_62663 = G__62766;
count__62346_62664 = G__62767;
i__62347_62665 = G__62768;
continue;
}
}
} else {
}
}
break;
}


var G__62769 = cljs.core.next(seq__62083__$1);
var G__62770 = null;
var G__62771 = (0);
var G__62772 = (0);
seq__62083 = G__62769;
chunk__62085 = G__62770;
count__62086 = G__62771;
i__62087 = G__62772;
continue;
} else {
var G__62773 = cljs.core.next(seq__62083__$1);
var G__62774 = null;
var G__62775 = (0);
var G__62776 = (0);
seq__62083 = G__62773;
chunk__62085 = G__62774;
count__62086 = G__62775;
i__62087 = G__62776;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__62430){
var map__62432 = p__62430;
var map__62432__$1 = cljs.core.__destructure_map(map__62432);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62432__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__62434){
var map__62435 = p__62434;
var map__62435__$1 = cljs.core.__destructure_map(map__62435);
var _ = map__62435__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62435__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__62438,done,error){
var map__62439 = p__62438;
var map__62439__$1 = cljs.core.__destructure_map(map__62439);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62439__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__62440,done,error){
var map__62441 = p__62440;
var map__62441__$1 = cljs.core.__destructure_map(map__62441);
var msg = map__62441__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62441__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62441__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62441__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__62446){
var map__62447 = p__62446;
var map__62447__$1 = cljs.core.__destructure_map(map__62447);
var src = map__62447__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62447__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__62449 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__62449) : done.call(null,G__62449));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__62453){
var map__62454 = p__62453;
var map__62454__$1 = cljs.core.__destructure_map(map__62454);
var msg__$1 = map__62454__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62454__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e62455){var ex = e62455;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__62457){
var map__62458 = p__62457;
var map__62458__$1 = cljs.core.__destructure_map(map__62458);
var env = map__62458__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62458__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__62464){
var map__62465 = p__62464;
var map__62465__$1 = cljs.core.__destructure_map(map__62465);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62465__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62465__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__62466){
var map__62467 = p__62466;
var map__62467__$1 = cljs.core.__destructure_map(map__62467);
var svc = map__62467__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62467__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
