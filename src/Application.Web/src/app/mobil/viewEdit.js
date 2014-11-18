define(['backbone', 'text!./template/ViewEdit.html'], function(Backbone, Template){
    var View = Backbone.View.extend({
        className: 'modal fade',
        template: _.template(Template),
        render: function(){
            this.$el.html(this.template(this.model.toJSON()));
            this.$el.modal('show');
        },
        events:{
            'click [save]' : 'save',
            'hidden.bs.modal': 'remove'
        },
        save: function(){
            var noPolisi = this.$('#textNoPol').val().toUpperCase();
            var merk = this.$('#textMerk').val().toUpperCase();
            var jenis = this.$('#textJenis').val().toUpperCase();
            var tahun = this.$('#textTahun').val().toUpperCase();
            var pemilik = this.$('#textPemilik').val().toUpperCase();
            var daerah = this.$('#textWarna').val().toUpperCase();
            var warna = this.$('#textDaerah').val().toUpperCase();

            this.model.set({
                nopol: noPolisi,
                merk: merk,
                jenis: jenis,
                tahun: tahun,
                pemilik: pemilik,
                daerah: daerah,
                warna: warna
            });
            this.$el.modal('hide');
        }
    });

    return View;

});
