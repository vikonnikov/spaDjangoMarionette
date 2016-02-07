require([
	'jquery',
	'app',
	'routers/JobsRouter',
	'routers/ResultsRouter',
	'controllers/JobsController',
	'controllers/ResultsController'],
function($, app, JobsRouter, ResultsRouter, JobsController, ResultsController) {
	app.on('start', function() {
		var jRouter = new JobsRouter({
			controller: new JobsController()
		});
		
		var rRouter = new ResultsRouter({
			controller: new ResultsController()
		});
		
		Backbone.history.start({root: app.root, silent: false});
	});
	
	app.start();
	
    $.ajaxSetup({
        headers: {'X-CSRFToken': $.cookie('csrftoken')}
    });
    
    $('body').layout({
    	north: {
	    	closable: false,
	    	size: 52,
	    	resizable: false,
	        spacing_open: 0,
	        spacing_closed: 0
	    }
    });
    
	console.log('Hello!', app);
});