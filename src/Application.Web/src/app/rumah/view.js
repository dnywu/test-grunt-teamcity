define([
    'require',
    'backbone',
    'text!./template/View.html'
], function(require, Backbone, Template){
    return Backbone.View.extend({
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
            var self = this;
            require(['./viewAction'], function(View){
                var view = new View({model: self.model, jobtype:'jual'});
                view.render();
            });
        },
        sewa:function(){
            var self = this;
            require(['./viewAction'], function(View){
                var view = new View({model: self.model, jobtype:'sewa'});
                view.render();
            });
        },
        gantiCat:function(){
            var self = this;
            require(['./viewAction'], function(View){
                var view = new View({model: self.model, jobtype:'gantiCat'});
                view.render();
            });
        },
        edit: function(){
            var self = this;
            require(['./viewEdit'], function(View){
                var view = new View({model: self.model, collection: self.collection});
                view.render();
                self.showNotify('Edit');
            });
        },
        remove: function(){
            this.collection.remove(this.model);
            Backbone.View.prototype.remove.call(this);
            this.showNotify('Remove');
        },
        showDetail: function(){
            var self = this;
            require(['./viewDetail'], function(View){
                var view = new View({model: self.model, collection: self.collection});
                view.render();
                self.options.parent.$('#detailDiv').html(view.$el);
            });
        },
        showNotify:function(message){
            $('#errorLog').text(message + ' success !');
            $('#errorLog').addClass('label label-success');
        }
    });
});
