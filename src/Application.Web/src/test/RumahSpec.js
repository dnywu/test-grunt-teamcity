"use strict";
define(['mobil/Model','QUnit'],
    function(Model, QUnit){
        var run = function() {
            QUnit.module( "Test Rumah",{});
            test('Model Rumah should be defined', function() {
                ok(Model, 'Its should be OK');
            });
        };
        return {run: run}
    }
);
