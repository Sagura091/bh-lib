goog.provide('demo.src.catalog.atom.example.button.simple_button');
/**
 * Utility for making a fake dispatcher that just reports to the js/console
 */
demo.src.catalog.atom.example.button.simple_button.tattle = (function demo$src$catalog$atom$example$button$simple_button$tattle(evt){
return (function (_){
return console.log("Dispatched %o",evt);
});
});
demo.src.catalog.atom.example.button.simple_button.example = (function demo$src$catalog$atom$example$button$simple_button$example(){
var G__50820 = "Simple button";
var G__50821 = "The generic [buttons/button] component is the base component for a number of common,\n    more-specialized buttons like the OK button, Save button, and Cancel button. Takes the\n    standard extra-classes and subscribe-to-classes options, plus a required on-click\n    option, which specifies the event to dispatch when the button is clicked.";
var G__50822 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.layout.padded,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),demo.src.catalog.atom.example.button.simple_button.tattle(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("button-demo","click","button-demo/click",-303755533),new cljs.core.Keyword("ooo","you-actually-clicked-it!","ooo/you-actually-clicked-it!",-1100273602)], null))], null),"Click me!"], null)], null);
var G__50823 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("layout","padded","layout/padded",-916248757,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("buttons","button","buttons/button",-1233556691,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("button-demo","click","button-demo/click",-303755533),new cljs.core.Keyword("ooo","you-actually-clicked-it!","ooo/you-actually-clicked-it!",-1100273602)], null)], null)], null)], null);
return (woolybear.ad.utils.demo.cljs$core$IFn$_invoke$arity$4 ? woolybear.ad.utils.demo.cljs$core$IFn$_invoke$arity$4(G__50820,G__50821,G__50822,G__50823) : woolybear.ad.utils.demo.call(null,G__50820,G__50821,G__50822,G__50823));
});

//# sourceMappingURL=demo.src.catalog.atom.example.button.simple_button.js.map
