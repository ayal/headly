Package.describe({
  summary: "meteor package to handle facebookexternalhit responses (for og:metatags use)"
});


Package.on_use(function (api) {
	api.add_files('headly_server.js', 'server');

	if (typeof api.export !== 'undefined') {
		api.use('webapp', 'server');
	}
});