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
            var tipe = this.$('#textTipe').val().toUpperCase();
            var luastanah = this.$('#textLTanah').val().toUpperCase();
            var luasbangunan = this.$('#textLBangunan').val().toUpperCase();
            var warna = this.$('#textWarna').val().toUpperCase();
            var pemilik = this.$('#textPemilik').val().toUpperCase();
            var penghuni = this.$('#textPenghuni').val().toUpperCase();
            var alamat = this.$('#textAlamat').val().toUpperCase();
            var telp = this.$('#textTelp').val().toUpperCase();

            this.collection.add({
                tipe: tipe,
                luastanah: luastanah,
                luasbangunan: luasbangunan,
                warna: warna,
                pemilik: pemilik,
                penghuni: penghuni,
                alamat: alamat,
                telp: telp
            });
            this.$el.modal('hide');
        }
    });

    return View;

});
