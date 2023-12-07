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
		client: {"start":"_app/immutable/entry/start.5c57b40d.js","app":"_app/immutable/entry/app.963d46da.js","imports":["_app/immutable/entry/start.5c57b40d.js","_app/immutable/chunks/index.472b9089.js","_app/immutable/chunks/singletons.15b742d1.js","_app/immutable/entry/app.963d46da.js","_app/immutable/chunks/index.472b9089.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-2d2eb640.js')),
			__memo(() => import('./chunks/1-8023ccfa.js')),
			__memo(() => import('./chunks/2-78b39e5b.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

export { manifest };
//# sourceMappingURL=manifest.js.map
