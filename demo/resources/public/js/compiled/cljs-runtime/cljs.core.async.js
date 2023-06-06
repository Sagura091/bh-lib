goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__40508 = arguments.length;
switch (G__40508) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40515 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40515 = (function (f,blockable,meta40516){
this.f = f;
this.blockable = blockable;
this.meta40516 = meta40516;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40517,meta40516__$1){
var self__ = this;
var _40517__$1 = this;
return (new cljs.core.async.t_cljs$core$async40515(self__.f,self__.blockable,meta40516__$1));
}));

(cljs.core.async.t_cljs$core$async40515.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40517){
var self__ = this;
var _40517__$1 = this;
return self__.meta40516;
}));

(cljs.core.async.t_cljs$core$async40515.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40515.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async40515.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async40515.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async40515.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta40516","meta40516",-2119723913,null)], null);
}));

(cljs.core.async.t_cljs$core$async40515.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40515.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40515");

(cljs.core.async.t_cljs$core$async40515.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async40515");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40515.
 */
cljs.core.async.__GT_t_cljs$core$async40515 = (function cljs$core$async$__GT_t_cljs$core$async40515(f__$1,blockable__$1,meta40516){
return (new cljs.core.async.t_cljs$core$async40515(f__$1,blockable__$1,meta40516));
});

}

return (new cljs.core.async.t_cljs$core$async40515(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__40541 = arguments.length;
switch (G__40541) {
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
var G__40564 = arguments.length;
switch (G__40564) {
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
var G__40595 = arguments.length;
switch (G__40595) {
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
var val_42891 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_42891) : fn1.call(null,val_42891));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_42891) : fn1.call(null,val_42891));
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
var G__40611 = arguments.length;
switch (G__40611) {
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
var n__4741__auto___42894 = n;
var x_42895 = (0);
while(true){
if((x_42895 < n__4741__auto___42894)){
(a[x_42895] = x_42895);

var G__42898 = (x_42895 + (1));
x_42895 = G__42898;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40638 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40638 = (function (flag,meta40639){
this.flag = flag;
this.meta40639 = meta40639;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40638.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40640,meta40639__$1){
var self__ = this;
var _40640__$1 = this;
return (new cljs.core.async.t_cljs$core$async40638(self__.flag,meta40639__$1));
}));

(cljs.core.async.t_cljs$core$async40638.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40640){
var self__ = this;
var _40640__$1 = this;
return self__.meta40639;
}));

(cljs.core.async.t_cljs$core$async40638.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40638.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async40638.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async40638.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async40638.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta40639","meta40639",-2060337291,null)], null);
}));

(cljs.core.async.t_cljs$core$async40638.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40638.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40638");

(cljs.core.async.t_cljs$core$async40638.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async40638");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40638.
 */
cljs.core.async.__GT_t_cljs$core$async40638 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async40638(flag__$1,meta40639){
return (new cljs.core.async.t_cljs$core$async40638(flag__$1,meta40639));
});

}

return (new cljs.core.async.t_cljs$core$async40638(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40659 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40659 = (function (flag,cb,meta40660){
this.flag = flag;
this.cb = cb;
this.meta40660 = meta40660;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40659.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40661,meta40660__$1){
var self__ = this;
var _40661__$1 = this;
return (new cljs.core.async.t_cljs$core$async40659(self__.flag,self__.cb,meta40660__$1));
}));

(cljs.core.async.t_cljs$core$async40659.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40661){
var self__ = this;
var _40661__$1 = this;
return self__.meta40660;
}));

(cljs.core.async.t_cljs$core$async40659.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40659.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async40659.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async40659.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async40659.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta40660","meta40660",850336539,null)], null);
}));

(cljs.core.async.t_cljs$core$async40659.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40659.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40659");

(cljs.core.async.t_cljs$core$async40659.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async40659");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40659.
 */
cljs.core.async.__GT_t_cljs$core$async40659 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async40659(flag__$1,cb__$1,meta40660){
return (new cljs.core.async.t_cljs$core$async40659(flag__$1,cb__$1,meta40660));
});

}

return (new cljs.core.async.t_cljs$core$async40659(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__40684_SHARP_){
var G__40686 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40684_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__40686) : fret.call(null,G__40686));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40685_SHARP_){
var G__40707 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40685_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__40707) : fret.call(null,G__40707));
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
var G__42900 = (i + (1));
i = G__42900;
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
var len__4864__auto___42901 = arguments.length;
var i__4865__auto___42902 = (0);
while(true){
if((i__4865__auto___42902 < len__4864__auto___42901)){
args__4870__auto__.push((arguments[i__4865__auto___42902]));

var G__42903 = (i__4865__auto___42902 + (1));
i__4865__auto___42902 = G__42903;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__40718){
var map__40719 = p__40718;
var map__40719__$1 = cljs.core.__destructure_map(map__40719);
var opts = map__40719__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq40715){
var G__40716 = cljs.core.first(seq40715);
var seq40715__$1 = cljs.core.next(seq40715);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40716,seq40715__$1);
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
var G__40729 = arguments.length;
switch (G__40729) {
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
var c__40416__auto___42905 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40417__auto__ = (function (){var switch__40326__auto__ = (function (state_40852){
var state_val_40853 = (state_40852[(1)]);
if((state_val_40853 === (7))){
var inst_40819 = (state_40852[(2)]);
var state_40852__$1 = state_40852;
var statearr_40866_42908 = state_40852__$1;
(statearr_40866_42908[(2)] = inst_40819);

(statearr_40866_42908[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40853 === (1))){
var state_40852__$1 = state_40852;
var statearr_40868_42909 = state_40852__$1;
(statearr_40868_42909[(2)] = null);

(statearr_40868_42909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40853 === (4))){
var inst_40780 = (state_40852[(7)]);
var inst_40780__$1 = (state_40852[(2)]);
var inst_40781 = (inst_40780__$1 == null);
var state_40852__$1 = (function (){var statearr_40872 = state_40852;
(statearr_40872[(7)] = inst_40780__$1);

return statearr_40872;
})();
if(cljs.core.truth_(inst_40781)){
var statearr_40873_42911 = state_40852__$1;
(statearr_40873_42911[(1)] = (5));

} else {
var statearr_40874_42912 = state_40852__$1;
(statearr_40874_42912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40853 === (13))){
var state_40852__$1 = state_40852;
var statearr_40876_42913 = state_40852__$1;
(statearr_40876_42913[(2)] = null);

(statearr_40876_42913[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40853 === (6))){
var inst_40780 = (state_40852[(7)]);
var state_40852__$1 = state_40852;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40852__$1,(11),to,inst_40780);
} else {
if((state_val_40853 === (3))){
var inst_40822 = (state_40852[(2)]);
var state_40852__$1 = state_40852;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40852__$1,inst_40822);
} else {
if((state_val_40853 === (12))){
var state_40852__$1 = state_40852;
var statearr_40888_42914 = state_40852__$1;
(statearr_40888_42914[(2)] = null);

(statearr_40888_42914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40853 === (2))){
var state_40852__$1 = state_40852;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40852__$1,(4),from);
} else {
if((state_val_40853 === (11))){
var inst_40804 = (state_40852[(2)]);
var state_40852__$1 = state_40852;
if(cljs.core.truth_(inst_40804)){
var statearr_40889_42915 = state_40852__$1;
(statearr_40889_42915[(1)] = (12));

} else {
var statearr_40890_42916 = state_40852__$1;
(statearr_40890_42916[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40853 === (9))){
var state_40852__$1 = state_40852;
var statearr_40891_42919 = state_40852__$1;
(statearr_40891_42919[(2)] = null);

(statearr_40891_42919[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40853 === (5))){
var state_40852__$1 = state_40852;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40892_42920 = state_40852__$1;
(statearr_40892_42920[(1)] = (8));

} else {
var statearr_40893_42921 = state_40852__$1;
(statearr_40893_42921[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40853 === (14))){
var inst_40817 = (state_40852[(2)]);
var state_40852__$1 = state_40852;
var statearr_40894_42922 = state_40852__$1;
(statearr_40894_42922[(2)] = inst_40817);

(statearr_40894_42922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40853 === (10))){
var inst_40801 = (state_40852[(2)]);
var state_40852__$1 = state_40852;
var statearr_40895_42923 = state_40852__$1;
(statearr_40895_42923[(2)] = inst_40801);

(statearr_40895_42923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40853 === (8))){
var inst_40793 = cljs.core.async.close_BANG_(to);
var state_40852__$1 = state_40852;
var statearr_40896_42924 = state_40852__$1;
(statearr_40896_42924[(2)] = inst_40793);

(statearr_40896_42924[(1)] = (10));


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
var cljs$core$async$state_machine__40327__auto__ = null;
var cljs$core$async$state_machine__40327__auto____0 = (function (){
var statearr_40899 = [null,null,null,null,null,null,null,null];
(statearr_40899[(0)] = cljs$core$async$state_machine__40327__auto__);

(statearr_40899[(1)] = (1));

return statearr_40899;
});
var cljs$core$async$state_machine__40327__auto____1 = (function (state_40852){
while(true){
var ret_value__40328__auto__ = (function (){try{while(true){
var result__40329__auto__ = switch__40326__auto__(state_40852);
if(cljs.core.keyword_identical_QMARK_(result__40329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40329__auto__;
}
break;
}
}catch (e40901){var ex__40330__auto__ = e40901;
var statearr_40902_42925 = state_40852;
(statearr_40902_42925[(2)] = ex__40330__auto__);


if(cljs.core.seq((state_40852[(4)]))){
var statearr_40903_42927 = state_40852;
(statearr_40903_42927[(1)] = cljs.core.first((state_40852[(4)])));

} else {
throw ex__40330__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42929 = state_40852;
state_40852 = G__42929;
continue;
} else {
return ret_value__40328__auto__;
}
break;
}
});
cljs$core$async$state_machine__40327__auto__ = function(state_40852){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40327__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40327__auto____1.call(this,state_40852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40327__auto____0;
cljs$core$async$state_machine__40327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40327__auto____1;
return cljs$core$async$state_machine__40327__auto__;
})()
})();
var state__40418__auto__ = (function (){var statearr_40906 = f__40417__auto__();
(statearr_40906[(6)] = c__40416__auto___42905);

return statearr_40906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40418__auto__);
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
var process = (function (p__40914){
var vec__40915 = p__40914;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40915,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40915,(1),null);
var job = vec__40915;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__40416__auto___42932 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40417__auto__ = (function (){var switch__40326__auto__ = (function (state_40924){
var state_val_40925 = (state_40924[(1)]);
if((state_val_40925 === (1))){
var state_40924__$1 = state_40924;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40924__$1,(2),res,v);
} else {
if((state_val_40925 === (2))){
var inst_40921 = (state_40924[(2)]);
var inst_40922 = cljs.core.async.close_BANG_(res);
var state_40924__$1 = (function (){var statearr_40926 = state_40924;
(statearr_40926[(7)] = inst_40921);

return statearr_40926;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40924__$1,inst_40922);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40327__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40327__auto____0 = (function (){
var statearr_40927 = [null,null,null,null,null,null,null,null];
(statearr_40927[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40327__auto__);

(statearr_40927[(1)] = (1));

return statearr_40927;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40327__auto____1 = (function (state_40924){
while(true){
var ret_value__40328__auto__ = (function (){try{while(true){
var result__40329__auto__ = switch__40326__auto__(state_40924);
if(cljs.core.keyword_identical_QMARK_(result__40329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40329__auto__;
}
break;
}
}catch (e40928){var ex__40330__auto__ = e40928;
var statearr_40929_42933 = state_40924;
(statearr_40929_42933[(2)] = ex__40330__auto__);


if(cljs.core.seq((state_40924[(4)]))){
var statearr_40931_42934 = state_40924;
(statearr_40931_42934[(1)] = cljs.core.first((state_40924[(4)])));

} else {
throw ex__40330__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42935 = state_40924;
state_40924 = G__42935;
continue;
} else {
return ret_value__40328__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40327__auto__ = function(state_40924){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40327__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40327__auto____1.call(this,state_40924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40327__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40327__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40327__auto__;
})()
})();
var state__40418__auto__ = (function (){var statearr_40932 = f__40417__auto__();
(statearr_40932[(6)] = c__40416__auto___42932);

return statearr_40932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40418__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__40934){
var vec__40936 = p__40934;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40936,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40936,(1),null);
var job = vec__40936;
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
var n__4741__auto___42936 = n;
var __42937 = (0);
while(true){
if((__42937 < n__4741__auto___42936)){
var G__40941_42938 = type;
var G__40941_42939__$1 = (((G__40941_42938 instanceof cljs.core.Keyword))?G__40941_42938.fqn:null);
switch (G__40941_42939__$1) {
case "compute":
var c__40416__auto___42941 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__42937,c__40416__auto___42941,G__40941_42938,G__40941_42939__$1,n__4741__auto___42936,jobs,results,process,async){
return (function (){
var f__40417__auto__ = (function (){var switch__40326__auto__ = ((function (__42937,c__40416__auto___42941,G__40941_42938,G__40941_42939__$1,n__4741__auto___42936,jobs,results,process,async){
return (function (state_40958){
var state_val_40959 = (state_40958[(1)]);
if((state_val_40959 === (1))){
var state_40958__$1 = state_40958;
var statearr_40962_42942 = state_40958__$1;
(statearr_40962_42942[(2)] = null);

(statearr_40962_42942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40959 === (2))){
var state_40958__$1 = state_40958;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40958__$1,(4),jobs);
} else {
if((state_val_40959 === (3))){
var inst_40956 = (state_40958[(2)]);
var state_40958__$1 = state_40958;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40958__$1,inst_40956);
} else {
if((state_val_40959 === (4))){
var inst_40944 = (state_40958[(2)]);
var inst_40949 = process(inst_40944);
var state_40958__$1 = state_40958;
if(cljs.core.truth_(inst_40949)){
var statearr_40967_42943 = state_40958__$1;
(statearr_40967_42943[(1)] = (5));

} else {
var statearr_40968_42944 = state_40958__$1;
(statearr_40968_42944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40959 === (5))){
var state_40958__$1 = state_40958;
var statearr_40969_42945 = state_40958__$1;
(statearr_40969_42945[(2)] = null);

(statearr_40969_42945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40959 === (6))){
var state_40958__$1 = state_40958;
var statearr_40970_42946 = state_40958__$1;
(statearr_40970_42946[(2)] = null);

(statearr_40970_42946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40959 === (7))){
var inst_40954 = (state_40958[(2)]);
var state_40958__$1 = state_40958;
var statearr_40975_42949 = state_40958__$1;
(statearr_40975_42949[(2)] = inst_40954);

(statearr_40975_42949[(1)] = (3));


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
});})(__42937,c__40416__auto___42941,G__40941_42938,G__40941_42939__$1,n__4741__auto___42936,jobs,results,process,async))
;
return ((function (__42937,switch__40326__auto__,c__40416__auto___42941,G__40941_42938,G__40941_42939__$1,n__4741__auto___42936,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40327__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40327__auto____0 = (function (){
var statearr_40980 = [null,null,null,null,null,null,null];
(statearr_40980[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40327__auto__);

(statearr_40980[(1)] = (1));

return statearr_40980;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40327__auto____1 = (function (state_40958){
while(true){
var ret_value__40328__auto__ = (function (){try{while(true){
var result__40329__auto__ = switch__40326__auto__(state_40958);
if(cljs.core.keyword_identical_QMARK_(result__40329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40329__auto__;
}
break;
}
}catch (e40981){var ex__40330__auto__ = e40981;
var statearr_40982_42950 = state_40958;
(statearr_40982_42950[(2)] = ex__40330__auto__);


if(cljs.core.seq((state_40958[(4)]))){
var statearr_40983_42951 = state_40958;
(statearr_40983_42951[(1)] = cljs.core.first((state_40958[(4)])));

} else {
throw ex__40330__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42952 = state_40958;
state_40958 = G__42952;
continue;
} else {
return ret_value__40328__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40327__auto__ = function(state_40958){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40327__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40327__auto____1.call(this,state_40958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40327__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40327__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40327__auto__;
})()
;})(__42937,switch__40326__auto__,c__40416__auto___42941,G__40941_42938,G__40941_42939__$1,n__4741__auto___42936,jobs,results,process,async))
})();
var state__40418__auto__ = (function (){var statearr_40984 = f__40417__auto__();
(statearr_40984[(6)] = c__40416__auto___42941);

return statearr_40984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40418__auto__);
});})(__42937,c__40416__auto___42941,G__40941_42938,G__40941_42939__$1,n__4741__auto___42936,jobs,results,process,async))
);


break;
case "async":
var c__40416__auto___42953 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__42937,c__40416__auto___42953,G__40941_42938,G__40941_42939__$1,n__4741__auto___42936,jobs,results,process,async){
return (function (){
var f__40417__auto__ = (function (){var switch__40326__auto__ = ((function (__42937,c__40416__auto___42953,G__40941_42938,G__40941_42939__$1,n__4741__auto___42936,jobs,results,process,async){
return (function (state_41002){
var state_val_41003 = (state_41002[(1)]);
if((state_val_41003 === (1))){
var state_41002__$1 = state_41002;
var statearr_41007_42954 = state_41002__$1;
(statearr_41007_42954[(2)] = null);

(statearr_41007_42954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41003 === (2))){
var state_41002__$1 = state_41002;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41002__$1,(4),jobs);
} else {
if((state_val_41003 === (3))){
var inst_40999 = (state_41002[(2)]);
var state_41002__$1 = state_41002;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41002__$1,inst_40999);
} else {
if((state_val_41003 === (4))){
var inst_40991 = (state_41002[(2)]);
var inst_40992 = async(inst_40991);
var state_41002__$1 = state_41002;
if(cljs.core.truth_(inst_40992)){
var statearr_41008_42956 = state_41002__$1;
(statearr_41008_42956[(1)] = (5));

} else {
var statearr_41009_42957 = state_41002__$1;
(statearr_41009_42957[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41003 === (5))){
var state_41002__$1 = state_41002;
var statearr_41010_42958 = state_41002__$1;
(statearr_41010_42958[(2)] = null);

(statearr_41010_42958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41003 === (6))){
var state_41002__$1 = state_41002;
var statearr_41014_42960 = state_41002__$1;
(statearr_41014_42960[(2)] = null);

(statearr_41014_42960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41003 === (7))){
var inst_40997 = (state_41002[(2)]);
var state_41002__$1 = state_41002;
var statearr_41022_42961 = state_41002__$1;
(statearr_41022_42961[(2)] = inst_40997);

(statearr_41022_42961[(1)] = (3));


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
});})(__42937,c__40416__auto___42953,G__40941_42938,G__40941_42939__$1,n__4741__auto___42936,jobs,results,process,async))
;
return ((function (__42937,switch__40326__auto__,c__40416__auto___42953,G__40941_42938,G__40941_42939__$1,n__4741__auto___42936,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40327__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40327__auto____0 = (function (){
var statearr_41023 = [null,null,null,null,null,null,null];
(statearr_41023[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40327__auto__);

(statearr_41023[(1)] = (1));

return statearr_41023;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40327__auto____1 = (function (state_41002){
while(true){
var ret_value__40328__auto__ = (function (){try{while(true){
var result__40329__auto__ = switch__40326__auto__(state_41002);
if(cljs.core.keyword_identical_QMARK_(result__40329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40329__auto__;
}
break;
}
}catch (e41024){var ex__40330__auto__ = e41024;
var statearr_41025_42962 = state_41002;
(statearr_41025_42962[(2)] = ex__40330__auto__);


if(cljs.core.seq((state_41002[(4)]))){
var statearr_41027_42963 = state_41002;
(statearr_41027_42963[(1)] = cljs.core.first((state_41002[(4)])));

} else {
throw ex__40330__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42964 = state_41002;
state_41002 = G__42964;
continue;
} else {
return ret_value__40328__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40327__auto__ = function(state_41002){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40327__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40327__auto____1.call(this,state_41002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40327__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40327__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40327__auto__;
})()
;})(__42937,switch__40326__auto__,c__40416__auto___42953,G__40941_42938,G__40941_42939__$1,n__4741__auto___42936,jobs,results,process,async))
})();
var state__40418__auto__ = (function (){var statearr_41032 = f__40417__auto__();
(statearr_41032[(6)] = c__40416__auto___42953);

return statearr_41032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40418__auto__);
});})(__42937,c__40416__auto___42953,G__40941_42938,G__40941_42939__$1,n__4741__auto___42936,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40941_42939__$1)].join('')));

}

var G__42965 = (__42937 + (1));
__42937 = G__42965;
continue;
} else {
}
break;
}

var c__40416__auto___42966 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40417__auto__ = (function (){var switch__40326__auto__ = (function (state_41064){
var state_val_41065 = (state_41064[(1)]);
if((state_val_41065 === (7))){
var inst_41060 = (state_41064[(2)]);
var state_41064__$1 = state_41064;
var statearr_41074_42967 = state_41064__$1;
(statearr_41074_42967[(2)] = inst_41060);

(statearr_41074_42967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41065 === (1))){
var state_41064__$1 = state_41064;
var statearr_41075_42969 = state_41064__$1;
(statearr_41075_42969[(2)] = null);

(statearr_41075_42969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41065 === (4))){
var inst_41039 = (state_41064[(7)]);
var inst_41039__$1 = (state_41064[(2)]);
var inst_41041 = (inst_41039__$1 == null);
var state_41064__$1 = (function (){var statearr_41076 = state_41064;
(statearr_41076[(7)] = inst_41039__$1);

return statearr_41076;
})();
if(cljs.core.truth_(inst_41041)){
var statearr_41080_42971 = state_41064__$1;
(statearr_41080_42971[(1)] = (5));

} else {
var statearr_41082_42972 = state_41064__$1;
(statearr_41082_42972[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41065 === (6))){
var inst_41046 = (state_41064[(8)]);
var inst_41039 = (state_41064[(7)]);
var inst_41046__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_41051 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41052 = [inst_41039,inst_41046__$1];
var inst_41053 = (new cljs.core.PersistentVector(null,2,(5),inst_41051,inst_41052,null));
var state_41064__$1 = (function (){var statearr_41084 = state_41064;
(statearr_41084[(8)] = inst_41046__$1);

return statearr_41084;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41064__$1,(8),jobs,inst_41053);
} else {
if((state_val_41065 === (3))){
var inst_41062 = (state_41064[(2)]);
var state_41064__$1 = state_41064;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41064__$1,inst_41062);
} else {
if((state_val_41065 === (2))){
var state_41064__$1 = state_41064;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41064__$1,(4),from);
} else {
if((state_val_41065 === (9))){
var inst_41057 = (state_41064[(2)]);
var state_41064__$1 = (function (){var statearr_41088 = state_41064;
(statearr_41088[(9)] = inst_41057);

return statearr_41088;
})();
var statearr_41089_42974 = state_41064__$1;
(statearr_41089_42974[(2)] = null);

(statearr_41089_42974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41065 === (5))){
var inst_41043 = cljs.core.async.close_BANG_(jobs);
var state_41064__$1 = state_41064;
var statearr_41091_42975 = state_41064__$1;
(statearr_41091_42975[(2)] = inst_41043);

(statearr_41091_42975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41065 === (8))){
var inst_41046 = (state_41064[(8)]);
var inst_41055 = (state_41064[(2)]);
var state_41064__$1 = (function (){var statearr_41093 = state_41064;
(statearr_41093[(10)] = inst_41055);

return statearr_41093;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41064__$1,(9),results,inst_41046);
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
var cljs$core$async$pipeline_STAR__$_state_machine__40327__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40327__auto____0 = (function (){
var statearr_41096 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41096[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40327__auto__);

(statearr_41096[(1)] = (1));

return statearr_41096;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40327__auto____1 = (function (state_41064){
while(true){
var ret_value__40328__auto__ = (function (){try{while(true){
var result__40329__auto__ = switch__40326__auto__(state_41064);
if(cljs.core.keyword_identical_QMARK_(result__40329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40329__auto__;
}
break;
}
}catch (e41097){var ex__40330__auto__ = e41097;
var statearr_41098_42977 = state_41064;
(statearr_41098_42977[(2)] = ex__40330__auto__);


if(cljs.core.seq((state_41064[(4)]))){
var statearr_41101_42978 = state_41064;
(statearr_41101_42978[(1)] = cljs.core.first((state_41064[(4)])));

} else {
throw ex__40330__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42979 = state_41064;
state_41064 = G__42979;
continue;
} else {
return ret_value__40328__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40327__auto__ = function(state_41064){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40327__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40327__auto____1.call(this,state_41064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40327__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40327__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40327__auto__;
})()
})();
var state__40418__auto__ = (function (){var statearr_41103 = f__40417__auto__();
(statearr_41103[(6)] = c__40416__auto___42966);

return statearr_41103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40418__auto__);
}));


var c__40416__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40417__auto__ = (function (){var switch__40326__auto__ = (function (state_41141){
var state_val_41142 = (state_41141[(1)]);
if((state_val_41142 === (7))){
var inst_41137 = (state_41141[(2)]);
var state_41141__$1 = state_41141;
var statearr_41150_42980 = state_41141__$1;
(statearr_41150_42980[(2)] = inst_41137);

(statearr_41150_42980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41142 === (20))){
var state_41141__$1 = state_41141;
var statearr_41154_42981 = state_41141__$1;
(statearr_41154_42981[(2)] = null);

(statearr_41154_42981[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41142 === (1))){
var state_41141__$1 = state_41141;
var statearr_41155_42982 = state_41141__$1;
(statearr_41155_42982[(2)] = null);

(statearr_41155_42982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41142 === (4))){
var inst_41106 = (state_41141[(7)]);
var inst_41106__$1 = (state_41141[(2)]);
var inst_41107 = (inst_41106__$1 == null);
var state_41141__$1 = (function (){var statearr_41160 = state_41141;
(statearr_41160[(7)] = inst_41106__$1);

return statearr_41160;
})();
if(cljs.core.truth_(inst_41107)){
var statearr_41161_42983 = state_41141__$1;
(statearr_41161_42983[(1)] = (5));

} else {
var statearr_41165_42984 = state_41141__$1;
(statearr_41165_42984[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41142 === (15))){
var inst_41119 = (state_41141[(8)]);
var state_41141__$1 = state_41141;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41141__$1,(18),to,inst_41119);
} else {
if((state_val_41142 === (21))){
var inst_41132 = (state_41141[(2)]);
var state_41141__$1 = state_41141;
var statearr_41167_42985 = state_41141__$1;
(statearr_41167_42985[(2)] = inst_41132);

(statearr_41167_42985[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41142 === (13))){
var inst_41134 = (state_41141[(2)]);
var state_41141__$1 = (function (){var statearr_41171 = state_41141;
(statearr_41171[(9)] = inst_41134);

return statearr_41171;
})();
var statearr_41173_42986 = state_41141__$1;
(statearr_41173_42986[(2)] = null);

(statearr_41173_42986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41142 === (6))){
var inst_41106 = (state_41141[(7)]);
var state_41141__$1 = state_41141;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41141__$1,(11),inst_41106);
} else {
if((state_val_41142 === (17))){
var inst_41127 = (state_41141[(2)]);
var state_41141__$1 = state_41141;
if(cljs.core.truth_(inst_41127)){
var statearr_41178_42987 = state_41141__$1;
(statearr_41178_42987[(1)] = (19));

} else {
var statearr_41179_42988 = state_41141__$1;
(statearr_41179_42988[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41142 === (3))){
var inst_41139 = (state_41141[(2)]);
var state_41141__$1 = state_41141;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41141__$1,inst_41139);
} else {
if((state_val_41142 === (12))){
var inst_41116 = (state_41141[(10)]);
var state_41141__$1 = state_41141;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41141__$1,(14),inst_41116);
} else {
if((state_val_41142 === (2))){
var state_41141__$1 = state_41141;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41141__$1,(4),results);
} else {
if((state_val_41142 === (19))){
var state_41141__$1 = state_41141;
var statearr_41188_42989 = state_41141__$1;
(statearr_41188_42989[(2)] = null);

(statearr_41188_42989[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41142 === (11))){
var inst_41116 = (state_41141[(2)]);
var state_41141__$1 = (function (){var statearr_41189 = state_41141;
(statearr_41189[(10)] = inst_41116);

return statearr_41189;
})();
var statearr_41190_42990 = state_41141__$1;
(statearr_41190_42990[(2)] = null);

(statearr_41190_42990[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41142 === (9))){
var state_41141__$1 = state_41141;
var statearr_41192_42991 = state_41141__$1;
(statearr_41192_42991[(2)] = null);

(statearr_41192_42991[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41142 === (5))){
var state_41141__$1 = state_41141;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41193_42992 = state_41141__$1;
(statearr_41193_42992[(1)] = (8));

} else {
var statearr_41194_42993 = state_41141__$1;
(statearr_41194_42993[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41142 === (14))){
var inst_41119 = (state_41141[(8)]);
var inst_41121 = (state_41141[(11)]);
var inst_41119__$1 = (state_41141[(2)]);
var inst_41120 = (inst_41119__$1 == null);
var inst_41121__$1 = cljs.core.not(inst_41120);
var state_41141__$1 = (function (){var statearr_41202 = state_41141;
(statearr_41202[(8)] = inst_41119__$1);

(statearr_41202[(11)] = inst_41121__$1);

return statearr_41202;
})();
if(inst_41121__$1){
var statearr_41207_42994 = state_41141__$1;
(statearr_41207_42994[(1)] = (15));

} else {
var statearr_41209_42995 = state_41141__$1;
(statearr_41209_42995[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41142 === (16))){
var inst_41121 = (state_41141[(11)]);
var state_41141__$1 = state_41141;
var statearr_41220_42996 = state_41141__$1;
(statearr_41220_42996[(2)] = inst_41121);

(statearr_41220_42996[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41142 === (10))){
var inst_41113 = (state_41141[(2)]);
var state_41141__$1 = state_41141;
var statearr_41231_42997 = state_41141__$1;
(statearr_41231_42997[(2)] = inst_41113);

(statearr_41231_42997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41142 === (18))){
var inst_41124 = (state_41141[(2)]);
var state_41141__$1 = state_41141;
var statearr_41238_42998 = state_41141__$1;
(statearr_41238_42998[(2)] = inst_41124);

(statearr_41238_42998[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41142 === (8))){
var inst_41110 = cljs.core.async.close_BANG_(to);
var state_41141__$1 = state_41141;
var statearr_41239_42999 = state_41141__$1;
(statearr_41239_42999[(2)] = inst_41110);

(statearr_41239_42999[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__40327__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40327__auto____0 = (function (){
var statearr_41251 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41251[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40327__auto__);

(statearr_41251[(1)] = (1));

return statearr_41251;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40327__auto____1 = (function (state_41141){
while(true){
var ret_value__40328__auto__ = (function (){try{while(true){
var result__40329__auto__ = switch__40326__auto__(state_41141);
if(cljs.core.keyword_identical_QMARK_(result__40329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40329__auto__;
}
break;
}
}catch (e41252){var ex__40330__auto__ = e41252;
var statearr_41253_43000 = state_41141;
(statearr_41253_43000[(2)] = ex__40330__auto__);


if(cljs.core.seq((state_41141[(4)]))){
var statearr_41258_43001 = state_41141;
(statearr_41258_43001[(1)] = cljs.core.first((state_41141[(4)])));

} else {
throw ex__40330__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43002 = state_41141;
state_41141 = G__43002;
continue;
} else {
return ret_value__40328__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40327__auto__ = function(state_41141){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40327__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40327__auto____1.call(this,state_41141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40327__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40327__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40327__auto__;
})()
})();
var state__40418__auto__ = (function (){var statearr_41272 = f__40417__auto__();
(statearr_41272[(6)] = c__40416__auto__);

return statearr_41272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40418__auto__);
}));

return c__40416__auto__;
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
var G__41280 = arguments.length;
switch (G__41280) {
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
var G__41289 = arguments.length;
switch (G__41289) {
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
var G__41313 = arguments.length;
switch (G__41313) {
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
var c__40416__auto___43009 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40417__auto__ = (function (){var switch__40326__auto__ = (function (state_41339){
var state_val_41340 = (state_41339[(1)]);
if((state_val_41340 === (7))){
var inst_41335 = (state_41339[(2)]);
var state_41339__$1 = state_41339;
var statearr_41341_43011 = state_41339__$1;
(statearr_41341_43011[(2)] = inst_41335);

(statearr_41341_43011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41340 === (1))){
var state_41339__$1 = state_41339;
var statearr_41342_43012 = state_41339__$1;
(statearr_41342_43012[(2)] = null);

(statearr_41342_43012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41340 === (4))){
var inst_41316 = (state_41339[(7)]);
var inst_41316__$1 = (state_41339[(2)]);
var inst_41317 = (inst_41316__$1 == null);
var state_41339__$1 = (function (){var statearr_41343 = state_41339;
(statearr_41343[(7)] = inst_41316__$1);

return statearr_41343;
})();
if(cljs.core.truth_(inst_41317)){
var statearr_41344_43013 = state_41339__$1;
(statearr_41344_43013[(1)] = (5));

} else {
var statearr_41345_43014 = state_41339__$1;
(statearr_41345_43014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41340 === (13))){
var state_41339__$1 = state_41339;
var statearr_41346_43015 = state_41339__$1;
(statearr_41346_43015[(2)] = null);

(statearr_41346_43015[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41340 === (6))){
var inst_41316 = (state_41339[(7)]);
var inst_41322 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_41316) : p.call(null,inst_41316));
var state_41339__$1 = state_41339;
if(cljs.core.truth_(inst_41322)){
var statearr_41347_43016 = state_41339__$1;
(statearr_41347_43016[(1)] = (9));

} else {
var statearr_41348_43017 = state_41339__$1;
(statearr_41348_43017[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41340 === (3))){
var inst_41337 = (state_41339[(2)]);
var state_41339__$1 = state_41339;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41339__$1,inst_41337);
} else {
if((state_val_41340 === (12))){
var state_41339__$1 = state_41339;
var statearr_41349_43018 = state_41339__$1;
(statearr_41349_43018[(2)] = null);

(statearr_41349_43018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41340 === (2))){
var state_41339__$1 = state_41339;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41339__$1,(4),ch);
} else {
if((state_val_41340 === (11))){
var inst_41316 = (state_41339[(7)]);
var inst_41326 = (state_41339[(2)]);
var state_41339__$1 = state_41339;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41339__$1,(8),inst_41326,inst_41316);
} else {
if((state_val_41340 === (9))){
var state_41339__$1 = state_41339;
var statearr_41350_43019 = state_41339__$1;
(statearr_41350_43019[(2)] = tc);

(statearr_41350_43019[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41340 === (5))){
var inst_41319 = cljs.core.async.close_BANG_(tc);
var inst_41320 = cljs.core.async.close_BANG_(fc);
var state_41339__$1 = (function (){var statearr_41351 = state_41339;
(statearr_41351[(8)] = inst_41319);

return statearr_41351;
})();
var statearr_41352_43021 = state_41339__$1;
(statearr_41352_43021[(2)] = inst_41320);

(statearr_41352_43021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41340 === (14))){
var inst_41333 = (state_41339[(2)]);
var state_41339__$1 = state_41339;
var statearr_41353_43023 = state_41339__$1;
(statearr_41353_43023[(2)] = inst_41333);

(statearr_41353_43023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41340 === (10))){
var state_41339__$1 = state_41339;
var statearr_41354_43024 = state_41339__$1;
(statearr_41354_43024[(2)] = fc);

(statearr_41354_43024[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41340 === (8))){
var inst_41328 = (state_41339[(2)]);
var state_41339__$1 = state_41339;
if(cljs.core.truth_(inst_41328)){
var statearr_41355_43025 = state_41339__$1;
(statearr_41355_43025[(1)] = (12));

} else {
var statearr_41356_43026 = state_41339__$1;
(statearr_41356_43026[(1)] = (13));

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
var cljs$core$async$state_machine__40327__auto__ = null;
var cljs$core$async$state_machine__40327__auto____0 = (function (){
var statearr_41357 = [null,null,null,null,null,null,null,null,null];
(statearr_41357[(0)] = cljs$core$async$state_machine__40327__auto__);

(statearr_41357[(1)] = (1));

return statearr_41357;
});
var cljs$core$async$state_machine__40327__auto____1 = (function (state_41339){
while(true){
var ret_value__40328__auto__ = (function (){try{while(true){
var result__40329__auto__ = switch__40326__auto__(state_41339);
if(cljs.core.keyword_identical_QMARK_(result__40329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40329__auto__;
}
break;
}
}catch (e41358){var ex__40330__auto__ = e41358;
var statearr_41359_43029 = state_41339;
(statearr_41359_43029[(2)] = ex__40330__auto__);


if(cljs.core.seq((state_41339[(4)]))){
var statearr_41360_43030 = state_41339;
(statearr_41360_43030[(1)] = cljs.core.first((state_41339[(4)])));

} else {
throw ex__40330__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43031 = state_41339;
state_41339 = G__43031;
continue;
} else {
return ret_value__40328__auto__;
}
break;
}
});
cljs$core$async$state_machine__40327__auto__ = function(state_41339){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40327__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40327__auto____1.call(this,state_41339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40327__auto____0;
cljs$core$async$state_machine__40327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40327__auto____1;
return cljs$core$async$state_machine__40327__auto__;
})()
})();
var state__40418__auto__ = (function (){var statearr_41361 = f__40417__auto__();
(statearr_41361[(6)] = c__40416__auto___43009);

return statearr_41361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40418__auto__);
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
var c__40416__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40417__auto__ = (function (){var switch__40326__auto__ = (function (state_41383){
var state_val_41384 = (state_41383[(1)]);
if((state_val_41384 === (7))){
var inst_41379 = (state_41383[(2)]);
var state_41383__$1 = state_41383;
var statearr_41385_43032 = state_41383__$1;
(statearr_41385_43032[(2)] = inst_41379);

(statearr_41385_43032[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41384 === (1))){
var inst_41362 = init;
var inst_41363 = inst_41362;
var state_41383__$1 = (function (){var statearr_41386 = state_41383;
(statearr_41386[(7)] = inst_41363);

return statearr_41386;
})();
var statearr_41387_43033 = state_41383__$1;
(statearr_41387_43033[(2)] = null);

(statearr_41387_43033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41384 === (4))){
var inst_41366 = (state_41383[(8)]);
var inst_41366__$1 = (state_41383[(2)]);
var inst_41367 = (inst_41366__$1 == null);
var state_41383__$1 = (function (){var statearr_41388 = state_41383;
(statearr_41388[(8)] = inst_41366__$1);

return statearr_41388;
})();
if(cljs.core.truth_(inst_41367)){
var statearr_41389_43034 = state_41383__$1;
(statearr_41389_43034[(1)] = (5));

} else {
var statearr_41390_43035 = state_41383__$1;
(statearr_41390_43035[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41384 === (6))){
var inst_41366 = (state_41383[(8)]);
var inst_41363 = (state_41383[(7)]);
var inst_41370 = (state_41383[(9)]);
var inst_41370__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_41363,inst_41366) : f.call(null,inst_41363,inst_41366));
var inst_41371 = cljs.core.reduced_QMARK_(inst_41370__$1);
var state_41383__$1 = (function (){var statearr_41391 = state_41383;
(statearr_41391[(9)] = inst_41370__$1);

return statearr_41391;
})();
if(inst_41371){
var statearr_41392_43037 = state_41383__$1;
(statearr_41392_43037[(1)] = (8));

} else {
var statearr_41393_43038 = state_41383__$1;
(statearr_41393_43038[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41384 === (3))){
var inst_41381 = (state_41383[(2)]);
var state_41383__$1 = state_41383;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41383__$1,inst_41381);
} else {
if((state_val_41384 === (2))){
var state_41383__$1 = state_41383;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41383__$1,(4),ch);
} else {
if((state_val_41384 === (9))){
var inst_41370 = (state_41383[(9)]);
var inst_41363 = inst_41370;
var state_41383__$1 = (function (){var statearr_41394 = state_41383;
(statearr_41394[(7)] = inst_41363);

return statearr_41394;
})();
var statearr_41395_43041 = state_41383__$1;
(statearr_41395_43041[(2)] = null);

(statearr_41395_43041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41384 === (5))){
var inst_41363 = (state_41383[(7)]);
var state_41383__$1 = state_41383;
var statearr_41396_43042 = state_41383__$1;
(statearr_41396_43042[(2)] = inst_41363);

(statearr_41396_43042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41384 === (10))){
var inst_41377 = (state_41383[(2)]);
var state_41383__$1 = state_41383;
var statearr_41397_43044 = state_41383__$1;
(statearr_41397_43044[(2)] = inst_41377);

(statearr_41397_43044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41384 === (8))){
var inst_41370 = (state_41383[(9)]);
var inst_41373 = cljs.core.deref(inst_41370);
var state_41383__$1 = state_41383;
var statearr_41402_43045 = state_41383__$1;
(statearr_41402_43045[(2)] = inst_41373);

(statearr_41402_43045[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__40327__auto__ = null;
var cljs$core$async$reduce_$_state_machine__40327__auto____0 = (function (){
var statearr_41403 = [null,null,null,null,null,null,null,null,null,null];
(statearr_41403[(0)] = cljs$core$async$reduce_$_state_machine__40327__auto__);

(statearr_41403[(1)] = (1));

return statearr_41403;
});
var cljs$core$async$reduce_$_state_machine__40327__auto____1 = (function (state_41383){
while(true){
var ret_value__40328__auto__ = (function (){try{while(true){
var result__40329__auto__ = switch__40326__auto__(state_41383);
if(cljs.core.keyword_identical_QMARK_(result__40329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40329__auto__;
}
break;
}
}catch (e41404){var ex__40330__auto__ = e41404;
var statearr_41405_43046 = state_41383;
(statearr_41405_43046[(2)] = ex__40330__auto__);


if(cljs.core.seq((state_41383[(4)]))){
var statearr_41406_43047 = state_41383;
(statearr_41406_43047[(1)] = cljs.core.first((state_41383[(4)])));

} else {
throw ex__40330__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43048 = state_41383;
state_41383 = G__43048;
continue;
} else {
return ret_value__40328__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__40327__auto__ = function(state_41383){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__40327__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__40327__auto____1.call(this,state_41383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__40327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__40327__auto____0;
cljs$core$async$reduce_$_state_machine__40327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__40327__auto____1;
return cljs$core$async$reduce_$_state_machine__40327__auto__;
})()
})();
var state__40418__auto__ = (function (){var statearr_41407 = f__40417__auto__();
(statearr_41407[(6)] = c__40416__auto__);

return statearr_41407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40418__auto__);
}));

return c__40416__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__40416__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40417__auto__ = (function (){var switch__40326__auto__ = (function (state_41413){
var state_val_41414 = (state_41413[(1)]);
if((state_val_41414 === (1))){
var inst_41408 = cljs.core.async.reduce(f__$1,init,ch);
var state_41413__$1 = state_41413;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41413__$1,(2),inst_41408);
} else {
if((state_val_41414 === (2))){
var inst_41410 = (state_41413[(2)]);
var inst_41411 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_41410) : f__$1.call(null,inst_41410));
var state_41413__$1 = state_41413;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41413__$1,inst_41411);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__40327__auto__ = null;
var cljs$core$async$transduce_$_state_machine__40327__auto____0 = (function (){
var statearr_41415 = [null,null,null,null,null,null,null];
(statearr_41415[(0)] = cljs$core$async$transduce_$_state_machine__40327__auto__);

(statearr_41415[(1)] = (1));

return statearr_41415;
});
var cljs$core$async$transduce_$_state_machine__40327__auto____1 = (function (state_41413){
while(true){
var ret_value__40328__auto__ = (function (){try{while(true){
var result__40329__auto__ = switch__40326__auto__(state_41413);
if(cljs.core.keyword_identical_QMARK_(result__40329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40329__auto__;
}
break;
}
}catch (e41416){var ex__40330__auto__ = e41416;
var statearr_41417_43049 = state_41413;
(statearr_41417_43049[(2)] = ex__40330__auto__);


if(cljs.core.seq((state_41413[(4)]))){
var statearr_41418_43050 = state_41413;
(statearr_41418_43050[(1)] = cljs.core.first((state_41413[(4)])));

} else {
throw ex__40330__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43051 = state_41413;
state_41413 = G__43051;
continue;
} else {
return ret_value__40328__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__40327__auto__ = function(state_41413){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__40327__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__40327__auto____1.call(this,state_41413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__40327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__40327__auto____0;
cljs$core$async$transduce_$_state_machine__40327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__40327__auto____1;
return cljs$core$async$transduce_$_state_machine__40327__auto__;
})()
})();
var state__40418__auto__ = (function (){var statearr_41419 = f__40417__auto__();
(statearr_41419[(6)] = c__40416__auto__);

return statearr_41419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40418__auto__);
}));

return c__40416__auto__;
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
var G__41421 = arguments.length;
switch (G__41421) {
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
var c__40416__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40417__auto__ = (function (){var switch__40326__auto__ = (function (state_41446){
var state_val_41447 = (state_41446[(1)]);
if((state_val_41447 === (7))){
var inst_41428 = (state_41446[(2)]);
var state_41446__$1 = state_41446;
var statearr_41448_43068 = state_41446__$1;
(statearr_41448_43068[(2)] = inst_41428);

(statearr_41448_43068[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41447 === (1))){
var inst_41422 = cljs.core.seq(coll);
var inst_41423 = inst_41422;
var state_41446__$1 = (function (){var statearr_41449 = state_41446;
(statearr_41449[(7)] = inst_41423);

return statearr_41449;
})();
var statearr_41450_43071 = state_41446__$1;
(statearr_41450_43071[(2)] = null);

(statearr_41450_43071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41447 === (4))){
var inst_41423 = (state_41446[(7)]);
var inst_41426 = cljs.core.first(inst_41423);
var state_41446__$1 = state_41446;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41446__$1,(7),ch,inst_41426);
} else {
if((state_val_41447 === (13))){
var inst_41440 = (state_41446[(2)]);
var state_41446__$1 = state_41446;
var statearr_41453_43075 = state_41446__$1;
(statearr_41453_43075[(2)] = inst_41440);

(statearr_41453_43075[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41447 === (6))){
var inst_41431 = (state_41446[(2)]);
var state_41446__$1 = state_41446;
if(cljs.core.truth_(inst_41431)){
var statearr_41454_43079 = state_41446__$1;
(statearr_41454_43079[(1)] = (8));

} else {
var statearr_41455_43091 = state_41446__$1;
(statearr_41455_43091[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41447 === (3))){
var inst_41444 = (state_41446[(2)]);
var state_41446__$1 = state_41446;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41446__$1,inst_41444);
} else {
if((state_val_41447 === (12))){
var state_41446__$1 = state_41446;
var statearr_41456_43093 = state_41446__$1;
(statearr_41456_43093[(2)] = null);

(statearr_41456_43093[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41447 === (2))){
var inst_41423 = (state_41446[(7)]);
var state_41446__$1 = state_41446;
if(cljs.core.truth_(inst_41423)){
var statearr_41457_43097 = state_41446__$1;
(statearr_41457_43097[(1)] = (4));

} else {
var statearr_41458_43098 = state_41446__$1;
(statearr_41458_43098[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41447 === (11))){
var inst_41437 = cljs.core.async.close_BANG_(ch);
var state_41446__$1 = state_41446;
var statearr_41459_43099 = state_41446__$1;
(statearr_41459_43099[(2)] = inst_41437);

(statearr_41459_43099[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41447 === (9))){
var state_41446__$1 = state_41446;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41460_43102 = state_41446__$1;
(statearr_41460_43102[(1)] = (11));

} else {
var statearr_41461_43103 = state_41446__$1;
(statearr_41461_43103[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41447 === (5))){
var inst_41423 = (state_41446[(7)]);
var state_41446__$1 = state_41446;
var statearr_41462_43105 = state_41446__$1;
(statearr_41462_43105[(2)] = inst_41423);

(statearr_41462_43105[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41447 === (10))){
var inst_41442 = (state_41446[(2)]);
var state_41446__$1 = state_41446;
var statearr_41463_43107 = state_41446__$1;
(statearr_41463_43107[(2)] = inst_41442);

(statearr_41463_43107[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41447 === (8))){
var inst_41423 = (state_41446[(7)]);
var inst_41433 = cljs.core.next(inst_41423);
var inst_41423__$1 = inst_41433;
var state_41446__$1 = (function (){var statearr_41464 = state_41446;
(statearr_41464[(7)] = inst_41423__$1);

return statearr_41464;
})();
var statearr_41465_43110 = state_41446__$1;
(statearr_41465_43110[(2)] = null);

(statearr_41465_43110[(1)] = (2));


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
var cljs$core$async$state_machine__40327__auto__ = null;
var cljs$core$async$state_machine__40327__auto____0 = (function (){
var statearr_41466 = [null,null,null,null,null,null,null,null];
(statearr_41466[(0)] = cljs$core$async$state_machine__40327__auto__);

(statearr_41466[(1)] = (1));

return statearr_41466;
});
var cljs$core$async$state_machine__40327__auto____1 = (function (state_41446){
while(true){
var ret_value__40328__auto__ = (function (){try{while(true){
var result__40329__auto__ = switch__40326__auto__(state_41446);
if(cljs.core.keyword_identical_QMARK_(result__40329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40329__auto__;
}
break;
}
}catch (e41467){var ex__40330__auto__ = e41467;
var statearr_41468_43119 = state_41446;
(statearr_41468_43119[(2)] = ex__40330__auto__);


if(cljs.core.seq((state_41446[(4)]))){
var statearr_41469_43120 = state_41446;
(statearr_41469_43120[(1)] = cljs.core.first((state_41446[(4)])));

} else {
throw ex__40330__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43121 = state_41446;
state_41446 = G__43121;
continue;
} else {
return ret_value__40328__auto__;
}
break;
}
});
cljs$core$async$state_machine__40327__auto__ = function(state_41446){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40327__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40327__auto____1.call(this,state_41446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40327__auto____0;
cljs$core$async$state_machine__40327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40327__auto____1;
return cljs$core$async$state_machine__40327__auto__;
})()
})();
var state__40418__auto__ = (function (){var statearr_41470 = f__40417__auto__();
(statearr_41470[(6)] = c__40416__auto__);

return statearr_41470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40418__auto__);
}));

return c__40416__auto__;
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
var G__41476 = arguments.length;
switch (G__41476) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_43123 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_43123(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_43124 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_43124(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_43125 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_43125(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_43126 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_43126(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41485 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41485 = (function (ch,cs,meta41486){
this.ch = ch;
this.cs = cs;
this.meta41486 = meta41486;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41485.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41487,meta41486__$1){
var self__ = this;
var _41487__$1 = this;
return (new cljs.core.async.t_cljs$core$async41485(self__.ch,self__.cs,meta41486__$1));
}));

(cljs.core.async.t_cljs$core$async41485.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41487){
var self__ = this;
var _41487__$1 = this;
return self__.meta41486;
}));

(cljs.core.async.t_cljs$core$async41485.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41485.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async41485.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41485.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async41485.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async41485.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async41485.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta41486","meta41486",-1579886867,null)], null);
}));

(cljs.core.async.t_cljs$core$async41485.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41485.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41485");

(cljs.core.async.t_cljs$core$async41485.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async41485");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41485.
 */
cljs.core.async.__GT_t_cljs$core$async41485 = (function cljs$core$async$mult_$___GT_t_cljs$core$async41485(ch__$1,cs__$1,meta41486){
return (new cljs.core.async.t_cljs$core$async41485(ch__$1,cs__$1,meta41486));
});

}

return (new cljs.core.async.t_cljs$core$async41485(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__40416__auto___43129 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40417__auto__ = (function (){var switch__40326__auto__ = (function (state_41645){
var state_val_41646 = (state_41645[(1)]);
if((state_val_41646 === (7))){
var inst_41641 = (state_41645[(2)]);
var state_41645__$1 = state_41645;
var statearr_41647_43130 = state_41645__$1;
(statearr_41647_43130[(2)] = inst_41641);

(statearr_41647_43130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41646 === (20))){
var inst_41541 = (state_41645[(7)]);
var inst_41555 = cljs.core.first(inst_41541);
var inst_41556 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41555,(0),null);
var inst_41557 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41555,(1),null);
var state_41645__$1 = (function (){var statearr_41648 = state_41645;
(statearr_41648[(8)] = inst_41556);

return statearr_41648;
})();
if(cljs.core.truth_(inst_41557)){
var statearr_41649_43131 = state_41645__$1;
(statearr_41649_43131[(1)] = (22));

} else {
var statearr_41650_43132 = state_41645__$1;
(statearr_41650_43132[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41646 === (27))){
var inst_41590 = (state_41645[(9)]);
var inst_41595 = (state_41645[(10)]);
var inst_41588 = (state_41645[(11)]);
var inst_41510 = (state_41645[(12)]);
var inst_41595__$1 = cljs.core._nth(inst_41588,inst_41590);
var inst_41596 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_41595__$1,inst_41510,done);
var state_41645__$1 = (function (){var statearr_41651 = state_41645;
(statearr_41651[(10)] = inst_41595__$1);

return statearr_41651;
})();
if(cljs.core.truth_(inst_41596)){
var statearr_41652_43133 = state_41645__$1;
(statearr_41652_43133[(1)] = (30));

} else {
var statearr_41653_43134 = state_41645__$1;
(statearr_41653_43134[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41646 === (1))){
var state_41645__$1 = state_41645;
var statearr_41654_43135 = state_41645__$1;
(statearr_41654_43135[(2)] = null);

(statearr_41654_43135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41646 === (24))){
var inst_41541 = (state_41645[(7)]);
var inst_41562 = (state_41645[(2)]);
var inst_41566 = cljs.core.next(inst_41541);
var inst_41519 = inst_41566;
var inst_41520 = null;
var inst_41521 = (0);
var inst_41522 = (0);
var state_41645__$1 = (function (){var statearr_41655 = state_41645;
(statearr_41655[(13)] = inst_41520);

(statearr_41655[(14)] = inst_41521);

(statearr_41655[(15)] = inst_41562);

(statearr_41655[(16)] = inst_41522);

(statearr_41655[(17)] = inst_41519);

return statearr_41655;
})();
var statearr_41656_43136 = state_41645__$1;
(statearr_41656_43136[(2)] = null);

(statearr_41656_43136[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41646 === (39))){
var state_41645__$1 = state_41645;
var statearr_41660_43137 = state_41645__$1;
(statearr_41660_43137[(2)] = null);

(statearr_41660_43137[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41646 === (4))){
var inst_41510 = (state_41645[(12)]);
var inst_41510__$1 = (state_41645[(2)]);
var inst_41511 = (inst_41510__$1 == null);
var state_41645__$1 = (function (){var statearr_41661 = state_41645;
(statearr_41661[(12)] = inst_41510__$1);

return statearr_41661;
})();
if(cljs.core.truth_(inst_41511)){
var statearr_41662_43138 = state_41645__$1;
(statearr_41662_43138[(1)] = (5));

} else {
var statearr_41663_43139 = state_41645__$1;
(statearr_41663_43139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41646 === (15))){
var inst_41520 = (state_41645[(13)]);
var inst_41521 = (state_41645[(14)]);
var inst_41522 = (state_41645[(16)]);
var inst_41519 = (state_41645[(17)]);
var inst_41537 = (state_41645[(2)]);
var inst_41538 = (inst_41522 + (1));
var tmp41657 = inst_41520;
var tmp41658 = inst_41521;
var tmp41659 = inst_41519;
var inst_41519__$1 = tmp41659;
var inst_41520__$1 = tmp41657;
var inst_41521__$1 = tmp41658;
var inst_41522__$1 = inst_41538;
var state_41645__$1 = (function (){var statearr_41664 = state_41645;
(statearr_41664[(13)] = inst_41520__$1);

(statearr_41664[(14)] = inst_41521__$1);

(statearr_41664[(18)] = inst_41537);

(statearr_41664[(16)] = inst_41522__$1);

(statearr_41664[(17)] = inst_41519__$1);

return statearr_41664;
})();
var statearr_41665_43140 = state_41645__$1;
(statearr_41665_43140[(2)] = null);

(statearr_41665_43140[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41646 === (21))){
var inst_41569 = (state_41645[(2)]);
var state_41645__$1 = state_41645;
var statearr_41669_43141 = state_41645__$1;
(statearr_41669_43141[(2)] = inst_41569);

(statearr_41669_43141[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41646 === (31))){
var inst_41595 = (state_41645[(10)]);
var inst_41599 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_41595);
var state_41645__$1 = state_41645;
var statearr_41670_43142 = state_41645__$1;
(statearr_41670_43142[(2)] = inst_41599);

(statearr_41670_43142[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41646 === (32))){
var inst_41590 = (state_41645[(9)]);
var inst_41589 = (state_41645[(19)]);
var inst_41587 = (state_41645[(20)]);
var inst_41588 = (state_41645[(11)]);
var inst_41601 = (state_41645[(2)]);
var inst_41602 = (inst_41590 + (1));
var tmp41666 = inst_41589;
var tmp41667 = inst_41587;
var tmp41668 = inst_41588;
var inst_41587__$1 = tmp41667;
var inst_41588__$1 = tmp41668;
var inst_41589__$1 = tmp41666;
var inst_41590__$1 = inst_41602;
var state_41645__$1 = (function (){var statearr_41671 = state_41645;
(statearr_41671[(9)] = inst_41590__$1);

(statearr_41671[(19)] = inst_41589__$1);

(statearr_41671[(20)] = inst_41587__$1);

(statearr_41671[(21)] = inst_41601);

(statearr_41671[(11)] = inst_41588__$1);

return statearr_41671;
})();
var statearr_41672_43143 = state_41645__$1;
(statearr_41672_43143[(2)] = null);

(statearr_41672_43143[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41646 === (40))){
var inst_41614 = (state_41645[(22)]);
var inst_41618 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_41614);
var state_41645__$1 = state_41645;
var statearr_41673_43144 = state_41645__$1;
(statearr_41673_43144[(2)] = inst_41618);

(statearr_41673_43144[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41646 === (33))){
var inst_41605 = (state_41645[(23)]);
var inst_41607 = cljs.core.chunked_seq_QMARK_(inst_41605);
var state_41645__$1 = state_41645;
if(inst_41607){
var statearr_41674_43145 = state_41645__$1;
(statearr_41674_43145[(1)] = (36));

} else {
var statearr_41676_43146 = state_41645__$1;
(statearr_41676_43146[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41646 === (13))){
var inst_41531 = (state_41645[(24)]);
var inst_41534 = cljs.core.async.close_BANG_(inst_41531);
var state_41645__$1 = state_41645;
var statearr_41677_43147 = state_41645__$1;
(statearr_41677_43147[(2)] = inst_41534);

(statearr_41677_43147[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41646 === (22))){
var inst_41556 = (state_41645[(8)]);
var inst_41559 = cljs.core.async.close_BANG_(inst_41556);
var state_41645__$1 = state_41645;
var statearr_41678_43148 = state_41645__$1;
(statearr_41678_43148[(2)] = inst_41559);

(statearr_41678_43148[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41646 === (36))){
var inst_41605 = (state_41645[(23)]);
var inst_41609 = cljs.core.chunk_first(inst_41605);
var inst_41610 = cljs.core.chunk_rest(inst_41605);
var inst_41611 = cljs.core.count(inst_41609);
var inst_41587 = inst_41610;
var inst_41588 = inst_41609;
var inst_41589 = inst_41611;
var inst_41590 = (0);
var state_41645__$1 = (function (){var statearr_41679 = state_41645;
(statearr_41679[(9)] = inst_41590);

(statearr_41679[(19)] = inst_41589);

(statearr_41679[(20)] = inst_41587);

(statearr_41679[(11)] = inst_41588);

return statearr_41679;
})();
var statearr_41680_43149 = state_41645__$1;
(statearr_41680_43149[(2)] = null);

(statearr_41680_43149[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41646 === (41))){
var inst_41605 = (state_41645[(23)]);
var inst_41620 = (state_41645[(2)]);
var inst_41621 = cljs.core.next(inst_41605);
var inst_41587 = inst_41621;
var inst_41588 = null;
var inst_41589 = (0);
var inst_41590 = (0);
var state_41645__$1 = (function (){var statearr_41681 = state_41645;
(statearr_41681[(9)] = inst_41590);

(statearr_41681[(19)] = inst_41589);

(statearr_41681[(20)] = inst_41587);

(statearr_41681[(25)] = inst_41620);

(statearr_41681[(11)] = inst_41588);

return statearr_41681;
})();
var statearr_41682_43150 = state_41645__$1;
(statearr_41682_43150[(2)] = null);

(statearr_41682_43150[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41646 === (43))){
var state_41645__$1 = state_41645;
var statearr_41683_43151 = state_41645__$1;
(statearr_41683_43151[(2)] = null);

(statearr_41683_43151[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41646 === (29))){
var inst_41629 = (state_41645[(2)]);
var state_41645__$1 = state_41645;
var statearr_41684_43152 = state_41645__$1;
(statearr_41684_43152[(2)] = inst_41629);

(statearr_41684_43152[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41646 === (44))){
var inst_41638 = (state_41645[(2)]);
var state_41645__$1 = (function (){var statearr_41685 = state_41645;
(statearr_41685[(26)] = inst_41638);

return statearr_41685;
})();
var statearr_41686_43153 = state_41645__$1;
(statearr_41686_43153[(2)] = null);

(statearr_41686_43153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41646 === (6))){
var inst_41579 = (state_41645[(27)]);
var inst_41578 = cljs.core.deref(cs);
var inst_41579__$1 = cljs.core.keys(inst_41578);
var inst_41580 = cljs.core.count(inst_41579__$1);
var inst_41581 = cljs.core.reset_BANG_(dctr,inst_41580);
var inst_41586 = cljs.core.seq(inst_41579__$1);
var inst_41587 = inst_41586;
var inst_41588 = null;
var inst_41589 = (0);
var inst_41590 = (0);
var state_41645__$1 = (function (){var statearr_41687 = state_41645;
(statearr_41687[(27)] = inst_41579__$1);

(statearr_41687[(28)] = inst_41581);

(statearr_41687[(9)] = inst_41590);

(statearr_41687[(19)] = inst_41589);

(statearr_41687[(20)] = inst_41587);

(statearr_41687[(11)] = inst_41588);

return statearr_41687;
})();
var statearr_41688_43154 = state_41645__$1;
(statearr_41688_43154[(2)] = null);

(statearr_41688_43154[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41646 === (28))){
var inst_41587 = (state_41645[(20)]);
var inst_41605 = (state_41645[(23)]);
var inst_41605__$1 = cljs.core.seq(inst_41587);
var state_41645__$1 = (function (){var statearr_41689 = state_41645;
(statearr_41689[(23)] = inst_41605__$1);

return statearr_41689;
})();
if(inst_41605__$1){
var statearr_41690_43162 = state_41645__$1;
(statearr_41690_43162[(1)] = (33));

} else {
var statearr_41691_43163 = state_41645__$1;
(statearr_41691_43163[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41646 === (25))){
var inst_41590 = (state_41645[(9)]);
var inst_41589 = (state_41645[(19)]);
var inst_41592 = (inst_41590 < inst_41589);
var inst_41593 = inst_41592;
var state_41645__$1 = state_41645;
if(cljs.core.truth_(inst_41593)){
var statearr_41692_43164 = state_41645__$1;
(statearr_41692_43164[(1)] = (27));

} else {
var statearr_41693_43165 = state_41645__$1;
(statearr_41693_43165[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41646 === (34))){
var state_41645__$1 = state_41645;
var statearr_41717_43166 = state_41645__$1;
(statearr_41717_43166[(2)] = null);

(statearr_41717_43166[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41646 === (17))){
var state_41645__$1 = state_41645;
var statearr_41718_43167 = state_41645__$1;
(statearr_41718_43167[(2)] = null);

(statearr_41718_43167[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41646 === (3))){
var inst_41643 = (state_41645[(2)]);
var state_41645__$1 = state_41645;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41645__$1,inst_41643);
} else {
if((state_val_41646 === (12))){
var inst_41574 = (state_41645[(2)]);
var state_41645__$1 = state_41645;
var statearr_41719_43168 = state_41645__$1;
(statearr_41719_43168[(2)] = inst_41574);

(statearr_41719_43168[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41646 === (2))){
var state_41645__$1 = state_41645;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41645__$1,(4),ch);
} else {
if((state_val_41646 === (23))){
var state_41645__$1 = state_41645;
var statearr_41721_43169 = state_41645__$1;
(statearr_41721_43169[(2)] = null);

(statearr_41721_43169[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41646 === (35))){
var inst_41627 = (state_41645[(2)]);
var state_41645__$1 = state_41645;
var statearr_41724_43170 = state_41645__$1;
(statearr_41724_43170[(2)] = inst_41627);

(statearr_41724_43170[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41646 === (19))){
var inst_41541 = (state_41645[(7)]);
var inst_41547 = cljs.core.chunk_first(inst_41541);
var inst_41548 = cljs.core.chunk_rest(inst_41541);
var inst_41549 = cljs.core.count(inst_41547);
var inst_41519 = inst_41548;
var inst_41520 = inst_41547;
var inst_41521 = inst_41549;
var inst_41522 = (0);
var state_41645__$1 = (function (){var statearr_41725 = state_41645;
(statearr_41725[(13)] = inst_41520);

(statearr_41725[(14)] = inst_41521);

(statearr_41725[(16)] = inst_41522);

(statearr_41725[(17)] = inst_41519);

return statearr_41725;
})();
var statearr_41726_43171 = state_41645__$1;
(statearr_41726_43171[(2)] = null);

(statearr_41726_43171[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41646 === (11))){
var inst_41541 = (state_41645[(7)]);
var inst_41519 = (state_41645[(17)]);
var inst_41541__$1 = cljs.core.seq(inst_41519);
var state_41645__$1 = (function (){var statearr_41727 = state_41645;
(statearr_41727[(7)] = inst_41541__$1);

return statearr_41727;
})();
if(inst_41541__$1){
var statearr_41728_43172 = state_41645__$1;
(statearr_41728_43172[(1)] = (16));

} else {
var statearr_41729_43173 = state_41645__$1;
(statearr_41729_43173[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41646 === (9))){
var inst_41576 = (state_41645[(2)]);
var state_41645__$1 = state_41645;
var statearr_41751_43174 = state_41645__$1;
(statearr_41751_43174[(2)] = inst_41576);

(statearr_41751_43174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41646 === (5))){
var inst_41517 = cljs.core.deref(cs);
var inst_41518 = cljs.core.seq(inst_41517);
var inst_41519 = inst_41518;
var inst_41520 = null;
var inst_41521 = (0);
var inst_41522 = (0);
var state_41645__$1 = (function (){var statearr_41761 = state_41645;
(statearr_41761[(13)] = inst_41520);

(statearr_41761[(14)] = inst_41521);

(statearr_41761[(16)] = inst_41522);

(statearr_41761[(17)] = inst_41519);

return statearr_41761;
})();
var statearr_41774_43175 = state_41645__$1;
(statearr_41774_43175[(2)] = null);

(statearr_41774_43175[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41646 === (14))){
var state_41645__$1 = state_41645;
var statearr_41779_43176 = state_41645__$1;
(statearr_41779_43176[(2)] = null);

(statearr_41779_43176[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41646 === (45))){
var inst_41635 = (state_41645[(2)]);
var state_41645__$1 = state_41645;
var statearr_41797_43177 = state_41645__$1;
(statearr_41797_43177[(2)] = inst_41635);

(statearr_41797_43177[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41646 === (26))){
var inst_41579 = (state_41645[(27)]);
var inst_41631 = (state_41645[(2)]);
var inst_41632 = cljs.core.seq(inst_41579);
var state_41645__$1 = (function (){var statearr_41798 = state_41645;
(statearr_41798[(29)] = inst_41631);

return statearr_41798;
})();
if(inst_41632){
var statearr_41799_43178 = state_41645__$1;
(statearr_41799_43178[(1)] = (42));

} else {
var statearr_41800_43179 = state_41645__$1;
(statearr_41800_43179[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41646 === (16))){
var inst_41541 = (state_41645[(7)]);
var inst_41545 = cljs.core.chunked_seq_QMARK_(inst_41541);
var state_41645__$1 = state_41645;
if(inst_41545){
var statearr_41801_43180 = state_41645__$1;
(statearr_41801_43180[(1)] = (19));

} else {
var statearr_41802_43181 = state_41645__$1;
(statearr_41802_43181[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41646 === (38))){
var inst_41624 = (state_41645[(2)]);
var state_41645__$1 = state_41645;
var statearr_41804_43182 = state_41645__$1;
(statearr_41804_43182[(2)] = inst_41624);

(statearr_41804_43182[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41646 === (30))){
var state_41645__$1 = state_41645;
var statearr_41805_43183 = state_41645__$1;
(statearr_41805_43183[(2)] = null);

(statearr_41805_43183[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41646 === (10))){
var inst_41520 = (state_41645[(13)]);
var inst_41522 = (state_41645[(16)]);
var inst_41530 = cljs.core._nth(inst_41520,inst_41522);
var inst_41531 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41530,(0),null);
var inst_41532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41530,(1),null);
var state_41645__$1 = (function (){var statearr_41806 = state_41645;
(statearr_41806[(24)] = inst_41531);

return statearr_41806;
})();
if(cljs.core.truth_(inst_41532)){
var statearr_41811_43184 = state_41645__$1;
(statearr_41811_43184[(1)] = (13));

} else {
var statearr_41816_43185 = state_41645__$1;
(statearr_41816_43185[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41646 === (18))){
var inst_41572 = (state_41645[(2)]);
var state_41645__$1 = state_41645;
var statearr_41821_43186 = state_41645__$1;
(statearr_41821_43186[(2)] = inst_41572);

(statearr_41821_43186[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41646 === (42))){
var state_41645__$1 = state_41645;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41645__$1,(45),dchan);
} else {
if((state_val_41646 === (37))){
var inst_41614 = (state_41645[(22)]);
var inst_41605 = (state_41645[(23)]);
var inst_41510 = (state_41645[(12)]);
var inst_41614__$1 = cljs.core.first(inst_41605);
var inst_41615 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_41614__$1,inst_41510,done);
var state_41645__$1 = (function (){var statearr_41822 = state_41645;
(statearr_41822[(22)] = inst_41614__$1);

return statearr_41822;
})();
if(cljs.core.truth_(inst_41615)){
var statearr_41823_43187 = state_41645__$1;
(statearr_41823_43187[(1)] = (39));

} else {
var statearr_41824_43188 = state_41645__$1;
(statearr_41824_43188[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41646 === (8))){
var inst_41521 = (state_41645[(14)]);
var inst_41522 = (state_41645[(16)]);
var inst_41524 = (inst_41522 < inst_41521);
var inst_41525 = inst_41524;
var state_41645__$1 = state_41645;
if(cljs.core.truth_(inst_41525)){
var statearr_41825_43189 = state_41645__$1;
(statearr_41825_43189[(1)] = (10));

} else {
var statearr_41826_43190 = state_41645__$1;
(statearr_41826_43190[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__40327__auto__ = null;
var cljs$core$async$mult_$_state_machine__40327__auto____0 = (function (){
var statearr_41828 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41828[(0)] = cljs$core$async$mult_$_state_machine__40327__auto__);

(statearr_41828[(1)] = (1));

return statearr_41828;
});
var cljs$core$async$mult_$_state_machine__40327__auto____1 = (function (state_41645){
while(true){
var ret_value__40328__auto__ = (function (){try{while(true){
var result__40329__auto__ = switch__40326__auto__(state_41645);
if(cljs.core.keyword_identical_QMARK_(result__40329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40329__auto__;
}
break;
}
}catch (e41829){var ex__40330__auto__ = e41829;
var statearr_41830_43191 = state_41645;
(statearr_41830_43191[(2)] = ex__40330__auto__);


if(cljs.core.seq((state_41645[(4)]))){
var statearr_41831_43192 = state_41645;
(statearr_41831_43192[(1)] = cljs.core.first((state_41645[(4)])));

} else {
throw ex__40330__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43193 = state_41645;
state_41645 = G__43193;
continue;
} else {
return ret_value__40328__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__40327__auto__ = function(state_41645){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__40327__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__40327__auto____1.call(this,state_41645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__40327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__40327__auto____0;
cljs$core$async$mult_$_state_machine__40327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__40327__auto____1;
return cljs$core$async$mult_$_state_machine__40327__auto__;
})()
})();
var state__40418__auto__ = (function (){var statearr_41832 = f__40417__auto__();
(statearr_41832[(6)] = c__40416__auto___43129);

return statearr_41832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40418__auto__);
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
var G__41834 = arguments.length;
switch (G__41834) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_43195 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_43195(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_43196 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_43196(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_43199 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_43199(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_43200 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_43200(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_43201 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_43201(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___43202 = arguments.length;
var i__4865__auto___43203 = (0);
while(true){
if((i__4865__auto___43203 < len__4864__auto___43202)){
args__4870__auto__.push((arguments[i__4865__auto___43203]));

var G__43204 = (i__4865__auto___43203 + (1));
i__4865__auto___43203 = G__43204;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__41839){
var map__41840 = p__41839;
var map__41840__$1 = cljs.core.__destructure_map(map__41840);
var opts = map__41840__$1;
var statearr_41841_43205 = state;
(statearr_41841_43205[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_41842_43206 = state;
(statearr_41842_43206[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_41843_43207 = state;
(statearr_41843_43207[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq41835){
var G__41836 = cljs.core.first(seq41835);
var seq41835__$1 = cljs.core.next(seq41835);
var G__41837 = cljs.core.first(seq41835__$1);
var seq41835__$2 = cljs.core.next(seq41835__$1);
var G__41838 = cljs.core.first(seq41835__$2);
var seq41835__$3 = cljs.core.next(seq41835__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41836,G__41837,G__41838,seq41835__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41844 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41844 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta41845){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta41845 = meta41845;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41844.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41846,meta41845__$1){
var self__ = this;
var _41846__$1 = this;
return (new cljs.core.async.t_cljs$core$async41844(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta41845__$1));
}));

(cljs.core.async.t_cljs$core$async41844.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41846){
var self__ = this;
var _41846__$1 = this;
return self__.meta41845;
}));

(cljs.core.async.t_cljs$core$async41844.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41844.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async41844.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41844.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async41844.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async41844.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async41844.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async41844.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async41844.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta41845","meta41845",975410997,null)], null);
}));

(cljs.core.async.t_cljs$core$async41844.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41844.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41844");

(cljs.core.async.t_cljs$core$async41844.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async41844");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41844.
 */
cljs.core.async.__GT_t_cljs$core$async41844 = (function cljs$core$async$mix_$___GT_t_cljs$core$async41844(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta41845){
return (new cljs.core.async.t_cljs$core$async41844(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta41845));
});

}

return (new cljs.core.async.t_cljs$core$async41844(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__40416__auto___43210 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40417__auto__ = (function (){var switch__40326__auto__ = (function (state_41939){
var state_val_41940 = (state_41939[(1)]);
if((state_val_41940 === (7))){
var inst_41899 = (state_41939[(2)]);
var state_41939__$1 = state_41939;
if(cljs.core.truth_(inst_41899)){
var statearr_41941_43211 = state_41939__$1;
(statearr_41941_43211[(1)] = (8));

} else {
var statearr_41942_43212 = state_41939__$1;
(statearr_41942_43212[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41940 === (20))){
var inst_41892 = (state_41939[(7)]);
var state_41939__$1 = state_41939;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41939__$1,(23),out,inst_41892);
} else {
if((state_val_41940 === (1))){
var inst_41863 = calc_state();
var inst_41864 = cljs.core.__destructure_map(inst_41863);
var inst_41865 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41864,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_41866 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41864,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_41867 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41864,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_41868 = inst_41863;
var state_41939__$1 = (function (){var statearr_41943 = state_41939;
(statearr_41943[(8)] = inst_41865);

(statearr_41943[(9)] = inst_41866);

(statearr_41943[(10)] = inst_41867);

(statearr_41943[(11)] = inst_41868);

return statearr_41943;
})();
var statearr_41944_43213 = state_41939__$1;
(statearr_41944_43213[(2)] = null);

(statearr_41944_43213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41940 === (24))){
var inst_41883 = (state_41939[(12)]);
var inst_41868 = inst_41883;
var state_41939__$1 = (function (){var statearr_41945 = state_41939;
(statearr_41945[(11)] = inst_41868);

return statearr_41945;
})();
var statearr_41946_43214 = state_41939__$1;
(statearr_41946_43214[(2)] = null);

(statearr_41946_43214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41940 === (4))){
var inst_41894 = (state_41939[(13)]);
var inst_41892 = (state_41939[(7)]);
var inst_41891 = (state_41939[(2)]);
var inst_41892__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41891,(0),null);
var inst_41893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41891,(1),null);
var inst_41894__$1 = (inst_41892__$1 == null);
var state_41939__$1 = (function (){var statearr_41947 = state_41939;
(statearr_41947[(13)] = inst_41894__$1);

(statearr_41947[(7)] = inst_41892__$1);

(statearr_41947[(14)] = inst_41893);

return statearr_41947;
})();
if(cljs.core.truth_(inst_41894__$1)){
var statearr_41948_43215 = state_41939__$1;
(statearr_41948_43215[(1)] = (5));

} else {
var statearr_41949_43216 = state_41939__$1;
(statearr_41949_43216[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41940 === (15))){
var inst_41884 = (state_41939[(15)]);
var inst_41913 = (state_41939[(16)]);
var inst_41913__$1 = cljs.core.empty_QMARK_(inst_41884);
var state_41939__$1 = (function (){var statearr_41950 = state_41939;
(statearr_41950[(16)] = inst_41913__$1);

return statearr_41950;
})();
if(inst_41913__$1){
var statearr_41951_43217 = state_41939__$1;
(statearr_41951_43217[(1)] = (17));

} else {
var statearr_41952_43218 = state_41939__$1;
(statearr_41952_43218[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41940 === (21))){
var inst_41883 = (state_41939[(12)]);
var inst_41868 = inst_41883;
var state_41939__$1 = (function (){var statearr_41953 = state_41939;
(statearr_41953[(11)] = inst_41868);

return statearr_41953;
})();
var statearr_41954_43219 = state_41939__$1;
(statearr_41954_43219[(2)] = null);

(statearr_41954_43219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41940 === (13))){
var inst_41906 = (state_41939[(2)]);
var inst_41907 = calc_state();
var inst_41868 = inst_41907;
var state_41939__$1 = (function (){var statearr_41955 = state_41939;
(statearr_41955[(17)] = inst_41906);

(statearr_41955[(11)] = inst_41868);

return statearr_41955;
})();
var statearr_41956_43220 = state_41939__$1;
(statearr_41956_43220[(2)] = null);

(statearr_41956_43220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41940 === (22))){
var inst_41933 = (state_41939[(2)]);
var state_41939__$1 = state_41939;
var statearr_41957_43222 = state_41939__$1;
(statearr_41957_43222[(2)] = inst_41933);

(statearr_41957_43222[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41940 === (6))){
var inst_41893 = (state_41939[(14)]);
var inst_41897 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41893,change);
var state_41939__$1 = state_41939;
var statearr_41958_43223 = state_41939__$1;
(statearr_41958_43223[(2)] = inst_41897);

(statearr_41958_43223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41940 === (25))){
var state_41939__$1 = state_41939;
var statearr_41959_43224 = state_41939__$1;
(statearr_41959_43224[(2)] = null);

(statearr_41959_43224[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41940 === (17))){
var inst_41893 = (state_41939[(14)]);
var inst_41885 = (state_41939[(18)]);
var inst_41915 = (inst_41885.cljs$core$IFn$_invoke$arity$1 ? inst_41885.cljs$core$IFn$_invoke$arity$1(inst_41893) : inst_41885.call(null,inst_41893));
var inst_41916 = cljs.core.not(inst_41915);
var state_41939__$1 = state_41939;
var statearr_41960_43229 = state_41939__$1;
(statearr_41960_43229[(2)] = inst_41916);

(statearr_41960_43229[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41940 === (3))){
var inst_41937 = (state_41939[(2)]);
var state_41939__$1 = state_41939;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41939__$1,inst_41937);
} else {
if((state_val_41940 === (12))){
var state_41939__$1 = state_41939;
var statearr_41961_43231 = state_41939__$1;
(statearr_41961_43231[(2)] = null);

(statearr_41961_43231[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41940 === (2))){
var inst_41883 = (state_41939[(12)]);
var inst_41868 = (state_41939[(11)]);
var inst_41883__$1 = cljs.core.__destructure_map(inst_41868);
var inst_41884 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41883__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_41885 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41883__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_41886 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41883__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_41939__$1 = (function (){var statearr_41962 = state_41939;
(statearr_41962[(15)] = inst_41884);

(statearr_41962[(12)] = inst_41883__$1);

(statearr_41962[(18)] = inst_41885);

return statearr_41962;
})();
return cljs.core.async.ioc_alts_BANG_(state_41939__$1,(4),inst_41886);
} else {
if((state_val_41940 === (23))){
var inst_41924 = (state_41939[(2)]);
var state_41939__$1 = state_41939;
if(cljs.core.truth_(inst_41924)){
var statearr_41963_43233 = state_41939__$1;
(statearr_41963_43233[(1)] = (24));

} else {
var statearr_41965_43234 = state_41939__$1;
(statearr_41965_43234[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41940 === (19))){
var inst_41919 = (state_41939[(2)]);
var state_41939__$1 = state_41939;
var statearr_41969_43238 = state_41939__$1;
(statearr_41969_43238[(2)] = inst_41919);

(statearr_41969_43238[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41940 === (11))){
var inst_41893 = (state_41939[(14)]);
var inst_41903 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_41893);
var state_41939__$1 = state_41939;
var statearr_41970_43239 = state_41939__$1;
(statearr_41970_43239[(2)] = inst_41903);

(statearr_41970_43239[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41940 === (9))){
var inst_41884 = (state_41939[(15)]);
var inst_41893 = (state_41939[(14)]);
var inst_41910 = (state_41939[(19)]);
var inst_41910__$1 = (inst_41884.cljs$core$IFn$_invoke$arity$1 ? inst_41884.cljs$core$IFn$_invoke$arity$1(inst_41893) : inst_41884.call(null,inst_41893));
var state_41939__$1 = (function (){var statearr_41971 = state_41939;
(statearr_41971[(19)] = inst_41910__$1);

return statearr_41971;
})();
if(cljs.core.truth_(inst_41910__$1)){
var statearr_41972_43241 = state_41939__$1;
(statearr_41972_43241[(1)] = (14));

} else {
var statearr_41973_43242 = state_41939__$1;
(statearr_41973_43242[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41940 === (5))){
var inst_41894 = (state_41939[(13)]);
var state_41939__$1 = state_41939;
var statearr_41974_43243 = state_41939__$1;
(statearr_41974_43243[(2)] = inst_41894);

(statearr_41974_43243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41940 === (14))){
var inst_41910 = (state_41939[(19)]);
var state_41939__$1 = state_41939;
var statearr_41975_43244 = state_41939__$1;
(statearr_41975_43244[(2)] = inst_41910);

(statearr_41975_43244[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41940 === (26))){
var inst_41929 = (state_41939[(2)]);
var state_41939__$1 = state_41939;
var statearr_41976_43245 = state_41939__$1;
(statearr_41976_43245[(2)] = inst_41929);

(statearr_41976_43245[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41940 === (16))){
var inst_41921 = (state_41939[(2)]);
var state_41939__$1 = state_41939;
if(cljs.core.truth_(inst_41921)){
var statearr_41977_43246 = state_41939__$1;
(statearr_41977_43246[(1)] = (20));

} else {
var statearr_41978_43247 = state_41939__$1;
(statearr_41978_43247[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41940 === (10))){
var inst_41935 = (state_41939[(2)]);
var state_41939__$1 = state_41939;
var statearr_41979_43248 = state_41939__$1;
(statearr_41979_43248[(2)] = inst_41935);

(statearr_41979_43248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41940 === (18))){
var inst_41913 = (state_41939[(16)]);
var state_41939__$1 = state_41939;
var statearr_41980_43249 = state_41939__$1;
(statearr_41980_43249[(2)] = inst_41913);

(statearr_41980_43249[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41940 === (8))){
var inst_41892 = (state_41939[(7)]);
var inst_41901 = (inst_41892 == null);
var state_41939__$1 = state_41939;
if(cljs.core.truth_(inst_41901)){
var statearr_41981_43250 = state_41939__$1;
(statearr_41981_43250[(1)] = (11));

} else {
var statearr_41982_43251 = state_41939__$1;
(statearr_41982_43251[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__40327__auto__ = null;
var cljs$core$async$mix_$_state_machine__40327__auto____0 = (function (){
var statearr_41983 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41983[(0)] = cljs$core$async$mix_$_state_machine__40327__auto__);

(statearr_41983[(1)] = (1));

return statearr_41983;
});
var cljs$core$async$mix_$_state_machine__40327__auto____1 = (function (state_41939){
while(true){
var ret_value__40328__auto__ = (function (){try{while(true){
var result__40329__auto__ = switch__40326__auto__(state_41939);
if(cljs.core.keyword_identical_QMARK_(result__40329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40329__auto__;
}
break;
}
}catch (e41984){var ex__40330__auto__ = e41984;
var statearr_41985_43255 = state_41939;
(statearr_41985_43255[(2)] = ex__40330__auto__);


if(cljs.core.seq((state_41939[(4)]))){
var statearr_41986_43257 = state_41939;
(statearr_41986_43257[(1)] = cljs.core.first((state_41939[(4)])));

} else {
throw ex__40330__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43259 = state_41939;
state_41939 = G__43259;
continue;
} else {
return ret_value__40328__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__40327__auto__ = function(state_41939){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__40327__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__40327__auto____1.call(this,state_41939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__40327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__40327__auto____0;
cljs$core$async$mix_$_state_machine__40327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__40327__auto____1;
return cljs$core$async$mix_$_state_machine__40327__auto__;
})()
})();
var state__40418__auto__ = (function (){var statearr_41987 = f__40417__auto__();
(statearr_41987[(6)] = c__40416__auto___43210);

return statearr_41987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40418__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_43261 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_43261(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_43262 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_43262(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_43263 = (function() {
var G__43264 = null;
var G__43264__1 = (function (p){
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
var G__43264__2 = (function (p,v){
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
G__43264 = function(p,v){
switch(arguments.length){
case 1:
return G__43264__1.call(this,p);
case 2:
return G__43264__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__43264.cljs$core$IFn$_invoke$arity$1 = G__43264__1;
G__43264.cljs$core$IFn$_invoke$arity$2 = G__43264__2;
return G__43264;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__41997 = arguments.length;
switch (G__41997) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_43263(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_43263(p,v);
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
var G__42007 = arguments.length;
switch (G__42007) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__42005_SHARP_){
if(cljs.core.truth_((p1__42005_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__42005_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__42005_SHARP_.call(null,topic)))){
return p1__42005_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__42005_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42015 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42015 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta42016){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta42016 = meta42016;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42017,meta42016__$1){
var self__ = this;
var _42017__$1 = this;
return (new cljs.core.async.t_cljs$core$async42015(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta42016__$1));
}));

(cljs.core.async.t_cljs$core$async42015.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42017){
var self__ = this;
var _42017__$1 = this;
return self__.meta42016;
}));

(cljs.core.async.t_cljs$core$async42015.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42015.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async42015.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42015.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async42015.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async42015.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async42015.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async42015.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta42016","meta42016",1411064558,null)], null);
}));

(cljs.core.async.t_cljs$core$async42015.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42015.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42015");

(cljs.core.async.t_cljs$core$async42015.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async42015");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42015.
 */
cljs.core.async.__GT_t_cljs$core$async42015 = (function cljs$core$async$__GT_t_cljs$core$async42015(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42016){
return (new cljs.core.async.t_cljs$core$async42015(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42016));
});

}

return (new cljs.core.async.t_cljs$core$async42015(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__40416__auto___43269 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40417__auto__ = (function (){var switch__40326__auto__ = (function (state_42095){
var state_val_42096 = (state_42095[(1)]);
if((state_val_42096 === (7))){
var inst_42091 = (state_42095[(2)]);
var state_42095__$1 = state_42095;
var statearr_42097_43270 = state_42095__$1;
(statearr_42097_43270[(2)] = inst_42091);

(statearr_42097_43270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42096 === (20))){
var state_42095__$1 = state_42095;
var statearr_42099_43273 = state_42095__$1;
(statearr_42099_43273[(2)] = null);

(statearr_42099_43273[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42096 === (1))){
var state_42095__$1 = state_42095;
var statearr_42104_43274 = state_42095__$1;
(statearr_42104_43274[(2)] = null);

(statearr_42104_43274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42096 === (24))){
var inst_42073 = (state_42095[(7)]);
var inst_42083 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_42073);
var state_42095__$1 = state_42095;
var statearr_42105_43275 = state_42095__$1;
(statearr_42105_43275[(2)] = inst_42083);

(statearr_42105_43275[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42096 === (4))){
var inst_42021 = (state_42095[(8)]);
var inst_42021__$1 = (state_42095[(2)]);
var inst_42022 = (inst_42021__$1 == null);
var state_42095__$1 = (function (){var statearr_42106 = state_42095;
(statearr_42106[(8)] = inst_42021__$1);

return statearr_42106;
})();
if(cljs.core.truth_(inst_42022)){
var statearr_42107_43276 = state_42095__$1;
(statearr_42107_43276[(1)] = (5));

} else {
var statearr_42108_43277 = state_42095__$1;
(statearr_42108_43277[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42096 === (15))){
var inst_42067 = (state_42095[(2)]);
var state_42095__$1 = state_42095;
var statearr_42109_43278 = state_42095__$1;
(statearr_42109_43278[(2)] = inst_42067);

(statearr_42109_43278[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42096 === (21))){
var inst_42088 = (state_42095[(2)]);
var state_42095__$1 = (function (){var statearr_42110 = state_42095;
(statearr_42110[(9)] = inst_42088);

return statearr_42110;
})();
var statearr_42111_43279 = state_42095__$1;
(statearr_42111_43279[(2)] = null);

(statearr_42111_43279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42096 === (13))){
var inst_42045 = (state_42095[(10)]);
var inst_42047 = cljs.core.chunked_seq_QMARK_(inst_42045);
var state_42095__$1 = state_42095;
if(inst_42047){
var statearr_42112_43280 = state_42095__$1;
(statearr_42112_43280[(1)] = (16));

} else {
var statearr_42113_43281 = state_42095__$1;
(statearr_42113_43281[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42096 === (22))){
var inst_42080 = (state_42095[(2)]);
var state_42095__$1 = state_42095;
if(cljs.core.truth_(inst_42080)){
var statearr_42114_43282 = state_42095__$1;
(statearr_42114_43282[(1)] = (23));

} else {
var statearr_42115_43283 = state_42095__$1;
(statearr_42115_43283[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42096 === (6))){
var inst_42021 = (state_42095[(8)]);
var inst_42076 = (state_42095[(11)]);
var inst_42073 = (state_42095[(7)]);
var inst_42073__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_42021) : topic_fn.call(null,inst_42021));
var inst_42075 = cljs.core.deref(mults);
var inst_42076__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42075,inst_42073__$1);
var state_42095__$1 = (function (){var statearr_42116 = state_42095;
(statearr_42116[(11)] = inst_42076__$1);

(statearr_42116[(7)] = inst_42073__$1);

return statearr_42116;
})();
if(cljs.core.truth_(inst_42076__$1)){
var statearr_42117_43284 = state_42095__$1;
(statearr_42117_43284[(1)] = (19));

} else {
var statearr_42118_43285 = state_42095__$1;
(statearr_42118_43285[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42096 === (25))){
var inst_42085 = (state_42095[(2)]);
var state_42095__$1 = state_42095;
var statearr_42119_43286 = state_42095__$1;
(statearr_42119_43286[(2)] = inst_42085);

(statearr_42119_43286[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42096 === (17))){
var inst_42045 = (state_42095[(10)]);
var inst_42058 = cljs.core.first(inst_42045);
var inst_42059 = cljs.core.async.muxch_STAR_(inst_42058);
var inst_42060 = cljs.core.async.close_BANG_(inst_42059);
var inst_42061 = cljs.core.next(inst_42045);
var inst_42031 = inst_42061;
var inst_42032 = null;
var inst_42033 = (0);
var inst_42034 = (0);
var state_42095__$1 = (function (){var statearr_42120 = state_42095;
(statearr_42120[(12)] = inst_42034);

(statearr_42120[(13)] = inst_42032);

(statearr_42120[(14)] = inst_42060);

(statearr_42120[(15)] = inst_42033);

(statearr_42120[(16)] = inst_42031);

return statearr_42120;
})();
var statearr_42122_43287 = state_42095__$1;
(statearr_42122_43287[(2)] = null);

(statearr_42122_43287[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42096 === (3))){
var inst_42093 = (state_42095[(2)]);
var state_42095__$1 = state_42095;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42095__$1,inst_42093);
} else {
if((state_val_42096 === (12))){
var inst_42069 = (state_42095[(2)]);
var state_42095__$1 = state_42095;
var statearr_42126_43288 = state_42095__$1;
(statearr_42126_43288[(2)] = inst_42069);

(statearr_42126_43288[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42096 === (2))){
var state_42095__$1 = state_42095;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42095__$1,(4),ch);
} else {
if((state_val_42096 === (23))){
var state_42095__$1 = state_42095;
var statearr_42127_43289 = state_42095__$1;
(statearr_42127_43289[(2)] = null);

(statearr_42127_43289[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42096 === (19))){
var inst_42021 = (state_42095[(8)]);
var inst_42076 = (state_42095[(11)]);
var inst_42078 = cljs.core.async.muxch_STAR_(inst_42076);
var state_42095__$1 = state_42095;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42095__$1,(22),inst_42078,inst_42021);
} else {
if((state_val_42096 === (11))){
var inst_42045 = (state_42095[(10)]);
var inst_42031 = (state_42095[(16)]);
var inst_42045__$1 = cljs.core.seq(inst_42031);
var state_42095__$1 = (function (){var statearr_42128 = state_42095;
(statearr_42128[(10)] = inst_42045__$1);

return statearr_42128;
})();
if(inst_42045__$1){
var statearr_42129_43295 = state_42095__$1;
(statearr_42129_43295[(1)] = (13));

} else {
var statearr_42130_43296 = state_42095__$1;
(statearr_42130_43296[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42096 === (9))){
var inst_42071 = (state_42095[(2)]);
var state_42095__$1 = state_42095;
var statearr_42131_43299 = state_42095__$1;
(statearr_42131_43299[(2)] = inst_42071);

(statearr_42131_43299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42096 === (5))){
var inst_42028 = cljs.core.deref(mults);
var inst_42029 = cljs.core.vals(inst_42028);
var inst_42030 = cljs.core.seq(inst_42029);
var inst_42031 = inst_42030;
var inst_42032 = null;
var inst_42033 = (0);
var inst_42034 = (0);
var state_42095__$1 = (function (){var statearr_42132 = state_42095;
(statearr_42132[(12)] = inst_42034);

(statearr_42132[(13)] = inst_42032);

(statearr_42132[(15)] = inst_42033);

(statearr_42132[(16)] = inst_42031);

return statearr_42132;
})();
var statearr_42133_43300 = state_42095__$1;
(statearr_42133_43300[(2)] = null);

(statearr_42133_43300[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42096 === (14))){
var state_42095__$1 = state_42095;
var statearr_42137_43301 = state_42095__$1;
(statearr_42137_43301[(2)] = null);

(statearr_42137_43301[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42096 === (16))){
var inst_42045 = (state_42095[(10)]);
var inst_42049 = cljs.core.chunk_first(inst_42045);
var inst_42053 = cljs.core.chunk_rest(inst_42045);
var inst_42055 = cljs.core.count(inst_42049);
var inst_42031 = inst_42053;
var inst_42032 = inst_42049;
var inst_42033 = inst_42055;
var inst_42034 = (0);
var state_42095__$1 = (function (){var statearr_42138 = state_42095;
(statearr_42138[(12)] = inst_42034);

(statearr_42138[(13)] = inst_42032);

(statearr_42138[(15)] = inst_42033);

(statearr_42138[(16)] = inst_42031);

return statearr_42138;
})();
var statearr_42139_43302 = state_42095__$1;
(statearr_42139_43302[(2)] = null);

(statearr_42139_43302[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42096 === (10))){
var inst_42034 = (state_42095[(12)]);
var inst_42032 = (state_42095[(13)]);
var inst_42033 = (state_42095[(15)]);
var inst_42031 = (state_42095[(16)]);
var inst_42039 = cljs.core._nth(inst_42032,inst_42034);
var inst_42040 = cljs.core.async.muxch_STAR_(inst_42039);
var inst_42041 = cljs.core.async.close_BANG_(inst_42040);
var inst_42042 = (inst_42034 + (1));
var tmp42134 = inst_42032;
var tmp42135 = inst_42033;
var tmp42136 = inst_42031;
var inst_42031__$1 = tmp42136;
var inst_42032__$1 = tmp42134;
var inst_42033__$1 = tmp42135;
var inst_42034__$1 = inst_42042;
var state_42095__$1 = (function (){var statearr_42140 = state_42095;
(statearr_42140[(12)] = inst_42034__$1);

(statearr_42140[(13)] = inst_42032__$1);

(statearr_42140[(15)] = inst_42033__$1);

(statearr_42140[(17)] = inst_42041);

(statearr_42140[(16)] = inst_42031__$1);

return statearr_42140;
})();
var statearr_42141_43303 = state_42095__$1;
(statearr_42141_43303[(2)] = null);

(statearr_42141_43303[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42096 === (18))){
var inst_42064 = (state_42095[(2)]);
var state_42095__$1 = state_42095;
var statearr_42142_43304 = state_42095__$1;
(statearr_42142_43304[(2)] = inst_42064);

(statearr_42142_43304[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42096 === (8))){
var inst_42034 = (state_42095[(12)]);
var inst_42033 = (state_42095[(15)]);
var inst_42036 = (inst_42034 < inst_42033);
var inst_42037 = inst_42036;
var state_42095__$1 = state_42095;
if(cljs.core.truth_(inst_42037)){
var statearr_42143_43305 = state_42095__$1;
(statearr_42143_43305[(1)] = (10));

} else {
var statearr_42144_43306 = state_42095__$1;
(statearr_42144_43306[(1)] = (11));

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
var cljs$core$async$state_machine__40327__auto__ = null;
var cljs$core$async$state_machine__40327__auto____0 = (function (){
var statearr_42146 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42146[(0)] = cljs$core$async$state_machine__40327__auto__);

(statearr_42146[(1)] = (1));

return statearr_42146;
});
var cljs$core$async$state_machine__40327__auto____1 = (function (state_42095){
while(true){
var ret_value__40328__auto__ = (function (){try{while(true){
var result__40329__auto__ = switch__40326__auto__(state_42095);
if(cljs.core.keyword_identical_QMARK_(result__40329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40329__auto__;
}
break;
}
}catch (e42147){var ex__40330__auto__ = e42147;
var statearr_42148_43309 = state_42095;
(statearr_42148_43309[(2)] = ex__40330__auto__);


if(cljs.core.seq((state_42095[(4)]))){
var statearr_42149_43310 = state_42095;
(statearr_42149_43310[(1)] = cljs.core.first((state_42095[(4)])));

} else {
throw ex__40330__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43311 = state_42095;
state_42095 = G__43311;
continue;
} else {
return ret_value__40328__auto__;
}
break;
}
});
cljs$core$async$state_machine__40327__auto__ = function(state_42095){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40327__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40327__auto____1.call(this,state_42095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40327__auto____0;
cljs$core$async$state_machine__40327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40327__auto____1;
return cljs$core$async$state_machine__40327__auto__;
})()
})();
var state__40418__auto__ = (function (){var statearr_42150 = f__40417__auto__();
(statearr_42150[(6)] = c__40416__auto___43269);

return statearr_42150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40418__auto__);
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
var G__42155 = arguments.length;
switch (G__42155) {
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
var G__42158 = arguments.length;
switch (G__42158) {
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
var G__42164 = arguments.length;
switch (G__42164) {
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
var c__40416__auto___43317 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40417__auto__ = (function (){var switch__40326__auto__ = (function (state_42216){
var state_val_42217 = (state_42216[(1)]);
if((state_val_42217 === (7))){
var state_42216__$1 = state_42216;
var statearr_42218_43318 = state_42216__$1;
(statearr_42218_43318[(2)] = null);

(statearr_42218_43318[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42217 === (1))){
var state_42216__$1 = state_42216;
var statearr_42219_43319 = state_42216__$1;
(statearr_42219_43319[(2)] = null);

(statearr_42219_43319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42217 === (4))){
var inst_42171 = (state_42216[(7)]);
var inst_42170 = (state_42216[(8)]);
var inst_42173 = (inst_42171 < inst_42170);
var state_42216__$1 = state_42216;
if(cljs.core.truth_(inst_42173)){
var statearr_42220_43320 = state_42216__$1;
(statearr_42220_43320[(1)] = (6));

} else {
var statearr_42222_43321 = state_42216__$1;
(statearr_42222_43321[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42217 === (15))){
var inst_42201 = (state_42216[(9)]);
var inst_42206 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_42201);
var state_42216__$1 = state_42216;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42216__$1,(17),out,inst_42206);
} else {
if((state_val_42217 === (13))){
var inst_42201 = (state_42216[(9)]);
var inst_42201__$1 = (state_42216[(2)]);
var inst_42202 = cljs.core.some(cljs.core.nil_QMARK_,inst_42201__$1);
var state_42216__$1 = (function (){var statearr_42226 = state_42216;
(statearr_42226[(9)] = inst_42201__$1);

return statearr_42226;
})();
if(cljs.core.truth_(inst_42202)){
var statearr_42227_43322 = state_42216__$1;
(statearr_42227_43322[(1)] = (14));

} else {
var statearr_42228_43323 = state_42216__$1;
(statearr_42228_43323[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42217 === (6))){
var state_42216__$1 = state_42216;
var statearr_42229_43324 = state_42216__$1;
(statearr_42229_43324[(2)] = null);

(statearr_42229_43324[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42217 === (17))){
var inst_42208 = (state_42216[(2)]);
var state_42216__$1 = (function (){var statearr_42231 = state_42216;
(statearr_42231[(10)] = inst_42208);

return statearr_42231;
})();
var statearr_42232_43325 = state_42216__$1;
(statearr_42232_43325[(2)] = null);

(statearr_42232_43325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42217 === (3))){
var inst_42213 = (state_42216[(2)]);
var state_42216__$1 = state_42216;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42216__$1,inst_42213);
} else {
if((state_val_42217 === (12))){
var _ = (function (){var statearr_42233 = state_42216;
(statearr_42233[(4)] = cljs.core.rest((state_42216[(4)])));

return statearr_42233;
})();
var state_42216__$1 = state_42216;
var ex42230 = (state_42216__$1[(2)]);
var statearr_42234_43326 = state_42216__$1;
(statearr_42234_43326[(5)] = ex42230);


if((ex42230 instanceof Object)){
var statearr_42236_43327 = state_42216__$1;
(statearr_42236_43327[(1)] = (11));

(statearr_42236_43327[(5)] = null);

} else {
throw ex42230;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42217 === (2))){
var inst_42169 = cljs.core.reset_BANG_(dctr,cnt);
var inst_42170 = cnt;
var inst_42171 = (0);
var state_42216__$1 = (function (){var statearr_42240 = state_42216;
(statearr_42240[(7)] = inst_42171);

(statearr_42240[(11)] = inst_42169);

(statearr_42240[(8)] = inst_42170);

return statearr_42240;
})();
var statearr_42241_43329 = state_42216__$1;
(statearr_42241_43329[(2)] = null);

(statearr_42241_43329[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42217 === (11))){
var inst_42176 = (state_42216[(2)]);
var inst_42177 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_42216__$1 = (function (){var statearr_42242 = state_42216;
(statearr_42242[(12)] = inst_42176);

return statearr_42242;
})();
var statearr_42243_43330 = state_42216__$1;
(statearr_42243_43330[(2)] = inst_42177);

(statearr_42243_43330[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42217 === (9))){
var inst_42171 = (state_42216[(7)]);
var _ = (function (){var statearr_42244 = state_42216;
(statearr_42244[(4)] = cljs.core.cons((12),(state_42216[(4)])));

return statearr_42244;
})();
var inst_42183 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_42171) : chs__$1.call(null,inst_42171));
var inst_42184 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_42171) : done.call(null,inst_42171));
var inst_42185 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_42183,inst_42184);
var ___$1 = (function (){var statearr_42245 = state_42216;
(statearr_42245[(4)] = cljs.core.rest((state_42216[(4)])));

return statearr_42245;
})();
var state_42216__$1 = state_42216;
var statearr_42246_43334 = state_42216__$1;
(statearr_42246_43334[(2)] = inst_42185);

(statearr_42246_43334[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42217 === (5))){
var inst_42199 = (state_42216[(2)]);
var state_42216__$1 = (function (){var statearr_42247 = state_42216;
(statearr_42247[(13)] = inst_42199);

return statearr_42247;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42216__$1,(13),dchan);
} else {
if((state_val_42217 === (14))){
var inst_42204 = cljs.core.async.close_BANG_(out);
var state_42216__$1 = state_42216;
var statearr_42249_43337 = state_42216__$1;
(statearr_42249_43337[(2)] = inst_42204);

(statearr_42249_43337[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42217 === (16))){
var inst_42211 = (state_42216[(2)]);
var state_42216__$1 = state_42216;
var statearr_42250_43340 = state_42216__$1;
(statearr_42250_43340[(2)] = inst_42211);

(statearr_42250_43340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42217 === (10))){
var inst_42171 = (state_42216[(7)]);
var inst_42188 = (state_42216[(2)]);
var inst_42189 = (inst_42171 + (1));
var inst_42171__$1 = inst_42189;
var state_42216__$1 = (function (){var statearr_42251 = state_42216;
(statearr_42251[(7)] = inst_42171__$1);

(statearr_42251[(14)] = inst_42188);

return statearr_42251;
})();
var statearr_42253_43342 = state_42216__$1;
(statearr_42253_43342[(2)] = null);

(statearr_42253_43342[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42217 === (8))){
var inst_42197 = (state_42216[(2)]);
var state_42216__$1 = state_42216;
var statearr_42254_43343 = state_42216__$1;
(statearr_42254_43343[(2)] = inst_42197);

(statearr_42254_43343[(1)] = (5));


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
var cljs$core$async$state_machine__40327__auto__ = null;
var cljs$core$async$state_machine__40327__auto____0 = (function (){
var statearr_42255 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42255[(0)] = cljs$core$async$state_machine__40327__auto__);

(statearr_42255[(1)] = (1));

return statearr_42255;
});
var cljs$core$async$state_machine__40327__auto____1 = (function (state_42216){
while(true){
var ret_value__40328__auto__ = (function (){try{while(true){
var result__40329__auto__ = switch__40326__auto__(state_42216);
if(cljs.core.keyword_identical_QMARK_(result__40329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40329__auto__;
}
break;
}
}catch (e42256){var ex__40330__auto__ = e42256;
var statearr_42259_43347 = state_42216;
(statearr_42259_43347[(2)] = ex__40330__auto__);


if(cljs.core.seq((state_42216[(4)]))){
var statearr_42260_43348 = state_42216;
(statearr_42260_43348[(1)] = cljs.core.first((state_42216[(4)])));

} else {
throw ex__40330__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43349 = state_42216;
state_42216 = G__43349;
continue;
} else {
return ret_value__40328__auto__;
}
break;
}
});
cljs$core$async$state_machine__40327__auto__ = function(state_42216){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40327__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40327__auto____1.call(this,state_42216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40327__auto____0;
cljs$core$async$state_machine__40327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40327__auto____1;
return cljs$core$async$state_machine__40327__auto__;
})()
})();
var state__40418__auto__ = (function (){var statearr_42261 = f__40417__auto__();
(statearr_42261[(6)] = c__40416__auto___43317);

return statearr_42261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40418__auto__);
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
var G__42267 = arguments.length;
switch (G__42267) {
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
var c__40416__auto___43351 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40417__auto__ = (function (){var switch__40326__auto__ = (function (state_42303){
var state_val_42304 = (state_42303[(1)]);
if((state_val_42304 === (7))){
var inst_42279 = (state_42303[(7)]);
var inst_42280 = (state_42303[(8)]);
var inst_42279__$1 = (state_42303[(2)]);
var inst_42280__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42279__$1,(0),null);
var inst_42281 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42279__$1,(1),null);
var inst_42282 = (inst_42280__$1 == null);
var state_42303__$1 = (function (){var statearr_42306 = state_42303;
(statearr_42306[(9)] = inst_42281);

(statearr_42306[(7)] = inst_42279__$1);

(statearr_42306[(8)] = inst_42280__$1);

return statearr_42306;
})();
if(cljs.core.truth_(inst_42282)){
var statearr_42307_43354 = state_42303__$1;
(statearr_42307_43354[(1)] = (8));

} else {
var statearr_42308_43356 = state_42303__$1;
(statearr_42308_43356[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42304 === (1))){
var inst_42269 = cljs.core.vec(chs);
var inst_42270 = inst_42269;
var state_42303__$1 = (function (){var statearr_42310 = state_42303;
(statearr_42310[(10)] = inst_42270);

return statearr_42310;
})();
var statearr_42311_43357 = state_42303__$1;
(statearr_42311_43357[(2)] = null);

(statearr_42311_43357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42304 === (4))){
var inst_42270 = (state_42303[(10)]);
var state_42303__$1 = state_42303;
return cljs.core.async.ioc_alts_BANG_(state_42303__$1,(7),inst_42270);
} else {
if((state_val_42304 === (6))){
var inst_42296 = (state_42303[(2)]);
var state_42303__$1 = state_42303;
var statearr_42313_43362 = state_42303__$1;
(statearr_42313_43362[(2)] = inst_42296);

(statearr_42313_43362[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42304 === (3))){
var inst_42298 = (state_42303[(2)]);
var state_42303__$1 = state_42303;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42303__$1,inst_42298);
} else {
if((state_val_42304 === (2))){
var inst_42270 = (state_42303[(10)]);
var inst_42272 = cljs.core.count(inst_42270);
var inst_42273 = (inst_42272 > (0));
var state_42303__$1 = state_42303;
if(cljs.core.truth_(inst_42273)){
var statearr_42315_43366 = state_42303__$1;
(statearr_42315_43366[(1)] = (4));

} else {
var statearr_42316_43367 = state_42303__$1;
(statearr_42316_43367[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42304 === (11))){
var inst_42270 = (state_42303[(10)]);
var inst_42289 = (state_42303[(2)]);
var tmp42314 = inst_42270;
var inst_42270__$1 = tmp42314;
var state_42303__$1 = (function (){var statearr_42325 = state_42303;
(statearr_42325[(11)] = inst_42289);

(statearr_42325[(10)] = inst_42270__$1);

return statearr_42325;
})();
var statearr_42326_43371 = state_42303__$1;
(statearr_42326_43371[(2)] = null);

(statearr_42326_43371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42304 === (9))){
var inst_42280 = (state_42303[(8)]);
var state_42303__$1 = state_42303;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42303__$1,(11),out,inst_42280);
} else {
if((state_val_42304 === (5))){
var inst_42294 = cljs.core.async.close_BANG_(out);
var state_42303__$1 = state_42303;
var statearr_42327_43373 = state_42303__$1;
(statearr_42327_43373[(2)] = inst_42294);

(statearr_42327_43373[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42304 === (10))){
var inst_42292 = (state_42303[(2)]);
var state_42303__$1 = state_42303;
var statearr_42328_43376 = state_42303__$1;
(statearr_42328_43376[(2)] = inst_42292);

(statearr_42328_43376[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42304 === (8))){
var inst_42281 = (state_42303[(9)]);
var inst_42279 = (state_42303[(7)]);
var inst_42270 = (state_42303[(10)]);
var inst_42280 = (state_42303[(8)]);
var inst_42284 = (function (){var cs = inst_42270;
var vec__42275 = inst_42279;
var v = inst_42280;
var c = inst_42281;
return (function (p1__42264_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__42264_SHARP_);
});
})();
var inst_42285 = cljs.core.filterv(inst_42284,inst_42270);
var inst_42270__$1 = inst_42285;
var state_42303__$1 = (function (){var statearr_42329 = state_42303;
(statearr_42329[(10)] = inst_42270__$1);

return statearr_42329;
})();
var statearr_42330_43377 = state_42303__$1;
(statearr_42330_43377[(2)] = null);

(statearr_42330_43377[(1)] = (2));


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
var cljs$core$async$state_machine__40327__auto__ = null;
var cljs$core$async$state_machine__40327__auto____0 = (function (){
var statearr_42331 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42331[(0)] = cljs$core$async$state_machine__40327__auto__);

(statearr_42331[(1)] = (1));

return statearr_42331;
});
var cljs$core$async$state_machine__40327__auto____1 = (function (state_42303){
while(true){
var ret_value__40328__auto__ = (function (){try{while(true){
var result__40329__auto__ = switch__40326__auto__(state_42303);
if(cljs.core.keyword_identical_QMARK_(result__40329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40329__auto__;
}
break;
}
}catch (e42333){var ex__40330__auto__ = e42333;
var statearr_42334_43378 = state_42303;
(statearr_42334_43378[(2)] = ex__40330__auto__);


if(cljs.core.seq((state_42303[(4)]))){
var statearr_42335_43379 = state_42303;
(statearr_42335_43379[(1)] = cljs.core.first((state_42303[(4)])));

} else {
throw ex__40330__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43380 = state_42303;
state_42303 = G__43380;
continue;
} else {
return ret_value__40328__auto__;
}
break;
}
});
cljs$core$async$state_machine__40327__auto__ = function(state_42303){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40327__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40327__auto____1.call(this,state_42303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40327__auto____0;
cljs$core$async$state_machine__40327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40327__auto____1;
return cljs$core$async$state_machine__40327__auto__;
})()
})();
var state__40418__auto__ = (function (){var statearr_42336 = f__40417__auto__();
(statearr_42336[(6)] = c__40416__auto___43351);

return statearr_42336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40418__auto__);
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
var G__42338 = arguments.length;
switch (G__42338) {
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
var c__40416__auto___43382 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40417__auto__ = (function (){var switch__40326__auto__ = (function (state_42373){
var state_val_42374 = (state_42373[(1)]);
if((state_val_42374 === (7))){
var inst_42355 = (state_42373[(7)]);
var inst_42355__$1 = (state_42373[(2)]);
var inst_42356 = (inst_42355__$1 == null);
var inst_42357 = cljs.core.not(inst_42356);
var state_42373__$1 = (function (){var statearr_42375 = state_42373;
(statearr_42375[(7)] = inst_42355__$1);

return statearr_42375;
})();
if(inst_42357){
var statearr_42376_43383 = state_42373__$1;
(statearr_42376_43383[(1)] = (8));

} else {
var statearr_42377_43384 = state_42373__$1;
(statearr_42377_43384[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42374 === (1))){
var inst_42350 = (0);
var state_42373__$1 = (function (){var statearr_42378 = state_42373;
(statearr_42378[(8)] = inst_42350);

return statearr_42378;
})();
var statearr_42379_43385 = state_42373__$1;
(statearr_42379_43385[(2)] = null);

(statearr_42379_43385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42374 === (4))){
var state_42373__$1 = state_42373;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42373__$1,(7),ch);
} else {
if((state_val_42374 === (6))){
var inst_42368 = (state_42373[(2)]);
var state_42373__$1 = state_42373;
var statearr_42380_43386 = state_42373__$1;
(statearr_42380_43386[(2)] = inst_42368);

(statearr_42380_43386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42374 === (3))){
var inst_42370 = (state_42373[(2)]);
var inst_42371 = cljs.core.async.close_BANG_(out);
var state_42373__$1 = (function (){var statearr_42381 = state_42373;
(statearr_42381[(9)] = inst_42370);

return statearr_42381;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42373__$1,inst_42371);
} else {
if((state_val_42374 === (2))){
var inst_42350 = (state_42373[(8)]);
var inst_42352 = (inst_42350 < n);
var state_42373__$1 = state_42373;
if(cljs.core.truth_(inst_42352)){
var statearr_42382_43389 = state_42373__$1;
(statearr_42382_43389[(1)] = (4));

} else {
var statearr_42383_43390 = state_42373__$1;
(statearr_42383_43390[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42374 === (11))){
var inst_42350 = (state_42373[(8)]);
var inst_42360 = (state_42373[(2)]);
var inst_42361 = (inst_42350 + (1));
var inst_42350__$1 = inst_42361;
var state_42373__$1 = (function (){var statearr_42384 = state_42373;
(statearr_42384[(8)] = inst_42350__$1);

(statearr_42384[(10)] = inst_42360);

return statearr_42384;
})();
var statearr_42385_43391 = state_42373__$1;
(statearr_42385_43391[(2)] = null);

(statearr_42385_43391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42374 === (9))){
var state_42373__$1 = state_42373;
var statearr_42386_43392 = state_42373__$1;
(statearr_42386_43392[(2)] = null);

(statearr_42386_43392[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42374 === (5))){
var state_42373__$1 = state_42373;
var statearr_42388_43393 = state_42373__$1;
(statearr_42388_43393[(2)] = null);

(statearr_42388_43393[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42374 === (10))){
var inst_42365 = (state_42373[(2)]);
var state_42373__$1 = state_42373;
var statearr_42389_43394 = state_42373__$1;
(statearr_42389_43394[(2)] = inst_42365);

(statearr_42389_43394[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42374 === (8))){
var inst_42355 = (state_42373[(7)]);
var state_42373__$1 = state_42373;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42373__$1,(11),out,inst_42355);
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
var cljs$core$async$state_machine__40327__auto__ = null;
var cljs$core$async$state_machine__40327__auto____0 = (function (){
var statearr_42393 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42393[(0)] = cljs$core$async$state_machine__40327__auto__);

(statearr_42393[(1)] = (1));

return statearr_42393;
});
var cljs$core$async$state_machine__40327__auto____1 = (function (state_42373){
while(true){
var ret_value__40328__auto__ = (function (){try{while(true){
var result__40329__auto__ = switch__40326__auto__(state_42373);
if(cljs.core.keyword_identical_QMARK_(result__40329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40329__auto__;
}
break;
}
}catch (e42394){var ex__40330__auto__ = e42394;
var statearr_42395_43397 = state_42373;
(statearr_42395_43397[(2)] = ex__40330__auto__);


if(cljs.core.seq((state_42373[(4)]))){
var statearr_42396_43398 = state_42373;
(statearr_42396_43398[(1)] = cljs.core.first((state_42373[(4)])));

} else {
throw ex__40330__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43399 = state_42373;
state_42373 = G__43399;
continue;
} else {
return ret_value__40328__auto__;
}
break;
}
});
cljs$core$async$state_machine__40327__auto__ = function(state_42373){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40327__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40327__auto____1.call(this,state_42373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40327__auto____0;
cljs$core$async$state_machine__40327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40327__auto____1;
return cljs$core$async$state_machine__40327__auto__;
})()
})();
var state__40418__auto__ = (function (){var statearr_42397 = f__40417__auto__();
(statearr_42397[(6)] = c__40416__auto___43382);

return statearr_42397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40418__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42400 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42400 = (function (f,ch,meta42401){
this.f = f;
this.ch = ch;
this.meta42401 = meta42401;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42400.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42402,meta42401__$1){
var self__ = this;
var _42402__$1 = this;
return (new cljs.core.async.t_cljs$core$async42400(self__.f,self__.ch,meta42401__$1));
}));

(cljs.core.async.t_cljs$core$async42400.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42402){
var self__ = this;
var _42402__$1 = this;
return self__.meta42401;
}));

(cljs.core.async.t_cljs$core$async42400.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42400.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async42400.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async42400.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42400.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42405 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42405 = (function (f,ch,meta42401,_,fn1,meta42406){
this.f = f;
this.ch = ch;
this.meta42401 = meta42401;
this._ = _;
this.fn1 = fn1;
this.meta42406 = meta42406;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42405.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42407,meta42406__$1){
var self__ = this;
var _42407__$1 = this;
return (new cljs.core.async.t_cljs$core$async42405(self__.f,self__.ch,self__.meta42401,self__._,self__.fn1,meta42406__$1));
}));

(cljs.core.async.t_cljs$core$async42405.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42407){
var self__ = this;
var _42407__$1 = this;
return self__.meta42406;
}));

(cljs.core.async.t_cljs$core$async42405.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42405.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async42405.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42405.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__42398_SHARP_){
var G__42412 = (((p1__42398_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__42398_SHARP_) : self__.f.call(null,p1__42398_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__42412) : f1.call(null,G__42412));
});
}));

(cljs.core.async.t_cljs$core$async42405.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42401","meta42401",-680599722,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async42400","cljs.core.async/t_cljs$core$async42400",-418275887,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta42406","meta42406",1588909405,null)], null);
}));

(cljs.core.async.t_cljs$core$async42405.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42405.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42405");

(cljs.core.async.t_cljs$core$async42405.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async42405");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42405.
 */
cljs.core.async.__GT_t_cljs$core$async42405 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42405(f__$1,ch__$1,meta42401__$1,___$2,fn1__$1,meta42406){
return (new cljs.core.async.t_cljs$core$async42405(f__$1,ch__$1,meta42401__$1,___$2,fn1__$1,meta42406));
});

}

return (new cljs.core.async.t_cljs$core$async42405(self__.f,self__.ch,self__.meta42401,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__42419 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__42419) : self__.f.call(null,G__42419));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async42400.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42400.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async42400.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42401","meta42401",-680599722,null)], null);
}));

(cljs.core.async.t_cljs$core$async42400.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42400.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42400");

(cljs.core.async.t_cljs$core$async42400.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async42400");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42400.
 */
cljs.core.async.__GT_t_cljs$core$async42400 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42400(f__$1,ch__$1,meta42401){
return (new cljs.core.async.t_cljs$core$async42400(f__$1,ch__$1,meta42401));
});

}

return (new cljs.core.async.t_cljs$core$async42400(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42422 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42422 = (function (f,ch,meta42423){
this.f = f;
this.ch = ch;
this.meta42423 = meta42423;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42422.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42424,meta42423__$1){
var self__ = this;
var _42424__$1 = this;
return (new cljs.core.async.t_cljs$core$async42422(self__.f,self__.ch,meta42423__$1));
}));

(cljs.core.async.t_cljs$core$async42422.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42424){
var self__ = this;
var _42424__$1 = this;
return self__.meta42423;
}));

(cljs.core.async.t_cljs$core$async42422.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42422.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async42422.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42422.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async42422.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42422.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async42422.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42423","meta42423",2121998665,null)], null);
}));

(cljs.core.async.t_cljs$core$async42422.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42422.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42422");

(cljs.core.async.t_cljs$core$async42422.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async42422");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42422.
 */
cljs.core.async.__GT_t_cljs$core$async42422 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async42422(f__$1,ch__$1,meta42423){
return (new cljs.core.async.t_cljs$core$async42422(f__$1,ch__$1,meta42423));
});

}

return (new cljs.core.async.t_cljs$core$async42422(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42437 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42437 = (function (p,ch,meta42438){
this.p = p;
this.ch = ch;
this.meta42438 = meta42438;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42437.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42439,meta42438__$1){
var self__ = this;
var _42439__$1 = this;
return (new cljs.core.async.t_cljs$core$async42437(self__.p,self__.ch,meta42438__$1));
}));

(cljs.core.async.t_cljs$core$async42437.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42439){
var self__ = this;
var _42439__$1 = this;
return self__.meta42438;
}));

(cljs.core.async.t_cljs$core$async42437.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42437.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async42437.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async42437.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42437.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async42437.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42437.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async42437.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42438","meta42438",-2093650347,null)], null);
}));

(cljs.core.async.t_cljs$core$async42437.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42437.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42437");

(cljs.core.async.t_cljs$core$async42437.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async42437");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42437.
 */
cljs.core.async.__GT_t_cljs$core$async42437 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async42437(p__$1,ch__$1,meta42438){
return (new cljs.core.async.t_cljs$core$async42437(p__$1,ch__$1,meta42438));
});

}

return (new cljs.core.async.t_cljs$core$async42437(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__42442 = arguments.length;
switch (G__42442) {
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
var c__40416__auto___43405 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40417__auto__ = (function (){var switch__40326__auto__ = (function (state_42466){
var state_val_42467 = (state_42466[(1)]);
if((state_val_42467 === (7))){
var inst_42462 = (state_42466[(2)]);
var state_42466__$1 = state_42466;
var statearr_42468_43406 = state_42466__$1;
(statearr_42468_43406[(2)] = inst_42462);

(statearr_42468_43406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42467 === (1))){
var state_42466__$1 = state_42466;
var statearr_42469_43408 = state_42466__$1;
(statearr_42469_43408[(2)] = null);

(statearr_42469_43408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42467 === (4))){
var inst_42448 = (state_42466[(7)]);
var inst_42448__$1 = (state_42466[(2)]);
var inst_42449 = (inst_42448__$1 == null);
var state_42466__$1 = (function (){var statearr_42471 = state_42466;
(statearr_42471[(7)] = inst_42448__$1);

return statearr_42471;
})();
if(cljs.core.truth_(inst_42449)){
var statearr_42472_43410 = state_42466__$1;
(statearr_42472_43410[(1)] = (5));

} else {
var statearr_42473_43411 = state_42466__$1;
(statearr_42473_43411[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42467 === (6))){
var inst_42448 = (state_42466[(7)]);
var inst_42453 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_42448) : p.call(null,inst_42448));
var state_42466__$1 = state_42466;
if(cljs.core.truth_(inst_42453)){
var statearr_42474_43412 = state_42466__$1;
(statearr_42474_43412[(1)] = (8));

} else {
var statearr_42475_43413 = state_42466__$1;
(statearr_42475_43413[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42467 === (3))){
var inst_42464 = (state_42466[(2)]);
var state_42466__$1 = state_42466;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42466__$1,inst_42464);
} else {
if((state_val_42467 === (2))){
var state_42466__$1 = state_42466;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42466__$1,(4),ch);
} else {
if((state_val_42467 === (11))){
var inst_42456 = (state_42466[(2)]);
var state_42466__$1 = state_42466;
var statearr_42476_43414 = state_42466__$1;
(statearr_42476_43414[(2)] = inst_42456);

(statearr_42476_43414[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42467 === (9))){
var state_42466__$1 = state_42466;
var statearr_42482_43415 = state_42466__$1;
(statearr_42482_43415[(2)] = null);

(statearr_42482_43415[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42467 === (5))){
var inst_42451 = cljs.core.async.close_BANG_(out);
var state_42466__$1 = state_42466;
var statearr_42483_43416 = state_42466__$1;
(statearr_42483_43416[(2)] = inst_42451);

(statearr_42483_43416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42467 === (10))){
var inst_42459 = (state_42466[(2)]);
var state_42466__$1 = (function (){var statearr_42485 = state_42466;
(statearr_42485[(8)] = inst_42459);

return statearr_42485;
})();
var statearr_42486_43417 = state_42466__$1;
(statearr_42486_43417[(2)] = null);

(statearr_42486_43417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42467 === (8))){
var inst_42448 = (state_42466[(7)]);
var state_42466__$1 = state_42466;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42466__$1,(11),out,inst_42448);
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
var cljs$core$async$state_machine__40327__auto__ = null;
var cljs$core$async$state_machine__40327__auto____0 = (function (){
var statearr_42487 = [null,null,null,null,null,null,null,null,null];
(statearr_42487[(0)] = cljs$core$async$state_machine__40327__auto__);

(statearr_42487[(1)] = (1));

return statearr_42487;
});
var cljs$core$async$state_machine__40327__auto____1 = (function (state_42466){
while(true){
var ret_value__40328__auto__ = (function (){try{while(true){
var result__40329__auto__ = switch__40326__auto__(state_42466);
if(cljs.core.keyword_identical_QMARK_(result__40329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40329__auto__;
}
break;
}
}catch (e42488){var ex__40330__auto__ = e42488;
var statearr_42489_43420 = state_42466;
(statearr_42489_43420[(2)] = ex__40330__auto__);


if(cljs.core.seq((state_42466[(4)]))){
var statearr_42490_43422 = state_42466;
(statearr_42490_43422[(1)] = cljs.core.first((state_42466[(4)])));

} else {
throw ex__40330__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43423 = state_42466;
state_42466 = G__43423;
continue;
} else {
return ret_value__40328__auto__;
}
break;
}
});
cljs$core$async$state_machine__40327__auto__ = function(state_42466){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40327__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40327__auto____1.call(this,state_42466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40327__auto____0;
cljs$core$async$state_machine__40327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40327__auto____1;
return cljs$core$async$state_machine__40327__auto__;
})()
})();
var state__40418__auto__ = (function (){var statearr_42498 = f__40417__auto__();
(statearr_42498[(6)] = c__40416__auto___43405);

return statearr_42498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40418__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__42500 = arguments.length;
switch (G__42500) {
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
var c__40416__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40417__auto__ = (function (){var switch__40326__auto__ = (function (state_42565){
var state_val_42566 = (state_42565[(1)]);
if((state_val_42566 === (7))){
var inst_42561 = (state_42565[(2)]);
var state_42565__$1 = state_42565;
var statearr_42567_43425 = state_42565__$1;
(statearr_42567_43425[(2)] = inst_42561);

(statearr_42567_43425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42566 === (20))){
var inst_42531 = (state_42565[(7)]);
var inst_42542 = (state_42565[(2)]);
var inst_42543 = cljs.core.next(inst_42531);
var inst_42517 = inst_42543;
var inst_42518 = null;
var inst_42519 = (0);
var inst_42520 = (0);
var state_42565__$1 = (function (){var statearr_42568 = state_42565;
(statearr_42568[(8)] = inst_42518);

(statearr_42568[(9)] = inst_42542);

(statearr_42568[(10)] = inst_42520);

(statearr_42568[(11)] = inst_42519);

(statearr_42568[(12)] = inst_42517);

return statearr_42568;
})();
var statearr_42569_43426 = state_42565__$1;
(statearr_42569_43426[(2)] = null);

(statearr_42569_43426[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42566 === (1))){
var state_42565__$1 = state_42565;
var statearr_42570_43427 = state_42565__$1;
(statearr_42570_43427[(2)] = null);

(statearr_42570_43427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42566 === (4))){
var inst_42503 = (state_42565[(13)]);
var inst_42503__$1 = (state_42565[(2)]);
var inst_42504 = (inst_42503__$1 == null);
var state_42565__$1 = (function (){var statearr_42572 = state_42565;
(statearr_42572[(13)] = inst_42503__$1);

return statearr_42572;
})();
if(cljs.core.truth_(inst_42504)){
var statearr_42573_43428 = state_42565__$1;
(statearr_42573_43428[(1)] = (5));

} else {
var statearr_42574_43429 = state_42565__$1;
(statearr_42574_43429[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42566 === (15))){
var state_42565__$1 = state_42565;
var statearr_42578_43430 = state_42565__$1;
(statearr_42578_43430[(2)] = null);

(statearr_42578_43430[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42566 === (21))){
var state_42565__$1 = state_42565;
var statearr_42581_43431 = state_42565__$1;
(statearr_42581_43431[(2)] = null);

(statearr_42581_43431[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42566 === (13))){
var inst_42518 = (state_42565[(8)]);
var inst_42520 = (state_42565[(10)]);
var inst_42519 = (state_42565[(11)]);
var inst_42517 = (state_42565[(12)]);
var inst_42527 = (state_42565[(2)]);
var inst_42528 = (inst_42520 + (1));
var tmp42575 = inst_42518;
var tmp42576 = inst_42519;
var tmp42577 = inst_42517;
var inst_42517__$1 = tmp42577;
var inst_42518__$1 = tmp42575;
var inst_42519__$1 = tmp42576;
var inst_42520__$1 = inst_42528;
var state_42565__$1 = (function (){var statearr_42582 = state_42565;
(statearr_42582[(8)] = inst_42518__$1);

(statearr_42582[(14)] = inst_42527);

(statearr_42582[(10)] = inst_42520__$1);

(statearr_42582[(11)] = inst_42519__$1);

(statearr_42582[(12)] = inst_42517__$1);

return statearr_42582;
})();
var statearr_42588_43432 = state_42565__$1;
(statearr_42588_43432[(2)] = null);

(statearr_42588_43432[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42566 === (22))){
var state_42565__$1 = state_42565;
var statearr_42589_43433 = state_42565__$1;
(statearr_42589_43433[(2)] = null);

(statearr_42589_43433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42566 === (6))){
var inst_42503 = (state_42565[(13)]);
var inst_42515 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_42503) : f.call(null,inst_42503));
var inst_42516 = cljs.core.seq(inst_42515);
var inst_42517 = inst_42516;
var inst_42518 = null;
var inst_42519 = (0);
var inst_42520 = (0);
var state_42565__$1 = (function (){var statearr_42590 = state_42565;
(statearr_42590[(8)] = inst_42518);

(statearr_42590[(10)] = inst_42520);

(statearr_42590[(11)] = inst_42519);

(statearr_42590[(12)] = inst_42517);

return statearr_42590;
})();
var statearr_42591_43434 = state_42565__$1;
(statearr_42591_43434[(2)] = null);

(statearr_42591_43434[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42566 === (17))){
var inst_42531 = (state_42565[(7)]);
var inst_42535 = cljs.core.chunk_first(inst_42531);
var inst_42536 = cljs.core.chunk_rest(inst_42531);
var inst_42537 = cljs.core.count(inst_42535);
var inst_42517 = inst_42536;
var inst_42518 = inst_42535;
var inst_42519 = inst_42537;
var inst_42520 = (0);
var state_42565__$1 = (function (){var statearr_42592 = state_42565;
(statearr_42592[(8)] = inst_42518);

(statearr_42592[(10)] = inst_42520);

(statearr_42592[(11)] = inst_42519);

(statearr_42592[(12)] = inst_42517);

return statearr_42592;
})();
var statearr_42593_43435 = state_42565__$1;
(statearr_42593_43435[(2)] = null);

(statearr_42593_43435[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42566 === (3))){
var inst_42563 = (state_42565[(2)]);
var state_42565__$1 = state_42565;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42565__$1,inst_42563);
} else {
if((state_val_42566 === (12))){
var inst_42551 = (state_42565[(2)]);
var state_42565__$1 = state_42565;
var statearr_42595_43436 = state_42565__$1;
(statearr_42595_43436[(2)] = inst_42551);

(statearr_42595_43436[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42566 === (2))){
var state_42565__$1 = state_42565;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42565__$1,(4),in$);
} else {
if((state_val_42566 === (23))){
var inst_42559 = (state_42565[(2)]);
var state_42565__$1 = state_42565;
var statearr_42602_43437 = state_42565__$1;
(statearr_42602_43437[(2)] = inst_42559);

(statearr_42602_43437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42566 === (19))){
var inst_42546 = (state_42565[(2)]);
var state_42565__$1 = state_42565;
var statearr_42604_43439 = state_42565__$1;
(statearr_42604_43439[(2)] = inst_42546);

(statearr_42604_43439[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42566 === (11))){
var inst_42531 = (state_42565[(7)]);
var inst_42517 = (state_42565[(12)]);
var inst_42531__$1 = cljs.core.seq(inst_42517);
var state_42565__$1 = (function (){var statearr_42605 = state_42565;
(statearr_42605[(7)] = inst_42531__$1);

return statearr_42605;
})();
if(inst_42531__$1){
var statearr_42606_43440 = state_42565__$1;
(statearr_42606_43440[(1)] = (14));

} else {
var statearr_42607_43441 = state_42565__$1;
(statearr_42607_43441[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42566 === (9))){
var inst_42553 = (state_42565[(2)]);
var inst_42554 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_42565__$1 = (function (){var statearr_42608 = state_42565;
(statearr_42608[(15)] = inst_42553);

return statearr_42608;
})();
if(cljs.core.truth_(inst_42554)){
var statearr_42609_43442 = state_42565__$1;
(statearr_42609_43442[(1)] = (21));

} else {
var statearr_42610_43443 = state_42565__$1;
(statearr_42610_43443[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42566 === (5))){
var inst_42506 = cljs.core.async.close_BANG_(out);
var state_42565__$1 = state_42565;
var statearr_42611_43444 = state_42565__$1;
(statearr_42611_43444[(2)] = inst_42506);

(statearr_42611_43444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42566 === (14))){
var inst_42531 = (state_42565[(7)]);
var inst_42533 = cljs.core.chunked_seq_QMARK_(inst_42531);
var state_42565__$1 = state_42565;
if(inst_42533){
var statearr_42612_43445 = state_42565__$1;
(statearr_42612_43445[(1)] = (17));

} else {
var statearr_42613_43446 = state_42565__$1;
(statearr_42613_43446[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42566 === (16))){
var inst_42549 = (state_42565[(2)]);
var state_42565__$1 = state_42565;
var statearr_42614_43447 = state_42565__$1;
(statearr_42614_43447[(2)] = inst_42549);

(statearr_42614_43447[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42566 === (10))){
var inst_42518 = (state_42565[(8)]);
var inst_42520 = (state_42565[(10)]);
var inst_42525 = cljs.core._nth(inst_42518,inst_42520);
var state_42565__$1 = state_42565;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42565__$1,(13),out,inst_42525);
} else {
if((state_val_42566 === (18))){
var inst_42531 = (state_42565[(7)]);
var inst_42540 = cljs.core.first(inst_42531);
var state_42565__$1 = state_42565;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42565__$1,(20),out,inst_42540);
} else {
if((state_val_42566 === (8))){
var inst_42520 = (state_42565[(10)]);
var inst_42519 = (state_42565[(11)]);
var inst_42522 = (inst_42520 < inst_42519);
var inst_42523 = inst_42522;
var state_42565__$1 = state_42565;
if(cljs.core.truth_(inst_42523)){
var statearr_42618_43452 = state_42565__$1;
(statearr_42618_43452[(1)] = (10));

} else {
var statearr_42619_43453 = state_42565__$1;
(statearr_42619_43453[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__40327__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__40327__auto____0 = (function (){
var statearr_42620 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42620[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__40327__auto__);

(statearr_42620[(1)] = (1));

return statearr_42620;
});
var cljs$core$async$mapcat_STAR__$_state_machine__40327__auto____1 = (function (state_42565){
while(true){
var ret_value__40328__auto__ = (function (){try{while(true){
var result__40329__auto__ = switch__40326__auto__(state_42565);
if(cljs.core.keyword_identical_QMARK_(result__40329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40329__auto__;
}
break;
}
}catch (e42621){var ex__40330__auto__ = e42621;
var statearr_42622_43454 = state_42565;
(statearr_42622_43454[(2)] = ex__40330__auto__);


if(cljs.core.seq((state_42565[(4)]))){
var statearr_42623_43455 = state_42565;
(statearr_42623_43455[(1)] = cljs.core.first((state_42565[(4)])));

} else {
throw ex__40330__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43456 = state_42565;
state_42565 = G__43456;
continue;
} else {
return ret_value__40328__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__40327__auto__ = function(state_42565){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__40327__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__40327__auto____1.call(this,state_42565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__40327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__40327__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__40327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__40327__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__40327__auto__;
})()
})();
var state__40418__auto__ = (function (){var statearr_42625 = f__40417__auto__();
(statearr_42625[(6)] = c__40416__auto__);

return statearr_42625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40418__auto__);
}));

return c__40416__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__42632 = arguments.length;
switch (G__42632) {
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
var G__42641 = arguments.length;
switch (G__42641) {
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
var G__42643 = arguments.length;
switch (G__42643) {
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
var c__40416__auto___43462 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40417__auto__ = (function (){var switch__40326__auto__ = (function (state_42667){
var state_val_42668 = (state_42667[(1)]);
if((state_val_42668 === (7))){
var inst_42662 = (state_42667[(2)]);
var state_42667__$1 = state_42667;
var statearr_42672_43463 = state_42667__$1;
(statearr_42672_43463[(2)] = inst_42662);

(statearr_42672_43463[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42668 === (1))){
var inst_42644 = null;
var state_42667__$1 = (function (){var statearr_42673 = state_42667;
(statearr_42673[(7)] = inst_42644);

return statearr_42673;
})();
var statearr_42674_43464 = state_42667__$1;
(statearr_42674_43464[(2)] = null);

(statearr_42674_43464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42668 === (4))){
var inst_42647 = (state_42667[(8)]);
var inst_42647__$1 = (state_42667[(2)]);
var inst_42648 = (inst_42647__$1 == null);
var inst_42649 = cljs.core.not(inst_42648);
var state_42667__$1 = (function (){var statearr_42675 = state_42667;
(statearr_42675[(8)] = inst_42647__$1);

return statearr_42675;
})();
if(inst_42649){
var statearr_42676_43465 = state_42667__$1;
(statearr_42676_43465[(1)] = (5));

} else {
var statearr_42677_43466 = state_42667__$1;
(statearr_42677_43466[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42668 === (6))){
var state_42667__$1 = state_42667;
var statearr_42678_43467 = state_42667__$1;
(statearr_42678_43467[(2)] = null);

(statearr_42678_43467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42668 === (3))){
var inst_42664 = (state_42667[(2)]);
var inst_42665 = cljs.core.async.close_BANG_(out);
var state_42667__$1 = (function (){var statearr_42679 = state_42667;
(statearr_42679[(9)] = inst_42664);

return statearr_42679;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42667__$1,inst_42665);
} else {
if((state_val_42668 === (2))){
var state_42667__$1 = state_42667;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42667__$1,(4),ch);
} else {
if((state_val_42668 === (11))){
var inst_42647 = (state_42667[(8)]);
var inst_42656 = (state_42667[(2)]);
var inst_42644 = inst_42647;
var state_42667__$1 = (function (){var statearr_42681 = state_42667;
(statearr_42681[(10)] = inst_42656);

(statearr_42681[(7)] = inst_42644);

return statearr_42681;
})();
var statearr_42682_43468 = state_42667__$1;
(statearr_42682_43468[(2)] = null);

(statearr_42682_43468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42668 === (9))){
var inst_42647 = (state_42667[(8)]);
var state_42667__$1 = state_42667;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42667__$1,(11),out,inst_42647);
} else {
if((state_val_42668 === (5))){
var inst_42644 = (state_42667[(7)]);
var inst_42647 = (state_42667[(8)]);
var inst_42651 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42647,inst_42644);
var state_42667__$1 = state_42667;
if(inst_42651){
var statearr_42684_43470 = state_42667__$1;
(statearr_42684_43470[(1)] = (8));

} else {
var statearr_42687_43471 = state_42667__$1;
(statearr_42687_43471[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42668 === (10))){
var inst_42659 = (state_42667[(2)]);
var state_42667__$1 = state_42667;
var statearr_42688_43472 = state_42667__$1;
(statearr_42688_43472[(2)] = inst_42659);

(statearr_42688_43472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42668 === (8))){
var inst_42644 = (state_42667[(7)]);
var tmp42683 = inst_42644;
var inst_42644__$1 = tmp42683;
var state_42667__$1 = (function (){var statearr_42689 = state_42667;
(statearr_42689[(7)] = inst_42644__$1);

return statearr_42689;
})();
var statearr_42690_43473 = state_42667__$1;
(statearr_42690_43473[(2)] = null);

(statearr_42690_43473[(1)] = (2));


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
var cljs$core$async$state_machine__40327__auto__ = null;
var cljs$core$async$state_machine__40327__auto____0 = (function (){
var statearr_42691 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42691[(0)] = cljs$core$async$state_machine__40327__auto__);

(statearr_42691[(1)] = (1));

return statearr_42691;
});
var cljs$core$async$state_machine__40327__auto____1 = (function (state_42667){
while(true){
var ret_value__40328__auto__ = (function (){try{while(true){
var result__40329__auto__ = switch__40326__auto__(state_42667);
if(cljs.core.keyword_identical_QMARK_(result__40329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40329__auto__;
}
break;
}
}catch (e42695){var ex__40330__auto__ = e42695;
var statearr_42696_43474 = state_42667;
(statearr_42696_43474[(2)] = ex__40330__auto__);


if(cljs.core.seq((state_42667[(4)]))){
var statearr_42697_43475 = state_42667;
(statearr_42697_43475[(1)] = cljs.core.first((state_42667[(4)])));

} else {
throw ex__40330__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43476 = state_42667;
state_42667 = G__43476;
continue;
} else {
return ret_value__40328__auto__;
}
break;
}
});
cljs$core$async$state_machine__40327__auto__ = function(state_42667){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40327__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40327__auto____1.call(this,state_42667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40327__auto____0;
cljs$core$async$state_machine__40327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40327__auto____1;
return cljs$core$async$state_machine__40327__auto__;
})()
})();
var state__40418__auto__ = (function (){var statearr_42699 = f__40417__auto__();
(statearr_42699[(6)] = c__40416__auto___43462);

return statearr_42699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40418__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__42707 = arguments.length;
switch (G__42707) {
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
var c__40416__auto___43480 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40417__auto__ = (function (){var switch__40326__auto__ = (function (state_42747){
var state_val_42748 = (state_42747[(1)]);
if((state_val_42748 === (7))){
var inst_42743 = (state_42747[(2)]);
var state_42747__$1 = state_42747;
var statearr_42752_43481 = state_42747__$1;
(statearr_42752_43481[(2)] = inst_42743);

(statearr_42752_43481[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42748 === (1))){
var inst_42708 = (new Array(n));
var inst_42709 = inst_42708;
var inst_42710 = (0);
var state_42747__$1 = (function (){var statearr_42753 = state_42747;
(statearr_42753[(7)] = inst_42709);

(statearr_42753[(8)] = inst_42710);

return statearr_42753;
})();
var statearr_42754_43482 = state_42747__$1;
(statearr_42754_43482[(2)] = null);

(statearr_42754_43482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42748 === (4))){
var inst_42714 = (state_42747[(9)]);
var inst_42714__$1 = (state_42747[(2)]);
var inst_42715 = (inst_42714__$1 == null);
var inst_42716 = cljs.core.not(inst_42715);
var state_42747__$1 = (function (){var statearr_42756 = state_42747;
(statearr_42756[(9)] = inst_42714__$1);

return statearr_42756;
})();
if(inst_42716){
var statearr_42757_43483 = state_42747__$1;
(statearr_42757_43483[(1)] = (5));

} else {
var statearr_42758_43484 = state_42747__$1;
(statearr_42758_43484[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42748 === (15))){
var inst_42737 = (state_42747[(2)]);
var state_42747__$1 = state_42747;
var statearr_42759_43485 = state_42747__$1;
(statearr_42759_43485[(2)] = inst_42737);

(statearr_42759_43485[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42748 === (13))){
var state_42747__$1 = state_42747;
var statearr_42762_43486 = state_42747__$1;
(statearr_42762_43486[(2)] = null);

(statearr_42762_43486[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42748 === (6))){
var inst_42710 = (state_42747[(8)]);
var inst_42733 = (inst_42710 > (0));
var state_42747__$1 = state_42747;
if(cljs.core.truth_(inst_42733)){
var statearr_42765_43487 = state_42747__$1;
(statearr_42765_43487[(1)] = (12));

} else {
var statearr_42766_43488 = state_42747__$1;
(statearr_42766_43488[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42748 === (3))){
var inst_42745 = (state_42747[(2)]);
var state_42747__$1 = state_42747;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42747__$1,inst_42745);
} else {
if((state_val_42748 === (12))){
var inst_42709 = (state_42747[(7)]);
var inst_42735 = cljs.core.vec(inst_42709);
var state_42747__$1 = state_42747;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42747__$1,(15),out,inst_42735);
} else {
if((state_val_42748 === (2))){
var state_42747__$1 = state_42747;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42747__$1,(4),ch);
} else {
if((state_val_42748 === (11))){
var inst_42727 = (state_42747[(2)]);
var inst_42728 = (new Array(n));
var inst_42709 = inst_42728;
var inst_42710 = (0);
var state_42747__$1 = (function (){var statearr_42768 = state_42747;
(statearr_42768[(7)] = inst_42709);

(statearr_42768[(8)] = inst_42710);

(statearr_42768[(10)] = inst_42727);

return statearr_42768;
})();
var statearr_42769_43489 = state_42747__$1;
(statearr_42769_43489[(2)] = null);

(statearr_42769_43489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42748 === (9))){
var inst_42709 = (state_42747[(7)]);
var inst_42725 = cljs.core.vec(inst_42709);
var state_42747__$1 = state_42747;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42747__$1,(11),out,inst_42725);
} else {
if((state_val_42748 === (5))){
var inst_42709 = (state_42747[(7)]);
var inst_42714 = (state_42747[(9)]);
var inst_42710 = (state_42747[(8)]);
var inst_42719 = (state_42747[(11)]);
var inst_42718 = (inst_42709[inst_42710] = inst_42714);
var inst_42719__$1 = (inst_42710 + (1));
var inst_42721 = (inst_42719__$1 < n);
var state_42747__$1 = (function (){var statearr_42770 = state_42747;
(statearr_42770[(12)] = inst_42718);

(statearr_42770[(11)] = inst_42719__$1);

return statearr_42770;
})();
if(cljs.core.truth_(inst_42721)){
var statearr_42771_43491 = state_42747__$1;
(statearr_42771_43491[(1)] = (8));

} else {
var statearr_42772_43492 = state_42747__$1;
(statearr_42772_43492[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42748 === (14))){
var inst_42740 = (state_42747[(2)]);
var inst_42741 = cljs.core.async.close_BANG_(out);
var state_42747__$1 = (function (){var statearr_42776 = state_42747;
(statearr_42776[(13)] = inst_42740);

return statearr_42776;
})();
var statearr_42777_43493 = state_42747__$1;
(statearr_42777_43493[(2)] = inst_42741);

(statearr_42777_43493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42748 === (10))){
var inst_42731 = (state_42747[(2)]);
var state_42747__$1 = state_42747;
var statearr_42778_43494 = state_42747__$1;
(statearr_42778_43494[(2)] = inst_42731);

(statearr_42778_43494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42748 === (8))){
var inst_42709 = (state_42747[(7)]);
var inst_42719 = (state_42747[(11)]);
var tmp42773 = inst_42709;
var inst_42709__$1 = tmp42773;
var inst_42710 = inst_42719;
var state_42747__$1 = (function (){var statearr_42779 = state_42747;
(statearr_42779[(7)] = inst_42709__$1);

(statearr_42779[(8)] = inst_42710);

return statearr_42779;
})();
var statearr_42780_43496 = state_42747__$1;
(statearr_42780_43496[(2)] = null);

(statearr_42780_43496[(1)] = (2));


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
var cljs$core$async$state_machine__40327__auto__ = null;
var cljs$core$async$state_machine__40327__auto____0 = (function (){
var statearr_42781 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42781[(0)] = cljs$core$async$state_machine__40327__auto__);

(statearr_42781[(1)] = (1));

return statearr_42781;
});
var cljs$core$async$state_machine__40327__auto____1 = (function (state_42747){
while(true){
var ret_value__40328__auto__ = (function (){try{while(true){
var result__40329__auto__ = switch__40326__auto__(state_42747);
if(cljs.core.keyword_identical_QMARK_(result__40329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40329__auto__;
}
break;
}
}catch (e42782){var ex__40330__auto__ = e42782;
var statearr_42783_43502 = state_42747;
(statearr_42783_43502[(2)] = ex__40330__auto__);


if(cljs.core.seq((state_42747[(4)]))){
var statearr_42784_43503 = state_42747;
(statearr_42784_43503[(1)] = cljs.core.first((state_42747[(4)])));

} else {
throw ex__40330__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43504 = state_42747;
state_42747 = G__43504;
continue;
} else {
return ret_value__40328__auto__;
}
break;
}
});
cljs$core$async$state_machine__40327__auto__ = function(state_42747){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40327__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40327__auto____1.call(this,state_42747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40327__auto____0;
cljs$core$async$state_machine__40327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40327__auto____1;
return cljs$core$async$state_machine__40327__auto__;
})()
})();
var state__40418__auto__ = (function (){var statearr_42785 = f__40417__auto__();
(statearr_42785[(6)] = c__40416__auto___43480);

return statearr_42785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40418__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__42787 = arguments.length;
switch (G__42787) {
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
var c__40416__auto___43506 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__40417__auto__ = (function (){var switch__40326__auto__ = (function (state_42832){
var state_val_42833 = (state_42832[(1)]);
if((state_val_42833 === (7))){
var inst_42828 = (state_42832[(2)]);
var state_42832__$1 = state_42832;
var statearr_42834_43507 = state_42832__$1;
(statearr_42834_43507[(2)] = inst_42828);

(statearr_42834_43507[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42833 === (1))){
var inst_42788 = [];
var inst_42789 = inst_42788;
var inst_42790 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_42832__$1 = (function (){var statearr_42835 = state_42832;
(statearr_42835[(7)] = inst_42789);

(statearr_42835[(8)] = inst_42790);

return statearr_42835;
})();
var statearr_42836_43508 = state_42832__$1;
(statearr_42836_43508[(2)] = null);

(statearr_42836_43508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42833 === (4))){
var inst_42793 = (state_42832[(9)]);
var inst_42793__$1 = (state_42832[(2)]);
var inst_42794 = (inst_42793__$1 == null);
var inst_42795 = cljs.core.not(inst_42794);
var state_42832__$1 = (function (){var statearr_42837 = state_42832;
(statearr_42837[(9)] = inst_42793__$1);

return statearr_42837;
})();
if(inst_42795){
var statearr_42838_43510 = state_42832__$1;
(statearr_42838_43510[(1)] = (5));

} else {
var statearr_42839_43511 = state_42832__$1;
(statearr_42839_43511[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42833 === (15))){
var inst_42789 = (state_42832[(7)]);
var inst_42820 = cljs.core.vec(inst_42789);
var state_42832__$1 = state_42832;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42832__$1,(18),out,inst_42820);
} else {
if((state_val_42833 === (13))){
var inst_42815 = (state_42832[(2)]);
var state_42832__$1 = state_42832;
var statearr_42840_43512 = state_42832__$1;
(statearr_42840_43512[(2)] = inst_42815);

(statearr_42840_43512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42833 === (6))){
var inst_42789 = (state_42832[(7)]);
var inst_42817 = inst_42789.length;
var inst_42818 = (inst_42817 > (0));
var state_42832__$1 = state_42832;
if(cljs.core.truth_(inst_42818)){
var statearr_42841_43513 = state_42832__$1;
(statearr_42841_43513[(1)] = (15));

} else {
var statearr_42842_43514 = state_42832__$1;
(statearr_42842_43514[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42833 === (17))){
var inst_42825 = (state_42832[(2)]);
var inst_42826 = cljs.core.async.close_BANG_(out);
var state_42832__$1 = (function (){var statearr_42845 = state_42832;
(statearr_42845[(10)] = inst_42825);

return statearr_42845;
})();
var statearr_42847_43518 = state_42832__$1;
(statearr_42847_43518[(2)] = inst_42826);

(statearr_42847_43518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42833 === (3))){
var inst_42830 = (state_42832[(2)]);
var state_42832__$1 = state_42832;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42832__$1,inst_42830);
} else {
if((state_val_42833 === (12))){
var inst_42789 = (state_42832[(7)]);
var inst_42808 = cljs.core.vec(inst_42789);
var state_42832__$1 = state_42832;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42832__$1,(14),out,inst_42808);
} else {
if((state_val_42833 === (2))){
var state_42832__$1 = state_42832;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42832__$1,(4),ch);
} else {
if((state_val_42833 === (11))){
var inst_42789 = (state_42832[(7)]);
var inst_42797 = (state_42832[(11)]);
var inst_42793 = (state_42832[(9)]);
var inst_42805 = inst_42789.push(inst_42793);
var tmp42849 = inst_42789;
var inst_42789__$1 = tmp42849;
var inst_42790 = inst_42797;
var state_42832__$1 = (function (){var statearr_42855 = state_42832;
(statearr_42855[(12)] = inst_42805);

(statearr_42855[(7)] = inst_42789__$1);

(statearr_42855[(8)] = inst_42790);

return statearr_42855;
})();
var statearr_42856_43527 = state_42832__$1;
(statearr_42856_43527[(2)] = null);

(statearr_42856_43527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42833 === (9))){
var inst_42790 = (state_42832[(8)]);
var inst_42801 = cljs.core.keyword_identical_QMARK_(inst_42790,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_42832__$1 = state_42832;
var statearr_42857_43528 = state_42832__$1;
(statearr_42857_43528[(2)] = inst_42801);

(statearr_42857_43528[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42833 === (5))){
var inst_42790 = (state_42832[(8)]);
var inst_42797 = (state_42832[(11)]);
var inst_42793 = (state_42832[(9)]);
var inst_42798 = (state_42832[(13)]);
var inst_42797__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_42793) : f.call(null,inst_42793));
var inst_42798__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42797__$1,inst_42790);
var state_42832__$1 = (function (){var statearr_42860 = state_42832;
(statearr_42860[(11)] = inst_42797__$1);

(statearr_42860[(13)] = inst_42798__$1);

return statearr_42860;
})();
if(inst_42798__$1){
var statearr_42861_43529 = state_42832__$1;
(statearr_42861_43529[(1)] = (8));

} else {
var statearr_42863_43530 = state_42832__$1;
(statearr_42863_43530[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42833 === (14))){
var inst_42797 = (state_42832[(11)]);
var inst_42793 = (state_42832[(9)]);
var inst_42810 = (state_42832[(2)]);
var inst_42811 = [];
var inst_42812 = inst_42811.push(inst_42793);
var inst_42789 = inst_42811;
var inst_42790 = inst_42797;
var state_42832__$1 = (function (){var statearr_42864 = state_42832;
(statearr_42864[(7)] = inst_42789);

(statearr_42864[(8)] = inst_42790);

(statearr_42864[(14)] = inst_42810);

(statearr_42864[(15)] = inst_42812);

return statearr_42864;
})();
var statearr_42870_43531 = state_42832__$1;
(statearr_42870_43531[(2)] = null);

(statearr_42870_43531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42833 === (16))){
var state_42832__$1 = state_42832;
var statearr_42871_43532 = state_42832__$1;
(statearr_42871_43532[(2)] = null);

(statearr_42871_43532[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42833 === (10))){
var inst_42803 = (state_42832[(2)]);
var state_42832__$1 = state_42832;
if(cljs.core.truth_(inst_42803)){
var statearr_42872_43533 = state_42832__$1;
(statearr_42872_43533[(1)] = (11));

} else {
var statearr_42873_43534 = state_42832__$1;
(statearr_42873_43534[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42833 === (18))){
var inst_42822 = (state_42832[(2)]);
var state_42832__$1 = state_42832;
var statearr_42874_43535 = state_42832__$1;
(statearr_42874_43535[(2)] = inst_42822);

(statearr_42874_43535[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42833 === (8))){
var inst_42798 = (state_42832[(13)]);
var state_42832__$1 = state_42832;
var statearr_42875_43537 = state_42832__$1;
(statearr_42875_43537[(2)] = inst_42798);

(statearr_42875_43537[(1)] = (10));


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
var cljs$core$async$state_machine__40327__auto__ = null;
var cljs$core$async$state_machine__40327__auto____0 = (function (){
var statearr_42876 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42876[(0)] = cljs$core$async$state_machine__40327__auto__);

(statearr_42876[(1)] = (1));

return statearr_42876;
});
var cljs$core$async$state_machine__40327__auto____1 = (function (state_42832){
while(true){
var ret_value__40328__auto__ = (function (){try{while(true){
var result__40329__auto__ = switch__40326__auto__(state_42832);
if(cljs.core.keyword_identical_QMARK_(result__40329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40329__auto__;
}
break;
}
}catch (e42877){var ex__40330__auto__ = e42877;
var statearr_42878_43539 = state_42832;
(statearr_42878_43539[(2)] = ex__40330__auto__);


if(cljs.core.seq((state_42832[(4)]))){
var statearr_42879_43540 = state_42832;
(statearr_42879_43540[(1)] = cljs.core.first((state_42832[(4)])));

} else {
throw ex__40330__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43544 = state_42832;
state_42832 = G__43544;
continue;
} else {
return ret_value__40328__auto__;
}
break;
}
});
cljs$core$async$state_machine__40327__auto__ = function(state_42832){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40327__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40327__auto____1.call(this,state_42832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40327__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40327__auto____0;
cljs$core$async$state_machine__40327__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40327__auto____1;
return cljs$core$async$state_machine__40327__auto__;
})()
})();
var state__40418__auto__ = (function (){var statearr_42880 = f__40417__auto__();
(statearr_42880[(6)] = c__40416__auto___43506);

return statearr_42880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40418__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
