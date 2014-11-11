define(['backbone'], function(){
    require(['backbone'], function(Backbone) {
        var Router = Backbone.Router.extend({
            routes:{
                '': 'dashboard',
                'mobil': 'mobil',
                'motor' : 'motor',
                'rumah' : 'rumah'
            },
            dashboard: function(){
                require(['dashboard/view'], function(View){
                    var view = new View();
                    view.render();
                    $('#container').html(view.el);
                });
            },
            mobil: function(){
                require(['mobil/model','mobil/viewList'], function(Model, View){
                    var collection = new Model.Collection();
                    var view = new View({ collection: collection });
                        collection.fetch({
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
                require(['motor/model','motor/viewList'], function(Model, View){
                    var collection = new Model.Collection();
                    var view = new View({ collection: collection });
                        collection.fetch({
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
                require(['rumah/model','rumah/viewList'], function(Model, View){
                    var collection = new Model.Collection();
                    var view = new View({ collection: collection });
                        collection.fetch({
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
            Backbone.history.start();
        return Router;
    });
});
