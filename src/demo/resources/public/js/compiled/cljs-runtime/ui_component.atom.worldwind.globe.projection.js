goog.provide('ui_component.atom.worldwind.globe.projection');
ui_component.atom.worldwind.globe.projection.projections = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["3D","Equirectangular","Mercator","North Polar","South Polar","North UPS","South UPS","North Gnomonic","South Gnomonic"], null);
ui_component.atom.worldwind.globe.projection.change_projection = (function ui_component$atom$worldwind$globe$projection$change_projection(this$,new_projection){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("3D",new_projection)){
if(cljs.core.not(this$.roundGlobe)){
(this$.roundGlobe = (new shadow.js.shim.module$worldwindjs.Globe((new shadow.js.shim.module$worldwindjs.EarthElevationModel()))));
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(this$.wwd.globe,this$.roundGlobe)){
(this$.wwd.globe = this$.roundGlobe);

return this$.wwd.redraw();
} else {
return null;
}
} else {
if(cljs.core.not(this$.flatGlobe)){
(this$.flatGlobe = (new shadow.js.shim.module$worldwindjs.Globe2D()));
} else {
}

(this$.flatGlobe.projection = (function (){var pred__59565 = cljs.core._EQ_;
var expr__59566 = new_projection;
if(cljs.core.truth_((pred__59565.cljs$core$IFn$_invoke$arity$2 ? pred__59565.cljs$core$IFn$_invoke$arity$2("Equirectangular",expr__59566) : pred__59565.call(null,"Equirectangular",expr__59566)))){
return (new shadow.js.shim.module$worldwindjs.ProjectionEquirectangular());
} else {
if(cljs.core.truth_((pred__59565.cljs$core$IFn$_invoke$arity$2 ? pred__59565.cljs$core$IFn$_invoke$arity$2("Mercator",expr__59566) : pred__59565.call(null,"Mercator",expr__59566)))){
return (new shadow.js.shim.module$worldwindjs.ProjectionMercator());
} else {
if(cljs.core.truth_((pred__59565.cljs$core$IFn$_invoke$arity$2 ? pred__59565.cljs$core$IFn$_invoke$arity$2("North Polar",expr__59566) : pred__59565.call(null,"North Polar",expr__59566)))){
return (new shadow.js.shim.module$worldwindjs.ProjectionPolarEquidistant("North"));
} else {
if(cljs.core.truth_((pred__59565.cljs$core$IFn$_invoke$arity$2 ? pred__59565.cljs$core$IFn$_invoke$arity$2("South Polar",expr__59566) : pred__59565.call(null,"South Polar",expr__59566)))){
return (new shadow.js.shim.module$worldwindjs.ProjectionPolarEquidistant("South"));
} else {
if(cljs.core.truth_((pred__59565.cljs$core$IFn$_invoke$arity$2 ? pred__59565.cljs$core$IFn$_invoke$arity$2("North UPS",expr__59566) : pred__59565.call(null,"North UPS",expr__59566)))){
return (new shadow.js.shim.module$worldwindjs.ProjectionUPS("North"));
} else {
if(cljs.core.truth_((pred__59565.cljs$core$IFn$_invoke$arity$2 ? pred__59565.cljs$core$IFn$_invoke$arity$2("South UPS",expr__59566) : pred__59565.call(null,"South UPS",expr__59566)))){
return (new shadow.js.shim.module$worldwindjs.ProjectionUPS("South"));
} else {
if(cljs.core.truth_((pred__59565.cljs$core$IFn$_invoke$arity$2 ? pred__59565.cljs$core$IFn$_invoke$arity$2("North Gnomonic",expr__59566) : pred__59565.call(null,"North Gnomonic",expr__59566)))){
return (new shadow.js.shim.module$worldwindjs.ProjectionGnomonic("North"));
} else {
if(cljs.core.truth_((pred__59565.cljs$core$IFn$_invoke$arity$2 ? pred__59565.cljs$core$IFn$_invoke$arity$2("South Gnomonic",expr__59566) : pred__59565.call(null,"South Gnomonic",expr__59566)))){
return (new shadow.js.shim.module$worldwindjs.ProjectionGnomonic("South"));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__59566)].join('')));
}
}
}
}
}
}
}
}
})());

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(this$.wwd.globe,this$.flatGlobe)){
(this$.wwd.globe = this$.flatGlobe);

return this$.wwd.redraw();
} else {
return null;
}
}
});

//# sourceMappingURL=ui_component.atom.worldwind.globe.projection.js.map
