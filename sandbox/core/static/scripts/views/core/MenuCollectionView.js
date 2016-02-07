define([
    'jquery',
    'marionette',
    'views/core/MenuItemView'],
function($, Marionette, MenuItemView) {
	return Marionette.CollectionView.extend({
		childView: MenuItemView,
		tagName: 'ul',
		className: 'nav navbar-nav',
		events: {
			'click li': "onSelect"
		},
		onSelect: function(event) {
			$('ul li').each(function(i, el) {
				if ( el == event.currentTarget )
					$(el).addClass('active');
				else
					$(el).removeClass('active');
				
			});
		}
	});
});