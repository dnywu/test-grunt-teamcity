"use strict";
define(['motor/model'],
    function(MotorModel) {
        var run = function() {
            QUnit.module( "Test Motor",{});
            test('Model Motor should be defined', function() {
                ok(MotorModel, 'Its should be OK');
            });
        };
        return {run: run}
    }
);
