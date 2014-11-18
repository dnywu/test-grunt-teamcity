define(['backbone'],function(Backbone) {
    var Model = Backbone.Model.extend({
        defaults:{
            id: '',
            tipe: '',
            luastanah: '',
            luasbangunan: '',
            warna: '',
            pemilik:'',
            penghuni:'',
            alamat: '',
            telp: ''
        },
        jual: function(nama){
            this.set('pemilik', nama);
        },
        sewa: function(nama){
            this.set('penghuni', nama);
        },
        gantiCat: function(warna){
            this.set('warna', warna);
        }
    });

    var Collection = Backbone.Collection.extend({
        model: Model,
        url: "../data/initRumah.json"
    });

    return{
        Model: Model,
        Collection: Collection
    };
});
