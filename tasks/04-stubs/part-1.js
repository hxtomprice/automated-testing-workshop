/*******************************************************************************
 * Stubs
 * 
 * Test the `doubleRandom` function by stubbing on the `random` helper to
 * control the value it returns. You can then ensure that the function correctly
 * doubles the random number
 *
 * Remember to restore your stub after each test
 *
 * -- Documentation
 * http://sinonjs.org/docs/#stubs-api
 * https://github.com/domenic/sinon-chai
 * 
 ******************************************************************************/

'use strict';
const expect = require('chai')
  .use(require('dirty-chai'))
  .use(require('sinon-chai'))
  .expect;
const sinon = require('sinon');

const library = require('./library');


describe('doubleRandom', () => {

  beforeEach(() => {

  });

  afterEach(() => {

  });

  context('when the random function returns 3', () => {
    beforeEach(() => {

    });

    afterEach(() => {

    });

    it('should return 6', () => {

    });
  });

  context('when the random function returns 77', () => {
    beforeEach(() => {

    });

    afterEach(() => {

    });
 
    it('should return 154', () => {

    });
  });

});
