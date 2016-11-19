module.exports = function(grunt) {
  grunt.initConfig({
    browserify : {
      '../dist/app.js': ['../javascripts/songs.js'] 
    },
    jshint: {
      files: ['../javascripts/**/*.js'],  //this is the folder where all JS code should be located.  
            //It looks for ANY file that ends in '.js' in the 'javascripts' folder
      options: {
        predef: ["document", "console", "$", "require", "module"],  //predefined
        esnext: true,
        globalstrict: true,
        globals: {"songList": true, "songObj": true, "dataMover": true, "key": true},  //put global variables here ex: {"Sandwich": true}
        browserify: true
      }
    },
    copy: {
      bootstrap: {
        expand: true,
        cwd: 'node_modules/bootstrap/dist',
        src: ['**'],
        dest: '../dist'
      },
      jquery: {
         expand: true,
        cwd: 'node_modules/jquery/dist',
        src: ['jquery.min.js'],
        dest: '../dist'
      }
    },
    sass: {
      dist: {
        files: {
          '../css/styles.css': '../sass/styles.scss'  
    //this creates a file called main.css FROM sass/main.scss
        }
      }
    },
    watch: {  //this performs the tasks above automatically whenever something is changed.
      javascripts: {
        files: ['../javascripts/**/*.js'],
        tasks: ['jshint', 'browserify']
      },
      sass: {
        files: ['../sass/**/*.scss'],
        tasks: ['sass']
      },
      browserify: {
        files: ['../javascripts/*.js'],
        tasks: ["browserify"]
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', [ 'jshint', 'copy', 'sass', 'browserify', 'watch']);  
//now, just typing 'grunt' will run this and the watch task will take over.
};