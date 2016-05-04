'use strict';

import autoprefixer from 'gulp-autoprefixer';
import gulp from 'gulp';
import gulpIf from 'gulp-if';
import sass from 'gulp-ruby-sass';
import sourcemaps from 'gulp-sourcemaps';
import yargs from 'yargs';

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
      style: 'expanded',
    },
    autoprefixer: {
      browsers: ['last 2 versions']
    },
    watch: false,
    watchFiles: [],
  },

  /**
   * Task help options
   * @type {Object}
   */
  help: {
    style: 'Style in which to output css (expanded|nested|compact|compressed). Default: expanded',
    sourcemap: 'Enable or Disable sourcemaps (true|false). Default: false',
    watch: 'Watch files for changes and trigger browsersync',
  },

  /**
   * Task function
   * @param {Function} end
   * @param {Function} error
   * @return {Object}
   */
  fn(config, end, error) {
    config.options.style = yargs.argv.style || config.options.style;
    config.options.sourcemap = yargs.argv.sourcemap || config.options.sourcemap;
    config.watch = yargs.argv.watch || config.watch;

    if (config.watch) {
      gulp.watch(config.watchFiles, ['sass']);
    }

    sass(config.src, config.options)
        .on('error', error)
      .pipe(gulpIf(config.options.sourcemap, sourcemaps.init({ loadMaps: true })))
      .pipe(autoprefixer(config.autoprefixer))
      .pipe(gulpIf(config.options.sourcemap, sourcemaps.write('./', { includeContent: false, sourceRoot: 'source' })))
      .pipe(gulp.dest(config.dest))
        .on('end', end);
  }
};
