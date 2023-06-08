
shadow.cljs.devtools.client.env.module_loaded('app');

try { demo.core.init(); } catch (e) { console.error("An error occurred when calling (demo.core/init)"); throw(e); }