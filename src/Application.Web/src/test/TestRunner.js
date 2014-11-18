//configuration
"use strict";
require.config({
    baseUrl: '/app',
    paths: {
        jquery: '../libs/jquery/dist/jquery.min',
        underscore: '../libs/underscore/underscore-min',
        backbone: '../libs/backbone/backbone',
        bootstrap: '../libs/bootstrap/dist/js/bootstrap.min',
        'text' : '../libs/requirejs-text/text',
        mocha : '../libs/mocha/mocha',
        QUnit: '../libs/qunit/qunit/qunit'
    },
    shim: {
        'underscore': {
            exports: "_"
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'backbone': {
            deps: ['underscore', 'jquery', 'text','bootstrap'],
            exports: 'Backbone'
        },
        mocha: {
            exports: 'mocha',
        },
        Qunit: {
            deps: ['jquery'],
            exports: 'Qunit',
        }
    }
});

// require the unit tests.
require([
    'backbone',
    'QUnit',
    '../../test/MobilSpec',
    '../../test/MotorSpec',
    '../../test/RumahSpec'
    // '../../test/mochaTest4',
], function(Backbone, QUnit, MobilSpec, MotorSpec, RumahSpec) {
        // run the tests.
        MobilSpec.run();
         MotorSpec.run();
        // RumahSpec.run();

        // start QUnit.
        QUnit.load();
        QUnit.start();
    }
);
