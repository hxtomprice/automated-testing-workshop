const expect = require('chai')
  .use(require('dirty-chai'))
  .expect

const library = require('./library')


/*******************************************************************************
 * Asynchronous code
 * 
 * Write a test for the two functions in the library for this exercise.
 * Both of these will give the result using a callback instead of returning it.
 * 
 * Make sure to use the done callback so that mocha knows to wait until the test
 * is complete.
 * 
 * -- Documentation
 * https://mochajs.org/#asynchronous-code
 * 
 ******************************************************************************/

describe('asynchronous code', () => {

  describe('slowDouble', () => {

    it('should callback with the parameter multiplied by 2', (done) => {

    })

  })


  describe('alwaysSuccessfulRequest', () => {

    it('should callback with no error and a result object', (done) => {

    })

  })

})
