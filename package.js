Package.describe({
  summary: "meteor package to handle external service requests to generate metatag responses (for og:metatags use)"
});


Package.on_use(function (api) {
  api.use('underscore', 'server');
	api.add_files('headly_server.js', 'server');

	if (typeof api.export !== 'undefined') {
		api.use('webapp', 'server');
	}
});