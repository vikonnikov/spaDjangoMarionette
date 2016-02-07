require([
	'jquery',
	'app',
	'collections/core/MenuItemCollection',
	'views/core/MenuCollectionView'],
function($, app, MenuItemCollection, MenuCollectionView) {
	menu = [
//		{
//			title: 'File',
//			name: 'file',
//			url: '/file/{id}/',
//			active: false,
//			hidden: true,
//			items: {
//				save: {
//					title: 'Save',
//				},
//				submit: {
//					title: 'Submit'
//				}
//			}
//		},
		{
			title: 'Tests',
			name: 'job_list',
			url: '/jobs/',
			active: true,
			hidden: false
		},
		{
			title: 'Results',
			name: 'result_list',
			url: '/results/',
			active: false,
			hidden: false
		}
	];
	
	var collection = new MenuItemCollection(menu);
	var view = new MenuCollectionView({collection: collection});
	
	app.rootView.getRegion('navigation').show(view);
//	view.render();
	
	console.log('Navbar started', collection.models);
});