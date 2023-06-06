goog.provide('bh_ui.atom.bhui.navbar');
/**
 * uses woolybear/tab-bar to put controls on the UI that activate different
 *   pages of the UI.
 * 
 *   ---
 * 
 *   - children : (vector of pairs) each pair consists of: `[ panel-id label ]`
 *   - subscription : (re-frame subscription vector) subscription to the correct state for this tabb-panel collection
 * 
 *   > See also:
 *   >
 *   > [Woolybear/tab-bar](https://github.com/cawasser/woolybear/blob/a7f820dfb2f51636122d56d1500baefe5733eb25/src/cljs/woolybear/packs/tab_panel.cljs#L61)
 *   
 */
bh_ui.atom.bhui.navbar.navbar = (function bh_ui$atom$bhui$navbar$navbar(children,subcription){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.packs.tab_panel.tab_bar,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843),new cljs.core.Keyword(null,"is-fluid","is-fluid",1776512135),new cljs.core.Keyword(null,"subscribe-to-component-data","subscribe-to-component-data",1209998418),subcription], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__48535){
var vec__48536 = p__48535;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48536,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48536,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [woolybear.ad.buttons.tab_button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"panel-id","panel-id",2118466015),id], null),label], null);
}),children));
});

//# sourceMappingURL=bh_ui.atom.bhui.navbar.js.map
