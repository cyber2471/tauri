const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.a96e56d3.js","app":"_app/immutable/entry/app.d76ccafe.js","imports":["_app/immutable/entry/start.a96e56d3.js","_app/immutable/chunks/index.0db99062.js","_app/immutable/chunks/singletons.00251f04.js","_app/immutable/entry/app.d76ccafe.js","_app/immutable/chunks/index.0db99062.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-83da1685.js')),
			__memo(() => import('./chunks/1-5b34abea.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

export { manifest };
//# sourceMappingURL=manifest.js.map
