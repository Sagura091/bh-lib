goog.provide('bh_ui.molecule.composite.util.node_config_ui');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"bh-ui.molecule.composite.util.node-config-ui",null,7,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bh-ui.molecule.composite.util.node-config-ui"], null);
}),null)),null,625876265,null);
if((typeof bh_ui !== 'undefined') && (typeof bh_ui.molecule !== 'undefined') && (typeof bh_ui.molecule.composite !== 'undefined') && (typeof bh_ui.molecule.composite.util !== 'undefined') && (typeof bh_ui.molecule.composite.util.node_config_ui !== 'undefined') && (typeof bh_ui.molecule.composite.util.node_config_ui.make_config_item !== 'undefined')){
} else {
bh_ui.molecule.composite.util.node_config_ui.make_config_item = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__59059 = cljs.core.get_global_hierarchy;
return (fexpr__59059.cljs$core$IFn$_invoke$arity$0 ? fexpr__59059.cljs$core$IFn$_invoke$arity$0() : fexpr__59059.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("bh-ui.molecule.composite.util.node-config-ui","make-config-item"),(function (p__59060){
var map__59061 = p__59060;
var map__59061__$1 = cljs.core.__destructure_map(map__59061);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59061__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return type;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
bh_ui.molecule.composite.util.node_config_ui.make_config_item.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"string","string",-1989541586),(function (p__59062){
var map__59064 = p__59062;
var map__59064__$1 = cljs.core.__destructure_map(map__59064);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59064__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59064__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[":string - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')], null);
}));
bh_ui.molecule.composite.util.node_config_ui.make_config_item.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"id","id",-1388402092),(function (p__59066){
var map__59067 = p__59066;
var map__59067__$1 = cljs.core.__destructure_map(map__59067);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59067__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59067__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[":id - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')], null);
}));
bh_ui.molecule.composite.util.node_config_ui.make_config_item.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"port","port",1534937262),(function (p__59069){
var map__59071 = p__59069;
var map__59071__$1 = cljs.core.__destructure_map(map__59071);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59071__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59071__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[":port - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')], null);
}));
bh_ui.molecule.composite.util.node_config_ui.make_config_item.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"choices","choices",1385611597),(function (p__59072){
var map__59073 = p__59072;
var map__59073__$1 = cljs.core.__destructure_map(map__59073);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59073__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59073__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[":choices - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')], null);
}));
if((typeof bh_ui !== 'undefined') && (typeof bh_ui.molecule !== 'undefined') && (typeof bh_ui.molecule.composite !== 'undefined') && (typeof bh_ui.molecule.composite.util !== 'undefined') && (typeof bh_ui.molecule.composite.util.node_config_ui !== 'undefined') && (typeof bh_ui.molecule.composite.util.node_config_ui.make_config_panel_STAR_ !== 'undefined')){
} else {
bh_ui.molecule.composite.util.node_config_ui.make_config_panel_STAR_ = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__59076 = cljs.core.get_global_hierarchy;
return (fexpr__59076.cljs$core$IFn$_invoke$arity$0 ? fexpr__59076.cljs$core$IFn$_invoke$arity$0() : fexpr__59076.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("bh-ui.molecule.composite.util.node-config-ui","make-config-panel*"),(function (type,node){
return type;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
bh_ui.molecule.composite.util.node_config_ui.make_config_panel_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("ui","component","ui/component",1555933050),(function (type,p__59079){
var map__59080 = p__59079;
var map__59080__$1 = cljs.core.__destructure_map(map__59080);
var node = map__59080__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59080__$1,"id");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bh-ui","div.bh-ui",-788202991),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null);
}));
bh_ui.molecule.composite.util.node_config_ui.make_config_panel_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("source","remote","source/remote",-1682682981),(function (type,p__59081){
var map__59082 = p__59081;
var map__59082__$1 = cljs.core.__destructure_map(map__59082);
var node = map__59082__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59082__$1,"id");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.source-remote","div.source-remote",42734921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null);
}));
bh_ui.molecule.composite.util.node_config_ui.make_config_panel_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("source","local","source/local",-582398745),(function (type,p__59087){
var map__59088 = p__59087;
var map__59088__$1 = cljs.core.__destructure_map(map__59088);
var node = map__59088__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59088__$1,"id");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.source-local","div.source-local",-953679128),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null);
}));
bh_ui.molecule.composite.util.node_config_ui.make_config_panel_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("source","fn","source/fn",1803568239),(function (type,p__59093){
var map__59094 = p__59093;
var map__59094__$1 = cljs.core.__destructure_map(map__59094);
var node = map__59094__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59094__$1,"id");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.source-fn","div.source-fn",-822094778),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null);
}));
bh_ui.molecule.composite.util.node_config_ui.make_config_panel_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (type,p__59095){
var map__59098 = p__59095;
var map__59098__$1 = cljs.core.__destructure_map(map__59098);
var node = map__59098__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59098__$1,"id");
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);
}));
bh_ui.molecule.composite.util.node_config_ui.make_config_panel = (function bh_ui$molecule$composite$util$node_config_ui$make_config_panel(node){
var node_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(node,"type");
var kw_node_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 4, [":ui/component",new cljs.core.Keyword("ui","component","ui/component",1555933050),":source/remote",new cljs.core.Keyword("source","remote","source/remote",-1682682981),":source/local",new cljs.core.Keyword("source","local","source/local",-582398745),":source/fn",new cljs.core.Keyword("source","fn","source/fn",1803568239)], null),node_type);
return bh_ui.molecule.composite.util.node_config_ui.make_config_panel_STAR_.cljs$core$IFn$_invoke$arity$2(kw_node_type,node);
});

//# sourceMappingURL=bh_ui.molecule.composite.util.node_config_ui.js.map
