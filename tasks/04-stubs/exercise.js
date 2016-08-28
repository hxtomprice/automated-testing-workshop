'use strict';
const expect = require('chai')
  .use(require('dirty-chai'))
  .use(require('sinon-chai'))
  .expect;
const sinon = require('sinon');

const library = require('./library');
const $ = require('jquery');


/*******************************************************************************
 * Stubs
 * 
 * -- Part 1
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


/*******************************************************************************
 * -- Part 2
 * Test the `getExchangeRates` function by stubbing on the `request` module.
 * You should test that the function behaves correctly when the api returns
 * an error and when it returns data
 *
 * Remember to restore your stub after each test
 ******************************************************************************/

describe('getExchangeRates', () => {

  beforeEach(() => {

  });

  afterEach(() => {

  });

  context('when the api call returns an error', () => {
    beforeEach(() => {

    });

    afterEach(() => {

    });

    it('should call back with the error', () => {

    });
  });

  context('when the api call does not error but returns no data', () => {
    beforeEach(() => {

    });

    afterEach(() => {

    });
 
    it('should call back with the data', () => {

    });
  });


  context('when the api call successfully returns exchange rates', () => {
    beforeEach(() => {

    });

    afterEach(() => {

    });
 
    it('should call back with the data', () => {

    });
  });

});
