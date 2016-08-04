# Task 4 - Stubs

Stubs are used when you want to prevent a function from running. You can use
them to manipulate the value a function returns.

In the first part of this exercise you will need to test the `doubleRandom`
function. This uses a random number helper which will need to be stubbed out
so that you can assert that it has correctly doubled the result.

In the second part of the exercise you will need to stub out the `request`
module. This is an asynchronous function so instead of making it `return` a
value you will need to change what it `yields`.

When testing a function which returns a value you can use `returns`
```
cont myObj = {
  myFunction() { return true; }
};

sinon.stub(myObj, 'myFunction').returns(false);
```
When `myObj.myFunction` is called in this test it will now return false;

For testing a function which calls back instead you can change which params
are passed to the callback
```
const myObj = {
  myFucntion(cb) { return cb(true, false) }
};
sinon.stub(myObj, 'myFucntion').yields(false, true);
```
When `myObj.myFucntion` is called it will now callback with the params switched

## References
* [Sinon stubs](http://sinonjs.org/docs/#stubs-api)
* [Sinon chai](https://github.com/domenic/sinon-chai)
