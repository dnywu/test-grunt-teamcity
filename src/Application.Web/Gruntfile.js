// var tgl = new Date();
// var tgljam = String(tgl.getFullYear()).concat('-',String(tgl.getMonth() + 1), '-', String(tgl.getDate()),'_',tgl.getHours(), '-', tgl.getMinutes(), '-', tgl.getSeconds());
module.exports = function(grunt) {
  "use strict";

  grunt.initConfig({
    // Wipe out previous builds and test reporting.
    clean: {
		removeAll:["dist/"],
		removeIncluded: ["dist/app/", "dist/libs/", "dist/styles.css", "dist/styles.min.css"]
	},

    // Run your source code through JSHint's defaults.
    jshint: ["app/**/*.js"],

    // This task uses James Burke's excellent r.js AMD builder to take all
    // modules and concatenate them into a single file.
    requirejs: {
      release: {
        options: {
          mainConfigFile: "app/app.js",
          //generateSourceMaps: true,
		  generateSourceMaps: false,
          // out: "dist/source_" + tgljam + ".min.js",
          out: "dist/index.min.js",

          optimize: "uglify2",

          // Since we bootstrap with nested `require` calls this option allows
          // R.js to find them.
          findNestedDependencies: true,

          // Include a minimal AMD implementation shim.
          name: "almond",

          // Setting the base url to the distribution directory allows the
          // Uglify minification process to correctly map paths for Source
          // Maps.
          baseUrl: "dist/app",

          // Wrap everything in an IIFE.
          wrap: true,

          // Do not preserve any license comments when working with source
          // maps.  These options are incompatible.
          preserveLicenseComments: false,
        }
      }
    },

    // Minify the distribution CSS.
    // cssmin: {
    //   release: {
    //     files: {
    //       "css/styles.css": ["dist/style.min.css"]
    //     }
    //   }
    // },
	rename: {
	  release:{
	    files:[
		  {
            // src:["dist/styles.min.css"], dest: "dist/styles_" + tgljam + ".min.css"
		    src:["dist/styles.min.css"], dest: "dist/styles.min.css"
		  }
		]
	  }
	},

    // Move vendor and app logic during a build.
    copy: {
      release: {
        files: [
          { src: ["app/**"], dest: "dist/" },
          { src: ["app/styles/bootstrap.min.css"], dest: "dist/styles/bootstrap.min.css"},
          { src: ["vendor/bower/backbone/*.js",
            "vendor/bower/bootstrap/dist/css/**",
            "vendor/bower/bootstrap/dist/fonts/**",
            "vendor/bower/bootstrap/dist/js/*.js",
            "vendor/bower/jquery/dist/**",
            "vendor/bower/requirejs/*.js",
            "vendor/bower/text/*.js",
            "vendor/bower/underscore/*.js",
            ], dest: "dist/" },
		  { src: "libs/**", dest: "dist/" }
        ]
      }
    },
    qunit: {
        all: {
            options: {
            timeout: 100000,
            urls: [
                'http://boiler.dev/test/index.html'
                ]
            }
        }
    },
    mocha: {
      test: {
        src: ['test/test.html'],
      },
    },
    // compress: {
    //   release: {
    //     files: ["dist/index.min.js"]
    //   }
    // }
    compress: {
      main: {
        files: [
          {src: ['app/index.min.js'], dest: 'dist/', filter: 'isFile'}, // includes files in path
        ]
      }
    }
  });

  // Grunt contribution tasks.
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-qunit");
  // grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-compress");
  grunt.loadNpmTasks('grunt-mocha');
  // grunt.loadNpmTasks('grunt-contrib-watch');

  // Third-party tasks.
  grunt.loadNpmTasks("grunt-processhtml");
  // grunt.loadNpmTasks("grunt-rename");
  // grunt.loadNpmTasks("grunt-text-replace");

  // Grunt BBB tasks.
  grunt.loadNpmTasks("grunt-bbb-requirejs");

  // When running the default Grunt command, just lint the code.
  grunt.registerTask("default", [
    "clean:removeAll",
    "jshint",
    "copy",
    "requirejs",
    // "cssmin",
    "compress",
    "mocha",
    // "qunit",
	// "rename",
	"clean:removeIncluded",
    // "replace:indexProd"
  ]);

    grunt.event.on('qunit.begin', function() {
        grunt.log.ok("Qunit beginning");
    });
    grunt.event.on('qunit.moduleStart', function(name) {
        grunt.log.ok("Qunit module start: " + name);
    });
    grunt.event.on('qunit.testStart', function(name) {
        grunt.log.ok('qunit test starting: ' + name);
    });
    grunt.event.on('qunit.testDone', function(name) {
        grunt.log.ok('qunit test done: ' + name);
    });
    grunt.event.on('qunit.moduleDone', function(name) {
        grunt.log.ok("Qunit module done: " + name);
    });
    grunt.event.on('qunit.done', function() {
        grunt.log.ok("Qunit done");
    });

    grunt.event.on('qunit.error.onError', function(message, trace) {
        grunt.log.error('qunit error: ' + message);
    });
};
