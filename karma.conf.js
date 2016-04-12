module.exports = function(config) {
  config.set({
    basePath: __dirname,
    frameworks: ['jasmine'],
    files: [
      'tests.webpack.js'
    ],
    preprocessors: {
      'tests.webpack.js': [ 'webpack' ]
    },
    reporters: ['progress'],
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['PhantomJS'],
    singleRun: true,
    webpack: {
      module: {
        loaders: [
          { test: /\.js$/, loader: 'babel' }
        ]
      }
    },
    webpackServer: {
      noInfo: true
    }
  })
}
