goog.provide('day8.re_frame_10x.tools.string');
/**
 * Return a pluralized phrase, appending an s to the singular form if no plural is provided.
 *   For example:
 *   (pluralize 5 "month") => "5 months"
 *   (pluralize 1 "month") => "1 month"
 *   (pluralize 1 "radius" "radii") => "1 radius"
 *   (pluralize 9 "radius" "radii") => "9 radii"
 *   From https://github.com/flatland/useful/blob/194950/src/flatland/useful/string.clj#L25-L33
 */
day8.re_frame_10x.tools.string.pluralize = (function day8$re_frame_10x$tools$string$pluralize(var_args){
var args__4870__auto__ = [];
var len__4864__auto___55906 = arguments.length;
var i__4865__auto___55907 = (0);
while(true){
if((i__4865__auto___55907 < len__4864__auto___55906)){
args__4870__auto__.push((arguments[i__4865__auto___55907]));

var G__55908 = (i__4865__auto___55907 + (1));
i__4865__auto___55907 = G__55908;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.tools.string.pluralize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(day8.re_frame_10x.tools.string.pluralize.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__55891){
var vec__55892 = p__55891;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55892,(0),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num))?singular:(function (){var or__4253__auto__ = plural;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
})()))].join('');
}));

(day8.re_frame_10x.tools.string.pluralize.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.tools.string.pluralize.cljs$lang$applyTo = (function (seq55881){
var G__55882 = cljs.core.first(seq55881);
var seq55881__$1 = cljs.core.next(seq55881);
var G__55883 = cljs.core.first(seq55881__$1);
var seq55881__$2 = cljs.core.next(seq55881__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55882,G__55883,seq55881__$2);
}));

/**
 * Same as pluralize, but doesn't prepend the number to the pluralized string.
 */
day8.re_frame_10x.tools.string.pluralize_ = (function day8$re_frame_10x$tools$string$pluralize_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___55909 = arguments.length;
var i__4865__auto___55910 = (0);
while(true){
if((i__4865__auto___55910 < len__4864__auto___55909)){
args__4870__auto__.push((arguments[i__4865__auto___55910]));

var G__55911 = (i__4865__auto___55910 + (1));
i__4865__auto___55910 = G__55911;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.tools.string.pluralize_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(day8.re_frame_10x.tools.string.pluralize_.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__55902){
var vec__55903 = p__55902;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55903,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num)){
return singular;
} else {
var or__4253__auto__ = plural;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
}
}));

(day8.re_frame_10x.tools.string.pluralize_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.tools.string.pluralize_.cljs$lang$applyTo = (function (seq55899){
var G__55900 = cljs.core.first(seq55899);
var seq55899__$1 = cljs.core.next(seq55899);
var G__55901 = cljs.core.first(seq55899__$1);
var seq55899__$2 = cljs.core.next(seq55899__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55900,G__55901,seq55899__$2);
}));


//# sourceMappingURL=day8.re_frame_10x.tools.string.js.map
