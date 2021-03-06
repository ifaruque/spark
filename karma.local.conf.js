// Karma configuration

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'closure'],


    // list of files / patterns to load in the browser
    files: [
      'bower_components/jquery/index.js',
      'bower_components/jquery-simulate/jquery.simulate.js',
      'bower_components/closure-library/closure/goog/base.js',
      'dist/js/tests/**/test_*.js',
      { pattern: 'dist/js/**/*.js', included: false },
      { pattern: 'bower_components/closure-library/closure/goog/deps.js', included: false, served: false }
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    // preprocessors: {
    // },
    preprocessors: {
      'dist/js/**/test_*.js': ['closure', 'closure-iit'], // tests are preprocessed for dependencies (closure) and for iits
      'dist/js/**/*.js': ['closure', 'coverage', 'env'], // source files are preprocessed for dependencies
      'bower_components/closure-library/closure/goog/deps.js': ['closure-deps'] // external deps
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['coverage', 'notify', 'dots'],// 'saucelabs'],


    notifyReporter: {
      reportEachFailure: false,
      reportSuccess: true
    },


    coverageReporter: {
      type: 'lcov',
      dir: 'dist/coverage/'
    },


    envPreprocessor: [
      'MONGOLAB_API_KEY'
    ],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS', 'Chrome', 'Firefox', 'Safari'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true

  });
};
