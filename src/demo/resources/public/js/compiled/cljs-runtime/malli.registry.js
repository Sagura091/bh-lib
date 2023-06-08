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

var malli$registry$Registry$_schema$dyn_74397 = (function (this$,type){
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
return malli$registry$Registry$_schema$dyn_74397(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_74403 = (function (this$){
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
return malli$registry$Registry$_schemas$dyn_74403(this$);
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
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry74265 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry74265 = (function (m,fm,meta74266){
this.m = m;
this.fm = fm;
this.meta74266 = meta74266;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry74265.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74267,meta74266__$1){
var self__ = this;
var _74267__$1 = this;
return (new malli.registry.t_malli$registry74265(self__.m,self__.fm,meta74266__$1));
}));

(malli.registry.t_malli$registry74265.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74267){
var self__ = this;
var _74267__$1 = this;
return self__.meta74266;
}));

(malli.registry.t_malli$registry74265.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry74265.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry74265.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry74265.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta74266","meta74266",635495710,null)], null);
}));

(malli.registry.t_malli$registry74265.cljs$lang$type = true);

(malli.registry.t_malli$registry74265.cljs$lang$ctorStr = "malli.registry/t_malli$registry74265");

(malli.registry.t_malli$registry74265.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"malli.registry/t_malli$registry74265");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry74265.
 */
malli.registry.__GT_t_malli$registry74265 = (function malli$registry$fast_registry_$___GT_t_malli$registry74265(m__$1,fm__$1,meta74266){
return (new malli.registry.t_malli$registry74265(m__$1,fm__$1,meta74266));
});

}

return (new malli.registry.t_malli$registry74265(m,fm,cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.simple_registry = (function malli$registry$simple_registry(m){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry74274 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry74274 = (function (m,meta74275){
this.m = m;
this.meta74275 = meta74275;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry74274.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74276,meta74275__$1){
var self__ = this;
var _74276__$1 = this;
return (new malli.registry.t_malli$registry74274(self__.m,meta74275__$1));
}));

(malli.registry.t_malli$registry74274.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74276){
var self__ = this;
var _74276__$1 = this;
return self__.meta74275;
}));

(malli.registry.t_malli$registry74274.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry74274.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return (self__.m.cljs$core$IFn$_invoke$arity$1 ? self__.m.cljs$core$IFn$_invoke$arity$1(type) : self__.m.call(null,type));
}));

(malli.registry.t_malli$registry74274.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry74274.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta74275","meta74275",236213568,null)], null);
}));

(malli.registry.t_malli$registry74274.cljs$lang$type = true);

(malli.registry.t_malli$registry74274.cljs$lang$ctorStr = "malli.registry/t_malli$registry74274");

(malli.registry.t_malli$registry74274.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"malli.registry/t_malli$registry74274");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry74274.
 */
malli.registry.__GT_t_malli$registry74274 = (function malli$registry$simple_registry_$___GT_t_malli$registry74274(m__$1,meta74275){
return (new malli.registry.t_malli$registry74274(m__$1,meta74275));
});

}

return (new malli.registry.t_malli$registry74274(m,cljs.core.PersistentArrayMap.EMPTY));
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
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry74320 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry74320 = (function (meta74321){
this.meta74321 = meta74321;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry74320.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74322,meta74321__$1){
var self__ = this;
var _74322__$1 = this;
return (new malli.registry.t_malli$registry74320(meta74321__$1));
}));

(malli.registry.t_malli$registry74320.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74322){
var self__ = this;
var _74322__$1 = this;
return self__.meta74321;
}));

(malli.registry.t_malli$registry74320.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry74320.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry74320.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry74320.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta74321","meta74321",-2135892105,null)], null);
}));

(malli.registry.t_malli$registry74320.cljs$lang$type = true);

(malli.registry.t_malli$registry74320.cljs$lang$ctorStr = "malli.registry/t_malli$registry74320");

(malli.registry.t_malli$registry74320.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"malli.registry/t_malli$registry74320");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry74320.
 */
malli.registry.__GT_t_malli$registry74320 = (function malli$registry$custom_default_registry_$___GT_t_malli$registry74320(meta74321){
return (new malli.registry.t_malli$registry74320(meta74321));
});

}

return (new malli.registry.t_malli$registry74320(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__4870__auto__ = [];
var len__4864__auto___74418 = arguments.length;
var i__4865__auto___74419 = (0);
while(true){
if((i__4865__auto___74419 < len__4864__auto___74418)){
args__4870__auto__.push((arguments[i__4865__auto___74419]));

var G__74420 = (i__4865__auto___74419 + (1));
i__4865__auto___74419 = G__74420;
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
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry74332 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry74332 = (function (_QMARK_registries,registries,meta74333){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta74333 = meta74333;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry74332.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74334,meta74333__$1){
var self__ = this;
var _74334__$1 = this;
return (new malli.registry.t_malli$registry74332(self__._QMARK_registries,self__.registries,meta74333__$1));
}));

(malli.registry.t_malli$registry74332.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74334){
var self__ = this;
var _74334__$1 = this;
return self__.meta74333;
}));

(malli.registry.t_malli$registry74332.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry74332.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__74327_SHARP_){
return malli.registry._schema(p1__74327_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry74332.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry74332.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta74333","meta74333",-1841634627,null)], null);
}));

(malli.registry.t_malli$registry74332.cljs$lang$type = true);

(malli.registry.t_malli$registry74332.cljs$lang$ctorStr = "malli.registry/t_malli$registry74332");

(malli.registry.t_malli$registry74332.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"malli.registry/t_malli$registry74332");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry74332.
 */
malli.registry.__GT_t_malli$registry74332 = (function malli$registry$__GT_t_malli$registry74332(_QMARK_registries__$1,registries__$1,meta74333){
return (new malli.registry.t_malli$registry74332(_QMARK_registries__$1,registries__$1,meta74333));
});

}

return (new malli.registry.t_malli$registry74332(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq74328){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq74328));
}));

malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry74338 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry74338 = (function (db,meta74339){
this.db = db;
this.meta74339 = meta74339;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry74338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74340,meta74339__$1){
var self__ = this;
var _74340__$1 = this;
return (new malli.registry.t_malli$registry74338(self__.db,meta74339__$1));
}));

(malli.registry.t_malli$registry74338.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74340){
var self__ = this;
var _74340__$1 = this;
return self__.meta74339;
}));

(malli.registry.t_malli$registry74338.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry74338.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry74338.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry74338.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta74339","meta74339",1366950898,null)], null);
}));

(malli.registry.t_malli$registry74338.cljs$lang$type = true);

(malli.registry.t_malli$registry74338.cljs$lang$ctorStr = "malli.registry/t_malli$registry74338");

(malli.registry.t_malli$registry74338.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"malli.registry/t_malli$registry74338");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry74338.
 */
malli.registry.__GT_t_malli$registry74338 = (function malli$registry$mutable_registry_$___GT_t_malli$registry74338(db__$1,meta74339){
return (new malli.registry.t_malli$registry74338(db__$1,meta74339));
});

}

return (new malli.registry.t_malli$registry74338(db,cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry74348 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry74348 = (function (meta74349){
this.meta74349 = meta74349;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry74348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74350,meta74349__$1){
var self__ = this;
var _74350__$1 = this;
return (new malli.registry.t_malli$registry74348(meta74349__$1));
}));

(malli.registry.t_malli$registry74348.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74350){
var self__ = this;
var _74350__$1 = this;
return self__.meta74349;
}));

(malli.registry.t_malli$registry74348.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry74348.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry74348.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry74348.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta74349","meta74349",-1092465432,null)], null);
}));

(malli.registry.t_malli$registry74348.cljs$lang$type = true);

(malli.registry.t_malli$registry74348.cljs$lang$ctorStr = "malli.registry/t_malli$registry74348");

(malli.registry.t_malli$registry74348.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"malli.registry/t_malli$registry74348");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry74348.
 */
malli.registry.__GT_t_malli$registry74348 = (function malli$registry$dynamic_registry_$___GT_t_malli$registry74348(meta74349){
return (new malli.registry.t_malli$registry74348(meta74349));
});

}

return (new malli.registry.t_malli$registry74348(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(function (){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry74363 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry74363 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta74364){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta74364 = meta74364;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry74363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74365,meta74364__$1){
var self__ = this;
var _74365__$1 = this;
return (new malli.registry.t_malli$registry74363(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta74364__$1));
}));

(malli.registry.t_malli$registry74363.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74365){
var self__ = this;
var _74365__$1 = this;
return self__.meta74364;
}));

(malli.registry.t_malli$registry74363.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry74363.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__4253__auto__ = (function (){var fexpr__74376 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__74376.cljs$core$IFn$_invoke$arity$1 ? fexpr__74376.cljs$core$IFn$_invoke$arity$1(name) : fexpr__74376.call(null,name));
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var temp__5753__auto__ = (function (){var G__74377 = name;
var G__74378 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__74377,G__74378) : self__.provider.call(null,G__74377,G__74378));
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

(malli.registry.t_malli$registry74363.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry74363.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta74364","meta74364",1463450470,null)], null);
}));

(malli.registry.t_malli$registry74363.cljs$lang$type = true);

(malli.registry.t_malli$registry74363.cljs$lang$ctorStr = "malli.registry/t_malli$registry74363");

(malli.registry.t_malli$registry74363.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"malli.registry/t_malli$registry74363");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry74363.
 */
malli.registry.__GT_t_malli$registry74363 = (function malli$registry$lazy_registry_$___GT_t_malli$registry74363(default_registry__$1,provider__$1,cache_STAR___$1,registry_STAR___$1,meta74364){
return (new malli.registry.t_malli$registry74363(default_registry__$1,provider__$1,cache_STAR___$1,registry_STAR___$1,meta74364));
});

}

return (new malli.registry.t_malli$registry74363(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY));
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
