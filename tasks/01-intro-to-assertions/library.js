'use strict';

/*
 * A basic library with helper functions
 */
module.exports = {
  number: Math.floor( Math.random() * 10),

 /*
  * double takes a single parameter
  * it will return the result of multiplying it by two
  */
  double(n) {
    return n * 2;
  },


 /* 
  * triple will take a single parameter
  * if the parameter is a number it will return the result multiplied by 3
  * if the parameter is not a number it will return NaN
  */
  triple(n) {
    if (typeof n !== 'number') return NaN;
    return n * 3;
  },


 /*
  * getNumber takes no parameters
  * it will return the integer in the libaries number property
  */
  getNumber() {
    return this.number;

  },

 /*
  * person will take two parameters
  * it will return an object containing the name and age passed in
  */
  person(name, age) {
    return {
      name: name,
      age: age
    }
  },


 /*
  * insert will take a single parameter
  * it will insert the number passed in to a random position in the array
  */
  insert(n) {
    let arr = [0, 1, 2, 3, 4, 5];
    const index = Math.floor( Math.random() * 6 );
    arr.splice(index, 0, n);
    return arr;
  },

 /*
  * random will take a single parameter
  * it will return a random 5 character string which has been appended and prepended by
  * the parameter passed in
  * random string generated will use the character set [a-z] (lowercase)
  */
  random(s) {
    let randomString = s;
    ['','','','',''].map(() => {
      randomString += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    });
    return randomString + s;
  }

};
