goog.provide('bh_ui.atom.re_com.configure_toggle');
/**
 * display a button that shows the 'settings' icon whn the user can clck
 *   to start editing/configuring things, and the 'floppy' icon when the user can save those changes
 * 
 *   ---
 * 
 *   - show? : (atom) should the button show the 'save' icon (true) or the 'settings' icon (false)
 *   - fn-to-apply : (fn) any function to call in addition to flipping the 'show?' atom back and forth
 *   
 */
bh_ui.atom.re_com.configure_toggle.configure_toggle = (function bh_ui$atom$re_com$configure_toggle$configure_toggle(var_args){
var G__51048 = arguments.length;
switch (G__51048) {
case 2:
return bh_ui.atom.re_com.configure_toggle.configure_toggle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return bh_ui.atom.re_com.configure_toggle.configure_toggle.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bh_ui.atom.re_com.configure_toggle.configure_toggle.cljs$core$IFn$_invoke$arity$2 = (function (show_QMARK_,fn_to_apply){
var make_editable_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-settings",new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),"Configure this chart"], null);
var save_editable_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-floppy",new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),"Save the configuration"], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_icon_button], null),cljs.core.flatten(cljs.core.seq(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(show_QMARK_,cljs.core.not);

if(cljs.core.truth_(fn_to_apply)){
return (fn_to_apply.cljs$core$IFn$_invoke$arity$0 ? fn_to_apply.cljs$core$IFn$_invoke$arity$0() : fn_to_apply.call(null));
} else {
return null;
}
})], null),(cljs.core.truth_(cljs.core.deref(show_QMARK_))?save_editable_style:make_editable_style)], 0)))));
}));

(bh_ui.atom.re_com.configure_toggle.configure_toggle.cljs$core$IFn$_invoke$arity$1 = (function (show_QMARK_){
return bh_ui.atom.re_com.configure_toggle.configure_toggle.cljs$core$IFn$_invoke$arity$2(show_QMARK_,null);
}));

(bh_ui.atom.re_com.configure_toggle.configure_toggle.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=bh_ui.atom.re_com.configure_toggle.js.map
