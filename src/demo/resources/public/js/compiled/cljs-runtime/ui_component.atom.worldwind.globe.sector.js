goog.provide('ui_component.atom.worldwind.globe.sector');
ui_component.atom.worldwind.globe.sector.sector = (function ui_component$atom$worldwind$globe$sector$sector(var_args){
var G__59542 = arguments.length;
switch (G__59542) {
case 1:
return ui_component.atom.worldwind.globe.sector.sector.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return ui_component.atom.worldwind.globe.sector.sector.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(ui_component.atom.worldwind.globe.sector.sector.cljs$core$IFn$_invoke$arity$1 = (function (p__59543){
var vec__59545 = p__59543;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59545,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59545,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59545,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59545,(3),null);
return (new shadow.js.shim.module$worldwindjs.Sector(a,b,c,d));
}));

(ui_component.atom.worldwind.globe.sector.sector.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
return (new shadow.js.shim.module$worldwindjs.Sector(a,b,c,d));
}));

(ui_component.atom.worldwind.globe.sector.sector.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=ui_component.atom.worldwind.globe.sector.js.map
