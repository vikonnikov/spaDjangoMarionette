define(['backbone', 'models/core/MenuItemModel'], function(Backbone, MenuItemModel) {
	return Backbone.Collection.extend({
		model: MenuItemModel
	});
});