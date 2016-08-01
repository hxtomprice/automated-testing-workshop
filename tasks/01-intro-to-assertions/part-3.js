/*******************************************************************************
 * Introduction to assertions
 * 
 * -- Part 3
 * Use before and after to set the value of `library.number`. You can then use
 * this to ensure that the `getNumber` function behaves as expected
 * Remember to set the value of `library.number` back when you're done
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

describe('getNumber', () => {

  before(() => {

  });

  after(() => {

  });

  it('should return the integer in the libraries "number" property', () => {

  });

});
