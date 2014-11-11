define(['backbone', 'text!mobil/template/ViewDetail.html'], function(Backbone, Template){
    var View = Backbone.View.extend({
        template: _.template(Template),
        initialize: function(){
            this.model.on('change', this.render, this);
            this.collection.on('remove', this.remove, this);
        },
        render: function(){
            this.$el.html(this.template(this.model.toJSON()));
        }
    });

    return View;

});
