const expect = require('chai')
  .use(require('dirty-chai'))
  .expect

const library = require('./library')


describe('intro to assertions', () => {


  describe('double', () => {
    it('should multiply the input by two', () => {
      expect( library.double(5) ).to.equal( 10 )
    })

  })


  describe('triple', () => {

    context('when passed an integer', () => {
      it('should multiply the input by three', () => {
        expect( library.triple(3) ).to.equal( 9 )
      })
    })

    context('when passed an array', () => {
      it('should return NaN', () => {
        expect( library.triple([]) ).to.be.NaN()
      })
    })

    context('when passed a string', () => {
      it('should return NaN', () => {
        expect( 'some string' ).to.be.NaN()
      })
    })

  })


  describe('getNumber', () => {
    let originalNumber

    before(() => {
      originalNumber = library.number
      library.number = 101
    })

    after(() => {
      library.number = originalNumber
    })

    it('should return the number stored in the library', () => {
      expect( library.getNumber() ).to.equal(101)
    })

  })


  describe('person', () => {

    it('should return an object using the params provided', () => {
      expect( library.person('Tom', 24) ).to.deep.equal({
        name: 'Tom',
        age: 24
      })
    })

  })


  describe('insert', () => {

    it('should insert the parameter into an array', () => {
      expect( library.insert(12345) ).to.contain(12345)
    })

  })


  describe('random', () => {
    
    it('should start and end with the string passed', () => {
      expect( library.random('foo') ).to.match( /^foo\w{5}foo$/ )
    })
  
  })

})
