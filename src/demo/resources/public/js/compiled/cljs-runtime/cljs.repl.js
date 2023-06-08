goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__60951){
var map__60952 = p__60951;
var map__60952__$1 = cljs.core.__destructure_map(map__60952);
var m = map__60952__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60952__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60952__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__60959_61189 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__60960_61190 = null;
var count__60961_61191 = (0);
var i__60962_61192 = (0);
while(true){
if((i__60962_61192 < count__60961_61191)){
var f_61193 = chunk__60960_61190.cljs$core$IIndexed$_nth$arity$2(null,i__60962_61192);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_61193], 0));


var G__61194 = seq__60959_61189;
var G__61195 = chunk__60960_61190;
var G__61196 = count__60961_61191;
var G__61197 = (i__60962_61192 + (1));
seq__60959_61189 = G__61194;
chunk__60960_61190 = G__61195;
count__60961_61191 = G__61196;
i__60962_61192 = G__61197;
continue;
} else {
var temp__5753__auto___61198 = cljs.core.seq(seq__60959_61189);
if(temp__5753__auto___61198){
var seq__60959_61199__$1 = temp__5753__auto___61198;
if(cljs.core.chunked_seq_QMARK_(seq__60959_61199__$1)){
var c__4679__auto___61200 = cljs.core.chunk_first(seq__60959_61199__$1);
var G__61201 = cljs.core.chunk_rest(seq__60959_61199__$1);
var G__61202 = c__4679__auto___61200;
var G__61203 = cljs.core.count(c__4679__auto___61200);
var G__61204 = (0);
seq__60959_61189 = G__61201;
chunk__60960_61190 = G__61202;
count__60961_61191 = G__61203;
i__60962_61192 = G__61204;
continue;
} else {
var f_61205 = cljs.core.first(seq__60959_61199__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_61205], 0));


var G__61206 = cljs.core.next(seq__60959_61199__$1);
var G__61207 = null;
var G__61208 = (0);
var G__61209 = (0);
seq__60959_61189 = G__61206;
chunk__60960_61190 = G__61207;
count__60961_61191 = G__61208;
i__60962_61192 = G__61209;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_61210 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_61210], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_61210)))?cljs.core.second(arglists_61210):arglists_61210)], 0));
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
var seq__60973_61211 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__60974_61212 = null;
var count__60975_61213 = (0);
var i__60976_61214 = (0);
while(true){
if((i__60976_61214 < count__60975_61213)){
var vec__60993_61215 = chunk__60974_61212.cljs$core$IIndexed$_nth$arity$2(null,i__60976_61214);
var name_61216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60993_61215,(0),null);
var map__60996_61217 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60993_61215,(1),null);
var map__60996_61218__$1 = cljs.core.__destructure_map(map__60996_61217);
var doc_61219 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60996_61218__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_61220 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60996_61218__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_61216], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_61220], 0));

if(cljs.core.truth_(doc_61219)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_61219], 0));
} else {
}


var G__61221 = seq__60973_61211;
var G__61222 = chunk__60974_61212;
var G__61223 = count__60975_61213;
var G__61224 = (i__60976_61214 + (1));
seq__60973_61211 = G__61221;
chunk__60974_61212 = G__61222;
count__60975_61213 = G__61223;
i__60976_61214 = G__61224;
continue;
} else {
var temp__5753__auto___61225 = cljs.core.seq(seq__60973_61211);
if(temp__5753__auto___61225){
var seq__60973_61226__$1 = temp__5753__auto___61225;
if(cljs.core.chunked_seq_QMARK_(seq__60973_61226__$1)){
var c__4679__auto___61227 = cljs.core.chunk_first(seq__60973_61226__$1);
var G__61228 = cljs.core.chunk_rest(seq__60973_61226__$1);
var G__61229 = c__4679__auto___61227;
var G__61230 = cljs.core.count(c__4679__auto___61227);
var G__61231 = (0);
seq__60973_61211 = G__61228;
chunk__60974_61212 = G__61229;
count__60975_61213 = G__61230;
i__60976_61214 = G__61231;
continue;
} else {
var vec__60997_61232 = cljs.core.first(seq__60973_61226__$1);
var name_61233 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60997_61232,(0),null);
var map__61000_61234 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60997_61232,(1),null);
var map__61000_61235__$1 = cljs.core.__destructure_map(map__61000_61234);
var doc_61236 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61000_61235__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_61237 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61000_61235__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_61233], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_61237], 0));

if(cljs.core.truth_(doc_61236)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_61236], 0));
} else {
}


var G__61238 = cljs.core.next(seq__60973_61226__$1);
var G__61239 = null;
var G__61240 = (0);
var G__61241 = (0);
seq__60973_61211 = G__61238;
chunk__60974_61212 = G__61239;
count__60975_61213 = G__61240;
i__60976_61214 = G__61241;
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

var seq__61001 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__61002 = null;
var count__61003 = (0);
var i__61004 = (0);
while(true){
if((i__61004 < count__61003)){
var role = chunk__61002.cljs$core$IIndexed$_nth$arity$2(null,i__61004);
var temp__5753__auto___61242__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___61242__$1)){
var spec_61243 = temp__5753__auto___61242__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_61243)], 0));
} else {
}


var G__61244 = seq__61001;
var G__61245 = chunk__61002;
var G__61246 = count__61003;
var G__61247 = (i__61004 + (1));
seq__61001 = G__61244;
chunk__61002 = G__61245;
count__61003 = G__61246;
i__61004 = G__61247;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__61001);
if(temp__5753__auto____$1){
var seq__61001__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__61001__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__61001__$1);
var G__61248 = cljs.core.chunk_rest(seq__61001__$1);
var G__61249 = c__4679__auto__;
var G__61250 = cljs.core.count(c__4679__auto__);
var G__61251 = (0);
seq__61001 = G__61248;
chunk__61002 = G__61249;
count__61003 = G__61250;
i__61004 = G__61251;
continue;
} else {
var role = cljs.core.first(seq__61001__$1);
var temp__5753__auto___61252__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___61252__$2)){
var spec_61253 = temp__5753__auto___61252__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_61253)], 0));
} else {
}


var G__61254 = cljs.core.next(seq__61001__$1);
var G__61255 = null;
var G__61256 = (0);
var G__61257 = (0);
seq__61001 = G__61254;
chunk__61002 = G__61255;
count__61003 = G__61256;
i__61004 = G__61257;
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
var G__61258 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__61259 = cljs.core.ex_cause(t);
via = G__61258;
t = G__61259;
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
var map__61035 = datafied_throwable;
var map__61035__$1 = cljs.core.__destructure_map(map__61035);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61035__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61035__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61035__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__61036 = cljs.core.last(via);
var map__61036__$1 = cljs.core.__destructure_map(map__61036);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61036__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61036__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61036__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__61037 = data;
var map__61037__$1 = cljs.core.__destructure_map(map__61037);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61037__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61037__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61037__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__61038 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__61038__$1 = cljs.core.__destructure_map(map__61038);
var top_data = map__61038__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61038__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__61044 = phase;
var G__61044__$1 = (((G__61044 instanceof cljs.core.Keyword))?G__61044.fqn:null);
switch (G__61044__$1) {
case "read-source":
var map__61046 = data;
var map__61046__$1 = cljs.core.__destructure_map(map__61046);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61046__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61046__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__61047 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__61047__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61047,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__61047);
var G__61047__$2 = (cljs.core.truth_((function (){var fexpr__61048 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__61048.cljs$core$IFn$_invoke$arity$1 ? fexpr__61048.cljs$core$IFn$_invoke$arity$1(source) : fexpr__61048.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__61047__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__61047__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61047__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__61047__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__61049 = top_data;
var G__61049__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61049,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__61049);
var G__61049__$2 = (cljs.core.truth_((function (){var fexpr__61052 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__61052.cljs$core$IFn$_invoke$arity$1 ? fexpr__61052.cljs$core$IFn$_invoke$arity$1(source) : fexpr__61052.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__61049__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__61049__$1);
var G__61049__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61049__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__61049__$2);
var G__61049__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61049__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__61049__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61049__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__61049__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__61053 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61053,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61053,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61053,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61053,(3),null);
var G__61059 = top_data;
var G__61059__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61059,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__61059);
var G__61059__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61059__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__61059__$1);
var G__61059__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61059__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__61059__$2);
var G__61059__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61059__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__61059__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61059__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__61059__$4;
}

break;
case "execution":
var vec__61080 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61080,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61080,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61080,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61080,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__61033_SHARP_){
var or__4253__auto__ = (p1__61033_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__61083 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__61083.cljs$core$IFn$_invoke$arity$1 ? fexpr__61083.cljs$core$IFn$_invoke$arity$1(p1__61033_SHARP_) : fexpr__61083.call(null,p1__61033_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__61087 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__61087__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61087,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__61087);
var G__61087__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61087__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__61087__$1);
var G__61087__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61087__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__61087__$2);
var G__61087__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61087__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__61087__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61087__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__61087__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61044__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__61094){
var map__61095 = p__61094;
var map__61095__$1 = cljs.core.__destructure_map(map__61095);
var triage_data = map__61095__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61095__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61095__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61095__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61095__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61095__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61095__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61095__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61095__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__61112 = phase;
var G__61112__$1 = (((G__61112 instanceof cljs.core.Keyword))?G__61112.fqn:null);
switch (G__61112__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__61117 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__61118 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__61119 = loc;
var G__61120 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__61121_61271 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__61122_61272 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__61123_61273 = true;
var _STAR_print_fn_STAR__temp_val__61124_61274 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__61123_61273);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__61124_61274);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__61092_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__61092_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__61122_61272);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__61121_61271);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__61117,G__61118,G__61119,G__61120) : format.call(null,G__61117,G__61118,G__61119,G__61120));

break;
case "macroexpansion":
var G__61125 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__61126 = cause_type;
var G__61127 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__61128 = loc;
var G__61129 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__61125,G__61126,G__61127,G__61128,G__61129) : format.call(null,G__61125,G__61126,G__61127,G__61128,G__61129));

break;
case "compile-syntax-check":
var G__61134 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__61135 = cause_type;
var G__61136 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__61137 = loc;
var G__61138 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__61134,G__61135,G__61136,G__61137,G__61138) : format.call(null,G__61134,G__61135,G__61136,G__61137,G__61138));

break;
case "compilation":
var G__61139 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__61140 = cause_type;
var G__61141 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__61142 = loc;
var G__61143 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__61139,G__61140,G__61141,G__61142,G__61143) : format.call(null,G__61139,G__61140,G__61141,G__61142,G__61143));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__61148 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__61149 = symbol;
var G__61150 = loc;
var G__61151 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__61159_61283 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__61160_61284 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__61161_61285 = true;
var _STAR_print_fn_STAR__temp_val__61162_61286 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__61161_61285);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__61162_61286);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__61093_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__61093_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__61160_61284);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__61159_61283);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__61148,G__61149,G__61150,G__61151) : format.call(null,G__61148,G__61149,G__61150,G__61151));
} else {
var G__61170 = "Execution error%s at %s(%s).\n%s\n";
var G__61171 = cause_type;
var G__61172 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__61173 = loc;
var G__61174 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__61170,G__61171,G__61172,G__61173,G__61174) : format.call(null,G__61170,G__61171,G__61172,G__61173,G__61174));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61112__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
