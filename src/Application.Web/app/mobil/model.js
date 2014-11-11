define(['backbone'],function(Backbone) {
    var Model = Backbone.Model.extend({
        defaults:{
            id: '',
            nopol: '',
            merk: '',
            jenis: '',
            tahun: '',
            pemilik:'',
            warna:'',
            daerah:''
        },
        jualKe: function(nama){
            this.set('pemilik', nama);
        },
        mutasiKe: function(daerah){
            this.set('daerah', daerah);
        },
        gantiDesain: function(warna){
            this.set('warna', warna);
        },
        bayarPajak: function(tahun){
            this.set('tahun', tahun);
        }
    });

    var Collection = Backbone.Collection.extend({
        model: Model,
        url: "../data/initMobil.json"
    });

    return{
        Model: Model,
        Collection: Collection
    };
});
