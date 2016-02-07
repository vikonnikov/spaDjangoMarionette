define(['backbone'], function(Backbone) {
	return Backbone.Model.extend({
		constructor: function() {
			Backbone.Model.apply(this, arguments);
		}
	});
});