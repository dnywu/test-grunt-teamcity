define(['backbone', 'text!motor/template/ViewAdd.html'], function(Backbone, Template){
    var View = Backbone.View.extend({
        className: 'modal fade',
        template: Template,
        render: function(){
            this.$el.html(this.template);
            this.$el.modal('show');
        },
        events:{
            'click [submit]' : 'add',
            'hidden.bs.modal': 'remove'
        },
        add: function(){
            var noPolisi = this.$('#textNoPol').val().toUpperCase();
            var merk = this.$('#textMerk').val().toUpperCase();
            var jenis = this.$('#textJenis').val().toUpperCase();
            var tahun = this.$('#textTahun').val().toUpperCase();
            var pemilik = this.$('#textPemilik').val().toUpperCase();
            var daerah = this.$('#textWarna').val().toUpperCase();
            var warna = this.$('#textDaerah').val().toUpperCase();

            this.collection.add({
                id: this.collection.length + 2,
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
