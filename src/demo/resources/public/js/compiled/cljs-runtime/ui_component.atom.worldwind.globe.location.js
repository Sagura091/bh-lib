goog.provide('ui_component.atom.worldwind.globe.location');
ui_component.atom.worldwind.globe.location.location = (function ui_component$atom$worldwind$globe$location$location(var_args){
var G__59516 = arguments.length;
switch (G__59516) {
case 1:
return ui_component.atom.worldwind.globe.location.location.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return ui_component.atom.worldwind.globe.location.location.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(ui_component.atom.worldwind.globe.location.location.cljs$core$IFn$_invoke$arity$1 = (function (p__59517){
var vec__59518 = p__59517;
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59518,(0),null);
var lon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59518,(1),null);
return (new shadow.js.shim.module$worldwindjs.Location(lat,lon));
}));

(ui_component.atom.worldwind.globe.location.location.cljs$core$IFn$_invoke$arity$2 = (function (lat,lon){
return (new shadow.js.shim.module$worldwindjs.Location(lat,lon));
}));

(ui_component.atom.worldwind.globe.location.location.cljs$lang$maxFixedArity = 2);

ui_component.atom.worldwind.globe.location.position = (function ui_component$atom$worldwind$globe$location$position(var_args){
var G__59522 = arguments.length;
switch (G__59522) {
case 1:
return ui_component.atom.worldwind.globe.location.position.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return ui_component.atom.worldwind.globe.location.position.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(ui_component.atom.worldwind.globe.location.position.cljs$core$IFn$_invoke$arity$1 = (function (p__59523){
var vec__59524 = p__59523;
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59524,(0),null);
var lon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59524,(1),null);
return (new shadow.js.shim.module$worldwindjs.Position(lat,lon,(100)));
}));

(ui_component.atom.worldwind.globe.location.position.cljs$core$IFn$_invoke$arity$2 = (function (lat,lon){
return (new shadow.js.shim.module$worldwindjs.Position(lat,lon,(100)));
}));

(ui_component.atom.worldwind.globe.location.position.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=ui_component.atom.worldwind.globe.location.js.map
