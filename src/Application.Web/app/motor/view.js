define([
    'backbone',
    'mobil/viewAction',
    'mobil/viewAdd',
    'mobil/viewDetail',
    'mobil/viewEdit',
    'text!motor/template/View.html'
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
            'click [btnMutasi]' : 'mutasi',
            'click [btnDesign]' : 'gantiDesain',
            'click [btnPajak]' : 'bayarPajak',
            'click [btnRemove]' : 'remove',
            'click [btnEdit]' : 'edit',
            'click [btnDetail]' : 'showDetail'
        },
        jual:function(){
            var view = new ActionView({model: this.model, jobtype:'jual'});
            view.render();
        },
        mutasi:function(){
            var view = new ActionView({model: this.model, jobtype:'mutasi'});
            view.render();
        },
        gantiDesain:function(){
            var view = new ActionView({model: this.model, jobtype:'gantidesain'});
            view.render();
        },
        bayarPajak:function(){
            var view = new ActionView({model: this.model, jobtype:'bayarpajak'});
            view.render();
        },
        edit: function(){
            var view = new EditView({model: this.model});
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
