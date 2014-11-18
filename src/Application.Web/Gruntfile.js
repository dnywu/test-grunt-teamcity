module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: ["src/app/**/*.js"],
        clean: {
            build: ["build/"]
        },
        requirejs: {
            compile: {
                options: {
                    appDir: "./src",
                    mainConfigFile : "src/app/main.js",
                    baseUrl: "app",
                    removeCombined: true,
                    findNestedDependencies: true,
                    dir: "./build",
                    optimize: 'uglify',
                    optimizeCss: 'standard.keepLines',
                    skipDirOptimize: true,
                    modules: [
                        {
                            name: "main",
                            exclude: [
                                "mobil/main",
                                "motor/main",
                                "rumah/main"
                            ]
                        },
                        {
                            name: 'mobil/main',
                            exclude:[
                                'jquery',
                                'underscore',
                                'backbone',
                                'bootstrap',
                                'text'
                            ]
                        },
                        {
                            name: 'motor/main',
                            exclude:[
                                'jquery',
                                'underscore',
                                'backbone',
                                'bootstrap',
                                'text'
                            ]
                        },
                        {
                            name: 'rumah/main',
                            exclude:[
                                'jquery',
                                'underscore',
                                'backbone',
                                'bootstrap',
                                'text'
                            ]
                        },
                    ]
                }
            }
        }
    });
    grunt.file.defaultEncoding = 'utf8';
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    // grunt.loadNpmTasks('grunt-contrib-copy');
    // grunt.loadNpmTasks('grunt-mocha');
    // grunt.loadNpmTasks('grunt-processhtml');
    // grunt.loadNpmTasks('grunt-text-replace');
    grunt.registerTask(
        'default',
    [
        'clean',
        'jshint',
        'requirejs'
    ]);
};
