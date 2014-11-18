"use strict";
define(['mobil/Model','QUnit'],
    function(Model, QUnit){
        var run = function() {
            QUnit.module( "Test Motor",{});
            test('Model Motor should be defined', function() {
                ok(Model, 'Its should be OK');
            });
        };
        return {run: run}
    }
);
