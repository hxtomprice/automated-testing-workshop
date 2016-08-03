'use strict';
const expect = require('chai')
  .use(require('dirty-chai'))
  .use(require('sinon-chai'))
  .expect;
const sinon = require('sinon');
const request = require('request');

const library = require('./library');

let sandbox = sinon.sandbox.create();

describe('doubleRandom', () => {

  beforeEach(() => {
    sandbox.stub(library, 'random');
  });

  afterEach(() => {
    sandbox.restore();
  });

  context('when the random function returns 3', () => {
    beforeEach(() => {
      library.random.returns(3);
    });

    it('should return 6', () => {
      expect(library.doubleRandom()).to.equal(6);
    });
  });

  context('when the random function returns 77', () => {
    beforeEach(() => {
      library.random.returns(77);
    });

    it('should return 154', () => {
      expect(library.doubleRandom()).to.equal(154);
    });
  });

});


describe('getExchangeRates', () => {

  beforeEach(() => {
    sandbox.stub(request, 'get');
  });

  afterEach(() => {
    sandbox.restore();
  });

  context('when the api call returns an error', () => {
    beforeEach(() => {
      request.get.yields('Error occured', null, null);
    });

    it('should call back with the error', (done) => {
      library.getExchangeRates((err, res) => {
        expect(err).to.equal('Error occured');
        expect(res).to.be.null();
        done();
      });
    });
  });

  context('when the api call does not error but returns no data', () => {
    beforeEach(() => {
      request.get.yields(null, null, null);
    });

    it('should call back with the data', (done) => {
      library.getExchangeRates((err, res) => {
        expect(err).to.equal('Something went wrong');
        expect(res).to.be.null();
        done();
      });
    });
  });

  context('when the api call successfully returns exchange rates', () => {
    beforeEach(() => {
      request.get.yields(null, {}, { rates: { EUR: 1.10 } });
    });

    it('should call back with the data', (done) => {
      library.getExchangeRates((err, res) => {
        expect(err).to.be.null()
        expect(res).to.deep.equal({ EUR: 1.10 });
        done();
      });
    });
  });

});
