require.config({
    baseUrl: 'app',
    urlArgs: "bust=" + (new Date()).getTime(),
    // urlArgs: "bust=v2",
    paths:{
        jquery: '../libs/jquery/jquery.min',
        underscore: '../libs/underscore/underscore-min',
        backbone: '../libs/backbone/backbone',
        bootstrap: '../libs/bootstrap/js/bootstrap.min',
        'text' : '../libs/requirejs-text/text'
    },
    shim: {
        underscore: {
            exports: "_"
        },
        bootstrap: {
            deps: ['jquery']
        },
        backbone: {
            deps: ['underscore', 'jquery', 'text','bootstrap'],
            exports: 'Backbone'
        }
    }
});
require(['backbone'], function(Backbone) {
        var Router = Backbone.Router.extend({
            routes:{
                '': 'dashboard',
                'mobil': 'mobil',
                'motor' : 'motor',
                'rumah' : 'rumah'
            },
            dashboard: function(){
                require(['dashboard/main'], function(View){
                    var view = new View();
                    view.render();
                    $('#container').html(view.el);
                });
            },
            mobil: function(){
                require(['mobil/main'], function(View){
                    var view = new View();
                        view.collection.fetch({
                        success: function(){
                            view.render();
                            $('#container').html(view.el);
                        },
                        error: function(model, error){
                            alert(error);
                        }
                    });
                });
            },
            motor: function(){
                require(['motor/main'], function(View){
                    var view = new View();
                    view.collection.fetch({
                        success: function(){
                            view.render();
                            $('#container').html(view.el);
                        },
                        error: function(model, error){
                            alert(error);
                        }
                    });
                });
            },
            rumah: function(){
                require(['rumah/main'], function(View){
                    var view = new View();
                        view.collection.fetch({
                        success: function(){
                            view.render();
                            $('#container').html(view.el);
                        },
                        error: function(model, error){
                            alert(error);
                        }
                    });
                });
            }
        });
        $('<img/>').attr('src', "/css/glyphicons.png");
        var router = new Router();
        Backbone.history.start();
    });
