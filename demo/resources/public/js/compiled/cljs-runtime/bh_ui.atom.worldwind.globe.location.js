goog.provide('bh_ui.atom.worldwind.globe.location');
bh_ui.atom.worldwind.globe.location.location = (function bh_ui$atom$worldwind$globe$location$location(var_args){
var G__59526 = arguments.length;
switch (G__59526) {
case 1:
return bh_ui.atom.worldwind.globe.location.location.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bh_ui.atom.worldwind.globe.location.location.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bh_ui.atom.worldwind.globe.location.location.cljs$core$IFn$_invoke$arity$1 = (function (p__59531){
var vec__59532 = p__59531;
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59532,(0),null);
var lon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59532,(1),null);
return (new shadow.js.shim.module$worldwindjs.Location(lat,lon));
}));

(bh_ui.atom.worldwind.globe.location.location.cljs$core$IFn$_invoke$arity$2 = (function (lat,lon){
return (new shadow.js.shim.module$worldwindjs.Location(lat,lon));
}));

(bh_ui.atom.worldwind.globe.location.location.cljs$lang$maxFixedArity = 2);

bh_ui.atom.worldwind.globe.location.position = (function bh_ui$atom$worldwind$globe$location$position(var_args){
var G__59536 = arguments.length;
switch (G__59536) {
case 1:
return bh_ui.atom.worldwind.globe.location.position.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bh_ui.atom.worldwind.globe.location.position.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bh_ui.atom.worldwind.globe.location.position.cljs$core$IFn$_invoke$arity$1 = (function (p__59540){
var vec__59541 = p__59540;
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59541,(0),null);
var lon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59541,(1),null);
return (new shadow.js.shim.module$worldwindjs.Position(lat,lon,(100)));
}));

(bh_ui.atom.worldwind.globe.location.position.cljs$core$IFn$_invoke$arity$2 = (function (lat,lon){
return (new shadow.js.shim.module$worldwindjs.Position(lat,lon,(100)));
}));

(bh_ui.atom.worldwind.globe.location.position.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=bh_ui.atom.worldwind.globe.location.js.map
