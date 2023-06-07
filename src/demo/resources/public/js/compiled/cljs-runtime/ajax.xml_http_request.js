goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__69820 = e.target.readyState;
var fexpr__69819 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__69819.cljs$core$IFn$_invoke$arity$1 ? fexpr__69819.cljs$core$IFn$_invoke$arity$1(G__69820) : fexpr__69819.call(null,G__69820));
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

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__69847,handler){
var map__69848 = p__69847;
var map__69848__$1 = cljs.core.__destructure_map(map__69848);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69848__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69848__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69848__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69848__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__69848__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__69848__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69848__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__69845_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__69845_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5753__auto___69908 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5753__auto___69908)){
var response_type_69909 = temp__5753__auto___69908;
(this$__$1.responseType = cljs.core.name(response_type_69909));
} else {
}

var seq__69849_69910 = cljs.core.seq(headers);
var chunk__69850_69911 = null;
var count__69851_69912 = (0);
var i__69852_69913 = (0);
while(true){
if((i__69852_69913 < count__69851_69912)){
var vec__69864_69914 = chunk__69850_69911.cljs$core$IIndexed$_nth$arity$2(null,i__69852_69913);
var k_69915 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69864_69914,(0),null);
var v_69916 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69864_69914,(1),null);
this$__$1.setRequestHeader(k_69915,v_69916);


var G__69917 = seq__69849_69910;
var G__69918 = chunk__69850_69911;
var G__69919 = count__69851_69912;
var G__69920 = (i__69852_69913 + (1));
seq__69849_69910 = G__69917;
chunk__69850_69911 = G__69918;
count__69851_69912 = G__69919;
i__69852_69913 = G__69920;
continue;
} else {
var temp__5753__auto___69921 = cljs.core.seq(seq__69849_69910);
if(temp__5753__auto___69921){
var seq__69849_69922__$1 = temp__5753__auto___69921;
if(cljs.core.chunked_seq_QMARK_(seq__69849_69922__$1)){
var c__4679__auto___69923 = cljs.core.chunk_first(seq__69849_69922__$1);
var G__69924 = cljs.core.chunk_rest(seq__69849_69922__$1);
var G__69925 = c__4679__auto___69923;
var G__69926 = cljs.core.count(c__4679__auto___69923);
var G__69927 = (0);
seq__69849_69910 = G__69924;
chunk__69850_69911 = G__69925;
count__69851_69912 = G__69926;
i__69852_69913 = G__69927;
continue;
} else {
var vec__69870_69928 = cljs.core.first(seq__69849_69922__$1);
var k_69929 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69870_69928,(0),null);
var v_69930 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69870_69928,(1),null);
this$__$1.setRequestHeader(k_69929,v_69930);


var G__69931 = cljs.core.next(seq__69849_69922__$1);
var G__69932 = null;
var G__69933 = (0);
var G__69934 = (0);
seq__69849_69910 = G__69931;
chunk__69850_69911 = G__69932;
count__69851_69912 = G__69933;
i__69852_69913 = G__69934;
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
