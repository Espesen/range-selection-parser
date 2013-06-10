module.exports = function (grunt) {
  grunt.initConfig({
    watch: {
      files: ['range-selection-parser.js', 'test/*.js'],
      tasks: ['jshint', 'jasmine-node']
    },
    jshint: {
      all: ['range-selection-parser.js', 'test/*.js'],
      options: {
        curly: false,
        expr: true,
        loopfunc: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true,
        laxcomma: true,
        devel: true,
        globals: {
          _: true,
          $: true,
          require: true,
          describe: true,
          expect: true,
          it: true,
          beforeEach: true,
          afterEach: true,
          module: true,
          exports: true,
          spyOn: true
        }
      }
    },
    "jasmine-node": {
      options: {
        noStack: true
      },
      run: {
        spec: "test"
      }
    }

  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jasmine-node');

  // Default task.
  grunt.registerTask('default', 'jasmine-node');
};