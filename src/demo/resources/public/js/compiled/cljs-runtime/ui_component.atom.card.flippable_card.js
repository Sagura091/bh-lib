goog.provide('ui_component.atom.card.flippable_card');
ui_component.atom.card.flippable_card.source_code = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flip-card","div.flip-card",-1976961199),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"style","style",1143888791,null),new cljs.core.Symbol(null,"default-style","default-style",-192704797,null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flip-card-inner","div.flip-card-inner",-2059581724),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flip-card-front","div.flip-card-front",1512641650),new cljs.core.Symbol(null,"front","front",117022539,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flip-card-back","div.flip-card-back",1332698471),new cljs.core.Symbol(null,"back","back",1223011515,null)], null)], null)], null);
ui_component.atom.card.flippable_card.default_background = "#9CA8B3";
ui_component.atom.card.flippable_card.default_color = "#FF";
ui_component.atom.card.flippable_card.default_style = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"backgroundSize","backgroundSize",-1439489804),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"height","height",1025178622)],[new cljs.core.Keyword(null,"center","center",-748944368),ui_component.atom.card.flippable_card.default_color,"hidden","100%",ui_component.atom.card.flippable_card.default_background,"contain",new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"column","column",2078222095),"100%"]);
ui_component.atom.card.flippable_card.default_size = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),(400)], null);
/**
 * returns a 'flippable card' react component (via [react-ui-cards](https://github.com/nukeop/react-ui-cards)).
 * 
 *   Works similar to [re-com](https://github.com/Day8/re-com) where the arguments are 'named` by keyword, but ***not***
 *   required to be inside a hash-map.
 *   We very cleverly combine Clojure's [variadics](https://clojure.org/guides/learn/functions#_variadic_functions) with
 *   [destructuring](https://clojure.org/guides/destructuring) to treat the 'exploded' key/value pairs
 *   as if they _had_ come from a hash-map...
 * 
 *   ---
 * 
 *   | key       | type     | description                                               |
 *   |:----------|:---------|-----------------------------------------------------------|
 *   | `:front`  | hiccup   | a reagent/react component, typically in [hiccup]() format for the front (unflipped) side of the card |
 *   | `:back`   | hiccup   | a reagent/react component, typically in [hiccup]() format for the back (flipped) side of the card |
 *   | `:style`  | hash-map | hash-map of any html/css style properties (minus the `:style` part itself, i.e., just the content part), typically used to specify the `:width` and `:height` of the card |
 * 
 * > Note: this library does NOT work properly on Webkit/Safari due to problems with the CSS. It
 * > should be possible to replace this library with just some `divs` and the proper CSS.
 * >
 * > See [here](https://line25.com/articles/super-cool-css-flip-effect-with-webkit-animation/) for an approach.
 *   
 */
ui_component.atom.card.flippable_card.card = (function ui_component$atom$card$flippable_card$card(var_args){
var args__4870__auto__ = [];
var len__4864__auto___50920 = arguments.length;
var i__4865__auto___50921 = (0);
while(true){
if((i__4865__auto___50921 < len__4864__auto___50920)){
args__4870__auto__.push((arguments[i__4865__auto___50921]));

var G__50922 = (i__4865__auto___50921 + (1));
i__4865__auto___50921 = G__50922;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return ui_component.atom.card.flippable_card.card.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(ui_component.atom.card.flippable_card.card.cljs$core$IFn$_invoke$arity$variadic = (function (p__50918){
var map__50919 = p__50918;
var map__50919__$1 = cljs.core.__destructure_map(map__50919);
var front = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50919__$1,new cljs.core.Keyword(null,"front","front",-1523508988));
var back = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50919__$1,new cljs.core.Keyword(null,"back","back",-417520012));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50919__$1,new cljs.core.Keyword(null,"style","style",-496642736));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flip-card","div.flip-card",-1976961199),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),(function (){var or__4253__auto__ = style;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return ui_component.atom.card.flippable_card.default_style;
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flip-card-inner","div.flip-card-inner",-2059581724),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flip-card-front","div.flip-card-front",1512641650),front], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flip-card-back","div.flip-card-back",1332698471),back], null)], null)], null);
}));

(ui_component.atom.card.flippable_card.card.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(ui_component.atom.card.flippable_card.card.cljs$lang$applyTo = (function (seq50917){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50917));
}));


//# sourceMappingURL=ui_component.atom.card.flippable_card.js.map
