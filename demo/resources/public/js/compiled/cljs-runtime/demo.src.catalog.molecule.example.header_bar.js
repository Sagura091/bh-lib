goog.provide('demo.src.catalog.molecule.example.header_bar');
demo.src.catalog.molecule.example.header_bar.example = (function demo$src$catalog$molecule$example$header_bar$example(){
var version = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("demo.subs","version","demo.subs/version",-954533892)], null));
var uuid = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("demo.subs","uuid","demo.subs/uuid",811789111)], null));
var G__59911 = "Header Bar";
var G__59912 = "A stylized header for an applications. Includes the version number provided by the server.";
var G__59913 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.layout.centered,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.re_com.header_bar.header_bar,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"RCCST"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"demo/src/catalog/molecule/example/header_bar.cljs",new cljs.core.Keyword(null,"line","line",212345235),23], null)),new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.is-small","h5.is-small",1415590666),"version: ",(function (){var or__4253__auto__ = cljs.core.deref(version);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "unknown";
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.is-small","h5.is-small",1415590666),(function (){var or__4253__auto__ = cljs.core.deref(uuid);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "none";
}
})()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bh_ui.atom.re_com.button.button,"Log Off",(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("demo.events","logoff","demo.events/logoff",-1790522261)], null));
}),"Log Off"], null)], null)], null)], null)], null)], null);
var G__59914 = cljs.core.PersistentVector.EMPTY;
return (woolybear.ad.utils.demo.cljs$core$IFn$_invoke$arity$4 ? woolybear.ad.utils.demo.cljs$core$IFn$_invoke$arity$4(G__59911,G__59912,G__59913,G__59914) : woolybear.ad.utils.demo.call(null,G__59911,G__59912,G__59913,G__59914));
});

//# sourceMappingURL=demo.src.catalog.molecule.example.header_bar.js.map
