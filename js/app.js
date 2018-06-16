define(['jquery', 'text!template/html.tpl'], function ($, formHtml) {
    'use strict';

    // private variables here 
    // ..

    var app = {
        init: function (config) {
            // intializing methods making config available 
            // for the whole scope of this module            
            $.getJSON(config.url, function(data) {
              $('#' + config.element_id).html(formHtml.replace("##source##", data['audio_file']));
            });

            // $('audio_element').html(formHtml);
        }
    };

    // private methods here 
    // ..

    return app;
});
