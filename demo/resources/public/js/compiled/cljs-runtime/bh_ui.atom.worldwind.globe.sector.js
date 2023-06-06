goog.provide('bh_ui.atom.worldwind.globe.sector');
bh_ui.atom.worldwind.globe.sector.sector = (function bh_ui$atom$worldwind$globe$sector$sector(var_args){
var G__59562 = arguments.length;
switch (G__59562) {
case 1:
return bh_ui.atom.worldwind.globe.sector.sector.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return bh_ui.atom.worldwind.globe.sector.sector.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bh_ui.atom.worldwind.globe.sector.sector.cljs$core$IFn$_invoke$arity$1 = (function (p__59563){
var vec__59564 = p__59563;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59564,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59564,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59564,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59564,(3),null);
return (new shadow.js.shim.module$worldwindjs.Sector(a,b,c,d));
}));

(bh_ui.atom.worldwind.globe.sector.sector.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
return (new shadow.js.shim.module$worldwindjs.Sector(a,b,c,d));
}));

(bh_ui.atom.worldwind.globe.sector.sector.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=bh_ui.atom.worldwind.globe.sector.js.map
