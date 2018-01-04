// Filename: app.js
define([
  'jquery', 
  'tether',
  'bootstrap',
  'underscore', 
  'backbone',
  'font-awesome',
  //'router', // Request router.js
//], function($, _, Backbone, Router){
  ], function(){
  var initialize = function(){
    // Pass in our Router module and call it's initialize function
    //Router.initialize();
    console.log('Entró en app.js')
  };

  return { 
    initialize: initialize
  };
});