goog.provide('malli.registry');
/**
 * @define {string}
 */
malli.registry.mode = goog.define("malli.registry.mode","default");
/**
 * @define {string}
 */
malli.registry.type = goog.define("malli.registry.type","default");

/**
 * @interface
 */
malli.registry.Registry = function(){};

var malli$registry$Registry$_schema$dyn_52555 = (function (this$,type){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (malli.registry._schema[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,type) : m__4551__auto__.call(null,this$,type));
} else {
var m__4549__auto__ = (malli.registry._schema["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,type) : m__4549__auto__.call(null,this$,type));
} else {
throw cljs.core.missing_protocol("Registry.-schema",this$);
}
}
});
/**
 * returns the schema from a registry
 */
malli.registry._schema = (function malli$registry$_schema(this$,type){
if((((!((this$ == null)))) && ((!((this$.malli$registry$Registry$_schema$arity$2 == null)))))){
return this$.malli$registry$Registry$_schema$arity$2(this$,type);
} else {
return malli$registry$Registry$_schema$dyn_52555(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_52557 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (malli.registry._schemas[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (malli.registry._schemas["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Registry.-schemas",this$);
}
}
});
/**
 * returns all schemas from a registry
 */
malli.registry._schemas = (function malli$registry$_schemas(this$){
if((((!((this$ == null)))) && ((!((this$.malli$registry$Registry$_schemas$arity$1 == null)))))){
return this$.malli$registry$Registry$_schemas$arity$1(this$);
} else {
return malli$registry$Registry$_schemas$dyn_52557(this$);
}
});

malli.registry.registry_QMARK_ = (function malli$registry$registry_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.malli$registry$Registry$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});
malli.registry.fast_registry = (function malli$registry$fast_registry(m){
var fm = m;
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry52430 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry52430 = (function (m,fm,meta52431){
this.m = m;
this.fm = fm;
this.meta52431 = meta52431;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52430.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52432,meta52431__$1){
var self__ = this;
var _52432__$1 = this;
return (new malli.registry.t_malli$registry52430(self__.m,self__.fm,meta52431__$1));
}));

(malli.registry.t_malli$registry52430.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52432){
var self__ = this;
var _52432__$1 = this;
return self__.meta52431;
}));

(malli.registry.t_malli$registry52430.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52430.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry52430.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry52430.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta52431","meta52431",-1499446697,null)], null);
}));

(malli.registry.t_malli$registry52430.cljs$lang$type = true);

(malli.registry.t_malli$registry52430.cljs$lang$ctorStr = "malli.registry/t_malli$registry52430");

(malli.registry.t_malli$registry52430.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"malli.registry/t_malli$registry52430");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52430.
 */
malli.registry.__GT_t_malli$registry52430 = (function malli$registry$fast_registry_$___GT_t_malli$registry52430(m__$1,fm__$1,meta52431){
return (new malli.registry.t_malli$registry52430(m__$1,fm__$1,meta52431));
});

}

return (new malli.registry.t_malli$registry52430(m,fm,cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.simple_registry = (function malli$registry$simple_registry(m){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry52451 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry52451 = (function (m,meta52452){
this.m = m;
this.meta52452 = meta52452;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52451.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52453,meta52452__$1){
var self__ = this;
var _52453__$1 = this;
return (new malli.registry.t_malli$registry52451(self__.m,meta52452__$1));
}));

(malli.registry.t_malli$registry52451.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52453){
var self__ = this;
var _52453__$1 = this;
return self__.meta52452;
}));

(malli.registry.t_malli$registry52451.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52451.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return (self__.m.cljs$core$IFn$_invoke$arity$1 ? self__.m.cljs$core$IFn$_invoke$arity$1(type) : self__.m.call(null,type));
}));

(malli.registry.t_malli$registry52451.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry52451.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta52452","meta52452",-103777070,null)], null);
}));

(malli.registry.t_malli$registry52451.cljs$lang$type = true);

(malli.registry.t_malli$registry52451.cljs$lang$ctorStr = "malli.registry/t_malli$registry52451");

(malli.registry.t_malli$registry52451.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"malli.registry/t_malli$registry52451");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52451.
 */
malli.registry.__GT_t_malli$registry52451 = (function malli$registry$simple_registry_$___GT_t_malli$registry52451(m__$1,meta52452){
return (new malli.registry.t_malli$registry52451(m__$1,meta52452));
});

}

return (new malli.registry.t_malli$registry52451(m,cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.registry = (function malli$registry$registry(_QMARK_registry){
if((_QMARK_registry == null)){
return null;
} else {
if(malli.registry.registry_QMARK_(_QMARK_registry)){
return _QMARK_registry;
} else {
if(cljs.core.map_QMARK_(_QMARK_registry)){
return malli.registry.simple_registry(_QMARK_registry);
} else {
if((((!((_QMARK_registry == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === _QMARK_registry.malli$registry$Registry$))))?true:(((!_QMARK_registry.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(malli.registry.Registry,_QMARK_registry):false)):cljs.core.native_satisfies_QMARK_(malli.registry.Registry,_QMARK_registry))){
return _QMARK_registry;
} else {
return null;
}
}
}
}
});
malli.registry.registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(malli.registry.simple_registry(cljs.core.PersistentArrayMap.EMPTY));
malli.registry.set_default_registry_BANG_ = (function malli$registry$set_default_registry_BANG_(_QMARK_registry){
if((!((malli.registry.mode === "strict")))){
return cljs.core.reset_BANG_(malli.registry.registry_STAR_,malli.registry.registry(_QMARK_registry));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("can't set default registry, invalid mode",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mode","mode",654403691),malli.registry.mode,new cljs.core.Keyword(null,"type","type",1174270348),malli.registry.type], null));
}
});
malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry52464 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry52464 = (function (meta52465){
this.meta52465 = meta52465;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52464.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52466,meta52465__$1){
var self__ = this;
var _52466__$1 = this;
return (new malli.registry.t_malli$registry52464(meta52465__$1));
}));

(malli.registry.t_malli$registry52464.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52466){
var self__ = this;
var _52466__$1 = this;
return self__.meta52465;
}));

(malli.registry.t_malli$registry52464.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52464.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry52464.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry52464.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta52465","meta52465",1925718160,null)], null);
}));

(malli.registry.t_malli$registry52464.cljs$lang$type = true);

(malli.registry.t_malli$registry52464.cljs$lang$ctorStr = "malli.registry/t_malli$registry52464");

(malli.registry.t_malli$registry52464.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"malli.registry/t_malli$registry52464");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52464.
 */
malli.registry.__GT_t_malli$registry52464 = (function malli$registry$custom_default_registry_$___GT_t_malli$registry52464(meta52465){
return (new malli.registry.t_malli$registry52464(meta52465));
});

}

return (new malli.registry.t_malli$registry52464(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__4870__auto__ = [];
var len__4864__auto___52567 = arguments.length;
var i__4865__auto___52568 = (0);
while(true){
if((i__4865__auto___52568 < len__4864__auto___52567)){
args__4870__auto__.push((arguments[i__4865__auto___52568]));

var G__52572 = (i__4865__auto___52568 + (1));
i__4865__auto___52568 = G__52572;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic = (function (_QMARK_registries){
var registries = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(malli.registry.registry,_QMARK_registries);
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry52483 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry52483 = (function (_QMARK_registries,registries,meta52484){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta52484 = meta52484;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52483.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52485,meta52484__$1){
var self__ = this;
var _52485__$1 = this;
return (new malli.registry.t_malli$registry52483(self__._QMARK_registries,self__.registries,meta52484__$1));
}));

(malli.registry.t_malli$registry52483.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52485){
var self__ = this;
var _52485__$1 = this;
return self__.meta52484;
}));

(malli.registry.t_malli$registry52483.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52483.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__52477_SHARP_){
return malli.registry._schema(p1__52477_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry52483.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry52483.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta52484","meta52484",1541516832,null)], null);
}));

(malli.registry.t_malli$registry52483.cljs$lang$type = true);

(malli.registry.t_malli$registry52483.cljs$lang$ctorStr = "malli.registry/t_malli$registry52483");

(malli.registry.t_malli$registry52483.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"malli.registry/t_malli$registry52483");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52483.
 */
malli.registry.__GT_t_malli$registry52483 = (function malli$registry$__GT_t_malli$registry52483(_QMARK_registries__$1,registries__$1,meta52484){
return (new malli.registry.t_malli$registry52483(_QMARK_registries__$1,registries__$1,meta52484));
});

}

return (new malli.registry.t_malli$registry52483(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq52478){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52478));
}));

malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry52493 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry52493 = (function (db,meta52494){
this.db = db;
this.meta52494 = meta52494;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52493.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52495,meta52494__$1){
var self__ = this;
var _52495__$1 = this;
return (new malli.registry.t_malli$registry52493(self__.db,meta52494__$1));
}));

(malli.registry.t_malli$registry52493.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52495){
var self__ = this;
var _52495__$1 = this;
return self__.meta52494;
}));

(malli.registry.t_malli$registry52493.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52493.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry52493.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry52493.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta52494","meta52494",-1372302757,null)], null);
}));

(malli.registry.t_malli$registry52493.cljs$lang$type = true);

(malli.registry.t_malli$registry52493.cljs$lang$ctorStr = "malli.registry/t_malli$registry52493");

(malli.registry.t_malli$registry52493.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"malli.registry/t_malli$registry52493");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52493.
 */
malli.registry.__GT_t_malli$registry52493 = (function malli$registry$mutable_registry_$___GT_t_malli$registry52493(db__$1,meta52494){
return (new malli.registry.t_malli$registry52493(db__$1,meta52494));
});

}

return (new malli.registry.t_malli$registry52493(db,cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry52504 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry52504 = (function (meta52505){
this.meta52505 = meta52505;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52504.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52506,meta52505__$1){
var self__ = this;
var _52506__$1 = this;
return (new malli.registry.t_malli$registry52504(meta52505__$1));
}));

(malli.registry.t_malli$registry52504.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52506){
var self__ = this;
var _52506__$1 = this;
return self__.meta52505;
}));

(malli.registry.t_malli$registry52504.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52504.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry52504.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry52504.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta52505","meta52505",-1428660552,null)], null);
}));

(malli.registry.t_malli$registry52504.cljs$lang$type = true);

(malli.registry.t_malli$registry52504.cljs$lang$ctorStr = "malli.registry/t_malli$registry52504");

(malli.registry.t_malli$registry52504.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"malli.registry/t_malli$registry52504");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52504.
 */
malli.registry.__GT_t_malli$registry52504 = (function malli$registry$dynamic_registry_$___GT_t_malli$registry52504(meta52505){
return (new malli.registry.t_malli$registry52504(meta52505));
});

}

return (new malli.registry.t_malli$registry52504(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(function (){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry52518 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry52518 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta52519){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta52519 = meta52519;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52518.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52520,meta52519__$1){
var self__ = this;
var _52520__$1 = this;
return (new malli.registry.t_malli$registry52518(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta52519__$1));
}));

(malli.registry.t_malli$registry52518.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52520){
var self__ = this;
var _52520__$1 = this;
return self__.meta52519;
}));

(malli.registry.t_malli$registry52518.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52518.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__4253__auto__ = (function (){var fexpr__52526 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__52526.cljs$core$IFn$_invoke$arity$1 ? fexpr__52526.cljs$core$IFn$_invoke$arity$1(name) : fexpr__52526.call(null,name));
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var temp__5753__auto__ = (function (){var G__52527 = name;
var G__52528 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__52527,G__52528) : self__.provider.call(null,G__52527,G__52528));
})();
if(cljs.core.truth_(temp__5753__auto__)){
var schema = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cache_STAR_,cljs.core.assoc,name,schema);

return schema;
} else {
return null;
}
}
}));

(malli.registry.t_malli$registry52518.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry52518.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta52519","meta52519",920797100,null)], null);
}));

(malli.registry.t_malli$registry52518.cljs$lang$type = true);

(malli.registry.t_malli$registry52518.cljs$lang$ctorStr = "malli.registry/t_malli$registry52518");

(malli.registry.t_malli$registry52518.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"malli.registry/t_malli$registry52518");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52518.
 */
malli.registry.__GT_t_malli$registry52518 = (function malli$registry$lazy_registry_$___GT_t_malli$registry52518(default_registry__$1,provider__$1,cache_STAR___$1,registry_STAR___$1,meta52519){
return (new malli.registry.t_malli$registry52518(default_registry__$1,provider__$1,cache_STAR___$1,registry_STAR___$1,meta52519));
});

}

return (new malli.registry.t_malli$registry52518(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY));
})()
], 0)));
});
/**
 * finds a schema from a registry
 */
malli.registry.schema = (function malli$registry$schema(registry,type){
return malli.registry._schema(registry,type);
});
/**
 * finds all schemas from a registry
 */
malli.registry.schemas = (function malli$registry$schemas(registry){
return malli.registry._schemas(registry);
});

//# sourceMappingURL=malli.registry.js.map
