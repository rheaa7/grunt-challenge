module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'js/signup.min.js': ['js/signup.js'],
          'js/us-states.min.js': ['js/us-states.js']
        }
      }
    },



    jshint: {
      files: ['Gruntfile.js', 'js/signup.js', 'js/us-states.js'],

    },

    cssmin: {
      css: {
        files: {
          'css/main.min.css': ['css/main.css']
        }
      }
    }


  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');



  grunt.registerTask('default', ['jshint', 'uglify', 'cssmin']);

};