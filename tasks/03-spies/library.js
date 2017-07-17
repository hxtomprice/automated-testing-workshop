module.exports = {

 /*
  * square takes a single parameter
  * it will return the result of squaring the parameter
  * this will not need to be tested for the purposes of this exercise
  */
  square(n) {
    return n * n
  },


 /*
  * fourthPower takes a single parameter
  * it will return the fourth power of the parameter
  * this uses square helper
  */
  fourthPower(n) {
    return this.square( this.square(n) )
  },


 /*
  * squareArray takes a single array parameter
  * it will return the result of squaring each element in the array
  * this uses the square helper
  */
  squareArray(arr) {
    return arr.map( (el) => this.square(el) )
  }
}
