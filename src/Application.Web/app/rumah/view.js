define([
    'backbone',
    'rumah/viewAction',
    'rumah/viewAdd',
    'rumah/viewDetail',
    'rumah/viewEdit',
    'text!rumah/template/View.html'
], function(Backbone, ActionView, AddView, DetailView, EditView, Template){
    var View = Backbone.View.extend({
        tagName: 'tr',
        template: _.template(Template),
        initialize: function(options){
            this.options = options || {};
            this.model.on('change', function(){
                this.render();
                this.showNotify('Action');
            }, this);
        },
        render: function(){
            this.$el.html(this.template(this.model.toJSON()));
        },
        events:{
            'click [btnJual]' : 'jual',
            'click [btnSewa]' : 'sewa',
            'click [btGantiCat]' : 'gantiCat',
            'click [btnRemove]' : 'remove',
            'click [btnEdit]' : 'edit',
            'click [btnDetail]' : 'showDetail'
        },
        jual:function(){
            var view = new ActionView({model: this.model, jobtype:'jual'});
            view.render();
        },
        sewa:function(){
            var view = new ActionView({model: this.model, jobtype:'sewa'});
            view.render();
        },
        gantiCat:function(){
            var view = new ActionView({model: this.model, jobtype:'gantiCat'});
            view.render();
        },
        edit: function(){
            var view = new EditView({model: this.model, collection: this.collection});
            view.render();
            this.showNotify('Edit');
        },
        remove: function(){
            this.collection.remove(this.model);
            Backbone.View.prototype.remove.call(this);
            this.showNotify('Remove');
        },
        showDetail: function(){
            var view = new DetailView({model: this.model, collection: this.collection});
            view.render();
            this.options.parent.$('#detailDiv').html(view.$el);
        },
        showNotify:function(message){
            $('#errorLog').text(message + ' success !');
            $('#errorLog').addClass('label label-success');
        }
    });

    return View;
});
