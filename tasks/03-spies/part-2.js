/*******************************************************************************
 * Spies
 * 
 * Test the `squareArray` function by spying on the `square` helper and ensuring
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


describe('squareArray', () => {

  beforeEach(() => {
    // You will need to add more code in this beforeEach
    library.squareArray([1,2,3,4,5]);
  });

  afterEach(() => {

  });

  it('should call the square helper five times', () => {

  });

  context('on the first call', () => {
    it('should call the square helper with the first element', () => {

    });
  });

  context('on the second call', () => {
    it('should call the square helper with the second element', () => {

    });
  });

  context('on the third call', () => {
    it('should call the square helper with the third element', () => {

    });
  });

  context('on the fourth call', () => {
    it('should call the square helper with the fourth element', () => {

    });
  });

  context('on the fith call', () => {
    it('should call the square helper with the fith element', () => {

    });
  });

});
