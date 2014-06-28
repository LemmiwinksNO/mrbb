
module.exports = function(grunt) {

  grunt.initConfig({

    // Empty and remove 'dist/' directory
    clean: ["dist/"],

    // Runs the application JavaScript through JSHint with the defaults.
    jshint: {
      files: ["assets/js/**/*.js"]
    },

    less: {
      dev: {
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
          mainConfigFile: "assets/js/config.js",
          generateSourceMaps: true,
          include: ["main"],
          findNestedDependencies: true,
          out: "dist/assets/js/source.min.js",
          optimize: "uglify2",
          baseUrl: "assets/js",

          paths: {
            "almond": "../../vendor/almond/almond"
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
      }
    },

    // Copy over index.html to /dist and change it to use index.css and source.min.js
    processhtml: {
      release: {
        files: {
          "dist/index.html": ["index.html"]
        }
      }
    },

    // watch: {
    //   options: {

    //   }
    // }

  });

  // Grunt contribution tasks
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-requirejs");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-copy");

  // Third-party tasks
  grunt.loadNpmTasks("grunt-processhtml");


  grunt.registerTask("release", ["clean", "jshint", "less", "requirejs", "cssmin", "copy", "processhtml"]);

};