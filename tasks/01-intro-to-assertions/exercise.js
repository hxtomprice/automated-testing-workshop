const expect = require('chai')
  .use(require('dirty-chai'))
  .expect

const library = require('./library')

/*******************************************************************************
 * Introduction to assertions
 * 
 * -- Part 1 (Example)
 * Use the chai syntax to ensure that the `double` helper works as expected
 * 
 * -- Documentation
 * http://chaijs.com/api/bdd
 * 
 ******************************************************************************/

describe('double', () => {

  it('should multiply the input by two', () => {
    const input = 6
    const result = library.double(input) // Call the helper from the library
    expect(result).to.equal(12) // Run assertion on the result
  })

})


/*******************************************************************************
 * -- Part 2
 * Use the more chai helper functions to ensure the `triple` function works as
 * expected
 ******************************************************************************/

describe('triple', () => {

  context('when passed an integer', () => {
    it('should multiply the input by three', () => {

    })
  })

  context('when passed an array', () => {
    it('should return NaN', () => {

    })
  })

  context('when passed a string', () => {
    it('should return NaN', () => {

    })
  })

})


/*******************************************************************************
 * -- Part 3
 * Use before and after to set the value of `library.number`. You can then use
 * this to ensure that the `getNumber` function behaves as expected
 * Remember to set the value of `library.number` back when you're done
 ******************************************************************************/

describe('getNumber', () => {

  before(() => {

  })

  after(() => {

  })

  it('should return the integer in the libraries "number" property', () => {

  })

})

/*******************************************************************************
 * -- Part 4
 * Use more chai functions to ensure that the `person` function returns as
 * expected
 ******************************************************************************/

describe('person', () => {

  it('should return an object using the params provided', () => {

  })

})


/*******************************************************************************
 * -- Part 5
 * Use more chai functions to ensure that the `insert` function returns as
 * expected
 * 
 ******************************************************************************/

describe('insert', () => {

  it('should insert the parameter into an array', () => {

  })

})


/*******************************************************************************
 * -- Part 6
 * Use more chai functions to ensure that the `random` function returns as
 * expected
 * You will need to use some regex to ensure the correct format
 ******************************************************************************/

describe('random', () => {
  
  it('should start and end with the string passed', () => {

  })

})
