define([
    'backbone',
    'text!./template/ViewAction.html'
    ], function(Backbone, Template){
    var View = Backbone.View.extend({
        className: 'modal fade',
        template: Template,
        initialize: function(options) {
            this.options = options;
            _.bindAll(this, 'render');
        },
        render: function(){
            this.$el.html(this.template);
            this.$el.modal();
        },
        events:{
            'click [btnSubmit]' : 'saveChange',
            'hidden.bs.modal': 'remove'
        },
        saveChange: function(){
            var jobtype = this.options.jobtype;
            var value = $('#textValue').val().toUpperCase();
            switch (jobtype){
                case 'jual' :
                    this.model.jualKe(value);
                    break;
                case 'mutasi' :
                    this.model.mutasiKe(value);
                    break;
                case 'gantidesain' :
                    this.model.gantiDesain(value);
                    break;
                case 'bayarpajak' :
                    this.model.bayarPajak(value);
                    break;
            }
            this.$el.modal('hide');
        }
    });
    return View;
});
