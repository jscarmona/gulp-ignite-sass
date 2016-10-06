import gulp from 'gulp';
import autoprefixer from 'gulp-autoprefixer';
import gulpIf from 'gulp-if';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import { IGNITE_UTILS } from 'gulp-ignite/utils';

export default {
  /**
   * Task name
   * @type {String}
   */
  name: 'sass',

  /**
   * Task description
   * @type {String}
   */
  description: 'Compile Sass files',

  /**
   * Task default configuration
   * @type {Object}
   */
  config: {
    src: './client/app/app.scss',
    dest: './public/css',
    sourcemap: false,
    style: 'expanded',
    options: {},
    autoprefixer: {
      browsers: ['last 2 versions'],
    },
    exitOnFail: true,
  },

  /**
   * Task help options
   * @type {Object}
   */
  help: {},

  /**
   * Task function
   * @param {Function} end
   * @param {Function} error
   * @return {Object}
   */
  fn(config, end, error) {
    const sassOptions = Object.assign({}, { outputStyle: config.style }, config.options);

    return gulp.src(config.src)
      .pipe(gulpIf(config.sourcemap, sourcemaps.init({ loadMaps: true })))
      .pipe(sass(sassOptions).on('error', (e) => error(e.message, config.exitOnFail)))
      .pipe(autoprefixer(config.autoprefixer))
      .pipe(gulpIf(config.sourcemap, sourcemaps.write('./', {
        includeContent: false,
        sourceRoot: 'source',
      })))
      .pipe(gulp.dest(config.dest))
        .on('end', () => IGNITE_UTILS.notify('Sass Complete'));
  },
};
