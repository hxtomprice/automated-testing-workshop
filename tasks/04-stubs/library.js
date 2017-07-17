const $ = require('jquery')

module.exports = {

 /*
  * random returns a random number between 0-99
  * this will not need to be tested for the purposes of this exercise
  */
  random() {
    return Math.floor( Math.random() * 100 )
  },


 /*
  * doubleRandom uses the random number helper
  * it will double a random number then return it
  */
  doubleRandom() {
    return this.random() * 2
  },

 /*
  * getExchangeRates performs a request to a third party api
  * if the api returns an error we will pass this on
  * if we get no data we will callback with a generic message
  * otherwise we will callback with a subset of the result
  */
  getExchangeRates(cb) {
    $.get({
      url: 'http://api.fixer.io/latest?base=GBP',
    }, function(err, res, body) {
      if (err || !body) return cb(err || 'Something went wrong', null)
      return cb(null, body.rates)
    })
  }
}
