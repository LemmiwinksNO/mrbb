
module.exports = function(grunt) {

  grunt.initConfig({

    // Empty and remove 'dist/' directory
    clean: ["dist/"],

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
          "assets/templates/templates.js": "assets/js/apps/**/*.hbs"
        }
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


  grunt.registerTask("release", ["clean", "jshint", "less", "requirejs", "cssmin", "copy", "processhtml"]);

};