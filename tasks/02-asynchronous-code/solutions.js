const expect = require('chai')
  .use(require('dirty-chai'))
  .expect;

const library = require('./library');


describe('asynchronous code', () => {

  describe('slowDouble', () => {

    it('should callback with the parameter multiplied by 2', function(done) {

      library.slowDouble(5, (res) =>{
        expect(res).to.equal(10);
        done();
      });

    });

  });


  describe('alwaysSuccessfulRequest', () => {

    it('should callback with no error and a result object', (done) => {

      library.alwaysSuccessfulRequest((err, res) => {
        expect(err).to.be.null();
        expect(res).to.deep.equal({
          code: 200,
          result: 'Of course this worked'
        });

        done();
      });

    });

  });


});
