// Karma configuration for unit tests

module.exports = function (config) {
    config.set({

        // base path, that will be used to resolve files and exclude
        basePath: '',


        // frameworks to use
        frameworks: ['jasmine','browserify'],


        // list of files / patterns to load in the browser
        files: [
            // 3rd-party resources
            'node_modules/jquery/dist/jquery.js',
            // App
            'app/scripts/app.js',
            'app/**/*.js',
            'app/**/*.html'
        ],


        // list of files to exclude
        exclude: [

        ],


        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_DEBUG,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['PhantomJS'],


        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,


        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false,

        preprocessors: {
            'app/**/*.html': 'ng-html2js',
            'app/**/*.js': 'browserify',
            'test/**/*.js': 'browserify'
        },

        ngHtml2JsPreprocessor: {
            stripPrefix: 'app/components/',
            moduleName: 'ng'
        },

        browserify: {
            debug: true,
            extensions: ['.js'],
            transform: [
                ['babelify']
            ]
        }
    });
};
