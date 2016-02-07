define(['layouts/core/RootView', 'backbone', 'marionette'], function(RootView, Backbone, Marionette) {
	var app = new Marionette.Application({});
	app.rootView = new RootView();
	app.root = '/';
	
	return app;
});