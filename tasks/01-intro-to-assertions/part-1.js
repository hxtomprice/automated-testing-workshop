/*******************************************************************************
 * Introduction to assertions
 * 
 * -- Part 1
 * Use the chai syntax to ensure that the `double` helper works as expected
 * 
 * -- Documentation
 * http://chaijs.com/api/bdd/#method_equal
 * 
 ******************************************************************************/

'use strict';
const expect = require('chai')
  .use(require('dirty-chai'))
  .expect;

const library = require('./library');

describe('double', () => {

  it('should multiply the input by two', () => {
    
  });

});
