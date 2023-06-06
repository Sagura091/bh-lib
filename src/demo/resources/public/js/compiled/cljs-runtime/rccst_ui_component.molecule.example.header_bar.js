goog.provide('rccst_ui_component.molecule.example.header_bar');
rccst_ui_component.molecule.example.header_bar.example = (function rccst_ui_component$molecule$example$header_bar$example(){
var version = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","version","subs/version",-507796820)], null));
var uuid = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","uuid","subs/uuid",-679018265)], null));
return woolybear.ad.demo.src.catalog.utils.demo.cljs$core$IFn$_invoke$arity$variadic("Header Bar",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["A stylized header for an applications. Includes the version number provided by the server.",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.layout.centered,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.re_com.header_bar.header_bar,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"RCCST"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"rccst_ui_component/molecule/example/header_bar.cljs",new cljs.core.Keyword(null,"line","line",212345235),23], null)),new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.is-small","h5.is-small",1415590666),"version: ",(function (){var or__4253__auto__ = cljs.core.deref(version);
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
})()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui_component.atom.re_com.button.button,"Log Off",(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("events","logoff","events/logoff",-483695973)], null));
}),"Log Off"], null)], null)], null)], null)], null)], null),cljs.core.PersistentVector.EMPTY], 0));
});

//# sourceMappingURL=rccst_ui_component.molecule.example.header_bar.js.map
