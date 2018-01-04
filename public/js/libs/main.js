require.config({
  paths: {
    "jquery": "jquery-3.1.1.slim.min",
    "tether": "tether.min",
    "bootstrap": "bootstrap.min",
    "underscore": 'underscore-min',
    "backbone": 'backbone-min',
    "font-awesome": "fontawesome-all",
    "templates ": '../../templates'
  },
  "shim": {
    tether : {
      exports : 'tether'
    },
    "bootstrap": {
      "deps": ["jquery", "tether"],
              exports: "$"
     },
    "underscore": {
        exports: '_'
    },
    "backbone" : {
      deps : ['jquery', 'underscore'],
      exports : 'Backbone'
    }
  }
});

 
//"main": { "deps": ["jquery","bootstrap"] }

require([
  // Load our app module and pass it to our definition function
  'app',

], function(App){
  // The "app" dependency is passed in as "App"
  // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
  App.initialize();
});

/*
require.config({,
  shim : {
    jquery : {
      exports : 'jQuery'
    },
    underscore : {
      exports : '_'
    },
    backbone : {
      deps : ['jquery', 'underscore'],
      exports : 'Backbone'
    }
  }
});*/