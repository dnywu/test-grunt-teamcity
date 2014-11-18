define(['backbone'], function(Backbone){
    var View = Backbone.View.extend({
        template: _.template('<h2>Dashboard</h2><%= greeting %>'),
        initialize: function(){
            this.render();
        },
        render: function(){
            this.$el.html(this.template({ greeting:"Welcome to dashboard page"}));
            return this;
        }
    });

    return View;
});
