import autoprefixer from 'gulp-autoprefixer';
import gulp from 'gulp';
import gulpIf from 'gulp-if';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import path from 'path';
import yargs from 'yargs';
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
      browsers: ['last 2 versions'],
    },
    exitOnFail: true,
    watch: false,
    watchFiles: [],
  },

  /**
   * Task help options
   * @type {Object}
   */
  help: {
    'min, -m': 'Minify the output',
    'sourcemap, -s': 'Enable or Disable sourcemaps',
    'watch, -w': 'Watch files for changes and trigger browsersync',
  },

  /**
   * Task function
   * @param {Function} end
   * @param {Function} error
   * @return {Object}
   */
  fn(config, end, error) {
    const style = (yargs.argv.min || yargs.argv.m) ? 'compressed' : config.options.style;
    const sourcemap = yargs.argv.sourcemap || yargs.argv.s || config.options.sourcemap;

    if (yargs.argv.watch || yargs.argv.w || config.watch) {
      gulp.watch(config.watchFiles, (file) => {
        compile()
          .on('end', () => {
            IGNITE_UTILS.log(`Sass complete => ${path.basename(file.path)}`);
            IGNITE_UTILS.notify('Sass Complete');
          });
      });
    }

    compile().on('end', end);

    function compile() {
      return gulp.src(config.src)
        .pipe(gulpIf(sourcemap, sourcemaps.init({ loadMaps: true })))
        .pipe(sass({ outputStyle: style }).on('error', (e) => error(e.message, config.exitOnFail)))
        .pipe(autoprefixer(config.autoprefixer))
        .pipe(gulpIf(sourcemap, sourcemaps.write('./', {
          includeContent: false,
          sourceRoot: 'source',
        })))
        .pipe(gulp.dest(config.dest));
    }
  },
};
