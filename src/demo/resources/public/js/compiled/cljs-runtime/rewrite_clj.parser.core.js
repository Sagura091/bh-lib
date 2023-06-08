goog.provide('rewrite_clj.parser.core');
rewrite_clj.parser.core._STAR_delimiter_STAR_ = null;
rewrite_clj.parser.core.parse_delim = (function rewrite_clj$parser$core$parse_delim(reader,delimiter){
rewrite_clj.reader.ignore(reader);

return rewrite_clj.reader.read_repeatedly(reader,(function (p1__52965_SHARP_){
var _STAR_delimiter_STAR__orig_val__52966 = rewrite_clj.parser.core._STAR_delimiter_STAR_;
var _STAR_delimiter_STAR__temp_val__52967 = delimiter;
(rewrite_clj.parser.core._STAR_delimiter_STAR_ = _STAR_delimiter_STAR__temp_val__52967);

try{return (rewrite_clj.parser.core.parse_next.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.parser.core.parse_next.cljs$core$IFn$_invoke$arity$1(p1__52965_SHARP_) : rewrite_clj.parser.core.parse_next.call(null,p1__52965_SHARP_));
}finally {(rewrite_clj.parser.core._STAR_delimiter_STAR_ = _STAR_delimiter_STAR__orig_val__52966);
}}));
});
rewrite_clj.parser.core.parse_printables = (function rewrite_clj$parser$core$parse_printables(var_args){
var args__4870__auto__ = [];
var len__4864__auto___53013 = arguments.length;
var i__4865__auto___53014 = (0);
while(true){
if((i__4865__auto___53014 < len__4864__auto___53013)){
args__4870__auto__.push((arguments[i__4865__auto___53014]));

var G__53015 = (i__4865__auto___53014 + (1));
i__4865__auto___53014 = G__53015;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return rewrite_clj.parser.core.parse_printables.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(rewrite_clj.parser.core.parse_printables.cljs$core$IFn$_invoke$arity$variadic = (function (reader,node_tag,n,p__52975){
var vec__52976 = p__52975;
var ignore_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52976,(0),null);
if(cljs.core.truth_(ignore_QMARK_)){
rewrite_clj.reader.ignore(reader);
} else {
}

return rewrite_clj.reader.read_n(reader,node_tag,rewrite_clj.parser.core.parse_next,cljs.core.complement(rewrite_clj.node.printable_only_QMARK_),n);
}));

(rewrite_clj.parser.core.parse_printables.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(rewrite_clj.parser.core.parse_printables.cljs$lang$applyTo = (function (seq52970){
var G__52971 = cljs.core.first(seq52970);
var seq52970__$1 = cljs.core.next(seq52970);
var G__52973 = cljs.core.first(seq52970__$1);
var seq52970__$2 = cljs.core.next(seq52970__$1);
var G__52974 = cljs.core.first(seq52970__$2);
var seq52970__$3 = cljs.core.next(seq52970__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52971,G__52973,G__52974,seq52970__$3);
}));

rewrite_clj.parser.core.parse_meta = (function rewrite_clj$parser$core$parse_meta(reader){
rewrite_clj.reader.ignore(reader);

var G__52979 = rewrite_clj.parser.core.parse_printables(reader,new cljs.core.Keyword(null,"meta","meta",1499536964),(2));
return (rewrite_clj.node.meta_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.meta_node.cljs$core$IFn$_invoke$arity$1(G__52979) : rewrite_clj.node.meta_node.call(null,G__52979));
});
rewrite_clj.parser.core.parse_eof = (function rewrite_clj$parser$core$parse_eof(reader){
if(cljs.core.truth_(rewrite_clj.parser.core._STAR_delimiter_STAR_)){
return rewrite_clj.reader.throw_reader(reader,"Unexpected EOF.");
} else {
return null;
}
});
rewrite_clj.parser.core.parse_list = (function rewrite_clj$parser$core$parse_list(reader){
var G__52980 = rewrite_clj.parser.core.parse_delim(reader,")");
return (rewrite_clj.node.list_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.list_node.cljs$core$IFn$_invoke$arity$1(G__52980) : rewrite_clj.node.list_node.call(null,G__52980));
});
rewrite_clj.parser.core.parse_vector = (function rewrite_clj$parser$core$parse_vector(reader){
var G__52981 = rewrite_clj.parser.core.parse_delim(reader,"]");
return (rewrite_clj.node.vector_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.vector_node.cljs$core$IFn$_invoke$arity$1(G__52981) : rewrite_clj.node.vector_node.call(null,G__52981));
});
rewrite_clj.parser.core.parse_map = (function rewrite_clj$parser$core$parse_map(reader){
var G__52982 = rewrite_clj.parser.core.parse_delim(reader,"}");
return (rewrite_clj.node.map_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.map_node.cljs$core$IFn$_invoke$arity$1(G__52982) : rewrite_clj.node.map_node.call(null,G__52982));
});
rewrite_clj.parser.core.parse_conditional = (function rewrite_clj$parser$core$parse_conditional(reader){
rewrite_clj.reader.next(reader);

var G__52983 = (function (){var read1 = (function (){
return rewrite_clj.parser.core.parse_printables(reader,new cljs.core.Keyword(null,"reader-macro","reader-macro",750056422),(1));
});
return cljs.core.cons((function (){var G__52984 = rewrite_clj.reader.peek(reader);
switch (G__52984) {
case "(":
var G__52985 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("?");
return (rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$1(G__52985) : rewrite_clj.node.token_node.call(null,G__52985));

break;
case "@":
rewrite_clj.reader.next(reader);

var G__52990 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("?@");
return (rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$1(G__52990) : rewrite_clj.node.token_node.call(null,G__52990));

break;
default:
var G__52991_53020 = reader;
var G__52992_53021 = "?";
(rewrite_clj.reader.unread.cljs$core$IFn$_invoke$arity$2 ? rewrite_clj.reader.unread.cljs$core$IFn$_invoke$arity$2(G__52991_53020,G__52992_53021) : rewrite_clj.reader.unread.call(null,G__52991_53020,G__52992_53021));

return cljs.core.first(read1());

}
})(),read1());
})();
return (rewrite_clj.node.reader_macro_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.reader_macro_node.cljs$core$IFn$_invoke$arity$1(G__52983) : rewrite_clj.node.reader_macro_node.call(null,G__52983));
});
rewrite_clj.parser.core.parse_sharp = (function rewrite_clj$parser$core$parse_sharp(reader){
rewrite_clj.reader.ignore(reader);

var G__52997 = reader.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__52997)){
return rewrite_clj.reader.throw_reader(reader,"Unexpected EOF.");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\"",G__52997)){
return rewrite_clj.parser.string.parse_regex(reader);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",G__52997)){
var G__52998 = rewrite_clj.parser.core.parse_printables.cljs$core$IFn$_invoke$arity$variadic(reader,new cljs.core.Keyword(null,"var","var",-769682797),(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0));
return (rewrite_clj.node.var_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.var_node.cljs$core$IFn$_invoke$arity$1(G__52998) : rewrite_clj.node.var_node.call(null,G__52998));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("(",G__52997)){
var G__52999 = rewrite_clj.parser.core.parse_delim(reader,")");
return (rewrite_clj.node.fn_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.fn_node.cljs$core$IFn$_invoke$arity$1(G__52999) : rewrite_clj.node.fn_node.call(null,G__52999));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("{",G__52997)){
var G__53000 = rewrite_clj.parser.core.parse_delim(reader,"}");
return (rewrite_clj.node.set_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.set_node.cljs$core$IFn$_invoke$arity$1(G__53000) : rewrite_clj.node.set_node.call(null,G__53000));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("=",G__52997)){
var G__53001 = rewrite_clj.parser.core.parse_printables.cljs$core$IFn$_invoke$arity$variadic(reader,new cljs.core.Keyword(null,"eval","eval",-1103567905),(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0));
return (rewrite_clj.node.eval_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.eval_node.cljs$core$IFn$_invoke$arity$1(G__53001) : rewrite_clj.node.eval_node.call(null,G__53001));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("^",G__52997)){
var G__53002 = rewrite_clj.parser.core.parse_printables.cljs$core$IFn$_invoke$arity$variadic(reader,new cljs.core.Keyword(null,"meta","meta",1499536964),(2),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0));
return (rewrite_clj.node.meta_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.meta_node.cljs$core$IFn$_invoke$arity$1(G__53002) : rewrite_clj.node.meta_node.call(null,G__53002));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("?",G__52997)){
return rewrite_clj.parser.core.parse_conditional(reader);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("_",G__52997)){
var G__53003 = rewrite_clj.parser.core.parse_printables.cljs$core$IFn$_invoke$arity$variadic(reader,new cljs.core.Keyword(null,"uneval","uneval",1932037707),(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0));
return (rewrite_clj.node.uneval_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.uneval_node.cljs$core$IFn$_invoke$arity$1(G__53003) : rewrite_clj.node.uneval_node.call(null,G__53003));
} else {
var G__53004 = rewrite_clj.parser.core.parse_printables(reader,new cljs.core.Keyword(null,"reader-macro","reader-macro",750056422),(2));
return (rewrite_clj.node.reader_macro_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.reader_macro_node.cljs$core$IFn$_invoke$arity$1(G__53004) : rewrite_clj.node.reader_macro_node.call(null,G__53004));

}
}
}
}
}
}
}
}
}
});
rewrite_clj.parser.core.parse_unmatched = (function rewrite_clj$parser$core$parse_unmatched(reader){
return rewrite_clj.reader.throw_reader.cljs$core$IFn$_invoke$arity$variadic(reader,"Unmatched delimiter: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reader.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(null)], 0));
});
rewrite_clj.parser.core.parse_deref = (function rewrite_clj$parser$core$parse_deref(reader){
var G__53005 = rewrite_clj.parser.core.parse_printables.cljs$core$IFn$_invoke$arity$variadic(reader,new cljs.core.Keyword(null,"deref","deref",-145586795),(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0));
return (rewrite_clj.node.deref_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.deref_node.cljs$core$IFn$_invoke$arity$1(G__53005) : rewrite_clj.node.deref_node.call(null,G__53005));
});
rewrite_clj.parser.core.parse_quote = (function rewrite_clj$parser$core$parse_quote(reader){
var G__53006 = rewrite_clj.parser.core.parse_printables.cljs$core$IFn$_invoke$arity$variadic(reader,new cljs.core.Keyword(null,"quote","quote",-262615245),(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0));
return (rewrite_clj.node.quote_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.quote_node.cljs$core$IFn$_invoke$arity$1(G__53006) : rewrite_clj.node.quote_node.call(null,G__53006));
});
rewrite_clj.parser.core.parse_syntax_quote = (function rewrite_clj$parser$core$parse_syntax_quote(reader){
var G__53007 = rewrite_clj.parser.core.parse_printables.cljs$core$IFn$_invoke$arity$variadic(reader,new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0));
return (rewrite_clj.node.syntax_quote_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.syntax_quote_node.cljs$core$IFn$_invoke$arity$1(G__53007) : rewrite_clj.node.syntax_quote_node.call(null,G__53007));
});
rewrite_clj.parser.core.parse_unquote = (function rewrite_clj$parser$core$parse_unquote(reader){
rewrite_clj.reader.ignore(reader);

var c = reader.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"@")){
var G__53008 = rewrite_clj.parser.core.parse_printables.cljs$core$IFn$_invoke$arity$variadic(reader,new cljs.core.Keyword(null,"unquote","unquote",1649741032),(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0));
return (rewrite_clj.node.unquote_splicing_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.unquote_splicing_node.cljs$core$IFn$_invoke$arity$1(G__53008) : rewrite_clj.node.unquote_splicing_node.call(null,G__53008));
} else {
var G__53009 = rewrite_clj.parser.core.parse_printables(reader,new cljs.core.Keyword(null,"unquote","unquote",1649741032),(1));
return (rewrite_clj.node.unquote_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.unquote_node.cljs$core$IFn$_invoke$arity$1(G__53009) : rewrite_clj.node.unquote_node.call(null,G__53009));
}
});
rewrite_clj.parser.core.parse_comment = (function rewrite_clj$parser$core$parse_comment(reader){
rewrite_clj.reader.ignore(reader);

var G__53010 = rewrite_clj.reader.read_include_linebreak(reader);
return (rewrite_clj.node.comment_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.comment_node.cljs$core$IFn$_invoke$arity$1(G__53010) : rewrite_clj.node.comment_node.call(null,G__53010));
});
rewrite_clj.parser.core.dispatch = (function rewrite_clj$parser$core$dispatch(c){
if((c == null)){
return rewrite_clj.parser.core.parse_eof;
} else {
if((c === rewrite_clj.parser.core._STAR_delimiter_STAR_)){
return rewrite_clj.reader.ignore;
} else {
if(rewrite_clj.reader.whitespace_QMARK_(c)){
return rewrite_clj.parser.whitespace.parse_whitespace;
} else {
if((c === "^")){
return rewrite_clj.parser.core.parse_meta;
} else {
if((c === "#")){
return rewrite_clj.parser.core.parse_sharp;
} else {
if((c === "(")){
return rewrite_clj.parser.core.parse_list;
} else {
if((c === "[")){
return rewrite_clj.parser.core.parse_vector;
} else {
if((c === "{")){
return rewrite_clj.parser.core.parse_map;
} else {
if((c === "}")){
return rewrite_clj.parser.core.parse_unmatched;
} else {
if((c === "]")){
return rewrite_clj.parser.core.parse_unmatched;
} else {
if((c === ")")){
return rewrite_clj.parser.core.parse_unmatched;
} else {
if((c === "~")){
return rewrite_clj.parser.core.parse_unquote;
} else {
if((c === "'")){
return rewrite_clj.parser.core.parse_quote;
} else {
if((c === "`")){
return rewrite_clj.parser.core.parse_syntax_quote;
} else {
if((c === ";")){
return rewrite_clj.parser.core.parse_comment;
} else {
if((c === "@")){
return rewrite_clj.parser.core.parse_deref;
} else {
if((c === "\"")){
return rewrite_clj.parser.string.parse_string;
} else {
if((c === ":")){
return rewrite_clj.parser.keyword.parse_keyword;
} else {
return rewrite_clj.parser.token.parse_token;

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
rewrite_clj.parser.core.parse_next = (function rewrite_clj$parser$core$parse_next(rdr){
return rewrite_clj.reader.read_with_meta(rdr,rewrite_clj.parser.core.dispatch(rdr.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(null)));
});

//# sourceMappingURL=rewrite_clj.parser.core.js.map
