
module.exports = function(grunt) {

  grunt.initConfig({

    // Empty and remove 'dist/' directory
    clean: {
      release: ["dist/"],
      // bower: ["assets/js/vendor/", "assets/styles/vendor"]
      bower: ["assets/js/vendor/"]
    },

    // Runs the application JavaScript through JSHint with the defaults.
    jshint: {
      files: ["assets/js/**/*.js"]
    },

    // Compile LESS, compress it and create a sourcemap so we can
    // see in chrome dev console where the css came from.
    less: {
      main: {
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

    // I think this works. It grabs stylesheet(s) from index.html, then grabs selectors etc. from
    // my  templates. Reduced to 23.86kb instead of 2kb... (24.29 when I add to ignore list)
    // NOTE: Still not working but getting closer. It is missing selectors still. They could be in my views.
    //  THIS HELPED. But still needs work.
    uncss: {
      release: {
        files: {
          "dist/assets/styles/index.min.css": ["dist/index.html", 'assets/**/*.hbs']
        }
      },
      options: {
        ignore: ['.task', '.uncompleted', '.color-neutral', '.col-md-4', '.col-sm-6', '.focus-list', '.container', '.log-list-item', '.list-group-item', '.modal', '.fade'] 
      }
    },

    copy: {
      release: {
        files: [
          { src: ["assets/images/**"], dest: "dist/"},
          { src: ["server.js"], dest: "dist/server.js"},
          { src: ["Procfile"], dest: "dist/Procfile"},
          { src: ["package.json"], dest: "dist/package.json"},
        ]
      },
      // Copy over relevant files from bower install
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
          { src: ["vendor/bootstrap/less/**"], dest: "assets/styles/"},
          { src: ["vendor/font-awesome/less/**"], dest: "assets/styles/"},
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

    // Compile templates into templates.js
    handlebars: {
      compile: {
        options: {
          namespace: "JST",
          processName: function(filePath) {
            return filePath.replace(/^assets\/js\//, '').replace(/templates\//, '').replace(/\.hbs$/, '');
          },
          amd: ['handlebars']
        },
        files: {
          "assets/js/templates.js": "assets/js/**/*.hbs"
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
        tasks: ["less:main"]
      },
      templates: {
        files: ["assets/js/**/*.hbs"],
        tasks: ["handlebars:compile"]
      }
    },


    shell: {
      bower: {
        command: 'bower update'
      },
      heroku: {
        command: 'git subtree push -f --prefix dist heroku master'
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
  grunt.loadNpmTasks("grunt-uncss");
  grunt.loadNpmTasks("grunt-processhtml");
  grunt.loadNpmTasks('grunt-shell');

  // Custom tasks
  grunt.registerTask("default", ["jshint", "handlebars", "less"]);
  grunt.registerTask("release", ["clean:release", "jshint", "handlebars", "less", "requirejs", "cssmin", "copy:release", "processhtml"]);

  // Heroku task called by heroku server when we deploy.
  // https://github.com/mbuchetics/heroku-buildpack-nodejs-grunt
  // grunt.registerTask("heroku:production", ["release"]);

  // Bower task. It should clean js/vendor and styles/vendor; shell:bower update; copy:bower
  // NOTE: This first empties js vendor and styles vendor directories.
  grunt.registerTask("bower", ["clean:bower", "shell:bower", "copy:bower"]);

  // Heroku deploy task
  grunt.registerTask("heroku", ["shell:heroku"]);
};