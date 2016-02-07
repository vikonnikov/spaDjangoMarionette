requirejs.config({
	deps: ['main', './modules/navbar'],
	paths: {
		lodash: '../bower_components/lodash/lodash',
		underscore: '../bower_components/underscore/underscore',
		jquery: '../bower_components/jquery/dist/jquery',
		'jquery.ui': '../bower_components/jquery-ui/jquery-ui',
		'jquery.cookie': '../bower_components/jquery.cookie/jquery.cookie',
		'jquery.layout': '../bower_components/jquery.layout/dist/jquery.layout-latest',
		'bootstrap.dropdown': '../bower_components/bootstrap/dist/js/bootstrap',
		backbone: '../bower_components/backbone/backbone',
		marionette: '../bower_components/marionette/lib/backbone.marionette',
		handlebars: '../bower_components/handlebars/handlebars',
		text: '../bower_components/requirejs-text/text',
		hbars: '../bower_components/requirejs-handlebars/hbars'
	},

	hbars: {
		extension: '.html'
	},
	
	map: {
	    '*': {
	        $: 'jquery',
	        _: 'lodash',
	        jQuery: 'jquery',
	        cookie: 'jquery.cookie',
	        layout: 'jquery.layout',
	        Handlebars: 'handlebars'
	    },
	},
	
	shim: {
		'jquery.layout': {
            deps: ['jquery', 'jquery.ui']
        },
        'bootstrap.dropdown': {
        	deps: ['jquery']
        },
        'main': {
        	deps: ['layout', 'bootstrap.dropdown', 'cookie']
        },
        handlebars: {
            exports: 'Handlebars'
        }
	},
	
});