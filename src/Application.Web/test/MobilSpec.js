"use strict";
define(['mobil/Model', ],
    function(Model) {
        var model = new Model.Model({
            "id": "1",
            "nopol": "BP1234AA",
            "merk": "TOYOTA",
            "jenis": "MOBIL",
            "tahun": "2013",
            "pemilik":"AGUS",
            "daerah":"BATAM",
            "warna":"PUTIH"});

        var run = function() {
            QUnit.module( "Test Mobil Model",{});
            test('Model should be defined', function() {
                ok(model, 'Its shouldbe OK');
            });

            // TEST Model's Method
            QUnit.module( "Test Mobil Method",{});
            test("Menjual Model", function(){
                model.jualKe('Wintoro');
                equal(model.get('pemilik'),'Wintoro', 'pemilik should be Wintoro');
            });

            test("Mutasi Model", function(){
                model.mutasiKe('Jakarta');
                equal(model.get('daerah'),'Jakarta','daerah should be Jakarta');
            });
            test('Mengganti design Model', function(){
                model.gantiDesain('HIJAU');
                equal(model.get('warna'),'HIJAU','warna should be HIJAU');
            });
            test('Membayar pajak tahunan', function(){
                model.bayarPajak('2014');
                equal(model.get('tahun'),'2014','tahun should be 2014');
            });
            // TEST COLLECTION
            var collection = new Model.Collection([
                {
                    id: '1',
                    nopol: 'BP1234AA',
                    merk: 'TOYOTA',
                    jenis: 'MOBIL',
                    tahun: '2013',
                    pemilik:'AGUS',
                    daerah:'BATAM',
                    warna:'PUTIH'
                },
                {
                    id: '2',
                    nopol: 'BP1234AC',
                    merk: 'SUZUKI',
                    jenis: 'MOBIL',
                    tahun: '2014',
                    pemilik:'DIAN',
                    daerah:'BATAM',
                    warna:'MERAH'
                }]);
            QUnit.module( "Test Collection",{});
            test('Test collection availability', function(){
                ok(collection, 'MobilCollection should be defined');
                equal(collection.length,2,'mobilCollection legth should be 2')
            });
        };
        return {run: run}
    }
);
