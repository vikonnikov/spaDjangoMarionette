define(['marionette'], function(Marionette) {
	return Marionette.Object.extend({
		showResults: function() {
			console.log('Controller:Results => showResults')
		}
	});
});