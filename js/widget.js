require(["jquery", "js/app"], function($, app){
   'use strict';
    var config = {
        // your configuration settings here
        element_id: window.audio_config.element_id,
        url: window.audio_config.url
    };
    $(function() {
        // app.js is the one that contains 
        // all the widget functionality
        app.init(config);
    });
});