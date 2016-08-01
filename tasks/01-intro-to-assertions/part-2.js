/*******************************************************************************
 * Introduction to assertions
 * 
 * -- Part 2
 * Use the more chai helper functions to ensure the `triple` function works as
 * expected
 * 
 * -- Documentation
 * http://chaijs.com/api/bdd
 * 
 ******************************************************************************/

'use strict';
const expect = require('chai')
  .use(require('dirty-chai'))
  .expect;

const library = require('./library');

describe('triple', () => {

  context('when passed an integer', () => {
    it('should multiply the input by three', () => {

    });
  });

  context('when passed an array', () => {
    it('should return NaN', () => {

    });
  });

  context('when passed a string', () => {
    it('should return NaN', () => {

    });
  });

});
