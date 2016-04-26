'use strict';

import yargs from 'yargs';

export default {
  /**
   * Task name
   * @type {String}
   */
  name: 'name',

  /**
   * Task description
   * @type {String}
   */
  description: 'Task description',

  /**
   * Task default configuration
   * @type {Object}
   */
  config: {},

  /**
   * Task help options
   * @type {Object}
   */
  help: {
    sample: 'Description of option (true|false). Default: false',
  },

  /**
   * Task function
   * @param {Function} end
   * @param {Function} error
   * @return {Object}
   */
  fn(config, end, error) {
    if (!config) {
      return error();
    }

    config.sample = yargs.argv.sample || config.sample;

    end();
  }
};
