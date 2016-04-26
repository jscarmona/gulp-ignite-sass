'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _gulpAutoprefixer = require('gulp-autoprefixer');

var _gulpAutoprefixer2 = _interopRequireDefault(_gulpAutoprefixer);

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _gulpIf = require('gulp-if');

var _gulpIf2 = _interopRequireDefault(_gulpIf);

var _gulpRubySass = require('gulp-ruby-sass');

var _gulpRubySass2 = _interopRequireDefault(_gulpRubySass);

var _gulpSourcemaps = require('gulp-sourcemaps');

var _gulpSourcemaps2 = _interopRequireDefault(_gulpSourcemaps);

var _yargs = require('yargs');

var _yargs2 = _interopRequireDefault(_yargs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  /**
   * Task name
   * @type {String}
   */
  name: 'sass',

  /**
   * Task description
   * @type {String}
   */
  description: 'Compile SASS files',

  /**
   * Task default configuration
   * @type {Object}
   */
  config: {
    src: './client/app/app.scss',
    dest: './public/css',
    options: {
      sourcemap: false,
      style: 'expanded'
    },
    autoprefixer: {
      browsers: ['last 2 versions']
    },
    min: false,
    watch: false,
    watchFiles: []
  },

  /**
   * Task help options
   * @type {Object}
   */
  help: {
    style: 'Compress and minify the output (expanded|nested|compact|compressed). Default: expanded',
    sourcemap: 'Enable or Disable sourcemaps (true|false). Default: false',
    watch: 'Watch files for changes and trigger browsersync'
  },

  /**
   * Task function
   * @param {Function} end
   * @param {Function} error
   * @return {Object}
   */
  fn: function fn(config, end, error) {
    config.options.min = _yargs2.default.argv.style || config.options.style;
    config.options.sourcemap = _yargs2.default.argv.sourcemap || config.options.sourcemap;
    config.watch = _yargs2.default.argv.watch || config.watch;

    if (config.watch) {
      _gulp2.default.watch(config.watchFiles, ['sass']);
    }

    (0, _gulpRubySass2.default)(config.src, config.options).on('error', error).pipe((0, _gulpIf2.default)(config.sourcemap, _gulpSourcemaps2.default.init({ loadMaps: true }))).pipe((0, _gulpAutoprefixer2.default)(config.autoprefixer)).pipe((0, _gulpIf2.default)(config.sourcemap, _gulpSourcemaps2.default.write('./', { includeContent: false, sourceRoot: 'source' }))).pipe(_gulp2.default.dest(config.dest)).on('end', end);
  }
};