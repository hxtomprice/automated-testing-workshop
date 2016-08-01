'use strict';

/*
 * A basic library with helper functions
 * Each helper will callback with a result
 */
module.exports = {

 /*
  * slowDouble takes an integer and callback parameters
  * This function takes a long time, so instead of returning it will callback
  * with the result of multiplying the first parameter by 2
  */
  slowDouble(n, cb) {
    setTimeout(() => {
      return cb(n * 2);
    }, 1000);
  },


 /*
  * alwaysSuccessful takes a callback parameter
  * This function will callback with an error and a result object.
  * This will never error so the error will always be null
  * The result is also static
  */
  alwaysSuccessfulRequest(cb) {
    setTimeout(() => {
      return cb(null, {
        code: 200,
        result: 'Of course this worked'
      });
    }, 1000);
  },

};
