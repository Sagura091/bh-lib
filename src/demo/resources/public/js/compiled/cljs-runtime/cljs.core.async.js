goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__58165 = arguments.length;
switch (G__58165) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58166 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58166 = (function (f,blockable,meta58167){
this.f = f;
this.blockable = blockable;
this.meta58167 = meta58167;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58166.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58168,meta58167__$1){
var self__ = this;
var _58168__$1 = this;
return (new cljs.core.async.t_cljs$core$async58166(self__.f,self__.blockable,meta58167__$1));
}));

(cljs.core.async.t_cljs$core$async58166.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58168){
var self__ = this;
var _58168__$1 = this;
return self__.meta58167;
}));

(cljs.core.async.t_cljs$core$async58166.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58166.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async58166.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async58166.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async58166.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta58167","meta58167",-1220530253,null)], null);
}));

(cljs.core.async.t_cljs$core$async58166.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58166.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58166");

(cljs.core.async.t_cljs$core$async58166.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async58166");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58166.
 */
cljs.core.async.__GT_t_cljs$core$async58166 = (function cljs$core$async$__GT_t_cljs$core$async58166(f__$1,blockable__$1,meta58167){
return (new cljs.core.async.t_cljs$core$async58166(f__$1,blockable__$1,meta58167));
});

}

return (new cljs.core.async.t_cljs$core$async58166(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__58171 = arguments.length;
switch (G__58171) {
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
var G__58173 = arguments.length;
switch (G__58173) {
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
var G__58175 = arguments.length;
switch (G__58175) {
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
var val_59596 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_59596) : fn1.call(null,val_59596));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_59596) : fn1.call(null,val_59596));
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
var G__58177 = arguments.length;
switch (G__58177) {
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
var n__4741__auto___59598 = n;
var x_59599 = (0);
while(true){
if((x_59599 < n__4741__auto___59598)){
(a[x_59599] = x_59599);

var G__59600 = (x_59599 + (1));
x_59599 = G__59600;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58178 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58178 = (function (flag,meta58179){
this.flag = flag;
this.meta58179 = meta58179;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58180,meta58179__$1){
var self__ = this;
var _58180__$1 = this;
return (new cljs.core.async.t_cljs$core$async58178(self__.flag,meta58179__$1));
}));

(cljs.core.async.t_cljs$core$async58178.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58180){
var self__ = this;
var _58180__$1 = this;
return self__.meta58179;
}));

(cljs.core.async.t_cljs$core$async58178.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58178.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async58178.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async58178.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async58178.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta58179","meta58179",642280584,null)], null);
}));

(cljs.core.async.t_cljs$core$async58178.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58178.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58178");

(cljs.core.async.t_cljs$core$async58178.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async58178");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58178.
 */
cljs.core.async.__GT_t_cljs$core$async58178 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async58178(flag__$1,meta58179){
return (new cljs.core.async.t_cljs$core$async58178(flag__$1,meta58179));
});

}

return (new cljs.core.async.t_cljs$core$async58178(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58181 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58181 = (function (flag,cb,meta58182){
this.flag = flag;
this.cb = cb;
this.meta58182 = meta58182;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58181.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58183,meta58182__$1){
var self__ = this;
var _58183__$1 = this;
return (new cljs.core.async.t_cljs$core$async58181(self__.flag,self__.cb,meta58182__$1));
}));

(cljs.core.async.t_cljs$core$async58181.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58183){
var self__ = this;
var _58183__$1 = this;
return self__.meta58182;
}));

(cljs.core.async.t_cljs$core$async58181.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58181.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async58181.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async58181.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async58181.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta58182","meta58182",1735502505,null)], null);
}));

(cljs.core.async.t_cljs$core$async58181.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58181.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58181");

(cljs.core.async.t_cljs$core$async58181.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async58181");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58181.
 */
cljs.core.async.__GT_t_cljs$core$async58181 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async58181(flag__$1,cb__$1,meta58182){
return (new cljs.core.async.t_cljs$core$async58181(flag__$1,cb__$1,meta58182));
});

}

return (new cljs.core.async.t_cljs$core$async58181(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__58184_SHARP_){
var G__58186 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__58184_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__58186) : fret.call(null,G__58186));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__58185_SHARP_){
var G__58187 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__58185_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__58187) : fret.call(null,G__58187));
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
var G__59605 = (i + (1));
i = G__59605;
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
var len__4864__auto___59606 = arguments.length;
var i__4865__auto___59607 = (0);
while(true){
if((i__4865__auto___59607 < len__4864__auto___59606)){
args__4870__auto__.push((arguments[i__4865__auto___59607]));

var G__59608 = (i__4865__auto___59607 + (1));
i__4865__auto___59607 = G__59608;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__58190){
var map__58191 = p__58190;
var map__58191__$1 = cljs.core.__destructure_map(map__58191);
var opts = map__58191__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq58188){
var G__58189 = cljs.core.first(seq58188);
var seq58188__$1 = cljs.core.next(seq58188);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58189,seq58188__$1);
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
var G__58193 = arguments.length;
switch (G__58193) {
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
var c__58096__auto___59610 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58097__auto__ = (function (){var switch__57894__auto__ = (function (state_58217){
var state_val_58218 = (state_58217[(1)]);
if((state_val_58218 === (7))){
var inst_58213 = (state_58217[(2)]);
var state_58217__$1 = state_58217;
var statearr_58219_59611 = state_58217__$1;
(statearr_58219_59611[(2)] = inst_58213);

(statearr_58219_59611[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58218 === (1))){
var state_58217__$1 = state_58217;
var statearr_58220_59612 = state_58217__$1;
(statearr_58220_59612[(2)] = null);

(statearr_58220_59612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58218 === (4))){
var inst_58196 = (state_58217[(7)]);
var inst_58196__$1 = (state_58217[(2)]);
var inst_58197 = (inst_58196__$1 == null);
var state_58217__$1 = (function (){var statearr_58221 = state_58217;
(statearr_58221[(7)] = inst_58196__$1);

return statearr_58221;
})();
if(cljs.core.truth_(inst_58197)){
var statearr_58222_59613 = state_58217__$1;
(statearr_58222_59613[(1)] = (5));

} else {
var statearr_58223_59614 = state_58217__$1;
(statearr_58223_59614[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58218 === (13))){
var state_58217__$1 = state_58217;
var statearr_58224_59615 = state_58217__$1;
(statearr_58224_59615[(2)] = null);

(statearr_58224_59615[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58218 === (6))){
var inst_58196 = (state_58217[(7)]);
var state_58217__$1 = state_58217;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58217__$1,(11),to,inst_58196);
} else {
if((state_val_58218 === (3))){
var inst_58215 = (state_58217[(2)]);
var state_58217__$1 = state_58217;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58217__$1,inst_58215);
} else {
if((state_val_58218 === (12))){
var state_58217__$1 = state_58217;
var statearr_58225_59616 = state_58217__$1;
(statearr_58225_59616[(2)] = null);

(statearr_58225_59616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58218 === (2))){
var state_58217__$1 = state_58217;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58217__$1,(4),from);
} else {
if((state_val_58218 === (11))){
var inst_58206 = (state_58217[(2)]);
var state_58217__$1 = state_58217;
if(cljs.core.truth_(inst_58206)){
var statearr_58226_59617 = state_58217__$1;
(statearr_58226_59617[(1)] = (12));

} else {
var statearr_58227_59618 = state_58217__$1;
(statearr_58227_59618[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58218 === (9))){
var state_58217__$1 = state_58217;
var statearr_58228_59619 = state_58217__$1;
(statearr_58228_59619[(2)] = null);

(statearr_58228_59619[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58218 === (5))){
var state_58217__$1 = state_58217;
if(cljs.core.truth_(close_QMARK_)){
var statearr_58229_59620 = state_58217__$1;
(statearr_58229_59620[(1)] = (8));

} else {
var statearr_58230_59621 = state_58217__$1;
(statearr_58230_59621[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58218 === (14))){
var inst_58211 = (state_58217[(2)]);
var state_58217__$1 = state_58217;
var statearr_58231_59622 = state_58217__$1;
(statearr_58231_59622[(2)] = inst_58211);

(statearr_58231_59622[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58218 === (10))){
var inst_58203 = (state_58217[(2)]);
var state_58217__$1 = state_58217;
var statearr_58232_59623 = state_58217__$1;
(statearr_58232_59623[(2)] = inst_58203);

(statearr_58232_59623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58218 === (8))){
var inst_58200 = cljs.core.async.close_BANG_(to);
var state_58217__$1 = state_58217;
var statearr_58233_59624 = state_58217__$1;
(statearr_58233_59624[(2)] = inst_58200);

(statearr_58233_59624[(1)] = (10));


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
var cljs$core$async$state_machine__57895__auto__ = null;
var cljs$core$async$state_machine__57895__auto____0 = (function (){
var statearr_58234 = [null,null,null,null,null,null,null,null];
(statearr_58234[(0)] = cljs$core$async$state_machine__57895__auto__);

(statearr_58234[(1)] = (1));

return statearr_58234;
});
var cljs$core$async$state_machine__57895__auto____1 = (function (state_58217){
while(true){
var ret_value__57896__auto__ = (function (){try{while(true){
var result__57897__auto__ = switch__57894__auto__(state_58217);
if(cljs.core.keyword_identical_QMARK_(result__57897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57897__auto__;
}
break;
}
}catch (e58235){var ex__57898__auto__ = e58235;
var statearr_58236_59630 = state_58217;
(statearr_58236_59630[(2)] = ex__57898__auto__);


if(cljs.core.seq((state_58217[(4)]))){
var statearr_58237_59631 = state_58217;
(statearr_58237_59631[(1)] = cljs.core.first((state_58217[(4)])));

} else {
throw ex__57898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59632 = state_58217;
state_58217 = G__59632;
continue;
} else {
return ret_value__57896__auto__;
}
break;
}
});
cljs$core$async$state_machine__57895__auto__ = function(state_58217){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57895__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57895__auto____1.call(this,state_58217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__57895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57895__auto____0;
cljs$core$async$state_machine__57895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57895__auto____1;
return cljs$core$async$state_machine__57895__auto__;
})()
})();
var state__58098__auto__ = (function (){var statearr_58238 = f__58097__auto__();
(statearr_58238[(6)] = c__58096__auto___59610);

return statearr_58238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58098__auto__);
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
var process = (function (p__58239){
var vec__58240 = p__58239;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58240,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58240,(1),null);
var job = vec__58240;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__58096__auto___59633 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58097__auto__ = (function (){var switch__57894__auto__ = (function (state_58247){
var state_val_58248 = (state_58247[(1)]);
if((state_val_58248 === (1))){
var state_58247__$1 = state_58247;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58247__$1,(2),res,v);
} else {
if((state_val_58248 === (2))){
var inst_58244 = (state_58247[(2)]);
var inst_58245 = cljs.core.async.close_BANG_(res);
var state_58247__$1 = (function (){var statearr_58249 = state_58247;
(statearr_58249[(7)] = inst_58244);

return statearr_58249;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_58247__$1,inst_58245);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__57895__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__57895__auto____0 = (function (){
var statearr_58250 = [null,null,null,null,null,null,null,null];
(statearr_58250[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__57895__auto__);

(statearr_58250[(1)] = (1));

return statearr_58250;
});
var cljs$core$async$pipeline_STAR__$_state_machine__57895__auto____1 = (function (state_58247){
while(true){
var ret_value__57896__auto__ = (function (){try{while(true){
var result__57897__auto__ = switch__57894__auto__(state_58247);
if(cljs.core.keyword_identical_QMARK_(result__57897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57897__auto__;
}
break;
}
}catch (e58251){var ex__57898__auto__ = e58251;
var statearr_58252_59634 = state_58247;
(statearr_58252_59634[(2)] = ex__57898__auto__);


if(cljs.core.seq((state_58247[(4)]))){
var statearr_58253_59635 = state_58247;
(statearr_58253_59635[(1)] = cljs.core.first((state_58247[(4)])));

} else {
throw ex__57898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59636 = state_58247;
state_58247 = G__59636;
continue;
} else {
return ret_value__57896__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__57895__auto__ = function(state_58247){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__57895__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__57895__auto____1.call(this,state_58247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__57895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__57895__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__57895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__57895__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__57895__auto__;
})()
})();
var state__58098__auto__ = (function (){var statearr_58254 = f__58097__auto__();
(statearr_58254[(6)] = c__58096__auto___59633);

return statearr_58254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58098__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__58255){
var vec__58256 = p__58255;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58256,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58256,(1),null);
var job = vec__58256;
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
var n__4741__auto___59637 = n;
var __59638 = (0);
while(true){
if((__59638 < n__4741__auto___59637)){
var G__58259_59639 = type;
var G__58259_59640__$1 = (((G__58259_59639 instanceof cljs.core.Keyword))?G__58259_59639.fqn:null);
switch (G__58259_59640__$1) {
case "compute":
var c__58096__auto___59642 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__59638,c__58096__auto___59642,G__58259_59639,G__58259_59640__$1,n__4741__auto___59637,jobs,results,process,async){
return (function (){
var f__58097__auto__ = (function (){var switch__57894__auto__ = ((function (__59638,c__58096__auto___59642,G__58259_59639,G__58259_59640__$1,n__4741__auto___59637,jobs,results,process,async){
return (function (state_58272){
var state_val_58273 = (state_58272[(1)]);
if((state_val_58273 === (1))){
var state_58272__$1 = state_58272;
var statearr_58274_59643 = state_58272__$1;
(statearr_58274_59643[(2)] = null);

(statearr_58274_59643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58273 === (2))){
var state_58272__$1 = state_58272;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58272__$1,(4),jobs);
} else {
if((state_val_58273 === (3))){
var inst_58270 = (state_58272[(2)]);
var state_58272__$1 = state_58272;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58272__$1,inst_58270);
} else {
if((state_val_58273 === (4))){
var inst_58262 = (state_58272[(2)]);
var inst_58263 = process(inst_58262);
var state_58272__$1 = state_58272;
if(cljs.core.truth_(inst_58263)){
var statearr_58275_59644 = state_58272__$1;
(statearr_58275_59644[(1)] = (5));

} else {
var statearr_58276_59645 = state_58272__$1;
(statearr_58276_59645[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58273 === (5))){
var state_58272__$1 = state_58272;
var statearr_58277_59646 = state_58272__$1;
(statearr_58277_59646[(2)] = null);

(statearr_58277_59646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58273 === (6))){
var state_58272__$1 = state_58272;
var statearr_58278_59647 = state_58272__$1;
(statearr_58278_59647[(2)] = null);

(statearr_58278_59647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58273 === (7))){
var inst_58268 = (state_58272[(2)]);
var state_58272__$1 = state_58272;
var statearr_58279_59648 = state_58272__$1;
(statearr_58279_59648[(2)] = inst_58268);

(statearr_58279_59648[(1)] = (3));


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
});})(__59638,c__58096__auto___59642,G__58259_59639,G__58259_59640__$1,n__4741__auto___59637,jobs,results,process,async))
;
return ((function (__59638,switch__57894__auto__,c__58096__auto___59642,G__58259_59639,G__58259_59640__$1,n__4741__auto___59637,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__57895__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__57895__auto____0 = (function (){
var statearr_58280 = [null,null,null,null,null,null,null];
(statearr_58280[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__57895__auto__);

(statearr_58280[(1)] = (1));

return statearr_58280;
});
var cljs$core$async$pipeline_STAR__$_state_machine__57895__auto____1 = (function (state_58272){
while(true){
var ret_value__57896__auto__ = (function (){try{while(true){
var result__57897__auto__ = switch__57894__auto__(state_58272);
if(cljs.core.keyword_identical_QMARK_(result__57897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57897__auto__;
}
break;
}
}catch (e58281){var ex__57898__auto__ = e58281;
var statearr_58282_59651 = state_58272;
(statearr_58282_59651[(2)] = ex__57898__auto__);


if(cljs.core.seq((state_58272[(4)]))){
var statearr_58283_59652 = state_58272;
(statearr_58283_59652[(1)] = cljs.core.first((state_58272[(4)])));

} else {
throw ex__57898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59653 = state_58272;
state_58272 = G__59653;
continue;
} else {
return ret_value__57896__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__57895__auto__ = function(state_58272){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__57895__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__57895__auto____1.call(this,state_58272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__57895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__57895__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__57895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__57895__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__57895__auto__;
})()
;})(__59638,switch__57894__auto__,c__58096__auto___59642,G__58259_59639,G__58259_59640__$1,n__4741__auto___59637,jobs,results,process,async))
})();
var state__58098__auto__ = (function (){var statearr_58284 = f__58097__auto__();
(statearr_58284[(6)] = c__58096__auto___59642);

return statearr_58284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58098__auto__);
});})(__59638,c__58096__auto___59642,G__58259_59639,G__58259_59640__$1,n__4741__auto___59637,jobs,results,process,async))
);


break;
case "async":
var c__58096__auto___59654 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__59638,c__58096__auto___59654,G__58259_59639,G__58259_59640__$1,n__4741__auto___59637,jobs,results,process,async){
return (function (){
var f__58097__auto__ = (function (){var switch__57894__auto__ = ((function (__59638,c__58096__auto___59654,G__58259_59639,G__58259_59640__$1,n__4741__auto___59637,jobs,results,process,async){
return (function (state_58297){
var state_val_58298 = (state_58297[(1)]);
if((state_val_58298 === (1))){
var state_58297__$1 = state_58297;
var statearr_58299_59657 = state_58297__$1;
(statearr_58299_59657[(2)] = null);

(statearr_58299_59657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58298 === (2))){
var state_58297__$1 = state_58297;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58297__$1,(4),jobs);
} else {
if((state_val_58298 === (3))){
var inst_58295 = (state_58297[(2)]);
var state_58297__$1 = state_58297;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58297__$1,inst_58295);
} else {
if((state_val_58298 === (4))){
var inst_58287 = (state_58297[(2)]);
var inst_58288 = async(inst_58287);
var state_58297__$1 = state_58297;
if(cljs.core.truth_(inst_58288)){
var statearr_58300_59658 = state_58297__$1;
(statearr_58300_59658[(1)] = (5));

} else {
var statearr_58301_59659 = state_58297__$1;
(statearr_58301_59659[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58298 === (5))){
var state_58297__$1 = state_58297;
var statearr_58302_59660 = state_58297__$1;
(statearr_58302_59660[(2)] = null);

(statearr_58302_59660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58298 === (6))){
var state_58297__$1 = state_58297;
var statearr_58303_59661 = state_58297__$1;
(statearr_58303_59661[(2)] = null);

(statearr_58303_59661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58298 === (7))){
var inst_58293 = (state_58297[(2)]);
var state_58297__$1 = state_58297;
var statearr_58304_59662 = state_58297__$1;
(statearr_58304_59662[(2)] = inst_58293);

(statearr_58304_59662[(1)] = (3));


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
});})(__59638,c__58096__auto___59654,G__58259_59639,G__58259_59640__$1,n__4741__auto___59637,jobs,results,process,async))
;
return ((function (__59638,switch__57894__auto__,c__58096__auto___59654,G__58259_59639,G__58259_59640__$1,n__4741__auto___59637,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__57895__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__57895__auto____0 = (function (){
var statearr_58305 = [null,null,null,null,null,null,null];
(statearr_58305[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__57895__auto__);

(statearr_58305[(1)] = (1));

return statearr_58305;
});
var cljs$core$async$pipeline_STAR__$_state_machine__57895__auto____1 = (function (state_58297){
while(true){
var ret_value__57896__auto__ = (function (){try{while(true){
var result__57897__auto__ = switch__57894__auto__(state_58297);
if(cljs.core.keyword_identical_QMARK_(result__57897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57897__auto__;
}
break;
}
}catch (e58306){var ex__57898__auto__ = e58306;
var statearr_58307_59663 = state_58297;
(statearr_58307_59663[(2)] = ex__57898__auto__);


if(cljs.core.seq((state_58297[(4)]))){
var statearr_58308_59664 = state_58297;
(statearr_58308_59664[(1)] = cljs.core.first((state_58297[(4)])));

} else {
throw ex__57898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59665 = state_58297;
state_58297 = G__59665;
continue;
} else {
return ret_value__57896__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__57895__auto__ = function(state_58297){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__57895__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__57895__auto____1.call(this,state_58297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__57895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__57895__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__57895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__57895__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__57895__auto__;
})()
;})(__59638,switch__57894__auto__,c__58096__auto___59654,G__58259_59639,G__58259_59640__$1,n__4741__auto___59637,jobs,results,process,async))
})();
var state__58098__auto__ = (function (){var statearr_58309 = f__58097__auto__();
(statearr_58309[(6)] = c__58096__auto___59654);

return statearr_58309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58098__auto__);
});})(__59638,c__58096__auto___59654,G__58259_59639,G__58259_59640__$1,n__4741__auto___59637,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58259_59640__$1)].join('')));

}

var G__59666 = (__59638 + (1));
__59638 = G__59666;
continue;
} else {
}
break;
}

var c__58096__auto___59667 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58097__auto__ = (function (){var switch__57894__auto__ = (function (state_58331){
var state_val_58332 = (state_58331[(1)]);
if((state_val_58332 === (7))){
var inst_58327 = (state_58331[(2)]);
var state_58331__$1 = state_58331;
var statearr_58333_59668 = state_58331__$1;
(statearr_58333_59668[(2)] = inst_58327);

(statearr_58333_59668[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58332 === (1))){
var state_58331__$1 = state_58331;
var statearr_58334_59669 = state_58331__$1;
(statearr_58334_59669[(2)] = null);

(statearr_58334_59669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58332 === (4))){
var inst_58312 = (state_58331[(7)]);
var inst_58312__$1 = (state_58331[(2)]);
var inst_58313 = (inst_58312__$1 == null);
var state_58331__$1 = (function (){var statearr_58335 = state_58331;
(statearr_58335[(7)] = inst_58312__$1);

return statearr_58335;
})();
if(cljs.core.truth_(inst_58313)){
var statearr_58336_59670 = state_58331__$1;
(statearr_58336_59670[(1)] = (5));

} else {
var statearr_58337_59671 = state_58331__$1;
(statearr_58337_59671[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58332 === (6))){
var inst_58317 = (state_58331[(8)]);
var inst_58312 = (state_58331[(7)]);
var inst_58317__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_58318 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_58319 = [inst_58312,inst_58317__$1];
var inst_58320 = (new cljs.core.PersistentVector(null,2,(5),inst_58318,inst_58319,null));
var state_58331__$1 = (function (){var statearr_58338 = state_58331;
(statearr_58338[(8)] = inst_58317__$1);

return statearr_58338;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58331__$1,(8),jobs,inst_58320);
} else {
if((state_val_58332 === (3))){
var inst_58329 = (state_58331[(2)]);
var state_58331__$1 = state_58331;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58331__$1,inst_58329);
} else {
if((state_val_58332 === (2))){
var state_58331__$1 = state_58331;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58331__$1,(4),from);
} else {
if((state_val_58332 === (9))){
var inst_58324 = (state_58331[(2)]);
var state_58331__$1 = (function (){var statearr_58339 = state_58331;
(statearr_58339[(9)] = inst_58324);

return statearr_58339;
})();
var statearr_58340_59672 = state_58331__$1;
(statearr_58340_59672[(2)] = null);

(statearr_58340_59672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58332 === (5))){
var inst_58315 = cljs.core.async.close_BANG_(jobs);
var state_58331__$1 = state_58331;
var statearr_58341_59673 = state_58331__$1;
(statearr_58341_59673[(2)] = inst_58315);

(statearr_58341_59673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58332 === (8))){
var inst_58317 = (state_58331[(8)]);
var inst_58322 = (state_58331[(2)]);
var state_58331__$1 = (function (){var statearr_58342 = state_58331;
(statearr_58342[(10)] = inst_58322);

return statearr_58342;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58331__$1,(9),results,inst_58317);
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
var cljs$core$async$pipeline_STAR__$_state_machine__57895__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__57895__auto____0 = (function (){
var statearr_58343 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_58343[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__57895__auto__);

(statearr_58343[(1)] = (1));

return statearr_58343;
});
var cljs$core$async$pipeline_STAR__$_state_machine__57895__auto____1 = (function (state_58331){
while(true){
var ret_value__57896__auto__ = (function (){try{while(true){
var result__57897__auto__ = switch__57894__auto__(state_58331);
if(cljs.core.keyword_identical_QMARK_(result__57897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57897__auto__;
}
break;
}
}catch (e58344){var ex__57898__auto__ = e58344;
var statearr_58345_59674 = state_58331;
(statearr_58345_59674[(2)] = ex__57898__auto__);


if(cljs.core.seq((state_58331[(4)]))){
var statearr_58346_59675 = state_58331;
(statearr_58346_59675[(1)] = cljs.core.first((state_58331[(4)])));

} else {
throw ex__57898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59676 = state_58331;
state_58331 = G__59676;
continue;
} else {
return ret_value__57896__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__57895__auto__ = function(state_58331){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__57895__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__57895__auto____1.call(this,state_58331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__57895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__57895__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__57895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__57895__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__57895__auto__;
})()
})();
var state__58098__auto__ = (function (){var statearr_58347 = f__58097__auto__();
(statearr_58347[(6)] = c__58096__auto___59667);

return statearr_58347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58098__auto__);
}));


var c__58096__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58097__auto__ = (function (){var switch__57894__auto__ = (function (state_58385){
var state_val_58386 = (state_58385[(1)]);
if((state_val_58386 === (7))){
var inst_58381 = (state_58385[(2)]);
var state_58385__$1 = state_58385;
var statearr_58387_59677 = state_58385__$1;
(statearr_58387_59677[(2)] = inst_58381);

(statearr_58387_59677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58386 === (20))){
var state_58385__$1 = state_58385;
var statearr_58388_59678 = state_58385__$1;
(statearr_58388_59678[(2)] = null);

(statearr_58388_59678[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58386 === (1))){
var state_58385__$1 = state_58385;
var statearr_58389_59679 = state_58385__$1;
(statearr_58389_59679[(2)] = null);

(statearr_58389_59679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58386 === (4))){
var inst_58350 = (state_58385[(7)]);
var inst_58350__$1 = (state_58385[(2)]);
var inst_58351 = (inst_58350__$1 == null);
var state_58385__$1 = (function (){var statearr_58390 = state_58385;
(statearr_58390[(7)] = inst_58350__$1);

return statearr_58390;
})();
if(cljs.core.truth_(inst_58351)){
var statearr_58391_59680 = state_58385__$1;
(statearr_58391_59680[(1)] = (5));

} else {
var statearr_58392_59681 = state_58385__$1;
(statearr_58392_59681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58386 === (15))){
var inst_58363 = (state_58385[(8)]);
var state_58385__$1 = state_58385;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58385__$1,(18),to,inst_58363);
} else {
if((state_val_58386 === (21))){
var inst_58376 = (state_58385[(2)]);
var state_58385__$1 = state_58385;
var statearr_58393_59682 = state_58385__$1;
(statearr_58393_59682[(2)] = inst_58376);

(statearr_58393_59682[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58386 === (13))){
var inst_58378 = (state_58385[(2)]);
var state_58385__$1 = (function (){var statearr_58394 = state_58385;
(statearr_58394[(9)] = inst_58378);

return statearr_58394;
})();
var statearr_58395_59683 = state_58385__$1;
(statearr_58395_59683[(2)] = null);

(statearr_58395_59683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58386 === (6))){
var inst_58350 = (state_58385[(7)]);
var state_58385__$1 = state_58385;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58385__$1,(11),inst_58350);
} else {
if((state_val_58386 === (17))){
var inst_58371 = (state_58385[(2)]);
var state_58385__$1 = state_58385;
if(cljs.core.truth_(inst_58371)){
var statearr_58396_59684 = state_58385__$1;
(statearr_58396_59684[(1)] = (19));

} else {
var statearr_58397_59685 = state_58385__$1;
(statearr_58397_59685[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58386 === (3))){
var inst_58383 = (state_58385[(2)]);
var state_58385__$1 = state_58385;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58385__$1,inst_58383);
} else {
if((state_val_58386 === (12))){
var inst_58360 = (state_58385[(10)]);
var state_58385__$1 = state_58385;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58385__$1,(14),inst_58360);
} else {
if((state_val_58386 === (2))){
var state_58385__$1 = state_58385;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58385__$1,(4),results);
} else {
if((state_val_58386 === (19))){
var state_58385__$1 = state_58385;
var statearr_58398_59686 = state_58385__$1;
(statearr_58398_59686[(2)] = null);

(statearr_58398_59686[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58386 === (11))){
var inst_58360 = (state_58385[(2)]);
var state_58385__$1 = (function (){var statearr_58399 = state_58385;
(statearr_58399[(10)] = inst_58360);

return statearr_58399;
})();
var statearr_58400_59687 = state_58385__$1;
(statearr_58400_59687[(2)] = null);

(statearr_58400_59687[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58386 === (9))){
var state_58385__$1 = state_58385;
var statearr_58401_59688 = state_58385__$1;
(statearr_58401_59688[(2)] = null);

(statearr_58401_59688[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58386 === (5))){
var state_58385__$1 = state_58385;
if(cljs.core.truth_(close_QMARK_)){
var statearr_58402_59689 = state_58385__$1;
(statearr_58402_59689[(1)] = (8));

} else {
var statearr_58403_59690 = state_58385__$1;
(statearr_58403_59690[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58386 === (14))){
var inst_58365 = (state_58385[(11)]);
var inst_58363 = (state_58385[(8)]);
var inst_58363__$1 = (state_58385[(2)]);
var inst_58364 = (inst_58363__$1 == null);
var inst_58365__$1 = cljs.core.not(inst_58364);
var state_58385__$1 = (function (){var statearr_58404 = state_58385;
(statearr_58404[(11)] = inst_58365__$1);

(statearr_58404[(8)] = inst_58363__$1);

return statearr_58404;
})();
if(inst_58365__$1){
var statearr_58405_59693 = state_58385__$1;
(statearr_58405_59693[(1)] = (15));

} else {
var statearr_58406_59694 = state_58385__$1;
(statearr_58406_59694[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58386 === (16))){
var inst_58365 = (state_58385[(11)]);
var state_58385__$1 = state_58385;
var statearr_58407_59695 = state_58385__$1;
(statearr_58407_59695[(2)] = inst_58365);

(statearr_58407_59695[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58386 === (10))){
var inst_58357 = (state_58385[(2)]);
var state_58385__$1 = state_58385;
var statearr_58408_59696 = state_58385__$1;
(statearr_58408_59696[(2)] = inst_58357);

(statearr_58408_59696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58386 === (18))){
var inst_58368 = (state_58385[(2)]);
var state_58385__$1 = state_58385;
var statearr_58409_59697 = state_58385__$1;
(statearr_58409_59697[(2)] = inst_58368);

(statearr_58409_59697[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58386 === (8))){
var inst_58354 = cljs.core.async.close_BANG_(to);
var state_58385__$1 = state_58385;
var statearr_58410_59698 = state_58385__$1;
(statearr_58410_59698[(2)] = inst_58354);

(statearr_58410_59698[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__57895__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__57895__auto____0 = (function (){
var statearr_58411 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58411[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__57895__auto__);

(statearr_58411[(1)] = (1));

return statearr_58411;
});
var cljs$core$async$pipeline_STAR__$_state_machine__57895__auto____1 = (function (state_58385){
while(true){
var ret_value__57896__auto__ = (function (){try{while(true){
var result__57897__auto__ = switch__57894__auto__(state_58385);
if(cljs.core.keyword_identical_QMARK_(result__57897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57897__auto__;
}
break;
}
}catch (e58412){var ex__57898__auto__ = e58412;
var statearr_58413_59699 = state_58385;
(statearr_58413_59699[(2)] = ex__57898__auto__);


if(cljs.core.seq((state_58385[(4)]))){
var statearr_58414_59700 = state_58385;
(statearr_58414_59700[(1)] = cljs.core.first((state_58385[(4)])));

} else {
throw ex__57898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59701 = state_58385;
state_58385 = G__59701;
continue;
} else {
return ret_value__57896__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__57895__auto__ = function(state_58385){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__57895__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__57895__auto____1.call(this,state_58385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__57895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__57895__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__57895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__57895__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__57895__auto__;
})()
})();
var state__58098__auto__ = (function (){var statearr_58415 = f__58097__auto__();
(statearr_58415[(6)] = c__58096__auto__);

return statearr_58415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58098__auto__);
}));

return c__58096__auto__;
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
var G__58417 = arguments.length;
switch (G__58417) {
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
var G__58419 = arguments.length;
switch (G__58419) {
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
var G__58421 = arguments.length;
switch (G__58421) {
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
var c__58096__auto___59705 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58097__auto__ = (function (){var switch__57894__auto__ = (function (state_58447){
var state_val_58448 = (state_58447[(1)]);
if((state_val_58448 === (7))){
var inst_58443 = (state_58447[(2)]);
var state_58447__$1 = state_58447;
var statearr_58449_59706 = state_58447__$1;
(statearr_58449_59706[(2)] = inst_58443);

(statearr_58449_59706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58448 === (1))){
var state_58447__$1 = state_58447;
var statearr_58450_59707 = state_58447__$1;
(statearr_58450_59707[(2)] = null);

(statearr_58450_59707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58448 === (4))){
var inst_58424 = (state_58447[(7)]);
var inst_58424__$1 = (state_58447[(2)]);
var inst_58425 = (inst_58424__$1 == null);
var state_58447__$1 = (function (){var statearr_58451 = state_58447;
(statearr_58451[(7)] = inst_58424__$1);

return statearr_58451;
})();
if(cljs.core.truth_(inst_58425)){
var statearr_58452_59708 = state_58447__$1;
(statearr_58452_59708[(1)] = (5));

} else {
var statearr_58453_59709 = state_58447__$1;
(statearr_58453_59709[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58448 === (13))){
var state_58447__$1 = state_58447;
var statearr_58454_59710 = state_58447__$1;
(statearr_58454_59710[(2)] = null);

(statearr_58454_59710[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58448 === (6))){
var inst_58424 = (state_58447[(7)]);
var inst_58430 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_58424) : p.call(null,inst_58424));
var state_58447__$1 = state_58447;
if(cljs.core.truth_(inst_58430)){
var statearr_58455_59711 = state_58447__$1;
(statearr_58455_59711[(1)] = (9));

} else {
var statearr_58456_59712 = state_58447__$1;
(statearr_58456_59712[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58448 === (3))){
var inst_58445 = (state_58447[(2)]);
var state_58447__$1 = state_58447;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58447__$1,inst_58445);
} else {
if((state_val_58448 === (12))){
var state_58447__$1 = state_58447;
var statearr_58457_59713 = state_58447__$1;
(statearr_58457_59713[(2)] = null);

(statearr_58457_59713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58448 === (2))){
var state_58447__$1 = state_58447;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58447__$1,(4),ch);
} else {
if((state_val_58448 === (11))){
var inst_58424 = (state_58447[(7)]);
var inst_58434 = (state_58447[(2)]);
var state_58447__$1 = state_58447;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58447__$1,(8),inst_58434,inst_58424);
} else {
if((state_val_58448 === (9))){
var state_58447__$1 = state_58447;
var statearr_58458_59714 = state_58447__$1;
(statearr_58458_59714[(2)] = tc);

(statearr_58458_59714[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58448 === (5))){
var inst_58427 = cljs.core.async.close_BANG_(tc);
var inst_58428 = cljs.core.async.close_BANG_(fc);
var state_58447__$1 = (function (){var statearr_58459 = state_58447;
(statearr_58459[(8)] = inst_58427);

return statearr_58459;
})();
var statearr_58460_59715 = state_58447__$1;
(statearr_58460_59715[(2)] = inst_58428);

(statearr_58460_59715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58448 === (14))){
var inst_58441 = (state_58447[(2)]);
var state_58447__$1 = state_58447;
var statearr_58461_59716 = state_58447__$1;
(statearr_58461_59716[(2)] = inst_58441);

(statearr_58461_59716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58448 === (10))){
var state_58447__$1 = state_58447;
var statearr_58462_59717 = state_58447__$1;
(statearr_58462_59717[(2)] = fc);

(statearr_58462_59717[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58448 === (8))){
var inst_58436 = (state_58447[(2)]);
var state_58447__$1 = state_58447;
if(cljs.core.truth_(inst_58436)){
var statearr_58463_59718 = state_58447__$1;
(statearr_58463_59718[(1)] = (12));

} else {
var statearr_58464_59719 = state_58447__$1;
(statearr_58464_59719[(1)] = (13));

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
var cljs$core$async$state_machine__57895__auto__ = null;
var cljs$core$async$state_machine__57895__auto____0 = (function (){
var statearr_58465 = [null,null,null,null,null,null,null,null,null];
(statearr_58465[(0)] = cljs$core$async$state_machine__57895__auto__);

(statearr_58465[(1)] = (1));

return statearr_58465;
});
var cljs$core$async$state_machine__57895__auto____1 = (function (state_58447){
while(true){
var ret_value__57896__auto__ = (function (){try{while(true){
var result__57897__auto__ = switch__57894__auto__(state_58447);
if(cljs.core.keyword_identical_QMARK_(result__57897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57897__auto__;
}
break;
}
}catch (e58466){var ex__57898__auto__ = e58466;
var statearr_58467_59720 = state_58447;
(statearr_58467_59720[(2)] = ex__57898__auto__);


if(cljs.core.seq((state_58447[(4)]))){
var statearr_58468_59721 = state_58447;
(statearr_58468_59721[(1)] = cljs.core.first((state_58447[(4)])));

} else {
throw ex__57898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59722 = state_58447;
state_58447 = G__59722;
continue;
} else {
return ret_value__57896__auto__;
}
break;
}
});
cljs$core$async$state_machine__57895__auto__ = function(state_58447){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57895__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57895__auto____1.call(this,state_58447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__57895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57895__auto____0;
cljs$core$async$state_machine__57895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57895__auto____1;
return cljs$core$async$state_machine__57895__auto__;
})()
})();
var state__58098__auto__ = (function (){var statearr_58469 = f__58097__auto__();
(statearr_58469[(6)] = c__58096__auto___59705);

return statearr_58469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58098__auto__);
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
var c__58096__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58097__auto__ = (function (){var switch__57894__auto__ = (function (state_58491){
var state_val_58492 = (state_58491[(1)]);
if((state_val_58492 === (7))){
var inst_58487 = (state_58491[(2)]);
var state_58491__$1 = state_58491;
var statearr_58493_59724 = state_58491__$1;
(statearr_58493_59724[(2)] = inst_58487);

(statearr_58493_59724[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58492 === (1))){
var inst_58470 = init;
var inst_58471 = inst_58470;
var state_58491__$1 = (function (){var statearr_58494 = state_58491;
(statearr_58494[(7)] = inst_58471);

return statearr_58494;
})();
var statearr_58495_59729 = state_58491__$1;
(statearr_58495_59729[(2)] = null);

(statearr_58495_59729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58492 === (4))){
var inst_58474 = (state_58491[(8)]);
var inst_58474__$1 = (state_58491[(2)]);
var inst_58475 = (inst_58474__$1 == null);
var state_58491__$1 = (function (){var statearr_58496 = state_58491;
(statearr_58496[(8)] = inst_58474__$1);

return statearr_58496;
})();
if(cljs.core.truth_(inst_58475)){
var statearr_58497_59730 = state_58491__$1;
(statearr_58497_59730[(1)] = (5));

} else {
var statearr_58498_59731 = state_58491__$1;
(statearr_58498_59731[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58492 === (6))){
var inst_58474 = (state_58491[(8)]);
var inst_58478 = (state_58491[(9)]);
var inst_58471 = (state_58491[(7)]);
var inst_58478__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_58471,inst_58474) : f.call(null,inst_58471,inst_58474));
var inst_58479 = cljs.core.reduced_QMARK_(inst_58478__$1);
var state_58491__$1 = (function (){var statearr_58499 = state_58491;
(statearr_58499[(9)] = inst_58478__$1);

return statearr_58499;
})();
if(inst_58479){
var statearr_58500_59732 = state_58491__$1;
(statearr_58500_59732[(1)] = (8));

} else {
var statearr_58501_59733 = state_58491__$1;
(statearr_58501_59733[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58492 === (3))){
var inst_58489 = (state_58491[(2)]);
var state_58491__$1 = state_58491;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58491__$1,inst_58489);
} else {
if((state_val_58492 === (2))){
var state_58491__$1 = state_58491;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58491__$1,(4),ch);
} else {
if((state_val_58492 === (9))){
var inst_58478 = (state_58491[(9)]);
var inst_58471 = inst_58478;
var state_58491__$1 = (function (){var statearr_58502 = state_58491;
(statearr_58502[(7)] = inst_58471);

return statearr_58502;
})();
var statearr_58503_59734 = state_58491__$1;
(statearr_58503_59734[(2)] = null);

(statearr_58503_59734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58492 === (5))){
var inst_58471 = (state_58491[(7)]);
var state_58491__$1 = state_58491;
var statearr_58504_59735 = state_58491__$1;
(statearr_58504_59735[(2)] = inst_58471);

(statearr_58504_59735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58492 === (10))){
var inst_58485 = (state_58491[(2)]);
var state_58491__$1 = state_58491;
var statearr_58505_59736 = state_58491__$1;
(statearr_58505_59736[(2)] = inst_58485);

(statearr_58505_59736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58492 === (8))){
var inst_58478 = (state_58491[(9)]);
var inst_58481 = cljs.core.deref(inst_58478);
var state_58491__$1 = state_58491;
var statearr_58506_59737 = state_58491__$1;
(statearr_58506_59737[(2)] = inst_58481);

(statearr_58506_59737[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__57895__auto__ = null;
var cljs$core$async$reduce_$_state_machine__57895__auto____0 = (function (){
var statearr_58507 = [null,null,null,null,null,null,null,null,null,null];
(statearr_58507[(0)] = cljs$core$async$reduce_$_state_machine__57895__auto__);

(statearr_58507[(1)] = (1));

return statearr_58507;
});
var cljs$core$async$reduce_$_state_machine__57895__auto____1 = (function (state_58491){
while(true){
var ret_value__57896__auto__ = (function (){try{while(true){
var result__57897__auto__ = switch__57894__auto__(state_58491);
if(cljs.core.keyword_identical_QMARK_(result__57897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57897__auto__;
}
break;
}
}catch (e58508){var ex__57898__auto__ = e58508;
var statearr_58509_59738 = state_58491;
(statearr_58509_59738[(2)] = ex__57898__auto__);


if(cljs.core.seq((state_58491[(4)]))){
var statearr_58510_59739 = state_58491;
(statearr_58510_59739[(1)] = cljs.core.first((state_58491[(4)])));

} else {
throw ex__57898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59740 = state_58491;
state_58491 = G__59740;
continue;
} else {
return ret_value__57896__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__57895__auto__ = function(state_58491){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__57895__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__57895__auto____1.call(this,state_58491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__57895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__57895__auto____0;
cljs$core$async$reduce_$_state_machine__57895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__57895__auto____1;
return cljs$core$async$reduce_$_state_machine__57895__auto__;
})()
})();
var state__58098__auto__ = (function (){var statearr_58511 = f__58097__auto__();
(statearr_58511[(6)] = c__58096__auto__);

return statearr_58511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58098__auto__);
}));

return c__58096__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__58096__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58097__auto__ = (function (){var switch__57894__auto__ = (function (state_58517){
var state_val_58518 = (state_58517[(1)]);
if((state_val_58518 === (1))){
var inst_58512 = cljs.core.async.reduce(f__$1,init,ch);
var state_58517__$1 = state_58517;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58517__$1,(2),inst_58512);
} else {
if((state_val_58518 === (2))){
var inst_58514 = (state_58517[(2)]);
var inst_58515 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_58514) : f__$1.call(null,inst_58514));
var state_58517__$1 = state_58517;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58517__$1,inst_58515);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__57895__auto__ = null;
var cljs$core$async$transduce_$_state_machine__57895__auto____0 = (function (){
var statearr_58519 = [null,null,null,null,null,null,null];
(statearr_58519[(0)] = cljs$core$async$transduce_$_state_machine__57895__auto__);

(statearr_58519[(1)] = (1));

return statearr_58519;
});
var cljs$core$async$transduce_$_state_machine__57895__auto____1 = (function (state_58517){
while(true){
var ret_value__57896__auto__ = (function (){try{while(true){
var result__57897__auto__ = switch__57894__auto__(state_58517);
if(cljs.core.keyword_identical_QMARK_(result__57897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57897__auto__;
}
break;
}
}catch (e58520){var ex__57898__auto__ = e58520;
var statearr_58521_59741 = state_58517;
(statearr_58521_59741[(2)] = ex__57898__auto__);


if(cljs.core.seq((state_58517[(4)]))){
var statearr_58522_59742 = state_58517;
(statearr_58522_59742[(1)] = cljs.core.first((state_58517[(4)])));

} else {
throw ex__57898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59743 = state_58517;
state_58517 = G__59743;
continue;
} else {
return ret_value__57896__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__57895__auto__ = function(state_58517){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__57895__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__57895__auto____1.call(this,state_58517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__57895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__57895__auto____0;
cljs$core$async$transduce_$_state_machine__57895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__57895__auto____1;
return cljs$core$async$transduce_$_state_machine__57895__auto__;
})()
})();
var state__58098__auto__ = (function (){var statearr_58523 = f__58097__auto__();
(statearr_58523[(6)] = c__58096__auto__);

return statearr_58523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58098__auto__);
}));

return c__58096__auto__;
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
var G__58525 = arguments.length;
switch (G__58525) {
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
var c__58096__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58097__auto__ = (function (){var switch__57894__auto__ = (function (state_58550){
var state_val_58551 = (state_58550[(1)]);
if((state_val_58551 === (7))){
var inst_58532 = (state_58550[(2)]);
var state_58550__$1 = state_58550;
var statearr_58552_59745 = state_58550__$1;
(statearr_58552_59745[(2)] = inst_58532);

(statearr_58552_59745[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58551 === (1))){
var inst_58526 = cljs.core.seq(coll);
var inst_58527 = inst_58526;
var state_58550__$1 = (function (){var statearr_58553 = state_58550;
(statearr_58553[(7)] = inst_58527);

return statearr_58553;
})();
var statearr_58554_59747 = state_58550__$1;
(statearr_58554_59747[(2)] = null);

(statearr_58554_59747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58551 === (4))){
var inst_58527 = (state_58550[(7)]);
var inst_58530 = cljs.core.first(inst_58527);
var state_58550__$1 = state_58550;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58550__$1,(7),ch,inst_58530);
} else {
if((state_val_58551 === (13))){
var inst_58544 = (state_58550[(2)]);
var state_58550__$1 = state_58550;
var statearr_58555_59748 = state_58550__$1;
(statearr_58555_59748[(2)] = inst_58544);

(statearr_58555_59748[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58551 === (6))){
var inst_58535 = (state_58550[(2)]);
var state_58550__$1 = state_58550;
if(cljs.core.truth_(inst_58535)){
var statearr_58556_59749 = state_58550__$1;
(statearr_58556_59749[(1)] = (8));

} else {
var statearr_58557_59750 = state_58550__$1;
(statearr_58557_59750[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58551 === (3))){
var inst_58548 = (state_58550[(2)]);
var state_58550__$1 = state_58550;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58550__$1,inst_58548);
} else {
if((state_val_58551 === (12))){
var state_58550__$1 = state_58550;
var statearr_58558_59751 = state_58550__$1;
(statearr_58558_59751[(2)] = null);

(statearr_58558_59751[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58551 === (2))){
var inst_58527 = (state_58550[(7)]);
var state_58550__$1 = state_58550;
if(cljs.core.truth_(inst_58527)){
var statearr_58559_59752 = state_58550__$1;
(statearr_58559_59752[(1)] = (4));

} else {
var statearr_58560_59753 = state_58550__$1;
(statearr_58560_59753[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58551 === (11))){
var inst_58541 = cljs.core.async.close_BANG_(ch);
var state_58550__$1 = state_58550;
var statearr_58561_59754 = state_58550__$1;
(statearr_58561_59754[(2)] = inst_58541);

(statearr_58561_59754[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58551 === (9))){
var state_58550__$1 = state_58550;
if(cljs.core.truth_(close_QMARK_)){
var statearr_58562_59755 = state_58550__$1;
(statearr_58562_59755[(1)] = (11));

} else {
var statearr_58563_59756 = state_58550__$1;
(statearr_58563_59756[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58551 === (5))){
var inst_58527 = (state_58550[(7)]);
var state_58550__$1 = state_58550;
var statearr_58564_59757 = state_58550__$1;
(statearr_58564_59757[(2)] = inst_58527);

(statearr_58564_59757[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58551 === (10))){
var inst_58546 = (state_58550[(2)]);
var state_58550__$1 = state_58550;
var statearr_58565_59758 = state_58550__$1;
(statearr_58565_59758[(2)] = inst_58546);

(statearr_58565_59758[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58551 === (8))){
var inst_58527 = (state_58550[(7)]);
var inst_58537 = cljs.core.next(inst_58527);
var inst_58527__$1 = inst_58537;
var state_58550__$1 = (function (){var statearr_58566 = state_58550;
(statearr_58566[(7)] = inst_58527__$1);

return statearr_58566;
})();
var statearr_58567_59759 = state_58550__$1;
(statearr_58567_59759[(2)] = null);

(statearr_58567_59759[(1)] = (2));


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
var cljs$core$async$state_machine__57895__auto__ = null;
var cljs$core$async$state_machine__57895__auto____0 = (function (){
var statearr_58568 = [null,null,null,null,null,null,null,null];
(statearr_58568[(0)] = cljs$core$async$state_machine__57895__auto__);

(statearr_58568[(1)] = (1));

return statearr_58568;
});
var cljs$core$async$state_machine__57895__auto____1 = (function (state_58550){
while(true){
var ret_value__57896__auto__ = (function (){try{while(true){
var result__57897__auto__ = switch__57894__auto__(state_58550);
if(cljs.core.keyword_identical_QMARK_(result__57897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57897__auto__;
}
break;
}
}catch (e58569){var ex__57898__auto__ = e58569;
var statearr_58570_59761 = state_58550;
(statearr_58570_59761[(2)] = ex__57898__auto__);


if(cljs.core.seq((state_58550[(4)]))){
var statearr_58571_59763 = state_58550;
(statearr_58571_59763[(1)] = cljs.core.first((state_58550[(4)])));

} else {
throw ex__57898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59764 = state_58550;
state_58550 = G__59764;
continue;
} else {
return ret_value__57896__auto__;
}
break;
}
});
cljs$core$async$state_machine__57895__auto__ = function(state_58550){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57895__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57895__auto____1.call(this,state_58550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__57895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57895__auto____0;
cljs$core$async$state_machine__57895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57895__auto____1;
return cljs$core$async$state_machine__57895__auto__;
})()
})();
var state__58098__auto__ = (function (){var statearr_58572 = f__58097__auto__();
(statearr_58572[(6)] = c__58096__auto__);

return statearr_58572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58098__auto__);
}));

return c__58096__auto__;
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
var G__58574 = arguments.length;
switch (G__58574) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_59767 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_59767(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_59768 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_59768(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_59769 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_59769(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_59770 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_59770(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58575 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58575 = (function (ch,cs,meta58576){
this.ch = ch;
this.cs = cs;
this.meta58576 = meta58576;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58577,meta58576__$1){
var self__ = this;
var _58577__$1 = this;
return (new cljs.core.async.t_cljs$core$async58575(self__.ch,self__.cs,meta58576__$1));
}));

(cljs.core.async.t_cljs$core$async58575.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58577){
var self__ = this;
var _58577__$1 = this;
return self__.meta58576;
}));

(cljs.core.async.t_cljs$core$async58575.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58575.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async58575.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58575.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async58575.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async58575.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async58575.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta58576","meta58576",176843173,null)], null);
}));

(cljs.core.async.t_cljs$core$async58575.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58575.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58575");

(cljs.core.async.t_cljs$core$async58575.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async58575");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58575.
 */
cljs.core.async.__GT_t_cljs$core$async58575 = (function cljs$core$async$mult_$___GT_t_cljs$core$async58575(ch__$1,cs__$1,meta58576){
return (new cljs.core.async.t_cljs$core$async58575(ch__$1,cs__$1,meta58576));
});

}

return (new cljs.core.async.t_cljs$core$async58575(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__58096__auto___59773 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58097__auto__ = (function (){var switch__57894__auto__ = (function (state_58710){
var state_val_58711 = (state_58710[(1)]);
if((state_val_58711 === (7))){
var inst_58706 = (state_58710[(2)]);
var state_58710__$1 = state_58710;
var statearr_58712_59774 = state_58710__$1;
(statearr_58712_59774[(2)] = inst_58706);

(statearr_58712_59774[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58711 === (20))){
var inst_58611 = (state_58710[(7)]);
var inst_58623 = cljs.core.first(inst_58611);
var inst_58624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58623,(0),null);
var inst_58625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58623,(1),null);
var state_58710__$1 = (function (){var statearr_58713 = state_58710;
(statearr_58713[(8)] = inst_58624);

return statearr_58713;
})();
if(cljs.core.truth_(inst_58625)){
var statearr_58714_59775 = state_58710__$1;
(statearr_58714_59775[(1)] = (22));

} else {
var statearr_58715_59776 = state_58710__$1;
(statearr_58715_59776[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58711 === (27))){
var inst_58580 = (state_58710[(9)]);
var inst_58660 = (state_58710[(10)]);
var inst_58653 = (state_58710[(11)]);
var inst_58655 = (state_58710[(12)]);
var inst_58660__$1 = cljs.core._nth(inst_58653,inst_58655);
var inst_58661 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_58660__$1,inst_58580,done);
var state_58710__$1 = (function (){var statearr_58716 = state_58710;
(statearr_58716[(10)] = inst_58660__$1);

return statearr_58716;
})();
if(cljs.core.truth_(inst_58661)){
var statearr_58717_59777 = state_58710__$1;
(statearr_58717_59777[(1)] = (30));

} else {
var statearr_58718_59778 = state_58710__$1;
(statearr_58718_59778[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58711 === (1))){
var state_58710__$1 = state_58710;
var statearr_58719_59779 = state_58710__$1;
(statearr_58719_59779[(2)] = null);

(statearr_58719_59779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58711 === (24))){
var inst_58611 = (state_58710[(7)]);
var inst_58630 = (state_58710[(2)]);
var inst_58631 = cljs.core.next(inst_58611);
var inst_58589 = inst_58631;
var inst_58590 = null;
var inst_58591 = (0);
var inst_58592 = (0);
var state_58710__$1 = (function (){var statearr_58720 = state_58710;
(statearr_58720[(13)] = inst_58589);

(statearr_58720[(14)] = inst_58630);

(statearr_58720[(15)] = inst_58590);

(statearr_58720[(16)] = inst_58592);

(statearr_58720[(17)] = inst_58591);

return statearr_58720;
})();
var statearr_58721_59780 = state_58710__$1;
(statearr_58721_59780[(2)] = null);

(statearr_58721_59780[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58711 === (39))){
var state_58710__$1 = state_58710;
var statearr_58725_59781 = state_58710__$1;
(statearr_58725_59781[(2)] = null);

(statearr_58725_59781[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58711 === (4))){
var inst_58580 = (state_58710[(9)]);
var inst_58580__$1 = (state_58710[(2)]);
var inst_58581 = (inst_58580__$1 == null);
var state_58710__$1 = (function (){var statearr_58726 = state_58710;
(statearr_58726[(9)] = inst_58580__$1);

return statearr_58726;
})();
if(cljs.core.truth_(inst_58581)){
var statearr_58727_59782 = state_58710__$1;
(statearr_58727_59782[(1)] = (5));

} else {
var statearr_58728_59783 = state_58710__$1;
(statearr_58728_59783[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58711 === (15))){
var inst_58589 = (state_58710[(13)]);
var inst_58590 = (state_58710[(15)]);
var inst_58592 = (state_58710[(16)]);
var inst_58591 = (state_58710[(17)]);
var inst_58607 = (state_58710[(2)]);
var inst_58608 = (inst_58592 + (1));
var tmp58722 = inst_58589;
var tmp58723 = inst_58590;
var tmp58724 = inst_58591;
var inst_58589__$1 = tmp58722;
var inst_58590__$1 = tmp58723;
var inst_58591__$1 = tmp58724;
var inst_58592__$1 = inst_58608;
var state_58710__$1 = (function (){var statearr_58729 = state_58710;
(statearr_58729[(13)] = inst_58589__$1);

(statearr_58729[(18)] = inst_58607);

(statearr_58729[(15)] = inst_58590__$1);

(statearr_58729[(16)] = inst_58592__$1);

(statearr_58729[(17)] = inst_58591__$1);

return statearr_58729;
})();
var statearr_58730_59784 = state_58710__$1;
(statearr_58730_59784[(2)] = null);

(statearr_58730_59784[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58711 === (21))){
var inst_58634 = (state_58710[(2)]);
var state_58710__$1 = state_58710;
var statearr_58734_59785 = state_58710__$1;
(statearr_58734_59785[(2)] = inst_58634);

(statearr_58734_59785[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58711 === (31))){
var inst_58660 = (state_58710[(10)]);
var inst_58664 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_58660);
var state_58710__$1 = state_58710;
var statearr_58735_59786 = state_58710__$1;
(statearr_58735_59786[(2)] = inst_58664);

(statearr_58735_59786[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58711 === (32))){
var inst_58654 = (state_58710[(19)]);
var inst_58652 = (state_58710[(20)]);
var inst_58653 = (state_58710[(11)]);
var inst_58655 = (state_58710[(12)]);
var inst_58666 = (state_58710[(2)]);
var inst_58667 = (inst_58655 + (1));
var tmp58731 = inst_58654;
var tmp58732 = inst_58652;
var tmp58733 = inst_58653;
var inst_58652__$1 = tmp58732;
var inst_58653__$1 = tmp58733;
var inst_58654__$1 = tmp58731;
var inst_58655__$1 = inst_58667;
var state_58710__$1 = (function (){var statearr_58736 = state_58710;
(statearr_58736[(19)] = inst_58654__$1);

(statearr_58736[(20)] = inst_58652__$1);

(statearr_58736[(21)] = inst_58666);

(statearr_58736[(11)] = inst_58653__$1);

(statearr_58736[(12)] = inst_58655__$1);

return statearr_58736;
})();
var statearr_58737_59787 = state_58710__$1;
(statearr_58737_59787[(2)] = null);

(statearr_58737_59787[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58711 === (40))){
var inst_58679 = (state_58710[(22)]);
var inst_58683 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_58679);
var state_58710__$1 = state_58710;
var statearr_58738_59788 = state_58710__$1;
(statearr_58738_59788[(2)] = inst_58683);

(statearr_58738_59788[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58711 === (33))){
var inst_58670 = (state_58710[(23)]);
var inst_58672 = cljs.core.chunked_seq_QMARK_(inst_58670);
var state_58710__$1 = state_58710;
if(inst_58672){
var statearr_58739_59789 = state_58710__$1;
(statearr_58739_59789[(1)] = (36));

} else {
var statearr_58740_59790 = state_58710__$1;
(statearr_58740_59790[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58711 === (13))){
var inst_58601 = (state_58710[(24)]);
var inst_58604 = cljs.core.async.close_BANG_(inst_58601);
var state_58710__$1 = state_58710;
var statearr_58741_59791 = state_58710__$1;
(statearr_58741_59791[(2)] = inst_58604);

(statearr_58741_59791[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58711 === (22))){
var inst_58624 = (state_58710[(8)]);
var inst_58627 = cljs.core.async.close_BANG_(inst_58624);
var state_58710__$1 = state_58710;
var statearr_58742_59792 = state_58710__$1;
(statearr_58742_59792[(2)] = inst_58627);

(statearr_58742_59792[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58711 === (36))){
var inst_58670 = (state_58710[(23)]);
var inst_58674 = cljs.core.chunk_first(inst_58670);
var inst_58675 = cljs.core.chunk_rest(inst_58670);
var inst_58676 = cljs.core.count(inst_58674);
var inst_58652 = inst_58675;
var inst_58653 = inst_58674;
var inst_58654 = inst_58676;
var inst_58655 = (0);
var state_58710__$1 = (function (){var statearr_58743 = state_58710;
(statearr_58743[(19)] = inst_58654);

(statearr_58743[(20)] = inst_58652);

(statearr_58743[(11)] = inst_58653);

(statearr_58743[(12)] = inst_58655);

return statearr_58743;
})();
var statearr_58744_59795 = state_58710__$1;
(statearr_58744_59795[(2)] = null);

(statearr_58744_59795[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58711 === (41))){
var inst_58670 = (state_58710[(23)]);
var inst_58685 = (state_58710[(2)]);
var inst_58686 = cljs.core.next(inst_58670);
var inst_58652 = inst_58686;
var inst_58653 = null;
var inst_58654 = (0);
var inst_58655 = (0);
var state_58710__$1 = (function (){var statearr_58745 = state_58710;
(statearr_58745[(19)] = inst_58654);

(statearr_58745[(20)] = inst_58652);

(statearr_58745[(25)] = inst_58685);

(statearr_58745[(11)] = inst_58653);

(statearr_58745[(12)] = inst_58655);

return statearr_58745;
})();
var statearr_58746_59796 = state_58710__$1;
(statearr_58746_59796[(2)] = null);

(statearr_58746_59796[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58711 === (43))){
var state_58710__$1 = state_58710;
var statearr_58747_59797 = state_58710__$1;
(statearr_58747_59797[(2)] = null);

(statearr_58747_59797[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58711 === (29))){
var inst_58694 = (state_58710[(2)]);
var state_58710__$1 = state_58710;
var statearr_58748_59798 = state_58710__$1;
(statearr_58748_59798[(2)] = inst_58694);

(statearr_58748_59798[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58711 === (44))){
var inst_58703 = (state_58710[(2)]);
var state_58710__$1 = (function (){var statearr_58749 = state_58710;
(statearr_58749[(26)] = inst_58703);

return statearr_58749;
})();
var statearr_58750_59799 = state_58710__$1;
(statearr_58750_59799[(2)] = null);

(statearr_58750_59799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58711 === (6))){
var inst_58644 = (state_58710[(27)]);
var inst_58643 = cljs.core.deref(cs);
var inst_58644__$1 = cljs.core.keys(inst_58643);
var inst_58645 = cljs.core.count(inst_58644__$1);
var inst_58646 = cljs.core.reset_BANG_(dctr,inst_58645);
var inst_58651 = cljs.core.seq(inst_58644__$1);
var inst_58652 = inst_58651;
var inst_58653 = null;
var inst_58654 = (0);
var inst_58655 = (0);
var state_58710__$1 = (function (){var statearr_58751 = state_58710;
(statearr_58751[(19)] = inst_58654);

(statearr_58751[(20)] = inst_58652);

(statearr_58751[(27)] = inst_58644__$1);

(statearr_58751[(11)] = inst_58653);

(statearr_58751[(28)] = inst_58646);

(statearr_58751[(12)] = inst_58655);

return statearr_58751;
})();
var statearr_58752_59800 = state_58710__$1;
(statearr_58752_59800[(2)] = null);

(statearr_58752_59800[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58711 === (28))){
var inst_58652 = (state_58710[(20)]);
var inst_58670 = (state_58710[(23)]);
var inst_58670__$1 = cljs.core.seq(inst_58652);
var state_58710__$1 = (function (){var statearr_58753 = state_58710;
(statearr_58753[(23)] = inst_58670__$1);

return statearr_58753;
})();
if(inst_58670__$1){
var statearr_58754_59801 = state_58710__$1;
(statearr_58754_59801[(1)] = (33));

} else {
var statearr_58755_59802 = state_58710__$1;
(statearr_58755_59802[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58711 === (25))){
var inst_58654 = (state_58710[(19)]);
var inst_58655 = (state_58710[(12)]);
var inst_58657 = (inst_58655 < inst_58654);
var inst_58658 = inst_58657;
var state_58710__$1 = state_58710;
if(cljs.core.truth_(inst_58658)){
var statearr_58756_59804 = state_58710__$1;
(statearr_58756_59804[(1)] = (27));

} else {
var statearr_58757_59805 = state_58710__$1;
(statearr_58757_59805[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58711 === (34))){
var state_58710__$1 = state_58710;
var statearr_58758_59806 = state_58710__$1;
(statearr_58758_59806[(2)] = null);

(statearr_58758_59806[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58711 === (17))){
var state_58710__$1 = state_58710;
var statearr_58759_59807 = state_58710__$1;
(statearr_58759_59807[(2)] = null);

(statearr_58759_59807[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58711 === (3))){
var inst_58708 = (state_58710[(2)]);
var state_58710__$1 = state_58710;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58710__$1,inst_58708);
} else {
if((state_val_58711 === (12))){
var inst_58639 = (state_58710[(2)]);
var state_58710__$1 = state_58710;
var statearr_58760_59808 = state_58710__$1;
(statearr_58760_59808[(2)] = inst_58639);

(statearr_58760_59808[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58711 === (2))){
var state_58710__$1 = state_58710;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58710__$1,(4),ch);
} else {
if((state_val_58711 === (23))){
var state_58710__$1 = state_58710;
var statearr_58761_59809 = state_58710__$1;
(statearr_58761_59809[(2)] = null);

(statearr_58761_59809[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58711 === (35))){
var inst_58692 = (state_58710[(2)]);
var state_58710__$1 = state_58710;
var statearr_58762_59810 = state_58710__$1;
(statearr_58762_59810[(2)] = inst_58692);

(statearr_58762_59810[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58711 === (19))){
var inst_58611 = (state_58710[(7)]);
var inst_58615 = cljs.core.chunk_first(inst_58611);
var inst_58616 = cljs.core.chunk_rest(inst_58611);
var inst_58617 = cljs.core.count(inst_58615);
var inst_58589 = inst_58616;
var inst_58590 = inst_58615;
var inst_58591 = inst_58617;
var inst_58592 = (0);
var state_58710__$1 = (function (){var statearr_58763 = state_58710;
(statearr_58763[(13)] = inst_58589);

(statearr_58763[(15)] = inst_58590);

(statearr_58763[(16)] = inst_58592);

(statearr_58763[(17)] = inst_58591);

return statearr_58763;
})();
var statearr_58764_59815 = state_58710__$1;
(statearr_58764_59815[(2)] = null);

(statearr_58764_59815[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58711 === (11))){
var inst_58589 = (state_58710[(13)]);
var inst_58611 = (state_58710[(7)]);
var inst_58611__$1 = cljs.core.seq(inst_58589);
var state_58710__$1 = (function (){var statearr_58765 = state_58710;
(statearr_58765[(7)] = inst_58611__$1);

return statearr_58765;
})();
if(inst_58611__$1){
var statearr_58766_59816 = state_58710__$1;
(statearr_58766_59816[(1)] = (16));

} else {
var statearr_58767_59817 = state_58710__$1;
(statearr_58767_59817[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58711 === (9))){
var inst_58641 = (state_58710[(2)]);
var state_58710__$1 = state_58710;
var statearr_58768_59818 = state_58710__$1;
(statearr_58768_59818[(2)] = inst_58641);

(statearr_58768_59818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58711 === (5))){
var inst_58587 = cljs.core.deref(cs);
var inst_58588 = cljs.core.seq(inst_58587);
var inst_58589 = inst_58588;
var inst_58590 = null;
var inst_58591 = (0);
var inst_58592 = (0);
var state_58710__$1 = (function (){var statearr_58769 = state_58710;
(statearr_58769[(13)] = inst_58589);

(statearr_58769[(15)] = inst_58590);

(statearr_58769[(16)] = inst_58592);

(statearr_58769[(17)] = inst_58591);

return statearr_58769;
})();
var statearr_58770_59819 = state_58710__$1;
(statearr_58770_59819[(2)] = null);

(statearr_58770_59819[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58711 === (14))){
var state_58710__$1 = state_58710;
var statearr_58771_59820 = state_58710__$1;
(statearr_58771_59820[(2)] = null);

(statearr_58771_59820[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58711 === (45))){
var inst_58700 = (state_58710[(2)]);
var state_58710__$1 = state_58710;
var statearr_58772_59821 = state_58710__$1;
(statearr_58772_59821[(2)] = inst_58700);

(statearr_58772_59821[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58711 === (26))){
var inst_58644 = (state_58710[(27)]);
var inst_58696 = (state_58710[(2)]);
var inst_58697 = cljs.core.seq(inst_58644);
var state_58710__$1 = (function (){var statearr_58773 = state_58710;
(statearr_58773[(29)] = inst_58696);

return statearr_58773;
})();
if(inst_58697){
var statearr_58774_59822 = state_58710__$1;
(statearr_58774_59822[(1)] = (42));

} else {
var statearr_58775_59823 = state_58710__$1;
(statearr_58775_59823[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58711 === (16))){
var inst_58611 = (state_58710[(7)]);
var inst_58613 = cljs.core.chunked_seq_QMARK_(inst_58611);
var state_58710__$1 = state_58710;
if(inst_58613){
var statearr_58776_59824 = state_58710__$1;
(statearr_58776_59824[(1)] = (19));

} else {
var statearr_58777_59825 = state_58710__$1;
(statearr_58777_59825[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58711 === (38))){
var inst_58689 = (state_58710[(2)]);
var state_58710__$1 = state_58710;
var statearr_58778_59826 = state_58710__$1;
(statearr_58778_59826[(2)] = inst_58689);

(statearr_58778_59826[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58711 === (30))){
var state_58710__$1 = state_58710;
var statearr_58779_59827 = state_58710__$1;
(statearr_58779_59827[(2)] = null);

(statearr_58779_59827[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58711 === (10))){
var inst_58590 = (state_58710[(15)]);
var inst_58592 = (state_58710[(16)]);
var inst_58600 = cljs.core._nth(inst_58590,inst_58592);
var inst_58601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58600,(0),null);
var inst_58602 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58600,(1),null);
var state_58710__$1 = (function (){var statearr_58780 = state_58710;
(statearr_58780[(24)] = inst_58601);

return statearr_58780;
})();
if(cljs.core.truth_(inst_58602)){
var statearr_58781_59828 = state_58710__$1;
(statearr_58781_59828[(1)] = (13));

} else {
var statearr_58782_59829 = state_58710__$1;
(statearr_58782_59829[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58711 === (18))){
var inst_58637 = (state_58710[(2)]);
var state_58710__$1 = state_58710;
var statearr_58783_59830 = state_58710__$1;
(statearr_58783_59830[(2)] = inst_58637);

(statearr_58783_59830[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58711 === (42))){
var state_58710__$1 = state_58710;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58710__$1,(45),dchan);
} else {
if((state_val_58711 === (37))){
var inst_58580 = (state_58710[(9)]);
var inst_58670 = (state_58710[(23)]);
var inst_58679 = (state_58710[(22)]);
var inst_58679__$1 = cljs.core.first(inst_58670);
var inst_58680 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_58679__$1,inst_58580,done);
var state_58710__$1 = (function (){var statearr_58784 = state_58710;
(statearr_58784[(22)] = inst_58679__$1);

return statearr_58784;
})();
if(cljs.core.truth_(inst_58680)){
var statearr_58785_59831 = state_58710__$1;
(statearr_58785_59831[(1)] = (39));

} else {
var statearr_58786_59832 = state_58710__$1;
(statearr_58786_59832[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58711 === (8))){
var inst_58592 = (state_58710[(16)]);
var inst_58591 = (state_58710[(17)]);
var inst_58594 = (inst_58592 < inst_58591);
var inst_58595 = inst_58594;
var state_58710__$1 = state_58710;
if(cljs.core.truth_(inst_58595)){
var statearr_58787_59833 = state_58710__$1;
(statearr_58787_59833[(1)] = (10));

} else {
var statearr_58788_59834 = state_58710__$1;
(statearr_58788_59834[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__57895__auto__ = null;
var cljs$core$async$mult_$_state_machine__57895__auto____0 = (function (){
var statearr_58789 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58789[(0)] = cljs$core$async$mult_$_state_machine__57895__auto__);

(statearr_58789[(1)] = (1));

return statearr_58789;
});
var cljs$core$async$mult_$_state_machine__57895__auto____1 = (function (state_58710){
while(true){
var ret_value__57896__auto__ = (function (){try{while(true){
var result__57897__auto__ = switch__57894__auto__(state_58710);
if(cljs.core.keyword_identical_QMARK_(result__57897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57897__auto__;
}
break;
}
}catch (e58790){var ex__57898__auto__ = e58790;
var statearr_58791_59835 = state_58710;
(statearr_58791_59835[(2)] = ex__57898__auto__);


if(cljs.core.seq((state_58710[(4)]))){
var statearr_58792_59836 = state_58710;
(statearr_58792_59836[(1)] = cljs.core.first((state_58710[(4)])));

} else {
throw ex__57898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59837 = state_58710;
state_58710 = G__59837;
continue;
} else {
return ret_value__57896__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__57895__auto__ = function(state_58710){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__57895__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__57895__auto____1.call(this,state_58710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__57895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__57895__auto____0;
cljs$core$async$mult_$_state_machine__57895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__57895__auto____1;
return cljs$core$async$mult_$_state_machine__57895__auto__;
})()
})();
var state__58098__auto__ = (function (){var statearr_58793 = f__58097__auto__();
(statearr_58793[(6)] = c__58096__auto___59773);

return statearr_58793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58098__auto__);
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
var G__58795 = arguments.length;
switch (G__58795) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_59839 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_59839(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_59840 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_59840(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_59841 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_59841(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_59842 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_59842(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_59843 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_59843(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___59844 = arguments.length;
var i__4865__auto___59845 = (0);
while(true){
if((i__4865__auto___59845 < len__4864__auto___59844)){
args__4870__auto__.push((arguments[i__4865__auto___59845]));

var G__59846 = (i__4865__auto___59845 + (1));
i__4865__auto___59845 = G__59846;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__58800){
var map__58801 = p__58800;
var map__58801__$1 = cljs.core.__destructure_map(map__58801);
var opts = map__58801__$1;
var statearr_58802_59849 = state;
(statearr_58802_59849[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_58803_59850 = state;
(statearr_58803_59850[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_58804_59851 = state;
(statearr_58804_59851[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq58796){
var G__58797 = cljs.core.first(seq58796);
var seq58796__$1 = cljs.core.next(seq58796);
var G__58798 = cljs.core.first(seq58796__$1);
var seq58796__$2 = cljs.core.next(seq58796__$1);
var G__58799 = cljs.core.first(seq58796__$2);
var seq58796__$3 = cljs.core.next(seq58796__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58797,G__58798,G__58799,seq58796__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58805 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58805 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta58806){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta58806 = meta58806;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58805.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58807,meta58806__$1){
var self__ = this;
var _58807__$1 = this;
return (new cljs.core.async.t_cljs$core$async58805(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta58806__$1));
}));

(cljs.core.async.t_cljs$core$async58805.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58807){
var self__ = this;
var _58807__$1 = this;
return self__.meta58806;
}));

(cljs.core.async.t_cljs$core$async58805.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58805.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async58805.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58805.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async58805.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async58805.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async58805.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async58805.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async58805.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta58806","meta58806",181498646,null)], null);
}));

(cljs.core.async.t_cljs$core$async58805.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58805.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58805");

(cljs.core.async.t_cljs$core$async58805.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async58805");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58805.
 */
cljs.core.async.__GT_t_cljs$core$async58805 = (function cljs$core$async$mix_$___GT_t_cljs$core$async58805(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta58806){
return (new cljs.core.async.t_cljs$core$async58805(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta58806));
});

}

return (new cljs.core.async.t_cljs$core$async58805(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__58096__auto___59852 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58097__auto__ = (function (){var switch__57894__auto__ = (function (state_58875){
var state_val_58876 = (state_58875[(1)]);
if((state_val_58876 === (7))){
var inst_58835 = (state_58875[(2)]);
var state_58875__$1 = state_58875;
if(cljs.core.truth_(inst_58835)){
var statearr_58877_59853 = state_58875__$1;
(statearr_58877_59853[(1)] = (8));

} else {
var statearr_58878_59854 = state_58875__$1;
(statearr_58878_59854[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58876 === (20))){
var inst_58828 = (state_58875[(7)]);
var state_58875__$1 = state_58875;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58875__$1,(23),out,inst_58828);
} else {
if((state_val_58876 === (1))){
var inst_58811 = calc_state();
var inst_58812 = cljs.core.__destructure_map(inst_58811);
var inst_58813 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58812,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_58814 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58812,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_58815 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58812,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_58816 = inst_58811;
var state_58875__$1 = (function (){var statearr_58879 = state_58875;
(statearr_58879[(8)] = inst_58815);

(statearr_58879[(9)] = inst_58816);

(statearr_58879[(10)] = inst_58813);

(statearr_58879[(11)] = inst_58814);

return statearr_58879;
})();
var statearr_58880_59855 = state_58875__$1;
(statearr_58880_59855[(2)] = null);

(statearr_58880_59855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58876 === (24))){
var inst_58819 = (state_58875[(12)]);
var inst_58816 = inst_58819;
var state_58875__$1 = (function (){var statearr_58881 = state_58875;
(statearr_58881[(9)] = inst_58816);

return statearr_58881;
})();
var statearr_58882_59856 = state_58875__$1;
(statearr_58882_59856[(2)] = null);

(statearr_58882_59856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58876 === (4))){
var inst_58830 = (state_58875[(13)]);
var inst_58828 = (state_58875[(7)]);
var inst_58827 = (state_58875[(2)]);
var inst_58828__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58827,(0),null);
var inst_58829 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58827,(1),null);
var inst_58830__$1 = (inst_58828__$1 == null);
var state_58875__$1 = (function (){var statearr_58883 = state_58875;
(statearr_58883[(14)] = inst_58829);

(statearr_58883[(13)] = inst_58830__$1);

(statearr_58883[(7)] = inst_58828__$1);

return statearr_58883;
})();
if(cljs.core.truth_(inst_58830__$1)){
var statearr_58884_59861 = state_58875__$1;
(statearr_58884_59861[(1)] = (5));

} else {
var statearr_58885_59862 = state_58875__$1;
(statearr_58885_59862[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58876 === (15))){
var inst_58820 = (state_58875[(15)]);
var inst_58849 = (state_58875[(16)]);
var inst_58849__$1 = cljs.core.empty_QMARK_(inst_58820);
var state_58875__$1 = (function (){var statearr_58886 = state_58875;
(statearr_58886[(16)] = inst_58849__$1);

return statearr_58886;
})();
if(inst_58849__$1){
var statearr_58887_59875 = state_58875__$1;
(statearr_58887_59875[(1)] = (17));

} else {
var statearr_58888_59876 = state_58875__$1;
(statearr_58888_59876[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58876 === (21))){
var inst_58819 = (state_58875[(12)]);
var inst_58816 = inst_58819;
var state_58875__$1 = (function (){var statearr_58889 = state_58875;
(statearr_58889[(9)] = inst_58816);

return statearr_58889;
})();
var statearr_58890_59877 = state_58875__$1;
(statearr_58890_59877[(2)] = null);

(statearr_58890_59877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58876 === (13))){
var inst_58842 = (state_58875[(2)]);
var inst_58843 = calc_state();
var inst_58816 = inst_58843;
var state_58875__$1 = (function (){var statearr_58891 = state_58875;
(statearr_58891[(17)] = inst_58842);

(statearr_58891[(9)] = inst_58816);

return statearr_58891;
})();
var statearr_58892_59878 = state_58875__$1;
(statearr_58892_59878[(2)] = null);

(statearr_58892_59878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58876 === (22))){
var inst_58869 = (state_58875[(2)]);
var state_58875__$1 = state_58875;
var statearr_58893_59879 = state_58875__$1;
(statearr_58893_59879[(2)] = inst_58869);

(statearr_58893_59879[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58876 === (6))){
var inst_58829 = (state_58875[(14)]);
var inst_58833 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_58829,change);
var state_58875__$1 = state_58875;
var statearr_58894_59880 = state_58875__$1;
(statearr_58894_59880[(2)] = inst_58833);

(statearr_58894_59880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58876 === (25))){
var state_58875__$1 = state_58875;
var statearr_58895_59881 = state_58875__$1;
(statearr_58895_59881[(2)] = null);

(statearr_58895_59881[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58876 === (17))){
var inst_58829 = (state_58875[(14)]);
var inst_58821 = (state_58875[(18)]);
var inst_58851 = (inst_58821.cljs$core$IFn$_invoke$arity$1 ? inst_58821.cljs$core$IFn$_invoke$arity$1(inst_58829) : inst_58821.call(null,inst_58829));
var inst_58852 = cljs.core.not(inst_58851);
var state_58875__$1 = state_58875;
var statearr_58896_59882 = state_58875__$1;
(statearr_58896_59882[(2)] = inst_58852);

(statearr_58896_59882[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58876 === (3))){
var inst_58873 = (state_58875[(2)]);
var state_58875__$1 = state_58875;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58875__$1,inst_58873);
} else {
if((state_val_58876 === (12))){
var state_58875__$1 = state_58875;
var statearr_58897_59883 = state_58875__$1;
(statearr_58897_59883[(2)] = null);

(statearr_58897_59883[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58876 === (2))){
var inst_58816 = (state_58875[(9)]);
var inst_58819 = (state_58875[(12)]);
var inst_58819__$1 = cljs.core.__destructure_map(inst_58816);
var inst_58820 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58819__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_58821 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58819__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_58822 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58819__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_58875__$1 = (function (){var statearr_58898 = state_58875;
(statearr_58898[(15)] = inst_58820);

(statearr_58898[(18)] = inst_58821);

(statearr_58898[(12)] = inst_58819__$1);

return statearr_58898;
})();
return cljs.core.async.ioc_alts_BANG_(state_58875__$1,(4),inst_58822);
} else {
if((state_val_58876 === (23))){
var inst_58860 = (state_58875[(2)]);
var state_58875__$1 = state_58875;
if(cljs.core.truth_(inst_58860)){
var statearr_58899_59884 = state_58875__$1;
(statearr_58899_59884[(1)] = (24));

} else {
var statearr_58900_59885 = state_58875__$1;
(statearr_58900_59885[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58876 === (19))){
var inst_58855 = (state_58875[(2)]);
var state_58875__$1 = state_58875;
var statearr_58901_59886 = state_58875__$1;
(statearr_58901_59886[(2)] = inst_58855);

(statearr_58901_59886[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58876 === (11))){
var inst_58829 = (state_58875[(14)]);
var inst_58839 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_58829);
var state_58875__$1 = state_58875;
var statearr_58902_59887 = state_58875__$1;
(statearr_58902_59887[(2)] = inst_58839);

(statearr_58902_59887[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58876 === (9))){
var inst_58820 = (state_58875[(15)]);
var inst_58829 = (state_58875[(14)]);
var inst_58846 = (state_58875[(19)]);
var inst_58846__$1 = (inst_58820.cljs$core$IFn$_invoke$arity$1 ? inst_58820.cljs$core$IFn$_invoke$arity$1(inst_58829) : inst_58820.call(null,inst_58829));
var state_58875__$1 = (function (){var statearr_58903 = state_58875;
(statearr_58903[(19)] = inst_58846__$1);

return statearr_58903;
})();
if(cljs.core.truth_(inst_58846__$1)){
var statearr_58904_59888 = state_58875__$1;
(statearr_58904_59888[(1)] = (14));

} else {
var statearr_58905_59889 = state_58875__$1;
(statearr_58905_59889[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58876 === (5))){
var inst_58830 = (state_58875[(13)]);
var state_58875__$1 = state_58875;
var statearr_58906_59890 = state_58875__$1;
(statearr_58906_59890[(2)] = inst_58830);

(statearr_58906_59890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58876 === (14))){
var inst_58846 = (state_58875[(19)]);
var state_58875__$1 = state_58875;
var statearr_58907_59891 = state_58875__$1;
(statearr_58907_59891[(2)] = inst_58846);

(statearr_58907_59891[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58876 === (26))){
var inst_58865 = (state_58875[(2)]);
var state_58875__$1 = state_58875;
var statearr_58908_59892 = state_58875__$1;
(statearr_58908_59892[(2)] = inst_58865);

(statearr_58908_59892[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58876 === (16))){
var inst_58857 = (state_58875[(2)]);
var state_58875__$1 = state_58875;
if(cljs.core.truth_(inst_58857)){
var statearr_58909_59893 = state_58875__$1;
(statearr_58909_59893[(1)] = (20));

} else {
var statearr_58910_59894 = state_58875__$1;
(statearr_58910_59894[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58876 === (10))){
var inst_58871 = (state_58875[(2)]);
var state_58875__$1 = state_58875;
var statearr_58911_59895 = state_58875__$1;
(statearr_58911_59895[(2)] = inst_58871);

(statearr_58911_59895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58876 === (18))){
var inst_58849 = (state_58875[(16)]);
var state_58875__$1 = state_58875;
var statearr_58912_59896 = state_58875__$1;
(statearr_58912_59896[(2)] = inst_58849);

(statearr_58912_59896[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58876 === (8))){
var inst_58828 = (state_58875[(7)]);
var inst_58837 = (inst_58828 == null);
var state_58875__$1 = state_58875;
if(cljs.core.truth_(inst_58837)){
var statearr_58913_59897 = state_58875__$1;
(statearr_58913_59897[(1)] = (11));

} else {
var statearr_58914_59899 = state_58875__$1;
(statearr_58914_59899[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__57895__auto__ = null;
var cljs$core$async$mix_$_state_machine__57895__auto____0 = (function (){
var statearr_58915 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58915[(0)] = cljs$core$async$mix_$_state_machine__57895__auto__);

(statearr_58915[(1)] = (1));

return statearr_58915;
});
var cljs$core$async$mix_$_state_machine__57895__auto____1 = (function (state_58875){
while(true){
var ret_value__57896__auto__ = (function (){try{while(true){
var result__57897__auto__ = switch__57894__auto__(state_58875);
if(cljs.core.keyword_identical_QMARK_(result__57897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57897__auto__;
}
break;
}
}catch (e58916){var ex__57898__auto__ = e58916;
var statearr_58917_59903 = state_58875;
(statearr_58917_59903[(2)] = ex__57898__auto__);


if(cljs.core.seq((state_58875[(4)]))){
var statearr_58918_59904 = state_58875;
(statearr_58918_59904[(1)] = cljs.core.first((state_58875[(4)])));

} else {
throw ex__57898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59905 = state_58875;
state_58875 = G__59905;
continue;
} else {
return ret_value__57896__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__57895__auto__ = function(state_58875){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__57895__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__57895__auto____1.call(this,state_58875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__57895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__57895__auto____0;
cljs$core$async$mix_$_state_machine__57895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__57895__auto____1;
return cljs$core$async$mix_$_state_machine__57895__auto__;
})()
})();
var state__58098__auto__ = (function (){var statearr_58919 = f__58097__auto__();
(statearr_58919[(6)] = c__58096__auto___59852);

return statearr_58919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58098__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_59906 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_59906(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_59907 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_59907(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_59920 = (function() {
var G__59921 = null;
var G__59921__1 = (function (p){
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
var G__59921__2 = (function (p,v){
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
G__59921 = function(p,v){
switch(arguments.length){
case 1:
return G__59921__1.call(this,p);
case 2:
return G__59921__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__59921.cljs$core$IFn$_invoke$arity$1 = G__59921__1;
G__59921.cljs$core$IFn$_invoke$arity$2 = G__59921__2;
return G__59921;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__58921 = arguments.length;
switch (G__58921) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_59920(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_59920(p,v);
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
var G__58924 = arguments.length;
switch (G__58924) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__58922_SHARP_){
if(cljs.core.truth_((p1__58922_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__58922_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__58922_SHARP_.call(null,topic)))){
return p1__58922_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__58922_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58925 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58925 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta58926){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta58926 = meta58926;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58925.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58927,meta58926__$1){
var self__ = this;
var _58927__$1 = this;
return (new cljs.core.async.t_cljs$core$async58925(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta58926__$1));
}));

(cljs.core.async.t_cljs$core$async58925.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58927){
var self__ = this;
var _58927__$1 = this;
return self__.meta58926;
}));

(cljs.core.async.t_cljs$core$async58925.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58925.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async58925.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58925.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async58925.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async58925.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async58925.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async58925.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta58926","meta58926",-645607081,null)], null);
}));

(cljs.core.async.t_cljs$core$async58925.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58925.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58925");

(cljs.core.async.t_cljs$core$async58925.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async58925");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58925.
 */
cljs.core.async.__GT_t_cljs$core$async58925 = (function cljs$core$async$__GT_t_cljs$core$async58925(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta58926){
return (new cljs.core.async.t_cljs$core$async58925(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta58926));
});

}

return (new cljs.core.async.t_cljs$core$async58925(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__58096__auto___59924 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58097__auto__ = (function (){var switch__57894__auto__ = (function (state_58999){
var state_val_59000 = (state_58999[(1)]);
if((state_val_59000 === (7))){
var inst_58995 = (state_58999[(2)]);
var state_58999__$1 = state_58999;
var statearr_59001_59925 = state_58999__$1;
(statearr_59001_59925[(2)] = inst_58995);

(statearr_59001_59925[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59000 === (20))){
var state_58999__$1 = state_58999;
var statearr_59002_59926 = state_58999__$1;
(statearr_59002_59926[(2)] = null);

(statearr_59002_59926[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59000 === (1))){
var state_58999__$1 = state_58999;
var statearr_59003_59927 = state_58999__$1;
(statearr_59003_59927[(2)] = null);

(statearr_59003_59927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59000 === (24))){
var inst_58978 = (state_58999[(7)]);
var inst_58987 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_58978);
var state_58999__$1 = state_58999;
var statearr_59004_59928 = state_58999__$1;
(statearr_59004_59928[(2)] = inst_58987);

(statearr_59004_59928[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59000 === (4))){
var inst_58930 = (state_58999[(8)]);
var inst_58930__$1 = (state_58999[(2)]);
var inst_58931 = (inst_58930__$1 == null);
var state_58999__$1 = (function (){var statearr_59005 = state_58999;
(statearr_59005[(8)] = inst_58930__$1);

return statearr_59005;
})();
if(cljs.core.truth_(inst_58931)){
var statearr_59006_59929 = state_58999__$1;
(statearr_59006_59929[(1)] = (5));

} else {
var statearr_59007_59930 = state_58999__$1;
(statearr_59007_59930[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59000 === (15))){
var inst_58972 = (state_58999[(2)]);
var state_58999__$1 = state_58999;
var statearr_59008_59932 = state_58999__$1;
(statearr_59008_59932[(2)] = inst_58972);

(statearr_59008_59932[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59000 === (21))){
var inst_58992 = (state_58999[(2)]);
var state_58999__$1 = (function (){var statearr_59009 = state_58999;
(statearr_59009[(9)] = inst_58992);

return statearr_59009;
})();
var statearr_59010_59933 = state_58999__$1;
(statearr_59010_59933[(2)] = null);

(statearr_59010_59933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59000 === (13))){
var inst_58954 = (state_58999[(10)]);
var inst_58956 = cljs.core.chunked_seq_QMARK_(inst_58954);
var state_58999__$1 = state_58999;
if(inst_58956){
var statearr_59011_59934 = state_58999__$1;
(statearr_59011_59934[(1)] = (16));

} else {
var statearr_59012_59935 = state_58999__$1;
(statearr_59012_59935[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59000 === (22))){
var inst_58984 = (state_58999[(2)]);
var state_58999__$1 = state_58999;
if(cljs.core.truth_(inst_58984)){
var statearr_59013_59936 = state_58999__$1;
(statearr_59013_59936[(1)] = (23));

} else {
var statearr_59014_59937 = state_58999__$1;
(statearr_59014_59937[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59000 === (6))){
var inst_58930 = (state_58999[(8)]);
var inst_58978 = (state_58999[(7)]);
var inst_58980 = (state_58999[(11)]);
var inst_58978__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_58930) : topic_fn.call(null,inst_58930));
var inst_58979 = cljs.core.deref(mults);
var inst_58980__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58979,inst_58978__$1);
var state_58999__$1 = (function (){var statearr_59015 = state_58999;
(statearr_59015[(7)] = inst_58978__$1);

(statearr_59015[(11)] = inst_58980__$1);

return statearr_59015;
})();
if(cljs.core.truth_(inst_58980__$1)){
var statearr_59016_59938 = state_58999__$1;
(statearr_59016_59938[(1)] = (19));

} else {
var statearr_59017_59939 = state_58999__$1;
(statearr_59017_59939[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59000 === (25))){
var inst_58989 = (state_58999[(2)]);
var state_58999__$1 = state_58999;
var statearr_59018_59940 = state_58999__$1;
(statearr_59018_59940[(2)] = inst_58989);

(statearr_59018_59940[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59000 === (17))){
var inst_58954 = (state_58999[(10)]);
var inst_58963 = cljs.core.first(inst_58954);
var inst_58964 = cljs.core.async.muxch_STAR_(inst_58963);
var inst_58965 = cljs.core.async.close_BANG_(inst_58964);
var inst_58966 = cljs.core.next(inst_58954);
var inst_58940 = inst_58966;
var inst_58941 = null;
var inst_58942 = (0);
var inst_58943 = (0);
var state_58999__$1 = (function (){var statearr_59019 = state_58999;
(statearr_59019[(12)] = inst_58940);

(statearr_59019[(13)] = inst_58965);

(statearr_59019[(14)] = inst_58943);

(statearr_59019[(15)] = inst_58942);

(statearr_59019[(16)] = inst_58941);

return statearr_59019;
})();
var statearr_59020_59941 = state_58999__$1;
(statearr_59020_59941[(2)] = null);

(statearr_59020_59941[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59000 === (3))){
var inst_58997 = (state_58999[(2)]);
var state_58999__$1 = state_58999;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58999__$1,inst_58997);
} else {
if((state_val_59000 === (12))){
var inst_58974 = (state_58999[(2)]);
var state_58999__$1 = state_58999;
var statearr_59021_59942 = state_58999__$1;
(statearr_59021_59942[(2)] = inst_58974);

(statearr_59021_59942[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59000 === (2))){
var state_58999__$1 = state_58999;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58999__$1,(4),ch);
} else {
if((state_val_59000 === (23))){
var state_58999__$1 = state_58999;
var statearr_59022_59943 = state_58999__$1;
(statearr_59022_59943[(2)] = null);

(statearr_59022_59943[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59000 === (19))){
var inst_58930 = (state_58999[(8)]);
var inst_58980 = (state_58999[(11)]);
var inst_58982 = cljs.core.async.muxch_STAR_(inst_58980);
var state_58999__$1 = state_58999;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58999__$1,(22),inst_58982,inst_58930);
} else {
if((state_val_59000 === (11))){
var inst_58940 = (state_58999[(12)]);
var inst_58954 = (state_58999[(10)]);
var inst_58954__$1 = cljs.core.seq(inst_58940);
var state_58999__$1 = (function (){var statearr_59023 = state_58999;
(statearr_59023[(10)] = inst_58954__$1);

return statearr_59023;
})();
if(inst_58954__$1){
var statearr_59024_59944 = state_58999__$1;
(statearr_59024_59944[(1)] = (13));

} else {
var statearr_59025_59945 = state_58999__$1;
(statearr_59025_59945[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59000 === (9))){
var inst_58976 = (state_58999[(2)]);
var state_58999__$1 = state_58999;
var statearr_59026_59946 = state_58999__$1;
(statearr_59026_59946[(2)] = inst_58976);

(statearr_59026_59946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59000 === (5))){
var inst_58937 = cljs.core.deref(mults);
var inst_58938 = cljs.core.vals(inst_58937);
var inst_58939 = cljs.core.seq(inst_58938);
var inst_58940 = inst_58939;
var inst_58941 = null;
var inst_58942 = (0);
var inst_58943 = (0);
var state_58999__$1 = (function (){var statearr_59027 = state_58999;
(statearr_59027[(12)] = inst_58940);

(statearr_59027[(14)] = inst_58943);

(statearr_59027[(15)] = inst_58942);

(statearr_59027[(16)] = inst_58941);

return statearr_59027;
})();
var statearr_59028_59947 = state_58999__$1;
(statearr_59028_59947[(2)] = null);

(statearr_59028_59947[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59000 === (14))){
var state_58999__$1 = state_58999;
var statearr_59032_59948 = state_58999__$1;
(statearr_59032_59948[(2)] = null);

(statearr_59032_59948[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59000 === (16))){
var inst_58954 = (state_58999[(10)]);
var inst_58958 = cljs.core.chunk_first(inst_58954);
var inst_58959 = cljs.core.chunk_rest(inst_58954);
var inst_58960 = cljs.core.count(inst_58958);
var inst_58940 = inst_58959;
var inst_58941 = inst_58958;
var inst_58942 = inst_58960;
var inst_58943 = (0);
var state_58999__$1 = (function (){var statearr_59033 = state_58999;
(statearr_59033[(12)] = inst_58940);

(statearr_59033[(14)] = inst_58943);

(statearr_59033[(15)] = inst_58942);

(statearr_59033[(16)] = inst_58941);

return statearr_59033;
})();
var statearr_59034_59949 = state_58999__$1;
(statearr_59034_59949[(2)] = null);

(statearr_59034_59949[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59000 === (10))){
var inst_58940 = (state_58999[(12)]);
var inst_58943 = (state_58999[(14)]);
var inst_58942 = (state_58999[(15)]);
var inst_58941 = (state_58999[(16)]);
var inst_58948 = cljs.core._nth(inst_58941,inst_58943);
var inst_58949 = cljs.core.async.muxch_STAR_(inst_58948);
var inst_58950 = cljs.core.async.close_BANG_(inst_58949);
var inst_58951 = (inst_58943 + (1));
var tmp59029 = inst_58940;
var tmp59030 = inst_58942;
var tmp59031 = inst_58941;
var inst_58940__$1 = tmp59029;
var inst_58941__$1 = tmp59031;
var inst_58942__$1 = tmp59030;
var inst_58943__$1 = inst_58951;
var state_58999__$1 = (function (){var statearr_59035 = state_58999;
(statearr_59035[(12)] = inst_58940__$1);

(statearr_59035[(17)] = inst_58950);

(statearr_59035[(14)] = inst_58943__$1);

(statearr_59035[(15)] = inst_58942__$1);

(statearr_59035[(16)] = inst_58941__$1);

return statearr_59035;
})();
var statearr_59036_59950 = state_58999__$1;
(statearr_59036_59950[(2)] = null);

(statearr_59036_59950[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59000 === (18))){
var inst_58969 = (state_58999[(2)]);
var state_58999__$1 = state_58999;
var statearr_59037_59951 = state_58999__$1;
(statearr_59037_59951[(2)] = inst_58969);

(statearr_59037_59951[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59000 === (8))){
var inst_58943 = (state_58999[(14)]);
var inst_58942 = (state_58999[(15)]);
var inst_58945 = (inst_58943 < inst_58942);
var inst_58946 = inst_58945;
var state_58999__$1 = state_58999;
if(cljs.core.truth_(inst_58946)){
var statearr_59038_59954 = state_58999__$1;
(statearr_59038_59954[(1)] = (10));

} else {
var statearr_59039_59955 = state_58999__$1;
(statearr_59039_59955[(1)] = (11));

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
var cljs$core$async$state_machine__57895__auto__ = null;
var cljs$core$async$state_machine__57895__auto____0 = (function (){
var statearr_59040 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59040[(0)] = cljs$core$async$state_machine__57895__auto__);

(statearr_59040[(1)] = (1));

return statearr_59040;
});
var cljs$core$async$state_machine__57895__auto____1 = (function (state_58999){
while(true){
var ret_value__57896__auto__ = (function (){try{while(true){
var result__57897__auto__ = switch__57894__auto__(state_58999);
if(cljs.core.keyword_identical_QMARK_(result__57897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57897__auto__;
}
break;
}
}catch (e59041){var ex__57898__auto__ = e59041;
var statearr_59042_59959 = state_58999;
(statearr_59042_59959[(2)] = ex__57898__auto__);


if(cljs.core.seq((state_58999[(4)]))){
var statearr_59043_59960 = state_58999;
(statearr_59043_59960[(1)] = cljs.core.first((state_58999[(4)])));

} else {
throw ex__57898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59962 = state_58999;
state_58999 = G__59962;
continue;
} else {
return ret_value__57896__auto__;
}
break;
}
});
cljs$core$async$state_machine__57895__auto__ = function(state_58999){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57895__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57895__auto____1.call(this,state_58999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__57895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57895__auto____0;
cljs$core$async$state_machine__57895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57895__auto____1;
return cljs$core$async$state_machine__57895__auto__;
})()
})();
var state__58098__auto__ = (function (){var statearr_59044 = f__58097__auto__();
(statearr_59044[(6)] = c__58096__auto___59924);

return statearr_59044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58098__auto__);
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
var G__59046 = arguments.length;
switch (G__59046) {
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
var G__59048 = arguments.length;
switch (G__59048) {
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
var G__59050 = arguments.length;
switch (G__59050) {
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
var c__58096__auto___59967 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58097__auto__ = (function (){var switch__57894__auto__ = (function (state_59093){
var state_val_59094 = (state_59093[(1)]);
if((state_val_59094 === (7))){
var state_59093__$1 = state_59093;
var statearr_59095_59968 = state_59093__$1;
(statearr_59095_59968[(2)] = null);

(statearr_59095_59968[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59094 === (1))){
var state_59093__$1 = state_59093;
var statearr_59096_59970 = state_59093__$1;
(statearr_59096_59970[(2)] = null);

(statearr_59096_59970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59094 === (4))){
var inst_59053 = (state_59093[(7)]);
var inst_59054 = (state_59093[(8)]);
var inst_59056 = (inst_59054 < inst_59053);
var state_59093__$1 = state_59093;
if(cljs.core.truth_(inst_59056)){
var statearr_59097_59971 = state_59093__$1;
(statearr_59097_59971[(1)] = (6));

} else {
var statearr_59098_59972 = state_59093__$1;
(statearr_59098_59972[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59094 === (15))){
var inst_59079 = (state_59093[(9)]);
var inst_59084 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_59079);
var state_59093__$1 = state_59093;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59093__$1,(17),out,inst_59084);
} else {
if((state_val_59094 === (13))){
var inst_59079 = (state_59093[(9)]);
var inst_59079__$1 = (state_59093[(2)]);
var inst_59080 = cljs.core.some(cljs.core.nil_QMARK_,inst_59079__$1);
var state_59093__$1 = (function (){var statearr_59099 = state_59093;
(statearr_59099[(9)] = inst_59079__$1);

return statearr_59099;
})();
if(cljs.core.truth_(inst_59080)){
var statearr_59100_59973 = state_59093__$1;
(statearr_59100_59973[(1)] = (14));

} else {
var statearr_59101_59974 = state_59093__$1;
(statearr_59101_59974[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59094 === (6))){
var state_59093__$1 = state_59093;
var statearr_59102_59975 = state_59093__$1;
(statearr_59102_59975[(2)] = null);

(statearr_59102_59975[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59094 === (17))){
var inst_59086 = (state_59093[(2)]);
var state_59093__$1 = (function (){var statearr_59104 = state_59093;
(statearr_59104[(10)] = inst_59086);

return statearr_59104;
})();
var statearr_59105_59976 = state_59093__$1;
(statearr_59105_59976[(2)] = null);

(statearr_59105_59976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59094 === (3))){
var inst_59091 = (state_59093[(2)]);
var state_59093__$1 = state_59093;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59093__$1,inst_59091);
} else {
if((state_val_59094 === (12))){
var _ = (function (){var statearr_59106 = state_59093;
(statearr_59106[(4)] = cljs.core.rest((state_59093[(4)])));

return statearr_59106;
})();
var state_59093__$1 = state_59093;
var ex59103 = (state_59093__$1[(2)]);
var statearr_59107_59977 = state_59093__$1;
(statearr_59107_59977[(5)] = ex59103);


if((ex59103 instanceof Object)){
var statearr_59108_59978 = state_59093__$1;
(statearr_59108_59978[(1)] = (11));

(statearr_59108_59978[(5)] = null);

} else {
throw ex59103;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59094 === (2))){
var inst_59052 = cljs.core.reset_BANG_(dctr,cnt);
var inst_59053 = cnt;
var inst_59054 = (0);
var state_59093__$1 = (function (){var statearr_59109 = state_59093;
(statearr_59109[(7)] = inst_59053);

(statearr_59109[(11)] = inst_59052);

(statearr_59109[(8)] = inst_59054);

return statearr_59109;
})();
var statearr_59110_59979 = state_59093__$1;
(statearr_59110_59979[(2)] = null);

(statearr_59110_59979[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59094 === (11))){
var inst_59058 = (state_59093[(2)]);
var inst_59059 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_59093__$1 = (function (){var statearr_59111 = state_59093;
(statearr_59111[(12)] = inst_59058);

return statearr_59111;
})();
var statearr_59112_59980 = state_59093__$1;
(statearr_59112_59980[(2)] = inst_59059);

(statearr_59112_59980[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59094 === (9))){
var inst_59054 = (state_59093[(8)]);
var _ = (function (){var statearr_59113 = state_59093;
(statearr_59113[(4)] = cljs.core.cons((12),(state_59093[(4)])));

return statearr_59113;
})();
var inst_59065 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_59054) : chs__$1.call(null,inst_59054));
var inst_59066 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_59054) : done.call(null,inst_59054));
var inst_59067 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_59065,inst_59066);
var ___$1 = (function (){var statearr_59114 = state_59093;
(statearr_59114[(4)] = cljs.core.rest((state_59093[(4)])));

return statearr_59114;
})();
var state_59093__$1 = state_59093;
var statearr_59115_59981 = state_59093__$1;
(statearr_59115_59981[(2)] = inst_59067);

(statearr_59115_59981[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59094 === (5))){
var inst_59077 = (state_59093[(2)]);
var state_59093__$1 = (function (){var statearr_59116 = state_59093;
(statearr_59116[(13)] = inst_59077);

return statearr_59116;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59093__$1,(13),dchan);
} else {
if((state_val_59094 === (14))){
var inst_59082 = cljs.core.async.close_BANG_(out);
var state_59093__$1 = state_59093;
var statearr_59117_59982 = state_59093__$1;
(statearr_59117_59982[(2)] = inst_59082);

(statearr_59117_59982[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59094 === (16))){
var inst_59089 = (state_59093[(2)]);
var state_59093__$1 = state_59093;
var statearr_59118_59983 = state_59093__$1;
(statearr_59118_59983[(2)] = inst_59089);

(statearr_59118_59983[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59094 === (10))){
var inst_59054 = (state_59093[(8)]);
var inst_59070 = (state_59093[(2)]);
var inst_59071 = (inst_59054 + (1));
var inst_59054__$1 = inst_59071;
var state_59093__$1 = (function (){var statearr_59119 = state_59093;
(statearr_59119[(14)] = inst_59070);

(statearr_59119[(8)] = inst_59054__$1);

return statearr_59119;
})();
var statearr_59120_59984 = state_59093__$1;
(statearr_59120_59984[(2)] = null);

(statearr_59120_59984[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59094 === (8))){
var inst_59075 = (state_59093[(2)]);
var state_59093__$1 = state_59093;
var statearr_59121_59985 = state_59093__$1;
(statearr_59121_59985[(2)] = inst_59075);

(statearr_59121_59985[(1)] = (5));


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
var cljs$core$async$state_machine__57895__auto__ = null;
var cljs$core$async$state_machine__57895__auto____0 = (function (){
var statearr_59122 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59122[(0)] = cljs$core$async$state_machine__57895__auto__);

(statearr_59122[(1)] = (1));

return statearr_59122;
});
var cljs$core$async$state_machine__57895__auto____1 = (function (state_59093){
while(true){
var ret_value__57896__auto__ = (function (){try{while(true){
var result__57897__auto__ = switch__57894__auto__(state_59093);
if(cljs.core.keyword_identical_QMARK_(result__57897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57897__auto__;
}
break;
}
}catch (e59123){var ex__57898__auto__ = e59123;
var statearr_59124_59986 = state_59093;
(statearr_59124_59986[(2)] = ex__57898__auto__);


if(cljs.core.seq((state_59093[(4)]))){
var statearr_59125_59987 = state_59093;
(statearr_59125_59987[(1)] = cljs.core.first((state_59093[(4)])));

} else {
throw ex__57898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59988 = state_59093;
state_59093 = G__59988;
continue;
} else {
return ret_value__57896__auto__;
}
break;
}
});
cljs$core$async$state_machine__57895__auto__ = function(state_59093){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57895__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57895__auto____1.call(this,state_59093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__57895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57895__auto____0;
cljs$core$async$state_machine__57895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57895__auto____1;
return cljs$core$async$state_machine__57895__auto__;
})()
})();
var state__58098__auto__ = (function (){var statearr_59126 = f__58097__auto__();
(statearr_59126[(6)] = c__58096__auto___59967);

return statearr_59126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58098__auto__);
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
var G__59129 = arguments.length;
switch (G__59129) {
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
var c__58096__auto___59990 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58097__auto__ = (function (){var switch__57894__auto__ = (function (state_59161){
var state_val_59162 = (state_59161[(1)]);
if((state_val_59162 === (7))){
var inst_59141 = (state_59161[(7)]);
var inst_59140 = (state_59161[(8)]);
var inst_59140__$1 = (state_59161[(2)]);
var inst_59141__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59140__$1,(0),null);
var inst_59142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59140__$1,(1),null);
var inst_59143 = (inst_59141__$1 == null);
var state_59161__$1 = (function (){var statearr_59163 = state_59161;
(statearr_59163[(7)] = inst_59141__$1);

(statearr_59163[(8)] = inst_59140__$1);

(statearr_59163[(9)] = inst_59142);

return statearr_59163;
})();
if(cljs.core.truth_(inst_59143)){
var statearr_59164_59991 = state_59161__$1;
(statearr_59164_59991[(1)] = (8));

} else {
var statearr_59165_59992 = state_59161__$1;
(statearr_59165_59992[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59162 === (1))){
var inst_59130 = cljs.core.vec(chs);
var inst_59131 = inst_59130;
var state_59161__$1 = (function (){var statearr_59166 = state_59161;
(statearr_59166[(10)] = inst_59131);

return statearr_59166;
})();
var statearr_59167_59993 = state_59161__$1;
(statearr_59167_59993[(2)] = null);

(statearr_59167_59993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59162 === (4))){
var inst_59131 = (state_59161[(10)]);
var state_59161__$1 = state_59161;
return cljs.core.async.ioc_alts_BANG_(state_59161__$1,(7),inst_59131);
} else {
if((state_val_59162 === (6))){
var inst_59157 = (state_59161[(2)]);
var state_59161__$1 = state_59161;
var statearr_59168_59994 = state_59161__$1;
(statearr_59168_59994[(2)] = inst_59157);

(statearr_59168_59994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59162 === (3))){
var inst_59159 = (state_59161[(2)]);
var state_59161__$1 = state_59161;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59161__$1,inst_59159);
} else {
if((state_val_59162 === (2))){
var inst_59131 = (state_59161[(10)]);
var inst_59133 = cljs.core.count(inst_59131);
var inst_59134 = (inst_59133 > (0));
var state_59161__$1 = state_59161;
if(cljs.core.truth_(inst_59134)){
var statearr_59170_59995 = state_59161__$1;
(statearr_59170_59995[(1)] = (4));

} else {
var statearr_59171_59996 = state_59161__$1;
(statearr_59171_59996[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59162 === (11))){
var inst_59131 = (state_59161[(10)]);
var inst_59150 = (state_59161[(2)]);
var tmp59169 = inst_59131;
var inst_59131__$1 = tmp59169;
var state_59161__$1 = (function (){var statearr_59172 = state_59161;
(statearr_59172[(10)] = inst_59131__$1);

(statearr_59172[(11)] = inst_59150);

return statearr_59172;
})();
var statearr_59173_59997 = state_59161__$1;
(statearr_59173_59997[(2)] = null);

(statearr_59173_59997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59162 === (9))){
var inst_59141 = (state_59161[(7)]);
var state_59161__$1 = state_59161;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59161__$1,(11),out,inst_59141);
} else {
if((state_val_59162 === (5))){
var inst_59155 = cljs.core.async.close_BANG_(out);
var state_59161__$1 = state_59161;
var statearr_59174_59999 = state_59161__$1;
(statearr_59174_59999[(2)] = inst_59155);

(statearr_59174_59999[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59162 === (10))){
var inst_59153 = (state_59161[(2)]);
var state_59161__$1 = state_59161;
var statearr_59175_60010 = state_59161__$1;
(statearr_59175_60010[(2)] = inst_59153);

(statearr_59175_60010[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59162 === (8))){
var inst_59141 = (state_59161[(7)]);
var inst_59131 = (state_59161[(10)]);
var inst_59140 = (state_59161[(8)]);
var inst_59142 = (state_59161[(9)]);
var inst_59145 = (function (){var cs = inst_59131;
var vec__59136 = inst_59140;
var v = inst_59141;
var c = inst_59142;
return (function (p1__59127_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__59127_SHARP_);
});
})();
var inst_59146 = cljs.core.filterv(inst_59145,inst_59131);
var inst_59131__$1 = inst_59146;
var state_59161__$1 = (function (){var statearr_59176 = state_59161;
(statearr_59176[(10)] = inst_59131__$1);

return statearr_59176;
})();
var statearr_59177_60015 = state_59161__$1;
(statearr_59177_60015[(2)] = null);

(statearr_59177_60015[(1)] = (2));


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
var cljs$core$async$state_machine__57895__auto__ = null;
var cljs$core$async$state_machine__57895__auto____0 = (function (){
var statearr_59178 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59178[(0)] = cljs$core$async$state_machine__57895__auto__);

(statearr_59178[(1)] = (1));

return statearr_59178;
});
var cljs$core$async$state_machine__57895__auto____1 = (function (state_59161){
while(true){
var ret_value__57896__auto__ = (function (){try{while(true){
var result__57897__auto__ = switch__57894__auto__(state_59161);
if(cljs.core.keyword_identical_QMARK_(result__57897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57897__auto__;
}
break;
}
}catch (e59179){var ex__57898__auto__ = e59179;
var statearr_59180_60022 = state_59161;
(statearr_59180_60022[(2)] = ex__57898__auto__);


if(cljs.core.seq((state_59161[(4)]))){
var statearr_59181_60023 = state_59161;
(statearr_59181_60023[(1)] = cljs.core.first((state_59161[(4)])));

} else {
throw ex__57898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60024 = state_59161;
state_59161 = G__60024;
continue;
} else {
return ret_value__57896__auto__;
}
break;
}
});
cljs$core$async$state_machine__57895__auto__ = function(state_59161){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57895__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57895__auto____1.call(this,state_59161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__57895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57895__auto____0;
cljs$core$async$state_machine__57895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57895__auto____1;
return cljs$core$async$state_machine__57895__auto__;
})()
})();
var state__58098__auto__ = (function (){var statearr_59182 = f__58097__auto__();
(statearr_59182[(6)] = c__58096__auto___59990);

return statearr_59182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58098__auto__);
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
var G__59184 = arguments.length;
switch (G__59184) {
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
var c__58096__auto___60026 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58097__auto__ = (function (){var switch__57894__auto__ = (function (state_59208){
var state_val_59209 = (state_59208[(1)]);
if((state_val_59209 === (7))){
var inst_59190 = (state_59208[(7)]);
var inst_59190__$1 = (state_59208[(2)]);
var inst_59191 = (inst_59190__$1 == null);
var inst_59192 = cljs.core.not(inst_59191);
var state_59208__$1 = (function (){var statearr_59210 = state_59208;
(statearr_59210[(7)] = inst_59190__$1);

return statearr_59210;
})();
if(inst_59192){
var statearr_59211_60027 = state_59208__$1;
(statearr_59211_60027[(1)] = (8));

} else {
var statearr_59212_60028 = state_59208__$1;
(statearr_59212_60028[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59209 === (1))){
var inst_59185 = (0);
var state_59208__$1 = (function (){var statearr_59213 = state_59208;
(statearr_59213[(8)] = inst_59185);

return statearr_59213;
})();
var statearr_59214_60029 = state_59208__$1;
(statearr_59214_60029[(2)] = null);

(statearr_59214_60029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59209 === (4))){
var state_59208__$1 = state_59208;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59208__$1,(7),ch);
} else {
if((state_val_59209 === (6))){
var inst_59203 = (state_59208[(2)]);
var state_59208__$1 = state_59208;
var statearr_59215_60030 = state_59208__$1;
(statearr_59215_60030[(2)] = inst_59203);

(statearr_59215_60030[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59209 === (3))){
var inst_59205 = (state_59208[(2)]);
var inst_59206 = cljs.core.async.close_BANG_(out);
var state_59208__$1 = (function (){var statearr_59216 = state_59208;
(statearr_59216[(9)] = inst_59205);

return statearr_59216;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_59208__$1,inst_59206);
} else {
if((state_val_59209 === (2))){
var inst_59185 = (state_59208[(8)]);
var inst_59187 = (inst_59185 < n);
var state_59208__$1 = state_59208;
if(cljs.core.truth_(inst_59187)){
var statearr_59217_60031 = state_59208__$1;
(statearr_59217_60031[(1)] = (4));

} else {
var statearr_59218_60032 = state_59208__$1;
(statearr_59218_60032[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59209 === (11))){
var inst_59185 = (state_59208[(8)]);
var inst_59195 = (state_59208[(2)]);
var inst_59196 = (inst_59185 + (1));
var inst_59185__$1 = inst_59196;
var state_59208__$1 = (function (){var statearr_59219 = state_59208;
(statearr_59219[(8)] = inst_59185__$1);

(statearr_59219[(10)] = inst_59195);

return statearr_59219;
})();
var statearr_59220_60033 = state_59208__$1;
(statearr_59220_60033[(2)] = null);

(statearr_59220_60033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59209 === (9))){
var state_59208__$1 = state_59208;
var statearr_59221_60034 = state_59208__$1;
(statearr_59221_60034[(2)] = null);

(statearr_59221_60034[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59209 === (5))){
var state_59208__$1 = state_59208;
var statearr_59222_60035 = state_59208__$1;
(statearr_59222_60035[(2)] = null);

(statearr_59222_60035[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59209 === (10))){
var inst_59200 = (state_59208[(2)]);
var state_59208__$1 = state_59208;
var statearr_59223_60036 = state_59208__$1;
(statearr_59223_60036[(2)] = inst_59200);

(statearr_59223_60036[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59209 === (8))){
var inst_59190 = (state_59208[(7)]);
var state_59208__$1 = state_59208;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59208__$1,(11),out,inst_59190);
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
var cljs$core$async$state_machine__57895__auto__ = null;
var cljs$core$async$state_machine__57895__auto____0 = (function (){
var statearr_59224 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_59224[(0)] = cljs$core$async$state_machine__57895__auto__);

(statearr_59224[(1)] = (1));

return statearr_59224;
});
var cljs$core$async$state_machine__57895__auto____1 = (function (state_59208){
while(true){
var ret_value__57896__auto__ = (function (){try{while(true){
var result__57897__auto__ = switch__57894__auto__(state_59208);
if(cljs.core.keyword_identical_QMARK_(result__57897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57897__auto__;
}
break;
}
}catch (e59225){var ex__57898__auto__ = e59225;
var statearr_59226_60037 = state_59208;
(statearr_59226_60037[(2)] = ex__57898__auto__);


if(cljs.core.seq((state_59208[(4)]))){
var statearr_59227_60038 = state_59208;
(statearr_59227_60038[(1)] = cljs.core.first((state_59208[(4)])));

} else {
throw ex__57898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60039 = state_59208;
state_59208 = G__60039;
continue;
} else {
return ret_value__57896__auto__;
}
break;
}
});
cljs$core$async$state_machine__57895__auto__ = function(state_59208){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57895__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57895__auto____1.call(this,state_59208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__57895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57895__auto____0;
cljs$core$async$state_machine__57895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57895__auto____1;
return cljs$core$async$state_machine__57895__auto__;
})()
})();
var state__58098__auto__ = (function (){var statearr_59228 = f__58097__auto__();
(statearr_59228[(6)] = c__58096__auto___60026);

return statearr_59228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58098__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59230 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59230 = (function (f,ch,meta59231){
this.f = f;
this.ch = ch;
this.meta59231 = meta59231;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59230.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59232,meta59231__$1){
var self__ = this;
var _59232__$1 = this;
return (new cljs.core.async.t_cljs$core$async59230(self__.f,self__.ch,meta59231__$1));
}));

(cljs.core.async.t_cljs$core$async59230.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59232){
var self__ = this;
var _59232__$1 = this;
return self__.meta59231;
}));

(cljs.core.async.t_cljs$core$async59230.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59230.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async59230.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async59230.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59230.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59233 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59233 = (function (f,ch,meta59231,_,fn1,meta59234){
this.f = f;
this.ch = ch;
this.meta59231 = meta59231;
this._ = _;
this.fn1 = fn1;
this.meta59234 = meta59234;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59233.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59235,meta59234__$1){
var self__ = this;
var _59235__$1 = this;
return (new cljs.core.async.t_cljs$core$async59233(self__.f,self__.ch,self__.meta59231,self__._,self__.fn1,meta59234__$1));
}));

(cljs.core.async.t_cljs$core$async59233.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59235){
var self__ = this;
var _59235__$1 = this;
return self__.meta59234;
}));

(cljs.core.async.t_cljs$core$async59233.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59233.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async59233.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async59233.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__59229_SHARP_){
var G__59236 = (((p1__59229_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__59229_SHARP_) : self__.f.call(null,p1__59229_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__59236) : f1.call(null,G__59236));
});
}));

(cljs.core.async.t_cljs$core$async59233.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta59231","meta59231",429412658,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async59230","cljs.core.async/t_cljs$core$async59230",1568896754,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta59234","meta59234",1397694641,null)], null);
}));

(cljs.core.async.t_cljs$core$async59233.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59233.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59233");

(cljs.core.async.t_cljs$core$async59233.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async59233");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59233.
 */
cljs.core.async.__GT_t_cljs$core$async59233 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async59233(f__$1,ch__$1,meta59231__$1,___$2,fn1__$1,meta59234){
return (new cljs.core.async.t_cljs$core$async59233(f__$1,ch__$1,meta59231__$1,___$2,fn1__$1,meta59234));
});

}

return (new cljs.core.async.t_cljs$core$async59233(self__.f,self__.ch,self__.meta59231,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__59237 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__59237) : self__.f.call(null,G__59237));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async59230.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59230.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async59230.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta59231","meta59231",429412658,null)], null);
}));

(cljs.core.async.t_cljs$core$async59230.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59230.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59230");

(cljs.core.async.t_cljs$core$async59230.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async59230");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59230.
 */
cljs.core.async.__GT_t_cljs$core$async59230 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async59230(f__$1,ch__$1,meta59231){
return (new cljs.core.async.t_cljs$core$async59230(f__$1,ch__$1,meta59231));
});

}

return (new cljs.core.async.t_cljs$core$async59230(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59238 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59238 = (function (f,ch,meta59239){
this.f = f;
this.ch = ch;
this.meta59239 = meta59239;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59240,meta59239__$1){
var self__ = this;
var _59240__$1 = this;
return (new cljs.core.async.t_cljs$core$async59238(self__.f,self__.ch,meta59239__$1));
}));

(cljs.core.async.t_cljs$core$async59238.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59240){
var self__ = this;
var _59240__$1 = this;
return self__.meta59239;
}));

(cljs.core.async.t_cljs$core$async59238.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59238.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async59238.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59238.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async59238.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59238.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async59238.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta59239","meta59239",-2108085855,null)], null);
}));

(cljs.core.async.t_cljs$core$async59238.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59238.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59238");

(cljs.core.async.t_cljs$core$async59238.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async59238");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59238.
 */
cljs.core.async.__GT_t_cljs$core$async59238 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async59238(f__$1,ch__$1,meta59239){
return (new cljs.core.async.t_cljs$core$async59238(f__$1,ch__$1,meta59239));
});

}

return (new cljs.core.async.t_cljs$core$async59238(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59241 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59241 = (function (p,ch,meta59242){
this.p = p;
this.ch = ch;
this.meta59242 = meta59242;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59241.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59243,meta59242__$1){
var self__ = this;
var _59243__$1 = this;
return (new cljs.core.async.t_cljs$core$async59241(self__.p,self__.ch,meta59242__$1));
}));

(cljs.core.async.t_cljs$core$async59241.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59243){
var self__ = this;
var _59243__$1 = this;
return self__.meta59242;
}));

(cljs.core.async.t_cljs$core$async59241.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59241.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async59241.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async59241.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59241.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async59241.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59241.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async59241.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta59242","meta59242",-1644220928,null)], null);
}));

(cljs.core.async.t_cljs$core$async59241.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59241.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59241");

(cljs.core.async.t_cljs$core$async59241.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async59241");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59241.
 */
cljs.core.async.__GT_t_cljs$core$async59241 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async59241(p__$1,ch__$1,meta59242){
return (new cljs.core.async.t_cljs$core$async59241(p__$1,ch__$1,meta59242));
});

}

return (new cljs.core.async.t_cljs$core$async59241(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__59245 = arguments.length;
switch (G__59245) {
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
var c__58096__auto___60047 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58097__auto__ = (function (){var switch__57894__auto__ = (function (state_59266){
var state_val_59267 = (state_59266[(1)]);
if((state_val_59267 === (7))){
var inst_59262 = (state_59266[(2)]);
var state_59266__$1 = state_59266;
var statearr_59268_60048 = state_59266__$1;
(statearr_59268_60048[(2)] = inst_59262);

(statearr_59268_60048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59267 === (1))){
var state_59266__$1 = state_59266;
var statearr_59269_60049 = state_59266__$1;
(statearr_59269_60049[(2)] = null);

(statearr_59269_60049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59267 === (4))){
var inst_59248 = (state_59266[(7)]);
var inst_59248__$1 = (state_59266[(2)]);
var inst_59249 = (inst_59248__$1 == null);
var state_59266__$1 = (function (){var statearr_59270 = state_59266;
(statearr_59270[(7)] = inst_59248__$1);

return statearr_59270;
})();
if(cljs.core.truth_(inst_59249)){
var statearr_59271_60050 = state_59266__$1;
(statearr_59271_60050[(1)] = (5));

} else {
var statearr_59272_60051 = state_59266__$1;
(statearr_59272_60051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59267 === (6))){
var inst_59248 = (state_59266[(7)]);
var inst_59253 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_59248) : p.call(null,inst_59248));
var state_59266__$1 = state_59266;
if(cljs.core.truth_(inst_59253)){
var statearr_59273_60058 = state_59266__$1;
(statearr_59273_60058[(1)] = (8));

} else {
var statearr_59274_60059 = state_59266__$1;
(statearr_59274_60059[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59267 === (3))){
var inst_59264 = (state_59266[(2)]);
var state_59266__$1 = state_59266;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59266__$1,inst_59264);
} else {
if((state_val_59267 === (2))){
var state_59266__$1 = state_59266;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59266__$1,(4),ch);
} else {
if((state_val_59267 === (11))){
var inst_59256 = (state_59266[(2)]);
var state_59266__$1 = state_59266;
var statearr_59275_60060 = state_59266__$1;
(statearr_59275_60060[(2)] = inst_59256);

(statearr_59275_60060[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59267 === (9))){
var state_59266__$1 = state_59266;
var statearr_59276_60061 = state_59266__$1;
(statearr_59276_60061[(2)] = null);

(statearr_59276_60061[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59267 === (5))){
var inst_59251 = cljs.core.async.close_BANG_(out);
var state_59266__$1 = state_59266;
var statearr_59277_60062 = state_59266__$1;
(statearr_59277_60062[(2)] = inst_59251);

(statearr_59277_60062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59267 === (10))){
var inst_59259 = (state_59266[(2)]);
var state_59266__$1 = (function (){var statearr_59278 = state_59266;
(statearr_59278[(8)] = inst_59259);

return statearr_59278;
})();
var statearr_59279_60063 = state_59266__$1;
(statearr_59279_60063[(2)] = null);

(statearr_59279_60063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59267 === (8))){
var inst_59248 = (state_59266[(7)]);
var state_59266__$1 = state_59266;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59266__$1,(11),out,inst_59248);
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
var cljs$core$async$state_machine__57895__auto__ = null;
var cljs$core$async$state_machine__57895__auto____0 = (function (){
var statearr_59280 = [null,null,null,null,null,null,null,null,null];
(statearr_59280[(0)] = cljs$core$async$state_machine__57895__auto__);

(statearr_59280[(1)] = (1));

return statearr_59280;
});
var cljs$core$async$state_machine__57895__auto____1 = (function (state_59266){
while(true){
var ret_value__57896__auto__ = (function (){try{while(true){
var result__57897__auto__ = switch__57894__auto__(state_59266);
if(cljs.core.keyword_identical_QMARK_(result__57897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57897__auto__;
}
break;
}
}catch (e59281){var ex__57898__auto__ = e59281;
var statearr_59282_60064 = state_59266;
(statearr_59282_60064[(2)] = ex__57898__auto__);


if(cljs.core.seq((state_59266[(4)]))){
var statearr_59283_60065 = state_59266;
(statearr_59283_60065[(1)] = cljs.core.first((state_59266[(4)])));

} else {
throw ex__57898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60066 = state_59266;
state_59266 = G__60066;
continue;
} else {
return ret_value__57896__auto__;
}
break;
}
});
cljs$core$async$state_machine__57895__auto__ = function(state_59266){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57895__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57895__auto____1.call(this,state_59266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__57895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57895__auto____0;
cljs$core$async$state_machine__57895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57895__auto____1;
return cljs$core$async$state_machine__57895__auto__;
})()
})();
var state__58098__auto__ = (function (){var statearr_59284 = f__58097__auto__();
(statearr_59284[(6)] = c__58096__auto___60047);

return statearr_59284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58098__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__59286 = arguments.length;
switch (G__59286) {
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
var c__58096__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58097__auto__ = (function (){var switch__57894__auto__ = (function (state_59348){
var state_val_59349 = (state_59348[(1)]);
if((state_val_59349 === (7))){
var inst_59344 = (state_59348[(2)]);
var state_59348__$1 = state_59348;
var statearr_59350_60068 = state_59348__$1;
(statearr_59350_60068[(2)] = inst_59344);

(statearr_59350_60068[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59349 === (20))){
var inst_59314 = (state_59348[(7)]);
var inst_59325 = (state_59348[(2)]);
var inst_59326 = cljs.core.next(inst_59314);
var inst_59300 = inst_59326;
var inst_59301 = null;
var inst_59302 = (0);
var inst_59303 = (0);
var state_59348__$1 = (function (){var statearr_59351 = state_59348;
(statearr_59351[(8)] = inst_59302);

(statearr_59351[(9)] = inst_59325);

(statearr_59351[(10)] = inst_59301);

(statearr_59351[(11)] = inst_59300);

(statearr_59351[(12)] = inst_59303);

return statearr_59351;
})();
var statearr_59352_60069 = state_59348__$1;
(statearr_59352_60069[(2)] = null);

(statearr_59352_60069[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59349 === (1))){
var state_59348__$1 = state_59348;
var statearr_59353_60070 = state_59348__$1;
(statearr_59353_60070[(2)] = null);

(statearr_59353_60070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59349 === (4))){
var inst_59289 = (state_59348[(13)]);
var inst_59289__$1 = (state_59348[(2)]);
var inst_59290 = (inst_59289__$1 == null);
var state_59348__$1 = (function (){var statearr_59354 = state_59348;
(statearr_59354[(13)] = inst_59289__$1);

return statearr_59354;
})();
if(cljs.core.truth_(inst_59290)){
var statearr_59355_60071 = state_59348__$1;
(statearr_59355_60071[(1)] = (5));

} else {
var statearr_59356_60072 = state_59348__$1;
(statearr_59356_60072[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59349 === (15))){
var state_59348__$1 = state_59348;
var statearr_59360_60073 = state_59348__$1;
(statearr_59360_60073[(2)] = null);

(statearr_59360_60073[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59349 === (21))){
var state_59348__$1 = state_59348;
var statearr_59361_60074 = state_59348__$1;
(statearr_59361_60074[(2)] = null);

(statearr_59361_60074[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59349 === (13))){
var inst_59302 = (state_59348[(8)]);
var inst_59301 = (state_59348[(10)]);
var inst_59300 = (state_59348[(11)]);
var inst_59303 = (state_59348[(12)]);
var inst_59310 = (state_59348[(2)]);
var inst_59311 = (inst_59303 + (1));
var tmp59357 = inst_59302;
var tmp59358 = inst_59301;
var tmp59359 = inst_59300;
var inst_59300__$1 = tmp59359;
var inst_59301__$1 = tmp59358;
var inst_59302__$1 = tmp59357;
var inst_59303__$1 = inst_59311;
var state_59348__$1 = (function (){var statearr_59362 = state_59348;
(statearr_59362[(14)] = inst_59310);

(statearr_59362[(8)] = inst_59302__$1);

(statearr_59362[(10)] = inst_59301__$1);

(statearr_59362[(11)] = inst_59300__$1);

(statearr_59362[(12)] = inst_59303__$1);

return statearr_59362;
})();
var statearr_59363_60075 = state_59348__$1;
(statearr_59363_60075[(2)] = null);

(statearr_59363_60075[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59349 === (22))){
var state_59348__$1 = state_59348;
var statearr_59364_60076 = state_59348__$1;
(statearr_59364_60076[(2)] = null);

(statearr_59364_60076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59349 === (6))){
var inst_59289 = (state_59348[(13)]);
var inst_59298 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_59289) : f.call(null,inst_59289));
var inst_59299 = cljs.core.seq(inst_59298);
var inst_59300 = inst_59299;
var inst_59301 = null;
var inst_59302 = (0);
var inst_59303 = (0);
var state_59348__$1 = (function (){var statearr_59365 = state_59348;
(statearr_59365[(8)] = inst_59302);

(statearr_59365[(10)] = inst_59301);

(statearr_59365[(11)] = inst_59300);

(statearr_59365[(12)] = inst_59303);

return statearr_59365;
})();
var statearr_59366_60077 = state_59348__$1;
(statearr_59366_60077[(2)] = null);

(statearr_59366_60077[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59349 === (17))){
var inst_59314 = (state_59348[(7)]);
var inst_59318 = cljs.core.chunk_first(inst_59314);
var inst_59319 = cljs.core.chunk_rest(inst_59314);
var inst_59320 = cljs.core.count(inst_59318);
var inst_59300 = inst_59319;
var inst_59301 = inst_59318;
var inst_59302 = inst_59320;
var inst_59303 = (0);
var state_59348__$1 = (function (){var statearr_59367 = state_59348;
(statearr_59367[(8)] = inst_59302);

(statearr_59367[(10)] = inst_59301);

(statearr_59367[(11)] = inst_59300);

(statearr_59367[(12)] = inst_59303);

return statearr_59367;
})();
var statearr_59368_60078 = state_59348__$1;
(statearr_59368_60078[(2)] = null);

(statearr_59368_60078[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59349 === (3))){
var inst_59346 = (state_59348[(2)]);
var state_59348__$1 = state_59348;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59348__$1,inst_59346);
} else {
if((state_val_59349 === (12))){
var inst_59334 = (state_59348[(2)]);
var state_59348__$1 = state_59348;
var statearr_59369_60079 = state_59348__$1;
(statearr_59369_60079[(2)] = inst_59334);

(statearr_59369_60079[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59349 === (2))){
var state_59348__$1 = state_59348;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59348__$1,(4),in$);
} else {
if((state_val_59349 === (23))){
var inst_59342 = (state_59348[(2)]);
var state_59348__$1 = state_59348;
var statearr_59370_60080 = state_59348__$1;
(statearr_59370_60080[(2)] = inst_59342);

(statearr_59370_60080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59349 === (19))){
var inst_59329 = (state_59348[(2)]);
var state_59348__$1 = state_59348;
var statearr_59371_60081 = state_59348__$1;
(statearr_59371_60081[(2)] = inst_59329);

(statearr_59371_60081[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59349 === (11))){
var inst_59300 = (state_59348[(11)]);
var inst_59314 = (state_59348[(7)]);
var inst_59314__$1 = cljs.core.seq(inst_59300);
var state_59348__$1 = (function (){var statearr_59372 = state_59348;
(statearr_59372[(7)] = inst_59314__$1);

return statearr_59372;
})();
if(inst_59314__$1){
var statearr_59373_60082 = state_59348__$1;
(statearr_59373_60082[(1)] = (14));

} else {
var statearr_59374_60083 = state_59348__$1;
(statearr_59374_60083[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59349 === (9))){
var inst_59336 = (state_59348[(2)]);
var inst_59337 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_59348__$1 = (function (){var statearr_59375 = state_59348;
(statearr_59375[(15)] = inst_59336);

return statearr_59375;
})();
if(cljs.core.truth_(inst_59337)){
var statearr_59376_60084 = state_59348__$1;
(statearr_59376_60084[(1)] = (21));

} else {
var statearr_59377_60085 = state_59348__$1;
(statearr_59377_60085[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59349 === (5))){
var inst_59292 = cljs.core.async.close_BANG_(out);
var state_59348__$1 = state_59348;
var statearr_59378_60092 = state_59348__$1;
(statearr_59378_60092[(2)] = inst_59292);

(statearr_59378_60092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59349 === (14))){
var inst_59314 = (state_59348[(7)]);
var inst_59316 = cljs.core.chunked_seq_QMARK_(inst_59314);
var state_59348__$1 = state_59348;
if(inst_59316){
var statearr_59379_60093 = state_59348__$1;
(statearr_59379_60093[(1)] = (17));

} else {
var statearr_59380_60094 = state_59348__$1;
(statearr_59380_60094[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59349 === (16))){
var inst_59332 = (state_59348[(2)]);
var state_59348__$1 = state_59348;
var statearr_59381_60095 = state_59348__$1;
(statearr_59381_60095[(2)] = inst_59332);

(statearr_59381_60095[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59349 === (10))){
var inst_59301 = (state_59348[(10)]);
var inst_59303 = (state_59348[(12)]);
var inst_59308 = cljs.core._nth(inst_59301,inst_59303);
var state_59348__$1 = state_59348;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59348__$1,(13),out,inst_59308);
} else {
if((state_val_59349 === (18))){
var inst_59314 = (state_59348[(7)]);
var inst_59323 = cljs.core.first(inst_59314);
var state_59348__$1 = state_59348;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59348__$1,(20),out,inst_59323);
} else {
if((state_val_59349 === (8))){
var inst_59302 = (state_59348[(8)]);
var inst_59303 = (state_59348[(12)]);
var inst_59305 = (inst_59303 < inst_59302);
var inst_59306 = inst_59305;
var state_59348__$1 = state_59348;
if(cljs.core.truth_(inst_59306)){
var statearr_59382_60096 = state_59348__$1;
(statearr_59382_60096[(1)] = (10));

} else {
var statearr_59383_60097 = state_59348__$1;
(statearr_59383_60097[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__57895__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__57895__auto____0 = (function (){
var statearr_59384 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59384[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__57895__auto__);

(statearr_59384[(1)] = (1));

return statearr_59384;
});
var cljs$core$async$mapcat_STAR__$_state_machine__57895__auto____1 = (function (state_59348){
while(true){
var ret_value__57896__auto__ = (function (){try{while(true){
var result__57897__auto__ = switch__57894__auto__(state_59348);
if(cljs.core.keyword_identical_QMARK_(result__57897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57897__auto__;
}
break;
}
}catch (e59385){var ex__57898__auto__ = e59385;
var statearr_59386_60098 = state_59348;
(statearr_59386_60098[(2)] = ex__57898__auto__);


if(cljs.core.seq((state_59348[(4)]))){
var statearr_59387_60099 = state_59348;
(statearr_59387_60099[(1)] = cljs.core.first((state_59348[(4)])));

} else {
throw ex__57898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60100 = state_59348;
state_59348 = G__60100;
continue;
} else {
return ret_value__57896__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__57895__auto__ = function(state_59348){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__57895__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__57895__auto____1.call(this,state_59348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__57895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__57895__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__57895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__57895__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__57895__auto__;
})()
})();
var state__58098__auto__ = (function (){var statearr_59388 = f__58097__auto__();
(statearr_59388[(6)] = c__58096__auto__);

return statearr_59388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58098__auto__);
}));

return c__58096__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__59390 = arguments.length;
switch (G__59390) {
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
var G__59392 = arguments.length;
switch (G__59392) {
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
var G__59394 = arguments.length;
switch (G__59394) {
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
var c__58096__auto___60104 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58097__auto__ = (function (){var switch__57894__auto__ = (function (state_59418){
var state_val_59419 = (state_59418[(1)]);
if((state_val_59419 === (7))){
var inst_59413 = (state_59418[(2)]);
var state_59418__$1 = state_59418;
var statearr_59420_60105 = state_59418__$1;
(statearr_59420_60105[(2)] = inst_59413);

(statearr_59420_60105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59419 === (1))){
var inst_59395 = null;
var state_59418__$1 = (function (){var statearr_59421 = state_59418;
(statearr_59421[(7)] = inst_59395);

return statearr_59421;
})();
var statearr_59422_60106 = state_59418__$1;
(statearr_59422_60106[(2)] = null);

(statearr_59422_60106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59419 === (4))){
var inst_59398 = (state_59418[(8)]);
var inst_59398__$1 = (state_59418[(2)]);
var inst_59399 = (inst_59398__$1 == null);
var inst_59400 = cljs.core.not(inst_59399);
var state_59418__$1 = (function (){var statearr_59423 = state_59418;
(statearr_59423[(8)] = inst_59398__$1);

return statearr_59423;
})();
if(inst_59400){
var statearr_59424_60107 = state_59418__$1;
(statearr_59424_60107[(1)] = (5));

} else {
var statearr_59425_60108 = state_59418__$1;
(statearr_59425_60108[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59419 === (6))){
var state_59418__$1 = state_59418;
var statearr_59426_60109 = state_59418__$1;
(statearr_59426_60109[(2)] = null);

(statearr_59426_60109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59419 === (3))){
var inst_59415 = (state_59418[(2)]);
var inst_59416 = cljs.core.async.close_BANG_(out);
var state_59418__$1 = (function (){var statearr_59427 = state_59418;
(statearr_59427[(9)] = inst_59415);

return statearr_59427;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_59418__$1,inst_59416);
} else {
if((state_val_59419 === (2))){
var state_59418__$1 = state_59418;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59418__$1,(4),ch);
} else {
if((state_val_59419 === (11))){
var inst_59398 = (state_59418[(8)]);
var inst_59407 = (state_59418[(2)]);
var inst_59395 = inst_59398;
var state_59418__$1 = (function (){var statearr_59428 = state_59418;
(statearr_59428[(10)] = inst_59407);

(statearr_59428[(7)] = inst_59395);

return statearr_59428;
})();
var statearr_59429_60110 = state_59418__$1;
(statearr_59429_60110[(2)] = null);

(statearr_59429_60110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59419 === (9))){
var inst_59398 = (state_59418[(8)]);
var state_59418__$1 = state_59418;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59418__$1,(11),out,inst_59398);
} else {
if((state_val_59419 === (5))){
var inst_59398 = (state_59418[(8)]);
var inst_59395 = (state_59418[(7)]);
var inst_59402 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_59398,inst_59395);
var state_59418__$1 = state_59418;
if(inst_59402){
var statearr_59431_60111 = state_59418__$1;
(statearr_59431_60111[(1)] = (8));

} else {
var statearr_59432_60112 = state_59418__$1;
(statearr_59432_60112[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59419 === (10))){
var inst_59410 = (state_59418[(2)]);
var state_59418__$1 = state_59418;
var statearr_59433_60113 = state_59418__$1;
(statearr_59433_60113[(2)] = inst_59410);

(statearr_59433_60113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59419 === (8))){
var inst_59395 = (state_59418[(7)]);
var tmp59430 = inst_59395;
var inst_59395__$1 = tmp59430;
var state_59418__$1 = (function (){var statearr_59434 = state_59418;
(statearr_59434[(7)] = inst_59395__$1);

return statearr_59434;
})();
var statearr_59435_60114 = state_59418__$1;
(statearr_59435_60114[(2)] = null);

(statearr_59435_60114[(1)] = (2));


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
var cljs$core$async$state_machine__57895__auto__ = null;
var cljs$core$async$state_machine__57895__auto____0 = (function (){
var statearr_59436 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_59436[(0)] = cljs$core$async$state_machine__57895__auto__);

(statearr_59436[(1)] = (1));

return statearr_59436;
});
var cljs$core$async$state_machine__57895__auto____1 = (function (state_59418){
while(true){
var ret_value__57896__auto__ = (function (){try{while(true){
var result__57897__auto__ = switch__57894__auto__(state_59418);
if(cljs.core.keyword_identical_QMARK_(result__57897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57897__auto__;
}
break;
}
}catch (e59437){var ex__57898__auto__ = e59437;
var statearr_59438_60115 = state_59418;
(statearr_59438_60115[(2)] = ex__57898__auto__);


if(cljs.core.seq((state_59418[(4)]))){
var statearr_59439_60116 = state_59418;
(statearr_59439_60116[(1)] = cljs.core.first((state_59418[(4)])));

} else {
throw ex__57898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60117 = state_59418;
state_59418 = G__60117;
continue;
} else {
return ret_value__57896__auto__;
}
break;
}
});
cljs$core$async$state_machine__57895__auto__ = function(state_59418){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57895__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57895__auto____1.call(this,state_59418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__57895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57895__auto____0;
cljs$core$async$state_machine__57895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57895__auto____1;
return cljs$core$async$state_machine__57895__auto__;
})()
})();
var state__58098__auto__ = (function (){var statearr_59440 = f__58097__auto__();
(statearr_59440[(6)] = c__58096__auto___60104);

return statearr_59440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58098__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__59442 = arguments.length;
switch (G__59442) {
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
var c__58096__auto___60119 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58097__auto__ = (function (){var switch__57894__auto__ = (function (state_59480){
var state_val_59481 = (state_59480[(1)]);
if((state_val_59481 === (7))){
var inst_59476 = (state_59480[(2)]);
var state_59480__$1 = state_59480;
var statearr_59482_60120 = state_59480__$1;
(statearr_59482_60120[(2)] = inst_59476);

(statearr_59482_60120[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59481 === (1))){
var inst_59443 = (new Array(n));
var inst_59444 = inst_59443;
var inst_59445 = (0);
var state_59480__$1 = (function (){var statearr_59483 = state_59480;
(statearr_59483[(7)] = inst_59444);

(statearr_59483[(8)] = inst_59445);

return statearr_59483;
})();
var statearr_59484_60121 = state_59480__$1;
(statearr_59484_60121[(2)] = null);

(statearr_59484_60121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59481 === (4))){
var inst_59448 = (state_59480[(9)]);
var inst_59448__$1 = (state_59480[(2)]);
var inst_59449 = (inst_59448__$1 == null);
var inst_59450 = cljs.core.not(inst_59449);
var state_59480__$1 = (function (){var statearr_59485 = state_59480;
(statearr_59485[(9)] = inst_59448__$1);

return statearr_59485;
})();
if(inst_59450){
var statearr_59486_60123 = state_59480__$1;
(statearr_59486_60123[(1)] = (5));

} else {
var statearr_59487_60124 = state_59480__$1;
(statearr_59487_60124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59481 === (15))){
var inst_59470 = (state_59480[(2)]);
var state_59480__$1 = state_59480;
var statearr_59488_60125 = state_59480__$1;
(statearr_59488_60125[(2)] = inst_59470);

(statearr_59488_60125[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59481 === (13))){
var state_59480__$1 = state_59480;
var statearr_59489_60126 = state_59480__$1;
(statearr_59489_60126[(2)] = null);

(statearr_59489_60126[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59481 === (6))){
var inst_59445 = (state_59480[(8)]);
var inst_59466 = (inst_59445 > (0));
var state_59480__$1 = state_59480;
if(cljs.core.truth_(inst_59466)){
var statearr_59490_60127 = state_59480__$1;
(statearr_59490_60127[(1)] = (12));

} else {
var statearr_59491_60128 = state_59480__$1;
(statearr_59491_60128[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59481 === (3))){
var inst_59478 = (state_59480[(2)]);
var state_59480__$1 = state_59480;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59480__$1,inst_59478);
} else {
if((state_val_59481 === (12))){
var inst_59444 = (state_59480[(7)]);
var inst_59468 = cljs.core.vec(inst_59444);
var state_59480__$1 = state_59480;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59480__$1,(15),out,inst_59468);
} else {
if((state_val_59481 === (2))){
var state_59480__$1 = state_59480;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59480__$1,(4),ch);
} else {
if((state_val_59481 === (11))){
var inst_59460 = (state_59480[(2)]);
var inst_59461 = (new Array(n));
var inst_59444 = inst_59461;
var inst_59445 = (0);
var state_59480__$1 = (function (){var statearr_59492 = state_59480;
(statearr_59492[(7)] = inst_59444);

(statearr_59492[(10)] = inst_59460);

(statearr_59492[(8)] = inst_59445);

return statearr_59492;
})();
var statearr_59493_60129 = state_59480__$1;
(statearr_59493_60129[(2)] = null);

(statearr_59493_60129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59481 === (9))){
var inst_59444 = (state_59480[(7)]);
var inst_59458 = cljs.core.vec(inst_59444);
var state_59480__$1 = state_59480;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59480__$1,(11),out,inst_59458);
} else {
if((state_val_59481 === (5))){
var inst_59444 = (state_59480[(7)]);
var inst_59448 = (state_59480[(9)]);
var inst_59445 = (state_59480[(8)]);
var inst_59453 = (state_59480[(11)]);
var inst_59452 = (inst_59444[inst_59445] = inst_59448);
var inst_59453__$1 = (inst_59445 + (1));
var inst_59454 = (inst_59453__$1 < n);
var state_59480__$1 = (function (){var statearr_59494 = state_59480;
(statearr_59494[(12)] = inst_59452);

(statearr_59494[(11)] = inst_59453__$1);

return statearr_59494;
})();
if(cljs.core.truth_(inst_59454)){
var statearr_59495_60134 = state_59480__$1;
(statearr_59495_60134[(1)] = (8));

} else {
var statearr_59496_60135 = state_59480__$1;
(statearr_59496_60135[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59481 === (14))){
var inst_59473 = (state_59480[(2)]);
var inst_59474 = cljs.core.async.close_BANG_(out);
var state_59480__$1 = (function (){var statearr_59498 = state_59480;
(statearr_59498[(13)] = inst_59473);

return statearr_59498;
})();
var statearr_59499_60136 = state_59480__$1;
(statearr_59499_60136[(2)] = inst_59474);

(statearr_59499_60136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59481 === (10))){
var inst_59464 = (state_59480[(2)]);
var state_59480__$1 = state_59480;
var statearr_59500_60137 = state_59480__$1;
(statearr_59500_60137[(2)] = inst_59464);

(statearr_59500_60137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59481 === (8))){
var inst_59444 = (state_59480[(7)]);
var inst_59453 = (state_59480[(11)]);
var tmp59497 = inst_59444;
var inst_59444__$1 = tmp59497;
var inst_59445 = inst_59453;
var state_59480__$1 = (function (){var statearr_59501 = state_59480;
(statearr_59501[(7)] = inst_59444__$1);

(statearr_59501[(8)] = inst_59445);

return statearr_59501;
})();
var statearr_59502_60138 = state_59480__$1;
(statearr_59502_60138[(2)] = null);

(statearr_59502_60138[(1)] = (2));


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
var cljs$core$async$state_machine__57895__auto__ = null;
var cljs$core$async$state_machine__57895__auto____0 = (function (){
var statearr_59503 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59503[(0)] = cljs$core$async$state_machine__57895__auto__);

(statearr_59503[(1)] = (1));

return statearr_59503;
});
var cljs$core$async$state_machine__57895__auto____1 = (function (state_59480){
while(true){
var ret_value__57896__auto__ = (function (){try{while(true){
var result__57897__auto__ = switch__57894__auto__(state_59480);
if(cljs.core.keyword_identical_QMARK_(result__57897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57897__auto__;
}
break;
}
}catch (e59504){var ex__57898__auto__ = e59504;
var statearr_59505_60139 = state_59480;
(statearr_59505_60139[(2)] = ex__57898__auto__);


if(cljs.core.seq((state_59480[(4)]))){
var statearr_59506_60140 = state_59480;
(statearr_59506_60140[(1)] = cljs.core.first((state_59480[(4)])));

} else {
throw ex__57898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60141 = state_59480;
state_59480 = G__60141;
continue;
} else {
return ret_value__57896__auto__;
}
break;
}
});
cljs$core$async$state_machine__57895__auto__ = function(state_59480){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57895__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57895__auto____1.call(this,state_59480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__57895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57895__auto____0;
cljs$core$async$state_machine__57895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57895__auto____1;
return cljs$core$async$state_machine__57895__auto__;
})()
})();
var state__58098__auto__ = (function (){var statearr_59507 = f__58097__auto__();
(statearr_59507[(6)] = c__58096__auto___60119);

return statearr_59507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58098__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__59509 = arguments.length;
switch (G__59509) {
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
var c__58096__auto___60143 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58097__auto__ = (function (){var switch__57894__auto__ = (function (state_59554){
var state_val_59555 = (state_59554[(1)]);
if((state_val_59555 === (7))){
var inst_59550 = (state_59554[(2)]);
var state_59554__$1 = state_59554;
var statearr_59556_60144 = state_59554__$1;
(statearr_59556_60144[(2)] = inst_59550);

(statearr_59556_60144[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59555 === (1))){
var inst_59510 = [];
var inst_59511 = inst_59510;
var inst_59512 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_59554__$1 = (function (){var statearr_59557 = state_59554;
(statearr_59557[(7)] = inst_59511);

(statearr_59557[(8)] = inst_59512);

return statearr_59557;
})();
var statearr_59558_60145 = state_59554__$1;
(statearr_59558_60145[(2)] = null);

(statearr_59558_60145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59555 === (4))){
var inst_59515 = (state_59554[(9)]);
var inst_59515__$1 = (state_59554[(2)]);
var inst_59516 = (inst_59515__$1 == null);
var inst_59517 = cljs.core.not(inst_59516);
var state_59554__$1 = (function (){var statearr_59559 = state_59554;
(statearr_59559[(9)] = inst_59515__$1);

return statearr_59559;
})();
if(inst_59517){
var statearr_59560_60146 = state_59554__$1;
(statearr_59560_60146[(1)] = (5));

} else {
var statearr_59561_60147 = state_59554__$1;
(statearr_59561_60147[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59555 === (15))){
var inst_59511 = (state_59554[(7)]);
var inst_59542 = cljs.core.vec(inst_59511);
var state_59554__$1 = state_59554;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59554__$1,(18),out,inst_59542);
} else {
if((state_val_59555 === (13))){
var inst_59537 = (state_59554[(2)]);
var state_59554__$1 = state_59554;
var statearr_59562_60148 = state_59554__$1;
(statearr_59562_60148[(2)] = inst_59537);

(statearr_59562_60148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59555 === (6))){
var inst_59511 = (state_59554[(7)]);
var inst_59539 = inst_59511.length;
var inst_59540 = (inst_59539 > (0));
var state_59554__$1 = state_59554;
if(cljs.core.truth_(inst_59540)){
var statearr_59563_60149 = state_59554__$1;
(statearr_59563_60149[(1)] = (15));

} else {
var statearr_59564_60150 = state_59554__$1;
(statearr_59564_60150[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59555 === (17))){
var inst_59547 = (state_59554[(2)]);
var inst_59548 = cljs.core.async.close_BANG_(out);
var state_59554__$1 = (function (){var statearr_59565 = state_59554;
(statearr_59565[(10)] = inst_59547);

return statearr_59565;
})();
var statearr_59566_60151 = state_59554__$1;
(statearr_59566_60151[(2)] = inst_59548);

(statearr_59566_60151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59555 === (3))){
var inst_59552 = (state_59554[(2)]);
var state_59554__$1 = state_59554;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59554__$1,inst_59552);
} else {
if((state_val_59555 === (12))){
var inst_59511 = (state_59554[(7)]);
var inst_59530 = cljs.core.vec(inst_59511);
var state_59554__$1 = state_59554;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59554__$1,(14),out,inst_59530);
} else {
if((state_val_59555 === (2))){
var state_59554__$1 = state_59554;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59554__$1,(4),ch);
} else {
if((state_val_59555 === (11))){
var inst_59519 = (state_59554[(11)]);
var inst_59515 = (state_59554[(9)]);
var inst_59511 = (state_59554[(7)]);
var inst_59527 = inst_59511.push(inst_59515);
var tmp59567 = inst_59511;
var inst_59511__$1 = tmp59567;
var inst_59512 = inst_59519;
var state_59554__$1 = (function (){var statearr_59568 = state_59554;
(statearr_59568[(12)] = inst_59527);

(statearr_59568[(7)] = inst_59511__$1);

(statearr_59568[(8)] = inst_59512);

return statearr_59568;
})();
var statearr_59569_60156 = state_59554__$1;
(statearr_59569_60156[(2)] = null);

(statearr_59569_60156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59555 === (9))){
var inst_59512 = (state_59554[(8)]);
var inst_59523 = cljs.core.keyword_identical_QMARK_(inst_59512,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_59554__$1 = state_59554;
var statearr_59570_60157 = state_59554__$1;
(statearr_59570_60157[(2)] = inst_59523);

(statearr_59570_60157[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59555 === (5))){
var inst_59519 = (state_59554[(11)]);
var inst_59515 = (state_59554[(9)]);
var inst_59520 = (state_59554[(13)]);
var inst_59512 = (state_59554[(8)]);
var inst_59519__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_59515) : f.call(null,inst_59515));
var inst_59520__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_59519__$1,inst_59512);
var state_59554__$1 = (function (){var statearr_59571 = state_59554;
(statearr_59571[(11)] = inst_59519__$1);

(statearr_59571[(13)] = inst_59520__$1);

return statearr_59571;
})();
if(inst_59520__$1){
var statearr_59572_60158 = state_59554__$1;
(statearr_59572_60158[(1)] = (8));

} else {
var statearr_59573_60159 = state_59554__$1;
(statearr_59573_60159[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59555 === (14))){
var inst_59519 = (state_59554[(11)]);
var inst_59515 = (state_59554[(9)]);
var inst_59532 = (state_59554[(2)]);
var inst_59533 = [];
var inst_59534 = inst_59533.push(inst_59515);
var inst_59511 = inst_59533;
var inst_59512 = inst_59519;
var state_59554__$1 = (function (){var statearr_59574 = state_59554;
(statearr_59574[(14)] = inst_59532);

(statearr_59574[(15)] = inst_59534);

(statearr_59574[(7)] = inst_59511);

(statearr_59574[(8)] = inst_59512);

return statearr_59574;
})();
var statearr_59575_60160 = state_59554__$1;
(statearr_59575_60160[(2)] = null);

(statearr_59575_60160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59555 === (16))){
var state_59554__$1 = state_59554;
var statearr_59576_60161 = state_59554__$1;
(statearr_59576_60161[(2)] = null);

(statearr_59576_60161[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59555 === (10))){
var inst_59525 = (state_59554[(2)]);
var state_59554__$1 = state_59554;
if(cljs.core.truth_(inst_59525)){
var statearr_59577_60162 = state_59554__$1;
(statearr_59577_60162[(1)] = (11));

} else {
var statearr_59578_60163 = state_59554__$1;
(statearr_59578_60163[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59555 === (18))){
var inst_59544 = (state_59554[(2)]);
var state_59554__$1 = state_59554;
var statearr_59579_60164 = state_59554__$1;
(statearr_59579_60164[(2)] = inst_59544);

(statearr_59579_60164[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59555 === (8))){
var inst_59520 = (state_59554[(13)]);
var state_59554__$1 = state_59554;
var statearr_59580_60165 = state_59554__$1;
(statearr_59580_60165[(2)] = inst_59520);

(statearr_59580_60165[(1)] = (10));


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
var cljs$core$async$state_machine__57895__auto__ = null;
var cljs$core$async$state_machine__57895__auto____0 = (function (){
var statearr_59581 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59581[(0)] = cljs$core$async$state_machine__57895__auto__);

(statearr_59581[(1)] = (1));

return statearr_59581;
});
var cljs$core$async$state_machine__57895__auto____1 = (function (state_59554){
while(true){
var ret_value__57896__auto__ = (function (){try{while(true){
var result__57897__auto__ = switch__57894__auto__(state_59554);
if(cljs.core.keyword_identical_QMARK_(result__57897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57897__auto__;
}
break;
}
}catch (e59582){var ex__57898__auto__ = e59582;
var statearr_59583_60166 = state_59554;
(statearr_59583_60166[(2)] = ex__57898__auto__);


if(cljs.core.seq((state_59554[(4)]))){
var statearr_59584_60167 = state_59554;
(statearr_59584_60167[(1)] = cljs.core.first((state_59554[(4)])));

} else {
throw ex__57898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__57896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60168 = state_59554;
state_59554 = G__60168;
continue;
} else {
return ret_value__57896__auto__;
}
break;
}
});
cljs$core$async$state_machine__57895__auto__ = function(state_59554){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57895__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57895__auto____1.call(this,state_59554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__57895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57895__auto____0;
cljs$core$async$state_machine__57895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57895__auto____1;
return cljs$core$async$state_machine__57895__auto__;
})()
})();
var state__58098__auto__ = (function (){var statearr_59585 = f__58097__auto__();
(statearr_59585[(6)] = c__58096__auto___60143);

return statearr_59585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58098__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
