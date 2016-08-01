/*******************************************************************************
 * Spies
 * 
 * Test the `fourthPower` function by spying on the `square` helper and ensuring
 * that it has been called with the correct parameters.
 *
 * Remember to restore your spy after each test
 *
 * -- Documentation
 * http://sinonjs.org/docs/#spies-api
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


describe('fourthPower', () => {

  beforeEach(() => {
    // You will need to add more code in this beforeEach
    library.fourthPower(4);
  });

  afterEach(() => {

  });

  it('should call the square helper twice', () => {

  });

  it('should call the square helper with the parameter', () => {

  });

  it('should call the square helper with the square of the parameter', () => {

  });

});
