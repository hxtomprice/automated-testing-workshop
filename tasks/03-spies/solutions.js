const expect = require('chai')
  .use(require('dirty-chai'))
  .use(require('sinon-chai'))
  .expect
const sinon = require('sinon')

const library = require('./library')

describe('spies', () => {

  describe('fourthPower', () => {

    beforeEach(() => {
      sinon.spy(library, 'square')
      library.fourthPower(4)
    })

    afterEach(() => {
      library.square.restore()
    })

    it('should call the square helper twice', () => {
      expect(library.square).to.have.been.calledTwice()
    })

    it('should call the square helper with the parameter', () => {
      expect(library.square).to.have.been.calledWith(4)
    })

    it('should call the square helper with the square of the parameter', () => {
      expect(library.square).to.have.been.calledWith(16)
    })

    it('should sq array', () => {
      expect(library.squareArray([1,2,3])).to.deep.equal([1,4,9])
    })

  })


  describe('squareArray', () => {

    beforeEach(() => {
      sinon.spy(library, 'square')
      library.squareArray([1, 2, 3, 4])
    })

    afterEach(() => {
      library.square.restore()
    })

    it('should call the square helper five times', () => {
      expect(library.square).to.have.callCount(4)
    })

    context('on the first call', () => {
      it('should call the square helper with the first element', () => {
        expect(library.square.firstCall).to.have.been.calledWith(1)
      })
    })

    context('on the second call', () => {
      it('should call the square helper with the second element', () => {
        expect(library.square.secondCall).to.have.been.calledWith(2)
      })
    })

    context('on the third call', () => {
      it('should call the square helper with the third element', () => {
        expect(library.square.thirdCall).to.have.been.calledWith(3)
      })
    })

    context('on the fourth call', () => {
      it('should call the square helper with the fourth element', () => {
        expect(library.square.lastCall).to.have.been.calledWith(4)
      })
    })

  })

})
