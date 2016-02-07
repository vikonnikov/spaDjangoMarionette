define(['marionette'], function(Marionette) {
	return Marionette.LayoutView.extend({
		el: 'body',
		regions: {
			navigation: "#nav-viewport"
		}
	});
});