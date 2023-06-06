goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36140){
var map__36142 = p__36140;
var map__36142__$1 = cljs.core.__destructure_map(map__36142);
var m = map__36142__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36142__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36142__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36143_36273 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36144_36274 = null;
var count__36145_36275 = (0);
var i__36146_36276 = (0);
while(true){
if((i__36146_36276 < count__36145_36275)){
var f_36277 = chunk__36144_36274.cljs$core$IIndexed$_nth$arity$2(null,i__36146_36276);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36277], 0));


var G__36278 = seq__36143_36273;
var G__36279 = chunk__36144_36274;
var G__36280 = count__36145_36275;
var G__36281 = (i__36146_36276 + (1));
seq__36143_36273 = G__36278;
chunk__36144_36274 = G__36279;
count__36145_36275 = G__36280;
i__36146_36276 = G__36281;
continue;
} else {
var temp__5753__auto___36283 = cljs.core.seq(seq__36143_36273);
if(temp__5753__auto___36283){
var seq__36143_36284__$1 = temp__5753__auto___36283;
if(cljs.core.chunked_seq_QMARK_(seq__36143_36284__$1)){
var c__4679__auto___36285 = cljs.core.chunk_first(seq__36143_36284__$1);
var G__36286 = cljs.core.chunk_rest(seq__36143_36284__$1);
var G__36287 = c__4679__auto___36285;
var G__36288 = cljs.core.count(c__4679__auto___36285);
var G__36289 = (0);
seq__36143_36273 = G__36286;
chunk__36144_36274 = G__36287;
count__36145_36275 = G__36288;
i__36146_36276 = G__36289;
continue;
} else {
var f_36290 = cljs.core.first(seq__36143_36284__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36290], 0));


var G__36291 = cljs.core.next(seq__36143_36284__$1);
var G__36292 = null;
var G__36293 = (0);
var G__36294 = (0);
seq__36143_36273 = G__36291;
chunk__36144_36274 = G__36292;
count__36145_36275 = G__36293;
i__36146_36276 = G__36294;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36295 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36295], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36295)))?cljs.core.second(arglists_36295):arglists_36295)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36151_36296 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36152_36297 = null;
var count__36153_36298 = (0);
var i__36154_36299 = (0);
while(true){
if((i__36154_36299 < count__36153_36298)){
var vec__36167_36300 = chunk__36152_36297.cljs$core$IIndexed$_nth$arity$2(null,i__36154_36299);
var name_36301 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36167_36300,(0),null);
var map__36170_36302 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36167_36300,(1),null);
var map__36170_36303__$1 = cljs.core.__destructure_map(map__36170_36302);
var doc_36304 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36170_36303__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36305 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36170_36303__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36301], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36305], 0));

if(cljs.core.truth_(doc_36304)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36304], 0));
} else {
}


var G__36306 = seq__36151_36296;
var G__36307 = chunk__36152_36297;
var G__36308 = count__36153_36298;
var G__36309 = (i__36154_36299 + (1));
seq__36151_36296 = G__36306;
chunk__36152_36297 = G__36307;
count__36153_36298 = G__36308;
i__36154_36299 = G__36309;
continue;
} else {
var temp__5753__auto___36310 = cljs.core.seq(seq__36151_36296);
if(temp__5753__auto___36310){
var seq__36151_36311__$1 = temp__5753__auto___36310;
if(cljs.core.chunked_seq_QMARK_(seq__36151_36311__$1)){
var c__4679__auto___36312 = cljs.core.chunk_first(seq__36151_36311__$1);
var G__36313 = cljs.core.chunk_rest(seq__36151_36311__$1);
var G__36314 = c__4679__auto___36312;
var G__36315 = cljs.core.count(c__4679__auto___36312);
var G__36316 = (0);
seq__36151_36296 = G__36313;
chunk__36152_36297 = G__36314;
count__36153_36298 = G__36315;
i__36154_36299 = G__36316;
continue;
} else {
var vec__36172_36317 = cljs.core.first(seq__36151_36311__$1);
var name_36318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36172_36317,(0),null);
var map__36175_36319 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36172_36317,(1),null);
var map__36175_36320__$1 = cljs.core.__destructure_map(map__36175_36319);
var doc_36321 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36175_36320__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36322 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36175_36320__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36318], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36322], 0));

if(cljs.core.truth_(doc_36321)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36321], 0));
} else {
}


var G__36325 = cljs.core.next(seq__36151_36311__$1);
var G__36326 = null;
var G__36327 = (0);
var G__36328 = (0);
seq__36151_36296 = G__36325;
chunk__36152_36297 = G__36326;
count__36153_36298 = G__36327;
i__36154_36299 = G__36328;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__36177 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36178 = null;
var count__36179 = (0);
var i__36180 = (0);
while(true){
if((i__36180 < count__36179)){
var role = chunk__36178.cljs$core$IIndexed$_nth$arity$2(null,i__36180);
var temp__5753__auto___36329__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___36329__$1)){
var spec_36330 = temp__5753__auto___36329__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36330)], 0));
} else {
}


var G__36331 = seq__36177;
var G__36332 = chunk__36178;
var G__36333 = count__36179;
var G__36334 = (i__36180 + (1));
seq__36177 = G__36331;
chunk__36178 = G__36332;
count__36179 = G__36333;
i__36180 = G__36334;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__36177);
if(temp__5753__auto____$1){
var seq__36177__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__36177__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__36177__$1);
var G__36337 = cljs.core.chunk_rest(seq__36177__$1);
var G__36338 = c__4679__auto__;
var G__36339 = cljs.core.count(c__4679__auto__);
var G__36340 = (0);
seq__36177 = G__36337;
chunk__36178 = G__36338;
count__36179 = G__36339;
i__36180 = G__36340;
continue;
} else {
var role = cljs.core.first(seq__36177__$1);
var temp__5753__auto___36341__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___36341__$2)){
var spec_36342 = temp__5753__auto___36341__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36342)], 0));
} else {
}


var G__36343 = cljs.core.next(seq__36177__$1);
var G__36344 = null;
var G__36345 = (0);
var G__36346 = (0);
seq__36177 = G__36343;
chunk__36178 = G__36344;
count__36179 = G__36345;
i__36180 = G__36346;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__36347 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__36348 = cljs.core.ex_cause(t);
via = G__36347;
t = G__36348;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__36193 = datafied_throwable;
var map__36193__$1 = cljs.core.__destructure_map(map__36193);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36193__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36193__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36193__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36194 = cljs.core.last(via);
var map__36194__$1 = cljs.core.__destructure_map(map__36194);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36194__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36194__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36194__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36195 = data;
var map__36195__$1 = cljs.core.__destructure_map(map__36195);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36195__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36195__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36195__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36196 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__36196__$1 = cljs.core.__destructure_map(map__36196);
var top_data = map__36196__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36196__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36197 = phase;
var G__36197__$1 = (((G__36197 instanceof cljs.core.Keyword))?G__36197.fqn:null);
switch (G__36197__$1) {
case "read-source":
var map__36198 = data;
var map__36198__$1 = cljs.core.__destructure_map(map__36198);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36198__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36198__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36201 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__36201__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36201,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36201);
var G__36201__$2 = (cljs.core.truth_((function (){var fexpr__36202 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36202.cljs$core$IFn$_invoke$arity$1 ? fexpr__36202.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36202.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36201__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36201__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36201__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36201__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36203 = top_data;
var G__36203__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36203,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36203);
var G__36203__$2 = (cljs.core.truth_((function (){var fexpr__36204 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36204.cljs$core$IFn$_invoke$arity$1 ? fexpr__36204.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36204.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36203__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36203__$1);
var G__36203__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36203__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36203__$2);
var G__36203__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36203__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36203__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36203__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36203__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36207 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36207,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36207,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36207,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36207,(3),null);
var G__36211 = top_data;
var G__36211__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36211,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36211);
var G__36211__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36211__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36211__$1);
var G__36211__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36211__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36211__$2);
var G__36211__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36211__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36211__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36211__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36211__$4;
}

break;
case "execution":
var vec__36213 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36213,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36213,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36213,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36213,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__36192_SHARP_){
var or__4253__auto__ = (p1__36192_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__36216 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36216.cljs$core$IFn$_invoke$arity$1 ? fexpr__36216.cljs$core$IFn$_invoke$arity$1(p1__36192_SHARP_) : fexpr__36216.call(null,p1__36192_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__36217 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36217__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36217,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36217);
var G__36217__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36217__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36217__$1);
var G__36217__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36217__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36217__$2);
var G__36217__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36217__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36217__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36217__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36217__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36197__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36224){
var map__36225 = p__36224;
var map__36225__$1 = cljs.core.__destructure_map(map__36225);
var triage_data = map__36225__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36225__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36225__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36225__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36225__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36225__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36225__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36225__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36225__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__36226 = phase;
var G__36226__$1 = (((G__36226 instanceof cljs.core.Keyword))?G__36226.fqn:null);
switch (G__36226__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__36228 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__36229 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36230 = loc;
var G__36231 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36232_36357 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36233_36358 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36234_36359 = true;
var _STAR_print_fn_STAR__temp_val__36235_36360 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36234_36359);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36235_36360);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36221_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36221_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36233_36358);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36232_36357);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36228,G__36229,G__36230,G__36231) : format.call(null,G__36228,G__36229,G__36230,G__36231));

break;
case "macroexpansion":
var G__36238 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__36239 = cause_type;
var G__36240 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36241 = loc;
var G__36242 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36238,G__36239,G__36240,G__36241,G__36242) : format.call(null,G__36238,G__36239,G__36240,G__36241,G__36242));

break;
case "compile-syntax-check":
var G__36243 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__36244 = cause_type;
var G__36245 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36246 = loc;
var G__36247 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36243,G__36244,G__36245,G__36246,G__36247) : format.call(null,G__36243,G__36244,G__36245,G__36246,G__36247));

break;
case "compilation":
var G__36248 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36249 = cause_type;
var G__36250 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36251 = loc;
var G__36252 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36248,G__36249,G__36250,G__36251,G__36252) : format.call(null,G__36248,G__36249,G__36250,G__36251,G__36252));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36255 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36256 = symbol;
var G__36257 = loc;
var G__36258 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36259_36362 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36260_36363 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36261_36364 = true;
var _STAR_print_fn_STAR__temp_val__36262_36365 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36261_36364);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36262_36365);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36223_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36223_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36260_36363);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36259_36362);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36255,G__36256,G__36257,G__36258) : format.call(null,G__36255,G__36256,G__36257,G__36258));
} else {
var G__36264 = "Execution error%s at %s(%s).\n%s\n";
var G__36265 = cause_type;
var G__36266 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36267 = loc;
var G__36268 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36264,G__36265,G__36266,G__36267,G__36268) : format.call(null,G__36264,G__36265,G__36266,G__36267,G__36268));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36226__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
