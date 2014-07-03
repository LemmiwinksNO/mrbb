
module.exports = function(grunt) {

  grunt.initConfig({

    // Empty and remove 'dist/' directory
    clean: {
      release: ["dist/"],
      bower: ["assets/js/vendor/", "assets/styles/vendor"]
    },

    // Runs the application JavaScript through JSHint with the defaults.
    jshint: {
      files: ["assets/js/**/*.js"]
    },

    // Compile LESS, compress it and create a sourcemap so we can
    // see in chrome dev console where the css came from.
    less: {
      dev: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2,
          sourceMap: true,
          sourceMapFilename: "assets/styles/main.css.map",
          sourceMapBasepath: "assets/styles",
        },
        files: {
          "assets/styles/index.css": "assets/styles/index.less"
        }
      }
    },

    // This task uses James Burke's excellent r.js AMD builder to take all
    // modules and concatenate them into a single file.
    requirejs: {
      release: {
        options: {
          mainConfigFile: "assets/js/main.js",
          generateSourceMaps: true,
          include: ["main"],
          findNestedDependencies: true,
          out: "dist/assets/js/source.min.js",
          optimize: "uglify2",
          baseUrl: "assets/js",

          paths: {
            // "almond": "../../vendor/almond/almond"
            "almond": "vendor/almond"
          },

          // Include a minimal AMD implementation shim.
          name: "almond",

          // Wrap everything in an IIFE.
          wrap: true,

          // Do not preserve any license comments when working with source maps.
          preserveLicenseComments: false
        }
      }
    },

    cssmin: {
      release: {
        files: {
          "dist/assets/styles/index.min.css": ["assets/styles/index.css"]
        }
      }
    },

    copy: {
      release: {
        files: [
          { src: ["assets/images/**"], dest: "dist/"}
        ]
      },
      bower: {
        files: [
          { src: ["vendor/almond/almond.js"], dest: "assets/js/vendor/almond.js"},
          { src: ["vendor/jquery/dist/jquery.js"], dest: "assets/js/vendor/jquery.js"},
          { src: ["vendor/underscore/underscore.js"], dest: "assets/js/vendor/underscore.js"},
          { src: ["vendor/backbone/backbone.js"], dest: "assets/js/vendor/backbone.js"},
          { src: ["vendor/marionette/lib/backbone.marionette.js"], dest: "assets/js/vendor/backbone.marionette.js"},
          { src: ["vendor/bootstrap/dist/js/bootstrap.js"], dest: "assets/js/vendor/bootstrap.js"},
          { src: ["vendor/handlebars/handlebars.runtime.js"], dest: "assets/js/vendor/handlebars.runtime.js"},
          { src: ["vendor/backbone.syphon/lib/backbone.syphon.js"], dest: "assets/js/vendor/backbone.syphon.js"},
          { src: ["vendor/backbone.wreqr/lib/backbone.wreqr.js"], dest: "assets/js/vendor/backbone.wreqr.js"},
          { src: ["vendor/backbone.localstorage/backbone.localStorage.js"], dest: "assets/js/vendor/backbone.localStorage.js"},
          { src: ["vendor/bootstrap/less/bootstrap.less"], dest: "assets/styles/vendor/bootstrap.less"},
          { src: ["vendor/font-awesome/less/font-awesome.less"], dest: "assets/styles/vendor/font-awesome.less"},
        ]
      }
    },

    // Copy over index.html to /dist and change it to use index.css and source.min.js
    processhtml: {
      release: {
        files: {
          "index-prod.html": ["index-dev.html"]
        }
      }
    },

    // Compile templates into templates.js
    handlebars: {
      compile: {
        options: {
          namespace: "JST",
          processName: function(filePath) {
            return filePath.replace(/^assets\/js\/apps\//, '').replace(/templates\//, '').replace(/\.hbs$/, '');
          }
        },
        files: {
          "assets/js/templates.js": "assets/js/apps/**/*.hbs"
        }
      }
    },

    watch: {
      options: {
        livereload: true
      },
      scripts: {
        files: ["assets/js/**/*.js"],
        tasks: ["jshint"]
      },
      less: {
        files: ["assets/styles/**/*.less"],
        tasks: ["less:dev"]
      },
      templates: {
        files: ["assets/js/apps/**/*.hbs", "assets/templates/**/*.hbs"],
        tasks: ["handlebars:compile"]
      }
    },


    shell: {
      bower: {
        command: 'bower update'
      }
    }

  });

  // Grunt contribution tasks
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-requirejs");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-handlebars");

  // Third-party tasks
  grunt.loadNpmTasks("grunt-processhtml");
  grunt.loadNpmTasks('grunt-shell');

  // Custom tasks
  grunt.registerTask("release", ["clean:release", "jshint", "less", "requirejs", "cssmin", "copy:release", "processhtml"]);

  // Heroku task, called when we git push heroku
  // https://github.com/mbuchetics/heroku-buildpack-nodejs-grunt
  grunt.registerTask("heroku:production", ["clean:release", "jshint", "less", "requirejs", "cssmin", "copy:release", "processhtml"]);

  // Bower task. It should clean js/vendor and styles/vendor; shell:bower update; copy:bower
  grunt.registerTask("bower", ["clean:bower", "shell:bower", "copy:bower"]);
};