define(['marionette'], function(Marionette) {
	return Marionette.Object.extend({
		showJobs: function() {
			console.log('Controller:Jobs => showJobs')
		}
	});
});