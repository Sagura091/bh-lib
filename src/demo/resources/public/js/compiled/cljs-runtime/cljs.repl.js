goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__60937){
var map__60943 = p__60937;
var map__60943__$1 = cljs.core.__destructure_map(map__60943);
var m = map__60943__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60943__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60943__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__60948_61145 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__60949_61146 = null;
var count__60950_61147 = (0);
var i__60951_61148 = (0);
while(true){
if((i__60951_61148 < count__60950_61147)){
var f_61149 = chunk__60949_61146.cljs$core$IIndexed$_nth$arity$2(null,i__60951_61148);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_61149], 0));


var G__61150 = seq__60948_61145;
var G__61151 = chunk__60949_61146;
var G__61152 = count__60950_61147;
var G__61153 = (i__60951_61148 + (1));
seq__60948_61145 = G__61150;
chunk__60949_61146 = G__61151;
count__60950_61147 = G__61152;
i__60951_61148 = G__61153;
continue;
} else {
var temp__5753__auto___61154 = cljs.core.seq(seq__60948_61145);
if(temp__5753__auto___61154){
var seq__60948_61155__$1 = temp__5753__auto___61154;
if(cljs.core.chunked_seq_QMARK_(seq__60948_61155__$1)){
var c__4679__auto___61156 = cljs.core.chunk_first(seq__60948_61155__$1);
var G__61157 = cljs.core.chunk_rest(seq__60948_61155__$1);
var G__61158 = c__4679__auto___61156;
var G__61159 = cljs.core.count(c__4679__auto___61156);
var G__61160 = (0);
seq__60948_61145 = G__61157;
chunk__60949_61146 = G__61158;
count__60950_61147 = G__61159;
i__60951_61148 = G__61160;
continue;
} else {
var f_61161 = cljs.core.first(seq__60948_61155__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_61161], 0));


var G__61163 = cljs.core.next(seq__60948_61155__$1);
var G__61164 = null;
var G__61165 = (0);
var G__61166 = (0);
seq__60948_61145 = G__61163;
chunk__60949_61146 = G__61164;
count__60950_61147 = G__61165;
i__60951_61148 = G__61166;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_61167 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_61167], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_61167)))?cljs.core.second(arglists_61167):arglists_61167)], 0));
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
var seq__60954_61168 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__60955_61169 = null;
var count__60956_61170 = (0);
var i__60957_61171 = (0);
while(true){
if((i__60957_61171 < count__60956_61170)){
var vec__60977_61172 = chunk__60955_61169.cljs$core$IIndexed$_nth$arity$2(null,i__60957_61171);
var name_61173 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60977_61172,(0),null);
var map__60980_61174 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60977_61172,(1),null);
var map__60980_61175__$1 = cljs.core.__destructure_map(map__60980_61174);
var doc_61176 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60980_61175__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_61177 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60980_61175__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_61173], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_61177], 0));

if(cljs.core.truth_(doc_61176)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_61176], 0));
} else {
}


var G__61178 = seq__60954_61168;
var G__61179 = chunk__60955_61169;
var G__61180 = count__60956_61170;
var G__61181 = (i__60957_61171 + (1));
seq__60954_61168 = G__61178;
chunk__60955_61169 = G__61179;
count__60956_61170 = G__61180;
i__60957_61171 = G__61181;
continue;
} else {
var temp__5753__auto___61182 = cljs.core.seq(seq__60954_61168);
if(temp__5753__auto___61182){
var seq__60954_61183__$1 = temp__5753__auto___61182;
if(cljs.core.chunked_seq_QMARK_(seq__60954_61183__$1)){
var c__4679__auto___61184 = cljs.core.chunk_first(seq__60954_61183__$1);
var G__61185 = cljs.core.chunk_rest(seq__60954_61183__$1);
var G__61186 = c__4679__auto___61184;
var G__61187 = cljs.core.count(c__4679__auto___61184);
var G__61188 = (0);
seq__60954_61168 = G__61185;
chunk__60955_61169 = G__61186;
count__60956_61170 = G__61187;
i__60957_61171 = G__61188;
continue;
} else {
var vec__60981_61189 = cljs.core.first(seq__60954_61183__$1);
var name_61190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60981_61189,(0),null);
var map__60984_61191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60981_61189,(1),null);
var map__60984_61192__$1 = cljs.core.__destructure_map(map__60984_61191);
var doc_61193 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60984_61192__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_61194 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60984_61192__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_61190], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_61194], 0));

if(cljs.core.truth_(doc_61193)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_61193], 0));
} else {
}


var G__61195 = cljs.core.next(seq__60954_61183__$1);
var G__61196 = null;
var G__61197 = (0);
var G__61198 = (0);
seq__60954_61168 = G__61195;
chunk__60955_61169 = G__61196;
count__60956_61170 = G__61197;
i__60957_61171 = G__61198;
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

var seq__60985 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__60986 = null;
var count__60987 = (0);
var i__60988 = (0);
while(true){
if((i__60988 < count__60987)){
var role = chunk__60986.cljs$core$IIndexed$_nth$arity$2(null,i__60988);
var temp__5753__auto___61199__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___61199__$1)){
var spec_61200 = temp__5753__auto___61199__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_61200)], 0));
} else {
}


var G__61201 = seq__60985;
var G__61202 = chunk__60986;
var G__61203 = count__60987;
var G__61204 = (i__60988 + (1));
seq__60985 = G__61201;
chunk__60986 = G__61202;
count__60987 = G__61203;
i__60988 = G__61204;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__60985);
if(temp__5753__auto____$1){
var seq__60985__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__60985__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__60985__$1);
var G__61205 = cljs.core.chunk_rest(seq__60985__$1);
var G__61206 = c__4679__auto__;
var G__61207 = cljs.core.count(c__4679__auto__);
var G__61208 = (0);
seq__60985 = G__61205;
chunk__60986 = G__61206;
count__60987 = G__61207;
i__60988 = G__61208;
continue;
} else {
var role = cljs.core.first(seq__60985__$1);
var temp__5753__auto___61209__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___61209__$2)){
var spec_61210 = temp__5753__auto___61209__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_61210)], 0));
} else {
}


var G__61211 = cljs.core.next(seq__60985__$1);
var G__61212 = null;
var G__61213 = (0);
var G__61214 = (0);
seq__60985 = G__61211;
chunk__60986 = G__61212;
count__60987 = G__61213;
i__60988 = G__61214;
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
var G__61215 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__61216 = cljs.core.ex_cause(t);
via = G__61215;
t = G__61216;
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
var map__61067 = datafied_throwable;
var map__61067__$1 = cljs.core.__destructure_map(map__61067);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61067__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61067__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61067__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__61068 = cljs.core.last(via);
var map__61068__$1 = cljs.core.__destructure_map(map__61068);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61068__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61068__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61068__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__61069 = data;
var map__61069__$1 = cljs.core.__destructure_map(map__61069);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61069__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61069__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61069__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__61070 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__61070__$1 = cljs.core.__destructure_map(map__61070);
var top_data = map__61070__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61070__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__61071 = phase;
var G__61071__$1 = (((G__61071 instanceof cljs.core.Keyword))?G__61071.fqn:null);
switch (G__61071__$1) {
case "read-source":
var map__61072 = data;
var map__61072__$1 = cljs.core.__destructure_map(map__61072);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61072__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61072__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__61073 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__61073__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61073,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__61073);
var G__61073__$2 = (cljs.core.truth_((function (){var fexpr__61074 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__61074.cljs$core$IFn$_invoke$arity$1 ? fexpr__61074.cljs$core$IFn$_invoke$arity$1(source) : fexpr__61074.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__61073__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__61073__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61073__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__61073__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__61075 = top_data;
var G__61075__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61075,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__61075);
var G__61075__$2 = (cljs.core.truth_((function (){var fexpr__61076 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__61076.cljs$core$IFn$_invoke$arity$1 ? fexpr__61076.cljs$core$IFn$_invoke$arity$1(source) : fexpr__61076.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__61075__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__61075__$1);
var G__61075__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61075__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__61075__$2);
var G__61075__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61075__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__61075__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61075__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__61075__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__61077 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61077,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61077,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61077,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61077,(3),null);
var G__61080 = top_data;
var G__61080__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61080,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__61080);
var G__61080__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61080__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__61080__$1);
var G__61080__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61080__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__61080__$2);
var G__61080__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61080__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__61080__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61080__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__61080__$4;
}

break;
case "execution":
var vec__61081 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61081,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61081,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61081,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61081,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__61066_SHARP_){
var or__4253__auto__ = (p1__61066_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__61086 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__61086.cljs$core$IFn$_invoke$arity$1 ? fexpr__61086.cljs$core$IFn$_invoke$arity$1(p1__61066_SHARP_) : fexpr__61086.call(null,p1__61066_SHARP_));
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61071__$1)].join('')));

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
var G__61096 = phase;
var G__61096__$1 = (((G__61096 instanceof cljs.core.Keyword))?G__61096.fqn:null);
switch (G__61096__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__61097 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__61098 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__61099 = loc;
var G__61100 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__61102_61236 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__61103_61237 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__61104_61238 = true;
var _STAR_print_fn_STAR__temp_val__61105_61239 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__61104_61238);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__61105_61239);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__61092_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__61092_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__61103_61237);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__61102_61236);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__61097,G__61098,G__61099,G__61100) : format.call(null,G__61097,G__61098,G__61099,G__61100));

break;
case "macroexpansion":
var G__61106 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__61107 = cause_type;
var G__61108 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__61109 = loc;
var G__61110 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__61106,G__61107,G__61108,G__61109,G__61110) : format.call(null,G__61106,G__61107,G__61108,G__61109,G__61110));

break;
case "compile-syntax-check":
var G__61111 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__61112 = cause_type;
var G__61113 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__61114 = loc;
var G__61115 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__61111,G__61112,G__61113,G__61114,G__61115) : format.call(null,G__61111,G__61112,G__61113,G__61114,G__61115));

break;
case "compilation":
var G__61116 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__61117 = cause_type;
var G__61118 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__61119 = loc;
var G__61120 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__61116,G__61117,G__61118,G__61119,G__61120) : format.call(null,G__61116,G__61117,G__61118,G__61119,G__61120));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__61121 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__61122 = symbol;
var G__61123 = loc;
var G__61124 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__61125_61248 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__61126_61249 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__61127_61250 = true;
var _STAR_print_fn_STAR__temp_val__61128_61251 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__61127_61250);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__61128_61251);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__61093_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__61093_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__61126_61249);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__61125_61248);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__61121,G__61122,G__61123,G__61124) : format.call(null,G__61121,G__61122,G__61123,G__61124));
} else {
var G__61129 = "Execution error%s at %s(%s).\n%s\n";
var G__61130 = cause_type;
var G__61131 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__61132 = loc;
var G__61133 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__61129,G__61130,G__61131,G__61132,G__61133) : format.call(null,G__61129,G__61130,G__61131,G__61132,G__61133));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61096__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
