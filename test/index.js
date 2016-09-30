/* jshint -W030 */
'use strict';

import chai from 'chai';
import task from '../src';

const expect = chai.expect;

describe('Task', () => {
  describe('#name', () => {
    it('should be a string', () => {
      expect(task.name).to.be.a('string');
    });

    it('should be `sass`', () => {
      expect(task.name).to.equal('sass');
    });
  });

  describe('#description', () => {
    it('should be a string', () => {
      expect(task.name).to.be.a('string');
    });
  });

  describe('#config', () => {
    it('should be an object', () => {
      expect(task.config).to.be.a('object');
    });

    it('should contain a `src` property', () => {
      expect(task.config.src).to.be.a('string');
    });

    it('should contain a `dest` property', () => {
      expect(task.config.dest).to.be.a('string');
    });

    it('should contain a `options` property', () => {
      expect(task.config.options).to.be.a('object');
    });
  });

  describe('#fn', () => {
    it('should be a function', () => {
      expect(task.fn).to.be.a('function');
    });
  });
});
