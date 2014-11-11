"use strict";
define(['rumah/model'],
    function(RumahModel) {
        var run = function() {
            QUnit.module( "Test Rumah",{});
            test('Model Rumah should be defined', function() {
                ok(RumahModel, 'Its should be OK');
            });
        };
        return {run: run}
    }
);
