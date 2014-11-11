define([
    "backbone",
    "mobil/viewAdd",
    "text!motor/template/ViewList.html"
], function(Backbone, AddView, Template){
    var View = Backbone.View.extend({
        template: _.template(Template),
        initialize: function(){
            var  self = this;
            this.listenTo(this.collection, "add", function(model){
                    self.addOne(model);
                    this.showNotify();
                });
        },
        render: function(){
            this.$el.html(this.template);
        },
        events:{
            "click [add]" : "add"
        },
        addOne: function(model){
            var self = this;
            require(["motor/view"], function(View){
                var view = new View({ model: model,  collection : self.collection, parent : self });
                view.render();
                self.$("tbody").append(view.el);
            });
        },
        add: function(){
            var self = this;
            require(["motor/viewAdd"], function(View){
                var view = new View({collection: self.collection});
                view.render();
            });
        },
        showNotify: function(){
            $("#errorLog").text("Add new data success !");
            $("#errorLog").addClass("label label-success");
        }
    });

    return View;

});
