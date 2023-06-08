goog.provide('woolybear.tools.interceptors');
/**
 * Throws an exception if the handler returns nil as the value of the db. Catches a
 *   not-uncommon bug that produces some weird symptoms when undetected.
 */
woolybear.tools.interceptors.throw_on_nil_db = re_frame.core.after((function (db,event){
if((db == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Function handler returned nil",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event], null));
} else {
return null;
}
}));

//# sourceMappingURL=woolybear.tools.interceptors.js.map
