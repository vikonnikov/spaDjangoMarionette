define(['marionette', 'hbars!templates/core/MenuItem'], function(Marionette, tmpl) {
	return Marionette.ItemView.extend({
		template: tmpl,
		tagName: 'li',
		onRender: function() {
			if ( this.model.get('active') )
				this.$el.addClass('active');
		},
//		events: {
//			'click': "onSelect"
//		},
//		onSelect: function(event) {
//			console.log('li', event.currentTarget);
//		}
	});
});