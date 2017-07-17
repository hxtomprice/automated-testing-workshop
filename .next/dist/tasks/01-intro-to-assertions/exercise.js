'use strict';

var expect = require('chai').use(require('dirty-chai')).expect;

var library = require('./library');

/*******************************************************************************
 * Introduction to assertions
 * 
 * -- Part 1
 * Use the chai syntax to ensure that the `double` helper works as expected
 * 
 * -- Documentation
 * http://chaijs.com/api/bdd
 * 
 ******************************************************************************/

describe('double', function () {

  it('should multiply the input by two', function () {});
});

/*******************************************************************************
 * -- Part 2
 * Use the more chai helper functions to ensure the `triple` function works as
 * expected
 ******************************************************************************/

describe('triple', function () {

  context('when passed an integer', function () {
    it('should multiply the input by three', function () {});
  });

  context('when passed an array', function () {
    it('should return NaN', function () {});
  });

  context('when passed a string', function () {
    it('should return NaN', function () {});
  });
});

/*******************************************************************************
 * -- Part 3
 * Use before and after to set the value of `library.number`. You can then use
 * this to ensure that the `getNumber` function behaves as expected
 * Remember to set the value of `library.number` back when you're done
 ******************************************************************************/

describe('getNumber', function () {

  before(function () {});

  after(function () {});

  it('should return the integer in the libraries "number" property', function () {});
});

/*******************************************************************************
 * -- Part 4
 * Use more chai functions to ensure that the `person` function returns as
 * expected
 ******************************************************************************/

describe('person', function () {

  it('should return an object using the params provided', function () {});
});

/*******************************************************************************
 * -- Part 5
 * Use more chai functions to ensure that the `insert` function returns as
 * expected
 * 
 ******************************************************************************/

describe('insert', function () {

  it('should insert the parameter into an array', function () {});
});

/*******************************************************************************
 * -- Part 6
 * Use more chai functions to ensure that the `random` function returns as
 * expected
 * You will need to use some regex to ensure the correct format
 ******************************************************************************/

describe('random', function () {

  it('should start and end with the string passed', function () {});
});