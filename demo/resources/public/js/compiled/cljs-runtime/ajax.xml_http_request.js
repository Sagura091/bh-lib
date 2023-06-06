goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__46821 = e.target.readyState;
var fexpr__46820 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__46820.cljs$core$IFn$_invoke$arity$1 ? fexpr__46820.cljs$core$IFn$_invoke$arity$1(G__46821) : fexpr__46820.call(null,G__46821));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = (((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.XMLHttpRequest !== 'undefined'))?goog.global.XMLHttpRequest:(((typeof require !== 'undefined'))?(function (){var req = require;
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1("xmlhttprequest") : req.call(null,"xmlhttprequest")).XMLHttpRequest;
})():null));
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__46827,handler){
var map__46828 = p__46827;
var map__46828__$1 = cljs.core.__destructure_map(map__46828);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46828__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46828__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46828__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46828__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46828__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46828__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46828__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__46826_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__46826_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5753__auto___46872 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5753__auto___46872)){
var response_type_46873 = temp__5753__auto___46872;
(this$__$1.responseType = cljs.core.name(response_type_46873));
} else {
}

var seq__46833_46874 = cljs.core.seq(headers);
var chunk__46834_46875 = null;
var count__46835_46876 = (0);
var i__46836_46877 = (0);
while(true){
if((i__46836_46877 < count__46835_46876)){
var vec__46845_46878 = chunk__46834_46875.cljs$core$IIndexed$_nth$arity$2(null,i__46836_46877);
var k_46879 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46845_46878,(0),null);
var v_46880 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46845_46878,(1),null);
this$__$1.setRequestHeader(k_46879,v_46880);


var G__46882 = seq__46833_46874;
var G__46883 = chunk__46834_46875;
var G__46884 = count__46835_46876;
var G__46885 = (i__46836_46877 + (1));
seq__46833_46874 = G__46882;
chunk__46834_46875 = G__46883;
count__46835_46876 = G__46884;
i__46836_46877 = G__46885;
continue;
} else {
var temp__5753__auto___46886 = cljs.core.seq(seq__46833_46874);
if(temp__5753__auto___46886){
var seq__46833_46890__$1 = temp__5753__auto___46886;
if(cljs.core.chunked_seq_QMARK_(seq__46833_46890__$1)){
var c__4679__auto___46891 = cljs.core.chunk_first(seq__46833_46890__$1);
var G__46892 = cljs.core.chunk_rest(seq__46833_46890__$1);
var G__46893 = c__4679__auto___46891;
var G__46894 = cljs.core.count(c__4679__auto___46891);
var G__46895 = (0);
seq__46833_46874 = G__46892;
chunk__46834_46875 = G__46893;
count__46835_46876 = G__46894;
i__46836_46877 = G__46895;
continue;
} else {
var vec__46851_46896 = cljs.core.first(seq__46833_46890__$1);
var k_46897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46851_46896,(0),null);
var v_46898 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46851_46896,(1),null);
this$__$1.setRequestHeader(k_46897,v_46898);


var G__46900 = cljs.core.next(seq__46833_46890__$1);
var G__46901 = null;
var G__46902 = (0);
var G__46903 = (0);
seq__46833_46874 = G__46900;
chunk__46834_46875 = G__46901;
count__46835_46876 = G__46902;
i__46836_46877 = G__46903;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4253__auto__ = body;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
