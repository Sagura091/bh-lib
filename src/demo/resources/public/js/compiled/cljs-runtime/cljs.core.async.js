goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__41097 = arguments.length;
switch (G__41097) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41100 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41100 = (function (f,blockable,meta41101){
this.f = f;
this.blockable = blockable;
this.meta41101 = meta41101;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41100.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41102,meta41101__$1){
var self__ = this;
var _41102__$1 = this;
return (new cljs.core.async.t_cljs$core$async41100(self__.f,self__.blockable,meta41101__$1));
}));

(cljs.core.async.t_cljs$core$async41100.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41102){
var self__ = this;
var _41102__$1 = this;
return self__.meta41101;
}));

(cljs.core.async.t_cljs$core$async41100.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41100.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async41100.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async41100.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async41100.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta41101","meta41101",1953034301,null)], null);
}));

(cljs.core.async.t_cljs$core$async41100.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41100.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41100");

(cljs.core.async.t_cljs$core$async41100.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async41100");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41100.
 */
cljs.core.async.__GT_t_cljs$core$async41100 = (function cljs$core$async$__GT_t_cljs$core$async41100(f__$1,blockable__$1,meta41101){
return (new cljs.core.async.t_cljs$core$async41100(f__$1,blockable__$1,meta41101));
});

}

return (new cljs.core.async.t_cljs$core$async41100(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__41115 = arguments.length;
switch (G__41115) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__41119 = arguments.length;
switch (G__41119) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__41125 = arguments.length;
switch (G__41125) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_43157 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_43157) : fn1.call(null,val_43157));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_43157) : fn1.call(null,val_43157));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__41132 = arguments.length;
switch (G__41132) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___43159 = n;
var x_43160 = (0);
while(true){
if((x_43160 < n__4741__auto___43159)){
(a[x_43160] = x_43160);

var G__43161 = (x_43160 + (1));
x_43160 = G__43161;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41139 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41139 = (function (flag,meta41140){
this.flag = flag;
this.meta41140 = meta41140;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41139.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41141,meta41140__$1){
var self__ = this;
var _41141__$1 = this;
return (new cljs.core.async.t_cljs$core$async41139(self__.flag,meta41140__$1));
}));

(cljs.core.async.t_cljs$core$async41139.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41141){
var self__ = this;
var _41141__$1 = this;
return self__.meta41140;
}));

(cljs.core.async.t_cljs$core$async41139.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41139.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async41139.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async41139.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async41139.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta41140","meta41140",1983900491,null)], null);
}));

(cljs.core.async.t_cljs$core$async41139.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41139.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41139");

(cljs.core.async.t_cljs$core$async41139.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async41139");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41139.
 */
cljs.core.async.__GT_t_cljs$core$async41139 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async41139(flag__$1,meta41140){
return (new cljs.core.async.t_cljs$core$async41139(flag__$1,meta41140));
});

}

return (new cljs.core.async.t_cljs$core$async41139(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41144 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41144 = (function (flag,cb,meta41145){
this.flag = flag;
this.cb = cb;
this.meta41145 = meta41145;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41144.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41146,meta41145__$1){
var self__ = this;
var _41146__$1 = this;
return (new cljs.core.async.t_cljs$core$async41144(self__.flag,self__.cb,meta41145__$1));
}));

(cljs.core.async.t_cljs$core$async41144.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41146){
var self__ = this;
var _41146__$1 = this;
return self__.meta41145;
}));

(cljs.core.async.t_cljs$core$async41144.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41144.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async41144.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async41144.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async41144.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta41145","meta41145",2006377512,null)], null);
}));

(cljs.core.async.t_cljs$core$async41144.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41144.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41144");

(cljs.core.async.t_cljs$core$async41144.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async41144");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41144.
 */
cljs.core.async.__GT_t_cljs$core$async41144 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async41144(flag__$1,cb__$1,meta41145){
return (new cljs.core.async.t_cljs$core$async41144(flag__$1,cb__$1,meta41145));
});

}

return (new cljs.core.async.t_cljs$core$async41144(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__41151_SHARP_){
var G__41154 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__41151_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__41154) : fret.call(null,G__41154));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__41152_SHARP_){
var G__41155 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__41152_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__41155) : fret.call(null,G__41155));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__43167 = (i + (1));
i = G__43167;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___43169 = arguments.length;
var i__4865__auto___43170 = (0);
while(true){
if((i__4865__auto___43170 < len__4864__auto___43169)){
args__4870__auto__.push((arguments[i__4865__auto___43170]));

var G__43174 = (i__4865__auto___43170 + (1));
i__4865__auto___43170 = G__43174;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__41162){
var map__41163 = p__41162;
var map__41163__$1 = cljs.core.__destructure_map(map__41163);
var opts = map__41163__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq41160){
var G__41161 = cljs.core.first(seq41160);
var seq41160__$1 = cljs.core.next(seq41160);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41161,seq41160__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__41169 = arguments.length;
switch (G__41169) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__41019__auto___43176 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41020__auto__ = (function (){var switch__39927__auto__ = (function (state_41255){
var state_val_41259 = (state_41255[(1)]);
if((state_val_41259 === (7))){
var inst_41239 = (state_41255[(2)]);
var state_41255__$1 = state_41255;
var statearr_41265_43177 = state_41255__$1;
(statearr_41265_43177[(2)] = inst_41239);

(statearr_41265_43177[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41259 === (1))){
var state_41255__$1 = state_41255;
var statearr_41266_43178 = state_41255__$1;
(statearr_41266_43178[(2)] = null);

(statearr_41266_43178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41259 === (4))){
var inst_41201 = (state_41255[(7)]);
var inst_41201__$1 = (state_41255[(2)]);
var inst_41223 = (inst_41201__$1 == null);
var state_41255__$1 = (function (){var statearr_41267 = state_41255;
(statearr_41267[(7)] = inst_41201__$1);

return statearr_41267;
})();
if(cljs.core.truth_(inst_41223)){
var statearr_41268_43179 = state_41255__$1;
(statearr_41268_43179[(1)] = (5));

} else {
var statearr_41269_43180 = state_41255__$1;
(statearr_41269_43180[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41259 === (13))){
var state_41255__$1 = state_41255;
var statearr_41270_43181 = state_41255__$1;
(statearr_41270_43181[(2)] = null);

(statearr_41270_43181[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41259 === (6))){
var inst_41201 = (state_41255[(7)]);
var state_41255__$1 = state_41255;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41255__$1,(11),to,inst_41201);
} else {
if((state_val_41259 === (3))){
var inst_41242 = (state_41255[(2)]);
var state_41255__$1 = state_41255;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41255__$1,inst_41242);
} else {
if((state_val_41259 === (12))){
var state_41255__$1 = state_41255;
var statearr_41271_43182 = state_41255__$1;
(statearr_41271_43182[(2)] = null);

(statearr_41271_43182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41259 === (2))){
var state_41255__$1 = state_41255;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41255__$1,(4),from);
} else {
if((state_val_41259 === (11))){
var inst_41232 = (state_41255[(2)]);
var state_41255__$1 = state_41255;
if(cljs.core.truth_(inst_41232)){
var statearr_41272_43183 = state_41255__$1;
(statearr_41272_43183[(1)] = (12));

} else {
var statearr_41273_43184 = state_41255__$1;
(statearr_41273_43184[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41259 === (9))){
var state_41255__$1 = state_41255;
var statearr_41278_43186 = state_41255__$1;
(statearr_41278_43186[(2)] = null);

(statearr_41278_43186[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41259 === (5))){
var state_41255__$1 = state_41255;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41279_43189 = state_41255__$1;
(statearr_41279_43189[(1)] = (8));

} else {
var statearr_41280_43190 = state_41255__$1;
(statearr_41280_43190[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41259 === (14))){
var inst_41237 = (state_41255[(2)]);
var state_41255__$1 = state_41255;
var statearr_41281_43191 = state_41255__$1;
(statearr_41281_43191[(2)] = inst_41237);

(statearr_41281_43191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41259 === (10))){
var inst_41229 = (state_41255[(2)]);
var state_41255__$1 = state_41255;
var statearr_41282_43192 = state_41255__$1;
(statearr_41282_43192[(2)] = inst_41229);

(statearr_41282_43192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41259 === (8))){
var inst_41226 = cljs.core.async.close_BANG_(to);
var state_41255__$1 = state_41255;
var statearr_41283_43193 = state_41255__$1;
(statearr_41283_43193[(2)] = inst_41226);

(statearr_41283_43193[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__39928__auto__ = null;
var cljs$core$async$state_machine__39928__auto____0 = (function (){
var statearr_41284 = [null,null,null,null,null,null,null,null];
(statearr_41284[(0)] = cljs$core$async$state_machine__39928__auto__);

(statearr_41284[(1)] = (1));

return statearr_41284;
});
var cljs$core$async$state_machine__39928__auto____1 = (function (state_41255){
while(true){
var ret_value__39929__auto__ = (function (){try{while(true){
var result__39930__auto__ = switch__39927__auto__(state_41255);
if(cljs.core.keyword_identical_QMARK_(result__39930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39930__auto__;
}
break;
}
}catch (e41285){var ex__39931__auto__ = e41285;
var statearr_41286_43194 = state_41255;
(statearr_41286_43194[(2)] = ex__39931__auto__);


if(cljs.core.seq((state_41255[(4)]))){
var statearr_41287_43195 = state_41255;
(statearr_41287_43195[(1)] = cljs.core.first((state_41255[(4)])));

} else {
throw ex__39931__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43196 = state_41255;
state_41255 = G__43196;
continue;
} else {
return ret_value__39929__auto__;
}
break;
}
});
cljs$core$async$state_machine__39928__auto__ = function(state_41255){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39928__auto____1.call(this,state_41255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39928__auto____0;
cljs$core$async$state_machine__39928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39928__auto____1;
return cljs$core$async$state_machine__39928__auto__;
})()
})();
var state__41021__auto__ = (function (){var statearr_41288 = f__41020__auto__();
(statearr_41288[(6)] = c__41019__auto___43176);

return statearr_41288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41021__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__41289){
var vec__41290 = p__41289;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41290,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41290,(1),null);
var job = vec__41290;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__41019__auto___43197 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41020__auto__ = (function (){var switch__39927__auto__ = (function (state_41301){
var state_val_41302 = (state_41301[(1)]);
if((state_val_41302 === (1))){
var state_41301__$1 = state_41301;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41301__$1,(2),res,v);
} else {
if((state_val_41302 === (2))){
var inst_41298 = (state_41301[(2)]);
var inst_41299 = cljs.core.async.close_BANG_(res);
var state_41301__$1 = (function (){var statearr_41303 = state_41301;
(statearr_41303[(7)] = inst_41298);

return statearr_41303;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_41301__$1,inst_41299);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39928__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39928__auto____0 = (function (){
var statearr_41304 = [null,null,null,null,null,null,null,null];
(statearr_41304[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39928__auto__);

(statearr_41304[(1)] = (1));

return statearr_41304;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39928__auto____1 = (function (state_41301){
while(true){
var ret_value__39929__auto__ = (function (){try{while(true){
var result__39930__auto__ = switch__39927__auto__(state_41301);
if(cljs.core.keyword_identical_QMARK_(result__39930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39930__auto__;
}
break;
}
}catch (e41305){var ex__39931__auto__ = e41305;
var statearr_41306_43199 = state_41301;
(statearr_41306_43199[(2)] = ex__39931__auto__);


if(cljs.core.seq((state_41301[(4)]))){
var statearr_41307_43200 = state_41301;
(statearr_41307_43200[(1)] = cljs.core.first((state_41301[(4)])));

} else {
throw ex__39931__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43202 = state_41301;
state_41301 = G__43202;
continue;
} else {
return ret_value__39929__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39928__auto__ = function(state_41301){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39928__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39928__auto____1.call(this,state_41301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39928__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39928__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39928__auto__;
})()
})();
var state__41021__auto__ = (function (){var statearr_41308 = f__41020__auto__();
(statearr_41308[(6)] = c__41019__auto___43197);

return statearr_41308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41021__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__41313){
var vec__41314 = p__41313;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41314,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41314,(1),null);
var job = vec__41314;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___43203 = n;
var __43204 = (0);
while(true){
if((__43204 < n__4741__auto___43203)){
var G__41317_43205 = type;
var G__41317_43206__$1 = (((G__41317_43205 instanceof cljs.core.Keyword))?G__41317_43205.fqn:null);
switch (G__41317_43206__$1) {
case "compute":
var c__41019__auto___43209 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__43204,c__41019__auto___43209,G__41317_43205,G__41317_43206__$1,n__4741__auto___43203,jobs,results,process,async){
return (function (){
var f__41020__auto__ = (function (){var switch__39927__auto__ = ((function (__43204,c__41019__auto___43209,G__41317_43205,G__41317_43206__$1,n__4741__auto___43203,jobs,results,process,async){
return (function (state_41330){
var state_val_41331 = (state_41330[(1)]);
if((state_val_41331 === (1))){
var state_41330__$1 = state_41330;
var statearr_41332_43210 = state_41330__$1;
(statearr_41332_43210[(2)] = null);

(statearr_41332_43210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41331 === (2))){
var state_41330__$1 = state_41330;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41330__$1,(4),jobs);
} else {
if((state_val_41331 === (3))){
var inst_41328 = (state_41330[(2)]);
var state_41330__$1 = state_41330;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41330__$1,inst_41328);
} else {
if((state_val_41331 === (4))){
var inst_41320 = (state_41330[(2)]);
var inst_41321 = process(inst_41320);
var state_41330__$1 = state_41330;
if(cljs.core.truth_(inst_41321)){
var statearr_41333_43212 = state_41330__$1;
(statearr_41333_43212[(1)] = (5));

} else {
var statearr_41334_43213 = state_41330__$1;
(statearr_41334_43213[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41331 === (5))){
var state_41330__$1 = state_41330;
var statearr_41335_43214 = state_41330__$1;
(statearr_41335_43214[(2)] = null);

(statearr_41335_43214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41331 === (6))){
var state_41330__$1 = state_41330;
var statearr_41336_43215 = state_41330__$1;
(statearr_41336_43215[(2)] = null);

(statearr_41336_43215[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41331 === (7))){
var inst_41326 = (state_41330[(2)]);
var state_41330__$1 = state_41330;
var statearr_41337_43216 = state_41330__$1;
(statearr_41337_43216[(2)] = inst_41326);

(statearr_41337_43216[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__43204,c__41019__auto___43209,G__41317_43205,G__41317_43206__$1,n__4741__auto___43203,jobs,results,process,async))
;
return ((function (__43204,switch__39927__auto__,c__41019__auto___43209,G__41317_43205,G__41317_43206__$1,n__4741__auto___43203,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39928__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39928__auto____0 = (function (){
var statearr_41338 = [null,null,null,null,null,null,null];
(statearr_41338[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39928__auto__);

(statearr_41338[(1)] = (1));

return statearr_41338;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39928__auto____1 = (function (state_41330){
while(true){
var ret_value__39929__auto__ = (function (){try{while(true){
var result__39930__auto__ = switch__39927__auto__(state_41330);
if(cljs.core.keyword_identical_QMARK_(result__39930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39930__auto__;
}
break;
}
}catch (e41339){var ex__39931__auto__ = e41339;
var statearr_41340_43217 = state_41330;
(statearr_41340_43217[(2)] = ex__39931__auto__);


if(cljs.core.seq((state_41330[(4)]))){
var statearr_41341_43218 = state_41330;
(statearr_41341_43218[(1)] = cljs.core.first((state_41330[(4)])));

} else {
throw ex__39931__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43219 = state_41330;
state_41330 = G__43219;
continue;
} else {
return ret_value__39929__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39928__auto__ = function(state_41330){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39928__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39928__auto____1.call(this,state_41330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39928__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39928__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39928__auto__;
})()
;})(__43204,switch__39927__auto__,c__41019__auto___43209,G__41317_43205,G__41317_43206__$1,n__4741__auto___43203,jobs,results,process,async))
})();
var state__41021__auto__ = (function (){var statearr_41342 = f__41020__auto__();
(statearr_41342[(6)] = c__41019__auto___43209);

return statearr_41342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41021__auto__);
});})(__43204,c__41019__auto___43209,G__41317_43205,G__41317_43206__$1,n__4741__auto___43203,jobs,results,process,async))
);


break;
case "async":
var c__41019__auto___43220 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__43204,c__41019__auto___43220,G__41317_43205,G__41317_43206__$1,n__4741__auto___43203,jobs,results,process,async){
return (function (){
var f__41020__auto__ = (function (){var switch__39927__auto__ = ((function (__43204,c__41019__auto___43220,G__41317_43205,G__41317_43206__$1,n__4741__auto___43203,jobs,results,process,async){
return (function (state_41355){
var state_val_41356 = (state_41355[(1)]);
if((state_val_41356 === (1))){
var state_41355__$1 = state_41355;
var statearr_41358_43222 = state_41355__$1;
(statearr_41358_43222[(2)] = null);

(statearr_41358_43222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41356 === (2))){
var state_41355__$1 = state_41355;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41355__$1,(4),jobs);
} else {
if((state_val_41356 === (3))){
var inst_41353 = (state_41355[(2)]);
var state_41355__$1 = state_41355;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41355__$1,inst_41353);
} else {
if((state_val_41356 === (4))){
var inst_41345 = (state_41355[(2)]);
var inst_41346 = async(inst_41345);
var state_41355__$1 = state_41355;
if(cljs.core.truth_(inst_41346)){
var statearr_41360_43226 = state_41355__$1;
(statearr_41360_43226[(1)] = (5));

} else {
var statearr_41361_43227 = state_41355__$1;
(statearr_41361_43227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41356 === (5))){
var state_41355__$1 = state_41355;
var statearr_41362_43228 = state_41355__$1;
(statearr_41362_43228[(2)] = null);

(statearr_41362_43228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41356 === (6))){
var state_41355__$1 = state_41355;
var statearr_41363_43229 = state_41355__$1;
(statearr_41363_43229[(2)] = null);

(statearr_41363_43229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41356 === (7))){
var inst_41351 = (state_41355[(2)]);
var state_41355__$1 = state_41355;
var statearr_41364_43230 = state_41355__$1;
(statearr_41364_43230[(2)] = inst_41351);

(statearr_41364_43230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__43204,c__41019__auto___43220,G__41317_43205,G__41317_43206__$1,n__4741__auto___43203,jobs,results,process,async))
;
return ((function (__43204,switch__39927__auto__,c__41019__auto___43220,G__41317_43205,G__41317_43206__$1,n__4741__auto___43203,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39928__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39928__auto____0 = (function (){
var statearr_41365 = [null,null,null,null,null,null,null];
(statearr_41365[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39928__auto__);

(statearr_41365[(1)] = (1));

return statearr_41365;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39928__auto____1 = (function (state_41355){
while(true){
var ret_value__39929__auto__ = (function (){try{while(true){
var result__39930__auto__ = switch__39927__auto__(state_41355);
if(cljs.core.keyword_identical_QMARK_(result__39930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39930__auto__;
}
break;
}
}catch (e41366){var ex__39931__auto__ = e41366;
var statearr_41367_43232 = state_41355;
(statearr_41367_43232[(2)] = ex__39931__auto__);


if(cljs.core.seq((state_41355[(4)]))){
var statearr_41369_43236 = state_41355;
(statearr_41369_43236[(1)] = cljs.core.first((state_41355[(4)])));

} else {
throw ex__39931__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43237 = state_41355;
state_41355 = G__43237;
continue;
} else {
return ret_value__39929__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39928__auto__ = function(state_41355){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39928__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39928__auto____1.call(this,state_41355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39928__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39928__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39928__auto__;
})()
;})(__43204,switch__39927__auto__,c__41019__auto___43220,G__41317_43205,G__41317_43206__$1,n__4741__auto___43203,jobs,results,process,async))
})();
var state__41021__auto__ = (function (){var statearr_41371 = f__41020__auto__();
(statearr_41371[(6)] = c__41019__auto___43220);

return statearr_41371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41021__auto__);
});})(__43204,c__41019__auto___43220,G__41317_43205,G__41317_43206__$1,n__4741__auto___43203,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41317_43206__$1)].join('')));

}

var G__43238 = (__43204 + (1));
__43204 = G__43238;
continue;
} else {
}
break;
}

var c__41019__auto___43239 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41020__auto__ = (function (){var switch__39927__auto__ = (function (state_41406){
var state_val_41407 = (state_41406[(1)]);
if((state_val_41407 === (7))){
var inst_41399 = (state_41406[(2)]);
var state_41406__$1 = state_41406;
var statearr_41411_43240 = state_41406__$1;
(statearr_41411_43240[(2)] = inst_41399);

(statearr_41411_43240[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41407 === (1))){
var state_41406__$1 = state_41406;
var statearr_41412_43241 = state_41406__$1;
(statearr_41412_43241[(2)] = null);

(statearr_41412_43241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41407 === (4))){
var inst_41381 = (state_41406[(7)]);
var inst_41381__$1 = (state_41406[(2)]);
var inst_41382 = (inst_41381__$1 == null);
var state_41406__$1 = (function (){var statearr_41413 = state_41406;
(statearr_41413[(7)] = inst_41381__$1);

return statearr_41413;
})();
if(cljs.core.truth_(inst_41382)){
var statearr_41414_43242 = state_41406__$1;
(statearr_41414_43242[(1)] = (5));

} else {
var statearr_41415_43243 = state_41406__$1;
(statearr_41415_43243[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41407 === (6))){
var inst_41381 = (state_41406[(7)]);
var inst_41386 = (state_41406[(8)]);
var inst_41386__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_41390 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41391 = [inst_41381,inst_41386__$1];
var inst_41392 = (new cljs.core.PersistentVector(null,2,(5),inst_41390,inst_41391,null));
var state_41406__$1 = (function (){var statearr_41417 = state_41406;
(statearr_41417[(8)] = inst_41386__$1);

return statearr_41417;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41406__$1,(8),jobs,inst_41392);
} else {
if((state_val_41407 === (3))){
var inst_41401 = (state_41406[(2)]);
var state_41406__$1 = state_41406;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41406__$1,inst_41401);
} else {
if((state_val_41407 === (2))){
var state_41406__$1 = state_41406;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41406__$1,(4),from);
} else {
if((state_val_41407 === (9))){
var inst_41396 = (state_41406[(2)]);
var state_41406__$1 = (function (){var statearr_41422 = state_41406;
(statearr_41422[(9)] = inst_41396);

return statearr_41422;
})();
var statearr_41423_43244 = state_41406__$1;
(statearr_41423_43244[(2)] = null);

(statearr_41423_43244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41407 === (5))){
var inst_41384 = cljs.core.async.close_BANG_(jobs);
var state_41406__$1 = state_41406;
var statearr_41424_43245 = state_41406__$1;
(statearr_41424_43245[(2)] = inst_41384);

(statearr_41424_43245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41407 === (8))){
var inst_41386 = (state_41406[(8)]);
var inst_41394 = (state_41406[(2)]);
var state_41406__$1 = (function (){var statearr_41425 = state_41406;
(statearr_41425[(10)] = inst_41394);

return statearr_41425;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41406__$1,(9),results,inst_41386);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39928__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39928__auto____0 = (function (){
var statearr_41426 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41426[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39928__auto__);

(statearr_41426[(1)] = (1));

return statearr_41426;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39928__auto____1 = (function (state_41406){
while(true){
var ret_value__39929__auto__ = (function (){try{while(true){
var result__39930__auto__ = switch__39927__auto__(state_41406);
if(cljs.core.keyword_identical_QMARK_(result__39930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39930__auto__;
}
break;
}
}catch (e41427){var ex__39931__auto__ = e41427;
var statearr_41428_43247 = state_41406;
(statearr_41428_43247[(2)] = ex__39931__auto__);


if(cljs.core.seq((state_41406[(4)]))){
var statearr_41429_43249 = state_41406;
(statearr_41429_43249[(1)] = cljs.core.first((state_41406[(4)])));

} else {
throw ex__39931__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43250 = state_41406;
state_41406 = G__43250;
continue;
} else {
return ret_value__39929__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39928__auto__ = function(state_41406){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39928__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39928__auto____1.call(this,state_41406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39928__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39928__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39928__auto__;
})()
})();
var state__41021__auto__ = (function (){var statearr_41430 = f__41020__auto__();
(statearr_41430[(6)] = c__41019__auto___43239);

return statearr_41430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41021__auto__);
}));


var c__41019__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41020__auto__ = (function (){var switch__39927__auto__ = (function (state_41468){
var state_val_41469 = (state_41468[(1)]);
if((state_val_41469 === (7))){
var inst_41464 = (state_41468[(2)]);
var state_41468__$1 = state_41468;
var statearr_41470_43253 = state_41468__$1;
(statearr_41470_43253[(2)] = inst_41464);

(statearr_41470_43253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41469 === (20))){
var state_41468__$1 = state_41468;
var statearr_41471_43254 = state_41468__$1;
(statearr_41471_43254[(2)] = null);

(statearr_41471_43254[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41469 === (1))){
var state_41468__$1 = state_41468;
var statearr_41472_43255 = state_41468__$1;
(statearr_41472_43255[(2)] = null);

(statearr_41472_43255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41469 === (4))){
var inst_41433 = (state_41468[(7)]);
var inst_41433__$1 = (state_41468[(2)]);
var inst_41434 = (inst_41433__$1 == null);
var state_41468__$1 = (function (){var statearr_41473 = state_41468;
(statearr_41473[(7)] = inst_41433__$1);

return statearr_41473;
})();
if(cljs.core.truth_(inst_41434)){
var statearr_41474_43256 = state_41468__$1;
(statearr_41474_43256[(1)] = (5));

} else {
var statearr_41475_43257 = state_41468__$1;
(statearr_41475_43257[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41469 === (15))){
var inst_41446 = (state_41468[(8)]);
var state_41468__$1 = state_41468;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41468__$1,(18),to,inst_41446);
} else {
if((state_val_41469 === (21))){
var inst_41459 = (state_41468[(2)]);
var state_41468__$1 = state_41468;
var statearr_41476_43258 = state_41468__$1;
(statearr_41476_43258[(2)] = inst_41459);

(statearr_41476_43258[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41469 === (13))){
var inst_41461 = (state_41468[(2)]);
var state_41468__$1 = (function (){var statearr_41477 = state_41468;
(statearr_41477[(9)] = inst_41461);

return statearr_41477;
})();
var statearr_41478_43259 = state_41468__$1;
(statearr_41478_43259[(2)] = null);

(statearr_41478_43259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41469 === (6))){
var inst_41433 = (state_41468[(7)]);
var state_41468__$1 = state_41468;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41468__$1,(11),inst_41433);
} else {
if((state_val_41469 === (17))){
var inst_41454 = (state_41468[(2)]);
var state_41468__$1 = state_41468;
if(cljs.core.truth_(inst_41454)){
var statearr_41479_43260 = state_41468__$1;
(statearr_41479_43260[(1)] = (19));

} else {
var statearr_41480_43261 = state_41468__$1;
(statearr_41480_43261[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41469 === (3))){
var inst_41466 = (state_41468[(2)]);
var state_41468__$1 = state_41468;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41468__$1,inst_41466);
} else {
if((state_val_41469 === (12))){
var inst_41443 = (state_41468[(10)]);
var state_41468__$1 = state_41468;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41468__$1,(14),inst_41443);
} else {
if((state_val_41469 === (2))){
var state_41468__$1 = state_41468;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41468__$1,(4),results);
} else {
if((state_val_41469 === (19))){
var state_41468__$1 = state_41468;
var statearr_41481_43262 = state_41468__$1;
(statearr_41481_43262[(2)] = null);

(statearr_41481_43262[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41469 === (11))){
var inst_41443 = (state_41468[(2)]);
var state_41468__$1 = (function (){var statearr_41482 = state_41468;
(statearr_41482[(10)] = inst_41443);

return statearr_41482;
})();
var statearr_41483_43263 = state_41468__$1;
(statearr_41483_43263[(2)] = null);

(statearr_41483_43263[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41469 === (9))){
var state_41468__$1 = state_41468;
var statearr_41484_43264 = state_41468__$1;
(statearr_41484_43264[(2)] = null);

(statearr_41484_43264[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41469 === (5))){
var state_41468__$1 = state_41468;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41485_43265 = state_41468__$1;
(statearr_41485_43265[(1)] = (8));

} else {
var statearr_41486_43266 = state_41468__$1;
(statearr_41486_43266[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41469 === (14))){
var inst_41448 = (state_41468[(11)]);
var inst_41446 = (state_41468[(8)]);
var inst_41446__$1 = (state_41468[(2)]);
var inst_41447 = (inst_41446__$1 == null);
var inst_41448__$1 = cljs.core.not(inst_41447);
var state_41468__$1 = (function (){var statearr_41487 = state_41468;
(statearr_41487[(11)] = inst_41448__$1);

(statearr_41487[(8)] = inst_41446__$1);

return statearr_41487;
})();
if(inst_41448__$1){
var statearr_41488_43267 = state_41468__$1;
(statearr_41488_43267[(1)] = (15));

} else {
var statearr_41489_43268 = state_41468__$1;
(statearr_41489_43268[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41469 === (16))){
var inst_41448 = (state_41468[(11)]);
var state_41468__$1 = state_41468;
var statearr_41490_43269 = state_41468__$1;
(statearr_41490_43269[(2)] = inst_41448);

(statearr_41490_43269[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41469 === (10))){
var inst_41440 = (state_41468[(2)]);
var state_41468__$1 = state_41468;
var statearr_41491_43270 = state_41468__$1;
(statearr_41491_43270[(2)] = inst_41440);

(statearr_41491_43270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41469 === (18))){
var inst_41451 = (state_41468[(2)]);
var state_41468__$1 = state_41468;
var statearr_41492_43271 = state_41468__$1;
(statearr_41492_43271[(2)] = inst_41451);

(statearr_41492_43271[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41469 === (8))){
var inst_41437 = cljs.core.async.close_BANG_(to);
var state_41468__$1 = state_41468;
var statearr_41493_43272 = state_41468__$1;
(statearr_41493_43272[(2)] = inst_41437);

(statearr_41493_43272[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39928__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39928__auto____0 = (function (){
var statearr_41494 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41494[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39928__auto__);

(statearr_41494[(1)] = (1));

return statearr_41494;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39928__auto____1 = (function (state_41468){
while(true){
var ret_value__39929__auto__ = (function (){try{while(true){
var result__39930__auto__ = switch__39927__auto__(state_41468);
if(cljs.core.keyword_identical_QMARK_(result__39930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39930__auto__;
}
break;
}
}catch (e41495){var ex__39931__auto__ = e41495;
var statearr_41496_43273 = state_41468;
(statearr_41496_43273[(2)] = ex__39931__auto__);


if(cljs.core.seq((state_41468[(4)]))){
var statearr_41497_43274 = state_41468;
(statearr_41497_43274[(1)] = cljs.core.first((state_41468[(4)])));

} else {
throw ex__39931__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43277 = state_41468;
state_41468 = G__43277;
continue;
} else {
return ret_value__39929__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39928__auto__ = function(state_41468){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39928__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39928__auto____1.call(this,state_41468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39928__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39928__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39928__auto__;
})()
})();
var state__41021__auto__ = (function (){var statearr_41498 = f__41020__auto__();
(statearr_41498[(6)] = c__41019__auto__);

return statearr_41498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41021__auto__);
}));

return c__41019__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__41501 = arguments.length;
switch (G__41501) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__41503 = arguments.length;
switch (G__41503) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__41531 = arguments.length;
switch (G__41531) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__41019__auto___43288 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41020__auto__ = (function (){var switch__39927__auto__ = (function (state_41579){
var state_val_41580 = (state_41579[(1)]);
if((state_val_41580 === (7))){
var inst_41575 = (state_41579[(2)]);
var state_41579__$1 = state_41579;
var statearr_41620_43289 = state_41579__$1;
(statearr_41620_43289[(2)] = inst_41575);

(statearr_41620_43289[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41580 === (1))){
var state_41579__$1 = state_41579;
var statearr_41625_43290 = state_41579__$1;
(statearr_41625_43290[(2)] = null);

(statearr_41625_43290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41580 === (4))){
var inst_41555 = (state_41579[(7)]);
var inst_41555__$1 = (state_41579[(2)]);
var inst_41556 = (inst_41555__$1 == null);
var state_41579__$1 = (function (){var statearr_41640 = state_41579;
(statearr_41640[(7)] = inst_41555__$1);

return statearr_41640;
})();
if(cljs.core.truth_(inst_41556)){
var statearr_41641_43293 = state_41579__$1;
(statearr_41641_43293[(1)] = (5));

} else {
var statearr_41642_43294 = state_41579__$1;
(statearr_41642_43294[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41580 === (13))){
var state_41579__$1 = state_41579;
var statearr_41644_43297 = state_41579__$1;
(statearr_41644_43297[(2)] = null);

(statearr_41644_43297[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41580 === (6))){
var inst_41555 = (state_41579[(7)]);
var inst_41561 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_41555) : p.call(null,inst_41555));
var state_41579__$1 = state_41579;
if(cljs.core.truth_(inst_41561)){
var statearr_41646_43298 = state_41579__$1;
(statearr_41646_43298[(1)] = (9));

} else {
var statearr_41647_43299 = state_41579__$1;
(statearr_41647_43299[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41580 === (3))){
var inst_41577 = (state_41579[(2)]);
var state_41579__$1 = state_41579;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41579__$1,inst_41577);
} else {
if((state_val_41580 === (12))){
var state_41579__$1 = state_41579;
var statearr_41649_43300 = state_41579__$1;
(statearr_41649_43300[(2)] = null);

(statearr_41649_43300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41580 === (2))){
var state_41579__$1 = state_41579;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41579__$1,(4),ch);
} else {
if((state_val_41580 === (11))){
var inst_41555 = (state_41579[(7)]);
var inst_41566 = (state_41579[(2)]);
var state_41579__$1 = state_41579;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41579__$1,(8),inst_41566,inst_41555);
} else {
if((state_val_41580 === (9))){
var state_41579__$1 = state_41579;
var statearr_41653_43301 = state_41579__$1;
(statearr_41653_43301[(2)] = tc);

(statearr_41653_43301[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41580 === (5))){
var inst_41558 = cljs.core.async.close_BANG_(tc);
var inst_41559 = cljs.core.async.close_BANG_(fc);
var state_41579__$1 = (function (){var statearr_41654 = state_41579;
(statearr_41654[(8)] = inst_41558);

return statearr_41654;
})();
var statearr_41655_43302 = state_41579__$1;
(statearr_41655_43302[(2)] = inst_41559);

(statearr_41655_43302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41580 === (14))){
var inst_41573 = (state_41579[(2)]);
var state_41579__$1 = state_41579;
var statearr_41656_43305 = state_41579__$1;
(statearr_41656_43305[(2)] = inst_41573);

(statearr_41656_43305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41580 === (10))){
var state_41579__$1 = state_41579;
var statearr_41657_43306 = state_41579__$1;
(statearr_41657_43306[(2)] = fc);

(statearr_41657_43306[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41580 === (8))){
var inst_41568 = (state_41579[(2)]);
var state_41579__$1 = state_41579;
if(cljs.core.truth_(inst_41568)){
var statearr_41658_43307 = state_41579__$1;
(statearr_41658_43307[(1)] = (12));

} else {
var statearr_41659_43308 = state_41579__$1;
(statearr_41659_43308[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__39928__auto__ = null;
var cljs$core$async$state_machine__39928__auto____0 = (function (){
var statearr_41661 = [null,null,null,null,null,null,null,null,null];
(statearr_41661[(0)] = cljs$core$async$state_machine__39928__auto__);

(statearr_41661[(1)] = (1));

return statearr_41661;
});
var cljs$core$async$state_machine__39928__auto____1 = (function (state_41579){
while(true){
var ret_value__39929__auto__ = (function (){try{while(true){
var result__39930__auto__ = switch__39927__auto__(state_41579);
if(cljs.core.keyword_identical_QMARK_(result__39930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39930__auto__;
}
break;
}
}catch (e41662){var ex__39931__auto__ = e41662;
var statearr_41664_43309 = state_41579;
(statearr_41664_43309[(2)] = ex__39931__auto__);


if(cljs.core.seq((state_41579[(4)]))){
var statearr_41665_43310 = state_41579;
(statearr_41665_43310[(1)] = cljs.core.first((state_41579[(4)])));

} else {
throw ex__39931__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43311 = state_41579;
state_41579 = G__43311;
continue;
} else {
return ret_value__39929__auto__;
}
break;
}
});
cljs$core$async$state_machine__39928__auto__ = function(state_41579){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39928__auto____1.call(this,state_41579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39928__auto____0;
cljs$core$async$state_machine__39928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39928__auto____1;
return cljs$core$async$state_machine__39928__auto__;
})()
})();
var state__41021__auto__ = (function (){var statearr_41668 = f__41020__auto__();
(statearr_41668[(6)] = c__41019__auto___43288);

return statearr_41668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41021__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__41019__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41020__auto__ = (function (){var switch__39927__auto__ = (function (state_41690){
var state_val_41691 = (state_41690[(1)]);
if((state_val_41691 === (7))){
var inst_41686 = (state_41690[(2)]);
var state_41690__$1 = state_41690;
var statearr_41692_43313 = state_41690__$1;
(statearr_41692_43313[(2)] = inst_41686);

(statearr_41692_43313[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41691 === (1))){
var inst_41669 = init;
var inst_41670 = inst_41669;
var state_41690__$1 = (function (){var statearr_41693 = state_41690;
(statearr_41693[(7)] = inst_41670);

return statearr_41693;
})();
var statearr_41694_43316 = state_41690__$1;
(statearr_41694_43316[(2)] = null);

(statearr_41694_43316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41691 === (4))){
var inst_41673 = (state_41690[(8)]);
var inst_41673__$1 = (state_41690[(2)]);
var inst_41674 = (inst_41673__$1 == null);
var state_41690__$1 = (function (){var statearr_41695 = state_41690;
(statearr_41695[(8)] = inst_41673__$1);

return statearr_41695;
})();
if(cljs.core.truth_(inst_41674)){
var statearr_41696_43320 = state_41690__$1;
(statearr_41696_43320[(1)] = (5));

} else {
var statearr_41697_43321 = state_41690__$1;
(statearr_41697_43321[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41691 === (6))){
var inst_41677 = (state_41690[(9)]);
var inst_41673 = (state_41690[(8)]);
var inst_41670 = (state_41690[(7)]);
var inst_41677__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_41670,inst_41673) : f.call(null,inst_41670,inst_41673));
var inst_41678 = cljs.core.reduced_QMARK_(inst_41677__$1);
var state_41690__$1 = (function (){var statearr_41698 = state_41690;
(statearr_41698[(9)] = inst_41677__$1);

return statearr_41698;
})();
if(inst_41678){
var statearr_41699_43322 = state_41690__$1;
(statearr_41699_43322[(1)] = (8));

} else {
var statearr_41700_43323 = state_41690__$1;
(statearr_41700_43323[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41691 === (3))){
var inst_41688 = (state_41690[(2)]);
var state_41690__$1 = state_41690;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41690__$1,inst_41688);
} else {
if((state_val_41691 === (2))){
var state_41690__$1 = state_41690;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41690__$1,(4),ch);
} else {
if((state_val_41691 === (9))){
var inst_41677 = (state_41690[(9)]);
var inst_41670 = inst_41677;
var state_41690__$1 = (function (){var statearr_41701 = state_41690;
(statearr_41701[(7)] = inst_41670);

return statearr_41701;
})();
var statearr_41702_43324 = state_41690__$1;
(statearr_41702_43324[(2)] = null);

(statearr_41702_43324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41691 === (5))){
var inst_41670 = (state_41690[(7)]);
var state_41690__$1 = state_41690;
var statearr_41703_43325 = state_41690__$1;
(statearr_41703_43325[(2)] = inst_41670);

(statearr_41703_43325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41691 === (10))){
var inst_41684 = (state_41690[(2)]);
var state_41690__$1 = state_41690;
var statearr_41704_43326 = state_41690__$1;
(statearr_41704_43326[(2)] = inst_41684);

(statearr_41704_43326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41691 === (8))){
var inst_41677 = (state_41690[(9)]);
var inst_41680 = cljs.core.deref(inst_41677);
var state_41690__$1 = state_41690;
var statearr_41705_43327 = state_41690__$1;
(statearr_41705_43327[(2)] = inst_41680);

(statearr_41705_43327[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__39928__auto__ = null;
var cljs$core$async$reduce_$_state_machine__39928__auto____0 = (function (){
var statearr_41706 = [null,null,null,null,null,null,null,null,null,null];
(statearr_41706[(0)] = cljs$core$async$reduce_$_state_machine__39928__auto__);

(statearr_41706[(1)] = (1));

return statearr_41706;
});
var cljs$core$async$reduce_$_state_machine__39928__auto____1 = (function (state_41690){
while(true){
var ret_value__39929__auto__ = (function (){try{while(true){
var result__39930__auto__ = switch__39927__auto__(state_41690);
if(cljs.core.keyword_identical_QMARK_(result__39930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39930__auto__;
}
break;
}
}catch (e41707){var ex__39931__auto__ = e41707;
var statearr_41708_43332 = state_41690;
(statearr_41708_43332[(2)] = ex__39931__auto__);


if(cljs.core.seq((state_41690[(4)]))){
var statearr_41709_43333 = state_41690;
(statearr_41709_43333[(1)] = cljs.core.first((state_41690[(4)])));

} else {
throw ex__39931__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43335 = state_41690;
state_41690 = G__43335;
continue;
} else {
return ret_value__39929__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__39928__auto__ = function(state_41690){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__39928__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__39928__auto____1.call(this,state_41690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__39928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__39928__auto____0;
cljs$core$async$reduce_$_state_machine__39928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__39928__auto____1;
return cljs$core$async$reduce_$_state_machine__39928__auto__;
})()
})();
var state__41021__auto__ = (function (){var statearr_41710 = f__41020__auto__();
(statearr_41710[(6)] = c__41019__auto__);

return statearr_41710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41021__auto__);
}));

return c__41019__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__41019__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41020__auto__ = (function (){var switch__39927__auto__ = (function (state_41716){
var state_val_41717 = (state_41716[(1)]);
if((state_val_41717 === (1))){
var inst_41711 = cljs.core.async.reduce(f__$1,init,ch);
var state_41716__$1 = state_41716;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41716__$1,(2),inst_41711);
} else {
if((state_val_41717 === (2))){
var inst_41713 = (state_41716[(2)]);
var inst_41714 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_41713) : f__$1.call(null,inst_41713));
var state_41716__$1 = state_41716;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41716__$1,inst_41714);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__39928__auto__ = null;
var cljs$core$async$transduce_$_state_machine__39928__auto____0 = (function (){
var statearr_41718 = [null,null,null,null,null,null,null];
(statearr_41718[(0)] = cljs$core$async$transduce_$_state_machine__39928__auto__);

(statearr_41718[(1)] = (1));

return statearr_41718;
});
var cljs$core$async$transduce_$_state_machine__39928__auto____1 = (function (state_41716){
while(true){
var ret_value__39929__auto__ = (function (){try{while(true){
var result__39930__auto__ = switch__39927__auto__(state_41716);
if(cljs.core.keyword_identical_QMARK_(result__39930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39930__auto__;
}
break;
}
}catch (e41719){var ex__39931__auto__ = e41719;
var statearr_41720_43339 = state_41716;
(statearr_41720_43339[(2)] = ex__39931__auto__);


if(cljs.core.seq((state_41716[(4)]))){
var statearr_41721_43340 = state_41716;
(statearr_41721_43340[(1)] = cljs.core.first((state_41716[(4)])));

} else {
throw ex__39931__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43341 = state_41716;
state_41716 = G__43341;
continue;
} else {
return ret_value__39929__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__39928__auto__ = function(state_41716){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__39928__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__39928__auto____1.call(this,state_41716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__39928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__39928__auto____0;
cljs$core$async$transduce_$_state_machine__39928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__39928__auto____1;
return cljs$core$async$transduce_$_state_machine__39928__auto__;
})()
})();
var state__41021__auto__ = (function (){var statearr_41722 = f__41020__auto__();
(statearr_41722[(6)] = c__41019__auto__);

return statearr_41722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41021__auto__);
}));

return c__41019__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__41724 = arguments.length;
switch (G__41724) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__41019__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41020__auto__ = (function (){var switch__39927__auto__ = (function (state_41749){
var state_val_41750 = (state_41749[(1)]);
if((state_val_41750 === (7))){
var inst_41731 = (state_41749[(2)]);
var state_41749__$1 = state_41749;
var statearr_41751_43346 = state_41749__$1;
(statearr_41751_43346[(2)] = inst_41731);

(statearr_41751_43346[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41750 === (1))){
var inst_41725 = cljs.core.seq(coll);
var inst_41726 = inst_41725;
var state_41749__$1 = (function (){var statearr_41752 = state_41749;
(statearr_41752[(7)] = inst_41726);

return statearr_41752;
})();
var statearr_41753_43347 = state_41749__$1;
(statearr_41753_43347[(2)] = null);

(statearr_41753_43347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41750 === (4))){
var inst_41726 = (state_41749[(7)]);
var inst_41729 = cljs.core.first(inst_41726);
var state_41749__$1 = state_41749;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41749__$1,(7),ch,inst_41729);
} else {
if((state_val_41750 === (13))){
var inst_41743 = (state_41749[(2)]);
var state_41749__$1 = state_41749;
var statearr_41754_43348 = state_41749__$1;
(statearr_41754_43348[(2)] = inst_41743);

(statearr_41754_43348[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41750 === (6))){
var inst_41734 = (state_41749[(2)]);
var state_41749__$1 = state_41749;
if(cljs.core.truth_(inst_41734)){
var statearr_41755_43349 = state_41749__$1;
(statearr_41755_43349[(1)] = (8));

} else {
var statearr_41756_43352 = state_41749__$1;
(statearr_41756_43352[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41750 === (3))){
var inst_41747 = (state_41749[(2)]);
var state_41749__$1 = state_41749;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41749__$1,inst_41747);
} else {
if((state_val_41750 === (12))){
var state_41749__$1 = state_41749;
var statearr_41757_43353 = state_41749__$1;
(statearr_41757_43353[(2)] = null);

(statearr_41757_43353[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41750 === (2))){
var inst_41726 = (state_41749[(7)]);
var state_41749__$1 = state_41749;
if(cljs.core.truth_(inst_41726)){
var statearr_41758_43354 = state_41749__$1;
(statearr_41758_43354[(1)] = (4));

} else {
var statearr_41759_43355 = state_41749__$1;
(statearr_41759_43355[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41750 === (11))){
var inst_41740 = cljs.core.async.close_BANG_(ch);
var state_41749__$1 = state_41749;
var statearr_41760_43356 = state_41749__$1;
(statearr_41760_43356[(2)] = inst_41740);

(statearr_41760_43356[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41750 === (9))){
var state_41749__$1 = state_41749;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41761_43357 = state_41749__$1;
(statearr_41761_43357[(1)] = (11));

} else {
var statearr_41762_43358 = state_41749__$1;
(statearr_41762_43358[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41750 === (5))){
var inst_41726 = (state_41749[(7)]);
var state_41749__$1 = state_41749;
var statearr_41763_43360 = state_41749__$1;
(statearr_41763_43360[(2)] = inst_41726);

(statearr_41763_43360[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41750 === (10))){
var inst_41745 = (state_41749[(2)]);
var state_41749__$1 = state_41749;
var statearr_41764_43361 = state_41749__$1;
(statearr_41764_43361[(2)] = inst_41745);

(statearr_41764_43361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41750 === (8))){
var inst_41726 = (state_41749[(7)]);
var inst_41736 = cljs.core.next(inst_41726);
var inst_41726__$1 = inst_41736;
var state_41749__$1 = (function (){var statearr_41765 = state_41749;
(statearr_41765[(7)] = inst_41726__$1);

return statearr_41765;
})();
var statearr_41766_43363 = state_41749__$1;
(statearr_41766_43363[(2)] = null);

(statearr_41766_43363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__39928__auto__ = null;
var cljs$core$async$state_machine__39928__auto____0 = (function (){
var statearr_41767 = [null,null,null,null,null,null,null,null];
(statearr_41767[(0)] = cljs$core$async$state_machine__39928__auto__);

(statearr_41767[(1)] = (1));

return statearr_41767;
});
var cljs$core$async$state_machine__39928__auto____1 = (function (state_41749){
while(true){
var ret_value__39929__auto__ = (function (){try{while(true){
var result__39930__auto__ = switch__39927__auto__(state_41749);
if(cljs.core.keyword_identical_QMARK_(result__39930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39930__auto__;
}
break;
}
}catch (e41768){var ex__39931__auto__ = e41768;
var statearr_41769_43364 = state_41749;
(statearr_41769_43364[(2)] = ex__39931__auto__);


if(cljs.core.seq((state_41749[(4)]))){
var statearr_41770_43365 = state_41749;
(statearr_41770_43365[(1)] = cljs.core.first((state_41749[(4)])));

} else {
throw ex__39931__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43367 = state_41749;
state_41749 = G__43367;
continue;
} else {
return ret_value__39929__auto__;
}
break;
}
});
cljs$core$async$state_machine__39928__auto__ = function(state_41749){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39928__auto____1.call(this,state_41749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39928__auto____0;
cljs$core$async$state_machine__39928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39928__auto____1;
return cljs$core$async$state_machine__39928__auto__;
})()
})();
var state__41021__auto__ = (function (){var statearr_41771 = f__41020__auto__();
(statearr_41771[(6)] = c__41019__auto__);

return statearr_41771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41021__auto__);
}));

return c__41019__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__41773 = arguments.length;
switch (G__41773) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_43370 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_43370(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_43377 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_43377(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_43378 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_43378(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_43379 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_43379(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41784 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41784 = (function (ch,cs,meta41785){
this.ch = ch;
this.cs = cs;
this.meta41785 = meta41785;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41784.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41786,meta41785__$1){
var self__ = this;
var _41786__$1 = this;
return (new cljs.core.async.t_cljs$core$async41784(self__.ch,self__.cs,meta41785__$1));
}));

(cljs.core.async.t_cljs$core$async41784.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41786){
var self__ = this;
var _41786__$1 = this;
return self__.meta41785;
}));

(cljs.core.async.t_cljs$core$async41784.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41784.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async41784.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41784.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async41784.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async41784.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async41784.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta41785","meta41785",-474407984,null)], null);
}));

(cljs.core.async.t_cljs$core$async41784.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41784.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41784");

(cljs.core.async.t_cljs$core$async41784.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async41784");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41784.
 */
cljs.core.async.__GT_t_cljs$core$async41784 = (function cljs$core$async$mult_$___GT_t_cljs$core$async41784(ch__$1,cs__$1,meta41785){
return (new cljs.core.async.t_cljs$core$async41784(ch__$1,cs__$1,meta41785));
});

}

return (new cljs.core.async.t_cljs$core$async41784(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__41019__auto___43380 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41020__auto__ = (function (){var switch__39927__auto__ = (function (state_41932){
var state_val_41933 = (state_41932[(1)]);
if((state_val_41933 === (7))){
var inst_41927 = (state_41932[(2)]);
var state_41932__$1 = state_41932;
var statearr_41936_43381 = state_41932__$1;
(statearr_41936_43381[(2)] = inst_41927);

(statearr_41936_43381[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41933 === (20))){
var inst_41824 = (state_41932[(7)]);
var inst_41837 = cljs.core.first(inst_41824);
var inst_41838 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41837,(0),null);
var inst_41839 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41837,(1),null);
var state_41932__$1 = (function (){var statearr_41938 = state_41932;
(statearr_41938[(8)] = inst_41838);

return statearr_41938;
})();
if(cljs.core.truth_(inst_41839)){
var statearr_41939_43382 = state_41932__$1;
(statearr_41939_43382[(1)] = (22));

} else {
var statearr_41940_43383 = state_41932__$1;
(statearr_41940_43383[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41933 === (27))){
var inst_41869 = (state_41932[(9)]);
var inst_41876 = (state_41932[(10)]);
var inst_41871 = (state_41932[(11)]);
var inst_41793 = (state_41932[(12)]);
var inst_41876__$1 = cljs.core._nth(inst_41869,inst_41871);
var inst_41878 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_41876__$1,inst_41793,done);
var state_41932__$1 = (function (){var statearr_41941 = state_41932;
(statearr_41941[(10)] = inst_41876__$1);

return statearr_41941;
})();
if(cljs.core.truth_(inst_41878)){
var statearr_41942_43384 = state_41932__$1;
(statearr_41942_43384[(1)] = (30));

} else {
var statearr_41943_43385 = state_41932__$1;
(statearr_41943_43385[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41933 === (1))){
var state_41932__$1 = state_41932;
var statearr_41944_43386 = state_41932__$1;
(statearr_41944_43386[(2)] = null);

(statearr_41944_43386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41933 === (24))){
var inst_41824 = (state_41932[(7)]);
var inst_41844 = (state_41932[(2)]);
var inst_41845 = cljs.core.next(inst_41824);
var inst_41802 = inst_41845;
var inst_41803 = null;
var inst_41804 = (0);
var inst_41805 = (0);
var state_41932__$1 = (function (){var statearr_41946 = state_41932;
(statearr_41946[(13)] = inst_41802);

(statearr_41946[(14)] = inst_41803);

(statearr_41946[(15)] = inst_41844);

(statearr_41946[(16)] = inst_41805);

(statearr_41946[(17)] = inst_41804);

return statearr_41946;
})();
var statearr_41947_43387 = state_41932__$1;
(statearr_41947_43387[(2)] = null);

(statearr_41947_43387[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41933 === (39))){
var state_41932__$1 = state_41932;
var statearr_41951_43388 = state_41932__$1;
(statearr_41951_43388[(2)] = null);

(statearr_41951_43388[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41933 === (4))){
var inst_41793 = (state_41932[(12)]);
var inst_41793__$1 = (state_41932[(2)]);
var inst_41794 = (inst_41793__$1 == null);
var state_41932__$1 = (function (){var statearr_41952 = state_41932;
(statearr_41952[(12)] = inst_41793__$1);

return statearr_41952;
})();
if(cljs.core.truth_(inst_41794)){
var statearr_41953_43391 = state_41932__$1;
(statearr_41953_43391[(1)] = (5));

} else {
var statearr_41954_43392 = state_41932__$1;
(statearr_41954_43392[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41933 === (15))){
var inst_41802 = (state_41932[(13)]);
var inst_41803 = (state_41932[(14)]);
var inst_41805 = (state_41932[(16)]);
var inst_41804 = (state_41932[(17)]);
var inst_41820 = (state_41932[(2)]);
var inst_41821 = (inst_41805 + (1));
var tmp41948 = inst_41802;
var tmp41949 = inst_41803;
var tmp41950 = inst_41804;
var inst_41802__$1 = tmp41948;
var inst_41803__$1 = tmp41949;
var inst_41804__$1 = tmp41950;
var inst_41805__$1 = inst_41821;
var state_41932__$1 = (function (){var statearr_41955 = state_41932;
(statearr_41955[(13)] = inst_41802__$1);

(statearr_41955[(14)] = inst_41803__$1);

(statearr_41955[(16)] = inst_41805__$1);

(statearr_41955[(18)] = inst_41820);

(statearr_41955[(17)] = inst_41804__$1);

return statearr_41955;
})();
var statearr_41956_43393 = state_41932__$1;
(statearr_41956_43393[(2)] = null);

(statearr_41956_43393[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41933 === (21))){
var inst_41848 = (state_41932[(2)]);
var state_41932__$1 = state_41932;
var statearr_41960_43394 = state_41932__$1;
(statearr_41960_43394[(2)] = inst_41848);

(statearr_41960_43394[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41933 === (31))){
var inst_41876 = (state_41932[(10)]);
var inst_41881 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_41876);
var state_41932__$1 = state_41932;
var statearr_41961_43395 = state_41932__$1;
(statearr_41961_43395[(2)] = inst_41881);

(statearr_41961_43395[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41933 === (32))){
var inst_41869 = (state_41932[(9)]);
var inst_41870 = (state_41932[(19)]);
var inst_41871 = (state_41932[(11)]);
var inst_41868 = (state_41932[(20)]);
var inst_41883 = (state_41932[(2)]);
var inst_41884 = (inst_41871 + (1));
var tmp41957 = inst_41869;
var tmp41958 = inst_41870;
var tmp41959 = inst_41868;
var inst_41868__$1 = tmp41959;
var inst_41869__$1 = tmp41957;
var inst_41870__$1 = tmp41958;
var inst_41871__$1 = inst_41884;
var state_41932__$1 = (function (){var statearr_41962 = state_41932;
(statearr_41962[(9)] = inst_41869__$1);

(statearr_41962[(19)] = inst_41870__$1);

(statearr_41962[(11)] = inst_41871__$1);

(statearr_41962[(21)] = inst_41883);

(statearr_41962[(20)] = inst_41868__$1);

return statearr_41962;
})();
var statearr_41963_43396 = state_41932__$1;
(statearr_41963_43396[(2)] = null);

(statearr_41963_43396[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41933 === (40))){
var inst_41899 = (state_41932[(22)]);
var inst_41903 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_41899);
var state_41932__$1 = state_41932;
var statearr_41964_43397 = state_41932__$1;
(statearr_41964_43397[(2)] = inst_41903);

(statearr_41964_43397[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41933 === (33))){
var inst_41888 = (state_41932[(23)]);
var inst_41891 = cljs.core.chunked_seq_QMARK_(inst_41888);
var state_41932__$1 = state_41932;
if(inst_41891){
var statearr_41965_43398 = state_41932__$1;
(statearr_41965_43398[(1)] = (36));

} else {
var statearr_41966_43399 = state_41932__$1;
(statearr_41966_43399[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41933 === (13))){
var inst_41814 = (state_41932[(24)]);
var inst_41817 = cljs.core.async.close_BANG_(inst_41814);
var state_41932__$1 = state_41932;
var statearr_41967_43400 = state_41932__$1;
(statearr_41967_43400[(2)] = inst_41817);

(statearr_41967_43400[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41933 === (22))){
var inst_41838 = (state_41932[(8)]);
var inst_41841 = cljs.core.async.close_BANG_(inst_41838);
var state_41932__$1 = state_41932;
var statearr_41968_43401 = state_41932__$1;
(statearr_41968_43401[(2)] = inst_41841);

(statearr_41968_43401[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41933 === (36))){
var inst_41888 = (state_41932[(23)]);
var inst_41893 = cljs.core.chunk_first(inst_41888);
var inst_41894 = cljs.core.chunk_rest(inst_41888);
var inst_41895 = cljs.core.count(inst_41893);
var inst_41868 = inst_41894;
var inst_41869 = inst_41893;
var inst_41870 = inst_41895;
var inst_41871 = (0);
var state_41932__$1 = (function (){var statearr_41969 = state_41932;
(statearr_41969[(9)] = inst_41869);

(statearr_41969[(19)] = inst_41870);

(statearr_41969[(11)] = inst_41871);

(statearr_41969[(20)] = inst_41868);

return statearr_41969;
})();
var statearr_41970_43402 = state_41932__$1;
(statearr_41970_43402[(2)] = null);

(statearr_41970_43402[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41933 === (41))){
var inst_41888 = (state_41932[(23)]);
var inst_41905 = (state_41932[(2)]);
var inst_41906 = cljs.core.next(inst_41888);
var inst_41868 = inst_41906;
var inst_41869 = null;
var inst_41870 = (0);
var inst_41871 = (0);
var state_41932__$1 = (function (){var statearr_41971 = state_41932;
(statearr_41971[(9)] = inst_41869);

(statearr_41971[(19)] = inst_41870);

(statearr_41971[(11)] = inst_41871);

(statearr_41971[(20)] = inst_41868);

(statearr_41971[(25)] = inst_41905);

return statearr_41971;
})();
var statearr_41972_43404 = state_41932__$1;
(statearr_41972_43404[(2)] = null);

(statearr_41972_43404[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41933 === (43))){
var state_41932__$1 = state_41932;
var statearr_41973_43405 = state_41932__$1;
(statearr_41973_43405[(2)] = null);

(statearr_41973_43405[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41933 === (29))){
var inst_41915 = (state_41932[(2)]);
var state_41932__$1 = state_41932;
var statearr_41974_43407 = state_41932__$1;
(statearr_41974_43407[(2)] = inst_41915);

(statearr_41974_43407[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41933 === (44))){
var inst_41924 = (state_41932[(2)]);
var state_41932__$1 = (function (){var statearr_41975 = state_41932;
(statearr_41975[(26)] = inst_41924);

return statearr_41975;
})();
var statearr_41976_43408 = state_41932__$1;
(statearr_41976_43408[(2)] = null);

(statearr_41976_43408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41933 === (6))){
var inst_41859 = (state_41932[(27)]);
var inst_41858 = cljs.core.deref(cs);
var inst_41859__$1 = cljs.core.keys(inst_41858);
var inst_41860 = cljs.core.count(inst_41859__$1);
var inst_41861 = cljs.core.reset_BANG_(dctr,inst_41860);
var inst_41866 = cljs.core.seq(inst_41859__$1);
var inst_41868 = inst_41866;
var inst_41869 = null;
var inst_41870 = (0);
var inst_41871 = (0);
var state_41932__$1 = (function (){var statearr_41981 = state_41932;
(statearr_41981[(9)] = inst_41869);

(statearr_41981[(19)] = inst_41870);

(statearr_41981[(11)] = inst_41871);

(statearr_41981[(27)] = inst_41859__$1);

(statearr_41981[(20)] = inst_41868);

(statearr_41981[(28)] = inst_41861);

return statearr_41981;
})();
var statearr_41982_43409 = state_41932__$1;
(statearr_41982_43409[(2)] = null);

(statearr_41982_43409[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41933 === (28))){
var inst_41868 = (state_41932[(20)]);
var inst_41888 = (state_41932[(23)]);
var inst_41888__$1 = cljs.core.seq(inst_41868);
var state_41932__$1 = (function (){var statearr_41984 = state_41932;
(statearr_41984[(23)] = inst_41888__$1);

return statearr_41984;
})();
if(inst_41888__$1){
var statearr_41985_43410 = state_41932__$1;
(statearr_41985_43410[(1)] = (33));

} else {
var statearr_41986_43411 = state_41932__$1;
(statearr_41986_43411[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41933 === (25))){
var inst_41870 = (state_41932[(19)]);
var inst_41871 = (state_41932[(11)]);
var inst_41873 = (inst_41871 < inst_41870);
var inst_41874 = inst_41873;
var state_41932__$1 = state_41932;
if(cljs.core.truth_(inst_41874)){
var statearr_41987_43412 = state_41932__$1;
(statearr_41987_43412[(1)] = (27));

} else {
var statearr_41988_43413 = state_41932__$1;
(statearr_41988_43413[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41933 === (34))){
var state_41932__$1 = state_41932;
var statearr_41989_43414 = state_41932__$1;
(statearr_41989_43414[(2)] = null);

(statearr_41989_43414[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41933 === (17))){
var state_41932__$1 = state_41932;
var statearr_41990_43415 = state_41932__$1;
(statearr_41990_43415[(2)] = null);

(statearr_41990_43415[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41933 === (3))){
var inst_41929 = (state_41932[(2)]);
var state_41932__$1 = state_41932;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41932__$1,inst_41929);
} else {
if((state_val_41933 === (12))){
var inst_41853 = (state_41932[(2)]);
var state_41932__$1 = state_41932;
var statearr_41992_43416 = state_41932__$1;
(statearr_41992_43416[(2)] = inst_41853);

(statearr_41992_43416[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41933 === (2))){
var state_41932__$1 = state_41932;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41932__$1,(4),ch);
} else {
if((state_val_41933 === (23))){
var state_41932__$1 = state_41932;
var statearr_41996_43417 = state_41932__$1;
(statearr_41996_43417[(2)] = null);

(statearr_41996_43417[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41933 === (35))){
var inst_41912 = (state_41932[(2)]);
var state_41932__$1 = state_41932;
var statearr_41997_43418 = state_41932__$1;
(statearr_41997_43418[(2)] = inst_41912);

(statearr_41997_43418[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41933 === (19))){
var inst_41824 = (state_41932[(7)]);
var inst_41829 = cljs.core.chunk_first(inst_41824);
var inst_41830 = cljs.core.chunk_rest(inst_41824);
var inst_41831 = cljs.core.count(inst_41829);
var inst_41802 = inst_41830;
var inst_41803 = inst_41829;
var inst_41804 = inst_41831;
var inst_41805 = (0);
var state_41932__$1 = (function (){var statearr_41998 = state_41932;
(statearr_41998[(13)] = inst_41802);

(statearr_41998[(14)] = inst_41803);

(statearr_41998[(16)] = inst_41805);

(statearr_41998[(17)] = inst_41804);

return statearr_41998;
})();
var statearr_41999_43419 = state_41932__$1;
(statearr_41999_43419[(2)] = null);

(statearr_41999_43419[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41933 === (11))){
var inst_41802 = (state_41932[(13)]);
var inst_41824 = (state_41932[(7)]);
var inst_41824__$1 = cljs.core.seq(inst_41802);
var state_41932__$1 = (function (){var statearr_42001 = state_41932;
(statearr_42001[(7)] = inst_41824__$1);

return statearr_42001;
})();
if(inst_41824__$1){
var statearr_42002_43420 = state_41932__$1;
(statearr_42002_43420[(1)] = (16));

} else {
var statearr_42003_43421 = state_41932__$1;
(statearr_42003_43421[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41933 === (9))){
var inst_41855 = (state_41932[(2)]);
var state_41932__$1 = state_41932;
var statearr_42004_43424 = state_41932__$1;
(statearr_42004_43424[(2)] = inst_41855);

(statearr_42004_43424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41933 === (5))){
var inst_41800 = cljs.core.deref(cs);
var inst_41801 = cljs.core.seq(inst_41800);
var inst_41802 = inst_41801;
var inst_41803 = null;
var inst_41804 = (0);
var inst_41805 = (0);
var state_41932__$1 = (function (){var statearr_42006 = state_41932;
(statearr_42006[(13)] = inst_41802);

(statearr_42006[(14)] = inst_41803);

(statearr_42006[(16)] = inst_41805);

(statearr_42006[(17)] = inst_41804);

return statearr_42006;
})();
var statearr_42007_43426 = state_41932__$1;
(statearr_42007_43426[(2)] = null);

(statearr_42007_43426[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41933 === (14))){
var state_41932__$1 = state_41932;
var statearr_42010_43427 = state_41932__$1;
(statearr_42010_43427[(2)] = null);

(statearr_42010_43427[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41933 === (45))){
var inst_41921 = (state_41932[(2)]);
var state_41932__$1 = state_41932;
var statearr_42011_43428 = state_41932__$1;
(statearr_42011_43428[(2)] = inst_41921);

(statearr_42011_43428[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41933 === (26))){
var inst_41859 = (state_41932[(27)]);
var inst_41917 = (state_41932[(2)]);
var inst_41918 = cljs.core.seq(inst_41859);
var state_41932__$1 = (function (){var statearr_42012 = state_41932;
(statearr_42012[(29)] = inst_41917);

return statearr_42012;
})();
if(inst_41918){
var statearr_42013_43430 = state_41932__$1;
(statearr_42013_43430[(1)] = (42));

} else {
var statearr_42014_43431 = state_41932__$1;
(statearr_42014_43431[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41933 === (16))){
var inst_41824 = (state_41932[(7)]);
var inst_41826 = cljs.core.chunked_seq_QMARK_(inst_41824);
var state_41932__$1 = state_41932;
if(inst_41826){
var statearr_42015_43432 = state_41932__$1;
(statearr_42015_43432[(1)] = (19));

} else {
var statearr_42016_43433 = state_41932__$1;
(statearr_42016_43433[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41933 === (38))){
var inst_41909 = (state_41932[(2)]);
var state_41932__$1 = state_41932;
var statearr_42017_43434 = state_41932__$1;
(statearr_42017_43434[(2)] = inst_41909);

(statearr_42017_43434[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41933 === (30))){
var state_41932__$1 = state_41932;
var statearr_42018_43436 = state_41932__$1;
(statearr_42018_43436[(2)] = null);

(statearr_42018_43436[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41933 === (10))){
var inst_41803 = (state_41932[(14)]);
var inst_41805 = (state_41932[(16)]);
var inst_41813 = cljs.core._nth(inst_41803,inst_41805);
var inst_41814 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41813,(0),null);
var inst_41815 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41813,(1),null);
var state_41932__$1 = (function (){var statearr_42020 = state_41932;
(statearr_42020[(24)] = inst_41814);

return statearr_42020;
})();
if(cljs.core.truth_(inst_41815)){
var statearr_42021_43437 = state_41932__$1;
(statearr_42021_43437[(1)] = (13));

} else {
var statearr_42022_43438 = state_41932__$1;
(statearr_42022_43438[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41933 === (18))){
var inst_41851 = (state_41932[(2)]);
var state_41932__$1 = state_41932;
var statearr_42025_43439 = state_41932__$1;
(statearr_42025_43439[(2)] = inst_41851);

(statearr_42025_43439[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41933 === (42))){
var state_41932__$1 = state_41932;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41932__$1,(45),dchan);
} else {
if((state_val_41933 === (37))){
var inst_41888 = (state_41932[(23)]);
var inst_41899 = (state_41932[(22)]);
var inst_41793 = (state_41932[(12)]);
var inst_41899__$1 = cljs.core.first(inst_41888);
var inst_41900 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_41899__$1,inst_41793,done);
var state_41932__$1 = (function (){var statearr_42027 = state_41932;
(statearr_42027[(22)] = inst_41899__$1);

return statearr_42027;
})();
if(cljs.core.truth_(inst_41900)){
var statearr_42028_43440 = state_41932__$1;
(statearr_42028_43440[(1)] = (39));

} else {
var statearr_42029_43441 = state_41932__$1;
(statearr_42029_43441[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41933 === (8))){
var inst_41805 = (state_41932[(16)]);
var inst_41804 = (state_41932[(17)]);
var inst_41807 = (inst_41805 < inst_41804);
var inst_41808 = inst_41807;
var state_41932__$1 = state_41932;
if(cljs.core.truth_(inst_41808)){
var statearr_42031_43442 = state_41932__$1;
(statearr_42031_43442[(1)] = (10));

} else {
var statearr_42033_43443 = state_41932__$1;
(statearr_42033_43443[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__39928__auto__ = null;
var cljs$core$async$mult_$_state_machine__39928__auto____0 = (function (){
var statearr_42035 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42035[(0)] = cljs$core$async$mult_$_state_machine__39928__auto__);

(statearr_42035[(1)] = (1));

return statearr_42035;
});
var cljs$core$async$mult_$_state_machine__39928__auto____1 = (function (state_41932){
while(true){
var ret_value__39929__auto__ = (function (){try{while(true){
var result__39930__auto__ = switch__39927__auto__(state_41932);
if(cljs.core.keyword_identical_QMARK_(result__39930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39930__auto__;
}
break;
}
}catch (e42037){var ex__39931__auto__ = e42037;
var statearr_42038_43444 = state_41932;
(statearr_42038_43444[(2)] = ex__39931__auto__);


if(cljs.core.seq((state_41932[(4)]))){
var statearr_42039_43445 = state_41932;
(statearr_42039_43445[(1)] = cljs.core.first((state_41932[(4)])));

} else {
throw ex__39931__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43446 = state_41932;
state_41932 = G__43446;
continue;
} else {
return ret_value__39929__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__39928__auto__ = function(state_41932){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__39928__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__39928__auto____1.call(this,state_41932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__39928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__39928__auto____0;
cljs$core$async$mult_$_state_machine__39928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__39928__auto____1;
return cljs$core$async$mult_$_state_machine__39928__auto__;
})()
})();
var state__41021__auto__ = (function (){var statearr_42040 = f__41020__auto__();
(statearr_42040[(6)] = c__41019__auto___43380);

return statearr_42040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41021__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__42043 = arguments.length;
switch (G__42043) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_43449 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_43449(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_43451 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_43451(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_43453 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_43453(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_43455 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_43455(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_43456 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_43456(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___43457 = arguments.length;
var i__4865__auto___43458 = (0);
while(true){
if((i__4865__auto___43458 < len__4864__auto___43457)){
args__4870__auto__.push((arguments[i__4865__auto___43458]));

var G__43459 = (i__4865__auto___43458 + (1));
i__4865__auto___43458 = G__43459;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__42073){
var map__42074 = p__42073;
var map__42074__$1 = cljs.core.__destructure_map(map__42074);
var opts = map__42074__$1;
var statearr_42075_43460 = state;
(statearr_42075_43460[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_42076_43461 = state;
(statearr_42076_43461[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_42077_43462 = state;
(statearr_42077_43462[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq42069){
var G__42070 = cljs.core.first(seq42069);
var seq42069__$1 = cljs.core.next(seq42069);
var G__42071 = cljs.core.first(seq42069__$1);
var seq42069__$2 = cljs.core.next(seq42069__$1);
var G__42072 = cljs.core.first(seq42069__$2);
var seq42069__$3 = cljs.core.next(seq42069__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42070,G__42071,G__42072,seq42069__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42079 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42079 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta42080){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta42080 = meta42080;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42079.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42081,meta42080__$1){
var self__ = this;
var _42081__$1 = this;
return (new cljs.core.async.t_cljs$core$async42079(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta42080__$1));
}));

(cljs.core.async.t_cljs$core$async42079.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42081){
var self__ = this;
var _42081__$1 = this;
return self__.meta42080;
}));

(cljs.core.async.t_cljs$core$async42079.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42079.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async42079.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42079.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async42079.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async42079.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async42079.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async42079.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async42079.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta42080","meta42080",836225507,null)], null);
}));

(cljs.core.async.t_cljs$core$async42079.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42079.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42079");

(cljs.core.async.t_cljs$core$async42079.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async42079");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42079.
 */
cljs.core.async.__GT_t_cljs$core$async42079 = (function cljs$core$async$mix_$___GT_t_cljs$core$async42079(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta42080){
return (new cljs.core.async.t_cljs$core$async42079(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta42080));
});

}

return (new cljs.core.async.t_cljs$core$async42079(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__41019__auto___43472 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41020__auto__ = (function (){var switch__39927__auto__ = (function (state_42154){
var state_val_42155 = (state_42154[(1)]);
if((state_val_42155 === (7))){
var inst_42113 = (state_42154[(2)]);
var state_42154__$1 = state_42154;
if(cljs.core.truth_(inst_42113)){
var statearr_42157_43473 = state_42154__$1;
(statearr_42157_43473[(1)] = (8));

} else {
var statearr_42158_43474 = state_42154__$1;
(statearr_42158_43474[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42155 === (20))){
var inst_42106 = (state_42154[(7)]);
var state_42154__$1 = state_42154;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42154__$1,(23),out,inst_42106);
} else {
if((state_val_42155 === (1))){
var inst_42089 = calc_state();
var inst_42090 = cljs.core.__destructure_map(inst_42089);
var inst_42091 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42090,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42092 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42090,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42093 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42090,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_42094 = inst_42089;
var state_42154__$1 = (function (){var statearr_42163 = state_42154;
(statearr_42163[(8)] = inst_42094);

(statearr_42163[(9)] = inst_42092);

(statearr_42163[(10)] = inst_42093);

(statearr_42163[(11)] = inst_42091);

return statearr_42163;
})();
var statearr_42164_43475 = state_42154__$1;
(statearr_42164_43475[(2)] = null);

(statearr_42164_43475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42155 === (24))){
var inst_42097 = (state_42154[(12)]);
var inst_42094 = inst_42097;
var state_42154__$1 = (function (){var statearr_42165 = state_42154;
(statearr_42165[(8)] = inst_42094);

return statearr_42165;
})();
var statearr_42166_43476 = state_42154__$1;
(statearr_42166_43476[(2)] = null);

(statearr_42166_43476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42155 === (4))){
var inst_42108 = (state_42154[(13)]);
var inst_42106 = (state_42154[(7)]);
var inst_42105 = (state_42154[(2)]);
var inst_42106__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42105,(0),null);
var inst_42107 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42105,(1),null);
var inst_42108__$1 = (inst_42106__$1 == null);
var state_42154__$1 = (function (){var statearr_42167 = state_42154;
(statearr_42167[(13)] = inst_42108__$1);

(statearr_42167[(7)] = inst_42106__$1);

(statearr_42167[(14)] = inst_42107);

return statearr_42167;
})();
if(cljs.core.truth_(inst_42108__$1)){
var statearr_42168_43477 = state_42154__$1;
(statearr_42168_43477[(1)] = (5));

} else {
var statearr_42169_43478 = state_42154__$1;
(statearr_42169_43478[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42155 === (15))){
var inst_42098 = (state_42154[(15)]);
var inst_42127 = (state_42154[(16)]);
var inst_42127__$1 = cljs.core.empty_QMARK_(inst_42098);
var state_42154__$1 = (function (){var statearr_42170 = state_42154;
(statearr_42170[(16)] = inst_42127__$1);

return statearr_42170;
})();
if(inst_42127__$1){
var statearr_42171_43479 = state_42154__$1;
(statearr_42171_43479[(1)] = (17));

} else {
var statearr_42173_43480 = state_42154__$1;
(statearr_42173_43480[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42155 === (21))){
var inst_42097 = (state_42154[(12)]);
var inst_42094 = inst_42097;
var state_42154__$1 = (function (){var statearr_42174 = state_42154;
(statearr_42174[(8)] = inst_42094);

return statearr_42174;
})();
var statearr_42179_43481 = state_42154__$1;
(statearr_42179_43481[(2)] = null);

(statearr_42179_43481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42155 === (13))){
var inst_42120 = (state_42154[(2)]);
var inst_42121 = calc_state();
var inst_42094 = inst_42121;
var state_42154__$1 = (function (){var statearr_42181 = state_42154;
(statearr_42181[(8)] = inst_42094);

(statearr_42181[(17)] = inst_42120);

return statearr_42181;
})();
var statearr_42182_43482 = state_42154__$1;
(statearr_42182_43482[(2)] = null);

(statearr_42182_43482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42155 === (22))){
var inst_42147 = (state_42154[(2)]);
var state_42154__$1 = state_42154;
var statearr_42183_43485 = state_42154__$1;
(statearr_42183_43485[(2)] = inst_42147);

(statearr_42183_43485[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42155 === (6))){
var inst_42107 = (state_42154[(14)]);
var inst_42111 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42107,change);
var state_42154__$1 = state_42154;
var statearr_42184_43486 = state_42154__$1;
(statearr_42184_43486[(2)] = inst_42111);

(statearr_42184_43486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42155 === (25))){
var state_42154__$1 = state_42154;
var statearr_42185_43487 = state_42154__$1;
(statearr_42185_43487[(2)] = null);

(statearr_42185_43487[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42155 === (17))){
var inst_42107 = (state_42154[(14)]);
var inst_42099 = (state_42154[(18)]);
var inst_42129 = (inst_42099.cljs$core$IFn$_invoke$arity$1 ? inst_42099.cljs$core$IFn$_invoke$arity$1(inst_42107) : inst_42099.call(null,inst_42107));
var inst_42130 = cljs.core.not(inst_42129);
var state_42154__$1 = state_42154;
var statearr_42188_43488 = state_42154__$1;
(statearr_42188_43488[(2)] = inst_42130);

(statearr_42188_43488[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42155 === (3))){
var inst_42151 = (state_42154[(2)]);
var state_42154__$1 = state_42154;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42154__$1,inst_42151);
} else {
if((state_val_42155 === (12))){
var state_42154__$1 = state_42154;
var statearr_42194_43489 = state_42154__$1;
(statearr_42194_43489[(2)] = null);

(statearr_42194_43489[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42155 === (2))){
var inst_42094 = (state_42154[(8)]);
var inst_42097 = (state_42154[(12)]);
var inst_42097__$1 = cljs.core.__destructure_map(inst_42094);
var inst_42098 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42097__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42099 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42097__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42100 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42097__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_42154__$1 = (function (){var statearr_42198 = state_42154;
(statearr_42198[(15)] = inst_42098);

(statearr_42198[(12)] = inst_42097__$1);

(statearr_42198[(18)] = inst_42099);

return statearr_42198;
})();
return cljs.core.async.ioc_alts_BANG_(state_42154__$1,(4),inst_42100);
} else {
if((state_val_42155 === (23))){
var inst_42138 = (state_42154[(2)]);
var state_42154__$1 = state_42154;
if(cljs.core.truth_(inst_42138)){
var statearr_42201_43490 = state_42154__$1;
(statearr_42201_43490[(1)] = (24));

} else {
var statearr_42202_43491 = state_42154__$1;
(statearr_42202_43491[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42155 === (19))){
var inst_42133 = (state_42154[(2)]);
var state_42154__$1 = state_42154;
var statearr_42204_43492 = state_42154__$1;
(statearr_42204_43492[(2)] = inst_42133);

(statearr_42204_43492[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42155 === (11))){
var inst_42107 = (state_42154[(14)]);
var inst_42117 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_42107);
var state_42154__$1 = state_42154;
var statearr_42206_43493 = state_42154__$1;
(statearr_42206_43493[(2)] = inst_42117);

(statearr_42206_43493[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42155 === (9))){
var inst_42124 = (state_42154[(19)]);
var inst_42098 = (state_42154[(15)]);
var inst_42107 = (state_42154[(14)]);
var inst_42124__$1 = (inst_42098.cljs$core$IFn$_invoke$arity$1 ? inst_42098.cljs$core$IFn$_invoke$arity$1(inst_42107) : inst_42098.call(null,inst_42107));
var state_42154__$1 = (function (){var statearr_42207 = state_42154;
(statearr_42207[(19)] = inst_42124__$1);

return statearr_42207;
})();
if(cljs.core.truth_(inst_42124__$1)){
var statearr_42208_43496 = state_42154__$1;
(statearr_42208_43496[(1)] = (14));

} else {
var statearr_42209_43497 = state_42154__$1;
(statearr_42209_43497[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42155 === (5))){
var inst_42108 = (state_42154[(13)]);
var state_42154__$1 = state_42154;
var statearr_42210_43498 = state_42154__$1;
(statearr_42210_43498[(2)] = inst_42108);

(statearr_42210_43498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42155 === (14))){
var inst_42124 = (state_42154[(19)]);
var state_42154__$1 = state_42154;
var statearr_42211_43499 = state_42154__$1;
(statearr_42211_43499[(2)] = inst_42124);

(statearr_42211_43499[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42155 === (26))){
var inst_42143 = (state_42154[(2)]);
var state_42154__$1 = state_42154;
var statearr_42212_43500 = state_42154__$1;
(statearr_42212_43500[(2)] = inst_42143);

(statearr_42212_43500[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42155 === (16))){
var inst_42135 = (state_42154[(2)]);
var state_42154__$1 = state_42154;
if(cljs.core.truth_(inst_42135)){
var statearr_42213_43501 = state_42154__$1;
(statearr_42213_43501[(1)] = (20));

} else {
var statearr_42214_43502 = state_42154__$1;
(statearr_42214_43502[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42155 === (10))){
var inst_42149 = (state_42154[(2)]);
var state_42154__$1 = state_42154;
var statearr_42215_43503 = state_42154__$1;
(statearr_42215_43503[(2)] = inst_42149);

(statearr_42215_43503[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42155 === (18))){
var inst_42127 = (state_42154[(16)]);
var state_42154__$1 = state_42154;
var statearr_42216_43504 = state_42154__$1;
(statearr_42216_43504[(2)] = inst_42127);

(statearr_42216_43504[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42155 === (8))){
var inst_42106 = (state_42154[(7)]);
var inst_42115 = (inst_42106 == null);
var state_42154__$1 = state_42154;
if(cljs.core.truth_(inst_42115)){
var statearr_42217_43505 = state_42154__$1;
(statearr_42217_43505[(1)] = (11));

} else {
var statearr_42218_43506 = state_42154__$1;
(statearr_42218_43506[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__39928__auto__ = null;
var cljs$core$async$mix_$_state_machine__39928__auto____0 = (function (){
var statearr_42219 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42219[(0)] = cljs$core$async$mix_$_state_machine__39928__auto__);

(statearr_42219[(1)] = (1));

return statearr_42219;
});
var cljs$core$async$mix_$_state_machine__39928__auto____1 = (function (state_42154){
while(true){
var ret_value__39929__auto__ = (function (){try{while(true){
var result__39930__auto__ = switch__39927__auto__(state_42154);
if(cljs.core.keyword_identical_QMARK_(result__39930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39930__auto__;
}
break;
}
}catch (e42220){var ex__39931__auto__ = e42220;
var statearr_42221_43507 = state_42154;
(statearr_42221_43507[(2)] = ex__39931__auto__);


if(cljs.core.seq((state_42154[(4)]))){
var statearr_42222_43508 = state_42154;
(statearr_42222_43508[(1)] = cljs.core.first((state_42154[(4)])));

} else {
throw ex__39931__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43509 = state_42154;
state_42154 = G__43509;
continue;
} else {
return ret_value__39929__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__39928__auto__ = function(state_42154){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__39928__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__39928__auto____1.call(this,state_42154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__39928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__39928__auto____0;
cljs$core$async$mix_$_state_machine__39928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__39928__auto____1;
return cljs$core$async$mix_$_state_machine__39928__auto__;
})()
})();
var state__41021__auto__ = (function (){var statearr_42224 = f__41020__auto__();
(statearr_42224[(6)] = c__41019__auto___43472);

return statearr_42224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41021__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_43511 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_43511(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_43512 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_43512(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_43515 = (function() {
var G__43516 = null;
var G__43516__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__43516__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__43516 = function(p,v){
switch(arguments.length){
case 1:
return G__43516__1.call(this,p);
case 2:
return G__43516__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__43516.cljs$core$IFn$_invoke$arity$1 = G__43516__1;
G__43516.cljs$core$IFn$_invoke$arity$2 = G__43516__2;
return G__43516;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__42236 = arguments.length;
switch (G__42236) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_43515(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_43515(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__42246 = arguments.length;
switch (G__42246) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__42244_SHARP_){
if(cljs.core.truth_((p1__42244_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__42244_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__42244_SHARP_.call(null,topic)))){
return p1__42244_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__42244_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42247 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42247 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta42248){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta42248 = meta42248;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42247.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42249,meta42248__$1){
var self__ = this;
var _42249__$1 = this;
return (new cljs.core.async.t_cljs$core$async42247(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta42248__$1));
}));

(cljs.core.async.t_cljs$core$async42247.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42249){
var self__ = this;
var _42249__$1 = this;
return self__.meta42248;
}));

(cljs.core.async.t_cljs$core$async42247.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42247.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async42247.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42247.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async42247.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async42247.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async42247.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async42247.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta42248","meta42248",-848321262,null)], null);
}));

(cljs.core.async.t_cljs$core$async42247.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42247.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42247");

(cljs.core.async.t_cljs$core$async42247.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async42247");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42247.
 */
cljs.core.async.__GT_t_cljs$core$async42247 = (function cljs$core$async$__GT_t_cljs$core$async42247(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42248){
return (new cljs.core.async.t_cljs$core$async42247(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42248));
});

}

return (new cljs.core.async.t_cljs$core$async42247(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__41019__auto___43541 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41020__auto__ = (function (){var switch__39927__auto__ = (function (state_42326){
var state_val_42327 = (state_42326[(1)]);
if((state_val_42327 === (7))){
var inst_42321 = (state_42326[(2)]);
var state_42326__$1 = state_42326;
var statearr_42334_43544 = state_42326__$1;
(statearr_42334_43544[(2)] = inst_42321);

(statearr_42334_43544[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42327 === (20))){
var state_42326__$1 = state_42326;
var statearr_42335_43545 = state_42326__$1;
(statearr_42335_43545[(2)] = null);

(statearr_42335_43545[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42327 === (1))){
var state_42326__$1 = state_42326;
var statearr_42336_43547 = state_42326__$1;
(statearr_42336_43547[(2)] = null);

(statearr_42336_43547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42327 === (24))){
var inst_42304 = (state_42326[(7)]);
var inst_42313 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_42304);
var state_42326__$1 = state_42326;
var statearr_42338_43551 = state_42326__$1;
(statearr_42338_43551[(2)] = inst_42313);

(statearr_42338_43551[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42327 === (4))){
var inst_42255 = (state_42326[(8)]);
var inst_42255__$1 = (state_42326[(2)]);
var inst_42256 = (inst_42255__$1 == null);
var state_42326__$1 = (function (){var statearr_42343 = state_42326;
(statearr_42343[(8)] = inst_42255__$1);

return statearr_42343;
})();
if(cljs.core.truth_(inst_42256)){
var statearr_42344_43553 = state_42326__$1;
(statearr_42344_43553[(1)] = (5));

} else {
var statearr_42345_43555 = state_42326__$1;
(statearr_42345_43555[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42327 === (15))){
var inst_42298 = (state_42326[(2)]);
var state_42326__$1 = state_42326;
var statearr_42348_43556 = state_42326__$1;
(statearr_42348_43556[(2)] = inst_42298);

(statearr_42348_43556[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42327 === (21))){
var inst_42318 = (state_42326[(2)]);
var state_42326__$1 = (function (){var statearr_42350 = state_42326;
(statearr_42350[(9)] = inst_42318);

return statearr_42350;
})();
var statearr_42351_43560 = state_42326__$1;
(statearr_42351_43560[(2)] = null);

(statearr_42351_43560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42327 === (13))){
var inst_42279 = (state_42326[(10)]);
var inst_42282 = cljs.core.chunked_seq_QMARK_(inst_42279);
var state_42326__$1 = state_42326;
if(inst_42282){
var statearr_42352_43564 = state_42326__$1;
(statearr_42352_43564[(1)] = (16));

} else {
var statearr_42353_43565 = state_42326__$1;
(statearr_42353_43565[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42327 === (22))){
var inst_42310 = (state_42326[(2)]);
var state_42326__$1 = state_42326;
if(cljs.core.truth_(inst_42310)){
var statearr_42354_43566 = state_42326__$1;
(statearr_42354_43566[(1)] = (23));

} else {
var statearr_42355_43567 = state_42326__$1;
(statearr_42355_43567[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42327 === (6))){
var inst_42306 = (state_42326[(11)]);
var inst_42304 = (state_42326[(7)]);
var inst_42255 = (state_42326[(8)]);
var inst_42304__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_42255) : topic_fn.call(null,inst_42255));
var inst_42305 = cljs.core.deref(mults);
var inst_42306__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42305,inst_42304__$1);
var state_42326__$1 = (function (){var statearr_42356 = state_42326;
(statearr_42356[(11)] = inst_42306__$1);

(statearr_42356[(7)] = inst_42304__$1);

return statearr_42356;
})();
if(cljs.core.truth_(inst_42306__$1)){
var statearr_42357_43568 = state_42326__$1;
(statearr_42357_43568[(1)] = (19));

} else {
var statearr_42358_43569 = state_42326__$1;
(statearr_42358_43569[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42327 === (25))){
var inst_42315 = (state_42326[(2)]);
var state_42326__$1 = state_42326;
var statearr_42359_43570 = state_42326__$1;
(statearr_42359_43570[(2)] = inst_42315);

(statearr_42359_43570[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42327 === (17))){
var inst_42279 = (state_42326[(10)]);
var inst_42289 = cljs.core.first(inst_42279);
var inst_42290 = cljs.core.async.muxch_STAR_(inst_42289);
var inst_42291 = cljs.core.async.close_BANG_(inst_42290);
var inst_42292 = cljs.core.next(inst_42279);
var inst_42265 = inst_42292;
var inst_42266 = null;
var inst_42267 = (0);
var inst_42268 = (0);
var state_42326__$1 = (function (){var statearr_42360 = state_42326;
(statearr_42360[(12)] = inst_42265);

(statearr_42360[(13)] = inst_42266);

(statearr_42360[(14)] = inst_42291);

(statearr_42360[(15)] = inst_42267);

(statearr_42360[(16)] = inst_42268);

return statearr_42360;
})();
var statearr_42361_43571 = state_42326__$1;
(statearr_42361_43571[(2)] = null);

(statearr_42361_43571[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42327 === (3))){
var inst_42323 = (state_42326[(2)]);
var state_42326__$1 = state_42326;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42326__$1,inst_42323);
} else {
if((state_val_42327 === (12))){
var inst_42300 = (state_42326[(2)]);
var state_42326__$1 = state_42326;
var statearr_42365_43572 = state_42326__$1;
(statearr_42365_43572[(2)] = inst_42300);

(statearr_42365_43572[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42327 === (2))){
var state_42326__$1 = state_42326;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42326__$1,(4),ch);
} else {
if((state_val_42327 === (23))){
var state_42326__$1 = state_42326;
var statearr_42366_43573 = state_42326__$1;
(statearr_42366_43573[(2)] = null);

(statearr_42366_43573[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42327 === (19))){
var inst_42306 = (state_42326[(11)]);
var inst_42255 = (state_42326[(8)]);
var inst_42308 = cljs.core.async.muxch_STAR_(inst_42306);
var state_42326__$1 = state_42326;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42326__$1,(22),inst_42308,inst_42255);
} else {
if((state_val_42327 === (11))){
var inst_42265 = (state_42326[(12)]);
var inst_42279 = (state_42326[(10)]);
var inst_42279__$1 = cljs.core.seq(inst_42265);
var state_42326__$1 = (function (){var statearr_42367 = state_42326;
(statearr_42367[(10)] = inst_42279__$1);

return statearr_42367;
})();
if(inst_42279__$1){
var statearr_42368_43574 = state_42326__$1;
(statearr_42368_43574[(1)] = (13));

} else {
var statearr_42369_43575 = state_42326__$1;
(statearr_42369_43575[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42327 === (9))){
var inst_42302 = (state_42326[(2)]);
var state_42326__$1 = state_42326;
var statearr_42371_43576 = state_42326__$1;
(statearr_42371_43576[(2)] = inst_42302);

(statearr_42371_43576[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42327 === (5))){
var inst_42262 = cljs.core.deref(mults);
var inst_42263 = cljs.core.vals(inst_42262);
var inst_42264 = cljs.core.seq(inst_42263);
var inst_42265 = inst_42264;
var inst_42266 = null;
var inst_42267 = (0);
var inst_42268 = (0);
var state_42326__$1 = (function (){var statearr_42377 = state_42326;
(statearr_42377[(12)] = inst_42265);

(statearr_42377[(13)] = inst_42266);

(statearr_42377[(15)] = inst_42267);

(statearr_42377[(16)] = inst_42268);

return statearr_42377;
})();
var statearr_42378_43577 = state_42326__$1;
(statearr_42378_43577[(2)] = null);

(statearr_42378_43577[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42327 === (14))){
var state_42326__$1 = state_42326;
var statearr_42382_43578 = state_42326__$1;
(statearr_42382_43578[(2)] = null);

(statearr_42382_43578[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42327 === (16))){
var inst_42279 = (state_42326[(10)]);
var inst_42284 = cljs.core.chunk_first(inst_42279);
var inst_42285 = cljs.core.chunk_rest(inst_42279);
var inst_42286 = cljs.core.count(inst_42284);
var inst_42265 = inst_42285;
var inst_42266 = inst_42284;
var inst_42267 = inst_42286;
var inst_42268 = (0);
var state_42326__$1 = (function (){var statearr_42385 = state_42326;
(statearr_42385[(12)] = inst_42265);

(statearr_42385[(13)] = inst_42266);

(statearr_42385[(15)] = inst_42267);

(statearr_42385[(16)] = inst_42268);

return statearr_42385;
})();
var statearr_42389_43579 = state_42326__$1;
(statearr_42389_43579[(2)] = null);

(statearr_42389_43579[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42327 === (10))){
var inst_42265 = (state_42326[(12)]);
var inst_42266 = (state_42326[(13)]);
var inst_42267 = (state_42326[(15)]);
var inst_42268 = (state_42326[(16)]);
var inst_42273 = cljs.core._nth(inst_42266,inst_42268);
var inst_42274 = cljs.core.async.muxch_STAR_(inst_42273);
var inst_42275 = cljs.core.async.close_BANG_(inst_42274);
var inst_42276 = (inst_42268 + (1));
var tmp42379 = inst_42265;
var tmp42380 = inst_42266;
var tmp42381 = inst_42267;
var inst_42265__$1 = tmp42379;
var inst_42266__$1 = tmp42380;
var inst_42267__$1 = tmp42381;
var inst_42268__$1 = inst_42276;
var state_42326__$1 = (function (){var statearr_42392 = state_42326;
(statearr_42392[(12)] = inst_42265__$1);

(statearr_42392[(13)] = inst_42266__$1);

(statearr_42392[(15)] = inst_42267__$1);

(statearr_42392[(16)] = inst_42268__$1);

(statearr_42392[(17)] = inst_42275);

return statearr_42392;
})();
var statearr_42393_43580 = state_42326__$1;
(statearr_42393_43580[(2)] = null);

(statearr_42393_43580[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42327 === (18))){
var inst_42295 = (state_42326[(2)]);
var state_42326__$1 = state_42326;
var statearr_42394_43581 = state_42326__$1;
(statearr_42394_43581[(2)] = inst_42295);

(statearr_42394_43581[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42327 === (8))){
var inst_42267 = (state_42326[(15)]);
var inst_42268 = (state_42326[(16)]);
var inst_42270 = (inst_42268 < inst_42267);
var inst_42271 = inst_42270;
var state_42326__$1 = state_42326;
if(cljs.core.truth_(inst_42271)){
var statearr_42395_43582 = state_42326__$1;
(statearr_42395_43582[(1)] = (10));

} else {
var statearr_42396_43583 = state_42326__$1;
(statearr_42396_43583[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__39928__auto__ = null;
var cljs$core$async$state_machine__39928__auto____0 = (function (){
var statearr_42397 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42397[(0)] = cljs$core$async$state_machine__39928__auto__);

(statearr_42397[(1)] = (1));

return statearr_42397;
});
var cljs$core$async$state_machine__39928__auto____1 = (function (state_42326){
while(true){
var ret_value__39929__auto__ = (function (){try{while(true){
var result__39930__auto__ = switch__39927__auto__(state_42326);
if(cljs.core.keyword_identical_QMARK_(result__39930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39930__auto__;
}
break;
}
}catch (e42398){var ex__39931__auto__ = e42398;
var statearr_42399_43584 = state_42326;
(statearr_42399_43584[(2)] = ex__39931__auto__);


if(cljs.core.seq((state_42326[(4)]))){
var statearr_42400_43585 = state_42326;
(statearr_42400_43585[(1)] = cljs.core.first((state_42326[(4)])));

} else {
throw ex__39931__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43588 = state_42326;
state_42326 = G__43588;
continue;
} else {
return ret_value__39929__auto__;
}
break;
}
});
cljs$core$async$state_machine__39928__auto__ = function(state_42326){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39928__auto____1.call(this,state_42326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39928__auto____0;
cljs$core$async$state_machine__39928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39928__auto____1;
return cljs$core$async$state_machine__39928__auto__;
})()
})();
var state__41021__auto__ = (function (){var statearr_42401 = f__41020__auto__();
(statearr_42401[(6)] = c__41019__auto___43541);

return statearr_42401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41021__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__42406 = arguments.length;
switch (G__42406) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__42408 = arguments.length;
switch (G__42408) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__42411 = arguments.length;
switch (G__42411) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__41019__auto___43594 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41020__auto__ = (function (){var switch__39927__auto__ = (function (state_42465){
var state_val_42466 = (state_42465[(1)]);
if((state_val_42466 === (7))){
var state_42465__$1 = state_42465;
var statearr_42467_43595 = state_42465__$1;
(statearr_42467_43595[(2)] = null);

(statearr_42467_43595[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42466 === (1))){
var state_42465__$1 = state_42465;
var statearr_42469_43596 = state_42465__$1;
(statearr_42469_43596[(2)] = null);

(statearr_42469_43596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42466 === (4))){
var inst_42416 = (state_42465[(7)]);
var inst_42417 = (state_42465[(8)]);
var inst_42419 = (inst_42417 < inst_42416);
var state_42465__$1 = state_42465;
if(cljs.core.truth_(inst_42419)){
var statearr_42470_43597 = state_42465__$1;
(statearr_42470_43597[(1)] = (6));

} else {
var statearr_42471_43598 = state_42465__$1;
(statearr_42471_43598[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42466 === (15))){
var inst_42448 = (state_42465[(9)]);
var inst_42453 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_42448);
var state_42465__$1 = state_42465;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42465__$1,(17),out,inst_42453);
} else {
if((state_val_42466 === (13))){
var inst_42448 = (state_42465[(9)]);
var inst_42448__$1 = (state_42465[(2)]);
var inst_42449 = cljs.core.some(cljs.core.nil_QMARK_,inst_42448__$1);
var state_42465__$1 = (function (){var statearr_42473 = state_42465;
(statearr_42473[(9)] = inst_42448__$1);

return statearr_42473;
})();
if(cljs.core.truth_(inst_42449)){
var statearr_42474_43604 = state_42465__$1;
(statearr_42474_43604[(1)] = (14));

} else {
var statearr_42475_43605 = state_42465__$1;
(statearr_42475_43605[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42466 === (6))){
var state_42465__$1 = state_42465;
var statearr_42476_43606 = state_42465__$1;
(statearr_42476_43606[(2)] = null);

(statearr_42476_43606[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42466 === (17))){
var inst_42455 = (state_42465[(2)]);
var state_42465__$1 = (function (){var statearr_42481 = state_42465;
(statearr_42481[(10)] = inst_42455);

return statearr_42481;
})();
var statearr_42483_43607 = state_42465__$1;
(statearr_42483_43607[(2)] = null);

(statearr_42483_43607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42466 === (3))){
var inst_42460 = (state_42465[(2)]);
var state_42465__$1 = state_42465;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42465__$1,inst_42460);
} else {
if((state_val_42466 === (12))){
var _ = (function (){var statearr_42484 = state_42465;
(statearr_42484[(4)] = cljs.core.rest((state_42465[(4)])));

return statearr_42484;
})();
var state_42465__$1 = state_42465;
var ex42478 = (state_42465__$1[(2)]);
var statearr_42485_43608 = state_42465__$1;
(statearr_42485_43608[(5)] = ex42478);


if((ex42478 instanceof Object)){
var statearr_42487_43609 = state_42465__$1;
(statearr_42487_43609[(1)] = (11));

(statearr_42487_43609[(5)] = null);

} else {
throw ex42478;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42466 === (2))){
var inst_42415 = cljs.core.reset_BANG_(dctr,cnt);
var inst_42416 = cnt;
var inst_42417 = (0);
var state_42465__$1 = (function (){var statearr_42492 = state_42465;
(statearr_42492[(7)] = inst_42416);

(statearr_42492[(8)] = inst_42417);

(statearr_42492[(11)] = inst_42415);

return statearr_42492;
})();
var statearr_42493_43612 = state_42465__$1;
(statearr_42493_43612[(2)] = null);

(statearr_42493_43612[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42466 === (11))){
var inst_42427 = (state_42465[(2)]);
var inst_42428 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_42465__$1 = (function (){var statearr_42494 = state_42465;
(statearr_42494[(12)] = inst_42427);

return statearr_42494;
})();
var statearr_42495_43613 = state_42465__$1;
(statearr_42495_43613[(2)] = inst_42428);

(statearr_42495_43613[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42466 === (9))){
var inst_42417 = (state_42465[(8)]);
var _ = (function (){var statearr_42496 = state_42465;
(statearr_42496[(4)] = cljs.core.cons((12),(state_42465[(4)])));

return statearr_42496;
})();
var inst_42434 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_42417) : chs__$1.call(null,inst_42417));
var inst_42435 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_42417) : done.call(null,inst_42417));
var inst_42436 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_42434,inst_42435);
var ___$1 = (function (){var statearr_42497 = state_42465;
(statearr_42497[(4)] = cljs.core.rest((state_42465[(4)])));

return statearr_42497;
})();
var state_42465__$1 = state_42465;
var statearr_42499_43616 = state_42465__$1;
(statearr_42499_43616[(2)] = inst_42436);

(statearr_42499_43616[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42466 === (5))){
var inst_42446 = (state_42465[(2)]);
var state_42465__$1 = (function (){var statearr_42500 = state_42465;
(statearr_42500[(13)] = inst_42446);

return statearr_42500;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42465__$1,(13),dchan);
} else {
if((state_val_42466 === (14))){
var inst_42451 = cljs.core.async.close_BANG_(out);
var state_42465__$1 = state_42465;
var statearr_42501_43617 = state_42465__$1;
(statearr_42501_43617[(2)] = inst_42451);

(statearr_42501_43617[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42466 === (16))){
var inst_42458 = (state_42465[(2)]);
var state_42465__$1 = state_42465;
var statearr_42502_43618 = state_42465__$1;
(statearr_42502_43618[(2)] = inst_42458);

(statearr_42502_43618[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42466 === (10))){
var inst_42417 = (state_42465[(8)]);
var inst_42439 = (state_42465[(2)]);
var inst_42440 = (inst_42417 + (1));
var inst_42417__$1 = inst_42440;
var state_42465__$1 = (function (){var statearr_42503 = state_42465;
(statearr_42503[(14)] = inst_42439);

(statearr_42503[(8)] = inst_42417__$1);

return statearr_42503;
})();
var statearr_42504_43619 = state_42465__$1;
(statearr_42504_43619[(2)] = null);

(statearr_42504_43619[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42466 === (8))){
var inst_42444 = (state_42465[(2)]);
var state_42465__$1 = state_42465;
var statearr_42506_43620 = state_42465__$1;
(statearr_42506_43620[(2)] = inst_42444);

(statearr_42506_43620[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__39928__auto__ = null;
var cljs$core$async$state_machine__39928__auto____0 = (function (){
var statearr_42507 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42507[(0)] = cljs$core$async$state_machine__39928__auto__);

(statearr_42507[(1)] = (1));

return statearr_42507;
});
var cljs$core$async$state_machine__39928__auto____1 = (function (state_42465){
while(true){
var ret_value__39929__auto__ = (function (){try{while(true){
var result__39930__auto__ = switch__39927__auto__(state_42465);
if(cljs.core.keyword_identical_QMARK_(result__39930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39930__auto__;
}
break;
}
}catch (e42508){var ex__39931__auto__ = e42508;
var statearr_42509_43621 = state_42465;
(statearr_42509_43621[(2)] = ex__39931__auto__);


if(cljs.core.seq((state_42465[(4)]))){
var statearr_42510_43622 = state_42465;
(statearr_42510_43622[(1)] = cljs.core.first((state_42465[(4)])));

} else {
throw ex__39931__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43623 = state_42465;
state_42465 = G__43623;
continue;
} else {
return ret_value__39929__auto__;
}
break;
}
});
cljs$core$async$state_machine__39928__auto__ = function(state_42465){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39928__auto____1.call(this,state_42465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39928__auto____0;
cljs$core$async$state_machine__39928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39928__auto____1;
return cljs$core$async$state_machine__39928__auto__;
})()
})();
var state__41021__auto__ = (function (){var statearr_42511 = f__41020__auto__();
(statearr_42511[(6)] = c__41019__auto___43594);

return statearr_42511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41021__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__42514 = arguments.length;
switch (G__42514) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__41019__auto___43642 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41020__auto__ = (function (){var switch__39927__auto__ = (function (state_42547){
var state_val_42548 = (state_42547[(1)]);
if((state_val_42548 === (7))){
var inst_42525 = (state_42547[(7)]);
var inst_42526 = (state_42547[(8)]);
var inst_42525__$1 = (state_42547[(2)]);
var inst_42526__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42525__$1,(0),null);
var inst_42527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42525__$1,(1),null);
var inst_42528 = (inst_42526__$1 == null);
var state_42547__$1 = (function (){var statearr_42549 = state_42547;
(statearr_42549[(9)] = inst_42527);

(statearr_42549[(7)] = inst_42525__$1);

(statearr_42549[(8)] = inst_42526__$1);

return statearr_42549;
})();
if(cljs.core.truth_(inst_42528)){
var statearr_42550_43643 = state_42547__$1;
(statearr_42550_43643[(1)] = (8));

} else {
var statearr_42551_43644 = state_42547__$1;
(statearr_42551_43644[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42548 === (1))){
var inst_42515 = cljs.core.vec(chs);
var inst_42516 = inst_42515;
var state_42547__$1 = (function (){var statearr_42552 = state_42547;
(statearr_42552[(10)] = inst_42516);

return statearr_42552;
})();
var statearr_42553_43645 = state_42547__$1;
(statearr_42553_43645[(2)] = null);

(statearr_42553_43645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42548 === (4))){
var inst_42516 = (state_42547[(10)]);
var state_42547__$1 = state_42547;
return cljs.core.async.ioc_alts_BANG_(state_42547__$1,(7),inst_42516);
} else {
if((state_val_42548 === (6))){
var inst_42543 = (state_42547[(2)]);
var state_42547__$1 = state_42547;
var statearr_42554_43646 = state_42547__$1;
(statearr_42554_43646[(2)] = inst_42543);

(statearr_42554_43646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42548 === (3))){
var inst_42545 = (state_42547[(2)]);
var state_42547__$1 = state_42547;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42547__$1,inst_42545);
} else {
if((state_val_42548 === (2))){
var inst_42516 = (state_42547[(10)]);
var inst_42518 = cljs.core.count(inst_42516);
var inst_42519 = (inst_42518 > (0));
var state_42547__$1 = state_42547;
if(cljs.core.truth_(inst_42519)){
var statearr_42556_43647 = state_42547__$1;
(statearr_42556_43647[(1)] = (4));

} else {
var statearr_42557_43648 = state_42547__$1;
(statearr_42557_43648[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42548 === (11))){
var inst_42516 = (state_42547[(10)]);
var inst_42536 = (state_42547[(2)]);
var tmp42555 = inst_42516;
var inst_42516__$1 = tmp42555;
var state_42547__$1 = (function (){var statearr_42558 = state_42547;
(statearr_42558[(11)] = inst_42536);

(statearr_42558[(10)] = inst_42516__$1);

return statearr_42558;
})();
var statearr_42559_43649 = state_42547__$1;
(statearr_42559_43649[(2)] = null);

(statearr_42559_43649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42548 === (9))){
var inst_42526 = (state_42547[(8)]);
var state_42547__$1 = state_42547;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42547__$1,(11),out,inst_42526);
} else {
if((state_val_42548 === (5))){
var inst_42541 = cljs.core.async.close_BANG_(out);
var state_42547__$1 = state_42547;
var statearr_42560_43652 = state_42547__$1;
(statearr_42560_43652[(2)] = inst_42541);

(statearr_42560_43652[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42548 === (10))){
var inst_42539 = (state_42547[(2)]);
var state_42547__$1 = state_42547;
var statearr_42561_43653 = state_42547__$1;
(statearr_42561_43653[(2)] = inst_42539);

(statearr_42561_43653[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42548 === (8))){
var inst_42527 = (state_42547[(9)]);
var inst_42525 = (state_42547[(7)]);
var inst_42526 = (state_42547[(8)]);
var inst_42516 = (state_42547[(10)]);
var inst_42531 = (function (){var cs = inst_42516;
var vec__42521 = inst_42525;
var v = inst_42526;
var c = inst_42527;
return (function (p1__42512_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__42512_SHARP_);
});
})();
var inst_42532 = cljs.core.filterv(inst_42531,inst_42516);
var inst_42516__$1 = inst_42532;
var state_42547__$1 = (function (){var statearr_42562 = state_42547;
(statearr_42562[(10)] = inst_42516__$1);

return statearr_42562;
})();
var statearr_42563_43654 = state_42547__$1;
(statearr_42563_43654[(2)] = null);

(statearr_42563_43654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__39928__auto__ = null;
var cljs$core$async$state_machine__39928__auto____0 = (function (){
var statearr_42564 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42564[(0)] = cljs$core$async$state_machine__39928__auto__);

(statearr_42564[(1)] = (1));

return statearr_42564;
});
var cljs$core$async$state_machine__39928__auto____1 = (function (state_42547){
while(true){
var ret_value__39929__auto__ = (function (){try{while(true){
var result__39930__auto__ = switch__39927__auto__(state_42547);
if(cljs.core.keyword_identical_QMARK_(result__39930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39930__auto__;
}
break;
}
}catch (e42567){var ex__39931__auto__ = e42567;
var statearr_42568_43655 = state_42547;
(statearr_42568_43655[(2)] = ex__39931__auto__);


if(cljs.core.seq((state_42547[(4)]))){
var statearr_42569_43656 = state_42547;
(statearr_42569_43656[(1)] = cljs.core.first((state_42547[(4)])));

} else {
throw ex__39931__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43657 = state_42547;
state_42547 = G__43657;
continue;
} else {
return ret_value__39929__auto__;
}
break;
}
});
cljs$core$async$state_machine__39928__auto__ = function(state_42547){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39928__auto____1.call(this,state_42547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39928__auto____0;
cljs$core$async$state_machine__39928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39928__auto____1;
return cljs$core$async$state_machine__39928__auto__;
})()
})();
var state__41021__auto__ = (function (){var statearr_42571 = f__41020__auto__();
(statearr_42571[(6)] = c__41019__auto___43642);

return statearr_42571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41021__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__42573 = arguments.length;
switch (G__42573) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__41019__auto___43659 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41020__auto__ = (function (){var switch__39927__auto__ = (function (state_42599){
var state_val_42600 = (state_42599[(1)]);
if((state_val_42600 === (7))){
var inst_42581 = (state_42599[(7)]);
var inst_42581__$1 = (state_42599[(2)]);
var inst_42582 = (inst_42581__$1 == null);
var inst_42583 = cljs.core.not(inst_42582);
var state_42599__$1 = (function (){var statearr_42601 = state_42599;
(statearr_42601[(7)] = inst_42581__$1);

return statearr_42601;
})();
if(inst_42583){
var statearr_42602_43660 = state_42599__$1;
(statearr_42602_43660[(1)] = (8));

} else {
var statearr_42603_43661 = state_42599__$1;
(statearr_42603_43661[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42600 === (1))){
var inst_42576 = (0);
var state_42599__$1 = (function (){var statearr_42604 = state_42599;
(statearr_42604[(8)] = inst_42576);

return statearr_42604;
})();
var statearr_42605_43662 = state_42599__$1;
(statearr_42605_43662[(2)] = null);

(statearr_42605_43662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42600 === (4))){
var state_42599__$1 = state_42599;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42599__$1,(7),ch);
} else {
if((state_val_42600 === (6))){
var inst_42594 = (state_42599[(2)]);
var state_42599__$1 = state_42599;
var statearr_42606_43663 = state_42599__$1;
(statearr_42606_43663[(2)] = inst_42594);

(statearr_42606_43663[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42600 === (3))){
var inst_42596 = (state_42599[(2)]);
var inst_42597 = cljs.core.async.close_BANG_(out);
var state_42599__$1 = (function (){var statearr_42607 = state_42599;
(statearr_42607[(9)] = inst_42596);

return statearr_42607;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42599__$1,inst_42597);
} else {
if((state_val_42600 === (2))){
var inst_42576 = (state_42599[(8)]);
var inst_42578 = (inst_42576 < n);
var state_42599__$1 = state_42599;
if(cljs.core.truth_(inst_42578)){
var statearr_42608_43664 = state_42599__$1;
(statearr_42608_43664[(1)] = (4));

} else {
var statearr_42609_43665 = state_42599__$1;
(statearr_42609_43665[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42600 === (11))){
var inst_42576 = (state_42599[(8)]);
var inst_42586 = (state_42599[(2)]);
var inst_42587 = (inst_42576 + (1));
var inst_42576__$1 = inst_42587;
var state_42599__$1 = (function (){var statearr_42610 = state_42599;
(statearr_42610[(8)] = inst_42576__$1);

(statearr_42610[(10)] = inst_42586);

return statearr_42610;
})();
var statearr_42611_43666 = state_42599__$1;
(statearr_42611_43666[(2)] = null);

(statearr_42611_43666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42600 === (9))){
var state_42599__$1 = state_42599;
var statearr_42612_43667 = state_42599__$1;
(statearr_42612_43667[(2)] = null);

(statearr_42612_43667[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42600 === (5))){
var state_42599__$1 = state_42599;
var statearr_42613_43668 = state_42599__$1;
(statearr_42613_43668[(2)] = null);

(statearr_42613_43668[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42600 === (10))){
var inst_42591 = (state_42599[(2)]);
var state_42599__$1 = state_42599;
var statearr_42614_43669 = state_42599__$1;
(statearr_42614_43669[(2)] = inst_42591);

(statearr_42614_43669[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42600 === (8))){
var inst_42581 = (state_42599[(7)]);
var state_42599__$1 = state_42599;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42599__$1,(11),out,inst_42581);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__39928__auto__ = null;
var cljs$core$async$state_machine__39928__auto____0 = (function (){
var statearr_42615 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42615[(0)] = cljs$core$async$state_machine__39928__auto__);

(statearr_42615[(1)] = (1));

return statearr_42615;
});
var cljs$core$async$state_machine__39928__auto____1 = (function (state_42599){
while(true){
var ret_value__39929__auto__ = (function (){try{while(true){
var result__39930__auto__ = switch__39927__auto__(state_42599);
if(cljs.core.keyword_identical_QMARK_(result__39930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39930__auto__;
}
break;
}
}catch (e42616){var ex__39931__auto__ = e42616;
var statearr_42617_43670 = state_42599;
(statearr_42617_43670[(2)] = ex__39931__auto__);


if(cljs.core.seq((state_42599[(4)]))){
var statearr_42618_43671 = state_42599;
(statearr_42618_43671[(1)] = cljs.core.first((state_42599[(4)])));

} else {
throw ex__39931__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43672 = state_42599;
state_42599 = G__43672;
continue;
} else {
return ret_value__39929__auto__;
}
break;
}
});
cljs$core$async$state_machine__39928__auto__ = function(state_42599){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39928__auto____1.call(this,state_42599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39928__auto____0;
cljs$core$async$state_machine__39928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39928__auto____1;
return cljs$core$async$state_machine__39928__auto__;
})()
})();
var state__41021__auto__ = (function (){var statearr_42619 = f__41020__auto__();
(statearr_42619[(6)] = c__41019__auto___43659);

return statearr_42619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41021__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42621 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42621 = (function (f,ch,meta42622){
this.f = f;
this.ch = ch;
this.meta42622 = meta42622;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42621.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42623,meta42622__$1){
var self__ = this;
var _42623__$1 = this;
return (new cljs.core.async.t_cljs$core$async42621(self__.f,self__.ch,meta42622__$1));
}));

(cljs.core.async.t_cljs$core$async42621.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42623){
var self__ = this;
var _42623__$1 = this;
return self__.meta42622;
}));

(cljs.core.async.t_cljs$core$async42621.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42621.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async42621.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async42621.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42621.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42625 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42625 = (function (f,ch,meta42622,_,fn1,meta42626){
this.f = f;
this.ch = ch;
this.meta42622 = meta42622;
this._ = _;
this.fn1 = fn1;
this.meta42626 = meta42626;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42627,meta42626__$1){
var self__ = this;
var _42627__$1 = this;
return (new cljs.core.async.t_cljs$core$async42625(self__.f,self__.ch,self__.meta42622,self__._,self__.fn1,meta42626__$1));
}));

(cljs.core.async.t_cljs$core$async42625.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42627){
var self__ = this;
var _42627__$1 = this;
return self__.meta42626;
}));

(cljs.core.async.t_cljs$core$async42625.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42625.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async42625.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42625.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__42620_SHARP_){
var G__42632 = (((p1__42620_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__42620_SHARP_) : self__.f.call(null,p1__42620_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__42632) : f1.call(null,G__42632));
});
}));

(cljs.core.async.t_cljs$core$async42625.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42622","meta42622",1071780223,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async42621","cljs.core.async/t_cljs$core$async42621",1855878531,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta42626","meta42626",799172731,null)], null);
}));

(cljs.core.async.t_cljs$core$async42625.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42625.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42625");

(cljs.core.async.t_cljs$core$async42625.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async42625");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42625.
 */
cljs.core.async.__GT_t_cljs$core$async42625 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42625(f__$1,ch__$1,meta42622__$1,___$2,fn1__$1,meta42626){
return (new cljs.core.async.t_cljs$core$async42625(f__$1,ch__$1,meta42622__$1,___$2,fn1__$1,meta42626));
});

}

return (new cljs.core.async.t_cljs$core$async42625(self__.f,self__.ch,self__.meta42622,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__42634 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__42634) : self__.f.call(null,G__42634));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async42621.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42621.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async42621.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42622","meta42622",1071780223,null)], null);
}));

(cljs.core.async.t_cljs$core$async42621.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42621.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42621");

(cljs.core.async.t_cljs$core$async42621.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async42621");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42621.
 */
cljs.core.async.__GT_t_cljs$core$async42621 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42621(f__$1,ch__$1,meta42622){
return (new cljs.core.async.t_cljs$core$async42621(f__$1,ch__$1,meta42622));
});

}

return (new cljs.core.async.t_cljs$core$async42621(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42637 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42637 = (function (f,ch,meta42638){
this.f = f;
this.ch = ch;
this.meta42638 = meta42638;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42637.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42639,meta42638__$1){
var self__ = this;
var _42639__$1 = this;
return (new cljs.core.async.t_cljs$core$async42637(self__.f,self__.ch,meta42638__$1));
}));

(cljs.core.async.t_cljs$core$async42637.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42639){
var self__ = this;
var _42639__$1 = this;
return self__.meta42638;
}));

(cljs.core.async.t_cljs$core$async42637.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42637.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async42637.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42637.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async42637.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42637.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async42637.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42638","meta42638",-826733896,null)], null);
}));

(cljs.core.async.t_cljs$core$async42637.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42637.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42637");

(cljs.core.async.t_cljs$core$async42637.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async42637");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42637.
 */
cljs.core.async.__GT_t_cljs$core$async42637 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async42637(f__$1,ch__$1,meta42638){
return (new cljs.core.async.t_cljs$core$async42637(f__$1,ch__$1,meta42638));
});

}

return (new cljs.core.async.t_cljs$core$async42637(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42652 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42652 = (function (p,ch,meta42653){
this.p = p;
this.ch = ch;
this.meta42653 = meta42653;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42652.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42654,meta42653__$1){
var self__ = this;
var _42654__$1 = this;
return (new cljs.core.async.t_cljs$core$async42652(self__.p,self__.ch,meta42653__$1));
}));

(cljs.core.async.t_cljs$core$async42652.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42654){
var self__ = this;
var _42654__$1 = this;
return self__.meta42653;
}));

(cljs.core.async.t_cljs$core$async42652.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42652.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async42652.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async42652.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42652.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async42652.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42652.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async42652.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42653","meta42653",1190661346,null)], null);
}));

(cljs.core.async.t_cljs$core$async42652.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42652.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42652");

(cljs.core.async.t_cljs$core$async42652.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async42652");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42652.
 */
cljs.core.async.__GT_t_cljs$core$async42652 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async42652(p__$1,ch__$1,meta42653){
return (new cljs.core.async.t_cljs$core$async42652(p__$1,ch__$1,meta42653));
});

}

return (new cljs.core.async.t_cljs$core$async42652(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__42674 = arguments.length;
switch (G__42674) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__41019__auto___43676 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41020__auto__ = (function (){var switch__39927__auto__ = (function (state_42695){
var state_val_42696 = (state_42695[(1)]);
if((state_val_42696 === (7))){
var inst_42691 = (state_42695[(2)]);
var state_42695__$1 = state_42695;
var statearr_42697_43677 = state_42695__$1;
(statearr_42697_43677[(2)] = inst_42691);

(statearr_42697_43677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42696 === (1))){
var state_42695__$1 = state_42695;
var statearr_42698_43678 = state_42695__$1;
(statearr_42698_43678[(2)] = null);

(statearr_42698_43678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42696 === (4))){
var inst_42677 = (state_42695[(7)]);
var inst_42677__$1 = (state_42695[(2)]);
var inst_42678 = (inst_42677__$1 == null);
var state_42695__$1 = (function (){var statearr_42699 = state_42695;
(statearr_42699[(7)] = inst_42677__$1);

return statearr_42699;
})();
if(cljs.core.truth_(inst_42678)){
var statearr_42700_43679 = state_42695__$1;
(statearr_42700_43679[(1)] = (5));

} else {
var statearr_42701_43680 = state_42695__$1;
(statearr_42701_43680[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42696 === (6))){
var inst_42677 = (state_42695[(7)]);
var inst_42682 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_42677) : p.call(null,inst_42677));
var state_42695__$1 = state_42695;
if(cljs.core.truth_(inst_42682)){
var statearr_42702_43681 = state_42695__$1;
(statearr_42702_43681[(1)] = (8));

} else {
var statearr_42703_43682 = state_42695__$1;
(statearr_42703_43682[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42696 === (3))){
var inst_42693 = (state_42695[(2)]);
var state_42695__$1 = state_42695;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42695__$1,inst_42693);
} else {
if((state_val_42696 === (2))){
var state_42695__$1 = state_42695;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42695__$1,(4),ch);
} else {
if((state_val_42696 === (11))){
var inst_42685 = (state_42695[(2)]);
var state_42695__$1 = state_42695;
var statearr_42704_43687 = state_42695__$1;
(statearr_42704_43687[(2)] = inst_42685);

(statearr_42704_43687[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42696 === (9))){
var state_42695__$1 = state_42695;
var statearr_42705_43688 = state_42695__$1;
(statearr_42705_43688[(2)] = null);

(statearr_42705_43688[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42696 === (5))){
var inst_42680 = cljs.core.async.close_BANG_(out);
var state_42695__$1 = state_42695;
var statearr_42706_43691 = state_42695__$1;
(statearr_42706_43691[(2)] = inst_42680);

(statearr_42706_43691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42696 === (10))){
var inst_42688 = (state_42695[(2)]);
var state_42695__$1 = (function (){var statearr_42707 = state_42695;
(statearr_42707[(8)] = inst_42688);

return statearr_42707;
})();
var statearr_42708_43693 = state_42695__$1;
(statearr_42708_43693[(2)] = null);

(statearr_42708_43693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42696 === (8))){
var inst_42677 = (state_42695[(7)]);
var state_42695__$1 = state_42695;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42695__$1,(11),out,inst_42677);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__39928__auto__ = null;
var cljs$core$async$state_machine__39928__auto____0 = (function (){
var statearr_42709 = [null,null,null,null,null,null,null,null,null];
(statearr_42709[(0)] = cljs$core$async$state_machine__39928__auto__);

(statearr_42709[(1)] = (1));

return statearr_42709;
});
var cljs$core$async$state_machine__39928__auto____1 = (function (state_42695){
while(true){
var ret_value__39929__auto__ = (function (){try{while(true){
var result__39930__auto__ = switch__39927__auto__(state_42695);
if(cljs.core.keyword_identical_QMARK_(result__39930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39930__auto__;
}
break;
}
}catch (e42710){var ex__39931__auto__ = e42710;
var statearr_42711_43694 = state_42695;
(statearr_42711_43694[(2)] = ex__39931__auto__);


if(cljs.core.seq((state_42695[(4)]))){
var statearr_42712_43695 = state_42695;
(statearr_42712_43695[(1)] = cljs.core.first((state_42695[(4)])));

} else {
throw ex__39931__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43696 = state_42695;
state_42695 = G__43696;
continue;
} else {
return ret_value__39929__auto__;
}
break;
}
});
cljs$core$async$state_machine__39928__auto__ = function(state_42695){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39928__auto____1.call(this,state_42695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39928__auto____0;
cljs$core$async$state_machine__39928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39928__auto____1;
return cljs$core$async$state_machine__39928__auto__;
})()
})();
var state__41021__auto__ = (function (){var statearr_42713 = f__41020__auto__();
(statearr_42713[(6)] = c__41019__auto___43676);

return statearr_42713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41021__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__42717 = arguments.length;
switch (G__42717) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__41019__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41020__auto__ = (function (){var switch__39927__auto__ = (function (state_42782){
var state_val_42783 = (state_42782[(1)]);
if((state_val_42783 === (7))){
var inst_42778 = (state_42782[(2)]);
var state_42782__$1 = state_42782;
var statearr_42784_43698 = state_42782__$1;
(statearr_42784_43698[(2)] = inst_42778);

(statearr_42784_43698[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42783 === (20))){
var inst_42748 = (state_42782[(7)]);
var inst_42759 = (state_42782[(2)]);
var inst_42760 = cljs.core.next(inst_42748);
var inst_42734 = inst_42760;
var inst_42735 = null;
var inst_42736 = (0);
var inst_42737 = (0);
var state_42782__$1 = (function (){var statearr_42786 = state_42782;
(statearr_42786[(8)] = inst_42759);

(statearr_42786[(9)] = inst_42735);

(statearr_42786[(10)] = inst_42737);

(statearr_42786[(11)] = inst_42736);

(statearr_42786[(12)] = inst_42734);

return statearr_42786;
})();
var statearr_42788_43701 = state_42782__$1;
(statearr_42788_43701[(2)] = null);

(statearr_42788_43701[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42783 === (1))){
var state_42782__$1 = state_42782;
var statearr_42789_43702 = state_42782__$1;
(statearr_42789_43702[(2)] = null);

(statearr_42789_43702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42783 === (4))){
var inst_42723 = (state_42782[(13)]);
var inst_42723__$1 = (state_42782[(2)]);
var inst_42724 = (inst_42723__$1 == null);
var state_42782__$1 = (function (){var statearr_42790 = state_42782;
(statearr_42790[(13)] = inst_42723__$1);

return statearr_42790;
})();
if(cljs.core.truth_(inst_42724)){
var statearr_42791_43703 = state_42782__$1;
(statearr_42791_43703[(1)] = (5));

} else {
var statearr_42792_43704 = state_42782__$1;
(statearr_42792_43704[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42783 === (15))){
var state_42782__$1 = state_42782;
var statearr_42797_43705 = state_42782__$1;
(statearr_42797_43705[(2)] = null);

(statearr_42797_43705[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42783 === (21))){
var state_42782__$1 = state_42782;
var statearr_42799_43706 = state_42782__$1;
(statearr_42799_43706[(2)] = null);

(statearr_42799_43706[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42783 === (13))){
var inst_42735 = (state_42782[(9)]);
var inst_42737 = (state_42782[(10)]);
var inst_42736 = (state_42782[(11)]);
var inst_42734 = (state_42782[(12)]);
var inst_42744 = (state_42782[(2)]);
var inst_42745 = (inst_42737 + (1));
var tmp42794 = inst_42735;
var tmp42795 = inst_42736;
var tmp42796 = inst_42734;
var inst_42734__$1 = tmp42796;
var inst_42735__$1 = tmp42794;
var inst_42736__$1 = tmp42795;
var inst_42737__$1 = inst_42745;
var state_42782__$1 = (function (){var statearr_42800 = state_42782;
(statearr_42800[(9)] = inst_42735__$1);

(statearr_42800[(14)] = inst_42744);

(statearr_42800[(10)] = inst_42737__$1);

(statearr_42800[(11)] = inst_42736__$1);

(statearr_42800[(12)] = inst_42734__$1);

return statearr_42800;
})();
var statearr_42801_43707 = state_42782__$1;
(statearr_42801_43707[(2)] = null);

(statearr_42801_43707[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42783 === (22))){
var state_42782__$1 = state_42782;
var statearr_42802_43708 = state_42782__$1;
(statearr_42802_43708[(2)] = null);

(statearr_42802_43708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42783 === (6))){
var inst_42723 = (state_42782[(13)]);
var inst_42732 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_42723) : f.call(null,inst_42723));
var inst_42733 = cljs.core.seq(inst_42732);
var inst_42734 = inst_42733;
var inst_42735 = null;
var inst_42736 = (0);
var inst_42737 = (0);
var state_42782__$1 = (function (){var statearr_42803 = state_42782;
(statearr_42803[(9)] = inst_42735);

(statearr_42803[(10)] = inst_42737);

(statearr_42803[(11)] = inst_42736);

(statearr_42803[(12)] = inst_42734);

return statearr_42803;
})();
var statearr_42804_43709 = state_42782__$1;
(statearr_42804_43709[(2)] = null);

(statearr_42804_43709[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42783 === (17))){
var inst_42748 = (state_42782[(7)]);
var inst_42752 = cljs.core.chunk_first(inst_42748);
var inst_42753 = cljs.core.chunk_rest(inst_42748);
var inst_42754 = cljs.core.count(inst_42752);
var inst_42734 = inst_42753;
var inst_42735 = inst_42752;
var inst_42736 = inst_42754;
var inst_42737 = (0);
var state_42782__$1 = (function (){var statearr_42807 = state_42782;
(statearr_42807[(9)] = inst_42735);

(statearr_42807[(10)] = inst_42737);

(statearr_42807[(11)] = inst_42736);

(statearr_42807[(12)] = inst_42734);

return statearr_42807;
})();
var statearr_42808_43712 = state_42782__$1;
(statearr_42808_43712[(2)] = null);

(statearr_42808_43712[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42783 === (3))){
var inst_42780 = (state_42782[(2)]);
var state_42782__$1 = state_42782;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42782__$1,inst_42780);
} else {
if((state_val_42783 === (12))){
var inst_42768 = (state_42782[(2)]);
var state_42782__$1 = state_42782;
var statearr_42811_43713 = state_42782__$1;
(statearr_42811_43713[(2)] = inst_42768);

(statearr_42811_43713[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42783 === (2))){
var state_42782__$1 = state_42782;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42782__$1,(4),in$);
} else {
if((state_val_42783 === (23))){
var inst_42776 = (state_42782[(2)]);
var state_42782__$1 = state_42782;
var statearr_42813_43714 = state_42782__$1;
(statearr_42813_43714[(2)] = inst_42776);

(statearr_42813_43714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42783 === (19))){
var inst_42763 = (state_42782[(2)]);
var state_42782__$1 = state_42782;
var statearr_42818_43715 = state_42782__$1;
(statearr_42818_43715[(2)] = inst_42763);

(statearr_42818_43715[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42783 === (11))){
var inst_42748 = (state_42782[(7)]);
var inst_42734 = (state_42782[(12)]);
var inst_42748__$1 = cljs.core.seq(inst_42734);
var state_42782__$1 = (function (){var statearr_42819 = state_42782;
(statearr_42819[(7)] = inst_42748__$1);

return statearr_42819;
})();
if(inst_42748__$1){
var statearr_42820_43716 = state_42782__$1;
(statearr_42820_43716[(1)] = (14));

} else {
var statearr_42822_43717 = state_42782__$1;
(statearr_42822_43717[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42783 === (9))){
var inst_42770 = (state_42782[(2)]);
var inst_42771 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_42782__$1 = (function (){var statearr_42823 = state_42782;
(statearr_42823[(15)] = inst_42770);

return statearr_42823;
})();
if(cljs.core.truth_(inst_42771)){
var statearr_42824_43718 = state_42782__$1;
(statearr_42824_43718[(1)] = (21));

} else {
var statearr_42825_43719 = state_42782__$1;
(statearr_42825_43719[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42783 === (5))){
var inst_42726 = cljs.core.async.close_BANG_(out);
var state_42782__$1 = state_42782;
var statearr_42826_43720 = state_42782__$1;
(statearr_42826_43720[(2)] = inst_42726);

(statearr_42826_43720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42783 === (14))){
var inst_42748 = (state_42782[(7)]);
var inst_42750 = cljs.core.chunked_seq_QMARK_(inst_42748);
var state_42782__$1 = state_42782;
if(inst_42750){
var statearr_42827_43721 = state_42782__$1;
(statearr_42827_43721[(1)] = (17));

} else {
var statearr_42828_43722 = state_42782__$1;
(statearr_42828_43722[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42783 === (16))){
var inst_42766 = (state_42782[(2)]);
var state_42782__$1 = state_42782;
var statearr_42829_43723 = state_42782__$1;
(statearr_42829_43723[(2)] = inst_42766);

(statearr_42829_43723[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42783 === (10))){
var inst_42735 = (state_42782[(9)]);
var inst_42737 = (state_42782[(10)]);
var inst_42742 = cljs.core._nth(inst_42735,inst_42737);
var state_42782__$1 = state_42782;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42782__$1,(13),out,inst_42742);
} else {
if((state_val_42783 === (18))){
var inst_42748 = (state_42782[(7)]);
var inst_42757 = cljs.core.first(inst_42748);
var state_42782__$1 = state_42782;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42782__$1,(20),out,inst_42757);
} else {
if((state_val_42783 === (8))){
var inst_42737 = (state_42782[(10)]);
var inst_42736 = (state_42782[(11)]);
var inst_42739 = (inst_42737 < inst_42736);
var inst_42740 = inst_42739;
var state_42782__$1 = state_42782;
if(cljs.core.truth_(inst_42740)){
var statearr_42830_43725 = state_42782__$1;
(statearr_42830_43725[(1)] = (10));

} else {
var statearr_42831_43726 = state_42782__$1;
(statearr_42831_43726[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__39928__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__39928__auto____0 = (function (){
var statearr_42832 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42832[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__39928__auto__);

(statearr_42832[(1)] = (1));

return statearr_42832;
});
var cljs$core$async$mapcat_STAR__$_state_machine__39928__auto____1 = (function (state_42782){
while(true){
var ret_value__39929__auto__ = (function (){try{while(true){
var result__39930__auto__ = switch__39927__auto__(state_42782);
if(cljs.core.keyword_identical_QMARK_(result__39930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39930__auto__;
}
break;
}
}catch (e42833){var ex__39931__auto__ = e42833;
var statearr_42834_43732 = state_42782;
(statearr_42834_43732[(2)] = ex__39931__auto__);


if(cljs.core.seq((state_42782[(4)]))){
var statearr_42835_43733 = state_42782;
(statearr_42835_43733[(1)] = cljs.core.first((state_42782[(4)])));

} else {
throw ex__39931__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43734 = state_42782;
state_42782 = G__43734;
continue;
} else {
return ret_value__39929__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__39928__auto__ = function(state_42782){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__39928__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__39928__auto____1.call(this,state_42782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__39928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__39928__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__39928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__39928__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__39928__auto__;
})()
})();
var state__41021__auto__ = (function (){var statearr_42836 = f__41020__auto__();
(statearr_42836[(6)] = c__41019__auto__);

return statearr_42836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41021__auto__);
}));

return c__41019__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__42838 = arguments.length;
switch (G__42838) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__42841 = arguments.length;
switch (G__42841) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__42847 = arguments.length;
switch (G__42847) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__41019__auto___43738 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41020__auto__ = (function (){var switch__39927__auto__ = (function (state_42878){
var state_val_42879 = (state_42878[(1)]);
if((state_val_42879 === (7))){
var inst_42872 = (state_42878[(2)]);
var state_42878__$1 = state_42878;
var statearr_42884_43747 = state_42878__$1;
(statearr_42884_43747[(2)] = inst_42872);

(statearr_42884_43747[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42879 === (1))){
var inst_42851 = null;
var state_42878__$1 = (function (){var statearr_42888 = state_42878;
(statearr_42888[(7)] = inst_42851);

return statearr_42888;
})();
var statearr_42905_43748 = state_42878__$1;
(statearr_42905_43748[(2)] = null);

(statearr_42905_43748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42879 === (4))){
var inst_42855 = (state_42878[(8)]);
var inst_42855__$1 = (state_42878[(2)]);
var inst_42856 = (inst_42855__$1 == null);
var inst_42857 = cljs.core.not(inst_42856);
var state_42878__$1 = (function (){var statearr_42908 = state_42878;
(statearr_42908[(8)] = inst_42855__$1);

return statearr_42908;
})();
if(inst_42857){
var statearr_42909_43750 = state_42878__$1;
(statearr_42909_43750[(1)] = (5));

} else {
var statearr_42910_43753 = state_42878__$1;
(statearr_42910_43753[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42879 === (6))){
var state_42878__$1 = state_42878;
var statearr_42911_43754 = state_42878__$1;
(statearr_42911_43754[(2)] = null);

(statearr_42911_43754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42879 === (3))){
var inst_42875 = (state_42878[(2)]);
var inst_42876 = cljs.core.async.close_BANG_(out);
var state_42878__$1 = (function (){var statearr_42912 = state_42878;
(statearr_42912[(9)] = inst_42875);

return statearr_42912;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42878__$1,inst_42876);
} else {
if((state_val_42879 === (2))){
var state_42878__$1 = state_42878;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42878__$1,(4),ch);
} else {
if((state_val_42879 === (11))){
var inst_42855 = (state_42878[(8)]);
var inst_42866 = (state_42878[(2)]);
var inst_42851 = inst_42855;
var state_42878__$1 = (function (){var statearr_42913 = state_42878;
(statearr_42913[(10)] = inst_42866);

(statearr_42913[(7)] = inst_42851);

return statearr_42913;
})();
var statearr_42914_43757 = state_42878__$1;
(statearr_42914_43757[(2)] = null);

(statearr_42914_43757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42879 === (9))){
var inst_42855 = (state_42878[(8)]);
var state_42878__$1 = state_42878;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42878__$1,(11),out,inst_42855);
} else {
if((state_val_42879 === (5))){
var inst_42851 = (state_42878[(7)]);
var inst_42855 = (state_42878[(8)]);
var inst_42860 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42855,inst_42851);
var state_42878__$1 = state_42878;
if(inst_42860){
var statearr_42947_43761 = state_42878__$1;
(statearr_42947_43761[(1)] = (8));

} else {
var statearr_42948_43762 = state_42878__$1;
(statearr_42948_43762[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42879 === (10))){
var inst_42869 = (state_42878[(2)]);
var state_42878__$1 = state_42878;
var statearr_42949_43763 = state_42878__$1;
(statearr_42949_43763[(2)] = inst_42869);

(statearr_42949_43763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42879 === (8))){
var inst_42851 = (state_42878[(7)]);
var tmp42924 = inst_42851;
var inst_42851__$1 = tmp42924;
var state_42878__$1 = (function (){var statearr_42950 = state_42878;
(statearr_42950[(7)] = inst_42851__$1);

return statearr_42950;
})();
var statearr_42951_43767 = state_42878__$1;
(statearr_42951_43767[(2)] = null);

(statearr_42951_43767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__39928__auto__ = null;
var cljs$core$async$state_machine__39928__auto____0 = (function (){
var statearr_42952 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42952[(0)] = cljs$core$async$state_machine__39928__auto__);

(statearr_42952[(1)] = (1));

return statearr_42952;
});
var cljs$core$async$state_machine__39928__auto____1 = (function (state_42878){
while(true){
var ret_value__39929__auto__ = (function (){try{while(true){
var result__39930__auto__ = switch__39927__auto__(state_42878);
if(cljs.core.keyword_identical_QMARK_(result__39930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39930__auto__;
}
break;
}
}catch (e42953){var ex__39931__auto__ = e42953;
var statearr_42954_43768 = state_42878;
(statearr_42954_43768[(2)] = ex__39931__auto__);


if(cljs.core.seq((state_42878[(4)]))){
var statearr_42955_43771 = state_42878;
(statearr_42955_43771[(1)] = cljs.core.first((state_42878[(4)])));

} else {
throw ex__39931__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43772 = state_42878;
state_42878 = G__43772;
continue;
} else {
return ret_value__39929__auto__;
}
break;
}
});
cljs$core$async$state_machine__39928__auto__ = function(state_42878){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39928__auto____1.call(this,state_42878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39928__auto____0;
cljs$core$async$state_machine__39928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39928__auto____1;
return cljs$core$async$state_machine__39928__auto__;
})()
})();
var state__41021__auto__ = (function (){var statearr_42956 = f__41020__auto__();
(statearr_42956[(6)] = c__41019__auto___43738);

return statearr_42956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41021__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__42958 = arguments.length;
switch (G__42958) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__41019__auto___43775 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41020__auto__ = (function (){var switch__39927__auto__ = (function (state_42996){
var state_val_42997 = (state_42996[(1)]);
if((state_val_42997 === (7))){
var inst_42992 = (state_42996[(2)]);
var state_42996__$1 = state_42996;
var statearr_42998_43776 = state_42996__$1;
(statearr_42998_43776[(2)] = inst_42992);

(statearr_42998_43776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42997 === (1))){
var inst_42959 = (new Array(n));
var inst_42960 = inst_42959;
var inst_42961 = (0);
var state_42996__$1 = (function (){var statearr_42999 = state_42996;
(statearr_42999[(7)] = inst_42961);

(statearr_42999[(8)] = inst_42960);

return statearr_42999;
})();
var statearr_43000_43777 = state_42996__$1;
(statearr_43000_43777[(2)] = null);

(statearr_43000_43777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42997 === (4))){
var inst_42964 = (state_42996[(9)]);
var inst_42964__$1 = (state_42996[(2)]);
var inst_42965 = (inst_42964__$1 == null);
var inst_42966 = cljs.core.not(inst_42965);
var state_42996__$1 = (function (){var statearr_43001 = state_42996;
(statearr_43001[(9)] = inst_42964__$1);

return statearr_43001;
})();
if(inst_42966){
var statearr_43002_43778 = state_42996__$1;
(statearr_43002_43778[(1)] = (5));

} else {
var statearr_43003_43779 = state_42996__$1;
(statearr_43003_43779[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42997 === (15))){
var inst_42986 = (state_42996[(2)]);
var state_42996__$1 = state_42996;
var statearr_43004_43780 = state_42996__$1;
(statearr_43004_43780[(2)] = inst_42986);

(statearr_43004_43780[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42997 === (13))){
var state_42996__$1 = state_42996;
var statearr_43005_43781 = state_42996__$1;
(statearr_43005_43781[(2)] = null);

(statearr_43005_43781[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42997 === (6))){
var inst_42961 = (state_42996[(7)]);
var inst_42982 = (inst_42961 > (0));
var state_42996__$1 = state_42996;
if(cljs.core.truth_(inst_42982)){
var statearr_43008_43782 = state_42996__$1;
(statearr_43008_43782[(1)] = (12));

} else {
var statearr_43009_43783 = state_42996__$1;
(statearr_43009_43783[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42997 === (3))){
var inst_42994 = (state_42996[(2)]);
var state_42996__$1 = state_42996;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42996__$1,inst_42994);
} else {
if((state_val_42997 === (12))){
var inst_42960 = (state_42996[(8)]);
var inst_42984 = cljs.core.vec(inst_42960);
var state_42996__$1 = state_42996;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42996__$1,(15),out,inst_42984);
} else {
if((state_val_42997 === (2))){
var state_42996__$1 = state_42996;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42996__$1,(4),ch);
} else {
if((state_val_42997 === (11))){
var inst_42976 = (state_42996[(2)]);
var inst_42977 = (new Array(n));
var inst_42960 = inst_42977;
var inst_42961 = (0);
var state_42996__$1 = (function (){var statearr_43010 = state_42996;
(statearr_43010[(7)] = inst_42961);

(statearr_43010[(8)] = inst_42960);

(statearr_43010[(10)] = inst_42976);

return statearr_43010;
})();
var statearr_43013_43784 = state_42996__$1;
(statearr_43013_43784[(2)] = null);

(statearr_43013_43784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42997 === (9))){
var inst_42960 = (state_42996[(8)]);
var inst_42974 = cljs.core.vec(inst_42960);
var state_42996__$1 = state_42996;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42996__$1,(11),out,inst_42974);
} else {
if((state_val_42997 === (5))){
var inst_42961 = (state_42996[(7)]);
var inst_42960 = (state_42996[(8)]);
var inst_42969 = (state_42996[(11)]);
var inst_42964 = (state_42996[(9)]);
var inst_42968 = (inst_42960[inst_42961] = inst_42964);
var inst_42969__$1 = (inst_42961 + (1));
var inst_42970 = (inst_42969__$1 < n);
var state_42996__$1 = (function (){var statearr_43014 = state_42996;
(statearr_43014[(11)] = inst_42969__$1);

(statearr_43014[(12)] = inst_42968);

return statearr_43014;
})();
if(cljs.core.truth_(inst_42970)){
var statearr_43015_43785 = state_42996__$1;
(statearr_43015_43785[(1)] = (8));

} else {
var statearr_43016_43786 = state_42996__$1;
(statearr_43016_43786[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42997 === (14))){
var inst_42989 = (state_42996[(2)]);
var inst_42990 = cljs.core.async.close_BANG_(out);
var state_42996__$1 = (function (){var statearr_43018 = state_42996;
(statearr_43018[(13)] = inst_42989);

return statearr_43018;
})();
var statearr_43019_43787 = state_42996__$1;
(statearr_43019_43787[(2)] = inst_42990);

(statearr_43019_43787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42997 === (10))){
var inst_42980 = (state_42996[(2)]);
var state_42996__$1 = state_42996;
var statearr_43020_43788 = state_42996__$1;
(statearr_43020_43788[(2)] = inst_42980);

(statearr_43020_43788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42997 === (8))){
var inst_42960 = (state_42996[(8)]);
var inst_42969 = (state_42996[(11)]);
var tmp43017 = inst_42960;
var inst_42960__$1 = tmp43017;
var inst_42961 = inst_42969;
var state_42996__$1 = (function (){var statearr_43021 = state_42996;
(statearr_43021[(7)] = inst_42961);

(statearr_43021[(8)] = inst_42960__$1);

return statearr_43021;
})();
var statearr_43024_43789 = state_42996__$1;
(statearr_43024_43789[(2)] = null);

(statearr_43024_43789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__39928__auto__ = null;
var cljs$core$async$state_machine__39928__auto____0 = (function (){
var statearr_43025 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43025[(0)] = cljs$core$async$state_machine__39928__auto__);

(statearr_43025[(1)] = (1));

return statearr_43025;
});
var cljs$core$async$state_machine__39928__auto____1 = (function (state_42996){
while(true){
var ret_value__39929__auto__ = (function (){try{while(true){
var result__39930__auto__ = switch__39927__auto__(state_42996);
if(cljs.core.keyword_identical_QMARK_(result__39930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39930__auto__;
}
break;
}
}catch (e43026){var ex__39931__auto__ = e43026;
var statearr_43027_43791 = state_42996;
(statearr_43027_43791[(2)] = ex__39931__auto__);


if(cljs.core.seq((state_42996[(4)]))){
var statearr_43028_43793 = state_42996;
(statearr_43028_43793[(1)] = cljs.core.first((state_42996[(4)])));

} else {
throw ex__39931__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43794 = state_42996;
state_42996 = G__43794;
continue;
} else {
return ret_value__39929__auto__;
}
break;
}
});
cljs$core$async$state_machine__39928__auto__ = function(state_42996){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39928__auto____1.call(this,state_42996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39928__auto____0;
cljs$core$async$state_machine__39928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39928__auto____1;
return cljs$core$async$state_machine__39928__auto__;
})()
})();
var state__41021__auto__ = (function (){var statearr_43029 = f__41020__auto__();
(statearr_43029[(6)] = c__41019__auto___43775);

return statearr_43029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41021__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__43033 = arguments.length;
switch (G__43033) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__41019__auto___43796 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41020__auto__ = (function (){var switch__39927__auto__ = (function (state_43080){
var state_val_43081 = (state_43080[(1)]);
if((state_val_43081 === (7))){
var inst_43076 = (state_43080[(2)]);
var state_43080__$1 = state_43080;
var statearr_43084_43797 = state_43080__$1;
(statearr_43084_43797[(2)] = inst_43076);

(statearr_43084_43797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43081 === (1))){
var inst_43034 = [];
var inst_43035 = inst_43034;
var inst_43036 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_43080__$1 = (function (){var statearr_43085 = state_43080;
(statearr_43085[(7)] = inst_43035);

(statearr_43085[(8)] = inst_43036);

return statearr_43085;
})();
var statearr_43086_43798 = state_43080__$1;
(statearr_43086_43798[(2)] = null);

(statearr_43086_43798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43081 === (4))){
var inst_43040 = (state_43080[(9)]);
var inst_43040__$1 = (state_43080[(2)]);
var inst_43042 = (inst_43040__$1 == null);
var inst_43043 = cljs.core.not(inst_43042);
var state_43080__$1 = (function (){var statearr_43089 = state_43080;
(statearr_43089[(9)] = inst_43040__$1);

return statearr_43089;
})();
if(inst_43043){
var statearr_43090_43799 = state_43080__$1;
(statearr_43090_43799[(1)] = (5));

} else {
var statearr_43091_43800 = state_43080__$1;
(statearr_43091_43800[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43081 === (15))){
var inst_43035 = (state_43080[(7)]);
var inst_43068 = cljs.core.vec(inst_43035);
var state_43080__$1 = state_43080;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43080__$1,(18),out,inst_43068);
} else {
if((state_val_43081 === (13))){
var inst_43063 = (state_43080[(2)]);
var state_43080__$1 = state_43080;
var statearr_43092_43801 = state_43080__$1;
(statearr_43092_43801[(2)] = inst_43063);

(statearr_43092_43801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43081 === (6))){
var inst_43035 = (state_43080[(7)]);
var inst_43065 = inst_43035.length;
var inst_43066 = (inst_43065 > (0));
var state_43080__$1 = state_43080;
if(cljs.core.truth_(inst_43066)){
var statearr_43095_43802 = state_43080__$1;
(statearr_43095_43802[(1)] = (15));

} else {
var statearr_43096_43803 = state_43080__$1;
(statearr_43096_43803[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43081 === (17))){
var inst_43073 = (state_43080[(2)]);
var inst_43074 = cljs.core.async.close_BANG_(out);
var state_43080__$1 = (function (){var statearr_43097 = state_43080;
(statearr_43097[(10)] = inst_43073);

return statearr_43097;
})();
var statearr_43098_43804 = state_43080__$1;
(statearr_43098_43804[(2)] = inst_43074);

(statearr_43098_43804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43081 === (3))){
var inst_43078 = (state_43080[(2)]);
var state_43080__$1 = state_43080;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43080__$1,inst_43078);
} else {
if((state_val_43081 === (12))){
var inst_43035 = (state_43080[(7)]);
var inst_43056 = cljs.core.vec(inst_43035);
var state_43080__$1 = state_43080;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43080__$1,(14),out,inst_43056);
} else {
if((state_val_43081 === (2))){
var state_43080__$1 = state_43080;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43080__$1,(4),ch);
} else {
if((state_val_43081 === (11))){
var inst_43040 = (state_43080[(9)]);
var inst_43035 = (state_43080[(7)]);
var inst_43045 = (state_43080[(11)]);
var inst_43053 = inst_43035.push(inst_43040);
var tmp43101 = inst_43035;
var inst_43035__$1 = tmp43101;
var inst_43036 = inst_43045;
var state_43080__$1 = (function (){var statearr_43102 = state_43080;
(statearr_43102[(7)] = inst_43035__$1);

(statearr_43102[(8)] = inst_43036);

(statearr_43102[(12)] = inst_43053);

return statearr_43102;
})();
var statearr_43103_43807 = state_43080__$1;
(statearr_43103_43807[(2)] = null);

(statearr_43103_43807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43081 === (9))){
var inst_43036 = (state_43080[(8)]);
var inst_43049 = cljs.core.keyword_identical_QMARK_(inst_43036,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_43080__$1 = state_43080;
var statearr_43104_43808 = state_43080__$1;
(statearr_43104_43808[(2)] = inst_43049);

(statearr_43104_43808[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43081 === (5))){
var inst_43046 = (state_43080[(13)]);
var inst_43040 = (state_43080[(9)]);
var inst_43036 = (state_43080[(8)]);
var inst_43045 = (state_43080[(11)]);
var inst_43045__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_43040) : f.call(null,inst_43040));
var inst_43046__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43045__$1,inst_43036);
var state_43080__$1 = (function (){var statearr_43107 = state_43080;
(statearr_43107[(13)] = inst_43046__$1);

(statearr_43107[(11)] = inst_43045__$1);

return statearr_43107;
})();
if(inst_43046__$1){
var statearr_43109_43809 = state_43080__$1;
(statearr_43109_43809[(1)] = (8));

} else {
var statearr_43110_43810 = state_43080__$1;
(statearr_43110_43810[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43081 === (14))){
var inst_43040 = (state_43080[(9)]);
var inst_43045 = (state_43080[(11)]);
var inst_43058 = (state_43080[(2)]);
var inst_43059 = [];
var inst_43060 = inst_43059.push(inst_43040);
var inst_43035 = inst_43059;
var inst_43036 = inst_43045;
var state_43080__$1 = (function (){var statearr_43114 = state_43080;
(statearr_43114[(14)] = inst_43060);

(statearr_43114[(15)] = inst_43058);

(statearr_43114[(7)] = inst_43035);

(statearr_43114[(8)] = inst_43036);

return statearr_43114;
})();
var statearr_43118_43811 = state_43080__$1;
(statearr_43118_43811[(2)] = null);

(statearr_43118_43811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43081 === (16))){
var state_43080__$1 = state_43080;
var statearr_43122_43812 = state_43080__$1;
(statearr_43122_43812[(2)] = null);

(statearr_43122_43812[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43081 === (10))){
var inst_43051 = (state_43080[(2)]);
var state_43080__$1 = state_43080;
if(cljs.core.truth_(inst_43051)){
var statearr_43126_43813 = state_43080__$1;
(statearr_43126_43813[(1)] = (11));

} else {
var statearr_43130_43814 = state_43080__$1;
(statearr_43130_43814[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43081 === (18))){
var inst_43070 = (state_43080[(2)]);
var state_43080__$1 = state_43080;
var statearr_43134_43815 = state_43080__$1;
(statearr_43134_43815[(2)] = inst_43070);

(statearr_43134_43815[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43081 === (8))){
var inst_43046 = (state_43080[(13)]);
var state_43080__$1 = state_43080;
var statearr_43138_43816 = state_43080__$1;
(statearr_43138_43816[(2)] = inst_43046);

(statearr_43138_43816[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__39928__auto__ = null;
var cljs$core$async$state_machine__39928__auto____0 = (function (){
var statearr_43143 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43143[(0)] = cljs$core$async$state_machine__39928__auto__);

(statearr_43143[(1)] = (1));

return statearr_43143;
});
var cljs$core$async$state_machine__39928__auto____1 = (function (state_43080){
while(true){
var ret_value__39929__auto__ = (function (){try{while(true){
var result__39930__auto__ = switch__39927__auto__(state_43080);
if(cljs.core.keyword_identical_QMARK_(result__39930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39930__auto__;
}
break;
}
}catch (e43148){var ex__39931__auto__ = e43148;
var statearr_43149_43817 = state_43080;
(statearr_43149_43817[(2)] = ex__39931__auto__);


if(cljs.core.seq((state_43080[(4)]))){
var statearr_43150_43818 = state_43080;
(statearr_43150_43818[(1)] = cljs.core.first((state_43080[(4)])));

} else {
throw ex__39931__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43819 = state_43080;
state_43080 = G__43819;
continue;
} else {
return ret_value__39929__auto__;
}
break;
}
});
cljs$core$async$state_machine__39928__auto__ = function(state_43080){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39928__auto____1.call(this,state_43080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39928__auto____0;
cljs$core$async$state_machine__39928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39928__auto____1;
return cljs$core$async$state_machine__39928__auto__;
})()
})();
var state__41021__auto__ = (function (){var statearr_43151 = f__41020__auto__();
(statearr_43151[(6)] = c__41019__auto___43796);

return statearr_43151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41021__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
