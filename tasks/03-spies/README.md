# Task 3 - Spies

Spies allow you to a listen to a function and get information on how it has been
used. This could be the amount of times it was called or which parameters it was
called with each time.

In this exercise you will need to write a test to ensure that the helper
function is correctly used. This means spying on the helper function and
checking what params it was called with.

Spies are attached to a function on an object as follows
```
const myObj = {
  myFunction() { return true; }
};

sinon.spy(myObj, 'myFunction');
```
There will now be a spy listening to calls of `myObj.myFunction`.

You can then use sinon chai to run assertions against this eg.
```
expect(myObj.myFunction).to.have.been.called();
expect(myObj.myFunction).to.have.been.calledWith(7);
expect(myObj.myFunction.firstCall).to.have.been.calledWith(12);
```

## References
* [Sinon spies](http://sinonjs.org/docs/#spies-api)
* [Sinon chai](https://github.com/domenic/sinon-chai)
