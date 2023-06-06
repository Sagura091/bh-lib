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

var malli$registry$Registry$_schema$dyn_52640 = (function (this$,type){
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
return malli$registry$Registry$_schema$dyn_52640(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_52641 = (function (this$){
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
return malli$registry$Registry$_schemas$dyn_52641(this$);
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
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry52516 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry52516 = (function (m,fm,meta52517){
this.m = m;
this.fm = fm;
this.meta52517 = meta52517;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52516.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52518,meta52517__$1){
var self__ = this;
var _52518__$1 = this;
return (new malli.registry.t_malli$registry52516(self__.m,self__.fm,meta52517__$1));
}));

(malli.registry.t_malli$registry52516.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52518){
var self__ = this;
var _52518__$1 = this;
return self__.meta52517;
}));

(malli.registry.t_malli$registry52516.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52516.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry52516.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry52516.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta52517","meta52517",1760149265,null)], null);
}));

(malli.registry.t_malli$registry52516.cljs$lang$type = true);

(malli.registry.t_malli$registry52516.cljs$lang$ctorStr = "malli.registry/t_malli$registry52516");

(malli.registry.t_malli$registry52516.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"malli.registry/t_malli$registry52516");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52516.
 */
malli.registry.__GT_t_malli$registry52516 = (function malli$registry$fast_registry_$___GT_t_malli$registry52516(m__$1,fm__$1,meta52517){
return (new malli.registry.t_malli$registry52516(m__$1,fm__$1,meta52517));
});

}

return (new malli.registry.t_malli$registry52516(m,fm,cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.simple_registry = (function malli$registry$simple_registry(m){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry52544 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry52544 = (function (m,meta52545){
this.m = m;
this.meta52545 = meta52545;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52546,meta52545__$1){
var self__ = this;
var _52546__$1 = this;
return (new malli.registry.t_malli$registry52544(self__.m,meta52545__$1));
}));

(malli.registry.t_malli$registry52544.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52546){
var self__ = this;
var _52546__$1 = this;
return self__.meta52545;
}));

(malli.registry.t_malli$registry52544.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52544.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return (self__.m.cljs$core$IFn$_invoke$arity$1 ? self__.m.cljs$core$IFn$_invoke$arity$1(type) : self__.m.call(null,type));
}));

(malli.registry.t_malli$registry52544.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry52544.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta52545","meta52545",-1120541108,null)], null);
}));

(malli.registry.t_malli$registry52544.cljs$lang$type = true);

(malli.registry.t_malli$registry52544.cljs$lang$ctorStr = "malli.registry/t_malli$registry52544");

(malli.registry.t_malli$registry52544.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"malli.registry/t_malli$registry52544");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52544.
 */
malli.registry.__GT_t_malli$registry52544 = (function malli$registry$simple_registry_$___GT_t_malli$registry52544(m__$1,meta52545){
return (new malli.registry.t_malli$registry52544(m__$1,meta52545));
});

}

return (new malli.registry.t_malli$registry52544(m,cljs.core.PersistentArrayMap.EMPTY));
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
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry52569 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry52569 = (function (meta52570){
this.meta52570 = meta52570;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52569.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52571,meta52570__$1){
var self__ = this;
var _52571__$1 = this;
return (new malli.registry.t_malli$registry52569(meta52570__$1));
}));

(malli.registry.t_malli$registry52569.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52571){
var self__ = this;
var _52571__$1 = this;
return self__.meta52570;
}));

(malli.registry.t_malli$registry52569.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52569.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry52569.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry52569.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta52570","meta52570",-20567015,null)], null);
}));

(malli.registry.t_malli$registry52569.cljs$lang$type = true);

(malli.registry.t_malli$registry52569.cljs$lang$ctorStr = "malli.registry/t_malli$registry52569");

(malli.registry.t_malli$registry52569.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"malli.registry/t_malli$registry52569");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52569.
 */
malli.registry.__GT_t_malli$registry52569 = (function malli$registry$custom_default_registry_$___GT_t_malli$registry52569(meta52570){
return (new malli.registry.t_malli$registry52569(meta52570));
});

}

return (new malli.registry.t_malli$registry52569(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__4870__auto__ = [];
var len__4864__auto___52675 = arguments.length;
var i__4865__auto___52676 = (0);
while(true){
if((i__4865__auto___52676 < len__4864__auto___52675)){
args__4870__auto__.push((arguments[i__4865__auto___52676]));

var G__52677 = (i__4865__auto___52676 + (1));
i__4865__auto___52676 = G__52677;
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
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry52586 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry52586 = (function (_QMARK_registries,registries,meta52587){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta52587 = meta52587;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52586.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52588,meta52587__$1){
var self__ = this;
var _52588__$1 = this;
return (new malli.registry.t_malli$registry52586(self__._QMARK_registries,self__.registries,meta52587__$1));
}));

(malli.registry.t_malli$registry52586.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52588){
var self__ = this;
var _52588__$1 = this;
return self__.meta52587;
}));

(malli.registry.t_malli$registry52586.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52586.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__52578_SHARP_){
return malli.registry._schema(p1__52578_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry52586.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry52586.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta52587","meta52587",717083085,null)], null);
}));

(malli.registry.t_malli$registry52586.cljs$lang$type = true);

(malli.registry.t_malli$registry52586.cljs$lang$ctorStr = "malli.registry/t_malli$registry52586");

(malli.registry.t_malli$registry52586.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"malli.registry/t_malli$registry52586");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52586.
 */
malli.registry.__GT_t_malli$registry52586 = (function malli$registry$__GT_t_malli$registry52586(_QMARK_registries__$1,registries__$1,meta52587){
return (new malli.registry.t_malli$registry52586(_QMARK_registries__$1,registries__$1,meta52587));
});

}

return (new malli.registry.t_malli$registry52586(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq52579){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52579));
}));

malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry52597 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry52597 = (function (db,meta52598){
this.db = db;
this.meta52598 = meta52598;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52597.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52599,meta52598__$1){
var self__ = this;
var _52599__$1 = this;
return (new malli.registry.t_malli$registry52597(self__.db,meta52598__$1));
}));

(malli.registry.t_malli$registry52597.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52599){
var self__ = this;
var _52599__$1 = this;
return self__.meta52598;
}));

(malli.registry.t_malli$registry52597.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52597.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry52597.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry52597.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta52598","meta52598",-377935612,null)], null);
}));

(malli.registry.t_malli$registry52597.cljs$lang$type = true);

(malli.registry.t_malli$registry52597.cljs$lang$ctorStr = "malli.registry/t_malli$registry52597");

(malli.registry.t_malli$registry52597.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"malli.registry/t_malli$registry52597");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52597.
 */
malli.registry.__GT_t_malli$registry52597 = (function malli$registry$mutable_registry_$___GT_t_malli$registry52597(db__$1,meta52598){
return (new malli.registry.t_malli$registry52597(db__$1,meta52598));
});

}

return (new malli.registry.t_malli$registry52597(db,cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry52601 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry52601 = (function (meta52602){
this.meta52602 = meta52602;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52601.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52603,meta52602__$1){
var self__ = this;
var _52603__$1 = this;
return (new malli.registry.t_malli$registry52601(meta52602__$1));
}));

(malli.registry.t_malli$registry52601.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52603){
var self__ = this;
var _52603__$1 = this;
return self__.meta52602;
}));

(malli.registry.t_malli$registry52601.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52601.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry52601.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry52601.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta52602","meta52602",440277060,null)], null);
}));

(malli.registry.t_malli$registry52601.cljs$lang$type = true);

(malli.registry.t_malli$registry52601.cljs$lang$ctorStr = "malli.registry/t_malli$registry52601");

(malli.registry.t_malli$registry52601.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"malli.registry/t_malli$registry52601");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52601.
 */
malli.registry.__GT_t_malli$registry52601 = (function malli$registry$dynamic_registry_$___GT_t_malli$registry52601(meta52602){
return (new malli.registry.t_malli$registry52601(meta52602));
});

}

return (new malli.registry.t_malli$registry52601(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(function (){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry52616 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry52616 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta52617){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta52617 = meta52617;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52616.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52618,meta52617__$1){
var self__ = this;
var _52618__$1 = this;
return (new malli.registry.t_malli$registry52616(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta52617__$1));
}));

(malli.registry.t_malli$registry52616.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52618){
var self__ = this;
var _52618__$1 = this;
return self__.meta52617;
}));

(malli.registry.t_malli$registry52616.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52616.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__4253__auto__ = (function (){var fexpr__52620 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__52620.cljs$core$IFn$_invoke$arity$1 ? fexpr__52620.cljs$core$IFn$_invoke$arity$1(name) : fexpr__52620.call(null,name));
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var temp__5753__auto__ = (function (){var G__52622 = name;
var G__52623 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__52622,G__52623) : self__.provider.call(null,G__52622,G__52623));
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

(malli.registry.t_malli$registry52616.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry52616.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta52617","meta52617",-1428510576,null)], null);
}));

(malli.registry.t_malli$registry52616.cljs$lang$type = true);

(malli.registry.t_malli$registry52616.cljs$lang$ctorStr = "malli.registry/t_malli$registry52616");

(malli.registry.t_malli$registry52616.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"malli.registry/t_malli$registry52616");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52616.
 */
malli.registry.__GT_t_malli$registry52616 = (function malli$registry$lazy_registry_$___GT_t_malli$registry52616(default_registry__$1,provider__$1,cache_STAR___$1,registry_STAR___$1,meta52617){
return (new malli.registry.t_malli$registry52616(default_registry__$1,provider__$1,cache_STAR___$1,registry_STAR___$1,meta52617));
});

}

return (new malli.registry.t_malli$registry52616(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY));
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
