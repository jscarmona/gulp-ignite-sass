'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _yargs = require('yargs');

var _yargs2 = _interopRequireDefault(_yargs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
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
    sample: 'Description of option (true|false). Default: false'
  },

  /**
   * Task function
   * @param {Function} end
   * @param {Function} error
   * @return {Object}
   */
  fn: function fn(config, end, error) {
    if (!config) {
      return error();
    }

    config.sample = _yargs2.default.argv.sample || config.sample;

    end();
  }
};